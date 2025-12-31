
import React, { useState, useMemo, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, ReferenceLine, AreaChart, Area, ComposedChart, Line } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

interface LoanData {
  amount: number;
  rate: number;
  tenure: number;
  name?: string;
}

interface RefiOption {
  rate: number;
  tenureYears: number;
  closingCosts: number;
  name: string;
}

interface RefinanceData {
  homeValue: number;
  currentBalance: number;
  currentRate: number;
  remainingMonths: number;
  optionA: RefiOption;
  optionB: RefiOption;
}

interface AmortizationRow {
  period: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

interface SavedComparison {
  id: string;
  name: string;
  loan1: LoanData;
  loan2: LoanData;
  timestamp: number;
}

const PRESET_LOANS: Record<string, LoanData> = {
  standard: { amount: 350000, rate: 6.8, tenure: 30, name: 'Standard 30-Year' },
  aggressive: { amount: 350000, rate: 6.2, tenure: 15, name: 'Aggressive 15-Year' },
  investor: { amount: 350000, rate: 7.5, tenure: 30, name: 'Investor Portfolio' },
  fha: { amount: 350000, rate: 6.5, tenure: 30, name: 'FHA Starter' },
};

const STORAGE_KEY = 'finvault_loan_scenarios_v2';

const LoanComparison: React.FC = () => {
  const [mode, setMode] = useState<'compare' | 'refinance' | 'prequal'>('compare');
  
  // Financial Profile (Global)
  const [monthlyIncome, setMonthlyIncome] = useState<number>(6500);
  const [otherMonthlyDebts, setOtherMonthlyDebts] = useState<number>(450);
  
  // Standard Compare State
  const [loan1, setLoan1] = useState<LoanData>(PRESET_LOANS.standard);
  const [loan2, setLoan2] = useState<LoanData>(PRESET_LOANS.aggressive);
  
  // Saved Scenarios State
  const [savedScenarios, setSavedScenarios] = useState<SavedComparison[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const [newScenarioName, setNewScenarioName] = useState('');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success'>('idle');

  // Refinance State
  const [refinance, setRefinance] = useState<RefinanceData>({
    homeValue: 500000,
    currentBalance: 285000,
    currentRate: 7.5,
    remainingMonths: 240,
    optionA: { name: 'Refi Option A', rate: 6.1, tenureYears: 20, closingCosts: 4500 },
    optionB: { name: 'Refi Option B', rate: 5.8, tenureYears: 15, closingCosts: 6000 }
  });

  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);
  const [activeSchedule, setActiveSchedule] = useState<'none' | 'A' | 'B'>('none');

  // Sync with LocalStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedScenarios));
  }, [savedScenarios]);

  const calculateEMI = (principal: number, annualRate: number, months: number) => {
    const r = annualRate / 12 / 100;
    if (r === 0) return principal / months;
    return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  };

  const calculateAmortization = (principal: number, rate: number, months: number) => {
    const r = rate / 12 / 100;
    const emi = calculateEMI(principal, rate, months);
    let balance = principal;
    const schedule: AmortizationRow[] = [];
    for (let i = 1; i <= months; i++) {
      const interest = balance * r;
      const principalPaid = emi - interest;
      balance = Math.max(0, balance - principalPaid);
      schedule.push({ period: i, payment: emi, principal: principalPaid, interest, balance });
    }
    return schedule;
  };

  const getDTIRisk = (dti: number) => {
    if (dti <= 36) return { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', label: 'Healthy', bar: '#10b981' };
    if (dti <= 43) return { text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100', label: 'Moderate', bar: '#f59e0b' };
    return { text: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100', label: 'High Risk', bar: '#ef4444' };
  };

  const stats1 = useMemo(() => {
    const months = loan1.tenure * 12;
    const emi = calculateEMI(loan1.amount, loan1.rate, months);
    const totalAmount = emi * months;
    return {
      emi,
      totalInterest: totalAmount - loan1.amount,
      totalAmount,
      dti: monthlyIncome > 0 ? ((emi + otherMonthlyDebts) / monthlyIncome) * 100 : 0,
      schedule: calculateAmortization(loan1.amount, loan1.rate, months)
    };
  }, [loan1, monthlyIncome, otherMonthlyDebts]);

  const stats2 = useMemo(() => {
    const months = loan2.tenure * 12;
    const emi = calculateEMI(loan2.amount, loan2.rate, months);
    const totalAmount = emi * months;
    return {
      emi,
      totalInterest: totalAmount - loan2.amount,
      totalAmount,
      dti: monthlyIncome > 0 ? ((emi + otherMonthlyDebts) / monthlyIncome) * 100 : 0,
      schedule: calculateAmortization(loan2.amount, loan2.rate, months)
    };
  }, [loan2, monthlyIncome, otherMonthlyDebts]);

  const refStats = useMemo(() => {
    const currentEMI = calculateEMI(refinance.currentBalance, refinance.currentRate, refinance.remainingMonths);
    const equity = Math.max(0, refinance.homeValue - refinance.currentBalance);
    const ltv = (refinance.currentBalance / refinance.homeValue) * 100;

    const processOption = (opt: RefiOption) => {
      const months = opt.tenureYears * 12;
      const emi = calculateEMI(refinance.currentBalance, opt.rate, months);
      const totalCost = (emi * months) + opt.closingCosts;
      const savings = (currentEMI * refinance.remainingMonths) - totalCost;
      const monthlySavings = currentEMI - emi;
      const breakEven = monthlySavings > 0 ? opt.closingCosts / monthlySavings : Infinity;
      const dti = monthlyIncome > 0 ? ((emi + otherMonthlyDebts) / monthlyIncome) * 100 : 0;
      return { emi, totalCost, savings, monthlySavings, breakEven, dti, schedule: calculateAmortization(refinance.currentBalance, opt.rate, months) };
    };

    const optA = processOption(refinance.optionA);
    const optB = processOption(refinance.optionB);
    const currentDti = monthlyIncome > 0 ? ((currentEMI + otherMonthlyDebts) / monthlyIncome) * 100 : 0;

    const curveData = [];
    let cumulativeCurrent = 0;
    let cumulativeA = refinance.optionA.closingCosts;
    let cumulativeB = refinance.optionB.closingCosts;
    const maxCurveMonths = 60;

    for (let m = 0; m <= maxCurveMonths; m++) {
      cumulativeCurrent += (m <= refinance.remainingMonths ? currentEMI : 0);
      cumulativeA += (m <= refinance.optionA.tenureYears * 12 ? optA.emi : 0);
      cumulativeB += (m <= refinance.optionB.tenureYears * 12 ? optB.emi : 0);
      curveData.push({ month: m, current: Math.round(cumulativeCurrent), optA: Math.round(cumulativeA), optB: Math.round(cumulativeB) });
    }

    return { currentEMI, currentDti, equity, ltv, optA, optB, curveData };
  }, [refinance, monthlyIncome, otherMonthlyDebts]);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    let contextData;
    let contextStr;
    if (mode === 'refinance') {
      contextData = {
        equity: refStats.equity,
        currentDti: refStats.currentDti.toFixed(1) + '%',
        optA: { savings: refStats.optA.savings.toFixed(0), dti: refStats.optA.dti.toFixed(1) + '%' },
        optB: { savings: refStats.optB.savings.toFixed(0), dti: refStats.optB.dti.toFixed(1) + '%' }
      };
      contextStr = 'Refinance Dual-Offer Optimization';
    } else if (mode === 'compare') {
      contextData = { loan1: stats1.dti.toFixed(1), loan2: stats2.dti.toFixed(1) };
      contextStr = 'Loan Comparison DTI Logic';
    } else {
      contextData = { income: monthlyIncome, debts: otherMonthlyDebts };
      contextStr = 'Borrowing Capacity';
    }
    const msg = await getFinancialAdvice(contextData, contextStr);
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [loan1, loan2, monthlyIncome, otherMonthlyDebts, refinance, mode]);

  // Scenario Handlers
  const handleSaveScenario = () => {
    if (!newScenarioName.trim()) return;
    const scenario: SavedComparison = {
      id: Date.now().toString(),
      name: newScenarioName.trim(),
      loan1,
      loan2,
      timestamp: Date.now()
    };
    setSavedScenarios([scenario, ...savedScenarios]);
    setNewScenarioName('');
    setSaveStatus('success');
    setTimeout(() => setSaveStatus('idle'), 2000);
  };

  const handleLoadScenario = (scenario: SavedComparison) => {
    setLoan1(scenario.loan1);
    setLoan2(scenario.loan2);
    setActiveSchedule('none');
  };

  const handleDeleteScenario = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this comparison scenario?")) {
      setSavedScenarios(savedScenarios.filter(s => s.id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      {/* Header & Global Profile */}
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <h2 className="text-3xl font-black text-slate-900">Loan <span className="text-indigo-600">Intelligence</span></h2>
            <div className="flex bg-slate-100 p-1.5 rounded-2xl mt-4 w-fit border border-slate-200 shadow-inner">
              <button onClick={() => setMode('compare')} className={`px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all ${mode === 'compare' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400'}`}>⚖️ COMPARE</button>
              <button onClick={() => setMode('refinance')} className={`px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all ${mode === 'refinance' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400'}`}>🔄 REFINANCE</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 w-full lg:w-auto">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 group hover:border-indigo-200 transition-colors">
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Monthly Income</label>
              <input type="number" value={monthlyIncome} onChange={(e) => setMonthlyIncome(Number(e.target.value))} className="w-full bg-transparent border-none focus:ring-0 font-black text-slate-700 text-xl" />
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 group hover:border-indigo-200 transition-colors">
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Other Monthly Debts</label>
              <input type="number" value={otherMonthlyDebts} onChange={(e) => setOtherMonthlyDebts(Number(e.target.value))} className="w-full bg-transparent border-none focus:ring-0 font-black text-slate-700 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {mode === 'refinance' ? (
        <div className="grid lg:grid-cols-12 gap-8 animate-in slide-in-from-bottom-4 duration-700">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest border-b pb-4">Current Liability</h3>
              <div className="space-y-4">
                <input type="number" value={refinance.currentBalance} onChange={(e) => setRefinance({...refinance, currentBalance: Number(e.target.value)})} placeholder="Balance" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-bold" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="number" step="0.1" value={refinance.currentRate} onChange={(e) => setRefinance({...refinance, currentRate: Number(e.target.value)})} placeholder="Rate %" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-bold" />
                  <input type="number" value={refinance.remainingMonths} onChange={(e) => setRefinance({...refinance, remainingMonths: Number(e.target.value)})} placeholder="Mos Left" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-bold" />
                </div>
              </div>

              <h3 className="text-sm font-black text-indigo-600 uppercase tracking-widest border-b pb-4 mt-8">Refi Option A</h3>
              <div className="space-y-4">
                <input type="number" step="0.1" value={refinance.optionA.rate} onChange={(e) => setRefinance({...refinance, optionA: {...refinance.optionA, rate: Number(e.target.value)}})} placeholder="Rate %" className="w-full p-4 bg-indigo-50/50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-bold" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="number" value={refinance.optionA.tenureYears} onChange={(e) => setRefinance({...refinance, optionA: {...refinance.optionA, tenureYears: Number(e.target.value)}})} placeholder="Years" className="w-full p-4 bg-indigo-50/50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-bold" />
                  <input type="number" value={refinance.optionA.closingCosts} onChange={(e) => setRefinance({...refinance, optionA: {...refinance.optionA, closingCosts: Number(e.target.value)}})} placeholder="Costs $" className="w-full p-4 bg-indigo-50/50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-bold" />
                </div>
              </div>

              <h3 className="text-sm font-black text-emerald-600 uppercase tracking-widest border-b pb-4 mt-8">Refi Option B</h3>
              <div className="space-y-4">
                <input type="number" step="0.1" value={refinance.optionB.rate} onChange={(e) => setRefinance({...refinance, optionB: {...refinance.optionB, rate: Number(e.target.value)}})} placeholder="Rate %" className="w-full p-4 bg-emerald-50/50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 font-bold" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="number" value={refinance.optionB.tenureYears} onChange={(e) => setRefinance({...refinance, optionB: {...refinance.optionB, tenureYears: Number(e.target.value)}})} placeholder="Years" className="w-full p-4 bg-emerald-50/50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 font-bold" />
                  <input type="number" value={refinance.optionB.closingCosts} onChange={(e) => setRefinance({...refinance, optionB: {...refinance.optionB, closingCosts: Number(e.target.value)}})} placeholder="Costs $" className="w-full p-4 bg-emerald-50/50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 font-bold" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[refStats.optA, refStats.optB].map((opt, idx) => {
                const char = idx === 0 ? 'A' : 'B';
                const colorClass = idx === 0 ? 'text-indigo-600' : 'text-emerald-600';
                return (
                  <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${colorClass}`}>Option {char} Savings</span>
                        <span className={`text-[8px] font-black px-2 py-1 rounded bg-slate-50 ${getDTIRisk(opt.dti).text}`}>DTI: {opt.dti.toFixed(1)}%</span>
                      </div>
                      <h4 className="text-4xl font-black text-slate-900">${Math.round(opt.savings).toLocaleString()}</h4>
                      <div className="mt-4 pt-4 border-t border-slate-50 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-[8px] font-black text-slate-400 uppercase">Monthly Savings</p>
                          <p className={`text-lg font-black ${opt.monthlySavings > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>${Math.round(opt.monthlySavings)}</p>
                        </div>
                        <div>
                          <p className="text-[8px] font-black text-slate-400 uppercase">Break-Even</p>
                          <p className="text-lg font-black text-slate-800">{opt.breakEven === Infinity ? '∞' : Math.ceil(opt.breakEven)} <span className="text-[10px]">MOS</span></p>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => setActiveSchedule(char as any)} className="mt-6 w-full py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">Schedule {char}</button>
                  </div>
                );
              })}
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Cumulative Cost Comparison (5yr Window)</h4>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={refStats.curveData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    <Legend />
                    <Area type="monotone" name="Current Path" dataKey="current" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth={1} />
                    <Line type="monotone" name="Refi Option A" dataKey="optA" stroke="#6366f1" strokeWidth={3} dot={false} />
                    <Line type="monotone" name="Refi Option B" dataKey="optB" stroke="#10b981" strokeWidth={3} dot={false} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-[3rem] text-white flex items-center gap-8 relative overflow-hidden shadow-2xl">
              <div className="text-6xl animate-pulse">🤖</div>
              <div className="flex-1 space-y-2">
                <h4 className="text-indigo-400 font-black uppercase text-[10px] tracking-widest">Gemini Refi Intel</h4>
                {loadingAdvice ? (
                  <div className="h-4 bg-white/10 rounded w-2/3 animate-pulse"></div>
                ) : (
                  <p className="text-xl text-slate-200 italic font-medium leading-relaxed">{advice}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : mode === 'compare' ? (
        <div className="grid lg:grid-cols-4 gap-6 animate-in slide-in-from-bottom-4 duration-700">
          {/* Scenario Manager Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col h-full min-h-[600px]">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b pb-4 flex items-center justify-between">
                Scenario Vault
                <span className="text-[8px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded">AUTO-SAVE</span>
              </h3>
              
              <div className="mt-6 space-y-6 flex-1 flex flex-col overflow-hidden">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Save Comparison As</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={newScenarioName} 
                      onChange={(e) => setNewScenarioName(e.target.value)}
                      placeholder="e.g., Aggressive Buy" 
                      className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500 transition-all pr-12"
                    />
                    <button 
                      onClick={handleSaveScenario}
                      className={`absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-lg transition-all ${saveStatus === 'success' ? 'bg-emerald-500 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95'}`}
                    >
                      {saveStatus === 'success' ? '✓' : '+'}
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 space-y-3">
                  {savedScenarios.length > 0 ? (
                    savedScenarios.map(s => (
                      <div 
                        key={s.id} 
                        onClick={() => handleLoadScenario(s)}
                        className="group relative bg-slate-50/50 hover:bg-white hover:shadow-lg border border-slate-100 hover:border-indigo-100 rounded-2xl p-4 transition-all cursor-pointer overflow-hidden"
                      >
                        <div className="relative z-10 pr-6">
                          <p className="text-[11px] font-black text-slate-800 truncate leading-tight group-hover:text-indigo-600">{s.name}</p>
                          <div className="flex gap-2 mt-2">
                            <span className="text-[8px] bg-slate-200/50 px-1.5 py-0.5 rounded text-slate-500 font-bold tracking-tighter">${(s.loan1.amount/1000).toFixed(0)}k</span>
                            <span className="text-[8px] text-slate-300">vs</span>
                            <span className="text-[8px] bg-slate-200/50 px-1.5 py-0.5 rounded text-slate-500 font-bold tracking-tighter">${(s.loan2.amount/1000).toFixed(0)}k</span>
                          </div>
                          <p className="text-[8px] text-slate-300 font-bold mt-2">{new Date(s.timestamp).toLocaleDateString()}</p>
                        </div>
                        <button 
                          onClick={(e) => handleDeleteScenario(s.id, e)}
                          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 text-rose-300 hover:text-rose-600 transition-all p-1 z-20"
                        >
                          ✕
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="py-12 text-center space-y-3 bg-slate-50/50 rounded-3xl border border-dashed border-slate-200">
                       <div className="text-3xl grayscale opacity-30">📂</div>
                       <p className="text-[10px] font-black text-slate-400 uppercase px-6 leading-relaxed">No custom benchmarks saved yet.</p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter mb-3">System Presets</p>
                  <div className="grid grid-cols-1 gap-2">
                    {Object.entries(PRESET_LOANS).map(([key, loan]) => (
                      <div key={key} className="flex gap-1">
                        <button 
                          onClick={() => setLoan1(loan)}
                          className="flex-1 text-left p-2 bg-white hover:bg-indigo-50 rounded-lg border border-slate-100 text-[10px] font-bold text-slate-600 transition-colors truncate"
                        >
                          {loan.name} → A
                        </button>
                        <button 
                          onClick={() => setLoan2(loan)}
                          className="w-8 bg-white hover:bg-emerald-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-400 hover:text-emerald-600"
                        >
                          B
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Work Area */}
          <div className="lg:col-span-3 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Slot A */}
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm space-y-4">
                <div className="flex justify-between items-center border-b pb-4 mb-2">
                  <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs">A</span> Offer A
                  </h3>
                  <span className="text-[10px] font-black text-indigo-600 truncate max-w-[120px]">{loan1.name || 'Custom'}</span>
                </div>
                <div className="space-y-4">
                  <input type="number" value={loan1.amount} onChange={(e) => setLoan1({...loan1, amount: Number(e.target.value), name: 'Custom Slot A'})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="number" step="0.1" value={loan1.rate} onChange={(e) => setLoan1({...loan1, rate: Number(e.target.value), name: 'Custom Slot A'})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold" />
                    <input type="number" value={loan1.tenure} onChange={(e) => setLoan1({...loan1, tenure: Number(e.target.value), name: 'Custom Slot A'})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold" />
                  </div>
                </div>
              </div>
              {/* Slot B */}
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm space-y-4">
                <div className="flex justify-between items-center border-b pb-4 mb-2">
                  <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs">B</span> Offer B
                  </h3>
                  <span className="text-[10px] font-black text-indigo-600 truncate max-w-[120px]">{loan2.name || 'Custom'}</span>
                </div>
                <div className="space-y-4">
                  <input type="number" value={loan2.amount} onChange={(e) => setLoan2({...loan2, amount: Number(e.target.value), name: 'Custom Slot B'})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="number" step="0.1" value={loan2.rate} onChange={(e) => setLoan2({...loan2, rate: Number(e.target.value), name: 'Custom Slot B'})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold" />
                    <input type="number" value={loan2.tenure} onChange={(e) => setLoan2({...loan2, tenure: Number(e.target.value), name: 'Custom Slot B'})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[stats1, stats2].map((s, idx) => {
                const risk = getDTIRisk(s.dti);
                const char = idx === 0 ? 'A' : 'B';
                return (
                  <div key={idx} className={`p-8 rounded-[2.5rem] border ${risk.border} ${risk.bg} flex flex-col justify-between transition-all hover:shadow-lg`}>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">DTI Ratio {char}</span>
                        <span className={`px-2 py-1 rounded text-[10px] font-black uppercase ${risk.text} border border-current/20`}>{risk.label}</span>
                      </div>
                      <div className={`text-6xl font-black ${risk.text} tracking-tight`}>{s.dti.toFixed(1)}%</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-bold text-slate-400">
                          <span>MONTHLY PAYMENT</span>
                          <span className="text-slate-900">${Math.round(s.emi).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-[10px] font-bold text-slate-400">
                          <span>TOTAL INTEREST</span>
                          <span className="text-slate-900">${Math.round(s.totalInterest).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setActiveSchedule(char as any)} 
                      className={`mt-8 w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all ${activeSchedule === char ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white/50 border-slate-200 text-slate-500 hover:bg-white'}`}
                    >
                      {activeSchedule === char ? 'Closing Table' : 'Amortization Table'}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="bg-slate-900 p-8 rounded-[3rem] text-white flex items-center gap-8 relative overflow-hidden shadow-2xl">
              <div className="text-6xl animate-pulse">🤖</div>
              <div className="flex-1 space-y-2">
                <h4 className="text-indigo-400 font-black uppercase text-[10px] tracking-widest">Gemini Comparison AI</h4>
                {loadingAdvice ? (
                  <div className="h-4 bg-white/10 rounded w-2/3 animate-pulse"></div>
                ) : (
                  <p className="text-xl text-slate-200 italic font-medium leading-relaxed">{advice}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-span-12 py-20 text-center bg-white rounded-[3rem] border border-slate-100">
          <p className="text-slate-400 font-bold uppercase tracking-widest">Prequalification Engine Offline</p>
        </div>
      )}

      {activeSchedule !== 'none' && (
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl animate-in slide-in-from-top-6 duration-700">
          <div className="flex justify-between items-center mb-8 border-b pb-4">
             <h3 className="text-xl font-black">Amortization <span className="text-indigo-600">Schedule</span></h3>
             <button onClick={() => setActiveSchedule('none')} className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center">✕</button>
          </div>
          <div className="max-h-[400px] overflow-y-auto rounded-xl border custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-900 text-white sticky top-0">
                <tr className="text-[10px] font-black uppercase">
                  <th className="p-4">Period</th>
                  <th className="p-4">Payment</th>
                  <th className="p-4">Interest</th>
                  <th className="p-4">Principal</th>
                  <th className="p-4">Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y text-xs font-bold">
                {(activeSchedule === 'A' ? (mode === 'refinance' ? refStats.optA.schedule : stats1.schedule) : (mode === 'refinance' ? refStats.optB.schedule : stats2.schedule)).map(row => (
                  <tr key={row.period} className="hover:bg-slate-50">
                    <td className="p-4 text-slate-400">{row.period}</td>
                    <td className="p-4">${Math.round(row.payment).toLocaleString()}</td>
                    <td className="p-4 text-rose-500">${Math.round(row.interest).toLocaleString()}</td>
                    <td className="p-4 text-emerald-500">${Math.round(row.principal).toLocaleString()}</td>
                    <td className="p-4 font-black text-slate-900">${Math.round(row.balance).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanComparison;

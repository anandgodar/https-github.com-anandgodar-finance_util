
import React, { useState, useMemo, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, ReferenceLine, AreaChart, Area, ComposedChart, Line } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

type LoanCategory = 'Mortgage' | 'Personal' | 'Auto' | 'Business' | 'BNPL' | 'Interest-Only';

interface LoanData {
  amount: number; // For BNPL, this is the Purchase Price
  rate: number;   // APR for standard loans
  tenure: number; // Years for most, or installments for BNPL
  name: string;
  category: LoanCategory;
  purchasePrice?: number;
  lateFee?: number; 
  postFreeRate?: number; 
  ioPeriod?: number; // Initial Interest-Only period in years
}

interface SavedComparison {
  id: string;
  name: string;
  loan1: LoanData;
  loan2: LoanData;
  timestamp: number;
}

const PRESET_LOANS: LoanData[] = [
  { amount: 350000, rate: 6.8, tenure: 30, name: 'Standard 30-Year', category: 'Mortgage', purchasePrice: 437500 },
  { amount: 450000, rate: 7.2, tenure: 30, name: 'IO Executive', category: 'Interest-Only', ioPeriod: 10 },
  { amount: 25000, rate: 11.5, tenure: 5, name: 'Debt Consolidation', category: 'Personal' },
  { amount: 45000, rate: 5.9, tenure: 6, name: 'New SUV Deal', category: 'Auto', purchasePrice: 50000 },
  { amount: 1500, rate: 0, tenure: 4, name: 'Klarna Pay-in-4', category: 'BNPL', lateFee: 25, postFreeRate: 24.99 },
  { amount: 150000, rate: 9.5, tenure: 10, name: 'SBA Express', category: 'Business' },
];

const STORAGE_KEY = 'finvault_loan_scenarios_v3';

const LoanComparison: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<LoanCategory | 'All'>('All');
  const [monthlyIncome, setMonthlyIncome] = useState<number>(6500);
  const [otherMonthlyDebts, setOtherMonthlyDebts] = useState<number>(450);
  const [loan1, setLoan1] = useState<LoanData>(PRESET_LOANS[0]); 
  const [loan2, setLoan2] = useState<LoanData>(PRESET_LOANS[1]);
  const [activeSchedule, setActiveSchedule] = useState<'none' | 'A' | 'B'>('none');
  const [simulateLate, setSimulateLate] = useState<boolean>(false);

  const [savedScenarios, setSavedScenarios] = useState<SavedComparison[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) { return []; }
  });
  const [newScenarioName, setNewScenarioName] = useState('');
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedScenarios));
  }, [savedScenarios]);

  const calculateEMI = (principal: number, annualRate: number, months: number) => {
    const r = annualRate / 12 / 100;
    if (r === 0 || isNaN(r) || months <= 0) return principal / (months || 1);
    return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  };

  const getLoanStats = (loan: LoanData) => {
    if (loan.category === 'BNPL') {
      const installments = Math.max(1, loan.tenure);
      const emi = loan.amount / installments;
      const totalAmount = loan.amount;
      const penaltyCost = loan.amount + (loan.lateFee || 0);
      const interestBearingTotal = loan.amount * (1 + (loan.postFreeRate || 0) / 100);

      return {
        emi,
        totalInterest: 0,
        totalAmount: simulateLate ? penaltyCost : totalAmount,
        dti: monthlyIncome > 0 ? ((emi + otherMonthlyDebts) / monthlyIncome) * 100 : 0,
        schedule: Array.from({ length: installments }, (_, i) => ({
          period: i + 1,
          payment: emi,
          principal: emi,
          interest: 0,
          balance: Math.max(0, loan.amount - (emi * (i + 1)))
        })),
        penaltyCost,
        interestBearingTotal,
        riskScore: (loan.postFreeRate || 0) > 25 ? 'Critical' : (loan.postFreeRate || 0) > 15 ? 'High' : 'Moderate'
      };
    }

    if (loan.category === 'Interest-Only') {
      const totalMonths = loan.tenure * 12;
      const ioMonths = (loan.ioPeriod || 0) * 12;
      const remMonths = totalMonths - ioMonths;
      const r = loan.rate / 12 / 100;
      
      const ioPayment = loan.amount * r;
      const amortizedPayment = calculateEMI(loan.amount, loan.rate, remMonths);
      
      const totalPaid = (ioPayment * ioMonths) + (amortizedPayment * remMonths);
      const totalInterest = totalPaid - loan.amount;

      const schedule = [];
      let currentBalance = loan.amount;

      for (let i = 1; i <= totalMonths; i++) {
        const isIOPhase = i <= ioMonths;
        const interest = currentBalance * r;
        const payment = isIOPhase ? ioPayment : amortizedPayment;
        const principal = isIOPhase ? 0 : payment - interest;
        currentBalance = Math.max(0, currentBalance - principal);
        
        if (i % 12 === 0 || i === totalMonths || i === ioMonths) {
          schedule.push({ period: i, payment, principal, interest, balance: currentBalance });
        }
      }

      return {
        emi: ioPayment, // Initial payment
        stepUpEmi: amortizedPayment,
        totalInterest,
        totalAmount: totalPaid,
        dti: monthlyIncome > 0 ? ((ioPayment + otherMonthlyDebts) / monthlyIncome) * 100 : 0,
        schedule,
        ioMonths,
        hasStepUp: true
      };
    }

    const months = loan.tenure * 12;
    const emi = calculateEMI(loan.amount, loan.rate, months);
    const totalAmount = emi * months;
    const endValue = loan.category === 'Auto' ? (loan.purchasePrice || loan.amount) * Math.pow(1 - 0.15, loan.tenure) : 0;

    return {
      emi,
      totalInterest: totalAmount - loan.amount,
      totalAmount,
      dti: monthlyIncome > 0 ? ((emi + otherMonthlyDebts) / monthlyIncome) * 100 : 0,
      schedule: Array.from({ length: Math.min(60, months) }, (_, i) => {
        const r = loan.rate / 12 / 100;
        const interest = (loan.amount * (1 + r)) * r; 
        return { period: i + 1, payment: emi, principal: emi - interest, interest, balance: 0 };
      }),
      endValue,
      totalDepreciation: (loan.purchasePrice || loan.amount) - endValue
    };
  };

  const stats1 = useMemo(() => getLoanStats(loan1), [loan1, monthlyIncome, otherMonthlyDebts, simulateLate]);
  const stats2 = useMemo(() => getLoanStats(loan2), [loan2, monthlyIncome, otherMonthlyDebts, simulateLate]);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const contextData = { 
      loan1: { type: loan1.category, dti: stats1.dti.toFixed(1), total: stats1.totalAmount, io: loan1.ioPeriod }, 
      loan2: { type: loan2.category, dti: stats2.dti.toFixed(1), total: stats2.totalAmount, io: loan2.ioPeriod } 
    };
    const msg = await getFinancialAdvice(contextData, 'Comparative Analysis of Standard vs Interest-Only Loans');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [loan1, loan2, monthlyIncome, otherMonthlyDebts]);

  const handleSaveScenario = () => {
    if (!newScenarioName.trim()) return;
    setSavedScenarios([{ id: Date.now().toString(), name: newScenarioName, loan1, loan2, timestamp: Date.now() }, ...savedScenarios]);
    setNewScenarioName('');
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900">Loan <span className="text-indigo-600">Intelligence</span></h2>
          <p className="text-slate-500 mt-1 uppercase text-[10px] font-black tracking-widest">Advanced Structure Comparison</p>
        </div>
        <div className="flex gap-4">
           <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <label className="block text-[8px] font-black text-slate-400 uppercase mb-1 tracking-widest">Monthly Income</label>
              <input type="number" value={monthlyIncome} onChange={e => setMonthlyIncome(Number(e.target.value))} className="bg-transparent border-none font-black text-slate-700 text-xl w-32 focus:ring-0 p-0" />
           </div>
           <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <label className="block text-[8px] font-black text-slate-400 uppercase mb-1 tracking-widest">Other Monthly Debts</label>
              <input type="number" value={otherMonthlyDebts} onChange={e => setOtherMonthlyDebts(Number(e.target.value))} className="bg-transparent border-none font-black text-slate-700 text-xl w-32 focus:ring-0 p-0" />
           </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
            <section>
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 border-b pb-2">Filter Category</h3>
              <div className="flex flex-wrap gap-1">
                {['All', 'Mortgage', 'Auto', 'BNPL', 'Interest-Only'].map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setSelectedCategory(cat as any)}
                    className={`px-2 py-1.5 rounded-lg text-[9px] font-black uppercase transition-all border ${selectedCategory === cat ? 'bg-indigo-600 border-indigo-600 text-white shadow-md' : 'bg-slate-50 border-slate-100 text-slate-400'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">System Presets</h3>
              <div className="space-y-2">
                {PRESET_LOANS.filter(p => selectedCategory === 'All' || p.category === selectedCategory).map((p, i) => (
                  <div key={i} className="flex gap-1 group">
                    <button onClick={() => setLoan1(p)} className="flex-1 text-left p-2.5 bg-slate-50 hover:bg-indigo-50 rounded-xl text-[10px] font-bold text-slate-600 border border-slate-100 transition-all truncate">
                      <span className="text-indigo-400 mr-1">A</span> {p.name}
                    </button>
                    <button onClick={() => setLoan2(p)} className="w-8 p-2.5 bg-slate-50 hover:bg-emerald-50 rounded-xl text-[10px] font-black text-emerald-400 border border-slate-100">B</button>
                  </div>
                ))}
              </div>
            </section>

            <section className="pt-6 border-t border-slate-50">
               <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Save Scenario</h3>
               <input type="text" placeholder="Scenario Label" value={newScenarioName} onChange={e => setNewScenarioName(e.target.value)} className="w-full p-3 bg-slate-50 border-none rounded-xl text-xs font-bold mb-2 focus:ring-2 focus:ring-indigo-500" />
               <button onClick={handleSaveScenario} className="w-full py-3 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 shadow-lg">Vault Comparison</button>
            </section>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[ {l: loan1, s: setLoan1, id: 'A'}, {l: loan2, s: setLoan2, id: 'B'} ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
                <div className="flex justify-between items-center border-b pb-4">
                   <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                     <span className={`w-8 h-8 rounded-xl ${item.id === 'A' ? 'bg-indigo-600' : 'bg-emerald-600'} text-white flex items-center justify-center text-xs shadow-lg`}>{item.id}</span> Offer {item.id}
                   </h3>
                   <select 
                    value={item.l.category} 
                    onChange={e => item.s({...item.l, category: e.target.value as any})}
                    className="text-[10px] font-black bg-slate-50 px-2 py-1 rounded text-slate-500 uppercase border-none focus:ring-0 cursor-pointer"
                   >
                     {['Interest-Only', 'Mortgage', 'Auto', 'BNPL', 'Personal', 'Business'].map(c => <option key={c} value={c}>{c}</option>)}
                   </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="col-span-2">
                     <label className="text-[8px] font-black text-slate-300 uppercase block mb-1">Loan Amount ($)</label>
                     <input type="number" value={item.l.amount} onChange={e => item.s({...item.l, amount: Number(e.target.value)})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl focus:ring-2 focus:ring-indigo-500" />
                   </div>
                   
                   {item.l.category === 'Interest-Only' ? (
                     <>
                        <div>
                          <label className="text-[8px] font-black text-slate-300 uppercase block mb-1">Interest Rate %</label>
                          <input type="number" step="0.1" value={item.l.rate} onChange={e => item.s({...item.l, rate: Number(e.target.value)})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl" />
                        </div>
                        <div>
                          <label className="text-[8px] font-black text-slate-300 uppercase block mb-1">Total Term (Years)</label>
                          <input type="number" value={item.l.tenure} onChange={e => item.s({...item.l, tenure: Number(e.target.value)})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl" />
                        </div>
                        <div className="col-span-2">
                          <label className="text-[8px] font-black text-slate-300 uppercase block mb-1">Interest-Only Period (Years)</label>
                          <input type="number" value={item.l.ioPeriod || 0} onChange={e => item.s({...item.l, ioPeriod: Number(e.target.value)})} className="w-full p-4 bg-indigo-50 border-none rounded-2xl font-black text-indigo-700 text-xl" />
                        </div>
                     </>
                   ) : item.l.category === 'BNPL' ? (
                     <>
                        <div>
                          <label className="text-[8px] font-black text-slate-300 uppercase block mb-1">Installments</label>
                          <input type="number" value={item.l.tenure} onChange={e => item.s({...item.l, tenure: Number(e.target.value)})} className="w-full p-4 bg-amber-50 border-none rounded-2xl font-black text-amber-700 text-xl" />
                        </div>
                        <div>
                          <label className="text-[8px] font-black text-slate-300 uppercase block mb-1">Late Fee ($)</label>
                          <input type="number" value={item.l.lateFee || 0} onChange={e => item.s({...item.l, lateFee: Number(e.target.value)})} className="w-full p-4 bg-amber-50 border-none rounded-2xl font-black text-amber-700 text-xl" />
                        </div>
                     </>
                   ) : (
                     <>
                        <div>
                          <label className="text-[8px] font-black text-slate-300 uppercase block mb-1">APR %</label>
                          <input type="number" step="0.1" value={item.l.rate} onChange={e => item.s({...item.l, rate: Number(e.target.value)})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl" />
                        </div>
                        <div>
                          <label className="text-[8px] font-black text-slate-300 uppercase block mb-1">Years</label>
                          <input type="number" value={item.l.tenure} onChange={e => item.s({...item.l, tenure: Number(e.target.value)})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl" />
                        </div>
                     </>
                   )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[ {s: stats1, l: loan1, id: 'A'}, {s: stats2, l: loan2, id: 'B'} ].map((item, idx) => {
              const { s, l, id }: {s: any, l: any, id: string} = item;
              const isIO = l.category === 'Interest-Only';
              const colorClass = id === 'A' ? 'text-indigo-600' : 'text-emerald-600';
              const bgClass = id === 'A' ? 'bg-indigo-50/50' : 'bg-emerald-50/50';

              return (
                <div key={idx} className={`p-8 rounded-[3rem] border border-slate-100 ${bgClass} shadow-sm space-y-6 flex flex-col justify-between transition-all hover:shadow-lg`}>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className={`text-[10px] font-black uppercase tracking-widest ${colorClass}`}>Scenario {id} Financial Outlook</span>
                      {isIO && <span className="px-2 py-1 rounded text-[8px] font-black uppercase bg-indigo-100 text-indigo-600 border border-indigo-200">Dual Phase</span>}
                    </div>

                    <div className="space-y-1">
                      <h4 className={`text-6xl font-black ${colorClass} tracking-tighter`}>{s.dti.toFixed(1)}%</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Initial DTI Impact</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-current/10">
                       <div>
                         <p className="text-[8px] font-black text-slate-400 uppercase">{isIO ? 'IO Phase Pay' : 'Monthly Payment'}</p>
                         <p className="text-xl font-black text-slate-800">${Math.round(s.emi).toLocaleString()}</p>
                       </div>
                       <div>
                         <p className="text-[8px] font-black text-slate-400 uppercase">Lifetime Cost</p>
                         <p className="text-xl font-black text-slate-800">${Math.round(s.totalAmount).toLocaleString()}</p>
                       </div>
                    </div>

                    {isIO && (
                      <div className="bg-white/60 p-5 rounded-[2rem] border border-indigo-200 space-y-4">
                         <div className="flex justify-between items-center border-b border-indigo-100 pb-2">
                           <p className="text-[9px] font-black text-indigo-600 uppercase tracking-tighter">Interest-Only Risk Profile</p>
                           <span className="text-[8px] bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded font-bold italic">STEP-UP</span>
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                           <div>
                             <p className="text-[8px] font-bold text-slate-400 uppercase mb-1">Amortizing Pay</p>
                             <p className="text-lg font-black text-rose-600">${Math.round(s.stepUpEmi).toLocaleString()}</p>
                           </div>
                           <div>
                             <p className="text-[8px] font-bold text-slate-400 uppercase mb-1">Payment Jump</p>
                             <p className="text-lg font-black text-rose-700">+{Math.round((s.stepUpEmi / s.emi - 1) * 100)}%</p>
                           </div>
                         </div>
                         <p className="text-[8px] text-slate-400 font-medium italic leading-snug">
                            After {l.ioPeriod} years, the payment step-up occurs as you begin paying principal.
                         </p>
                      </div>
                    )}
                  </div>
                  
                  <button onClick={() => setActiveSchedule(id as any)} className="w-full mt-6 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-200">
                     View Amortization Path
                  </button>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex items-center gap-10 relative overflow-hidden shadow-2xl">
            <div className="text-6xl animate-pulse">🤖</div>
            <div className="flex-1 space-y-2">
              <h4 className="text-indigo-400 font-black uppercase text-[10px] tracking-widest">Gemini Multi-Asset Strategy</h4>
              {loadingAdvice ? (
                <div className="h-4 bg-white/10 rounded w-2/3 animate-pulse"></div>
              ) : (
                <p className="text-xl text-slate-200 italic font-medium leading-relaxed">{advice || 'Synthesizing loan structure risk vectors...'}</p>
              )}
            </div>
            <div className="absolute -right-20 -bottom-20 text-[200px] font-black text-white/5 select-none pointer-events-none uppercase">INTEL</div>
          </div>
        </div>
      </div>

      {activeSchedule !== 'none' && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-in zoom-in duration-300">
           <div className="bg-white w-full max-w-4xl p-8 rounded-[3rem] shadow-2xl space-y-6 flex flex-col max-h-[90vh]">
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Payment <span className="text-indigo-600">Trajectory</span></h3>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Scenario {activeSchedule} Detailed Breakdown</p>
                </div>
                <button onClick={() => setActiveSchedule('none')} className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 hover:bg-rose-50 hover:text-rose-500 transition-all shadow-sm">✕</button>
              </div>
              <div className="flex-1 overflow-y-auto rounded-2xl border border-slate-50 custom-scrollbar pr-2">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-900 text-white sticky top-0 z-10">
                    <tr className="text-[10px] font-black uppercase">
                      <th className="p-4">Period (Month)</th>
                      <th className="p-4">Payment</th>
                      <th className="p-4">Interest Component</th>
                      <th className="p-4">Principal Component</th>
                      <th className="p-4">Remaining Balance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y text-xs font-bold">
                    {(activeSchedule === 'A' ? stats1.schedule : stats2.schedule).map((row: any) => (
                      <tr key={row.period} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 text-slate-400">{row.period}</td>
                        <td className="p-4 text-slate-900 font-black">${Math.round(row.payment).toLocaleString()}</td>
                        <td className="p-4 text-amber-500">${Math.round(row.interest).toLocaleString()}</td>
                        <td className="p-4 text-emerald-500">${Math.round(row.principal).toLocaleString()}</td>
                        <td className="p-4 font-black text-slate-900 bg-slate-50/50">${Math.round(row.balance).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                 <p className="text-[9px] font-black text-indigo-400 uppercase tracking-widest text-center">Trajectory visualized based on Scenario {activeSchedule} parameters</p>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default LoanComparison;

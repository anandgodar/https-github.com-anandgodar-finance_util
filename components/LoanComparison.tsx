
import React, { useState, useMemo, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, AreaChart, Area } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';
import CalculatorFAQ from './CalculatorFAQ';
import LenderComparisonTable from './LenderComparisonTable';
import { ToolType } from '../types';

type Mode = 'compare' | 'refinance' | 'prequal';

interface AmortizationRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

interface LoanComparisonProps {
  onNavigate?: (tool: ToolType) => void;
}

const LoanComparison: React.FC<LoanComparisonProps> = ({ onNavigate }) => {
  const [mode, setMode] = useState<Mode>('compare');
  const [activeSchedule, setActiveSchedule] = useState<'none' | 'loan1' | 'loan2'>('none');
  
  // State for Compare & Refinance
  const [loan1, setLoan1] = useState({ amount: 350000, rate: 7.2, tenure: 30, name: 'Current / Option A', costs: 0 }); 
  const [loan2, setLoan2] = useState({ amount: 350000, rate: 6.1, tenure: 30, name: 'New / Option B', costs: 4500 });
  
  // State for Prequal
  const [monthlyIncome, setMonthlyIncome] = useState<number>(8500);
  const [existingDebt, setExistingDebt] = useState<number>(1200);
  const [targetDti, setTargetDti] = useState<number>(36);
  const [creditScore, setCreditScore] = useState<number>(720);
  const [prequalTenure, setPrequalTenure] = useState<number>(30);

  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  // Simplified Credit Score to Rate Impact
  const creditRateImpact = useMemo(() => {
    if (creditScore >= 760) return 6.4; // Excellent
    if (creditScore >= 700) return 6.8; // Good
    if (creditScore >= 640) return 7.5; // Fair
    return 8.5; // Poor
  }, [creditScore]);

  const calculateFullSchedule = (principal: number, annualRate: number, years: number): { emi: number, schedule: AmortizationRow[] } => {
    const r = annualRate / 12 / 100;
    const n = years * 12;
    const emi = r > 0 ? (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : principal / n;
    
    let currentBalance = principal;
    const schedule: AmortizationRow[] = [];
    
    for (let i = 1; i <= n; i++) {
      const interestPayment = currentBalance * r;
      const principalPayment = Math.min(currentBalance, emi - interestPayment);
      currentBalance = Math.max(0, currentBalance - principalPayment);
      
      schedule.push({
        month: i,
        payment: emi,
        principal: principalPayment,
        interest: interestPayment,
        balance: currentBalance
      });
      if (currentBalance <= 0) break;
    }
    
    return { emi, schedule };
  };

  const results = useMemo(() => {
    const { emi: emi1, schedule: schedule1 } = calculateFullSchedule(loan1.amount, loan1.rate, loan1.tenure);
    const { emi: emi2, schedule: schedule2 } = calculateFullSchedule(loan2.amount, loan2.rate, loan2.tenure);
    
    const total1 = emi1 * loan1.tenure * 12;
    const total2 = emi2 * loan2.tenure * 12;
    
    const monthlySavings = Math.max(0, emi1 - emi2);
    const breakEvenMonths = monthlySavings > 0 ? loan2.costs / monthlySavings : Infinity;
    
    // Prequal Logic: PV = PMT * [(1 - (1+r)^-n) / r]
    const maxAllowedPayment = (monthlyIncome * (targetDti / 100)) - existingDebt;
    const r = (creditRateImpact / 12) / 100;
    const n = prequalTenure * 12;
    const estimatedMaxLoan = maxAllowedPayment > 0 
      ? maxAllowedPayment * ((1 - Math.pow(1 + r, -n)) / r)
      : 0;
    
    return {
      emi1, emi2,
      total1, total2,
      interest1: total1 - loan1.amount,
      interest2: total2 - loan2.amount,
      monthlySavings,
      breakEvenMonths,
      maxAllowedPayment: Math.max(0, maxAllowedPayment),
      estimatedMaxLoan,
      schedule1,
      schedule2
    };
  }, [loan1, loan2, mode, monthlyIncome, existingDebt, targetDti, creditRateImpact, prequalTenure]);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const context = mode === 'prequal' ? 'Loan Prequalification & Credit Impact' : mode === 'refinance' ? 'Refinance Strategy' : 'Loan Comparison';
    const msg = await getFinancialAdvice({ mode, results, loan1, loan2, monthlyIncome, existingDebt, creditScore }, context);
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 3000);
    return () => clearTimeout(timer);
  }, [mode, loan1, loan2, monthlyIncome, existingDebt, creditScore]);

  useEffect(() => {
    // Add HowTo schema for "How to compare loans"
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Compare Loans: Compare Offers, Refinance Analysis, and Prequalification",
      "description": "Step-by-step guide to comparing loan offers, analyzing refinancing options, and calculating loan prequalification based on income, debt, and credit score.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Choose Comparison Mode",
          "text": "Select Compare (side-by-side loan offers), Refinance (analyze refinancing savings), or Prequal (calculate maximum loan amount)."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Enter Loan Details",
          "text": "For Compare/Refinance: Enter loan amount, interest rate, term (years), and closing costs. For Prequal: Enter monthly income, existing debt, credit score, and target debt-to-income ratio."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Review Monthly Payments",
          "text": "Compare monthly payments (EMI) between loans. Lower payment means more cash flow, but may result in more total interest paid."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Calculate Total Interest",
          "text": "See total interest paid over the life of each loan. Lower interest rate saves thousands over time."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Analyze Break-Even (Refinance)",
          "text": "For refinancing, calculate break-even point: closing costs ÷ monthly savings = months to break even. If you plan to stay longer, refinancing makes sense."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Review Amortization Schedule",
          "text": "View month-by-month payment breakdown showing principal vs interest. Early payments are mostly interest; later payments are mostly principal."
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(howToSchema);
    script.id = 'howto-schema-loan-comparison';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('howto-schema-loan-comparison');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const activeAmortization = activeSchedule === 'loan1' ? results.schedule1 : results.schedule2;

  const comparisonChartData = [
    {
      metric: 'Monthly EMI ($)',
      LoanA: Math.round(results.emi1),
      LoanB: Math.round(results.emi2)
    },
    {
      metric: 'Total Interest ($1k)',
      LoanA: Math.round(results.interest1 / 1000),
      LoanB: Math.round(results.interest2 / 1000)
    },
    {
      metric: 'Loan Principal ($1k)',
      LoanA: Math.round(loan1.amount / 1000),
      LoanB: Math.round(loan2.amount / 1000)
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-500 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter">Loan <span className="text-indigo-600">Intel</span></h2>
          <p className="text-slate-500 mt-2 max-w-lg font-medium text-lg">Visual comparison of debt structures, refinancing ROI, and affordability limits.</p>
        </div>
        <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-200 shadow-inner relative z-10">
           {(['compare', 'refinance', 'prequal'] as Mode[]).map(m => (
             <button 
               key={m} 
               onClick={() => { setMode(m); setActiveSchedule('none'); }} 
               className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${mode === m ? 'bg-white text-indigo-600 shadow-sm scale-105' : 'text-slate-400 hover:text-slate-600'}`}
             >
               {m === 'prequal' ? 'Prequalify' : m}
             </button>
           ))}
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-6">
          {mode !== 'prequal' ? (
            <>
              <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
                <div className="flex justify-between items-center border-b pb-4">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{mode === 'refinance' ? 'Current Mortgage' : 'Option A'}</h3>
                  <button onClick={() => setActiveSchedule(activeSchedule === 'loan1' ? 'none' : 'loan1')} className={`text-[9px] font-black px-3 py-1 rounded-full transition-all ${activeSchedule === 'loan1' ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-400'}`}>
                    {activeSchedule === 'loan1' ? 'HIDE TABLE' : 'VIEW SCHEDULE'}
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-slate-400 uppercase ml-2 tracking-widest">Loan Amount ($)</label>
                    <input type="number" value={loan1.amount} onChange={e => setLoan1({...loan1, amount: Number(e.target.value)})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase ml-2 tracking-widest">APR (%)</label>
                      <input type="number" step="0.1" value={loan1.rate} onChange={e => setLoan1({...loan1, rate: Number(e.target.value)})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase ml-2 tracking-widest">Years</label>
                      <input type="number" value={loan1.tenure} onChange={e => setLoan1({...loan1, tenure: Number(e.target.value)})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700" />
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-white p-8 rounded-[2.5rem] border border-indigo-100 shadow-sm space-y-6">
                <div className="flex justify-between items-center border-b pb-4">
                  <h3 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">{mode === 'refinance' ? 'New Offer' : 'Option B'}</h3>
                  <button onClick={() => setActiveSchedule(activeSchedule === 'loan2' ? 'none' : 'loan2')} className={`text-[9px] font-black px-3 py-1 rounded-full transition-all ${activeSchedule === 'loan2' ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-400'}`}>
                    {activeSchedule === 'loan2' ? 'HIDE TABLE' : 'VIEW SCHEDULE'}
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-slate-400 uppercase ml-2 tracking-widest">Loan Amount ($)</label>
                    <input type="number" value={loan2.amount} onChange={e => setLoan2({...loan2, amount: Number(e.target.value)})} className="w-full p-4 bg-indigo-50/30 border-none rounded-2xl font-black text-indigo-700" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase ml-2 tracking-widest">APR (%)</label>
                      <input type="number" step="0.1" value={loan2.rate} onChange={e => setLoan2({...loan2, rate: Number(e.target.value)})} className="w-full p-4 bg-indigo-50/30 border-none rounded-2xl font-black text-indigo-700" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase ml-2 tracking-widest">Years</label>
                      <input type="number" value={loan2.tenure} onChange={e => setLoan2({...loan2, tenure: Number(e.target.value)})} className="w-full p-4 bg-indigo-50/30 border-none rounded-2xl font-black text-indigo-700" />
                    </div>
                  </div>
                  {mode === 'refinance' && (
                    <div className="pt-2">
                       <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Refi Closing Costs ($)</label>
                       <input type="number" value={loan2.costs} onChange={e => setLoan2({...loan2, costs: Number(e.target.value)})} className="w-full p-4 bg-slate-900 text-white border-none rounded-2xl font-black" />
                    </div>
                  )}
                </div>
              </section>
            </>
          ) : (
            <section className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b pb-4">Underwriting Inputs</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Gross Monthly Income ($)</label>
                  <input type="number" value={monthlyIncome} onChange={e => setMonthlyIncome(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-xl text-slate-700" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Monthly Debt Payments ($)</label>
                  <input type="number" value={existingDebt} onChange={e => setExistingDebt(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-xl text-slate-700" />
                  <p className="text-[8px] text-slate-400 mt-1 uppercase font-bold">Incl. Car, Student Loans, Cards</p>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-indigo-500 uppercase mb-2 tracking-widest">Credit Score: <span className="text-indigo-600 font-black">{creditScore}</span></label>
                  <input type="range" min="300" max="850" value={creditScore} onChange={e => setCreditScore(Number(e.target.value))} className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
                  <div className="flex justify-between mt-2 font-black text-[8px] text-slate-400 uppercase tracking-widest">
                    <span className={creditScore < 640 ? 'text-rose-500' : ''}>Poor</span>
                    <span className={creditScore >= 760 ? 'text-emerald-500' : ''}>Excellent</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-50">
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Target DTI Limit (%)</label>
                  <input type="range" min="20" max="50" value={targetDti} onChange={e => setTargetDti(Number(e.target.value))} className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-900" />
                  <div className="flex justify-between mt-2 font-black text-[9px] text-slate-400">
                    <span>Conservative (28%)</span>
                    <span className="text-slate-900">{targetDti}%</span>
                    <span>Standard (36%)</span>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>

        <div className="lg:col-span-8 space-y-8">
          {/* Main KPI Block */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-10 rounded-[3rem] text-white shadow-xl flex flex-col justify-center text-center relative overflow-hidden group ${mode === 'prequal' ? 'bg-emerald-600' : 'bg-indigo-600'}`}>
               <p className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-1">
                 {mode === 'prequal' ? 'Est. Max Loan Amount' : mode === 'refinance' ? 'Monthly Saving' : 'EMI Delta'}
               </p>
               <h3 className="text-5xl font-black text-white tracking-tighter group-hover:scale-105 transition-transform">
                 ${Math.round(mode === 'prequal' ? results.estimatedMaxLoan : results.monthlySavings).toLocaleString()}
               </h3>
               <div className="absolute -right-10 -bottom-10 text-[140px] font-black text-white/5 pointer-events-none select-none tracking-tighter">
                 {mode === 'prequal' ? 'BUY' : '$$'}
               </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center text-center relative overflow-hidden group">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                 {mode === 'prequal' ? 'Max Monthly Payment' : mode === 'refinance' ? 'Net Break-Even' : 'Lifetime Interest Impact'}
               </p>
               <h4 className={`text-4xl font-black group-hover:scale-105 transition-transform ${mode === 'prequal' ? 'text-slate-900' : 'text-slate-900'}`}>
                 {mode === 'prequal' ? `$${Math.round(results.maxAllowedPayment).toLocaleString()}` : 
                  mode === 'refinance' ? (results.breakEvenMonths === Infinity ? 'N/A' : `${Math.ceil(results.breakEvenMonths)} Mo.`) : 
                  `$${Math.round(Math.abs(results.interest1 - results.interest2)).toLocaleString()}`}
               </h4>
               <p className="text-[9px] font-bold text-slate-400 uppercase mt-2 tracking-widest">
                 {mode === 'prequal' ? `Assumed Rate: ${creditRateImpact}%` : 
                  mode === 'refinance' && results.breakEvenMonths !== Infinity ? `Payback period: ${Math.floor(results.breakEvenMonths/12)}y ${Math.ceil(results.breakEvenMonths%12)}m` : 
                  'Difference in total interest'}
               </p>
               <div className="absolute -right-10 -bottom-10 text-[120px] font-black text-slate-50 pointer-events-none select-none tracking-tighter">ROI</div>
            </div>
          </div>

          {/* Visualization Section */}
          {mode !== 'prequal' ? (
            <section className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
               <header className="flex justify-between items-end border-b border-slate-50 pb-6">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Comparison Matrix</h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Institutional Metrics Side-by-Side</p>
                  </div>
                  <div className="flex gap-4">
                     <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div><span className="text-[9px] font-black text-slate-400 uppercase">A</span></div>
                     <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div><span className="text-[9px] font-black text-indigo-600 uppercase">B</span></div>
                  </div>
               </header>

               <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={comparisonChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="metric" stroke="#94a3b8" fontSize={11} fontWeight={900} axisLine={false} tickLine={false} />
                      <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                      <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.1)'}} labelStyle={{fontWeight: 900, textTransform: 'uppercase', marginBottom: '8px', fontSize: '10px'}} itemStyle={{fontWeight: 700, fontSize: '12px'}} />
                      <Bar dataKey="LoanA" name="Option A" fill="#e2e8f0" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="LoanB" name="Option B" fill="#4f46e5" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
               </div>
            </section>
          ) : (
            <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
               <header className="border-b border-slate-50 pb-8 text-center space-y-2">
                 <h3 className="text-2xl font-black text-slate-900 tracking-tighter">Your Prequalification Pulse</h3>
                 <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Based on Institutional Underwriting Models</p>
               </header>
               
               <div className="grid md:grid-cols-3 gap-10">
                 <div className="space-y-4 text-center">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto text-2xl">💰</div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Affordability</p>
                      <p className="text-xl font-black text-slate-900">{targetDti}% Limit</p>
                    </div>
                 </div>
                 <div className="space-y-4 text-center border-x border-slate-50">
                    <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto text-2xl">🛡️</div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Credit Health</p>
                      <p className="text-xl font-black text-slate-900">{creditScore >= 740 ? 'Tier 1' : creditScore >= 670 ? 'Tier 2' : 'Tier 3'}</p>
                    </div>
                 </div>
                 <div className="space-y-4 text-center">
                    <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-3xl flex items-center justify-center mx-auto text-2xl">⚡</div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Market Velocity</p>
                      <p className="text-xl font-black text-slate-900">{creditRateImpact}% Rate</p>
                    </div>
                 </div>
               </div>
            </div>
          )}

          {activeSchedule !== 'none' && (
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
              <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest">Registry: {activeSchedule === 'loan1' ? loan1.name : loan2.name}</h4>
                </div>
                <button onClick={() => setActiveSchedule('none')} className="text-[10px] font-black opacity-60 hover:opacity-100 transition-opacity">CLOSE ×</button>
              </div>
              <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                <table className="w-full text-left text-[11px] font-mono border-collapse">
                  <thead className="bg-slate-50 sticky top-0 border-b border-slate-200 z-10">
                    <tr>
                      <th className="p-4 font-black text-slate-400 uppercase tracking-tighter">Mo.</th>
                      <th className="p-4 font-black text-slate-400 uppercase tracking-tighter">EMI</th>
                      <th className="p-4 font-black text-emerald-600 uppercase tracking-tighter">Principal</th>
                      <th className="p-4 font-black text-indigo-600 uppercase tracking-tighter">Interest</th>
                      <th className="p-4 font-black text-slate-900 uppercase tracking-tighter">Balance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {activeAmortization.map(row => (
                      <tr key={row.month} className="hover:bg-indigo-50/30 transition-colors group">
                        <td className="p-4 font-bold text-slate-300 group-hover:text-slate-900">{row.month}</td>
                        <td className="p-4 font-black text-slate-900">${row.payment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                        <td className="p-4 font-black text-emerald-600">${row.principal.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                        <td className="p-4 font-black text-indigo-600">${row.interest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                        <td className="p-4 font-bold text-slate-400 group-hover:text-slate-900">${row.balance.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="bg-slate-900 p-12 rounded-[4rem] text-white flex items-start gap-10 shadow-2xl relative overflow-hidden group">
             <div className="text-7xl relative z-10 transition-transform group-hover:scale-110">🤖</div>
             <div className="flex-1 relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <h4 className="text-indigo-400 font-black uppercase text-[10px] tracking-[0.3em]">Institutional Triage Logic</h4>
                  <div className="h-px flex-1 bg-white/10"></div>
                </div>
                {loadingAdvice ? (
                  <div className="space-y-3 animate-pulse"><div className="h-4 bg-white/10 rounded w-full"></div><div className="h-4 bg-white/10 rounded w-4/5"></div></div>
                ) : (
                  <p className="text-2xl text-slate-200 italic font-medium leading-relaxed">{advice}</p>
                )}
             </div>
             <div className="absolute -right-10 -bottom-10 text-[260px] font-black text-white/[0.03] pointer-events-none select-none tracking-tighter uppercase">{mode === 'prequal' ? 'Qualify' : 'Intel'}</div>
          </div>
        </div>
      </div>

      <section className="mt-20 pt-16 border-t border-slate-200 space-y-24">
        <header className="max-w-4xl">
          <h3 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.4em] mb-4">Underwriting Verification</h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">The Quantitative <span className="text-indigo-600">Decision Matrix</span></h2>
          <p className="text-slate-500 mt-6 text-xl font-medium leading-relaxed max-w-3xl">
            Our Prequalification engine utilizes **Reverse Amortization** and **DTI (Debt-to-Income)** limits to estimate your purchasing power with banking-grade precision.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-16">
          <div className="space-y-6 group">
            <div className="w-16 h-16 bg-indigo-50 rounded-[2rem] flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform shadow-sm">📊</div>
            <h4 className="text-2xl font-black text-slate-900 leading-tight">Reverse Amortization <br/>Logic</h4>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              Standard calculators tell you your payment. We solve for the principal by calculating the present value (PV) of your maximum allowed monthly payment over the target tenure at market rates.
            </p>
          </div>
          <div className="space-y-6 group">
            <div className="w-16 h-16 bg-slate-900 text-white rounded-[2rem] flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform shadow-xl">⚖️</div>
            <h4 className="text-2xl font-black text-slate-900 leading-tight">DTI Efficiency <br/>Modeling</h4>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              Lenders primarily look at your **Back-End DTI**. By subtracting existing debt obligations from your gross capacity, we define the "mortgage ceiling" that preserves your financial stability.
            </p>
          </div>
          <div className="space-y-6 group">
            <div className="w-16 h-16 bg-emerald-50 rounded-[2rem] flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform shadow-sm">🛡️</div>
            <h4 className="text-2xl font-black text-slate-900 leading-tight">Credit Tier <br/>Risk Benchmarks</h4>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              Interest rates are tied to creditworthiness. Our engine models the spread between "Prime" and "Sub-prime" credit scores to visualize how your FICO score impacts your maximum loan principal.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center pt-16 border-t border-slate-100 flex flex-col items-center gap-6">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">QuantCurb Debt Intel v4.0 • Integrated Prequalification Protocol</p>
        <div className="flex gap-4">
           {['DTI Registry', 'Reverse Amortization', 'Credit Tier Triage', 'APR Spread Analysis'].map(tag => (
             <span key={tag} className="text-[8px] font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 uppercase tracking-widest">{tag}</span>
           ))}
        </div>
      </footer>

      {/* Related Resources Section */}
      <section className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200">
        <h2 className="text-2xl font-black text-slate-900 mb-6">Related Resources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">🏠 Mortgage Calculator</h3>
            <p className="text-sm text-slate-600">Calculate monthly mortgage payments, PITI, PMI, and see how extra payments save interest.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.EMI_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">💳 Loan EMI Calculator</h3>
            <p className="text-sm text-slate-600">Calculate loan payments and see how extra payments save interest and reduce loan term.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.CREDIT_CARD_PAYOFF)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">💳 Credit Card Payoff Calculator</h3>
            <p className="text-sm text-slate-600">Compare Avalanche vs Snowball methods to pay off credit card debt faster.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_HOW_MUCH_HOUSE)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">📖 How Much House Can I Afford?</h3>
            <p className="text-sm text-slate-600">Learn about the 28/36 rule, debt-to-income ratios, and how to determine housing affordability.</p>
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <CalculatorFAQ
        calculatorName="Loan Comparison Tool"
        calculatorUrl="https://quantcurb.com/loan-comparison-tool"
        faqs={[
          {
            question: "How do I compare two loan offers?",
            answer: "Use our Compare mode! Enter both loan amounts, interest rates, terms, and closing costs. The calculator shows monthly payments, total interest paid, and total cost. Lower monthly payment doesn't always mean better - check total interest paid over the life of the loan. Our calculator makes it easy to see which loan saves you more money."
          },
          {
            question: "Should I refinance my loan?",
            answer: "Refinancing makes sense if: 1) New rate is at least 0.5-1% lower, 2) You plan to stay in the home/keep the loan long enough to break even (closing costs ÷ monthly savings), 3) You can reduce your loan term. Use our Refinance mode to calculate break-even point and total savings. If you'll move before break-even, refinancing may not be worth it."
          },
          {
            question: "What is a loan break-even point?",
            answer: "Break-even point is when your refinancing savings equal the closing costs. Formula: Closing costs ÷ Monthly savings = Months to break even. For example, if closing costs are $4,500 and you save $150/month, break-even is 30 months. If you plan to stay longer than 30 months, refinancing saves money."
          },
          {
            question: "How much can I borrow? (Loan prequalification)",
            answer: "Use our Prequal mode! Enter your monthly income, existing debt payments, credit score, and target debt-to-income (DTI) ratio. The calculator shows your maximum monthly payment and estimated loan amount. Lenders typically allow DTI up to 36-43%, but lower is better for approval and rates."
          },
          {
            question: "What is debt-to-income (DTI) ratio?",
            answer: "DTI is your total monthly debt payments divided by gross monthly income, expressed as a percentage. For example, if you earn $8,000/month and have $2,000 in debt payments, your DTI is 25%. Lenders prefer DTI under 36% for mortgages, but may approve up to 43%. Lower DTI = better rates and easier approval."
          },
          {
            question: "How does credit score affect loan rates?",
            answer: "Credit score significantly impacts loan rates. Excellent credit (760+) gets the best rates (~6.4%), good credit (700-759) gets slightly higher rates (~6.8%), fair credit (640-699) gets higher rates (~7.5%), and poor credit (<640) gets the highest rates (~8.5%+). Our calculator shows estimated rates based on your credit score."
          },
          {
            question: "What's the difference between interest rate and APR?",
            answer: "Interest rate is the cost of borrowing money. APR (Annual Percentage Rate) includes interest rate plus fees and closing costs, giving you the true cost of the loan. Always compare APRs when shopping for loans, not just interest rates. A loan with a lower rate but higher fees may have a higher APR."
          },
          {
            question: "Should I choose a 15-year or 30-year loan?",
            answer: "15-year loans have higher monthly payments but much less total interest. 30-year loans have lower payments but more total interest. Use our calculator to compare: If you can afford the 15-year payment, you'll save tens of thousands in interest. If cash flow is tight, 30-year gives flexibility, and you can always pay extra to shorten the term."
          }
        ]}
      />

      {/* Lender Comparison Table */}
      <LenderComparisonTable type="loan" />
    </div>
  );
};

export default LoanComparison;

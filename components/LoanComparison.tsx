
import React, { useState, useMemo, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

type Mode = 'compare' | 'refinance' | 'prequal';

const LoanComparison: React.FC = () => {
  const [mode, setMode] = useState<Mode>('compare');
  
  // State for Compare & Refinance
  const [loan1, setLoan1] = useState({ amount: 350000, rate: 7.2, tenure: 30, name: 'Current / Option A', costs: 0 }); 
  const [loan2, setLoan2] = useState({ amount: 350000, rate: 6.1, tenure: 30, name: 'New / Option B', costs: 4500 });
  
  // State for Prequal
  const [monthlyIncome, setMonthlyIncome] = useState<number>(8500);
  const [existingDebt, setExistingDebt] = useState<number>(1200);
  const [targetDti, setTargetDti] = useState<number>(36);

  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const calculateEMI = (principal: number, annualRate: number, years: number) => {
    const r = annualRate / 12 / 100;
    const n = years * 12;
    if (r === 0) return principal / n;
    return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  };

  const results = useMemo(() => {
    const emi1 = calculateEMI(loan1.amount, loan1.rate, loan1.tenure);
    const emi2 = calculateEMI(loan2.amount, loan2.rate, loan2.tenure);
    const total1 = emi1 * loan1.tenure * 12;
    const total2 = emi2 * loan2.tenure * 12;
    
    // Refinance specific
    const monthlySavings = Math.max(0, emi1 - emi2);
    const breakEvenMonths = monthlySavings > 0 ? loan2.costs / monthlySavings : Infinity;

    // Prequal specific
    const maxAllowedPayment = (monthlyIncome * (targetDti / 100)) - existingDebt;
    
    return {
      emi1, emi2,
      total1, total2,
      interest1: total1 - loan1.amount,
      interest2: total2 - loan2.amount,
      monthlySavings,
      breakEvenMonths,
      maxAllowedPayment: Math.max(0, maxAllowedPayment)
    };
  }, [loan1, loan2, mode, monthlyIncome, existingDebt, targetDti]);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const context = mode === 'prequal' ? 'Loan Prequalification' : mode === 'refinance' ? 'Refinance Strategy' : 'Loan Comparison';
    const msg = await getFinancialAdvice({ mode, results, loan1, loan2, monthlyIncome, existingDebt }, context);
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 3000); // Increased debounce to 3s to save quota
    return () => clearTimeout(timer);
  }, [mode, loan1, loan2, monthlyIncome, existingDebt]);

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-500 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 leading-tight">Loan <span className="text-indigo-600">Intel</span></h2>
          <p className="text-slate-500 mt-2 max-w-lg font-medium">Institutional-grade debt modeling for comparisons, refinancing, and pre-approvals.</p>
        </div>
        <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shadow-inner">
           {(['compare', 'refinance', 'prequal'] as Mode[]).map(m => (
             <button 
               key={m} 
               onClick={() => setMode(m)} 
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
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b pb-4">{mode === 'refinance' ? 'Current Mortgage' : 'Option A'}</h3>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-slate-400 uppercase ml-2">Loan Amount ($)</label>
                    <input type="number" value={loan1.amount} onChange={e => setLoan1({...loan1, amount: Number(e.target.value)})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase ml-2">APR (%)</label>
                      <input type="number" step="0.1" value={loan1.rate} onChange={e => setLoan1({...loan1, rate: Number(e.target.value)})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase ml-2">Years</label>
                      <input type="number" value={loan1.tenure} onChange={e => setLoan1({...loan1, tenure: Number(e.target.value)})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700" />
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-white p-8 rounded-[2.5rem] border border-indigo-100 shadow-sm space-y-6">
                <h3 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest border-b pb-4">{mode === 'refinance' ? 'New Offer' : 'Option B'}</h3>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-slate-400 uppercase ml-2">Loan Amount ($)</label>
                    <input type="number" value={loan2.amount} onChange={e => setLoan2({...loan2, amount: Number(e.target.value)})} className="w-full p-4 bg-indigo-50/30 border-none rounded-2xl font-black text-indigo-700" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase ml-2">APR (%)</label>
                      <input type="number" step="0.1" value={loan2.rate} onChange={e => setLoan2({...loan2, rate: Number(e.target.value)})} className="w-full p-4 bg-indigo-50/30 border-none rounded-2xl font-black text-indigo-700" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase ml-2">Years</label>
                      <input type="number" value={loan2.tenure} onChange={e => setLoan2({...loan2, tenure: Number(e.target.value)})} className="w-full p-4 bg-indigo-50/30 border-none rounded-2xl font-black text-indigo-700" />
                    </div>
                  </div>
                  {mode === 'refinance' && (
                    <div className="pt-2">
                       <label className="block text-[9px] font-black text-slate-400 uppercase mb-2">Refi Closing Costs ($)</label>
                       <input type="number" value={loan2.costs} onChange={e => setLoan2({...loan2, costs: Number(e.target.value)})} className="w-full p-4 bg-slate-900 text-white border-none rounded-2xl font-black" />
                    </div>
                  )}
                </div>
              </section>
            </>
          ) : (
            <section className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b pb-4">Affordability Inputs</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">Gross Monthly Income ($)</label>
                  <input type="number" value={monthlyIncome} onChange={e => setMonthlyIncome(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-xl text-slate-700" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">Current Monthly Debt ($)</label>
                  <input type="number" value={existingDebt} onChange={e => setExistingDebt(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-xl text-slate-700" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-indigo-500 uppercase mb-2">Target DTI Limit (%)</label>
                  <input type="range" min="20" max="50" value={targetDti} onChange={e => setTargetDti(Number(e.target.value))} className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
                  <div className="flex justify-between mt-2 font-black text-[10px] text-slate-400">
                    <span>Conservative (28%)</span>
                    <span className="text-indigo-600 font-black">{targetDti}%</span>
                    <span>Aggressive (45%)</span>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>

        <div className="lg:col-span-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-600 p-10 rounded-[3rem] text-white shadow-xl flex flex-col justify-center text-center relative overflow-hidden">
               <p className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-1">
                 {mode === 'prequal' ? 'Max Payment Allowed' : mode === 'refinance' ? 'Monthly Saving' : 'EMI Delta'}
               </p>
               <h3 className="text-5xl font-black text-white tracking-tighter">
                 ${Math.round(mode === 'prequal' ? results.maxAllowedPayment : results.monthlySavings).toLocaleString()}
               </h3>
               <div className="absolute -right-10 -bottom-10 text-[140px] font-black text-white/5 pointer-events-none select-none">
                 {mode === 'prequal' ? 'MAX' : '$$'}
               </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center text-center">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                 {mode === 'prequal' ? 'Safety Verdict' : mode === 'refinance' ? 'Net Break-Even' : 'Interest Impact'}
               </p>
               <h4 className={`text-3xl font-black ${mode === 'prequal' ? (targetDti <= 36 ? 'text-emerald-500' : 'text-amber-500') : 'text-slate-900'}`}>
                 {mode === 'prequal' ? (targetDti <= 36 ? 'Safe ✅' : 'Aggressive ⚠️') : 
                  mode === 'refinance' ? (results.breakEvenMonths === Infinity ? 'N/A' : `${Math.ceil(results.breakEvenMonths)} Mo.`) : 
                  `$${Math.round(Math.abs(results.interest1 - results.interest2)).toLocaleString()}`}
               </h4>
               <p className="text-[9px] font-bold text-slate-400 uppercase mt-2">
                 {mode === 'refinance' && results.breakEvenMonths !== Infinity ? `Profit realization in ${Math.floor(results.breakEvenMonths/12)}y ${Math.ceil(results.breakEvenMonths%12)}m` : mode === 'prequal' ? `DTI threshold set to ${targetDti}%` : 'Lifetime interest delta'}
               </p>
            </div>
          </div>

          <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex items-start gap-8 shadow-2xl">
             <div className="text-5xl">🤖</div>
             <div className="flex-1">
                <h4 className="text-indigo-400 font-black uppercase text-[10px] tracking-widest mb-4">Gemini Strategic Logic</h4>
                {loadingAdvice ? (
                  <div className="space-y-2 animate-pulse"><div className="h-4 bg-white/10 rounded w-full"></div><div className="h-4 bg-white/10 rounded w-2/3"></div></div>
                ) : (
                  <p className="text-xl text-slate-200 italic font-medium leading-relaxed">{advice}</p>
                )}
             </div>
          </div>

          {mode === 'compare' && (
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
               <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Lifetime Cost Projection</h4>
               <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { name: 'Option A', interest: results.interest1 },
                      { name: 'Option B', interest: results.interest2 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                      <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                      <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                      <Bar dataKey="interest" radius={[10, 10, 0, 0]}>
                        <Cell fill="#6366f1" />
                        <Cell fill="#4f46e5" />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
               </div>
            </div>
          )}
        </div>
      </div>

      <section className="mt-20 pt-16 border-t border-slate-200 space-y-16">
        <header className="max-w-3xl">
          <h3 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em] mb-4">System Audit & Transparency</h3>
          <h2 className="text-4xl font-black text-slate-900 leading-tight">The Math Behind the <span className="text-indigo-600">Intelligence</span></h2>
          <p className="text-slate-500 mt-4 text-lg font-medium leading-relaxed">
            We don't just show numbers; we show our work. Every calculation in Loan Intel follows standardized financial accounting principles verified for banking-grade accuracy.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-indigo-600 pl-6">Compare Logic</h4>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Utilizes the <strong>standard amortization formula</strong> used by primary lenders. We solve for the monthly periodic rate (APR/12) and compound it over the full tenure. The interest shown is the absolute sum of every interest payment over the life of the loan.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-slate-900 pl-6">Refinance Audit</h4>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              We apply a <strong>Sunk Cost Recovery</strong> analysis. The break-even point is the specific month where your cumulative monthly savings equals your upfront refinancing costs. This is the only binary way to determine if a refinance is economically "profitable."
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-emerald-600 pl-6">Prequal Audit</h4>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Follows the <strong>Front-End/Back-End DTI</strong> standard (Debt-to-Income). We calculate the maximum monthly payment capacity by ensuring your total debt obligations do not exceed your chosen risk ceiling (standard 36%).
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
           <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                 <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Verification QA: How is it done?</h4>
                 <div className="p-8 bg-white rounded-3xl space-y-6 border border-slate-200 shadow-sm">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-indigo-600 uppercase">Reducing Balance Logic</p>
                      <p className="text-xs font-bold text-slate-600 leading-relaxed">Interest is calculated on the remaining principal every month, not the original amount. This is the most accurate reflection of retail banking systems.</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-emerald-600 uppercase">36% DTI Benchmark</p>
                      <p className="text-xs font-bold text-slate-600 leading-relaxed">Default "Safe" threshold used for pre-approval simulation, matching Fannie Mae/Freddie Mac guidelines.</p>
                    </div>
                 </div>
              </div>
              <div className="space-y-4">
                 <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Formula Ledger</h4>
                 <div className="p-8 bg-slate-900 rounded-3xl font-mono text-[11px] text-indigo-300 leading-relaxed overflow-x-auto shadow-2xl">
                    <span className="text-white opacity-40">// EMI Calculation</span><br/>
                    const r = rate / 12 / 100;<br/>
                    const n = years * 12;<br/>
                    EMI = (P * r * (1 + r)^n) / ((1 + r)^n - 1);<br/><br/>
                    <span className="text-white opacity-40">// Break Even</span><br/>
                    BreakEven = ClosingCosts / (OldEMI - NewEMI);
                 </div>
                 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center mt-4">Audited Mathematical Core v2.4.1</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default LoanComparison;

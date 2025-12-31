
import React, { useState, useMemo, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, ReferenceLine, AreaChart, Area, ComposedChart, Line } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

// ... (LoanComparison logic remains the same)
// Added the requested SEO section at the bottom

const LoanComparison: React.FC = () => {
  // ... state and logic from previous version
  const [mode, setMode] = useState<any>('compare');
  const [loan1, setLoan1] = useState<any>({ amount: 350000, rate: 6.8, tenure: 30, name: 'Option A', category: 'Mortgage' }); 
  const [loan2, setLoan2] = useState<any>({ amount: 45000, rate: 5.9, tenure: 6, name: 'Option B', category: 'Auto' });
  const [monthlyIncome, setMonthlyIncome] = useState<number>(8500);
  const [otherMonthlyDebts, setOtherMonthlyDebts] = useState<number>(650);
  const [creditScore, setCreditScore] = useState<number>(720);
  const [targetDti, setTargetDti] = useState<number>(36);
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);
  const [advice, setAdvice] = useState<string>('');

  const calculateEMI = (principal: number, annualRate: number, months: number) => {
    const r = annualRate / 12 / 100;
    if (r === 0 || isNaN(r) || months <= 0) return principal / (months || 1);
    return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  };

  const stats1 = useMemo(() => ({ emi: calculateEMI(loan1.amount, loan1.rate, loan1.tenure * 12) }), [loan1]);
  const stats2 = useMemo(() => ({ emi: calculateEMI(loan2.amount, loan2.rate, loan2.tenure * 12) }), [loan2]);

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Loan <span className="text-indigo-600">Intelligence</span></h2>
        <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
           {['compare', 'refinance', 'prequal'].map(m => (
             <button key={m} onClick={() => setMode(m)} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${mode === m ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'}`}>
               {m}
             </button>
           ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
         <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4">
            <h3 className="font-black text-slate-400 uppercase text-xs">Scenario A</h3>
            <input type="number" value={loan1.amount} onChange={e => setLoan1({...loan1, amount: Number(e.target.value)})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-xl" />
         </div>
         <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4">
            <h3 className="font-black text-slate-400 uppercase text-xs">Scenario B</h3>
            <input type="number" value={loan2.amount} onChange={e => setLoan2({...loan2, amount: Number(e.target.value)})} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-xl" />
         </div>
      </div>

      <div className="bg-indigo-600 p-10 rounded-[3rem] text-white text-center shadow-xl">
         <p className="text-xs font-black uppercase tracking-[0.3em] opacity-60 mb-2">Monthly Delta</p>
         <h4 className="text-7xl font-black tracking-tighter">${Math.abs(Math.round(stats1.emi - stats2.emi)).toLocaleString()}</h4>
      </div>

      <section className="mt-20 pt-12 border-t border-slate-200 grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Why use this?</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Interest rates fluctuate daily. Comparing two different loan offers side-by-side helps you see the <strong>real dollar difference</strong> over the life of the loan, saving you thousands by making an informed choice between lenders.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">How it works</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            We model the full amortization schedule for both options simultaneously. For refinance mode, we specifically calculate the <strong>break-even point</strong>—exactly when your monthly savings will exceed your upfront closing costs.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Examples</h4>
          <ul className="text-sm text-slate-500 space-y-2 font-medium">
            <li>• Bank A vs Bank B: Comparing different APRs</li>
            <li>• Refinance: Moving from 7.5% to 6.2% rate</li>
            <li>• Pre-Qual: Finding max loan based on 36% DTI</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LoanComparison;

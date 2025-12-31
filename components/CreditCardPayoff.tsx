
import React, { useState, useMemo, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

const CreditCardPayoff: React.FC = () => {
  const [balance, setBalance] = useState<number>(5000);
  const [interestRate, setInterestRate] = useState<number>(24.99);
  const [minPaymentPercent, setMinPaymentPercent] = useState<number>(2);
  const [customMonthly, setCustomMonthly] = useState<number>(250);
  
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const stats = useMemo(() => {
    const r = interestRate / 100 / 12;
    
    // Minimum payment only strategy
    let minBalance = balance;
    let minMonths = 0;
    let minTotalInterest = 0;
    const minSchedule = [];
    
    while (minBalance > 0.01 && minMonths < 600) {
      const interest = minBalance * r;
      const minPaymentAmount = Math.max(25, (minBalance * minPaymentPercent / 100) + interest);
      const principal = Math.min(minBalance, minPaymentAmount - interest);
      
      minTotalInterest += interest;
      minBalance -= principal;
      minMonths++;
      
      if (minMonths % 12 === 0 || minBalance === 0) {
        minSchedule.push({ month: minMonths, balance: Math.round(minBalance), type: 'Min Only' });
      }
    }

    // Custom monthly strategy
    let customBalance = balance;
    let customMonths = 0;
    let customTotalInterest = 0;
    const customSchedule = [];

    while (customBalance > 0.01 && customMonths < 600) {
      const interest = customBalance * r;
      const payment = Math.min(customBalance + interest, customMonthly);
      const principal = payment - interest;
      
      customTotalInterest += interest;
      customBalance -= principal;
      customMonths++;
      
      if (customMonths % 12 === 0 || customBalance === 0) {
        customSchedule.push({ month: customMonths, balance: Math.round(customBalance), type: 'Strategy' });
      }
    }

    return {
      minMonths,
      minTotalInterest,
      customMonths,
      customTotalInterest,
      interestSaved: Math.max(0, minTotalInterest - customTotalInterest),
      timeSaved: Math.max(0, minMonths - customMonths),
      minSchedule,
      customSchedule
    };
  }, [balance, interestRate, minPaymentPercent, customMonthly]);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const msg = await getFinancialAdvice({ balance, interestRate, customMonthly, ...stats }, 'Credit Card Debt Escape Strategy');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [balance, interestRate, customMonthly]);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900">Card Payoff <span className="text-rose-600">Intel</span></h2>
          <p className="text-slate-500 mt-1 uppercase text-[10px] font-black tracking-widest">High-Interest Debt Exit Strategy</p>
        </div>
        {stats.interestSaved > 0 && (
          <div className="bg-emerald-50 px-6 py-3 rounded-2xl border border-emerald-100 shadow-sm animate-bounce">
            <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Interest Savings</p>
            <p className="text-xl font-black text-emerald-600">${Math.round(stats.interestSaved).toLocaleString()}</p>
          </div>
        )}
      </header>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">Current Balance ($)</label>
                <input 
                  type="number" value={balance} onChange={(e) => setBalance(Number(e.target.value))}
                  className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-rose-500 font-black text-slate-700 text-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">APR (%)</label>
                  <input 
                    type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-rose-500 font-black text-slate-700 text-xl"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">Min Pay %</label>
                  <input 
                    type="number" value={minPaymentPercent} onChange={(e) => setMinPaymentPercent(Number(e.target.value))}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-rose-500 font-black text-slate-700 text-xl"
                  />
                </div>
              </div>
              <div className="pt-8 border-t border-slate-50">
                <label className="block text-[10px] font-black text-indigo-500 uppercase mb-4 tracking-widest">Target Monthly Payment ($)</label>
                <input 
                  type="number" value={customMonthly} onChange={(e) => setCustomMonthly(Number(e.target.value))}
                  className="w-full p-4 bg-indigo-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-indigo-700 text-xl shadow-inner"
                />
                <p className="mt-2 text-[8px] font-black text-slate-400 uppercase tracking-tighter">Recommended: Fixed amount for maximum efficiency</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-6 rounded-[2rem] text-white shadow-xl flex flex-col justify-center">
               <p className="text-[10px] font-black uppercase opacity-60 tracking-widest mb-1">Payoff Time</p>
               <p className="text-3xl font-black">{stats.customMonths} <span className="text-xs uppercase">Months</span></p>
               {stats.timeSaved > 0 && <p className="text-[9px] font-black text-emerald-400 mt-1">Saved {Math.floor(stats.timeSaved/12)} Yrs!</p>}
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-center">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Interest</p>
               <p className="text-2xl font-black text-rose-600">${Math.round(stats.customTotalInterest).toLocaleString()}</p>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-center">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Lifetime Savings</p>
               <p className="text-2xl font-black text-emerald-600">${Math.round(stats.interestSaved).toLocaleString()}</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
             <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Debt Decay Comparison</h4>
             <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={stats.minSchedule}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} label={{ value: 'Months', position: 'bottom', fontSize: 10, fontWeight: 900 }} />
                    <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    <Legend />
                    <Area type="monotone" name="Minimum Only" dataKey="balance" stroke="#cbd5e1" fill="#f1f5f9" strokeWidth={2} />
                    <Area type="monotone" name="Optimized Strategy" data={stats.customSchedule} dataKey="balance" stroke="#6366f1" fill="#6366f1" fillOpacity={0.1} strokeWidth={4} />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex items-center gap-8 shadow-2xl relative overflow-hidden border border-white/5">
            <div className="text-6xl animate-pulse">🤖</div>
            <div className="flex-1 space-y-2">
              <h4 className="text-indigo-400 font-black uppercase text-[10px] tracking-widest">Gemini Debt Logic</h4>
              {loadingAdvice ? (
                <div className="animate-pulse space-y-2">
                  <div className="h-4 bg-white/5 rounded w-full"></div>
                  <div className="h-4 bg-white/5 rounded w-2/3"></div>
                </div>
              ) : (
                <p className="text-xl text-slate-200 italic font-medium leading-relaxed">
                  {advice || 'Synthesizing your debt profile...'}
                </p>
              )}
            </div>
            <div className="absolute -right-10 -top-10 text-[200px] font-black text-white/5 select-none pointer-events-none uppercase">SNOWBALL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardPayoff;

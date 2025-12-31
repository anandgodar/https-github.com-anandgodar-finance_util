
import React, { useState, useMemo, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

const EMICalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(50000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenure, setTenure] = useState<number>(5);
  const [extraPayment, setExtraPayment] = useState<number>(0);
  
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const stats = useMemo(() => {
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    const emi = r > 0 ? (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : loanAmount / n;
    const totalWithoutExtra = emi * n;
    const totalInterestWithoutExtra = totalWithoutExtra - loanAmount;

    // Calculate with Extra Payment
    let balance = loanAmount;
    let monthsWithExtra = 0;
    let totalPaidWithExtra = 0;
    const schedule = [];

    while (balance > 0 && monthsWithExtra < 600) { // Safety cap 50 years
      const interest = balance * r;
      const principalFromEmi = emi - interest;
      const totalPrincipalPaid = principalFromEmi + extraPayment;
      
      const actualPayment = Math.min(balance + interest, emi + extraPayment);
      totalPaidWithExtra += actualPayment;
      balance = Math.max(0, balance + interest - actualPayment);
      monthsWithExtra++;
      
      if (monthsWithExtra % 12 === 0 || balance === 0) {
        schedule.push({ month: monthsWithExtra, balance: Math.round(balance) });
      }
    }

    const interestSaved = totalInterestWithoutExtra - (totalPaidWithExtra - loanAmount);
    const monthsSaved = n - monthsWithExtra;

    return {
      monthlyEmi: emi.toFixed(2),
      totalInterest: totalInterestWithoutExtra.toFixed(2),
      totalAmount: totalWithoutExtra.toFixed(2),
      interestSaved: Math.max(0, interestSaved).toFixed(2),
      monthsSaved: Math.max(0, monthsSaved),
      monthsWithExtra,
      schedule
    };
  }, [loanAmount, interestRate, tenure, extraPayment]);

  const data = [
    { name: 'Principal', value: loanAmount, color: '#4f46e5' },
    { name: 'Interest', value: parseFloat(stats.totalInterest), color: '#fbbf24' },
  ];

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const msg = await getFinancialAdvice({ loanAmount, interestRate, tenure, emi: stats.monthlyEmi, extra: extraPayment, saved: stats.interestSaved }, 'Loan EMI & Prepayment');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [loanAmount, interestRate, tenure, extraPayment]);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900">EMI <span className="text-indigo-600">Accelerator</span></h2>
          <p className="text-slate-500 mt-1 uppercase text-[10px] font-black tracking-widest">Advanced Debt Payoff Analysis</p>
        </div>
        {extraPayment > 0 && (
          <div className="bg-emerald-50 px-6 py-3 rounded-2xl border border-emerald-100 animate-bounce">
            <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Interest Saved</p>
            <p className="text-xl font-black text-emerald-600">${Number(stats.interestSaved).toLocaleString()}</p>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">Loan Principal</label>
                <input 
                  type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-slate-700 text-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">Rate (%)</label>
                  <input 
                    type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-slate-700 text-xl"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">Years</label>
                  <input 
                    type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-slate-700 text-xl"
                  />
                </div>
              </div>
              <div className="pt-6 border-t border-slate-50">
                <label className="block text-[10px] font-black text-indigo-500 uppercase mb-4 tracking-widest">Extra Monthly Payment ($)</label>
                <input 
                  type="number" value={extraPayment} onChange={(e) => setExtraPayment(Number(e.target.value))}
                  className="w-full p-4 bg-indigo-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-indigo-700 text-xl"
                />
                <p className="mt-2 text-[9px] font-bold text-slate-400">Apply this amount towards principal every month.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-indigo-600 p-6 rounded-[2rem] text-white shadow-xl">
              <p className="text-[10px] font-black uppercase opacity-60 tracking-widest mb-1">Standard EMI</p>
              <p className="text-3xl font-black">${Math.round(Number(stats.monthlyEmi)).toLocaleString()}</p>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Interest</p>
              <p className="text-2xl font-black text-slate-800">${Math.round(Number(stats.totalInterest)).toLocaleString()}</p>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Payoff Time</p>
              <p className="text-2xl font-black text-indigo-600">{stats.monthsWithExtra} <span className="text-xs">Months</span></p>
              {stats.monthsSaved > 0 && <p className="text-[9px] font-black text-emerald-500 mt-1">Saved {stats.monthsSaved} Months!</p>}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
             <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Payoff Trajectory</h4>
             <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={stats.schedule}>
                    <defs>
                      <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} tickFormatter={(v) => `M${v}`} />
                    <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="balance" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorBalance)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-[2rem] text-white flex items-center gap-6 shadow-2xl relative overflow-hidden">
             <div className="text-5xl animate-pulse">🤖</div>
             <div className="flex-1">
               <h4 className="text-indigo-400 font-black uppercase text-[10px] tracking-widest mb-1">Gemini Debt Logic</h4>
               {loadingAdvice ? (
                 <div className="h-4 bg-white/10 rounded w-2/3 animate-pulse"></div>
               ) : (
                 <p className="text-lg italic font-medium leading-relaxed">{advice}</p>
               )}
             </div>
             <div className="absolute right-0 top-0 p-4 opacity-5 text-6xl font-black">DEBT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;

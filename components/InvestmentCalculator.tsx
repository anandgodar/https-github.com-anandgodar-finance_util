
import React, { useState, useMemo, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

const InvestmentCalculator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(10000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500);
  const [expectedReturn, setExpectedReturn] = useState<number>(10);
  const [years, setYears] = useState<number>(20);
  const [inflationRate, setInflationRate] = useState<number>(2.5);
  const [showInflationAdjusted, setShowInflationAdjusted] = useState<boolean>(true);
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const data = useMemo(() => {
    let balance = initialInvestment;
    let totalInvested = initialInvestment;
    const monthlyRate = expectedReturn / 100 / 12;
    const result = [];
    for (let i = 0; i <= years; i++) {
      result.push({ year: `Year ${i}`, balance: Math.round(balance), invested: Math.round(totalInvested) });
      for (let m = 0; m < 12; m++) {
        balance = (balance + monthlyContribution) * (1 + monthlyRate);
        totalInvested += monthlyContribution;
      }
    }
    return result;
  }, [initialInvestment, monthlyContribution, expectedReturn, years]);

  const finalStats = useMemo(() => {
    const last = data[data.length - 1];
    return { finalBalance: last.balance, totalInvested: last.invested, totalEarnings: last.balance - last.invested };
  }, [data]);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const msg = await getFinancialAdvice(finalStats, 'Investment Growth Strategy');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [initialInvestment, monthlyContribution, expectedReturn, years]);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <header>
        <h2 className="text-3xl font-black text-slate-900">Wealth <span className="text-indigo-600">Projector</span></h2>
        <p className="text-slate-500 mt-1">Visualize your financial future through the power of compounding.</p>
      </header>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Initial ($)</label>
            <input type="number" value={initialInvestment} onChange={(e) => setInitialInvestment(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Monthly ($)</label>
            <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold" />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative shadow-2xl overflow-hidden">
             <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">Estimated Portfolio Value</p>
             <h3 className="text-6xl font-black tracking-tighter">${finalStats.finalBalance.toLocaleString()}</h3>
             <div className="absolute -right-10 -bottom-10 text-[200px] text-white/5 font-black">GROWTH</div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="balance" stroke="#4f46e5" strokeWidth={4} fill="#4f46e5" fillOpacity={0.1} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <section className="mt-16 pt-12 border-t border-slate-200 grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Why use this?</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Compound interest is the 8th wonder of the world. Seeing how consistent $500/month grows over 30 years vs 20 years is a powerful motivator to <strong>start early</strong>. It helps you set realistic goals for retirement or major life events.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">How it works</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            The calculator uses the compound interest formula with monthly additions. It assumes your returns are reinvested and compounded monthly, which is the standard model for index fund investing and modern brokerage accounts.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Examples</h4>
          <ul className="text-sm text-slate-500 space-y-2 font-medium">
            <li>• Retirement: $1000/mo @ 8% for 35 yrs</li>
            <li>• Child's College: $200/mo @ 7% for 18 yrs</li>
            <li>• House Downpayment: $2000/mo @ 5% for 5 yrs</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default InvestmentCalculator;

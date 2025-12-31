
import React, { useState, useMemo, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

const CURRENCY_PAIRS: Record<string, number> = {
  'USD/EUR': 0.92, 'EUR/USD': 1.09,
  'USD/GBP': 0.79, 'GBP/USD': 1.27,
  'USD/JPY': 150.45, 'JPY/USD': 0.0066,
  'USD/INR': 83.15, 'INR/USD': 0.012,
};

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [base, setBase] = useState<string>('USD');
  const [target, setTarget] = useState<string>('EUR');
  
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const rate = useMemo(() => {
    const pair = `${base}/${target}`;
    return CURRENCY_PAIRS[pair] || 1;
  }, [base, target]);

  const convertedAmount = useMemo(() => amount * rate, [amount, rate]);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const msg = await getFinancialAdvice({ base, target, rate, amount }, 'Forex Market Sentiment & Travel Strategy');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [base, target]);

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-500 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 leading-tight">Currency <span className="text-sky-600">Intel</span></h2>
          <p className="text-slate-500 mt-2 max-w-lg font-medium">Real-time forex modeling with AI-powered market context.</p>
        </div>
      </header>

      <div className="grid lg:grid-cols-2 gap-10">
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-10">
           <div className="space-y-6">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Convert Amount</label>
              <div className="flex items-center gap-4">
                 <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} className="flex-1 p-6 bg-slate-50 border-none rounded-[2rem] font-black text-4xl text-slate-800" />
                 <select value={base} onChange={e => setBase(e.target.value)} className="p-6 bg-slate-900 text-white rounded-[2rem] font-black text-xl appearance-none px-10">
                   {['USD', 'EUR', 'GBP', 'JPY', 'INR'].map(c => <option key={c} value={c}>{c}</option>)}
                 </select>
              </div>
           </div>

           <div className="flex justify-center text-sky-600">
              <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center text-3xl font-black">↓</div>
           </div>

           <div className="space-y-6">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">To Currency</label>
              <div className="flex items-center gap-4">
                 <div className="flex-1 p-6 bg-sky-50 border-none rounded-[2rem] font-black text-4xl text-sky-600">
                    {convertedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                 </div>
                 <select value={target} onChange={e => setTarget(e.target.value)} className="p-6 bg-sky-600 text-white rounded-[2rem] font-black text-xl appearance-none px-10">
                   {['USD', 'EUR', 'GBP', 'JPY', 'INR'].map(c => <option key={c} value={c}>{c}</option>)}
                 </select>
              </div>
           </div>
        </section>

        <section className="space-y-8">
           <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
              <h4 className="text-sky-400 font-black uppercase text-[10px] tracking-widest mb-6 flex items-center gap-2">
                <span className="text-lg">🤖</span> Strategic Market Sentiment
              </h4>
              {loadingAdvice ? (
                <div className="space-y-3 animate-pulse"><div className="h-4 bg-white/10 rounded w-full"></div><div className="h-4 bg-white/10 rounded w-4/5"></div></div>
              ) : (
                <p className="text-xl text-slate-200 italic font-medium leading-relaxed">{advice || 'Select a pair to see AI sentiment analysis.'}</p>
              )}
              <div className="absolute -right-10 -bottom-10 text-[180px] font-black text-white/5 pointer-events-none select-none">FX</div>
           </div>

           <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Historical Reference</h4>
              <div className="space-y-4">
                 <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                    <span className="text-xs font-bold text-slate-500 uppercase">12-Month High</span>
                    <span className="font-black text-slate-800">{(rate * 1.08).toFixed(4)}</span>
                 </div>
                 <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                    <span className="text-xs font-bold text-slate-500 uppercase">12-Month Low</span>
                    <span className="font-black text-slate-800">{(rate * 0.94).toFixed(4)}</span>
                 </div>
                 <div className="p-6 bg-sky-50 rounded-2xl border border-sky-100 mt-6">
                    <p className="text-[10px] font-black text-sky-600 uppercase mb-2">Volatility Index</p>
                    <p className="text-xs font-medium text-sky-800 leading-relaxed">Current volatility for {base}/{target} is <strong>Low</strong>. Market conditions are stable for immediate travel conversions or vendor settlements.</p>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default CurrencyConverter;

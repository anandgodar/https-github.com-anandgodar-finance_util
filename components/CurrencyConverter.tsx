
import React, { useState, useMemo, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

const CURRENCIES = [
  { code: 'USD', name: 'US Dollar', symbol: '$', rate: 1 },
  { code: 'EUR', name: 'Euro', symbol: '€', rate: 0.92 },
  { code: 'GBP', name: 'British Pound', symbol: '£', rate: 0.79 },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', rate: 82.95 },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', rate: 150.12 },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', rate: 1.35 },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', rate: 1.53 },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', rate: 1.34 },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', rate: 3.67 },
];

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  // Mock historical data for visual flair
  const chartData = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      rate: (CURRENCIES.find(c => c.code === toCurrency)?.rate || 1) / (CURRENCIES.find(c => c.code === fromCurrency)?.rate || 1) * (1 + (Math.random() - 0.5) * 0.05)
    }));
  }, [fromCurrency, toCurrency]);

  const conversion = useMemo(() => {
    const fromRate = CURRENCIES.find(c => c.code === fromCurrency)?.rate || 1;
    const toRate = CURRENCIES.find(c => c.code === toCurrency)?.rate || 1;
    const baseAmount = amount / fromRate;
    const result = baseAmount * toRate;
    return {
      result,
      rate: toRate / fromRate,
      fromSymbol: CURRENCIES.find(c => c.code === fromCurrency)?.symbol,
      toSymbol: CURRENCIES.find(c => c.code === toCurrency)?.symbol
    };
  }, [amount, fromCurrency, toCurrency]);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const contextData = { from: fromCurrency, to: toCurrency, amount, rate: conversion.rate };
    const msg = await getFinancialAdvice(contextData, 'Currency Exchange & Global Market Context');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [fromCurrency, toCurrency, amount]);

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      <header>
        <h2 className="text-3xl font-black text-slate-900">Currency <span className="text-indigo-600">Intel</span></h2>
        <p className="text-slate-500 mt-1 uppercase text-[10px] font-black tracking-widest">Global Forex & Conversion Engine</p>
      </header>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">Amount to Convert</label>
                <div className="relative">
                   <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-slate-400 text-xl">{conversion.fromSymbol}</span>
                   <input 
                    type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-slate-700 text-xl"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">From</label>
                  <select 
                    value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-slate-700 appearance-none"
                  >
                    {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.code} - {c.name}</option>)}
                  </select>
                </div>

                <div className="flex justify-center -my-2 relative z-10">
                  <button 
                    onClick={swapCurrencies}
                    className="w-12 h-12 bg-white border border-slate-100 shadow-md rounded-full flex items-center justify-center text-xl hover:rotate-180 transition-all duration-500 text-indigo-600"
                  >
                    ⇄
                  </button>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">To</label>
                  <select 
                    value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-slate-700 appearance-none"
                  >
                    {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.code} - {c.name}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="bg-slate-900 p-10 rounded-[3rem] text-white relative overflow-hidden shadow-2xl border border-white/5">
            <div className="relative z-10">
              <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Conversion Result</p>
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                <h3 className="text-7xl font-black tracking-tighter">
                  {conversion.toSymbol}{conversion.result.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </h3>
                <span className="text-2xl font-black text-slate-500 mb-2 uppercase">{toCurrency}</span>
              </div>
              <p className="mt-8 text-indigo-200 text-sm font-bold bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
                1 {fromCurrency} = {conversion.rate.toFixed(4)} {toCurrency}
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 text-[200px] font-black text-white/5 select-none pointer-events-none uppercase">FOREX</div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
             <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Exchange Trajectory (30 Day Trend)</h4>
             <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="day" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} tickFormatter={(v) => `D${v}`} />
                    <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} domain={['auto', 'auto']} />
                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="rate" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorRate)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          <div className="bg-indigo-600 p-8 rounded-[2.5rem] text-white flex items-center gap-8 shadow-2xl relative overflow-hidden">
             <div className="text-6xl animate-pulse">🤖</div>
             <div className="flex-1 space-y-2">
               <h4 className="text-indigo-200 font-black uppercase text-[10px] tracking-widest">Gemini Forex Intel</h4>
               {loadingAdvice ? (
                 <div className="h-4 bg-white/10 rounded w-2/3 animate-pulse"></div>
               ) : (
                 <p className="text-lg italic font-medium leading-relaxed">{advice || 'Evaluating global market factors for this pair...'}</p>
               )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
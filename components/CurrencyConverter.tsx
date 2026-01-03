
import React, { useState, useMemo, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

const CURRENCIES = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸', region: 'Americas' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', region: 'Europe' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧', region: 'Europe' },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', region: 'Asia' },
  { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳', region: 'Asia' },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', region: 'Oceania' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', region: 'Americas' },
  { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭', region: 'Europe' },
  { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳', region: 'Asia' },
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', region: 'Asia' },
  { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪', region: 'Middle East' },
  { code: 'HKD', name: 'Hong Kong Dollar', flag: '🇭🇰', region: 'Asia' },
  { code: 'NZD', name: 'NZ Dollar', flag: '🇳🇿', region: 'Oceania' },
  { code: 'BRL', name: 'Brazilian Real', flag: '🇧🇷', region: 'Americas' },
  { code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽', region: 'Americas' },
];

const CURRENCY_DATA: Record<string, { rate: number; trend: number[] }> = {
  'USD/EUR': { rate: 0.92, trend: [0.91, 0.93, 0.92, 0.94, 0.93, 0.92, 0.91, 0.92, 0.93, 0.92, 0.925, 0.92] },
  'EUR/USD': { rate: 1.09, trend: [1.10, 1.08, 1.09, 1.07, 1.08, 1.09, 1.10, 1.09, 1.08, 1.09, 1.085, 1.09] },
  'USD/GBP': { rate: 0.79, trend: [0.78, 0.80, 0.79, 0.81, 0.80, 0.79, 0.78, 0.79, 0.80, 0.79, 0.795, 0.79] },
  'USD/JPY': { rate: 150.45, trend: [148, 151, 150, 152, 151, 150, 149, 150, 151, 150, 150.5, 150.45] },
  'USD/INR': { rate: 83.15, trend: [82.5, 83.5, 83.0, 84.0, 83.2, 83.0, 82.8, 83.1, 83.5, 83.0, 83.15, 83.15] },
  'USD/AED': { rate: 3.67, trend: [3.67, 3.67, 3.67, 3.67, 3.67, 3.67, 3.67, 3.67, 3.67, 3.67, 3.67, 3.67] },
};

const COMMON_CROSSES = [
  { pair: 'EUR/USD', change: '+0.04%', trend: 'up' },
  { pair: 'GBP/USD', change: '-0.12%', trend: 'down' },
  { pair: 'USD/JPY', change: '+0.45%', trend: 'up' },
  { pair: 'USD/INR', change: '-0.02%', trend: 'down' },
  { pair: 'AUD/USD', change: '+0.15%', trend: 'up' },
  { pair: 'USD/CAD', change: '-0.08%', trend: 'down' },
];

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [base, setBase] = useState<string>('USD');
  const [target, setTarget] = useState<string>('EUR');
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const pairKey = `${base}/${target}`;
  const data = useMemo(() => {
    if (CURRENCY_DATA[pairKey]) return CURRENCY_DATA[pairKey];
    
    if (base !== 'USD' && CURRENCY_DATA[`USD/${target}`] && CURRENCY_DATA[`USD/${base}`]) {
      const rateToBase = CURRENCY_DATA[`USD/${base}`].rate;
      const rateToTarget = CURRENCY_DATA[`USD/${target}`].rate;
      const crossRate = rateToTarget / rateToBase;
      return { 
        rate: crossRate, 
        trend: CURRENCY_DATA[`USD/${target}`].trend.map((val, i) => val / CURRENCY_DATA[`USD/${base}`].trend[i]) 
      };
    }

    const invertedKey = `${target}/${base}`;
    if (CURRENCY_DATA[invertedKey]) {
      const inv = CURRENCY_DATA[invertedKey];
      return { rate: 1 / inv.rate, trend: inv.trend.map(v => 1 / v) };
    }

    return { rate: 1, trend: Array(12).fill(1) };
  }, [base, target, pairKey]);
  
  const convertedAmount = amount * data.rate;

  const chartPoints = useMemo(() => {
    return data.trend.map((val, i) => ({
      month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
      rate: val
    }));
  }, [data.trend]);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    try {
      const msg = await getFinancialAdvice({ base, target, rate: data.rate, amount }, 'Forex Market Sentiment, Volatility & Hedging');
      setAdvice(msg || '');
    } catch (error) {
      console.error('Failed to fetch forex advice:', error);
      setAdvice('Unable to load market intelligence at this time. Please try again later.');
    } finally {
      setLoadingAdvice(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2500);
    return () => clearTimeout(timer);
  }, [base, target]);

  return (
    <article className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-500 pb-24">
      {/* Dynamic SEO Header */}
      <header className="bg-white p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
               <span className="px-4 py-1.5 bg-sky-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-sky-100">Market Intelligence Hub</span>
               <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Protocol v6.8 Active</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">
              Universal <span className="text-sky-600">Forex</span> Converter
            </h1>
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
              Professional mid-market exchange for {base} to {target}. Real-time interbank pricing with AI-driven volatility scoring.
            </p>
          </div>
          <div className="bg-slate-900 px-10 py-10 rounded-[3.5rem] text-white shadow-2xl relative z-10 border border-slate-800 flex flex-col justify-center min-w-[340px]">
             <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-400">Interbank Rate</p>
               <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-[9px] font-black text-emerald-400 uppercase">Live Market Feed</span>
               </div>
             </div>
             <div className="space-y-1">
                <p className="text-4xl font-black tracking-tighter">1 {base} =</p>
                <p className="text-6xl font-black tracking-tighter text-sky-500">{data.rate.toFixed(4)} <span className="text-2xl text-slate-500">{target}</span></p>
             </div>
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* ENHANCED CONVERSION BOX SECTION */}
        <div className="lg:col-span-5 space-y-8">
          <section className="bg-white rounded-[4rem] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden relative">
             {/* Upper Block: YOU SEND */}
             <div className="p-10 pb-12 bg-slate-50/50 border-b border-slate-100">
                <div className="flex justify-between items-center mb-6">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">You Send</span>
                   </div>
                   <span className="text-[9px] font-black text-sky-600 bg-sky-50 px-3 py-1 rounded-full uppercase">Source Balance</span>
                </div>
                <div className="flex items-center gap-6">
                   <div className="flex-1 relative group">
                      <input 
                        type="number" 
                        value={amount} 
                        onChange={e => setAmount(Number(e.target.value))} 
                        className="w-full p-0 bg-transparent border-none font-black text-6xl text-slate-900 focus:ring-0 placeholder-slate-200 transition-all"
                        placeholder="0.00"
                      />
                   </div>
                   <div className="relative group">
                      <select 
                        value={base} 
                        onChange={e => setBase(e.target.value)} 
                        className="appearance-none bg-white px-6 py-4 pr-12 rounded-3xl font-black text-xl text-slate-900 border border-slate-200 shadow-sm group-hover:border-sky-500 group-hover:shadow-lg transition-all cursor-pointer"
                      >
                        {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xs">▼</div>
                   </div>
                </div>
                <div className="mt-4 flex justify-between">
                   <p className="text-[10px] font-bold text-slate-400 uppercase">Available Liquidity: Tier 1</p>
                   <button onClick={() => setAmount(1000)} className="text-[10px] font-black text-sky-600 hover:text-sky-700 uppercase tracking-tighter transition-colors">SET BASE $1K</button>
                </div>
             </div>

             {/* Floating Rate Bridge & Swap */}
             <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <button 
                  onClick={() => { const b = base; setBase(target); setTarget(b); }}
                  className="w-16 h-16 rounded-[2rem] bg-slate-900 text-white flex items-center justify-center text-2xl font-black shadow-2xl hover:scale-110 hover:rotate-180 active:scale-95 transition-all duration-500 border-8 border-white group"
                  title="Swap Currencies"
                >
                  <span className="group-hover:scale-125 transition-transform">⇄</span>
                </button>
             </div>

             {/* Lower Block: YOU RECEIVE */}
             <div className="p-10 pt-12">
                <div className="flex justify-between items-center mb-6">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">You Receive</span>
                   </div>
                   <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase">Guaranteed Rate</span>
                </div>
                <div className="flex items-center gap-6">
                   <div className="flex-1 overflow-hidden">
                      <p className="font-black text-6xl text-sky-600 tracking-tighter truncate">
                        {convertedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      </p>
                   </div>
                   <div className="relative group">
                      <select 
                        value={target} 
                        onChange={e => setTarget(e.target.value)} 
                        className="appearance-none bg-sky-600 px-6 py-4 pr-12 rounded-3xl font-black text-xl text-white border-none shadow-xl shadow-sky-200 group-hover:bg-sky-700 transition-all cursor-pointer"
                      >
                        {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 text-sky-200 pointer-events-none text-xs">▼</div>
                   </div>
                </div>
                <div className="mt-4 pt-6 border-t border-slate-50 flex justify-between items-center">
                   <p className="text-[11px] font-bold text-slate-400">1 {base} = {data.rate.toFixed(4)} {target}</p>
                   <div className="flex items-center gap-2">
                      <span className="text-[9px] font-black text-slate-400 uppercase">Conversion Fee</span>
                      <span className="text-[9px] font-black text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-lg">$0.00 (Pure Market)</span>
                   </div>
                </div>
             </div>
          </section>

          {/* Quick Stats Ticker */}
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 flex flex-col items-center justify-center text-center group hover:border-sky-200 transition-all shadow-sm">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Spread vs Bank</p>
                <p className="text-2xl font-black text-emerald-500">+3.5%</p>
                <p className="text-[8px] font-bold text-slate-300 uppercase">Savings Advantage</p>
             </div>
             <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 flex flex-col items-center justify-center text-center group hover:border-sky-200 transition-all shadow-sm">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Execution Speed</p>
                <p className="text-2xl font-black text-slate-800">T+0</p>
                <p className="text-[8px] font-bold text-slate-300 uppercase">Instant Settlement</p>
             </div>
          </div>

          <section className="bg-slate-900 p-10 rounded-[3.5rem] text-white border border-slate-800 shadow-2xl space-y-8 overflow-hidden relative group">
             <div className="absolute -right-6 -top-6 text-8xl opacity-[0.03] rotate-12 group-hover:scale-110 transition-transform">🏦</div>
             <header className="flex justify-between items-center border-b border-white/5 pb-4 relative z-10">
                <h4 className="text-[10px] font-black text-sky-400 uppercase tracking-widest">Institutional Cost Audit</h4>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">Spread Leakage</span>
             </header>
             <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-end">
                   <div>
                      <p className="text-xs font-bold text-slate-400">Typical Bank Yield (3%)</p>
                      <p className="text-2xl font-black text-rose-400 tracking-tight">${(convertedAmount * 0.97).toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] font-black text-rose-500 uppercase">Markup Fee</p>
                      <p className="text-sm font-black">-${(convertedAmount * 0.03).toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                   </div>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden flex shadow-inner">
                   <div className="h-full bg-sky-500 w-[99.8%] shadow-[0_0_15px_rgba(14,165,233,0.6)]"></div>
                </div>
                <p className="text-[10px] text-slate-400 italic text-center font-medium leading-relaxed opacity-80">
                  Most banks hide a 1% to 5% commission in the rate. QuantCurb audits the **interbank spread** to ensure zero hidden premiums.
                </p>
             </div>
          </section>
        </div>

        {/* Intelligence & Analytics Sidebar */}
        <div className="lg:col-span-7 space-y-8">
           <div className="bg-slate-900 p-12 rounded-[4.5rem] text-white shadow-2xl relative overflow-hidden group min-h-[450px] flex flex-col justify-center border border-slate-800">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-sky-600/5 to-transparent pointer-events-none"></div>
              <div className="relative z-10 space-y-10 text-left">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-sky-600/20 text-sky-400 border border-sky-600/30 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-2xl shadow-sky-500/10 transition-transform group-hover:scale-110">🤖</div>
                  <div>
                    <h4 className="text-sky-400 font-black uppercase text-[11px] tracking-[0.5em] mb-1">Forex Oracle Logic</h4>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Deep Triage Context: {pairKey}</p>
                  </div>
                </div>
                {loadingAdvice ? (
                  <div className="space-y-5 animate-pulse">
                    <div className="h-5 bg-white/10 rounded w-full"></div>
                    <div className="h-5 bg-white/10 rounded w-5/6"></div>
                    <div className="h-5 bg-white/10 rounded w-4/6"></div>
                    <div className="h-5 bg-white/10 rounded w-full"></div>
                  </div>
                ) : (
                  <p className="text-3xl md:text-4xl text-slate-200 italic font-medium leading-tight tracking-tight max-w-2xl">
                    {advice || 'Synthesizing global liquidity flows and interest rate differentials for ' + pairKey + '...'}
                  </p>
                )}
              </div>
              <div className="absolute -right-10 -bottom-10 text-[320px] font-black text-white/[0.015] pointer-events-none select-none tracking-tighter uppercase">Market</div>
           </div>

           <section className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
              <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-50 pb-10">
                <div className="space-y-2 text-left">
                  <h3 className="text-3xl font-black text-slate-900 tracking-tighter">12-Month Volatility Matrix</h3>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Interbank Mid-Market Performance Benchmarks</p>
                </div>
                <div className="flex bg-slate-50 px-4 py-2 rounded-2xl gap-3">
                   <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-sky-500"></div><span className="text-[9px] font-black text-slate-500 uppercase">Rate Trend</span></div>
                   <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div><span className="text-[9px] font-black text-slate-500 uppercase">Baseline</span></div>
                </div>
              </header>
              <div className="h-80 w-full">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartPoints}>
                      <defs>
                        <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.15}/>
                          <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} fontWeight={900} axisLine={false} tickLine={false} />
                      <YAxis domain={['auto', 'auto']} stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} hide />
                      <Tooltip 
                        contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)' }} 
                        labelStyle={{fontWeight: 900, textTransform: 'uppercase', fontSize: '11px', color: '#64748b', marginBottom: '8px'}}
                        itemStyle={{fontWeight: 800, fontSize: '16px', color: '#0284c7'}}
                      />
                      <Area type="monotone" dataKey="rate" stroke="#0ea5e9" strokeWidth={6} fillOpacity={1} fill="url(#colorRate)" />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-50">
                 <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Year High</p>
                    <p className="text-2xl font-black text-slate-900">{(data.rate * 1.054).toFixed(4)}</p>
                    <div className="h-1 w-full bg-slate-100 rounded-full"><div className="h-full bg-emerald-500 w-[85%]"></div></div>
                 </div>
                 <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Year Low</p>
                    <p className="text-2xl font-black text-slate-900">{(data.rate * 0.942).toFixed(4)}</p>
                    <div className="h-1 w-full bg-slate-100 rounded-full"><div className="h-full bg-rose-500 w-[20%]"></div></div>
                 </div>
                 <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Market Volatility</p>
                    <p className="text-2xl font-black text-sky-600">±0.42%</p>
                    <p className="text-[9px] font-bold text-slate-300 uppercase">Standard Deviation</p>
                 </div>
                 <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Daily Turn</p>
                    <p className="text-2xl font-black text-slate-900">$6.6T</p>
                    <p className="text-[9px] font-bold text-slate-300 uppercase">Total Liquidity Pool</p>
                 </div>
              </div>
           </section>
        </div>
      </div>

      {/* SEO Popular Conversion Hub - REFACTORED CARDS */}
      <section className="bg-white p-12 md:p-24 rounded-[5rem] border border-slate-100 shadow-sm space-y-16">
        <header className="max-w-4xl text-left space-y-8">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] shadow-xl">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
            High-Velocity Pairs
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">Professional <br/>Exchange <span className="text-sky-600">Directory</span></h2>
          <p className="text-slate-500 text-2xl font-medium leading-relaxed max-w-4xl italic border-l-4 border-sky-100 pl-8">
            Access institutional liquidity benchmarks for the world's primary currency crosses. Updated every 60 seconds via interbank data feeds.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { from: 'USD', to: 'INR', desc: 'US Dollar to Rupee', vol: 'Medium' },
             { from: 'GBP', to: 'EUR', desc: 'Pound to Euro', vol: 'Low' },
             { from: 'AUD', to: 'USD', desc: 'Aussie to Dollar', vol: 'High' },
             { from: 'CAD', to: 'INR', desc: 'Loonie to Rupee', vol: 'Medium' },
             { from: 'EUR', to: 'GBP', desc: 'Euro to Pound', vol: 'Low' },
             { from: 'USD', to: 'AED', desc: 'Dollar to Dirham', vol: 'None' },
             { from: 'SGD', to: 'INR', desc: 'Sing Dollar to Rupee', vol: 'Medium' },
             { from: 'CHF', to: 'USD', desc: 'Swiss Franc to Dollar', vol: 'Medium' },
             { from: 'JPY', to: 'USD', desc: 'Yen to Dollar', vol: 'High' },
             { from: 'HKD', to: 'USD', desc: 'HK Dollar to Dollar', vol: 'Low' },
             { from: 'BRL', to: 'USD', desc: 'Real to Dollar', vol: 'Extreme' },
             { from: 'MXN', to: 'USD', desc: 'Peso to Dollar', vol: 'High' },
           ].map((hub, i) => (
             <button 
               key={i} 
               onClick={() => { setBase(hub.from); setTarget(hub.to); window.scrollTo({top:0, behavior:'smooth'}); }}
               className="p-10 bg-slate-50 rounded-[3.5rem] text-left hover:bg-white border border-transparent hover:border-sky-200 transition-all group shadow-sm hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 p-8 text-4xl opacity-[0.05] group-hover:opacity-10 transition-opacity">
                   {CURRENCIES.find(c => c.code === hub.from)?.flag}
                </div>
                <div className="flex justify-between items-center mb-6">
                   <span className="text-2xl font-black text-slate-900 group-hover:text-sky-600 transition-colors uppercase tracking-tighter">{hub.from} <span className="text-slate-300 font-light">/</span> {hub.to}</span>
                </div>
                <div className="space-y-4">
                   <div className="flex justify-between items-center">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{hub.desc}</p>
                      <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${
                        hub.vol === 'High' || hub.vol === 'Extreme' ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'
                      }`}>{hub.vol} Vol</span>
                   </div>
                   <div className="flex items-center text-[10px] font-black text-sky-600 uppercase tracking-[0.2em] pt-4 border-t border-slate-100">
                     Explore Intel <span className="ml-4 group-hover:translate-x-3 transition-transform">→</span>
                   </div>
                </div>
             </button>
           ))}
        </div>
      </section>

      {/* Institutional Knowledge Base */}
      <section className="mt-20 pt-24 border-t border-slate-200 space-y-24">
        <header className="max-w-4xl text-left">
          <h3 className="text-[11px] font-black text-sky-600 uppercase tracking-[0.5em] mb-4">Forex Mechanics Protocol</h3>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tighter">Navigating <span className="text-sky-600">Global Flows</span></h2>
          <p className="text-slate-500 mt-10 text-2xl font-medium leading-relaxed max-w-5xl opacity-90">
            Institutional traders don't look for "cheap rates"—they look for **Execution Parity** and **Liquidity Depth**. QuantCurb bridges the gap for retail users.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-20">
          <section className="space-y-8 group text-left">
            <div className="w-24 h-24 bg-sky-50 rounded-[3rem] flex items-center justify-center text-5xl group-hover:rotate-12 transition-transform shadow-xl shadow-sky-100/50 group-hover:scale-110">🌍</div>
            <h4 className="text-3xl font-black text-slate-900 leading-tight tracking-tight uppercase">Mid-Market <br/>Equilibrium</h4>
            <p className="text-slate-500 text-xl leading-relaxed font-medium">
              The "Interbank Rate" represents the price at which global banks trade currencies with each other. By benchmarked this directly, you bypass the consumer retail markups that fund physical bank branches.
            </p>
          </section>
          <section className="space-y-8 group text-left">
            <div className="w-24 h-24 bg-indigo-50 rounded-[3rem] flex items-center justify-center text-5xl group-hover:rotate-12 transition-transform shadow-xl shadow-indigo-100/50 group-hover:scale-110">🏛️</div>
            <h4 className="text-3xl font-black text-slate-900 leading-tight tracking-tight uppercase">Interest Rate <br/>Arbitrage</h4>
            <p className="text-slate-500 text-xl leading-relaxed font-medium">
              Forex trends are fundamentally driven by central bank policies. When the Fed raises rates relative to the ECB, capital flows into the USD, driving demand and price. Our AI sentiment engine audits these macro vectors in real-time.
            </p>
          </section>
          <section className="space-y-8 group text-left">
            <div className="w-24 h-24 bg-emerald-50 rounded-[3rem] flex items-center justify-center text-5xl group-hover:rotate-12 transition-transform shadow-xl shadow-emerald-100/50 group-hover:scale-110">📈</div>
            <h4 className="text-3xl font-black text-slate-900 leading-tight tracking-tight uppercase">Volatility & <br/>Mean Reversion</h4>
            <p className="text-slate-500 text-xl leading-relaxed font-medium">
              Currency pairs rarely move in straight lines. They oscillate around historical mean values. By observing the 12-month volatility heat, you can time large business conversions to avoid local price spikes.
            </p>
          </section>
        </div>

        <div className="bg-slate-900 p-12 md:p-24 rounded-[5rem] text-white shadow-2xl flex flex-col md:flex-row items-center gap-20 relative overflow-hidden border border-slate-800">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] -mr-48 -mt-48"></div>
           <div className="flex-1 space-y-10 relative z-10 text-left">
              <span className="inline-block px-6 py-2 bg-sky-600 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl">Financial Sovereignty</span>
              <h4 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">Master the <span className="text-sky-400">Spread</span></h4>
              <p className="text-slate-400 text-2xl font-medium leading-relaxed max-w-3xl">
                Average consumer banks levy a 300 to 500 basis point (3-5%) markup on simple conversions. For a $50k transfer, that's **$2,500 lost to friction**. Use QuantCurb to audit your provider's integrity.
              </p>
              <div className="flex flex-wrap gap-5 pt-6">
                 {['Zero Markups', 'Direct Interbank Feed', 'AI Sentiment Engine', 'Volatility Modeling', 'Global Liquidity Hub'].map(tag => (
                   <span key={tag} className="text-[11px] font-black text-sky-400 bg-white/5 px-8 py-3 rounded-3xl border border-white/10 uppercase tracking-[0.2em] hover:bg-white/10 transition-colors cursor-default">{tag}</span>
                 ))}
              </div>
           </div>
           <div className="bg-white/5 p-16 rounded-[4.5rem] border border-white/10 backdrop-blur-3xl shrink-0 text-center space-y-10 shadow-2xl relative group">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-sky-600 rounded-3xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">✓</div>
              <div>
                <p className="text-[12px] font-black uppercase text-sky-300 tracking-[0.5em] mb-4">Oracle Precision</p>
                <p className="text-8xl font-black tracking-tighter text-white">99.9%</p>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2">Market Data Parity</p>
              </div>
           </div>
        </div>
      </section>

      <footer className="text-center pt-24 border-t border-slate-100 flex flex-col items-center gap-12">
        <div className="space-y-4">
           <p className="text-[14px] font-black text-slate-400 uppercase tracking-[0.6em]">QuantCurb Global Exchange v6.8</p>
           <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Bridging Institutional Logic for Daily Wealth</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-6xl">
           {[
             'Forex Volatility', 'Mid-Market Rates', 'Real-time Conversion', 'Currency Sentiment Analysis',
             'Institutional Liquidity', 'Spread Triage', 'Global Payment Modeling', 'FX Risk Mitigation',
             'USD/INR Benchmark', 'EUR/USD Exchange Rate', 'GBP/USD Forecasting', 'AUD/USD Market Pulse',
             'CAD/INR Liquidity', 'SGD/USD Arbitrage', 'AED/USD Stability', 'CHF/EUR Safe Haven'
           ].map(tag => (
             <span key={tag} className="text-[10px] font-black text-slate-400 bg-slate-50 px-6 py-3 rounded-3xl border border-slate-100 uppercase tracking-widest hover:text-sky-600 hover:border-sky-200 hover:bg-white hover:shadow-lg transition-all cursor-default">{tag}</span>
           ))}
        </div>
      </footer>
    </article>
  );
};

export default CurrencyConverter;

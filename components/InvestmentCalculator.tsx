
import React, { useState, useMemo, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

const InvestmentCalculator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(10000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500);
  const [expectedReturn, setExpectedReturn] = useState<number>(10);
  const [years, setYears] = useState<number>(20);
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const data = useMemo(() => {
    let balance = initialInvestment;
    let totalInvested = initialInvestment;
    const monthlyRate = expectedReturn / 100 / 12;
    const result = [];

    for (let i = 0; i <= years; i++) {
      result.push({
        year: `Year ${i}`,
        balance: Math.round(balance),
        invested: Math.round(totalInvested),
        earnings: Math.round(balance - totalInvested)
      });
      
      // Calculate for next year
      for (let m = 0; m < 12; m++) {
        balance = (balance + monthlyContribution) * (1 + monthlyRate);
        totalInvested += monthlyContribution;
      }
    }
    return result;
  }, [initialInvestment, monthlyContribution, expectedReturn, years]);

  const finalStats = useMemo(() => {
    const last = data[data.length - 1];
    return {
      finalBalance: last.balance,
      totalInvested: last.invested,
      totalEarnings: last.earnings,
      multiplier: (last.balance / last.invested).toFixed(1)
    };
  }, [data]);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const contextData = {
      initial: initialInvestment,
      monthly: monthlyContribution,
      rate: expectedReturn,
      years: years,
      final: finalStats.finalBalance,
      earnings: finalStats.totalEarnings
    };
    const msg = await getFinancialAdvice(contextData, 'Investment Growth Strategy');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [initialInvestment, monthlyContribution, expectedReturn, years]);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-black text-slate-900">Wealth <span className="text-indigo-600">Projector</span></h2>
        <p className="text-slate-500 mt-1">Visualize your financial future through the power of compounding.</p>
      </header>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Controls */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Initial Investment ($)</label>
              <input 
                type="number" value={initialInvestment} 
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-bold text-slate-700 text-xl"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Monthly Contribution ($)</label>
              <input 
                type="number" value={monthlyContribution} 
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-bold text-slate-700 text-xl"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Expected Return (% p.a)</label>
              <input 
                type="range" min="1" max="30" step="0.5" 
                value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between mt-2 font-bold text-indigo-600">
                <span>1%</span>
                <span className="text-2xl">{expectedReturn}%</span>
                <span>30%</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Duration (Years)</label>
              <input 
                type="range" min="1" max="50" step="1" 
                value={years} onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between mt-2 font-bold text-indigo-600">
                <span>1 Yr</span>
                <span className="text-2xl">{years} Yrs</span>
                <span>50 Yrs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Display & Chart */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white flex flex-col md:flex-row gap-8 items-center justify-between shadow-2xl overflow-hidden relative">
            <div className="relative z-10">
              <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">Estimated Portfolio Value</p>
              <h3 className="text-5xl md:text-6xl font-black tracking-tighter">${finalStats.finalBalance.toLocaleString()}</h3>
              <div className="flex gap-6 mt-6">
                <div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Total Invested</p>
                  <p className="text-xl font-bold">${finalStats.totalInvested.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Growth Multiplier</p>
                  <p className="text-xl font-bold text-emerald-400">{finalStats.multiplier}x</p>
                </div>
              </div>
            </div>
            <div className="relative z-10 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md text-center">
                <p className="text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-1">Net Earnings</p>
                <p className="text-4xl font-black text-white">${finalStats.totalEarnings.toLocaleString()}</p>
                <div className="mt-2 text-xs text-emerald-400 font-bold">+ {finalStats.totalInvested > 0 ? ((finalStats.totalEarnings / finalStats.totalInvested) * 100).toFixed(0) : 0}% Profit</div>
            </div>
            <div className="absolute -right-10 -top-10 text-[200px] text-white/5 font-black select-none pointer-events-none">GROWTH</div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-sm font-bold text-slate-800 mb-8 uppercase tracking-widest">Growth Visualization</h4>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#94a3b8" 
                    fontSize={10} 
                    axisLine={false}
                    tickLine={false}
                    interval={Math.floor(years / 5)}
                  />
                  <YAxis 
                    stroke="#94a3b8" 
                    fontSize={10} 
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `$${v >= 1000000 ? (v/1000000).toFixed(1) + 'M' : (v/1000).toFixed(0) + 'k'}`} 
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
                  />
                  <Legend />
                  <Area 
                    name="Invested Principal"
                    type="monotone" 
                    dataKey="invested" 
                    stroke="#94a3b8" 
                    fill="#f1f5f9" 
                    strokeWidth={2}
                    activeDot={{ r: 4 }}
                  />
                  <Area 
                    name="Total Balance"
                    type="monotone" 
                    dataKey="balance" 
                    stroke="#4f46e5" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorBalance)" 
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* AI Strategy Advice */}
      <div className="bg-indigo-600 rounded-[2rem] p-8 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0 w-20 h-20 bg-white/20 rounded-3xl backdrop-blur-md flex items-center justify-center text-4xl shadow-xl">
          📈
        </div>
        <div className="flex-1">
          <h4 className="text-indigo-200 font-bold uppercase text-xs tracking-widest mb-2">Gemini Investment Analysis</h4>
          {loadingAdvice ? (
            <div className="space-y-2 animate-pulse">
               <div className="h-4 bg-white/20 rounded w-full"></div>
               <div className="h-4 bg-white/20 rounded w-5/6"></div>
            </div>
          ) : (
            <p className="text-xl leading-relaxed italic font-medium">
              {advice || 'Adjust your inputs to see a customized investment analysis from our AI.'}
            </p>
          )}
        </div>
        <div className="absolute right-12 bottom-0 opacity-10 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 190L50 140L90 160L140 100L190 120V190H10Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCalculator;

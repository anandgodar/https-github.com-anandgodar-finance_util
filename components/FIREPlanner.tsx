
import React, { useState, useMemo, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine, ComposedChart, Line } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

const FIREPlanner: React.FC = () => {
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [currentSavings, setCurrentSavings] = useState<number>(50000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(2500);
  const [expectedReturn, setExpectedReturn] = useState<number>(8);
  const [annualExpenses, setAnnualExpenses] = useState<number>(60000);
  const [safeWithdrawalRate, setSafeWithdrawalRate] = useState<number>(4);

  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const stats = useMemo(() => {
    // 25x expenses is the standard 4% rule
    const fireNumber = (annualExpenses * 100) / safeWithdrawalRate;
    const leanFireNumber = fireNumber * 0.7; // 70% of target
    const fatFireNumber = fireNumber * 1.5;  // 150% of target
    
    let balance = currentSavings;
    let age = currentAge;
    const data = [];
    let fireAge = null;
    let leanFireAge = null;
    
    // Simulate until age 85
    for (let month = 0; age <= 85; month++) {
      if (month % 12 === 0) {
        data.push({ 
          age, 
          balance: Math.round(balance),
          target: Math.round(fireNumber),
          passiveIncome: Math.round((balance * (safeWithdrawalRate/100)) / 12)
        });
        age++;
      }
      
      if (balance >= leanFireNumber && leanFireAge === null) leanFireAge = age - 1;
      if (balance >= fireNumber && fireAge === null) fireAge = age - 1;
      
      const monthlyRate = expectedReturn / 100 / 12;
      balance = (balance + monthlyContribution) * (1 + monthlyRate);
    }

    return { 
      fireNumber, 
      leanFireNumber,
      fatFireNumber,
      fireAge, 
      leanFireAge,
      data,
      monthlyPassive: (fireNumber * (safeWithdrawalRate/100)) / 12
    };
  }, [currentAge, currentSavings, monthlyContribution, expectedReturn, annualExpenses, safeWithdrawalRate]);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const contextData = {
      currentAge,
      fireAge: stats.fireAge,
      fireNumber: stats.fireNumber,
      savings: currentSavings,
      contribution: monthlyContribution,
      expenses: annualExpenses
    };
    const msg = await getFinancialAdvice(contextData, 'FIRE Early Retirement Strategy');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [currentAge, currentSavings, monthlyContribution, expectedReturn, annualExpenses]);

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-500 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 leading-tight">FIRE <span className="text-orange-500">Intelligence</span></h2>
          <p className="text-slate-500 mt-2 max-w-lg font-medium">Early retirement modeling based on the 4% safe withdrawal rule.</p>
        </div>
        <div className="bg-orange-600 px-10 py-6 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden">
           <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Total Freedom Goal</p>
           <p className="text-4xl font-black tracking-tighter">${Math.round(stats.fireNumber).toLocaleString()}</p>
           <div className="absolute -right-4 -top-4 w-12 h-12 bg-white/10 rounded-full blur-xl"></div>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* Left: Planning Controls */}
        <div className="lg:col-span-4 space-y-6">
          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b pb-4">Current Vitals</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">Age</label>
                  <input type="number" value={currentAge} onChange={e => setCurrentAge(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">Savings ($)</label>
                  <input type="number" value={currentSavings} onChange={e => setCurrentSavings(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-orange-500 uppercase mb-2">Monthly Contribution ($)</label>
                <input type="number" value={monthlyContribution} onChange={e => setMonthlyContribution(Number(e.target.value))} className="w-full p-4 bg-orange-50 border-none rounded-2xl font-black text-orange-600 text-xl" />
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b pb-4">Future Assumptions</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">Annual Lifestyle Cost ($)</label>
                <input type="number" value={annualExpenses} onChange={e => setAnnualExpenses(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">Market Return (%)</label>
                  <input type="number" value={expectedReturn} onChange={e => setExpectedReturn(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">SWR (%)</label>
                  <input type="number" step="0.5" value={safeWithdrawalRate} onChange={e => setSafeWithdrawalRate(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right: Results & Trajectory */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-xl flex flex-col justify-center text-center">
               <p className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">Independence Age</p>
               <h3 className="text-5xl font-black text-white tracking-tighter">{stats.fireAge || '∞'}</h3>
            </div>
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center text-center">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Lean FIRE Age</p>
               <h4 className="text-3xl font-black text-slate-900">{stats.leanFireAge || '---'}</h4>
            </div>
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center text-center">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Monthly Yield</p>
               <h4 className="text-3xl font-black text-emerald-600">${Math.round(stats.monthlyPassive).toLocaleString()}</h4>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
             <div className="flex justify-between items-center mb-8">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Wealth Accrual vs Target</h4>
                <div className="flex gap-4">
                   <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-orange-500"></div><span className="text-[9px] font-bold uppercase text-slate-400">Balance</span></div>
                   <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-200"></div><span className="text-[9px] font-bold uppercase text-slate-400">Target</span></div>
                </div>
             </div>
             <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={stats.data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="age" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="balance" stroke="#f97316" strokeWidth={4} fill="#f97316" fillOpacity={0.05} />
                    <Area type="monotone" dataKey="target" stroke="#e2e8f0" strokeWidth={2} fill="transparent" strokeDasharray="5 5" />
                    {stats.fireAge && <ReferenceLine x={stats.fireAge} stroke="#f97316" label={{ value: 'FIRE', position: 'top', fontSize: 10, fontWeight: 900, fill: '#f97316' }} />}
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          <div className="bg-orange-50 p-10 rounded-[3rem] border border-orange-100 flex items-start gap-8 shadow-sm">
             <div className="text-5xl">🤖</div>
             <div className="flex-1">
                <h4 className="text-orange-600 font-black uppercase text-[10px] tracking-widest mb-4">Gemini Strategic Freedom Advice</h4>
                {loadingAdvice ? (
                  <div className="space-y-2 animate-pulse"><div className="h-4 bg-orange-100 rounded w-full"></div><div className="h-4 bg-orange-100 rounded w-2/3"></div></div>
                ) : (
                  <p className="text-lg text-slate-700 italic font-medium leading-relaxed">
                    {advice || 'Analyzing your contribution velocity for early crossover potential...'}
                  </p>
                )}
             </div>
          </div>
        </div>
      </div>

      {/* Educational Grounding Section */}
      <section className="mt-20 pt-16 border-t border-slate-200 space-y-16">
        <header className="max-w-3xl">
          <h3 className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mb-4">Financial Philosophy</h3>
          <h2 className="text-4xl font-black text-slate-900 leading-tight">The Mechanics of <span className="text-orange-600">Financial Independence</span></h2>
          <p className="text-slate-500 mt-4 text-lg font-medium leading-relaxed">
            FIRE is not just about quitting your job; it's about shifting from selling your time for money to letting your money buy back your time.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-orange-600 pl-6">The 4% Rule</h4>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Originating from the Trinity Study, the 4% Rule suggests that if you withdraw 4% of your initial portfolio value in the first year of retirement (and adjust for inflation thereafter), your money has a high probability of lasting 30+ years.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-slate-900 pl-6">Savings Rate is King</h4>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              While market returns matter, your <strong>Savings Rate</strong> (percentage of income saved) is the biggest driver of FIRE. A 50% savings rate means you earn 1 year of freedom for every 1 year worked.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-emerald-600 pl-6">Lean vs. Fat FIRE</h4>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              <strong>Lean FIRE</strong> covers basic necessities (minimalism). <strong>Fat FIRE</strong> accounts for a more luxurious lifestyle. Determining which path you want dictates your "Freedom Number."
            </p>
          </div>
        </div>

        <div className="bg-slate-900 p-12 rounded-[3.5rem] flex flex-col md:flex-row items-center gap-12 text-white shadow-2xl">
          <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black">Sequence of Returns Risk</h4>
            <p className="text-slate-400 font-medium">
              The biggest threat to a FIRE plan is a market crash in the first few years of retirement. This tool assumes a steady return, but in reality, volatility can impact your withdrawal strategy. Diversification into bonds or cash buffers is recommended as you approach your target age.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
             <div className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center">
                <p className="text-[10px] font-black text-orange-400 uppercase mb-1">Standard FIRE</p>
                <p className="text-xl font-black">25x Expenses</p>
             </div>
             <div className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center">
                <p className="text-[10px] font-black text-orange-400 uppercase mb-1">Ultra Safe</p>
                <p className="text-xl font-black">33x Expenses</p>
             </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-12 pt-12 border-t border-slate-100">
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Calculated Logic</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            We use a compound growth algorithm. Monthly contributions are added to the balance, and interest is compounded monthly. The "Freedom Number" is calculated by dividing your annual expenses by your safe withdrawal rate.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">How to use</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Be honest about your "Annual Lifestyle Cost." It should include taxes, health insurance, and travel—not just your current rent. Adjust the SWR to 3% for a more conservative, multi-generational plan.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Expert Tips</h4>
          <ul className="text-sm text-slate-500 space-y-2 font-medium">
            <li>• Use HSA accounts to lower taxable income</li>
            <li>• Focus on gross savings rate &gt; 30%</li>
            <li>• AI Triage: Check your advice for "Coast" targets</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FIREPlanner;

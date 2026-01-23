
import React, { useState, useMemo, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine, ComposedChart, Line } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';
import CalculatorFAQ from './CalculatorFAQ';
import { ToolType } from '../types';

interface FIREPlannerProps {
  onNavigate?: (tool: ToolType) => void;
}

const FIREPlanner: React.FC<FIREPlannerProps> = ({ onNavigate }) => {
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [currentSavings, setCurrentSavings] = useState<number>(50000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(2500);
  const [expectedReturn, setExpectedReturn] = useState<number>(8);
  const [annualExpenses, setAnnualExpenses] = useState<number>(60000);
  const [safeWithdrawalRate, setSafeWithdrawalRate] = useState<number>(4);
  const [currentCOL, setCurrentCOL] = useState<number>(100); // Cost of living index (100 = average US)
  const [targetCOL, setTargetCOL] = useState<number>(80); // Target COL for geographic arbitrage
  const [partTimeIncome, setPartTimeIncome] = useState<number>(20000); // For Barista FIRE

  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const stats = useMemo(() => {
    // Geographic arbitrage: adjust expenses based on COL
    const adjustedExpenses = annualExpenses * (targetCOL / currentCOL);
    
    // 25x expenses is the standard 4% rule
    const fireNumber = (annualExpenses * 100) / safeWithdrawalRate;
    const leanFireNumber = fireNumber * 0.7; // 70% of target
    const fatFireNumber = fireNumber * 1.5;  // 150% of target
    
    // Calculate Coast FIRE: when your current savings will grow to FIRE number without more contributions
    const retirementAge = 65;
    const yearsToRetirement = retirementAge - currentAge;
    const monthlyRate = expectedReturn / 100 / 12;
    const monthsToRetirement = yearsToRetirement * 12;
    const futureValue = currentSavings * Math.pow(1 + monthlyRate, monthsToRetirement);
    const coastFireNumberNeeded = fireNumber / Math.pow(1 + expectedReturn / 100, yearsToRetirement);
    const isCoastFire = currentSavings >= coastFireNumberNeeded;
    const coastFireAge = isCoastFire ? currentAge : null;
    
    // Calculate Barista FIRE: when savings + part-time income covers expenses
    const baristaFireNumber = (adjustedExpenses - partTimeIncome) * 25;
    
    let balance = currentSavings;
    let age = currentAge;
    const data = [];
    let fireAge = null;
    let leanFireAge = null;
    let baristaFireAge = null;
    
    // Simulate until age 85
    for (let month = 0; age <= 85; month++) {
      if (month % 12 === 0) {
        data.push({ 
          age, 
          balance: Math.round(balance),
          target: Math.round(fireNumber),
          leanTarget: Math.round(leanFireNumber),
          baristaTarget: Math.round(baristaFireNumber),
          passiveIncome: Math.round((balance * (safeWithdrawalRate/100)) / 12)
        });
        age++;
      }
      
      if (balance >= leanFireNumber && leanFireAge === null) leanFireAge = age - 1;
      if (balance >= baristaFireNumber && baristaFireAge === null) baristaFireAge = age - 1;
      if (balance >= fireNumber && fireAge === null) fireAge = age - 1;
      
      const monthlyRate = expectedReturn / 100 / 12;
      balance = (balance + monthlyContribution) * (1 + monthlyRate);
    }

    return { 
      fireNumber, 
      leanFireNumber,
      fatFireNumber,
      coastFireNumber: coastFireNumberNeeded,
      baristaFireNumber,
      fireAge, 
      leanFireAge,
      baristaFireAge,
      coastFireAge,
      isCoastFire,
      data,
      monthlyPassive: (fireNumber * (safeWithdrawalRate/100)) / 12,
      adjustedExpenses,
      colSavings: annualExpenses - adjustedExpenses
    };
  }, [currentAge, currentSavings, monthlyContribution, expectedReturn, annualExpenses, safeWithdrawalRate, currentCOL, targetCOL, partTimeIncome]);

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

  useEffect(() => {
    // Add HowTo schema for "How to calculate FIRE number"
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Calculate Your FIRE Number and Achieve Early Retirement",
      "description": "Step-by-step guide to calculating your Financial Independence Retire Early (FIRE) number using the 4% rule and planning your path to early retirement.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Calculate Your Annual Expenses",
          "text": "Determine your annual living expenses. This is how much you need to cover all costs in retirement."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Apply the 4% Rule",
          "text": "Multiply your annual expenses by 25 (or divide by 4%) to get your FIRE number. This is the amount you need to retire."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Enter Your Current Situation",
          "text": "Enter your current age, savings, monthly contribution, expected return, and withdrawal rate."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Review FIRE Milestones",
          "text": "See when you'll reach Lean FIRE (70% of target), Barista FIRE (with part-time income), Coast FIRE (no more contributions needed), and full FIRE."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Consider Geographic Arbitrage",
          "text": "Adjust your cost of living to see how moving to a lower-cost area can accelerate your FIRE timeline."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Optimize Your Strategy",
          "text": "Increase savings rate, reduce expenses, or adjust withdrawal rate to reach FIRE faster."
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(howToSchema);
    script.id = 'howto-schema-fire';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('howto-schema-fire');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-500 pb-24">
      {/* Featured Snippet Optimization - Definition Box */}
      <section className="bg-orange-50 rounded-3xl p-8 border border-orange-200 mb-8">
        <h2 className="text-2xl font-black text-slate-900 mb-4">What is the 4% Rule for FIRE?</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-700 leading-relaxed font-medium mb-4">
            The <strong>4% rule</strong> is a retirement withdrawal strategy that states you can safely withdraw 4% of your portfolio in the first year of retirement, 
            then adjust that amount for inflation each subsequent year, and your money should last 30 years.
          </p>
          <p className="text-slate-700 leading-relaxed font-medium mb-4">
            <strong>To calculate your FIRE number:</strong> Multiply your annual expenses by 25 (or divide by 0.04).
          </p>
          <div className="bg-white p-6 rounded-2xl border border-orange-100 mt-4">
            <p className="text-slate-600 text-sm mb-2"><strong>Example:</strong></p>
            <p className="text-slate-700 font-medium">
              If you need $60,000/year to live: $60,000 × 25 = <strong>$1,500,000 FIRE number</strong>
            </p>
            <p className="text-slate-600 text-sm mt-2">
              This means you need $1.5 million saved to safely withdraw $60,000/year (4%) adjusted for inflation.
            </p>
          </div>
          <p className="text-slate-600 text-sm mt-6">
            Our calculator automatically calculates your FIRE number, Lean FIRE (70% of target), Fat FIRE (150% of target), 
            Coast FIRE, and Barista FIRE based on your inputs.
          </p>
        </div>
      </section>

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

          {/* Geographic Arbitrage Section */}
          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b pb-4">Geographic Arbitrage</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">Current COL Index</label>
                <input 
                  type="number" 
                  value={currentCOL} 
                  onChange={e => setCurrentCOL(Number(e.target.value))} 
                  className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700" 
                  placeholder="100"
                />
                <p className="text-xs text-slate-500 mt-1">100 = US average. Lower = cheaper area</p>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">Target COL Index</label>
                <input 
                  type="number" 
                  value={targetCOL} 
                  onChange={e => setTargetCOL(Number(e.target.value))} 
                  className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700" 
                  placeholder="80"
                />
                <p className="text-xs text-slate-500 mt-1">Lower COL = lower FIRE number needed</p>
              </div>
              {stats.colSavings > 0 && (
                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200">
                  <p className="text-emerald-800 font-bold text-sm">
                    💰 Annual Savings: ${Math.round(stats.colSavings).toLocaleString()}
                  </p>
                  <p className="text-emerald-700 text-xs mt-1">
                    Moving to {targetCOL} COL reduces your FIRE number by ${Math.round((stats.fireNumber - (stats.adjustedExpenses * 25))).toLocaleString()}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Barista FIRE Section */}
          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b pb-4">Barista FIRE</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">Part-Time Income ($/yr)</label>
                <input 
                  type="number" 
                  value={partTimeIncome} 
                  onChange={e => setPartTimeIncome(Number(e.target.value))} 
                  className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700" 
                  placeholder="20000"
                />
                <p className="text-xs text-slate-500 mt-1">Income from part-time work, side hustle, or passive income</p>
              </div>
              {stats.baristaFireAge && (
                <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-200">
                  <p className="text-indigo-800 font-bold text-sm">
                    ☕ Barista FIRE Age: {stats.baristaFireAge}
                  </p>
                  <p className="text-indigo-700 text-xs mt-1">
                    You can retire with part-time income at age {stats.baristaFireAge} with ${Math.round(stats.baristaFireNumber).toLocaleString()} saved
                  </p>
                </div>
              )}
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
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Barista FIRE Age</p>
               <h4 className="text-3xl font-black text-slate-900">{stats.baristaFireAge || '---'}</h4>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center text-center">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Coast FIRE Status</p>
               <h4 className="text-3xl font-black text-slate-900">{stats.isCoastFire ? '✅ Achieved' : 'Not Yet'}</h4>
               {!stats.isCoastFire && (
                 <p className="text-xs text-slate-500 mt-2">Need ${Math.round(stats.coastFireNumber).toLocaleString()}</p>
               )}
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

      {/* Related Resources Section */}
      <section className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200">
        <h2 className="text-2xl font-black text-slate-900 mb-6">Related Resources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_FIRE_GUIDE)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">📖 FIRE Calculator Guide 2025</h3>
            <p className="text-sm text-slate-600">Complete guide to FIRE, the 4% rule, Lean FIRE vs Fat FIRE, and early retirement strategies.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.RETIREMENT_OPTIMIZER)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">🎯 Retirement Account Optimizer</h3>
            <p className="text-sm text-slate-600">Maximize your 401(k) and IRA contributions to reach FIRE faster.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">📈 Investment Calculator</h3>
            <p className="text-sm text-slate-600">Project your investment growth with compound interest to reach your FIRE number.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.SALARY_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">💰 Salary Calculator</h3>
            <p className="text-sm text-slate-600">Calculate your take-home pay to optimize your savings rate for FIRE.</p>
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <CalculatorFAQ
        calculatorName="FIRE Planner"
        calculatorUrl="https://quantcurb.com/early-retirement-fire-planner"
        faqs={[
          {
            question: "What is FIRE and how do I calculate my FIRE number?",
            answer: "FIRE (Financial Independence Retire Early) is achieving financial independence to retire decades earlier than traditional retirement age. Your FIRE number = Annual Expenses × 25 (based on the 4% rule). For example, if you spend $60,000/year, you need $1,500,000 saved. Use our calculator above to find your exact FIRE number and timeline."
          },
          {
            question: "What's the difference between Lean FIRE, Regular FIRE, and Fat FIRE?",
            answer: "Lean FIRE = 70% of your target (minimalist lifestyle, $25k-$40k/year expenses). Regular FIRE = 100% of target (comfortable lifestyle, $40k-$100k/year). Fat FIRE = 150% of target (luxury lifestyle, $100k+/year expenses). Our calculator shows when you'll reach each milestone."
          },
          {
            question: "What is Coast FIRE?",
            answer: "Coast FIRE means you have enough saved that it will grow to your full FIRE number by traditional retirement age (65) without any more contributions. You can 'coast' - work less, take lower-paying but more enjoyable jobs, or take extended breaks. Our calculator shows if you've reached Coast FIRE."
          },
          {
            question: "What is Barista FIRE?",
            answer: "Barista FIRE is when your savings + part-time income (like working at a coffee shop) covers your expenses. You need less saved because part-time work fills the gap. For example, if you need $60k/year and earn $20k part-time, you only need $1,000,000 saved (25x the $40k gap). Our calculator shows your Barista FIRE age."
          },
          {
            question: "Is the 4% rule safe for early retirement?",
            answer: "The 4% rule was designed for 30-year retirements. For early retirees (under 50), many experts recommend 3-3.5% for longer retirement periods. However, 4% remains a solid starting point. Our calculator lets you adjust the withdrawal rate to see the impact on your FIRE number."
          },
          {
            question: "How does geographic arbitrage help with FIRE?",
            answer: "Geographic arbitrage means moving to a lower cost-of-living area to reduce expenses and your FIRE number. For example, moving from San Francisco (COL 150) to Austin (COL 100) can reduce your FIRE number by 33%. Our calculator shows how adjusting COL affects your FIRE timeline."
          },
          {
            question: "What savings rate do I need to reach FIRE?",
            answer: "Higher savings rates = faster FIRE. At 50% savings rate, you can reach FIRE in ~17 years. At 65%, it's ~10.5 years. At 75%, it's ~7 years. The key is maximizing income and minimizing expenses. Our calculator shows your timeline based on your current savings rate."
          },
          {
            question: "Should I pay off debt or invest for FIRE?",
            answer: "Generally, if your debt interest rate is higher than expected investment returns (7-8%), pay off debt first. If debt rate is lower, invest for FIRE while making minimum payments. High-interest credit card debt should always be paid off first. Use our 'Should I Pay Off Debt or Invest' calculator to see the math."
          }
        ]}
      />
    </div>
  );
};

export default FIREPlanner;

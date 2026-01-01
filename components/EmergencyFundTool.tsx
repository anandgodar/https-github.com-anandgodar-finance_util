
import React, { useState, useMemo, useEffect } from 'react';
import { getFinancialAdvice } from '../services/geminiService';

const EmergencyFundTool: React.FC = () => {
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(4500);
  const [currentCash, setCurrentCash] = useState<number>(12000);
  const [targetMonths, setTargetMonths] = useState<number>(6);
  const [totalDebts, setTotalDebts] = useState<number>(350000);
  
  // New Expert Gaps
  const [essentialsOnly, setEssentialsOnly] = useState<boolean>(false);
  const [inflationStress, setInflationStress] = useState<number>(0); // 0% to 50% increase

  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const stats = useMemo(() => {
    // Determine the baseline cost
    const baseline = essentialsOnly ? monthlyExpenses * 0.7 : monthlyExpenses;
    const stressedMonthly = baseline * (1 + inflationStress / 100);
    
    const survivalNumber = stressedMonthly * targetMonths;
    const currentRunway = stressedMonthly > 0 ? currentCash / stressedMonthly : 0;
    const progress = Math.min(100, (currentCash / survivalNumber) * 100);
    
    // Insurance need logic (Term Life)
    const incomeReplacementNeed = monthlyExpenses * 12 * 10; // 10 years replacement
    const insuranceNeed = Math.max(0, (totalDebts + incomeReplacementNeed) - currentCash);

    return { 
      survivalNumber, 
      currentRunway, 
      progress, 
      insuranceNeed, 
      stressedMonthly,
      essentialMonthly: monthlyExpenses * 0.7 
    };
  }, [monthlyExpenses, currentCash, targetMonths, totalDebts, essentialsOnly, inflationStress]);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const contextData = { ...stats, essentialsOnly, inflationStress };
    const msg = await getFinancialAdvice(contextData, 'Emergency Fund Risk, Inflation Stress & Protection Audit');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2500);
    return () => clearTimeout(timer);
  }, [currentCash, monthlyExpenses, essentialsOnly, inflationStress]);

  return (
    <article className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-500 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 bg-white p-12 rounded-[4.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        <div className="relative z-10 flex-1">
          <div className="flex items-center gap-3 mb-4">
             <span className="px-4 py-1.5 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-emerald-100">Protection Layer</span>
             <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Protocol v4.1</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">Emergency <span className="text-emerald-600">Guard</span></h1>
          <p className="text-slate-500 mt-2 max-w-lg font-medium text-lg leading-relaxed">The bedrock of your financial fortress. Calculate your liquid safety net and stress-test your survival runway against inflation.</p>
        </div>
        <div className="bg-emerald-600 px-12 py-10 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden flex flex-col items-center justify-center min-w-[300px] border border-emerald-500">
          <div className="relative z-10 text-center">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-100 mb-2">Liquid Survival Runway</h2>
            <div className="flex items-end justify-center gap-2">
               <p className="text-6xl font-black tracking-tighter leading-none">{stats.currentRunway.toFixed(1)}</p>
               <span className="text-lg font-black text-emerald-100 uppercase mb-1">Months</span>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
             <span className="text-[10rem] font-black select-none">RUN</span>
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-8">
          <section className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-10">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-6 flex justify-between items-center">
               <span>Baseline Parameters</span>
               <button 
                  onClick={() => setEssentialsOnly(!essentialsOnly)} 
                  className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${essentialsOnly ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-50 text-slate-400'}`}
               >
                  {essentialsOnly ? 'Essentials Mode ON' : 'Essentials Only?'}
               </button>
            </h3>
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-end px-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Target Survival Cost ($/mo)</label>
                  <span className="text-xl font-black text-slate-900">${Math.round(stats.stressedMonthly).toLocaleString()}</span>
                </div>
                <input 
                  type="number" 
                  value={monthlyExpenses} 
                  onChange={e => setMonthlyExpenses(Number(e.target.value))} 
                  className="w-full p-6 bg-slate-50 border-none rounded-[1.5rem] font-black text-3xl text-slate-700 focus:ring-2 focus:ring-emerald-500 transition-all shadow-inner" 
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end px-2">
                  <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Liquid Shield Balance ($)</label>
                  <span className="text-xl font-black text-emerald-600">${currentCash.toLocaleString()}</span>
                </div>
                <input 
                  type="number" 
                  value={currentCash} 
                  onChange={e => setCurrentCash(Number(e.target.value))} 
                  className="w-full p-6 bg-emerald-50 border-none rounded-[1.5rem] font-black text-3xl text-emerald-600 focus:ring-2 focus:ring-emerald-500 transition-all shadow-inner" 
                />
              </div>

              <div className="pt-6 space-y-4">
                <div className="flex justify-between items-end px-2">
                   <label className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Inflation Stress Test (%)</label>
                   <span className="text-sm font-black text-rose-600">+{inflationStress}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="50" 
                  value={inflationStress} 
                  onChange={e => setInflationStress(Number(e.target.value))} 
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-rose-500" 
                />
                <div className="flex justify-between text-[8px] font-black text-slate-400 uppercase tracking-widest px-1">
                   <span>Stability</span>
                   <span>High Inflation Scenario</span>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Shield Target Duration</label>
                <div className="grid grid-cols-4 gap-3">
                  {[3, 6, 12, 24].map(m => (
                    <button 
                      key={m} 
                      onClick={() => setTargetMonths(m)} 
                      className={`py-4 rounded-[1.2rem] text-xs font-black transition-all ${targetMonths === m ? 'bg-slate-900 text-white shadow-xl scale-105' : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'}`}
                    >
                      {m}M
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-7 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl space-y-10 flex flex-col items-center justify-center text-center">
              <div className="space-y-2">
                <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Shield Progress</h3>
                <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Target: {targetMonths} Months of Capital</p>
              </div>
              <div className="relative w-56 h-56 flex items-center justify-center">
                 <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="44" fill="none" stroke="#f1f5f9" strokeWidth="12" />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="44" 
                      fill="none" 
                      stroke="#10b981" 
                      strokeWidth="12" 
                      strokeDasharray="276" 
                      strokeDashoffset={276 - (276 * stats.progress) / 100} 
                      strokeLinecap="round" 
                      className="transition-all duration-1000 ease-out shadow-lg" 
                    />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black text-slate-900">{Math.round(stats.progress)}%</span>
                    <span className="text-[9px] font-black text-slate-400 uppercase mt-1 tracking-widest">Capitalized</span>
                 </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-bold text-slate-500 max-w-[240px] leading-relaxed italic">
                  "You need <strong>${Math.max(0, stats.survivalNumber - currentCash).toLocaleString()}</strong> more to reach full immunity at current burn rates."
                </p>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div style={{ width: `${stats.progress}%` }} className="h-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                </div>
              </div>
            </section>

            <section className="bg-indigo-600 p-12 rounded-[4rem] text-white shadow-2xl flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-8xl opacity-10 font-black select-none pointer-events-none group-hover:scale-125 transition-transform">
                ☂️
              </div>
              <div className="relative z-10 space-y-8">
                <div className="space-y-1">
                  <h4 className="text-[10px] font-black text-indigo-200 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-300"></span>
                    Protection Protocol
                  </h4>
                  <h3 className="text-3xl font-black tracking-tighter">Insurance Triage</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/10 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
                     <p className="text-[10px] font-black text-indigo-100 uppercase mb-1">Recommended Term Life Coverage</p>
                     <p className="text-4xl font-black tracking-tighter">${(stats.insuranceNeed / 1000000).toFixed(1)}M</p>
                  </div>
                  <div className="space-y-4">
                     <p className="text-xs text-indigo-100 opacity-80 leading-relaxed font-medium">
                       Based on modeled liabilities (${totalDebts.toLocaleString()}) and 10-year income replacement metrics.
                     </p>
                     <button className="w-full py-4 bg-white text-indigo-600 rounded-[1.2rem] font-black text-[10px] uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
                        Audit Protection Plan
                     </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="bg-slate-900 p-12 rounded-[4.5rem] text-white flex items-start gap-12 shadow-2xl relative overflow-hidden group min-h-[320px]">
            <div className="text-7xl relative z-10 transition-transform group-hover:scale-110" aria-hidden="true">🤖</div>
            <div className="flex-1 space-y-6 relative z-10">
               <div className="flex items-center gap-3">
                 <h4 className="text-emerald-400 font-black uppercase text-[10px] tracking-widest">Risk Triage Intelligence</h4>
                 <div className="h-px flex-1 bg-white/10"></div>
               </div>
               {loadingAdvice ? (
                 <div className="space-y-3 animate-pulse">
                   <div className="h-4 bg-white/10 rounded w-full"></div>
                   <div className="h-4 bg-white/10 rounded w-4/5"></div>
                   <div className="h-4 bg-white/10 rounded w-3/4"></div>
                 </div>
               ) : (
                 <p className="text-2xl text-slate-200 italic font-medium leading-relaxed">{advice}</p>
               )}
            </div>
            <div className="absolute -left-20 -bottom-20 text-[280px] font-black text-white/[0.03] pointer-events-none select-none tracking-tighter">GUARD</div>
          </aside>
        </div>
      </div>

      <section className="mt-20 pt-20 border-t border-slate-200 space-y-24">
        <header className="max-w-4xl text-center mx-auto space-y-6">
          <h3 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em]">The Safety Tiers</h3>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">Anatomy of the <span className="text-emerald-600">Liquid Fortress</span></h2>
          <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Emergency funds are not just for disasters. They are "Freedom Capital" that allows you to take risks in other asset classes without the fear of liquidation.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-16">
          <section className="space-y-6 group">
            <div className="w-16 h-16 bg-slate-900 text-white rounded-[1.5rem] flex items-center justify-center text-2xl group-hover:rotate-6 transition-transform shadow-xl">🛡️</div>
            <h4 className="text-2xl font-black text-slate-900 leading-tight uppercase tracking-tight">Tier 1: <br/>The Starter Shield</h4>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              A mandatory <strong>$2,500 - $5,000</strong> reserve designed to stop the "Debt Loop." This tier covers 90% of minor household or automotive emergencies, preventing you from ever touching high-interest credit again.
            </p>
          </section>
          <section className="space-y-6 group">
            <div className="w-16 h-16 bg-emerald-600 text-white rounded-[1.5rem] flex items-center justify-center text-2xl group-hover:rotate-6 transition-transform shadow-xl shadow-emerald-100">🌊</div>
            <h4 className="text-2xl font-black text-slate-900 leading-tight uppercase tracking-tight">Tier 2: <br/>The Core 6 Runway</h4>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              The professional benchmark. <strong>6 months</strong> of living expenses adjusted for inflation. This tier protects you during full employment gaps or medical hiatus, ensuring your investment portfolio remains untouched during market lows.
            </p>
          </section>
          <section className="space-y-6 group">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-[1.5rem] flex items-center justify-center text-2xl group-hover:rotate-6 transition-transform shadow-xl shadow-indigo-100">🚀</div>
            <h4 className="text-2xl font-black text-slate-900 leading-tight uppercase tracking-tight">Tier 3: <br/>Opportunity Cash</h4>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              <strong>12+ months</strong> of capital. At this stage, your safety net transitions into an "Opportunity Fund." This cash allows for aggressive asset acquisition during market crashes (Blood-in-the-streets strategy).
            </p>
          </section>
        </div>

        <div className="bg-slate-50 p-12 md:p-16 rounded-[4rem] border border-slate-100 grid lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-6">
              <h4 className="text-2xl font-black text-slate-900">Why Stress-Testing Matters</h4>
              <p className="text-slate-500 font-medium leading-relaxed">
                Most people plan their safety net based on today's prices. However, inflation and personal "Lifestyle Creep" can erode a 6-month fund into a 4-month fund in just a few years. Our **Inflation Stress Test** helps you visualize this decay and proactively over-capitalize your protection layer.
              </p>
           </div>
           <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                 <p className="text-[10px] font-black text-emerald-500 uppercase mb-2">Essential Cost</p>
                 <p className="text-2xl font-black text-slate-900">${Math.round(stats.essentialMonthly).toLocaleString()}</p>
                 <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">Lean Survival Burn</p>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                 <p className="text-[10px] font-black text-rose-500 uppercase mb-2">Stressed Cost</p>
                 <p className="text-2xl font-black text-slate-900">${Math.round(stats.stressedMonthly).toLocaleString()}</p>
                 <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">With {inflationStress}% Inflation</p>
              </div>
           </div>
        </div>
      </section>

      <footer className="text-center pt-12 border-t border-slate-100 flex flex-col items-center gap-6">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">QuantCurb Survival Hub v4.5 • Risk Mitigation Modeling Protocol</p>
        <div className="flex gap-4">
           {['Stress Tested', 'Inflation Guard', 'Tiered Liquidity', 'Triage Protocol'].map(tag => (
             <span key={tag} className="text-[8px] font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 uppercase tracking-widest">{tag}</span>
           ))}
        </div>
      </footer>
    </article>
  );
};

export default EmergencyFundTool;

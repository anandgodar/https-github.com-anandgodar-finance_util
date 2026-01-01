
import React, { useState, useMemo } from 'react';
import { ToolType } from '../types';

interface FundType {
  id: string;
  name: string;
  icon: string;
  description: string;
  pattern: string;
  risk: 'Low' | 'Medium' | 'High' | 'Extreme';
  reward: 'Steady' | 'Moderate' | 'Aggressive' | 'Alpha' | 'Exponential';
  liquidity: string;
  avgReturn: string;
  horizon: string;
  idealFor: string;
  detailedInsight: string;
  proTip: string;
  examples: { name: string; ticker?: string; context: string }[];
  color: string;
  seoFocus: string[];
  // Expanded Metrics for Academy
  expenseRatio: string;
  volatility: number; // 1-10
  taxEfficiency: 'High' | 'Medium' | 'Low';
  suitability: string;
}

const FUNDS: FundType[] = [
  {
    id: 'index',
    name: 'Index Funds',
    icon: '⚓',
    description: 'The foundation of low-cost wealth creation. These funds replicate the performance of market indices like the S&P 500, offering instant diversification across hundreds of companies.',
    pattern: 'The Compounding Anchor',
    risk: 'Medium',
    reward: 'Steady',
    liquidity: 'High (T+1 Settlement)',
    avgReturn: '7% - 10%',
    horizon: '10+ Years',
    idealFor: 'Retirement & Wealth Preservation',
    seoFocus: ['Passive Investing', 'S&P 500 Index Funds', 'Low Expense Ratio', 'Vanguard Strategy', 'Retirement 401k Funds'],
    detailedInsight: 'Index funds operate on the Efficient Market Hypothesis—that most active managers fail to beat the market long-term. By minimizing fees (often <0.05%), index funds capture the broad economic growth of the corporate world.',
    proTip: 'A difference of 1% in annual fees can cost you over $500,000 in lost compounding over a 40-year investment period. Always choose "Low Expense Ratio" funds.',
    examples: [
      { name: 'Vanguard 500 Index Fund', ticker: 'VFIAX', context: 'The industry benchmark for S&P 500 passive exposure.' },
      { name: 'Fidelity Total Market Index', ticker: 'FSKAX', context: 'Exposure to every publicly traded company in the US.' },
      { name: 'Schwab S&P 500 Index', ticker: 'SWPPX', context: 'Institutional grade with virtually zero expense ratios.' }
    ],
    color: 'border-indigo-500 bg-indigo-50 text-indigo-700',
    expenseRatio: '0.03% - 0.15%',
    volatility: 4,
    taxEfficiency: 'Medium',
    suitability: 'Long-term Savings'
  },
  {
    id: 'etf',
    name: 'ETFs (Exchange Traded)',
    icon: '⚡',
    description: 'Flexible, liquid instruments that trade like stocks but provide fund-level diversification. Highly tax-efficient due to their unique creation-redemption process.',
    pattern: 'The Intra-day Tactician',
    risk: 'Medium',
    reward: 'Moderate',
    liquidity: 'Instant (Market Hours)',
    avgReturn: '8% - 12%',
    horizon: '5+ Years',
    idealFor: 'Tactical Allocation & Tax Efficiency',
    seoFocus: ['Best ETFs 2025', 'Intraday Trading', 'Tax Efficient Investing', 'Liquid Diversification', 'Stock Market Alternatives'],
    detailedInsight: 'ETFs offer "Market Neutral" or "Sector Specific" exposure. Unlike mutual funds, they don\'t trigger internal capital gains taxes for shareholders, making them the preferred vehicle for non-retirement brokerage accounts.',
    proTip: 'Use ETFs for "Sector Rotation." If you believe AI or Energy will outperform this year, you can buy a dedicated ETF without the risk of picking a single company loser.',
    examples: [
      { name: 'SPDR S&P 500 ETF Trust', ticker: 'SPY', context: 'The most liquid financial instrument in global markets.' },
      { name: 'Invesco QQQ Trust', ticker: 'QQQ', context: 'Tracks the innovation-heavy Nasdaq-100 index.' },
      { name: 'Vanguard Growth ETF', ticker: 'VUG', context: 'Focuses on companies with massive revenue expansion.' }
    ],
    color: 'border-sky-500 bg-sky-50 text-sky-700',
    expenseRatio: '0.05% - 0.50%',
    volatility: 5,
    taxEfficiency: 'High',
    suitability: 'Core Brokerage'
  },
  {
    id: 'active',
    name: 'Active Mutual Funds',
    icon: '🧠',
    description: 'Portfolio Managers use research and proprietary algorithms to pick specific winners, aiming to generate "Alpha" (performance above the benchmark).',
    pattern: 'The Alpha Hunt',
    risk: 'High',
    reward: 'Aggressive',
    liquidity: 'High (End of Day)',
    avgReturn: 'Variable (Alpha-driven)',
    horizon: '5-10 Years',
    idealFor: 'Outperforming the Market',
    seoFocus: ['Active Portfolio Management', 'Seeking Alpha', 'Mutual Fund Performance', 'Professional Stock Picking', 'Alpha Generation'],
    detailedInsight: 'Active management is best suited for "Inefficient Markets" like Small-Cap stocks or Emerging Markets, where human insight can uncover value that passive algorithms miss.',
    proTip: 'Look for "Active Share." This metric tells you how much the fund actually differs from its benchmark. High fees for "Closet Indexing" is a waste of capital.',
    examples: [
      { name: 'Fidelity Contrafund', ticker: 'FCNTX', context: 'A legendary fund focusing on undervalued growth plays.' },
      { name: 'American Funds Growth Fund', ticker: 'AGTHX', context: 'A cornerstone of many 401(k) plans with multi-manager logic.' },
      { name: 'Ark Innovation ETF', ticker: 'ARKK', context: 'High-volatility bet on disruptive technologies and AI.' }
    ],
    color: 'border-purple-500 bg-purple-50 text-purple-700',
    expenseRatio: '0.60% - 1.50%',
    volatility: 8,
    taxEfficiency: 'Low',
    suitability: 'Speculative Alpha'
  },
  {
    id: 'reit',
    name: 'REITs (Real Estate)',
    icon: '🏢',
    description: 'Trusts that own and operate income-producing real estate like warehouses, data centers, and malls. Legally required to distribute 90% of profits as dividends.',
    pattern: 'The Yield Generator',
    risk: 'Medium',
    reward: 'Steady',
    liquidity: 'High',
    avgReturn: '4% - 8% Yield',
    horizon: '7+ Years',
    idealFor: 'Passive Income & Inflation Hedge',
    seoFocus: ['Passive Rental Income', 'REIT Dividends', 'Real Estate Investing', 'Inflation Hedge', 'Commercial Property Funds'],
    detailedInsight: 'REITs allow you to be a landlord without the midnight calls. They offer a strong inflation hedge because rents typically rise with CPI, and they provide consistent income even in flat markets.',
    proTip: 'REITs are sensitive to interest rates. When rates fall, REIT prices often rise as their yields become more attractive compared to bonds.',
    examples: [
      { name: 'Realty Income Corp', ticker: 'O', context: 'Known as "The Monthly Dividend Company" for retail shareholders.' },
      { name: 'Prologis Inc', ticker: 'PLD', context: 'The global leader in industrial logistics and e-commerce warehouses.' },
      { name: 'American Tower Corp', ticker: 'AMT', context: 'Owns the critical infrastructure for 5G and mobile data.' }
    ],
    color: 'border-emerald-500 bg-emerald-50 text-emerald-700',
    expenseRatio: '0.10% - 1.20%',
    volatility: 6,
    taxEfficiency: 'Medium',
    suitability: 'Income Portfolio'
  }
];

const InvestmentAcademy: React.FC = () => {
  const [view, setView] = useState<'deep-dive' | 'comparison' | 'assistant'>('deep-dive');
  const [selectedId, setSelectedId] = useState<string>('index');
  
  // Assistant State
  const [risk, setRisk] = useState<number>(50); // 0 (Low) to 100 (Extreme)
  const [goal, setGoal] = useState<'income' | 'growth' | 'safety'>('growth');

  const activeFund = FUNDS.find(f => f.id === selectedId) || FUNDS[0];

  const assistantRecommendation = useMemo(() => {
    if (goal === 'income') return FUNDS.find(f => f.id === 'reit');
    if (risk < 30) return FUNDS.find(f => f.id === 'index');
    if (risk > 70) return FUNDS.find(f => f.id === 'active');
    return FUNDS.find(f => f.id === 'etf');
  }, [risk, goal]);

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-700 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">Fund <span className="text-indigo-600">Academy</span></h1>
          <p className="text-slate-500 font-medium text-lg mt-2 max-w-xl leading-relaxed">
            Institutional-grade knowledge on asset classes, risk-reward logic, and strategic allocation frameworks.
          </p>
        </div>
        <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-200 shadow-inner">
           <button onClick={() => setView('deep-dive')} className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${view === 'deep-dive' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'}`}>Deep Dive</button>
           <button onClick={() => setView('comparison')} className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${view === 'comparison' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'}`}>Selection Matrix</button>
           <button onClick={() => setView('assistant')} className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${view === 'assistant' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'}`}>Selection Assistant</button>
        </div>
      </header>

      {view === 'deep-dive' && (
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-4 mb-6">Explore Asset Classes</h3>
            <div className="grid grid-cols-1 gap-3">
              {FUNDS.map(fund => (
                <button
                  key={fund.id}
                  onClick={() => setSelectedId(fund.id)}
                  className={`p-6 rounded-[2.5rem] border-2 transition-all flex items-center gap-6 text-left group ${
                    selectedId === fund.id 
                    ? `${fund.color} shadow-xl scale-105` 
                    : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-3xl group-hover:scale-125 transition-transform">{fund.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-black text-lg leading-tight">{fund.name}</h4>
                    <p className="text-[9px] uppercase font-bold tracking-widest opacity-60 mt-1">{fund.pattern}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Deep Dive Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden min-h-[600px]">
              <div className="absolute top-0 right-0 p-12 text-[12rem] opacity-[0.03] font-black pointer-events-none select-none -mr-16 -mt-16">
                  {activeFund.icon}
              </div>
              
              <div className="relative z-10 space-y-12">
                  <div className="space-y-6">
                    <span className="inline-block px-4 py-2 bg-slate-900 text-indigo-400 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl">Detailed Analysis</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{activeFund.name}</h2>
                    <p className="text-xl text-slate-500 leading-relaxed font-medium">
                      {activeFund.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 space-y-8">
                      <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        Key Metrics
                      </h5>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Expected Returns</span>
                          <span className="text-sm font-black text-slate-900">{activeFund.avgReturn}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Time Horizon</span>
                          <span className="text-sm font-black text-slate-900">{activeFund.horizon}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Ideal User</span>
                          <span className="text-xs font-black text-slate-900 uppercase">{activeFund.idealFor}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900 p-8 rounded-[3rem] text-white space-y-6 shadow-2xl">
                      <h5 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                        Ticker Benchmarks
                      </h5>
                      <div className="space-y-6">
                        {activeFund.examples.map((ex, i) => (
                          <div key={i} className="group border-l-2 border-indigo-500/20 pl-4 hover:border-indigo-500 transition-colors">
                            <div className="flex items-center gap-3">
                                <span className="font-black text-white text-sm">{ex.name}</span>
                                {ex.ticker && <span className="bg-indigo-600 px-2 py-0.5 rounded text-[9px] font-black text-white uppercase">{ex.ticker}</span>}
                            </div>
                            <p className="text-[11px] text-slate-400 font-medium mt-1 leading-tight">{ex.context}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 p-10 rounded-[3rem] border border-indigo-100 text-lg text-slate-700 leading-relaxed font-medium italic relative overflow-hidden">
                    <span className="absolute -left-4 -top-4 text-8xl text-indigo-200/40 font-serif">“</span>
                    {activeFund.detailedInsight}
                    <div className="mt-8 pt-8 border-t border-indigo-200">
                       <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-widest mb-2">QuantCurb Pro Tip</h4>
                       <p className="text-sm font-bold text-slate-700">{activeFund.proTip}</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {view === 'comparison' && (
        <div className="space-y-12 animate-in zoom-in-95 duration-500">
          <div className="bg-white rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-slate-900 p-10 flex justify-between items-center text-white">
              <div>
                <h3 className="text-2xl font-black tracking-tight">Institutional Selection Matrix</h3>
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mt-1">Side-by-side Benchmarks & Volatility Analysis</p>
              </div>
              <span className="text-4xl" aria-hidden="true">⚖️</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="p-8 text-[11px] font-black text-slate-400 uppercase tracking-widest">Asset Category</th>
                    <th className="p-8 text-[11px] font-black text-slate-400 uppercase tracking-widest">Risk/Return Profile</th>
                    <th className="p-8 text-[11px] font-black text-slate-400 uppercase tracking-widest">Expense Ratio</th>
                    <th className="p-8 text-[11px] font-black text-slate-400 uppercase tracking-widest">Market Volatility</th>
                    <th className="p-8 text-[11px] font-black text-slate-400 uppercase tracking-widest">Tax Efficiency</th>
                    <th className="p-8 text-[11px] font-black text-slate-400 uppercase tracking-widest">Primary Suitability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 font-medium">
                  {FUNDS.map(f => (
                    <tr 
                      key={f.id} 
                      onClick={() => { setView('deep-dive'); setSelectedId(f.id); }}
                      className="hover:bg-indigo-50/50 transition-all cursor-pointer group"
                    >
                      <td className="p-8">
                        <div className="flex items-center gap-4">
                          <span className="text-3xl group-hover:scale-110 transition-transform">{f.icon}</span>
                          <div>
                            <p className="font-black text-slate-900">{f.name}</p>
                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">{f.pattern}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-8">
                        <div className="space-y-2">
                           <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest inline-block ${
                             f.risk === 'Low' ? 'bg-emerald-100 text-emerald-700' :
                             f.risk === 'Medium' ? 'bg-sky-100 text-sky-700' :
                             f.risk === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-rose-100 text-rose-700'
                           }`}>{f.risk} Risk</span>
                           <p className="text-xs font-black text-slate-800">{f.avgReturn} Target</p>
                        </div>
                      </td>
                      <td className="p-8 text-slate-900 font-black text-sm">{f.expenseRatio}</td>
                      <td className="p-8">
                        <div className="space-y-1">
                           <div className="flex justify-between text-[9px] font-black text-slate-400 uppercase">
                              <span>Low</span>
                              <span>High</span>
                           </div>
                           <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                              <div style={{ width: `${f.volatility * 10}%` }} className={`h-full ${f.volatility > 7 ? 'bg-rose-500' : f.volatility > 4 ? 'bg-indigo-500' : 'bg-emerald-500'}`}></div>
                           </div>
                        </div>
                      </td>
                      <td className="p-8">
                        <span className={`text-xs font-black uppercase tracking-widest ${f.taxEfficiency === 'High' ? 'text-emerald-600' : f.taxEfficiency === 'Medium' ? 'text-indigo-600' : 'text-rose-600'}`}>
                          {f.taxEfficiency} Efficiency
                        </span>
                      </td>
                      <td className="p-8">
                        <div className="flex items-center gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                           <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{f.suitability}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-10 bg-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest max-w-lg text-center md:text-left leading-relaxed">
                * Note to Students: Diversification across these matrix quadrants is the only "free lunch" in finance. High Expense Ratios are the primary cause of long-term wealth erosion.
              </p>
              <button className="px-10 py-4 bg-slate-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all">
                Export Matrix Data
              </button>
            </div>
          </div>

          <section className="bg-indigo-600 p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
             <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                   <span className="inline-block px-4 py-1.5 bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest">Professor's Synthesis</span>
                   <h4 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">Understanding the <span className="text-indigo-300">Efficient Frontier</span></h4>
                   <p className="text-indigo-100 text-lg font-medium leading-relaxed opacity-90">
                     In modern portfolio theory, the "Selection Matrix" helps us map where an asset sits on the Risk-Reward scale. For example, while **REITs** offer high income yield, they often carry higher volatility due to interest rate sensitivity. Conversely, **Index Funds** provide the most stable path for long-term equity growth by eliminating "Individual Stock Risk."
                   </p>
                </div>
                <div className="bg-white/10 p-10 rounded-[3rem] backdrop-blur-xl border border-white/5 space-y-6">
                   <h5 className="text-[10px] font-black text-white uppercase tracking-widest text-center border-b border-white/10 pb-4">Matrix Key takeaways</h5>
                   <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                         <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] font-black shrink-0">1</div>
                         <p className="text-xs font-bold leading-relaxed text-indigo-50">Passive funds (Index/ETFs) generally outperform 90% of Active managers over 10+ year horizons.</p>
                      </li>
                      <li className="flex items-start gap-4">
                         <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] font-black shrink-0">2</div>
                         <p className="text-xs font-bold leading-relaxed text-indigo-50">Volatility is NOT the same as Risk. Volatility is the noise of the market; Risk is the permanent loss of capital.</p>
                      </li>
                      <li className="flex items-start gap-4">
                         <div className="w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center text-[10px] font-black shrink-0">3</div>
                         <p className="text-xs font-bold leading-relaxed text-indigo-50">Tax efficiency is your highest leverage. Use ETFs in taxable brokerages and REITs in IRAs.</p>
                      </li>
                   </ul>
                </div>
             </div>
             <div className="absolute -right-20 -bottom-20 text-[280px] font-black text-white/5 pointer-events-none select-none">LEARN</div>
          </section>
        </div>
      )}

      {view === 'assistant' && (
        <div className="grid md:grid-cols-12 gap-10 animate-in slide-in-from-right-10 duration-500">
           <div className="md:col-span-5 space-y-6">
              <section className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
                 <div className="space-y-4">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">Selection Assistant</h3>
                    <p className="text-slate-500 font-medium">Define your boundaries to receive an institutional asset recommendation.</p>
                 </div>

                 <div className="space-y-10">
                    <div className="space-y-4">
                       <div className="flex justify-between items-end px-2">
                          <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Risk Appetite</label>
                          <span className="text-sm font-black text-indigo-600">{risk < 30 ? 'Conservative' : risk < 70 ? 'Balanced' : 'Aggressive'}</span>
                       </div>
                       <input type="range" min="0" max="100" value={risk} onChange={e => setRisk(Number(e.target.value))} className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" aria-label="Risk Tolerance Slider" />
                       <div className="flex justify-between text-[8px] font-black text-slate-400 uppercase tracking-tighter">
                          <span>Capital Preservation</span>
                          <span>Maximum Alpha</span>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest px-2">Investment Objective</label>
                       <div className="grid grid-cols-1 gap-3">
                          {[
                            { id: 'safety', label: 'Safety First', icon: '🛡️', desc: 'Focus on index tracking & low fees' },
                            { id: 'growth', label: 'Wealth Growth', icon: '🚀', desc: 'Focus on revenue & revenue expansion' },
                            { id: 'income', label: 'Income Yield', icon: '💸', desc: 'Focus on dividends & rental yield' }
                          ].map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => setGoal(opt.id as any)}
                              className={`p-5 rounded-3xl border-2 text-left transition-all ${
                                goal === opt.id ? 'border-indigo-600 bg-indigo-50 shadow-lg' : 'border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200'
                              }`}
                              aria-pressed={goal === opt.id}
                            >
                               <div className="flex items-center gap-4">
                                  <span className="text-2xl" aria-hidden="true">{opt.icon}</span>
                                  <div>
                                     <p className="font-black text-slate-900 text-sm leading-none mb-1">{opt.label}</p>
                                     <p className="text-[10px] text-slate-500 font-medium">{opt.desc}</p>
                                  </div>
                               </div>
                            </button>
                          ))}
                       </div>
                    </div>
                 </div>
              </section>
           </div>

           <div className="md:col-span-7">
              <div className="bg-slate-900 p-12 md:p-20 rounded-[5rem] text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
                 <div className="absolute top-0 right-0 p-12 text-[15rem] opacity-[0.05] font-black pointer-events-none select-none">
                    {assistantRecommendation?.icon}
                 </div>
                 <div className="relative z-10 space-y-8">
                    <span className="inline-block px-5 py-2 bg-indigo-600 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl">Recommended Strategy</span>
                    <div className="space-y-4">
                       <div className="flex items-center gap-6">
                          <span className="text-6xl" aria-hidden="true">{assistantRecommendation?.icon}</span>
                          <h4 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">{assistantRecommendation?.name}</h4>
                       </div>
                       <p className="text-xl text-slate-300 leading-relaxed font-medium max-w-xl">
                         Based on your {risk < 30 ? 'low-risk' : 'growth-oriented'} profile and {goal} objective, the {assistantRecommendation?.name} structure provides the most efficient risk-adjusted path.
                       </p>
                    </div>
                    <div className="flex gap-4 pt-4">
                       <button onClick={() => { setView('deep-dive'); setSelectedId(assistantRecommendation?.id || 'index'); }} className="px-10 py-5 bg-white text-slate-900 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
                          Deep Dive Logic
                       </button>
                       <button className="px-10 py-5 bg-indigo-500/20 border border-indigo-400/30 text-indigo-100 rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-indigo-500/30 transition-all">
                          Get Tickers
                       </button>
                    </div>
                 </div>
                 <div className="absolute -left-20 -bottom-20 text-[250px] font-black text-white/5 pointer-events-none select-none">BEST</div>
              </div>
           </div>
        </div>
      )}

      {/* Cross-Tool CTA */}
      <section className="bg-indigo-600 p-12 md:p-20 rounded-[5rem] text-white shadow-2xl relative overflow-hidden text-center space-y-8">
         <div className="relative z-10 space-y-6">
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">Model Your Growth Potential</h3>
            <p className="text-indigo-100 text-xl font-medium max-w-2xl mx-auto opacity-80 leading-relaxed">
              Don't just read about funds—simulate their performance over decades. Use our Wealth Projector to see how consistent allocation to these funds builds generational freedom.
            </p>
            <div className="pt-6">
               <button className="px-16 py-6 bg-white text-indigo-600 rounded-[2.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-all">
                  Launch Wealth Projector 🚀
               </button>
            </div>
         </div>
         <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none select-none">
            <div className="text-[400px] font-black tracking-tighter" aria-hidden="true">PROJECT</div>
         </div>
      </section>

      <footer className="text-center pt-8 border-t border-slate-100">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">QuantCurb Fund Academy v2.5 • Selection Matrix & Logic Hub</p>
      </footer>
    </div>
  );
};

export default InvestmentAcademy;

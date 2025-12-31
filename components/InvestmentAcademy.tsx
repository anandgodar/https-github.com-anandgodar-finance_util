
import React, { useState } from 'react';

interface FundType {
  id: string;
  name: string;
  icon: string;
  description: string;
  pattern: string;
  risk: 'Low' | 'Medium' | 'High' | 'Extreme';
  reward: 'Steady' | 'Moderate' | 'Aggressive' | 'Alpha' | 'Exponential';
  liquidity: string;
  detailedInsight: string;
  proTip: string;
  examples: { name: string; ticker?: string; context: string }[];
  color: string;
  seoFocus: string[]; // Changed to string array for cleaner tag rendering
}

const FUNDS: FundType[] = [
  {
    id: 'index',
    name: 'Index Funds',
    icon: '⚓',
    description: 'The bedrock of modern passive investing. These funds track broad market benchmarks like the S&P 500, offering instant diversification and rock-bottom fees.',
    pattern: 'The Compounding Anchor',
    risk: 'Medium',
    reward: 'Steady',
    liquidity: 'High (T+1 Settlement)',
    seoFocus: ['Passive Investing', 'S&P 500 Index Funds', 'Low Expense Ratio', 'Market Benchmarks', 'Broad Market Diversification', 'Vanguard VFIAX Strategy'],
    detailedInsight: 'Index funds operate on the philosophy that you cannot consistently beat the market, so you should own the market. By buying every company in a benchmark, you capture the collective growth of the economy while minimizing the risk of individual stock failure. This is the primary vehicle for long-term retirement accounts (401k/IRA).',
    proTip: 'Focus on the "Expense Ratio." A 0.03% fee vs a 0.50% fee can result in hundreds of thousands of dollars in difference over a 30-year investing horizon.',
    examples: [
      { name: 'Vanguard 500 Index Fund', ticker: 'VFIAX', context: 'The gold standard for passive S&P 500 exposure.' },
      { name: 'Fidelity Total Market Index', ticker: 'FSKAX', context: 'Covers all 3,000+ publicly traded US companies.' },
      { name: 'Schwab S&P 500 Index', ticker: 'SWPPX', context: 'Institutional quality with near-zero expense ratios.' }
    ],
    color: 'border-indigo-500 bg-indigo-50 text-indigo-700'
  },
  {
    id: 'etf',
    name: 'ETFs (Exchange Traded)',
    icon: '⚡',
    description: 'Modern financial instruments that combine the diversification of a mutual fund with the intra-day liquidity of a stock. Highly tax-efficient and versatile.',
    pattern: 'The Intra-day Tactician',
    risk: 'Medium',
    reward: 'Moderate',
    liquidity: 'Instant (Market Hours)',
    seoFocus: ['Best ETFs 2025', 'Mutual Funds vs ETFs', 'Tactical Asset Allocation', 'Sector Rotation', 'Liquid Diversification', 'Tax-Efficient Investing'],
    detailedInsight: 'Unlike mutual funds which only price at the end of the day, ETFs trade on exchanges like stocks. They are structural masterpieces of tax efficiency due to the "In-Kind" creation/redemption process, meaning they rarely trigger capital gains for holders unless the holder sells their own shares.',
    proTip: 'Use ETFs for "Sector Tilting." If you believe AI or Semiconductors will outperform the general market, you can buy niche ETFs like SMH or QQQ to increase exposure without picking individual stocks.',
    examples: [
      { name: 'SPDR S&P 500 ETF Trust', ticker: 'SPY', context: 'The most liquid financial instrument in the world.' },
      { name: 'Invesco QQQ Trust', ticker: 'QQQ', context: 'Tracks the Tech-heavy Nasdaq-100 index.' },
      { name: 'Vanguard Growth ETF', ticker: 'VUG', context: 'Focuses on companies with rapid earnings expansion.' }
    ],
    color: 'border-sky-500 bg-sky-50 text-sky-700'
  },
  {
    id: 'active',
    name: 'Active Mutual Funds',
    icon: '🧠',
    description: 'The classic managed fund where human professionals (Portfolio Managers) use active research to pick specific winners, attempting to "Alpha" the benchmark.',
    pattern: 'The Alpha Hunt',
    risk: 'High',
    reward: 'Aggressive',
    liquidity: 'High (End of Day)',
    seoFocus: ['Active Portfolio Management', 'Seeking Alpha', 'Mutual Fund Performance', 'Active vs Passive', 'Managed Equity Funds', 'Professional Stock Picking'],
    detailedInsight: 'Active funds seek to exploit market inefficiencies. While they carry higher expense ratios (0.5% - 1.5%), they offer the potential to outperform during volatile markets where passive index funds simply follow the trend downward. Success depends entirely on the manager\'s "Edge."',
    proTip: 'Look for "Active Share." This metric tells you how different the fund is from its benchmark. If a manager charges high fees but just copies the S&P 500 (Closet Indexing), avoid it.',
    examples: [
      { name: 'Fidelity Contrafund', ticker: 'FCNTX', context: 'A legendary fund focusing on undervalued growth plays.' },
      { name: 'American Funds Growth Fund', ticker: 'AGTHX', context: 'A cornerstone of many 401(k) plans with multiple managers.' },
      { name: 'Ark Innovation ETF', ticker: 'ARKK', context: 'A modern, high-volatility bet on disruptive technologies.' }
    ],
    color: 'border-purple-500 bg-purple-50 text-purple-700'
  },
  {
    id: 'reit',
    name: 'REITs (Real Estate)',
    icon: '🏢',
    description: 'Liquid real estate exposure. These trusts own income-producing assets like data centers, apartment complexes, and warehouses, paying out 90% of profit as dividends.',
    pattern: 'The Yield Generator',
    risk: 'Medium',
    reward: 'Steady',
    liquidity: 'High',
    seoFocus: ['Passive Rental Income', 'REIT Dividends', 'Commercial Real Estate Investing', 'Inflation Hedge', 'Data Center REITs', 'Dividend Yield Strategy'],
    detailedInsight: 'REITs allow you to be a landlord without the midnight calls about a broken pipe. They provide a powerful inflation hedge because rents usually rise with CPI. They are legally required to distribute almost all earnings to shareholders, making them a favorite for income-focused retirees.',
    proTip: 'REITs behave differently than the S&P 500. They are sensitive to interest rates. When rates fall, REIT prices often rise as their dividends become more attractive compared to bonds.',
    examples: [
      { name: 'Realty Income Corp', ticker: 'O', context: 'Known as "The Monthly Dividend Company" with retail focus.' },
      { name: 'Prologis Inc', ticker: 'PLD', context: 'The global leader in logistics and warehouse real estate.' },
      { name: 'American Tower Corp', ticker: 'AMT', context: 'The dominant player in 5G and telecommunications infrastructure.' }
    ],
    color: 'border-emerald-500 bg-emerald-50 text-emerald-700'
  },
  {
    id: 'hedge',
    name: 'Hedge Funds',
    icon: '💎',
    description: 'Elite alternative investments for institutional capital. They use advanced techniques like short-selling, leverage, and arbitrage to generate "Absolute Return."',
    pattern: 'Absolute Return Logic',
    risk: 'Extreme',
    reward: 'Alpha',
    liquidity: 'Low (Quarterly/Annual)',
    seoFocus: ['Institutional Alternative Assets', 'Long Short Equity', 'Absolute Return Strategies', 'Accredited Investors', 'Hedge Fund Fee Structure', 'Market Neutral Investing'],
    detailedInsight: 'Reserved for accredited investors and pension funds. Hedge funds aim for "market neutral" returns—making money even when the S&P 500 is crashing. They charge a "2 and 20" fee structure (2% management fee, 20% performance fee), aligning their wealth with your success.',
    proTip: 'Hedge funds are "Correlation Killers." They are added to a portfolio specifically to reduce volatility, not necessarily to have the highest returns. They zig when the market zags.',
    examples: [
      { name: 'Bridgewater Associates', context: 'The world\'s largest hedge fund, famous for its "Pure Alpha" strategy.' },
      { name: 'Citadel Securities', context: 'A powerhouse in market-making and algorithmic multi-strategy trading.' },
      { name: 'Millennium Management', context: 'A multi-manager platform designed for consistent low-volatility returns.' }
    ],
    color: 'border-slate-900 bg-slate-50 text-slate-900'
  },
  {
    id: 'pevc',
    name: 'Private Equity & VC',
    icon: '🦄',
    description: 'Investing in the "Unicorns" before they go public. Focuses on buying entire companies, optimizing them, or funding high-growth startups like SpaceX or Stripe.',
    pattern: 'The Venture Outlier',
    risk: 'Extreme',
    reward: 'Exponential',
    liquidity: 'Very Low (10-Year Lock-up)',
    seoFocus: ['Venture Capital Startups', 'Pre-IPO Investing', 'Private Equity IRR', 'Startup Unicorns', 'Illiquid Assets', 'Angel Investing Keywords'],
    detailedInsight: 'This is where generational wealth is built. VC funds capture the 1,000x returns of early-stage startups. Private Equity (PE) firms buy mature companies, use debt to leverage returns, and sell them after 5-7 years of operational improvements. It is the most illiquid but potentially most lucrative asset class.',
    proTip: 'This is a "Hits Business." In a VC portfolio of 10 companies, 7 will likely fail, 2 will break even, and 1 will provide the 100x return that pays for all the others.',
    examples: [
      { name: 'Blackstone Group', ticker: 'BX', context: 'The world\'s largest alternative asset manager (PE Focus).' },
      { name: 'Sequoia Capital', context: 'The venture firm that funded Apple, Google, and Airbnb.' },
      { name: 'Andreessen Horowitz (a16z)', context: 'Leading the charge in Crypto, AI, and Software ventures.' }
    ],
    color: 'border-rose-500 bg-rose-50 text-rose-700'
  },
  {
    id: 'money',
    name: 'Money Market Funds',
    icon: '🛡️',
    description: 'The "Safety Net" for cash. Investing in ultra-short-term government debt (Treasury Bills) to earn a competitive yield while keeping principal 100% safe.',
    pattern: 'Capital Preservation',
    risk: 'Low',
    reward: 'Steady',
    liquidity: 'Immediate',
    seoFocus: ['Cash Equivalent Assets', 'High Yield Savings Alternatives', 'Treasury Bill Rates', 'Stable NAV Funds', 'Liquid Emergency Fund', 'Risk-Free Rate of Return'],
    detailedInsight: 'When interest rates rise, money market funds become the MVP of a portfolio. They offer yields far superior to standard savings accounts while maintaining a "Stable Net Asset Value" of $1.00 per share. This is where you park your emergency fund or "Dry Powder" waiting for a market crash.',
    proTip: 'Look for "Government-Only" money market funds if you want the highest level of security. They invest exclusively in US Treasury obligations, making them effectively as safe as cash in a mattress but with a yield.',
    examples: [
      { name: 'Vanguard Federal Money Market', ticker: 'VMFXX', context: 'A massive fund investing purely in US Treasury obligations.' },
      { name: 'Fidelity Government Cash Reserves', ticker: 'FDRXX', context: 'Highly liquid institutional cash management for retail users.' },
      { name: 'Schwab Value Advantage Trust', ticker: 'SWVXX', context: 'Competitive yields for excess cash in brokerage accounts.' }
    ],
    color: 'border-amber-500 bg-amber-50 text-amber-700'
  }
];

const InvestmentAcademy: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('index');
  const activeFund = FUNDS.find(f => f.id === selectedId) || FUNDS[0];

  return (
    <div className="max-w-7xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-6 duration-700 pb-24">
      <header className="text-center space-y-4">
        <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Institutional Knowledge Base</div>
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">Investment <span className="text-indigo-600">Fund Academy</span></h1>
        <p className="text-slate-500 font-medium text-lg max-w-3xl mx-auto leading-relaxed">
          The ultimate guide to the global asset ecosystem. Master the risk-reward matrix and institutional frameworks used by the world's top wealth managers.
        </p>
      </header>

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
                {selectedId === fund.id && <span className="text-indigo-600 animate-pulse">●</span>}
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

                {/* SEO Focus Tag Hub */}
                <div className="space-y-4">
                  <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                    Search Intelligence & SEO Focus
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeFund.seoFocus.map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-[9px] font-black text-slate-500 uppercase tracking-widest hover:border-indigo-200 hover:text-indigo-600 transition-all cursor-default">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 space-y-8">
                    <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                       Risk-Reward Profile
                    </h5>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                         <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Risk Index</span>
                         <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                           activeFund.risk === 'Low' ? 'bg-emerald-100 text-emerald-700' :
                           activeFund.risk === 'Medium' ? 'bg-sky-100 text-sky-700' :
                           activeFund.risk === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-rose-100 text-rose-700'
                         }`}>{activeFund.risk}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                         <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Yield Potential</span>
                         <span className="text-xs font-black text-slate-900 uppercase">{activeFund.reward}</span>
                      </div>
                      <div className="flex justify-between items-center">
                         <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Exit Liquidity</span>
                         <span className="text-xs font-black text-slate-900 uppercase">{activeFund.liquidity}</span>
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

                <div className="space-y-8">
                   <div className="space-y-4">
                      <h3 className="text-xl font-black text-slate-900 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm">💡</span>
                        Deep Intelligence Insight
                      </h3>
                      <div className="p-10 bg-indigo-50/50 rounded-[3rem] border border-indigo-100 text-lg text-slate-700 leading-relaxed font-medium italic">
                        "{activeFund.detailedInsight}"
                      </div>
                   </div>

                   <div className="bg-amber-50 p-8 rounded-[3rem] border border-amber-100 space-y-4 shadow-sm">
                      <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-widest flex items-center gap-2">
                        <span className="text-lg">⭐</span> QuantCurb Pro Tip
                      </h4>
                      <p className="text-slate-700 font-bold leading-relaxed">
                        {activeFund.proTip}
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <section className="bg-slate-900 p-12 md:p-24 rounded-[5rem] grid md:grid-cols-2 gap-20 items-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="space-y-8 relative z-10">
          <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.5em]">Real World Portfolio Theory</span>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">Mastering the <span className="text-indigo-500">Institutional</span> Core-Satellite</h3>
          <p className="text-slate-400 text-xl leading-relaxed font-medium">
            Professional wealth managers rarely bet on a single fund. They build a <strong>Core</strong> of low-cost broad index exposure (70-80%) to capture market growth, and surround it with <strong>Satellite</strong> niche funds (20-30%) like Tech ETFs, REITs, or PE for market-beating "Alpha."
          </p>
          <div className="flex gap-6 pt-6">
             <div className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-xs font-black text-indigo-400 uppercase mb-1">Passivity Score</p>
                <p className="text-2xl font-black text-white">8.5/10</p>
             </div>
             <div className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-xs font-black text-emerald-400 uppercase mb-1">Yield Efficiency</p>
                <p className="text-2xl font-black text-white">9.2/10</p>
             </div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 p-12 rounded-[4rem] backdrop-blur-xl space-y-12 relative z-10">
           <h4 className="text-[10px] font-black text-indigo-300 uppercase tracking-widest text-center">Asset Allocation Heatmap</h4>
           <div className="grid grid-cols-2 gap-6 scale-110">
              <div className="h-40 bg-white/5 rounded-3xl flex flex-col items-center justify-center border border-white/10 group hover:bg-indigo-500/10 transition-all cursor-default">
                 <span className="text-4xl mb-4 group-hover:scale-125 transition-transform">🌍</span>
                 <span className="text-[11px] font-black text-white uppercase tracking-widest">Equity Core</span>
                 <span className="text-[9px] font-bold text-slate-500 mt-1">60% WEIGHT</span>
              </div>
              <div className="h-40 bg-white/5 rounded-3xl flex flex-col items-center justify-center border border-white/10 group hover:bg-emerald-500/10 transition-all cursor-default">
                 <span className="text-4xl mb-4 group-hover:scale-125 transition-transform">🏢</span>
                 <span className="text-[11px] font-black text-white uppercase tracking-widest">Real Estate</span>
                 <span className="text-[9px] font-bold text-slate-500 mt-1">15% WEIGHT</span>
              </div>
              <div className="h-40 bg-white/5 rounded-3xl flex flex-col items-center justify-center border border-white/10 group hover:bg-amber-500/10 transition-all cursor-default">
                 <span className="text-4xl mb-4 group-hover:scale-125 transition-transform">🛡️</span>
                 <span className="text-[11px] font-black text-white uppercase tracking-widest">Cash/Debt</span>
                 <span className="text-[9px] font-bold text-slate-500 mt-1">10% WEIGHT</span>
              </div>
              <div className="h-40 bg-white/5 rounded-3xl flex flex-col items-center justify-center border border-white/10 group hover:bg-purple-500/10 transition-all cursor-default">
                 <span className="text-4xl mb-4 group-hover:scale-125 transition-transform">🚀</span>
                 <span className="text-[11px] font-black text-white uppercase tracking-widest">Alternative</span>
                 <span className="text-[9px] font-bold text-slate-500 mt-1">15% WEIGHT</span>
              </div>
           </div>
        </div>
      </section>

      <footer className="text-center space-y-6 pt-12 border-t border-slate-100">
         <p className="text-[10px] font-black text-slate-400 uppercase tracking-[1em]">QuantCurb Institutional Academy v3.1</p>
         <div className="flex flex-wrap justify-center gap-4">
            {["ETF Intelligence", "Index Fund Mastery", "Alpha Strategy", "Portfolio Allocation", "Investment Risk Management"].map(tag => (
              <span key={tag} className="px-5 py-2 bg-slate-100 text-slate-500 rounded-xl text-[10px] font-bold border border-slate-200/50">{tag}</span>
            ))}
         </div>
      </footer>
    </div>
  );
};

export default InvestmentAcademy;

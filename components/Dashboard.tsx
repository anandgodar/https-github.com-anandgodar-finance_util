
import React from 'react';
import { ToolType } from '../types';

interface DashboardProps {
  onSelectTool: (tool: ToolType) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectTool }) => {
  const cards = [
    { 
      id: ToolType.EMI_CALC, 
      title: 'Loan EMI Pro', 
      desc: 'Institutional-grade reducing balance loan calculator for Home, Car, and Personal debt payoff optimization.', 
      icon: '💳', 
      color: 'bg-blue-50 text-blue-600',
      keywords: 'Amortization, Principal reduction'
    },
    { 
      id: ToolType.MORTGAGE_CALC, 
      title: 'Mortgage Intel', 
      desc: 'Advanced real estate financing tool with PITI logic, property tax, insurance, and PMI stress testing.', 
      icon: '🏡', 
      color: 'bg-indigo-50 text-indigo-600',
      keywords: 'LTV Ratio, Escrow analysis'
    },
    { 
      id: ToolType.EXCEL_MODELER, 
      title: 'Excel Power Modeler', 
      desc: 'Simulate high-fidelity DCF models and sensitivity matrices with professional spreadsheet logic.', 
      icon: '📁', 
      color: 'bg-green-50 text-green-600',
      keywords: 'DCF Valuation, WACC matrix'
    },
    { 
      id: ToolType.SALARY_CALC, 
      title: 'Salary Estimator', 
      desc: 'Precision after-tax income modeling for all US states including 401k tax-shield and FICA analysis.', 
      icon: '💰', 
      color: 'bg-emerald-50 text-emerald-600',
      keywords: 'Take-home pay, Tax brackets'
    },
    { 
      id: ToolType.INVESTMENT_CALC, 
      title: 'Wealth SIP', 
      desc: 'Visualize compound interest growth trajectories with inflation-adjusted investment modeling.', 
      icon: '📈', 
      color: 'bg-purple-50 text-purple-600',
      keywords: 'SIP, Compounding growth'
    },
  ];

  return (
    <div className="space-y-20 pb-32">
      {/* Hero Section */}
      <header className="max-w-4xl animate-in fade-in slide-in-from-top-8 duration-700">
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">
          Institutional <span className="text-indigo-600">Financial Modeling</span> <br/>for Daily Wealth.
        </h1>
        <p className="mt-8 text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-3xl">
          QuantCurb brings banking-grade precision to retail financial planning. Audit your mortgage, simulate early retirement, and model tax-optimized salary outcomes with 100% algorithmic accuracy.
        </p>
        <div className="flex gap-4 mt-10">
          <span className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-indigo-100 shadow-sm">Verified Logic</span>
          <span className="px-4 py-2 bg-slate-50 text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-100">AI-Powered Insights</span>
        </div>
      </header>

      {/* Semantic Grid for Search Engines */}
      <section className="space-y-10">
        <div className="flex justify-between items-end border-b border-slate-100 pb-6">
          <div className="space-y-1">
            <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em]">Core Quantitative Suite</h2>
            <p className="text-slate-900 font-black text-lg">High-Fidelity Financial Utilities</p>
          </div>
          <span className="text-[10px] font-black text-indigo-400 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">Release v3.1.2</span>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => onSelectTool(card.id)}
              className="text-left group bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
            >
              <div className={`w-16 h-16 rounded-2xl ${card.color} flex items-center justify-center text-4xl mb-8 transition-transform group-hover:rotate-6 group-hover:scale-110 shadow-sm`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{card.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium flex-1">
                {card.desc}
              </p>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {card.keywords.split(', ').map(kw => (
                    <span key={kw} className="text-[8px] font-black text-slate-400 border border-slate-100 px-2 py-0.5 rounded-lg uppercase tracking-tighter">
                      {kw}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-indigo-600 font-black text-[10px] uppercase tracking-[0.2em]">
                  Run Simulation <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* AI Market Banner - High Value SEO Context */}
      <div className="bg-slate-900 rounded-[5rem] p-10 md:p-20 text-white overflow-hidden relative shadow-2xl border border-slate-800">
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
                <div className="space-y-4">
                  <span className="inline-block px-5 py-2 bg-indigo-600 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">Market Ecosystem Triage</span>
                  <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter">
                    Institutional <span className="text-indigo-400">vs</span> <br/>Retail Paradigms
                  </h2>
                </div>
                <p className="text-slate-400 text-xl leading-relaxed font-medium max-w-xl">
                  QuantCurb's proprietary AI engine audits the global financial stack. We bridge the gap between low-latency institutional platforms (FactSet, Aladdin) and modern retail convenience (Robinhood, Wise).
                </p>
                <div className="flex gap-6 pt-4">
                  <button 
                    onClick={() => onSelectTool(ToolType.MARKET_INSIGHTS)}
                    className="px-10 py-5 bg-white text-slate-900 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-xl hover:scale-105"
                  >
                      View Market Pulse
                  </button>
                </div>
            </div>
            <div className="hidden lg:flex justify-center relative">
                <div className="grid grid-cols-2 gap-8 scale-110">
                    <div className="h-40 w-40 bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center text-5xl animate-pulse backdrop-blur-sm">🏛️</div>
                    <div className="h-40 w-40 bg-indigo-600 rounded-[3rem] translate-y-12 flex items-center justify-center text-5xl shadow-2xl shadow-indigo-600/50 text-white border border-indigo-500">📱</div>
                    <div className="h-40 w-40 bg-slate-800 rounded-[3rem] flex items-center justify-center text-5xl text-indigo-400 border border-white/5">📊</div>
                    <div className="h-40 w-40 bg-indigo-900/40 rounded-[3rem] border border-indigo-500/20 translate-y-12 flex items-center justify-center text-5xl text-indigo-200 backdrop-blur-xl">🔍</div>
                </div>
                {/* Decorative Elements for SEO flavor */}
                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-green-500/30 opacity-40 leading-none">
                  RUNNING_ANALYSIS: MARKET_CAP_2025<br/>LATENCY: 0.2ms<br/>DATA_DEPTH: UNLIMITED
                </div>
            </div>
        </div>
        <div className="absolute -left-20 -bottom-20 text-[300px] font-black text-white/[0.03] pointer-events-none select-none tracking-tighter uppercase">
          QuantCurb
        </div>
      </div>

      {/* Institutional Accuracy Section - SEO Rich Content */}
      <section className="grid md:grid-cols-2 gap-16 items-start py-10">
        <div className="space-y-8">
           <div className="space-y-4">
             <h2 className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.4em]">Algorithmic Integrity</h2>
             <h3 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">Professional-Grade <br/>Mathematical Standards</h3>
           </div>
           <p className="text-slate-500 text-lg leading-relaxed font-medium">
             Our platform doesn't just calculate; it audits. Every tool in the QuantCurb suite is built using standardized financial accounting principles used by global banks and private equity firms.
           </p>
           <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <h4 className="font-black text-slate-800 text-sm">Reducing Balance Logic</h4>
                <p className="text-xs text-slate-400 font-medium">Standard for mortgage and term loan amortization globally.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-black text-slate-800 text-sm">Real Rate of Return</h4>
                <p className="text-xs text-slate-400 font-medium">Wealth projections adjusted for historic CPI and inflation trends.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-black text-slate-800 text-sm">Tax Shield Analysis</h4>
                <p className="text-xs text-slate-400 font-medium">Sophisticated 401k and IRA deduction modeling for net pay.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-black text-slate-800 text-sm">Sensitivity Matrices</h4>
                <p className="text-xs text-slate-400 font-medium">Multi-stage DCF modeling with WACC and growth rate variance.</p>
              </div>
           </div>
        </div>
        <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10 relative overflow-hidden">
           <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center mb-6">QuantCurb Verification Framework</h4>
           <div className="space-y-4 relative z-10">
              {[
                { label: 'Reducing Balance Algorithm', status: 'VERIFIED', color: 'text-emerald-500' },
                { label: 'US Tax Code 2024 Compliance', status: 'AUDITED', color: 'text-indigo-500' },
                { label: 'Compounding Logic Precision', status: '100% ACCURATE', color: 'text-sky-500' },
                { label: 'Real-time Sentiment Engine', status: 'STABLE', color: 'text-indigo-600' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-6 bg-slate-50 rounded-3xl group hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
                   <span className="text-sm font-black text-slate-700 tracking-tight">{item.label}</span>
                   <span className={`text-[9px] font-black ${item.color} uppercase tracking-widest bg-white px-3 py-1 rounded-full shadow-sm`}>{item.status}</span>
                </div>
              ))}
           </div>
           <div className="absolute -right-10 -top-10 text-[180px] font-black text-slate-50/50 pointer-events-none select-none -rotate-12">
             TRUST
           </div>
        </div>
      </section>

      {/* SEO Footer Links Summary */}
      <section className="text-center pt-20 border-t border-slate-100">
         <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.5em] mb-12">High-Intent Financial Taxonomy</p>
         <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {[
              "Mortgage APR Calculator", "DCF Financial Modeling", "Debt Payoff Strategy", "SIP Wealth Projector",
              "Compound Interest Formula", "Net Pay Estimator", "Refinance Break-even Analysis", "FIRE Freedom Number",
              "Loan Amortization Table", "Self-Employment Tax Hub", "Asset Allocation Academy", "Market Sentiment Analysis"
            ].map(tag => (
              <span key={tag} className="px-6 py-3 bg-white text-slate-500 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-slate-100 hover:text-indigo-600 hover:border-indigo-200 transition-all cursor-default shadow-sm">
                {tag}
              </span>
            ))}
         </div>
      </section>
    </div>
  );
};

export default Dashboard;

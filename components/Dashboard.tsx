
import React from 'react';
import { ToolType } from '../types';

interface DashboardProps {
  onSelectTool: (tool: ToolType) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectTool }) => {
  const cards = [
    { id: ToolType.EMI_CALC, title: 'Loan EMI Pro', desc: 'Accelerate debt payoff for Home, Car or Personal loans.', icon: '💳', color: 'bg-blue-50 text-blue-600' },
    { id: ToolType.MORTGAGE_CALC, title: 'Mortgage Intel', desc: 'Detailed home financing with taxes and insurance.', icon: '🏡', color: 'bg-indigo-50 text-indigo-600' },
    { id: ToolType.INVESTMENT_ACADEMY, title: 'Fund Academy', desc: 'Master Index Funds, ETFs, and institutional assets.', icon: '🎓', color: 'bg-amber-50 text-amber-600' },
    { id: ToolType.SALARY_CALC, title: 'Salary Estimator', desc: 'After-tax income logic for precise financial planning.', icon: '💰', color: 'bg-green-50 text-green-600' },
    { id: ToolType.INVESTMENT_CALC, title: 'Wealth SIP', desc: 'Visualize compound growth over decades of investing.', icon: '📈', color: 'bg-purple-50 text-purple-600' },
  ];

  return (
    <div className="space-y-16 pb-20">
      <header className="max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
          Financial Intelligence <span className="text-indigo-600 block">Without the Latency.</span>
        </h2>
        <p className="mt-6 text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
          QuantCurb brings institutional-grade modeling to your daily life. From complex mortgage audits to early retirement pathing—calculated with 100% precision.
        </p>
      </header>

      {/* Primary Tools */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Institutional Utilities</h3>
          <span className="text-[10px] font-bold text-indigo-400 bg-indigo-50 px-2 py-1 rounded">QuantCurb 3.1</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => onSelectTool(card.id)}
              className="text-left group bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center text-3xl mb-6 transition-transform group-hover:rotate-6 group-hover:scale-110`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{card.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{card.desc}</p>
              <div className="mt-auto flex items-center text-indigo-600 font-bold text-[10px] uppercase tracking-widest">
                Launch <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* AI Market Banner */}
      <div className="bg-slate-900 rounded-[4rem] p-8 md:p-14 text-white overflow-hidden relative shadow-2xl">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <span className="inline-block px-4 py-1 bg-indigo-500 rounded-full text-[10px] font-black uppercase tracking-widest">Market Pulse v3.1</span>
                <h3 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">Pro vs Retail <br/>App Ecosystem</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                    QuantCurb AI analyzes how professionals (Bloomberg, BlackRock) use data vs. how retail users (Robinhood, Wise) interact with convenience.
                </p>
                <div className="flex gap-4 pt-4">
                  <button 
                    onClick={() => onSelectTool(ToolType.MARKET_INSIGHTS)}
                    className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-lg"
                  >
                      Explore App Ecosystem
                  </button>
                </div>
            </div>
            <div className="hidden md:flex justify-center">
                <div className="grid grid-cols-2 gap-6 scale-110">
                    <div className="h-32 w-32 bg-indigo-500/10 rounded-[2.5rem] border border-indigo-500/30 flex items-center justify-center text-4xl animate-pulse">🏛️</div>
                    <div className="h-32 w-32 bg-indigo-600 rounded-[2.5rem] translate-y-8 flex items-center justify-center text-4xl shadow-xl shadow-indigo-600/40 text-white">📱</div>
                    <div className="h-32 w-32 bg-slate-800 rounded-[2.5rem] flex items-center justify-center text-4xl text-indigo-400">📊</div>
                    <div className="h-32 w-32 bg-indigo-800/20 rounded-[2.5rem] border border-indigo-500/20 translate-y-8 flex items-center justify-center text-4xl text-indigo-200">🔍</div>
                </div>
            </div>
        </div>
        <div className="absolute -left-20 -bottom-20 text-[260px] font-black text-white/5 pointer-events-none select-none">QUANT</div>
      </div>
    </div>
  );
};

export default Dashboard;

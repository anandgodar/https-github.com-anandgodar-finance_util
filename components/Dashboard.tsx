import React from 'react';
import { ToolType } from '../types';

interface DashboardProps {
  onSelectTool: (tool: ToolType) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectTool }) => {
  const cards = [
    { id: ToolType.EMI_CALC, title: 'Loan EMI', desc: 'Accelerate debt payoff for Home, Car or Personal loans.', icon: '💳', color: 'bg-blue-50 text-blue-600' },
    { id: ToolType.MORTGAGE_CALC, title: 'Mortgage Pro', desc: 'Detailed home financing with taxes and insurance.', icon: '🏡', color: 'bg-indigo-50 text-indigo-600' },
    { id: ToolType.SALARY_CALC, title: 'Salary Check', desc: 'After-tax income logic for precise financial planning.', icon: '💰', color: 'bg-green-50 text-green-600' },
    { id: ToolType.INVESTMENT_CALC, title: 'Wealth SIP', desc: 'Visualize compound growth over decades of investing.', icon: '📈', color: 'bg-purple-50 text-purple-600' },
    { id: ToolType.CURRENCY_CONV, title: 'Currency Intel', desc: 'Global exchange rates with AI market sentiment.', icon: '🌍', color: 'bg-sky-50 text-sky-600' },
  ];

  const roadmapItems = [
    { title: 'GST/VAT Logic', icon: '🧾', type: 'Taxation', priority: 'High' },
    { title: 'FIRE Planner', icon: '🔥', type: 'Wealth', priority: 'High' },
    { title: 'Inflation Impact', icon: '💸', type: 'Economics', priority: 'Medium' },
    { title: 'Credit Card Payoff', icon: '✂️', type: 'Debt', priority: 'Medium' },
    { title: 'Stock Average Price', icon: '📊', type: 'Trading', priority: 'Low' },
    { title: 'Income Tax Pro', icon: '📅', type: 'Annual', priority: 'Seasonal' },
  ];

  return (
    <div className="space-y-16 pb-20">
      <header className="max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Financial <span className="text-indigo-600 underline decoration-indigo-200">Intelligence</span> for Everyone.
        </h2>
        <p className="mt-6 text-xl text-slate-500 leading-relaxed font-medium">
          Whether you're calculating a monthly EMI or projecting 20 years of SIP growth, FinVault provides the data-backed clarity you need.
        </p>
      </header>

      {/* Primary Tools */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Ready Utilities</h3>
          <span className="text-[10px] font-bold text-indigo-400 bg-indigo-50 px-2 py-1 rounded">v2.4 Active</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => onSelectTool(card.id)}
              className="text-left group bg-white p-6 rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center text-3xl mb-6 transition-transform group-hover:rotate-6 group-hover:scale-110`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{card.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{card.desc}</p>
              <div className="mt-auto flex items-center text-indigo-600 font-bold text-sm">
                Launch <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* AI Market Banner */}
      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-14 text-white overflow-hidden relative shadow-2xl">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <span className="inline-block px-4 py-1 bg-indigo-500 rounded-full text-[10px] font-black uppercase tracking-widest">Global Market Intelligence</span>
                <h3 className="text-4xl font-black leading-tight">Gemini AI Market Pulse</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                    Our AI models analyze macro-economic trends in real-time. Understand why fixed rates are volatile and how it affects your borrowing strategy.
                </p>
                <div className="flex gap-4 pt-4">
                  <button 
                    onClick={() => onSelectTool(ToolType.MARKET_INSIGHTS)}
                    className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-lg"
                  >
                      View Market Intel
                  </button>
                </div>
            </div>
            <div className="hidden md:flex justify-center">
                <div className="grid grid-cols-2 gap-6 scale-110">
                    <div className="h-32 w-32 bg-indigo-500/10 rounded-[2rem] border border-indigo-500/30 flex items-center justify-center text-4xl animate-pulse">🤖</div>
                    <div className="h-32 w-32 bg-indigo-600 rounded-[2rem] translate-y-8 flex items-center justify-center text-4xl shadow-xl shadow-indigo-600/40 text-white">⚡</div>
                    <div className="h-32 w-32 bg-slate-800 rounded-[2rem] flex items-center justify-center text-4xl text-indigo-400">📊</div>
                    <div className="h-32 w-32 bg-indigo-800/20 rounded-[2rem] border border-indigo-500/20 translate-y-8 flex items-center justify-center text-4xl text-indigo-200">💎</div>
                </div>
            </div>
        </div>
        <div className="absolute -left-20 -bottom-20 text-[200px] font-black text-white/5 pointer-events-none select-none">AI</div>
      </div>

      {/* Evolution Roadmap */}
      <section className="space-y-8 bg-white/40 p-10 rounded-[3rem] border border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h3 className="text-2xl font-black text-slate-900">Utility <span className="text-indigo-600">Evolution</span></h3>
            <p className="text-slate-500 text-sm font-medium mt-1 italic">Building the tools people use every single day.</p>
          </div>
          <div className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest">Market Demand Queue</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {roadmapItems.map((item, idx) => (
            <div key={idx} className="group p-6 bg-white border border-slate-100 rounded-3xl text-center space-y-3 transition-all hover:border-indigo-200 hover:shadow-md">
              <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-500 mb-2">
                {item.icon}
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{item.type}</p>
              <h4 className="text-xs font-bold text-slate-700 leading-tight">{item.title}</h4>
              <div className="pt-2">
                <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${item.priority === 'High' ? 'text-indigo-600 bg-indigo-50' : 'text-slate-300 bg-slate-50'}`}>
                  {item.priority} Priority
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
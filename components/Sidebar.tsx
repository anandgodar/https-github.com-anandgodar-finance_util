
import React from 'react';
import { ToolType } from '../types';

interface SidebarProps {
  activeTool: ToolType;
  setActiveTool: (tool: ToolType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTool, setActiveTool }) => {
  const mainTools = [
    { id: ToolType.DASHBOARD, label: 'Dashboard', icon: '📊' },
    { id: ToolType.EMI_CALC, label: 'Loan EMI Pro', icon: '💳' },
    { id: ToolType.MORTGAGE_CALC, label: 'Mortgage Pro', icon: '🏡' },
    { id: ToolType.FIRE_PLANNER, label: 'FIRE Planner', icon: '🔥' },
    { id: ToolType.SALARY_CALC, label: 'Salary Estimator', icon: '💰' },
    { id: ToolType.FREELANCE_PROFIT, label: 'Freelance Hub', icon: '💼' },
    { id: ToolType.INVESTMENT_CALC, label: 'Wealth Projector', icon: '📈' },
    { id: ToolType.LOAN_COMPARE, label: 'Loan Intel', icon: '⚖️' },
  ];

  const dailyTools = [
    { id: ToolType.CURRENCY_CONV, label: 'Currency Intel', icon: '🌍' },
    { id: ToolType.GST_CALC, label: 'GST Calculator', icon: '🧾' },
    { id: ToolType.CREDIT_CARD_PAYOFF, label: 'Card Payoff', icon: '✂️' },
  ];

  const insightTools = [
    { id: ToolType.MARKET_INSIGHTS, label: 'Market Pulse', icon: '🤖' },
    { id: ToolType.INVESTMENT_ACADEMY, label: 'Fund Academy', icon: '🎓' },
    { id: ToolType.FAQ, label: 'Knowledge Base', icon: '❓' },
  ];

  return (
    <div className="w-72 bg-white border-r h-screen sticky top-0 hidden md:flex flex-col z-50">
      <div className="p-8 border-b">
        <button 
          onClick={() => setActiveTool(ToolType.DASHBOARD)}
          className="text-2xl font-black text-slate-900 flex items-center gap-3 group"
        >
          <span className="p-2 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-100 group-hover:scale-110 transition-transform">📈</span>
          <span>Quant<span className="text-indigo-600">Curb</span></span>
        </button>
      </div>

      <div className="flex-1 p-4 space-y-8 overflow-y-auto custom-scrollbar">
        <section>
          <h3 className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Core Utilities</h3>
          <nav className="space-y-1">
            {mainTools.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTool(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                  activeTool === item.id
                    ? 'bg-indigo-600 text-white font-black shadow-xl shadow-indigo-100'
                    : 'text-slate-500 hover:bg-slate-50 font-semibold'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
        </section>

        <section>
          <h3 className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Daily Logic</h3>
          <nav className="space-y-1">
            {dailyTools.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTool(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                  activeTool === item.id
                    ? 'bg-emerald-600 text-white font-black shadow-xl shadow-emerald-100'
                    : 'text-slate-500 hover:bg-slate-50 font-semibold'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
        </section>

        <section>
          <h3 className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Intelligence</h3>
          <nav className="space-y-1">
            {insightTools.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTool(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                  activeTool === item.id
                    ? 'bg-slate-900 text-white font-black'
                    : 'text-slate-500 hover:bg-slate-50 font-semibold'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
        </section>
      </div>

      <div className="p-6 border-t space-y-4">
        <div className="bg-slate-50 p-4 rounded-2xl">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">NETWORK STATUS</p>
          <p className="text-[11px] font-bold text-slate-700 leading-tight">Live: QuantCurb Oracle v3.1</p>
        </div>
        <p className="text-[10px] text-slate-400 font-bold">© 2025 QuantCurb Intelligence</p>
      </div>
    </div>
  );
};

export default Sidebar;

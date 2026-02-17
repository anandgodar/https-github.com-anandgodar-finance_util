
import React from 'react';
import Link from 'next/link';
import { ToolType } from '../types';

interface SidebarProps {
  activeTool: ToolType;
  setActiveTool: (tool: ToolType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTool, setActiveTool }) => {
  const mainTools = [
    { id: ToolType.DASHBOARD, label: 'Dashboard', icon: '📊', href: '/dashboard/' },
    { id: ToolType.NET_WORTH, label: 'Net Worth Center', icon: '💎', href: '/net-worth-command-center/' },
    { id: ToolType.EMERGENCY_FUND, label: 'Emergency Guard', icon: '🛡️', href: '/emergency-fund-guard/' },
    { id: ToolType.EXCEL_MODELER, label: 'Excel Power Modeler', icon: '📁', href: '/excel-power-modeler/' },
    { id: ToolType.OPTIONS_STRATEGY_VISUALIZER, label: 'Options Visualizer', icon: '📊', href: '/options-strategy-visualizer/' },
    { id: ToolType.EMI_CALC, label: 'Loan EMI Pro', icon: '💳', href: '/loan-emi-calculator/' },
    { id: ToolType.MORTGAGE_CALC, label: 'Mortgage Pro', icon: '🏡', href: '/mortgage-payment-calculator/' },
    { id: ToolType.FIRE_PLANNER, label: 'FIRE Planner', icon: '🔥', href: '/early-retirement-fire-planner/' },
    { id: ToolType.RETIREMENT_OPTIMIZER, label: 'Retirement Optimizer', icon: '🎯', href: '/retirement-account-optimizer/' },
    { id: ToolType.DRIP_CALCULATOR, label: 'DRIP Calculator', icon: '💹', href: '/dividend-reinvestment-calculator/' },
    { id: ToolType.CRYPTO_TAX_LOSS, label: 'Crypto Tax Loss', icon: '🧮', href: '/crypto-tax-loss-harvester/' },
    { id: ToolType.SALARY_CALC, label: 'Salary Estimator', icon: '💰', href: '/salary-tax-estimator/' },
    { id: ToolType.CHILD_TAX_CREDIT, label: 'Child Tax Credit', icon: '👨‍👩‍👧‍👦', href: '/child-tax-credit-calculator/' },
    { id: ToolType.QUARTERLY_TAX, label: 'Quarterly Tax', icon: '📅', href: '/quarterly-estimated-tax-calculator/' },
    { id: ToolType.ACA_SUBSIDY, label: 'ACA Health Subsidy', icon: '🏥', href: '/aca-health-insurance-subsidy-calculator/' },
    { id: ToolType.FREELANCE_PROFIT, label: 'Freelance Hub', icon: '💼', href: '/freelance-profit-hub/' },
    { id: ToolType.INVESTMENT_CALC, label: 'Wealth Projector', icon: '📈', href: '/wealth-investment-projector/' },
    { id: ToolType.LOAN_COMPARE, label: 'Loan Intel', icon: '⚖️', href: '/loan-comparison-tool/' },
  ];

  const dailyTools = [
    { id: ToolType.CURRENCY_CONV, label: 'Currency Intel', icon: '🌍', href: '/currency-exchange-intel/' },
    { id: ToolType.GST_CALC, label: 'GST Calculator', icon: '🧾', href: '/gst-tax-calculator/' },
    { id: ToolType.CREDIT_CARD_PAYOFF, label: 'Card Payoff', icon: '✂️', href: '/credit-card-debt-strategist/' },
  ];

  const insightTools = [
    { id: ToolType.MARKET_INSIGHTS, label: 'Market Pulse', icon: '🤖', href: '/market-intelligence-pulse/' },
    { id: ToolType.VALUATION_ACADEMY, label: 'Valuation Academy', icon: '🎓', href: '/valuation-academy/' },
    { id: ToolType.INVESTMENT_ACADEMY, label: 'Fund Academy', icon: '📚', href: '/investment-funds-academy/' },
    { id: ToolType.BLOG_INDEX, label: 'Blog', icon: '📝', href: '/blog/' },
    { id: ToolType.FAQ, label: 'Knowledge Base', icon: '❓', href: '/financial-knowledge-base/' },
  ];

  const handleClick = (e: React.MouseEvent, id: ToolType) => {
    e.preventDefault();
    setActiveTool(id);
  };

  return (
    <div className="w-72 bg-white border-r h-screen sticky top-0 hidden md:flex flex-col z-50">
      <div className="p-8 border-b">
        <Link
          href="/dashboard/"
          onClick={(e) => handleClick(e, ToolType.DASHBOARD)}
          className="text-2xl font-black text-slate-900 flex items-center gap-3 group"
        >
          <span className="p-2 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-100 group-hover:scale-110 transition-transform">📈</span>
          <span>Quant<span className="text-indigo-600">Curb</span></span>
        </Link>
      </div>

      <div className="flex-1 p-4 space-y-8 overflow-y-auto custom-scrollbar">
        <section>
          <h3 className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Core Utilities</h3>
          <nav className="space-y-1" aria-label="Core financial utilities">
            {mainTools.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleClick(e, item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                  activeTool === item.id
                    ? 'bg-indigo-600 text-white font-black shadow-xl shadow-indigo-100'
                    : 'text-slate-500 hover:bg-slate-50 font-semibold'
                }`}
              >
                <span className="text-xl" aria-hidden="true">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </Link>
            ))}
          </nav>
        </section>

        <section>
          <h3 className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Daily Logic</h3>
          <nav className="space-y-1" aria-label="Daily utility calculators">
            {dailyTools.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleClick(e, item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                  activeTool === item.id
                    ? 'bg-emerald-600 text-white font-black shadow-xl shadow-emerald-100'
                    : 'text-slate-500 hover:bg-slate-50 font-semibold'
                }`}
              >
                <span className="text-xl" aria-hidden="true">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </Link>
            ))}
          </nav>
        </section>

        <section>
          <h3 className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Intelligence</h3>
          <nav className="space-y-1" aria-label="Market intelligence and learning">
            {insightTools.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleClick(e, item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                  activeTool === item.id
                    ? 'bg-slate-900 text-white font-black'
                    : 'text-slate-500 hover:bg-slate-50 font-semibold'
                }`}
              >
                <span className="text-xl" aria-hidden="true">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </Link>
            ))}
          </nav>
        </section>
      </div>

      <div className="p-6 border-t space-y-4">
        <div className="bg-slate-50 p-4 rounded-2xl">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">NETWORK STATUS</p>
          <p className="text-[11px] font-bold text-slate-700 leading-tight">Live: QuantCurb Oracle v3.1</p>
        </div>
        <p className="text-[10px] text-slate-400 font-bold">&copy; 2025 QuantCurb Intelligence</p>
      </div>
    </div>
  );
};

export default Sidebar;

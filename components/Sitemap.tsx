
import React from 'react';
import { ToolType } from '../types';

interface SitemapProps {
  onSelectTool: (tool: ToolType) => void;
}

const Sitemap: React.FC<SitemapProps> = ({ onSelectTool }) => {
  const sections = [
    {
      title: "Debt & Home Finance",
      items: [
        { id: ToolType.EMI_CALC, label: "Loan EMI Calculator", desc: "Model repayments for car, personal, or business loans with interest saving logic." },
        { id: ToolType.MORTGAGE_CALC, label: "Mortgage Payment Pro", desc: "Calculate your total monthly PITI, including property tax, insurance, and PMI." },
        { id: ToolType.LOAN_COMPARE, label: "Loan Comparison Intel", desc: "Side-by-side analysis of different loan offers to find the lowest APR option." },
        { id: ToolType.CREDIT_CARD_PAYOFF, label: "Credit Card Strategist", desc: "Interactive debt payoff simulator using Avalanche and Snowball methods." },
      ]
    },
    {
      title: "Wealth & Retirement",
      items: [
        { id: ToolType.INVESTMENT_CALC, label: "Wealth Projector", desc: "Visualize long-term compound growth for SIPs and general index fund investing." },
        { id: ToolType.FIRE_PLANNER, label: "FIRE Freedom Logic", desc: "Plan your early retirement using the 4% safe withdrawal rule and crossover math." },
        { id: ToolType.SALARY_CALC, label: "Salary Tax Estimator", desc: "Precise after-tax income calculation across 50 states with 401k optimization." },
        { id: ToolType.FREELANCE_PROFIT, label: "Freelance Hub", desc: "Profitability analyzer for 1099 contractors including self-employment taxes." },
      ]
    },
    {
      title: "Utilities & Intelligence",
      items: [
        { id: ToolType.MARKET_INSIGHTS, label: "AI Market Pulse", desc: "Macro-economic analysis and app ecosystem reviews powered by Gemini AI." },
        { id: ToolType.CURRENCY_CONV, label: "Currency Exchange Intel", desc: "Global forex converter with AI market sentiment for travelers and investors." },
        { id: ToolType.GST_CALC, label: "GST & VAT Calculator", desc: "Professional tax tool for inclusive and exclusive invoicing calculations." },
        { id: ToolType.FAQ, label: "Financial Knowledge Base", desc: "Expert guidance on complex financial metrics and strategies." },
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-16 animate-in fade-in duration-700 pb-24">
      <header className="text-center">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Platform <span className="text-indigo-600">Sitemap</span></h1>
        <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
          Explore our complete ecosystem of high-fidelity financial intelligence tools.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-12">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-8">
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] pl-4 flex items-center gap-4">
               {section.title}
               <div className="flex-1 h-px bg-slate-100"></div>
            </h2>
            <div className="space-y-4">
              {section.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelectTool(item.id)}
                  className="w-full text-left p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-indigo-200 hover:shadow-2xl hover:-translate-y-2 transition-all group shadow-sm"
                >
                  <h3 className="text-lg font-black text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex items-center text-[9px] font-black text-indigo-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Launch Utility <span className="ml-2">→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 p-12 rounded-[4rem] text-center space-y-6 border border-slate-100">
         <h4 className="text-xl font-black text-slate-900 uppercase tracking-widest text-sm">Missing a tool?</h4>
         <p className="text-slate-500 font-medium max-w-xl mx-auto">
           QuantCurb is constantly evolving. Our AI research team adds new financial modeling utilities monthly based on global economic shifts.
         </p>
         <div className="flex justify-center gap-4 pt-4">
            <span className="px-4 py-2 bg-white rounded-xl text-[10px] font-black uppercase text-slate-400 shadow-sm">v3.1 Stable</span>
            <span className="px-4 py-2 bg-indigo-600 rounded-xl text-[10px] font-black uppercase text-white shadow-lg">Cloud Sync Active</span>
         </div>
      </div>
    </div>
  );
};

export default Sitemap;

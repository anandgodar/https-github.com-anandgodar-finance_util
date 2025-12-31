
import React from 'react';
import { ToolType } from '../types';

interface SitemapProps {
  onSelectTool: (tool: ToolType) => void;
}

const Sitemap: React.FC<SitemapProps> = ({ onSelectTool }) => {
  const sections = [
    {
      title: "Core Calculators",
      items: [
        { id: ToolType.EMI_CALC, label: "EMI Accelerator", desc: "Plan your loan repayments efficiently." },
        { id: ToolType.MORTGAGE_CALC, label: "Mortgage Pro", desc: "Advanced home buying analysis." },
        { id: ToolType.SALARY_CALC, label: "Salary Estimator", desc: "Net pay and tax credit calculator." },
      ]
    },
    {
      title: "Wealth Management",
      items: [
        { id: ToolType.INVESTMENT_CALC, label: "Wealth Projector", desc: "Long-term investment compounding." },
        { id: ToolType.LOAN_COMPARE, label: "Loan Intelligence", desc: "Refinance and comparison engine." },
        { id: ToolType.CURRENCY_CONV, label: "Currency Intel", desc: "Global exchange and forex logic." },
        { id: ToolType.LIVING_COST, label: "Living Cost Vitals", desc: "Budget health and wellness scoring." },
      ]
    },
    {
      title: "Resources & AI",
      items: [
        { id: ToolType.MARKET_INSIGHTS, label: "Market Pulse", desc: "AI-driven market sentiment analysis." },
        { id: ToolType.FAQ, label: "Financial FAQ", desc: "Expert answers to money questions." },
        { id: ToolType.PRIVACY, label: "Privacy Hub", desc: "Our commitment to your data." },
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700">
      <header className="text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Platform <span className="text-indigo-600">Sitemap</span></h1>
        <p className="text-slate-500 font-medium">A complete directory of FinVault's intelligence tools.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-6">
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] pl-4">{section.title}</h2>
            <div className="space-y-4">
              {section.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelectTool(item.id)}
                  className="w-full text-left p-6 bg-white rounded-3xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <h3 className="font-black text-slate-800 mb-1 group-hover:text-indigo-600">{item.label}</h3>
                  <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sitemap;

import React from 'react';
import { ToolType } from '../types';

interface FAQProps {
  onSelectTool?: (tool: ToolType) => void;
}

const FAQ: React.FC<FAQProps> = ({ onSelectTool }) => {
  const sections = [
    {
      title: "Mortgage & Home Equity",
      icon: "🏡",
      questions: [
        {
          q: "What is PITI and how does it calculate my total housing expense?",
          a: "PITI stands for Principal, Interest, Taxes, and Insurance. While a basic mortgage quote only covers P&I, lenders use the full PITI to determine your Debt-to-Income (DTI) ratio. Our Mortgage Pro tool models all four components plus PMI to ensure you stay within the 28% front-end ratio rule.",
          link: ToolType.MORTGAGE_CALC,
          linkText: "Launch Mortgage Pro"
        },
        {
          q: "Is it worth refinancing my home with current interest rates?",
          a: "Determining refinance viability requires a 'Break-Even Analysis'. You must compare the monthly interest savings against the upfront closing costs (typically 2-5% of loan value). If you plan to stay in the home longer than the break-even period, a refinance is mathematically logical.",
          link: ToolType.LOAN_COMPARE,
          linkText: "Run Refinance Audit"
        }
      ]
    },
    {
      title: "Loan & Debt Optimization",
      icon: "💳",
      questions: [
        {
          q: "How does an EMI Accelerator save money on long-term interest?",
          a: "By applying extra payments directly to the Principal Balance, you leverage the 'Reducing Balance' method. This reduces the base upon which next month's interest is calculated, exponentially shortening your loan term and saving thousands in total interest payouts.",
          link: ToolType.EMI_CALC,
          linkText: "Open EMI Accelerator"
        },
        {
          q: "Avalanche vs. Snowball: Which debt payoff strategy is better for my APR?",
          a: "The 'Debt Avalanche' targets the highest APR (interest rate) debt first, making it the most mathematically efficient method. The 'Debt Snowball' targets the smallest balances first for psychological wins. Our Strategist allows you to simulate both methods side-by-side.",
          link: ToolType.CREDIT_CARD_PAYOFF,
          linkText: "Compare Debt Strategies"
        }
      ]
    },
    {
      title: "Wealth & Retirement (FIRE)",
      icon: "📈",
      questions: [
        {
          q: "How do I calculate my 'Freedom Number' using the 4% Rule?",
          a: "The Financial Independence Retire Early (FIRE) movement uses a 25x expense rule. If your annual expenses are $60k, you need a $1.5M portfolio. Withdrawing 4% annually (adjusted for inflation) has a historically high probability of lasting 30+ years.",
          link: ToolType.FIRE_PLANNER,
          linkText: "Start FIRE Planning"
        },
        {
          q: "Does the Wealth Projector account for the 'Real Rate of Return'?",
          a: "Yes. When projecting wealth growth over 20-30 years, it is critical to use a real rate (Nominal Return minus Inflation). If the S&P 500 returns 10% and inflation is 3%, your 'real' wealth grows at 7%. This provides a future value in today's purchasing power.",
          link: ToolType.INVESTMENT_CALC,
          linkText: "Project Wealth Growth"
        }
      ]
    },
    {
      title: "Tax, Freelance & Salary",
      icon: "💰",
      questions: [
        {
          q: "Why is my 1099 Freelance 'Net' so much lower than my gross rate?",
          a: "Independent contractors are responsible for the full 15.3% Self-Employment (FICA) tax, plus federal and state income taxes. Additionally, you must fund your own health insurance and 401k. Our Freelance Hub calculates your 'Corporate Equivalent' to ensure your rates are profitable.",
          link: ToolType.FREELANCE_PROFIT,
          linkText: "Audit Freelance Profit"
        },
        {
          q: "How can I estimate my take-home pay after 401k and health deductions?",
          a: "Net pay is calculated after subtracting mandatory taxes and voluntary pre-tax deductions. Since 401k contributions lower your taxable gross, they often cost you less than the face value of the contribution. Our Estimator models this exact tax-shield effect.",
          link: ToolType.SALARY_CALC,
          linkText: "Estimate Net Pay"
        }
      ]
    },
    {
      title: "Daily Global Utilities",
      icon: "🌍",
      questions: [
        {
          q: "How does market sentiment affect global currency exchange rates?",
          a: "Forex rates aren't just math; they are driven by interest rate differentials and geopolitical stability. Our Currency Intel tool combines real-time rates with AI sentiment analysis to help you decide when to convert funds for travel or business.",
          link: ToolType.CURRENCY_CONV,
          linkText: "Launch Currency Intel"
        },
        {
          q: "What is the difference between GST Inclusive and Exclusive pricing?",
          a: "Exclusive pricing adds tax on top of the base cost, while Inclusive pricing hides the tax within the total amount. Professional invoicing requires accurate splitting of the base and tax components for compliance and audits.",
          link: ToolType.GST_CALC,
          linkText: "Use Tax Calculator"
        },
        {
          q: "Is my budget sustainable for my current city's cost of living?",
          a: "Spending efficiency is relative to location. A 'Good' budget follows the 50/30/20 rule (Needs/Wants/Savings), but high-cost cities often require adjusting these ratios. Our Vitals tool benchmarks your spending against regional averages.",
          link: ToolType.LIVING_COST,
          linkText: "Audit Budget Vitals"
        }
      ]
    },
    {
      title: "Intelligence & Market Trends",
      icon: "🤖",
      questions: [
        {
          q: "How does the AI Market Pulse categorize institutional vs retail apps?",
          a: "Financial ecosystems are split between 'Pro' stacks (Bloomberg, Refinitiv) and 'Retail' platforms (Robinhood, Wise). Professionals prioritize data depth and low latency, while retail users prioritize UI/UX. Our AI analyzes how these two worlds influence market volatility.",
          link: ToolType.MARKET_INSIGHTS,
          linkText: "View AI Market Pulse"
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-6 duration-700 pb-24">
      <header className="text-center space-y-4">
        <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Institutional SEO Hub</div>
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">Financial <span className="text-indigo-600">Knowledge Base</span></h1>
        <p className="text-slate-500 font-medium text-lg max-w-3xl mx-auto leading-relaxed">
          The mathematical frameworks, tax logic, and strategic insights powering every QuantCurb utility. Designed for transparency and institutional accuracy.
        </p>
      </header>

      {/* Category Quick Links */}
      <nav className="flex flex-wrap justify-center gap-3">
        {sections.map(s => (
          <button 
            key={s.title}
            onClick={() => {
              const el = document.getElementById(s.title);
              el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-6 py-2 bg-white border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm"
          >
            {s.icon} {s.title}
          </button>
        ))}
      </nav>

      <div className="space-y-24">
        {sections.map((section, idx) => (
          <section key={idx} id={section.title} className="scroll-mt-32 space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-indigo-100">{section.icon}</div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                {section.title}
              </h2>
              <div className="flex-1 h-px bg-slate-100"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {section.questions.map((faq, fIdx) => (
                <article key={fIdx} className="bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors leading-tight">
                      {faq.q}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-medium mb-8 text-base">
                      {faq.a}
                    </p>
                  </div>
                  {onSelectTool && (
                    <button 
                      onClick={() => onSelectTool(faq.link)}
                      className="inline-flex items-center gap-3 text-[10px] font-black text-white bg-slate-900 px-6 py-3.5 rounded-2xl hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 uppercase tracking-widest"
                    >
                      {faq.linkText} <span>→</span>
                    </button>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="bg-slate-900 p-12 md:p-20 rounded-[4.5rem] text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -mt-20 -mr-20"></div>
        <div className="text-8xl relative z-10 animate-bounce">🛡️</div>
        <div className="flex-1 space-y-6 relative z-10">
          <h4 className="text-3xl font-black tracking-tight">Mathematical Trust Standards</h4>
          <p className="text-slate-400 text-lg leading-relaxed font-medium">
            QuantCurb operates on high-precision arithmetic standards. Every tool includes a "Mathematical Foundation" section explaining the code-level logic. We utilize the <strong>Reducing Balance Amortization</strong> standard verified for banking accuracy.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            {["APR Logic", "PITI Audit", "DTI Verification", "SWR Matrix", "FICA Tax Triage"].map(tag => (
              <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest text-indigo-300">
                {tag}
              </span >
            ))}
          </div>
        </div>
        <div className="absolute -right-20 -bottom-20 text-[240px] font-black text-white/5 pointer-events-none select-none">AUDIT</div>
      </div>

      <section className="text-center pt-16 border-t border-slate-100">
         <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-8">Search Engine optimized Financial Taxonomy</p>
         <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Mortgage Interest Rates", "Loan Amortization", "FIRE Freedom Number", "Self-Employment Tax Hub",
              "Compound Interest Visualizer", "Debt Avalanche vs Snowball", "1099 Profit Audit", "PITI Calculator",
              "Refinance Break-even", "LTV Equity Ratio", "Safe Withdrawal Rate", "SIP Growth Projector"
            ].map(tag => (
              <span key={tag} className="px-5 py-2 bg-slate-100 text-slate-500 rounded-xl text-[10px] font-bold border border-slate-200/50">{tag}</span>
            ))}
         </div>
      </section>
    </div>
  );
};

export default FAQ;

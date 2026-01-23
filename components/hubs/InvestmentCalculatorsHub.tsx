import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface InvestmentCalculatorsHubProps {
  onNavigate?: (tool: ToolType) => void;
}

const InvestmentCalculatorsHub: React.FC<InvestmentCalculatorsHubProps> = ({ onNavigate }) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Investment Calculators Hub - Free Investment Tools 2025",
      "description": "Complete collection of free investment calculators for 2025. Calculate compound interest, SIP investing, dividend reinvestment, and wealth projection. All tools are free and include detailed guides.",
      "url": "https://quantcurb.com/investment-calculators",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 3,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Investment Calculator 2025",
            "url": "https://quantcurb.com/wealth-investment-projector"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Dividend Reinvestment Calculator",
            "url": "https://quantcurb.com/dividend-reinvestment-calculator"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "FIRE Planner",
            "url": "https://quantcurb.com/early-retirement-fire-planner"
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'investment-calculators-hub-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('investment-calculators-hub-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const investmentCalculators = [
    {
      id: ToolType.INVESTMENT_CALC,
      title: 'Investment Calculator 2025',
      description: 'Calculate investment growth with compound interest. Includes SIP investing, dividend reinvestment (DRIP), and goal-based investing.',
      icon: '📈',
      keywords: ['Compound interest', 'SIP', 'Wealth projection', 'Goal-based']
    },
    {
      id: ToolType.DRIP_CALCULATOR,
      title: 'Dividend Reinvestment Calculator',
      description: 'Model dividend reinvestment compounding vs cash payouts. Visualize the DRIP snowball effect and projected passive income.',
      icon: '💹',
      keywords: ['DRIP', 'Dividend yield', 'Passive income', 'Compounding']
    },
    {
      id: ToolType.FIRE_PLANNER,
      title: 'FIRE Planner',
      description: 'Calculate your early retirement number using the 4% rule. Includes Lean FIRE, Fat FIRE, Coast FIRE, and Barista FIRE.',
      icon: '🔥',
      keywords: ['FIRE', 'Early retirement', '4% rule', 'Financial independence']
    }
  ];

  const investmentBlogPosts = [
    {
      id: ToolType.BLOG_INVESTMENT_GUIDE,
      title: 'Complete Guide to Investment Calculator 2025',
      description: 'Master investment calculations with SIP investing, compound interest, inflation-adjusted returns, and wealth growth strategies.'
    },
    {
      id: ToolType.BLOG_FIRE_GUIDE,
      title: 'FIRE Calculator Guide 2025',
      description: 'Complete guide to FIRE, the 4% rule, Lean FIRE vs Fat FIRE, and early retirement strategies.'
    },
    {
      id: ToolType.BLOG_DEBT_OR_INVEST,
      title: 'Should I Pay Off Debt or Invest? 2025',
      description: 'Decide whether to pay off debt or invest your money. Learn the debt vs investment math and strategies.'
    }
  ];

  return (
    <article className="max-w-7xl mx-auto space-y-16 pb-24">
      <header className="space-y-4">
        <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em]">Investment Tools Hub</p>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Free Investment Calculators <span className="text-indigo-600">2025</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-medium">
          Complete collection of free investment calculators for 2025. Calculate compound interest, SIP investing, dividend reinvestment, and wealth projection. All tools are free, accurate, and include comprehensive guides.
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mb-8">Investment Calculators</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investmentCalculators.map((calc) => (
            <button
              key={calc.id}
              onClick={() => onNavigate?.(calc.id)}
              className="text-left bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="text-4xl mb-4">{calc.icon}</div>
              <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {calc.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {calc.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {calc.keywords.map((keyword, idx) => (
                  <span key={idx} className="text-[8px] font-black text-slate-400 bg-slate-50 px-2 py-1 rounded-lg uppercase tracking-tighter">
                    {keyword}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-indigo-600 font-bold text-sm flex items-center gap-2">
                Use Calculator <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mb-8">Investment Guides & Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {investmentBlogPosts.map((post) => (
            <button
              key={post.id}
              onClick={() => onNavigate?.(post.id)}
              className="text-left bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-200 hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-slate-900 mb-2">{post.title}</h3>
              <p className="text-sm text-slate-600">{post.description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 rounded-3xl p-12 border border-slate-200">
        <h2 className="text-2xl font-black text-slate-900 mb-6">About Our Investment Calculators</h2>
        <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
          <p>
            QuantCurb provides free, accurate investment calculators for 2025. Our investment tools help you project wealth growth, understand compound interest, plan SIP investments, and calculate your path to financial independence.
          </p>
          <p>
            All calculators use institutional-grade compound interest formulas and support various investment strategies including SIP (Systematic Investment Plans), dividend reinvestment (DRIP), and goal-based investing.
          </p>
          <p>
            <strong>Key Features:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Compound interest calculations with monthly contributions</li>
            <li>SIP (Systematic Investment Plan) modeling</li>
            <li>Dividend reinvestment (DRIP) calculations</li>
            <li>Goal-based investing (target amount by date)</li>
            <li>Inflation-adjusted projections</li>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default InvestmentCalculatorsHub;

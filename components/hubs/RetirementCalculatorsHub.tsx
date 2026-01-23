import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface RetirementCalculatorsHubProps {
  onNavigate?: (tool: ToolType) => void;
}

const RetirementCalculatorsHub: React.FC<RetirementCalculatorsHubProps> = ({ onNavigate }) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Retirement Calculators Hub - Free Retirement Planning Tools 2025",
      "description": "Complete collection of free retirement calculators for 2025. Compare 401(k) vs IRA vs Roth, calculate retirement readiness, FIRE number, and optimize your retirement savings. All tools are free and include detailed guides.",
      "url": "https://quantcurb.com/retirement-calculators",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 4,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Retirement Account Optimizer 2025",
            "url": "https://quantcurb.com/retirement-account-optimizer"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "FIRE Calculator 2025",
            "url": "https://quantcurb.com/early-retirement-fire-planner"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Investment Calculator 2025",
            "url": "https://quantcurb.com/wealth-investment-projector"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Dividend Reinvestment Calculator",
            "url": "https://quantcurb.com/dividend-reinvestment-calculator"
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'retirement-calculators-hub-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('retirement-calculators-hub-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const retirementCalculators = [
    {
      id: ToolType.RETIREMENT_OPTIMIZER,
      title: 'Retirement Account Optimizer 2025',
      description: 'Compare 401(k), Traditional IRA, and Roth IRA strategies. Calculate retirement readiness score, RMD estimates, and maximize employer match.',
      icon: '🎯',
      keywords: ['401k', 'IRA', 'Roth', 'Retirement readiness']
    },
    {
      id: ToolType.FIRE_PLANNER,
      title: 'FIRE Calculator 2025',
      description: 'Calculate your early retirement number using the 4% rule. Includes Lean FIRE, Fat FIRE, Coast FIRE, and Barista FIRE.',
      icon: '🔥',
      keywords: ['FIRE', 'Early retirement', '4% rule', 'Financial independence']
    },
    {
      id: ToolType.INVESTMENT_CALC,
      title: 'Investment Calculator 2025',
      description: 'Project investment growth with compound interest. Includes SIP investing, dividend reinvestment, and goal-based investing.',
      icon: '📈',
      keywords: ['Compound interest', 'SIP', 'Investment growth', 'Wealth projection']
    },
    {
      id: ToolType.DRIP_CALCULATOR,
      title: 'Dividend Reinvestment Calculator',
      description: 'Model dividend reinvestment compounding vs cash payouts. Visualize the DRIP snowball effect and projected passive income.',
      icon: '💹',
      keywords: ['DRIP', 'Dividend yield', 'Passive income', 'Compounding']
    }
  ];

  const retirementBlogPosts = [
    {
      id: ToolType.BLOG_BEST_RETIREMENT,
      title: 'Best Retirement Calculator 2025',
      description: 'Compare top retirement calculators and find the perfect tool for your retirement planning needs.'
    },
    {
      id: ToolType.BLOG_ROTH_TRADITIONAL,
      title: 'Roth IRA vs Traditional IRA 2025',
      description: 'Complete comparison of Roth vs Traditional IRA including contribution limits, tax benefits, and withdrawal rules.'
    },
    {
      id: ToolType.BLOG_401K_VS_IRA,
      title: '401(k) vs IRA 2025 Comparison',
      description: 'Understand the differences between 401(k) and IRA accounts, contribution limits, and which is better for you.'
    },
    {
      id: ToolType.BLOG_FIRE_GUIDE,
      title: 'FIRE Calculator Guide 2025',
      description: 'Complete guide to FIRE, the 4% rule, Lean FIRE vs Fat FIRE, and early retirement strategies.'
    }
  ];

  return (
    <article className="max-w-7xl mx-auto space-y-16 pb-24">
      <header className="space-y-4">
        <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em]">Retirement Tools Hub</p>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Free Retirement Calculators <span className="text-indigo-600">2025</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-medium">
          Complete collection of free retirement calculators for 2025. Compare 401(k) vs IRA vs Roth, calculate retirement readiness, FIRE number, and optimize your retirement savings. All tools are free, accurate, and include comprehensive guides.
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mb-8">Retirement Calculators</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {retirementCalculators.map((calc) => (
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
        <h2 className="text-3xl font-black text-slate-900 mb-8">Retirement Guides & Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {retirementBlogPosts.map((post) => (
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
        <h2 className="text-2xl font-black text-slate-900 mb-6">About Our Retirement Calculators</h2>
        <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
          <p>
            QuantCurb provides free, accurate retirement calculators for 2025. Our retirement tools help you plan for traditional retirement, early retirement (FIRE), and optimize your retirement account contributions.
          </p>
          <p>
            All calculators use the latest 2025 contribution limits, tax brackets, and retirement planning strategies. Whether you're comparing 401(k) vs IRA, calculating your FIRE number, or projecting investment growth, our tools provide instant, accurate results.
          </p>
          <p>
            <strong>Key Features:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>2025 contribution limits updated (401k: $23,500, IRA: $7,000)</li>
            <li>Retirement readiness scoring</li>
            <li>RMD (Required Minimum Distribution) calculations</li>
            <li>Social Security estimates</li>
            <li>FIRE planning with multiple strategies</li>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default RetirementCalculatorsHub;

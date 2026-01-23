import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface MortgageCalculatorsHubProps {
  onNavigate?: (tool: ToolType) => void;
}

const MortgageCalculatorsHub: React.FC<MortgageCalculatorsHubProps> = ({ onNavigate }) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Mortgage Calculators Hub - Free Mortgage Tools 2025",
      "description": "Complete collection of free mortgage calculators for 2025. Calculate PITI payments, PMI, property taxes, loan comparisons, and affordability. All tools are free and include detailed guides.",
      "url": "https://quantcurb.com/mortgage-calculators",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 3,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Mortgage Calculator 2025",
            "url": "https://quantcurb.com/mortgage-payment-calculator"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Loan Comparison Tool",
            "url": "https://quantcurb.com/loan-comparison-tool"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "EMI Calculator 2025",
            "url": "https://quantcurb.com/loan-emi-calculator"
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'mortgage-calculators-hub-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('mortgage-calculators-hub-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const mortgageCalculators = [
    {
      id: ToolType.MORTGAGE_CALC,
      title: 'Mortgage Calculator 2025',
      description: 'Calculate PITI payments with PMI, property taxes, HOA fees, and all 50 US states. See when PMI drops and plan your home purchase.',
      icon: '🏡',
      keywords: ['PITI', 'PMI', 'Property tax', 'All 50 states']
    },
    {
      id: ToolType.LOAN_COMPARE,
      title: 'Loan Comparison Tool',
      description: 'Compare multiple mortgage offers side-by-side. Calculate refinancing ROI, break-even periods, and total interest savings.',
      icon: '⚖️',
      keywords: ['Refinance', 'Loan comparison', 'Break-even', 'APR']
    },
    {
      id: ToolType.EMI_CALC,
      title: 'EMI Calculator 2025',
      description: 'Calculate loan EMI with reducing balance method. Model principal prepayments and see interest savings.',
      icon: '💳',
      keywords: ['EMI', 'Loan repayment', 'Prepayment', 'Interest savings']
    }
  ];

  const mortgageBlogPosts = [
    {
      id: ToolType.BLOG_MORTGAGE_GUIDE,
      title: 'Complete Guide to Mortgage Calculator 2025',
      description: 'Master mortgage calculations with PITI, PMI, property tax rates by state, and home buying strategies.'
    },
    {
      id: ToolType.BLOG_HOW_MUCH_HOUSE,
      title: 'How Much House Can I Afford? 2025',
      description: 'Calculate how much house you can afford using the 28/36 rule, debt-to-income ratios, and down payment requirements.'
    },
    {
      id: ToolType.BLOG_BEST_MORTGAGE,
      title: 'Best Mortgage Calculator 2025',
      description: 'Compare top mortgage calculators including QuantCurb, Bankrate, Zillow, and find the perfect tool.'
    }
  ];

  return (
    <article className="max-w-7xl mx-auto space-y-16 pb-24">
      <header className="space-y-4">
        <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em]">Mortgage Tools Hub</p>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Free Mortgage Calculators <span className="text-indigo-600">2025</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-medium">
          Complete collection of free mortgage calculators for 2025. Calculate PITI payments, PMI, property taxes, loan comparisons, and affordability. All tools are free, accurate, and include comprehensive guides.
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mb-8">Mortgage Calculators</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mortgageCalculators.map((calc) => (
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
        <h2 className="text-3xl font-black text-slate-900 mb-8">Mortgage Guides & Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {mortgageBlogPosts.map((post) => (
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
        <h2 className="text-2xl font-black text-slate-900 mb-6">About Our Mortgage Calculators</h2>
        <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
          <p>
            QuantCurb provides free, accurate mortgage calculators for 2025. Our mortgage tools help you calculate PITI payments, understand PMI, compare loan offers, and plan your home purchase.
          </p>
          <p>
            All calculators include property tax rates for all 50 US states, PMI calculations, HOA fees, and comprehensive amortization schedules. Whether you're a first-time homebuyer or refinancing, our tools provide instant, accurate results.
          </p>
          <p>
            <strong>Key Features:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>PITI breakdown (Principal, Interest, Taxes, Insurance)</li>
            <li>PMI calculations with automatic drop at 78% LTV</li>
            <li>Property tax rates for all 50 US states</li>
            <li>Loan comparison and refinancing analysis</li>
            <li>Amortization schedules and break-even analysis</li>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default MortgageCalculatorsHub;

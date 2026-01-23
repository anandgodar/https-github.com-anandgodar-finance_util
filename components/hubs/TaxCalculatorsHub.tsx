import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface TaxCalculatorsHubProps {
  onNavigate?: (tool: ToolType) => void;
}

const TaxCalculatorsHub: React.FC<TaxCalculatorsHubProps> = ({ onNavigate }) => {
  useEffect(() => {
    // Add CollectionPage schema for SEO
    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Tax Calculators Hub - Free Tax Tools 2025",
      "description": "Complete collection of free tax calculators for 2025. Calculate child tax credit, quarterly taxes, ACA subsidies, self-employment taxes, and more. All tools are free and include detailed guides.",
      "url": "https://quantcurb.com/tax-calculators",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 5,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Child Tax Credit Calculator 2025",
            "url": "https://quantcurb.com/child-tax-credit-calculator"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Quarterly Estimated Tax Calculator 2025",
            "url": "https://quantcurb.com/quarterly-estimated-tax-calculator"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "ACA Health Insurance Subsidy Calculator 2025",
            "url": "https://quantcurb.com/aca-health-insurance-subsidy-calculator"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Salary Tax Calculator 2025",
            "url": "https://quantcurb.com/salary-tax-estimator"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Freelance Tax Hub",
            "url": "https://quantcurb.com/freelance-profit-hub"
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'tax-calculators-hub-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('tax-calculators-hub-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const taxCalculators = [
    {
      id: ToolType.CHILD_TAX_CREDIT,
      title: 'Child Tax Credit Calculator 2025',
      description: 'Calculate your 2025 Child Tax Credit (CTC) and Additional Child Tax Credit (ACTC). Estimate up to $2,000 per child with phase-out analysis.',
      icon: '👶',
      keywords: ['CTC', 'ACTC', '$2,000 per child', 'Tax credit']
    },
    {
      id: ToolType.QUARTERLY_TAX,
      title: 'Quarterly Estimated Tax Calculator 2025',
      description: 'Calculate quarterly estimated tax payments for freelancers and self-employed. Avoid IRS penalties with safe harbor rules.',
      icon: '📅',
      keywords: ['1040-ES', 'Quarterly taxes', 'Freelance taxes', 'Self-employment']
    },
    {
      id: ToolType.ACA_SUBSIDY,
      title: 'ACA Health Insurance Subsidy Calculator 2025',
      description: 'Calculate ACA marketplace subsidies and Premium Tax Credits. Determine Medicaid eligibility and healthcare costs.',
      icon: '🏥',
      keywords: ['ACA', 'Obamacare', 'Health insurance', 'Premium tax credit']
    },
    {
      id: ToolType.SALARY_CALC,
      title: 'Take Home Pay Calculator 2025',
      description: 'Calculate your take-home pay after federal tax, state tax, FICA, and 401(k) deductions. All 50 states supported.',
      icon: '💰',
      keywords: ['Take home pay', 'Net pay', 'Salary after taxes', 'Paycheck calculator']
    },
    {
      id: ToolType.FREELANCE_PROFIT,
      title: 'Freelance Tax Hub',
      description: 'Calculate your true hourly rate as a contractor. Factor in self-employment taxes, health insurance, and expenses.',
      icon: '💼',
      keywords: ['1099 taxes', 'Self-employment tax', 'Freelance calculator', 'Contractor rate']
    }
  ];

  const taxBlogPosts = [
    {
      id: ToolType.BLOG_CTC_2025,
      title: 'Child Tax Credit 2025: Complete Guide',
      description: 'Comprehensive guide to CTC, ACTC, eligibility, and tax savings strategies.'
    },
    {
      id: ToolType.BLOG_QUARTERLY_TAX,
      title: 'Quarterly Estimated Taxes 2025 Guide',
      description: 'Master quarterly tax payments, safe harbor rules, and penalty avoidance.'
    },
    {
      id: ToolType.BLOG_ACA_FREELANCERS,
      title: 'ACA Health Insurance for Freelancers 2025',
      description: 'Complete guide to ACA subsidies, Premium Tax Credits, and marketplace enrollment.'
    },
    {
      id: ToolType.BLOG_SE_TAX,
      title: 'Self-Employment Tax Guide 2025',
      description: 'Understand the 15.3% SE tax rate, Schedule SE, and deduction strategies.'
    },
    {
      id: ToolType.BLOG_TAX_DEDUCTIONS,
      title: 'Tax Deductions for Freelancers 2025',
      description: 'Maximize your freelance tax deductions including home office, mileage, and more.'
    },
    {
      id: ToolType.BLOG_TAX_BRACKETS,
      title: 'Tax Brackets Explained 2025',
      description: 'Complete guide to federal income tax brackets and progressive taxation.'
    }
  ];

  return (
    <article className="max-w-7xl mx-auto space-y-16 pb-24">
      <header className="space-y-4">
        <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em]">Tax Tools Hub</p>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Free Tax Calculators <span className="text-indigo-600">2025</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-medium">
          Complete collection of free tax calculators for 2025. Calculate child tax credits, quarterly taxes, ACA subsidies, take-home pay, and self-employment taxes. All tools are free, accurate, and include comprehensive guides.
        </p>
      </header>

      {/* Tax Calculators Grid */}
      <section>
        <h2 className="text-3xl font-black text-slate-900 mb-8">Tax Calculators</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {taxCalculators.map((calc) => (
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

      {/* Tax Guides Section */}
      <section>
        <h2 className="text-3xl font-black text-slate-900 mb-8">Tax Guides & Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {taxBlogPosts.map((post) => (
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

      {/* SEO Content Section */}
      <section className="bg-slate-50 rounded-3xl p-12 border border-slate-200">
        <h2 className="text-2xl font-black text-slate-900 mb-6">About Our Tax Calculators</h2>
        <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
          <p>
            QuantCurb provides free, accurate tax calculators for 2025. Our tax tools are designed for individuals, families, freelancers, and self-employed professionals who need to understand their tax obligations and maximize their tax savings.
          </p>
          <p>
            All calculators use the latest 2025 tax brackets, rates, and regulations from the IRS. Whether you're calculating your child tax credit, planning quarterly tax payments, or estimating your take-home pay, our tools provide instant, accurate results.
          </p>
          <p>
            <strong>Key Features:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>All 50 US states supported for state tax calculations</li>
            <li>2025 tax brackets and rates updated</li>
            <li>Free to use - no registration required</li>
            <li>Comprehensive guides and FAQs included</li>
            <li>Mobile-friendly and accessible</li>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default TaxCalculatorsHub;

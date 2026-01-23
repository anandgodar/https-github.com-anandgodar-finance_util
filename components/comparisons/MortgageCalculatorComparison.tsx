import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface MortgageCalculatorComparisonProps {
  onNavigate?: (tool: ToolType) => void;
}

const MortgageCalculatorComparison: React.FC<MortgageCalculatorComparisonProps> = ({ onNavigate }) => {
  useEffect(() => {
    // Add Article schema for comparison page
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Best Mortgage Calculator 2025: Complete Comparison Guide",
      "description": "Compare the best mortgage calculators in 2025. Review QuantCurb, Bankrate, Zillow, and other top tools with PITI, PMI, and property tax calculations.",
      "author": {
        "@type": "Organization",
        "name": "QuantCurb"
      },
      "publisher": {
        "@type": "Organization",
        "name": "QuantCurb",
        "logo": {
          "@type": "ImageObject",
          "url": "https://quantcurb.com/logo.png"
        }
      },
      "datePublished": "2025-01-15",
      "dateModified": "2025-01-15"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'mortgage-comparison-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('mortgage-comparison-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const calculators = [
    {
      name: 'QuantCurb',
      rating: 5,
      features: [
        'PITI breakdown (Principal, Interest, Taxes, Insurance)',
        'PMI calculations with automatic drop at 78% LTV',
        'Property tax rates for all 50 US states',
        'HOA fees included',
        'Amortization schedule',
        'Break-even analysis',
        'Free, no sign-up required',
        'Mobile-friendly'
      ],
      pros: ['Most comprehensive', 'All 50 states', 'No registration', 'Institutional-grade accuracy'],
      cons: ['Newer platform'],
      bestFor: 'First-time homebuyers, refinancers, all 50 states'
    },
    {
      name: 'Bankrate',
      rating: 4.5,
      features: [
        'PITI calculations',
        'PMI included',
        'Property tax estimates',
        'Refinance calculator',
        'Affordability calculator'
      ],
      pros: ['Well-established', 'Trusted brand', 'Additional tools'],
      cons: ['Limited state-specific data', 'Requires email for some features'],
      bestFor: 'General mortgage calculations'
    },
    {
      name: 'Zillow',
      rating: 4,
      features: [
        'Mortgage calculator',
        'Home value estimates',
        'Property listings integration',
        'PMI calculations'
      ],
      pros: ['Integrated with listings', 'Home value data'],
      cons: ['Less detailed PITI breakdown', 'Limited state tax data'],
      bestFor: 'Home shopping with listings'
    },
    {
      name: 'NerdWallet',
      rating: 4.5,
      features: [
        'Mortgage calculator',
        'Refinance calculator',
        'PMI calculations',
        'Educational content'
      ],
      pros: ['Educational resources', 'User-friendly'],
      cons: ['Basic property tax handling', 'Limited state-specific features'],
      bestFor: 'Learning and basic calculations'
    }
  ];

  return (
    <article className="max-w-7xl mx-auto space-y-16 pb-24">
      <header className="space-y-4">
        <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em]">Calculator Comparison</p>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Best Mortgage Calculator <span className="text-indigo-600">2025</span>: Complete Comparison
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-medium">
          Compare the best mortgage calculators in 2025. We've tested QuantCurb, Bankrate, Zillow, NerdWallet, and other top tools to help you find the perfect mortgage calculator for your needs.
        </p>
      </header>

      {/* Comparison Table */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 overflow-x-auto">
        <h2 className="text-3xl font-black text-slate-900 mb-8">Feature Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left p-4 font-black text-slate-900">Feature</th>
                {calculators.map((calc) => (
                  <th key={calc.name} className="text-center p-4 font-black text-slate-900">
                    {calc.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="p-4 font-bold text-slate-700">PITI Breakdown</td>
                {calculators.map((calc) => (
                  <td key={calc.name} className="text-center p-4">
                    {calc.features.some(f => f.toLowerCase().includes('piti')) ? '✅' : '❌'}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 font-bold text-slate-700">PMI Calculations</td>
                {calculators.map((calc) => (
                  <td key={calc.name} className="text-center p-4">
                    {calc.features.some(f => f.toLowerCase().includes('pmi')) ? '✅' : '❌'}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 font-bold text-slate-700">All 50 States Property Tax</td>
                {calculators.map((calc) => (
                  <td key={calc.name} className="text-center p-4">
                    {calc.name === 'QuantCurb' ? '✅' : '⚠️'}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 font-bold text-slate-700">HOA Fees</td>
                {calculators.map((calc) => (
                  <td key={calc.name} className="text-center p-4">
                    {calc.features.some(f => f.toLowerCase().includes('hoa')) ? '✅' : '❌'}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 font-bold text-slate-700">Amortization Schedule</td>
                {calculators.map((calc) => (
                  <td key={calc.name} className="text-center p-4">
                    {calc.features.some(f => f.toLowerCase().includes('amortization')) ? '✅' : '⚠️'}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 font-bold text-slate-700">Free (No Sign-up)</td>
                {calculators.map((calc) => (
                  <td key={calc.name} className="text-center p-4">
                    {calc.name === 'QuantCurb' ? '✅' : '⚠️'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-700">Mobile-Friendly</td>
                {calculators.map((calc) => (
                  <td key={calc.name} className="text-center p-4">✅</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black text-slate-900">Detailed Calculator Reviews</h2>
        {calculators.map((calc, index) => (
          <div key={calc.name} className="bg-white rounded-3xl border border-slate-200 p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{calc.name}</h3>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">
                      {i < calc.rating ? '⭐' : '☆'}
                    </span>
                  ))}
                  <span className="text-slate-500 font-bold ml-2">{calc.rating}/5</span>
                </div>
              </div>
              {calc.name === 'QuantCurb' && (
                <button
                  onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-colors"
                >
                  Try QuantCurb Calculator →
                </button>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="font-black text-slate-900 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {calc.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-black text-slate-900 mb-3">Best For</h4>
                <p className="text-slate-600 mb-4">{calc.bestFor}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-emerald-600 mb-2">Pros</h5>
                    <ul className="space-y-1">
                      {calc.pros.map((pro, idx) => (
                        <li key={idx} className="text-sm text-slate-600">✓ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-rose-600 mb-2">Cons</h5>
                    <ul className="space-y-1">
                      {calc.cons.map((con, idx) => (
                        <li key={idx} className="text-sm text-slate-600">✗ {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Winner Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
        <h2 className="text-3xl font-black mb-4">🏆 Our Top Pick: QuantCurb</h2>
        <p className="text-lg text-indigo-100 mb-6 leading-relaxed">
          QuantCurb stands out as the best mortgage calculator for 2025 because it offers the most comprehensive features: 
          complete PITI breakdown, PMI calculations with automatic drop detection, property tax rates for all 50 US states, 
          HOA fees, detailed amortization schedules, and it's completely free with no sign-up required.
        </p>
        <button
          onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
          className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-black hover:bg-indigo-50 transition-colors"
        >
          Try QuantCurb Mortgage Calculator Now →
        </button>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
        <h2 className="text-2xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">What is the best free mortgage calculator?</h3>
            <p className="text-slate-600">
              QuantCurb offers the best free mortgage calculator with comprehensive PITI breakdown, all 50 states property tax rates, 
              PMI calculations, and no sign-up required. Bankrate and Zillow also offer good free calculators but with fewer features.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">What features should I look for in a mortgage calculator?</h3>
            <p className="text-slate-600">
              Look for: PITI breakdown (Principal, Interest, Taxes, Insurance), PMI calculations, state-specific property tax rates, 
              HOA fees, amortization schedules, and break-even analysis. The best calculators include all of these features.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Do I need to sign up to use a mortgage calculator?</h3>
            <p className="text-slate-600">
              No, you don't need to sign up. QuantCurb's mortgage calculator is completely free with no registration required. 
              Some other calculators may require email sign-up for advanced features, but basic calculations are usually free.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default MortgageCalculatorComparison;

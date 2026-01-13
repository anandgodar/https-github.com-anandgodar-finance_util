import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const HouseCostRateSensitivity2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "What Does a $500,000 House Actually Cost per Month? (At 6%, 7%, and 8% Rates)",
      "description": "See how interest rate changes affect the monthly cost of a $500,000 home and why rate sensitivity matters for buyers in 2026.",
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
      "datePublished": "2026-02-11",
      "dateModified": "2026-02-11",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/500k-house-monthly-cost-rate-sensitivity"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-house-rate';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-house-rate');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <header className="space-y-6">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span>📅 Updated February 2026</span>
          <span>•</span>
          <span>⏱️ 9 min read</span>
          <span>•</span>
          <span>📊 Mortgages</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          What Does a $500,000 House Actually Cost per Month? (At 6%, 7%, and 8% Rates)
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Rate changes are brutal. A single point can add hundreds per month. Here&apos;s what a $500k home costs at 6%, 7%,
          and 8% rates, and why the rate slider matters more than most buyers expect.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Adjust the interest rate slider</h3>
              <p className="text-sm text-slate-600">
                See what you can afford by changing rates, taxes, and insurance in real time.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Mortgage Pro →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('numbers')} className="text-indigo-600 hover:underline">1. Monthly cost comparison</button></li>
          <li><button onClick={() => scrollToSection('piti')} className="text-indigo-600 hover:underline">2. Why PITI still matters</button></li>
          <li><button onClick={() => scrollToSection('buying-power')} className="text-indigo-600 hover:underline">3. Rate impact on buying power</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="numbers" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Monthly cost at 6%, 7%, and 8%</h2>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Rate</th>
                  <th className="text-left p-4 font-black text-slate-900">Principal + interest</th>
                  <th className="text-left p-4 font-black text-slate-900">Estimated PITI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">6%</td>
                  <td className="p-4 text-slate-700">~$2,997</td>
                  <td className="p-4 font-bold text-slate-900">~$3,600</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">7%</td>
                  <td className="p-4 text-slate-700">~$3,327</td>
                  <td className="p-4 font-bold text-slate-900">~$3,950</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">8%</td>
                  <td className="p-4 text-slate-700">~$3,669</td>
                  <td className="p-4 font-bold text-slate-900">~$4,320</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="piti" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">PITI is still the full story</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Even if rates drop, property taxes and insurance remain. Always compare total PITI, not just principal and
            interest.
          </p>
        </section>

        <section id="buying-power" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Rate changes shrink buying power fast</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If rates rise, the same monthly budget buys less house. That&apos;s why rate sensitivity is the fastest way to
            evaluate affordability.
          </p>
        </section>
      </article>
    </div>
  );
};

export default HouseCostRateSensitivity2026;

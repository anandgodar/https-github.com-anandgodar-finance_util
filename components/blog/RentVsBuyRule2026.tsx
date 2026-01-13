'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const RentVsBuyRule2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Rent vs. Buy in 2026: The 5% Rule Explained",
      "description": "Learn the 5% rule for rent vs buy decisions, and when homeownership makes sense in 2026.",
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
        "@id": "https://quantcurb.com/blog/rent-vs-buy-5-percent-rule-2026"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-rent-buy';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-rent-buy');
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
          <span>⏱️ 11 min read</span>
          <span>•</span>
          <span>🏠 Housing</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Rent vs. Buy in 2026: The 5% Rule Explained
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          The 5% rule is a fast way to compare renting vs buying. It blends property taxes, maintenance, and the
          opportunity cost of your down payment into a single number so you can decide if buying makes sense.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Compare rent vs equity building</h3>
              <p className="text-sm text-slate-600">
                See the rent-vs-buy math with your home price, rates, and rent inputs.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Mortgage Simulator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('rule')} className="text-indigo-600 hover:underline">1. The 5% rule</button></li>
          <li><button onClick={() => scrollToSection('math')} className="text-indigo-600 hover:underline">2. How the math works</button></li>
          <li><button onClick={() => scrollToSection('when-rent')} className="text-indigo-600 hover:underline">3. When renting wins</button></li>
          <li><button onClick={() => scrollToSection('when-buy')} className="text-indigo-600 hover:underline">4. When buying wins</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="rule" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The 5% rule in one sentence</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Multiply the home price by 5%, divide by 12, and compare it to your monthly rent. If rent is lower, renting
            can be cheaper; if rent is higher, buying may be competitive.
          </p>
        </section>

        <section id="math" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What that 5% actually includes</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Property taxes (about 1% annually)</li>
            <li>• Maintenance and repairs (about 1% annually)</li>
            <li>• Opportunity cost of your down payment (about 3%)</li>
          </ul>
        </section>

        <section id="when-rent" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When renting usually wins</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Renting often wins if you plan to move within 3-5 years, live in a high-price market, or need flexibility.
          </p>
        </section>

        <section id="when-buy" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When buying usually wins</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Buying tends to win if you plan to stay long-term and can afford the full PITI payment without stretching.
          </p>
        </section>
      </article>
    </div>
  );
};

export default RentVsBuyRule2026;

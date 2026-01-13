'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const MortgagePointsBreakEven2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Should You Pay Points on Your Mortgage in 2026? A Break-Even Analysis",
      "description": "Learn when mortgage points make sense, how to calculate break-even, and when to skip buying down the rate in 2026.",
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
        "@id": "https://quantcurb.com/blog/mortgage-points-break-even-2026"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-mortgage-points';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-mortgage-points');
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
          <span>🧮 Mortgages</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Should You Pay Points on Your Mortgage in 2026? A Break-Even Analysis
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Mortgage points lower your interest rate but cost cash up front. The key question is how long you&apos;ll stay in
          the home — the <strong>break-even timeline</strong> decides if points are worth it.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Run the break-even math</h3>
              <p className="text-sm text-slate-600">
                Compare rates, points, and total interest to see the real payoff timeline.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.LOAN_COMPARE)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Mortgage Intel →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('points')} className="text-indigo-600 hover:underline">1. What mortgage points are</button></li>
          <li><button onClick={() => scrollToSection('break-even')} className="text-indigo-600 hover:underline">2. Break-even math</button></li>
          <li><button onClick={() => scrollToSection('when-worth')} className="text-indigo-600 hover:underline">3. When points make sense</button></li>
          <li><button onClick={() => scrollToSection('when-skip')} className="text-indigo-600 hover:underline">4. When to skip points</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="points" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Mortgage points in plain English</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            One point usually costs 1% of your loan amount and lowers your rate by about 0.25%. You pay now to save later.
          </p>
        </section>

        <section id="break-even" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Break-even: the only number that matters</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Break-even equals the upfront cost divided by monthly savings. If you won&apos;t keep the mortgage long enough,
            points are usually a losing bet.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-lg text-slate-700">
              Example: $4,000 in points ÷ $90/month savings = 44 months to break even.
            </p>
          </div>
        </section>

        <section id="when-worth" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When points make sense</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• You plan to keep the loan beyond the break-even period.</li>
            <li>• You have extra cash after closing costs and emergency savings.</li>
            <li>• You&apos;re locking a long-term home and expect stable income.</li>
          </ul>
        </section>

        <section id="when-skip" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When to skip points</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• You might refinance or move within 3-5 years.</li>
            <li>• You&apos;d rather keep cash for renovations or liquidity.</li>
            <li>• The rate reduction is tiny compared to the cost.</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default MortgagePointsBreakEven2026;

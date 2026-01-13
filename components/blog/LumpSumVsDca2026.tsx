'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const LumpSumVsDca2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Lump Sum vs. Dollar Cost Averaging: What the Data Says",
      "description": "Compare lump sum investing vs dollar cost averaging and learn when each strategy makes sense.",
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
      "datePublished": "2026-02-14",
      "dateModified": "2026-02-14",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/lump-sum-vs-dollar-cost-averaging"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-lump-sum';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-lump-sum');
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
          <span>📈 Investing</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Lump Sum vs. Dollar Cost Averaging: What the Data Says
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Lump sum investing wins more often in the long run, but dollar cost averaging can reduce regret and volatility.
          Here&apos;s what the data says and how to choose a strategy.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Model lump sum vs DCA</h3>
              <p className="text-sm text-slate-600">
                Compare both strategies with your timeline and contribution plan.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Wealth SIP Tool →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('data')} className="text-indigo-600 hover:underline">1. What the data shows</button></li>
          <li><button onClick={() => scrollToSection('when')} className="text-indigo-600 hover:underline">2. When to use DCA</button></li>
          <li><button onClick={() => scrollToSection('hybrid')} className="text-indigo-600 hover:underline">3. The hybrid approach</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="data" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Lump sum wins more often</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Over long periods, investing earlier typically outperforms spreading money over time. Time in the market is
            the main advantage.
          </p>
        </section>

        <section id="when" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When DCA makes sense</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            DCA helps if you&apos;re nervous about market timing, or if you&apos;re investing from income rather than a lump sum.
          </p>
        </section>

        <section id="hybrid" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">A simple hybrid strategy</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Invest a portion immediately, then spread the rest over a few months. This balances discipline with risk
            control.
          </p>
        </section>
      </article>
    </div>
  );
};

export default LumpSumVsDca2026;

'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const FourPercentRuleDebate2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The 4% Rule Is Dead? Why Safe Withdrawal Rates Are Changing",
      "description": "Explore why the 4% rule is under pressure from inflation and longevity risk, and how to test safer withdrawal rates.",
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
      "datePublished": "2026-02-12",
      "dateModified": "2026-02-12",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/4-percent-rule-dead-safe-withdrawal-rates"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-4percent';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-4percent');
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
          <span>⏱️ 10 min read</span>
          <span>•</span>
          <span>📈 Withdrawal Strategy</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The 4% Rule Is Dead? Why Safe Withdrawal Rates Are Changing
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Rising inflation, market volatility, and longer retirements have put pressure on the classic 4% rule. Learn why
          safe withdrawal rates are shifting and how to stress test your plan.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Stress test your withdrawal rate</h3>
              <p className="text-sm text-slate-600">
                Compare 3%, 3.5%, 4%, and 5% scenarios against your portfolio.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.FIRE_PLANNER)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use FIRE Planner →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('what-changed')} className="text-indigo-600 hover:underline">1. What changed since the 4% rule</button></li>
          <li><button onClick={() => scrollToSection('inflation')} className="text-indigo-600 hover:underline">2. Inflation and sequence risk</button></li>
          <li><button onClick={() => scrollToSection('alternatives')} className="text-indigo-600 hover:underline">3. Alternative withdrawal rates</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="what-changed" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why the 4% rule is under pressure</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The 4% rule was built on historical U.S. market data, but today&apos;s bond yields, inflation spikes, and longer
            life expectancy mean retirees may need a more conservative plan.
          </p>
        </section>

        <section id="inflation" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Inflation and sequence risk</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A bad market stretch early in retirement can permanently reduce a portfolio. Testing multiple withdrawal
            rates helps you build a buffer against this risk.
          </p>
        </section>

        <section id="alternatives" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Safer withdrawal rate ranges</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Many planners suggest 3% to 3.5% for early retirees, especially in high inflation periods. The right rate
            depends on your time horizon, portfolio mix, and flexibility.
          </p>
        </section>
      </article>
    </div>
  );
};

export default FourPercentRuleDebate2026;

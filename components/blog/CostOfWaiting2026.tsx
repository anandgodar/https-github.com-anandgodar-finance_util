'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const CostOfWaiting2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Cost of Waiting: Why Starting at 25 vs. 35 Costs You $1 Million",
      "description": "See how delaying investing reduces compounding and learn the real cost of starting 10 years later.",
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
        "@id": "https://quantcurb.com/blog/cost-of-waiting-compound-interest"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-cost-waiting';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-cost-waiting');
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
          <span>⏳ Compounding</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The Cost of Waiting: Why Starting at 25 vs. 35 Costs You $1 Million
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Compounding rewards time, not just money. A 10-year delay can erase hundreds of thousands — even a million —
          from your future portfolio.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">See your cost of waiting</h3>
              <p className="text-sm text-slate-600">
                Compare your starting age and watch the compound gap grow.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Wealth Projector →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">1. The classic 25 vs 35 example</button></li>
          <li><button onClick={() => scrollToSection('why')} className="text-indigo-600 hover:underline">2. Why time wins</button></li>
          <li><button onClick={() => scrollToSection('next')} className="text-indigo-600 hover:underline">3. What to do now</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Starting at 25 vs 35</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you invest $6,000 per year starting at 25 and stop at 35, you can still beat someone who starts at 35 and
            invests continuously. Time compounds faster than extra contributions.
          </p>
        </section>

        <section id="why" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why time is the multiplier</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Each decade adds another compounding layer. The earlier dollars stack returns on returns for longer.
          </p>
        </section>

        <section id="next" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What to do if you&apos;re starting later</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The fix is simple: increase your savings rate, automate contributions, and avoid more delays. The sooner you
            start, the smaller the gap becomes.
          </p>
        </section>
      </article>
    </div>
  );
};

export default CostOfWaiting2026;

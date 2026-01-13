'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const RaiseWorthMoving2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Is a $10,000 Raise Worth Moving For? The Real Cost of Relocation",
      "description": "Break down whether a $10,000 raise is worth relocating. Compare taxes, cost of living, and hidden moving costs before you accept the offer.",
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
      "datePublished": "2026-02-10",
      "dateModified": "2026-02-10",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/raise-vs-relocation-cost-of-living"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-raise-relocation';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-raise-relocation');
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
          <span>🚚 Relocation</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Is a $10,000 Raise Worth Moving For? The Real Cost of Relocation
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          A $10k raise sounds great until you factor in taxes, housing, and moving costs. This guide helps you decide if
          a <strong>raise is worth relocating</strong> by comparing net pay, cost of living, and one-time expenses.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Model your new net income</h3>
              <p className="text-sm text-slate-600">
                Compare your current and future take-home pay with state taxes and 401(k) contributions included.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.SALARY_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Salary Estimator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('net-pay')} className="text-indigo-600 hover:underline">1. What a $10k raise really nets</button></li>
          <li><button onClick={() => scrollToSection('relocation-costs')} className="text-indigo-600 hover:underline">2. The hidden costs of moving</button></li>
          <li><button onClick={() => scrollToSection('living-costs')} className="text-indigo-600 hover:underline">3. Cost-of-living break-even</button></li>
          <li><button onClick={() => scrollToSection('decision')} className="text-indigo-600 hover:underline">4. A simple decision checklist</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="net-pay" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">A $10k raise doesn&apos;t mean $10k more in your pocket</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            After federal, state, and FICA taxes, a $10,000 raise usually nets <strong>$6,000-$7,500</strong> depending on
            your bracket. If you&apos;re moving to a higher-tax state, the net could be even smaller.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold">✅ Estimate your net raise first, then compare budgets.</p>
          </div>
        </section>

        <section id="relocation-costs" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The hidden costs of relocation</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Moving costs add up fast. Even a “simple” relocation can eat a full year of a $10k raise.
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Movers, travel, and temporary housing: $2,000-$8,000</li>
            <li>• Security deposits, utilities, furnishings: $1,500-$5,000</li>
            <li>• Career risk: probation period, new network, local wage norms</li>
          </ul>
        </section>

        <section id="living-costs" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Cost-of-living break-even math</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If rent is $500 higher per month, that&apos;s $6,000 per year. Add higher taxes and commuting costs and your raise
            can disappear. A <strong>relocation salary calculator</strong> helps you run the break-even scenario in minutes.
          </p>
        </section>

        <section id="decision" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Decision checklist: is the move worth it?</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Does the new city improve long-term career growth?</li>
            <li>• Are you getting better benefits, equity, or flexibility?</li>
            <li>• Will your lifestyle feel better even if costs rise?</li>
            <li>• Can you negotiate a relocation bonus or housing stipend?</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            If the answer is mostly “yes,” the move can still be worth it. But do the math first.
          </p>
        </section>
      </article>
    </div>
  );
};

export default RaiseWorthMoving2025;

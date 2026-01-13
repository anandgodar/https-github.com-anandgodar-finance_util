'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const RothVsTraditional401k2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Roth vs. Traditional 401(k): The Tax Bracket Bet",
      "description": "Compare Roth vs Traditional 401(k) choices based on tax brackets now vs later and learn when each option wins.",
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
        "@id": "https://quantcurb.com/blog/roth-vs-traditional-401k-tax-bracket-bet"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-401k-bracket';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-401k-bracket');
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
          <span>🧠 Tax Strategy</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Roth vs. Traditional 401(k): The Tax Bracket Bet
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Choosing between Roth and Traditional 401(k) contributions is a bet on your future tax bracket. Pay taxes now
          or later? The right answer depends on income trajectory and retirement goals.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Compare net outcomes</h3>
              <p className="text-sm text-slate-600">
                Model both options with our tax shield analysis.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.RETIREMENT_OPTIMIZER)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Tax Shield Analysis →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('roth')} className="text-indigo-600 hover:underline">1. Roth 401(k) basics</button></li>
          <li><button onClick={() => scrollToSection('traditional')} className="text-indigo-600 hover:underline">2. Traditional 401(k) basics</button></li>
          <li><button onClick={() => scrollToSection('decision')} className="text-indigo-600 hover:underline">3. How to decide</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="roth" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Roth 401(k): pay taxes now</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Roth contributions are after-tax, but withdrawals are tax-free later. This can be powerful if you expect a
            higher tax bracket in retirement.
          </p>
        </section>

        <section id="traditional" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Traditional 401(k): defer taxes</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Traditional contributions reduce taxable income now, but withdrawals are taxed later. This usually wins when
            your retirement tax rate is lower.
          </p>
        </section>

        <section id="decision" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to make the bet</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you&apos;re early in your career or expect higher income later, Roth often makes sense. If you&apos;re in a high tax
            bracket now, Traditional can deliver bigger savings.
          </p>
        </section>
      </article>
    </div>
  );
};

export default RothVsTraditional401k2026;

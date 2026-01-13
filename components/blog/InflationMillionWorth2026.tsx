'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const InflationMillionWorth2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Inflation Calculator: What $1 Million Will Be Worth When You Retire",
      "description": "See how inflation erodes purchasing power and what $1 million could feel like in retirement dollars.",
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
        "@id": "https://quantcurb.com/blog/inflation-calculator-million-worth-retirement"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-inflation-million';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-inflation-million');
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
          <span>📉 Inflation</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Inflation Calculator: What $1 Million Will Be Worth When You Retire
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Inflation quietly erodes purchasing power. What feels like $1 million today could feel like half that by the
          time you retire.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Adjust for inflation</h3>
              <p className="text-sm text-slate-600">
                Use the Wealth Projector to see future dollars in today&apos;s terms.
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
          <li><button onClick={() => scrollToSection('erosion')} className="text-indigo-600 hover:underline">1. How inflation erodes wealth</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">2. $1 million example</button></li>
          <li><button onClick={() => scrollToSection('protect')} className="text-indigo-600 hover:underline">3. Protecting purchasing power</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="erosion" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Inflation is a slow leak</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Even at 3% inflation, purchasing power halves roughly every 24 years. That&apos;s why retirement math needs an
            inflation adjustment.
          </p>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What $1 million might feel like</h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-lg text-slate-700">
              At 3% inflation for 25 years, $1,000,000 is closer to about $477,000 in today&apos;s dollars.
            </p>
          </div>
        </section>

        <section id="protect" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Protecting purchasing power</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Stocks, real estate, and inflation-adjusted assets can help offset inflation, but you still need to run
            conservative projections.
          </p>
        </section>
      </article>
    </div>
  );
};

export default InflationMillionWorth2026;

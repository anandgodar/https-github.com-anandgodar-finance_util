'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const DcfModelingRetailInvestors2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "DCF Modeling for Retail Investors: How to Value a Stock Like a Pro",
      "description": "Learn the basics of discounted cash flow modeling and how to value a stock using professional assumptions.",
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
        "@id": "https://quantcurb.com/blog/dcf-modeling-retail-investors"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-dcf-retail';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-dcf-retail');
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
          <span>📊 Valuation</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          DCF Modeling for Retail Investors: How to Value a Stock Like a Pro
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Discounted cash flow (DCF) modeling helps you estimate what a company is really worth. With the right inputs,
          you can build Wall Street-style valuations without a spreadsheet.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Run a professional valuation</h3>
              <p className="text-sm text-slate-600">
                Build a DCF model with the Excel Power Modeler.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.EXCEL_MODELER)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Excel Power Modeler →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('inputs')} className="text-indigo-600 hover:underline">1. The core inputs</button></li>
          <li><button onClick={() => scrollToSection('cashflows')} className="text-indigo-600 hover:underline">2. Forecasting cash flows</button></li>
          <li><button onClick={() => scrollToSection('terminal')} className="text-indigo-600 hover:underline">3. Terminal value basics</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="inputs" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The DCF inputs that matter most</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Revenue growth, margins, and the discount rate (WACC) drive most DCF outcomes. Small changes here can swing
            valuation dramatically.
          </p>
        </section>

        <section id="cashflows" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Forecasting cash flows</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Start with realistic assumptions, then stress test upside and downside cases. That range is often more useful
            than a single point estimate.
          </p>
        </section>

        <section id="terminal" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Terminal value</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Terminal value typically makes up the majority of a DCF. Use conservative growth rates to avoid inflated
            valuations.
          </p>
        </section>
      </article>
    </div>
  );
};

export default DcfModelingRetailInvestors2026;

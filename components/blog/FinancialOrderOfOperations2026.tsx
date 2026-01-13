'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const FinancialOrderOfOperations2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Where Should Your Next Dollar Go? The Financial Order of Operations",
      "description": "Follow the financial order of operations: emergency fund, employer match, high-interest debt, and beyond.",
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
        "@id": "https://quantcurb.com/blog/financial-order-of-operations"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-foo';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-foo');
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
          <span>🧭 Financial Strategy</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Where Should Your Next Dollar Go? The Financial Order of Operations
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          When money is limited, the order matters. Start with cash safety, grab your employer match, and crush high
          interest debt before chasing lower-return goals.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Check your emergency fund first</h3>
              <p className="text-sm text-slate-600">
                Make sure your Emergency Guard status is secure before the next step.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.EMERGENCY_FUND)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Emergency Guard →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('flow')} className="text-indigo-600 hover:underline">1. The flowchart in words</button></li>
          <li><button onClick={() => scrollToSection('emergency')} className="text-indigo-600 hover:underline">2. Emergency fund first</button></li>
          <li><button onClick={() => scrollToSection('match')} className="text-indigo-600 hover:underline">3. Employer match and high-interest debt</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="flow" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The order of operations</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Build a starter emergency fund.</li>
            <li>• Capture the employer match.</li>
            <li>• Pay off high-interest debt.</li>
            <li>• Max retirement accounts, then invest extra.</li>
          </ul>
        </section>

        <section id="emergency" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Emergency fund before everything else</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Cash prevents you from using credit cards or selling investments during a crisis. Even one month of expenses
            changes your risk profile.
          </p>
        </section>

        <section id="match" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Match beats most investments</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A 100% employer match is an instant return. After that, high-interest debt typically beats market returns on a
            risk-adjusted basis.
          </p>
        </section>
      </article>
    </div>
  );
};

export default FinancialOrderOfOperations2026;

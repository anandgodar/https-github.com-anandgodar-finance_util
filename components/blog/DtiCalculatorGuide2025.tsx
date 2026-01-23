'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const DtiCalculatorGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "DTI Calculator Guide 2025: What Debt-to-Income Ratio Lenders Want",
      "description": "Learn how debt-to-income ratio is calculated, what lenders look for, and how to improve your DTI before applying.",
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
        "@id": "https://quantcurb.com/blog/dti-calculator-guide-2025"
      },
      "keywords": "dti calculator, debt to income ratio, 28 36 rule, mortgage qualification dti"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-dti-guide';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-dti-guide');
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
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>📅 Updated February 2026</span>
          <span>•</span>
          <span>⏱️ 10 min read</span>
          <span>•</span>
          <span>🏦 Mortgages</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          DTI Calculator Guide 2025: What Debt-to-Income Ratio Lenders Want
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Debt-to-income ratio (DTI) is one of the first metrics lenders check. If you want better approval odds, you
          need to know your number. This guide explains DTI in plain language.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate Your DTI</h3>
              <p className="text-sm text-slate-600">Use our DTI calculator to see your front-end and back-end ratios.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.DTI_CALCULATOR)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open DTI Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('what-is-dti')} className="text-indigo-600 hover:underline">1. What is DTI?</button></li>
          <li><button onClick={() => scrollToSection('28-36-rule')} className="text-indigo-600 hover:underline">2. The 28/36 rule</button></li>
          <li><button onClick={() => scrollToSection('improve')} className="text-indigo-600 hover:underline">3. How to improve DTI</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">4. DTI FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="what-is-dti" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is DTI?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            DTI is your monthly debt payments divided by your gross monthly income. Lower is better.
          </p>
        </section>

        <section id="28-36-rule" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The 28/36 rule</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Lenders often look for housing costs under 28% of income and total debt under 36%. Some loan types allow more,
            but lower ratios increase approval odds.
          </p>
        </section>

        <section id="improve" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to improve DTI</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Pay down high-interest debt first.</li>
            <li>• Avoid new credit inquiries before applying.</li>
            <li>• Increase income with stable, documented sources.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">DTI FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">Does DTI include rent?</h3>
              <p className="text-slate-700">Yes, your housing payment counts in the front-end ratio.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">What DTI is too high?</h3>
              <p className="text-slate-700">Above 43% can be challenging for many loan programs.</p>
            </div>
          </div>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Mortgage Readiness Tips"
          description="Get weekly insights on improving credit, DTI, and home affordability."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.DTI_CALCULATOR)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🏦 DTI Calculator</h4>
            <p className="text-sm text-slate-600">Check mortgage qualification ratios.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🏡 Mortgage Calculator</h4>
            <p className="text-sm text-slate-600">Estimate total monthly housing costs.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DtiCalculatorGuide2025;

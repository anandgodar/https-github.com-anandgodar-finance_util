'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const GstCalculatorGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "GST Calculator Guide 2025: Inclusive vs Exclusive Pricing Made Simple",
      "description": "Learn how to calculate GST, split inclusive prices, and avoid invoicing errors using a GST calculator.",
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
        "@id": "https://quantcurb.com/blog/gst-tax-calculator-guide-2025"
      },
      "keywords": "gst calculator, gst inclusive vs exclusive, gst tax formula, vat calculator, gst invoice breakdown"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-gst-guide';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-gst-guide');
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
          <span>⏱️ 9 min read</span>
          <span>•</span>
          <span>🧾 Business Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          GST Calculator Guide 2025: Inclusive vs Exclusive Pricing Made Simple
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          If you invoice clients or sell products, GST math needs to be correct. This guide explains inclusive vs
          exclusive GST and how to split pricing in seconds.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate GST Instantly</h3>
              <p className="text-sm text-slate-600">Use our GST calculator for clean invoices and tax compliance.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.GST_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open GST Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('gst-basics')} className="text-indigo-600 hover:underline">1. GST basics</button></li>
          <li><button onClick={() => scrollToSection('inclusive-exclusive')} className="text-indigo-600 hover:underline">2. Inclusive vs exclusive GST</button></li>
          <li><button onClick={() => scrollToSection('gst-formulas')} className="text-indigo-600 hover:underline">3. GST formulas</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">4. Common GST mistakes</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="gst-basics" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">GST basics</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            GST (Goods and Services Tax) is a consumption tax applied to goods and services. Businesses collect GST on
            sales and remit it to the government.
          </p>
        </section>

        <section id="inclusive-exclusive" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Inclusive vs exclusive GST</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Exclusive</strong> means GST is added on top of the base price. <strong>Inclusive</strong> means the price
            already includes GST and you need to split it out.
          </p>
        </section>

        <section id="gst-formulas" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">GST formulas</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-slate-700">GST Amount = Price × GST Rate</p>
            <p className="text-slate-700 mt-2">Base Price (Inclusive) = Price ÷ (1 + GST Rate)</p>
          </div>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common GST mistakes</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Forgetting to label invoices as inclusive or exclusive.</li>
            <li>• Using the wrong GST rate for the product category.</li>
            <li>• Rounding errors on high-volume invoices.</li>
          </ul>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Business Finance Tips"
          description="Stay ahead with weekly invoicing, tax, and cash-flow tips."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.GST_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🧾 GST Calculator</h4>
            <p className="text-sm text-slate-600">Split inclusive/exclusive GST in seconds.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">💼 Freelance Profit Hub</h4>
            <p className="text-sm text-slate-600">Track revenue, expenses, and take-home profit.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GstCalculatorGuide2025;

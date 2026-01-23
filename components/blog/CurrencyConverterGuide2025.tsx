'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const CurrencyConverterGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Currency Converter Guide 2025: Live Rates, Fees, and Smart FX Tips",
      "description": "Learn how to use a currency converter, understand exchange rate spreads, and avoid hidden fees when sending or spending money abroad.",
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
        "@id": "https://quantcurb.com/blog/currency-converter-guide-2025"
      },
      "keywords": "currency converter, live exchange rates, forex rate calculator, currency exchange fees, usd to eur converter"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-currency-converter';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-currency-converter');
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
          <span>🌍 FX & Travel</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Currency Converter Guide 2025: Live Rates, Fees, and Smart FX Tips
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Exchange rates move constantly—and hidden fees can quietly drain your money. This guide explains how to use a
          <strong> currency converter</strong> to see real rates and avoid expensive FX surprises.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Check Live Rates Now</h3>
              <p className="text-sm text-slate-600">Use our live currency converter with interbank pricing.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.CURRENCY_CONV)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open Currency Converter →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('live-rates')} className="text-indigo-600 hover:underline">1. What are live exchange rates?</button></li>
          <li><button onClick={() => scrollToSection('spreads')} className="text-indigo-600 hover:underline">2. Understanding spreads and fees</button></li>
          <li><button onClick={() => scrollToSection('use-cases')} className="text-indigo-600 hover:underline">3. Best use cases for a converter</button></li>
          <li><button onClick={() => scrollToSection('tips')} className="text-indigo-600 hover:underline">4. Smart FX tips</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="live-rates" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What are live exchange rates?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Live rates update in real time and reflect the interbank market. Most banks and kiosks add a spread on top
            of the live rate, which becomes your hidden fee.
          </p>
        </section>

        <section id="spreads" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Understanding spreads and fees</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• The spread is the difference between buy and sell prices.</li>
            <li>• Wide spreads mean worse deals.</li>
            <li>• Always compare total received, not just the headline rate.</li>
          </ul>
        </section>

        <section id="use-cases" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Best use cases for a converter</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Use it before travel, when sending international money, or when pricing overseas products. It keeps you from
            overpaying and helps you plan ahead.
          </p>
        </section>

        <section id="tips" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Smart FX tips</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Pay in local currency to avoid card conversion fees.</li>
            <li>• Use mid-market rate apps to compare offers.</li>
            <li>• Watch rate trends if you can wait for a better window.</li>
          </ul>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Get Smart Travel Money Tips"
          description="Weekly insights on FX rates, travel savings, and cross-border spending."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.CURRENCY_CONV)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🌍 Currency Converter</h4>
            <p className="text-sm text-slate-600">See live rates across major currencies.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.LIVING_COST)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🌆 Cost of Living Calculator</h4>
            <p className="text-sm text-slate-600">Compare budgets across global cities.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverterGuide2025;

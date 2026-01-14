'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const MarketInsightsGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "AI Market Insights Guide 2025: How to Read Signals Without the Noise",
      "description": "A practical guide to interpreting market insights, sentiment signals, and macro trends using AI-driven tools.",
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
        "@id": "https://quantcurb.com/blog/ai-market-insights-guide-2025"
      },
      "keywords": "ai market insights, market sentiment analysis, macro trend signals, market intelligence tools"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-market-insights';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-market-insights');
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
          <span>🤖 Market Intelligence</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          AI Market Insights Guide 2025: How to Read Signals Without the Noise
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Markets move on narratives and data. The goal isn&apos;t to predict every move—it&apos;s to focus on signals that matter
          and ignore the noise. Here&apos;s how to use AI market insights responsibly.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Explore Live Market Insights</h3>
              <p className="text-sm text-slate-600">Use our AI market pulse to scan trends and sentiment in seconds.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.MARKET_INSIGHTS)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open Market Pulse →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('what-are-insights')} className="text-indigo-600 hover:underline">1. What are market insights?</button></li>
          <li><button onClick={() => scrollToSection('signals')} className="text-indigo-600 hover:underline">2. Signals that matter</button></li>
          <li><button onClick={() => scrollToSection('avoid-noise')} className="text-indigo-600 hover:underline">3. Avoiding noise traps</button></li>
          <li><button onClick={() => scrollToSection('workflow')} className="text-indigo-600 hover:underline">4. A simple weekly workflow</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="what-are-insights" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What are market insights?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Market insights combine data, sentiment, and macro indicators to give context. Think of them as a compass
            instead of a crystal ball.
          </p>
        </section>

        <section id="signals" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Signals that matter</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Rate expectations and inflation trends</li>
            <li>• Earnings revisions and margin pressure</li>
            <li>• Sector rotation and risk appetite shifts</li>
          </ul>
        </section>

        <section id="avoid-noise" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Avoiding noise traps</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Daily headlines can be misleading. Use insights to validate a trend, not chase every headline.
          </p>
        </section>

        <section id="workflow" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">A simple weekly workflow</h2>
          <ol className="space-y-3 text-slate-700">
            <li>1) Review macro signals once per week.</li>
            <li>2) Check sector winners and losers.</li>
            <li>3) Adjust portfolio risk slowly, not daily.</li>
          </ol>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Weekly Market Pulse"
          description="Get concise market insights without the hype."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.MARKET_INSIGHTS)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🤖 Market Insights</h4>
            <p className="text-sm text-slate-600">Explore AI-generated market context.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.INVESTMENT_ACADEMY)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🎓 Investment Academy</h4>
            <p className="text-sm text-slate-600">Learn fundamentals and portfolio strategy.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketInsightsGuide2025;

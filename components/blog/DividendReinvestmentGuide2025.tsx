'use client';

import React from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const DividendReinvestmentGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>💹 Dividends</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Dividend Reinvestment (DRIP) Guide 2025: Compounding Explained
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Dividend reinvestment (DRIP) turns cash payouts into more shares, which compounds over time. If you&apos;ve wondered
          <strong> how dividend reinvestment works</strong>, this guide is your shortcut.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Model DRIP Growth</h3>
              <p className="text-sm text-slate-600">Use our DRIP calculator to visualize compounding.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.DRIP_CALCULATOR)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open DRIP Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('what-is-drip')} className="text-indigo-600 hover:underline">1. What is DRIP?</button></li>
          <li><button onClick={() => scrollToSection('why-compounds')} className="text-indigo-600 hover:underline">2. Why compounding accelerates wealth</button></li>
          <li><button onClick={() => scrollToSection('drip-vs-cash')} className="text-indigo-600 hover:underline">3. DRIP vs cash dividends</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">4. Common mistakes</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="what-is-drip" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is DRIP?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            DRIP stands for Dividend Reinvestment Plan. Instead of taking cash, dividends buy more shares automatically.
          </p>
        </section>

        <section id="why-compounds" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why compounding accelerates wealth</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Each new share earns dividends too, which creates a snowball effect. Over years, the compounding impact is
            dramatic.
          </p>
        </section>

        <section id="drip-vs-cash" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">DRIP vs cash dividends</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Cash dividends provide income today. DRIP prioritizes long-term growth. Your choice depends on your goals.
          </p>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Ignoring dividend tax impact.</li>
            <li>• Over-concentrating in one dividend stock.</li>
            <li>• Forgetting to rebalance periodically.</li>
          </ul>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Dividend Strategy Tips"
          description="Get weekly insights on dividends, compounding, and portfolio income."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.DRIP_CALCULATOR)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">💹 DRIP Calculator</h4>
            <p className="text-sm text-slate-600">Model dividend compounding over time.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📈 Investment Calculator</h4>
            <p className="text-sm text-slate-600">Project growth with recurring contributions.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DividendReinvestmentGuide2025;

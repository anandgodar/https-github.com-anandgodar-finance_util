'use client';

import React from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const InvestmentAcademyGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>⏱️ 12 min read</span>
          <span>•</span>
          <span>🎓 Investing</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Index Funds & ETFs Guide 2025: Build a Simple, Diversified Portfolio
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          If you want a low-stress investing plan, index funds and ETFs are hard to beat. This guide covers how they work,
          how to choose them, and a simple portfolio structure you can keep for years.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Explore Fund Strategies</h3>
              <p className="text-sm text-slate-600">Learn the basics in our Investment Academy.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.INVESTMENT_ACADEMY)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open Fund Academy →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('index-vs-etf')} className="text-indigo-600 hover:underline">1. Index funds vs ETFs</button></li>
          <li><button onClick={() => scrollToSection('diversification')} className="text-indigo-600 hover:underline">2. Why diversification matters</button></li>
          <li><button onClick={() => scrollToSection('portfolio')} className="text-indigo-600 hover:underline">3. Simple portfolio blueprint</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">4. Common mistakes</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="index-vs-etf" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Index funds vs ETFs</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Index funds are typically mutual funds priced once per day. ETFs trade like stocks. Both can deliver low-cost
            diversification; the best choice depends on your broker and habits.
          </p>
        </section>

        <section id="diversification" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why diversification matters</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Diversification reduces the risk of any single company or sector hurting your long-term plan.
          </p>
        </section>

        <section id="portfolio" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Simple portfolio blueprint</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Total market equity index fund</li>
            <li>• International equity index fund</li>
            <li>• Bond fund (optional, based on risk tolerance)</li>
          </ul>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Chasing hot sectors without a plan.</li>
            <li>• Over-trading instead of sticking to allocation.</li>
            <li>• Ignoring fees and expense ratios.</li>
          </ul>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Investing Basics, Weekly"
          description="Get simple, actionable investing guidance without the jargon."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.INVESTMENT_ACADEMY)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🎓 Fund Academy</h4>
            <p className="text-sm text-slate-600">Learn ETF and index fund fundamentals.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📈 Investment Calculator</h4>
            <p className="text-sm text-slate-600">Project growth with compound interest.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAcademyGuide2025;

'use client';

import React from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const LoanComparisonGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>⚖️ Debt Strategy</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Loan Comparison Guide 2025: Compare APR, Fees, and Refinance Break-Even
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          The best loan isn&apos;t always the one with the lowest rate. You need to compare APR, fees, and the time it takes
          to break even. This guide shows how to compare loan offers like a pro.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Compare Loan Offers Instantly</h3>
              <p className="text-sm text-slate-600">Use our loan comparison tool to see total cost and break-even timing.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.LOAN_COMPARE)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open Loan Comparison →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('apr-vs-rate')} className="text-indigo-600 hover:underline">1. APR vs interest rate</button></li>
          <li><button onClick={() => scrollToSection('fees')} className="text-indigo-600 hover:underline">2. Fees that change the math</button></li>
          <li><button onClick={() => scrollToSection('break-even')} className="text-indigo-600 hover:underline">3. Refinance break-even explained</button></li>
          <li><button onClick={() => scrollToSection('checklist')} className="text-indigo-600 hover:underline">4. Loan comparison checklist</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="apr-vs-rate" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">APR vs interest rate</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The interest rate is the base cost of borrowing. <strong>APR</strong> includes fees, points, and other costs—so
            it&apos;s the number you should compare across lenders.
          </p>
        </section>

        <section id="fees" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Fees that change the math</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Origination fees</li>
            <li>• Points paid upfront</li>
            <li>• Closing costs and appraisals</li>
          </ul>
        </section>

        <section id="break-even" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Refinance break-even explained</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Break-even is how long it takes for monthly savings to cover upfront fees. If you won&apos;t stay long enough,
            refinancing can cost more than it saves.
          </p>
        </section>

        <section id="checklist" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Loan comparison checklist</h2>
          <ol className="space-y-3 text-slate-700">
            <li>1) Compare APR, not just rate.</li>
            <li>2) Add all fees to total cost.</li>
            <li>3) Calculate break-even timeline.</li>
            <li>4) Choose the offer that fits your holding period.</li>
          </ol>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Smarter Borrowing Tips"
          description="Get weekly insights on loans, refinancing, and debt optimization."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.LOAN_COMPARE)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">⚖️ Loan Comparison Tool</h4>
            <p className="text-sm text-slate-600">Compare total costs across offers.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🏡 Mortgage Calculator</h4>
            <p className="text-sm text-slate-600">See payments, PMI, and property tax impact.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanComparisonGuide2025;

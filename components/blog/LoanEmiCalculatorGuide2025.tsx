'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const LoanEmiCalculatorGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Loan EMI Calculator Guide 2025: How to Calculate EMI and Save Interest",
      "description": "A human-friendly guide to EMI calculation, amortization, and how to lower loan interest using an EMI calculator.",
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
        "@id": "https://quantcurb.com/blog/loan-emi-calculator-guide-2025"
      },
      "keywords": "loan emi calculator, how to calculate emi, emi formula, monthly loan payment calculator, reduce loan interest"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-emi-guide';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-emi-guide');
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
          <span>⏱️ 11 min read</span>
          <span>•</span>
          <span>💳 Loans</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Loan EMI Calculator Guide 2025: How to Calculate EMI and Save Interest
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          EMI stands for Equated Monthly Installment. It&apos;s the fixed payment you make every month on a loan. If you&apos;ve
          ever searched <strong>how to calculate EMI</strong>, this guide breaks it down in plain English—plus the fastest
          way to lower your interest costs.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate Your EMI Instantly</h3>
              <p className="text-sm text-slate-600">Use our EMI calculator to model monthly payments and interest savings.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.EMI_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open EMI Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('what-is-emi')} className="text-indigo-600 hover:underline">1. What is EMI?</button></li>
          <li><button onClick={() => scrollToSection('emi-formula')} className="text-indigo-600 hover:underline">2. EMI formula (simple breakdown)</button></li>
          <li><button onClick={() => scrollToSection('amortization')} className="text-indigo-600 hover:underline">3. Understanding amortization</button></li>
          <li><button onClick={() => scrollToSection('reduce-interest')} className="text-indigo-600 hover:underline">4. How to reduce loan interest</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">5. EMI calculator FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="what-is-emi" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is EMI?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            EMI is the fixed monthly payment that includes both principal and interest. The amount depends on three
            variables: loan amount, interest rate, and loan tenure.
          </p>
        </section>

        <section id="emi-formula" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">EMI formula (simple breakdown)</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-slate-700">
              EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)
            </p>
            <p className="text-sm text-slate-600 mt-3">
              Where P is principal, r is monthly interest rate, and n is number of monthly payments.
            </p>
          </div>
        </section>

        <section id="amortization" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Understanding amortization</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            In the early months, most of your EMI goes toward interest. Over time, the principal portion grows. A good
            <strong> monthly loan payment calculator</strong> helps you see this shift clearly.
          </p>
        </section>

        <section id="reduce-interest" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to reduce loan interest</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Make small prepayments early in the loan.</li>
            <li>• Refinance if rates drop significantly.</li>
            <li>• Choose a shorter tenure if cash flow allows.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">EMI calculator FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">Is EMI fixed for the entire loan?</h3>
              <p className="text-slate-700">It&apos;s fixed for fixed-rate loans. For variable-rate loans, it can change.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">Does a longer tenure always mean lower EMI?</h3>
              <p className="text-slate-700">Yes, but total interest paid is higher. Balance affordability with cost.</p>
            </div>
          </div>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Get Debt-Smart Tips"
          description="Weekly insights on loans, EMI savings, and smarter repayment strategies."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.EMI_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">💳 EMI Calculator</h4>
            <p className="text-sm text-slate-600">Model monthly payments and interest savings.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.LOAN_COMPARE)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">⚖️ Loan Comparison Tool</h4>
            <p className="text-sm text-slate-600">Compare offers to pick the best APR and break-even point.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanEmiCalculatorGuide2025;

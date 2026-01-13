'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const BonusTaxMyth2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The \"Bonus Tax\" Myth: Why Your Bonus Is Withheld Differently (and What You Owe)",
      "description": "Learn the difference between bonus withholding and actual tax liability. Understand the 22% flat withholding rule and calculate your real bonus take-home pay.",
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
      "datePublished": "2026-02-10",
      "dateModified": "2026-02-10",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/bonus-tax-myth-withholding-vs-liability"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-bonus-tax';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-bonus-tax');
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
          <span>💸 Salary & Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The &quot;Bonus Tax&quot; Myth: Why Your Bonus Is Withheld Differently (and What You Owe)
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Bonuses aren&apos;t taxed at a higher rate, but they often look smaller because employers use a different
          <strong> bonus withholding method</strong>. This guide explains the 22% flat withholding rule, why your bonus
          check feels extra light, and how to calculate your real tax liability.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate your actual bonus take-home</h3>
              <p className="text-sm text-slate-600">
                Estimate your bonus tax liability based on your total income and filing status.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.SALARY_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Salary Tax Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('withholding')} className="text-indigo-600 hover:underline">1. Bonus withholding vs. bonus tax</button></li>
          <li><button onClick={() => scrollToSection('flat-rate')} className="text-indigo-600 hover:underline">2. The 22% flat rate explained</button></li>
          <li><button onClick={() => scrollToSection('aggregate')} className="text-indigo-600 hover:underline">3. Aggregate method & paycheck impact</button></li>
          <li><button onClick={() => scrollToSection('true-liability')} className="text-indigo-600 hover:underline">4. How to estimate true liability</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">5. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="withholding" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Bonus withholding is not bonus tax</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The biggest misconception is that bonuses are taxed higher. In reality, bonuses are just <strong>withheld</strong>
            differently. Your actual tax bill is based on your total annual income and deductions, not whether income is
            labeled salary or bonus.
          </p>
        </section>

        <section id="flat-rate" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The 22% flat withholding rule</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            For most employees, employers use the IRS supplemental wage flat rate: <strong>22% federal withholding</strong>
            on bonuses up to $1 million. If you&apos;re in a lower bracket, you might get some of that back at tax time. If
            you&apos;re in a higher bracket, you may owe more.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Scenario</th>
                  <th className="text-left p-4 font-black text-slate-900">Withholding</th>
                  <th className="text-left p-4 font-black text-slate-900">True liability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">22% bracket</td>
                  <td className="p-4 text-slate-700">22% withheld</td>
                  <td className="p-4 text-slate-700">Pretty accurate</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">12% bracket</td>
                  <td className="p-4 text-slate-700">22% withheld</td>
                  <td className="p-4 text-slate-700">Likely refund</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">32%+ bracket</td>
                  <td className="p-4 text-slate-700">22% withheld</td>
                  <td className="p-4 text-slate-700">Likely owe more</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="aggregate" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Aggregate method: why your bonus check shrinks</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Some companies add your bonus to a regular paycheck and withhold as if you&apos;ll make that amount every pay
            period. That spikes withholding and makes the bonus look “over-taxed.” It evens out at filing time.
          </p>
        </section>

        <section id="true-liability" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to estimate your real bonus take-home</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The best way is to model your total annual income, then compare it to year-to-date withholding. Use a
            <strong> bonus tax calculator</strong> or Salary Estimator to estimate the true net bonus after federal, state,
            and payroll taxes.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold">
              ✅ A $10,000 bonus in a 24% bracket is usually closer to $6,700-$7,200 after federal, state, and FICA.
            </p>
          </div>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: bonus tax myths</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Is bonus tax different from regular income tax?</h3>
              <p className="text-lg text-slate-700">No. Bonuses are taxed as ordinary income; only withholding differs.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Why does my bonus show a 40%+ deduction?</h3>
              <p className="text-lg text-slate-700">FICA, state tax, and aggregate withholding can stack on top of the 22% federal rate.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default BonusTaxMyth2025;

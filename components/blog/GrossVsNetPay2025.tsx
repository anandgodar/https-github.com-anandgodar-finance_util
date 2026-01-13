import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const GrossVsNetPay2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Gross vs. Net Pay: Why Your Paycheck Is Smaller Than You Think",
      "description": "A beginner-friendly guide to gross vs net pay, FICA, Medicare, and state taxes. Learn why your paycheck is smaller and how to calculate take-home pay.",
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
        "@id": "https://quantcurb.com/blog/gross-vs-net-pay-paycheck-breakdown"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-gross-net';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-gross-net');
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
          <span>🧾 Paychecks</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Gross vs. Net Pay: Why Your Paycheck Is Smaller Than You Think
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          If your first paycheck felt smaller than expected, you&apos;re not alone. This beginner-friendly guide explains
          <strong>gross vs net pay</strong>, FICA, Medicare, and state taxes so you know exactly where the money goes.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">See your exact paycheck breakdown</h3>
              <p className="text-sm text-slate-600">
                Estimate your take-home pay by state, pay frequency, and deductions.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.SALARY_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Calculate Take-Home Pay →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('gross')} className="text-indigo-600 hover:underline">1. What is gross pay?</button></li>
          <li><button onClick={() => scrollToSection('net')} className="text-indigo-600 hover:underline">2. What is net pay?</button></li>
          <li><button onClick={() => scrollToSection('fica')} className="text-indigo-600 hover:underline">3. FICA and Medicare basics</button></li>
          <li><button onClick={() => scrollToSection('state')} className="text-indigo-600 hover:underline">4. State taxes and other deductions</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="gross" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Gross pay: the headline number</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Gross pay is your salary or hourly wages before any deductions. It&apos;s the number in your offer letter, but it
            is not what hits your bank account.
          </p>
        </section>

        <section id="net" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Net pay: your real spending power</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Net pay is what&apos;s left after taxes and payroll deductions. For many early-career employees, net pay is
            <strong>25% to 35% lower</strong> than gross pay.
          </p>
        </section>

        <section id="fica" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">FICA and Medicare: the paycheck staples</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            FICA taxes fund Social Security and Medicare. That means a 6.2% Social Security tax and 1.45% Medicare tax on
            most wages. These add up quickly on every paycheck.
          </p>
        </section>

        <section id="state" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">State taxes, benefits, and other deductions</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            State income tax varies from 0% to over 10%. Add health insurance, commuter benefits, and retirement
            contributions, and your paycheck can shrink further.
          </p>
        </section>
      </article>
    </div>
  );
};

export default GrossVsNetPay2025;

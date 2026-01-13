import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const BiWeeklyMortgagePayments2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Bi-Weekly Mortgage Payments: The \"Secret\" to Saving $50,000 in Interest",
      "description": "Learn how bi-weekly mortgage payments create an extra full payment each year and reduce interest over the life of the loan.",
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
      "datePublished": "2026-02-11",
      "dateModified": "2026-02-11",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/biweekly-mortgage-payments-interest-savings"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-biweekly';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-biweekly');
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
          <span>⏱️ 9 min read</span>
          <span>•</span>
          <span>💳 Loans</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Bi-Weekly Mortgage Payments: The &quot;Secret&quot; to Saving $50,000 in Interest
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Bi-weekly payments feel like a hack because 26 half-payments equal 13 full payments each year. That extra
          payment goes straight to principal and can cut years off your loan.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Simulate the impact of extra payments</h3>
              <p className="text-sm text-slate-600">
                Model bi-weekly payments and see how much interest you save.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.EMI_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Loan EMI Pro →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('biweekly')} className="text-indigo-600 hover:underline">1. Why bi-weekly works</button></li>
          <li><button onClick={() => scrollToSection('savings')} className="text-indigo-600 hover:underline">2. Interest savings example</button></li>
          <li><button onClick={() => scrollToSection('tips')} className="text-indigo-600 hover:underline">3. Tips to set it up</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="biweekly" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Bi-weekly payments add one extra payment</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Paying half your mortgage every two weeks results in 26 half-payments, which equals 13 full payments per
            year. That extra payment knocks down principal faster.
          </p>
        </section>

        <section id="savings" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Interest savings example</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            On a $350,000 loan at 7%, bi-weekly payments can save tens of thousands in interest and shorten the term by
            4-6 years. The exact number depends on your rate and start date.
          </p>
        </section>

        <section id="tips" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Tips to set it up</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Confirm your lender credits payments immediately.</li>
            <li>• Avoid third-party programs that charge unnecessary fees.</li>
            <li>• Set calendar reminders to avoid missing a payment.</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default BiWeeklyMortgagePayments2026;

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const CreditCardMinimumPayments2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Credit Card Minimum Payments: Why You Will Be in Debt for 20 Years",
      "description": "See how 2% minimum payments stretch credit card debt for decades and how a small extra payment changes the timeline.",
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
      "datePublished": "2026-02-13",
      "dateModified": "2026-02-13",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/credit-card-minimum-payments-20-years"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-cc-minimum';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-cc-minimum');
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
          <span>💳 Credit Cards</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Credit Card Minimum Payments: Why You Will Be in Debt for 20 Years
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Minimum payments are designed to keep you paying interest for years. Here&apos;s the math behind 2% minimums and
          how a small extra payment changes everything.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">See how fast you can be debt-free</h3>
              <p className="text-sm text-slate-600">
                Add just $50/month and watch the payoff timeline shrink.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.CREDIT_CARD_PAYOFF)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Card Payoff →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('minimums')} className="text-indigo-600 hover:underline">1. Why minimums take decades</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">2. Example timeline</button></li>
          <li><button onClick={() => scrollToSection('fix')} className="text-indigo-600 hover:underline">3. How to shorten payoff</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="minimums" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Minimum payments barely touch principal</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            With a 2% minimum, most of your payment covers interest. Principal reduction is slow, which extends the loan
            for years.
          </p>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Example: $5,000 balance at 24% APR</h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-lg text-slate-700">
              Minimum payments can take 20+ years and cost thousands in interest. Adding $50/month can cut the payoff to a
              few years.
            </p>
          </div>
        </section>

        <section id="fix" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to shorten the payoff</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Add a fixed extra amount every month.</li>
            <li>• Use the avalanche method to attack the highest APR first.</li>
            <li>• Avoid new balances while you&apos;re paying down debt.</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default CreditCardMinimumPayments2026;

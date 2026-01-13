import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const AssetsVsLiabilitiesNetWorth2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Assets vs. Liabilities: How to Calculate Your True Net Worth",
      "description": "Learn the difference between assets and liabilities and how to calculate your true net worth step by step.",
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
      "datePublished": "2026-02-14",
      "dateModified": "2026-02-14",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/assets-vs-liabilities-true-net-worth"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-assets-liabilities';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-assets-liabilities');
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
          <span>💎 Net Worth</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Assets vs. Liabilities: How to Calculate Your True Net Worth
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Assets put money in your pocket. Liabilities take money out. Your true net worth is simply assets minus
          liabilities — a quick snapshot of your financial health.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Track your net worth in one place</h3>
              <p className="text-sm text-slate-600">
                Add assets and liabilities to see your real net worth instantly.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.NET_WORTH)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Net Worth Center →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('assets')} className="text-indigo-600 hover:underline">1. What counts as an asset?</button></li>
          <li><button onClick={() => scrollToSection('liabilities')} className="text-indigo-600 hover:underline">2. What counts as a liability?</button></li>
          <li><button onClick={() => scrollToSection('formula')} className="text-indigo-600 hover:underline">3. Net worth formula</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="assets" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Assets: things that build your wealth</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Assets include cash, investments, retirement accounts, home equity, and any item that can be sold or produces
            income.
          </p>
        </section>

        <section id="liabilities" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Liabilities: the drains on your balance sheet</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Liabilities are debts like credit cards, student loans, auto loans, and mortgages. Anything you owe counts as
            a liability.
          </p>
        </section>

        <section id="formula" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Net worth formula</h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-lg text-slate-700">
              <strong>Net Worth = Total Assets − Total Liabilities</strong>
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default AssetsVsLiabilitiesNetWorth2026;

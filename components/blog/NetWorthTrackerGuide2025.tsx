import React, { useEffect } from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const NetWorthTrackerGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Net Worth Tracker Guide 2025: How to Track Assets, Debts, and Real Wealth",
      "description": "A human-friendly guide to calculating net worth, tracking assets and liabilities, and using a net worth tracker to grow wealth with clarity.",
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
        "@id": "https://quantcurb.com/blog/net-worth-tracker-guide-2025"
      },
      "keywords": "net worth tracker, how to calculate net worth, net worth calculator, assets and liabilities list, track net worth monthly"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-net-worth-tracker';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-net-worth-tracker');
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
          <span>⏱️ 12 min read</span>
          <span>•</span>
          <span>💎 Wealth Tracking</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Net Worth Tracker Guide 2025: How to Track Assets, Debts, and Real Wealth
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          If you want real financial clarity, you need a simple answer to one question: <strong>what is my net worth</strong>?
          A net worth tracker turns that question into a monthly habit—so you can see progress, spot leaks, and make
          smarter decisions with confidence.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Track Your Net Worth Instantly</h3>
              <p className="text-sm text-slate-600">
                Use our net worth tracker to list assets, debts, and watch your balance sheet grow over time.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.NET_WORTH)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open Net Worth Tracker →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('what-is-net-worth')} className="text-indigo-600 hover:underline">1. What is net worth?</button></li>
          <li><button onClick={() => scrollToSection('assets-liabilities')} className="text-indigo-600 hover:underline">2. Assets vs liabilities (simple list)</button></li>
          <li><button onClick={() => scrollToSection('how-to-calculate')} className="text-indigo-600 hover:underline">3. How to calculate net worth step-by-step</button></li>
          <li><button onClick={() => scrollToSection('tracking-habit')} className="text-indigo-600 hover:underline">4. Monthly tracking habit that actually works</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">5. Common net worth tracker mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">6. Net worth tracker FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="what-is-net-worth" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is net worth?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Net worth</strong> is the value of everything you own minus everything you owe. It&apos;s not a score to
            impress people—it&apos;s a private dashboard that helps you make better financial choices.
          </p>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-slate-700">
              Net Worth = Total Assets − Total Liabilities
            </p>
          </div>
        </section>

        <section id="assets-liabilities" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Assets vs liabilities (simple list)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-emerald-200 rounded-xl p-6">
              <h3 className="font-bold text-emerald-700 text-lg mb-3">Assets</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Cash and checking/savings</li>
                <li>• Investments (stocks, ETFs, crypto)</li>
                <li>• Retirement accounts</li>
                <li>• Home equity and real estate</li>
                <li>• Vehicles and valuables (if meaningful)</li>
              </ul>
            </div>
            <div className="bg-white border border-rose-200 rounded-xl p-6">
              <h3 className="font-bold text-rose-700 text-lg mb-3">Liabilities</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Mortgage balance</li>
                <li>• Student loans</li>
                <li>• Credit card balances</li>
                <li>• Auto loans</li>
                <li>• Personal or business debt</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="how-to-calculate" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to calculate net worth step-by-step</h2>
          <ol className="space-y-4 text-slate-700">
            <li><strong>1) List every asset</strong> in today&apos;s dollars.</li>
            <li><strong>2) List every liability</strong> with current balances.</li>
            <li><strong>3) Subtract liabilities</strong> from assets.</li>
            <li><strong>4) Track monthly</strong> to spot trends.</li>
          </ol>
          <p className="text-lg text-slate-700 leading-relaxed">
            The secret to a useful net worth calculator is consistency. Even if a number is approximate, tracking it
            monthly shows the direction you&apos;re moving.
          </p>
        </section>

        <section id="tracking-habit" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Monthly tracking habit that actually works</h2>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
            <p className="text-indigo-900 font-semibold">Pick a single day each month—like the 1st—and update your numbers.</p>
            <p className="text-indigo-800 mt-2">
              It takes 10 minutes, keeps you honest, and makes every financial decision feel clearer.
            </p>
          </div>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common net worth tracker mistakes</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Tracking too often and getting discouraged by short-term moves.</li>
            <li>• Ignoring debt balances (net worth is assets minus liabilities).</li>
            <li>• Overvaluing illiquid assets without a realistic market price.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Net worth tracker FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">How often should I update my net worth?</h3>
              <p className="text-slate-700">Monthly is ideal for most people. Quarterly also works if you prefer less friction.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">Should I include my home value?</h3>
              <p className="text-slate-700">Yes—use a conservative estimate and subtract the remaining mortgage balance.</p>
            </div>
          </div>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Get Wealth Tracking Tips"
          description="Join the weekly newsletter for practical net worth, budgeting, and investing ideas that build real wealth."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.NET_WORTH)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">💎 Net Worth Tracker</h4>
            <p className="text-sm text-slate-600">Track assets and liabilities in one clean dashboard.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_BUDGETING)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📊 Budgeting Guide</h4>
            <p className="text-sm text-slate-600">Build a monthly plan that accelerates net worth growth.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetWorthTrackerGuide2025;

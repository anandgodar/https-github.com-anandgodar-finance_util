import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const DebtSnowballVsAvalanche2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Snowball vs. Avalanche: Which Debt Payoff Method Saves You More Money?",
      "description": "Compare the snowball and avalanche debt payoff methods and see which strategy saves the most interest.",
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
        "@id": "https://quantcurb.com/blog/snowball-vs-avalanche-debt-payoff"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-snowball-avalanche';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-snowball-avalanche');
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
          <span>💳 Debt Payoff</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Snowball vs. Avalanche: Which Debt Payoff Method Saves You More Money?
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          The avalanche method wins on math, but the snowball method wins on momentum. Learn how each strategy works and
          which one fits your personality and balance sheet.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Model both payoff strategies</h3>
              <p className="text-sm text-slate-600">
                Compare payoff dates and interest costs for snowball vs avalanche.
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
          <li><button onClick={() => scrollToSection('avalanche')} className="text-indigo-600 hover:underline">1. Avalanche method</button></li>
          <li><button onClick={() => scrollToSection('snowball')} className="text-indigo-600 hover:underline">2. Snowball method</button></li>
          <li><button onClick={() => scrollToSection('which')} className="text-indigo-600 hover:underline">3. Which one should you choose?</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="avalanche" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Avalanche: highest interest first</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The avalanche method targets the highest APR first, minimizing total interest paid. It&apos;s the mathematically
            optimal strategy.
          </p>
        </section>

        <section id="snowball" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Snowball: smallest balance first</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The snowball method knocks out small balances quickly for psychological wins. That momentum helps many people
            stay consistent long enough to finish.
          </p>
        </section>

        <section id="which" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Which method wins for you?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you&apos;re disciplined and want to minimize interest, go avalanche. If you need quick wins to stay motivated,
            snowball can be more sustainable.
          </p>
        </section>
      </article>
    </div>
  );
};

export default DebtSnowballVsAvalanche2026;

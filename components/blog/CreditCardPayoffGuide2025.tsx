import React, { useEffect } from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const CreditCardPayoffGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Credit Card Payoff Guide 2025: Avalanche vs Snowball Strategy",
      "description": "Learn how to pay off credit card debt faster using avalanche or snowball strategies and a payoff calculator.",
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
        "@id": "https://quantcurb.com/blog/credit-card-payoff-strategy-guide-2025"
      },
      "keywords": "credit card payoff calculator, avalanche vs snowball, pay off credit card debt fast, debt payoff plan"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-credit-card-payoff';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-credit-card-payoff');
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
          <span>✂️ Debt Payoff</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Credit Card Payoff Guide 2025: Avalanche vs Snowball Strategy
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Credit card interest is expensive. The two most popular payoff methods are the <strong>avalanche</strong> and the
          <strong> snowball</strong>. This guide shows how both work and when to use each.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Plan Your Payoff</h3>
              <p className="text-sm text-slate-600">Use our payoff calculator to compare avalanche vs snowball results.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.CREDIT_CARD_PAYOFF)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open Payoff Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('avalanche')} className="text-indigo-600 hover:underline">1. Avalanche method</button></li>
          <li><button onClick={() => scrollToSection('snowball')} className="text-indigo-600 hover:underline">2. Snowball method</button></li>
          <li><button onClick={() => scrollToSection('which-is-better')} className="text-indigo-600 hover:underline">3. Which method is better?</button></li>
          <li><button onClick={() => scrollToSection('extra-payments')} className="text-indigo-600 hover:underline">4. Extra payment tips</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="avalanche" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Avalanche method</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Pay minimums on all cards, then put extra money toward the highest interest rate first. It saves the most
            interest overall.
          </p>
        </section>

        <section id="snowball" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Snowball method</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Pay minimums on all cards, then attack the smallest balance first. This creates fast wins and motivation.
          </p>
        </section>

        <section id="which-is-better" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Which method is better?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Avalanche wins on math, snowball wins on psychology. If you need momentum, snowball can be more sustainable.
          </p>
        </section>

        <section id="extra-payments" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Extra payment tips</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Automate extra payments on payday.</li>
            <li>• Apply windfalls to your highest-interest balance.</li>
            <li>• Stop new interest by reducing usage.</li>
          </ul>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Debt-Free Strategies"
          description="Get weekly tips on paying off debt and building a stronger credit profile."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.CREDIT_CARD_PAYOFF)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">✂️ Credit Card Payoff Calculator</h4>
            <p className="text-sm text-slate-600">Compare avalanche vs snowball timelines.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_DEBT_OR_INVEST)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📊 Debt vs Invest Guide</h4>
            <p className="text-sm text-slate-600">Decide where extra cash should go.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreditCardPayoffGuide2025;

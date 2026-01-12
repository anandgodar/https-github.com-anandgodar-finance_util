import React, { useEffect } from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const CostOfLivingCalculatorGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Cost of Living Calculator Guide 2025: Compare Cities and Build a Realistic Budget",
      "description": "Learn how to use a cost of living calculator to compare cities, plan your budget, and avoid relocation surprises.",
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
        "@id": "https://quantcurb.com/blog/cost-of-living-calculator-guide-2025"
      },
      "keywords": "cost of living calculator, compare cost of living by city, cost of living index, moving budget calculator"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-cost-of-living';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-cost-of-living');
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
          <span>⏱️ 10 min read</span>
          <span>•</span>
          <span>🌆 Lifestyle</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Cost of Living Calculator Guide 2025: Compare Cities and Build a Realistic Budget
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          The headline salary isn&apos;t the whole story. What matters is what that salary buys in your city. A
          <strong> cost of living calculator</strong> helps you compare locations and avoid expensive surprises.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Compare Cities in Seconds</h3>
              <p className="text-sm text-slate-600">Use our cost of living calculator to benchmark your budget.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.LIVING_COST)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open Cost of Living Tool →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('what-is-col')} className="text-indigo-600 hover:underline">1. What is cost of living?</button></li>
          <li><button onClick={() => scrollToSection('biggest-costs')} className="text-indigo-600 hover:underline">2. Biggest cost categories</button></li>
          <li><button onClick={() => scrollToSection('compare-cities')} className="text-indigo-600 hover:underline">3. How to compare cities</button></li>
          <li><button onClick={() => scrollToSection('budget-tips')} className="text-indigo-600 hover:underline">4. Budget tips before you move</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="what-is-col" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is cost of living?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Cost of living is the average cost to maintain a standard lifestyle in a city—housing, food, transportation,
            taxes, and healthcare.
          </p>
        </section>

        <section id="biggest-costs" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Biggest cost categories</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Housing and utilities</li>
            <li>• Transportation and commuting</li>
            <li>• Groceries and dining</li>
            <li>• Taxes and insurance</li>
          </ul>
        </section>

        <section id="compare-cities" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to compare cities</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Use a cost of living index to compare baseline prices, then adjust for your real lifestyle. If you spend more
            on housing or childcare, weigh those categories more heavily.
          </p>
        </section>

        <section id="budget-tips" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Budget tips before you move</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Build a three-month buffer for moving costs.</li>
            <li>• Compare after-tax pay, not just salary.</li>
            <li>• Stress-test your budget for rent increases.</li>
          </ul>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Smarter Budgeting Tips"
          description="Weekly money tips for budgeting, housing costs, and smart lifestyle upgrades."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.LIVING_COST)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🌆 Cost of Living Calculator</h4>
            <p className="text-sm text-slate-600">Compare monthly budgets between cities.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_BUDGETING)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📊 Budgeting Guide</h4>
            <p className="text-sm text-slate-600">Build a spending plan that adapts to any city.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CostOfLivingCalculatorGuide2025;

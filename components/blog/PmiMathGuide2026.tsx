import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const PmiMathGuide2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Mathematics of PMI: How to Get Rid of It Faster",
      "description": "Understand PMI math, the 20% equity rule, and strategies to remove private mortgage insurance sooner.",
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
        "@id": "https://quantcurb.com/blog/pmi-math-how-to-remove-faster"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-pmi';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-pmi');
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
          <span>📉 Mortgages</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The Mathematics of PMI: How to Get Rid of It Faster
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          PMI is the monthly fee for putting less than 20% down. The math is simple: increase equity faster and PMI goes
          away sooner. Here&apos;s how the <strong>loan-to-value ratio</strong> drives everything.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Check your LTV and PMI drop-off date</h3>
              <p className="text-sm text-slate-600">
                Estimate when you&apos;ll reach 80% LTV and how extra payments speed it up.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Mortgage Pro →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('pmi')} className="text-indigo-600 hover:underline">1. What PMI is</button></li>
          <li><button onClick={() => scrollToSection('ltv')} className="text-indigo-600 hover:underline">2. LTV math and the 80% rule</button></li>
          <li><button onClick={() => scrollToSection('strategies')} className="text-indigo-600 hover:underline">3. Three ways to drop PMI faster</button></li>
          <li><button onClick={() => scrollToSection('timeline')} className="text-indigo-600 hover:underline">4. Example timeline</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="pmi" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">PMI is the cost of a smaller down payment</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Private mortgage insurance protects the lender, not you. It typically costs 0.3% to 1.5% of the loan per
            year, paid monthly until you reach enough equity.
          </p>
        </section>

        <section id="ltv" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The LTV rule that turns PMI off</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The key threshold is 80% loan-to-value (LTV). Once your loan balance is 80% of the home&apos;s value, you can
            request PMI removal. It must drop at 78% under most conventional loans.
          </p>
        </section>

        <section id="strategies" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Three ways to eliminate PMI faster</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Make extra principal payments monthly.</li>
            <li>• Refinance into a new loan with 20% equity.</li>
            <li>• Request a new appraisal if your home value rises.</li>
          </ul>
        </section>

        <section id="timeline" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Example: shaving PMI by 18 months</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            On a $400k home with 10% down, paying $150 extra per month can move your PMI end date up by more than a year.
            That&apos;s real cash flow back in your budget.
          </p>
        </section>
      </article>
    </div>
  );
};

export default PmiMathGuide2026;

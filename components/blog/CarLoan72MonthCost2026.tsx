import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const CarLoan72MonthCost2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The True Cost of a 72-Month Car Loan",
      "description": "Learn how long-term auto loans inflate total interest and keep you underwater longer.",
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
        "@id": "https://quantcurb.com/blog/72-month-car-loan-true-cost"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-72month';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-72month');
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
          <span>⏱️ 8 min read</span>
          <span>•</span>
          <span>🚗 Auto Loans</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The True Cost of a 72-Month Car Loan
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          A lower monthly payment hides higher total interest. Long-term car loans keep you in debt longer and can leave
          you underwater for years.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate total interest on your car loan</h3>
              <p className="text-sm text-slate-600">
                Compare 60 vs 72 months and see the true cost of stretching the term.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.EMI_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use EMI Accelerator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('why')} className="text-indigo-600 hover:underline">1. Why 72-month loans cost more</button></li>
          <li><button onClick={() => scrollToSection('interest')} className="text-indigo-600 hover:underline">2. Interest math example</button></li>
          <li><button onClick={() => scrollToSection('alternatives')} className="text-indigo-600 hover:underline">3. Smarter alternatives</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="why" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Longer terms mean more interest</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Stretching to 72 months lowers the monthly bill but increases total interest and slows equity build-up in the
            car.
          </p>
        </section>

        <section id="interest" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Interest math example</h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-lg text-slate-700">
              A $35,000 loan at 7%: 60 months ≈ $6,600 interest, 72 months ≈ $7,900 interest.
            </p>
          </div>
        </section>

        <section id="alternatives" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Smarter alternatives</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Put more down to shorten the term.</li>
            <li>• Choose a cheaper vehicle to keep payments manageable.</li>
            <li>• Refinance early if rates drop.</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default CarLoan72MonthCost2026;

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const MovingToFloridaSunshineTax2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Moving to Florida? The \"Sunshine Tax\" Savings Explained",
      "description": "Considering a move from New York or New Jersey to Florida? See how state tax savings change your take-home pay and budget in 2025.",
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
        "@id": "https://quantcurb.com/blog/moving-to-florida-sunshine-tax-savings"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-florida';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-florida');
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
          <span>🌞 Moving & Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Moving to Florida? The &quot;Sunshine Tax&quot; Savings Explained
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Florida&apos;s no-income-tax status is a magnet for New York and New Jersey earners. But the real savings depend on
          your salary, housing costs, and lifestyle. Here&apos;s how to estimate the <strong>Sunshine State tax savings</strong>
          and avoid surprises.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Simulate your Florida paycheck</h3>
              <p className="text-sm text-slate-600">
                Compare your current state and Florida to see your exact net pay difference.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.SALARY_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Salary Estimator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('tax-gap')} className="text-indigo-600 hover:underline">1. The state tax gap</button></li>
          <li><button onClick={() => scrollToSection('ny-nj')} className="text-indigo-600 hover:underline">2. New York & New Jersey comparisons</button></li>
          <li><button onClick={() => scrollToSection('costs')} className="text-indigo-600 hover:underline">3. Costs that eat the savings</button></li>
          <li><button onClick={() => scrollToSection('bottom-line')} className="text-indigo-600 hover:underline">4. Bottom line</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="tax-gap" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Florida&apos;s state income tax advantage</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Florida has no state income tax. That means a high-income household can keep thousands more per year compared
            to New York or New Jersey. The higher your income, the bigger the gap.
          </p>
        </section>

        <section id="ny-nj" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">New York and New Jersey take-home examples</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            On a $150k salary, moving from NYC or North Jersey to Miami or Tampa can mean <strong>$8k-$12k</strong> more in
            annual take-home pay. Local taxes and deductions still apply, but the state income tax line disappears.
          </p>
        </section>

        <section id="costs" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Costs that can eat the savings</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Home insurance premiums are higher in many coastal areas.</li>
            <li>• Property taxes vary widely by county.</li>
            <li>• Summer utilities and hurricane prep can add new budget items.</li>
          </ul>
        </section>

        <section id="bottom-line" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Bottom line: is the Sunshine Tax real?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Yes, the tax savings are real — but so are the costs. A Florida move is usually a net win for higher incomes
            and remote workers who can choose a lower-cost city. Run your numbers before you pack.
          </p>
        </section>
      </article>
    </div>
  );
};

export default MovingToFloridaSunshineTax2025;

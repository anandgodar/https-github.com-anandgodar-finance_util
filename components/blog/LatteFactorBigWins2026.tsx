import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const LatteFactorBigWins2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The " + "\"Latte Factor\"" + " vs. Big Wins: What Actually Builds Wealth?",
      "description": "Small expenses add up, but housing, cars, and taxes move the needle far more. Learn where to focus.",
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
        "@id": "https://quantcurb.com/blog/latte-factor-vs-big-wins-wealth"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-latte-factor';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-latte-factor');
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
          <span>☕ Wealth Building</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The &quot;Latte Factor&quot; vs. Big Wins: What Actually Builds Wealth?
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Coffee habits matter, but your biggest wins come from housing, vehicles, and tax strategy. Focus on the big
          levers and the small ones become easier to handle.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Audit your big 3 expenses</h3>
              <p className="text-sm text-slate-600">
                See where housing, transport, and taxes are squeezing your budget.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.DASHBOARD)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open Dashboard →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('latte')} className="text-indigo-600 hover:underline">1. The latte factor myth</button></li>
          <li><button onClick={() => scrollToSection('big-wins')} className="text-indigo-600 hover:underline">2. The big wins that matter</button></li>
          <li><button onClick={() => scrollToSection('balance')} className="text-indigo-600 hover:underline">3. Balancing both</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="latte" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Small habits add up, but they aren&apos;t the main driver</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Cutting $5 coffee helps, but it won&apos;t fix a high rent or an oversized car payment. The big bills dominate your
            savings rate.
          </p>
        </section>

        <section id="big-wins" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Focus on the big three</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Housing: rent, mortgage, and utilities.</li>
            <li>• Transportation: car payments, insurance, and fuel.</li>
            <li>• Taxes: optimize deductions and retirement contributions.</li>
          </ul>
        </section>

        <section id="balance" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Balance big wins with small habits</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Nail the big wins first, then automate small savings. That combination builds wealth faster than any single
            tactic.
          </p>
        </section>
      </article>
    </div>
  );
};

export default LatteFactorBigWins2026;

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const LeanVsFatFire2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "LeanFIRE vs. FatFIRE: Which Lifestyle Can You Afford?",
      "description": "Compare LeanFIRE and FatFIRE spending targets and see how lifestyle costs change your retirement number.",
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
        "@id": "https://quantcurb.com/blog/leanfire-vs-fatfire-lifestyle-budget"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-lean-fat';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-lean-fat');
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
          <span>💎 Retirement Lifestyle</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          LeanFIRE vs. FatFIRE: Which Lifestyle Can You Afford?
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          LeanFIRE aims for a minimalist retirement, while FatFIRE aims for a bigger lifestyle. The spending gap between
          $40k and $100k per year dramatically changes the target portfolio you need.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Model both scenarios</h3>
              <p className="text-sm text-slate-600">
                Compare LeanFIRE and FatFIRE spending levels side by side.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.RETIREMENT_OPTIMIZER)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Retirement Optimizer →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('leanfire')} className="text-indigo-600 hover:underline">1. LeanFIRE profile</button></li>
          <li><button onClick={() => scrollToSection('fatfire')} className="text-indigo-600 hover:underline">2. FatFIRE profile</button></li>
          <li><button onClick={() => scrollToSection('math')} className="text-indigo-600 hover:underline">3. Portfolio math</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="leanfire" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">LeanFIRE: $40k per year lifestyle</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            LeanFIRE focuses on low housing costs, minimal travel, and simple living. At $40k/year, the 25x rule suggests
            a $1.0M portfolio.
          </p>
        </section>

        <section id="fatfire" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">FatFIRE: $100k per year lifestyle</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            FatFIRE assumes more travel, higher housing, and lifestyle upgrades. At $100k/year, the 25x rule points to a
            $2.5M portfolio.
          </p>
        </section>

        <section id="math" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why the gap matters</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A $60k difference in annual spending equals a $1.5M difference in your FI target. That&apos;s why lifestyle choices
            matter as much as savings rate.
          </p>
        </section>
      </article>
    </div>
  );
};

export default LeanVsFatFire2026;

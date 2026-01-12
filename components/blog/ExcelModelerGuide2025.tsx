import React, { useEffect } from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const ExcelModelerGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "DCF Valuation Guide 2025: Build a Simple Model Without Excel",
      "description": "Learn the core steps of DCF valuation, WACC, and terminal value using a guided DCF modeler.",
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
        "@id": "https://quantcurb.com/blog/dcf-valuation-modeling-guide-2025"
      },
      "keywords": "dcf valuation guide, wacc calculator, terminal value formula, discounted cash flow model"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-excel-modeler';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-excel-modeler');
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
          <span>📁 Valuation</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          DCF Valuation Guide 2025: Build a Simple Model Without Excel
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Discounted cash flow (DCF) models are the backbone of valuation. This guide simplifies the process so you can
          estimate intrinsic value without spreadsheets.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Build a DCF in Minutes</h3>
              <p className="text-sm text-slate-600">Use our Excel Power Modeler for instant valuation scenarios.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.EXCEL_MODELER)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open Excel Modeler →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('dcf-basics')} className="text-indigo-600 hover:underline">1. DCF basics</button></li>
          <li><button onClick={() => scrollToSection('cash-flows')} className="text-indigo-600 hover:underline">2. Projecting cash flows</button></li>
          <li><button onClick={() => scrollToSection('wacc')} className="text-indigo-600 hover:underline">3. Choosing WACC</button></li>
          <li><button onClick={() => scrollToSection('terminal')} className="text-indigo-600 hover:underline">4. Terminal value</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="dcf-basics" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">DCF basics</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A DCF estimates what a business is worth today based on its future cash flows, discounted back to present value.
          </p>
        </section>

        <section id="cash-flows" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Projecting cash flows</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Start with revenue assumptions, model margins, and translate to free cash flow. Keep assumptions realistic.
          </p>
        </section>

        <section id="wacc" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Choosing WACC</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            WACC reflects the risk of the business. Higher risk = higher discount rate = lower valuation.
          </p>
        </section>

        <section id="terminal" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Terminal value</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Terminal value captures the company&apos;s value beyond the forecast window. Be conservative with growth rates.
          </p>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Valuation Insights"
          description="Get weekly valuation and finance insights that make complex models practical."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.EXCEL_MODELER)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📁 Excel Power Modeler</h4>
            <p className="text-sm text-slate-600">Model DCF valuations without spreadsheets.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📈 Investment Calculator</h4>
            <p className="text-sm text-slate-600">Project long-term growth scenarios.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExcelModelerGuide2025;

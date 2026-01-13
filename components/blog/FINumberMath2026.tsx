'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const FINumberMath2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "What is Your " + "\"FI Number\"" + "? The Math Behind Financial Independence",
      "description": "Learn the 25x annual expenses rule and how to calculate your FI number for financial independence.",
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
        "@id": "https://quantcurb.com/blog/fi-number-math-financial-independence"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-fi-number';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-fi-number');
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
          <span>🔥 Financial Independence</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          What is Your &quot;FI Number&quot;? The Math Behind Financial Independence
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Your <strong>FI number</strong> is the portfolio size that can support your annual spending. The classic rule is
          25x your expenses — a simple formula that turns your lifestyle into a target number.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Find your freedom number</h3>
              <p className="text-sm text-slate-600">
                Use the FIRE Planner to calculate your exact FI target based on your expenses.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.FIRE_PLANNER)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use FIRE Planner →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('fi-number')} className="text-indigo-600 hover:underline">1. The FI number formula</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">2. Example calculation</button></li>
          <li><button onClick={() => scrollToSection('adjust')} className="text-indigo-600 hover:underline">3. Adjusting for taxes and inflation</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="fi-number" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The 25x rule in plain English</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Multiply your annual spending by 25. If you spend $50,000 per year, your FI number is about $1.25 million.
            That assumes a 4% withdrawal rate and a diversified portfolio.
          </p>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Example: $60,000 yearly expenses</h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-lg text-slate-700">
              $60,000 × 25 = <strong>$1,500,000</strong> FI number.
            </p>
          </div>
        </section>

        <section id="adjust" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Adjusting for taxes, inflation, and buffers</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Some people target 28x to 30x expenses to account for taxes and inflation. The key is using realistic spending
            and building a buffer for surprises.
          </p>
        </section>
      </article>
    </div>
  );
};

export default FINumberMath2026;

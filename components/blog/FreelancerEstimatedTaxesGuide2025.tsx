'use client';

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const FreelancerEstimatedTaxesGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Freelancer’s Guide to Estimated Taxes: How Much Should You Set Aside?",
      "description": "A 1099-friendly guide to estimated taxes. Learn safe harbor rules, how much to save, and how to calculate quarterly payments in 2025.",
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
        "@id": "https://quantcurb.com/blog/freelancer-estimated-taxes-guide-2025"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-freelance-estimated';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-freelance-estimated');
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
          <span>⏱️ 12 min read</span>
          <span>•</span>
          <span>🧑‍💻 Freelancing</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The Freelancer’s Guide to Estimated Taxes: How Much Should You Set Aside?
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          If you&apos;re 1099 or self-employed, nobody withholds taxes for you. That means you&apos;re responsible for estimated
          taxes. This guide helps you decide <strong>how much to set aside for quarterly payments</strong> and avoid IRS
          surprises.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate your quarterly taxes</h3>
              <p className="text-sm text-slate-600">
                Use Freelance Hub to estimate self-employment tax, income tax, and quarterly payments.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Freelance Hub →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('why-estimated')} className="text-indigo-600 hover:underline">1. Why estimated taxes matter</button></li>
          <li><button onClick={() => scrollToSection('how-much')} className="text-indigo-600 hover:underline">2. How much should you save?</button></li>
          <li><button onClick={() => scrollToSection('safe-harbor')} className="text-indigo-600 hover:underline">3. Safe harbor rules</button></li>
          <li><button onClick={() => scrollToSection('workflow')} className="text-indigo-600 hover:underline">4. A simple quarterly workflow</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="why-estimated" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why estimated taxes matter for freelancers</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            As a freelancer, you pay both income tax and self-employment tax. The IRS expects you to pay quarterly. If you
            wait until April, you may owe penalties.
          </p>
        </section>

        <section id="how-much" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How much should you set aside?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A simple starting rule is to save <strong>25% to 30%</strong> of net profit. High earners or high-tax states may
            need 35%+. Adjust for deductions, retirement contributions, and healthcare premiums.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-lg text-slate-700">
              Example: $8,000 monthly profit × 30% = $2,400 set aside for taxes.
            </p>
          </div>
        </section>

        <section id="safe-harbor" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Safe harbor rules to avoid penalties</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Pay 90% of your current-year tax, or</li>
            <li>• Pay 100% of last year&apos;s tax (110% if your AGI is $150k+).</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you meet safe harbor, you can avoid penalties even if you owe more at filing time.
          </p>
        </section>

        <section id="workflow" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">A simple quarterly workflow</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Set aside a tax percentage after each payment.</li>
            <li>• Track net profit monthly to update your estimate.</li>
            <li>• Make quarterly payments in April, June, September, and January.</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default FreelancerEstimatedTaxesGuide2025;

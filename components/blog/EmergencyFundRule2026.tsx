import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const EmergencyFundRule2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>🛡️ Emergency Fund</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          How Much Cash Should You Keep? The 6-Month Emergency Fund Rule
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          The 6-month rule is a simple way to protect yourself from layoffs and income shocks. Here&apos;s how to size the
          cash buffer that actually keeps you safe.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate your 6-month survival number</h3>
              <p className="text-sm text-slate-600">
                Know exactly how much cash you need for a true safety net.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.EMERGENCY_FUND)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Emergency Guard →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('rule')} className="text-indigo-600 hover:underline">1. The 6-month rule</button></li>
          <li><button onClick={() => scrollToSection('expenses')} className="text-indigo-600 hover:underline">2. What counts as expenses?</button></li>
          <li><button onClick={() => scrollToSection('scale')} className="text-indigo-600 hover:underline">3. When to scale up or down</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="rule" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The rule in one line</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Multiply your essential monthly expenses by six. That&apos;s the cash buffer most households need for a layoff or
            medical surprise.
          </p>
        </section>

        <section id="expenses" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Count only the essentials</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Include rent, utilities, groceries, insurance, and minimum debt payments. Skip discretionary spending like
            travel or dining out.
          </p>
        </section>

        <section id="scale" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When to scale up or down</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Freelancers or single-income households may want 9-12 months. Dual-income households with stable jobs might
            keep 3-4 months.
          </p>
        </section>
      </article>
    </div>
  );
};

export default EmergencyFundRule2026;

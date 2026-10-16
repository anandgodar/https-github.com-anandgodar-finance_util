import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const CoastFireGuide2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>🌊 Coast FIRE</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Coast FIRE: How to &quot;Retire&quot; at 30 Without Stopping Work Completely
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Coast FIRE means you invest aggressively early, then let compounding carry you to retirement while you work in
          lower-stress roles. You stop saving, but your portfolio keeps growing.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate your Coast FIRE age</h3>
              <p className="text-sm text-slate-600">
                Use the Wealth Projector to see when your investments can coast.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Wealth Projector →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('definition')} className="text-indigo-600 hover:underline">1. What Coast FIRE means</button></li>
          <li><button onClick={() => scrollToSection('math')} className="text-indigo-600 hover:underline">2. The math behind coasting</button></li>
          <li><button onClick={() => scrollToSection('timeline')} className="text-indigo-600 hover:underline">3. Example timeline</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="definition" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Coast FIRE is about timing</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            You build enough early so compound growth can take you to your full FI number without more contributions.
          </p>
        </section>

        <section id="math" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How the math works</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The earlier you invest, the more time your portfolio has to grow. That&apos;s why coast targets drop sharply if
            you start in your 20s instead of your 30s.
          </p>
        </section>

        <section id="timeline" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Example timeline</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you need $1.5M by age 60, investing $200k by age 30 could be enough to coast with moderate growth. The
            exact number depends on your return assumptions.
          </p>
        </section>
      </article>
    </div>
  );
};

export default CoastFireGuide2026;

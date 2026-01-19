import React from 'react';
import { ToolType } from '../../types';

interface GreeksGuideProps {
  setActiveTool: (tool: ToolType) => void;
}

const GreeksGuide: React.FC<GreeksGuideProps> = ({ setActiveTool }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <button
            onClick={() => setActiveTool(ToolType.VALUATION_ACADEMY)}
            className="text-emerald-300 hover:text-white font-semibold text-sm mb-4"
          >
            ← Back to Academy
          </button>
          <h1 className="text-5xl font-black mb-6">
            Options Greeks: Delta, Theta, Vega, Gamma for Beginners
          </h1>
          <div className="flex gap-6 text-sm text-emerald-200">
            <span>📚 18 min read</span>
            <span>📊 Beginner</span>
            <span>Updated: January 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-emerald-600 text-white rounded-2xl p-6 mb-12 shadow-xl flex items-center justify-between">
          <div>
            <p className="font-black text-xl mb-2">Visualize the Greeks in Real-Time</p>
            <p className="text-emerald-200">
              Our Options Strategy Visualizer shows Delta, Theta, Vega, Gamma for any strategy
            </p>
          </div>
          <button
            onClick={() => setActiveTool(ToolType.OPTIONS_STRATEGY_VISUALIZER)}
            className="bg-white text-emerald-900 px-6 py-3 rounded-xl font-black hover:bg-emerald-50 transition-all whitespace-nowrap"
          >
            Open Visualizer →
          </button>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">What Are the Greeks?</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Greeks are <strong>sensitivity measures</strong> that tell you how an option's price
            changes in response to different factors. Think of them as the "dashboard gauges" for your
            options position.
          </p>
          <div className="bg-slate-100 border-l-4 border-emerald-600 p-6 rounded-r-xl my-6">
            <p className="text-lg font-bold text-slate-900">The Greeks answer four critical questions:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-slate-700">
              <li><strong>Delta:</strong> How much will the option price change if the stock moves $1?</li>
              <li><strong>Theta:</strong> How much value do I lose every day due to time decay?</li>
              <li><strong>Vega:</strong> How much will the option price change if volatility increases 1%?</li>
              <li><strong>Gamma:</strong> How fast is my Delta changing as the stock moves?</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-black mb-4">Visualize the Greeks in Action</h2>
            <p className="text-xl text-emerald-100 mb-8">
              Our Options Strategy Visualizer calculates Delta, Theta, Vega, Gamma in real-time for any strategy
            </p>
            <button
              onClick={() => setActiveTool(ToolType.OPTIONS_STRATEGY_VISUALIZER)}
              className="bg-white text-emerald-900 px-10 py-5 rounded-xl font-black text-xl hover:bg-emerald-50 transition-all shadow-2xl"
            >
              Launch Visualizer →
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black text-slate-900 mb-6">Continue Learning</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => setActiveTool(ToolType.ACADEMY_IRON_CONDOR)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-emerald-500"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-black text-slate-900 mb-2">Iron Condor Guide</h3>
              <p className="text-slate-600 text-sm">Master neutral income strategies</p>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.ACADEMY_DCF_GUIDE)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-emerald-500"
            >
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-black text-slate-900 mb-2">DCF Valuation</h3>
              <p className="text-slate-600 text-sm">Learn stock valuation fundamentals</p>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.VALUATION_ACADEMY)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-emerald-500"
            >
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-black text-slate-900 mb-2">All Guides</h3>
              <p className="text-slate-600 text-sm">Back to Academy</p>
            </button>
          </div>
        </section>
      </article>
    </div>
  );
};

export default GreeksGuide;

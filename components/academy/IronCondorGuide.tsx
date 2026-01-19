import React from 'react';
import { ToolType } from '../../types';

interface IronCondorGuideProps {
  setActiveTool: (tool: ToolType) => void;
}

const IronCondorGuide: React.FC<IronCondorGuideProps> = ({ setActiveTool }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <button
            onClick={() => setActiveTool(ToolType.VALUATION_ACADEMY)}
            className="text-purple-300 hover:text-white font-semibold text-sm mb-4"
          >
            ← Back to Academy
          </button>
          <h1 className="text-5xl font-black mb-6">
            Iron Condor Strategy: When and How to Use It
          </h1>
          <div className="flex gap-6 text-sm text-purple-200">
            <span>📚 14 min read</span>
            <span>📊 Intermediate</span>
            <span>Updated: January 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-purple-600 text-white rounded-2xl p-6 mb-12 shadow-xl flex items-center justify-between">
          <div>
            <p className="font-black text-xl mb-2">Build Your First Iron Condor</p>
            <p className="text-purple-200">Visualize profit/loss, breakevens, and Greeks in real-time</p>
          </div>
          <button
            onClick={() => setActiveTool(ToolType.OPTIONS_STRATEGY_VISUALIZER)}
            className="bg-white text-purple-900 px-6 py-3 rounded-xl font-black hover:bg-purple-50 transition-all whitespace-nowrap"
          >
            Open Visualizer →
          </button>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">What is an Iron Condor?</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            An Iron Condor is a <strong>neutral income strategy</strong> that profits when the underlying
            stock stays within a range. It's one of the most popular strategies for generating monthly
            income from options.
          </p>
          <div className="bg-slate-100 border-l-4 border-purple-600 p-6 rounded-r-xl my-6">
            <p className="text-lg font-bold text-slate-900 mb-2">The Setup (4-Leg Strategy):</p>
            <ul className="list-decimal list-inside space-y-2 text-slate-700">
              <li><strong>Sell 1 OTM Put</strong> (collect premium)</li>
              <li><strong>Buy 1 Further OTM Put</strong> (protection)</li>
              <li><strong>Sell 1 OTM Call</strong> (collect premium)</li>
              <li><strong>Buy 1 Further OTM Call</strong> (protection)</li>
            </ul>
            <p className="text-slate-600 mt-4 text-sm">
              Result: You collect net premium upfront and profit if the stock stays between the two sold strikes.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-black mb-4">Try Building Your First Iron Condor</h2>
            <p className="text-xl text-purple-100 mb-8">
              Our visualizer shows real-time P/L, breakevens, Greeks, and risk metrics
            </p>
            <button
              onClick={() => setActiveTool(ToolType.OPTIONS_STRATEGY_VISUALIZER)}
              className="bg-white text-purple-900 px-10 py-5 rounded-xl font-black text-xl hover:bg-purple-50 transition-all shadow-2xl"
            >
              Launch Options Visualizer →
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black text-slate-900 mb-6">Continue Learning</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => setActiveTool(ToolType.ACADEMY_GREEKS_GUIDE)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-purple-500"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-black text-slate-900 mb-2">Options Greeks</h3>
              <p className="text-slate-600 text-sm">Master Delta, Theta, Vega, Gamma</p>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.ACADEMY_DCF_GUIDE)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-purple-500"
            >
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-black text-slate-900 mb-2">DCF Valuation</h3>
              <p className="text-slate-600 text-sm">Stock valuation fundamentals</p>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.VALUATION_ACADEMY)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-purple-500"
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

export default IronCondorGuide;

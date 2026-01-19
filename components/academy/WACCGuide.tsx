import React from 'react';
import { ToolType } from '../../types';

interface WACCGuideProps {
  setActiveTool: (tool: ToolType) => void;
}

const WACCGuide: React.FC<WACCGuideProps> = ({ setActiveTool }) => {
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
            WACC Explained: The Cost of Capital Demystified
          </h1>
          <div className="flex gap-6 text-sm text-purple-200">
            <span>📚 12 min read</span>
            <span>📊 Intermediate</span>
            <span>Updated: January 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-purple-600 text-white rounded-2xl p-6 mb-12 shadow-xl flex items-center justify-between">
          <div>
            <p className="font-black text-xl mb-2">Calculate WACC in 60 Seconds</p>
            <p className="text-purple-200">Our WACC Wizard includes CAPM calculator and one-click DCF integration</p>
          </div>
          <button
            onClick={() => setActiveTool(ToolType.EXCEL_MODELER)}
            className="bg-white text-purple-900 px-6 py-3 rounded-xl font-black hover:bg-purple-50 transition-all whitespace-nowrap"
          >
            Open WACC Wizard →
          </button>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">What is WACC?</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            WACC (Weighted Average Cost of Capital) is the <strong>average rate a company pays to
            finance its assets</strong>. It's the blended cost of both equity and debt, weighted by
            how much of each the company uses.
          </p>
          <div className="bg-slate-100 border-l-4 border-purple-600 p-6 rounded-r-xl my-6">
            <p className="text-lg font-bold text-slate-900 italic">
              "WACC is the minimum return a company must earn on its investments to satisfy all its
              investors - both shareholders and creditors."
            </p>
          </div>
          <p className="text-slate-700">
            In DCF valuation, WACC is your <strong>discount rate</strong> - the hurdle that future
            cash flows must clear to create value today.
          </p>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-black mb-4">Calculate WACC in 60 Seconds</h2>
            <p className="text-xl text-purple-100 mb-8">
              Our WACC Wizard walks you through CAPM, capital structure, and one-click DCF integration
            </p>
            <button
              onClick={() => setActiveTool(ToolType.EXCEL_MODELER)}
              className="bg-white text-purple-900 px-10 py-5 rounded-xl font-black text-xl hover:bg-purple-50 transition-all shadow-2xl"
            >
              Launch WACC Wizard →
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black text-slate-900 mb-6">Continue Learning</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => setActiveTool(ToolType.ACADEMY_DCF_GUIDE)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-purple-500"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-black text-slate-900 mb-2">DCF Valuation Guide</h3>
              <p className="text-slate-600 text-sm">Complete stock valuation walkthrough</p>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.ACADEMY_GREEKS_GUIDE)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-purple-500"
            >
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-black text-slate-900 mb-2">Options Greeks</h3>
              <p className="text-slate-600 text-sm">Master Delta, Theta, Vega, Gamma</p>
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

export default WACCGuide;

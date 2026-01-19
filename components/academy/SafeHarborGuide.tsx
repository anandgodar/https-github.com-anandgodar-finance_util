import React from 'react';
import { ToolType } from '../../types';

interface SafeHarborGuideProps {
  setActiveTool: (tool: ToolType) => void;
}

const SafeHarborGuide: React.FC<SafeHarborGuideProps> = ({ setActiveTool }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-gradient-to-br from-orange-900 via-red-900 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <button
            onClick={() => setActiveTool(ToolType.VALUATION_ACADEMY)}
            className="text-orange-300 hover:text-white font-semibold text-sm mb-4"
          >
            ← Back to Academy
          </button>
          <h1 className="text-5xl font-black mb-6">
            Safe Harbor Rules: Never Pay IRS Penalties Again
          </h1>
          <div className="flex gap-6 text-sm text-orange-200">
            <span>📚 10 min read</span>
            <span>📊 Beginner</span>
            <span>Updated: January 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-orange-600 text-white rounded-2xl p-6 mb-12 shadow-xl flex items-center justify-between">
          <div>
            <p className="font-black text-xl mb-2">Calculate Your Safe Harbor Amount</p>
            <p className="text-orange-200">
              Plus download a calendar with automatic reminders for all 4 quarterly deadlines
            </p>
          </div>
          <button
            onClick={() => setActiveTool(ToolType.QUARTERLY_TAX)}
            className="bg-white text-orange-900 px-6 py-3 rounded-xl font-black hover:bg-orange-50 transition-all whitespace-nowrap"
          >
            Open Calculator →
          </button>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">What is Safe Harbor?</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Safe Harbor is an <strong>IRS provision that protects you from underpayment penalties</strong> -
            even if you end up owing more tax at year-end. It's a "minimum payment guarantee" that keeps you
            penalty-free.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl my-6">
            <p className="text-lg font-bold text-emerald-900 mb-2">The Core Rule:</p>
            <p className="text-slate-700">
              If you pay <strong>at least</strong> one of these amounts in quarterly estimated taxes,
              the IRS won't penalize you:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-slate-700">
              <li><strong>100% of prior year tax</strong> (110% if AGI &gt; $150K)</li>
              <li><strong>90% of current year tax</strong></li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-black mb-4">Calculate Your Safe Harbor Amount Now</h2>
            <p className="text-xl text-orange-100 mb-8">
              Get your exact quarterly payment + download a calendar with 7-day advance reminders
            </p>
            <button
              onClick={() => setActiveTool(ToolType.QUARTERLY_TAX)}
              className="bg-white text-orange-900 px-10 py-5 rounded-xl font-black text-xl hover:bg-orange-50 transition-all shadow-2xl"
            >
              Open Safe Harbor Calculator →
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black text-slate-900 mb-6">Continue Learning</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => setActiveTool(ToolType.ACADEMY_STATE_TAX_COMPARISON)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-orange-500"
            >
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="font-black text-slate-900 mb-2">State Tax Comparison</h3>
              <p className="text-slate-600 text-sm">CA vs TX take-home analysis</p>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.ACADEMY_DCF_GUIDE)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-orange-500"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-black text-slate-900 mb-2">DCF Valuation</h3>
              <p className="text-slate-600 text-sm">Stock valuation fundamentals</p>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.VALUATION_ACADEMY)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-orange-500"
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

export default SafeHarborGuide;

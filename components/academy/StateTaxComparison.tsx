import React from 'react';
import { ToolType } from '../../types';

interface StateTaxComparisonProps {
  setActiveTool: (tool: ToolType) => void;
}

const StateTaxComparison: React.FC<StateTaxComparisonProps> = ({ setActiveTool }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-gradient-to-br from-blue-900 via-cyan-900 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <button
            onClick={() => setActiveTool(ToolType.VALUATION_ACADEMY)}
            className="text-blue-300 hover:text-white font-semibold text-sm mb-4"
          >
            ← Back to Academy
          </button>
          <h1 className="text-5xl font-black mb-6">
            California vs Texas: Real Take-Home Pay Analysis
          </h1>
          <div className="flex gap-6 text-sm text-blue-200">
            <span>📚 8 min read</span>
            <span>📊 Beginner</span>
            <span>Updated: January 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-blue-600 text-white rounded-2xl p-6 mb-12 shadow-xl flex items-center justify-between">
          <div>
            <p className="font-black text-xl mb-2">Compare Any Two States</p>
            <p className="text-blue-200">Calculate exact take-home pay for all 50 states + DC</p>
          </div>
          <button
            onClick={() => setActiveTool(ToolType.SALARY_CALC)}
            className="bg-white text-blue-900 px-6 py-3 rounded-xl font-black hover:bg-blue-50 transition-all whitespace-nowrap"
          >
            Open Calculator →
          </button>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">The $100K Question</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            You've been offered two identical $100,000 jobs - one in San Francisco, one in Austin.
            Which pays more <strong>after taxes</strong>?
          </p>
          <div className="bg-slate-100 border-l-4 border-blue-600 p-6 rounded-r-xl my-6">
            <p className="text-lg font-bold text-slate-900">Spoiler Alert:</p>
            <p className="text-slate-700 mt-2">
              The Texas job gives you <strong className="text-emerald-600">$8,100+ more take-home</strong> every
              year - enough to buy a used car, max out an IRA, or make extra mortgage payments.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-black mb-4">Calculate Your State-by-State Take-Home</h2>
            <p className="text-xl text-blue-100 mb-8">
              Compare all 50 states + DC with exact tax calculations for 2026
            </p>
            <button
              onClick={() => setActiveTool(ToolType.SALARY_CALC)}
              className="bg-white text-blue-900 px-10 py-5 rounded-xl font-black text-xl hover:bg-blue-50 transition-all shadow-2xl"
            >
              Open Salary Calculator →
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black text-slate-900 mb-6">Continue Learning</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => setActiveTool(ToolType.ACADEMY_SAFE_HARBOR)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-blue-500"
            >
              <div className="text-3xl mb-3">📅</div>
              <h3 className="font-black text-slate-900 mb-2">Safe Harbor Tax</h3>
              <p className="text-slate-600 text-sm">Never pay IRS penalties</p>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.ACADEMY_DCF_GUIDE)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-blue-500"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-black text-slate-900 mb-2">DCF Valuation</h3>
              <p className="text-slate-600 text-sm">Stock valuation guide</p>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.VALUATION_ACADEMY)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-blue-500"
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

export default StateTaxComparison;

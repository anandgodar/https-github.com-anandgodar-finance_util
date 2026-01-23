import React from 'react';
import { ToolType } from '../../types';

interface DCFGuideProps {
  setActiveTool: (tool: ToolType) => void;
}

const DCFGuide: React.FC<DCFGuideProps> = ({ setActiveTool }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => setActiveTool(ToolType.VALUATION_ACADEMY)}
              className="text-indigo-300 hover:text-white font-semibold text-sm"
            >
              ← Back to Academy
            </button>
          </div>
          <h1 className="text-5xl font-black mb-6 leading-tight">
            DCF Valuation: The Complete Guide to Stock Valuation
          </h1>
          <div className="flex gap-6 text-sm text-indigo-200">
            <span>📚 15 min read</span>
            <span>📊 Intermediate</span>
            <span>Updated: January 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Quick Action CTA */}
        <div className="bg-indigo-600 text-white rounded-2xl p-6 mb-12 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-black text-xl mb-2">Want to Try It Now?</p>
              <p className="text-indigo-200">Use our DCF Modeler with built-in WACC wizard to value your first stock.</p>
            </div>
            <button
              onClick={() => setActiveTool(ToolType.EXCEL_MODELER)}
              className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-black hover:bg-indigo-50 transition-all whitespace-nowrap"
            >
              Open DCF Modeler →
            </button>
          </div>
        </div>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">What is DCF Valuation?</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Discounted Cash Flow (DCF) valuation is the <strong>gold standard</strong> method that Wall Street analysts,
            private equity firms, and institutional investors use to determine the intrinsic value of a company. Unlike
            simple P/E ratios or market sentiment, DCF analysis asks a fundamental question:
          </p>
          <div className="bg-slate-100 border-l-4 border-indigo-600 p-6 rounded-r-xl my-6">
            <p className="text-lg font-bold text-slate-900 italic">
              "What is this company worth based on the actual cash it will generate in the future?"
            </p>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            The core principle is simple: <strong>a dollar today is worth more than a dollar tomorrow</strong>.
            DCF valuation projects a company's future free cash flows and discounts them back to present value
            using a discount rate (usually the company's WACC - Weighted Average Cost of Capital).
          </p>
        </section>

        {/* Why DCF Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Why DCF Matters for Investors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Intrinsic Value</h3>
              <p className="text-slate-600">
                DCF tells you what a stock is <em>actually worth</em>, not just what the market is willing to pay today.
                This helps you identify undervalued opportunities.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Institutional Methodology</h3>
              <p className="text-slate-600">
                Warren Buffett, JPMorgan, and Goldman Sachs all use DCF. Learning this method puts you on equal
                footing with professional investors.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Scenario Testing</h3>
              <p className="text-slate-600">
                DCF models let you test "what if" scenarios: What if growth slows? What if margins improve?
                You can quantify the impact on valuation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Independent Analysis</h3>
              <p className="text-slate-600">
                Stop relying on analyst price targets. Build your own DCF model and form independent investment
                opinions based on fundamentals.
              </p>
            </div>
          </div>
        </section>

        {/* The DCF Formula */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-6">The DCF Formula Explained</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            The DCF valuation formula consists of two main components:
          </p>

          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white rounded-2xl p-8 mb-6">
            <p className="text-2xl font-black mb-4 text-center">Enterprise Value (EV)</p>
            <div className="bg-white/10 rounded-xl p-6 font-mono text-lg text-center">
              EV = Σ [FCFₜ / (1 + WACC)ᵗ] + Terminal Value / (1 + WACC)ⁿ
            </div>
            <div className="mt-6 space-y-2 text-sm text-indigo-200">
              <p><strong>FCFₜ</strong> = Free Cash Flow in year t</p>
              <p><strong>WACC</strong> = Weighted Average Cost of Capital (discount rate)</p>
              <p><strong>t</strong> = Year number (1, 2, 3, 4, 5...)</p>
              <p><strong>n</strong> = Final year of projection period</p>
              <p><strong>Terminal Value</strong> = Value of all cash flows beyond the projection period</p>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed mb-4">
            Then convert Enterprise Value to <strong>Equity Value</strong> (the actual stock price):
          </p>

          <div className="bg-slate-100 rounded-xl p-6 mb-6">
            <div className="font-mono text-lg text-center mb-4 text-slate-900">
              Equity Value = EV - Net Debt + Cash
            </div>
            <div className="font-mono text-lg text-center text-slate-900">
              Price Per Share = Equity Value / Shares Outstanding
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Step-by-Step: Building Your First DCF Model</h2>

          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-8 mb-6 shadow-lg border-l-8 border-indigo-600">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">Project Free Cash Flow (FCF)</h3>
                <p className="text-slate-700 mb-4">
                  Free Cash Flow is the cash a company generates after capital expenditures. It represents money
                  that can be returned to investors or reinvested for growth.
                </p>
                <div className="bg-slate-50 rounded-xl p-4 font-mono text-sm">
                  <p className="text-slate-900 mb-2"><strong>FCF = Operating Cash Flow - CapEx</strong></p>
                  <p className="text-slate-600">Or more detailed:</p>
                  <p className="text-slate-900">FCF = EBIT × (1 - Tax Rate) + D&amp;A - CapEx - ΔNWC</p>
                </div>
                <p className="text-slate-600 text-sm mt-4">
                  <strong>Pro tip:</strong> Look at the past 5 years of FCF to identify trends. Is it growing?
                  Stable? Declining? Project the next 5-10 years based on realistic growth assumptions.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-8 mb-6 shadow-lg border-l-8 border-purple-600">
            <div className="flex items-start gap-4">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">Calculate WACC (Discount Rate)</h3>
                <p className="text-slate-700 mb-4">
                  WACC is the average rate a company pays to finance its assets. It's your discount rate -
                  the hurdle rate that future cash flows must clear.
                </p>
                <div className="bg-slate-50 rounded-xl p-4 font-mono text-sm mb-4">
                  <p className="text-slate-900">WACC = (E/(E+D) × Kₑ) + (D/(E+D) × Kd × (1-Tax))</p>
                </div>
                <p className="text-slate-600 text-sm">
                  <strong>Don't know how to calculate WACC?</strong> Use our built-in WACC Wizard with CAPM calculator.
                  It walks you through cost of equity, cost of debt, and capital structure.
                </p>
                <button
                  onClick={() => setActiveTool(ToolType.ACADEMY_WACC_GUIDE)}
                  className="mt-4 text-purple-600 font-bold hover:underline"
                >
                  → Read our WACC Guide
                </button>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-8 mb-6 shadow-lg border-l-8 border-emerald-600">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">Calculate Terminal Value</h3>
                <p className="text-slate-700 mb-4">
                  You can't project cash flows forever. Terminal Value captures all cash flows beyond your
                  projection period (usually years 6+). It often represents 60-80% of total value.
                </p>
                <div className="bg-slate-50 rounded-xl p-4 mb-4">
                  <p className="text-slate-900 font-bold mb-2">Perpetuity Growth Method (most common):</p>
                  <p className="font-mono text-sm text-slate-900">TV = FCFₙ × (1 + g) / (WACC - g)</p>
                  <p className="text-slate-600 text-sm mt-2">
                    Where <strong>g</strong> = perpetual growth rate (typically 2-3%, roughly GDP growth)
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-slate-900 font-bold mb-2">Exit Multiple Method (alternative):</p>
                  <p className="font-mono text-sm text-slate-900">TV = EBITDAₙ × Exit Multiple</p>
                  <p className="text-slate-600 text-sm mt-2">
                    Use industry average EBITDA multiples (e.g., SaaS companies trade at 10-15x)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-2xl p-8 mb-6 shadow-lg border-l-8 border-orange-600">
            <div className="flex items-start gap-4">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">Discount Everything to Present Value</h3>
                <p className="text-slate-700 mb-4">
                  Apply the discount rate (WACC) to bring all future cash flows back to today's dollars.
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-slate-900 mb-2"><strong>Example:</strong></p>
                  <p className="font-mono text-sm text-slate-700">Year 1: $100M / (1.10)¹ = $90.9M</p>
                  <p className="font-mono text-sm text-slate-700">Year 2: $110M / (1.10)² = $90.9M</p>
                  <p className="font-mono text-sm text-slate-700">Year 3: $121M / (1.10)³ = $90.9M</p>
                  <p className="font-mono text-sm text-slate-700">Year 5 TV: $2,000M / (1.10)⁵ = $1,242M</p>
                  <p className="font-mono text-sm text-slate-900 font-bold mt-2">Enterprise Value = Sum of all PVs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-8 border-blue-600">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">Convert to Price Per Share</h3>
                <p className="text-slate-700 mb-4">
                  Adjust for debt and cash to get equity value, then divide by shares outstanding.
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="font-mono text-sm text-slate-700">Enterprise Value: $10,000M</p>
                  <p className="font-mono text-sm text-slate-700">- Total Debt: $2,000M</p>
                  <p className="font-mono text-sm text-slate-700">+ Cash &amp; Equivalents: $500M</p>
                  <p className="font-mono text-sm text-slate-900 font-bold border-t border-slate-300 mt-2 pt-2">
                    = Equity Value: $8,500M
                  </p>
                  <p className="font-mono text-sm text-slate-900 font-bold mt-2">
                    ÷ Shares Outstanding: 100M
                  </p>
                  <p className="font-mono text-lg text-emerald-700 font-black mt-2">
                    = Fair Value Per Share: $85.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Common DCF Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6">
              <h3 className="font-black text-red-900 mb-2">❌ Overly Optimistic Growth</h3>
              <p className="text-red-800">
                Projecting 20% FCF growth forever is unrealistic. Be conservative. Most mature companies grow
                at 3-7% long-term. High growth rarely lasts more than 5 years.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6">
              <h3 className="font-black text-red-900 mb-2">❌ Ignoring WACC Sensitivity</h3>
              <p className="text-red-800">
                A 1% change in WACC can swing valuation by 20-30%. Always run sensitivity analysis: What if
                WACC is 9% vs 11%? Test multiple scenarios.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6">
              <h3 className="font-black text-red-900 mb-2">❌ Terminal Value Dominating (80%+ of Value)</h3>
              <p className="text-red-800">
                If Terminal Value represents more than 80% of Enterprise Value, your projection period is
                too short or your near-term FCF is too low. Extend projections to 10 years.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6">
              <h3 className="font-black text-red-900 mb-2">❌ Using Net Income Instead of FCF</h3>
              <p className="text-red-800">
                Net income includes non-cash items (depreciation) and ignores capital needs (CapEx).
                Always use Free Cash Flow - it's the actual cash available to investors.
              </p>
            </div>
          </div>
        </section>

        {/* Real Example */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Real Example: Tech Company DCF</h2>
          <div className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-black mb-4">Case Study: High-Growth SaaS Company</h3>
            <div className="space-y-3 text-indigo-200">
              <p><strong>Assumptions:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Current FCF: $50M (Year 0)</li>
                <li>Growth: 25% (Yr 1-3), 15% (Yr 4-5), 10% (Yr 6-10)</li>
                <li>WACC: 10%</li>
                <li>Terminal Growth: 3%</li>
                <li>Shares Outstanding: 100M</li>
                <li>Net Debt: $200M</li>
              </ul>
            </div>
            <div className="mt-6 bg-white/10 rounded-xl p-4 font-mono text-sm">
              <p>PV of Years 1-10: $800M</p>
              <p>Terminal Value: $2,500M</p>
              <p>PV of Terminal Value: $964M</p>
              <p className="border-t border-white/20 mt-2 pt-2 font-bold">Enterprise Value: $1,764M</p>
              <p className="mt-2">- Net Debt: $200M</p>
              <p className="font-bold text-emerald-400 text-lg mt-2">= Fair Value Per Share: $15.64</p>
            </div>
            <p className="text-indigo-200 mt-4 text-sm">
              If the stock trades at $12, it's <strong className="text-emerald-400">undervalued by 30%</strong>.
              If it trades at $20, it's <strong className="text-red-400">overvalued by 28%</strong>.
            </p>
          </div>
        </section>

        {/* Try It Now CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-black mb-4">Ready to Build Your First DCF Model?</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Our Excel Power Modeler includes a built-in WACC wizard, sensitivity analysis, and real-time
              calculations. No spreadsheet required.
            </p>
            <button
              onClick={() => setActiveTool(ToolType.EXCEL_MODELER)}
              className="bg-white text-indigo-900 px-10 py-5 rounded-xl font-black text-xl hover:bg-indigo-50 transition-all shadow-2xl"
            >
              Launch DCF Modeler →
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl p-6 shadow-lg">
              <summary className="font-black text-lg text-slate-900 cursor-pointer">
                What's a good WACC for tech companies?
              </summary>
              <p className="text-slate-600 mt-3">
                Tech companies typically have WACC between 8-12%. High-growth startups might be 12-15%,
                while mature tech (Microsoft, Apple) might be 7-9%. It depends on leverage and beta.
              </p>
            </details>
            <details className="bg-white rounded-xl p-6 shadow-lg">
              <summary className="font-black text-lg text-slate-900 cursor-pointer">
                How far out should I project cash flows?
              </summary>
              <p className="text-slate-600 mt-3">
                5-10 years is standard. For stable businesses (utilities, consumer staples), 5 years is fine.
                For high-growth companies, use 10 years to capture the growth trajectory before terminal value.
              </p>
            </details>
            <details className="bg-white rounded-xl p-6 shadow-lg">
              <summary className="font-black text-lg text-slate-900 cursor-pointer">
                What if a company doesn't have positive FCF yet?
              </summary>
              <p className="text-slate-600 mt-3">
                Many growth companies (Amazon 1997-2015) have negative FCF. Project when FCF turns positive,
                then run DCF from that point. Alternatively, use revenue multiples or comparable company analysis.
              </p>
            </details>
            <details className="bg-white rounded-xl p-6 shadow-lg">
              <summary className="font-black text-lg text-slate-900 cursor-pointer">
                Is DCF accurate for cyclical industries (oil, automotive)?
              </summary>
              <p className="text-slate-600 mt-3">
                DCF works but requires normalized assumptions. Use average FCF margins over a full cycle (5-7 years)
                rather than peak or trough margins. Consider using exit multiples instead of perpetuity growth.
              </p>
            </details>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-3xl font-black text-slate-900 mb-6">Continue Your Learning</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => setActiveTool(ToolType.ACADEMY_WACC_GUIDE)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-indigo-500"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-black text-slate-900 mb-2">WACC Deep Dive</h3>
              <p className="text-slate-600 text-sm">Master cost of capital calculations</p>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.ACADEMY_GREEKS_GUIDE)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-indigo-500"
            >
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-black text-slate-900 mb-2">Options Greeks</h3>
              <p className="text-slate-600 text-sm">Learn Delta, Theta, Vega, Gamma</p>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.VALUATION_ACADEMY)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-indigo-500"
            >
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-black text-slate-900 mb-2">All Guides</h3>
              <p className="text-slate-600 text-sm">Back to Valuation Academy</p>
            </button>
          </div>
        </section>
      </article>
    </div>
  );
};

export default DCFGuide;

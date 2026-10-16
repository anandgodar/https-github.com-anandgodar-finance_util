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
            <span>📚 6 min read</span>
            <span>📊 Intermediate</span>
            <span>Updated: October 2026</span>
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
          <h2 className="text-3xl font-black text-slate-900 mb-4">The WACC Formula</h2>
          <div className="bg-slate-100 border-l-4 border-purple-600 p-6 rounded-r-xl my-6">
            <p className="text-lg font-bold text-slate-900">
              WACC = (E ÷ V) × Re + (D ÷ V) × Rd × (1 − T)
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-slate-700">
              <li><strong>E</strong> = market value of equity (share price × diluted shares)</li>
              <li><strong>D</strong> = value of debt (market value if available, otherwise book value)</li>
              <li><strong>V</strong> = E + D</li>
              <li><strong>Re</strong> = cost of equity</li>
              <li><strong>Rd</strong> = pre-tax cost of debt</li>
              <li><strong>T</strong> = marginal tax rate (the U.S. federal corporate rate is 21%; state taxes can add more)</li>
            </ul>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Debt gets the <strong>(1 − T)</strong> adjustment because interest is generally tax-deductible for
            companies, which lowers the effective cost of borrowing. Equity has no such shield, and shareholders are paid
            last if things go wrong, so equity is almost always the more expensive source of capital.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Step 1: Cost of Equity with CAPM</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Shareholders don&apos;t send an invoice, so the cost of equity has to be estimated. The standard tool is the
            Capital Asset Pricing Model:
          </p>
          <div className="bg-slate-100 border-l-4 border-purple-600 p-6 rounded-r-xl my-6">
            <p className="text-lg font-bold text-slate-900">Re = Risk-free rate + Beta × Equity risk premium</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
            <li><strong>Risk-free rate:</strong> usually the current yield on a 10-year U.S. Treasury. Look it up on the day you value the company; it changes.</li>
            <li><strong>Beta:</strong> how much the stock has historically moved relative to the market. Beta 1.0 moves with the market; 1.5 swings about 50% more.</li>
            <li><strong>Equity risk premium (ERP):</strong> the extra return investors demand for owning stocks over Treasuries. Practitioners commonly use estimates in roughly the 4%–6% range, and reasonable people disagree.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Step 2: After-Tax Cost of Debt</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The best estimate of Rd is the yield to maturity on the company&apos;s existing bonds, since that is what
            lenders demand today. If the company has no traded bonds, a rough proxy is interest expense divided by average
            debt, or the yield on bonds with a similar credit rating. Then multiply by (1 − T).
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Worked Example</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Hypothetical company:</strong> $600M market value of equity, $400M of debt, beta 1.2. We assume an
            illustrative 4.5% risk-free rate, a 5% equity risk premium, a 6% pre-tax cost of debt, and a 21% tax rate.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>Weights: E/V = 600 ÷ 1,000 = <strong>60%</strong>; D/V = 400 ÷ 1,000 = <strong>40%</strong></li>
              <li>Cost of equity: 4.5% + 1.2 × 5% = <strong>10.5%</strong></li>
              <li>After-tax cost of debt: 6% × (1 − 0.21) = <strong>4.74%</strong></li>
              <li>WACC = 0.60 × 10.5% + 0.40 × 4.74% = 6.30% + 1.90% = <strong>8.20%</strong></li>
            </ol>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Beta is often the most uncertain input. Holding everything else constant:
          </p>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
            <table className="w-full text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 font-black text-slate-900">Beta</th>
                  <th className="p-4 font-black text-slate-900">Cost of equity</th>
                  <th className="p-4 font-black text-slate-900">WACC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">1.0</td><td className="p-4 text-slate-700">9.5%</td><td className="p-4 font-bold text-slate-900">7.60%</td></tr>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">1.2</td><td className="p-4 text-slate-700">10.5%</td><td className="p-4 font-bold text-purple-600">8.20%</td></tr>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">1.4</td><td className="p-4 text-slate-700">11.5%</td><td className="p-4 font-bold text-slate-900">8.80%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            A 0.6-point swing in WACC may look small, but in the hypothetical DCF from our guide it moves enterprise value by roughly 10%–12% in either direction, because the
            rate compounds over every forecast year and drives the terminal value. See the worked sensitivity table in our{' '}
            <a href="/blog/dcf-valuation-modeling-guide-2025/" className="text-indigo-600 font-semibold hover:underline">simple DCF valuation guide</a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Why Not Just Use More Debt?</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Since debt is cheaper, it is tempting to think more borrowing always lowers WACC. Up to a point it can, but
            extra debt makes the remaining equity riskier (its beta rises), lenders charge higher rates as leverage grows,
            and the risk of financial distress increases. Most companies settle on a target capital structure rather than
            maximizing debt. When you value a company, use its long-run target weights if they differ from today&apos;s.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">How WACC Is Used in Practice</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
            <li><strong>Discount rate in a DCF:</strong> unlevered free cash flows are discounted at WACC to get enterprise value.</li>
            <li><strong>Hurdle rate for projects:</strong> a company should generally invest only in projects expected to return more than its cost of capital, adjusted for the project&apos;s own risk.</li>
            <li><strong>Value-creation test:</strong> comparing return on invested capital (ROIC) with WACC shows whether growth adds value. A company earning 12% ROIC with an 8% WACC creates value as it grows; one earning 6% destroys value even while revenue rises.</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            For individual investors, WACC is a starting point rather than a personal target. Many investors also run a
            DCF at their own required return (say, 10%) to see whether a stock still looks attractive with a margin of
            safety built in.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">When WACC Doesn&apos;t Fit Well</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Banks and insurers treat debt as raw material rather than financing, so analysts usually value them on equity
            cash flows with the cost of equity instead. Early-stage companies with negative cash flow and no meaningful
            beta history also make WACC inputs unreliable. And conglomerates with very different divisions may need a
            separate discount rate for each business, because one blended WACC would undervalue safe units and overvalue
            risky ones.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Common WACC Mistakes</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li><strong>Using book value of equity</strong> instead of market value. Book equity can be far below what shareholders actually own.</li>
            <li><strong>Using the coupon rate</strong> on old debt instead of today&apos;s yield.</li>
            <li><strong>Mismatching cash flows:</strong> WACC discounts unlevered free cash flow; levered (equity) cash flows use the cost of equity.</li>
            <li><strong>Forgetting the tax shield</strong>, or applying it to a company that has no taxable profit to shield.</li>
            <li><strong>False precision:</strong> treat WACC as a range (for example 7.5%–9%) and test your valuation across it.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-black text-slate-900 mb-2">What is a &quot;good&quot; WACC?</h3>
              <p className="text-slate-700">There is no universal good number. WACC depends on interest rates, the business&apos;s risk and its financing. What matters is whether the company earns returns on invested capital above its WACC.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-black text-slate-900 mb-2">Where do I find beta?</h3>
              <p className="text-slate-700">Many financial data sites publish a historical beta, or you can regress the stock&apos;s returns against an index. Betas differ by source and time window, so test a range.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-black text-slate-900 mb-2">Is WACC the same as the cost of equity?</h3>
              <p className="text-slate-700">No. The cost of equity is what shareholders alone require. WACC blends it with the cheaper after-tax cost of debt, so for a company with debt, WACC is lower than its cost of equity.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-black text-slate-900 mb-2">Does WACC change over time?</h3>
              <p className="text-slate-700">Yes. When Treasury yields, credit spreads, or the company&apos;s leverage change, so does WACC. Recalculate it whenever you update a valuation.</p>
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            Educational only, not investment advice. Sources:{' '}
            <a href="https://home.treasury.gov/" className="text-indigo-600 font-semibold hover:underline">U.S. Treasury</a>,{' '}
            <a href="https://www.sec.gov/" className="text-indigo-600 font-semibold hover:underline">SEC (company filings)</a>,{' '}
            <a href="https://www.irs.gov/publications/p542" className="text-indigo-600 font-semibold hover:underline">IRS Publication 542 (Corporations)</a>,{' '}
            <a href="https://www.investor.gov/" className="text-indigo-600 font-semibold hover:underline">Investor.gov</a>.
            For the full valuation workflow, continue to the{' '}
            <a href="/academy/dcf-valuation-complete-guide/" className="text-indigo-600 font-semibold hover:underline">complete DCF valuation guide</a>.
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

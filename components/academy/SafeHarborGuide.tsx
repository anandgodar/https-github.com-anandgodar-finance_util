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
            <span>📚 5 min read</span>
            <span>📊 Beginner</span>
            <span>Updated: October 2026</span>
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
          <p className="text-slate-700 leading-relaxed mb-4">
            The federal tax system expects tax to be paid as income is earned, through paycheck withholding or quarterly
            estimated payments. If you are self-employed, have a large side business, or receive big investment gains, you
            may not have enough withheld. The underpayment penalty on Form 2210 is how the IRS charges for paying too
            little, too late. Safe harbor gives you a clear target that removes that risk.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl my-6">
            <p className="text-lg font-bold text-emerald-900 mb-2">The Core Rule:</p>
            <p className="text-slate-700">
              If you pay <strong>at least</strong> one of these amounts on time through withholding and quarterly estimated
              taxes, the IRS won't charge the underpayment penalty:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-slate-700">
              <li><strong>100% of prior year tax</strong> (110% if prior-year AGI &gt; $150K, or &gt; $75K if married filing separately)</li>
              <li><strong>90% of current year tax</strong></li>
            </ul>
            <p className="text-slate-700 mt-3">
              Separately, there is no penalty if the tax you owe after withholding and refundable credits is
              <strong> under $1,000</strong>.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">The Three Tests Compared</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg text-sm">
              <thead className="bg-orange-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Test</th>
                  <th className="text-left p-4 font-black text-slate-900">Target for 2026</th>
                  <th className="text-left p-4 font-black text-slate-900">Best when</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">Prior-year</td>
                  <td className="p-4 text-slate-700">100% of your 2025 total tax (110% if 2025 AGI over $150,000)</td>
                  <td className="p-4 text-slate-700">Income is rising or hard to predict</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">Current-year</td>
                  <td className="p-4 text-slate-700">90% of your 2026 total tax</td>
                  <td className="p-4 text-slate-700">Income is falling and you can estimate it well</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">Small balance</td>
                  <td className="p-4 text-slate-700">Owe less than $1,000 after withholding and credits</td>
                  <td className="p-4 text-slate-700">Small side income on top of a W-2 job</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mt-4">
            "Total tax" means the total tax line on your Form 1040: income tax plus self-employment tax and other taxes
            such as the Additional Medicare Tax, minus certain refundable credits. It is not your balance due and not your
            refund. If you owed no tax at all for 2025 and were a U.S. citizen or resident for the full year, you generally
            owe no 2026 underpayment penalty.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">How to Calculate Your Safe Harbor Payments</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-6">
            <li>Find the total tax and AGI on your 2025 return.</li>
            <li>Multiply the total tax by 100% (or 110% if AGI was over $150,000).</li>
            <li>Estimate 2026 total tax and multiply by 90%.</li>
            <li>Take the <strong>smaller</strong> of the two as your required annual payment.</li>
            <li>Subtract expected 2026 withholding, then divide what is left by four for the April 15, June 15 and September 15, 2026 and January 15, 2027 due dates.</li>
          </ol>

          <h3 className="text-2xl font-black text-slate-900 mb-4">Worked Examples (Hypothetical)</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="font-black text-slate-900 mb-2">Example 1: A freelancer whose income is growing</p>
              <p className="text-slate-700">
                2025 total tax was $12,000 and AGI was $95,000. Business is booming, and 2026 tax will likely reach $20,000.
                Prior-year safe harbor: 100% × $12,000 = $12,000, or <strong>$3,000 per quarter</strong>. The 90% test
                would require $18,000. Paying $3,000 on each due date avoids the penalty; the remaining $8,000 is due by
                April 15, 2027.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="font-black text-slate-900 mb-2">Example 2: A higher earner (110% rule)</p>
              <p className="text-slate-700">
                2025 AGI was $180,000 and total tax was $32,000. Because AGI exceeded $150,000, the target is
                110% × $32,000 = $35,200, or <strong>$8,800 per quarter</strong>.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="font-black text-slate-900 mb-2">Example 3: Income is dropping</p>
              <p className="text-slate-700">
                2025 total tax was $18,000, but a client loss means 2026 tax should be about $10,000. The 90% test needs only
                $9,000 ($2,250 per quarter) versus $18,000 under the prior-year test. The risk: if income recovers and 2026
                tax ends higher, the 90% target rises with it, so recheck before each payment.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">How the Penalty Works</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The penalty is not a flat fine. It is figured like interest on the amount you underpaid for each installment, from
            the due date until it is paid (or until the April filing deadline). The rate is the federal short-term rate plus
            3 percentage points and is reset each quarter, so check IRS.gov for the current rate. Each installment is
            generally one-quarter of your required annual payment, which is why paying everything in December does not
            fully fix underpaid April, June and September installments.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Two exceptions help. <strong>Withholding is treated as paid evenly through the year</strong> unless you choose
            otherwise, so raising W-2 withholding late in the year can cover earlier shortfalls. And if your income arrives
            unevenly, the <strong>annualized income installment method</strong> (Form 2210, Schedule AI) lets you match
            required payments to when you actually earned the money.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">When Safe Harbor Doesn't Apply as Usual</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li><strong>Farmers and fishermen</strong> who meet the income tests use a two-thirds rule and can make a single payment by January 15.</li>
            <li><strong>Waivers</strong> may be available after a casualty, disaster or other unusual circumstance, or if you retired after age 62 or became disabled and the underpayment was due to reasonable cause.</li>
            <li><strong>State rules differ.</strong> Many states follow a similar structure but with their own percentages and thresholds.</li>
            <li><strong>Safe harbor is not a tax cap.</strong> It removes the penalty, not the tax. Budget for the full balance due in April.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Using last year's <em>balance due</em> instead of last year's <em>total tax</em>.</li>
            <li>Forgetting the 110% requirement after a year with AGI over $150,000.</li>
            <li>Missing the June 15 payment, which comes only two months after April 15.</li>
            <li>Ignoring self-employment tax when estimating the 90% target.</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mt-4">
            For a broader walkthrough, see our <a href="/blog/quarterly-estimated-taxes-complete-guide/" className="text-indigo-600 font-semibold hover:underline">quarterly estimated taxes guide</a> and
            the <a href="/blog/freelancer-estimated-taxes-guide-2025/" className="text-indigo-600 font-semibold hover:underline">freelancer's guide to how much to set aside</a>. To see how
            SE tax feeds into your total, read the <a href="/blog/self-employment-tax-guide-2025/" className="text-indigo-600 font-semibold hover:underline">self-employment tax guide</a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="font-black text-slate-900 mb-2">Do I have to pay equal amounts each quarter?</p>
              <p className="text-slate-700">Under the regular method, each required installment is one-quarter of the annual target. Unequal payments are fine as long as each due date's cumulative requirement is met, or you use the annualized method.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="font-black text-slate-900 mb-2">Does the 110% rule use AGI or taxable income?</p>
              <p className="text-slate-700">It uses adjusted gross income (AGI) on your prior-year return: over $150,000, or over $75,000 if married filing separately.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="font-black text-slate-900 mb-2">I just started freelancing. What should I pay?</p>
              <p className="text-slate-700">If your 2025 return showed tax, the prior-year test is usually the simplest. If you had no 2025 tax liability for a full year, you generally can't owe the 2026 penalty, but you should still save for the tax.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="font-black text-slate-900 mb-2">Does an extension stop the penalty?</p>
              <p className="text-slate-700">No. A filing extension gives more time to file, not to pay. Underpayment penalties and interest still apply to late payments.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>IRS Publication 505, Tax Withholding and Estimated Tax: <a href="https://www.irs.gov/publications/p505" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/publications/p505</a></li>
            <li>About Form 2210, Underpayment of Estimated Tax: <a href="https://www.irs.gov/forms-pubs/about-form-2210" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/forms-pubs/about-form-2210</a></li>
            <li>About Form 1040-ES: <a href="https://www.irs.gov/forms-pubs/about-form-1040-es" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/forms-pubs/about-form-1040-es</a></li>
          </ul>
          <p className="text-sm text-slate-500 mt-4">
            Educational content, not individualized tax advice. Confirm your situation with IRS guidance or a tax professional.
          </p>
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

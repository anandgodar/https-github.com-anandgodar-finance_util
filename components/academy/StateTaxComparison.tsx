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
            <span>📚 5 min read</span>
            <span>📊 Beginner</span>
            <span>📅 Updated October 2026</span>
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
            <p className="text-lg font-bold text-slate-900">Short Answer:</p>
            <p className="text-slate-700 mt-2">
              For a single filer, the Texas job leaves roughly <strong className="text-emerald-600">$5,000 more income-tax
              money</strong> in your pocket each year, plus whatever California withholds for State Disability Insurance
              (SDI) — often a total gap of around $6,000 or more at this salary. That is about $500 a month: enough to fund
              an IRA or make an extra mortgage payment. Whether you actually come out ahead depends on housing, property
              tax and sales tax, which we cover below.
            </p>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            This guide walks through the calculation step by step so you can repeat it for your own salary. All examples
            are hypothetical and use 2026 federal figures. California figures are approximate because the state adjusts
            its brackets every year; use the{' '}
            <a href="/salary-tax-estimator/california/" className="text-indigo-600 font-semibold hover:underline">California salary tax estimator</a>{' '}
            and the{' '}
            <a href="/salary-tax-estimator/texas/" className="text-indigo-600 font-semibold hover:underline">Texas salary tax estimator</a>{' '}
            for exact numbers.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Step 1: What&apos;s the Same in Both States</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Federal income tax and FICA don&apos;t depend on where you live. For a hypothetical single filer earning
            $100,000 in 2026 with the standard deduction and no pre-tax deductions:
          </p>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Line</th>
                  <th className="text-left p-4 font-black text-slate-900">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Gross salary</td>
                  <td className="p-4 text-slate-700">$100,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Federal taxable income ($100,000 − $16,100 standard deduction)</td>
                  <td className="p-4 text-slate-700">$83,900</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Federal income tax ($1,240 + $4,560 + 22% × $33,500)</td>
                  <td className="p-4 text-slate-700">-$13,170</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Social Security (6.2%) + Medicare (1.45%)</td>
                  <td className="p-4 text-slate-700">-$7,650</td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50">
                  <td className="p-4 font-black text-slate-900">Take-home before state taxes</td>
                  <td className="p-4 font-black text-slate-900">$79,180 (≈ $6,598/month)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            In Texas, that is essentially the final number: Texas has no state personal income tax and no state
            disability payroll tax on employees. Local governments in Texas don&apos;t levy a wage tax either.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Step 2: What California Adds</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            California has one of the most progressive income taxes in the country. Its rates start at 1% and climb
            through several brackets; most middle- and upper-middle-income single filers have their top dollars taxed at
            9.3%, rates rise to 12.3% for high earners, and a 1% mental health services tax on income above $1 million
            brings the top rate to 13.3%. California&apos;s standard deduction is far smaller than the federal one.
          </p>
          <ul className="space-y-2 text-slate-700 mb-4">
            <li>• <strong>State income tax:</strong> based on recent California brackets, a single filer with $100,000 of wages and the standard deduction owes roughly <strong>$5,000</strong> in California income tax (exact amount varies by year).</li>
            <li>• <strong>State Disability Insurance (SDI):</strong> California withholds SDI from employee wages at a rate the state sets each year, and since 2024 it applies to all wages with no cap. See{' '}
              <a href="/blog/state-disability-paid-leave-payroll-tax-2026/" className="text-indigo-600 font-semibold hover:underline">state disability and paid leave payroll taxes</a>{' '}
              for how these programs work.</li>
            <li>• <strong>Capital gains:</strong> California taxes investment gains as ordinary income — there is no lower state rate for long-term gains.</li>
            <li>• <strong>Retirement withdrawals:</strong> California taxes 401(k) and IRA withdrawals, but not Social Security benefits.</li>
          </ul>
          <div className="bg-slate-100 border-l-4 border-blue-600 p-6 rounded-r-xl my-6">
            <p className="text-lg font-bold text-slate-900">Partial offset: the SALT deduction</p>
            <p className="text-slate-700 mt-2">
              If you itemize, state income and property taxes are deductible on your federal return up to the SALT cap
              ($40,400 for 2026, reduced for incomes above $505,000). At $100,000, a renter usually won&apos;t have enough
              itemized deductions to beat the $16,100 standard deduction, so the offset is often zero. A California
              homeowner with a mortgage may get part of the state tax back through a lower federal bill.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Step 3: What Texas Costs Instead</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Texas funds its government in other ways, and two of them matter for your budget:
          </p>
          <ul className="space-y-2 text-slate-700 mb-4">
            <li>• <strong>Property tax:</strong> Texas property tax rates are among the higher ones in the country. On a home with the same price, a Texas owner often pays noticeably more property tax each year than a California owner, whose assessed value is limited by Proposition 13.</li>
            <li>• <strong>Sales tax:</strong> the Texas state rate is 6.25%, and local add-ons can bring the combined rate to 8.25%. California&apos;s statewide base rate is 7.25%, with local add-ons on top — so sales tax is roughly a wash for many households.</li>
            <li>• <strong>Housing cost:</strong> this usually dominates the comparison. Use the{' '}
              <a href="/cost-of-living-calculator/" className="text-indigo-600 font-semibold hover:underline">cost of living calculator</a>{' '}
              to compare rent and prices between the two cities, not just taxes.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Side-by-Side Summary ($100,000, Single, 2026)</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Item</th>
                  <th className="text-left p-4 font-black text-slate-900">California</th>
                  <th className="text-left p-4 font-black text-slate-900">Texas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Federal income tax + FICA</td>
                  <td className="p-4 text-slate-700">$20,820</td>
                  <td className="p-4 text-slate-700">$20,820</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">State income tax</td>
                  <td className="p-4 text-slate-700">≈ $5,000</td>
                  <td className="p-4 text-slate-700">$0</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">State disability payroll tax</td>
                  <td className="p-4 text-slate-700">Yes (rate set annually)</td>
                  <td className="p-4 text-slate-700">None</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Take-home before SDI</td>
                  <td className="p-4 text-slate-700">≈ $74,000</td>
                  <td className="p-4 text-slate-700">$79,180</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Property tax on a home</td>
                  <td className="p-4 text-slate-700">Generally lower rate</td>
                  <td className="p-4 text-slate-700">Generally higher rate</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            The gap grows with income. Because California&apos;s brackets keep rising while Texas stays at zero, a
            $200,000 or $500,000 earner gives up a larger share of each extra dollar in California. For a deeper look at
            the $100,000 case, see{' '}
            <a href="/blog/100k-california-vs-texas-take-home-pay/" className="text-indigo-600 font-semibold hover:underline">$100k in California vs Texas</a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">When Moving to Texas Doesn&apos;t Pay Off</h2>
          <ul className="space-y-2 text-slate-700 mb-4">
            <li>• <strong>The Texas offer is lower.</strong> A $92,000 Texas salary versus $100,000 in California largely erases the tax advantage at this level, because the $8,000 pay cut costs about $5,600 of take-home after federal tax and FICA.</li>
            <li>• <strong>You buy an expensive home.</strong> Higher property tax can eat a large part of the income tax savings.</li>
            <li>• <strong>You keep a California job remotely.</strong> California taxes nonresidents on California-source income, and remote-work sourcing rules can be complex. See{' '}
              <a href="/blog/remote-work-taxes-reciprocity-convenience-rule/" className="text-indigo-600 font-semibold hover:underline">remote work tax rules</a>.</li>
            <li>• <strong>You move mid-year.</strong> You&apos;ll file a California part-year resident return for the months you lived there. See{' '}
              <a href="/blog/mid-year-move-part-year-resident-tax-guide-2026/" className="text-indigo-600 font-semibold hover:underline">the part-year resident guide</a>.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Common Mistakes</h2>
          <ul className="space-y-2 text-slate-700 mb-4">
            <li>• Comparing only income tax and ignoring housing, property tax and insurance costs.</li>
            <li>• Assuming federal tax changes when you move — it doesn&apos;t, except through itemized SALT deductions.</li>
            <li>• Forgetting California SDI when estimating California paychecks.</li>
            <li>• Assuming RSUs or stock options that vest after a move escape California tax — California can tax the portion tied to work you did while living there.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">FAQ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-1">Does Texas have a state income tax?</h3>
              <p className="text-slate-700 leading-relaxed">No. Texas has no personal income tax on wages, interest, dividends or capital gains.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-1">What is California&apos;s top income tax rate?</h3>
              <p className="text-slate-700 leading-relaxed">13.3%: a 12.3% top bracket plus a 1% mental health services tax on taxable income above $1 million.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-1">Is my federal tax lower in Texas?</h3>
              <p className="text-slate-700 leading-relaxed">No. Federal income tax and FICA are the same in every state. The only federal difference comes if you itemize and deduct state and local taxes.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-1">How do I compare my own offer?</h3>
              <p className="text-slate-700 leading-relaxed">Run both salaries through the state-specific salary calculators, then add the difference in housing, property tax and other living costs.</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 mt-6 italic">
            This guide is educational and is not individualized tax advice. State tax rules change frequently; confirm
            current rates with the California Franchise Tax Board and the Texas Comptroller.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• IRS Rev. Proc. 2025-32 (2026 federal brackets and standard deduction): <a href="https://www.irs.gov/" className="text-indigo-600 font-semibold hover:underline">irs.gov</a></li>
            <li>• IRS Publication 17, Your Federal Income Tax (itemized deductions and SALT): <a href="https://www.irs.gov/publications/p17" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p17</a></li>
            <li>• Social Security Administration, 2026 contribution and benefit base: <a href="https://www.ssa.gov/oact/cola/cbb.html" className="text-indigo-600 font-semibold hover:underline">ssa.gov/oact/cola/cbb.html</a></li>
            <li>• California Franchise Tax Board (state income tax rates) and Employment Development Department (SDI)</li>
            <li>• Texas Comptroller of Public Accounts (sales and property tax)</li>
          </ul>
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

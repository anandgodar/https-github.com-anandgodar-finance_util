import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const RaiseWorthMoving2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>📅 Updated October 2026</span>
          <span>•</span>
          <span>⏱️ 5 min read</span>
          <span>•</span>
          <span>🚚 Relocation</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Is a $10,000 Raise Worth Moving For? The Real Cost of Relocation
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          A $10k raise sounds great until you factor in taxes, housing, and moving costs. This guide helps you decide if
          a <strong>raise is worth relocating</strong> by comparing net pay, cost of living, and one-time expenses.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Model your new net income</h3>
              <p className="text-sm text-slate-600">
                Compare your current and future take-home pay with state taxes and 401(k) contributions included.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.SALARY_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Salary Estimator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('net-pay')} className="text-indigo-600 hover:underline">1. What a $10k raise really nets</button></li>
          <li><button onClick={() => scrollToSection('relocation-costs')} className="text-indigo-600 hover:underline">2. The hidden costs of moving</button></li>
          <li><button onClick={() => scrollToSection('living-costs')} className="text-indigo-600 hover:underline">3. Cost-of-living break-even</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">4. Worked example with 2026 tax figures</button></li>
          <li><button onClick={() => scrollToSection('payback')} className="text-indigo-600 hover:underline">5. Moving-cost payback period</button></li>
          <li><button onClick={() => scrollToSection('decision')} className="text-indigo-600 hover:underline">6. A simple decision checklist</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. FAQ</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">8. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="net-pay" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">A $10k raise doesn&apos;t mean $10k more in your pocket</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            After federal, state, and FICA taxes, a $10,000 raise usually nets <strong>$6,000-$7,500</strong> depending on
            your bracket. If you&apos;re moving to a higher-tax state, the net could be even smaller.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The reason is your <strong>marginal rate</strong>: the tax on your next dollar, not your average rate. For 2026,
            a single filer with taxable income between $50,400 and $105,700 is in the 22% federal bracket. Add 7.65% for
            Social Security and Medicare (FICA) and about 30 cents of every extra dollar goes to federal taxes before any
            state tax. In the 12% bracket, it is closer to 20 cents.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The bigger trap is a move <strong>into</strong> a state with an income tax. That state taxes your whole salary,
            not just the raise. So the right comparison is total take-home pay in the old location versus total take-home
            pay in the new one. The <a href="/salary-tax-estimator/" className="text-indigo-600 font-semibold hover:underline">salary tax estimator</a> lets
            you run both states side by side.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold">✅ Estimate your net raise first, then compare budgets.</p>
          </div>
        </section>

        <section id="relocation-costs" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The hidden costs of relocation</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Moving costs add up fast. Even a “simple” relocation can eat a full year of a $10k raise.
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Movers, travel, and temporary housing: $2,000-$8,000</li>
            <li>• Security deposits, utilities, furnishings: $1,500-$5,000</li>
            <li>• Career risk: probation period, new network, local wage norms</li>
            <li>• Lease-break fees, overlapping rent, or selling costs if you own a home</li>
            <li>• New car registration, driver&apos;s license and possibly higher auto insurance</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            These ranges are rough planning figures; get real quotes for your move. Also note the tax treatment: under
            current federal law most employees can&apos;t deduct moving expenses, and relocation payments from an employer
            are generally taxable wages. Active-duty military members moving under orders are the main exception. A $5,000
            relocation bonus therefore covers less than $5,000 of costs once taxes are withheld, unless your employer
            &quot;grosses it up.&quot;
          </p>
        </section>

        <section id="living-costs" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Cost-of-living break-even math</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If rent is $500 higher per month, that&apos;s $6,000 per year. Add higher taxes and commuting costs and your raise
            can disappear. A <strong>relocation salary calculator</strong> helps you run the break-even scenario in minutes.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Remember that higher spending comes out of after-tax dollars. If 30% of each extra dollar of salary goes to tax,
            covering $6,000 a year of extra rent takes about $8,600 of extra gross pay ($6,000 ÷ 0.70). Our <a href="/cost-of-living-calculator/" className="text-indigo-600 font-semibold hover:underline">cost of living calculator</a> compares
            typical costs between cities, and the <a href="/blog/cost-of-living-calculator-guide-2025/" className="text-indigo-600 font-semibold hover:underline">cost of living guide</a> shows
            how to adjust a city index for your own budget.
          </p>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example with 2026 tax figures</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Example (hypothetical):</strong> a single filer earns $75,000 in a state with no income tax. She is
            offered $85,000 in a city whose state has an income tax. For simplicity, assume the new state&apos;s tax works
            out to 5% of her wages (real state taxes have their own brackets and deductions), and she takes the 2026
            federal standard deduction of $16,100.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Annual</th>
                  <th className="text-left p-4 font-black text-slate-900">Current job ($75,000)</th>
                  <th className="text-left p-4 font-black text-slate-900">New job ($85,000)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Taxable income (after $16,100)</td><td className="p-4 font-bold text-slate-900">$58,900</td><td className="p-4 font-bold text-slate-900">$68,900</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Federal income tax</td><td className="p-4 font-bold text-slate-900">$7,670</td><td className="p-4 font-bold text-slate-900">$9,870</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">FICA (7.65%)</td><td className="p-4 font-bold text-slate-900">$5,737.50</td><td className="p-4 font-bold text-slate-900">$6,502.50</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">State income tax (illustrative)</td><td className="p-4 font-bold text-slate-900">$0</td><td className="p-4 font-bold text-slate-900">$4,250</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Take-home pay</td><td className="p-4 font-bold text-indigo-600">$61,592.50</td><td className="p-4 font-bold text-indigo-600">$64,377.50</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <p className="text-emerald-900 font-semibold text-lg">📊 What the $10,000 raise really is</p>
            <ul className="mt-2 space-y-1 text-base text-emerald-900">
              <li>• Same state: $10,000 − $2,200 federal − $765 FICA = <strong>$7,035</strong> more take-home</li>
              <li>• New state with income tax: only <strong>$2,785</strong> more take-home</li>
              <li>• If rent rises $400/month ($4,800/year): she ends up about <strong>$2,015/year worse off</strong></li>
            </ul>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Federal tax math: 10% on the first $12,400, 12% up to $50,400, and 22% on the rest. On $58,900 of taxable income
            that is $1,240 + $4,560 + $1,870 = $7,670; on $68,900 it is $1,240 + $4,560 + $4,070 = $9,870.
          </p>
        </section>

        <section id="payback" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Moving-cost payback period</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            When a move does leave you ahead each year, divide the one-time cost of moving by the yearly gain to see how long
            it takes to earn the money back:
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <p className="text-indigo-900 font-semibold text-lg">
              Payback (years) = one-time moving costs ÷ yearly gain in take-home pay after higher living costs
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            In the example above, if her rent stayed the same she would be $2,785 a year ahead. With $6,000 of moving costs,
            payback takes about $6,000 ÷ $2,785 ≈ 2.2 years. If you expect to stay longer than the payback period, and the
            job is a career step up, the move starts to make financial sense. If the yearly gain is zero or negative, the
            case has to rest on career growth or quality of life, not money.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Changing states mid-year can also mean filing part-year resident returns in both states. Our <a href="/blog/mid-year-move-part-year-resident-tax-guide-2026/" className="text-indigo-600 font-semibold hover:underline">part-year resident tax guide</a> explains
            how that works.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>When this simple math falls short:</strong> if the offer includes stock compensation, a bigger 401(k)
            match, or cheaper health insurance, add those to the yearly gain. If you are married, run the numbers for the
            household, including whether a partner&apos;s job moves too. And if you would keep working remotely for the same
            employer, check which state can tax your wages before assuming anything changes.
          </p>
        </section>

        <section id="decision" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Decision checklist: is the move worth it?</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Does the new city improve long-term career growth?</li>
            <li>• Are you getting better benefits, equity, or flexibility?</li>
            <li>• Will your lifestyle feel better even if costs rise?</li>
            <li>• Can you negotiate a relocation bonus or housing stipend?</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            If the answer is mostly “yes,” the move can still be worth it. But do the math first.
          </p>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How much of a raise do I need to justify moving?</h3>
              <p className="text-slate-700">Enough that your take-home pay, minus the new city&apos;s higher costs, leaves you ahead each year, and enough to pay back moving costs within the time you expect to stay. Run both cities through a take-home pay calculator and a budget before deciding.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Will a raise push all my income into a higher bracket?</h3>
              <p className="text-slate-700">No. Only the dollars above a bracket threshold are taxed at the higher rate. A raise never lowers your take-home pay on its own; a state tax or higher living costs can.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is moving to a no-income-tax state always better?</h3>
              <p className="text-slate-700">Not always. Housing, insurance and property taxes can offset the savings. See our <a href="/blog/moving-to-florida-sunshine-tax-savings/" className="text-indigo-600 font-semibold hover:underline">Florida move tax guide</a> for an example of weighing both sides.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500">This article is educational and is not individualized financial or tax advice.</p>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• IRS, 2026 tax brackets and standard deduction (Rev. Proc. 2025-32), summarized in <a href="https://www.irs.gov/publications/p17" className="text-indigo-600 font-semibold hover:underline">IRS Publication 17</a></li>
            <li>• IRS Publication 15 (Circular E), FICA withholding rates: <a href="https://www.irs.gov/publications/p15" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p15</a></li>
            <li>• Social Security Administration, 2026 wage base: <a href="https://www.ssa.gov/oact/cola/cbb.html" className="text-indigo-600 font-semibold hover:underline">ssa.gov/oact/cola/cbb.html</a></li>
            <li>• Bureau of Labor Statistics, Consumer Price Index: <a href="https://www.bls.gov/cpi/" className="text-indigo-600 font-semibold hover:underline">bls.gov/cpi</a></li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default RaiseWorthMoving2025;

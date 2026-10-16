import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const EmergencyFundRule2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>⏱️ 6 min read</span>
          <span>•</span>
          <span>🛡️ Emergency Fund</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          How Much Cash Should You Keep? The 6-Month Emergency Fund Rule
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          The 6-month rule is a simple way to protect yourself from layoffs and income shocks. Here&apos;s how to size the
          cash buffer that actually keeps you safe.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate your 6-month survival number</h3>
              <p className="text-sm text-slate-600">
                Know exactly how much cash you need for a true safety net.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.EMERGENCY_FUND)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Emergency Guard →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('rule')} className="text-indigo-600 hover:underline">1. The 6-month rule</button></li>
          <li><button onClick={() => scrollToSection('why-six')} className="text-indigo-600 hover:underline">2. Why six months?</button></li>
          <li><button onClick={() => scrollToSection('expenses')} className="text-indigo-600 hover:underline">3. What counts as expenses?</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">4. Worked example</button></li>
          <li><button onClick={() => scrollToSection('scale')} className="text-indigo-600 hover:underline">5. When to scale up or down</button></li>
          <li><button onClick={() => scrollToSection('build')} className="text-indigo-600 hover:underline">6. How to build it and where to keep it</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">7. Common mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. FAQ</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="rule" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The rule in one line</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Multiply your essential monthly expenses by six. That&apos;s the cash buffer most households need for a layoff or
            medical surprise.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Notice what the rule is based on: <strong>expenses, not income</strong>. A household earning $120,000 that
            spends $4,000 a month on essentials needs a $24,000 buffer, not half of its salary. Sizing the fund to what
            you actually spend keeps the target realistic and stops you from parking more cash than you need in an account
            that barely keeps up with inflation.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <p className="text-indigo-900 font-semibold text-lg">
              Emergency fund target = essential monthly expenses × number of months of coverage (usually 3–6, sometimes more)
            </p>
          </div>
        </section>

        <section id="why-six" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why six months?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Six months is a rule of thumb, not a law of finance. It persists because it covers the most common expensive
            emergency for working households: a stretch without a paycheck. Finding a new job can take weeks or many months
            depending on your field, your seniority and the state of the job market, and the longest searches tend to
            happen during recessions, exactly when savings matter most.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            State unemployment insurance helps, but it usually replaces only part of your previous wages, is capped at a
            weekly maximum that varies by state, lasts a limited number of weeks, and may take time to start paying. Unemployment
            benefits are also taxable income on your federal return. A cash buffer fills the gap between what benefits
            pay and what your bills cost.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The same buffer also covers one-off shocks that don&apos;t involve losing a job: a high insurance deductible, an
            urgent car or home repair, emergency travel, or a temporary drop in hours. Having cash for these means you
            don&apos;t have to reach for a credit card that charges high interest.
          </p>
        </section>

        <section id="expenses" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Count only the essentials</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Include rent, utilities, groceries, insurance, and minimum debt payments. Skip discretionary spending like
            travel or dining out.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The fastest way to get this number is to pull the last three months of bank and credit card statements and
            average them. Then sort each line into &quot;must pay&quot; or &quot;could pause.&quot; Be honest about the
            must-pay list: if you would keep paying it during a layoff, it belongs in the number.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Include</th>
                  <th className="text-left p-4 font-black text-slate-900">Usually leave out</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Rent or mortgage payment (with property tax and insurance)</td>
                  <td className="p-4 text-slate-700">Restaurants, takeout and entertainment</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Utilities, phone and internet</td>
                  <td className="p-4 text-slate-700">Travel and vacations</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Groceries and household basics</td>
                  <td className="p-4 text-slate-700">Extra debt payments above the minimum</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Health, auto and renters/home insurance</td>
                  <td className="p-4 text-slate-700">Retirement and investment contributions</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Transportation (car payment, gas, transit)</td>
                  <td className="p-4 text-slate-700">Subscriptions you could cancel</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Minimum payments on all debts, childcare, prescriptions</td>
                  <td className="p-4 text-slate-700">Shopping and hobbies</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            One line that people often forget: <strong>health insurance after a job loss</strong>. If your coverage comes
            through your employer, keeping it through COBRA usually means paying the full premium yourself, which can be far
            more than your old paycheck deduction. Losing job-based coverage also opens a Special Enrollment Period on
            HealthCare.gov, where you may qualify for lower-cost marketplace coverage. Budget for one of these options.
            Our <a href="/aca-health-insurance-subsidy-calculator/" className="text-indigo-600 font-semibold hover:underline">ACA subsidy calculator</a> can
            estimate marketplace premiums based on a reduced income.
          </p>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Example (hypothetical):</strong> a renter with one W-2 job lists her must-pay costs:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Essential expense</th>
                  <th className="text-left p-4 font-black text-slate-900">Monthly</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Rent</td><td className="p-4 font-bold text-slate-900">$1,800</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Utilities</td><td className="p-4 font-bold text-slate-900">$250</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Groceries</td><td className="p-4 font-bold text-slate-900">$600</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Insurance (health, auto, renters)</td><td className="p-4 font-bold text-slate-900">$450</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Transportation</td><td className="p-4 font-bold text-slate-900">$350</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Minimum debt payments</td><td className="p-4 font-bold text-slate-900">$450</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Phone and internet</td><td className="p-4 font-bold text-slate-900">$150</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Other essentials (medicine, toiletries)</td><td className="p-4 font-bold text-slate-900">$150</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Total</td><td className="p-4 font-bold text-indigo-600">$4,200</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <p className="text-emerald-900 font-semibold text-lg">
              📊 <strong>Her targets:</strong>
            </p>
            <ul className="mt-2 space-y-1 text-base text-emerald-900">
              <li>• 3 months: $4,200 × 3 = <strong>$12,600</strong></li>
              <li>• 6 months: $4,200 × 6 = <strong>$25,200</strong></li>
              <li>• Saving $600/month from zero, the 6-month goal takes 42 months; at $900/month it takes 28 months</li>
            </ul>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            If she already has $8,000 saved, she needs $17,200 more for the full six months. That is a multi-year goal for
            most budgets, which is why it helps to set milestones (one month, then three, then six) rather than treating
            anything short of six months as failure.
          </p>
        </section>

        <section id="scale" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When to scale up or down</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Freelancers or single-income households may want 9-12 months. Dual-income households with stable jobs might
            keep 3-4 months.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Situation</th>
                  <th className="text-left p-4 font-black text-slate-900">Reasonable range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Two stable incomes, either could cover essentials alone</td><td className="p-4 font-bold text-slate-900">3–4 months</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Single earner with a stable W-2 job</td><td className="p-4 font-bold text-slate-900">6 months</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Single income with dependents, or a homeowner with an older house</td><td className="p-4 font-bold text-slate-900">6–9 months</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Freelancer, commission or seasonal income, or a cyclical industry</td><td className="p-4 font-bold text-slate-900">9–12 months</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Specialized role where job searches tend to run long</td><td className="p-4 font-bold text-slate-900">9–12 months</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Example (hypothetical):</strong> a freelance designer with $5,000 of monthly essentials and uneven client
            income targets nine months: $5,000 × 9 = $45,000. Self-employed people also need to keep money for quarterly
            taxes, and that money should sit <em>outside</em> the emergency fund. A tool like the <a href="/quarterly-estimated-tax-calculator/" className="text-indigo-600 font-semibold hover:underline">quarterly estimated tax calculator</a> helps
            you size that separate tax reserve.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Scaling down can make sense too. If you have high-interest credit card debt, a smaller starter fund (for example
            one month of essentials) while you attack the debt is often more efficient than holding six months of cash at a
            low rate while paying a high rate on a balance. See our guide to the <a href="/blog/financial-order-of-operations/" className="text-indigo-600 font-semibold hover:underline">financial order of operations</a> for
            how the emergency fund fits alongside debt payoff and retirement savings.
          </p>
        </section>

        <section id="build" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to build it and where to keep it</h2>
          <div className="space-y-6 mt-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Set a starter goal</h3>
                <p className="text-slate-700 mb-3">Aim for one month of essentials first. It covers most surprise bills and builds the habit.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Automate a transfer on payday</h3>
                <p className="text-slate-700 mb-3">A fixed transfer the day your paycheck lands works better than saving whatever is left at month-end.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Route windfalls to the fund</h3>
                <p className="text-slate-700 mb-3">Tax refunds, bonuses and side income can close the gap far faster than monthly savings alone.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Refill after you use it</h3>
                <p className="text-slate-700 mb-3">Using the fund is the point. Restart the automatic transfer right away once the emergency passes.</p>
              </div>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Keep the money somewhere that is <strong>safe, liquid and separate</strong> from your checking account: a
            high-yield savings account or money market deposit account at an FDIC-insured bank (or NCUA-insured credit union)
            is the usual choice. Avoid stocks for this money; a market drop can coincide with a layoff. Interest is taxable as
            ordinary income. As an illustration only, at a 4% annual yield a $25,200 fund would earn about $1,008 in a year
            before tax. Actual rates change often, so compare current offers yourself.
          </p>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes</h2>
          <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
            <ul className="space-y-2 text-slate-700">
              <li>• <strong>Using gross income instead of expenses.</strong> It inflates the target and makes it feel unreachable.</li>
              <li>• <strong>Forgetting irregular bills.</strong> Annual insurance premiums, car registration and medical deductibles belong in the plan.</li>
              <li>• <strong>Counting a credit limit as savings.</strong> Available credit can be cut and costs interest when used.</li>
              <li>• <strong>Mixing goals.</strong> A vacation or down payment fund is not an emergency fund. Keep them in separate accounts.</li>
              <li>• <strong>Never revisiting the number.</strong> Recalculate after a move, a new child, a new car loan or a change in jobs.</li>
            </ul>
          </div>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is six months of expenses too much?</h3>
              <p className="text-slate-700">
                For a dual-income household with stable jobs and no dependents, three to four months may be enough. Six months
                is a sensible default for single earners. More than twelve months of cash is usually more than a typical
                household needs, unless income is very irregular.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Should I save an emergency fund or pay off debt first?</h3>
              <p className="text-slate-700">
                Many people build a small starter fund first so a surprise bill doesn&apos;t go back on a card, then focus
                on high-interest debt, then finish the full fund. Our <a href="/credit-card-debt-strategist/" className="text-indigo-600 font-semibold hover:underline">credit card debt strategist</a> can
                show how quickly extra payments clear a balance.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Can I keep my emergency fund in a Roth IRA?</h3>
              <p className="text-slate-700">
                Roth IRA contributions (not earnings) can generally be withdrawn without tax or penalty, so some people treat
                them as a backup layer. But the money is often invested, so its value can fall right when you need it. Cash
                in an insured savings account is the more reliable first layer.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Does a two-income household still need six months?</h3>
              <p className="text-slate-700">
                Check whether either income alone covers essentials. If yes, a smaller fund is reasonable. If the household
                needs both paychecks to pay the bills, treat it more like a single-income household.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-500">This article is educational and is not individualized financial advice.</p>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• Consumer Financial Protection Bureau, saving and emergency planning resources: <a href="https://www.consumerfinance.gov/" className="text-indigo-600 font-semibold hover:underline">consumerfinance.gov</a></li>
            <li>• HealthCare.gov, coverage options after losing job-based insurance: <a href="https://www.healthcare.gov/" className="text-indigo-600 font-semibold hover:underline">healthcare.gov</a></li>
            <li>• IRS Publication 17, taxability of unemployment compensation and interest income: <a href="https://www.irs.gov/publications/p17" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p17</a></li>
            <li>• Investor.gov, saving vs. investing basics: <a href="https://www.investor.gov/" className="text-indigo-600 font-semibold hover:underline">investor.gov</a></li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default EmergencyFundRule2026;

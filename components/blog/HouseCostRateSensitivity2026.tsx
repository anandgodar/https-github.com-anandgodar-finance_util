import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const HouseCostRateSensitivity2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>📊 Mortgages</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          What Does a $500,000 House Actually Cost per Month? (At 6%, 7%, and 8% Rates)
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Rate changes are brutal. A single point can add hundreds per month. Here&apos;s what a $500k home costs at 6%, 7%,
          and 8% rates, and why the rate slider matters more than most buyers expect.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Adjust the interest rate slider</h3>
              <p className="text-sm text-slate-600">
                See what you can afford by changing rates, taxes, and insurance in real time.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Mortgage Pro →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('assumptions')} className="text-indigo-600 hover:underline">1. The assumptions</button></li>
          <li><button onClick={() => scrollToSection('numbers')} className="text-indigo-600 hover:underline">2. Monthly cost comparison</button></li>
          <li><button onClick={() => scrollToSection('lifetime')} className="text-indigo-600 hover:underline">3. Lifetime interest at each rate</button></li>
          <li><button onClick={() => scrollToSection('piti')} className="text-indigo-600 hover:underline">4. Why PITI still matters</button></li>
          <li><button onClick={() => scrollToSection('buying-power')} className="text-indigo-600 hover:underline">5. Rate impact on buying power</button></li>
          <li><button onClick={() => scrollToSection('stress-test')} className="text-indigo-600 hover:underline">6. Run your own rate stress test</button></li>
          <li><button onClick={() => scrollToSection('levers')} className="text-indigo-600 hover:underline">7. Levers you control</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="assumptions" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The assumptions behind these numbers</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Every figure below is hypothetical and uses illustrative rates — not a quote and not a forecast of where rates are
            heading. The base case:
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• $500,000 purchase price with 20% down ($100,000), so a <strong>$400,000</strong> loan</li>
            <li>• 30-year fixed-rate mortgage</li>
            <li>• Property tax of 1.1% of value per year (about $458 a month)</li>
            <li>• Homeowners insurance of $2,400 a year ($200 a month)</li>
            <li>• No HOA dues and no PMI (because of the 20% down payment)</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            Principal and interest come from the standard amortization formula, M = P·r(1+r)<sup>n</sup> ÷ ((1+r)<sup>n</sup> − 1),
            with r equal to the annual rate divided by 12 and n = 360 payments.
          </p>
        </section>

        <section id="numbers" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Monthly cost at 6%, 7%, and 8%</h2>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Rate</th>
                  <th className="text-left p-4 font-black text-slate-900">Principal + interest ($400k loan)</th>
                  <th className="text-left p-4 font-black text-slate-900">Estimated PITI</th>
                  <th className="text-left p-4 font-black text-slate-900">P&amp;I if you borrow the full $500k</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">5.5%</td>
                  <td className="p-4 text-slate-700">~$2,271</td>
                  <td className="p-4 font-bold text-slate-900">~$2,929</td>
                  <td className="p-4 text-slate-700">~$2,839</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">6%</td>
                  <td className="p-4 text-slate-700">~$2,398</td>
                  <td className="p-4 font-bold text-slate-900">~$3,057</td>
                  <td className="p-4 text-slate-700">~$2,998</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">6.5%</td>
                  <td className="p-4 text-slate-700">~$2,528</td>
                  <td className="p-4 font-bold text-slate-900">~$3,187</td>
                  <td className="p-4 text-slate-700">~$3,160</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">7%</td>
                  <td className="p-4 text-slate-700">~$2,661</td>
                  <td className="p-4 font-bold text-slate-900">~$3,320</td>
                  <td className="p-4 text-slate-700">~$3,327</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">7.5%</td>
                  <td className="p-4 text-slate-700">~$2,797</td>
                  <td className="p-4 font-bold text-slate-900">~$3,455</td>
                  <td className="p-4 text-slate-700">~$3,496</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">8%</td>
                  <td className="p-4 text-slate-700">~$2,935</td>
                  <td className="p-4 font-bold text-slate-900">~$3,593</td>
                  <td className="p-4 text-slate-700">~$3,669</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            On the $400,000 loan, going from 6% to 7% adds about $263 a month, and 7% to 8% adds about $274. At these rate
            levels, each full percentage point raises principal and interest by roughly 11%, and each quarter point by about
            $65 a month. The last column shows why down payment size matters too: borrowing the full $500,000 at 6% costs more
            each month (~$2,998) than borrowing $400,000 at 8% (~$2,935). (Putting little or nothing down would usually also add mortgage
            insurance, which this column leaves out.)
          </p>
        </section>

        <section id="lifetime" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Lifetime interest at each rate</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you kept the $400,000 loan for the full 30 years, total interest would be roughly:
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• 6%: about <strong>$463,400</strong></li>
            <li>• 7%: about <strong>$558,000</strong></li>
            <li>• 8%: about <strong>$656,600</strong></li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            Each point adds close to $100,000 of interest over the life of the loan. In practice most borrowers sell or
            refinance before year 30, so treat these as an upper bound. By comparison, a 15-year loan for the same $400,000 at
            6% would have a payment of about $3,375 but total interest of about $207,600.
          </p>
        </section>

        <section id="piti" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">PITI is still the full story</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Even if rates drop, property taxes and insurance remain. Always compare total PITI, not just principal and
            interest.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            In this example, taxes and insurance add about $658 a month at every rate. But that piece varies by location as
            much as rates vary over time: the same $500,000 house at a 2.0% tax rate instead of 1.1% would cost about $375 more
            per month — more than the jump from 6% to 7%. Insurance can move just as much in areas exposed to storms or
            wildfire. For a component-by-component walk-through, see{' '}
            <a href="/blog/piti-explained-mortgage-payment-breakdown/" className="text-indigo-600 font-semibold hover:underline">PITI explained</a>.
          </p>
        </section>

        <section id="buying-power" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Rate changes shrink buying power fast</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If rates rise, the same monthly budget buys less house. That&apos;s why rate sensitivity is the fastest way to
            evaluate affordability.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Flip the math around. Suppose your budget for principal and interest is $2,500 a month and you will put 20% down:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Rate</th>
                  <th className="text-left p-4 font-black text-slate-900">Max loan for $2,500 P&amp;I</th>
                  <th className="text-left p-4 font-black text-slate-900">Approx. home price (20% down)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">5.5%</td><td className="p-4 text-slate-700">~$440,300</td><td className="p-4 font-bold text-slate-900">~$550,000</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">6%</td><td className="p-4 text-slate-700">~$417,000</td><td className="p-4 font-bold text-slate-900">~$521,000</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">7%</td><td className="p-4 text-slate-700">~$375,800</td><td className="p-4 font-bold text-slate-900">~$470,000</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">8%</td><td className="p-4 text-slate-700">~$340,700</td><td className="p-4 font-bold text-slate-900">~$426,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Moving from 6% to 7% cuts the loan you can carry by about $41,000, or roughly 10%. On the income side, a common
            28% front-end guideline would call for about $131,000 of gross income to carry the 6% PITI of ~$3,057, and about
            $154,000 at 8%. Check your own ratios with the{' '}
            <a href="/debt-to-income-ratio-calculator/" className="text-indigo-600 font-semibold hover:underline">debt-to-income ratio calculator</a>.
          </p>
        </section>

        <section id="stress-test" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Run your own rate stress test</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Before you make an offer, test the payment at more than one rate. A simple routine:
          </p>
          <ol className="space-y-2 text-lg text-slate-700">
            <li>1. Start with the rate on your pre-approval or a same-day quote, not a headline average.</li>
            <li>2. Add 0.5 and 1.0 percentage points and recompute principal and interest at each. Rates can move between pre-approval and lock.</li>
            <li>3. Add the actual property tax for the address (after any reassessment), a real insurance quote, HOA dues and any mortgage insurance.</li>
            <li>4. Compare the highest PITI with your take-home pay, not just gross income. If it only works at the best-case rate, the house is a stretch.</li>
            <li>5. Leave room for maintenance and an emergency fund after closing; a payment you can make while saving nothing is fragile.</li>
          </ol>
        </section>

        <section id="levers" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Levers you control when rates are high</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Shop several lenders.</strong> Quotes on the same day for the same borrower can differ; compare Loan Estimates, not advertised rates.</li>
            <li>• <strong>Improve your credit score</strong> before applying — pricing usually steps down at higher score tiers.</li>
            <li>• <strong>Consider points</strong> only if you will keep the loan past break-even; see the{' '}
              <a href="/blog/mortgage-points-break-even-2026/" className="text-indigo-600 font-semibold hover:underline">mortgage points break-even analysis</a>.</li>
            <li>• <strong>Look at a lower price or larger down payment</strong> — both shrink the amount every rate is applied to.</li>
            <li>• <strong>Don&apos;t bank on refinancing.</strong> A future rate drop is possible but not guaranteed, and refinancing has its own closing costs. Make sure the payment works at the rate you actually get.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently asked questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How much income do I need for a $500,000 house?</h3>
              <p className="text-slate-700">
                Under these assumptions and a 28% housing guideline, roughly $131,000 at 6% to $154,000 at 8%, before considering
                your other debts. Lenders also look at total debt-to-income, credit and reserves, so your number may differ.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is an ARM cheaper?</h3>
              <p className="text-slate-700">
                An adjustable-rate mortgage may start lower, but the payment can rise after the fixed period. Model the payment
                at the loan&apos;s maximum possible rate under its caps before relying on the starter rate.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Does the mortgage interest deduction change this?</h3>
              <p className="text-slate-700">
                Only if you itemize. Interest on up to $750,000 of acquisition debt is deductible, but with a 2026 standard
                deduction of $32,200 for married couples filing jointly, many buyers at this price point see little or no benefit.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Where can I try my own numbers?</h3>
              <p className="text-slate-700">
                The{' '}
                <a href="/mortgage-payment-calculator/" className="text-indigo-600 font-semibold hover:underline">mortgage payment calculator</a>{' '}
                lets you change price, down payment, rate, tax rate, insurance and HOA dues.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Consumer Financial Protection Bureau — shopping for a mortgage and comparing Loan Estimates: <a href="https://www.consumerfinance.gov/" className="text-indigo-600 font-semibold hover:underline">consumerfinance.gov</a></li>
            <li>• IRS Publication 936, Home Mortgage Interest Deduction: <a href="https://www.irs.gov/publications/p936" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p936</a></li>
          </ul>
          <p className="text-sm text-slate-500">
            All payments are hypothetical, use illustrative rates, and are computed with the standard amortization formula.
            This article is educational and is not individualized financial or lending advice.
          </p>
        </section>
      </article>
    </div>
  );
};

export default HouseCostRateSensitivity2026;

import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const MortgagePointsBreakEven2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>🧮 Mortgages</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Should You Pay Points on Your Mortgage in 2026? A Break-Even Analysis
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Mortgage points lower your interest rate but cost cash up front. The key question is how long you&apos;ll stay in
          the home — the <strong>break-even timeline</strong> decides if points are worth it.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Run the break-even math</h3>
              <p className="text-sm text-slate-600">
                Compare rates, points, and total interest to see the real payoff timeline.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.LOAN_COMPARE)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Mortgage Intel →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('points')} className="text-indigo-600 hover:underline">1. What mortgage points are</button></li>
          <li><button onClick={() => scrollToSection('break-even')} className="text-indigo-600 hover:underline">2. Break-even math</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">3. Worked example: $400,000 loan</button></li>
          <li><button onClick={() => scrollToSection('when-worth')} className="text-indigo-600 hover:underline">4. When points make sense</button></li>
          <li><button onClick={() => scrollToSection('when-skip')} className="text-indigo-600 hover:underline">5. When to skip points</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">6. Common mistakes</button></li>
          <li><button onClick={() => scrollToSection('taxes')} className="text-indigo-600 hover:underline">7. Points and your taxes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="points" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Mortgage points in plain English</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            One point costs 1% of your loan amount — $4,000 on a $400,000 loan. How much it lowers your rate is up to the
            lender and changes with market conditions; a reduction of around 0.25% per point is a common illustration, but
            your quotes may show more or less. You pay now to save later.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Be careful with terminology. <strong>Discount points</strong> buy down the rate. <strong>Origination points</strong>
            are a lender fee and don&apos;t lower anything. Your Loan Estimate lists both in the &quot;Origination Charges&quot;
            section, so read it line by line. The reverse also exists: a <strong>lender credit</strong> gives you cash toward
            closing costs in exchange for a higher rate.
          </p>
        </section>

        <section id="break-even" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Break-even: the only number that matters</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Break-even equals the upfront cost divided by monthly savings. If you won&apos;t keep the mortgage long enough,
            points are usually a losing bet.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-lg text-slate-700">
              Example: $4,000 in points ÷ $90/month savings = 44 months to break even.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            That simple version compares payments. A slightly more precise version compares <strong>interest</strong>: a lower
            rate also means more of each payment goes to principal, so your balance shrinks faster. That usually pulls the
            true break-even a bit earlier than the payment-based estimate. Either way, the method is the same:
          </p>
          <ol className="space-y-2 text-lg text-slate-700">
            <li>1. Get two quotes from the same lender on the same day: one with no points, one with points.</li>
            <li>2. Compute principal and interest for each with the amortization formula M = P·r(1+r)<sup>n</sup> ÷ ((1+r)<sup>n</sup> − 1).</li>
            <li>3. Divide the cost of the points by the monthly payment difference.</li>
            <li>4. Compare that number of months with how long you realistically expect to keep <em>this loan</em> — not just the house.</li>
          </ol>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: $400,000 loan</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Hypothetical quotes on a 30-year fixed $400,000 loan (rates are illustrative, not current market rates):
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Option</th>
                  <th className="text-left p-4 font-black text-slate-900">Upfront cost</th>
                  <th className="text-left p-4 font-black text-slate-900">Monthly P&amp;I</th>
                  <th className="text-left p-4 font-black text-slate-900">Simple break-even</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">No points, 6.75%</td>
                  <td className="p-4 text-slate-700">$0</td>
                  <td className="p-4 text-slate-700">$2,594</td>
                  <td className="p-4 font-bold text-slate-900">—</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">1 point, 6.50%</td>
                  <td className="p-4 text-slate-700">$4,000</td>
                  <td className="p-4 text-slate-700">$2,528 (saves $66)</td>
                  <td className="p-4 font-bold text-slate-900">~61 months</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">2 points, 6.25%</td>
                  <td className="p-4 text-slate-700">$8,000</td>
                  <td className="p-4 text-slate-700">$2,463 (saves $132)</td>
                  <td className="p-4 font-bold text-slate-900">~61 months</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            With one point, the payment-based break-even is about five years. Counting the faster principal paydown, the
            interest saved passes $4,000 at about month 48. Here is the net result of the 1-point option (payment savings plus
            the lower remaining balance, minus the $4,000) if you sell or refinance at different times:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Keep the loan for</th>
                  <th className="text-left p-4 font-black text-slate-900">Net gain (loss) from 1 point</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">3 years</td><td className="p-4 font-bold text-red-600">−$989</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">5 years</td><td className="p-4 font-bold text-slate-900">+$1,026</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">7 years</td><td className="p-4 font-bold text-slate-900">+$3,039</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">10 years</td><td className="p-4 font-bold text-slate-900">+$6,034</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">30 years (full term)</td><td className="p-4 font-bold text-emerald-600">+$19,803</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            These figures ignore what the $4,000 could have earned elsewhere. If that cash would otherwise sit in savings or an
            index fund, the real break-even is later than shown. You can model that opportunity cost with the{' '}
            <a href="/wealth-investment-projector/" className="text-indigo-600 font-semibold hover:underline">investment growth projector</a>.
          </p>
        </section>

        <section id="when-worth" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When points make sense</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• You plan to keep the loan beyond the break-even period.</li>
            <li>• You have extra cash after closing costs and emergency savings.</li>
            <li>• You&apos;re locking a long-term home and expect stable income.</li>
            <li>• A seller concession is paying for them — using seller credits on points can be a low-cost way to buy down the rate.</li>
          </ul>
        </section>

        <section id="when-skip" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When to skip points</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• You might refinance or move within 3-5 years.</li>
            <li>• You&apos;d rather keep cash for renovations or liquidity.</li>
            <li>• The rate reduction is tiny compared to the cost.</li>
            <li>• Paying points would push your down payment below 20% and add PMI — the PMI can easily cost more than the points save.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            The refinance risk deserves extra weight. If rates fall and you refinance in year three, the points you paid are
            gone. Buyers who expect rates to drop sometimes prefer a no-points loan precisely to keep that option cheap.
          </p>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes when comparing points</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Comparing quotes from different days.</strong> Rate sheets can change daily, so a points quote from Monday and a no-points quote from Thursday aren&apos;t comparable. Ask for both at once, ideally on the same Loan Estimate date.</li>
            <li>• <strong>Confusing time in the house with time in the loan.</strong> Many borrowers refinance or sell well before year 30. Your break-even has to beat how long you keep this specific mortgage.</li>
            <li>• <strong>Forgetting the cash cushion.</strong> Points are spent at closing, exactly when moving costs, furniture and surprise repairs hit. Don&apos;t buy points with money you may need in the first year.</li>
            <li>• <strong>Overlooking ARMs.</strong> On an adjustable-rate loan, points often lower only the initial rate — once the rate resets to index plus margin, the benefit may disappear. Ask the lender, because that can shorten the window to earn them back.</li>
          </ul>
        </section>

        <section id="taxes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Points and your taxes</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Points are treated as prepaid mortgage interest. Points paid to buy your main home can often be deducted in the
            year you pay them if IRS conditions are met; points paid on a refinance are generally deducted over the life of the
            loan. Either way, the deduction only helps if you itemize — and mortgage interest is deductible only on up to
            $750,000 of acquisition debt, a limit OBBBA made permanent. With a 2026 standard deduction of $16,100 (single) or
            $32,200 (married filing jointly), many borrowers get no tax benefit from points at all. IRS Publication 936 has the
            full rules.
          </p>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently asked questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Can I buy a fraction of a point?</h3>
              <p className="text-slate-700">
                Yes. Lenders usually price in fractions, such as 0.5 or 0.375 points. Ask for a pricing sheet that shows several
                rate and point combinations side by side.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Are points better than a bigger down payment?</h3>
              <p className="text-slate-700">
                Not automatically. Extra down payment reduces the balance and may remove PMI; points only change the rate. Run
                both through the same holding period and compare total cost.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What about temporary buydowns?</h3>
              <p className="text-slate-700">
                A 2-1 or 1-0 buydown lowers the rate only for the first year or two; it is funded upfront and then the rate rises
                to the note rate. Permanent discount points lower the rate for the whole loan.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How do I compare quotes with different points?</h3>
              <p className="text-slate-700">
                Put each offer into the{' '}
                <a href="/loan-comparison-tool/" className="text-indigo-600 font-semibold hover:underline">loan comparison tool</a>{' '}
                and look at total cost over your expected holding period. The{' '}
                <a href="/blog/loan-comparison-refinance-guide-2025/" className="text-indigo-600 font-semibold hover:underline">loan comparison and APR guide</a>{' '}
                walks through the process.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• IRS Publication 936, Home Mortgage Interest Deduction: <a href="https://www.irs.gov/publications/p936" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p936</a></li>
            <li>• Consumer Financial Protection Bureau — Loan Estimate and points: <a href="https://www.consumerfinance.gov/" className="text-indigo-600 font-semibold hover:underline">consumerfinance.gov</a></li>
          </ul>
          <p className="text-sm text-slate-500">
            Rates and point pricing in this article are illustrative; figures are computed with the standard amortization
            formula. This article is educational and is not individualized financial, tax, or lending advice.
          </p>
        </section>
      </article>
    </div>
  );
};

export default MortgagePointsBreakEven2026;

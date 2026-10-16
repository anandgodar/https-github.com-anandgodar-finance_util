import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const CarLoan72MonthCost2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>🚗 Auto Loans</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The True Cost of a 72-Month Car Loan
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          A lower monthly payment hides higher total interest. Long-term car loans keep you in debt longer and can leave
          you underwater for years.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate total interest on your car loan</h3>
              <p className="text-sm text-slate-600">
                Compare 60 vs 72 months and see the true cost of stretching the term.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.EMI_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use EMI Accelerator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('why')} className="text-indigo-600 hover:underline">1. Why 72-month loans cost more</button></li>
          <li><button onClick={() => scrollToSection('interest')} className="text-indigo-600 hover:underline">2. Interest math example</button></li>
          <li><button onClick={() => scrollToSection('underwater')} className="text-indigo-600 hover:underline">3. The negative equity problem</button></li>
          <li><button onClick={() => scrollToSection('tax')} className="text-indigo-600 hover:underline">4. The new car loan interest deduction</button></li>
          <li><button onClick={() => scrollToSection('afford')} className="text-indigo-600 hover:underline">5. How much car can you afford?</button></li>
          <li><button onClick={() => scrollToSection('alternatives')} className="text-indigo-600 hover:underline">6. Smarter alternatives</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. FAQ</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">8. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="why" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Longer terms mean more interest</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Stretching to 72 months lowers the monthly bill but increases total interest and slows equity build-up in the
            car.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Three things work against you on a long loan. First, you pay interest for more months, on a balance that falls
            more slowly. Second, lenders may charge a higher rate for longer terms, which compounds the first problem.
            Third, a car usually loses value fastest in its early years, while a 72-month loan pays down principal
            slowest in its early years. The result can be years of owing more than the car is worth.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            None of this means a 72-month loan is never reasonable. But the lower payment is not free; it is paid for with
            more interest and more risk.
          </p>
        </section>

        <section id="interest" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Interest math example</h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-lg text-slate-700">
              A $35,000 loan at 7%: 60 months ≈ $6,600 interest, 72 months ≈ $7,900 interest.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Hypothetical example:</strong> financing $35,000 at an illustrative 7% APR (not a current rate quote),
            with standard monthly amortization:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Term</th>
                  <th className="text-left p-4 font-black text-slate-900">Monthly Payment</th>
                  <th className="text-left p-4 font-black text-slate-900">Total Interest</th>
                  <th className="text-left p-4 font-black text-slate-900">Owed After 2 Years</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">48 months</td>
                  <td className="p-4 text-slate-700">$838.12</td>
                  <td className="p-4 font-bold text-slate-900">$5,230</td>
                  <td className="p-4 text-slate-700">$18,719</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">60 months</td>
                  <td className="p-4 text-slate-700">$693.04</td>
                  <td className="p-4 font-bold text-slate-900">$6,583</td>
                  <td className="p-4 text-slate-700">$22,445</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">72 months</td>
                  <td className="p-4 text-slate-700">$596.72</td>
                  <td className="p-4 font-bold text-slate-900">$7,964</td>
                  <td className="p-4 text-slate-700">$24,919</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">84 months</td>
                  <td className="p-4 text-slate-700">$528.24</td>
                  <td className="p-4 font-bold text-slate-900">$9,372</td>
                  <td className="p-4 text-slate-700">$26,677</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Going from 60 to 72 months saves about $96 a month but adds about <strong>$1,381</strong> of interest; 84
            months adds about $2,790 compared with 60. If the lender also prices the 72-month loan higher, say 7.5%
            instead of 7%, the payment becomes $605.15 and total interest rises to about $8,571, nearly $2,000 more than
            the 60-month loan at 7%. Try your own numbers in the{' '}
            <a href="/loan-emi-calculator/" className="text-indigo-600 font-semibold hover:underline">loan payment calculator</a>.
          </p>
        </section>

        <section id="underwater" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The negative equity problem</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Negative equity (being &quot;underwater&quot;) means you owe more than the car is worth. It matters if the car
            is totaled, stolen, or you want to sell or trade it in early.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Continuing the example:</strong> suppose the car is worth $24,000 after two years (a hypothetical value;
            depreciation varies widely by model and mileage). The 60-month borrower owes $22,445 and has about $1,555 of
            equity. The 72-month borrower owes $24,919, about <strong>$919 underwater</strong>. The 84-month borrower is
            about $2,677 underwater. Trading in an underwater car often means rolling that shortfall into the next loan,
            which makes the next loan even bigger.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold text-lg mb-2">💡 GAP coverage</p>
            <p className="text-indigo-800">
              Guaranteed Asset Protection (GAP) coverage pays the difference between an insurance payout and your loan
              balance if the car is totaled. It is more relevant on long loans with small down payments. Compare prices,
              as it is often available from your auto insurer as well as the dealer.
            </p>
          </div>
        </section>

        <section id="tax" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The new car loan interest deduction (2025–2028)</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The One Big Beautiful Bill Act created a federal deduction for tax years 2025 through 2028 of up to{' '}
            <strong>$10,000 a year</strong> of interest on loans for new, personal-use vehicles whose final assembly took
            place in the United States. The deduction phases out above $100,000 of modified AGI ($200,000 for married
            couples filing jointly). Used cars and leases do not qualify, and there are other requirements, so check
            current IRS guidance before you count on it.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            A deduction reduces taxable income, not the interest itself. In the 72-month example, first-year interest is
            about $2,296. For an eligible buyer in the 22% bracket, that deduction would cut federal tax by roughly $505.
            Helpful, but it does not change the conclusion: the extra $1,381 of interest from choosing 72 months over 60
            would only be offset by about $304 at a 22% rate, even if it were all deductible.
          </p>
        </section>

        <section id="afford" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How much car can you afford?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A popular rule of thumb is <strong>20/4/10</strong>: put at least 20% down, finance for no more than 4 years,
            and keep total transportation costs (payment, insurance, fuel) under about 10% of gross income. It is a
            guideline, not a law, but it keeps you away from most negative-equity traps.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            For example, a hypothetical buyer earning $90,000 a year has $7,500 of gross monthly income; the 60-month
            payment of $693 alone is about 9.2% of that before insurance and fuel. If the only way a car fits the budget
            is a 72- or 84-month term, that is often a sign the car is too expensive. Lenders will also look at the new
            payment in your{' '}
            <a href="/debt-to-income-ratio-calculator/" className="text-indigo-600 font-semibold hover:underline">debt-to-income ratio</a>,
            which can affect a future mortgage application.
          </p>
        </section>

        <section id="alternatives" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Smarter alternatives</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Put more down to shorten the term.</li>
            <li>• Choose a cheaper vehicle to keep payments manageable.</li>
            <li>• Refinance early if rates drop.</li>
            <li>• <strong>Get preapproved before visiting a dealer</strong> (bank or credit union) so you can compare the dealer&apos;s financing on APR and total cost, not monthly payment.</li>
            <li>• <strong>Take the long term, pay it like a short one.</strong> If you need the flexibility of a lower required payment, pay the 60-month amount anyway, as long as the loan has no prepayment penalty.</li>
            <li>• <strong>Consider a certified pre-owned car.</strong> A lower price can make a shorter term affordable.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            Putting $7,000 (20%) down in the example and financing $28,000 for 60 months at 7% gives a $554.43 payment,
            lower than the 72-month payment on the full amount, with about $5,266 of total interest.
          </p>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is a 72-month car loan ever a good idea?</h3>
              <p className="text-slate-700">It can work if the rate is low, you have a solid down payment, plan to keep the car well past the payoff date, and could afford a shorter term anyway.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Can I pay off a car loan early?</h3>
              <p className="text-slate-700">Usually, but check your contract for prepayment penalties and ask the lender to apply extra payments to principal.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Should I pay off my car loan or invest?</h3>
              <p className="text-slate-700">Compare the loan rate with your realistic after-tax return; our <a href="/blog/should-i-pay-off-debt-or-invest-2025/" className="text-indigo-600 font-semibold hover:underline">pay off debt or invest guide</a> walks through the math.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Does the interest deduction apply to my current loan?</h3>
              <p className="text-slate-700">Only if the loan and vehicle meet the requirements, including a new US-assembled vehicle for personal use and a loan taken out after 2024. Confirm with IRS guidance or a tax professional.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500">This article is educational and not individualized financial advice.</p>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• <a href="https://www.consumerfinance.gov/" className="text-indigo-600 hover:underline">Consumer Financial Protection Bureau</a>: auto loan shopping and negative equity resources</li>
            <li>• <a href="https://www.irs.gov/" className="text-indigo-600 hover:underline">Internal Revenue Service</a>: guidance on the car loan interest deduction (One Big Beautiful Bill Act provisions)</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default CarLoan72MonthCost2026;

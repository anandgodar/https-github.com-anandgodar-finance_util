import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const BiWeeklyMortgagePayments2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>💳 Loans</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Bi-Weekly Mortgage Payments: The &quot;Secret&quot; to Saving $50,000 in Interest
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Bi-weekly payments feel like a hack because 26 half-payments equal 13 full payments each year. That extra
          payment goes straight to principal and can cut years off your loan.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Simulate the impact of extra payments</h3>
              <p className="text-sm text-slate-600">
                Model bi-weekly payments and see how much interest you save.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.EMI_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Loan EMI Pro →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('biweekly')} className="text-indigo-600 hover:underline">1. Why bi-weekly works</button></li>
          <li><button onClick={() => scrollToSection('savings')} className="text-indigo-600 hover:underline">2. Interest savings example</button></li>
          <li><button onClick={() => scrollToSection('table')} className="text-indigo-600 hover:underline">3. Savings by loan size and rate</button></li>
          <li><button onClick={() => scrollToSection('diy-math')} className="text-indigo-600 hover:underline">4. How to estimate your own savings</button></li>
          <li><button onClick={() => scrollToSection('catch')} className="text-indigo-600 hover:underline">5. The catch: how your servicer applies payments</button></li>
          <li><button onClick={() => scrollToSection('tips')} className="text-indigo-600 hover:underline">6. Tips to set it up</button></li>
          <li><button onClick={() => scrollToSection('worth-it')} className="text-indigo-600 hover:underline">7. When it isn&apos;t the best use of cash</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="biweekly" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Bi-weekly payments add one extra payment</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Paying half your mortgage every two weeks results in 26 half-payments, which equals 13 full payments per
            year. That extra payment knocks down principal faster.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            There is no magic in the calendar itself. The savings come almost entirely from paying one extra monthly payment
            per year, and every extra dollar of principal stops accruing interest for the rest of the loan. That is why you can
            get nearly the same result by adding 1/12 of your payment to each regular monthly payment — no special program
            required.
          </p>
        </section>

        <section id="savings" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Interest savings example</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Hypothetical: a $350,000 30-year fixed loan at an illustrative 7% rate.
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Regular monthly payment (principal + interest): <strong>$2,329</strong></li>
            <li>• Total interest if you pay monthly for 30 years: <strong>about $488,300</strong></li>
            <li>• Bi-weekly equivalent: $1,164 every two weeks, which is like adding <strong>$194</strong> a month</li>
            <li>• Payoff time: about <strong>23 years 9 months</strong> — roughly 6 years 3 months sooner</li>
            <li>• Interest saved: about <strong>$119,500</strong></li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            The exact number depends on your rate and start date, and on whether your servicer credits each half-payment as
            it arrives. Applying the extra as a monthly $194 principal payment gives almost the same result as a true
            bi-weekly schedule in this example (within about $1,100 of interest).
          </p>
        </section>

        <section id="table" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Savings by loan size and rate</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Illustrative 30-year loans, starting the extra payments from the first month. &quot;Extra per month&quot; is the 1/12
            payment that a bi-weekly schedule effectively adds.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Loan &amp; rate</th>
                  <th className="text-left p-4 font-black text-slate-900">Monthly P&amp;I</th>
                  <th className="text-left p-4 font-black text-slate-900">Extra per month</th>
                  <th className="text-left p-4 font-black text-slate-900">Interest saved</th>
                  <th className="text-left p-4 font-black text-slate-900">Paid off sooner</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">$200,000 at 6%</td>
                  <td className="p-4 text-slate-700">$1,199</td>
                  <td className="p-4 text-slate-700">$100</td>
                  <td className="p-4 font-bold text-slate-900">~$49,100</td>
                  <td className="p-4 text-slate-700">5 yrs 5 mos</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">$250,000 at 6.5%</td>
                  <td className="p-4 text-slate-700">$1,580</td>
                  <td className="p-4 text-slate-700">$132</td>
                  <td className="p-4 font-bold text-slate-900">~$72,700</td>
                  <td className="p-4 text-slate-700">5 yrs 10 mos</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">$350,000 at 7%</td>
                  <td className="p-4 text-slate-700">$2,329</td>
                  <td className="p-4 text-slate-700">$194</td>
                  <td className="p-4 font-bold text-slate-900">~$119,500</td>
                  <td className="p-4 text-slate-700">6 yrs 3 mos</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">$450,000 at 6.5%</td>
                  <td className="p-4 text-slate-700">$2,844</td>
                  <td className="p-4 text-slate-700">$237</td>
                  <td className="p-4 font-bold text-slate-900">~$130,900</td>
                  <td className="p-4 text-slate-700">5 yrs 10 mos</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Starting later shrinks the benefit, because there is less interest left to avoid. On the $350,000 loan at 7%,
            starting the extra payments in year six instead of month one saves about $76,300 and pays the loan off about
            4 years 5 months early — still meaningful, but well below the $119,500 from starting on day one.
          </p>
        </section>

        <section id="diy-math" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to estimate your own savings</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            You don&apos;t need a special calculator to get a good estimate. Work through these steps with your latest mortgage
            statement in hand:
          </p>
          <ol className="space-y-2 text-lg text-slate-700">
            <li>1. Find your current principal balance, interest rate and the principal-and-interest part of your payment (leave out escrow — extra money for taxes and insurance doesn&apos;t reduce your loan).</li>
            <li>2. Divide the P&amp;I payment by 12. That is the extra principal a bi-weekly schedule effectively adds each month.</li>
            <li>3. Rebuild the amortization schedule with that extra amount added every month, starting from your current balance, and note the month the balance hits zero.</li>
            <li>4. Compare total interest with and without the extra payment. The difference is your estimated savings; the month difference is how much sooner you&apos;ll be debt-free.</li>
          </ol>
          <p className="text-lg text-slate-700 leading-relaxed">
            The{' '}
            <a href="/loan-emi-calculator/" className="text-indigo-600 font-semibold hover:underline">loan payment calculator</a>{' '}
            can help with steps 3 and 4. Try a few extra-payment amounts — even $50 or $100 a month shows how sensitive the
            payoff date is to small, consistent prepayments.
          </p>
        </section>

        <section id="catch" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The catch: how your servicer applies payments</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Many mortgage servicers don&apos;t accept partial payments as payments. If you send half, they may hold it in a
            &quot;suspense&quot; or &quot;unapplied funds&quot; account until the other half arrives, then apply one full monthly
            payment. In that case the extra principal only shows up when enough has accumulated, and you get less benefit than
            the tables above suggest. Before you start, ask your servicer three questions:
          </p>
          <ol className="space-y-2 text-lg text-slate-700">
            <li>1. Do you offer an official bi-weekly plan, and is there any fee?</li>
            <li>2. How are partial payments handled — applied immediately or held?</li>
            <li>3. How do I mark an additional payment as &quot;principal only&quot;?</li>
          </ol>
          <p className="text-lg text-slate-700 leading-relaxed">
            Also confirm your loan has no prepayment penalty. They are uncommon on standard residential mortgages today, but
            your note and closing disclosure will say for sure.
          </p>
        </section>

        <section id="tips" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Tips to set it up</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Confirm your lender credits payments immediately.</li>
            <li>• Avoid third-party programs that charge unnecessary fees.</li>
            <li>• Set calendar reminders to avoid missing a payment.</li>
            <li>• Simplest DIY version: add 1/12 of your P&amp;I to each monthly payment as extra principal.</li>
            <li>• If you are paid every two weeks, the two &quot;third paycheck&quot; months each year are a natural time to send a half-payment of extra principal.</li>
            <li>• Check your statements: the principal balance should drop by more than the scheduled amount.</li>
          </ul>
        </section>

        <section id="worth-it" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When it isn&apos;t the best use of cash</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Paying down a mortgage early earns a guaranteed return equal to your interest rate, which is attractive — but money
            sent to the lender is hard to get back. It usually makes sense to handle these first:
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• An emergency fund of several months of expenses.</li>
            <li>• Any employer 401(k) match, which is an immediate return on your contribution.</li>
            <li>• High-interest debt such as credit cards.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            After that, the choice between prepaying the mortgage and investing depends on your rate, tax situation and risk
            tolerance. Our guides on{' '}
            <a href="/blog/should-i-pay-off-debt-or-invest-2025/" className="text-indigo-600 font-semibold hover:underline">paying off debt vs. investing</a>{' '}
            and the{' '}
            <a href="/blog/financial-order-of-operations/" className="text-indigo-600 font-semibold hover:underline">financial order of operations</a>{' '}
            walk through that decision.
          </p>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently asked questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Does bi-weekly lower my monthly payment?</h3>
              <p className="text-slate-700">
                No. It raises what you pay per year by one payment. If you want a lower required payment after paying extra,
                ask your servicer about a recast.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is a bi-weekly plan better than refinancing to 15 years?</h3>
              <p className="text-slate-700">
                They solve different problems. A 15-year loan usually has a lower rate but a required higher payment. Extra
                payments are flexible: you can stop in a tight month. Compare both in the{' '}
                <a href="/mortgage-payment-calculator/" className="text-indigo-600 font-semibold hover:underline">mortgage payment calculator</a>.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Does it work on car or student loans?</h3>
              <p className="text-slate-700">
                The same principle applies to any amortizing loan with simple interest: extra principal reduces future interest.
                Check how the lender applies extra payments first.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Will paying extra reduce my mortgage interest deduction?</h3>
              <p className="text-slate-700">
                Yes, slightly, because you pay less interest. But the deduction only matters if you itemize, and saving a dollar of
                interest is always worth more than deducting it.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Consumer Financial Protection Bureau — mortgage servicing and prepayment: <a href="https://www.consumerfinance.gov/" className="text-indigo-600 font-semibold hover:underline">consumerfinance.gov</a></li>
            <li>• IRS Publication 936, Home Mortgage Interest Deduction: <a href="https://www.irs.gov/publications/p936" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p936</a></li>
          </ul>
          <p className="text-sm text-slate-500">
            Figures are hypothetical, use illustrative rates, and are computed with the standard amortization formula. This
            article is educational and is not individualized financial advice.
          </p>
        </section>
      </article>
    </div>
  );
};

export default BiWeeklyMortgagePayments2026;

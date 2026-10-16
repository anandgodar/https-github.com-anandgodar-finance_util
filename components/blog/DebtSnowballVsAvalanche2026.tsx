import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const DebtSnowballVsAvalanche2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>💳 Debt Payoff</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Snowball vs. Avalanche: Which Debt Payoff Method Saves You More Money?
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          The avalanche method wins on math, but the snowball method wins on momentum. Learn how each strategy works and
          which one fits your personality and balance sheet.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Model both payoff strategies</h3>
              <p className="text-sm text-slate-600">
                Compare payoff dates and interest costs for snowball vs avalanche.
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
          <li><button onClick={() => scrollToSection('basics')} className="text-indigo-600 hover:underline">1. How both methods start</button></li>
          <li><button onClick={() => scrollToSection('avalanche')} className="text-indigo-600 hover:underline">2. Avalanche method</button></li>
          <li><button onClick={() => scrollToSection('snowball')} className="text-indigo-600 hover:underline">3. Snowball method</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">4. Worked example: same debts, both methods</button></li>
          <li><button onClick={() => scrollToSection('which')} className="text-indigo-600 hover:underline">5. Which one should you choose?</button></li>
          <li><button onClick={() => scrollToSection('exceptions')} className="text-indigo-600 hover:underline">6. When neither rule applies</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">7. Common mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. FAQ</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="basics" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How both methods start</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Snowball and avalanche share the same engine. You pick a fixed monthly amount for debt, pay the minimum on
            every account, and send every extra dollar to one <strong>target</strong> debt. When the target is paid off,
            its old payment rolls into the next target, so your payment on each new target keeps growing. The only
            difference is how you rank the targets.
          </p>
          <ol className="space-y-2 text-lg text-slate-700">
            <li>1. List every debt with its balance, APR, and minimum payment.</li>
            <li>2. Decide your total monthly debt budget (minimums plus extra).</li>
            <li>3. Rank the debts: by APR (avalanche) or by balance (snowball).</li>
            <li>4. Pay minimums on all, extra on the top-ranked debt.</li>
            <li>5. When one is gone, roll its whole payment to the next.</li>
          </ol>
        </section>

        <section id="avalanche" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Avalanche: highest interest first</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The avalanche method targets the highest APR first, minimizing total interest paid. It&apos;s the mathematically
            optimal strategy.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The logic is simple: a dollar sent to a 24% card stops 24 cents a year of interest, while the same dollar sent
            to an 8% loan stops only 8 cents. The catch is that your highest-rate debt may also be your biggest, so the
            first payoff can take a long time.
          </p>
        </section>

        <section id="snowball" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Snowball: smallest balance first</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The snowball method knocks out small balances quickly for psychological wins. That momentum helps many people
            stay consistent long enough to finish.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Each paid-off account also removes a bill, a due date, and a minimum payment from your month, which frees up
            cash flow sooner and makes the plan easier to manage.
          </p>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: same debts, both methods</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Hypothetical example:</strong> a borrower has three debts and can put $650 a month toward them. The
            minimums total $360, leaving $290 extra. (Rates are illustrative. To keep the math simple, minimums stay fixed
            and interest is charged monthly at APR ÷ 12; real card minimums usually shrink as the balance falls.)
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Debt</th>
                  <th className="text-left p-4 font-black text-slate-900">Balance</th>
                  <th className="text-left p-4 font-black text-slate-900">APR</th>
                  <th className="text-left p-4 font-black text-slate-900">Minimum</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Personal loan</td>
                  <td className="p-4 text-slate-700">$1,200</td>
                  <td className="p-4 text-slate-700">8%</td>
                  <td className="p-4 text-slate-700">$50</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Card B</td>
                  <td className="p-4 text-slate-700">$4,500</td>
                  <td className="p-4 text-slate-700">19%</td>
                  <td className="p-4 text-slate-700">$110</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Card C</td>
                  <td className="p-4 text-slate-700">$8,000</td>
                  <td className="p-4 text-slate-700">24%</td>
                  <td className="p-4 text-slate-700">$200</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Result</th>
                  <th className="text-left p-4 font-black text-slate-900">Snowball</th>
                  <th className="text-left p-4 font-black text-slate-900">Avalanche</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Payoff order</td>
                  <td className="p-4 text-slate-700">Loan → Card B → Card C</td>
                  <td className="p-4 text-slate-700">Card C → Card B → Loan</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">First debt gone</td>
                  <td className="p-4 text-slate-700">Month 4</td>
                  <td className="p-4 text-slate-700">Month 20</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Debt-free</td>
                  <td className="p-4 text-slate-700">Month 28</td>
                  <td className="p-4 text-slate-700">Month 27</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Total interest</td>
                  <td className="p-4 font-bold text-slate-900">$3,935</td>
                  <td className="p-4 font-bold text-emerald-600">$3,402</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Avalanche saves about <strong>$533</strong> and one month here. Snowball delivers its first win 16 months
            earlier. Both are dramatically better than paying minimums with no extra: in this same setup, paying only
            the $360 of minimums (and rolling each freed minimum forward) takes 66 months and about $9,722 in interest.
            The extra $290 a month matters far more than which order you choose.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The gap between the methods grows when your smallest debts carry your lowest rates and shrinks to zero when
            your smallest debt is also your highest-rate debt. Run your own list through the{' '}
            <a href="/credit-card-debt-strategist/" className="text-indigo-600 font-semibold hover:underline">credit card debt payoff calculator</a>{' '}
            to see your actual difference.
          </p>
        </section>

        <section id="which" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Which method wins for you?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you&apos;re disciplined and want to minimize interest, go avalanche. If you need quick wins to stay motivated,
            snowball can be more sustainable.
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Choose avalanche</strong> if your high-APR debts are large, the interest gap is meaningful, and you trust yourself to stick with a plan for many months before seeing a payoff.</li>
            <li>• <strong>Choose snowball</strong> if you&apos;ve started and stopped before, have several small balances, or want fewer bills quickly.</li>
            <li>• <strong>Hybrid:</strong> clear one or two tiny balances first for a quick win, then switch to avalanche for the rest.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            The best method is the one you actually finish. A plan you abandon in month six saves nothing.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            A practical tie-breaker: model both orders with your real numbers. If the avalanche saves only a few dollars a
            month, the motivation of early snowball wins may be worth more. If it saves hundreds or thousands of dollars,
            the avalanche usually deserves the extra patience.
          </p>
        </section>

        <section id="exceptions" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When neither rule applies</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Promotional or deferred-interest balances.</strong> A 0% balance with a deadline may need to jump the queue so it is gone before the promo ends, especially on store cards that charge deferred interest back to the purchase date.</li>
            <li>• <strong>Secured debts behind on payments.</strong> Catching up on a car loan or mortgage to avoid repossession or foreclosure comes before either strategy.</li>
            <li>• <strong>Federal student loans.</strong> These may qualify for income-driven repayment or forgiveness, so extra payments there may be less valuable. Check your options at studentaid.gov.</li>
            <li>• <strong>No emergency savings.</strong> Without a small cushion, the next surprise expense lands back on a card. Many plans keep a starter fund first; see the <a href="/blog/financial-order-of-operations/" className="text-indigo-600 font-semibold hover:underline">financial order of operations</a>.</li>
          </ul>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Not rolling payments forward.</strong> If you spend a paid-off debt&apos;s old payment, you lose the &quot;snowball&quot; effect in both methods.</li>
            <li>• <strong>Adding new charges.</strong> Paying down a card while still using it can leave the balance flat.</li>
            <li>• <strong>Missing a minimum.</strong> Late fees and penalty APRs can wipe out the savings. Automate every minimum.</li>
            <li>• <strong>Ignoring the rate itself.</strong> Asking an issuer for a lower APR, or moving a balance to a lower-cost loan, can matter as much as the payoff order.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is avalanche always cheaper?</h3>
              <p className="text-slate-700">With the same budget and no other changes, targeting the highest APR first produces the same or lower total interest. The difference can be small or zero depending on your debts.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Can I switch methods midway?</h3>
              <p className="text-slate-700">Yes. The rolling-payment mechanics are identical, so you can change the target order at any time.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Do these methods work for car loans and student loans?</h3>
              <p className="text-slate-700">Yes, as long as the loan allows extra payments toward principal without penalty. Confirm how your lender applies extra payments.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What about a debt consolidation loan?</h3>
              <p className="text-slate-700">A lower-rate loan can reduce interest, but only if you stop adding new card balances. Compare offers with the <a href="/loan-comparison-tool/" className="text-indigo-600 font-semibold hover:underline">loan comparison tool</a>.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500">This article is educational and not individualized financial advice.</p>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• <a href="https://www.consumerfinance.gov/" className="text-indigo-600 hover:underline">Consumer Financial Protection Bureau</a>: credit card and debt repayment resources</li>
            <li>• <a href="https://studentaid.gov/" className="text-indigo-600 hover:underline">Federal Student Aid</a>: federal student loan repayment options</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default DebtSnowballVsAvalanche2026;

import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const LatteFactorBigWins2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>☕ Wealth Building</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The &quot;Latte Factor&quot; vs. Big Wins: What Actually Builds Wealth?
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Coffee habits matter, but your biggest wins come from housing, vehicles, and tax strategy. Focus on the big
          levers and the small ones become easier to handle.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Audit your big 3 expenses</h3>
              <p className="text-sm text-slate-600">
                See where housing, transport, and taxes are squeezing your budget.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.DASHBOARD)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open Dashboard →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('latte')} className="text-indigo-600 hover:underline">1. The latte factor myth</button></li>
          <li><button onClick={() => scrollToSection('compare')} className="text-indigo-600 hover:underline">2. Small habits vs. big wins, in dollars</button></li>
          <li><button onClick={() => scrollToSection('big-wins')} className="text-indigo-600 hover:underline">3. The big wins that matter</button></li>
          <li><button onClick={() => scrollToSection('audit')} className="text-indigo-600 hover:underline">4. A 30-minute big-wins audit</button></li>
          <li><button onClick={() => scrollToSection('small-matters')} className="text-indigo-600 hover:underline">5. When small habits do matter</button></li>
          <li><button onClick={() => scrollToSection('balance')} className="text-indigo-600 hover:underline">6. Balancing both</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">8. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="latte" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Small habits add up, but they aren&apos;t the main driver</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Cutting $5 coffee helps, but it won&apos;t fix a high rent or an oversized car payment. The big bills dominate your
            savings rate.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The &quot;latte factor,&quot; a phrase popularized by personal finance author David Bach, is the idea that small,
            repeated purchases quietly drain money that could be invested. The math behind it is real: $5 a day is $1,825 a
            year. The debate is about priority. Skipping a daily coffee takes willpower every single day, while renegotiating
            rent or choosing a cheaper car is one decision that can save several times as much.
          </p>
        </section>

        <section id="compare" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Small habits vs. big wins, in dollars</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The table compares one small habit with three hypothetical big-ticket changes. Each annual saving is assumed to be
            invested at the end of the year for 30 years at a 5% real (after-inflation) return. These are illustrations, not
            predictions.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Change</th>
                  <th className="text-left p-4 font-black text-slate-900">Saved per year</th>
                  <th className="text-left p-4 font-black text-slate-900">Invested 30 years at 5%</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Skip a $5 daily coffee</td>
                  <td className="p-4 text-slate-700">$1,825</td>
                  <td className="p-4 font-bold text-slate-900">$121,251</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Rent for $600/month less</td>
                  <td className="p-4 text-slate-700">$7,200</td>
                  <td className="p-4 font-bold text-slate-900">$478,360</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Car payment $300/month lower</td>
                  <td className="p-4 text-slate-700">$3,600</td>
                  <td className="p-4 font-bold text-slate-900">$239,180</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Tax saved by moving $5,000 into a pre-tax 401(k) in the 22% bracket</td>
                  <td className="p-4 text-slate-700">$1,100</td>
                  <td className="p-4 font-bold text-slate-900">$73,083</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The coffee line is not trivial — over $120,000 is real money. But the rent change alone is worth about four times
            as much, and it is a single decision rather than 365 a year. The tax line understates the benefit, because the
            $5,000 contribution itself is also invested; the $1,100 is just the federal income tax you avoid that year.
          </p>
        </section>

        <section id="big-wins" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Focus on the big three</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Housing: rent, mortgage, and utilities.</li>
            <li>• Transportation: car payments, insurance, and fuel.</li>
            <li>• Taxes: optimize deductions and retirement contributions.</li>
          </ul>
          <h3 className="text-2xl font-black text-slate-900 mt-8">Housing</h3>
          <p className="text-lg text-slate-700 leading-relaxed">
            Housing is usually the largest line in a budget. Options include a roommate, a smaller place, a cheaper
            neighborhood, or buying less house than the lender approves. If you are weighing a purchase, the{' '}
            <a href="/blog/how-much-house-can-i-afford-2025/" className="text-indigo-600 font-semibold hover:underline">how much house can I afford guide</a>{' '}
            shows how payment, taxes and insurance add up.
          </p>
          <h3 className="text-2xl font-black text-slate-900 mt-8">Transportation</h3>
          <p className="text-lg text-slate-700 leading-relaxed">
            Long loan terms make expensive cars look affordable month to month while adding interest and keeping you
            underwater longer. Buying a reliable used car, keeping it longer, or going down to one car in a two-car household
            can be worth thousands per year. See{' '}
            <a href="/blog/72-month-car-loan-true-cost/" className="text-indigo-600 font-semibold hover:underline">the true cost of a 72-month car loan</a>.
          </p>
          <h3 className="text-2xl font-black text-slate-900 mt-8">Taxes</h3>
          <p className="text-lg text-slate-700 leading-relaxed">
            For 2026 you can defer up to $24,500 into a 401(k) ($8,000 more at 50+), put $7,500 into an IRA, and $4,400
            (self-only) or $8,750 (family) into an HSA if you have a qualifying high-deductible plan. HSA contributions made
            through payroll also avoid Social Security and Medicare tax. Our{' '}
            <a href="/blog/max-out-401k-take-home-pay/" className="text-indigo-600 font-semibold hover:underline">401(k) take-home pay breakdown</a>{' '}
            shows why a contribution costs less than it looks.
          </p>
        </section>

        <section id="audit" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">A 30-minute big-wins audit</h2>
          <ol className="list-decimal list-inside space-y-2 text-lg text-slate-700">
            <li><strong>Total your fixed costs.</strong> Housing, car payments, insurance, phone and subscriptions from last month&apos;s statements.</li>
            <li><strong>Find the share of take-home pay.</strong> Divide each by your monthly net income. The largest percentages are your biggest levers.</li>
            <li><strong>Price one change per category.</strong> A quote for cheaper car insurance, a lease renewal negotiation, a 401(k) contribution increase.</li>
            <li><strong>Redirect the savings automatically.</strong> Set up a transfer for the amount saved on the day the change takes effect, so it doesn&apos;t get absorbed by other spending.</li>
          </ol>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold text-lg">
              📊 <strong>Hypothetical example:</strong> Someone with $5,000 a month of take-home pay spends $2,000 on rent
              (40%) and $600 on a car payment (12%). Moving to $1,500 rent and a $300 payment frees $800 a month — $9,600 a
              year — which raises their savings rate by about 16 percentage points of take-home pay. Skipping a daily $5 coffee
              would add about 3 points.
            </p>
          </div>
        </section>

        <section id="small-matters" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When small habits do matter</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The big-wins argument has limits. Small spending deserves real attention in a few situations:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-slate-700">
            <li><strong>Your big costs are already low.</strong> If rent is shared and the car is paid off, discretionary spending may be the only lever left.</li>
            <li><strong>Many small costs add up to a big one.</strong> Several streaming services, delivery fees and app subscriptions together can rival a car payment.</li>
            <li><strong>You are carrying a credit card balance.</strong> At a hypothetical 24% APR, everyday purchases left on a card cost far more than their sticker price. Our{' '}
              <a href="/credit-card-debt-strategist/" className="text-indigo-600 font-semibold hover:underline">credit card debt strategist</a> shows the payoff math.</li>
            <li><strong>You are building a first emergency fund.</strong> Early on, every few hundred dollars shortens the time to a cash cushion.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            In each case the principle is the same: find the largest dollar amount you can change with the least ongoing
            effort, and start there.
          </p>
        </section>

        <section id="balance" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Balance big wins with small habits</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Nail the big wins first, then automate small savings. That combination builds wealth faster than any single
            tactic.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Small purchases still matter when they are mindless rather than chosen. A useful test: if you would happily pay
            for the coffee again, keep it; if a subscription renews and you forgot it existed, cancel it. Spending on what you
            value while cutting what you don&apos;t is more sustainable than blanket deprivation, and it is easier when the big
            costs are already under control. For a full budget framework, see the{' '}
            <a href="/blog/budgeting-guide-2025/" className="text-indigo-600 font-semibold hover:underline">budgeting guide</a>.
          </p>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently asked questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is the latte factor a myth?</h3>
              <p className="text-slate-700">
                The arithmetic is not a myth — small amounts invested for decades grow. The weakness is the emphasis: for
                most budgets, housing, transportation and taxes are far bigger levers.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What counts as a &quot;big win&quot;?</h3>
              <p className="text-slate-700">
                Any change that permanently lowers a recurring cost by hundreds of dollars a month or increases tax-advantaged
                saving — for example a lower rent, a cheaper car, refinancing high-interest debt, or capturing a 401(k) match.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Should I pay off debt before investing the savings?</h3>
              <p className="text-slate-700">
                High-interest debt such as credit cards usually comes first. Our{' '}
                <a href="/blog/financial-order-of-operations/" className="text-indigo-600 font-semibold hover:underline">financial order of operations</a>{' '}
                walks through the sequence.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>IRS Notice 2025-67 (2026 401(k) and IRA limits) — <a href="https://www.irs.gov/publications/p590a" className="text-indigo-600 hover:underline">IRS Publication 590-A</a></li>
            <li>IRS Rev. Proc. 2025-19 (2026 HSA limits) — <a href="https://www.irs.gov/publications/p969" className="text-indigo-600 hover:underline">IRS Publication 969</a></li>
            <li><a href="https://www.consumerfinance.gov/" className="text-indigo-600 hover:underline">Consumer Financial Protection Bureau</a> — auto loans and budgeting tools</li>
            <li><a href="https://www.investor.gov/" className="text-indigo-600 hover:underline">Investor.gov</a> — compound interest calculator</li>
          </ul>
          <p className="text-sm text-slate-500 italic">
            This article is educational and not individualized financial or tax advice.
          </p>
        </section>
      </article>
    </div>
  );
};

export default LatteFactorBigWins2026;

import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const CostOfWaiting2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>⏳ Compounding</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The Cost of Waiting: Why Starting at 25 vs. 35 Costs You $1 Million
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Compounding rewards time, not just money. A 10-year delay can erase hundreds of thousands — even a million —
          from your future portfolio.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">See your cost of waiting</h3>
              <p className="text-sm text-slate-600">
                Compare your starting age and watch the compound gap grow.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Wealth Projector →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">1. The classic 25 vs 35 example</button></li>
          <li><button onClick={() => scrollToSection('returns')} className="text-indigo-600 hover:underline">2. How the gap changes with returns</button></li>
          <li><button onClick={() => scrollToSection('why')} className="text-indigo-600 hover:underline">3. Why time wins</button></li>
          <li><button onClick={() => scrollToSection('formula')} className="text-indigo-600 hover:underline">4. Run the numbers yourself</button></li>
          <li><button onClick={() => scrollToSection('catchup')} className="text-indigo-600 hover:underline">5. What it takes to catch up</button></li>
          <li><button onClick={() => scrollToSection('next')} className="text-indigo-600 hover:underline">6. What to do now</button></li>
          <li><button onClick={() => scrollToSection('caveats')} className="text-indigo-600 hover:underline">7. Caveats</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Starting at 25 vs 35</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you invest a fixed amount every year starting at 25 and stop at 35, you can still beat someone who starts at 35 and
            invests continuously. Time compounds faster than extra contributions.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Here are three hypothetical savers. Each invests $7,500 a year — the 2026 IRA contribution limit for people
            under 50 — at the start of each year, earns an assumed 7% average annual return, and checks the balance at 65.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Saver</th>
                  <th className="text-left p-4 font-black text-slate-900">Years contributing</th>
                  <th className="text-left p-4 font-black text-slate-900">Total contributed</th>
                  <th className="text-left p-4 font-black text-slate-900">Balance at 65</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Early Emma</td>
                  <td className="p-4 text-slate-700">25–64 (40 years)</td>
                  <td className="p-4 text-slate-700">$300,000</td>
                  <td className="p-4 font-bold text-slate-900">≈ $1,602,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Late Liam</td>
                  <td className="p-4 text-slate-700">35–64 (30 years)</td>
                  <td className="p-4 text-slate-700">$225,000</td>
                  <td className="p-4 font-bold text-slate-900">≈ $758,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Stop-early Sam</td>
                  <td className="p-4 text-slate-700">25–34 only (10 years)</td>
                  <td className="p-4 text-slate-700">$75,000</td>
                  <td className="p-4 font-bold text-slate-900">≈ $844,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <div className="text-emerald-900 font-semibold">
              📊 <strong>The takeaway:</strong> Sam contributes one-third as much money as Liam and still ends up ahead.
              The 10-year head start Emma has over Liam is worth about <strong>$844,000</strong> at 7% — the same amount
              Sam&apos;s first decade grows into. These are illustrative names and numbers, not real people or predictions.
            </div>
          </div>
        </section>

        <section id="returns" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How the gap changes with returns</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Whether waiting &quot;costs $1 million&quot; depends on the return you assume. Same $7,500 a year, same ages:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Average annual return</th>
                  <th className="text-left p-4 font-black text-slate-900">Start at 25</th>
                  <th className="text-left p-4 font-black text-slate-900">Start at 35</th>
                  <th className="text-left p-4 font-black text-slate-900">Cost of waiting</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">6%</td>
                  <td className="p-4 text-slate-700">$1,230,000</td>
                  <td className="p-4 text-slate-700">$629,000</td>
                  <td className="p-4 font-bold text-slate-900">$602,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">7%</td>
                  <td className="p-4 text-slate-700">$1,602,000</td>
                  <td className="p-4 text-slate-700">$758,000</td>
                  <td className="p-4 font-bold text-slate-900">$844,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">8%</td>
                  <td className="p-4 text-slate-700">$2,098,000</td>
                  <td className="p-4 text-slate-700">$918,000</td>
                  <td className="p-4 font-bold text-slate-900">$1,181,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">10%</td>
                  <td className="p-4 text-slate-700">$3,651,000</td>
                  <td className="p-4 text-slate-700">$1,357,000</td>
                  <td className="p-4 font-bold text-slate-900">$2,294,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The S&amp;P 500 has historically returned roughly 10% a year in nominal terms over long periods, but a
            diversified portfolio with bonds will usually return less, and future returns are not guaranteed. These
            are nominal dollars — to see what they buy, read{' '}
            <a href="/blog/inflation-calculator-million-worth-retirement/" className="text-indigo-600 font-semibold hover:underline">what $1 million will be worth when you retire</a>.
          </p>
        </section>

        <section id="why" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why time is the multiplier</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Each decade adds another compounding layer. The earlier dollars stack returns on returns for longer.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            At 7%, money roughly doubles every 10 years (72 ÷ 7 ≈ 10.3). A dollar invested at 25 has about four
            doublings before 65; a dollar invested at 35 gets about three. That single missing doubling is why the gap is
            so large. It also means the <strong>last</strong> year of compounding is the most valuable: in Emma&apos;s
            case, her balance grows by about $105,000 in the final year alone — more than one-third of everything she
            ever contributed.
          </p>
        </section>

        <section id="formula" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Run the numbers yourself</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The figures above come from the standard future-value formula for a series of equal yearly deposits made at
            the start of each year:
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <div className="text-indigo-900 font-semibold">
              💡 <strong>Future value = Deposit × [((1 + r)<sup>n</sup> − 1) ÷ r] × (1 + r)</strong>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• r = annual return (0.07), n = number of years (40)</li>
                <li>• $7,500 × [(1.07<sup>40</sup> − 1) ÷ 0.07] × 1.07 ≈ $1,602,000</li>
                <li>• For money that stops early, grow the ending balance forward: Balance × (1 + r)<sup>years left</sup></li>
              </ul>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>A smaller, monthly version.</strong> Suppose a hypothetical saver can spare $300 a month and earns 7%
            a year, compounded monthly. Starting at 25, the account reaches about $787,000 by 65 on $144,000 of
            deposits. Starting at 35, it reaches about $366,000 on $108,000 of deposits. Waiting ten years costs roughly
            $421,000 — even though the delay only &quot;saved&quot; $36,000 of contributions. You can test your own
            amounts in our{' '}
            <a href="/wealth-investment-projector/" className="text-indigo-600 font-semibold hover:underline">investment growth projector</a>.
          </p>
        </section>

        <section id="catchup" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What it takes to catch up</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            To reach Emma&apos;s $1.6 million at 65 starting at 35 (same 7% assumption), Liam would need to invest about
            <strong> $15,850 a year</strong> — more than double her $7,500. Starting at 45, $7,500 a year grows to only
            about $329,000.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The good news for late starters is that tax-advantaged room grows with age. In 2026 you can defer up to
            $24,500 into a 401(k), plus an $8,000 catch-up from age 50 (or $11,250 at ages 60–63), and IRA savers 50+
            get an extra $1,100. Our{' '}
            <a href="/retirement-account-optimizer/" className="text-indigo-600 font-semibold hover:underline">retirement account optimizer</a>{' '}
            can show how far a higher contribution rate closes the gap.
          </p>
        </section>

        <section id="next" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What to do if you&apos;re starting later</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The fix is simple: increase your savings rate, automate contributions, and avoid more delays. The sooner you
            start, the smaller the gap becomes.
          </p>
          <div className="space-y-6 mt-6">
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Capture any employer match first</h3>
                  <p className="text-slate-700">A match is an immediate return on your contribution, before any market growth.</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Start small, then automate increases</h3>
                  <p className="text-slate-700">Even 1% of pay now beats 10% later. Raise the rate by 1 point each year or with every raise.</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Deal with high-interest debt in parallel</h3>
                  <p className="text-slate-700">
                    Credit card interest usually exceeds expected investment returns. See our{' '}
                    <a href="/blog/financial-order-of-operations/" className="text-indigo-600 font-semibold hover:underline">financial order of operations</a>{' '}
                    for how to sequence debt, emergency savings, and investing.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h3 className="font-bold text-emerald-900 text-lg mb-2">Keep costs low and stay invested</h3>
                  <p className="text-emerald-800">Fees and panic-selling during downturns both shrink the compounding base.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="caveats" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Caveats</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>Returns are not smooth.</strong> Real portfolios fluctuate; a constant 7% is a simplification for illustration.</li>
            <li>• <strong>Inflation matters.</strong> $1.6 million in 40 years buys far less than $1.6 million today.</li>
            <li>• <strong>Investing before you have an emergency fund can backfire</strong> if you are forced to sell or borrow at a bad time.</li>
            <li>• <strong>Taxes and fees</strong> reduce the actual result unless the money is in a tax-advantaged account.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is it too late to start investing at 40?</h3>
              <p className="text-slate-700">
                No. You have less time to compound, so you generally need a higher savings rate, but 25 years is still a
                long horizon — and catch-up contributions start at 50.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How much does waiting one year cost?</h3>
              <p className="text-slate-700">
                In the 7% example, starting at 26 instead of 25 lowers the balance at 65 by roughly $112,000 — the
                value of that final year of growth.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What return should I assume?</h3>
              <p className="text-slate-700">
                Many people test a range such as 5%–8% nominal. A lower assumption builds in a margin of safety.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">If I already have a lump sum, should I wait for a better entry point?</h3>
              <p className="text-slate-700">
                Waiting for a dip is another form of delay, and nobody can reliably time the market. Historical research
                has generally found that investing a lump sum right away beat spreading it out more often than not; see{' '}
                <a href="/blog/lump-sum-vs-dollar-cost-averaging/" className="text-indigo-600 font-semibold hover:underline">lump sum vs. dollar-cost averaging</a>{' '}
                for the trade-offs.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• <a href="https://www.investor.gov/" className="text-indigo-600 font-semibold hover:underline">Investor.gov (SEC) — compound interest calculator and investing basics</a></li>
            <li>• IRS Notice 2025-67 (2026 401(k) and IRA limits) — <a href="https://www.irs.gov/retirement-plans" className="text-indigo-600 font-semibold hover:underline">IRS Retirement Plans</a></li>
            <li>• <a href="https://www.irs.gov/publications/p590a" className="text-indigo-600 font-semibold hover:underline">IRS Publication 590-A, Contributions to IRAs</a></li>
          </ul>
          <p className="text-sm text-slate-600 italic">
            This article is educational and is not individualized investment advice. All examples are hypothetical and assume constant returns.
          </p>
        </section>
      </article>
    </div>
  );
};

export default CostOfWaiting2026;

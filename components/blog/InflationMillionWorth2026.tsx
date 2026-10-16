import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const InflationMillionWorth2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>📉 Inflation</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Inflation Calculator: What $1 Million Will Be Worth When You Retire
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Inflation quietly erodes purchasing power. What feels like $1 million today could feel like half that by the
          time you retire.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Adjust for inflation</h3>
              <p className="text-sm text-slate-600">
                Use the Wealth Projector to see future dollars in today&apos;s terms.
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
          <li><button onClick={() => scrollToSection('erosion')} className="text-indigo-600 hover:underline">1. How inflation erodes wealth</button></li>
          <li><button onClick={() => scrollToSection('formula')} className="text-indigo-600 hover:underline">2. The formula behind any inflation calculator</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">3. $1 million example</button></li>
          <li><button onClick={() => scrollToSection('target')} className="text-indigo-600 hover:underline">4. Setting an inflation-adjusted retirement target</button></li>
          <li><button onClick={() => scrollToSection('real')} className="text-indigo-600 hover:underline">5. Nominal vs. real projections</button></li>
          <li><button onClick={() => scrollToSection('protect')} className="text-indigo-600 hover:underline">6. Protecting purchasing power</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">7. Common mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="erosion" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Inflation is a slow leak</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Even at 3% inflation, purchasing power halves roughly every 24 years. That&apos;s why retirement math needs an
            inflation adjustment.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The quick shortcut is the <strong>Rule of 72</strong>: divide 72 by the inflation rate to estimate how many
            years it takes prices to double (and a dollar&apos;s buying power to halve). At 2% that&apos;s about 36 years; at
            3%, 24 years; at 4%, just 18 years. Someone who is 40 today and plans to retire at 65 could easily see prices
            double before their retirement ends.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Inflation is not steady. The Federal Reserve targets 2% inflation over the longer run, but actual U.S.
            consumer price inflation has swung widely — year-over-year CPI topped 9% in mid-2022. Long-range plans
            usually assume a single average rate, so it&apos;s worth testing more than one.
          </p>
        </section>

        <section id="formula" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The formula behind any inflation calculator</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Converting a future amount into today&apos;s dollars takes one line of math:
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <div className="text-indigo-900 font-semibold">
              💡 <strong>Today&apos;s value = Future amount ÷ (1 + inflation rate)<sup>years</sup></strong>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Going the other way: Future cost = Today&apos;s cost × (1 + inflation rate)<sup>years</sup></li>
                <li>• Real (after-inflation) return ≈ (1 + nominal return) ÷ (1 + inflation) − 1</li>
                <li>• Example: a 7% nominal return with 3% inflation is a real return of about 3.9%</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What $1 million might feel like</h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-lg text-slate-700">
              At 3% inflation for 25 years, $1,000,000 is closer to about $477,000 in today&apos;s dollars.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Here is the same $1,000,000 at different inflation rates and horizons, expressed in today&apos;s purchasing power:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Years until you spend it</th>
                  <th className="text-left p-4 font-black text-slate-900">2% inflation</th>
                  <th className="text-left p-4 font-black text-slate-900">3% inflation</th>
                  <th className="text-left p-4 font-black text-slate-900">4% inflation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">10 years</td>
                  <td className="p-4 text-slate-700">$820,000</td>
                  <td className="p-4 text-slate-700">$744,000</td>
                  <td className="p-4 text-slate-700">$676,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">20 years</td>
                  <td className="p-4 text-slate-700">$673,000</td>
                  <td className="p-4 text-slate-700">$554,000</td>
                  <td className="p-4 text-slate-700">$456,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">25 years</td>
                  <td className="p-4 text-slate-700">$610,000</td>
                  <td className="p-4 text-slate-700">$478,000</td>
                  <td className="p-4 text-slate-700">$375,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">30 years</td>
                  <td className="p-4 text-slate-700">$552,000</td>
                  <td className="p-4 text-slate-700">$412,000</td>
                  <td className="p-4 text-slate-700">$308,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <div className="text-emerald-900 font-semibold">
              📊 <strong>What it means for income:</strong> with the common 4% starting-withdrawal guideline, $1,000,000
              supports about $40,000 in the first year of retirement. If that retirement starts 25 years from now and
              inflation averages 3%, that $40,000 buys roughly what <strong>$19,100</strong> buys today.
            </div>
          </div>
        </section>

        <section id="target" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Setting an inflation-adjusted retirement target</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Rather than picking a round number, work from spending:
          </p>
          <div className="space-y-6 mt-6">
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Estimate spending in today&apos;s dollars</h3>
                  <p className="text-slate-700">Hypothetical example: a 40-year-old wants $60,000 a year of spending power, in today&apos;s dollars, starting at 65.</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Inflate it to your start date</h3>
                  <p className="text-slate-700">$60,000 × 1.03<sup>25</sup> ≈ $125,600 a year in future dollars (assuming 3% inflation).</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Apply a withdrawal rate</h3>
                  <p className="text-slate-700">At 4%: $125,600 ÷ 0.04 ≈ $3.14 million in future dollars — about $1.5 million in today&apos;s terms.</p>
                </div>
              </div>
            </div>
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h3 className="font-bold text-emerald-900 text-lg mb-2">Subtract other income</h3>
                  <p className="text-emerald-800">Social Security benefits receive annual cost-of-living adjustments, so expected benefits (from your SSA statement) can reduce how much the portfolio must cover.</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The 4% figure traces back to the 1998 Trinity study, which found a 4% initial withdrawal, raised each year
            for inflation, lasted about 95% of historical 30-year periods for a 50/50 stock/bond portfolio. For the
            caveats, see{' '}
            <a href="/blog/4-percent-rule-dead-safe-withdrawal-rates/" className="text-indigo-600 font-semibold hover:underline">is the 4% rule dead?</a>{' '}
            and{' '}
            <a href="/blog/fi-number-math-financial-independence/" className="text-indigo-600 font-semibold hover:underline">how to calculate your FI number</a>.
          </p>
        </section>

        <section id="real" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Nominal vs. real projections: a worked example</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Most investment calculators show <strong>nominal</strong> balances — the number that will appear on a future
            statement. That number can look reassuring while hiding how little it buys.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <div className="text-indigo-900 font-semibold">
              💡 <strong>Hypothetical example:</strong> $500,000 invested today, no further contributions, 7% average
              nominal return, 3% average inflation, 25 years.
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Nominal balance: $500,000 × 1.07<sup>25</sup> ≈ $2.71 million</li>
                <li>• In today&apos;s dollars: $2.71 million ÷ 1.03<sup>25</sup> ≈ $1.30 million</li>
                <li>• Same answer, computed with the ~3.9% real return directly</li>
              </ul>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Both figures are &quot;right&quot; — they just answer different questions. The nominal figure tells you what the
            account will say; the real figure tells you what kind of life it can fund. When you compare a projection to
            a goal, make sure both are in the same units. Taxes add another layer: withdrawals from pre-tax accounts are
            taxed as income, so a $2.71 million Traditional 401(k) balance is worth less to you than the same balance in
            a Roth.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>When this doesn&apos;t apply cleanly:</strong> fixed obligations such as a fixed-rate mortgage don&apos;t
            rise with inflation, so a paid-down mortgage can make retirement cheaper in real terms. On the other hand, a
            pension without cost-of-living adjustments loses buying power every year, so it should be discounted when
            you count it toward your target.
          </p>
        </section>

        <section id="protect" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Protecting purchasing power</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Stocks, real estate, and inflation-adjusted assets can help offset inflation, but you still need to run
            conservative projections.
          </p>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>Growth assets:</strong> Over long periods, a diversified stock portfolio has historically outpaced inflation, though with large short-term swings.</li>
            <li>• <strong>Inflation-linked bonds:</strong> Treasury Inflation-Protected Securities (TIPS) and Series I savings bonds adjust with CPI.</li>
            <li>• <strong>Delaying Social Security:</strong> A larger inflation-adjusted benefit acts like an inflation-protected annuity.</li>
            <li>• <strong>Plan in real terms:</strong> Project using real returns, or use a tool that shows results in today&apos;s dollars, such as our{' '}
              <a href="/early-retirement-fire-planner/" className="text-indigo-600 font-semibold hover:underline">FIRE planner</a> or other{' '}
              <a href="/retirement-calculators/" className="text-indigo-600 font-semibold hover:underline">retirement calculators</a>.</li>
          </ul>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>Mixing nominal and real numbers.</strong> Pair a nominal return with nominal goals, or a real return with today&apos;s-dollar goals — never one of each.</li>
            <li>• <strong>Assuming inflation stops at retirement.</strong> A 30-year retirement needs rising withdrawals.</li>
            <li>• <strong>Using one national average for every expense.</strong> Healthcare and housing costs can rise at different rates than overall CPI.</li>
            <li>• <strong>Holding too much cash long-term.</strong> Cash is useful for emergencies, but a savings yield below inflation loses purchasing power.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What inflation rate should I use for retirement planning?</h3>
              <p className="text-slate-700">
                Many planners test 2.5%–3% as a base case and 4% as a stress case. Running more than one rate matters more than picking the &quot;right&quot; one.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is $1 million enough to retire?</h3>
              <p className="text-slate-700">
                It depends on your spending, other income, and timeline. At a 4% withdrawal rate it supports about
                $40,000 a year to start — before taxes — which may be plenty for some households and too little for others.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How much do I need to match $1 million of today&apos;s buying power in 30 years?</h3>
              <p className="text-slate-700">
                At 3% average inflation, about $2.43 million ($1,000,000 × 1.03<sup>30</sup>).
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Where does official inflation data come from?</h3>
              <p className="text-slate-700">
                The Bureau of Labor Statistics publishes the Consumer Price Index (CPI) monthly; it&apos;s the measure
                used for Social Security COLAs and TIPS adjustments.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• <a href="https://www.bls.gov/cpi/" className="text-indigo-600 font-semibold hover:underline">U.S. Bureau of Labor Statistics — Consumer Price Index</a></li>
            <li>• <a href="https://www.federalreserve.gov/" className="text-indigo-600 font-semibold hover:underline">Federal Reserve Board</a> (longer-run 2% inflation goal)</li>
            <li>• <a href="https://www.investor.gov/" className="text-indigo-600 font-semibold hover:underline">Investor.gov (SEC) — compound interest and investing basics</a></li>
          </ul>
          <p className="text-sm text-slate-600 italic">
            This article is educational and is not individualized financial advice. All examples are hypothetical and use assumed rates.
          </p>
        </section>
      </article>
    </div>
  );
};

export default InflationMillionWorth2026;

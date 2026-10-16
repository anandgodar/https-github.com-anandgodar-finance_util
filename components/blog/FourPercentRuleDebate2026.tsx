import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const FourPercentRuleDebate2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>📈 Withdrawal Strategy</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The 4% Rule Is Dead? Why Safe Withdrawal Rates Are Changing
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Rising inflation, market volatility, and longer retirements have put pressure on the classic 4% rule. Learn why
          safe withdrawal rates are shifting and how to stress test your plan.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Stress test your withdrawal rate</h3>
              <p className="text-sm text-slate-600">
                Compare 3%, 3.5%, 4%, and 5% scenarios against your portfolio.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.FIRE_PLANNER)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use FIRE Planner →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('origin')} className="text-indigo-600 hover:underline">1. What the 4% rule actually says</button></li>
          <li><button onClick={() => scrollToSection('what-changed')} className="text-indigo-600 hover:underline">2. What changed since the 4% rule</button></li>
          <li><button onClick={() => scrollToSection('inflation')} className="text-indigo-600 hover:underline">3. Inflation and sequence risk</button></li>
          <li><button onClick={() => scrollToSection('alternatives')} className="text-indigo-600 hover:underline">4. Alternative withdrawal rates</button></li>
          <li><button onClick={() => scrollToSection('flexible')} className="text-indigo-600 hover:underline">5. Making any rate safer</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">6. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">7. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="origin" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What the 4% rule actually says</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The rule comes from two pieces of research. In 1994, financial planner William Bengen used historical U.S. stock
            and bond returns to test how much a retiree could withdraw without running out of money over 30 years. In 1998,
            three professors at Trinity University — Cooley, Hubbard and Walz — ran a similar analysis; their &quot;Trinity
            study&quot; found that a 4% initial withdrawal from a 50/50 stock/bond portfolio, raised each year for
            inflation, survived about 95% of the historical 30-year periods they tested.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            It is easy to misread. The rule does <strong>not</strong> say you withdraw 4% of whatever the balance is each
            year. You take 4% of the starting balance in year one and then adjust that dollar amount for inflation:
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold text-lg">
              📊 <strong>Hypothetical example:</strong> $1,000,000 portfolio, 3% inflation each year. Year 1 withdrawal:
              $40,000. Year 2: $41,200. Year 3: $42,436. Year 4: $43,709 — regardless of how the market did.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            It also assumed a 30-year retirement, a specific stock/bond mix, no investment fees, and no taxes. Each of those
            assumptions matters when you apply the rule to your own plan.
          </p>
        </section>

        <section id="what-changed" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why the 4% rule is under pressure</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The 4% rule was built on historical U.S. market data, but today&apos;s bond yields, inflation spikes, and longer
            life expectancy mean retirees may need a more conservative plan.
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-slate-700">
            <li><strong>Longer horizons:</strong> Someone retiring at 40 may need 50+ years of withdrawals, well beyond the 30-year periods the original research tested.</li>
            <li><strong>Past returns are not a guarantee:</strong> The research described what happened in U.S. history. Future returns for stocks and bonds may be lower or higher.</li>
            <li><strong>Fees and taxes:</strong> A 1% annual advisory or fund fee comes out of the same returns that fund your withdrawals, and taxes reduce what you can spend.</li>
            <li><strong>Real spending isn&apos;t smooth:</strong> Healthcare, home repairs and helping family can create lumpy years.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            None of this means the rule is &quot;dead.&quot; It means 4% is a reasonable starting estimate for a traditional
            retirement, and a number to stress test — not a guarantee — for an early one.
          </p>
        </section>

        <section id="inflation" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Inflation and sequence risk</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A bad market stretch early in retirement can permanently reduce a portfolio. Testing multiple withdrawal
            rates helps you build a buffer against this risk.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            This is called <strong>sequence-of-returns risk</strong>. When you are withdrawing, losses early on force you to
            sell more shares at low prices, and those shares are not there for the recovery. The order of returns matters,
            not just the average.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Hypothetical retiree</th>
                  <th className="text-left p-4 font-black text-slate-900">Returns, years 1–10</th>
                  <th className="text-left p-4 font-black text-slate-900">Balance after 10 years</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Bad years first</td>
                  <td className="p-4 text-slate-700">−20%, −10%, 5%, 10%, 15%, 15%, 10%, 5%, 8%, 12%</td>
                  <td className="p-4 font-bold text-slate-900">$893,519</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Good years first</td>
                  <td className="p-4 text-slate-700">Same returns in reverse order</td>
                  <td className="p-4 font-bold text-slate-900">$1,114,419</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Both start with $1,000,000, withdraw a flat $40,000 at the start of each year, and earn the same 5% average
            return. With no withdrawals, both would end at the same $1,536,505. With withdrawals, the retiree who hit the
            bad years first ends about $220,900 behind. Inflation makes this worse because it raises the dollar withdrawals
            at the same time. To see how inflation erodes purchasing power, read{' '}
            <a href="/blog/inflation-calculator-million-worth-retirement/" className="text-indigo-600 font-semibold hover:underline">what $1 million will really be worth</a>.
          </p>
        </section>

        <section id="alternatives" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Safer withdrawal rate ranges</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A common rule of thumb for early retirees is 3% to 3.5%, especially in high inflation periods. The right rate
            depends on your time horizon, portfolio mix, and flexibility. The table shows what each rate means in dollars.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Withdrawal rate</th>
                  <th className="text-left p-4 font-black text-slate-900">Year-1 income from $1M</th>
                  <th className="text-left p-4 font-black text-slate-900">Portfolio needed for $40k/yr</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">3.0%</td><td className="p-4 text-slate-700">$30,000</td><td className="p-4 text-slate-700">$1,333,333</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">3.5%</td><td className="p-4 text-slate-700">$35,000</td><td className="p-4 text-slate-700">$1,142,857</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">4.0%</td><td className="p-4 text-slate-700">$40,000</td><td className="p-4 text-slate-700">$1,000,000</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">4.5%</td><td className="p-4 text-slate-700">$45,000</td><td className="p-4 text-slate-700">$888,889</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">5.0%</td><td className="p-4 text-slate-700">$50,000</td><td className="p-4 text-slate-700">$800,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Dropping from 4% to 3% needs a third more money for the same income — often several extra years of work. That
            is the real trade-off: a lower rate buys safety with time. Our guide to your{' '}
            <a href="/blog/fi-number-math-financial-independence/" className="text-indigo-600 font-semibold hover:underline">FI number</a>{' '}
            shows how to translate each rate into a target.
          </p>
        </section>

        <section id="flexible" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Making any withdrawal rate safer</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A fixed, inflation-adjusted withdrawal is the most rigid approach. Many retirees can reduce risk without simply
            choosing a lower number:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-slate-700">
            <li><strong>Spending flexibility:</strong> Skip the inflation raise or trim discretionary spending after a down year. Even small cuts early on reduce the shares you must sell at low prices.</li>
            <li><strong>A cash or short-term bond buffer:</strong> Holding a year or two of spending outside stocks can let you avoid selling during a crash.</li>
            <li><strong>Delaying Social Security:</strong> Benefits grow for each year you delay past full retirement age, up to 70. A larger guaranteed income later reduces what the portfolio must supply.</li>
            <li><strong>Part-time income:</strong> Earning even $10,000 a year in the first years of retirement means withdrawing $10,000 less at the riskiest time.</li>
            <li><strong>Tax planning:</strong> Choosing which accounts to draw from — taxable, traditional or Roth — affects how much you must withdraw to net the same spending. The{' '}
              <a href="/retirement-account-optimizer/" className="text-indigo-600 font-semibold hover:underline">retirement account optimizer</a> can help you compare.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            Early retirees should also plan for health insurance before Medicare. For 2026 coverage, the ACA subsidy cliff at
            400% of the federal poverty level is back, so your withdrawal strategy can affect your premiums. Check the rules at
            HealthCare.gov.
          </p>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently asked questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is the 4% rule still valid in 2026?</h3>
              <p className="text-slate-700">
                As a starting point for a roughly 30-year retirement, yes. It is a rule of thumb from historical data, so
                anyone with a longer horizon or less flexible spending should test lower rates as well.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Does the 4% rule include taxes?</h3>
              <p className="text-slate-700">
                No. The 4% is the gross withdrawal. If your money is in a traditional 401(k) or IRA, part of each
                withdrawal goes to income tax.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What happens if I withdraw 5%?</h3>
              <p className="text-slate-700">
                A higher rate gives more income now but leaves less room for bad markets, particularly early on. It may work
                for shorter retirements or if you can cut spending when needed.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Should I recalculate every year?</h3>
              <p className="text-slate-700">
                Reviewing yearly is sensible. If your portfolio has grown well ahead of plan you may be able to spend more;
                if it has fallen sharply, a temporary cut can protect the plan. Run scenarios in the{' '}
                <a href="/early-retirement-fire-planner/" className="text-indigo-600 font-semibold hover:underline">FIRE planner</a>.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Bengen, W. P. (1994), &quot;Determining Withdrawal Rates Using Historical Data,&quot; <em>Journal of Financial Planning</em>.</li>
            <li>Cooley, P. L., Hubbard, C. M., &amp; Walz, D. T. (1998), &quot;Retirement Savings: Choosing a Withdrawal Rate That Is Sustainable,&quot; <em>AAII Journal</em>.</li>
            <li><a href="https://www.ssa.gov/" className="text-indigo-600 hover:underline">Social Security Administration</a> — delayed retirement credits</li>
            <li><a href="https://www.healthcare.gov/" className="text-indigo-600 hover:underline">HealthCare.gov</a> — marketplace premium tax credits</li>
            <li><a href="https://www.irs.gov/publications/p590b" className="text-indigo-600 hover:underline">IRS Publication 590-B</a> — IRA distributions</li>
          </ul>
          <p className="text-sm text-slate-500 italic">
            This article is educational and not individualized financial or investment advice.
          </p>
        </section>
      </article>
    </div>
  );
};

export default FourPercentRuleDebate2026;

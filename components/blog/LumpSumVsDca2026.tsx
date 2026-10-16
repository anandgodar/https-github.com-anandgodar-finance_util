import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const LumpSumVsDca2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>📈 Investing</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Lump Sum vs. Dollar Cost Averaging: What the Data Says
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Lump sum investing wins more often in the long run, but dollar cost averaging can reduce regret and volatility.
          Here&apos;s what the data says and how to choose a strategy.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Model lump sum vs DCA</h3>
              <p className="text-sm text-slate-600">
                Compare both strategies with your timeline and contribution plan.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Wealth SIP Tool →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('definitions')} className="text-indigo-600 hover:underline">1. Two ways to invest a windfall</button></li>
          <li><button onClick={() => scrollToSection('data')} className="text-indigo-600 hover:underline">2. What the data shows</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">3. A worked example: rising vs. falling market</button></li>
          <li><button onClick={() => scrollToSection('when')} className="text-indigo-600 hover:underline">4. When to use DCA</button></li>
          <li><button onClick={() => scrollToSection('hybrid')} className="text-indigo-600 hover:underline">5. The hybrid approach</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">6. Common mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">8. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="definitions" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Two ways to invest a windfall</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            This question only comes up when you already have a pile of cash — an inheritance, a bonus, a home sale, or
            savings that have been sitting idle. <strong>Lump-sum investing</strong> means putting it all into your target
            portfolio at once. <strong>Dollar-cost averaging (DCA)</strong> means splitting it into equal pieces and
            investing one piece at a time on a fixed schedule — for example, monthly over six or twelve months — while
            the rest waits in cash.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Investing a slice of every paycheck into a 401(k) is sometimes called DCA too, but it isn&apos;t a real choice
            between the two: you are investing money as soon as you have it, which is effectively lump-sum investing in
            small batches. The debate below is about money you could invest today but are considering holding back.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Factor</th>
                  <th className="text-left p-4 font-black text-slate-900">Lump sum</th>
                  <th className="text-left p-4 font-black text-slate-900">Dollar-cost averaging</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Time in the market</td>
                  <td className="p-4 text-slate-700">Maximum, from day one</td>
                  <td className="p-4 text-slate-700">Part of the money waits in cash</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Historical win rate</td>
                  <td className="p-4 text-slate-700">Ahead about two-thirds of the time</td>
                  <td className="p-4 text-slate-700">Ahead about one-third of the time</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Worst-case regret</td>
                  <td className="p-4 text-slate-700">Investing everything right before a drop</td>
                  <td className="p-4 text-slate-700">Watching prices rise while you hold cash</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Best for</td>
                  <td className="p-4 text-slate-700">Long horizon, steady nerves</td>
                  <td className="p-4 text-slate-700">Anyone who might panic after a big early loss</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="data" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Lump sum wins more often</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Over long periods, investing earlier typically outperforms spreading money over time. Time in the market is
            the main advantage.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Vanguard&apos;s widely cited 2012 research compared the two approaches across historical market data and found
            that lump-sum investing beat dollar-cost averaging about <strong>two-thirds of the time</strong>. The logic is
            simple: stock markets have risen in more periods than they have fallen, so cash that waits on the sidelines
            usually misses some gains. DCA only wins when prices fall during the investing window.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <div className="text-indigo-900 font-semibold">
              💡 <strong>Key point:</strong> &quot;Two-thirds of the time&quot; also means lump sum <em>lost</em> about one time
              in three. DCA is not irrational — it trades a lower expected return for a smaller chance of a painful
              start.
            </div>
          </div>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">A worked example: rising vs. falling market</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Hypothetical example: you have $60,000. Lump sum buys 600 shares at $100 today. DCA invests $10,000 at the
            start of each of the next six months. (Cash interest and fees are ignored to keep the math simple.)
          </p>
          <div className="space-y-6 mt-6">
            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-indigo-900 text-xl mb-4">Scenario 1: steady rise</h3>
              <div className="space-y-2 text-indigo-800">
                <p>Monthly prices: $100, $101, $102, $103, $104, $105; month 7 price: $106</p>
                <p>Lump sum: 600 shares × $106 = $63,600</p>
                <p>DCA: about 585.5 shares × $106 ≈ $62,066</p>
                <p className="font-bold text-lg mt-2">Lump sum ahead by ≈ $1,534</p>
              </div>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <h3 className="font-bold text-purple-900 text-xl mb-4">Scenario 2: early drop, then recovery</h3>
              <div className="space-y-2 text-purple-800">
                <p>Monthly prices: $100, $85, $85, $90, $95, $100; month 7 price: $100</p>
                <p>Lump sum: 600 shares × $100 = $60,000 (back to even)</p>
                <p>DCA: about 651.7 shares × $100 ≈ $65,167 (average cost ≈ $92.07)</p>
                <p className="font-bold text-lg mt-2">DCA ahead by ≈ $5,167</p>
              </div>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The pattern generalizes: lump sum wins modestly in the more common rising markets, while DCA wins when
            prices dip early. You can&apos;t know in advance which scenario you&apos;re in — which is exactly why the
            decision is partly about behavior, not just math. Try different paths and horizons in our{' '}
            <a href="/wealth-investment-projector/" className="text-indigo-600 font-semibold hover:underline">investment growth projector</a>.
          </p>
        </section>

        <section id="when" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When DCA makes sense</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            DCA helps if you&apos;re nervous about market timing, or if you&apos;re investing from income rather than a lump sum.
          </p>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>The amount is large relative to your net worth.</strong> A 30% drop on a sum that doubles your portfolio feels very different from one on a small bonus.</li>
            <li>• <strong>You have never been through a bear market with real money.</strong> If an early loss would make you sell, DCA&apos;s lower expected return is a fair price for staying invested.</li>
            <li>• <strong>You are changing strategy</strong>, such as moving a long-held cash position into stocks for the first time.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>When neither applies:</strong> money you&apos;ll need within a few years — a down payment, tuition, or your
            emergency fund — generally shouldn&apos;t go into stocks by either method. Build your{' '}
            <a href="/emergency-fund-guard/" className="text-indigo-600 font-semibold hover:underline">emergency fund</a>{' '}
            and pay down high-interest debt first; our{' '}
            <a href="/blog/financial-order-of-operations/" className="text-indigo-600 font-semibold hover:underline">financial order of operations</a>{' '}
            walks through the sequence.
          </p>
        </section>

        <section id="hybrid" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">A simple hybrid strategy</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Invest a portion immediately, then spread the rest over a few months. This balances discipline with risk
            control.
          </p>
          <div className="space-y-6 mt-6">
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Pick your split</h3>
                  <p className="text-slate-700">For example, invest half today and the remaining half in equal monthly amounts.</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Keep the window short</h3>
                  <p className="text-slate-700">Three to twelve months is typical. The longer the window, the more expected return you give up.</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Park the waiting cash productively</h3>
                  <p className="text-slate-700">An insured high-yield savings account or a money market fund narrows DCA&apos;s cash drag.</p>
                </div>
              </div>
            </div>
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h3 className="font-bold text-emerald-900 text-lg mb-2">Automate and don&apos;t pause</h3>
                  <p className="text-emerald-800">Schedule every purchase in advance. Skipping a buy because the market &quot;looks scary&quot; turns DCA into market timing.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>Open-ended waiting.</strong> &quot;I&apos;ll invest after the next dip&quot; has no end date and often leaves money in cash for years.</li>
            <li>• <strong>Ignoring account limits.</strong> A windfall can&apos;t all go into an IRA at once — the 2026 limit is $7,500 ($8,600 at 50+) — so plan which account each dollar goes into.</li>
            <li>• <strong>Forgetting taxes in taxable accounts.</strong> Each purchase creates its own tax lot with its own cost basis; keep good records.</li>
            <li>• <strong>Judging the choice by one outcome.</strong> A lump sum invested before a drop was still a reasonable decision given the odds.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Does dollar-cost averaging lower risk?</h3>
              <p className="text-slate-700">
                It lowers the risk of a bad entry point for the money being phased in, but while part of your money sits
                in cash, your expected return is also lower. Once fully invested, both approaches carry the same risk.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is it a bad time to invest a lump sum when markets are at all-time highs?</h3>
              <p className="text-slate-700">
                Markets spend a lot of time near all-time highs because they tend to rise over long periods. A record high
                on its own has not been a reliable signal to wait.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How long should a DCA schedule be?</h3>
              <p className="text-slate-700">
                Commonly three to twelve months. Pick a period you will actually stick to, and write down the dates.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• Vanguard Research (2012), comparison of lump-sum investing and dollar-cost averaging using historical market data</li>
            <li>• <a href="https://www.investor.gov/" className="text-indigo-600 font-semibold hover:underline">Investor.gov (SEC) — investing basics and dollar-cost averaging</a></li>
            <li>• <a href="https://www.irs.gov/publications/p550" className="text-indigo-600 font-semibold hover:underline">IRS Publication 550, Investment Income and Expenses</a> (cost basis)</li>
          </ul>
          <p className="text-sm text-slate-600 italic">
            This article is educational and is not individualized investment advice. Examples are hypothetical; past performance does not guarantee future results.
          </p>
        </section>
      </article>
    </div>
  );
};

export default LumpSumVsDca2026;

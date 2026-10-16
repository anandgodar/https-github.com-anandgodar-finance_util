'use client';

import React from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const InvestmentAcademyGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>📅 Updated October 2026</span>
          <span>•</span>
          <span>⏱️ 5 min read</span>
          <span>•</span>
          <span>🎓 Investing</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Index Funds & ETFs Guide 2026: Build a Simple, Diversified Portfolio
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          If you want a low-stress investing plan, index funds and ETFs are hard to beat. This guide covers how they work,
          how to choose them, and a simple portfolio structure you can keep for years.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Explore Fund Strategies</h3>
              <p className="text-sm text-slate-600">Learn the basics in our Investment Academy.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.INVESTMENT_ACADEMY)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open Fund Academy →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('what')} className="text-indigo-600 hover:underline">1. What an index fund actually is</button></li>
          <li><button onClick={() => scrollToSection('index-vs-etf')} className="text-indigo-600 hover:underline">2. Index funds vs ETFs</button></li>
          <li><button onClick={() => scrollToSection('costs')} className="text-indigo-600 hover:underline">3. Why costs matter so much</button></li>
          <li><button onClick={() => scrollToSection('diversification')} className="text-indigo-600 hover:underline">4. Why diversification matters</button></li>
          <li><button onClick={() => scrollToSection('portfolio')} className="text-indigo-600 hover:underline">5. Simple portfolio blueprint</button></li>
          <li><button onClick={() => scrollToSection('rebalancing')} className="text-indigo-600 hover:underline">6. Rebalancing and account placement</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">7. Common mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="what" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What an index fund actually is</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            An index fund doesn&apos;t try to pick winners. It simply holds the securities in a published index — such as
            the S&amp;P 500, a total U.S. stock market index, a total international index, or a broad bond index — in
            roughly the same proportions. When the index changes, the fund changes. Because no research team is trying
            to beat the market, these funds can keep costs low, and their results closely track the market segment
            they follow, minus fees.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The trade-off is that you will never beat the index you own. For most long-term investors that&apos;s a feature:
            you get the market&apos;s return without having to guess which manager or stock will outperform.
          </p>
        </section>

        <section id="index-vs-etf" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Index funds vs ETFs</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Index funds are typically mutual funds priced once per day. ETFs trade like stocks. Both can deliver low-cost
            diversification; the best choice depends on your broker and habits.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Feature</th>
                  <th className="text-left p-4 font-black text-slate-900">Index mutual fund</th>
                  <th className="text-left p-4 font-black text-slate-900">Index ETF</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Trading</td>
                  <td className="p-4 text-slate-700">Once a day at closing net asset value (NAV)</td>
                  <td className="p-4 text-slate-700">Throughout the day at market price</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Minimum investment</td>
                  <td className="p-4 text-slate-700">Some funds set a minimum</td>
                  <td className="p-4 text-slate-700">One share, or fractional shares at many brokers</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Automatic investing</td>
                  <td className="p-4 text-slate-700">Easy to automate fixed dollar amounts</td>
                  <td className="p-4 text-slate-700">Depends on the broker</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Trading costs</td>
                  <td className="p-4 text-slate-700">No bid-ask spread</td>
                  <td className="p-4 text-slate-700">Small bid-ask spread on each trade</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Tax efficiency (taxable accounts)</td>
                  <td className="p-4 text-slate-700">Generally good for index funds</td>
                  <td className="p-4 text-slate-700">Often better, thanks to the ETF creation/redemption structure</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Inside a 401(k) or IRA, the tax-efficiency difference largely disappears, so pick whatever your plan or
            broker makes cheapest and simplest.
          </p>
          <h3 className="text-2xl font-black text-slate-900 mt-8">How to evaluate a specific fund</h3>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>Which index?</strong> Make sure the index matches the job — total market, large-cap only, international, or bonds.</li>
            <li>• <strong>Expense ratio:</strong> Compare funds that track the same or similar indexes; lower is generally better.</li>
            <li>• <strong>Tracking difference:</strong> Over several years, a good index fund&apos;s return should trail its index by roughly its fee, not much more.</li>
            <li>• <strong>Size and trading volume (ETFs):</strong> Larger, heavily traded ETFs usually have tighter bid-ask spreads.</li>
            <li>• <strong>Availability:</strong> In a 401(k) you&apos;re limited to the plan menu — look for its lowest-cost broad index options.</li>
          </ul>
        </section>

        <section id="costs" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why costs matter so much</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A fund&apos;s <strong>expense ratio</strong> is the annual fee, taken as a percentage of your balance. On
            $100,000, a 0.05% expense ratio costs about $50 a year; a 1.00% expense ratio costs about $1,000 a year. That
            gap compounds.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <div className="text-indigo-900 font-semibold">
              💡 <strong>Hypothetical example:</strong> $10,000 invested at the start of every year for 30 years, 7% gross
              annual return, fees treated as a reduction in return.
              <ul className="mt-2 space-y-1 text-sm">
                <li>• 0.05% fee (6.95% net): ≈ $1,001,000</li>
                <li>• 1.00% fee (6.00% net): ≈ $838,000</li>
                <li>• <strong>Difference: ≈ $163,000</strong> — on the same $300,000 of contributions</li>
              </ul>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Check each fund&apos;s current expense ratio in its prospectus or on your broker&apos;s fund page; they change over
            time. To see how reinvested dividends add to the picture, try our{' '}
            <a href="/dividend-reinvestment-calculator/" className="text-indigo-600 font-semibold hover:underline">dividend reinvestment calculator</a>.
          </p>
        </section>

        <section id="diversification" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why diversification matters</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Diversification reduces the risk of any single company or sector hurting your long-term plan.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            A total-market fund can hold thousands of companies, so the failure of any one of them barely registers.
            Adding international stocks spreads risk across economies and currencies, and bonds typically fall less than
            stocks in downturns. Diversification does not prevent losses — broad markets can still fall sharply — but
            it lowers the odds that a single bad bet derails your plan.
          </p>
        </section>

        <section id="portfolio" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Simple portfolio blueprint</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Total market equity index fund</li>
            <li>• International equity index fund</li>
            <li>• Bond fund (optional, based on risk tolerance)</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            This is often called a &quot;three-fund portfolio.&quot; The main decision is the stock/bond split, which should
            reflect when you need the money and how much decline you can tolerate without selling. Illustrative mixes
            (not recommendations):
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Investor profile</th>
                  <th className="text-left p-4 font-black text-slate-900">U.S. stocks</th>
                  <th className="text-left p-4 font-black text-slate-900">International stocks</th>
                  <th className="text-left p-4 font-black text-slate-900">Bonds</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Long horizon, high tolerance</td>
                  <td className="p-4 text-slate-700">60%</td>
                  <td className="p-4 text-slate-700">30%</td>
                  <td className="p-4 text-slate-700">10%</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Balanced</td>
                  <td className="p-4 text-slate-700">40%</td>
                  <td className="p-4 text-slate-700">20%</td>
                  <td className="p-4 text-slate-700">40%</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Near or in retirement</td>
                  <td className="p-4 text-slate-700">25%</td>
                  <td className="p-4 text-slate-700">15%</td>
                  <td className="p-4 text-slate-700">60%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Prefer one fund? A <strong>target-date index fund</strong> holds a similar mix and gradually shifts toward
            bonds as its target year approaches. Just avoid holding it alongside other funds in a way that undoes its
            built-in allocation.
          </p>
        </section>

        <section id="rebalancing" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Rebalancing and account placement</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Markets move your mix over time. Rebalancing — selling a little of what grew and buying what lagged — keeps
            your risk where you chose it. Many investors check once a year or when an asset class drifts more than about
            5 percentage points from target.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <div className="text-emerald-900 font-semibold">
              📊 <strong>Hypothetical example:</strong> a $100,000 portfolio at 60% stocks / 40% bonds. Stocks gain 25% and
              bonds gain 2% in a year.
              <ul className="mt-2 space-y-1 text-base">
                <li>• Stocks: $75,000; bonds: $40,800; total $115,800</li>
                <li>• Stocks are now about 64.8% of the portfolio</li>
                <li>• Back to 60%: target stocks $69,480, so shift about $5,520 from stocks to bonds</li>
              </ul>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            In taxable accounts, rebalance with new contributions where possible, since selling winners can trigger
            capital gains tax. Use tax-advantaged space first: in 2026 you can defer up to $24,500 into a 401(k) and
            contribute up to $7,500 to an IRA ($8,600 if 50 or older). Our{' '}
            <a href="/blog/401k-vs-ira-comparison-2025/" className="text-indigo-600 font-semibold hover:underline">401(k) vs IRA comparison</a>{' '}
            explains which to fill first.
          </p>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Chasing hot sectors without a plan.</li>
            <li>• Over-trading instead of sticking to allocation.</li>
            <li>• Ignoring fees and expense ratios.</li>
            <li>• Owning several funds that track nearly the same index and calling it diversification.</li>
            <li>• Waiting for the &quot;right time&quot; to invest a lump sum — see{' '}
              <a href="/blog/lump-sum-vs-dollar-cost-averaging/" className="text-indigo-600 font-semibold hover:underline">lump sum vs. dollar-cost averaging</a>.</li>
            <li>• Investing money you&apos;ll need in the next few years in stocks.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is an S&amp;P 500 fund diversified enough?</h3>
              <p className="text-slate-700">
                It covers about 500 large U.S. companies, which is broad, but it leaves out smaller U.S. companies and
                international stocks. Some investors add a total international fund for wider coverage.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Are index funds safe?</h3>
              <p className="text-slate-700">
                They remove single-company risk, not market risk. A stock index fund can lose a large share of its value
                in a bear market. Bonds and cash reduce volatility.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How many funds do I need?</h3>
              <p className="text-slate-700">
                One to three is enough for most people: a target-date fund, or a U.S. stock, international stock, and
                bond index fund.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• <a href="https://www.investor.gov/" className="text-indigo-600 font-semibold hover:underline">Investor.gov (SEC) — mutual funds, ETFs, and fees</a></li>
            <li>• <a href="https://www.irs.gov/publications/p550" className="text-indigo-600 font-semibold hover:underline">IRS Publication 550, Investment Income and Expenses</a></li>
            <li>• IRS Notice 2025-67 (2026 401(k) and IRA limits) — <a href="https://www.irs.gov/retirement-plans" className="text-indigo-600 font-semibold hover:underline">IRS Retirement Plans</a></li>
          </ul>
          <p className="text-sm text-slate-600 italic">
            This guide is educational and is not individualized investment advice. Example allocations and returns are hypothetical.
          </p>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Investing Basics, Weekly"
          description="Get simple, actionable investing guidance without the jargon."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.INVESTMENT_ACADEMY)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🎓 Fund Academy</h4>
            <p className="text-sm text-slate-600">Learn ETF and index fund fundamentals.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📈 Investment Calculator</h4>
            <p className="text-sm text-slate-600">Project growth with compound interest.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAcademyGuide2025;

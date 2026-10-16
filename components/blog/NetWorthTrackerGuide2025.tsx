'use client';

import React from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const NetWorthTrackerGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>💎 Wealth Tracking</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Net Worth Tracker Guide 2026: How to Track Assets, Debts, and Real Wealth
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          If you want real financial clarity, you need a simple answer to one question: <strong>what is my net worth</strong>?
          A net worth tracker turns that question into a monthly habit—so you can see progress, spot leaks, and make
          smarter decisions with confidence.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Track Your Net Worth Instantly</h3>
              <p className="text-sm text-slate-600">
                Use our net worth tracker to list assets, debts, and watch your balance sheet grow over time.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.NET_WORTH)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open Net Worth Tracker →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('what-is-net-worth')} className="text-indigo-600 hover:underline">1. What is net worth?</button></li>
          <li><button onClick={() => scrollToSection('assets-liabilities')} className="text-indigo-600 hover:underline">2. Assets vs liabilities (simple list)</button></li>
          <li><button onClick={() => scrollToSection('how-to-calculate')} className="text-indigo-600 hover:underline">3. How to calculate net worth step-by-step</button></li>
          <li><button onClick={() => scrollToSection('set-up')} className="text-indigo-600 hover:underline">4. How to set up your tracker</button></li>
          <li><button onClick={() => scrollToSection('tracking-habit')} className="text-indigo-600 hover:underline">5. Monthly tracking habit that actually works</button></li>
          <li><button onClick={() => scrollToSection('reading')} className="text-indigo-600 hover:underline">6. Reading the numbers: a worked example</button></li>
          <li><button onClick={() => scrollToSection('metrics')} className="text-indigo-600 hover:underline">7. Metrics worth tracking alongside net worth</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">8. Common net worth tracker mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">9. Net worth tracker FAQ</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">10. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="what-is-net-worth" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is net worth?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Net worth</strong> is the value of everything you own minus everything you owe. It&apos;s not a score to
            impress people—it&apos;s a private dashboard that helps you make better financial choices.
          </p>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-slate-700">
              Net Worth = Total Assets − Total Liabilities
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            A single net worth figure is a snapshot. A <strong>tracker</strong> is a series of snapshots taken the same way
            over time, and that series is where the value lies. It shows whether your savings habits are working, how much of
            your progress comes from your own contributions versus market moves, and whether debt is shrinking. For a deeper
            look at what to count and how to value it, see our guide to <a href="/blog/assets-vs-liabilities-true-net-worth/" className="text-indigo-600 font-semibold hover:underline">assets vs. liabilities and true net worth</a>.
          </p>
        </section>

        <section id="assets-liabilities" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Assets vs liabilities (simple list)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-emerald-200 rounded-xl p-6">
              <h3 className="font-bold text-emerald-700 text-lg mb-3">Assets</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Cash and checking/savings</li>
                <li>• Investments (stocks, ETFs, crypto)</li>
                <li>• Retirement accounts</li>
                <li>• Home and other real estate (market value)</li>
                <li>• Vehicles and valuables (if meaningful)</li>
              </ul>
            </div>
            <div className="bg-white border border-rose-200 rounded-xl p-6">
              <h3 className="font-bold text-rose-700 text-lg mb-3">Liabilities</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Mortgage balance</li>
                <li>• Student loans</li>
                <li>• Credit card balances</li>
                <li>• Auto loans</li>
                <li>• Personal or business debt</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="how-to-calculate" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to calculate net worth step-by-step</h2>
          <ol className="space-y-4 text-slate-700">
            <li><strong>1) List every asset</strong> in today&apos;s dollars.</li>
            <li><strong>2) List every liability</strong> with current balances.</li>
            <li><strong>3) Subtract liabilities</strong> from assets.</li>
            <li><strong>4) Track monthly</strong> to spot trends.</li>
          </ol>
          <p className="text-lg text-slate-700 leading-relaxed">
            The secret to a useful net worth calculator is consistency. Even if a number is approximate, tracking it
            monthly shows the direction you&apos;re moving.
          </p>
        </section>

        <section id="set-up" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to set up your tracker</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            You can use a spreadsheet, an app, or our <a href="/net-worth-command-center/" className="text-indigo-600 font-semibold hover:underline">net worth command center</a>.
            The tool matters less than the structure. A simple layout has one row per account and one column per month:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Account</th>
                  <th className="text-left p-4 font-black text-slate-900">Category</th>
                  <th className="text-left p-4 font-black text-slate-900">Where the number comes from</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Checking / savings</td>
                  <td className="p-4 text-slate-700">Cash</td>
                  <td className="p-4 text-slate-700">Bank balance on your tracking date</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">401(k), IRA, HSA</td>
                  <td className="p-4 text-slate-700">Retirement</td>
                  <td className="p-4 text-slate-700">Account balance from the provider</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Brokerage</td>
                  <td className="p-4 text-slate-700">Taxable investments</td>
                  <td className="p-4 text-slate-700">Market value of holdings</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Home</td>
                  <td className="p-4 text-slate-700">Real estate</td>
                  <td className="p-4 text-slate-700">Conservative estimate, updated once or twice a year</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Mortgage, auto, student loans</td>
                  <td className="p-4 text-slate-700">Long-term debt</td>
                  <td className="p-4 text-slate-700">Payoff balance from the lender</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Credit cards</td>
                  <td className="p-4 text-slate-700">Short-term debt</td>
                  <td className="p-4 text-slate-700">Current balance, even if paid in full monthly</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Add three summary rows at the bottom: total assets, total liabilities, and net worth. Many people also add a
            notes column for anything unusual that month (a bonus, a big repair, a market drop) so the numbers make sense
            when you look back a year later.
          </p>
        </section>

        <section id="tracking-habit" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Monthly tracking habit that actually works</h2>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
            <p className="text-indigo-900 font-semibold">Pick a single day each month—like the 1st—and update your numbers.</p>
            <p className="text-indigo-800 mt-2">
              It takes 10 minutes, keeps you honest, and makes every financial decision feel clearer.
            </p>
          </div>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>Same day, same method.</strong> Comparing a balance from the 1st with one from the 20th mixes in paycheck timing.</li>
            <li>• <strong>Don&apos;t re-estimate the house every month.</strong> Home values are slow and imprecise; revisit them once or twice a year so they don&apos;t dominate the trend.</li>
            <li>• <strong>Write down one sentence.</strong> &quot;Net worth up $1,000 despite the market dip&quot; is easier to learn from than a column of numbers.</li>
            <li>• <strong>Review the year in January.</strong> Compare the annual change with what you saved to see how much came from habits versus markets.</li>
          </ul>
        </section>

        <section id="reading" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Reading the numbers: a worked example</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Each month&apos;s change in net worth comes from three sources: money you saved (including retirement
            contributions and loan principal paid), changes in investment values, and changes in the value of things like
            cars and homes. Splitting the change this way tells you what is really driving progress.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <p className="text-emerald-900 font-semibold text-lg">
              📊 <strong>Example (hypothetical):</strong> one month for a single saver
            </p>
            <ul className="mt-2 space-y-1 text-base text-emerald-900">
              <li>• Saved from income (401(k) contributions, savings, loan principal): +$1,800</li>
              <li>• Investment accounts fell in a weak market: −$600</li>
              <li>• Car lost resale value: −$200</li>
              <li>• <strong>Net worth change: +$1,000</strong></li>
            </ul>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            In this month, the market went down but net worth still rose, because saving outweighed the loss. Early in your
            journey, savings usually drive most of the change. As balances grow, market moves can swamp a month&apos;s savings
            in either direction, which is why the multi-year trend matters more than any single month. To see how steady
            contributions might compound over decades, try the <a href="/wealth-investment-projector/" className="text-indigo-600 font-semibold hover:underline">investment projector</a>.
          </p>
        </section>

        <section id="metrics" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Metrics worth tracking alongside net worth</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Savings rate</h3>
              <p className="text-slate-700">The share of income you keep each month. It is the part of net worth growth you control most directly.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Liquid net worth</h3>
              <p className="text-slate-700">Net worth excluding home equity and retirement accounts. It shows how much you could reach without selling the house or paying early-withdrawal costs.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Total debt</h3>
              <p className="text-slate-700">A falling debt line is progress even in months when investment balances drop.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Months of expenses in cash</h3>
              <p className="text-slate-700">Cash divided by essential monthly spending, a quick check on your <a href="/blog/6-month-emergency-fund-rule/" className="text-indigo-600 font-semibold hover:underline">emergency fund</a>.</p>
            </div>
          </div>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common net worth tracker mistakes</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Tracking too often and getting discouraged by short-term moves.</li>
            <li>• Ignoring debt balances (net worth is assets minus liabilities).</li>
            <li>• Overvaluing illiquid assets without a realistic market price.</li>
            <li>• Counting home equity as an asset and also subtracting the mortgage (double counting).</li>
            <li>• Comparing yourself to others instead of to your own past numbers.</li>
            <li>• Quitting after a bad month. A tracker is most useful precisely when the numbers are uncomfortable.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Net worth tracker FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">How often should I update my net worth?</h3>
              <p className="text-slate-700">Monthly is ideal for most people. Quarterly also works if you prefer less friction.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">Should I include my home value?</h3>
              <p className="text-slate-700">Yes—use a conservative estimate and subtract the remaining mortgage balance.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">Should couples track net worth together?</h3>
              <p className="text-slate-700">Many couples track a combined household number and keep a column showing whose account is whose. That keeps the shared picture clear without hiding individual debts or savings.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">My net worth is negative. Is tracking still worth it?</h3>
              <p className="text-slate-700">Yes. A negative net worth is common with student loans or a new car loan. Watching it climb toward zero is real, measurable progress.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">How do I value crypto or individual stocks?</h3>
              <p className="text-slate-700">Use the market value on your tracking date, the same as any other investment. Because these can swing widely, focus on the long-term trend. Our <a href="/blog/net-worth-percentile-by-age-2026/" className="text-indigo-600 font-semibold hover:underline">net worth by age guide</a> offers broader context if you want a benchmark.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500">This guide is educational and is not individualized financial advice.</p>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• Federal Reserve, Survey of Consumer Finances (household net worth data): <a href="https://www.federalreserve.gov/" className="text-indigo-600 font-semibold hover:underline">federalreserve.gov</a></li>
            <li>• Consumer Financial Protection Bureau, money management tools: <a href="https://www.consumerfinance.gov/" className="text-indigo-600 font-semibold hover:underline">consumerfinance.gov</a></li>
            <li>• Investor.gov, compound interest and investing basics: <a href="https://www.investor.gov/" className="text-indigo-600 font-semibold hover:underline">investor.gov</a></li>
          </ul>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Get Wealth Tracking Tips"
          description="Join the weekly newsletter for practical net worth, budgeting, and investing ideas that build real wealth."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.NET_WORTH)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">💎 Net Worth Tracker</h4>
            <p className="text-sm text-slate-600">Track assets and liabilities in one clean dashboard.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_BUDGETING)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📊 Budgeting Guide</h4>
            <p className="text-sm text-slate-600">Build a monthly plan that accelerates net worth growth.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetWorthTrackerGuide2025;

import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const AssetsVsLiabilitiesNetWorth2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>💎 Net Worth</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Assets vs. Liabilities: How to Calculate Your True Net Worth
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Assets put money in your pocket. Liabilities take money out. Your true net worth is simply assets minus
          liabilities — a quick snapshot of your financial health.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Track your net worth in one place</h3>
              <p className="text-sm text-slate-600">
                Add assets and liabilities to see your real net worth instantly.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.NET_WORTH)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Net Worth Center →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('assets')} className="text-indigo-600 hover:underline">1. What counts as an asset?</button></li>
          <li><button onClick={() => scrollToSection('liabilities')} className="text-indigo-600 hover:underline">2. What counts as a liability?</button></li>
          <li><button onClick={() => scrollToSection('formula')} className="text-indigo-600 hover:underline">3. Net worth formula</button></li>
          <li><button onClick={() => scrollToSection('valuing')} className="text-indigo-600 hover:underline">4. How to value each item</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">5. Worked example</button></li>
          <li><button onClick={() => scrollToSection('true')} className="text-indigo-600 hover:underline">6. Getting to a &quot;true&quot; net worth</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">7. Common mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. FAQ</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="assets" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Assets: things that build your wealth</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Assets include cash, investments, retirement accounts, your home and other property, and any item that can be
            sold or produces income.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            It helps to group assets by how quickly you could turn them into spendable cash, because a dollar in checking
            and a dollar locked in a house are not equally useful in an emergency:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Asset type</th>
                  <th className="text-left p-4 font-black text-slate-900">Examples</th>
                  <th className="text-left p-4 font-black text-slate-900">Liquidity</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Cash</td>
                  <td className="p-4 text-slate-700">Checking, savings, money market accounts, CDs</td>
                  <td className="p-4 font-bold text-slate-900">High</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Taxable investments</td>
                  <td className="p-4 text-slate-700">Brokerage accounts, index funds, stocks, bonds</td>
                  <td className="p-4 font-bold text-slate-900">High (but values move)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Retirement accounts</td>
                  <td className="p-4 text-slate-700">401(k), 403(b), traditional and Roth IRAs, HSA</td>
                  <td className="p-4 font-bold text-slate-900">Medium (taxes and penalties may apply)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Real estate</td>
                  <td className="p-4 text-slate-700">Primary home, rental property, land</td>
                  <td className="p-4 font-bold text-slate-900">Low</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Personal property</td>
                  <td className="p-4 text-slate-700">Vehicles, valuable collections, jewelry</td>
                  <td className="p-4 font-bold text-slate-900">Low to medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="liabilities" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Liabilities: the drains on your balance sheet</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Liabilities are debts like credit cards, student loans, auto loans, and mortgages. Anything you owe counts as
            a liability.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Use the <strong>payoff balance</strong>, not the original loan amount or your monthly payment. Your lender&apos;s
            statement or online account shows what you currently owe. Don&apos;t forget smaller items: a buy-now-pay-later
            plan, a medical payment plan, a 401(k) loan, money owed to family, or a tax balance due to the IRS or your state.
            A credit card you pay in full each month still counts at its current statement balance on the day you measure.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Liabilities aren&apos;t all equally harmful. A fixed-rate mortgage on a home that holds its value is very
            different from a credit card balance at a high interest rate. For the net worth number itself, every dollar
            owed counts the same; for deciding what to pay off first, the interest rate matters. Our guide to <a href="/blog/snowball-vs-avalanche-debt-payoff/" className="text-indigo-600 font-semibold hover:underline">snowball vs. avalanche debt payoff</a> covers
            that decision.
          </p>
        </section>

        <section id="formula" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Net worth formula</h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-lg text-slate-700">
              <strong>Net Worth = Total Assets − Total Liabilities</strong>
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            If the result is positive, you would have money left over if you sold everything and paid off every debt. If it
            is negative, you owe more than you own. A negative number is common early in a career, especially with student
            loans, and is a starting point rather than a verdict. What matters most is the direction the number moves over
            time.
          </p>
        </section>

        <section id="valuing" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to value each item</h2>
          <div className="space-y-6 mt-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Accounts: use the current balance</h3>
                <p className="text-slate-700 mb-3">Bank, brokerage and retirement balances come straight from your statements. Pick one date and use it for everything.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Home: list market value as the asset and the mortgage as a liability</h3>
                <p className="text-slate-700 mb-3">Use a conservative estimate of what the home would sell for today, not what you paid. Recent nearby sales are a better guide than an optimistic online estimate.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Vehicles: use resale value</h3>
                <p className="text-slate-700 mb-3">Cars lose value every year. Use a realistic private-party or trade-in value, and update it each time you recalculate.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Household items: usually leave them out</h3>
                <p className="text-slate-700 mb-3">Furniture, electronics and clothing sell for a fraction of their cost. Include only items with a real resale market, such as valuable jewelry or collectibles.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Example (hypothetical):</strong> a married couple in their late thirties lists everything they own and owe.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
              <h3 className="font-bold text-emerald-900 text-lg mb-4">Assets</h3>
              <ul className="space-y-2 text-emerald-800">
                <li>• Checking and savings: $18,000</li>
                <li>• 401(k) balances: $145,000</li>
                <li>• Roth IRAs: $32,000</li>
                <li>• Brokerage account: $20,000</li>
                <li>• Home (market value): $400,000</li>
                <li>• Car (resale value): $15,000</li>
                <li>• <strong>Total assets: $630,000</strong></li>
              </ul>
            </div>
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Liabilities</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Mortgage balance: $290,000</li>
                <li>• Auto loan: $12,000</li>
                <li>• Student loans: $28,000</li>
                <li>• Credit card balance: $3,500</li>
                <li>• <strong>Total liabilities: $333,500</strong></li>
              </ul>
            </div>
          </div>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <p className="text-emerald-900 font-semibold text-lg">
              📊 Net worth = $630,000 − $333,500 = <strong>$296,500</strong>
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Their debt-to-asset ratio is $333,500 ÷ $630,000, or about 53%. Tracking that ratio alongside net worth shows
            whether growth is coming from building assets or from paying down debt. Lenders look at a different measure,
            debt payments compared with income, which you can check with the <a href="/debt-to-income-ratio-calculator/" className="text-indigo-600 font-semibold hover:underline">debt-to-income ratio calculator</a>.
          </p>
        </section>

        <section id="true" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Getting to a &quot;true&quot; net worth</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The simple formula treats every dollar of assets the same. Two adjustments give a more honest picture:
          </p>
          <ul className="space-y-2 text-slate-700">
            <li>• <strong>Taxes owed on pre-tax accounts.</strong> Money in a traditional 401(k) or IRA will be taxed as ordinary income when withdrawn. Roth balances generally won&apos;t be, if the rules are met.</li>
            <li>• <strong>Costs of selling a home.</strong> Agent commissions, closing costs and repairs reduce what you actually walk away with.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            Continuing the example, suppose the couple assumes a 22% tax rate on future 401(k) withdrawals (an assumption,
            not a prediction) and selling costs of about 6% of the home&apos;s value:
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <ul className="space-y-1 text-indigo-900 font-semibold">
              <li>• Estimated tax on 401(k): $145,000 × 22% = $31,900</li>
              <li>• Estimated selling costs: $400,000 × 6% = $24,000</li>
              <li>• Adjusted net worth: $296,500 − $31,900 − $24,000 = <strong>$240,600</strong></li>
            </ul>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Neither number is &quot;wrong.&quot; The headline figure is easy to compare from year to year; the adjusted figure
            is closer to what the household could actually spend. Many people also track <strong>liquid net worth</strong>,
            which leaves out home equity and retirement accounts, to see how much is available without selling the house or
            touching retirement savings. Use our <a href="/net-worth-command-center/" className="text-indigo-600 font-semibold hover:underline">net worth calculator</a> to
            record both and watch the trend.
          </p>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes</h2>
          <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
            <ul className="space-y-2 text-slate-700">
              <li>• <strong>Counting home equity and the mortgage.</strong> Use market value plus the mortgage as a liability, or equity alone, but not both.</li>
              <li>• <strong>Using purchase prices.</strong> Cars, furniture and electronics are worth what they would sell for today.</li>
              <li>• <strong>Forgetting small debts.</strong> Payment plans and 401(k) loans add up.</li>
              <li>• <strong>Measuring on different dates.</strong> Pick the same day each month or quarter so changes reflect reality, not timing.</li>
              <li>• <strong>Overreacting to market swings.</strong> Investment balances rise and fall. Look at the trend over several years.</li>
            </ul>
          </div>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is my house an asset or a liability?</h3>
              <p className="text-slate-700">
                For a net worth statement, the home is an asset at its market value and the mortgage is a liability. The
                difference is your equity. The ongoing costs of owning it (taxes, insurance, maintenance) belong in your
                budget, not on the balance sheet.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Should I include my car?</h3>
              <p className="text-slate-700">
                Yes, at a realistic resale value, with any auto loan listed as a liability. Because cars depreciate, a car
                bought with a loan often adds more to liabilities than to assets in the first few years.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How often should I calculate net worth?</h3>
              <p className="text-slate-700">
                Monthly or quarterly is enough for most people. More frequent checks mostly capture short-term market moves.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How does my net worth compare to others my age?</h3>
              <p className="text-slate-700">
                Comparisons are useful as rough context only. Our <a href="/blog/net-worth-percentile-by-age-2026/" className="text-indigo-600 font-semibold hover:underline">net worth percentile by age guide</a> explains
                how to read published survey data without over-interpreting it.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-500">This article is educational and is not individualized financial advice.</p>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• Federal Reserve, Survey of Consumer Finances (household assets, debts and net worth): <a href="https://www.federalreserve.gov/" className="text-indigo-600 font-semibold hover:underline">federalreserve.gov</a></li>
            <li>• Consumer Financial Protection Bureau, debt and credit resources: <a href="https://www.consumerfinance.gov/" className="text-indigo-600 font-semibold hover:underline">consumerfinance.gov</a></li>
            <li>• IRS Publication 590-B, distributions from IRAs: <a href="https://www.irs.gov/publications/p590b" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p590b</a></li>
            <li>• Investor.gov, investing basics: <a href="https://www.investor.gov/" className="text-indigo-600 font-semibold hover:underline">investor.gov</a></li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default AssetsVsLiabilitiesNetWorth2026;

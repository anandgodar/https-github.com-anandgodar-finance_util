'use client';


import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const RothIRAvsTraditionalIRA2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>⏱️ 7 min read</span>
          <span>•</span>
          <span>💰 Retirement Planning</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Roth IRA vs Traditional IRA 2026: Which is Better? Complete Comparison
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Choosing between a <strong>Roth IRA and Traditional IRA</strong> is one of the most important retirement
          planning decisions. This comprehensive guide compares tax benefits, contribution limits, withdrawal rules,
          and helps you choose the right account for 2026.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Compare Retirement Account Strategies
              </h3>
              <p className="text-sm text-slate-600">
                Use our retirement optimizer to find the best strategy for your situation
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.RETIREMENT_OPTIMIZER)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('key-differences')} className="text-indigo-600 hover:underline">1. Key Differences at a Glance</button></li>
          <li><button onClick={() => scrollToSection('traditional-ira')} className="text-indigo-600 hover:underline">2. Traditional IRA: Tax Deduction Now</button></li>
          <li><button onClick={() => scrollToSection('roth-ira')} className="text-indigo-600 hover:underline">3. Roth IRA: Tax-Free Withdrawals</button></li>
          <li><button onClick={() => scrollToSection('contribution-limits')} className="text-indigo-600 hover:underline">4. Contribution Limits 2026</button></li>
          <li><button onClick={() => scrollToSection('which-is-better')} className="text-indigo-600 hover:underline">5. Which is Better for You?</button></li>
          <li><button onClick={() => scrollToSection('withdrawal-rules')} className="text-indigo-600 hover:underline">6. Withdrawal Rules & Penalties</button></li>
          <li><button onClick={() => scrollToSection('examples')} className="text-indigo-600 hover:underline">7. Real-World Examples</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. Frequently Asked Questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="key-differences" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Key Differences at a Glance</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-black text-indigo-900 text-2xl mb-4">Traditional IRA</h3>
              <ul className="space-y-3 text-indigo-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span><strong>Tax Deduction:</strong> Contributions reduce taxable income now</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span><strong>Tax-Deferred Growth:</strong> No taxes on earnings until withdrawal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✗</span>
                  <span><strong>Taxed Withdrawals:</strong> Pay income tax on withdrawals in retirement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✗</span>
                  <span><strong>RMDs:</strong> Required Minimum Distributions generally starting at age 73</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <h3 className="font-black text-purple-900 text-2xl mb-4">Roth IRA</h3>
              <ul className="space-y-3 text-purple-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">✗</span>
                  <span><strong>No Tax Deduction:</strong> Contributions are made with after-tax money</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span><strong>Tax-Free Growth:</strong> Earnings grow tax-free</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span><strong>Tax-Free Withdrawals:</strong> No taxes on qualified withdrawals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span><strong>No RMDs:</strong> No required distributions during your lifetime</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <p className="text-emerald-900 font-semibold text-lg">
              💡 <strong>Simple Rule:</strong> Choose Traditional IRA if you expect to be in a <strong>lower tax bracket in retirement</strong>.
              Choose Roth IRA if you expect to be in a <strong>higher or equal tax bracket in retirement</strong>.
            </p>
          </div>
        </section>

        <section id="traditional-ira" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Traditional IRA: Tax Deduction Now</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            A <strong>Traditional IRA</strong> allows you to contribute pre-tax money, reducing your taxable income
            in the year you contribute. You pay taxes when you withdraw in retirement.
          </p>

          <h3 className="text-2xl font-black text-slate-900 mt-8">Tax Benefits</h3>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-4">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Scenario</th>
                  <th className="text-left p-4 font-black text-slate-900">Tax Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Deduct a $7,500 contribution in the 22% tax bracket</td>
                  <td className="p-4 font-bold text-emerald-600">Save $1,650 in federal taxes now</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Earnings grow tax-deferred</td>
                  <td className="p-4 font-bold text-indigo-600">No taxes on growth until withdrawal</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Withdraw in retirement at 12% bracket</td>
                  <td className="p-4 font-bold text-slate-700">Pay 12% tax on withdrawals</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <div className="text-indigo-900 font-semibold">
              📊 <strong>Hypothetical example:</strong> Contribute $7,500 to a deductible Traditional IRA for 2026:
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Reduce taxable income by $7,500</li>
                <li>• Save $1,650 in federal taxes (22% bracket)</li>
                <li>• Net cost: $5,850</li>
                <li>• Earnings grow tax-deferred until withdrawal</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">Who Can Deduct a Traditional IRA Contribution?</h3>

          <p className="text-lg text-slate-700 leading-relaxed">
            Anyone with earned income can contribute to a Traditional IRA, but whether you can <strong>deduct</strong> it
            depends on whether you (or your spouse) are covered by a workplace retirement plan and on your modified AGI.
            The exact phase-out ranges are adjusted for inflation each year — check IRS Publication 590-A for the
            current figures.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-4">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Your Situation</th>
                  <th className="text-left p-4 font-black text-slate-900">Deduction</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Neither you nor your spouse has a workplace plan</td>
                  <td className="p-4 font-bold text-emerald-600">Full deduction at any income</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">You are covered by a workplace plan</td>
                  <td className="p-4 font-bold text-yellow-600">Phases out at moderate incomes (see Pub 590-A)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Only your spouse is covered (married filing jointly)</td>
                  <td className="p-4 font-bold text-yellow-600">Phases out at a higher income range</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Income above the phase-out</td>
                  <td className="p-4 font-bold text-red-600">No deduction; non-deductible contribution still allowed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="roth-ira" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Roth IRA: Tax-Free Withdrawals</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            A <strong>Roth IRA</strong> requires after-tax contributions, but all qualified withdrawals (contributions
            and earnings) are completely tax-free in retirement.
          </p>

          <h3 className="text-2xl font-black text-slate-900 mt-8">Tax Benefits</h3>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-4">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Scenario</th>
                  <th className="text-left p-4 font-black text-slate-900">Tax Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Contribute $7,500 with after-tax money</td>
                  <td className="p-4 font-bold text-slate-700">No tax deduction now</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Earnings grow tax-free</td>
                  <td className="p-4 font-bold text-emerald-600">No taxes on growth ever</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Withdraw in retirement (qualified)</td>
                  <td className="p-4 font-bold text-emerald-600">Federal income tax-free</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl mt-6">
            <div className="text-purple-900 font-semibold">
              📊 <strong>Hypothetical example:</strong> Contribute $7,500 to a Roth IRA for 2026:
              <ul className="mt-2 space-y-1 text-sm">
                <li>• No deduction: the $7,500 comes from income you&apos;ve already paid tax on ($1,650 of tax in the 22% bracket)</li>
                <li>• Net cost: $7,500 (no tax savings now)</li>
                <li>• Earnings grow tax-free</li>
                <li>• Qualified withdrawals are tax-free in retirement</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">Income Limits for Contributions (2026, based on MAGI)</h3>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-4">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Filing Status</th>
                  <th className="text-left p-4 font-black text-slate-900">Full Contribution</th>
                  <th className="text-left p-4 font-black text-slate-900">Reduced Contribution</th>
                  <th className="text-left p-4 font-black text-slate-900">No Contribution</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Single/Head of Household</td>
                  <td className="p-4 font-bold text-emerald-600">Under $153,000</td>
                  <td className="p-4 font-bold text-yellow-600">$153,000 - $168,000</td>
                  <td className="p-4 font-bold text-red-600">$168,000+</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Married Filing Jointly</td>
                  <td className="p-4 font-bold text-emerald-600">Under $242,000</td>
                  <td className="p-4 font-bold text-yellow-600">$242,000 - $252,000</td>
                  <td className="p-4 font-bold text-red-600">$252,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="contribution-limits" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Contribution Limits 2026</h2>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Account Type</th>
                  <th className="text-left p-4 font-black text-slate-900">Under 50</th>
                  <th className="text-left p-4 font-black text-slate-900">50+ (Catch-Up)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Traditional IRA</td>
                  <td className="p-4 font-bold text-slate-900">$7,500</td>
                  <td className="p-4 font-bold text-slate-900">$8,600</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-purple-600">Roth IRA</td>
                  <td className="p-4 font-bold text-slate-900">$7,500</td>
                  <td className="p-4 font-bold text-slate-900">$8,600</td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Combined Total</td>
                  <td className="p-4 font-bold text-slate-900">$7,500</td>
                  <td className="p-4 font-bold text-slate-900">$8,600</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mt-6">
            <p className="text-yellow-900 font-semibold">
              ⚠️ <strong>Important:</strong> The $7,500 limit applies to your <strong>combined</strong> Traditional and Roth IRA
              contributions. You can't contribute $7,500 to each—it's $7,500 total across both accounts ($8,600 if you&apos;re
              50 or older). Contributions also can&apos;t exceed your taxable compensation, and 2026 contributions can be made
              until the tax filing deadline, April 15, 2027.
            </p>
          </div>
        </section>

        <section id="which-is-better" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Which is Better for You?</h2>

          <div className="space-y-6 mt-6">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-r-xl p-6">
              <h3 className="font-bold text-indigo-900 text-xl mb-3">Choose Traditional IRA If:</h3>
              <ul className="space-y-2 text-indigo-800">
                <li>• You expect to be in a <strong>lower tax bracket in retirement</strong></li>
                <li>• You need the <strong>tax deduction now</strong> to reduce current tax burden</li>
                <li>• You're in a <strong>high tax bracket</strong> (24%+) and want immediate savings</li>
                <li>• You want to <strong>maximize current take-home pay</strong></li>
                <li>• You're close to retirement and want to defer taxes</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6">
              <h3 className="font-bold text-purple-900 text-xl mb-3">Choose Roth IRA If:</h3>
              <ul className="space-y-2 text-purple-800">
                <li>• You expect to be in a <strong>higher or equal tax bracket in retirement</strong></li>
                <li>• You're <strong>young and early in your career</strong> (lower current tax bracket)</li>
                <li>• You want <strong>tax-free withdrawals</strong> in retirement</li>
                <li>• You want <strong>no required minimum distributions</strong> (RMDs)</li>
                <li>• You want to <strong>leave tax-free money to heirs</strong></li>
                <li>• You're ineligible for Traditional IRA deduction (income too high)</li>
              </ul>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6">
              <h3 className="font-bold text-emerald-900 text-xl mb-3">Consider Both (Split Strategy):</h3>
              <p className="text-emerald-800 mb-3">
                A common approach is a <strong>split strategy</strong>: contribute to both Traditional and Roth IRAs
                to create tax diversification. This gives you flexibility in retirement to choose which account to
                withdraw from based on your tax situation.
              </p>
              <p className="text-emerald-800">
                <strong>Example:</strong> Contribute $3,750 to Traditional IRA (for tax deduction) and $3,750 to Roth IRA
                (for tax-free growth). Total: $7,500 across both accounts.
              </p>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Not sure which bracket you&apos;re in? Our{' '}
            <a href="/blog/tax-brackets-explained-2025/" className="text-indigo-600 font-semibold hover:underline">tax brackets explained</a>{' '}
            guide walks through marginal vs. effective rates, and the{' '}
            <a href="/blog/401k-vs-ira-comparison-2025/" className="text-indigo-600 font-semibold hover:underline">401(k) vs IRA comparison</a>{' '}
            covers which account to fund first.
          </p>
        </section>

        <section id="withdrawal-rules" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Withdrawal Rules & Penalties</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-xl mb-4">Traditional IRA</h3>
              <ul className="space-y-3 text-slate-700">
                <li>• <strong>Age 59½:</strong> Can withdraw without penalty</li>
                <li>• <strong>Age 73:</strong> Required Minimum Distributions (RMDs) generally begin (75 if born in 1960 or later)</li>
                <li>• <strong>Early Withdrawal:</strong> 10% penalty + income tax</li>
                <li>• <strong>Exceptions:</strong> First-time home purchase (up to $10,000 lifetime), higher education, certain medical expenses, disability</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-xl mb-4">Roth IRA</h3>
              <ul className="space-y-3 text-slate-700">
                <li>• <strong>Contributions:</strong> Can withdraw anytime, tax-free</li>
                <li>• <strong>Earnings:</strong> Tax-free after age 59½ + 5-year rule</li>
                <li>• <strong>No RMDs:</strong> No required distributions during lifetime</li>
                <li>• <strong>Early Withdrawal:</strong> Contributions come out first (no penalty)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="examples" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Real-World Examples</h2>

          <div className="space-y-6 mt-6">
            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-indigo-900 text-xl mb-4">Example 1: Young Professional (25 years old, $60,000 salary, single)</h3>
              <div className="space-y-2 text-indigo-800">
                <p><strong>Current Tax Bracket:</strong> 12% ($43,900 taxable after the $16,100 standard deduction)</p>
                <p><strong>Expected Retirement Bracket:</strong> 22% (assumed, as income grows over a career)</p>
                <p className="font-bold text-lg mt-2">✅ Recommendation: Roth IRA</p>
                <p className="text-sm">Pay taxes now at 12%, withdraw tax-free in retirement when you'd be in 22% bracket.</p>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <h3 className="font-bold text-purple-900 text-xl mb-4">Example 2: Peak Earner Without a Workplace Plan (50 years old, $140,000, single)</h3>
              <div className="space-y-2 text-purple-800">
                <p><strong>Current Tax Bracket:</strong> 24% ($123,900 taxable after the standard deduction)</p>
                <p><strong>Expected Retirement Bracket:</strong> 12-22% (assumed lower)</p>
                <p className="font-bold text-lg mt-2">✅ Leans Traditional IRA</p>
                <p className="text-sm">With no workplace plan, the deduction is available at any income. Deducting the full $8,600 (with catch-up) saves about $2,064 of federal tax now; if withdrawals are later taxed at 12–22%, Traditional comes out ahead.</p>
              </div>
            </div>

            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-indigo-900 text-xl mb-4">Example 3: High Earner With a 401(k) (45 years old, $200,000, single)</h3>
              <div className="space-y-2 text-indigo-800">
                <p><strong>Current Tax Bracket:</strong> 24% ($183,900 taxable)</p>
                <p><strong>Roth IRA:</strong> Not allowed directly — MAGI is above the $168,000 cutoff</p>
                <p><strong>Traditional IRA deduction:</strong> Not available — covered by a workplace plan at this income</p>
                <p className="font-bold text-lg mt-2">✅ Options: 401(k) first, then a backdoor Roth</p>
                <p className="text-sm">Max the 401(k) ($24,500 in 2026, Roth or pre-tax), then consider a non-deductible Traditional IRA contribution converted to Roth — keeping the pro-rata rule in mind (see FAQ below).</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Can I contribute to both Traditional and Roth IRA?</h3>
              <p className="text-slate-700">
                Yes, but the combined contribution limit for 2026 is $7,500 ($8,600 if 50+). You can split this between both
                accounts (e.g., $3,750 to each).
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Which has better returns: Roth or Traditional IRA?</h3>
              <p className="text-slate-700">
                The returns are the same—the difference is when you pay taxes. Traditional gives you a tax break now,
                Roth gives you tax-free withdrawals later. Choose based on your expected tax bracket in retirement.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What if my income is too high for Roth IRA?</h3>
              <p className="text-slate-700">
                Consider a <strong>Backdoor Roth IRA</strong>: contribute to a Traditional IRA (no income limit for
                non-deductible contributions), then convert to a Roth IRA. Conversions have no income limit. Watch the
                <strong> pro-rata rule</strong>: if you hold other pre-tax money in any Traditional, SEP, or SIMPLE IRA,
                part of the conversion is taxable. Report non-deductible contributions on Form 8606.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What is the Roth IRA 5-year rule?</h3>
              <p className="text-slate-700">
                Earnings come out tax-free only if you&apos;re 59½ or older (or meet another exception) and it has been at
                least five tax years since your first Roth IRA contribution. Your original contributions can always be
                withdrawn tax- and penalty-free. Converted amounts have their own five-year clock for the penalty.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Should I use a Roth IRA or a Roth 401(k)?</h3>
              <p className="text-slate-700">
                Both are funded with after-tax dollars. The Roth 401(k) has no income limit and a much higher limit
                ($24,500 in 2026), while the IRA usually offers more investment choice. Many people use both. See{' '}
                <a href="/blog/roth-vs-traditional-401k-tax-bracket-bet/" className="text-indigo-600 font-semibold hover:underline">Roth vs. Traditional 401(k): the tax bracket bet</a>.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• IRS Notice 2025-67 (2026 IRA limits and Roth income ranges) — <a href="https://www.irs.gov/retirement-plans" className="text-indigo-600 font-semibold hover:underline">IRS Retirement Plans</a></li>
            <li>• IRS Rev. Proc. 2025-32 (2026 tax brackets and standard deduction) — <a href="https://www.irs.gov/" className="text-indigo-600 font-semibold hover:underline">irs.gov</a></li>
            <li>• <a href="https://www.irs.gov/publications/p590a" className="text-indigo-600 font-semibold hover:underline">IRS Publication 590-A, Contributions to IRAs</a></li>
            <li>• <a href="https://www.irs.gov/publications/p590b" className="text-indigo-600 font-semibold hover:underline">IRS Publication 590-B, Distributions from IRAs</a></li>
          </ul>
          <p className="text-sm text-slate-600 italic">
            This article is educational and is not individualized tax or investment advice. Examples are hypothetical.
          </p>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-black mb-4">Optimize Your Retirement Strategy</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Use our retirement account optimizer to compare Traditional vs Roth IRA and find the best strategy for your situation.
          </p>
          <button
            onClick={() => onNavigate?.(ToolType.RETIREMENT_OPTIMIZER)}
            className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition text-lg"
          >
            Use Retirement Optimizer →
          </button>
        </section>
      </article>
    </div>
  );
};

export default RothIRAvsTraditionalIRA2025;

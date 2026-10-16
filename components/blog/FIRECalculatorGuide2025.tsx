'use client';

import React from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const FIRECalculatorGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>⏱️ 8 min read</span>
          <span>•</span>
          <span>🔥 Early Retirement</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          FIRE Calculator: Calculate Your Early Retirement Number - Complete 2026 Guide
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          <strong>FIRE (Financial Independence Retire Early)</strong> is a movement focused on achieving financial
          independence and retiring decades earlier than traditional retirement age. This comprehensive guide explains
          the <strong>4% rule</strong>, how to calculate your FIRE number, and strategies to achieve early retirement.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Calculate Your FIRE Number
              </h3>
              <p className="text-sm text-slate-600">
                Use our FIRE calculator to find your freedom number and retirement timeline
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.FIRE_PLANNER)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use FIRE Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('what-is-fire')} className="text-indigo-600 hover:underline">1. What is FIRE?</button></li>
          <li><button onClick={() => scrollToSection('4-percent-rule')} className="text-indigo-600 hover:underline">2. The 4% Rule Explained</button></li>
          <li><button onClick={() => scrollToSection('fire-number')} className="text-indigo-600 hover:underline">3. How to Calculate Your FIRE Number</button></li>
          <li><button onClick={() => scrollToSection('fire-types')} className="text-indigo-600 hover:underline">4. Types of FIRE: Lean, Regular, Fat</button></li>
          <li><button onClick={() => scrollToSection('savings-rate')} className="text-indigo-600 hover:underline">5. Savings Rate & Time to FIRE</button></li>
          <li><button onClick={() => scrollToSection('strategies')} className="text-indigo-600 hover:underline">6. Strategies to Achieve FIRE</button></li>
          <li><button onClick={() => scrollToSection('examples')} className="text-indigo-600 hover:underline">7. Hypothetical FIRE Examples</button></li>
          <li><button onClick={() => scrollToSection('health-insurance')} className="text-indigo-600 hover:underline">8. Health Insurance Before Medicare (2026)</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">9. Common FIRE Calculator Mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">10. Frequently Asked Questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">11. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="what-is-fire" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is FIRE?</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>FIRE (Financial Independence Retire Early)</strong> is a financial movement and lifestyle philosophy
            focused on extreme savings and investment to allow retirement much earlier than traditional retirement age.
            The goal is to accumulate assets worth 25 times your annual expenses, allowing you to live off investment
            returns indefinitely.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold text-lg">
              💡 <strong>Key Concept:</strong> Financial Independence means your investments generate enough passive income
              to cover your living expenses, giving you the freedom to work or not work as you choose.
            </p>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">The FIRE Philosophy</h3>

          <p className="text-lg text-slate-700 leading-relaxed">
            People pursuing FIRE often aim to save <strong>50% or more of their income</strong> and invest it in low-cost,
            diversified index funds. That is a target, not a requirement — any savings-rate increase shortens the timeline.
            The movement emphasizes:
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-700 mt-4">
            <li><strong>High savings rate</strong> - Maximize income, minimize expenses</li>
            <li><strong>Low-cost investing</strong> - Index funds, ETFs, avoid high fees</li>
            <li><strong>Geographic arbitrage</strong> - Live in lower cost-of-living areas</li>
            <li><strong>Side hustles</strong> - Generate additional income streams</li>
            <li><strong>Frugal living</strong> - Focus on value, not consumption</li>
          </ul>
        </section>

        <section id="4-percent-rule" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The 4% Rule Explained</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            The <strong>4% rule</strong> is the foundation of FIRE calculations. It states that you can safely withdraw
            4% of your portfolio in the first year of retirement, then increase that dollar amount by inflation each
            subsequent year, and your money has historically lasted at least 30 years in most periods. The idea comes from
            William Bengen&apos;s 1994 research, and the 1998 &quot;Trinity study&quot; by Cooley, Hubbard and Walz found that a 4%
            inflation-adjusted withdrawal from a 50/50 stock/bond portfolio survived about 95% of the historical 30-year
            periods it tested.
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold text-lg">
              📊 <strong>Example:</strong> If you have $1,000,000 invested:
              <ul className="mt-2 space-y-1 text-base">
                <li>• 4% withdrawal = $40,000/year ($3,333/month)</li>
                <li>• Year 2 at 3% inflation: $41,200; year 3: $42,436 — the dollar amount follows prices, not the market</li>
                <li>• Based on historical U.S. returns, not a guarantee about future returns</li>
                <li>• <strong>FIRE Number = Annual Expenses × 25</strong></li>
              </ul>
            </p>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">Is the 4% Rule Still Valid in 2026?</h3>

          <p className="text-lg text-slate-700 leading-relaxed">
            The Trinity study used U.S. market data from 1926–1995 and tested retirements of up to 30 years. Early retirees
            may need their money to last 40–50 years, so many planners suggest a <strong>3.5% or 3% withdrawal rate</strong>
            for people retiring before about age 50. The 4% rule remains a reasonable starting point, but treat it as an
            estimate to stress test, not a promise. Our deeper look at{' '}
            <a href="/blog/4-percent-rule-dead-safe-withdrawal-rates/" className="text-indigo-600 font-semibold hover:underline">whether the 4% rule still works</a>{' '}
            walks through the trade-offs. The labels in the table below are general rules of thumb, not study results.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-4">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Withdrawal Rate</th>
                  <th className="text-left p-4 font-black text-slate-900">Safety Level</th>
                  <th className="text-left p-4 font-black text-slate-900">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-slate-900">3%</td>
                  <td className="p-4 text-emerald-600 font-bold">Very Safe</td>
                  <td className="p-4 text-slate-700">Early retirees (40-50), conservative investors</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-slate-900">3.5%</td>
                  <td className="p-4 text-indigo-600 font-bold">Safe</td>
                  <td className="p-4 text-slate-700">Early retirees (50-55), balanced approach</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-slate-900">4%</td>
                  <td className="p-4 text-yellow-600 font-bold">Moderate</td>
                  <td className="p-4 text-slate-700">Traditional retirement (60+), standard FIRE</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-slate-900">4.5%+</td>
                  <td className="p-4 text-red-600 font-bold">Risky</td>
                  <td className="p-4 text-slate-700">Not recommended for early retirement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="fire-number" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to Calculate Your FIRE Number</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Your <strong>FIRE number</strong> is the total amount of money you need to retire. The formula is simple:
          </p>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-black mb-4">FIRE Number Formula</h3>
            <p className="text-4xl font-black mb-2">Annual Expenses × 25</p>
            <p className="text-indigo-100 text-lg">(Based on 4% withdrawal rate)</p>
          </div>

          <div className="space-y-6 mt-6">
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate Your Annual Expenses</h3>
                  <p className="text-slate-700 mb-3">Add up all your essential monthly expenses and multiply by 12.</p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-2">Example Monthly Expenses:</p>
                    <p className="font-mono text-sm">Housing: $1,500</p>
                    <p className="font-mono text-sm">Food: $400</p>
                    <p className="font-mono text-sm">Transportation: $300</p>
                    <p className="font-mono text-sm">Insurance: $200</p>
                    <p className="font-mono text-sm">Other: $600</p>
                    <p className="font-mono text-sm font-bold mt-2">Total: $3,000/month = $36,000/year</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Multiply by 25</h3>
                  <p className="text-slate-700 mb-3">This gives you your FIRE number based on the 4% rule.</p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-2">Example Calculation:</p>
                    <p className="font-mono text-sm font-bold text-lg">$36,000 × 25 = $900,000</p>
                    <p className="text-xs text-slate-500 mt-2">This is your FIRE number!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Adjust for Your Situation</h3>
                  <p className="text-slate-700 mb-3">Consider using 3.5% or 3% for early retirement, or if you want extra safety.</p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-2">Conservative Calculation (3.5% rule):</p>
                    <p className="font-mono text-sm">$36,000 ÷ 0.035 = $1,028,571</p>
                    <p className="text-xs text-slate-500 mt-2">More conservative, safer for early retirement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="fire-types" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Types of FIRE: Lean, Regular, Fat</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            These spending bands are informal conventions used in the FIRE community, not official definitions — people draw
            the lines differently depending on household size and where they live. Use them as rough labels; for a fuller
            comparison see{' '}
            <a href="/blog/leanfire-vs-fatfire-lifestyle-budget/" className="text-indigo-600 font-semibold hover:underline">LeanFIRE vs. FatFIRE budgets</a>.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
              <h3 className="font-black text-emerald-900 text-xl mb-3">Lean FIRE</h3>
              <p className="text-emerald-800 mb-4">
                <strong>Annual Expenses:</strong> $25,000 - $40,000
              </p>
              <p className="text-emerald-800 mb-4">
                <strong>FIRE Number:</strong> $625,000 - $1,000,000
              </p>
              <p className="text-emerald-800 text-sm">
                Minimalist lifestyle, very frugal living, often in low-cost areas. Requires strict budgeting but fastest path to FIRE.
              </p>
            </div>

            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-black text-indigo-900 text-xl mb-3">Regular FIRE</h3>
              <p className="text-indigo-800 mb-4">
                <strong>Annual Expenses:</strong> $40,000 - $100,000
              </p>
              <p className="text-indigo-800 mb-4">
                <strong>FIRE Number:</strong> $1,000,000 - $2,500,000
              </p>
              <p className="text-indigo-800 text-sm">
                Comfortable lifestyle, moderate spending, most common FIRE approach. Balance between savings and quality of life.
              </p>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <h3 className="font-black text-purple-900 text-xl mb-3">Fat FIRE</h3>
              <p className="text-purple-800 mb-4">
                <strong>Annual Expenses:</strong> $100,000+
              </p>
              <p className="text-purple-800 mb-4">
                <strong>FIRE Number:</strong> $2,500,000+
              </p>
              <p className="text-purple-800 text-sm">
                Luxury lifestyle, high spending, no compromises. Requires high income and aggressive savings, but maintains pre-retirement lifestyle.
              </p>
            </div>
          </div>
        </section>

        <section id="savings-rate" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Savings Rate & Time to FIRE</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Your <strong>savings rate</strong> (percentage of income saved) directly determines how quickly you reach FIRE.
            Higher savings rates = faster path to financial independence.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Savings Rate</th>
                  <th className="text-left p-4 font-black text-slate-900">Years to FIRE*</th>
                  <th className="text-left p-4 font-black text-slate-900">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-slate-900">10%</td>
                  <td className="p-4 font-bold text-slate-900">51 years</td>
                  <td className="p-4 text-slate-700">Traditional retirement</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-slate-900">20%</td>
                  <td className="p-4 font-bold text-slate-900">37 years</td>
                  <td className="p-4 text-slate-700">Early retirement possible</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">50%</td>
                  <td className="p-4 font-bold text-indigo-600">17 years</td>
                  <td className="p-4 text-slate-700">FIRE territory</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-emerald-600">65%</td>
                  <td className="p-4 font-bold text-emerald-600">10.5 years</td>
                  <td className="p-4 text-slate-700">Aggressive FIRE</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-purple-600">75%</td>
                  <td className="p-4 font-bold text-purple-600">7 years</td>
                  <td className="p-4 text-slate-700">Extreme FIRE</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-slate-500 p-4 italic">*Assumes 5% real returns after inflation, starting from $0</p>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <p className="text-indigo-900 font-semibold">
              💡 <strong>Key Insight:</strong> Increasing your savings rate from 20% to 50% cuts your time to FIRE in half!
              Focus on both increasing income and reducing expenses.
            </p>
          </div>
        </section>

        <section id="strategies" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Strategies to Achieve FIRE</h2>

          <div className="space-y-6 mt-6">
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-xl mb-3">1. Maximize Your Savings Rate</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• <strong>Increase income:</strong> Negotiate raises, switch jobs, start side hustles</li>
                <li>• <strong>Reduce expenses:</strong> Cut subscriptions, cook at home, buy used</li>
                <li>• <strong>Geographic arbitrage:</strong> Move to lower cost-of-living areas</li>
                <li>• <strong>House hacking:</strong> Rent out rooms, live in multi-unit properties</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-xl mb-3">2. Invest Aggressively</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• <strong>Low-cost index funds:</strong> VTSAX, VTI, VOO (expense ratios &lt; 0.1%)</li>
                <li>• <strong>Maximize tax-advantaged accounts:</strong> 401(k), IRA, HSA</li>
                <li>• <strong>Automate investments:</strong> Set up automatic monthly contributions</li>
                <li>• <strong>Avoid high fees:</strong> Stay away from actively managed funds</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-xl mb-3">3. Optimize Taxes</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• <strong>Maximize 401(k) contributions:</strong> $24,500 employee limit in 2026 (plus $8,000 catch-up at 50+, and employer match)</li>
                <li>• <strong>Contribute to IRAs:</strong> $7,500 in 2026 (Traditional or Roth; $1,100 catch-up at 50+)</li>
                <li>• <strong>Use HSA:</strong> $4,400 self-only / $8,750 family in 2026, with a triple tax advantage for healthcare</li>
                <li>• <strong>Tax-loss harvesting:</strong> Offset gains with losses</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-xl mb-3">4. Generate Multiple Income Streams</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• <strong>Side hustles:</strong> Freelancing, consulting, online business</li>
                <li>• <strong>Rental properties:</strong> Real estate investing for passive income</li>
                <li>• <strong>Dividend stocks:</strong> Build dividend income over time</li>
                <li>• <strong>Digital products:</strong> Courses, ebooks, software</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="examples" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Hypothetical FIRE Examples</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            These are illustrative households, not real people. Each assumes a <strong>5% real (after-inflation) return</strong>,
            savings invested at the end of each year, and after-tax income — so the FIRE number stays in today&apos;s dollars.
          </p>

          <div className="space-y-6 mt-6">
            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-indigo-900 text-xl mb-4">Example 1: Lean FIRE</h3>
              <div className="space-y-2 text-indigo-800">
                <p><strong>Annual Expenses:</strong> $30,000</p>
                <p><strong>FIRE Number:</strong> $750,000 (30k × 25)</p>
                <p><strong>Current Savings:</strong> $150,000</p>
                <p><strong>Monthly Savings:</strong> $3,000 (60% savings rate on $5,000/month after-tax income)</p>
                <p><strong>Time to FIRE:</strong> ~11 years (assuming 5% real returns)</p>
                <p className="font-bold text-lg mt-2">Strategy: High savings rate, low expenses, aggressive investing</p>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <h3 className="font-bold text-purple-900 text-xl mb-4">Example 2: Regular FIRE</h3>
              <div className="space-y-2 text-purple-800">
                <p><strong>Annual Expenses:</strong> $60,000</p>
                <p><strong>FIRE Number:</strong> $1,500,000 (60k × 25)</p>
                <p><strong>Current Savings:</strong> $300,000</p>
                <p><strong>Monthly Savings:</strong> $5,000 (50% savings rate on $10,000/month after-tax income)</p>
                <p><strong>Time to FIRE:</strong> ~12 years (assuming 5% real returns)</p>
                <p className="font-bold text-lg mt-2">Strategy: Balanced approach, comfortable lifestyle, steady investing</p>
              </div>
            </div>

            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
              <h3 className="font-bold text-emerald-900 text-xl mb-4">Example 3: Fat FIRE</h3>
              <div className="space-y-2 text-emerald-800">
                <p><strong>Annual Expenses:</strong> $150,000</p>
                <p><strong>FIRE Number:</strong> $3,750,000 (150k × 25)</p>
                <p><strong>Current Savings:</strong> $750,000</p>
                <p><strong>Monthly Savings:</strong> $12,500 (50% savings rate on $25,000/month after-tax income)</p>
                <p><strong>Time to FIRE:</strong> ~12 years (assuming 5% real returns)</p>
                <p className="font-bold text-lg mt-2">Strategy: High income, aggressive savings, luxury lifestyle maintained</p>
              </div>
            </div>
          </div>
        </section>

        <section id="health-insurance" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Health Insurance Before Medicare (2026)</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            If you retire before 65, health insurance is often the biggest line item a FIRE calculator leaves out. Many early
            retirees buy coverage on the ACA marketplace, where premium tax credits depend on household income. The enhanced
            subsidies that removed the upper income limit expired after 2025, so for 2026 coverage the <strong>400% of the
            federal poverty level cutoff is back</strong> unless Congress changes the law. For 2026 coverage that is about
            <strong> $62,600 for a single person</strong> and <strong>$128,600 for a family of four</strong> (based on 2025
            poverty guidelines). Earn even $1 over the line and you can lose the credit entirely.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold">
              💡 <strong>Why it matters for FIRE:</strong> In early retirement your &quot;income&quot; is largely what you choose to
              realize — Roth conversions, capital gains and IRA withdrawals all count. Planning withdrawals to stay below the
              cliff can be worth thousands per year. Check current rules at HealthCare.gov and estimate your credit with our{' '}
              <a href="/aca-health-insurance-subsidy-calculator/" className="text-indigo-600 font-semibold hover:underline">ACA subsidy calculator</a>.
            </p>
          </div>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common FIRE Calculator Mistakes</h2>

          <ul className="list-disc list-inside space-y-2 text-slate-700 mt-4">
            <li><strong>Using today&apos;s budget instead of retirement spending:</strong> Commuting may drop, but healthcare, travel and home repairs often rise.</li>
            <li><strong>Mixing nominal and real returns:</strong> If your FIRE number is in today&apos;s dollars, use an inflation-adjusted return (for example 5%), not a nominal 10%.</li>
            <li><strong>Ignoring taxes on withdrawals:</strong> Traditional 401(k) and IRA withdrawals are taxed as ordinary income, so $40,000 of spending may need a larger gross withdrawal.</li>
            <li><strong>Forgetting the early-withdrawal gap:</strong> Most retirement accounts charge a 10% penalty before 59½ unless an exception applies, so you may need taxable savings or a Roth conversion plan to bridge the years.</li>
            <li><strong>Treating the result as exact:</strong> A few years of poor returns right after you retire can change the outcome. Re-run the numbers yearly.</li>
          </ul>

          <p className="text-lg text-slate-700 leading-relaxed">
            To see how account types fit together, try the{' '}
            <a href="/retirement-account-optimizer/" className="text-indigo-600 font-semibold hover:underline">retirement account optimizer</a>.
          </p>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What's the difference between FIRE and regular retirement?</h3>
              <p className="text-slate-700">
                FIRE focuses on achieving financial independence much earlier (often in your 30s-40s) through extreme
                savings and aggressive investing. Regular retirement typically happens at 65+ with lower savings rates.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is the 4% rule safe for early retirement?</h3>
              <p className="text-slate-700">
                For early retirees (under 50), many experts recommend a <strong>3-3.5% withdrawal rate</strong> instead
                of 4% due to longer retirement periods. The 4% rule was designed for 30-year retirements, not 50+ year
                retirements.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How much do I need to save to reach FIRE?</h3>
              <p className="text-slate-700">
                Your FIRE number = Annual Expenses × 25 (for 4% rule). For example, if you spend $50,000/year,
                you need $1,250,000. Use our <button onClick={() => onNavigate?.(ToolType.FIRE_PLANNER)} className="text-indigo-600 hover:underline font-semibold">FIRE calculator</button> to find your exact number.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Can I achieve FIRE with a normal salary?</h3>
              <p className="text-slate-700">
                It is possible, but slower. On a typical salary, the savings rate matters more than the income itself:
                the table above shows that time to FIRE depends on the share of income you save. Lower housing and
                transportation costs usually make the biggest difference. Some people on modest incomes aim for a partial
                goal such as{' '}
                <a href="/blog/coast-fire-how-to-retire-early/" className="text-indigo-600 font-semibold hover:underline">Coast FIRE</a> instead.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Bengen, W. P. (1994), &quot;Determining Withdrawal Rates Using Historical Data,&quot; <em>Journal of Financial Planning</em>.</li>
            <li>Cooley, P. L., Hubbard, C. M., &amp; Walz, D. T. (1998), &quot;Retirement Savings: Choosing a Withdrawal Rate That Is Sustainable,&quot; <em>AAII Journal</em>.</li>
            <li>IRS Notice 2025-67 (2026 401(k) and IRA limits) and Rev. Proc. 2025-19 (2026 HSA limits) — <a href="https://www.irs.gov/publications/p590a" className="text-indigo-600 hover:underline">IRS Publication 590-A</a>, <a href="https://www.irs.gov/publications/p969" className="text-indigo-600 hover:underline">IRS Publication 969</a></li>
            <li><a href="https://www.irs.gov/publications/p590b" className="text-indigo-600 hover:underline">IRS Publication 590-B</a> (IRA distributions and early-withdrawal rules)</li>
            <li><a href="https://www.healthcare.gov/" className="text-indigo-600 hover:underline">HealthCare.gov</a> (marketplace coverage and premium tax credits)</li>
          </ul>
          <p className="text-sm text-slate-500 italic">
            This guide is educational and not individualized financial, tax, or investment advice.
          </p>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-black mb-4">Calculate Your FIRE Number</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Use our FIRE calculator to find your freedom number, calculate your timeline, and plan your path to early retirement.
          </p>
          <button
            onClick={() => onNavigate?.(ToolType.FIRE_PLANNER)}
            className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition text-lg"
          >
            Use FIRE Calculator →
          </button>
        </section>

        {/* Ad Placement */}
        <div className="my-12">
          <AdPlacement size="responsive" position="middle" lazy={true} />
        </div>

        {/* Email Capture Section */}
        <section className="mt-12">
          <EmailCapture
            title="Get Your Free FIRE Planning Workbook"
            description="Download our comprehensive FIRE planning workbook with savings rate calculator, investment strategies, and early retirement checklist."
            leadMagnet={{
              title: "FIRE Planning Workbook 2026",
              description: "Complete guide to calculating your FIRE number, optimizing savings rate, and achieving early retirement.",
              type: "fire"
            }}
            buttonText="Get Free Workbook"
          />
        </section>
      </article>
    </div>
  );
};

export default FIRECalculatorGuide2025;

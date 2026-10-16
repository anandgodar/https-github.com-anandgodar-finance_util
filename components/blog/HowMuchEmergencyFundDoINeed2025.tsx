'use client';


import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const HowMuchEmergencyFundDoINeed2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>💰 Financial Planning</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          How Much Emergency Fund Do I Need? Complete 2026 Guide with Calculator
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          An emergency fund is your financial safety net. This comprehensive guide explains the <strong>3-6 month rule</strong>,
          how to calculate your exact emergency fund needs, where to keep it, and strategies to build it quickly in 2026.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Calculate Your Emergency Fund
              </h3>
              <p className="text-sm text-slate-600">
                Use our calculator to find your perfect emergency fund amount based on your expenses
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.EMERGENCY_FUND)}
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
          <li><button onClick={() => scrollToSection('what-is')} className="text-indigo-600 hover:underline">1. What is an Emergency Fund?</button></li>
          <li><button onClick={() => scrollToSection('how-much')} className="text-indigo-600 hover:underline">2. How Much Do You Need? The 3-6 Month Rule</button></li>
          <li><button onClick={() => scrollToSection('calculate')} className="text-indigo-600 hover:underline">3. How to Calculate Your Emergency Fund</button></li>
          <li><button onClick={() => scrollToSection('where-keep')} className="text-indigo-600 hover:underline">4. Where to Keep Your Emergency Fund</button></li>
          <li><button onClick={() => scrollToSection('how-build')} className="text-indigo-600 hover:underline">5. How to Build Your Emergency Fund</button></li>
          <li><button onClick={() => scrollToSection('when-use')} className="text-indigo-600 hover:underline">6. When to Use Your Emergency Fund</button></li>
          <li><button onClick={() => scrollToSection('examples')} className="text-indigo-600 hover:underline">7. Real-World Examples</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. Frequently Asked Questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="what-is" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is an Emergency Fund?</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            An <strong>emergency fund</strong> is money set aside to cover unexpected expenses or financial emergencies.
            It's your financial safety net that prevents you from going into debt when life throws curveballs.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold text-lg">
              💡 <strong>Purpose:</strong> An emergency fund protects you from:
              <ul className="mt-2 space-y-1 text-base">
                <li>• Job loss or reduced income</li>
                <li>• Medical emergencies</li>
                <li>• Car repairs</li>
                <li>• Home repairs (roof leak, HVAC failure)</li>
                <li>• Unexpected travel (family emergency)</li>
                <li>• Major appliance replacement</li>
              </ul>
            </p>
          </div>
        </section>

        <section id="how-much" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How Much Do You Need? The 3-6 Month Rule</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            The standard recommendation is <strong>3-6 months of essential expenses</strong> in your emergency fund.
            However, the exact amount depends on your situation.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
              <h3 className="font-bold text-emerald-900 text-xl mb-3">3 Months: Minimum</h3>
              <ul className="space-y-2 text-emerald-800">
                <li>• Stable job with low risk</li>
                <li>• Dual income household</li>
                <li>• Good job market in your field</li>
                <li>• Low expenses</li>
                <li>• Good health insurance</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
              <h3 className="font-bold text-orange-900 text-xl mb-3">6 Months: Recommended</h3>
              <ul className="space-y-2 text-orange-800">
                <li>• Single income household</li>
                <li>• Self-employed or freelancer</li>
                <li>• Unstable job or industry</li>
                <li>• High expenses</li>
                <li>• Dependents (children, elderly parents)</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 md:col-span-2">
              <h3 className="font-bold text-purple-900 text-xl mb-3">9-12 Months: Conservative</h3>
              <ul className="space-y-2 text-purple-800">
                <li>• Very unstable income (commission-based, seasonal)</li>
                <li>• High-risk profession</li>
                <li>• Planning major life change (career switch, starting business)</li>
                <li>• Retirees or near-retirement</li>
                <li>• High net worth individuals</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="calculate" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to Calculate Your Emergency Fund</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Calculate your emergency fund based on <strong>essential monthly expenses</strong>, not your full income.
            Include only necessary expenses you'd need to cover during an emergency.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Essential Expense</th>
                  <th className="text-left p-4 font-black text-slate-900">Monthly Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Housing (rent/mortgage)</td>
                  <td className="p-4 font-bold text-slate-900">$1,500</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Utilities (electric, water, gas)</td>
                  <td className="p-4 font-bold text-slate-900">$200</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Groceries</td>
                  <td className="p-4 font-bold text-slate-900">$400</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Insurance (health, car, home)</td>
                  <td className="p-4 font-bold text-slate-900">$300</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Minimum debt payments</td>
                  <td className="p-4 font-bold text-slate-900">$500</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Transportation (gas, public transit)</td>
                  <td className="p-4 font-bold text-slate-900">$200</td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Total Essential Expenses</td>
                  <td className="p-4 font-bold text-indigo-600 text-xl">$3,100/month</td>
                </tr>
                <tr className="border-t border-slate-100 bg-emerald-50">
                  <td className="p-4 font-bold text-emerald-900">6-Month Emergency Fund</td>
                  <td className="p-4 font-bold text-emerald-600 text-xl">$18,600</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <p className="text-indigo-900 font-semibold">
              💡 <strong>Formula:</strong> Essential Monthly Expenses × Number of Months = Emergency Fund Target
              <br />
              <span className="text-sm mt-2 block">Example: $3,100 × 6 months = $18,600</span>
            </p>
          </div>
        </section>

        <section id="where-keep" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Where to Keep Your Emergency Fund</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Your emergency fund should be <strong>easily accessible</strong> but separate from your checking account.
            It should earn interest but remain liquid.
          </p>

          <div className="space-y-4 mt-6">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6">
              <h3 className="font-bold text-emerald-900 text-xl mb-2">✅ High-Yield Savings Account (Best Option)</h3>
              <ul className="space-y-2 text-emerald-800">
                <li>• <strong>Interest Rate:</strong> Variable; moves with market rates and is usually well above a standard checking account</li>
                <li>• <strong>Accessibility:</strong> Easy transfers, usually within one to two business days</li>
                <li>• <strong>Safety:</strong> FDIC insured (NCUA at credit unions) up to $250,000 per depositor, per bank, per ownership category</li>
                <li>• <strong>Where to look:</strong> Online banks and credit unions; compare current yields, fees and transfer limits</li>
              </ul>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-r-xl p-6">
              <h3 className="font-bold text-indigo-900 text-xl mb-2">✅ Money Market Account</h3>
              <ul className="space-y-2 text-indigo-800">
                <li>• <strong>Interest Rate:</strong> Variable; often similar to high-yield savings</li>
                <li>• <strong>Accessibility:</strong> Check-writing, debit card</li>
                <li>• <strong>Safety:</strong> FDIC insured</li>
                <li>• <strong>Best For:</strong> Those who want check-writing access</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl p-6">
              <h3 className="font-bold text-yellow-900 text-xl mb-2">⚠️ Regular Checking Account</h3>
              <ul className="space-y-2 text-yellow-800">
                <li>• <strong>Interest Rate:</strong> 0-0.5% (very low)</li>
                <li>• <strong>Problem:</strong> Too easy to spend</li>
                <li>• <strong>Recommendation:</strong> Keep minimal amount, use savings for emergency fund</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
              <h3 className="font-bold text-red-900 text-xl mb-2">❌ Investment Accounts (Stocks, Bonds)</h3>
              <ul className="space-y-2 text-red-800">
                <li>• <strong>Problem:</strong> Value can drop when you need it most</li>
                <li>• <strong>Risk:</strong> Market volatility defeats the purpose</li>
                <li>• <strong>Recommendation:</strong> Don't invest your emergency fund</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            Interest earned is taxable as ordinary income in the year it&apos;s paid. As an illustration only (not a quote of
            any current rate), an $18,600 fund earning 4% a year would generate about $744 of interest before tax. Rates
            change frequently, so compare offers when you open an account and check again periodically.
          </p>
        </section>

        <section id="how-build" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to Build Your Emergency Fund</h2>

          <div className="space-y-6 mt-6">
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Start Small: $1,000 Mini Emergency Fund</h3>
                  <p className="text-slate-700 mb-3">
                    Before building a full 3-6 month fund, start with a $1,000 mini emergency fund. This covers
                    small emergencies while you work toward your full goal.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Automate Your Savings</h3>
                  <p className="text-slate-700 mb-3">
                    Set up automatic transfers from checking to savings. Start with $100-200/month and increase
                    as you can afford more. At $200/month, a $1,000 starter fund takes five months.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Use Windfalls</h3>
                  <p className="text-slate-700 mb-3">
                    Put tax refunds, bonuses, gifts, and side income directly into your emergency fund.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Cut Expenses Temporarily</h3>
                  <p className="text-slate-700 mb-3">
                    Temporarily reduce discretionary spending (dining out, subscriptions, entertainment) and
                    redirect that money to your emergency fund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="when-use" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When to Use Your Emergency Fund</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
              <h3 className="font-bold text-emerald-900 text-xl mb-4">✅ Legitimate Emergencies</h3>
              <ul className="space-y-2 text-emerald-800">
                <li>• Job loss or reduced income</li>
                <li>• Medical emergency</li>
                <li>• Major car repair</li>
                <li>• Home repair (roof, HVAC, plumbing)</li>
                <li>• Unexpected travel (family emergency)</li>
                <li>• Major appliance replacement</li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-900 text-xl mb-4">❌ Not for These</h3>
              <ul className="space-y-2 text-red-800">
                <li>• Planned expenses (vacation, holiday shopping)</li>
                <li>• Investment opportunities</li>
                <li>• Down payment on a house (use separate savings)</li>
                <li>• Non-essential purchases</li>
                <li>• Regular bills (budget for these)</li>
                <li>• Impulse purchases</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="examples" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Real-World Examples</h2>

          <div className="space-y-6 mt-6">
            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-indigo-900 text-xl mb-4">Example 1: Single Professional</h3>
              <div className="space-y-2 text-indigo-800">
                <p><strong>Monthly Essential Expenses:</strong> $2,500</p>
                <p><strong>Job Stability:</strong> Stable</p>
                <p><strong>Recommendation:</strong> 3-4 months</p>
                <p className="font-bold text-lg mt-2">Emergency Fund Target: $7,500 - $10,000</p>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <h3 className="font-bold text-purple-900 text-xl mb-4">Example 2: Freelancer with Family</h3>
              <div className="space-y-2 text-purple-800">
                <p><strong>Monthly Essential Expenses:</strong> $4,500</p>
                <p><strong>Job Stability:</strong> Unstable (variable income)</p>
                <p><strong>Recommendation:</strong> 6-9 months</p>
                <p className="font-bold text-lg mt-2">Emergency Fund Target: $27,000 - $40,500</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            Freelancers should keep money for <a href="/quarterly-estimated-tax-calculator/" className="text-indigo-600 font-semibold hover:underline">quarterly estimated taxes</a> in
            a separate account so the emergency fund isn&apos;t quietly used to pay the IRS. For a closer look at why six
            months is the common benchmark and when to go higher or lower, see our guide to the <a href="/blog/6-month-emergency-fund-rule/" className="text-indigo-600 font-semibold hover:underline">6-month emergency fund rule</a>.
          </p>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is 3 months enough for an emergency fund?</h3>
              <p className="text-slate-700">
                For stable, dual-income households, 3 months may be sufficient. However, 6 months is the recommended
                minimum for most people, especially those with variable income, single income, or dependents.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Should I invest my emergency fund?</h3>
              <p className="text-slate-700">
                <strong>No.</strong> Your emergency fund should be in a high-yield savings account, not invested.
                Investments can lose value when you need the money most. The goal is safety and accessibility, not growth.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What if I use my emergency fund?</h3>
              <p className="text-slate-700">
                That's what it's for! After using it, prioritize rebuilding it. Temporarily pause other savings goals
                (like retirement contributions beyond employer match) until your emergency fund is restored.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Should I build an emergency fund before paying off credit cards?</h3>
              <p className="text-slate-700">
                A common approach is a small starter fund first, then aggressive payoff of high-interest debt, then the full
                3-6 months. The <a href="/blog/financial-order-of-operations/" className="text-indigo-600 font-semibold hover:underline">financial order of operations</a> guide
                explains the sequence.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-500">This guide is educational and is not individualized financial advice.</p>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• Consumer Financial Protection Bureau, emergency savings resources: <a href="https://www.consumerfinance.gov/" className="text-indigo-600 font-semibold hover:underline">consumerfinance.gov</a></li>
            <li>• IRS Publication 17, interest income is taxable: <a href="https://www.irs.gov/publications/p17" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p17</a></li>
            <li>• Investor.gov, saving vs. investing: <a href="https://www.investor.gov/" className="text-indigo-600 font-semibold hover:underline">investor.gov</a></li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-black mb-4">Calculate Your Emergency Fund</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Use our emergency fund calculator to find your perfect safety net amount based on your expenses and situation.
          </p>
          <button
            onClick={() => onNavigate?.(ToolType.EMERGENCY_FUND)}
            className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition text-lg"
          >
            Calculate Emergency Fund →
          </button>
        </section>
      </article>
    </div>
  );
};

export default HowMuchEmergencyFundDoINeed2025;

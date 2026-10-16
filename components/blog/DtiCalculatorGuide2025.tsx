'use client';

import React from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const DtiCalculatorGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>🏦 Mortgages</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          DTI Calculator Guide 2026: What Debt-to-Income Ratio Lenders Want
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Debt-to-income ratio (DTI) is one of the first metrics lenders check. If you want better approval odds, you
          need to know your number. This guide explains DTI in plain language.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate Your DTI</h3>
              <p className="text-sm text-slate-600">Use our DTI calculator to see your front-end and back-end ratios.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.DTI_CALCULATOR)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open DTI Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('what-is-dti')} className="text-indigo-600 hover:underline">1. What is DTI?</button></li>
          <li><button onClick={() => scrollToSection('what-counts')} className="text-indigo-600 hover:underline">2. What counts (and what doesn&apos;t)</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">3. Step-by-step example</button></li>
          <li><button onClick={() => scrollToSection('28-36-rule')} className="text-indigo-600 hover:underline">4. The 28/36 rule and other lender guidelines</button></li>
          <li><button onClick={() => scrollToSection('improve')} className="text-indigo-600 hover:underline">5. How to improve DTI</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">6. Common mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. DTI FAQ</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">8. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="what-is-dti" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is DTI?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            DTI is your monthly debt payments divided by your gross monthly income. Lower is better.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Mortgage lenders usually look at two versions:
          </p>
          <ul className="space-y-3 text-lg text-slate-700">
            <li>• <strong>Front-end ratio (housing ratio):</strong> your housing payment alone ÷ gross monthly income. For a mortgage, the housing payment is usually the full PITI: principal, interest, property taxes, homeowners insurance, plus any mortgage insurance and HOA dues.</li>
            <li>• <strong>Back-end ratio (total DTI):</strong> housing payment <em>plus</em> all other monthly debt payments ÷ gross monthly income. When people say &quot;DTI&quot; they usually mean this one.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            Gross income means before taxes and payroll deductions. Using take-home pay instead would make your ratio look
            worse than the number a lender actually calculates.
          </p>
        </section>

        <section id="what-counts" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What counts (and what doesn&apos;t)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Usually counted</h3>
              <ul className="space-y-1 text-slate-700">
                <li>• Rent, or the proposed mortgage payment (PITI + HOA)</li>
                <li>• Auto loan or lease payments</li>
                <li>• Student loan payments</li>
                <li>• Minimum credit card payments (not the full balance)</li>
                <li>• Personal loans and other installment loans</li>
                <li>• Court-ordered child support or alimony</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Usually not counted</h3>
              <ul className="space-y-1 text-slate-700">
                <li>• Utilities, phone, and internet</li>
                <li>• Groceries, gas, and everyday spending</li>
                <li>• Health insurance premiums</li>
                <li>• Subscriptions and memberships</li>
                <li>• Income taxes and retirement contributions</li>
              </ul>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Lenders build the number from your credit report and documents, so a debt can count even if you forget it.
            Rules for some items, such as student loans on income-driven plans or debts you co-signed for someone else,
            vary by loan program, so ask your lender how they will treat yours.
          </p>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Step-by-step example</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Hypothetical example:</strong> a buyer earns $84,000 a year, or <strong>$7,000</strong> gross per
            month. Their debts are a $450 car payment, a $300 student loan payment, and $100 of credit card minimums, for
            $850 a month. The home they want would cost $1,900 a month in PITI.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Step</th>
                  <th className="text-left p-4 font-black text-slate-900">Calculation</th>
                  <th className="text-left p-4 font-black text-slate-900">Result</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Front-end ratio</td>
                  <td className="p-4 text-slate-700">$1,900 ÷ $7,000</td>
                  <td className="p-4 font-bold text-slate-900">27.1%</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Total monthly debt</td>
                  <td className="p-4 text-slate-700">$1,900 + $850</td>
                  <td className="p-4 font-bold text-slate-900">$2,750</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Back-end ratio</td>
                  <td className="p-4 text-slate-700">$2,750 ÷ $7,000</td>
                  <td className="p-4 font-bold text-slate-900">39.3%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The front-end ratio fits the traditional 28% guideline, but the back-end ratio is above 36%. Working
            backward: 36% of $7,000 is $2,520; subtract the $850 of other debt and the traditional guideline points to a
            housing payment of about <strong>$1,670</strong>. At a 43% back-end limit, the same math allows about $2,160.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Now suppose the buyer pays off the car first. Total debt drops to $2,300, and the back-end ratio falls to
            about <strong>32.9%</strong>, comfortably inside the traditional guideline. Removing a single monthly payment
            often moves DTI more than a raise would. To turn a target payment into a home price, see{' '}
            <a href="/blog/how-much-house-can-i-afford-2025/" className="text-indigo-600 font-semibold hover:underline">how much house you can afford</a>{' '}
            and the{' '}
            <a href="/mortgage-payment-calculator/" className="text-indigo-600 font-semibold hover:underline">mortgage payment calculator</a>.
          </p>
        </section>

        <section id="28-36-rule" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The 28/36 rule</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Lenders often look for housing costs under 28% of income and total debt under 36%. Some loan types allow more,
            but lower ratios increase approval odds.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Benchmark</th>
                  <th className="text-left p-4 font-black text-slate-900">Typical Guideline</th>
                  <th className="text-left p-4 font-black text-slate-900">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Traditional rule</td>
                  <td className="p-4 text-slate-700">28% front / 36% back</td>
                  <td className="p-4 text-slate-700">A conservative comfort zone, not a hard cap</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Qualified mortgage (historical)</td>
                  <td className="p-4 text-slate-700">43% back-end</td>
                  <td className="p-4 text-slate-700">Long used as a general limit; still a common reference point</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Conventional loans</td>
                  <td className="p-4 text-slate-700">Often mid-40s or higher</td>
                  <td className="p-4 text-slate-700">Can depend on credit score, down payment, reserves, and automated underwriting</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">FHA loans</td>
                  <td className="p-4 text-slate-700">Often higher than conventional</td>
                  <td className="p-4 text-slate-700">Higher ratios may be approved with compensating factors such as cash reserves</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            These are typical guidelines; each lender and program sets its own limits, and they change over time. Being
            <em> approved</em> at a high DTI is not the same as being <em>comfortable</em> there. Above roughly 40%, a
            surprise expense or a job change can quickly strain a budget, so many households aim for the lower end.
          </p>
        </section>

        <section id="improve" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to improve DTI</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Pay down high-interest debt first.</li>
            <li>• Avoid new credit inquiries before applying.</li>
            <li>• Increase income with stable, documented sources.</li>
            <li>• <strong>Eliminate whole payments.</strong> Paying a small loan to zero removes its payment entirely; paying down part of a large balance may not change the required payment.</li>
            <li>• <strong>Lower card minimums</strong> by reducing balances, since minimums are calculated from the balance.</li>
            <li>• <strong>Adjust the house, not just the debt.</strong> A larger down payment or a less expensive home lowers the PITI side of the ratio.</li>
            <li>• <strong>Add a co-borrower</strong> whose income (and debts) will be counted, if that fits your situation.</li>
          </ul>
          <p className="text-slate-700">
            If you have several debts to clear, the{' '}
            <a href="/blog/snowball-vs-avalanche-debt-payoff/" className="text-indigo-600 font-semibold hover:underline">snowball vs avalanche guide</a>{' '}
            explains how to order them.
          </p>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>Using net pay.</strong> Lenders use gross income, so your own math should too.</li>
            <li>• <strong>Forgetting taxes and insurance.</strong> Principal and interest alone understate the housing payment, sometimes by hundreds of dollars a month.</li>
            <li>• <strong>Counting irregular income.</strong> Bonuses, overtime, and self-employment income usually need a documented history before lenders count them.</li>
            <li>• <strong>Opening new credit before closing.</strong> A new car loan or store card can change your DTI after preapproval.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">DTI FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">Does DTI include rent?</h3>
              <p className="text-slate-700">Yes, your housing payment counts in the front-end ratio. When you apply for a mortgage, the lender uses the proposed new housing payment instead of your current rent.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">What DTI is too high?</h3>
              <p className="text-slate-700">Above 43% can be challenging for many loan programs, though some programs approve higher ratios with strong compensating factors.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">Does DTI affect my credit score?</h3>
              <p className="text-slate-700">Not directly; income is not part of your credit report. But high card balances raise both your DTI and your credit utilization, which does affect scores.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">Do other lenders use DTI?</h3>
              <p className="text-slate-700">Yes. Auto lenders, personal loan lenders, and card issuers often consider your debt load and income, though their limits differ from mortgage guidelines.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500">This article is educational and not individualized financial advice.</p>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• <a href="https://www.consumerfinance.gov/" className="text-indigo-600 hover:underline">Consumer Financial Protection Bureau</a>: debt-to-income ratio and qualified mortgage resources</li>
            <li>• <a href="https://www.fhfa.gov/" className="text-indigo-600 hover:underline">Federal Housing Finance Agency</a>: conforming loan oversight and limits</li>
          </ul>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Mortgage Readiness Tips"
          description="Get weekly insights on improving credit, DTI, and home affordability."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.DTI_CALCULATOR)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🏦 DTI Calculator</h4>
            <p className="text-sm text-slate-600">Check mortgage qualification ratios.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🏡 Mortgage Calculator</h4>
            <p className="text-sm text-slate-600">Estimate total monthly housing costs.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DtiCalculatorGuide2025;

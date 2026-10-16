'use client';


import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const ChildTaxCreditGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      {/* Hero Section */}
      <header className="space-y-6">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span>📅 Updated October 2026</span>
          <span>•</span>
          <span>⏱️ 9 min read</span>
          <span>•</span>
          <span>💰 Tax Planning</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Child Tax Credit 2026: Complete Guide to CTC, ACTC, and Tax Savings
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          The Child Tax Credit (CTC) is worth up to <strong>$2,200 per child</strong> for tax year 2026 — the same
          amount that applies to 2025 returns after the One Big Beautiful Bill Act raised it from $2,000. This guide
          explains eligibility, the new SSN rules, income limits, the refundable portion, and strategies to make sure
          you receive the full credit.
        </p>

        {/* Calculator CTA */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Calculate Your 2026 Child Tax Credit
              </h3>
              <p className="text-sm text-slate-600">
                Get an instant estimate with income phase-outs and ACTC calculations
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.CHILD_TAX_CREDIT)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition"
            >
              Use Calculator →
            </button>
          </div>
        </div>
      </header>

      {/* Table of Contents */}
      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('what-is-ctc')} className="text-indigo-600 hover:underline">1. What is the Child Tax Credit?</button></li>
          <li><button onClick={() => scrollToSection('2026-amounts')} className="text-indigo-600 hover:underline">2. 2026 Credit Amounts</button></li>
          <li><button onClick={() => scrollToSection('eligibility')} className="text-indigo-600 hover:underline">3. Eligibility Requirements</button></li>
          <li><button onClick={() => scrollToSection('income-limits')} className="text-indigo-600 hover:underline">4. Income Phase-Out Limits</button></li>
          <li><button onClick={() => scrollToSection('actc')} className="text-indigo-600 hover:underline">5. Additional Child Tax Credit (ACTC)</button></li>
          <li><button onClick={() => scrollToSection('how-to-claim')} className="text-indigo-600 hover:underline">6. How to Claim the CTC</button></li>
          <li><button onClick={() => scrollToSection('scenarios')} className="text-indigo-600 hover:underline">7. Common Scenarios & Examples</button></li>
          <li><button onClick={() => scrollToSection('maximize')} className="text-indigo-600 hover:underline">8. Strategies to Maximize Your Credit</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">9. Frequently Asked Questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">10. Sources</button></li>
        </ol>
      </nav>

      {/* Main Content */}
      <article className="prose prose-lg max-w-none space-y-12">

        {/* Section 1 */}
        <section id="what-is-ctc" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is the Child Tax Credit?</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            The Child Tax Credit (CTC) is a federal tax benefit designed to help families offset the costs of raising children.
            For tax years 2025 and 2026, eligible families can receive <strong>up to $2,200 per qualifying child under age 17</strong>.
            The One Big Beautiful Bill Act (signed July 4, 2025) made the credit permanent and indexes the $2,200 amount
            to inflation for years after 2026.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            Unlike a tax deduction (which reduces your taxable income), the Child Tax Credit is a <strong>tax credit</strong> that
            directly reduces your tax bill dollar-for-dollar. If you owe $5,000 in federal income tax and qualify for a $4,400 credit
            (2 children), your tax bill drops to just $600. Compare that with a deduction: a $4,400 deduction for someone
            in the 12% bracket would only save about $528. See our{' '}
            <a href="/blog/tax-brackets-explained-2025/" className="text-indigo-600 font-semibold hover:underline">tax brackets explainer</a>{' '}
            for how deductions and brackets interact.
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold text-lg">
              💡 <strong>Key Insight:</strong> Up to $1,700 per child is <strong>refundable</strong> through the Additional Child Tax Credit (ACTC),
              meaning you can receive money back even if you owe no federal income tax.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="2026-amounts" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">2026 Child Tax Credit Amounts</h2>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Dependent Type</th>
                  <th className="text-left p-4 font-black text-slate-900">Credit Amount</th>
                  <th className="text-left p-4 font-black text-slate-900">Refundable?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Child under 17 (qualifying)</td>
                  <td className="p-4 font-bold text-indigo-600">$2,200</td>
                  <td className="p-4 text-emerald-600">Up to $1,700</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Child 17 years old</td>
                  <td className="p-4 font-bold text-purple-600">$500</td>
                  <td className="p-4 text-slate-400">No</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Other dependent (18+ or non-child)</td>
                  <td className="p-4 font-bold text-purple-600">$500</td>
                  <td className="p-4 text-slate-400">No</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            The <strong>$2,200 credit for children under 17</strong> is the primary benefit. Once your child turns 17, they become
            an "other dependent" eligible for only $500 (called the Credit for Other Dependents, or ODC).
          </p>
        </section>

        {/* Section 3 */}
        <section id="eligibility" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Eligibility Requirements for Qualifying Children</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            To claim the full $2,200 Child Tax Credit, your child must meet ALL of these requirements:
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Age Requirement</h3>
                <p className="text-slate-700">The child must be <strong>under age 17</strong> at the end of the tax year (December 31, 2026 for a 2026 return).
                A child who turns 17 during 2026 does NOT qualify for the $2,200 credit on the 2026 return.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Relationship Test</h3>
                <p className="text-slate-700">The child must be your son, daughter, stepchild, eligible foster child, brother, sister,
                stepbrother, stepsister, half-brother, half-sister, or a descendant of any of these (grandchild, niece, nephew).</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Support Test</h3>
                <p className="text-slate-700">The child must not have provided <strong>more than half</strong> of their own support during the tax year.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Residency Test</h3>
                <p className="text-slate-700">The child must have lived with you for <strong>more than half the year</strong> (exceptions for
                temporary absences like college, military service, or medical care).</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Dependent Claim</h3>
                <p className="text-slate-700">You must claim the child as a <strong>dependent</strong> on your tax return.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Social Security Number</h3>
                <p className="text-slate-700">The child must have a valid Social Security Number (SSN), valid for employment, issued
                before the tax return due date. An ITIN or ATIN does not qualify the child for the $2,200 credit (such a
                child may still qualify for the $500 credit for other dependents). Starting with 2025 returns, the One Big
                Beautiful Bill Act also requires <strong>at least one parent</strong> claiming the credit to have an SSN; on a joint
                return, one spouse's SSN is enough.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="income-limits" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Income Phase-Out Limits for 2026</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            The Child Tax Credit begins to <strong>phase out</strong> (reduce) once your Modified Adjusted Gross Income (MAGI)
            exceeds certain thresholds. The credit reduces by <strong>$50 for every $1,000</strong> of income above the threshold
            (rounded up to the nearest $1,000).
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Filing Status</th>
                  <th className="text-left p-4 font-black text-slate-900">Phase-Out Begins</th>
                  <th className="text-left p-4 font-black text-slate-900">Fully Phased Out</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">Single</td>
                  <td className="p-4 font-bold text-rose-600">$200,000</td>
                  <td className="p-4 text-slate-600">$244,000+ (1 child)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">Married Filing Jointly</td>
                  <td className="p-4 font-bold text-rose-600">$400,000</td>
                  <td className="p-4 text-slate-600">$444,000+ (1 child)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">Head of Household</td>
                  <td className="p-4 font-bold text-rose-600">$200,000</td>
                  <td className="p-4 text-slate-600">$244,000+ (1 child)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
            <p className="text-amber-900 font-semibold text-lg">
              ⚠️ <strong>Phase-Out Example:</strong> Single parent with 1 child earning $210,000 MAGI
              <br />
              • Income over threshold: $10,000
              <br />
              • Rounded up: $10,000 ÷ $1,000 = 10 increments
              <br />
              • Reduction: 10 × $50 = $500
              <br />
              • Final credit: $2,200 - $500 = <strong>$1,700</strong>
            </p>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            The $200,000 and $400,000 thresholds are not indexed for inflation. Because the reduction applies to your
            combined credit, a family with more children stays partly eligible further up the income scale: with two
            children ($4,400), a joint filer's credit is not fully phased out until MAGI exceeds $488,000.
          </p>
        </section>

        {/* Section 5 */}
        <section id="actc" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Additional Child Tax Credit (ACTC) - The Refundable Portion</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            The <strong>Additional Child Tax Credit (ACTC)</strong> makes up to $1,700 per child <strong>refundable</strong>.
            This means even if you owe $0 in federal income tax, you can still receive up to $1,700 per qualifying child as a
            tax refund, provided you have at least $2,500 of earned income. The $1,700 cap applies to both 2025 and 2026
            returns.
          </p>

          <h3 className="text-2xl font-bold text-slate-900">How ACTC is Calculated</h3>

          <p className="text-lg text-slate-700 leading-relaxed">
            The refundable amount is the <strong>lesser of</strong>:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-lg text-slate-700">
            <li>The amount of Child Tax Credit left after offsetting your federal income tax liability</li>
            <li><strong>$1,700 per qualifying child</strong></li>
            <li><strong>15% of your earned income</strong> above $2,500</li>
          </ol>
          <p className="text-sm text-slate-600 italic">
            Families with three or more qualifying children may be able to use an alternative calculation based on Social
            Security and Medicare taxes paid; Schedule 8812 and tax software handle this automatically.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-4">
            <h4 className="font-bold text-emerald-900 text-lg">ACTC Calculation Example</h4>
            <div className="space-y-2 text-emerald-900">
              <p><strong>Hypothetical scenario (2026):</strong> Head-of-household parent, 2 qualifying children, $35,000 of wages, no other income</p>
              <p>• Taxable income: $35,000 − $24,150 standard deduction = $10,850, all in the 10% bracket</p>
              <p>• Federal income tax before credits: <strong>$1,085</strong></p>
              <p>• Total CTC: 2 × $2,200 = <strong>$4,400</strong></p>
              <p>• Used to wipe out income tax: -$1,085</p>
              <p>• Remaining credit: $3,315</p>
              <p>• Earned income test: ($35,000 - $2,500) × 15% = $4,875</p>
              <p>• ACTC cap: $1,700 × 2 = $3,400</p>
              <p>• Refundable portion (lesser of $3,315, $3,400 and $4,875): <strong>$3,315 refunded</strong></p>
              <p>• Total benefit: $1,085 + $3,315 = <strong>$4,400</strong> — the full credit</p>
            </div>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            This is especially valuable for <strong>low-to-moderate income families</strong> who may not owe much (or any) federal income tax
            but still receive a significant refund through ACTC.
          </p>
        </section>

        {/* Section 6 */}
        <section id="how-to-claim" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to Claim the Child Tax Credit</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Claiming the CTC is straightforward when filing your federal tax return:
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl">
              <span className="flex-shrink-0 text-2xl">📝</span>
              <div>
                <h3 className="font-bold text-slate-900">Step 1: File a Tax Return</h3>
                <p className="text-slate-700">You must file Form 1040 or 1040-SR (even if you're not required to file). The credit is not automatic.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl">
              <span className="flex-shrink-0 text-2xl">👨‍👩‍👧</span>
              <div>
                <h3 className="font-bold text-slate-900">Step 2: Complete Schedule 8812</h3>
                <p className="text-slate-700">Fill out Schedule 8812 (Credits for Qualifying Children and Other Dependents) to calculate your credit amount.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl">
              <span className="flex-shrink-0 text-2xl">🔢</span>
              <div>
                <h3 className="font-bold text-slate-900">Step 3: Provide SSNs</h3>
                <p className="text-slate-700">Include valid Social Security Numbers for all qualifying children on your tax return.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl">
              <span className="flex-shrink-0 text-2xl">✅</span>
              <div>
                <h3 className="font-bold text-slate-900">Step 4: Transfer to Form 1040</h3>
                <p className="text-slate-700">The nonrefundable credit and the refundable ACTC from Schedule 8812 carry to their lines on Form 1040.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
            <p className="font-semibold text-indigo-900 text-lg mb-2">
              💻 <strong>Tax Software Makes It Easy</strong>
            </p>
            <p className="text-indigo-800">
              If you use tax software, it calculates the Child Tax Credit and ACTC from your children's information and
              completes Schedule 8812 for you. Double-check that each child's name and SSN match their Social Security card
              exactly — mismatches are a common reason the credit is delayed or denied. If you want the credit reflected in
              your paychecks instead of your refund, claim it in Step 3 of Form W-4; our{' '}
              <a href="/blog/w4-multiple-jobs-worksheet-decoded/" className="text-indigo-600 font-semibold hover:underline">W-4 worksheet guide</a>{' '}
              explains how.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section id="scenarios" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common Scenarios &amp; Worked Examples (Hypothetical, 2026)</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="text-3xl">👨‍👩‍👧‍👦</div>
              <h3 className="font-bold text-slate-900 text-lg">Married, 2 Kids, $80k Income</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• AGI: $80,000 (well below $400k threshold)</li>
                <li>• Qualifying children: 2 (ages 5 and 8)</li>
                <li>• Tax before credits: $5,240 (on $47,800 taxable)</li>
                <li>• Total CTC: $4,400</li>
                <li>• Phase-out: $0</li>
                <li className="font-bold text-emerald-600">• Final credit: $4,400 (tax drops to $840)</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="text-3xl">👩‍👧</div>
              <h3 className="font-bold text-slate-900 text-lg">Single Parent, 1 Child, $35k Income</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• AGI: $35,000 (head of household)</li>
                <li>• Qualifying children: 1 (age 6)</li>
                <li>• Total CTC: $2,200</li>
                <li>• Federal tax before credits: $1,085</li>
                <li>• ACTC refund: $1,115</li>
                <li className="font-bold text-emerald-600">• Total benefit: $2,200 ($1,085 offset + $1,115 refund)</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="text-3xl">💼</div>
              <h3 className="font-bold text-slate-900 text-lg">High Earner, 2 Kids, $450k Income</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• AGI: $450,000 (married filing jointly)</li>
                <li>• Qualifying children: 2</li>
                <li>• Base credit: $4,400</li>
                <li>• Income over $400k: $50,000</li>
                <li>• Phase-out: $50,000 ÷ $1,000 = 50 × $50 = $2,500</li>
                <li className="font-bold text-amber-600">• Final credit: $1,900</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="text-3xl">👨‍👩‍👧‍👦‍👧</div>
              <h3 className="font-bold text-slate-900 text-lg">Blended Family, 3 Kids + 1 Teen</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Qualifying children under 17: 3</li>
                <li>• 17-year-old: 1 (other dependent)</li>
                <li>• CTC: 3 × $2,200 = $6,600</li>
                <li>• ODC: 1 × $500 = $500</li>
                <li className="font-bold text-emerald-600">• Total credit: up to $7,100 (the $500 portion is nonrefundable)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section id="maximize" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Strategies to Maximize Your Child Tax Credit</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6">
              <h3 className="font-bold text-emerald-900 text-lg mb-3 flex items-center gap-2">
                <span>💰</span> Lower Your MAGI if Close to Phase-Out
              </h3>
              <p className="text-emerald-900 mb-3">
                If you're near the $200k/$400k thresholds, consider strategies to reduce your Modified AGI:
              </p>
              <ul className="text-emerald-900 space-y-2 text-sm">
                <li>• Maximize 401(k) or IRA contributions (reduces MAGI)</li>
                <li>• Contribute to Health Savings Account (HSA) - triple tax advantage</li>
                <li>• If self-employed, maximize business deductions</li>
                <li>• Consider timing bonuses or income between tax years</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
              <h3 className="font-bold text-indigo-900 text-lg mb-3 flex items-center gap-2">
                <span>📅</span> Time Major Life Events
              </h3>
              <p className="text-indigo-900 mb-3">
                The CTC eligibility is determined on <strong>December 31</strong> of the tax year:
              </p>
              <ul className="text-indigo-900 space-y-2 text-sm">
                <li>• Child born on Dec 31, 2026? A child born during the year generally counts as living with you all year, so the full $2,200 can apply for 2026 (the SSN must be issued by the return due date)</li>
                <li>• Child turns 17 on Jan 1, 2027? Still under 17 on Dec 31, 2026, so they qualify for $2,200 on the 2026 return</li>
                <li>• Child placed for legal adoption with you? The child can count as your child for the relationship test</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
              <h3 className="font-bold text-amber-900 text-lg mb-3 flex items-center gap-2">
                <span>🔄</span> Coordinate with Other Credits
              </h3>
              <p className="text-amber-900 mb-3">
                Stack the CTC with other family-friendly tax benefits:
              </p>
              <ul className="text-amber-900 space-y-2 text-sm">
                <li>• <strong>Child and Dependent Care Credit</strong> - A percentage of qualifying childcare costs so you can work (the One Big Beautiful Bill Act expanded it starting in 2026)</li>
                <li>• <strong>Earned Income Tax Credit (EITC)</strong> - A refundable credit for low-to-moderate earners that grows with the number of children</li>
                <li>• <strong>Dependent care FSA</strong> - Pre-tax payroll dollars for childcare, if your employer offers one</li>
                <li>• <strong>Education Credits</strong> - American Opportunity Credit (up to $2,500 per student) or Lifetime Learning Credit</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 9 - FAQ */}
        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>Can I claim the CTC if I don't owe any taxes?</span>
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Yes! Up to <strong>$1,700 per child</strong> is refundable through the Additional Child Tax Credit (ACTC).
                Even if you owe $0 in federal income tax, you can receive a refund check for the ACTC portion.
              </p>
            </details>

            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>What happens if my child turns 17 during the tax year?</span>
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                If your child turns 17 at any point during 2026, they do NOT qualify for the $2,200 CTC on your 2026 return. However, they may still
                qualify as an "other dependent" for the <strong>$500 Credit for Other Dependents</strong>.
              </p>
            </details>

            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>Can divorced parents both claim the credit?</span>
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                No. Only the <strong>custodial parent</strong> (the parent the child lived with for more than half the year) can claim the CTC,
                unless the custodial parent signs Form 8332 releasing the claim to the non-custodial parent. Only one parent can claim a given child in a given year.
              </p>
            </details>

            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>Do foster children qualify for the Child Tax Credit?</span>
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Yes, if the child is placed with you by an authorized placement agency and meets all other qualifying child tests
                (age, residency, support). Foster children can qualify for the full $2,200 credit.
              </p>
            </details>

            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>Can I claim my college-age child as an "other dependent"?</span>
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Yes, if your 17+ year old child qualifies as your dependent (full-time student under 24, lived with you more than half the year,
                didn't provide more than half their own support), you can claim the <strong>$500 Credit for Other Dependents</strong>.
              </p>
            </details>

            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>What if I received advance payments last year?</span>
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                There are <strong>no advance payments</strong> for 2025 or 2026. The temporary advance CTC program applied only to 2021.
                You receive the credit when you file your return (your 2026 return is filed in early 2027), unless you
                adjust your W-4 to reflect it in your paychecks.
              </p>
            </details>
          </div>
        </section>

        <p className="text-sm text-slate-600 italic">
          This guide is educational and is not individualized tax advice. You can also run your numbers in our{' '}
          <a href="/child-tax-credit-calculator/" className="text-indigo-600 font-semibold hover:underline">Child Tax Credit calculator</a>.
        </p>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• IRS — Child Tax Credit and Schedule 8812 instructions: <a href="https://www.irs.gov/" className="text-indigo-600 font-semibold hover:underline">irs.gov</a></li>
            <li>• IRS Publication 17, Your Federal Income Tax: <a href="https://www.irs.gov/publications/p17" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p17</a></li>
            <li>• IRS Publication 505, Tax Withholding and Estimated Tax: <a href="https://www.irs.gov/publications/p505" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p505</a></li>
            <li>• One Big Beautiful Bill Act, Public Law 119-21 (July 4, 2025)</li>
          </ul>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white text-center space-y-4">
          <h2 className="text-3xl font-black">Calculate Your 2026 Child Tax Credit Now</h2>
          <p className="text-xl text-indigo-100">
            Get an instant, personalized estimate with our free calculator
          </p>
          <button
            onClick={() => onNavigate?.(ToolType.CHILD_TAX_CREDIT)}
            className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-indigo-50 transition"
          >
            Use Child Tax Credit Calculator →
          </button>
          <p className="text-sm text-indigo-200">
            Free • No signup required • Updated for 2026
          </p>
        </div>

        {/* Related Articles */}
        <div className="border-t border-slate-200 pt-8">
          <h3 className="text-2xl font-black text-slate-900 mb-6">Related Tax Planning Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX)}
              className="text-left bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 rounded-xl p-6 transition group"
            >
              <div className="text-3xl mb-3">📅</div>
              <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 mb-2">
                Quarterly Tax Calculator
              </h4>
              <p className="text-sm text-slate-600">
                Plan your 1040-ES estimated tax payments for 2026
              </p>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.ACA_SUBSIDY)}
              className="text-left bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 rounded-xl p-6 transition group"
            >
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 mb-2">
                ACA Health Subsidy Calculator
              </h4>
              <p className="text-sm text-slate-600">
                Calculate healthcare costs and subsidies for families
              </p>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
              className="text-left bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 rounded-xl p-6 transition group"
            >
              <div className="text-3xl mb-3">💼</div>
              <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 mb-2">
                Freelance Profit Hub
              </h4>
              <p className="text-sm text-slate-600">
                Calculate true net income for MAGI and tax planning
              </p>
            </button>
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">📚 Related Tax Guides for Freelancers</h2>
          <p className="text-gray-600 mb-6">Master the complete freelancer tax strategy with our comprehensive guide series:</p>

          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => onNavigate?.(ToolType.BLOG_QUARTERLY_TAX)}
              className="text-left bg-white hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-400 rounded-xl p-6 transition-all group shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">📅</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-700 mb-2">
                    Quarterly Estimated Taxes: Complete Guide
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Master safe harbor rules, payment deadlines, and penalty avoidance strategies for self-employed individuals.
                  </p>
                  <div className="text-xs font-semibold text-purple-600">
                    Read Guide →
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.BLOG_ACA_FREELANCERS)}
              className="text-left bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400 rounded-xl p-6 transition-all group shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">🏥</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-700 mb-2">
                    ACA Health Insurance for Freelancers
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Navigate Premium Tax Credits, Medicaid expansion, and save thousands on healthcare as a self-employed professional.
                  </p>
                  <div className="text-xs font-semibold text-blue-600">
                    Read Guide →
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

      </article>

      {/* Author/Updated Info */}
      <div className="border-t border-slate-200 pt-6 flex items-center justify-between text-sm text-slate-500">
        <div>
          <p>📝 Published by QuantCurb</p>
          <p>🔄 Last updated: October 2026</p>
        </div>
        <div className="text-right">
          <p>💡 Based on IRS guidance for 2025–2026</p>
          <p>📊 Reflects the One Big Beautiful Bill Act (P.L. 119-21)</p>
        </div>
      </div>
    </div>
  );
};

export default ChildTaxCreditGuide2025;

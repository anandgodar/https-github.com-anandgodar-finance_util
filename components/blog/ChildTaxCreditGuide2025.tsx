'use client';


import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const ChildTaxCreditGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    // Add Article Schema for SEO
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Child Tax Credit 2025: Complete Guide to CTC, ACTC, and Tax Savings",
      "description": "Comprehensive guide to the 2025 Child Tax Credit: How to calculate your credit, income phase-outs, refundable portions, and strategies to maximize tax savings for families.",
      "author": {
        "@type": "Organization",
        "name": "QuantCurb"
      },
      "publisher": {
        "@type": "Organization",
        "name": "QuantCurb",
        "logo": {
          "@type": "ImageObject",
          "url": "https://quantcurb.com/logo.png"
        }
      },
      "datePublished": "2026-01-04",
      "dateModified": "2026-01-04",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/child-tax-credit-2025-guide"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-ctc';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-ctc');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

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
          <span>📅 Updated January 2026</span>
          <span>•</span>
          <span>⏱️ 12 min read</span>
          <span>•</span>
          <span>💰 Tax Planning</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Child Tax Credit 2025: Complete Guide to CTC, ACTC, and Tax Savings
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          The Child Tax Credit (CTC) is worth up to <strong>$2,000 per child</strong> for tax year 2025.
          This comprehensive guide explains eligibility, income limits, refundable portions, and strategies
          to maximize your tax savings.
        </p>

        {/* Calculator CTA */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Calculate Your 2025 Child Tax Credit
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
          <li><button onClick={() => scrollToSection('2025-amounts')} className="text-indigo-600 hover:underline">2. 2025 Credit Amounts</button></li>
          <li><button onClick={() => scrollToSection('eligibility')} className="text-indigo-600 hover:underline">3. Eligibility Requirements</button></li>
          <li><button onClick={() => scrollToSection('income-limits')} className="text-indigo-600 hover:underline">4. Income Phase-Out Limits</button></li>
          <li><button onClick={() => scrollToSection('actc')} className="text-indigo-600 hover:underline">5. Additional Child Tax Credit (ACTC)</button></li>
          <li><button onClick={() => scrollToSection('how-to-claim')} className="text-indigo-600 hover:underline">6. How to Claim the CTC</button></li>
          <li><button onClick={() => scrollToSection('scenarios')} className="text-indigo-600 hover:underline">7. Common Scenarios & Examples</button></li>
          <li><button onClick={() => scrollToSection('maximize')} className="text-indigo-600 hover:underline">8. Strategies to Maximize Your Credit</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">9. Frequently Asked Questions</button></li>
        </ol>
      </nav>

      {/* Main Content */}
      <article className="prose prose-lg max-w-none space-y-12">

        {/* Section 1 */}
        <section id="what-is-ctc" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is the Child Tax Credit?</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            The Child Tax Credit (CTC) is a federal tax benefit designed to help families offset the costs of raising children.
            For tax year 2025, eligible families can receive <strong>up to $2,000 per qualifying child under age 17</strong>.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            Unlike a tax deduction (which reduces your taxable income), the Child Tax Credit is a <strong>tax credit</strong> that
            directly reduces your tax bill dollar-for-dollar. If you owe $5,000 in federal taxes and qualify for a $4,000 credit
            (2 children), your tax bill drops to just $1,000.
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold text-lg">
              💡 <strong>Key Insight:</strong> Up to $1,700 per child is <strong>refundable</strong> through the Additional Child Tax Credit (ACTC),
              meaning you can receive money back even if you owe no federal income tax.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="2025-amounts" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">2025 Child Tax Credit Amounts</h2>

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
                  <td className="p-4 font-bold text-indigo-600">$2,000</td>
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
            The <strong>$2,000 credit for children under 17</strong> is the primary benefit. Once your child turns 17, they become
            an "other dependent" eligible for only $500 (called the Credit for Other Dependents, or ODC).
          </p>
        </section>

        {/* Section 3 */}
        <section id="eligibility" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Eligibility Requirements for Qualifying Children</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            To claim the full $2,000 Child Tax Credit, your child must meet ALL of these requirements:
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Age Requirement</h3>
                <p className="text-slate-700">The child must be <strong>under age 17</strong> at the end of the tax year (December 31, 2025).
                A child who turns 17 in 2025 does NOT qualify for the $2,000 credit.</p>
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
                <p className="text-slate-700">The child must have a valid Social Security Number (SSN) issued before the tax return due date.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="income-limits" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Income Phase-Out Limits for 2025</h2>

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
                  <td className="p-4 text-slate-600">$240,000+ (1 child)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">Married Filing Jointly</td>
                  <td className="p-4 font-bold text-rose-600">$400,000</td>
                  <td className="p-4 text-slate-600">$440,000+ (1 child)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">Head of Household</td>
                  <td className="p-4 font-bold text-rose-600">$200,000</td>
                  <td className="p-4 text-slate-600">$240,000+ (1 child)</td>
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
              • Final credit: $2,000 - $500 = <strong>$1,500</strong>
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="actc" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Additional Child Tax Credit (ACTC) - The Refundable Portion</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            The <strong>Additional Child Tax Credit (ACTC)</strong> makes up to $1,700 per child <strong>refundable</strong>.
            This means even if you owe $0 in federal income tax, you can still receive up to $1,700 per qualifying child as a tax refund.
          </p>

          <h3 className="text-2xl font-bold text-slate-900">How ACTC is Calculated</h3>

          <p className="text-lg text-slate-700 leading-relaxed">
            The refundable amount is the <strong>lesser of</strong>:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-lg text-slate-700">
            <li>The amount of Child Tax Credit left after offsetting your federal income tax liability</li>
            <li><strong>15% of your earned income</strong> above $2,500 (up to $1,700 per child maximum)</li>
          </ol>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-4">
            <h4 className="font-bold text-emerald-900 text-lg">ACTC Calculation Example</h4>
            <div className="space-y-2 text-emerald-900">
              <p><strong>Scenario:</strong> Single parent, 2 qualifying children, earned income $35,000, federal tax liability $800</p>
              <p>• Total CTC: 2 × $2,000 = <strong>$4,000</strong></p>
              <p>• Federal tax offset: -$800</p>
              <p>• Remaining credit: $3,200</p>
              <p>• ACTC calculation: ($35,000 - $2,500) × 15% = $4,875</p>
              <p>• ACTC max per child: $1,700 × 2 = $3,400</p>
              <p>• Refundable portion (lesser of $3,200 or $3,400): <strong>$3,200 refund</strong></p>
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
                <p className="text-slate-700">The credit amount from Schedule 8812 is transferred to Line 19 of Form 1040.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
            <p className="font-semibold text-indigo-900 text-lg mb-2">
              💻 <strong>Tax Software Makes It Easy</strong>
            </p>
            <p className="text-indigo-800">
              If you use tax software (TurboTax, H&R Block, FreeTaxUSA), the software will automatically calculate your
              Child Tax Credit and ACTC when you enter your children's information. You don't need to manually fill out Schedule 8812.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section id="scenarios" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common Scenarios & Real-World Examples</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="text-3xl">👨‍👩‍👧‍👦</div>
              <h3 className="font-bold text-slate-900 text-lg">Married, 2 Kids, $80k Income</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• AGI: $80,000 (well below $400k threshold)</li>
                <li>• Qualifying children: 2 (ages 5 and 8)</li>
                <li>• Total CTC: $4,000</li>
                <li>• Phase-out: $0</li>
                <li className="font-bold text-emerald-600">• Final credit: $4,000</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="text-3xl">👩‍👧</div>
              <h3 className="font-bold text-slate-900 text-lg">Single Parent, 1 Child, $35k Income</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• AGI: $35,000</li>
                <li>• Qualifying children: 1 (age 6)</li>
                <li>• Total CTC: $2,000</li>
                <li>• Federal tax owed: $800</li>
                <li>• ACTC refund: $1,200</li>
                <li className="font-bold text-emerald-600">• Total benefit: $2,000 ($800 offset + $1,200 refund)</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="text-3xl">💼</div>
              <h3 className="font-bold text-slate-900 text-lg">High Earner, 2 Kids, $450k Income</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• AGI: $450,000 (married filing jointly)</li>
                <li>• Qualifying children: 2</li>
                <li>• Base credit: $4,000</li>
                <li>• Income over $400k: $50,000</li>
                <li>• Phase-out: $50,000 ÷ $1,000 = 50 × $50 = $2,500</li>
                <li className="font-bold text-amber-600">• Final credit: $1,500</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="text-3xl">👨‍👩‍👧‍👦‍👧</div>
              <h3 className="font-bold text-slate-900 text-lg">Blended Family, 3 Kids + 1 Teen</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Qualifying children under 17: 3</li>
                <li>• 17-year-old: 1 (other dependent)</li>
                <li>• CTC: 3 × $2,000 = $6,000</li>
                <li>• ODC: 1 × $500 = $500</li>
                <li className="font-bold text-emerald-600">• Total credit: $6,500</li>
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
                <li>• Child born on Dec 31, 2025? Full $2,000 credit for entire year!</li>
                <li>• Child turns 17 on Jan 1, 2026? Still qualifies for $2,000 in 2025</li>
                <li>• Adoption finalized before year-end? Immediate credit eligibility</li>
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
                <li>• <strong>Child and Dependent Care Credit</strong> - Up to $2,100 for childcare expenses</li>
                <li>• <strong>Earned Income Tax Credit (EITC)</strong> - Up to $7,830 for 3+ children</li>
                <li>• <strong>Education Credits</strong> - American Opportunity Credit ($2,500) or Lifetime Learning Credit</li>
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
                If your child turns 17 at any point during 2025, they do NOT qualify for the $2,000 CTC. However, they may still
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
                unless the custodial parent signs Form 8332 allowing the non-custodial parent to claim the exemption.
              </p>
            </details>

            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>Do foster children qualify for the Child Tax Credit?</span>
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Yes, if the child is placed with you by an authorized placement agency and meets all other qualifying child tests
                (age, residency, support). Foster children can qualify for the full $2,000 credit.
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
                For tax year 2025, there are <strong>no advance payments</strong>. The temporary advance CTC program from 2021 has ended.
                You'll receive the full credit when you file your 2025 tax return in 2026.
              </p>
            </details>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white text-center space-y-4">
          <h2 className="text-3xl font-black">Calculate Your 2025 Child Tax Credit Now</h2>
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
            Free • No signup required • Updated for 2025
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
                Plan your 1040-ES estimated tax payments for 2025
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
                    Quarterly Estimated Taxes 2025: Complete Guide
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
                    ACA Health Insurance for Freelancers 2025
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
          <p>📝 Written by QuantCurb Financial Research Team</p>
          <p>🔄 Last updated: January 4, 2026</p>
        </div>
        <div className="text-right">
          <p>💡 Based on 2025 IRS guidelines</p>
          <p>📊 Data verified with Form 1040 & Schedule 8812</p>
        </div>
      </div>
    </div>
  );
};

export default ChildTaxCreditGuide2025;

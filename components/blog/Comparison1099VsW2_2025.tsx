import React, { useEffect, useState } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const Comparison1099VsW2_2025: React.FC<BlogProps> = ({ onNavigate }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "1099 vs W-2: Complete Tax & Benefits Comparison for 2025",
      "description": "Comprehensive guide comparing 1099 independent contractor vs W-2 employee status. Learn tax differences, benefits comparison, take-home pay calculations, legal classification rules, and when to negotiate for each employment type.",
      "author": {
        "@type": "Organization",
        "name": "QuantCurb",
        "url": "https://quantcurb.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "QuantCurb",
        "logo": {
          "@type": "ImageObject",
          "url": "https://quantcurb.com/logo.png"
        }
      },
      "datePublished": "2026-01-06",
      "dateModified": "2026-01-06",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/1099-vs-w2-comparison-2025"
      },
      "keywords": "1099 vs w2, independent contractor vs employee, w2 to 1099 conversion, self employment tax vs payroll tax, contractor benefits, 1099 tax calculator",
      "articleBody": "Complete comparison of 1099 independent contractor vs W-2 employee status in 2025. Understand tax differences, benefits, take-home pay, legal classification, and strategic considerations."
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-1099-vs-w2';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-1099-vs-w2');
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

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-4">
          1099 vs W-2: Complete Tax & Benefits Comparison for 2025
        </h1>
        <p className="text-xl mb-6 text-purple-50">
          Understand the critical differences between independent contractor (1099) and employee (W-2) status. Compare taxes, benefits, take-home pay, and legal implications to make informed career decisions.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg"
          >
            Calculate Take-Home Pay
          </button>
          <button
            onClick={() => scrollToSection('calculator-section')}
            className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 transition-colors"
          >
            View Comparison Charts
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
          <div className="text-3xl font-bold text-purple-600 mb-2">15.3%</div>
          <div className="text-gray-700 font-medium">Self-Employment Tax on 1099 Income (vs 7.65% for W-2)</div>
        </div>
        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-lg">
          <div className="text-3xl font-bold text-pink-600 mb-2">30-40%</div>
          <div className="text-gray-700 font-medium">Higher 1099 Rate Needed for Salary Equivalence</div>
        </div>
        <div className="bg-fuchsia-50 border-l-4 border-fuchsia-500 p-6 rounded-lg">
          <div className="text-3xl font-bold text-fuchsia-600 mb-2">$12-24k</div>
          <div className="text-gray-700 font-medium">Average Annual Value of W-2 Benefits Package</div>
        </div>
      </div>

      {/* Table of Contents */}
      <nav className="bg-white border-2 border-gray-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Table of Contents</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <button onClick={() => scrollToSection('key-differences')} className="text-left text-purple-600 hover:text-purple-800 hover:underline font-medium">
            1. Key Differences Overview
          </button>
          <button onClick={() => scrollToSection('tax-comparison')} className="text-left text-purple-600 hover:text-purple-800 hover:underline font-medium">
            2. Tax Differences (SE Tax vs Payroll Tax)
          </button>
          <button onClick={() => scrollToSection('benefits')} className="text-left text-purple-600 hover:text-purple-800 hover:underline font-medium">
            3. Benefits Comparison
          </button>
          <button onClick={() => scrollToSection('take-home-pay')} className="text-left text-purple-600 hover:text-purple-800 hover:underline font-medium">
            4. Take-Home Pay Calculator
          </button>
          <button onClick={() => scrollToSection('legal-classification')} className="text-left text-purple-600 hover:text-purple-800 hover:underline font-medium">
            5. Legal Classification Rules
          </button>
          <button onClick={() => scrollToSection('pros-cons')} className="text-left text-purple-600 hover:text-purple-800 hover:underline font-medium">
            6. Pros & Cons Comparison
          </button>
          <button onClick={() => scrollToSection('when-to-choose')} className="text-left text-purple-600 hover:text-purple-800 hover:underline font-medium">
            7. When to Negotiate for Each
          </button>
          <button onClick={() => scrollToSection('conversion')} className="text-left text-purple-600 hover:text-purple-800 hover:underline font-medium">
            8. W-2 to 1099 Conversion
          </button>
          <button onClick={() => scrollToSection('scenarios')} className="text-left text-purple-600 hover:text-purple-800 hover:underline font-medium">
            9. Real-World Scenarios
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-left text-purple-600 hover:text-purple-800 hover:underline font-medium">
            10. Frequently Asked Questions
          </button>
        </div>
      </nav>

      {/* Section 1: Key Differences */}
      <section id="key-differences" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">1. Key Differences: 1099 vs W-2 at a Glance</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            The difference between <strong>1099 independent contractor</strong> and <strong>W-2 employee</strong> status affects nearly every aspect of your work life—from how much you take home to your legal protections.
          </p>

          <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-purple-50">
                <tr>
                  <th className="text-left p-4 font-black text-gray-900">Category</th>
                  <th className="text-left p-4 font-black text-purple-700">W-2 Employee</th>
                  <th className="text-left p-4 font-black text-pink-700">1099 Contractor</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t border-gray-100">
                  <td className="p-4 font-semibold text-gray-900">Tax Withholding</td>
                  <td className="p-4 text-gray-700">Employer withholds automatically</td>
                  <td className="p-4 text-gray-700">You pay quarterly estimated taxes</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Payroll Taxes</td>
                  <td className="p-4 text-gray-700">Employer pays 7.65%, you pay 7.65%</td>
                  <td className="p-4 text-gray-700">You pay full 15.3% SE tax</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-4 font-semibold text-gray-900">Benefits</td>
                  <td className="p-4 text-gray-700">Health, 401(k), PTO, etc.</td>
                  <td className="p-4 text-gray-700">None (you buy your own)</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Business Deductions</td>
                  <td className="p-4 text-gray-700">Very limited (unreimbursed expenses)</td>
                  <td className="p-4 text-gray-700">Full Schedule C deductions</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-4 font-semibold text-gray-900">Job Security</td>
                  <td className="p-4 text-gray-700">Employment protections, unemployment</td>
                  <td className="p-4 text-gray-700">At-will, no unemployment benefits</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Control</td>
                  <td className="p-4 text-gray-700">Employer controls how, when, where</td>
                  <td className="p-4 text-gray-700">You control methods & schedule</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-purple-900 mb-2">The Bottom Line</h3>
            <p className="text-gray-700">
              <strong>W-2 employees</strong> trade autonomy for security and benefits. <strong>1099 contractors</strong> trade security for flexibility and potentially higher hourly rates. Neither is inherently better—it depends on your priorities and situation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Tax Comparison */}
      <section id="tax-comparison" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">2. Tax Differences: Self-Employment Tax vs Payroll Tax</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            The biggest financial difference between 1099 and W-2 is <strong>how you pay Social Security and Medicare taxes</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 border-2 border-purple-300 p-6 rounded-lg">
              <h3 className="font-bold text-purple-900 mb-3 text-lg">W-2 Employee (Payroll Tax)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Your share:</strong> 7.65% (6.2% Social Security + 1.45% Medicare)</li>
                <li>• <strong>Employer's share:</strong> 7.65% (employer pays this for you)</li>
                <li>• <strong>Total:</strong> 15.3%, but you only see 7.65% deducted from paycheck</li>
                <li>• <strong>Withheld automatically</strong> from each paycheck</li>
              </ul>
            </div>

            <div className="bg-pink-50 border-2 border-pink-300 p-6 rounded-lg">
              <h3 className="font-bold text-pink-900 mb-3 text-lg">1099 Contractor (Self-Employment Tax)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Your share:</strong> 15.3% full amount (12.4% SS + 2.9% Medicare)</li>
                <li>• <strong>Employer's share:</strong> You pay both halves</li>
                <li>• <strong>Total:</strong> 15.3% on net profit after expenses</li>
                <li>• <strong>Paid quarterly</strong> via estimated tax payments</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-purple-900 mb-4 text-lg">Example: $80,000 Income Comparison</h4>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold text-purple-900 mb-2">W-2 Employee at $80,000 salary:</p>
                <div className="space-y-1 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Your payroll tax (7.65%):</span>
                    <span className="font-bold">$6,120</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Employer's payroll tax (7.65%):</span>
                    <span className="text-gray-500">(Employer pays $6,120)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold text-pink-900 mb-2">1099 Contractor earning $80,000 (after expenses):</p>
                <div className="space-y-1 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Net profit after expenses:</span>
                    <span>$80,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SE tax (15.3% × 92.35%):</span>
                    <span className="font-bold">$11,304</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deductible portion (50%):</span>
                    <span className="text-green-600">-$5,652</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-100 p-4 rounded border-2 border-red-400">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-red-900">Extra tax burden as 1099:</span>
                  <span className="font-bold text-red-700">$5,184 more annually</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-2">The Silver Lining for 1099s</h3>
            <p className="text-gray-700">
              While 1099 contractors pay more in SE tax, they can deduct <strong>business expenses</strong> (home office, equipment, mileage, etc.) on Schedule C, reducing their taxable income. W-2 employees cannot deduct unreimbursed work expenses after 2017 tax reform.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <div id="calculator-section" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 shadow-xl text-center">
        <h3 className="text-2xl font-bold mb-3">Calculate Your 1099 vs W-2 Take-Home Pay</h3>
        <p className="text-lg mb-6 text-purple-50">
          See exactly how much you'd take home under each employment type with our free calculator.
        </p>
        <button
          onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
          className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg"
        >
          Calculate Take-Home Pay →
        </button>
      </div>

      {/* Section 3: Benefits Comparison */}
      <section id="benefits" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">3. Benefits Comparison: What You Get (or Don't)</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            The value of W-2 benefits often exceeds <strong>$12,000-$24,000 per year</strong>. This is the "hidden compensation" that 1099 contractors must account for.
          </p>

          <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-purple-50">
                <tr>
                  <th className="text-left p-4 font-black text-gray-900">Benefit</th>
                  <th className="text-left p-4 font-black text-purple-700">W-2 Employee</th>
                  <th className="text-left p-4 font-black text-pink-700">1099 Contractor</th>
                  <th className="text-left p-4 font-black text-gray-900">Annual Value</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t border-gray-100">
                  <td className="p-4 font-semibold">Health Insurance</td>
                  <td className="p-4 text-green-600">Employer pays 50-100%</td>
                  <td className="p-4 text-red-600">You pay 100%</td>
                  <td className="p-4">$7,000-$20,000</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="p-4 font-semibold">401(k) Match</td>
                  <td className="p-4 text-green-600">3-6% match typical</td>
                  <td className="p-4 text-red-600">No match</td>
                  <td className="p-4">$2,400-$6,000</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-4 font-semibold">Paid Time Off</td>
                  <td className="p-4 text-green-600">15-25 days/year</td>
                  <td className="p-4 text-red-600">Unpaid time off</td>
                  <td className="p-4">$4,600-$9,600</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="p-4 font-semibold">Unemployment Insurance</td>
                  <td className="p-4 text-green-600">Eligible if laid off</td>
                  <td className="p-4 text-red-600">Not eligible</td>
                  <td className="p-4">N/A (when needed)</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-4 font-semibold">Workers' Compensation</td>
                  <td className="p-4 text-green-600">Covered</td>
                  <td className="p-4 text-red-600">Not covered</td>
                  <td className="p-4">N/A (when needed)</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="p-4 font-semibold">Employer Payroll Tax</td>
                  <td className="p-4 text-green-600">Employer pays 7.65%</td>
                  <td className="p-4 text-red-600">You pay both halves</td>
                  <td className="p-4">$4,800-$6,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 p-6 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-4 text-lg">Total Benefits Package Example: $80k Salary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">Health insurance (employer pays 70%):</span>
                <span className="font-semibold">$8,400</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">401(k) match (4% of $80k):</span>
                <span className="font-semibold">$3,200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">PTO (20 days × $308/day):</span>
                <span className="font-semibold">$6,160</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Employer payroll tax (7.65%):</span>
                <span className="font-semibold">$6,120</span>
              </div>
              <div className="flex justify-between border-t-2 border-green-300 pt-2 mt-2">
                <span className="font-bold text-green-900">Total benefits value:</span>
                <span className="font-bold text-green-700">$23,880</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              This means a $80,000 W-2 job has a <strong>total compensation of ~$103,880</strong> when benefits are included.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Take-Home Pay Calculator */}
      <section id="take-home-pay" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">4. Take-Home Pay: What You Actually Keep</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            To match a W-2 salary as a 1099 contractor, you typically need to charge <strong>30-40% more</strong> to account for taxes, benefits, and unpaid time off.
          </p>

          <div className="bg-purple-50 border-2 border-purple-300 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-purple-900 mb-4">The 1099 Rate Formula</h3>
            <div className="bg-white p-5 rounded-lg space-y-3 text-sm">
              <p className="font-semibold text-gray-900">To calculate your 1099 rate equivalent:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">1</span>
                  <span className="text-gray-700">Take your desired W-2 salary</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">2</span>
                  <span className="text-gray-700">Add value of benefits (health, 401k, PTO, employer tax)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">3</span>
                  <span className="text-gray-700">Divide by billable hours (typically 1,800-2,000/year)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">4</span>
                  <span className="text-gray-700">Add 10-15% profit margin</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 p-6 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-4 text-lg">Example: $80k W-2 Salary Equivalent</h4>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold text-gray-900 mb-2">W-2 Salary Package:</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Base salary:</span>
                    <span>$80,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Health insurance:</span>
                    <span>$8,400</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">401(k) match (4%):</span>
                    <span>$3,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">PTO (20 days):</span>
                    <span>$6,160</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Employer payroll tax:</span>
                    <span>$6,120</span>
                  </div>
                  <div className="flex justify-between border-t-2 border-gray-300 pt-2 mt-2 font-semibold">
                    <span>Total compensation:</span>
                    <span>$103,880</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold text-gray-900 mb-2">1099 Rate Calculation:</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Target compensation:</span>
                    <span>$103,880</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Billable hours (1,920/year):</span>
                    <span>1,920 hrs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Base hourly rate:</span>
                    <span>$54.10/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Add profit margin (15%):</span>
                    <span>$8.12/hr</span>
                  </div>
                  <div className="flex justify-between border-t-2 border-purple-300 pt-2 mt-2 font-bold text-purple-900">
                    <span>1099 Rate Needed:</span>
                    <span className="text-purple-700">$62/hr or $124,800/yr</span>
                  </div>
                </div>
              </div>

              <div className="bg-pink-600 text-white p-4 rounded font-bold text-center">
                You need to charge 56% MORE as a 1099 to match this W-2 job!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Legal Classification */}
      <section id="legal-classification" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">5. Legal Classification Rules (IRS 20-Factor Test)</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            The IRS uses a <strong>multi-factor test</strong> to determine if someone is an employee or contractor. Misclassification can result in severe penalties for the hiring company.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-red-900 mb-2">Misclassification Penalties</h3>
            <p className="text-gray-700 mb-3">
              Companies that misclassify employees as contractors face:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• Back payroll taxes (employer's 7.65% share)</li>
              <li>• IRS penalties ($50 per W-2 not filed)</li>
              <li>• State unemployment insurance penalties</li>
              <li>• Potential employee benefits owed retroactively</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">The IRS 3-Category Test</h3>

          <div className="space-y-6">
            <div className="bg-purple-50 border-2 border-purple-300 p-6 rounded-lg">
              <h4 className="font-bold text-purple-900 mb-3 text-lg">1. Behavioral Control</h4>
              <p className="text-gray-700 mb-3 text-sm">Does the company control how the worker performs the job?</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-green-900 mb-2">Likely Contractor:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>✅ Sets own schedule</li>
                    <li>✅ Uses own methods</li>
                    <li>✅ Works from own location</li>
                    <li>✅ No required training</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-900 mb-2">Likely Employee:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>❌ Company sets schedule</li>
                    <li>❌ Must follow company procedures</li>
                    <li>❌ Works at company office</li>
                    <li>❌ Must attend training</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 border-2 border-pink-300 p-6 rounded-lg">
              <h4 className="font-bold text-pink-900 mb-3 text-lg">2. Financial Control</h4>
              <p className="text-gray-700 mb-3 text-sm">Does the worker control business aspects of the job?</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-green-900 mb-2">Likely Contractor:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>✅ Unreimbursed expenses</li>
                    <li>✅ Own tools/equipment</li>
                    <li>✅ Can earn profit/loss</li>
                    <li>✅ Works for multiple clients</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-900 mb-2">Likely Employee:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>❌ All expenses reimbursed</li>
                    <li>❌ Company provides tools</li>
                    <li>❌ Guaranteed regular wage</li>
                    <li>❌ Works exclusively for one company</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-3 text-lg">3. Relationship Type</h4>
              <p className="text-gray-700 mb-3 text-sm">How do the parties view their relationship?</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-green-900 mb-2">Likely Contractor:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>✅ Written contract for project</li>
                    <li>✅ No employee benefits</li>
                    <li>✅ Temporary/project-based</li>
                    <li>✅ Provides services to public</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-900 mb-2">Likely Employee:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>❌ Ongoing relationship</li>
                    <li>❌ Receives benefits (health, PTO)</li>
                    <li>❌ Indefinite/permanent role</li>
                    <li>❌ Core business function</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-yellow-900 mb-2">Gray Areas</h3>
            <p className="text-gray-700">
              Many modern work arrangements (remote work, gig economy) fall into gray areas. When in doubt, consult IRS Form SS-8 to request an official determination, or speak with a tax attorney.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Pros & Cons */}
      <section id="pros-cons" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">6. Pros & Cons: Which is Right for You?</h2>

        <div className="prose prose-lg max-w-none">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 border-2 border-purple-300 p-6 rounded-lg">
              <h3 className="font-bold text-purple-900 mb-4 text-xl">W-2 Employee</h3>

              <div className="mb-4">
                <p className="font-semibold text-green-900 mb-2">Pros:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✅ Employer pays half of payroll taxes</li>
                  <li>✅ Benefits (health, 401k, PTO)</li>
                  <li>✅ Unemployment insurance if laid off</li>
                  <li>✅ Workers' comp coverage</li>
                  <li>✅ Simpler taxes (W-2, no quarterly payments)</li>
                  <li>✅ Legal protections (overtime, discrimination)</li>
                  <li>✅ Steady paycheck</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-red-900 mb-2">Cons:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>❌ Less flexibility/autonomy</li>
                  <li>❌ Fixed schedule and location</li>
                  <li>❌ Limited business deductions</li>
                  <li>❌ Can't deduct unreimbursed expenses</li>
                  <li>❌ Income ceiling (salary cap)</li>
                  <li>❌ Must follow company policies</li>
                </ul>
              </div>
            </div>

            <div className="bg-pink-50 border-2 border-pink-300 p-6 rounded-lg">
              <h3 className="font-bold text-pink-900 mb-4 text-xl">1099 Contractor</h3>

              <div className="mb-4">
                <p className="font-semibold text-green-900 mb-2">Pros:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✅ Full autonomy over schedule/methods</li>
                  <li>✅ Can work for multiple clients</li>
                  <li>✅ Business expense deductions (home office, etc.)</li>
                  <li>✅ Higher hourly rates (30-40% more)</li>
                  <li>✅ Control over work location</li>
                  <li>✅ Unlimited income potential</li>
                  <li>✅ Build own business</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-red-900 mb-2">Cons:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>❌ Pay full 15.3% SE tax</li>
                  <li>❌ No employer benefits</li>
                  <li>❌ No unemployment insurance</li>
                  <li>❌ Quarterly estimated taxes</li>
                  <li>❌ Income instability</li>
                  <li>❌ Fewer legal protections</li>
                  <li>❌ Must manage own health insurance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: When to Choose Each */}
      <section id="when-to-choose" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">7. When to Negotiate for W-2 vs 1099</h2>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-6">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Choose W-2 When:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• You value <strong>stability and benefits</strong> over flexibility</li>
                <li>• You need <strong>employer-sponsored health insurance</strong> (family coverage)</li>
                <li>• You prefer <strong>simpler taxes</strong> (no quarterly payments or Schedule C)</li>
                <li>• You want <strong>unemployment insurance</strong> as a safety net</li>
                <li>• You're okay with <strong>fixed schedule and location</strong></li>
                <li>• You want <strong>employer 401(k) match</strong> and PTO</li>
                <li>• The W-2 offer includes <strong>strong benefits package</strong> (valued at $15k+)</li>
              </ul>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Choose 1099 When:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• You value <strong>autonomy and flexibility</strong> over security</li>
                <li>• You can negotiate a <strong>40%+ higher rate</strong> than W-2 equivalent</li>
                <li>• You have <strong>significant business expenses</strong> to deduct (home office, equipment)</li>
                <li>• You want to <strong>work for multiple clients</strong> simultaneously</li>
                <li>• You have <strong>health insurance through a spouse</strong> or can afford ACA marketplace</li>
                <li>• You're comfortable with <strong>income variability</strong></li>
                <li>• You want to <strong>build your own business</strong> and brand</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-3 text-lg">Negotiation Tip: Ask for Hybrid Arrangements</h4>
              <p className="text-gray-700">
                Some companies offer <strong>contract-to-hire</strong> arrangements: Start as 1099 for a trial period (3-6 months), then convert to W-2 if it's a good fit. This gives you short-term flexibility while keeping W-2 benefits as a future option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: W-2 to 1099 Conversion */}
      <section id="conversion" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">8. W-2 to 1099 Conversion: What You Need to Know</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            If your employer asks you to convert from W-2 to 1099 (or offers a choice), here's what to consider:
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-red-900 mb-2">Legal Red Flag</h3>
            <p className="text-gray-700 mb-3">
              If your employer wants you to do the <strong>exact same job</strong> but as a 1099 instead of W-2, this may be <strong>illegal misclassification</strong>. The IRS looks at:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• Are you still working in their office?</li>
              <li>• Are you still following their schedule?</li>
              <li>• Are they still controlling how you do the work?</li>
            </ul>
            <p className="text-gray-700 mt-3">
              If yes to most of these, you should remain W-2. Consult an employment attorney if pressured.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Legitimate W-2 to 1099 Conversions</h3>

          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-green-900 mb-2">Scenario 1: Remote Work with Autonomy</h4>
              <p className="text-gray-700 text-sm">
                You transition to full remote work, set your own hours, use your own equipment, and deliver results without direct supervision. Rate: <strong>+35% minimum</strong>.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-green-900 mb-2">Scenario 2: Project-Based Work</h4>
              <p className="text-gray-700 text-sm">
                You shift from ongoing employment to <strong>specific project contracts</strong> with defined deliverables and end dates. Rate: <strong>+40% minimum</strong>.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-green-900 mb-2">Scenario 3: Multi-Client Consultant</h4>
              <p className="text-gray-700 text-sm">
                You leave to start your own consulting practice, and your former employer becomes <strong>one of several clients</strong>. Rate: <strong>+50% minimum</strong>.
              </p>
            </div>
          </div>

          <div className="bg-purple-50 border-2 border-purple-300 p-6 rounded-lg mt-6">
            <h4 className="font-semibold text-purple-900 mb-3 text-lg">What to Negotiate When Converting</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>1. <strong>Hourly/project rate:</strong> Use formula from Section 4 (add 30-40%)</li>
              <li>2. <strong>Contract terms:</strong> Length, scope, deliverables, termination clause</li>
              <li>3. <strong>Payment schedule:</strong> Net-15 or Net-30 invoice payment</li>
              <li>4. <strong>Expense policy:</strong> What equipment/software will you provide vs. them?</li>
              <li>5. <strong>Non-compete clause:</strong> Ensure you can work for other clients</li>
              <li>6. <strong>Intellectual property:</strong> Who owns work product?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 9: Real-World Scenarios */}
      <section id="scenarios" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">9. Real-World Scenarios</h2>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 p-6 rounded-lg">
              <h3 className="font-bold text-purple-900 mb-4 text-lg">Scenario 1: Software Developer Choosing Between Two Offers</h3>
              <div className="bg-white p-4 rounded mb-4">
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Offer A (W-2):</strong> $120,000 salary + health insurance ($12k value) + 401(k) match ($6k) + 3 weeks PTO ($6,900 value)
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Offer B (1099):</strong> $150,000 contract rate
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-gray-900">W-2 Total Compensation:</p>
                  <div className="ml-4 space-y-1 text-gray-700">
                    <div className="flex justify-between">
                      <span>Salary + benefits + employer tax:</span>
                      <span className="font-bold">$154,080</span>
                    </div>
                  </div>

                  <p className="font-semibold text-gray-900 mt-3">1099 After Expenses:</p>
                  <div className="ml-4 space-y-1 text-gray-700">
                    <div className="flex justify-between">
                      <span>Gross income:</span>
                      <span>$150,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Business expenses (home office, equipment):</span>
                      <span>-$8,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Health insurance (self-purchased):</span>
                      <span>-$12,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SEP-IRA contribution (15%):</span>
                      <span>-$22,500</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t pt-1">
                      <span>Net after expenses:</span>
                      <span>$107,500</span>
                    </div>
                  </div>

                  <div className="bg-purple-100 p-3 rounded mt-4 border-2 border-purple-400">
                    <p className="font-bold text-purple-900">Winner: W-2 offer by $46,580 in total compensation!</p>
                    <p className="text-sm text-purple-800 mt-2">The 1099 rate would need to be ~$185,000 to match the W-2 package.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 p-6 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-4 text-lg">Scenario 2: Freelance Designer Comparing Client Offers</h3>
              <div className="bg-white p-4 rounded mb-4">
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Client A:</strong> $50/hr 1099, 20 hrs/week, work remotely on your schedule
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Client B:</strong> $40/hr W-2, 40 hrs/week, must work in office 9-5
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-gray-900">Client A (1099) Annual:</p>
                  <div className="ml-4 space-y-1 text-gray-700">
                    <div className="flex justify-between">
                      <span>$50/hr × 20 hrs/wk × 48 weeks:</span>
                      <span className="font-bold">$48,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Can take 2nd client (20 hrs/wk):</span>
                      <span className="font-bold">+$48,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total gross:</span>
                      <span className="font-bold text-blue-700">$96,000</span>
                    </div>
                  </div>

                  <p className="font-semibold text-gray-900 mt-3">Client B (W-2) Annual:</p>
                  <div className="ml-4 space-y-1 text-gray-700">
                    <div className="flex justify-between">
                      <span>$40/hr × 40 hrs/wk × 50 weeks:</span>
                      <span className="font-bold">$80,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>+ Health insurance value:</span>
                      <span>$9,600</span>
                    </div>
                    <div className="flex justify-between">
                      <span>+ 401(k) match (3%):</span>
                      <span>$2,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total compensation:</span>
                      <span className="font-bold text-blue-700">$92,000</span>
                    </div>
                  </div>

                  <div className="bg-green-100 p-3 rounded mt-4 border-2 border-green-400">
                    <p className="font-bold text-green-900">Winner: 1099 offers more total income ($96k vs $92k) + flexibility!</p>
                    <p className="text-sm text-green-800 mt-2">Plus ability to work remotely and set own schedule adds lifestyle value.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 p-6 rounded-lg">
              <h3 className="font-bold text-green-900 mb-4 text-lg">Scenario 3: Parent with Family Needs Health Insurance</h3>
              <div className="bg-white p-4 rounded mb-4">
                <p className="text-sm text-gray-600 mb-3">
                  Single parent with 2 kids needs family health coverage.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-gray-900">W-2 Option:</p>
                  <div className="ml-4 space-y-1 text-gray-700">
                    <div className="flex justify-between">
                      <span>Salary:</span>
                      <span>$70,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Family health insurance (employer pays 70%):</span>
                      <span className="text-green-600">$14,000 saved</span>
                    </div>
                  </div>

                  <p className="font-semibold text-gray-900 mt-3">1099 Option:</p>
                  <div className="ml-4 space-y-1 text-gray-700">
                    <div className="flex justify-between">
                      <span>Contract rate:</span>
                      <span>$95,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ACA family plan (self-purchased):</span>
                      <span className="text-red-600">-$20,000</span>
                    </div>
                  </div>

                  <div className="bg-purple-100 p-3 rounded mt-4 border-2 border-purple-400">
                    <p className="font-bold text-purple-900">Winner: W-2 for this situation</p>
                    <p className="text-sm text-purple-800 mt-2">Family health insurance is expensive ($20k+/year). Employer-sponsored coverage saves $14k, making W-2 far more valuable for families.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Calculate Your 1099 vs W-2 Comparison</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <button
            onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
            className="bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 p-6 rounded-lg text-left transition-colors group"
          >
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold text-purple-900 mb-2 group-hover:text-purple-700">Freelance Profit Calculator</h3>
            <p className="text-sm text-gray-600">Calculate take-home pay as 1099 contractor</p>
          </button>

          <button
            onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX)}
            className="bg-pink-50 hover:bg-pink-100 border-2 border-pink-200 p-6 rounded-lg text-left transition-colors group"
          >
            <div className="text-3xl mb-3">📅</div>
            <h3 className="font-bold text-pink-900 mb-2 group-hover:text-pink-700">Quarterly Tax Calculator</h3>
            <p className="text-sm text-gray-600">Plan estimated tax payments for 1099 income</p>
          </button>

          <button
            onClick={() => onNavigate?.(ToolType.ACA_SUBSIDY)}
            className="bg-fuchsia-50 hover:bg-fuchsia-100 border-2 border-fuchsia-200 p-6 rounded-lg text-left transition-colors group"
          >
            <div className="text-3xl mb-3">🏥</div>
            <h3 className="font-bold text-fuchsia-900 mb-2 group-hover:text-fuchsia-700">ACA Health Subsidy Calculator</h3>
            <p className="text-sm text-gray-600">Calculate health insurance costs as contractor</p>
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(0)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-900">Can I have both W-2 and 1099 income in the same year?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 0 ? '−' : '+'}</span>
            </button>
            {openFAQ === 0 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-3">
                  <strong>Yes!</strong> You can have a W-2 day job and 1099 freelance side income. This is very common. You'll file:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• W-2 income on Form 1040</li>
                  <li>• 1099 income on Schedule C (business income/expenses)</li>
                  <li>• Self-employment tax on Schedule SE (for the 1099 income only)</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Your W-2 employer withholds taxes from your paycheck. You'll need to make <strong>quarterly estimated tax payments</strong> for the 1099 side income to avoid penalties.
                </p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(1)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-900">If I'm 1099, can I still contribute to a retirement account?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 1 ? '−' : '+'}</span>
            </button>
            {openFAQ === 1 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-3">
                  <strong>Absolutely!</strong> As a 1099 contractor, you have access to <strong>self-employed retirement plans</strong> with higher contribution limits than traditional IRAs:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>SEP-IRA:</strong> Contribute up to $69,000 or 25% of net income (whichever is less) in 2025</li>
                  <li>• <strong>Solo 401(k):</strong> Contribute up to $69,000 ($76,500 if age 50+) in 2025</li>
                  <li>• <strong>Traditional IRA:</strong> $7,000 ($8,000 if age 50+) as a backup option</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  These contributions are <strong>tax-deductible</strong> and can significantly lower your self-employment tax burden.
                </p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(2)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-900">What's the minimum 1099 rate I should accept to match a $75k W-2 salary?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 2 ? '−' : '+'}</span>
            </button>
            {openFAQ === 2 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-3">
                  To match a <strong>$75,000 W-2 salary</strong>, you'd need approximately <strong>$100,000-$110,000</strong> in 1099 income, or <strong>$52-$57/hour</strong> assuming 1,920 billable hours per year.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Calculation breakdown:</strong>
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Base salary: $75,000</li>
                  <li>• Health insurance (employer pays 70%): +$8,400</li>
                  <li>• 401(k) match (4%): +$3,000</li>
                  <li>• PTO (15 days): +$4,300</li>
                  <li>• Employer payroll tax (7.65%): +$5,738</li>
                  <li>• <strong>Total compensation: $96,438</strong></li>
                  <li>• Add 15% profit margin: <strong>~$111,000 needed as 1099</strong></li>
                </ul>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(3)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-900">Can my employer change me from W-2 to 1099 without my consent?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 3 ? '−' : '+'}</span>
            </button>
            {openFAQ === 3 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-3">
                  <strong>No.</strong> Your employer cannot unilaterally force you to become a 1099 contractor doing the same job. This is <strong>illegal misclassification</strong>.
                </p>
                <p className="text-gray-700 mb-3">
                  If your employer wants to reclassify you as 1099 for the same role, you should:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>1. <strong>Refuse if the work relationship hasn't changed</strong> (same schedule, location, control)</li>
                  <li>2. <strong>Consult an employment attorney</strong> immediately</li>
                  <li>3. <strong>Report to the IRS</strong> using Form SS-8 if forced into misclassification</li>
                  <li>4. <strong>File for unemployment</strong> if terminated for refusing (you may qualify)</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Legitimate conversions require <strong>substantial changes</strong> to the work arrangement (autonomy, schedule, location, multiple clients).
                </p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(4)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-900">Do I need an LLC or S-Corp as a 1099 contractor?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 4 ? '−' : '+'}</span>
            </button>
            {openFAQ === 4 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-3">
                  <strong>No, it's not required.</strong> You can work as a 1099 contractor under your own name as a <strong>sole proprietor</strong>.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>When to consider an LLC:</strong>
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Liability protection:</strong> If you have significant business assets or risk exposure</li>
                  <li>• <strong>Credibility:</strong> Some clients prefer working with LLCs over sole proprietors</li>
                  <li>• <strong>Multiple owners:</strong> If you partner with others</li>
                </ul>
                <p className="text-gray-700 mb-3 mt-3">
                  <strong>When to consider S-Corp election:</strong>
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Income over $60k-$80k:</strong> S-Corp can save on self-employment tax</li>
                  <li>• <strong>Trade-off:</strong> Requires payroll processing, quarterly payroll taxes, more complex accounting</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  For most freelancers earning under $100k, <strong>sole proprietorship or single-member LLC is simplest</strong>.
                </p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(5)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-900">Can I negotiate a higher 1099 rate if I'm currently W-2?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 5 ? '−' : '+'}</span>
            </button>
            {openFAQ === 5 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-3">
                  <strong>Absolutely!</strong> If your employer wants to convert you from W-2 to 1099, you should <strong>negotiate a 30-40% higher rate</strong> to compensate for:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Loss of employer's 7.65% payroll tax contribution</li>
                  <li>• Loss of health insurance, 401(k) match, and PTO</li>
                  <li>• Taking on additional business expenses (equipment, software)</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  <strong>Example negotiation:</strong> If you currently earn $60/hr W-2, request $80-$85/hr as 1099 (33-42% increase). Come prepared with a breakdown showing the value of benefits you're losing.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Complete 1099 Contractor Tax Guide Series</h2>
        <p className="text-gray-600 mb-6">Master freelance taxes and business decisions with our comprehensive guides:</p>

        <div className="grid md:grid-cols-2 gap-6">
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_SE_TAX)}
            className="text-left bg-white hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-400 rounded-xl p-6 transition-all group shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">💼</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-700 mb-2">
                  Self-Employment Tax Guide 2025
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Understand the 15.3% SE tax that 1099 contractors pay and strategies to minimize it.
                </p>
                <div className="text-xs font-semibold text-purple-600">
                  Read Guide →
                </div>
              </div>
            </div>
          </button>

          <button
            onClick={() => onNavigate?.(ToolType.BLOG_QUARTERLY_TAX)}
            className="text-left bg-white hover:bg-pink-50 border-2 border-pink-200 hover:border-pink-400 rounded-xl p-6 transition-all group shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">📅</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-pink-700 mb-2">
                  Quarterly Estimated Taxes Guide
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Learn payment deadlines and safe harbor rules for 1099 quarterly tax payments.
                </p>
                <div className="text-xs font-semibold text-pink-600">
                  Read Guide →
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 shadow-xl text-center">
        <h2 className="text-3xl font-bold mb-4">Make the Right 1099 vs W-2 Decision</h2>
        <p className="text-xl mb-6 text-purple-50">
          Calculate your true take-home pay and compare both employment types with real numbers.
        </p>
        <button
          onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
          className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg"
        >
          Calculate Take-Home Pay Now →
        </button>
        <p className="mt-6 text-sm text-purple-100">
          Free forever · 100% private · No signup required
        </p>
      </div>
    </div>
  );
};

export default Comparison1099VsW2_2025;

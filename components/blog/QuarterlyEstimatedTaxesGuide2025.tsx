import React, { useEffect, useState } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const QuarterlyEstimatedTaxesGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Quarterly Estimated Taxes 2025: Complete Guide for Freelancers & Self-Employed",
      "description": "Master quarterly estimated taxes with our comprehensive 2025 guide. Learn safe harbor rules, payment deadlines, penalty avoidance, and exact calculations for freelancers, contractors, and gig workers.",
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
      "datePublished": "2026-01-05",
      "dateModified": "2026-01-05",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/quarterly-estimated-taxes-complete-guide"
      },
      "keywords": "quarterly estimated taxes, self-employed taxes, freelance taxes, IRS Form 1040-ES, safe harbor rules, quarterly tax deadlines, estimated tax penalties, tax calculator",
      "articleBody": "Complete guide to quarterly estimated taxes for freelancers and self-employed individuals in 2025. Learn who must pay, safe harbor rules, deadlines, and strategies to avoid penalties."
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-quarterly-tax';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-quarterly-tax');
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
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-4">
          Quarterly Estimated Taxes 2025: Complete Guide for Freelancers & Self-Employed
        </h1>
        <p className="text-xl mb-6 text-blue-50">
          Master IRS Form 1040-ES, safe harbor rules, and payment deadlines to avoid penalties. Your essential guide to quarterly tax compliance in 2025.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX)}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            📊 Calculate Quarterly Taxes →
          </button>
          <button
            onClick={() => scrollToSection('deadlines')}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
          >
            View 2025 Deadlines
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <div className="text-3xl font-bold text-red-600 mb-2">$1,000+</div>
          <div className="text-gray-700 font-medium">Tax Owed Triggers Quarterly Payments</div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
          <div className="text-3xl font-bold text-green-600 mb-2">100%/110%</div>
          <div className="text-gray-700 font-medium">Safe Harbor Rules (Prior Year Tax)</div>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <div className="text-3xl font-bold text-blue-600 mb-2">4 Deadlines</div>
          <div className="text-gray-700 font-medium">Quarterly Payment Dates in 2025</div>
        </div>
      </div>

      {/* Table of Contents */}
      <nav className="bg-white border-2 border-gray-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">📑 Table of Contents</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <button onClick={() => scrollToSection('what-is')} className="text-left text-blue-600 hover:text-blue-800 hover:underline font-medium">
            1. What Are Quarterly Estimated Taxes?
          </button>
          <button onClick={() => scrollToSection('who-must-pay')} className="text-left text-blue-600 hover:text-blue-800 hover:underline font-medium">
            2. Who Must Pay Quarterly Taxes?
          </button>
          <button onClick={() => scrollToSection('safe-harbor')} className="text-left text-blue-600 hover:text-blue-800 hover:underline font-medium">
            3. Safe Harbor Rules Explained
          </button>
          <button onClick={() => scrollToSection('deadlines')} className="text-left text-blue-600 hover:text-blue-800 hover:underline font-medium">
            4. 2025 Payment Deadlines
          </button>
          <button onClick={() => scrollToSection('how-to-calculate')} className="text-left text-blue-600 hover:text-blue-800 hover:underline font-medium">
            5. How to Calculate Your Payments
          </button>
          <button onClick={() => scrollToSection('penalties')} className="text-left text-blue-600 hover:text-blue-800 hover:underline font-medium">
            6. Penalties and How to Avoid Them
          </button>
          <button onClick={() => scrollToSection('payment-methods')} className="text-left text-blue-600 hover:text-blue-800 hover:underline font-medium">
            7. How to Pay the IRS
          </button>
          <button onClick={() => scrollToSection('scenarios')} className="text-left text-blue-600 hover:text-blue-800 hover:underline font-medium">
            8. Real Freelancer Scenarios
          </button>
          <button onClick={() => scrollToSection('strategies')} className="text-left text-blue-600 hover:text-blue-800 hover:underline font-medium">
            9. Tax Planning Strategies
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-left text-blue-600 hover:text-blue-800 hover:underline font-medium">
            10. Frequently Asked Questions
          </button>
        </div>
      </nav>

      {/* Section 1: What Are Quarterly Estimated Taxes? */}
      <section id="what-is" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">What Are Quarterly Estimated Taxes?</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            <strong>Quarterly estimated taxes</strong> are advance payments you make to the IRS on income that isn't subject to withholding. If you're a freelancer, independent contractor, gig worker, or self-employed business owner, you're essentially your own employer—which means <strong>you're responsible for paying taxes throughout the year</strong>, not just at tax time.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-yellow-900 mb-2">💡 Why Quarterly Taxes Exist</h3>
            <p className="text-gray-700">
              The U.S. tax system operates on a "pay-as-you-go" basis. W-2 employees have taxes automatically withheld from each paycheck. Since freelancers don't have withholding, the IRS requires quarterly payments to collect taxes throughout the year instead of waiting until April 15.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">What Taxes Are Included?</h3>
          <p className="text-gray-700 mb-4">Your quarterly estimated tax payments cover:</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">1. Income Tax</h4>
              <p className="text-gray-700 text-sm">Federal income tax based on your tax bracket (10% to 37% in 2025)</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-900 mb-2">2. Self-Employment Tax</h4>
              <p className="text-gray-700 text-sm"><strong>15.3%</strong> (12.4% Social Security + 2.9% Medicare) on net self-employment income</p>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-red-900 mb-2">⚠️ The Self-Employment Tax Trap</h3>
            <p className="text-gray-700">
              Many new freelancers are shocked by self-employment tax. As a W-2 employee, your employer pays half of your Social Security and Medicare taxes (7.65%). When you're self-employed, <strong>you pay both halves—15.3% on top of income tax</strong>. This means a freelancer in the 22% tax bracket effectively pays ~37% in federal taxes!
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Form 1040-ES: Your Quarterly Tax Worksheet</h3>
          <p className="text-gray-700 mb-4">
            The IRS provides <strong>Form 1040-ES</strong> to help you calculate quarterly estimated tax payments. This form includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Estimated Tax Worksheet:</strong> Calculate your expected annual income, deductions, and tax liability</li>
            <li><strong>Payment Vouchers:</strong> Paper vouchers for each quarter if paying by check</li>
            <li><strong>Instructions:</strong> Detailed guidance on safe harbor rules and calculations</li>
          </ul>
        </div>
      </section>

      {/* Section 2: Who Must Pay? */}
      <section id="who-must-pay" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Who Must Pay Quarterly Estimated Taxes?</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            You must make quarterly estimated tax payments if <strong>both</strong> of these conditions apply:
          </p>

          <div className="bg-red-50 border-2 border-red-500 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-red-900 mb-4">📋 The $1,000 Rule</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-2xl mr-3">1️⃣</span>
                <div>
                  <p className="font-semibold text-gray-900">You expect to owe at least $1,000 in taxes for 2025</p>
                  <p className="text-sm text-gray-600">(After subtracting withholding and refundable credits)</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">2️⃣</span>
                <div>
                  <p className="font-semibold text-gray-900">Your withholding and refundable credits will be less than the smaller of:</p>
                  <ul className="text-sm text-gray-600 ml-6 mt-2 list-disc">
                    <li>90% of the tax shown on your 2025 tax return, OR</li>
                    <li>100% of the tax shown on your 2024 tax return (110% if AGI &gt; $150k)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Common Scenarios Requiring Quarterly Payments</h3>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="font-bold text-gray-900">✅ Freelancers & Independent Contractors</h4>
              <p className="text-gray-700 text-sm">If you receive 1099-NEC income (e.g., graphic designer, writer, consultant)</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h4 className="font-bold text-gray-900">✅ Gig Economy Workers</h4>
              <p className="text-gray-700 text-sm">Uber/Lyft drivers, DoorDash/Instacart shoppers, Airbnb hosts</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h4 className="font-bold text-gray-900">✅ Small Business Owners</h4>
              <p className="text-gray-700 text-sm">Sole proprietors, single-member LLCs, partners in partnerships</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <h4 className="font-bold text-gray-900">✅ Investors & Traders</h4>
              <p className="text-gray-700 text-sm">Significant capital gains, dividend income, or rental property income</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h4 className="font-bold text-gray-900">✅ Side Hustlers</h4>
              <p className="text-gray-700 text-sm">W-2 employee with side business earning &gt;$1,000 in profit</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-green-900 mb-2">✅ Who Doesn't Need to Pay Quarterly?</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>W-2 employees with no side income:</strong> Taxes already withheld from paycheck</li>
              <li>• <strong>Freelancers who owed $0 in taxes last year:</strong> No prior year liability (unless you expect to owe $1,000+ this year)</li>
              <li>• <strong>Part-time freelancers with sufficient W-2 withholding:</strong> If your day job withholds enough to cover freelance taxes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Safe Harbor Rules */}
      <section id="safe-harbor" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Safe Harbor Rules: Your Penalty-Free Guarantee</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            The <strong>"safe harbor"</strong> rules are your best friend for avoiding IRS penalties. If you meet safe harbor requirements, <strong>you won't be penalized for underpayment—even if you owe taxes at year-end</strong>.
          </p>

          <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">🛡️ The Three Safe Harbor Options</h3>
            <p className="text-gray-700 mb-4">You're safe from penalties if your total quarterly payments equal at least ONE of these:</p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-blue-900 mb-2">Option 1: 90% of Current Year Tax</h4>
                <p className="text-gray-700 text-sm mb-2">Pay at least <strong>90%</strong> of what you'll owe for 2025</p>
                <p className="text-gray-600 text-xs italic">⚠️ Requires accurate income projections (difficult if income varies)</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-blue-900 mb-2">Option 2: 100% of Prior Year Tax</h4>
                <p className="text-gray-700 text-sm mb-2">Pay <strong>100%</strong> of what you owed for 2024 (if AGI ≤ $150k)</p>
                <p className="text-green-600 text-xs italic">✅ Easiest! Just divide last year's tax by 4</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-blue-900 mb-2">Option 3: 110% of Prior Year Tax (High Earners)</h4>
                <p className="text-gray-700 text-sm mb-2">Pay <strong>110%</strong> of 2024 tax if AGI &gt; $150k ($75k if married filing separately)</p>
                <p className="text-gray-600 text-xs italic">📊 10% buffer for high-income taxpayers</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Which Safe Harbor Should You Use?</h3>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-4">💡 Pro Tip: Use the Prior Year Method</h4>
            <p className="text-gray-700 mb-4">
              For most freelancers, the <strong>100% prior year safe harbor</strong> is the simplest and most reliable strategy:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Look at Line 24 of your 2024 Form 1040 (total tax)</li>
              <li>Divide that number by 4</li>
              <li>Pay that amount each quarter</li>
              <li><strong>Guaranteed no penalties</strong>, even if you make 10x more this year!</li>
            </ol>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Real Example: Safe Harbor in Action</h3>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Scenario: Freelance Web Developer</h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>2024 Tax Liability:</strong> $12,000 (from Line 24 of 2024 Form 1040)</p>
              <p><strong>2025 Projected Income:</strong> Significantly higher than 2024</p>
              <p><strong>AGI:</strong> $95,000 (below $150k threshold)</p>

              <div className="mt-4 p-4 bg-green-100 rounded">
                <p className="font-bold text-green-900">Safe Harbor Calculation:</p>
                <p className="text-gray-800">100% of prior year = $12,000 ÷ 4 = <strong>$3,000 per quarter</strong></p>
              </div>

              <div className="mt-4 p-4 bg-blue-100 rounded">
                <p className="font-bold text-blue-900">Result:</p>
                <p className="text-gray-800">By paying $3,000/quarter, you're <strong>guaranteed no penalties</strong>—even if your 2025 tax bill ends up being $25,000! You'll just owe the difference ($13,000) on April 15, 2026, with no penalty.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: 2025 Deadlines */}
      <section id="deadlines" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">2025 Quarterly Tax Payment Deadlines</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Mark these dates on your calendar! Missing a deadline triggers immediate penalty interest (currently around 8% annually).
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-sm font-semibold opacity-90 mb-1">Q1 2025 (Jan 1 - Mar 31)</div>
              <div className="text-3xl font-bold mb-2">April 15, 2025</div>
              <div className="text-sm opacity-90">Covers: January, February, March income</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-sm font-semibold opacity-90 mb-1">Q2 2025 (Apr 1 - May 31)</div>
              <div className="text-3xl font-bold mb-2">June 16, 2025</div>
              <div className="text-sm opacity-90">Covers: April, May income (only 2 months!)</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-sm font-semibold opacity-90 mb-1">Q3 2025 (Jun 1 - Aug 31)</div>
              <div className="text-3xl font-bold mb-2">September 15, 2025</div>
              <div className="text-sm opacity-90">Covers: June, July, August income</div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-sm font-semibold opacity-90 mb-1">Q4 2025 (Sep 1 - Dec 31)</div>
              <div className="text-3xl font-bold mb-2">January 15, 2026</div>
              <div className="text-sm opacity-90">Covers: September, October, November, December</div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-yellow-900 mb-2">⚠️ Important Deadline Notes</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Q2 is only 2 months</strong> (Apr-May), but you still pay 25% of annual taxes</li>
              <li>• <strong>Q4 has 4 months</strong> (Sep-Dec) covered by one payment</li>
              <li>• <strong>If deadline falls on weekend/holiday,</strong> payment due next business day</li>
              <li>• <strong>Payments must be postmarked by deadline</strong> (electronic payments must process by 11:59 PM ET)</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">First-Year Freelancers: Special Timing Rules</h3>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="text-gray-700 mb-4">
              If you started freelancing mid-year, you only pay for quarters <strong>after</strong> you started:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Started January-March?</strong> Pay all 4 quarters (Apr 15, Jun 16, Sep 15, Jan 15)</li>
              <li><strong>Started April-May?</strong> Skip Q1, pay Q2-Q4 (Jun 16, Sep 15, Jan 15)</li>
              <li><strong>Started June-August?</strong> Skip Q1-Q2, pay Q3-Q4 (Sep 15, Jan 15)</li>
              <li><strong>Started September-December?</strong> Skip Q1-Q3, pay Q4 only (Jan 15)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 shadow-xl text-center">
        <h3 className="text-2xl font-bold mb-3">Stop Guessing Your Quarterly Tax Payments</h3>
        <p className="text-lg mb-6 text-purple-50">
          Our calculator instantly computes your exact quarterly payments based on income, deductions, and safe harbor rules.
        </p>
        <button
          onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX)}
          className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg"
        >
          📊 Calculate My Quarterly Taxes Now →
        </button>
      </div>

      {/* Section 5: How to Calculate */}
      <section id="how-to-calculate" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">How to Calculate Your Quarterly Payments</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            There are two main approaches: the <strong>simple safe harbor method</strong> (recommended) or the <strong>detailed projection method</strong>.
          </p>

          <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-green-900 mb-4">✅ Method 1: Simple Safe Harbor (Easiest)</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li className="font-semibold">Find your 2024 total tax
                <p className="text-sm font-normal ml-6 mt-1">Look at Line 24 of your 2024 Form 1040</p>
              </li>
              <li className="font-semibold">Apply the safe harbor rule
                <p className="text-sm font-normal ml-6 mt-1">Use 100% if AGI ≤ $150k, or 110% if AGI &gt; $150k</p>
              </li>
              <li className="font-semibold">Divide by 4
                <p className="text-sm font-normal ml-6 mt-1">Example: $12,000 total tax ÷ 4 = $3,000 per quarter</p>
              </li>
              <li className="font-semibold">Pay that amount each quarter
                <p className="text-sm font-normal ml-6 mt-1">Same payment amount for all 4 deadlines</p>
              </li>
            </ol>

            <div className="mt-6 p-4 bg-white rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Example Calculation:</h4>
              <div className="space-y-1 text-gray-700">
                <p>2024 Total Tax (Line 24): <strong>$15,600</strong></p>
                <p>AGI: <strong>$82,000</strong> (below $150k threshold)</p>
                <p>Safe Harbor: <strong>100%</strong> of prior year = $15,600</p>
                <p className="text-green-700 font-bold">Quarterly Payment: $15,600 ÷ 4 = <strong>$3,900</strong></p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">📊 Method 2: Detailed Projection (More Accurate)</h3>
            <p className="text-gray-700 mb-4">Use this if you want to pay based on actual 2025 income (requires estimation):</p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Step 1: Estimate Your 2025 Gross Income</h4>
                <p className="text-sm text-gray-700">Add up all expected income sources: freelance earnings, side gigs, investment income, etc.</p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Step 2: Subtract Business Deductions</h4>
                <p className="text-sm text-gray-700 mb-2">Common deductions for freelancers:</p>
                <ul className="text-xs text-gray-600 list-disc list-inside ml-4 space-y-1">
                  <li>Home office deduction (simplified: $5/sq ft, max $1,500)</li>
                  <li>Business expenses (software, supplies, equipment)</li>
                  <li>Health insurance premiums (self-employed deduction)</li>
                  <li>Retirement contributions (SEP-IRA, Solo 401k)</li>
                  <li>Vehicle expenses (standard mileage: $0.67/mile in 2025)</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Step 3: Calculate Self-Employment Tax</h4>
                <p className="text-sm text-gray-700">Net self-employment income × 92.35% × 15.3%</p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Step 4: Subtract Standard/Itemized Deduction</h4>
                <p className="text-sm text-gray-700">2025 standard deduction: $15,000 (single), $30,000 (married filing jointly)</p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Step 5: Apply Tax Brackets</h4>
                <p className="text-sm text-gray-700">Calculate income tax using 2025 tax brackets</p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Step 6: Add Income Tax + Self-Employment Tax</h4>
                <p className="text-sm text-gray-700">This is your total estimated tax liability</p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Step 7: Divide by 4 for Quarterly Amount</h4>
                <p className="text-sm text-gray-700">Pay this amount each quarter to meet the 90% safe harbor</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-purple-900 mb-2">💻 Use Our Calculator to Automate This</h3>
            <p className="text-gray-700 mb-4">
              Our <strong>Quarterly Estimated Tax Calculator</strong> does all these calculations automatically. Just enter your income and deductions, and we'll compute your exact quarterly payments using both safe harbor methods.
            </p>
            <button
              onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Try the Calculator →
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Penalties */}
      <section id="penalties" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Penalties and How to Avoid Them</h2>

        <div className="prose prose-lg max-w-none">
          <div className="bg-red-50 border-2 border-red-500 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-red-900 mb-4">💰 Underpayment Penalty Explained</h3>
            <p className="text-gray-700 mb-4">
              If you don't pay enough quarterly taxes and don't meet safe harbor, the IRS charges an <strong>underpayment penalty</strong>:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Penalty rate:</strong> Federal short-term rate + 3% (currently ~8% annual rate)</li>
              <li>• <strong>Calculated quarterly:</strong> Penalty accrues for each quarter you underpaid</li>
              <li>• <strong>Not deductible:</strong> You can't deduct this penalty on your tax return</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">How to Avoid Penalties</h3>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-green-500 pl-4 py-3 bg-green-50">
              <h4 className="font-bold text-gray-900">1. Meet Safe Harbor Requirements</h4>
              <p className="text-gray-700 text-sm">Pay 100%/110% of prior year tax OR 90% of current year tax</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50">
              <h4 className="font-bold text-gray-900">2. Pay on Time</h4>
              <p className="text-gray-700 text-sm">Submit payments by quarterly deadlines (late payments accrue penalty immediately)</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50">
              <h4 className="font-bold text-gray-900">3. Adjust Mid-Year if Income Spikes</h4>
              <p className="text-gray-700 text-sm">If Q3/Q4 income is much higher, increase those quarterly payments to hit 90% threshold</p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4 py-3 bg-yellow-50">
              <h4 className="font-bold text-gray-900">4. Use Annualized Income Method</h4>
              <p className="text-gray-700 text-sm">If income varies drastically by quarter, use Form 2210 Schedule AI to calculate based on actual quarterly income</p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">What Happens If You Miss a Payment?</h3>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="text-gray-700 mb-4">If you miss a quarterly deadline:</p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Pay ASAP to minimize penalty:</strong> Penalty accrues daily until paid</li>
              <li><strong>Catch up in next quarter:</strong> You can make up the difference in future payments</li>
              <li><strong>File Form 2210 with tax return:</strong> IRS calculates exact penalty (usually $50-500 depending on shortfall)</li>
              <li><strong>Request penalty waiver:</strong> If you had reasonable cause (serious illness, natural disaster), submit Form 2210 with explanation</li>
            </ol>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-yellow-900 mb-2">⚠️ First-Time Penalty Abatement</h3>
            <p className="text-gray-700">
              If this is your <strong>first time</strong> incurring an underpayment penalty and you have a clean tax record, the IRS may waive the penalty under <strong>First-Time Penalty Abatement (FTA)</strong>. Call the IRS or submit Form 843 to request this relief.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Payment Methods */}
      <section id="payment-methods" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">How to Pay Your Quarterly Taxes</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            The IRS offers multiple convenient payment methods. <strong>Electronic payments are fastest and provide instant confirmation.</strong>
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-green-900 mb-3">💳 1. IRS Direct Pay (FREE - Recommended)</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Website:</strong> <a href="https://www.irs.gov/directpay" className="text-blue-600 hover:underline" target="_blank" rel="noopener">irs.gov/directpay</a></li>
                <li>• <strong>Payment type:</strong> Direct transfer from checking/savings account</li>
                <li>• <strong>Fee:</strong> FREE</li>
                <li>• <strong>Confirmation:</strong> Instant email confirmation</li>
                <li>• <strong>Processing:</strong> Same-day if submitted before cutoff (8 PM ET)</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-3">💻 2. EFTPS (Electronic Federal Tax Payment System)</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Website:</strong> <a href="https://www.eftps.gov" className="text-blue-600 hover:underline" target="_blank" rel="noopener">eftps.gov</a></li>
                <li>• <strong>Best for:</strong> Recurring payments (schedule all 4 quarters at once)</li>
                <li>• <strong>Fee:</strong> FREE</li>
                <li>• <strong>Setup:</strong> Requires enrollment (1-2 weeks for PIN to arrive by mail)</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-purple-900 mb-3">💳 3. Credit/Debit Card</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Providers:</strong> payUSAtax, Pay1040, ACI Payments</li>
                <li>• <strong>Fee:</strong> ~1.85-1.99% of payment (debit) or 1.85-1.99% (credit)</li>
                <li>• <strong>Benefit:</strong> Earn credit card rewards (but fee often exceeds rewards)</li>
              </ul>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">✉️ 4. Mail a Check</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Form:</strong> Use Form 1040-ES payment voucher</li>
                <li>• <strong>Payable to:</strong> "United States Treasury"</li>
                <li>• <strong>Memo:</strong> Write your SSN and "2025 Form 1040-ES"</li>
                <li>• <strong>Mail to:</strong> Address listed in Form 1040-ES instructions (varies by state)</li>
                <li>• <strong>Postmark:</strong> Must be postmarked by deadline</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-2">✅ Pro Tip: Set Up Auto-Payments</h3>
            <p className="text-gray-700">
              Use <strong>EFTPS</strong> to schedule all 4 quarterly payments at the beginning of the year. You'll never miss a deadline, and payments automatically withdraw on the due dates.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Real Scenarios */}
      <section id="scenarios" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Real Freelancer Scenarios</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">See how quarterly taxes work in practice with these real-world examples.</p>

          <div className="space-y-6">
            {/* Scenario 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">💼 Scenario 1: Full-Time Freelance Writer</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700">Profile:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Single, no dependents</li>
                    <li>• 2024 total tax: $8,500</li>
                    <li>• 2025 projected income: $65,000</li>
                    <li>• Business expenses: $8,000</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">Tax Calculation:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Net income: $57,000</li>
                    <li>• Self-employment tax: ~$8,050</li>
                    <li>• Income tax: ~$4,200</li>
                    <li>• <strong>Total 2025 tax: ~$12,250</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-gray-900 mb-2">Safe Harbor Strategy:</p>
                <p className="text-gray-700 text-sm mb-2">Use <strong>100% prior year method</strong>: $8,500 ÷ 4 = <strong className="text-green-600">$2,125/quarter</strong></p>
                <p className="text-xs text-gray-600">Even though 2025 tax will be $12,250, paying $8,500 total meets safe harbor (100% of prior year). The $3,750 difference is due April 15, 2026, with no penalty.</p>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-300 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 mb-4">🎨 Scenario 2: Side Hustle Graphic Designer (W-2 + Freelance)</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700">Profile:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Married filing jointly</li>
                    <li>• W-2 income: $75,000 (taxes withheld)</li>
                    <li>• Side freelance income: $25,000</li>
                    <li>• Business expenses: $3,000</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">Tax Calculation:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Net freelance income: $22,000</li>
                    <li>• Self-employment tax: ~$3,111</li>
                    <li>• Additional income tax: ~$2,640 (12% bracket)</li>
                    <li>• <strong>Additional tax owed: ~$5,751</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-gray-900 mb-2">Payment Strategy:</p>
                <p className="text-gray-700 text-sm mb-2">Pay quarterly: $5,751 ÷ 4 = <strong className="text-green-600">$1,438/quarter</strong></p>
                <p className="text-xs text-gray-600"><strong>Alternative:</strong> Increase W-2 withholding by $479/month to cover freelance taxes (use Form W-4 to adjust). This eliminates the need for quarterly payments!</p>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-900 mb-4">🚗 Scenario 3: Uber Driver (Variable Income)</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700">Profile:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Single parent, 1 child</li>
                    <li>• 2024 total tax: $2,800</li>
                    <li>• 2025 gross income: $48,000</li>
                    <li>• Mileage deduction: $18,000 (27,000 mi × $0.67)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">Tax Calculation:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Net income: $30,000</li>
                    <li>• Self-employment tax: ~$4,239</li>
                    <li>• Income tax: ~$800 (after standard deduction & CTC)</li>
                    <li>• <strong>Total 2025 tax: ~$5,039</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-gray-900 mb-2">Safe Harbor Strategy:</p>
                <p className="text-gray-700 text-sm mb-2">Use <strong>100% prior year method</strong>: $2,800 ÷ 4 = <strong className="text-green-600">$700/quarter</strong></p>
                <p className="text-xs text-gray-600">Safe harbor protects from penalties. Owe the $2,239 difference on April 15, 2026.</p>
              </div>
            </div>

            {/* Scenario 4 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 mb-4">💻 Scenario 4: High-Income Consultant</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700">Profile:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Married filing jointly</li>
                    <li>• 2024 AGI: $180,000</li>
                    <li>• 2024 total tax: $32,000</li>
                    <li>• 2025 projected income: $220,000</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">Tax Calculation:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 2025 estimated tax: ~$42,000</li>
                    <li>• AGI &gt; $150k → <strong>110% rule applies</strong></li>
                    <li>• Safe harbor: 110% × $32,000 = $35,200</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-gray-900 mb-2">Payment Strategy:</p>
                <p className="text-gray-700 text-sm mb-2">Pay quarterly: $35,200 ÷ 4 = <strong className="text-green-600">$8,800/quarter</strong></p>
                <p className="text-xs text-gray-600">110% safe harbor ensures no penalties. Owe the $6,800 difference ($42,000 - $35,200) on April 15, 2026.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Strategies */}
      <section id="strategies" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Tax Planning Strategies for Freelancers</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Smart tax planning can reduce your quarterly payments and overall tax burden. Here are proven strategies:
          </p>

          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-green-900 mb-3">1. Maximize Business Deductions</h3>
              <p className="text-gray-700 mb-3">Every dollar of deductions reduces both income tax <strong>and</strong> self-employment tax (saving ~37% total).</p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Home office:</strong> $5/sq ft (max $1,500) or actual expense method</li>
                <li>• <strong>Equipment:</strong> Section 179 deduction (up to $1,220,000 in 2025)</li>
                <li>• <strong>Software & subscriptions:</strong> Adobe, Microsoft 365, project management tools</li>
                <li>• <strong>Marketing:</strong> Website hosting, ads, business cards</li>
                <li>• <strong>Education:</strong> Courses, conferences, books related to your business</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-3">2. Fund a Retirement Account</h3>
              <p className="text-gray-700 mb-3">Retirement contributions are deductible <strong>above-the-line</strong> (reduce AGI):</p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>SEP-IRA:</strong> Contribute up to 25% of net self-employment income (max $69,000 in 2025)</li>
                <li>• <strong>Solo 401(k):</strong> $23,500 employee deferral + 25% employer contribution (max $69,000)</li>
                <li>• <strong>Traditional IRA:</strong> $7,000 ($8,000 if age 50+)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">Example: $20,000 SEP-IRA contribution saves ~$7,400 in taxes (37% rate)</p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-purple-900 mb-3">3. Deduct Health Insurance Premiums</h3>
              <p className="text-gray-700 mb-3">Self-employed health insurance is 100% deductible above-the-line (even if you don't itemize).</p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Covers:</strong> Medical, dental, vision, long-term care premiums</li>
                <li>• <strong>Applies to:</strong> You, your spouse, and dependents</li>
                <li>• <strong>Limitation:</strong> Can't exceed net self-employment income</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">Example: $8,400/year in premiums saves ~$3,108 in taxes</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">4. Track Mileage Religiously</h3>
              <p className="text-gray-700 mb-3">Business mileage deduction: <strong>$0.67/mile in 2025</strong></p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Deductible trips:</strong> Client meetings, co-working spaces, supply runs, networking events</li>
                <li>• <strong>Not deductible:</strong> Commute from home to regular workplace</li>
                <li>• <strong>Best apps:</strong> MileIQ, Everlance, QuickBooks Self-Employed</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">Example: 15,000 business miles × $0.67 = $10,050 deduction (saves ~$3,719 in taxes)</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-900 mb-3">5. Time Large Expenses Strategically</h3>
              <p className="text-gray-700 mb-3">If you're close to a safe harbor threshold, timing matters:</p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>High-income year?</strong> Accelerate deductions (buy equipment in December instead of January)</li>
                <li>• <strong>Low-income year?</strong> Defer income to next year, accelerate deductions this year</li>
                <li>• <strong>Section 179:</strong> Deduct full cost of equipment purchased and placed in service by Dec 31</li>
              </ul>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">6. Consider Quarterly Income Shifting</h3>
              <p className="text-gray-700 mb-3">If income varies wildly, use the <strong>annualized income method</strong> (Form 2210 Schedule AI):</p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>How it works:</strong> Calculate taxes based on <em>actual</em> income earned each quarter, not annual average</li>
                <li>• <strong>Best for:</strong> Seasonal businesses, large Q4 contracts, uneven income streams</li>
                <li>• <strong>Benefit:</strong> Pay less in slow quarters, more in busy quarters (better cash flow)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-500 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Pro Tip: Work with a Tax Professional</h3>
            <p className="text-gray-700">
              If your freelance income exceeds $75,000/year, the cost of a CPA or Enrolled Agent (~$500-2,000) often pays for itself through tax savings. They can identify deductions you're missing and optimize your quarterly payment strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Related Tools Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">📊 Related Freelancer Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <button
            onClick={() => onNavigate?.(ToolType.CHILD_TAX_CREDIT)}
            className="bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 p-6 rounded-lg text-left transition-colors group"
          >
            <div className="text-3xl mb-3">👶</div>
            <h3 className="font-bold text-blue-900 mb-2 group-hover:text-blue-700">Child Tax Credit Calculator</h3>
            <p className="text-sm text-gray-600">Calculate your $2,000 CTC and up to $1,700 refundable ACTC</p>
          </button>

          <button
            onClick={() => onNavigate?.(ToolType.ACA_SUBSIDY)}
            className="bg-green-50 hover:bg-green-100 border-2 border-green-200 p-6 rounded-lg text-left transition-colors group"
          >
            <div className="text-3xl mb-3">🏥</div>
            <h3 className="font-bold text-green-900 mb-2 group-hover:text-green-700">ACA Health Subsidy Calculator</h3>
            <p className="text-sm text-gray-600">Estimate Premium Tax Credits for Marketplace health insurance</p>
          </button>

          <button
            onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
            className="bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 p-6 rounded-lg text-left transition-colors group"
          >
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold text-purple-900 mb-2 group-hover:text-purple-700">Freelance Profit Calculator</h3>
            <p className="text-sm text-gray-600">Track income, expenses, and net profit for tax planning</p>
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">❓ Frequently Asked Questions</h2>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(0)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-900">What happens if I don't pay quarterly taxes?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 0 ? '−' : '+'}</span>
            </button>
            {openFAQ === 0 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700">
                  If you don't pay quarterly taxes and owe more than $1,000 at tax time, you'll face an <strong>underpayment penalty</strong> (currently ~8% annual interest rate). The penalty accrues for each quarter you underpaid. You'll also owe the full tax amount on April 15, which can be a large, unexpected expense. Additionally, if you consistently don't pay quarterly taxes, the IRS may send warnings or initiate collection actions.
                </p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(1)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-900">Can I pay all 4 quarters at once instead of spreading them out?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 1 ? '−' : '+'}</span>
            </button>
            {openFAQ === 1 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-3">
                  Yes, you <strong>can</strong> pay all 4 quarters upfront, but <strong>it doesn't eliminate penalties</strong> for the later quarters. The IRS calculates penalties based on when each payment was <em>due</em>, not when it was made.
                </p>
                <p className="text-gray-700">
                  <strong>Example:</strong> If you pay $12,000 on April 15 to cover all 4 quarters ($3,000 each), the IRS will still assess penalties for Q2, Q3, and Q4 underpayments because those amounts weren't paid by their respective deadlines (June 16, Sep 15, Jan 15). <strong>Best practice:</strong> Pay each quarter on time or use EFTPS to schedule future payments.
                </p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(2)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-900">Do I need to pay state quarterly taxes too?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 2 ? '−' : '+'}</span>
            </button>
            {openFAQ === 2 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-3">
                  <strong>Yes, in most states.</strong> If your state has income tax (43 states + DC do), you typically need to make quarterly estimated payments to your state tax agency in addition to the IRS.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>State deadlines:</strong> Usually match federal deadlines (Apr 15, Jun 16, Sep 15, Jan 15)</li>
                  <li>• <strong>Calculation:</strong> Similar to federal—typically 90% of current year or 100%/110% of prior year</li>
                  <li>• <strong>Payment methods:</strong> Most states offer online payment portals</li>
                  <li>• <strong>No state income tax:</strong> AK, FL, NV, NH, SD, TN, TX, WA, WY (no quarterly payments needed)</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm">
                  Check your state's Department of Revenue website for specific requirements and forms.
                </p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(3)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-900">I started freelancing in July. Do I owe Q1 and Q2 payments?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 3 ? '−' : '+'}</span>
            </button>
            {openFAQ === 3 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-3">
                  <strong>No.</strong> You only owe quarterly taxes for periods when you had self-employment income. If you started freelancing in July:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Q1 (Jan-Mar):</strong> No payment needed (no freelance income)</li>
                  <li>• <strong>Q2 (Apr-May):</strong> No payment needed (no freelance income)</li>
                  <li>• <strong>Q3 (Jun-Aug):</strong> Payment due Sep 15 (covers July-August income)</li>
                  <li>• <strong>Q4 (Sep-Dec):</strong> Payment due Jan 15 (covers Sep-Dec income)</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Calculate your Q3 and Q4 payments based on your actual freelance income during those periods. You can use the annualized income method (Form 2210 Schedule AI) for precision.
                </p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(4)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-900">Can I increase my W-4 withholding instead of paying quarterly taxes?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 4 ? '−' : '+'}</span>
            </button>
            {openFAQ === 4 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-3">
                  <strong>Yes! This is a great strategy if you have a W-2 job and side freelance income.</strong> The IRS doesn't care <em>how</em> you pay taxes throughout the year—only that enough is withheld/paid in total.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>How to do it:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Calculate your total freelance tax liability for the year</li>
                  <li>Divide by number of remaining paychecks</li>
                  <li>Submit a new Form W-4 to your employer with additional withholding amount (Line 4c)</li>
                </ol>
                <p className="text-gray-700 mt-3">
                  <strong>Example:</strong> You owe $6,000 in freelance taxes. Instead of paying $1,500/quarter, you increase your W-4 withholding by $500/month (if paid monthly) or $231/paycheck (if paid biweekly). This eliminates the need for quarterly payments entirely!
                </p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(5)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-900">What if my income varies drastically from quarter to quarter?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 5 ? '−' : '+'}</span>
            </button>
            {openFAQ === 5 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-3">
                  If your income is highly seasonal or inconsistent, you have two options:
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Option 1: Use Safe Harbor (Simplest)</h4>
                    <p className="text-gray-700 text-sm">Pay equal amounts each quarter based on 100%/110% of prior year tax. This protects you from penalties regardless of income timing. You'll settle up on April 15.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-900 mb-2">Option 2: Annualized Income Method (Most Accurate)</h4>
                    <p className="text-gray-700 text-sm mb-2">Calculate taxes based on actual income earned each quarter (Form 2210 Schedule AI). This lets you pay less in slow quarters, more in busy quarters.</p>
                    <p className="text-gray-600 text-xs"><strong>Example:</strong> Seasonal tax preparer who earns 80% of income in Q1 can pay most taxes in Q1, minimal in Q2-Q4.</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-3 text-sm">
                  The annualized method requires more tracking but optimizes cash flow. Many tax software programs (TurboTax, TaxAct) can calculate this for you when filing.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 shadow-xl text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Calculate Your Quarterly Taxes?</h2>
        <p className="text-xl mb-6 text-blue-50">
          Stop worrying about IRS penalties. Get your exact quarterly payment amounts in under 2 minutes.
        </p>
        <button
          onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX)}
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
        >
          📊 Calculate Quarterly Taxes Now →
        </button>
        <p className="mt-6 text-sm text-blue-100">
          ✅ Free forever · ✅ No signup required · ✅ 100% private (we don't store your data)
        </p>
      </div>
    </div>
  );
};

export default QuarterlyEstimatedTaxesGuide2025;

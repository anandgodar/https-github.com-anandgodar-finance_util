'use client';

import React, { useEffect, useState } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const TaxDeductionsFreelancers2025: React.FC<BlogProps> = ({ onNavigate }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Tax Deductions for Freelancers 2025: Complete Guide to Maximize Your Write-Offs",
      "description": "Discover every tax deduction available to freelancers in 2025. Learn about home office deduction ($5/sq ft simplified method), mileage ($0.67/mile), Section 179 equipment expensing, health insurance, retirement contributions, and business expense strategies to save thousands.",
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
        "@id": "https://quantcurb.com/blog/tax-deductions-freelancers-2025"
      },
      "keywords": "freelancer tax deductions 2025, home office deduction, mileage deduction, Section 179, business expense deductions, self-employed tax write-offs, health insurance deduction, retirement deductions, freelance tax savings",
      "articleBody": "Complete guide to tax deductions for freelancers in 2025. Maximize your write-offs with home office deduction, mileage tracking, equipment purchases, health insurance, retirement contributions, and strategic business expense planning."
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-tax-deductions-freelancers';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-tax-deductions-freelancers');
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
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-4">
          Tax Deductions for Freelancers 2025: Complete Guide to Maximize Your Write-Offs
        </h1>
        <p className="text-xl mb-6 text-green-50">
          Discover every deduction available to freelancers and self-employed professionals. Learn how to save thousands with home office, mileage, equipment, health insurance, and retirement deductions.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg"
          >
            Calculate My Deductions
          </button>
          <button
            onClick={() => scrollToSection('deduction-calculator')}
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
          >
            View Savings Examples
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
          <div className="text-3xl font-bold text-green-600 mb-2">$0.67</div>
          <div className="text-gray-700 font-medium">Standard Mileage Rate per Mile (2025)</div>
        </div>
        <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-lg">
          <div className="text-3xl font-bold text-teal-600 mb-2">$5/sq ft</div>
          <div className="text-gray-700 font-medium">Simplified Home Office Deduction (Max $1,500)</div>
        </div>
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-lg">
          <div className="text-3xl font-bold text-emerald-600 mb-2">$1.22M</div>
          <div className="text-gray-700 font-medium">Section 179 Equipment Deduction Limit 2025</div>
        </div>
      </div>

      {/* Table of Contents */}
      <nav className="bg-white border-2 border-gray-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Table of Contents</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <button onClick={() => scrollToSection('home-office')} className="text-left text-green-600 hover:text-green-800 hover:underline font-medium">
            1. Home Office Deduction ($5/sq ft)
          </button>
          <button onClick={() => scrollToSection('mileage')} className="text-left text-green-600 hover:text-green-800 hover:underline font-medium">
            2. Mileage & Vehicle Expenses ($0.67/mile)
          </button>
          <button onClick={() => scrollToSection('section-179')} className="text-left text-green-600 hover:text-green-800 hover:underline font-medium">
            3. Section 179 Equipment Deduction
          </button>
          <button onClick={() => scrollToSection('software-subscriptions')} className="text-left text-green-600 hover:text-green-800 hover:underline font-medium">
            4. Software & Subscription Deductions
          </button>
          <button onClick={() => scrollToSection('health-insurance')} className="text-left text-green-600 hover:text-green-800 hover:underline font-medium">
            5. Health Insurance Deduction
          </button>
          <button onClick={() => scrollToSection('retirement')} className="text-left text-green-600 hover:text-green-800 hover:underline font-medium">
            6. Retirement Contribution Deductions
          </button>
          <button onClick={() => scrollToSection('business-expenses')} className="text-left text-green-600 hover:text-green-800 hover:underline font-medium">
            7. Common Business Expense Deductions
          </button>
          <button onClick={() => scrollToSection('strategies')} className="text-left text-green-600 hover:text-green-800 hover:underline font-medium">
            8. Tax-Saving Strategies
          </button>
          <button onClick={() => scrollToSection('scenarios')} className="text-left text-green-600 hover:text-green-800 hover:underline font-medium">
            9. Real Freelancer Scenarios
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-left text-green-600 hover:text-green-800 hover:underline font-medium">
            10. Frequently Asked Questions
          </button>
        </div>
      </nav>

      {/* Section 1: Home Office Deduction */}
      <section id="home-office" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">1. Home Office Deduction ($5/sq ft Simplified Method)</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            The <strong>home office deduction</strong> is one of the most valuable tax breaks for freelancers who work from home. You can choose between two methods: the <strong>simplified method ($5 per square foot)</strong> or the <strong>regular method (actual expenses)</strong>.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-green-900 mb-2">Simplified Method (Easiest)</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Rate:</strong> $5 per square foot of home office space</li>
              <li>• <strong>Maximum:</strong> 300 sq ft = $1,500 maximum deduction</li>
              <li>• <strong>No tracking required:</strong> No need to track actual expenses or calculate percentages</li>
              <li>• <strong>Best for:</strong> Small home offices or freelancers who don't want to track detailed expenses</li>
            </ul>
          </div>

          <div className="bg-teal-50 border-2 border-teal-300 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-teal-900 mb-4">Example: Simplified Method Calculation</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-white p-3 rounded">
                <span className="text-gray-700">Home office size:</span>
                <span className="font-bold">200 sq ft</span>
              </div>
              <div className="flex justify-between items-center bg-white p-3 rounded">
                <span className="text-gray-700">Deduction rate:</span>
                <span className="font-bold">$5 per sq ft</span>
              </div>
              <div className="flex justify-between items-center bg-teal-100 p-3 rounded border-2 border-teal-400">
                <span className="font-bold text-teal-900">Annual deduction:</span>
                <span className="font-bold text-teal-700">$1,000</span>
              </div>
              <div className="flex justify-between items-center bg-green-100 p-3 rounded">
                <span className="text-gray-700">Tax savings (37% bracket):</span>
                <span className="font-bold text-green-700">~$370</span>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Regular Method (Actual Expenses)</h3>

          <p className="text-gray-700 mb-4">
            The <strong>regular method</strong> allows you to deduct a percentage of your actual home expenses based on the percentage of your home used for business. This often yields a larger deduction than the simplified method.
          </p>

          <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-lg mb-6">
            <h4 className="font-bold text-yellow-900 mb-3">Deductible Expenses (Regular Method):</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Direct Expenses (100%):</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Office furniture</li>
                  <li>• Office paint/repairs</li>
                  <li>• Dedicated phone line</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Indirect Expenses (% of home):</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Mortgage interest or rent</li>
                  <li>• Property taxes</li>
                  <li>• Utilities (electric, gas, water)</li>
                  <li>• Homeowners insurance</li>
                  <li>• HOA fees</li>
                  <li>• Home repairs & maintenance</li>
                  <li>• Depreciation (if you own)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-300 p-6 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-4 text-lg">Example: Regular Method vs Simplified Method</h4>
            <div className="space-y-3 text-gray-700">
              <p className="font-semibold text-gray-900">Scenario: 250 sq ft office in 2,000 sq ft home (12.5% business use)</p>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold text-green-900 mb-2">Annual Home Expenses:</p>
                <div className="text-sm space-y-1">
                  <p>Mortgage interest: $12,000</p>
                  <p>Property taxes: $6,000</p>
                  <p>Utilities: $3,600</p>
                  <p>Insurance: $1,800</p>
                  <p>Repairs: $2,400</p>
                  <p><strong>Total: $25,800</strong></p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-100 p-4 rounded border-2 border-green-400">
                  <p className="font-bold text-green-900 mb-2">Simplified Method:</p>
                  <p className="text-sm">250 sq ft × $5 = <strong className="text-green-700">$1,250</strong></p>
                </div>
                <div className="bg-green-100 p-4 rounded border-2 border-green-400">
                  <p className="font-bold text-green-900 mb-2">Regular Method:</p>
                  <p className="text-sm">$25,800 × 12.5% = <strong className="text-green-700">$3,225</strong></p>
                </div>
              </div>

              <div className="bg-green-600 text-white p-4 rounded font-bold text-center">
                Regular Method Saves $1,975 More in Deductions!
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-red-900 mb-2">Exclusive Use Requirement</h3>
            <p className="text-gray-700">
              Your home office must be used <strong>exclusively and regularly</strong> for business. A kitchen table used for both meals and work doesn't qualify. However, a spare bedroom converted to an office does. The IRS is strict on this rule.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Mileage & Vehicle Expenses */}
      <section id="mileage" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">2. Mileage & Vehicle Expenses ($0.67/mile in 2025)</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            If you drive for business, you can deduct vehicle expenses using either the <strong>standard mileage rate ($0.67/mile in 2025)</strong> or the <strong>actual expense method</strong>.
          </p>

          <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">2025 Standard Mileage Rate: $0.67/mile</h3>
            <p className="text-gray-700 mb-4">
              The IRS increased the standard mileage rate to <strong>$0.67 per mile</strong> for 2025 (up from $0.655 in 2024) to account for rising fuel and vehicle costs.
            </p>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-blue-900 mb-3">Deductible Business Miles:</h4>
              <ul className="text-gray-700 space-y-2">
                <li>✅ Driving to client meetings or job sites</li>
                <li>✅ Travel between multiple work locations</li>
                <li>✅ Running business errands (post office, bank, supplies)</li>
                <li>✅ Driving to co-working spaces or temporary work locations</li>
                <li>✅ Attending networking events or conferences</li>
              </ul>
            </div>

            <div className="bg-red-50 p-5 rounded-lg mt-4">
              <h4 className="font-bold text-red-900 mb-3">NOT Deductible:</h4>
              <ul className="text-gray-700 space-y-2">
                <li>❌ Commuting from home to your regular workplace</li>
                <li>❌ Personal errands or trips</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-900 mb-4 text-lg">Real Scenario: Freelance Photographer</h4>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-2"><strong>Annual business mileage:</strong></p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Client shoots: 8,000 miles</li>
                  <li>• Equipment shopping: 1,200 miles</li>
                  <li>• Networking events: 800 miles</li>
                  <li>• <strong>Total: 10,000 business miles</strong></li>
                </ul>
              </div>

              <div className="flex justify-between items-center bg-blue-100 p-4 rounded border-2 border-blue-400">
                <span className="font-bold text-blue-900">Mileage deduction:</span>
                <span className="font-bold text-blue-700">10,000 × $0.67 = $6,700</span>
              </div>

              <div className="flex justify-between items-center bg-green-100 p-4 rounded">
                <span className="text-gray-700">Tax savings (22% + 15.3% SE tax):</span>
                <span className="font-bold text-green-700">~$2,497</span>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Actual Expense Method</h3>

          <p className="text-gray-700 mb-4">
            Instead of the standard mileage rate, you can deduct the <strong>actual percentage of vehicle expenses</strong> based on business use percentage.
          </p>

          <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-lg">
            <h4 className="font-bold text-yellow-900 mb-3">Deductible Actual Expenses:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Gas and oil</li>
                  <li>• Repairs and maintenance</li>
                  <li>• Tires</li>
                  <li>• Insurance</li>
                </ul>
              </div>
              <div>
                <ul className="text-gray-700 space-y-1">
                  <li>• License and registration</li>
                  <li>• Depreciation</li>
                  <li>• Lease payments</li>
                  <li>• Parking fees & tolls (100%)</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 mt-4 text-sm">
              <strong>Note:</strong> You must track ALL vehicle expenses and calculate business use percentage. This method requires more recordkeeping but can yield higher deductions for expensive vehicles.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-green-900 mb-2">Pro Tip: Use Mileage Tracking Apps</h3>
            <p className="text-gray-700 mb-3">
              Apps like <strong>MileIQ, Everlance, or QuickBooks Self-Employed</strong> automatically track your drives using GPS and categorize them as business or personal. This creates an IRS-compliant mileage log with zero manual effort.
            </p>
            <p className="text-sm text-gray-600">
              The IRS requires contemporaneous records. Retroactively creating a mileage log is a red flag for audits.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <div id="deduction-calculator" className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-8 shadow-xl text-center">
        <h3 className="text-2xl font-bold mb-3">Calculate Your Total Tax Deductions</h3>
        <p className="text-lg mb-6 text-green-50">
          Track all your deductions and see exactly how much you'll save on taxes in 2025.
        </p>
        <button
          onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
          className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
        >
          Calculate My Tax Savings
        </button>
      </div>

      {/* Section 3: Section 179 Equipment Deduction */}
      <section id="section-179" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">3. Section 179 Equipment Deduction (Up to $1.22M in 2025)</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            <strong>Section 179</strong> allows you to deduct the <strong>full purchase price of qualifying equipment</strong> in the year you buy it, rather than depreciating it over several years. For 2025, you can deduct up to <strong>$1,220,000</strong> in equipment purchases.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-green-900 mb-2">2025 Section 179 Limits</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Maximum deduction:</strong> $1,220,000</li>
              <li>• <strong>Phase-out threshold:</strong> Begins at $3,050,000 in equipment purchases</li>
              <li>• <strong>Bonus depreciation:</strong> 60% in 2025 (down from 80% in 2024)</li>
              <li>• <strong>Key requirement:</strong> Equipment must be purchased AND placed in service by Dec 31, 2025</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">What Qualifies for Section 179?</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-3">Qualifying Property:</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✅ Computers & laptops</li>
                <li>✅ Office furniture & desks</li>
                <li>✅ Business vehicles (with limits)</li>
                <li>✅ Machinery & equipment</li>
                <li>✅ Camera equipment</li>
                <li>✅ Software (off-the-shelf)</li>
                <li>✅ HVAC & security systems</li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg">
              <h4 className="font-bold text-red-900 mb-3">Does NOT Qualify:</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>❌ Real estate / buildings</li>
                <li>❌ Land & land improvements</li>
                <li>❌ Inventory for resale</li>
                <li>❌ Property used outside US</li>
                <li>❌ Property received as gift/inheritance</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 p-6 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-4 text-lg">Example: Freelance Video Editor</h4>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-2"><strong>Equipment purchased in December 2025:</strong></p>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>MacBook Pro M4 Max:</span>
                    <span>$4,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sony A7S III camera:</span>
                    <span>$3,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DJI Ronin gimbal:</span>
                    <span>$850</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Office desk & chair:</span>
                    <span>$1,200</span>
                  </div>
                  <div className="flex justify-between border-t-2 border-gray-300 pt-2 mt-2 font-bold text-gray-900">
                    <span>Total equipment:</span>
                    <span>$10,050</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center bg-green-100 p-4 rounded border-2 border-green-400">
                <span className="font-bold text-green-900">Section 179 deduction (2025):</span>
                <span className="font-bold text-green-700">$10,050</span>
              </div>

              <div className="flex justify-between items-center bg-blue-100 p-4 rounded">
                <span className="text-gray-700">Tax savings (22% + 15.3% SE tax):</span>
                <span className="font-bold text-blue-700">~$3,749</span>
              </div>

              <div className="bg-yellow-50 p-4 rounded border-2 border-yellow-300">
                <p className="text-yellow-900 font-semibold mb-2">Without Section 179:</p>
                <p className="text-sm text-gray-700">You'd depreciate this equipment over 5-7 years, deducting only ~$1,400-$2,000 per year instead of the full $10,050 immediately.</p>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-teal-900 mb-2">Strategic Timing: Buy Before Dec 31</h3>
            <p className="text-gray-700">
              Section 179 requires equipment to be <strong>placed in service</strong> (not just purchased) by December 31. If you order a laptop on Dec 30 but it arrives Jan 3, you can't claim the deduction until the following tax year. Plan major purchases accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Software & Subscriptions */}
      <section id="software-subscriptions" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">4. Software & Subscription Deductions</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            All <strong>business software subscriptions and online tools</strong> are 100% deductible as ordinary business expenses. This includes SaaS (Software as a Service) tools, cloud storage, and professional memberships.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 border-2 border-green-300 p-6 rounded-lg">
              <h3 className="font-bold text-green-900 mb-3">Common Deductible Software:</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Adobe Creative Cloud ($54.99/mo = $660/yr)</li>
                <li>• Microsoft 365 Business ($12.50/mo = $150/yr)</li>
                <li>• QuickBooks Self-Employed ($15/mo = $180/yr)</li>
                <li>• Canva Pro ($12.99/mo = $156/yr)</li>
                <li>• Grammarly Premium ($12/mo = $144/yr)</li>
                <li>• Zoom Pro ($14.99/mo = $180/yr)</li>
                <li>• Dropbox Business ($15/mo = $180/yr)</li>
                <li>• Slack Pro ($7.25/mo = $87/yr)</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-3">Industry-Specific Tools:</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Designers:</strong> Figma, Sketch, InVision</li>
                <li>• <strong>Developers:</strong> GitHub, JetBrains, AWS</li>
                <li>• <strong>Writers:</strong> Scrivener, Ulysses, ProWritingAid</li>
                <li>• <strong>Marketers:</strong> SEMrush, Ahrefs, Mailchimp</li>
                <li>• <strong>Consultants:</strong> Calendly, Asana, Notion</li>
                <li>• <strong>Creators:</strong> Final Cut Pro, Premiere Pro</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-300 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-green-900 mb-4 text-lg">Real Scenario: Freelance Web Designer</h4>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-2"><strong>Annual software subscriptions:</strong></p>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Adobe Creative Cloud:</span>
                    <span>$660</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Figma Professional:</span>
                    <span>$180</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Webflow:</span>
                    <span>$192</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Notion Team:</span>
                    <span>$120</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Google Workspace:</span>
                    <span>$144</span>
                  </div>
                  <div className="flex justify-between">
                    <span>InVision:</span>
                    <span>$240</span>
                  </div>
                  <div className="flex justify-between border-t-2 border-gray-300 pt-2 mt-2 font-bold text-gray-900">
                    <span>Total subscriptions:</span>
                    <span>$1,536</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center bg-green-100 p-4 rounded border-2 border-green-400">
                <span className="font-bold text-green-900">Tax deduction:</span>
                <span className="font-bold text-green-700">$1,536</span>
              </div>

              <div className="flex justify-between items-center bg-green-100 p-4 rounded">
                <span className="text-gray-700">Tax savings (37.3% effective rate):</span>
                <span className="font-bold text-green-700">~$573</span>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-teal-900 mb-2">Pro Tip: Separate Business from Personal</h3>
            <p className="text-gray-700 mb-3">
              If you use software for both business and personal purposes (like Spotify or Netflix), you can only deduct the <strong>business percentage</strong>. Keep separate accounts or track usage carefully.
            </p>
            <p className="text-sm text-gray-600">
              Example: If you use Spotify 80% for background music while working and 20% personally, you can deduct 80% of the subscription cost.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Health Insurance Deduction */}
      <section id="health-insurance" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">5. Health Insurance Deduction (100% Deductible)</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            Self-employed individuals can deduct <strong>100% of health insurance premiums</strong> for themselves, their spouse, and dependents. This is an <strong>above-the-line deduction</strong> (reduces adjusted gross income), even if you don't itemize.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-green-900 mb-2">What's Covered by the Self-Employed Health Insurance Deduction?</h3>
            <ul className="text-gray-700 space-y-2">
              <li>✅ <strong>Medical insurance premiums</strong> (marketplace, private, COBRA)</li>
              <li>✅ <strong>Dental insurance premiums</strong></li>
              <li>✅ <strong>Vision insurance premiums</strong></li>
              <li>✅ <strong>Long-term care insurance premiums</strong> (age-based limits)</li>
              <li>✅ <strong>Medicare premiums</strong> (Parts A, B, C, D, and Medigap) if age 65+</li>
            </ul>
          </div>

          <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-red-900 mb-3">Important Limitations:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Cannot exceed net self-employment income:</strong> If your business profit is $20,000, you can deduct up to $20,000 in premiums (not more)</li>
              <li>• <strong>Cannot double-dip:</strong> Can't deduct if you're eligible for employer-sponsored coverage through a spouse's job or your own W-2 job</li>
              <li>• <strong>Deduct on Form 1040 Schedule 1 Line 17</strong> (not Schedule C)</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-300 p-6 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-4 text-lg">Real Scenario: Solo Freelance Consultant</h4>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-2"><strong>Annual health insurance costs (2025):</strong></p>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>ACA Marketplace Silver Plan (individual):</span>
                    <span>$7,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dental insurance:</span>
                    <span>$600</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vision insurance:</span>
                    <span>$240</span>
                  </div>
                  <div className="flex justify-between border-t-2 border-gray-300 pt-2 mt-2 font-bold text-gray-900">
                    <span>Total health premiums:</span>
                    <span>$8,040</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center bg-green-100 p-4 rounded border-2 border-green-400">
                <span className="font-bold text-green-900">Health insurance deduction:</span>
                <span className="font-bold text-green-700">$8,040</span>
              </div>

              <div className="flex justify-between items-center bg-blue-100 p-4 rounded">
                <span className="text-gray-700">Tax savings (22% income tax only):</span>
                <span className="font-bold text-blue-700">~$1,769</span>
              </div>

              <div className="bg-yellow-50 p-4 rounded border-2 border-yellow-300">
                <p className="text-yellow-900 font-semibold mb-2">Note: SE Tax Impact</p>
                <p className="text-sm text-gray-700">Health insurance premiums do NOT reduce self-employment tax (only income tax). They're deducted on Form 1040, not Schedule C.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Bonus: Premium Tax Credits (ACA Subsidies)</h3>
            <p className="text-gray-700 mb-3">
              If you buy health insurance through the ACA Marketplace, you may qualify for <strong>Premium Tax Credits</strong> that reduce your monthly premiums. These subsidies are based on your modified adjusted gross income (MAGI).
            </p>
            <button
              onClick={() => onNavigate?.(ToolType.ACA_SUBSIDY)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Calculate ACA Subsidies
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Retirement Contributions */}
      <section id="retirement" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">6. Retirement Contribution Deductions</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            Freelancers can deduct contributions to <strong>self-employed retirement plans</strong>, which offer higher contribution limits than traditional IRAs. The two most popular options are <strong>SEP-IRA</strong> and <strong>Solo 401(k)</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-emerald-50 border-2 border-emerald-500 p-6 rounded-lg">
              <h3 className="font-bold text-emerald-900 mb-3 text-lg">SEP-IRA</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>2025 limit:</strong> Up to $69,000 or 25% of compensation</li>
                <li>• <strong>Employer contributions only</strong> (you're the employer)</li>
                <li>• <strong>Easy setup:</strong> Open account, make contributions</li>
                <li>• <strong>Flexible contributions:</strong> Contribute 0-25% each year</li>
                <li>• <strong>Best for:</strong> Solo freelancers with variable income</li>
              </ul>
            </div>

            <div className="bg-teal-50 border-2 border-teal-500 p-6 rounded-lg">
              <h3 className="font-bold text-teal-900 mb-3 text-lg">Solo 401(k)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>2025 limit:</strong> Up to $69,000 ($76,500 if 50+)</li>
                <li>• <strong>Employee + employer contributions</strong></li>
                <li>• <strong>Employee portion:</strong> $23,000 ($30,500 if 50+)</li>
                <li>• <strong>Employer portion:</strong> Up to 25% of compensation</li>
                <li>• <strong>Roth option available</strong></li>
                <li>• <strong>Best for:</strong> High earners wanting to max out contributions</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-emerald-900 mb-4 text-lg">Example: SEP-IRA Contribution & Tax Savings</h4>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-2"><strong>Freelancer profile:</strong></p>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Net self-employment income:</span>
                    <span>$120,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SEP-IRA contribution (20% of net):</span>
                    <span>$24,000</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center bg-emerald-100 p-4 rounded border-2 border-emerald-400">
                <span className="font-bold text-emerald-900">Tax deduction:</span>
                <span className="font-bold text-emerald-700">$24,000</span>
              </div>

              <div className="flex justify-between items-center bg-green-100 p-4 rounded">
                <span className="text-gray-700">Tax savings (24% income tax):</span>
                <span className="font-bold text-green-700">~$5,760</span>
              </div>

              <div className="bg-blue-50 p-4 rounded border-2 border-blue-300">
                <p className="text-blue-900 font-semibold mb-2">Bonus: Tax-Deferred Growth</p>
                <p className="text-sm text-gray-700">Your $24,000 grows tax-free until retirement. Assuming 7% annual returns, that's $185,000+ in 30 years (vs. $95,000 after-tax in a taxable account).</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-green-900 mb-2">SEP-IRA vs Solo 401(k): Which is Better?</h3>
            <p className="text-gray-700 mb-3">
              It depends on your income and savings goals. Solo 401(k) allows higher contributions at lower income levels due to the $23,000 employee deferral. SEP-IRA is simpler and requires less paperwork.
            </p>
            <p className="text-sm text-gray-600">
              For detailed comparison of contribution limits, catch-up contributions, and administrative complexity, see our comprehensive guide.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Common Business Expenses */}
      <section id="business-expenses" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">7. Common Business Expense Deductions</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Beyond the major deductions above, freelancers can deduct a wide range of <strong>ordinary and necessary business expenses</strong>. Here are the most common categories:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5">
              <h3 className="font-bold text-blue-900 mb-3">Office Supplies & Equipment</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Pens, paper, printer ink</li>
                <li>• Desk accessories</li>
                <li>• Filing cabinets</li>
                <li>• Printer, scanner, shredder</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-5">
              <h3 className="font-bold text-green-900 mb-3">Professional Services</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Accountant & tax prep fees</li>
                <li>• Attorney & legal fees</li>
                <li>• Business consultant fees</li>
                <li>• Web designer, copywriter</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-5">
              <h3 className="font-bold text-purple-900 mb-3">Marketing & Advertising</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Google Ads, Facebook Ads</li>
                <li>• Business cards & brochures</li>
                <li>• Website hosting & domain</li>
                <li>• SEO tools, email marketing</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-5">
              <h3 className="font-bold text-orange-900 mb-3">Communication</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Business phone line</li>
                <li>• Cell phone (business %)</li>
                <li>• Internet (business %)</li>
                <li>• Postage & shipping</li>
              </ul>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-5">
              <h3 className="font-bold text-pink-900 mb-3">Education & Training</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Online courses (Udemy, Coursera)</li>
                <li>• Industry conferences</li>
                <li>• Professional certifications</li>
                <li>• Books & publications</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5">
              <h3 className="font-bold text-yellow-900 mb-3">Business Insurance</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Professional liability insurance</li>
                <li>• General liability insurance</li>
                <li>• Errors & omissions (E&O)</li>
                <li>• Business property insurance</li>
              </ul>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5">
              <h3 className="font-bold text-indigo-900 mb-3">Travel & Meals</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Airfare, hotels (business trips)</li>
                <li>• Rental cars, taxis, Uber</li>
                <li>• Business meals (50% deductible)</li>
                <li>• Client entertainment (50%)</li>
              </ul>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-5">
              <h3 className="font-bold text-teal-900 mb-3">Bank & Financial Fees</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Business checking fees</li>
                <li>• Credit card processing fees</li>
                <li>• PayPal/Stripe fees</li>
                <li>• Merchant services</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-red-900 mb-2">What's NOT Deductible?</h3>
            <ul className="text-gray-700 space-y-2">
              <li>❌ <strong>Personal expenses</strong> (groceries, personal clothing, entertainment)</li>
              <li>❌ <strong>Commuting costs</strong> from home to your regular workplace</li>
              <li>❌ <strong>Personal portion of mixed-use items</strong> (personal cell phone usage, personal meals)</li>
              <li>❌ <strong>Fines and penalties</strong> (parking tickets, IRS penalties)</li>
              <li>❌ <strong>Political contributions</strong></li>
              <li>❌ <strong>Client gifts over $25 per person per year</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 8: Tax-Saving Strategies */}
      <section id="strategies" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">8. Tax-Saving Strategies for Freelancers</h2>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-green-900 mb-3">1. Time Your Income & Expenses</h3>
              <p className="text-gray-700 mb-3">If you're having a high-income year, consider:</p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Accelerating deductions:</strong> Buy equipment in December instead of January</li>
                <li>• <strong>Deferring income:</strong> Delay invoicing large clients until January</li>
                <li>• <strong>Prepaying expenses:</strong> Pay Q1 expenses in December (hosting, insurance, rent)</li>
              </ul>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-teal-900 mb-3">2. Maximize Retirement Contributions</h3>
              <p className="text-gray-700 mb-3">Every $1,000 contributed to a SEP-IRA or Solo 401(k) saves you ~$373 in taxes (22% + 15.3% SE tax).</p>
              <p className="text-sm text-gray-600">
                Example: Contributing $20,000 to a Solo 401(k) saves $7,460 in taxes while building retirement wealth.
              </p>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">3. Separate Business & Personal Finances</h3>
              <p className="text-gray-700 mb-3">Open a dedicated business bank account and credit card. This:</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Simplifies expense tracking (no mixed transactions)</li>
                <li>• Provides clear audit trail for the IRS</li>
                <li>• Protects against piercing the corporate veil (for LLCs)</li>
                <li>• Makes tax prep faster and cheaper</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-green-900 mb-3">4. Track Everything with Apps</h3>
              <p className="text-gray-700 mb-3">Use expense tracking apps to capture deductions automatically:</p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>QuickBooks Self-Employed:</strong> Links to bank account, categorizes expenses</li>
                <li>• <strong>Expensify:</strong> Scan receipts with phone camera</li>
                <li>• <strong>MileIQ:</strong> Auto-tracks business mileage</li>
                <li>• <strong>Wave:</strong> Free accounting software for small businesses</li>
              </ul>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-teal-900 mb-3">5. Consider an S-Corp Election</h3>
              <p className="text-gray-700 mb-3">
                If you earn $60,000+, an <strong>S-Corporation election</strong> can save thousands in self-employment tax by splitting income into salary (subject to SE tax) and distributions (not subject to SE tax).
              </p>
              <p className="text-sm text-gray-600">
                Trade-off: S-Corps require payroll processing, quarterly payroll taxes, and additional tax filings (Form 1120-S).
              </p>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">6. Work with a Tax Professional</h3>
              <p className="text-gray-700">
                If your freelance income exceeds $75,000/year, hiring a CPA or Enrolled Agent (~$500-2,000) often pays for itself through tax savings, deduction optimization, and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Real Freelancer Scenarios */}
      <section id="scenarios" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">9. Real Freelancer Tax Scenarios</h2>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 p-6 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-4 text-lg">Scenario 1: Part-Time Freelance Writer</h3>
              <div className="bg-white p-4 rounded mb-4">
                <p className="text-sm text-gray-600 mb-3">Sarah earns $25,000/year from freelance writing while working a W-2 job.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Gross freelance income:</span>
                    <span className="font-semibold">$25,000</span>
                  </div>
                  <div className="border-t pt-2">
                    <p className="font-semibold text-gray-900 mb-2">Deductions:</p>
                    <div className="space-y-1 ml-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Home office (150 sq ft × $5):</span>
                        <span>$750</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Software (Grammarly, Scrivener, Dropbox):</span>
                        <span>$400</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Internet (50% business use):</span>
                        <span>$600</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Professional development (courses):</span>
                        <span>$500</span>
                      </div>
                      <div className="flex justify-between border-t pt-1 mt-1 font-semibold">
                        <span>Total deductions:</span>
                        <span>$2,250</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between border-t-2 border-blue-300 pt-2 mt-2">
                    <span className="font-bold text-blue-900">Net profit (Schedule C):</span>
                    <span className="font-bold text-blue-700">$22,750</span>
                  </div>
                  <div className="flex justify-between bg-green-100 p-2 rounded">
                    <span className="text-gray-700">Tax savings from deductions:</span>
                    <span className="font-bold text-green-700">~$839</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-300 p-6 rounded-lg">
              <h3 className="font-bold text-green-900 mb-4 text-lg">Scenario 2: Full-Time Graphic Designer</h3>
              <div className="bg-white p-4 rounded mb-4">
                <p className="text-sm text-gray-600 mb-3">Marcus earns $85,000/year as a solo graphic designer with home office.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Gross freelance income:</span>
                    <span className="font-semibold">$85,000</span>
                  </div>
                  <div className="border-t pt-2">
                    <p className="font-semibold text-gray-900 mb-2">Deductions:</p>
                    <div className="space-y-1 ml-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Home office (regular method):</span>
                        <span>$4,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Software (Adobe, Figma, Webflow):</span>
                        <span>$1,800</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Equipment (MacBook, monitor, iPad):</span>
                        <span>$6,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Health insurance:</span>
                        <span>$7,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">SEP-IRA contribution (20%):</span>
                        <span>$13,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Marketing & advertising:</span>
                        <span>$2,400</span>
                      </div>
                      <div className="flex justify-between border-t pt-1 mt-1 font-semibold">
                        <span>Total deductions:</span>
                        <span>$35,100</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between border-t-2 border-green-300 pt-2 mt-2">
                    <span className="font-bold text-green-900">Net profit (Schedule C):</span>
                    <span className="font-bold text-green-700">$49,900</span>
                  </div>
                  <div className="flex justify-between bg-green-100 p-2 rounded">
                    <span className="text-gray-700">Tax savings from deductions:</span>
                    <span className="font-bold text-green-700">~$13,092</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">
                Note: Health insurance is an above-the-line deduction (Form 1040), reducing income tax but not SE tax.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 p-6 rounded-lg">
              <h3 className="font-bold text-green-900 mb-4 text-lg">Scenario 3: High-Earning Consultant</h3>
              <div className="bg-white p-4 rounded mb-4">
                <p className="text-sm text-gray-600 mb-3">Lisa earns $180,000/year as a management consultant with significant travel.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Gross freelance income:</span>
                    <span className="font-semibold">$180,000</span>
                  </div>
                  <div className="border-t pt-2">
                    <p className="font-semibold text-gray-900 mb-2">Major Deductions:</p>
                    <div className="space-y-1 ml-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Home office (regular method):</span>
                        <span>$5,800</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Solo 401(k) (max contribution):</span>
                        <span>$69,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Health insurance (family plan):</span>
                        <span>$18,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Business travel (flights, hotels):</span>
                        <span>$12,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mileage (8,000 miles × $0.67):</span>
                        <span>$5,360</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Professional services (CPA, lawyer):</span>
                        <span>$4,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Software, courses, conferences:</span>
                        <span>$6,800</span>
                      </div>
                      <div className="flex justify-between border-t pt-1 mt-1 font-semibold">
                        <span>Total deductions:</span>
                        <span>$121,460</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between border-t-2 border-green-300 pt-2 mt-2">
                    <span className="font-bold text-green-900">Net profit:</span>
                    <span className="font-bold text-green-700">$58,540</span>
                  </div>
                  <div className="flex justify-between bg-blue-100 p-2 rounded">
                    <span className="text-gray-700">Tax savings from deductions:</span>
                    <span className="font-bold text-blue-700">~$45,285</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">
                Lisa's strategic use of Solo 401(k) max contribution ($69k) reduced her taxable income dramatically while building retirement wealth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Freelancer Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <button
            onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
            className="bg-green-50 hover:bg-green-100 border-2 border-green-200 p-6 rounded-lg text-left transition-colors group"
          >
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold text-green-900 mb-2 group-hover:text-green-700">Freelance Profit Calculator</h3>
            <p className="text-sm text-gray-600">Track income, expenses, and calculate net profit</p>
          </button>

          <button
            onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX)}
            className="bg-teal-50 hover:bg-teal-100 border-2 border-teal-200 p-6 rounded-lg text-left transition-colors group"
          >
            <div className="text-3xl mb-3">📅</div>
            <h3 className="font-bold text-teal-900 mb-2 group-hover:text-teal-700">Quarterly Tax Calculator</h3>
            <p className="text-sm text-gray-600">Calculate estimated tax payments with SE tax</p>
          </button>

          <button
            onClick={() => onNavigate?.(ToolType.ACA_SUBSIDY)}
            className="bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 p-6 rounded-lg text-left transition-colors group"
          >
            <div className="text-3xl mb-3">🏥</div>
            <h3 className="font-bold text-emerald-900 mb-2 group-hover:text-emerald-700">ACA Health Subsidy Calculator</h3>
            <p className="text-sm text-gray-600">Estimate Premium Tax Credits for health insurance</p>
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
              <span className="font-semibold text-gray-900">Can I deduct my entire home if I work from home full-time?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 0 ? '−' : '+'}</span>
            </button>
            {openFAQ === 0 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-3">
                  <strong>No.</strong> You can only deduct the portion of your home used <strong>exclusively and regularly</strong> for business. If you have a 200 sq ft office in a 2,000 sq ft home (10% business use), you can deduct 10% of your home expenses (mortgage interest, property taxes, utilities, etc.).
                </p>
                <p className="text-gray-700">
                  The IRS is strict on the "exclusive use" requirement. A spare bedroom used only for work qualifies. A kitchen table used for both work and meals does not.
                </p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(1)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-900">Do I need receipts for every deduction?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 1 ? '−' : '+'}</span>
            </button>
            {openFAQ === 1 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-3">
                  <strong>Yes, for most deductions.</strong> The IRS requires <strong>contemporaneous records</strong> (receipts, invoices, bank statements) to substantiate business expenses. If you're audited and can't provide proof, the deduction will be disallowed.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Exceptions:</strong>
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Expenses under $75 don't require receipts (but you still need to track them)</li>
                  <li>• Simplified home office method doesn't require tracking actual expenses</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  <strong>Best practice:</strong> Use expense tracking apps (Expensify, QuickBooks) to photograph and store receipts digitally.
                </p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(2)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-900">Can I deduct business meals and entertainment?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 2 ? '−' : '+'}</span>
            </button>
            {openFAQ === 2 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-3">
                  <strong>Business meals: 50% deductible.</strong> You can deduct 50% of the cost of meals with clients, prospects, or business partners where business is discussed. You must keep detailed records (who, where, when, business purpose).
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Entertainment: NOT deductible.</strong> The Tax Cuts and Jobs Act (2018) eliminated the deduction for entertainment expenses (concerts, sporting events, golf outings), even if business is discussed.
                </p>
                <p className="text-gray-700">
                  <strong>Exception:</strong> Meals provided at entertainment events are still 50% deductible if billed separately.
                </p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(3)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-900">What if I use my personal car for business? Can I still deduct mileage?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 3 ? '−' : '+'}</span>
            </button>
            {openFAQ === 3 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-3">
                  <strong>Yes!</strong> You can deduct business mileage even if you use the same car for personal driving. You just need to track which miles are business vs. personal.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Best practice:</strong> Use a mileage tracking app (MileIQ, Everlance) that automatically logs trips via GPS and lets you categorize them as business or personal with a swipe.
                </p>
                <p className="text-gray-700">
                  The IRS requires a <strong>contemporaneous mileage log</strong> with date, destination, business purpose, and miles driven. Retroactively creating a log is a red flag for audits.
                </p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(4)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-900">Can I deduct expenses if I had a loss (negative profit) this year?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 4 ? '−' : '+'}</span>
            </button>
            {openFAQ === 4 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-3">
                  <strong>Yes.</strong> If your business expenses exceed your income, you'll report a <strong>net loss</strong> on Schedule C. This loss reduces your other taxable income (like W-2 wages), potentially resulting in a tax refund.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>IRS hobby loss rule:</strong> If you report losses for 3 out of 5 consecutive years, the IRS may classify your business as a "hobby" and disallow losses. To avoid this:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Maintain business-like records (separate bank account, professional marketing)</li>
                  <li>• Demonstrate profit motive (business plan, expertise in the field)</li>
                  <li>• Show you're actively trying to make a profit (not just pursuing a hobby)</li>
                </ul>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(5)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-gray-900">Should I use the simplified or regular home office deduction method?</span>
              <span className="text-2xl text-gray-400">{openFAQ === 5 ? '−' : '+'}</span>
            </button>
            {openFAQ === 5 && (
              <div className="p-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-3">
                  It depends on your home expenses and office size:
                </p>
                <div className="bg-blue-50 p-4 rounded mb-3">
                  <p className="font-semibold text-blue-900 mb-2">Use Simplified Method ($5/sq ft) if:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Your office is small (under 200 sq ft)</li>
                    <li>• You don't want to track detailed home expenses</li>
                    <li>• Your home expenses are relatively low (renting a cheap apartment)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded">
                  <p className="font-semibold text-green-900 mb-2">Use Regular Method (actual expenses) if:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Your office is large (over 250 sq ft)</li>
                    <li>• You have high home expenses (mortgage, property taxes, utilities)</li>
                    <li>• You want to maximize your deduction</li>
                  </ul>
                </div>
                <p className="text-gray-700 mt-3">
                  <strong>Pro tip:</strong> Calculate both methods and choose the one that gives you the larger deduction.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Complete Freelancer Tax Guide Series</h2>
        <p className="text-gray-600 mb-6">Master every aspect of freelancer taxes with our comprehensive guide series:</p>

        <div className="grid md:grid-cols-2 gap-6">
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_SE_TAX)}
            className="text-left bg-white hover:bg-green-50 border-2 border-green-200 hover:border-green-400 rounded-xl p-6 transition-all group shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">💼</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-green-700 mb-2">
                  Self-Employment Tax Guide 2025
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Master the 15.3% SE tax, Schedule SE calculations, and strategies to minimize your tax burden.
                </p>
                <div className="text-xs font-semibold text-green-600">
                  Read Guide →
                </div>
              </div>
            </div>
          </button>

          <button
            onClick={() => onNavigate?.(ToolType.BLOG_QUARTERLY_TAX)}
            className="text-left bg-white hover:bg-teal-50 border-2 border-teal-200 hover:border-teal-400 rounded-xl p-6 transition-all group shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">📅</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-teal-700 mb-2">
                  Quarterly Estimated Taxes Complete Guide
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Learn safe harbor rules, payment deadlines, and how to avoid IRS penalties on quarterly taxes.
                </p>
                <div className="text-xs font-semibold text-teal-600">
                  Read Guide →
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-8 shadow-xl text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Maximize Your Tax Deductions?</h2>
        <p className="text-xl mb-6 text-green-50">
          Track your income and expenses to calculate your exact tax savings in 2025.
        </p>
        <button
          onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
          className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
        >
          Calculate My Tax Savings Now
        </button>
        <p className="mt-6 text-sm text-green-100">
          Free forever · 100% private · No signup required
        </p>
      </div>
    </div>
  );
};

export default TaxDeductionsFreelancers2025;

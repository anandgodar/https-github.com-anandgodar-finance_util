'use client';

import React, { useState } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const TaxDeductionsFreelancers2025: React.FC<BlogProps> = ({ onNavigate }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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
          Tax Deductions for Freelancers 2026: Complete Guide to Maximize Your Write-Offs
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
          <div className="text-3xl font-bold text-green-600 mb-2">$0.725</div>
          <div className="text-gray-700 font-medium">Standard Mileage Rate per Mile (2026)</div>
        </div>
        <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-lg">
          <div className="text-3xl font-bold text-teal-600 mb-2">$5/sq ft</div>
          <div className="text-gray-700 font-medium">Simplified Home Office Deduction (Max $1,500)</div>
        </div>
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-lg">
          <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
          <div className="text-gray-700 font-medium">Bonus Depreciation on Equipment (Permanent Under 2025 Law)</div>
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
            2. Mileage & Vehicle Expenses ($0.725/mile)
          </button>
          <button onClick={() => scrollToSection('section-179')} className="text-left text-green-600 hover:text-green-800 hover:underline font-medium">
            3. Equipment: Section 179 & Bonus Depreciation
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
            9. Hypothetical Freelancer Scenarios
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-left text-green-600 hover:text-green-800 hover:underline font-medium">
            10. Frequently Asked Questions
          </button>
          <button onClick={() => scrollToSection('sources')} className="text-left text-green-600 hover:text-green-800 hover:underline font-medium">
            11. Sources
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
                <span className="text-gray-700">Tax savings (22% bracket + SE tax ≈ 36%):</span>
                <span className="font-bold text-green-700">~$361</span>
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
            <p className="text-gray-700 mt-3">
              For the full rules, the income limit and worked examples, see our <a href="/blog/home-office-deduction-2025/" className="text-indigo-600 font-semibold hover:underline">home office deduction guide</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Mileage & Vehicle Expenses */}
      <section id="mileage" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">2. Mileage & Vehicle Expenses ($0.725/mile in 2026)</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            If you drive for business, you can deduct vehicle expenses using either the <strong>standard mileage rate ($0.725/mile in 2026)</strong> or the <strong>actual expense method</strong>.
          </p>

          <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">2026 Standard Mileage Rate: $0.725/mile</h3>
            <p className="text-gray-700 mb-4">
              The IRS set the business standard mileage rate at <strong>72.5 cents per mile</strong> for 2026, up from 70 cents in 2025. The rate covers gas, maintenance, insurance and depreciation; business parking fees and tolls can be deducted on top of it. To use the standard rate for a car you own, you generally must choose it in the first year you use the car for business.
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
            <h4 className="font-semibold text-blue-900 mb-4 text-lg">Example (Hypothetical): Freelance Photographer</h4>
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
                <span className="font-bold text-blue-700">10,000 × $0.725 = $7,250</span>
              </div>

              <div className="flex justify-between items-center bg-green-100 p-4 rounded">
                <span className="text-gray-700">Tax savings (22% + SE tax ≈ 36%):</span>
                <span className="font-bold text-green-700">~$2,620</span>
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
              Apps like <strong>MileIQ, Everlance, or QuickBooks</strong> automatically track your drives using GPS and categorize them as business or personal. This creates an IRS-compliant mileage log with zero manual effort.
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
          Track all your deductions and see exactly how much you'll save on taxes in 2026.
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
        <h2 className="text-3xl font-bold mb-6 text-gray-900">3. Equipment: Section 179, Bonus Depreciation & the $2,500 De Minimis Rule</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            Equipment that lasts more than a year—laptops, cameras, desks—normally has to be <strong>depreciated</strong> over several years (computers generally over 5 years, office furniture over 7). For 2026, freelancers have three ways to deduct much or all of the cost in the year the item is placed in service:
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-green-900 mb-2">Three Ways to Write Off Equipment Faster (2026)</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>De minimis safe harbor:</strong> If you make the annual election, you can expense items costing <strong>$2,500 or less per item or invoice</strong> (for businesses without audited financial statements) as ordinary supplies.</li>
              <li>• <strong>Section 179:</strong> Elect to expense qualifying equipment in the year you place it in service. There is an annual dollar cap far above what most solo freelancers spend (check the current Form 4562 instructions), and the deduction can't exceed your business income for the year.</li>
              <li>• <strong>Bonus depreciation:</strong> The 2025 tax law (OBBBA) made <strong>100% bonus depreciation permanent</strong> for qualifying property acquired after January 19, 2025. Unlike Section 179, it isn't limited by business income.</li>
              <li>• <strong>Key requirement:</strong> Equipment must be purchased AND placed in service by Dec 31, 2026 to count for 2026, and you can deduct only the business-use share.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">What Qualifies?</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-3">Qualifying Property:</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✅ Computers & laptops</li>
                <li>✅ Office furniture & desks</li>
                <li>✅ Business vehicles (special limits apply)</li>
                <li>✅ Machinery & equipment</li>
                <li>✅ Camera equipment</li>
                <li>✅ Software (off-the-shelf)</li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg">
              <h4 className="font-bold text-red-900 mb-3">Does NOT Qualify:</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>❌ Real estate / buildings</li>
                <li>❌ Land & land improvements</li>
                <li>❌ Inventory for resale</li>
                <li>❌ Personal-use items (or the personal share of mixed-use items)</li>
                <li>❌ Property received as gift/inheritance (Section 179)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 p-6 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-4 text-lg">Example (Hypothetical): Freelance Video Editor</h4>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-2"><strong>Equipment bought and set up in 2026 (100% business use):</strong></p>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Laptop:</span>
                    <span>$4,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Camera body:</span>
                    <span>$3,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gimbal:</span>
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
                <span className="font-bold text-green-900">First-year deduction (bonus depreciation or Section 179):</span>
                <span className="font-bold text-green-700">$10,050</span>
              </div>

              <div className="flex justify-between items-center bg-blue-100 p-4 rounded">
                <span className="text-gray-700">Tax savings (22% bracket + SE tax ≈ 36%):</span>
                <span className="font-bold text-blue-700">~$3,630</span>
              </div>

              <div className="bg-yellow-50 p-4 rounded border-2 border-yellow-300">
                <p className="text-yellow-900 font-semibold mb-2">Without these elections:</p>
                <p className="text-sm text-gray-700">You'd depreciate the equipment over 5–7 years, deducting a smaller amount each year instead of the full $10,050 immediately. Spreading the deduction can make sense if you expect to be in a higher bracket in later years.</p>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-teal-900 mb-2">Strategic Timing: Buy Before Dec 31</h3>
            <p className="text-gray-700">
              Section 179 and bonus depreciation require equipment to be <strong>placed in service</strong> (not just purchased) by December 31. If you order a laptop on Dec 30 but it arrives Jan 3, you can't claim the deduction until the following tax year. Plan major purchases accordingly—and only buy what the business actually needs; a deduction saves a fraction of the price, not all of it.
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
                <li>• Design suites (e.g., Adobe Creative Cloud)</li>
                <li>• Office and email tools (e.g., Microsoft 365, Google Workspace)</li>
                <li>• Accounting and invoicing software</li>
                <li>• Graphic and writing tools (e.g., Canva, Grammarly)</li>
                <li>• Video conferencing (e.g., Zoom)</li>
                <li>• Cloud storage (e.g., Dropbox)</li>
                <li>• Team chat (e.g., Slack)</li>
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
            <h4 className="font-semibold text-green-900 mb-4 text-lg">Example (Hypothetical): Freelance Web Designer</h4>
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
                <span className="text-gray-700">Tax savings (22% bracket + SE tax ≈ 36%):</span>
                <span className="font-bold text-green-700">~$555</span>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-teal-900 mb-2">Pro Tip: Separate Business from Personal</h3>
            <p className="text-gray-700 mb-3">
              If you use a service for both business and personal purposes (like a cell phone plan or a cloud storage account), you can only deduct the <strong>business percentage</strong>. Keep separate accounts or track usage carefully. Purely personal entertainment subscriptions generally aren't deductible.
            </p>
            <p className="text-sm text-gray-600">
              Example: If 60% of your cell phone use is for client calls and business apps, you can deduct 60% of the monthly bill—keep a sample log or billing records to support the percentage.
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
              <li>• <strong>Deduct on Form 1040 Schedule 1</strong> (not Schedule C), and only for premiums you actually paid after any premium tax credit</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-300 p-6 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-4 text-lg">Example (Hypothetical): Solo Freelance Consultant</h4>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-2"><strong>Annual health insurance costs (2026):</strong></p>
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
              If you buy health insurance through the ACA Marketplace, you may qualify for <strong>Premium Tax Credits</strong> that reduce your monthly premiums. These subsidies are based on your modified adjusted gross income (MAGI). For 2026 coverage, the enhanced subsidies of 2021–2025 have expired, so household income above 400% of the poverty line ($62,600 for a single person) generally means no credit at all unless Congress changes the law. Check HealthCare.gov and read our <a href="/blog/aca-health-insurance-freelancers-2025/" className="text-indigo-600 font-semibold hover:underline">ACA guide for freelancers</a>.
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
                <li>• <strong>2026 limit:</strong> Up to $72,000 or 25% of compensation (about 20% of net SE earnings for sole proprietors)</li>
                <li>• <strong>Employer contributions only</strong> (you're the employer)</li>
                <li>• <strong>Easy setup:</strong> Open account, make contributions</li>
                <li>• <strong>Flexible contributions:</strong> Contribute 0-25% each year</li>
                <li>• <strong>Best for:</strong> Solo freelancers with variable income</li>
              </ul>
            </div>

            <div className="bg-teal-50 border-2 border-teal-500 p-6 rounded-lg">
              <h3 className="font-bold text-teal-900 mb-3 text-lg">Solo 401(k)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>2026 limit:</strong> Up to $72,000 ($80,000 if 50+; $83,250 if age 60–63)</li>
                <li>• <strong>Employee + employer contributions</strong></li>
                <li>• <strong>Employee portion:</strong> $24,500 ($32,500 if 50+)</li>
                <li>• <strong>Employer portion:</strong> Up to 25% of compensation (about 20% of net SE earnings)</li>
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
                    <span>Half of SE tax:</span>
                    <span>$8,478</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SEP-IRA max (20% × ($120,000 − $8,478)):</span>
                    <span>$22,304</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center bg-emerald-100 p-4 rounded border-2 border-emerald-400">
                <span className="font-bold text-emerald-900">Tax deduction:</span>
                <span className="font-bold text-emerald-700">$22,304</span>
              </div>

              <div className="flex justify-between items-center bg-green-100 p-4 rounded">
                <span className="text-gray-700">Tax savings (22% income tax; no SE tax effect):</span>
                <span className="font-bold text-green-700">~$4,907</span>
              </div>

              <div className="bg-blue-50 p-4 rounded border-2 border-blue-300">
                <p className="text-blue-900 font-semibold mb-2">Bonus: Tax-Deferred Growth</p>
                <p className="text-sm text-gray-700">Your $22,304 grows tax-deferred until retirement. At a hypothetical 7% annual return, it would grow to roughly $170,000 in 30 years; withdrawals are then taxed as ordinary income. Returns are not guaranteed.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-green-900 mb-2">SEP-IRA vs Solo 401(k): Which is Better?</h3>
            <p className="text-gray-700 mb-3">
              It depends on your income and savings goals. Solo 401(k) allows higher contributions at lower income levels due to the $24,500 employee deferral. SEP-IRA is simpler and requires less paperwork.
            </p>
            <p className="text-sm text-gray-600">
              For detailed comparison of contribution limits, catch-up contributions, and administrative complexity, see our <a href="/blog/sep-ira-vs-solo-401k-2025/" className="text-indigo-600 font-semibold hover:underline">SEP-IRA vs Solo 401(k) guide</a>.
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
              <p className="text-gray-700 mb-3">Every $1,000 of pre-tax contributions to a SEP-IRA or Solo 401(k) saves about $220 in federal income tax in the 22% bracket. Retirement contributions do not reduce self-employment tax.</p>
              <p className="text-sm text-gray-600">
                Example: Contributing $20,000 pre-tax to a Solo 401(k) saves roughly $4,400 in federal income tax at a 22% marginal rate while building retirement wealth.
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
                <li>• <strong>QuickBooks:</strong> Links to bank account, categorizes expenses</li>
                <li>• <strong>Expensify:</strong> Scan receipts with phone camera</li>
                <li>• <strong>MileIQ:</strong> Auto-tracks business mileage</li>
                <li>• <strong>Wave:</strong> Free accounting software for small businesses</li>
              </ul>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-teal-900 mb-3">5. Consider an S-Corp Election</h3>
              <p className="text-gray-700 mb-3">
                Once your profit is well above a reasonable salary for your work, an <strong>S-Corporation election</strong> can reduce payroll taxes by splitting income into a W-2 salary (subject to Social Security and Medicare tax) and distributions (not subject to those taxes). It also shrinks your QBI deduction, so the net savings are smaller than the payroll-tax savings alone. See our <a href="/blog/llc-vs-sole-proprietor-2025/" className="text-indigo-600 font-semibold hover:underline">LLC vs sole proprietor guide</a> for 2026 examples.
              </p>
              <p className="text-sm text-gray-600">
                Trade-off: S-Corps require payroll processing, quarterly payroll taxes, and additional tax filings (Form 1120-S).
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-green-900 mb-3">6. Don't Forget the QBI Deduction</h3>
              <p className="text-gray-700">
                The 20% qualified business income (QBI) deduction under Section 199A was made permanent by the 2025 tax law. Many freelancers below the income thresholds can deduct up to 20% of their qualified business income (limited to 20% of taxable income) on top of the standard deduction. It reduces income tax only, not SE tax.
              </p>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">7. Work with a Tax Professional</h3>
              <p className="text-gray-700">
                As your income and complexity grow (S-corp elections, multiple states, large equipment purchases, retirement plan choices), a CPA or Enrolled Agent can help you apply these rules correctly. Ask for a fee quote up front and compare it with the decisions you need help making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Real Freelancer Scenarios */}
      <section id="scenarios" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">9. Hypothetical Freelancer Tax Scenarios (2026)</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            These examples are hypothetical. Each assumes a single filer, the 2026 standard deduction ($16,100), 2026 federal brackets, the 20% QBI deduction, and no state tax. "Tax savings" compares total federal income tax plus SE tax with and without the listed deductions. Note that Schedule C deductions reduce net profit, while health insurance, half of SE tax and retirement contributions are deducted on Schedule 1 and do not reduce SE tax.
          </p>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 p-6 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-4 text-lg">Scenario 1: Part-Time Freelance Writer</h3>
              <div className="bg-white p-4 rounded mb-4">
                <p className="text-sm text-gray-600 mb-3">Earns $25,000/year from freelance writing on top of a $60,000 W-2 job.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Gross freelance income:</span>
                    <span className="font-semibold">$25,000</span>
                  </div>
                  <div className="border-t pt-2">
                    <p className="font-semibold text-gray-900 mb-2">Schedule C deductions:</p>
                    <div className="space-y-1 ml-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Home office (150 sq ft × $5):</span>
                        <span>$750</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Software subscriptions:</span>
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
                    <span className="text-gray-700">Federal tax savings from deductions:</span>
                    <span className="font-bold text-green-700">~$686</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-300 p-6 rounded-lg">
              <h3 className="font-bold text-green-900 mb-4 text-lg">Scenario 2: Full-Time Graphic Designer</h3>
              <div className="bg-white p-4 rounded mb-4">
                <p className="text-sm text-gray-600 mb-3">Earns $85,000/year in gross revenue as a solo designer working from a home office.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Gross freelance income:</span>
                    <span className="font-semibold">$85,000</span>
                  </div>
                  <div className="border-t pt-2">
                    <p className="font-semibold text-gray-900 mb-2">Schedule C deductions:</p>
                    <div className="space-y-1 ml-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Home office (regular method):</span>
                        <span>$4,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Software subscriptions:</span>
                        <span>$1,800</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Equipment (laptop, monitor, tablet):</span>
                        <span>$6,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Marketing & advertising:</span>
                        <span>$2,400</span>
                      </div>
                      <div className="flex justify-between border-t pt-1 mt-1 font-semibold">
                        <span>Total Schedule C deductions:</span>
                        <span>$14,900</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between border-t-2 border-green-300 pt-2 mt-2">
                    <span className="font-bold text-green-900">Net profit (Schedule C):</span>
                    <span className="font-bold text-green-700">$70,100</span>
                  </div>
                  <div className="border-t pt-2">
                    <p className="font-semibold text-gray-900 mb-2">Schedule 1 (above-the-line) deductions:</p>
                    <div className="space-y-1 ml-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Half of SE tax:</span>
                        <span>$4,952</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Health insurance premiums:</span>
                        <span>$7,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">SEP-IRA (20% of net profit minus half SE tax):</span>
                        <span>$13,030</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between bg-green-100 p-2 rounded">
                    <span className="text-gray-700">Federal tax: ~$12,423 vs ~$17,800 without these deductions</span>
                    <span className="font-bold text-green-700">~$5,377 saved</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">
                Note: Health insurance is an above-the-line deduction (Schedule 1), reducing income tax but not SE tax. The SEP-IRA contribution is tax-deferred, not tax-free: withdrawals in retirement are taxed as ordinary income.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 p-6 rounded-lg">
              <h3 className="font-bold text-green-900 mb-4 text-lg">Scenario 3: High-Earning Consultant</h3>
              <div className="bg-white p-4 rounded mb-4">
                <p className="text-sm text-gray-600 mb-3">Earns $180,000/year in gross revenue as a management consultant with significant travel.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Gross freelance income:</span>
                    <span className="font-semibold">$180,000</span>
                  </div>
                  <div className="border-t pt-2">
                    <p className="font-semibold text-gray-900 mb-2">Schedule C deductions:</p>
                    <div className="space-y-1 ml-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Home office (regular method):</span>
                        <span>$5,800</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Business travel (flights, hotels):</span>
                        <span>$12,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mileage (8,000 miles × $0.725):</span>
                        <span>$5,800</span>
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
                        <span>Total Schedule C deductions:</span>
                        <span>$34,900</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between border-t-2 border-green-300 pt-2 mt-2">
                    <span className="font-bold text-green-900">Net profit:</span>
                    <span className="font-bold text-green-700">$145,100</span>
                  </div>
                  <div className="border-t pt-2">
                    <p className="font-semibold text-gray-900 mb-2">Schedule 1 (above-the-line) deductions:</p>
                    <div className="space-y-1 ml-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Half of SE tax:</span>
                        <span>$10,251</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Solo 401(k) ($24,500 employee + $26,970 employer):</span>
                        <span>$51,470</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Health insurance (family plan):</span>
                        <span>$18,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between bg-blue-100 p-2 rounded">
                    <span className="text-gray-700">Federal tax: ~$24,985 vs ~$47,058 without these deductions</span>
                    <span className="font-bold text-blue-700">~$22,073 saved</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">
                The Solo 401(k) is the biggest lever here. At this profit level the maximum is $51,470, well below the $72,000 overall cap, because the employer portion is limited to about 20% of net self-employment earnings. Compare plans in our <a href="/blog/sep-ira-vs-solo-401k-2025/" className="text-indigo-600 font-semibold hover:underline">SEP-IRA vs Solo 401(k) guide</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section id="sources" className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Sources</h2>
        <ul className="text-gray-700 space-y-2 text-sm">
          <li>• IRS Publication 334, Tax Guide for Small Business: <a href="https://www.irs.gov/publications/p334" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/publications/p334</a></li>
          <li>• IRS Publication 587, Business Use of Your Home: <a href="https://www.irs.gov/publications/p587" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/publications/p587</a></li>
          <li>• IRS Publication 463, Travel, Gift, and Car Expenses: <a href="https://www.irs.gov/publications/p463" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/publications/p463</a></li>
          <li>• IRS Publication 560, Retirement Plans for Small Business: <a href="https://www.irs.gov/publications/p560" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/publications/p560</a></li>
        </ul>
        <p className="text-sm text-gray-600 mt-4">
          2026 figures: standard mileage rate 72.5 cents (IRS), brackets and standard deduction (Rev. Proc. 2025-32), retirement limits (IRS Notice 2025-67), and OBBBA (P.L. 119-21) for bonus depreciation and the QBI deduction. This guide is educational and not individualized tax advice.
        </p>
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
                  <li>• For travel, meal and gift expenses under $75 (other than lodging), you don't need a receipt, but you still need a record of the amount, date, place and business purpose</li>
                  <li>• Simplified home office method doesn't require tracking actual expenses</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  <strong>Best practice:</strong> Use expense tracking apps (such as Expensify or QuickBooks) to photograph and store receipts digitally.
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
                  <strong>IRS hobby loss rule:</strong> An activity is presumed to be a business if it shows a profit in at least 3 of the last 5 years. If it doesn't, the IRS may look harder at whether you have a genuine profit motive and could treat it as a hobby, which means the losses aren't deductible. To show a profit motive:
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
                  Self-Employment Tax Guide 2026
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
          Track your income and expenses to calculate your exact tax savings in 2026.
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

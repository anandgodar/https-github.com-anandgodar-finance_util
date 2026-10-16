'use client';

import React, { useState } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const LLCvsSoleProp2025: React.FC<BlogProps> = ({ onNavigate }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "Is an LLC or sole proprietorship better for taxes?",
      answer: "By default the tax treatment is identical—a single-member LLC and a sole proprietorship both report business income on Schedule C and pay 15.3% self-employment tax. The difference is that an LLC can elect S-Corp status. In this guide's hypothetical 2026 examples, an S-Corp election lowered total federal tax by roughly $2,300–$5,800 a year at $60,000–$200,000 of profit, before payroll, tax-prep and state costs. A sole proprietor cannot make this election without first forming an entity. At lower profit levels, a sole proprietorship is usually simpler and cheaper."
    },
    {
      question: "How much does it cost to form an LLC vs staying a sole proprietor?",
      answer: "A sole proprietorship can cost nothing to start, plus a modest DBA fee if you use a business name. An LLC requires a state filing fee and, in most states, a recurring annual or biennial report fee or franchise tax. Amounts vary widely and change over time, so check your Secretary of State's website. California is a notable high-cost example: most LLCs there owe an $800 minimum annual franchise tax. A paid registered agent service is optional and adds an annual fee."
    },
    {
      question: "Does an LLC protect my personal assets from business debts?",
      answer: "Yes, an LLC provides 'limited liability'—creditors can only go after business assets, not your personal home, car, or savings (except in cases of fraud or personal guarantees). Sole proprietors have ZERO liability protection—you and your business are the same legal entity, so all personal assets are at risk. One important limit: an LLC generally does not shield you from claims about your own negligence or wrongful acts, so professional liability insurance still matters. Liability protection matters most for businesses with physical locations, employees, equipment, or client interaction (risk of lawsuits)."
    },
    {
      question: "Can I start as a sole proprietor and convert to LLC later?",
      answer: "Absolutely. Many freelancers start as sole proprietors (zero setup) and convert to an LLC when: (1) Profit grows enough that S-Corp savings would clearly exceed the added costs, (2) Business grows and liability risk increases, (3) You want to raise capital or add partners. Conversion is simple—file LLC paperwork, get an EIN if you need one, and update contracts/invoices. Starting as a sole proprietor is a common path unless you have liability concerns from day one."
    },
    {
      question: "Do I need a separate EIN for an LLC vs sole proprietorship?",
      answer: "Sole proprietors WITHOUT employees can use their SSN (though getting an EIN keeps your SSN off W-9 forms). A single-member LLC with no employees isn't required by the IRS to have an EIN for income tax purposes, but banks, payment platforms and some states usually ask for one, and you'll need one if you hire employees or elect S-Corp status. EINs are free from the IRS. Single-member LLCs taxed as disregarded entities still report on Schedule C of the owner's Form 1040."
    },
    {
      question: "What's the S-Corp election and when should I make it?",
      answer: "S-Corp is a tax classification (not a business structure) available to LLCs and corporations. You file Form 2553 with the IRS to split income into a W-2 salary (subject to 15.3% Social Security and Medicare tax) + distributions (no payroll tax). Hypothetical 2026 example: $100,000 profit with a $60,000 salary cuts payroll-type tax by about $4,950, but because salary doesn't count toward the 20% QBI deduction, total federal tax falls by about $2,580—before payroll, tax-prep and state costs. Best when profit is comfortably above a reasonable salary for your work and you're willing to run payroll. File by March 15 for a calendar-year election to apply that year."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Navigation */}
      <button
        onClick={() => onNavigate?.(ToolType.DASHBOARD)}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
      >
        ← Back to Dashboard
      </button>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-4xl">🏢</div>
          <h1 className="text-4xl font-bold">LLC vs Sole Proprietor 2026</h1>
        </div>
        <p className="text-xl text-blue-50 mb-4">
          Complete Tax & Legal Comparison Guide for Freelancers
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span>💰 Tax Savings Analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🛡️ Liability Protection</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📄 State Fees & Costs</span>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-blue-600">📋</span>
          Table of Contents
        </h2>
        <div className="grid md:grid-cols-2 gap-2">
          <button onClick={() => scrollToSection('overview')} className="text-left text-blue-600 hover:text-blue-800 hover:underline">
            → Quick Comparison Overview
          </button>
          <button onClick={() => scrollToSection('tax-treatment')} className="text-left text-blue-600 hover:text-blue-800 hover:underline">
            → Tax Treatment Differences
          </button>
          <button onClick={() => scrollToSection('liability')} className="text-left text-blue-600 hover:text-blue-800 hover:underline">
            → Liability Protection Explained
          </button>
          <button onClick={() => scrollToSection('formation-costs')} className="text-left text-blue-600 hover:text-blue-800 hover:underline">
            → Formation Costs
          </button>
          <button onClick={() => scrollToSection('scorp')} className="text-left text-blue-600 hover:text-blue-800 hover:underline">
            → S-Corp Election Benefits
          </button>
          <button onClick={() => scrollToSection('decision')} className="text-left text-blue-600 hover:text-blue-800 hover:underline">
            → Which Structure to Choose
          </button>
          <button onClick={() => scrollToSection('conversion')} className="text-left text-blue-600 hover:text-blue-800 hover:underline">
            → Converting from Sole Prop to LLC
          </button>
          <button onClick={() => scrollToSection('faqs')} className="text-left text-blue-600 hover:text-blue-800 hover:underline">
            → Frequently Asked Questions
          </button>
          <button onClick={() => scrollToSection('sources')} className="text-left text-blue-600 hover:text-blue-800 hover:underline">
            → Sources
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose max-w-none">

        {/* Overview */}
        <section id="overview" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">LLC vs Sole Proprietorship: Quick Comparison</h2>

          <p className="text-lg text-gray-700 mb-6">
            Choosing between an LLC and sole proprietorship is one of the most important decisions for freelancers, consultants, and small business owners in 2026. The choice affects your taxes, legal liability, administrative burden, and long-term business growth potential.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">💡 Bottom Line Up Front</p>
            <p className="text-gray-700">
              Start as a <strong>sole proprietor</strong> if your profit is modest, your liability risk is low, and you want zero setup costs. Consider an <strong>LLC with S-Corp election</strong> once profit is comfortably above a reasonable salary for your work—in our 2026 examples the federal savings were roughly $2,300–$5,800 a year at $60k–$200k of profit, before extra costs. Get an LLC from day one if you have significant liability risk (physical location, employees, client interaction).
            </p>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sole Proprietorship</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">LLC (Single-Member)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Formation Cost</td>
                  <td className="border border-gray-300 px-4 py-3">Often $0 (DBA fee if using a business name)</td>
                  <td className="border border-gray-300 px-4 py-3">State filing fee (varies by state)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Annual Costs</td>
                  <td className="border border-gray-300 px-4 py-3">Usually $0 (local licenses aside)</td>
                  <td className="border border-gray-300 px-4 py-3">Varies by state (California: $800 minimum franchise tax)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Liability Protection</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">❌ None (personal assets at risk)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">✅ Limited liability protection</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Tax Treatment (Default)</td>
                  <td className="border border-gray-300 px-4 py-3">Schedule C, 15.3% SE tax</td>
                  <td className="border border-gray-300 px-4 py-3">Same (disregarded entity)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">S-Corp Election</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">❌ Not available</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Can elect (savings depend on profit, salary and costs)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">EIN Required</td>
                  <td className="border border-gray-300 px-4 py-3">No (can use SSN)</td>
                  <td className="border border-gray-300 px-4 py-3">Usually (banks ask; required with employees or S-Corp)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Administrative Burden</td>
                  <td className="border border-gray-300 px-4 py-3">Minimal (just track income/expenses)</td>
                  <td className="border border-gray-300 px-4 py-3">Moderate (annual reports, separate bank account)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Credibility</td>
                  <td className="border border-gray-300 px-4 py-3">Lower (personal name)</td>
                  <td className="border border-gray-300 px-4 py-3">Higher (business entity)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Best For</td>
                  <td className="border border-gray-300 px-4 py-3">Lower profit, low risk, simplicity</td>
                  <td className="border border-gray-300 px-4 py-3">Liability concerns, growing profit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tax Treatment */}
        <section id="tax-treatment" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Tax Treatment: How They're Taxed Differently</h2>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Default Tax Treatment (Single-Member LLC = Sole Prop)</h3>

          <p className="text-lg text-gray-700 mb-4">
            By default, a single-member LLC is taxed as a <strong>"disregarded entity"</strong>—meaning the IRS treats it exactly like a sole proprietorship. Both report business income on <strong>Schedule C</strong> (Form 1040) and pay:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Income tax</strong> on net profit (10%-37% based on tax bracket)</li>
            <li><strong>Self-employment tax</strong> of 15.3% on 92.35% of net profit (covers Social Security + Medicare)</li>
            <li><strong>State income tax</strong> (if applicable in your state)</li>
          </ul>

          <div className="bg-gray-100 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Example (Hypothetical, 2026): $80,000 Net Profit (Sole Prop or LLC, Default Tax Treatment)</h4>
            <div className="space-y-2 text-gray-700">
              <p>• <strong>Self-employment tax:</strong> $80,000 × 92.35% = $73,880 × 15.3% = <span className="text-red-600 font-semibold">$11,304</span></p>
              <p>• <strong>Income tax:</strong> ~$5,344 (single filer, after the half-SE-tax deduction, the $16,100 standard deduction and the 20% QBI deduction)</p>
              <p>• <strong>Total federal tax:</strong> ~$16,647</p>
              <p>• <strong>Effective federal rate:</strong> about 20.8% of profit (state tax not included)</p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">The S-Corp Election Game-Changer (LLC Only)</h3>

          <p className="text-lg text-gray-700 mb-4">
            Here's where LLCs pull ahead: once you file <strong>Form 2553</strong> to elect S-Corp status, you can split your income into:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Reasonable salary</strong> (subject to 15.3% Social Security and Medicare payroll tax + income tax)</li>
            <li><strong>Distributions</strong> (subject to income tax only—no payroll or SE tax)</li>
          </ul>

          <div className="bg-green-50 rounded-lg p-6 mb-6 border-l-4 border-green-600">
            <h4 className="font-semibold text-lg mb-3">Example (Hypothetical, 2026): $80,000 Net Profit (LLC with S-Corp Election)</h4>
            <div className="space-y-2 text-gray-700">
              <p>• <strong>Reasonable salary:</strong> $50,000 (assumed for this example)</p>
              <p>• <strong>Remaining profit:</strong> $80,000 − $50,000 − $3,825 employer payroll tax = $26,175 (no payroll tax on this portion)</p>
              <p className="mt-4 font-semibold">Tax Breakdown:</p>
              <p>• Payroll tax on salary (employee + employer halves): $50,000 × 15.3% = <span className="text-orange-600 font-semibold">$7,650</span></p>
              <p>• Payroll tax on distributions: <span className="text-green-600 font-semibold">$0</span></p>
              <p>• Income tax: ~$6,777 (higher than before, because salary doesn't qualify for the 20% QBI deduction)</p>
              <p>• <strong>Total federal tax:</strong> ~$14,427</p>
              <p className="mt-4 pt-4 border-t border-green-300">
                <strong className="text-green-700 text-xl">Federal Tax Savings: ~$2,221/year vs. Sole Prop/Default LLC—before payroll, tax-prep and state costs</strong>
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">⚠️ "Reasonable Salary" Requirement</p>
            <p className="text-gray-700">
              The IRS requires S-Corp owners to pay themselves a "reasonable salary" for their role/industry. You can't pay a $10k salary + $70k distributions on $80k profit and expect it to hold up if examined. There is no IRS percentage rule: reasonable compensation is roughly what you'd have to pay someone else to do the work you do. The 55–60% salaries used in this guide are illustrations only. Salary data such as BLS occupational wage estimates can help you document your choice.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">When S-Corp Savings Justify LLC Costs</h3>

          <p className="text-lg text-gray-700 mb-4">
            S-Corp status adds costs: running payroll, a separate business tax return (Form 1120-S), and in some states an entity-level tax. The table below shows estimated 2026 federal tax (income tax plus SE or payroll tax) for a hypothetical single filer with no other income. Subtract your own costs from the difference:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Net Profit</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Assumed S-Corp Salary</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sole Prop Federal Tax</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">S-Corp Federal Tax</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Difference (Before Costs)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">$60,000</td>
                  <td className="border border-gray-300 px-4 py-3">$36,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$12,037</td>
                  <td className="border border-gray-300 px-4 py-3">~$9,688</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">~$2,350</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">$80,000</td>
                  <td className="border border-gray-300 px-4 py-3">$48,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$16,647</td>
                  <td className="border border-gray-300 px-4 py-3">~$14,060</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">~$2,588</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">$100,000</td>
                  <td className="border border-gray-300 px-4 py-3">$60,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$22,365</td>
                  <td className="border border-gray-300 px-4 py-3">~$19,782</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">~$2,582</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">$150,000</td>
                  <td className="border border-gray-300 px-4 py-3">$85,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$37,608</td>
                  <td className="border border-gray-300 px-4 py-3">~$33,371</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">~$4,237</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">$200,000</td>
                  <td className="border border-gray-300 px-4 py-3">$110,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$53,431</td>
                  <td className="border border-gray-300 px-4 py-3">~$47,628</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">~$5,802</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-gray-700">
            <strong>Rule of thumb:</strong> the S-Corp's payroll-tax savings are partly offset by a smaller QBI deduction, so the net federal benefit in these examples is roughly half of the payroll-tax savings. If your annual payroll, accounting and state costs would eat most of the difference, the election isn't worth the hassle yet. A higher salary, state taxes, or other income will change these numbers—run your own figures in the <a href="/freelance-profit-hub/" className="text-indigo-600 font-semibold hover:underline">Freelance Profit Hub</a> or with a tax professional.
          </p>
        </section>

        {/* Liability Protection */}
        <section id="liability" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Liability Protection: Your Personal Assets at Stake</h2>

          <p className="text-lg text-gray-700 mb-6">
            The biggest non-tax difference between sole proprietorships and LLCs is <strong>liability protection</strong>—and it's potentially worth far more than tax savings.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sole Proprietorship = Zero Protection</h3>

          <p className="text-lg text-gray-700 mb-4">
            As a sole proprietor, <strong>you and your business are the same legal entity</strong>. If your business gets sued or goes into debt:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Creditors can go after your <strong>personal home</strong></li>
            <li>Your <strong>personal bank accounts</strong> can be garnished</li>
            <li>Your <strong>car, investments, and savings</strong> are at risk</li>
            <li>You're personally liable for any damages or debts</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-2 text-red-800">Hypothetical Scenario: A Client Dispute</h4>
            <p className="text-gray-700">
              Imagine a sole proprietor web designer whose e-commerce build has a checkout bug, and the client sues for lost sales. As a sole proprietor, any judgment can be collected from the designer's personal savings and property. If the contract had been signed by an LLC, a contract claim would generally be limited to the LLC's assets—but a claim that the designer was personally negligent can still reach the designer in many states. That's why an LLC and professional liability (E&amp;O) insurance work best together.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">LLC = "Limited Liability" Shield</h3>

          <p className="text-lg text-gray-700 mb-4">
            An LLC creates a <strong>separate legal entity</strong> between you and your business. If your LLC gets sued or goes into debt:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Creditors can only go after <strong>business assets</strong> (business bank account, equipment, etc.)</li>
            <li>Your <strong>personal home, car, and savings</strong> are protected</li>
            <li>You're shielded from business liabilities (with exceptions below)</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">⚠️ Exceptions to LLC Protection</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><strong>Personal guarantees:</strong> If you personally guarantee a business loan, you're liable</li>
              <li><strong>Fraud/illegal activity:</strong> LLC won't protect you from your own criminal acts</li>
              <li><strong>"Piercing the corporate veil":</strong> If you commingle personal/business funds or don't maintain separate records, courts can ignore the LLC protection</li>
              <li><strong>Your own negligence or wrongful acts:</strong> You generally remain personally liable for harm you personally cause, and licensed professionals remain liable for their own malpractice</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Who NEEDS an LLC for Liability Protection?</h3>

          <p className="text-lg text-gray-700 mb-4">
            Consider an LLC from day one if you have:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-orange-600">⚠️</span>
                High Liability Risk
              </h4>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li>Physical business location (slip-and-fall risk)</li>
                <li>Employees (employment lawsuits)</li>
                <li>Inventory/equipment (damage claims)</li>
                <li>Client projects with financial stakes ($50k+ contracts)</li>
                <li>Professional services (consulting, IT, design)</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-green-600">✅</span>
                Low Liability Risk (Sole Prop OK)
              </h4>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li>Virtual/remote freelancing (writing, design, coding)</li>
                <li>No employees (just you)</li>
                <li>Low-value contracts ($5k-10k projects)</li>
                <li>No physical products/inventory</li>
                <li>Work covered by professional liability insurance</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-700">
            <strong>Bottom line:</strong> If you're a remote freelancer with professional liability insurance and contracts under $20k, sole proprietorship is probably fine. If you have employees, a physical location, or high-value contracts, get an LLC for peace of mind.
          </p>
        </section>

        {/* Formation Costs */}
        <section id="formation-costs" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Formation Costs: What You'll Actually Pay</h2>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sole Proprietorship Costs</h3>

          <p className="text-lg text-gray-700 mb-4">
            <strong>Startup cost: often $0.</strong> You can start doing business immediately under your own name. If you want to use a different business name, you usually file a "DBA" ("Doing Business As") or assumed-name registration with your county or state, which typically carries a modest fee. Depending on your city and profession, you may also need a local business license or a professional license.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">LLC Costs in 2026</h3>

          <p className="text-lg text-gray-700 mb-4">
            LLC costs are set by each state and change from time to time, so check your Secretary of State's website for current amounts. Expect some combination of:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>A one-time filing fee</strong> for the Articles of Organization (Certificate of Formation in some states).</li>
            <li><strong>A recurring fee or tax</strong>—an annual or biennial report fee, a franchise tax, or both. These range from nothing in some states to several hundred dollars a year in others.</li>
            <li><strong>State-specific extras</strong>, such as a newspaper publication requirement in a few states.</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">⚠️ California Example</p>
            <p className="text-gray-700">
              California is the best-known high-cost state: most LLCs doing business there owe an <strong>$800 minimum annual franchise tax</strong> to the Franchise Tax Board (plus an additional fee once gross receipts pass certain levels), on top of the formation filing fee. For a freelancer netting $30,000, that $800 is a meaningful cost to weigh against the liability protection.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">💡 Registered Agent Requirement</p>
            <p className="text-gray-700 mb-2">
              All LLCs must have a "registered agent" with a physical address in the state to receive legal documents. Options:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><strong>Yourself (free):</strong> Use your home/office address (appears in public records)</li>
              <li><strong>Registered agent service (annual fee):</strong> Keeps your address private, handles legal mail</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Should You Form in Your Home State or Delaware/Wyoming?</h3>

          <p className="text-lg text-gray-700 mb-4">
            Many online services push Delaware or Wyoming LLCs. Here's the truth:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>If you live and work in California</strong> and form a Delaware LLC, you'll generally pay Delaware's annual LLC tax AND register in California as a "foreign LLC"—which brings California's $800 minimum franchise tax anyway. You pay twice.</li>
            <li><strong>Delaware advantage:</strong> Mainly matters for venture-backed startups seeking funding or complex corporate structures</li>
            <li><strong>Best choice for most freelancers:</strong> Form in the state where you live and physically do the work</li>
          </ul>

          <p className="text-lg text-gray-700">
            <strong>Bottom line:</strong> Forming in another state does not avoid your home state's fees or taxes if you are doing business at home. Compare your own state's costs with the value of liability protection, and treat any "cheap state" pitch with caution.
          </p>
        </section>

        {/* S-Corp Election */}
        <section id="scorp" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">S-Corp Election: The Tax Savings Multiplier</h2>

          <p className="text-lg text-gray-700 mb-6">
            This is where LLCs truly shine. An <strong>S-Corporation is NOT a business structure</strong>—it's a tax classification you can elect for your LLC (or regular corporation).
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">How S-Corp Status Works</h3>

          <p className="text-lg text-gray-700 mb-4">
            Normally, LLC profits flow through to your personal return and are hit with:
          </p>

          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>15.3% self-employment tax (Social Security 12.4% + Medicare 2.9%)</li>
            <li>Income tax (10%-37% based on bracket)</li>
          </ul>

          <p className="text-lg text-gray-700 mb-4">
            With S-Corp election, you become an <strong>employee of your own LLC</strong>. You pay yourself a W-2 salary (subject to payroll taxes) and take the rest as <strong>distributions</strong> (which avoid the 15.3% SE tax).
          </p>

          <div className="bg-green-50 rounded-lg p-6 mb-6 border-l-4 border-green-600">
            <h4 className="font-semibold text-lg mb-3">Example (Hypothetical, 2026): $120,000 Net Profit, Single Filer</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-2 text-red-700">❌ Regular LLC (Default)</h5>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>• Net profit: $120,000</p>
                  <p>• SE tax: $120k × 92.35% × 15.3% = <strong>$16,955</strong></p>
                  <p>• Income tax (after standard and QBI deductions): ~$11,506</p>
                  <p>• <strong>Total federal tax: ~$28,462</strong></p>
                </div>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-green-700">✅ LLC with S-Corp Election</h5>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>• W-2 salary: $70,000 (reasonable)</p>
                  <p>• Distributions: $50,000</p>
                  <p>• Payroll tax on salary: $70k × 15.3% = <strong>$10,710</strong></p>
                  <p>• Income tax: ~$14,428 (higher, because salary isn't QBI)</p>
                  <p>• <strong>Total federal tax: ~$25,138</strong></p>
                  <p className="pt-2 border-t border-green-300 font-bold text-green-700">Savings: ~$3,324/year before costs (payroll-tax savings alone: $6,245)</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">S-Corp Requirements & Costs</h3>

          <p className="text-lg text-gray-700 mb-4">
            S-Corp election adds administrative burden:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Payroll:</strong> software or a payroll service to run W-2 payroll, withhold taxes and file state forms</li>
            <li><strong>Quarterly payroll tax filings:</strong> Form 941 every quarter</li>
            <li><strong>Annual W-2 and W-3 forms</strong> (handled by payroll service)</li>
            <li><strong>S-Corp tax return (Form 1120-S):</strong> A separate business return, usually prepared by a professional, plus a Schedule K-1 to you</li>
            <li><strong>Reasonable salary requirement:</strong> Must pay yourself fair market value for your services—there is no safe percentage</li>
            <li><strong>State taxes:</strong> Some states tax S-Corps at the entity level. California, for example, charges S-Corporations a 1.5% franchise tax on net income with an $800 minimum.</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">⚠️ When to Make the S-Corp Election</p>
            <p className="text-gray-700 mb-2">
              For a calendar-year business, file <strong>Form 2553</strong> with the IRS by March 15 to elect S-Corp status for the current tax year (a new entity has 2 months and 15 days from the start of its first tax year). If you miss the deadline, the election generally takes effect the next year, although the IRS offers relief for late elections in some cases. Many owners wait until profit is consistently well above a reasonable salary, so the savings clearly exceed the added costs.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">S-Corp Salary Guidelines by Profit Level</h3>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Net Profit</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Reasonable Salary</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Profit Above Salary</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Payroll-Tax Savings Only</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">$60,000</td>
                  <td className="border border-gray-300 px-4 py-3">$36,000 (60%)</td>
                  <td className="border border-gray-300 px-4 py-3">$24,000 (40%)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">~$2,970</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">$80,000</td>
                  <td className="border border-gray-300 px-4 py-3">$48,000 (60%)</td>
                  <td className="border border-gray-300 px-4 py-3">$32,000 (40%)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">~$3,960</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">$100,000</td>
                  <td className="border border-gray-300 px-4 py-3">$60,000 (60%)</td>
                  <td className="border border-gray-300 px-4 py-3">$40,000 (40%)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">~$4,950</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">$150,000</td>
                  <td className="border border-gray-300 px-4 py-3">$85,000 (57%)</td>
                  <td className="border border-gray-300 px-4 py-3">$65,000 (43%)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">~$8,189</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">$200,000</td>
                  <td className="border border-gray-300 px-4 py-3">$110,000 (55%)</td>
                  <td className="border border-gray-300 px-4 py-3">$90,000 (45%)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">~$11,404</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-gray-700">
            Salaries shown are illustrations, not IRS guidance. Payroll-tax savings compare self-employment tax with the combined employee and employer payroll tax on the salary; the total federal effect (after the smaller QBI deduction) is in the earlier table. Check the Bureau of Labor Statistics (<a href="https://www.bls.gov/oes/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">bls.gov</a>) for wage data in your occupation and location to support your salary choice.
          </p>
        </section>

        {/* Decision Framework */}
        <section id="decision" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Which Structure Should You Choose?</h2>

          <p className="text-lg text-gray-700 mb-6">
            Here's a clear decision framework based on your income and business risk:
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-semibold mb-3 text-green-800">Choose Sole Proprietorship If:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Modest net profit</strong> (S-Corp savings would be small relative to the added costs)</li>
                <li><strong>Low liability risk</strong> (remote freelancer, no employees, low-value contracts)</li>
                <li><strong>You have professional liability insurance</strong> that covers your work</li>
                <li><strong>You want minimal administrative burden</strong> (no annual reports, no separate bank account required)</li>
                <li><strong>You're testing a business idea</strong> before committing to a formal structure</li>
              </ul>
              <p className="mt-4 text-gray-700 italic">
                💡 You can always convert to an LLC later as profit grows or liability concerns appear.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Choose LLC (Default Tax Treatment) If:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Moderate profit</strong> (liability protection justified, but S-Corp savings not yet clearly above the costs)</li>
                <li><strong>Moderate liability risk</strong> (client projects $20k-50k, some equipment/inventory)</li>
                <li><strong>You want business credibility</strong> ("John Smith LLC" on contracts)</li>
                <li><strong>You plan to grow</strong> and want the option to elect S-Corp later</li>
                <li><strong>Your state's LLC fees are modest</strong> (check your Secretary of State)</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
              <h3 className="text-xl font-semibold mb-3 text-purple-800">Choose LLC with S-Corp Election If:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Profit comfortably above a reasonable salary</strong> (tax savings clearly outweigh admin costs)</li>
                <li><strong>Consistent income</strong> (not wildly fluctuating month-to-month)</li>
                <li><strong>You're willing to pay for payroll</strong> and a separate business tax return</li>
                <li><strong>You understand "reasonable salary" requirements</strong> (IRS scrutiny if too low)</li>
                <li><strong>You're comfortable with quarterly payroll filings</strong> (or paying someone to handle it)</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Potential federal savings in our examples: roughly $2,300–$5,800/year before costs
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
              <h3 className="text-xl font-semibold mb-3 text-orange-800">Get an LLC Immediately (Regardless of Income) If:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Physical business location</strong> (retail, office, studio—slip-and-fall liability)</li>
                <li><strong>Employees or contractors</strong> (employment disputes, workers' comp claims)</li>
                <li><strong>High-value contracts</strong> ($50k+ projects where mistakes = lawsuits)</li>
                <li><strong>Product-based business</strong> (inventory, product liability claims)</li>
                <li><strong>Professional services with financial stakes</strong> (consulting, IT, financial planning)</li>
                <li><strong>Multiple business partners</strong> (LLC operating agreement defines ownership/roles)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Common Scenarios</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">📝 Freelance Writer, $30k/year, Remote Work</h4>
              <p className="text-gray-700"><strong>Possible fit:</strong> Sole proprietorship. Low liability risk, profit too low for S-Corp savings to matter, minimal admin. Professional liability insurance can cover client claims.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">💻 Software Developer, $85k/year, Remote Contracts</h4>
              <p className="text-gray-700"><strong>Possible fit:</strong> LLC with S-Corp election—if a $50k salary is reasonable for the work. In 2026 that cuts payroll-type tax by ~$4,360 and total federal tax by ~$2,490 before costs. Note that typical developer pay may support a higher salary, which shrinks the savings; document your choice with wage data.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">🎨 Graphic Designer, $55k/year, Some Client Meetings</h4>
              <p className="text-gray-700"><strong>Possible fit:</strong> LLC (default tax treatment). Liability protection for client disputes, while S-Corp savings may not yet justify the admin costs. Re-evaluate as profit grows.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">📸 Wedding Photographer, $70k/year, Equipment Worth $30k</h4>
              <p className="text-gray-700"><strong>Possible fit:</strong> LLC, possibly with S-Corp election. Liability protection for equipment/venue incidents; with a $42k salary, 2026 federal tax falls by ~$2,680 before costs—compare that with payroll and tax-prep fees, and insure the equipment.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">🏗️ General Contractor, $120k/year, 2 Employees</h4>
              <p className="text-gray-700"><strong>Possible fit:</strong> LLC (strongly worth considering given employees and job-site risk), likely with S-Corp election. With a $70k salary, 2026 federal tax falls by ~$3,320 before costs. You'll already run payroll for employees, so the extra admin is smaller.</p>
            </div>
          </div>
        </section>

        {/* Conversion */}
        <section id="conversion" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Converting from Sole Proprietorship to LLC</h2>

          <p className="text-lg text-gray-700 mb-6">
            Most freelancers start as sole proprietors and convert to LLC when their income or risk justifies it. Here's the step-by-step process:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Conversion Steps</h3>

          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-semibold text-lg mb-2">File LLC Formation Documents</h4>
                <p className="text-gray-700">File Articles of Organization with your state (online or by mail). Fees and processing times vary by state; many states offer paid expedited processing.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Get an EIN from the IRS</h4>
                <p className="text-gray-700">Apply free on <a href="https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">IRS.gov</a>; the online application issues the number immediately. Use it on W-9s, bank accounts and payroll filings. If your LLC is a disregarded entity, your income still goes on your personal Form 1040.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Open a Business Bank Account</h4>
                <p className="text-gray-700">Use your LLC formation docs + EIN to open a business checking account. This separates business/personal finances (critical for "piercing the corporate veil" protection).</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Update Contracts & Invoices</h4>
                <p className="text-gray-700">Change all new contracts from "John Smith" to "John Smith LLC." Update invoice templates, email signatures, website footer. Notify existing clients of the business entity change.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Transfer Business Assets (Optional)</h4>
                <p className="text-gray-700">If you have equipment, domain names, or intellectual property, formally transfer ownership from yourself to the LLC. Document with a bill of sale.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
              <div>
                <h4 className="font-semibold text-lg mb-2">File Taxes with Your New EIN</h4>
                <p className="text-gray-700">A single-member LLC that keeps the default (disregarded) tax treatment continues to report on Schedule C of your Form 1040, so the business's income for the whole year stays on your personal return. Keep records showing the conversion date and which contracts moved to the LLC.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">7</div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Elect S-Corp Status (If Applicable)</h4>
                <p className="text-gray-700">If the numbers work, file Form 2553 within 2 months and 15 days of the start of the tax year you want it to take effect (for a new LLC, its first tax year). Set up payroll before you pay yourself your first salary.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">⚠️ Mid-Year Conversion Tax Considerations</p>
            <p className="text-gray-700">
              If you convert mid-year (e.g., June 1) and keep default tax treatment, the year's business income generally still lands on your Schedule C, so taxes barely change. What changes is who signs contracts and owns assets from June 1 on. If you also elect S-Corp status, the year splits between Schedule C and the S-Corp return—ask a tax professional to set that up.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Conversion Costs</h3>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>LLC filing fee:</strong> one-time, set by your state</li>
            <li><strong>Recurring state fee or franchise tax:</strong> varies by state (California: $800 minimum)</li>
            <li><strong>Registered agent:</strong> free if you serve yourself, or an annual fee for a service</li>
            <li><strong>Business bank account:</strong> many banks offer free or low-cost small-business accounts</li>
            <li><strong>Operating agreement:</strong> free templates exist; attorney drafting costs more (recommended even for single-member LLCs)</li>
          </ul>

          <p className="text-lg text-gray-700">
            <strong>Timeline:</strong> Processing time depends on your state. You can operate as a sole prop until the LLC is approved, then switch to the LLC for all new contracts.
          </p>
        </section>

        {/* Related Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Financial Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
              className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Self-Employment Tax Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Calculate your 15.3% SE tax liability and see S-Corp savings potential</p>
              <span className="text-purple-600 text-sm font-medium group-hover:underline">Calculate SE Tax →</span>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX)}
              className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Quarterly Tax Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Estimate quarterly tax payments for sole prop or LLC (includes SE tax)</p>
              <span className="text-orange-600 text-sm font-medium group-hover:underline">Estimate Payments →</span>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
              className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <div className="text-3xl mb-3">📄</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Deduction Tracker</h3>
              <p className="text-sm text-gray-600 mb-3">Track business expenses and deductions (available for both structures)</p>
              <span className="text-green-600 text-sm font-medium group-hover:underline">Track Deductions →</span>
            </button>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Tax Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => onNavigate?.(ToolType.BLOG_TAX_DEDUCTIONS)}
              className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 text-3xl">
                  💰
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-green-600 transition-colors">
                    Tax Deductions for Freelancers 2026 →
                  </h3>
                  <p className="text-sm text-gray-600">Complete guide to write-offs available for both sole props and LLCs (home office, mileage, equipment, health insurance)</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.BLOG_SE_TAX)}
              className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 text-3xl">
                  📈
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors">
                    Self-Employment Tax Guide 2026 →
                  </h3>
                  <p className="text-sm text-gray-600">Understand the 15.3% SE tax, Schedule SE, and how to reduce your liability with deductions</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.BLOG_1099_W2)}
              className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 text-3xl">
                  📄
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">
                    1099 vs W-2 Comparison →
                  </h3>
                  <p className="text-sm text-gray-600">Compare independent contractor (1099) vs employee (W-2) tax treatment—critical for choosing your business structure</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.BLOG_QUARTERLY_TAX)}
              className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0 text-3xl">
                  📊
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-orange-600 transition-colors">
                    Quarterly Estimated Taxes Guide →
                  </h3>
                  <p className="text-sm text-gray-600">How to calculate and pay quarterly taxes as a sole prop or LLC (avoid underpayment penalties)</p>
                </div>
              </div>
            </button>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className="text-2xl text-gray-400">{openFAQ === index ? '−' : '+'}</span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Sources</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>IRS Publication 334, Tax Guide for Small Business: <a href="https://www.irs.gov/publications/p334" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/publications/p334</a></li>
            <li>IRS Publication 15 (Circular E), Employer's Tax Guide: <a href="https://www.irs.gov/publications/p15" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/publications/p15</a></li>
            <li>IRS Publication 505, Tax Withholding and Estimated Tax: <a href="https://www.irs.gov/publications/p505" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/publications/p505</a></li>
            <li>Your state's Secretary of State website for current LLC filing and annual fees</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">
            Figures use 2026 federal brackets and standard deduction (IRS Rev. Proc. 2025-32), the $184,500 Social Security wage base, and the permanent 20% QBI deduction. Examples are hypothetical, ignore state taxes and S-Corp operating costs, and are educational—not individualized legal or tax advice. For quarterly payments under either structure, see our <a href="/blog/quarterly-estimated-taxes-complete-guide/" className="text-indigo-600 font-semibold hover:underline">quarterly estimated taxes guide</a> or the <a href="/quarterly-estimated-tax-calculator/" className="text-indigo-600 font-semibold hover:underline">quarterly tax calculator</a>; for the employee-versus-contractor angle, read <a href="/blog/1099-vs-w2-comparison-2025/" className="text-indigo-600 font-semibold hover:underline">1099 vs W-2</a>.
          </p>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Make the Right Choice?</h2>
          <p className="text-lg text-blue-50 mb-6">
            Use our calculators to see your exact tax savings with different structures
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Calculate SE Tax Savings
            </button>
            <button
              onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX)}
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Estimate Quarterly Payments
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LLCvsSoleProp2025;

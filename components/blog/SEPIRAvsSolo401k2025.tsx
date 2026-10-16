'use client';

import React, { useState } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const SEPIRAvsSolo401k2025: React.FC<BlogProps> = ({ onNavigate }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "Which is better: SEP-IRA or Solo 401(k)?",
      answer: "For a one-person business, a Solo 401(k) usually allows more because it lets you contribute up to $24,500 as the 'employee' (2026) plus up to 25% of compensation as the 'employer'—about 20% of net self-employment earnings for a sole proprietor—up to $72,000 total before catch-ups. A SEP-IRA allows only the employer part (max $72,000). Example: on $80,000 of net profit, a Solo 401(k) allows about $39,370 vs about $14,870 for a SEP-IRA. A SEP-IRA is simpler for people who want minimal paperwork and plan to contribute only the employer-sized amount."
    },
    {
      question: "Can I contribute to both SEP-IRA and Solo 401(k) in the same year?",
      answer: "Not in a way that raises your total. Contributions your business makes to both plans count toward the same $72,000 annual additions limit (2026), and many brokerage prototype Solo 401(k) documents don't allow you to maintain another plan for the same year. Your $24,500 employee deferral limit is also shared with any other 401(k) or 403(b) you contribute to, such as at a day job. Separately, you can still contribute to a traditional or Roth IRA ($7,500 limit for 2026, plus $1,100 if 50+). Most self-employed people choose ONE plan."
    },
    {
      question: "What are the 2026 contribution limits for SEP-IRA vs Solo 401(k)?",
      answer: "2026 SEP-IRA: up to 25% of compensation—for a sole proprietor, about 20% of net profit after deducting half of SE tax—max $72,000. 2026 Solo 401(k): employee deferrals up to $24,500 PLUS the same employer contribution, combined max $72,000. Age 50+ can add an $8,000 catch-up (total $80,000), and ages 60–63 can add $11,250 instead (total $83,250). SEP-IRAs have no catch-up provision."
    },
    {
      question: "Is Solo 401(k) setup more complicated than SEP-IRA?",
      answer: "Yes, slightly. SEP-IRA: a short setup at most large brokerages (often using IRS Form 5305-SEP or the provider's form) and no annual IRS plan filing. Solo 401(k): requires a plan adoption agreement, often an EIN, and Form 5500-EZ each year once plan assets exceed $250,000. For many people the extra contribution room (up to $24,500 of employee deferrals) is worth the extra paperwork."
    },
    {
      question: "When are the contribution deadlines for SEP-IRA vs Solo 401(k)?",
      answer: "SEP-IRA: You can set up the plan and contribute up to your tax filing deadline, including extensions. Solo 401(k) EMPLOYEE deferrals: you generally must elect them by December 31 of the tax year; when the money must actually be deposited depends on your business type and plan rules. Solo 401(k) EMPLOYER contributions: can be made until the tax filing deadline (including extensions). SECURE 2.0 also lets a sole proprietor open a new Solo 401(k) after year-end and make first-year employee deferrals up to the filing deadline (without extensions)—confirm with your provider."
    },
    {
      question: "Can I do a Roth Solo 401(k) but not a Roth SEP-IRA?",
      answer: "Mostly. Many Solo 401(k) plans offer Roth deferrals, so your employee contributions (up to $24,500 in 2026) can go in after-tax and come out tax-free in retirement if withdrawal rules are met. SECURE 2.0 also allows Roth SEP contributions, but relatively few providers offer them, so most SEP-IRAs are pre-tax only. A separate Roth IRA ($7,500 for 2026, subject to income limits) is another option."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Navigation */}
      <button
        onClick={() => onNavigate?.(ToolType.DASHBOARD)}
        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
      >
        ← Back to Dashboard
      </button>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-4xl">🐷</div>
          <h1 className="text-4xl font-bold">SEP-IRA vs Solo 401(k) 2026</h1>
        </div>
        <p className="text-xl text-indigo-50 mb-4">
          Complete Contribution Limits & Comparison for Self-Employed
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span>💰 $72k Max Contributions</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📈 Tax-Deferred Growth</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📅 2026 Limits & Deadlines</span>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-indigo-600">📋</span>
          Table of Contents
        </h2>
        <div className="grid md:grid-cols-2 gap-2">
          <button onClick={() => scrollToSection('overview')} className="text-left text-indigo-600 hover:text-indigo-800 hover:underline">
            → Quick Comparison Overview
          </button>
          <button onClick={() => scrollToSection('contribution-limits')} className="text-left text-indigo-600 hover:text-indigo-800 hover:underline">
            → 2026 Contribution Limits
          </button>
          <button onClick={() => scrollToSection('sep-ira')} className="text-left text-indigo-600 hover:text-indigo-800 hover:underline">
            → SEP-IRA Deep Dive
          </button>
          <button onClick={() => scrollToSection('solo-401k')} className="text-left text-indigo-600 hover:text-indigo-800 hover:underline">
            → Solo 401(k) Deep Dive
          </button>
          <button onClick={() => scrollToSection('scenarios')} className="text-left text-indigo-600 hover:text-indigo-800 hover:underline">
            → Hypothetical Contribution Scenarios
          </button>
          <button onClick={() => scrollToSection('decision')} className="text-left text-indigo-600 hover:text-indigo-800 hover:underline">
            → Which Plan to Choose
          </button>
          <button onClick={() => scrollToSection('setup')} className="text-left text-indigo-600 hover:text-indigo-800 hover:underline">
            → Setup Process & Costs
          </button>
          <button onClick={() => scrollToSection('faqs')} className="text-left text-indigo-600 hover:text-indigo-800 hover:underline">
            → Frequently Asked Questions
          </button>
          <button onClick={() => scrollToSection('sources')} className="text-left text-indigo-600 hover:text-indigo-800 hover:underline">
            → Sources
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose max-w-none">

        {/* Overview */}
        <section id="overview" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">SEP-IRA vs Solo 401(k): Quick Comparison</h2>

          <p className="text-lg text-gray-700 mb-6">
            If you're self-employed, a freelancer, or run a one-person business, choosing between a <strong>SEP-IRA</strong> and <strong>Solo 401(k)</strong> is one of the most important retirement planning decisions you'll make. Both allow large tax-deferred contributions (up to $72,000 in 2026), but they work very differently. If you have a W-2 job too, see our <a href="/blog/401k-vs-ira-comparison-2025/" className="text-indigo-600 font-semibold hover:underline">401(k) vs IRA comparison</a> for how workplace plans fit in.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">💡 Bottom Line Up Front</p>
            <p className="text-gray-700">
              <strong>Solo 401(k)</strong> allows more for most one-person businesses because the $24,500 employee deferral (2026) stacks on top of the same employer contribution a SEP allows. <strong>SEP-IRA</strong> is simpler and fine if you only plan to contribute the employer-sized amount (about 20% of net profit). Both cap at $72,000 before catch-ups, but a Solo 401(k) reaches the cap at roughly $252,000 of net profit, while a SEP-IRA needs roughly $376,500.
            </p>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">SEP-IRA</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Solo 401(k)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">2026 Max Contribution</td>
                  <td className="border border-gray-300 px-4 py-3">$72,000 (25% of compensation)</td>
                  <td className="border border-gray-300 px-4 py-3">$72,000 ($24.5k employee + profit-sharing)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Age 50+ Catch-Up</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">❌ Not available</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">✅ +$8,000 ($80,000 total); ages 60–63: +$11,250</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Contribution Formula</td>
                  <td className="border border-gray-300 px-4 py-3">Employer only: ~20% of net SE earnings</td>
                  <td className="border border-gray-300 px-4 py-3">$24.5k + ~20% of net SE earnings</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Roth Option</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">⚠️ Allowed since 2023, but rarely offered</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Roth deferrals widely available</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Loan Option</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">❌ Cannot borrow</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Borrow up to $50k</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Setup Complexity</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">Very simple</td>
                  <td className="border border-gray-300 px-4 py-3 text-orange-600">Moderate (plan document)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Annual Filings</td>
                  <td className="border border-gray-300 px-4 py-3">None</td>
                  <td className="border border-gray-300 px-4 py-3">Form 5500-EZ if $250k+ assets</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Contribution Deadline</td>
                  <td className="border border-gray-300 px-4 py-3">Tax filing deadline (Apr 15 + extensions)</td>
                  <td className="border border-gray-300 px-4 py-3">Employee: elect by Dec 31 | Employer: tax deadline</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Setup Cost</td>
                  <td className="border border-gray-300 px-4 py-3">Often $0 at large brokerages</td>
                  <td className="border border-gray-300 px-4 py-3">Often $0 for brokerage prototype plans</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Best For</td>
                  <td className="border border-gray-300 px-4 py-3">Simplicity, future employees, last-minute contributions</td>
                  <td className="border border-gray-300 px-4 py-3">Max contributions, Roth option, catch-ups</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Contribution Limits */}
        <section id="contribution-limits" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">2026 Contribution Limits Explained</h2>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">SEP-IRA Contribution Limits (2026)</h3>

          <p className="text-lg text-gray-700 mb-4">
            The SEP rule is <strong>25% of compensation</strong>, but for a sole proprietor "compensation" is net profit minus half of SE tax minus the contribution itself. That works out to <strong>20% of (net profit − half of SE tax)</strong>. The maximum contribution is <strong>$72,000</strong> in 2026, and no more than $360,000 of compensation can be counted.
          </p>

          <div className="bg-gray-100 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">SEP-IRA Calculation Example: $100,000 Net Profit</h4>
            <div className="space-y-2 text-gray-700">
              <p>• <strong>Net self-employment income:</strong> $100,000</p>
              <p>• <strong>Minus 1/2 SE tax:</strong> $100k × 92.35% × 15.3% ÷ 2 = -$7,065</p>
              <p>• <strong>Adjusted net income:</strong> $92,935</p>
              <p>• <strong>SEP-IRA contribution (20% effective rate):</strong> $92,935 × 0.20 = <span className="text-indigo-600 font-semibold">$18,587</span></p>
              <p className="mt-3 text-sm text-gray-600">Check: $92,935 − $18,587 = $74,348 of compensation, and 25% × $74,348 = $18,587. IRS Publication 560 has the official worksheet.</p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Solo 401(k) Contribution Limits (2026)</h3>

          <p className="text-lg text-gray-700 mb-4">
            Solo 401(k) has TWO contribution types that stack:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Employee deferrals:</strong> Up to $24,500 (up to 100% of your net earnings) — this is the game-changer</li>
            <li><strong>Employer profit-sharing:</strong> Up to 25% of compensation (same formula as SEP-IRA: about 20% of net profit after half of SE tax)</li>
            <li><strong>Combined maximum:</strong> $72,000 in 2026 (catch-ups are on top)</li>
            <li><strong>Age 50+ catch-up:</strong> Additional $8,000 employee deferrals (total $80,000); ages 60–63 get $11,250 instead (total $83,250)</li>
          </ul>

          <div className="bg-green-50 rounded-lg p-6 mb-6 border-l-4 border-green-600">
            <h4 className="font-semibold text-lg mb-3">Solo 401(k) Calculation Example: $100,000 Net Profit</h4>
            <div className="space-y-2 text-gray-700">
              <p>• <strong>Net self-employment income:</strong> $100,000</p>
              <p>• <strong>Employee deferral:</strong> $24,500 (max for 2026, under age 50)</p>
              <p>• <strong>Base for employer contribution:</strong> $100,000 − $7,065 (1/2 SE tax) = $92,935 (employee deferrals don't reduce this base)</p>
              <p>• <strong>Employer profit-sharing (20% effective rate):</strong> $92,935 × 0.20 = $18,587</p>
              <p>• <strong>Total Solo 401(k) contribution:</strong> $24,500 + $18,587 = <span className="text-green-600 font-semibold text-xl">$43,087</span></p>
              <p className="mt-4 pt-4 border-t border-green-300 font-bold text-green-700">
                Solo 401(k) allows $24,500 MORE than SEP-IRA on the same income.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Side-by-Side at Different Income Levels</h3>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Net Profit</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">SEP-IRA Max</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Solo 401(k) Max</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Advantage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">$40,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$7,435</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">~$31,935</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">Solo 401(k) +$24,500</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">$60,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$11,152</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">~$35,652</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">Solo 401(k) +$24,500</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">$80,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$14,870</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">~$39,370</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">Solo 401(k) +$24,500</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">$100,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$18,587</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">~$43,087</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">Solo 401(k) +$24,500</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">$150,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$27,881</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">~$52,381</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">Solo 401(k) +$24,500</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">$200,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$37,177</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">~$61,677</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">Solo 401(k) +$24,500</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">$300,000</td>
                  <td className="border border-gray-300 px-4 py-3">~$56,909</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">$72,000 (max)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">Solo 401(k) +$15,091</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">~$376,500+</td>
                  <td className="border border-gray-300 px-4 py-3">$72,000 (max)</td>
                  <td className="border border-gray-300 px-4 py-3">$72,000 (max)</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-600">Equal at max</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
            <p className="text-gray-800 font-semibold mb-2">⚠️ Key Insight</p>
            <p className="text-gray-700">
              Below roughly $252,000 of net profit, a Solo 401(k) allows exactly the <strong>$24,500 employee deferral more</strong> than a SEP-IRA (plus any catch-up). The gap narrows above that level and closes at roughly $376,500, where both hit the $72,000 cap. Figures are for 2026, assume a sole proprietor with no W-2 wages, and are rounded.
            </p>
          </div>
        </section>

        {/* SEP-IRA Deep Dive */}
        <section id="sep-ira" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">SEP-IRA: Simple, Flexible Retirement Plan</h2>

          <p className="text-lg text-gray-700 mb-6">
            SEP-IRA stands for <strong>Simplified Employee Pension Individual Retirement Account</strong>. It's the easiest self-employed retirement plan to set up and maintain.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">How SEP-IRA Works</h3>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Contributions:</strong> You (as the employer) contribute up to 25% of compensation (about 20% of net profit after half of SE tax for a sole proprietor)</li>
            <li><strong>Tax treatment:</strong> Contributions are tax-deductible, reduce your taxable income immediately</li>
            <li><strong>Withdrawals:</strong> Tax-deferred growth until retirement; withdrawals taxed as ordinary income</li>
            <li><strong>Required distributions:</strong> RMDs generally start at age 73 (age 75 if you were born in 1960 or later)</li>
            <li><strong>Early withdrawal penalty:</strong> 10% penalty + income tax if withdrawn before age 59½ (with exceptions)</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">SEP-IRA Advantages</h3>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-green-600">✅</span>
                Pros
              </h4>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li><strong>Extremely simple setup:</strong> short online application or IRS Form 5305-SEP</li>
                <li><strong>No annual filings:</strong> No Form 5500 required</li>
                <li><strong>Flexible contributions:</strong> Contribute different amounts each year, from nothing up to the maximum</li>
                <li><strong>Late contribution deadline:</strong> Contribute until tax filing deadline (April 15 + extensions)</li>
                <li><strong>Low cost:</strong> often no setup fee at large brokerages</li>
                <li><strong>Scales with employees:</strong> If you hire later, SEP-IRA contributions are same % for everyone</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-red-600">⚠️</span>
                Cons
              </h4>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li><strong>Lower contributions at typical income:</strong> employer amount only vs Solo 401(k)'s $24.5k + employer amount</li>
                <li><strong>Limited Roth access:</strong> Roth SEP contributions are legal but few providers offer them</li>
                <li><strong>No catch-up contributions:</strong> Age 50+ get no extra contribution room</li>
                <li><strong>No loan provision:</strong> Cannot borrow from your SEP-IRA</li>
                <li><strong>Must contribute same % for eligible employees:</strong> If you contribute for yourself, you must contribute the same percentage of pay for eligible employees</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Who Should Choose SEP-IRA?</h3>

          <p className="text-lg text-gray-700 mb-4">
            SEP-IRA is best for:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Simplicity seekers:</strong> You value minimal paperwork over maximum contributions</li>
            <li><strong>Variable income:</strong> Your income fluctuates wildly year-to-year (easy to adjust contributions)</li>
            <li><strong>Lower contribution goals:</strong> You only plan to save about 20% of net profit or less</li>
            <li><strong>Very high earners (~$376k+ net profit):</strong> Both plans max at $72k (before catch-ups), so SEP-IRA's simplicity can win</li>
            <li><strong>Future employees possible:</strong> You might hire W-2 employees (SEP-IRA scales better than Solo 401k)</li>
            <li><strong>Last-minute savers:</strong> You often wait until tax time to decide retirement contributions</li>
          </ul>
        </section>

        {/* Solo 401k Deep Dive */}
        <section id="solo-401k" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Solo 401(k): Maximum Contribution Power</h2>

          <p className="text-lg text-gray-700 mb-6">
            Solo 401(k) (also called Individual 401(k) or One-Participant 401(k)) is a traditional 401(k) plan designed for self-employed individuals with no employees (except a spouse).
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">How Solo 401(k) Works</h3>

          <p className="text-lg text-gray-700 mb-4">
            You wear TWO hats with a Solo 401(k):
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>As the employee:</strong> Defer up to $24,500 of your income in 2026 (like a W-2 employee's 401k contributions)</li>
            <li><strong>As the employer:</strong> Contribute up to 25% of your compensation as "profit-sharing" (about 20% of net profit after half of SE tax)</li>
            <li><strong>Combined limit:</strong> Total contributions capped at $72,000 (or $80,000 if age 50+; $83,250 at ages 60–63)</li>
          </ul>

          <div className="bg-indigo-50 rounded-lg p-6 mb-6 border-l-4 border-indigo-600">
            <h4 className="font-semibold text-lg mb-3">Example (Hypothetical): $90,000 Net Profit, Age 52</h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Employee Deferrals:</strong></p>
              <p>• Base limit: $24,500</p>
              <p>• Age 50+ catch-up: +$8,000</p>
              <p>• <strong>Total employee:</strong> $32,500</p>

              <p className="mt-3"><strong>Employer Profit-Sharing:</strong></p>
              <p>• Net profit: $90,000</p>
              <p>• Minus 1/2 SE tax: −$6,359</p>
              <p>• Base: $83,641</p>
              <p>• Employer contribution (20% effective rate): $16,728</p>

              <p className="mt-3 pt-3 border-t border-indigo-300 font-bold text-indigo-700">
                Total 2026 Contribution: $32,500 + $16,728 = $49,228
              </p>
              <p className="text-sm text-gray-600 mt-2">
                (Compare to SEP-IRA: ~$16,728 on the same income — $32,500 less.)
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Solo 401(k) Unique Features</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
              <h4 className="font-semibold mb-2">🎯 Roth 401(k) Option</h4>
              <p className="text-gray-700 text-sm">
                If your plan offers it, you can designate all or part of your employee deferrals (up to $24,500) as <strong>Roth contributions</strong>. These are after-tax now, and qualified withdrawals in retirement are tax-free. Roth SEP contributions are legally possible but much less widely available. Note: starting in 2026, people whose prior-year FICA wages exceeded an IRS threshold must make 401(k) catch-up contributions as Roth; this mainly affects S-Corp owners who pay themselves W-2 wages.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
              <h4 className="font-semibold mb-2">💰 Loan Provision</h4>
              <p className="text-gray-700 text-sm">
                If your plan document allows loans, you can borrow up to <strong>$50,000 or 50% of your vested balance</strong> (whichever is less) and pay it back with interest to yourself. Many brokerage prototype plans don't offer loans, so check before you choose a provider.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
              <h4 className="font-semibold mb-2">📈 Mega Backdoor Roth (Advanced)</h4>
              <p className="text-gray-700 text-sm">
                If your Solo 401(k) plan document allows it (most free brokerage plans don't), you can make after-tax contributions beyond the deferral limit, up to the $72k total, and convert them to Roth. This is the "mega backdoor Roth" strategy for high earners.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Solo 401(k) Advantages & Disadvantages</h3>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-green-600">✅</span>
                Pros
              </h4>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li><strong>Much higher contributions:</strong> up to $24,500 more at typical income levels vs SEP-IRA</li>
                <li><strong>$24,500 employee deferrals:</strong> Contribute from the first dollar earned (not just ~20%)</li>
                <li><strong>Roth option:</strong> Tax-free qualified withdrawals via Roth 401(k) contributions</li>
                <li><strong>Age 50+ catch-up:</strong> Extra $8,000/year (total $80,000 vs SEP's $72k); $11,250 at ages 60–63</li>
                <li><strong>Loan access:</strong> Borrow up to $50k if your plan allows loans</li>
                <li><strong>Low cost:</strong> prototype plans at large brokerages often have no setup fee</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-red-600">⚠️</span>
                Cons
              </h4>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li><strong>Slightly more setup:</strong> plan adoption agreement and usually an EIN</li>
                <li><strong>Form 5500-EZ filing:</strong> Required annually if assets exceed $250k</li>
                <li><strong>December 31 deadline:</strong> Employee deferral elections generally must be made by Dec 31 for an existing plan</li>
                <li><strong>Plan adoption agreement:</strong> Need to sign plan documents (still free)</li>
                <li><strong>Employee complications:</strong> If you hire non-spouse employees, must switch to regular 401(k)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Who Should Choose Solo 401(k)?</h3>

          <p className="text-lg text-gray-700 mb-4">
            Solo 401(k) is best for:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Maximum savers:</strong> You want to shelter as much income as possible from taxes</li>
            <li><strong>Enough income to save beyond ~20% of profit:</strong> The $24.5k employee deferral adds room at any income level</li>
            <li><strong>Age 50+:</strong> The $8,000 catch-up ($11,250 at ages 60–63) is a real advantage</li>
            <li><strong>Roth preference:</strong> You want tax-free retirement income (Roth 401k option)</li>
            <li><strong>True solopreneurs:</strong> You're confident you won't hire employees (hiring complicates Solo 401k)</li>
            <li><strong>December planners:</strong> You can decide contributions by end of year (not waiting until April)</li>
          </ul>
        </section>

        {/* Real Scenarios */}
        <section id="scenarios" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Hypothetical Contribution Scenarios (2026)</h2>
          <p className="text-gray-700 mb-6">
            Each example assumes a sole proprietor with no W-2 wages and uses 2026 limits. Pre-tax contributions reduce income tax at your marginal rate but do not reduce self-employment tax.
          </p>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">💻 Freelance Developer: $75k Net Profit, Age 35</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2 text-red-700">SEP-IRA Contribution</h4>
                  <p className="text-sm text-gray-700 mb-1">• 20% of ($75,000 − $5,299 half SE tax)</p>
                  <p className="text-sm text-gray-700 mb-1">• ~$13,940 contribution</p>
                  <p className="text-sm text-gray-700">• Simple setup, contribute by the tax deadline</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-green-700">Solo 401(k) Contribution</h4>
                  <p className="text-sm text-gray-700 mb-1">• Employee: $24,500</p>
                  <p className="text-sm text-gray-700 mb-1">• Employer: ~$13,940</p>
                  <p className="text-sm text-gray-700 mb-1">• <strong>Total: ~$38,440</strong></p>
                  <p className="text-sm text-gray-700 font-semibold text-green-700">Allows $24,500 more for retirement</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 italic">
                <strong>Likely fit:</strong> Solo 401(k) if the developer can actually save more than ~$14k; otherwise a SEP-IRA does the job with less paperwork
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">✍️ Freelance Writer: $35k Net Profit, Age 28</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2 text-red-700">SEP-IRA Contribution</h4>
                  <p className="text-sm text-gray-700 mb-1">• 20% of ($35,000 − $2,473 half SE tax)</p>
                  <p className="text-sm text-gray-700 mb-1">• ~$6,505 contribution</p>
                  <p className="text-sm text-gray-700">• Simple setup, late deadline (tax filing deadline)</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-green-700">Solo 401(k) Contribution</h4>
                  <p className="text-sm text-gray-700 mb-1">• Theoretical max: ~$31,005 ($24,500 employee + ~$6,505 employer)</p>
                  <p className="text-sm text-gray-700 mb-1">• Practical limit: what the writer can afford after living costs and taxes</p>
                  <p className="text-sm text-gray-700">• More admin, Dec 31 election deadline</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 italic">
                <strong>Likely fit:</strong> SEP-IRA if ~$6,500 is all the writer can save; a Solo 401(k) only helps if they can save more. A Roth IRA ($7,500 for 2026) is also worth comparing at this income.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">📸 Photographer: $120k Net Profit, Age 54</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2 text-red-700">SEP-IRA Contribution</h4>
                  <p className="text-sm text-gray-700 mb-1">• 20% of ($120,000 − $8,478 half SE tax)</p>
                  <p className="text-sm text-gray-700 mb-1">• ~$22,304 contribution</p>
                  <p className="text-sm text-gray-700 mb-1">• No catch-up available</p>
                  <p className="text-sm text-gray-700">• <strong>Max: ~$22,304</strong></p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-green-700">Solo 401(k) Contribution</h4>
                  <p className="text-sm text-gray-700 mb-1">• Employee: $24,500</p>
                  <p className="text-sm text-gray-700 mb-1">• Age 50+ catch-up: $8,000</p>
                  <p className="text-sm text-gray-700 mb-1">• Employer: ~$22,304</p>
                  <p className="text-sm text-gray-700 font-semibold text-green-700"><strong>Total: ~$54,804</strong></p>
                  <p className="text-sm text-gray-700 font-semibold text-green-700">Allows $32,500 more</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 italic">
                <strong>Likely fit:</strong> Solo 401(k) — the deferral plus catch-up adds $32,500 of room for a saver who is behind
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">💼 Consultant: $300k Net Profit, Age 42</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2 text-orange-700">SEP-IRA Contribution</h4>
                  <p className="text-sm text-gray-700 mb-1">• 20% of ($300,000 − $15,456 half SE tax)</p>
                  <p className="text-sm text-gray-700 mb-1">• <strong>~$56,909</strong> (below the $72,000 cap)</p>
                  <p className="text-sm text-gray-700 mb-1">• Simpler setup/maintenance</p>
                  <p className="text-sm text-gray-700">• No annual IRS plan filing</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-orange-700">Solo 401(k) Contribution</h4>
                  <p className="text-sm text-gray-700 mb-1">• Employee: $24,500</p>
                  <p className="text-sm text-gray-700 mb-1">• Employer: $47,500 (limited by the cap)</p>
                  <p className="text-sm text-gray-700 mb-1">• <strong>Max: $72,000</strong></p>
                  <p className="text-sm text-gray-700">• Roth option usually available</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 italic">
                <strong>Likely fit:</strong> Solo 401(k) still allows ~$15,091 more at $300k of profit. The plans only equalize around $376,500 of net profit, where SEP-IRA simplicity becomes the tiebreaker.
              </p>
            </div>
          </div>
        </section>

        {/* Decision Framework */}
        <section id="decision" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Which Plan Should You Choose?</h2>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-indigo-900">Decision Flowchart</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-medium text-gray-900">Are you age 50 or older?</p>
                  <p className="text-sm text-gray-700">→ <strong className="text-green-600">YES:</strong> Lean Solo 401(k) for the $8,000 catch-up ($80,000 total; $83,250 at ages 60–63)</p>
                  <p className="text-sm text-gray-700">→ <strong className="text-orange-600">NO:</strong> Continue to question 2</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-medium text-gray-900">Do you want to save more than about 20% of your net profit?</p>
                  <p className="text-sm text-gray-700">→ <strong className="text-green-600">YES:</strong> Choose Solo 401(k) for up to $24,500 of extra contribution room</p>
                  <p className="text-sm text-gray-700">→ <strong className="text-orange-600">NO:</strong> Continue to question 3</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-medium text-gray-900">Do you want Roth (tax-free) retirement income?</p>
                  <p className="text-sm text-gray-700">→ <strong className="text-green-600">YES:</strong> Choose Solo 401(k) (Roth deferrals are widely offered; Roth SEPs are rare)</p>
                  <p className="text-sm text-gray-700">→ <strong className="text-orange-600">NO:</strong> Continue to question 4</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <p className="font-medium text-gray-900">Might you hire employees (non-spouse) in the next 3-5 years?</p>
                  <p className="text-sm text-gray-700">→ <strong className="text-green-600">YES:</strong> Choose SEP-IRA (scales better with employees)</p>
                  <p className="text-sm text-gray-700">→ <strong className="text-orange-600">NO:</strong> Continue to question 5</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <p className="font-medium text-gray-900">Do you value extreme simplicity over maximum contributions?</p>
                  <p className="text-sm text-gray-700">→ <strong className="text-green-600">YES:</strong> Choose SEP-IRA (quick setup, no annual plan filing)</p>
                  <p className="text-sm text-gray-700">→ <strong className="text-green-600">NO:</strong> Choose Solo 401(k) (maximum contribution power)</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Quick Reference Guide</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h4 className="text-lg font-semibold mb-3 text-blue-800">Choose SEP-IRA If:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ You only plan to save about 20% of profit or less</li>
                <li>✓ You want the simplest possible setup</li>
                <li>✓ Your income fluctuates wildly (easy to adjust contributions)</li>
                <li>✓ You often decide contributions at tax time (April deadline)</li>
                <li>✓ You might hire employees soon</li>
                <li>✓ Net profit around $376k+ (both plans max at $72k, so SEP is simpler)</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
              <h4 className="text-lg font-semibold mb-3 text-purple-800">Choose Solo 401(k) If:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ You want to save more than ~20% of profit</li>
                <li>✓ You want maximum tax-deferred contributions</li>
                <li>✓ You're age 50+ (catch-up contributions)</li>
                <li>✓ You want Roth option (tax-free retirement)</li>
                <li>✓ You value loan access (if your plan offers it)</li>
                <li>✓ You're a true solopreneur (no plans to hire)</li>
                <li>✓ You can make your deferral election by December 31</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6">
            <p className="text-gray-800 font-semibold mb-2">💡 Can You Switch Plans Later?</p>
            <p className="text-gray-700">
              Yes. You can keep an old SEP-IRA open while using a Solo 401(k), but contributions for the same year share the $72k limit, and many prototype Solo 401(k) documents don't allow SEP contributions for the same year—check the plan's rules. Many people start with a SEP-IRA for simplicity and switch when they want to save more. Many Solo 401(k) plans accept rollovers of SEP-IRA money.
            </p>
          </div>
        </section>

        {/* Setup Process */}
        <section id="setup" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Setup Process & Costs</h2>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Setting Up a SEP-IRA</h3>

          <div className="space-y-3 mb-6">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold mb-1">Choose a Brokerage</h4>
                <p className="text-sm text-gray-700">Most large brokerages offer SEP-IRAs, often with no setup fee. Pick one with low-cost index funds.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold mb-1">Complete Online Application</h4>
                <p className="text-sm text-gray-700">Provide SSN or EIN, business name, and adopt the plan (IRS Form 5305-SEP or the provider's document), then choose investments.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 className="font-semibold mb-1">Fund Your Account</h4>
                <p className="text-sm text-gray-700">Transfer money from business checking. Contributions can be made anytime until your tax filing deadline (April 15 or Oct 15 with extension).</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h4 className="font-semibold mb-1">Deduct on Your Tax Return</h4>
                <p className="text-sm text-gray-700">Sole proprietors deduct their own SEP-IRA contributions on Schedule 1 (Form 1040). This reduces taxable income dollar-for-dollar, but not self-employment tax.</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-6">
            <strong>Typical setup cost:</strong> often $0 | <strong>Annual plan filing:</strong> none
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Setting Up a Solo 401(k)</h3>

          <div className="space-y-3 mb-6">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold mb-1">Choose a Provider</h4>
                <p className="text-sm text-gray-700">Many large brokerages offer Solo 401(k) prototype plans, often with no setup fee. Check whether they offer Roth deferrals, loans and rollovers if you want them.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold mb-1">Complete Plan Adoption Agreement</h4>
                <p className="text-sm text-gray-700">You'll sign a plan document establishing the Solo 401(k). To use it for 2026 deferrals in the usual way, set it up by December 31.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 className="font-semibold mb-1">Get an EIN (If Needed)</h4>
                <p className="text-sm text-gray-700">Many providers require an EIN for the business, and you'll need one to file Form 5500-EZ later. EINs are free from the IRS.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h4 className="font-semibold mb-1">Make Contributions</h4>
                <p className="text-sm text-gray-700">
                  • <strong>Employee deferrals:</strong> Elect by Dec 31 of the tax year; deposit timing depends on your business type and plan rules<br/>
                  • <strong>Employer profit-sharing:</strong> Can be made until the tax filing deadline (including extensions)
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
              <div>
                <h4 className="font-semibold mb-1">File Form 5500-EZ (If Required)</h4>
                <p className="text-sm text-gray-700">Required once plan assets exceed $250,000 at the end of a plan year (and for the final plan year). Due by July 31 for a calendar-year plan, with an extension available. It's a short form, but late filing penalties can be steep.</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700">
            <strong>Typical setup cost:</strong> often $0 | <strong>Annual filing:</strong> none until assets pass $250,000, then Form 5500-EZ each year
          </p>
        </section>

        {/* Related Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Financial Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate?.(ToolType.RETIREMENT_OPTIMIZER)}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <div className="text-3xl mb-3">🐷</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Retirement Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Calculate how much you need to save and project your retirement nest egg</p>
              <span className="text-indigo-600 text-sm font-medium group-hover:underline">Plan Retirement →</span>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
              className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Self-Employment Tax Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Calculate your 15.3% SE tax and see how retirement contributions reduce it</p>
              <span className="text-purple-600 text-sm font-medium group-hover:underline">Calculate SE Tax →</span>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX)}
              className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 text-left hover:shadow-lg transition-all group"
            >
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Quarterly Tax Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Estimate quarterly payments after retirement contributions</p>
              <span className="text-orange-600 text-sm font-medium group-hover:underline">Estimate Payments →</span>
            </button>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Tax & Retirement Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
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
                  <p className="text-sm text-gray-600">Understand the 15.3% SE tax and how SEP-IRA/Solo 401(k) contributions reduce your taxable income</p>
                </div>
              </div>
            </button>

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
                  <p className="text-sm text-gray-600">Maximize write-offs (home office, mileage, equipment) to increase your retirement contribution room</p>
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
            <li>IRS Publication 560, Retirement Plans for Small Business (SEP, SIMPLE, and Qualified Plans): <a href="https://www.irs.gov/publications/p560" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/publications/p560</a></li>
            <li>IRS Publication 590-A, Contributions to IRAs: <a href="https://www.irs.gov/publications/p590a" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/publications/p590a</a></li>
            <li>IRS Publication 590-B, Distributions from IRAs: <a href="https://www.irs.gov/publications/p590b" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/publications/p590b</a></li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">
            2026 limits from IRS Notice 2025-67 ($24,500 deferral, $8,000 catch-up, $11,250 ages 60–63, $72,000 total, $360,000 compensation limit). Contribution figures are rounded estimates for a sole proprietor with no other wages; use the Publication 560 worksheets or a tax professional for your own numbers. To see how contributions change your quarterly payments, try the <a href="/quarterly-estimated-tax-calculator/" className="text-indigo-600 font-semibold hover:underline">quarterly estimated tax calculator</a>, or model long-term growth with the <a href="/retirement-account-optimizer/" className="text-indigo-600 font-semibold hover:underline">retirement account optimizer</a>. Educational content, not individualized advice.
          </p>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Maximize Your Retirement Savings?</h2>
          <p className="text-lg text-indigo-50 mb-6">
            Use our calculators to estimate your exact contribution limits and tax savings
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate?.(ToolType.RETIREMENT_OPTIMIZER)}
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Calculate Retirement Savings
            </button>
            <button
              onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
              className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors"
            >
              Calculate SE Tax Impact
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SEPIRAvsSolo401k2025;

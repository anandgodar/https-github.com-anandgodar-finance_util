'use client';


import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const ACAHealthInsuranceFreelancers2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>⏱️ 13 min read</span>
          <span>•</span>
          <span>🏥 Healthcare Planning</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          ACA Health Insurance for Freelancers 2026: Complete Subsidy & Marketplace Guide
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          As a freelancer or self-employed individual, you may be able to save <strong>thousands on health insurance</strong> through
          ACA Marketplace subsidies. This guide explains how Premium Tax Credits work for 2026 coverage, why the
          &quot;subsidy cliff&quot; is back, Medicaid eligibility, and how to afford healthcare without employer coverage.
        </p>

        <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-xl">
          <p className="text-rose-900 font-semibold text-lg">
            ⚠️ <strong>Big change for 2026:</strong> The enhanced premium tax credits that applied from 2021 through 2025
            expired at the end of 2025. For 2026 coverage, the original ACA rules are back: households above 400% of the
            federal poverty level generally get <strong>no</strong> premium tax credit, and people below that level are
            expected to pay a larger share of their income. Congress could change this, so always confirm your numbers on{' '}
            <a href="https://www.healthcare.gov/" className="underline" target="_blank" rel="noopener noreferrer">HealthCare.gov</a> or
            your state&apos;s marketplace.
          </p>
        </div>

        {/* Calculator CTA */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Estimate Your ACA Subsidy
              </h3>
              <p className="text-sm text-slate-600">
                Get a quick estimate, then confirm it with the official HealthCare.gov application
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.ACA_SUBSIDY)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition"
            >
              Check Eligibility →
            </button>
          </div>
        </div>
      </header>

      {/* Table of Contents */}
      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('freelancer-crisis')} className="text-emerald-600 hover:underline">1. The Freelancer Healthcare Challenge</button></li>
          <li><button onClick={() => scrollToSection('aca-marketplace')} className="text-emerald-600 hover:underline">2. What is the ACA Marketplace?</button></li>
          <li><button onClick={() => scrollToSection('premium-tax-credit')} className="text-emerald-600 hover:underline">3. Premium Tax Credits for 2026</button></li>
          <li><button onClick={() => scrollToSection('subsidy-cliff')} className="text-emerald-600 hover:underline">4. The 400% FPL Subsidy Cliff Is Back</button></li>
          <li><button onClick={() => scrollToSection('subsidy-calculator')} className="text-emerald-600 hover:underline">5. How to Calculate Your Subsidy</button></li>
          <li><button onClick={() => scrollToSection('medicaid')} className="text-emerald-600 hover:underline">6. Medicaid Expansion by State</button></li>
          <li><button onClick={() => scrollToSection('coverage-gap')} className="text-emerald-600 hover:underline">7. The Coverage Gap (Non-Expanded States)</button></li>
          <li><button onClick={() => scrollToSection('enrollment')} className="text-emerald-600 hover:underline">8. How to Enroll & Deadlines</button></li>
          <li><button onClick={() => scrollToSection('cost-strategies')} className="text-emerald-600 hover:underline">9. Strategies to Lower Costs</button></li>
          <li><button onClick={() => scrollToSection('real-scenarios')} className="text-emerald-600 hover:underline">10. Hypothetical Freelancer Scenarios</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-emerald-600 hover:underline">11. Frequently Asked Questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-emerald-600 hover:underline">12. Sources</button></li>
        </ol>
      </nav>

      {/* Main Content */}
      <article className="prose prose-lg max-w-none space-y-12">

        {/* Section 1 */}
        <section id="freelancer-crisis" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The Freelancer Healthcare Challenge</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Health insurance is one of the biggest costs people weigh before leaving W-2 employment. An employer typically pays
            a large share of a worker&apos;s premium; as a freelancer, you pay the whole premium yourself unless you qualify for
            help. Premiums depend on your age, location, household size, and the plan you pick, so a quote for one person can
            look very different from a quote for another.
          </p>

          <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-xl">
            <p className="text-rose-900 font-semibold text-lg">
              ⚠️ <strong>The Reality:</strong> Without a subsidy, an unsubsidized marketplace plan can easily cost
              hundreds of dollars a month for one person—more for older adults and families. Get real quotes for your ZIP code
              on HealthCare.gov before you set your freelance rates.
            </p>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            The good news: <strong>The Affordable Care Act (ACA)</strong> still provides premium tax credits for many
            freelancers, self-employed individuals, and anyone without affordable employer coverage, and Medicaid covers many
            lower-income adults in expansion states. For 2026, though, the help is less generous than it was from 2021 to
            2025, and it phases out completely above 400% of the poverty level.
          </p>
        </section>

        {/* Section 2 */}
        <section id="aca-marketplace" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is the ACA Marketplace (Healthcare.gov)?</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            The <strong>ACA Marketplace</strong> (also called Healthcare.gov or &quot;Obamacare&quot;) is where individuals
            and families can shop for health insurance and apply for financial assistance. Some states run their own
            marketplace; HealthCare.gov will point you to it if so.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6">
              <h3 className="font-bold text-emerald-900 text-lg mb-3">✅ Who Can Use It?</h3>
              <ul className="text-slate-700 space-y-2 text-sm">
                <li>• <strong>Freelancers</strong> (1099 contractors)</li>
                <li>• <strong>Self-employed</strong> business owners</li>
                <li>• <strong>Gig workers</strong> (rideshare, delivery, online platforms)</li>
                <li>• <strong>Early retirees</strong> (under 65, not on Medicare)</li>
                <li>• <strong>Part-time workers</strong> (no affordable employer coverage)</li>
                <li>• <strong>Between jobs</strong> (COBRA alternative)</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6">
              <h3 className="font-bold text-indigo-900 text-lg mb-3">💰 What Are the Benefits?</h3>
              <ul className="text-slate-700 space-y-2 text-sm">
                <li>• <strong>Premium Tax Credits</strong> (lower monthly costs, if eligible)</li>
                <li>• <strong>Cost-Sharing Reductions</strong> (lower deductibles/copays on Silver plans)</li>
                <li>• <strong>Pre-existing conditions covered</strong> (cannot be denied)</li>
                <li>• <strong>Essential health benefits</strong> (10 categories required)</li>
                <li>• <strong>No lifetime limits</strong> on covered essential benefits</li>
                <li>• <strong>Many preventive services</strong> covered with no copay</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="premium-tax-credit" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Premium Tax Credits (PTC) for 2026</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            The <strong>Premium Tax Credit (PTC)</strong> is the primary way freelancers afford marketplace coverage. You can
            take it in advance to lower your monthly premium, or claim it when you file. The formula is:
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-slate-700">
            <p className="font-bold text-slate-900 mb-2">Credit = Benchmark Silver premium − your expected contribution</p>
            <p>Your expected contribution is a set percentage of household income (MAGI). The percentage rises with income
            measured against the federal poverty level (FPL). If the benchmark premium is less than your expected
            contribution, the credit is $0.</p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900">2026 Expected Contribution by Income</h3>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Income Level (% of FPL)</th>
                  <th className="text-left p-4 font-black text-slate-900">Single-Person Income (2026 coverage)</th>
                  <th className="text-left p-4 font-black text-slate-900">Expected Contribution (% of income)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">100–133% FPL</td>
                  <td className="p-4 text-slate-600">$15,650–$20,815</td>
                  <td className="p-4 font-bold text-emerald-600">2.10%</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">133–150% FPL</td>
                  <td className="p-4 text-slate-600">$20,815–$23,475</td>
                  <td className="p-4 font-bold text-emerald-600">3.14–4.19%</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">150–200% FPL</td>
                  <td className="p-4 text-slate-600">$23,475–$31,300</td>
                  <td className="p-4 font-bold text-indigo-600">4.19–6.60%</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">200–250% FPL</td>
                  <td className="p-4 text-slate-600">$31,300–$39,125</td>
                  <td className="p-4 font-bold text-indigo-600">6.60–8.44%</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">250–300% FPL</td>
                  <td className="p-4 text-slate-600">$39,125–$46,950</td>
                  <td className="p-4 font-bold text-purple-600">8.44–9.96%</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">300–400% FPL</td>
                  <td className="p-4 text-slate-600">$46,950–$62,600</td>
                  <td className="p-4 font-bold text-purple-600">9.96%</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">Above 400% FPL</td>
                  <td className="p-4 text-slate-600">Over $62,600</td>
                  <td className="p-4 font-bold text-rose-600">No credit (cliff)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500">
            Percentages are the IRS applicable percentage table for 2026 (Rev. Proc. 2025-25), roughly 2.10%–9.96% of income.
            Ranges rise gradually within each band. 2026 coverage uses the 2025 poverty guidelines ($15,650 for one person,
            plus $5,500 per additional person; higher in Alaska and Hawaii). Confirm on HealthCare.gov.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-4">
            <h4 className="font-bold text-emerald-900 text-lg">Example (Hypothetical): Single Freelancer</h4>
            <div className="space-y-2 text-emerald-900">
              <p><strong>Income:</strong> $40,000/year (about 256% FPL for 2026 coverage)</p>
              <p><strong>Benchmark Silver Plan Premium (assumed):</strong> $500/month ($6,000/year)</p>
              <p><strong>Expected contribution (about 8.61% of income):</strong> ≈ $3,444/year (≈ $287/month)</p>
              <p className="text-2xl font-black text-emerald-700">
                <strong>Your Cost:</strong> ≈ $287/month | <strong>Subsidy:</strong> ≈ $213/month (≈ $2,556/year)
              </p>
            </div>
          </div>
        </section>

        {/* Section 3b - Cliff */}
        <section id="subsidy-cliff" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The 400% FPL Subsidy Cliff Is Back</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            From 2021 through 2025, premiums for higher earners were capped at 8.5% of income, so there was no cliff. That
            rule expired. For 2026, if your household MAGI is even $1 above 400% FPL—<strong>$62,600 for one person or
            $128,600 for a family of four</strong>—you generally lose the entire credit. Freelancers, whose income can swing
            by thousands of dollars, are especially exposed.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
            <p className="text-amber-900 font-semibold text-lg mb-3">
              ⚠️ <strong>Cliff Example (Hypothetical):</strong>
            </p>
            <p className="text-amber-900">
              A single 55-year-old freelancer&apos;s benchmark Silver premium is assumed to be $700/month ($8,400/year).<br />
              • <strong>MAGI $62,000</strong> (about 396% FPL): expected contribution 9.96% ≈ $6,175 → credit ≈ <strong>$2,225/year</strong><br />
              • <strong>MAGI $63,000</strong> (about 403% FPL): <strong>no credit</strong>; pays the full $8,400<br />
              • Result: $1,000 of extra income costs about $2,225 in lost subsidy, before any tax on that income.
            </p>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            If you are near the line, pre-tax moves that lower MAGI—such as a SEP-IRA or Solo 401(k) contribution, or an HSA
            contribution—can keep you under 400% FPL. Because the final credit is settled on your tax return, you have until
            your filing deadline to make some of these contributions (SEP-IRA and employer Solo 401(k) contributions can be
            made after year-end). See our <a href="/blog/sep-ira-vs-solo-401k-2025/" className="text-indigo-600 font-semibold hover:underline">SEP-IRA vs Solo 401(k) guide</a> for
            2026 limits.
          </p>
        </section>

        {/* Section 4 - Calculator */}
        <section id="subsidy-calculator" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to Calculate Your ACA Subsidy</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Calculating your subsidy requires 3 key numbers:
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl">
              <span className="flex-shrink-0 text-2xl">1️⃣</span>
              <div>
                <h3 className="font-bold text-slate-900">Modified Adjusted Gross Income (MAGI)</h3>
                <p className="text-slate-700">For the ACA, MAGI is your Adjusted Gross Income plus any tax-exempt interest,
                non-taxable Social Security benefits, and excluded foreign income. For most freelancers it starts with Schedule C
                net profit, then subtracts above-the-line deductions such as half of self-employment tax, the self-employed health
                insurance deduction, retirement plan contributions, and HSA contributions. Use the{' '}
                <a href="/freelance-profit-hub/" className="text-indigo-600 font-semibold hover:underline">Freelance Profit Hub</a> to project net profit.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl">
              <span className="flex-shrink-0 text-2xl">2️⃣</span>
              <div>
                <h3 className="font-bold text-slate-900">Federal Poverty Level (FPL)</h3>
                <p className="text-slate-700">For 2026 coverage, the marketplace uses the 2025 guidelines: <strong>$15,650 for an
                individual</strong>, plus $5,500 for each additional household member (family of 4 = $32,150). 400% FPL is
                $62,600 for one person and $128,600 for a family of four.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl">
              <span className="flex-shrink-0 text-2xl">3️⃣</span>
              <div>
                <h3 className="font-bold text-slate-900">Benchmark Premium (Silver Plan)</h3>
                <p className="text-slate-700">The subsidy is based on the <strong>second-lowest-cost Silver plan</strong> in your
                area. This varies by location, age, and household size. You can apply the credit to any metal level, but it
                can&apos;t exceed the premium of the plan you choose.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-slate-900 mb-4">
              Estimate Your Subsidy in 60 Seconds
            </h3>
            <p className="text-slate-700 mb-6">
              Enter your household size and expected income for a quick estimate, then confirm the official figure on HealthCare.gov
            </p>
            <button
              onClick={() => onNavigate?.(ToolType.ACA_SUBSIDY)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition"
            >
              Use ACA Subsidy Calculator →
            </button>
          </div>
        </section>

        {/* Section 5 - Medicaid */}
        <section id="medicaid" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Medicaid Expansion by State</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            If your income is below <strong>138% of the Federal Poverty Level</strong> (about $21,600 for a single adult using the
            2025 guideline; Medicaid uses the guideline in effect when you apply), you may qualify for <strong>Medicaid</strong>,
            which is free or very low-cost—but for most non-disabled adults without children, only in states that expanded
            Medicaid under the ACA. Federal law passed in 2025 also adds work or community-engagement requirements for many
            expansion adults in coming years, so check with your state Medicaid agency.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-6">
              <h3 className="font-bold text-emerald-900 text-lg mb-3">✅ 40 States + DC Expanded Medicaid</h3>
              <p className="text-emerald-900 text-sm mb-3">
                In these states, adults may qualify for <strong>Medicaid</strong> if income ≤ 138% FPL:
              </p>
              <div className="grid grid-cols-3 gap-2 text-xs text-emerald-800">
                <span>AK, AZ, AR, CA</span>
                <span>CO, CT, DE, HI</span>
                <span>ID, IL, IN, IA</span>
                <span>KY, LA, ME, MD</span>
                <span>MA, MI, MN, MO</span>
                <span>MT, NE, NV, NH</span>
                <span>NJ, NM, NY, NC</span>
                <span>ND, OH, OK, OR</span>
                <span>PA, RI, SD, UT</span>
                <span>VT, VA, WA, WV</span>
                <span className="font-bold">+ DC</span>
              </div>
            </div>

            <div className="bg-rose-50 border-2 border-rose-300 rounded-2xl p-6">
              <h3 className="font-bold text-rose-900 text-lg mb-3">❌ 10 States Have Not Fully Expanded</h3>
              <p className="text-rose-900 text-sm mb-3">
                Most of these states have a <strong>coverage gap</strong> for adults below 100% FPL:
              </p>
              <div className="space-y-1 text-sm text-rose-800">
                <div>• <strong>Alabama</strong></div>
                <div>• <strong>Florida</strong></div>
                <div>• <strong>Georgia</strong> (limited program with work requirements)</div>
                <div>• <strong>Kansas</strong></div>
                <div>• <strong>Mississippi</strong></div>
                <div>• <strong>South Carolina</strong></div>
                <div>• <strong>Tennessee</strong></div>
                <div>• <strong>Texas</strong></div>
                <div>• <strong>Wisconsin</strong> (covers adults up to 100% FPL, so no gap)</div>
                <div>• <strong>Wyoming</strong></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 - Coverage Gap */}
        <section id="coverage-gap" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The Coverage Gap (Non-Expanded States)</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            If you live in a non-expansion state and earn <strong>below 100% FPL</strong> ($15,650 for an individual for 2026
            coverage), you may be in the <strong>&quot;coverage gap&quot;</strong>: your income is too low for marketplace
            premium tax credits, but you don&apos;t qualify for your state&apos;s Medicaid program.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
            <p className="text-amber-900 font-semibold text-lg mb-3">
              ⚠️ <strong>Coverage Gap Example (Hypothetical):</strong>
            </p>
            <p className="text-amber-900">
              Single freelancer in Texas expecting $12,000/year (about 77% FPL):<br />
              • Below the 100% FPL floor for marketplace premium tax credits<br />
              • Texas didn&apos;t expand Medicaid, and adults without children or a disability generally don&apos;t qualify<br />
              • Result: <strong>no subsidized coverage options</strong><br />
              • Options: community health centers, an unsubsidized plan, or reassessing income or location
            </p>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
            <h3 className="font-bold text-indigo-900 text-lg mb-3">Options in the Coverage Gap</h3>
            <ol className="text-indigo-900 space-y-2 text-sm">
              <li><strong>1. Estimate income honestly:</strong> If you reasonably expect to earn at least 100% FPL ($15,650 for one person), say so on your application. If you enroll with advance credits based on a good-faith estimate and end the year below 100% FPL, you generally don&apos;t lose eligibility for that year.</li>
              <li><strong>2. Community Health Centers:</strong> Sliding-scale fees based on income</li>
              <li><strong>3. Short-Term Health Insurance:</strong> Not ACA-compliant; can exclude pre-existing conditions and cap benefits</li>
              <li><strong>4. Healthcare Sharing Ministries:</strong> Not insurance, and payment of medical bills isn&apos;t guaranteed</li>
              <li><strong>5. Relocate:</strong> Moving to an expansion state is a major decision, but it changes eligibility</li>
            </ol>
          </div>
        </section>

        {/* Section 7 - Enrollment */}
        <section id="enrollment" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to Enroll & Important Deadlines</h2>

          <h3 className="text-2xl font-bold text-slate-900">Open Enrollment Period</h3>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
            <p className="text-lg font-bold text-indigo-900 mb-2">
              📅 <strong>Open Enrollment for 2027 coverage:</strong> typically begins November 1, 2026
            </p>
            <p className="text-indigo-800">
              A 2025 federal rule is expected to shorten open enrollment starting with 2027 coverage, and state-run
              marketplaces can set their own end dates. Check HealthCare.gov or your state&apos;s marketplace for the exact
              deadline. Missing open enrollment means waiting until the next year unless you qualify for a Special Enrollment
              Period.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-6">Special Enrollment Periods (SEP)</h3>

          <p className="text-lg text-slate-700 leading-relaxed">
            You can enroll outside open enrollment, usually within 60 days, if you experience a &quot;qualifying life event&quot;:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <h4 className="font-bold text-slate-900 mb-2">✅ Loss of Coverage</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Lost employer coverage (quit/fired)</li>
                <li>• COBRA ended</li>
                <li>• Aged out of parent&apos;s plan (26th birthday)</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <h4 className="font-bold text-slate-900 mb-2">✅ Household Changes</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Marriage or divorce (if it causes loss of coverage)</li>
                <li>• Birth or adoption of child</li>
                <li>• Death in the household</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <h4 className="font-bold text-slate-900 mb-2">✅ Relocation</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Moved to new state</li>
                <li>• Moved to new coverage area</li>
                <li>• Returning from abroad</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <h4 className="font-bold text-slate-900 mb-2">✅ Other Changes</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Became Medicaid ineligible (income increased)</li>
                <li>• Released from incarceration</li>
                <li>• Gained citizenship/lawful presence</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-6">Step-by-Step Enrollment</h3>

          <div className="space-y-3">
            {[
              { num: 1, title: "Create Healthcare.gov Account", desc: "Go to HealthCare.gov (or your state marketplace) and create an account" },
              { num: 2, title: "Start Application", desc: "Provide household size and your best estimate of income for the coverage year" },
              { num: 3, title: "See Subsidy Estimate", desc: "The system calculates your Premium Tax Credit and any cost-sharing reductions" },
              { num: 4, title: "Browse Plans", desc: "Compare Bronze, Silver, Gold, Platinum tiers on total cost, not just premium" },
              { num: 5, title: "Enroll & Pay", desc: "Choose plan, enroll, pay first month's premium" }
            ].map(step => (
              <div key={step.num} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{step.title}</h4>
                  <p className="text-slate-700 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8 - Cost Strategies */}
        <section id="cost-strategies" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Strategies to Lower Healthcare Costs as a Freelancer</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6">
              <h3 className="font-bold text-emerald-900 text-lg mb-3 flex items-center gap-2">
                <span>💰</span> Manage Your MAGI (Especially Near the Cliff)
              </h3>
              <p className="text-emerald-900 mb-3">
                Lowering MAGI can raise your credit—or restore it entirely if you are just over 400% FPL:
              </p>
              <ul className="text-emerald-900 space-y-2 text-sm">
                <li>• <strong>Retirement contributions:</strong> Solo 401(k) or SEP-IRA (up to $72,000 total for 2026, depending on profit)</li>
                <li>• <strong>HSA contributions:</strong> $4,400 self-only, $8,750 family (2026), if you have an HSA-eligible plan. Under the 2025 tax law, marketplace Bronze and Catastrophic plans are treated as HSA-compatible starting in 2026.</li>
                <li>• <strong>Business expenses:</strong> Deduct all legitimate Schedule C expenses</li>
                <li>• <strong>Timing:</strong> If you control invoicing, shifting income between years can keep you under the cliff</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
              <h3 className="font-bold text-indigo-900 text-lg mb-3 flex items-center gap-2">
                <span>🏥</span> Consider Silver Plans for CSR
              </h3>
              <p className="text-indigo-900 mb-3">
                If you earn 100-250% FPL, <strong>compare Silver plans carefully</strong>:
              </p>
              <ul className="text-indigo-900 space-y-2 text-sm">
                <li>• Silver plans unlock <strong>Cost-Sharing Reductions (CSR)</strong></li>
                <li>• CSR lowers deductibles, copays, and out-of-pocket maximums</li>
                <li>• Silver plans with CSR are designed to cover about 94% of average costs at 100–150% FPL, 87% at 150–200% FPL, and 73% at 200–250% FPL (vs about 70% for a standard Silver plan)</li>
                <li>• Bronze/Gold plans DON&apos;T get CSR, even at the same income</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
              <h3 className="font-bold text-amber-900 text-lg mb-3 flex items-center gap-2">
                <span>📊</span> Report Income Changes Promptly
              </h3>
              <p className="text-amber-900 mb-3">
                Freelance income fluctuates—update your marketplace application when it changes:
              </p>
              <ul className="text-amber-900 space-y-2 text-sm">
                <li>• <strong>Income increases:</strong> Report within 30 days to reduce the risk of repaying credits</li>
                <li>• <strong>Income decreases:</strong> Report to increase your advance credit</li>
                <li>• Reconcile on your tax return (Form 8962). Starting with 2026 coverage, the 2025 tax law removed the old caps on repaying excess advance credits, so an underestimate can mean repaying the full difference.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 9 - Real Scenarios */}
        <section id="real-scenarios" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Hypothetical Freelancer Healthcare Scenarios (2026)</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Benchmark premiums below are assumptions for illustration only; real premiums depend on age, ZIP code and household.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="text-3xl">💻</div>
              <h3 className="font-bold text-slate-900 text-lg">Web Developer, $55k Income</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Single, age 32</li>
                <li>• MAGI: $55,000 (about 351% FPL)</li>
                <li>• Benchmark Premium (assumed): $450/month</li>
                <li>• Expected contribution (9.96%): ≈ $456/month</li>
                <li className="font-bold text-rose-600">• Subsidy: $0 (benchmark is below the expected contribution)</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="text-3xl">✍️</div>
              <h3 className="font-bold text-slate-900 text-lg">Freelance Writer, $28k Income</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Single, age 28</li>
                <li>• MAGI: $28,000 (about 179% FPL)</li>
                <li>• Benchmark Premium (assumed): $520/month</li>
                <li>• Expected contribution (about 5.58%): ≈ $130/month</li>
                <li className="font-bold text-emerald-600">• Subsidy: ≈ $390/mo (≈ $4,677/year), plus CSR on Silver</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="text-3xl">👨‍👩‍👧‍👦</div>
              <h3 className="font-bold text-slate-900 text-lg">Family of 4, $72k Income</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Married + 2 kids</li>
                <li>• MAGI: $72,000 (about 224% FPL for a family of 4)</li>
                <li>• Benchmark Premium (assumed): $1,400/month</li>
                <li>• Expected contribution (about 7.48%): ≈ $449/month</li>
                <li className="font-bold text-emerald-600">• Subsidy: ≈ $951/mo (≈ $11,413/year)</li>
              </ul>
              <p className="text-xs text-slate-500">Children in families at this income may qualify for Medicaid or CHIP instead, depending on the state.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="text-3xl">🚗</div>
              <h3 className="font-bold text-slate-900 text-lg">Gig Driver, $13k Income (Coverage Gap)</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Single, age 35, non-expansion state</li>
                <li>• MAGI: $13,000 (about 83% FPL)</li>
                <li>• Below 100% FPL, so no marketplace premium tax credit</li>
                <li>• Generally not eligible for Medicaid in a non-expansion state</li>
                <li className="font-bold text-rose-600">• Result: Coverage gap—limited affordable options</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-500">
            If the gig driver earned $18,000 instead (about 115% FPL), they would be above the floor, with an expected
            contribution of about 2.10% of income (≈ $32/month) toward the benchmark plan.
          </p>
        </section>

        {/* Section 10 - FAQ */}
        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>Can I deduct health insurance premiums as a freelancer?</span>
                <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Usually, yes. Self-employed individuals can deduct the health insurance premiums they pay (net of any premium tax
                credit) as an above-the-line deduction on Schedule 1, not Schedule C, as long as they aren&apos;t eligible for a
                subsidized employer plan. Because it lowers AGI, it also lowers the MAGI used for the credit—and the two
                calculations depend on each other. IRS Publication 974 explains how to compute both.
              </p>
            </details>

            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>What if my income fluctuates wildly as a freelancer?</span>
                <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Make a realistic estimate and <strong>update your income</strong> on your marketplace account when it changes,
                which adjusts your advance credit going forward. At tax time (Form 8962) you reconcile: if you underestimated
                income, you repay excess credit; if you overestimated, you get the difference back. For 2026, the repayment caps no
                longer apply, so large underestimates can be costly.
              </p>
            </details>

            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>Should I take the subsidy monthly or as a tax credit?</span>
                <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Many people choose <strong>advance payments</strong> (subsidy applied monthly) for cash flow. If your income is
                highly variable or close to the 400% FPL cliff, you can take less in advance—or claim the full credit when you
                file—to reduce the chance of a repayment.
              </p>
            </details>

            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>Can I get ACA coverage if I have pre-existing conditions?</span>
                <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Yes. The ACA <strong>prohibits denying coverage</strong> or charging more due to pre-existing conditions. All
                marketplace plans must accept you regardless of health history.
              </p>
            </details>

            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>Will the enhanced subsidies come back?</span>
                <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Only if Congress passes a law to restore or replace them. Until then, the original ACA rules described here apply.
                Check HealthCare.gov for the latest before you enroll or make year-end income decisions.
              </p>
            </details>

            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>What&apos;s the penalty for not having health insurance?</span>
                <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                At the federal level: <strong>$0</strong> (the individual mandate penalty was reduced to zero starting in 2019).
                However, some states and DC (including California, Massachusetts, New Jersey and Rhode Island) have their own
                mandates with penalties; check your state tax agency for current amounts.
              </p>
            </details>
          </div>
        </section>

        {/* Sources */}
        <section id="sources" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="text-slate-700 space-y-2 text-sm">
            <li>• HealthCare.gov (eligibility, enrollment dates, plan quotes): <a href="https://www.healthcare.gov/" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">healthcare.gov</a></li>
            <li>• IRS Publication 974, Premium Tax Credit: <a href="https://www.irs.gov/publications/p974" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/publications/p974</a></li>
            <li>• About Form 8962, Premium Tax Credit: <a href="https://www.irs.gov/forms-pubs/about-form-8962" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/forms-pubs/about-form-8962</a></li>
            <li>• IRS Publication 969, Health Savings Accounts: <a href="https://www.irs.gov/publications/p969" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/publications/p969</a></li>
          </ul>
          <p className="text-sm text-slate-500">
            This guide is educational and not individualized advice. Subsidy rules for 2026 reflect the expiration of the
            enhanced credits after 2025 and IRS Rev. Proc. 2025-25; HSA limits from Rev. Proc. 2025-19. Laws can change—verify
            your eligibility on HealthCare.gov. For how premiums interact with your taxes, see our{' '}
            <a href="/blog/tax-deductions-freelancers-2025/" className="text-indigo-600 font-semibold hover:underline">tax deductions for freelancers guide</a>.
          </p>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 text-white text-center space-y-4">
          <h2 className="text-3xl font-black">See How Much You Could Save on Healthcare</h2>
          <p className="text-xl text-emerald-100">
            Estimate your subsidy and monthly cost in under 60 seconds
          </p>
          <button
            onClick={() => onNavigate?.(ToolType.ACA_SUBSIDY)}
            className="bg-white text-emerald-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-emerald-50 transition"
          >
            Calculate My ACA Subsidy →
          </button>
          <p className="text-sm text-emerald-200">
            Free • Instant estimate • Confirm on HealthCare.gov
          </p>
        </div>

        {/* Related Tools */}
        <div className="border-t border-slate-200 pt-8">
          <h3 className="text-2xl font-black text-slate-900 mb-6">Related Freelancer Tools</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
              className="text-left bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-xl p-6 transition group"
            >
              <div className="text-3xl mb-3">💼</div>
              <h4 className="font-bold text-slate-900 group-hover:text-emerald-600 mb-2">
                Freelance Profit Hub
              </h4>
              <p className="text-sm text-slate-600">
                Calculate net income (MAGI) for subsidy estimation
              </p>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX)}
              className="text-left bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-xl p-6 transition group"
            >
              <div className="text-3xl mb-3">📅</div>
              <h4 className="font-bold text-slate-900 group-hover:text-emerald-600 mb-2">
                Quarterly Tax Calculator
              </h4>
              <p className="text-sm text-slate-600">
                Plan estimated tax payments and optimize MAGI
              </p>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.FIRE_PLANNER)}
              className="text-left bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-xl p-6 transition group"
            >
              <div className="text-3xl mb-3">🔥</div>
              <h4 className="font-bold text-slate-900 group-hover:text-emerald-600 mb-2">
                FIRE Planner
              </h4>
              <p className="text-sm text-slate-600">
                Early retirement healthcare bridge (pre-Medicare)
              </p>
            </button>
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">📚 Complete Freelancer Financial Guide Series</h2>
          <p className="text-gray-600 mb-6">Navigate the full self-employed financial landscape with our guides:</p>

          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => onNavigate?.(ToolType.BLOG_QUARTERLY_TAX)}
              className="text-left bg-white hover:bg-emerald-50 border-2 border-emerald-200 hover:border-emerald-400 rounded-xl p-6 transition-all group shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">📅</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-700 mb-2">
                    Quarterly Estimated Taxes: Complete Guide
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Master IRS Form 1040-ES, safe harbor rules, and payment strategies to avoid underpayment penalties.
                  </p>
                  <div className="text-xs font-semibold text-emerald-600">
                    Read Guide →
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate?.(ToolType.BLOG_CTC_2025)}
              className="text-left bg-white hover:bg-teal-50 border-2 border-teal-200 hover:border-teal-400 rounded-xl p-6 transition-all group shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">👶</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-teal-700 mb-2">
                    Child Tax Credit Guide: CTC & ACTC
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Up to $2,200 per qualifying child, with phase-out rules and the refundable portion explained for freelance families.
                  </p>
                  <div className="text-xs font-semibold text-teal-600">
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
          <p>📝 QuantCurb guide · educational, not individualized advice</p>
          <p>🔄 Last updated: October 2026</p>
        </div>
        <div className="text-right">
          <p>💡 Based on 2026 coverage-year rules</p>
          <p>📊 Verify your numbers at HealthCare.gov</p>
        </div>
      </div>
    </div>
  );
};

export default ACAHealthInsuranceFreelancers2025;

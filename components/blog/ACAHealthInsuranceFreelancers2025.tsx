'use client';


import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const ACAHealthInsuranceFreelancers2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    // Add Article Schema for SEO
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "ACA Health Insurance for Freelancers 2025: Complete Subsidy Guide",
      "description": "Complete guide to ACA Marketplace health insurance for freelancers and self-employed. Learn how to calculate subsidies, Premium Tax Credits, Medicaid eligibility, and save thousands on healthcare costs.",
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
        "@id": "https://quantcurb.com/blog/aca-health-insurance-freelancers-2025"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-aca';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-aca');
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
          <span>⏱️ 15 min read</span>
          <span>•</span>
          <span>🏥 Healthcare Planning</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          ACA Health Insurance for Freelancers 2025: Complete Subsidy & Marketplace Guide
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          As a freelancer or self-employed individual, you could save <strong>thousands on health insurance</strong> through
          ACA Marketplace subsidies. This comprehensive guide explains Premium Tax Credits, Medicaid eligibility, and how to
          afford healthcare without employer coverage.
        </p>

        {/* Calculator CTA */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Calculate Your 2025 ACA Subsidy
              </h3>
              <p className="text-sm text-slate-600">
                Find out if you qualify for Premium Tax Credits and how much you'll save
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
          <li><button onClick={() => scrollToSection('freelancer-crisis')} className="text-emerald-600 hover:underline">1. The Freelancer Healthcare Crisis</button></li>
          <li><button onClick={() => scrollToSection('aca-marketplace')} className="text-emerald-600 hover:underline">2. What is the ACA Marketplace?</button></li>
          <li><button onClick={() => scrollToSection('premium-tax-credit')} className="text-emerald-600 hover:underline">3. Premium Tax Credits Explained</button></li>
          <li><button onClick={() => scrollToSection('subsidy-calculator')} className="text-emerald-600 hover:underline">4. How to Calculate Your Subsidy</button></li>
          <li><button onClick={() => scrollToSection('medicaid')} className="text-emerald-600 hover:underline">5. Medicaid Expansion by State</button></li>
          <li><button onClick={() => scrollToSection('coverage-gap')} className="text-emerald-600 hover:underline">6. The Coverage Gap (Non-Expanded States)</button></li>
          <li><button onClick={() => scrollToSection('enrollment')} className="text-emerald-600 hover:underline">7. How to Enroll & Deadlines</button></li>
          <li><button onClick={() => scrollToSection('cost-strategies')} className="text-emerald-600 hover:underline">8. Strategies to Lower Costs</button></li>
          <li><button onClick={() => scrollToSection('real-scenarios')} className="text-emerald-600 hover:underline">9. Real Freelancer Scenarios</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-emerald-600 hover:underline">10. Frequently Asked Questions</button></li>
        </ol>
      </nav>

      {/* Main Content */}
      <article className="prose prose-lg max-w-none space-y-12">

        {/* Section 1 */}
        <section id="freelancer-crisis" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The Freelancer Healthcare Crisis</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Healthcare is the <strong>#1 reason</strong> people hesitate to leave W-2 employment for freelancing. According to a 2024
            Freelancers Union survey, <strong>60% of freelancers</strong> cite healthcare costs as their biggest financial concern—
            even more than inconsistent income.
          </p>

          <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-xl">
            <p className="text-rose-900 font-semibold text-lg">
              ⚠️ <strong>The Reality:</strong> Without employer subsidies, health insurance can cost $400-800/month for an individual,
              or $1,200-2,500/month for a family. That's $14,400-$30,000 per year—often more than rent!
            </p>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            But here's the good news: <strong>The Affordable Care Act (ACA)</strong> provides substantial subsidies for freelancers,
            self-employed individuals, and anyone without employer coverage. Many freelancers earning under $60,000/year qualify for
            near-FREE healthcare through subsidies or Medicaid.
          </p>
        </section>

        {/* Section 2 */}
        <section id="aca-marketplace" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is the ACA Marketplace (Healthcare.gov)?</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            The <strong>ACA Marketplace</strong> (also called Healthcare.gov or "Obamacare") is the federal platform where individuals
            and families can shop for health insurance and apply for financial assistance.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6">
              <h3 className="font-bold text-emerald-900 text-lg mb-3">✅ Who Can Use It?</h3>
              <ul className="text-slate-700 space-y-2 text-sm">
                <li>• <strong>Freelancers</strong> (1099 contractors)</li>
                <li>• <strong>Self-employed</strong> business owners</li>
                <li>• <strong>Gig workers</strong> (Uber, DoorDash, Upwork)</li>
                <li>• <strong>Early retirees</strong> (under 65, not on Medicare)</li>
                <li>• <strong>Part-time workers</strong> (no employer coverage)</li>
                <li>• <strong>Between jobs</strong> (COBRA alternative)</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6">
              <h3 className="font-bold text-indigo-900 text-lg mb-3">💰 What Are the Benefits?</h3>
              <ul className="text-slate-700 space-y-2 text-sm">
                <li>• <strong>Premium Tax Credits</strong> (lower monthly costs)</li>
                <li>• <strong>Cost-Sharing Reductions</strong> (lower deductibles/copays)</li>
                <li>• <strong>Pre-existing conditions covered</strong> (cannot be denied)</li>
                <li>• <strong>Essential health benefits</strong> (10 categories required)</li>
                <li>• <strong>No lifetime limits</strong> on coverage</li>
                <li>• <strong>Preventive care FREE</strong> (no copay)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="premium-tax-credit" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Premium Tax Credits (PTC) Explained</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            The <strong>Premium Tax Credit (PTC)</strong> is the primary way freelancers afford health insurance. It's a subsidy that
            directly reduces your monthly premium based on your income.
          </p>

          <h3 className="text-2xl font-bold text-slate-900">How Premium Tax Credits Work</h3>

          <p className="text-lg text-slate-700 leading-relaxed">
            The credit is calculated as a <strong>sliding scale percentage of your income</strong>:
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Income Level (% of FPL)</th>
                  <th className="text-left p-4 font-black text-slate-900">Max % of Income for Premium</th>
                  <th className="text-left p-4 font-black text-slate-900">Federal Subsidy Covers</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">100-150% FPL</td>
                  <td className="p-4 font-bold text-emerald-600">0%</td>
                  <td className="p-4 text-slate-600">100% (FREE with subsidies)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">150-200% FPL</td>
                  <td className="p-4 font-bold text-emerald-600">0-2%</td>
                  <td className="p-4 text-slate-600">98-100%</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">200-250% FPL</td>
                  <td className="p-4 font-bold text-indigo-600">2-4%</td>
                  <td className="p-4 text-slate-600">96-98%</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">250-300% FPL</td>
                  <td className="p-4 font-bold text-indigo-600">4-6%</td>
                  <td className="p-4 text-slate-600">94-96%</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">300-400% FPL</td>
                  <td className="p-4 font-bold text-purple-600">6-8.5%</td>
                  <td className="p-4 text-slate-600">91.5-94%</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">400%+ FPL</td>
                  <td className="p-4 font-bold text-purple-600">8.5% (capped)</td>
                  <td className="p-4 text-slate-600">Varies (no cliff!)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-4">
            <h4 className="font-bold text-emerald-900 text-lg">Real Example: Single Freelancer</h4>
            <div className="space-y-2 text-emerald-900">
              <p><strong>Income:</strong> $40,000/year (265% FPL for 2025)</p>
              <p><strong>Benchmark Silver Plan Premium:</strong> $500/month ($6,000/year)</p>
              <p><strong>Max allowed payment (4.5% of income):</strong> $1,800/year ($150/month)</p>
              <p className="text-2xl font-black text-emerald-700">
                <strong>Your Cost:</strong> $150/month | <strong>Subsidy:</strong> $350/month ($4,200/year)
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold text-lg">
              💡 <strong>IRA 2022 Change:</strong> The subsidy "cliff" at 400% FPL was eliminated! Even if you earn above 400% FPL,
              your premium is capped at <strong>8.5% of income</strong>. This is HUGE for higher-earning freelancers.
            </p>
          </div>
        </section>

        {/* Section 4 - Calculator */}
        <section id="subsidy-calculator" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to Calculate Your ACA Subsidy</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Calculating your exact subsidy requires 3 key numbers:
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl">
              <span className="flex-shrink-0 text-2xl">1️⃣</span>
              <div>
                <h3 className="font-bold text-slate-900">Modified Adjusted Gross Income (MAGI)</h3>
                <p className="text-slate-700">Your MAGI is generally your Adjusted Gross Income (AGI) from your tax return.
                For most freelancers, this is your gross income minus business expenses (Schedule C).</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl">
              <span className="flex-shrink-0 text-2xl">2️⃣</span>
              <div>
                <h3 className="font-bold text-slate-900">Federal Poverty Level (FPL)</h3>
                <p className="text-slate-700">For 2025, the FPL is <strong>$15,060 for an individual</strong>, plus $5,380 for
                each additional household member. (Family of 4 = $30,440 FPL)</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl">
              <span className="flex-shrink-0 text-2xl">3️⃣</span>
              <div>
                <h3 className="font-bold text-slate-900">Benchmark Premium (Silver Plan)</h3>
                <p className="text-slate-700">The subsidy is based on the <strong>second-lowest-cost Silver plan</strong> in your
                area. This varies by location, age, and household size.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-slate-900 mb-4">
              Calculate Your Exact Subsidy in 60 Seconds
            </h3>
            <p className="text-slate-700 mb-6">
              Our calculator uses 2025 FPL data and state-specific benchmark premiums
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
            If you earn below <strong>138% of the Federal Poverty Level</strong> (~$20,783 for an individual in 2025), you may
            qualify for <strong>FREE Medicaid</strong>—but only in states that expanded Medicaid under the ACA.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-6">
              <h3 className="font-bold text-emerald-900 text-lg mb-3">✅ 40 States + DC Expanded Medicaid</h3>
              <p className="text-emerald-900 text-sm mb-3">
                In these states, you get <strong>FREE healthcare</strong> if income ≤ 138% FPL:
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
              <h3 className="font-bold text-rose-900 text-lg mb-3">❌ 10 States DID NOT Expand</h3>
              <p className="text-rose-900 text-sm mb-3">
                These states have a <strong>coverage gap</strong> (no Medicaid, no subsidies below 100% FPL):
              </p>
              <div className="space-y-1 text-sm text-rose-800">
                <div>• <strong>Alabama</strong></div>
                <div>• <strong>Florida</strong></div>
                <div>• <strong>Georgia</strong></div>
                <div>• <strong>Kansas</strong></div>
                <div>• <strong>Mississippi</strong></div>
                <div>• <strong>South Carolina</strong></div>
                <div>• <strong>Tennessee</strong></div>
                <div>• <strong>Texas</strong></div>
                <div>• <strong>Wisconsin</strong></div>
                <div>• <strong>Wyoming</strong></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 - Coverage Gap */}
        <section id="coverage-gap" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The Coverage Gap (Non-Expanded States)</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            If you live in a non-expanded state and earn <strong>below 100% FPL</strong> (~$15,060 for individual), you're in the
            <strong>"coverage gap"</strong>: too poor for Marketplace subsidies, but ineligible for Medicaid.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
            <p className="text-amber-900 font-semibold text-lg mb-3">
              ⚠️ <strong>Coverage Gap Example:</strong>
            </p>
            <p className="text-amber-900">
              Freelancer in Texas earning $12,000/year:<br />
              • Too low for Marketplace subsidies (need 100%+ FPL)<br />
              • Texas didn't expand Medicaid (parents qualify only at ~41% FPL = $6,175)<br />
              • Result: <strong>NO affordable coverage options</strong><br />
              • Options: Short-term plans, Community Health Centers, or relocate to expanded state
            </p>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
            <h3 className="font-bold text-indigo-900 text-lg mb-3">Solutions for Coverage Gap</h3>
            <ol className="text-indigo-900 space-y-2 text-sm">
              <li><strong>1. Increase Income:</strong> Take on additional work to reach 100% FPL ($15,060)</li>
              <li><strong>2. Short-Term Health Insurance:</strong> Not ACA-compliant, but better than nothing</li>
              <li><strong>3. Community Health Centers:</strong> Sliding-scale fees based on income</li>
              <li><strong>4. Healthcare Sharing Ministries:</strong> Not insurance, but cost-sharing option</li>
              <li><strong>5. Relocate:</strong> Move to an expanded state (radical but effective)</li>
            </ol>
          </div>
        </section>

        {/* Section 7 - Enrollment */}
        <section id="enrollment" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to Enroll & Important Deadlines</h2>

          <h3 className="text-2xl font-bold text-slate-900">Open Enrollment Period</h3>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
            <p className="text-lg font-bold text-indigo-900 mb-2">
              📅 <strong>2025 Open Enrollment:</strong> November 1, 2025 - January 15, 2026
            </p>
            <p className="text-indigo-800">
              You must enroll during this window for coverage starting January 1, 2026. Missing it means waiting until next year
              (unless you qualify for Special Enrollment).
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-6">Special Enrollment Periods (SEP)</h3>

          <p className="text-lg text-slate-700 leading-relaxed">
            You can enroll <strong>anytime</strong> if you experience a "qualifying life event":
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <h4 className="font-bold text-slate-900 mb-2">✅ Loss of Coverage</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Lost employer coverage (quit/fired)</li>
                <li>• COBRA expired</li>
                <li>• Aged out of parent's plan (26th birthday)</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <h4 className="font-bold text-slate-900 mb-2">✅ Household Changes</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Marriage or divorce</li>
                <li>• Birth or adoption of child</li>
                <li>• Death of dependent</li>
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
              <h4 className="font-bold text-slate-900 mb-2">✅ Income Changes</h4>
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
              { num: 1, title: "Create Healthcare.gov Account", desc: "Go to HealthCare.gov and create an account" },
              { num: 2, title: "Start Application", desc: "Provide household size and estimated 2025 income" },
              { num: 3, title: "See Subsidy Estimate", desc: "System calculates your Premium Tax Credit instantly" },
              { num: 4, title: "Browse Plans", desc: "Compare Bronze, Silver, Gold, Platinum tiers" },
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
                <span>💰</span> Optimize Your MAGI
              </h3>
              <p className="text-emerald-900 mb-3">
                Lower your Modified AGI to increase subsidies:
              </p>
              <ul className="text-emerald-900 space-y-2 text-sm">
                <li>• <strong>Max out retirement contributions:</strong> Solo 401(k) or SEP IRA ($69,000 limit 2025)</li>
                <li>• <strong>HSA contributions:</strong> $4,300 individual, $8,550 family (2025)</li>
                <li>• <strong>Business expenses:</strong> Deduct all legitimate Schedule C expenses</li>
                <li>• <strong>Timing:</strong> Defer income to next year if close to subsidy cliff</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
              <h3 className="font-bold text-indigo-900 text-lg mb-3 flex items-center gap-2">
                <span>🏥</span> Choose Silver Plans for CSR
              </h3>
              <p className="text-indigo-900 mb-3">
                If you earn 100-250% FPL, <strong>always choose Silver plans</strong>:
              </p>
              <ul className="text-indigo-900 space-y-2 text-sm">
                <li>• Silver plans unlock <strong>Cost-Sharing Reductions (CSR)</strong></li>
                <li>• CSR lowers deductibles, copays, and out-of-pocket maximums</li>
                <li>• At 150% FPL: Deductible drops from $7,000 → $500 (94% actuarial value)</li>
                <li>• Bronze/Gold plans DON'T get CSR, even at same income</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
              <h3 className="font-bold text-amber-900 text-lg mb-3 flex items-center gap-2">
                <span>📊</span> Report Income Changes Immediately
              </h3>
              <p className="text-amber-900 mb-3">
                Freelance income fluctuates—update Healthcare.gov when it changes:
              </p>
              <ul className="text-amber-900 space-y-2 text-sm">
                <li>• <strong>Income increases:</strong> Report within 30 days to avoid overpayment clawback</li>
                <li>• <strong>Income decreases:</strong> Report immediately to increase subsidy</li>
                <li>• Reconcile on tax return (Form 8962) to settle up</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 9 - Real Scenarios */}
        <section id="real-scenarios" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Real Freelancer Healthcare Scenarios</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="text-3xl">💻</div>
              <h3 className="font-bold text-slate-900 text-lg">Web Developer, $55k Income</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Single, age 32, California</li>
                <li>• MAGI: $55,000 (365% FPL)</li>
                <li>• Benchmark Premium: $450/month</li>
                <li>• Max payment (8.5%): $390/month</li>
                <li className="font-bold text-emerald-600">• Your cost: $390/mo | Subsidy: $60/mo</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="text-3xl">✍️</div>
              <h3 className="font-bold text-slate-900 text-lg">Freelance Writer, $28k Income</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Single, age 28, New York</li>
                <li>• MAGI: $28,000 (186% FPL)</li>
                <li>• Benchmark Premium: $520/month</li>
                <li>• Max payment (2%): $47/month</li>
                <li className="font-bold text-emerald-600">• Your cost: $47/mo | Subsidy: $473/mo ($5,676/year!)</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="text-3xl">👨‍👩‍👧‍👦</div>
              <h3 className="font-bold text-slate-900 text-lg">Family of 4, $72k Income</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Married + 2 kids, Texas</li>
                <li>• MAGI: $72,000 (197% FPL for family of 4)</li>
                <li>• Benchmark Premium: $1,400/month</li>
                <li>• Max payment (3%): $180/month</li>
                <li className="font-bold text-emerald-600">• Your cost: $180/mo | Subsidy: $1,220/mo ($14,640/year!)</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="text-3xl">🚗</div>
              <h3 className="font-bold text-slate-900 text-lg">Uber Driver, $18k Income (Coverage Gap)</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Single, age 35, Georgia (non-expanded)</li>
                <li>• MAGI: $18,000 (120% FPL)</li>
                <li>• Too low for Marketplace subsidies (&lt;100% FPL in GA)</li>
                <li>• GA Medicaid: Parents only at ~41% FPL</li>
                <li className="font-bold text-rose-600">• Result: Coverage gap—no affordable options</li>
              </ul>
            </div>
          </div>
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
                Yes! Self-employed individuals can deduct <strong>100% of health insurance premiums</strong> on Form 1040 (not Schedule C).
                This is an "above-the-line" deduction that reduces your Adjusted Gross Income—but NOT your MAGI for subsidy purposes.
              </p>
            </details>

            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>What if my income fluctuates wildly as a freelancer?</span>
                <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Estimate your annual income conservatively. You can <strong>update your income</strong> on Healthcare.gov anytime,
                which adjusts your subsidy immediately. At tax time (Form 8962), you'll reconcile: if you underestimated income,
                you repay some subsidy; if overestimated, you get extra refund.
              </p>
            </details>

            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>Should I take the subsidy monthly or as a tax credit?</span>
                <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Most freelancers choose <strong>advance payments</strong> (subsidy applied monthly) for cash flow reasons. But if your
                income is highly variable, you can take it as a lump sum tax credit when filing—this avoids potential repayment if you
                earn more than expected.
              </p>
            </details>

            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>Can I get ACA coverage if I have pre-existing conditions?</span>
                <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Yes! The ACA <strong>prohibits denying coverage</strong> or charging more due to pre-existing conditions. All Marketplace
                plans must accept you regardless of health history.
              </p>
            </details>

            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>What's the penalty for not having health insurance?</span>
                <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                At the federal level: <strong>$0</strong> (individual mandate penalty was eliminated in 2019). However, some states
                (CA, MA, NJ, RI, DC) have their own mandates with penalties ranging from $695-$2,085+ per person.
              </p>
            </details>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 text-white text-center space-y-4">
          <h2 className="text-3xl font-black">See How Much You'll Save on Healthcare</h2>
          <p className="text-xl text-emerald-100">
            Calculate your exact subsidy and monthly cost in under 60 seconds
          </p>
          <button
            onClick={() => onNavigate?.(ToolType.ACA_SUBSIDY)}
            className="bg-white text-emerald-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-emerald-50 transition"
          >
            Calculate My ACA Subsidy →
          </button>
          <p className="text-sm text-emerald-200">
            Free • Instant results • 2025 FPL data • All 50 states
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
          <p className="text-gray-600 mb-6">Navigate the full self-employed financial landscape with our expert guides:</p>

          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => onNavigate?.(ToolType.BLOG_QUARTERLY_TAX)}
              className="text-left bg-white hover:bg-emerald-50 border-2 border-emerald-200 hover:border-emerald-400 rounded-xl p-6 transition-all group shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">📅</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-700 mb-2">
                    Quarterly Estimated Taxes 2025: Complete Guide
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
                    Child Tax Credit 2025: Complete CTC & ACTC Guide
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Maximize up to $2,000 per child with phase-out strategies and refundable credit calculations for freelance families.
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
          <p>📝 Written by QuantCurb Financial Research Team</p>
          <p>🔄 Last updated: January 4, 2026</p>
        </div>
        <div className="text-right">
          <p>💡 Based on 2025 ACA guidelines</p>
          <p>📊 Data verified with Healthcare.gov</p>
        </div>
      </div>
    </div>
  );
};

export default ACAHealthInsuranceFreelancers2025;

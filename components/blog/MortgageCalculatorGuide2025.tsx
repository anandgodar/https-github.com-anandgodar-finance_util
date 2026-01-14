'use client';


import React, { useEffect } from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';
import RecommendedTools from '../RecommendedTools';
import AuthorBio from '../AuthorBio';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const MortgageCalculatorGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Complete Guide to Mortgage Calculator 2025: PITI, PMI, Property Tax & More",
      "description": "Master mortgage calculations with our comprehensive 2025 guide. Learn PITI (Principal, Interest, Taxes, Insurance), PMI, property tax rates by state, and how to use a mortgage calculator to find your perfect home.",
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
      "datePublished": "2026-01-08",
      "dateModified": "2026-01-08",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/mortgage-calculator-guide-2025"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-mortgage';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-mortgage');
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
          <span>🏡 Home Buying</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Complete Guide to Mortgage Calculator 2025: PITI, PMI, Property Tax & More
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Buying a home is one of the biggest financial decisions you'll make. Our comprehensive mortgage calculator guide
          explains <strong>PITI (Principal, Interest, Taxes, Insurance)</strong>, PMI calculations, property tax rates by state,
          and how to determine exactly how much house you can afford in 2025.
        </p>

        {/* Calculator CTA */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Calculate Your Mortgage Payment
              </h3>
              <p className="text-sm text-slate-600">
                Get instant PITI calculations with state-specific property tax rates and PMI estimates
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Mortgage Calculator →
            </button>
          </div>
        </div>
      </header>

      {/* Table of Contents */}
      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('what-is-piti')} className="text-indigo-600 hover:underline">1. What is PITI? Understanding Your Total Mortgage Payment</button></li>
          <li><button onClick={() => scrollToSection('principal-interest')} className="text-indigo-600 hover:underline">2. Principal & Interest: The Core of Your Payment</button></li>
          <li><button onClick={() => scrollToSection('property-tax')} className="text-indigo-600 hover:underline">3. Property Taxes by State: Complete 2025 Guide</button></li>
          <li><button onClick={() => scrollToSection('home-insurance')} className="text-indigo-600 hover:underline">4. Homeowners Insurance: What to Expect</button></li>
          <li><button onClick={() => scrollToSection('pmi')} className="text-indigo-600 hover:underline">5. PMI (Private Mortgage Insurance): When You Need It</button></li>
          <li><button onClick={() => scrollToSection('how-much-afford')} className="text-indigo-600 hover:underline">6. How Much House Can I Afford? The 28/36 Rule</button></li>
          <li><button onClick={() => scrollToSection('mortgage-types')} className="text-indigo-600 hover:underline">7. Types of Mortgages: Fixed vs ARM</button></li>
          <li><button onClick={() => scrollToSection('closing-costs')} className="text-indigo-600 hover:underline">8. Closing Costs: The Hidden Expenses</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">9. Frequently Asked Questions</button></li>
        </ol>
      </nav>

      {/* Main Content */}
      <article className="prose prose-lg max-w-none space-y-12">

        {/* Section 1 */}
        <section id="what-is-piti" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is PITI? Understanding Your Total Mortgage Payment</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>PITI</strong> stands for <strong>Principal, Interest, Taxes, and Insurance</strong>—the four components that make up
            your total monthly mortgage payment. Understanding each component is crucial for accurate budgeting.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Component</th>
                  <th className="text-left p-4 font-black text-slate-900">What It Is</th>
                  <th className="text-left p-4 font-black text-slate-900">Typical % of Payment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Principal</td>
                  <td className="p-4 text-slate-700">The loan amount you borrowed</td>
                  <td className="p-4 text-slate-700">Varies (decreases over time)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Interest</td>
                  <td className="p-4 text-slate-700">Cost of borrowing money</td>
                  <td className="p-4 text-slate-700">Varies (decreases over time)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Taxes</td>
                  <td className="p-4 text-slate-700">Property taxes (collected monthly)</td>
                  <td className="p-4 text-slate-700">15-25%</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Insurance</td>
                  <td className="p-4 text-slate-700">Homeowners insurance premium</td>
                  <td className="p-4 text-slate-700">5-10%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold text-lg">
              💡 <strong>Example:</strong> If your monthly PITI is $2,500, that includes approximately:
              <ul className="mt-2 space-y-1 text-base">
                <li>• $1,200 Principal & Interest</li>
                <li>• $500 Property Taxes</li>
                <li>• $200 Homeowners Insurance</li>
                <li>• $600 (remaining for principal/interest as loan matures)</li>
              </ul>
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="principal-interest" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Principal & Interest: The Core of Your Payment</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            The <strong>principal</strong> is the amount you borrowed to buy your home. The <strong>interest</strong> is what
            the lender charges you for borrowing that money. Together, they make up the bulk of your mortgage payment.
          </p>

          <h3 className="text-2xl font-black text-slate-900 mt-8">How Principal & Interest Work</h3>

          <p className="text-lg text-slate-700 leading-relaxed">
            In the early years of your mortgage, most of your payment goes toward <strong>interest</strong>. As you pay down
            the loan, more of each payment goes toward the <strong>principal</strong>. This is called amortization.
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold">
              📊 <strong>Amortization Example:</strong> On a $400,000 loan at 6.5% for 30 years:
              <ul className="mt-2 space-y-1 text-base">
                <li>• <strong>Year 1:</strong> $2,528/month payment → $2,167 interest, $361 principal</li>
                <li>• <strong>Year 15:</strong> $2,528/month payment → $1,200 interest, $1,328 principal</li>
                <li>• <strong>Year 30:</strong> $2,528/month payment → $13 interest, $2,515 principal</li>
              </ul>
            </p>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">Interest Rates in 2025</h3>

          <p className="text-lg text-slate-700 leading-relaxed">
            Mortgage interest rates fluctuate based on economic conditions, your credit score, loan type, and down payment.
            As of early 2025, average rates are:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-2">30-Year Fixed</h4>
              <p className="text-3xl font-black text-indigo-600">6.0% - 7.5%</p>
              <p className="text-sm text-slate-600 mt-2">Most popular option</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-2">15-Year Fixed</h4>
              <p className="text-3xl font-black text-indigo-600">5.5% - 7.0%</p>
              <p className="text-sm text-slate-600 mt-2">Lower rate, higher payment</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="property-tax" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Property Taxes by State: Complete 2025 Guide</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Property taxes vary significantly by state and can add hundreds or thousands of dollars to your monthly payment.
            States with the <strong>highest property tax rates</strong> include New Jersey, Illinois, and New Hampshire.
            States with the <strong>lowest rates</strong> include Hawaii, Alabama, and Louisiana.
          </p>

          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-lg mb-4">Top 5 States with Highest Property Tax Rates (2025)</h3>
            <ol className="space-y-2">
              <li className="flex justify-between"><span><strong>New Jersey:</strong></span> <span className="font-bold text-red-600">2.49%</span></li>
              <li className="flex justify-between"><span><strong>Illinois:</strong></span> <span className="font-bold text-red-600">2.27%</span></li>
              <li className="flex justify-between"><span><strong>New Hampshire:</strong></span> <span className="font-bold text-red-600">2.18%</span></li>
              <li className="flex justify-between"><span><strong>Vermont:</strong></span> <span className="font-bold text-red-600">1.90%</span></li>
              <li className="flex justify-between"><span><strong>Connecticut:</strong></span> <span className="font-bold text-red-600">1.96%</span></li>
            </ol>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-lg mb-4">Top 5 States with Lowest Property Tax Rates (2025)</h3>
            <ol className="space-y-2">
              <li className="flex justify-between"><span><strong>Hawaii:</strong></span> <span className="font-bold text-emerald-600">0.28%</span></li>
              <li className="flex justify-between"><span><strong>Alabama:</strong></span> <span className="font-bold text-emerald-600">0.41%</span></li>
              <li className="flex justify-between"><span><strong>Louisiana:</strong></span> <span className="font-bold text-emerald-600">0.55%</span></li>
              <li className="flex justify-between"><span><strong>Wyoming:</strong></span> <span className="font-bold text-emerald-600">0.61%</span></li>
              <li className="flex justify-between"><span><strong>West Virginia:</strong></span> <span className="font-bold text-emerald-600">0.58%</span></li>
            </ol>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Example:</strong> On a $400,000 home, annual property taxes would be:
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li><strong>New Jersey:</strong> $9,960/year ($830/month)</li>
            <li><strong>Hawaii:</strong> $1,120/year ($93/month)</li>
            <li><strong>National Average:</strong> $3,785/year ($315/month)</li>
          </ul>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-4">
            <p className="text-indigo-900 font-semibold">
              💡 <strong>Pro Tip:</strong> Property taxes are typically paid through an <strong>escrow account</strong> managed by your lender.
              They collect 1/12th of your annual tax bill each month, then pay it when due.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="home-insurance" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Homeowners Insurance: What to Expect</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Homeowners insurance protects your home and belongings from damage, theft, and liability. Lenders require it,
            and it's typically included in your monthly PITI payment through an escrow account.
          </p>

          <h3 className="text-2xl font-black text-slate-900 mt-8">Average Homeowners Insurance Costs (2025)</h3>

          <p className="text-lg text-slate-700 leading-relaxed">
            The national average for homeowners insurance is approximately <strong>$1,428 per year</strong> ($119/month)
            for a $250,000 dwelling coverage policy. However, costs vary significantly by:
          </p>

          <div className="space-y-4 mt-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-2">📍 Location</h4>
              <p className="text-slate-700">Areas prone to natural disasters (hurricanes, wildfires, tornadoes) have higher premiums.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-2">🏠 Home Value & Age</h4>
              <p className="text-slate-700">Newer, more expensive homes cost more to insure. Older homes may have higher premiums due to replacement costs.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-2">🛡️ Coverage Level</h4>
              <p className="text-slate-700">Higher coverage limits and lower deductibles increase premiums.</p>
            </div>
          </div>
        </section>

        {/* Ad Placement - Middle of Article */}
        <div className="my-12">
          <AdPlacement size="responsive" position="middle" lazy={true} />
        </div>

        {/* Section 5 */}
        <section id="pmi" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">PMI (Private Mortgage Insurance): When You Need It</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Private Mortgage Insurance (PMI)</strong> protects the lender if you default on your loan. You're required
            to pay PMI if your down payment is less than <strong>20% of the home's purchase price</strong>.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
            <p className="text-yellow-900 font-semibold text-lg">
              ⚠️ <strong>Important:</strong> PMI does NOT protect you—it protects your lender. You pay for it, but it provides
              no direct benefit to you.
            </p>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">PMI Costs</h3>

          <p className="text-lg text-slate-700 leading-relaxed">
            PMI typically costs <strong>0.5% to 1.5% of your loan amount annually</strong>, divided into monthly payments.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-4">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Loan Amount</th>
                  <th className="text-left p-4 font-black text-slate-900">Down Payment</th>
                  <th className="text-left p-4 font-black text-slate-900">Annual PMI</th>
                  <th className="text-left p-4 font-black text-slate-900">Monthly PMI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">$400,000</td>
                  <td className="p-4 text-slate-700">5% ($20,000)</td>
                  <td className="p-4 font-bold text-indigo-600">$4,000</td>
                  <td className="p-4 font-bold text-indigo-600">$333</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">$400,000</td>
                  <td className="p-4 text-slate-700">10% ($40,000)</td>
                  <td className="p-4 font-bold text-indigo-600">$3,000</td>
                  <td className="p-4 font-bold text-indigo-600">$250</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">$400,000</td>
                  <td className="p-4 text-slate-700">15% ($60,000)</td>
                  <td className="p-4 font-bold text-indigo-600">$2,000</td>
                  <td className="p-4 font-bold text-indigo-600">$167</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">$400,000</td>
                  <td className="p-4 text-emerald-600 font-bold">20%+ ($80,000+)</td>
                  <td className="p-4 text-emerald-600 font-bold">$0</td>
                  <td className="p-4 text-emerald-600 font-bold">$0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">How to Remove PMI</h3>

          <p className="text-lg text-slate-700 leading-relaxed">
            You can request PMI removal when:
          </p>

          <ol className="list-decimal list-inside space-y-2 text-slate-700 mt-4">
            <li><strong>Your loan-to-value (LTV) ratio reaches 80%</strong> through regular payments</li>
            <li><strong>Your home's value increases</strong> (through an appraisal) bringing LTV below 80%</li>
            <li><strong>You make extra payments</strong> to reach 20% equity</li>
          </ol>
        </section>

        {/* Section 6 */}
        <section id="how-much-afford" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How Much House Can I Afford? The 28/36 Rule</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Lenders use the <strong>28/36 rule</strong> to determine how much you can afford:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-indigo-900 text-lg mb-2">28% Front-End Ratio</h3>
              <p className="text-indigo-800">Your monthly housing costs (PITI) should not exceed <strong>28% of your gross monthly income</strong>.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="font-bold text-purple-900 text-lg mb-2">36% Back-End Ratio</h3>
              <p className="text-purple-800">Your total monthly debt payments (including PITI) should not exceed <strong>36% of your gross monthly income</strong>.</p>
            </div>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <p className="text-emerald-900 font-semibold text-lg">
              📊 <strong>Example Calculation:</strong> If you earn $100,000/year ($8,333/month):
              <ul className="mt-2 space-y-1 text-base">
                <li>• <strong>28% Rule:</strong> Max housing payment = $2,333/month</li>
                <li>• <strong>36% Rule:</strong> Max total debt = $3,000/month</li>
                <li>• If you have $500/month in other debts, max housing = $2,500/month</li>
              </ul>
            </p>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">Other Factors to Consider</h3>

          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li><strong>Down Payment:</strong> 20% down avoids PMI, but 3-5% down is possible with FHA loans</li>
            <li><strong>Credit Score:</strong> Higher scores = lower interest rates = more buying power</li>
            <li><strong>Debt-to-Income Ratio:</strong> Lower existing debt = more mortgage you can afford</li>
            <li><strong>Emergency Fund:</strong> Don't drain savings for down payment—keep 3-6 months expenses</li>
            <li><strong>Closing Costs:</strong> Budget 2-5% of home price for closing costs</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section id="mortgage-types" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Types of Mortgages: Fixed vs ARM</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-xl mb-3">Fixed-Rate Mortgage</h3>
              <p className="text-slate-700 mb-4">Your interest rate stays the same for the entire loan term (typically 15 or 30 years).</p>
              <p className="font-bold text-emerald-600 mb-2">✅ Pros:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 mb-4">
                <li>Predictable payments</li>
                <li>No rate surprises</li>
                <li>Easier budgeting</li>
              </ul>
              <p className="font-bold text-red-600 mb-2">❌ Cons:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                <li>Higher initial rates</li>
                <li>Less flexibility</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-xl mb-3">Adjustable-Rate Mortgage (ARM)</h3>
              <p className="text-slate-700 mb-4">Your interest rate is fixed for an initial period (e.g., 5, 7, or 10 years), then adjusts periodically.</p>
              <p className="font-bold text-emerald-600 mb-2">✅ Pros:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 mb-4">
                <li>Lower initial rates</li>
                <li>Good for short-term ownership</li>
              </ul>
              <p className="font-bold text-red-600 mb-2">❌ Cons:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                <li>Rates can increase</li>
                <li>Payment uncertainty</li>
                <li>Rate caps limit increases</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section id="closing-costs" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Closing Costs: The Hidden Expenses</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Closing costs are fees paid at the closing of your real estate transaction. They typically range from
            <strong> 2% to 5% of the home's purchase price</strong>.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-4">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Fee Type</th>
                  <th className="text-left p-4 font-black text-slate-900">Typical Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Loan Origination Fee</td>
                  <td className="p-4 font-bold text-slate-900">0.5% - 1% of loan</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Appraisal</td>
                  <td className="p-4 font-bold text-slate-900">$300 - $600</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Home Inspection</td>
                  <td className="p-4 font-bold text-slate-900">$300 - $500</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Title Insurance</td>
                  <td className="p-4 font-bold text-slate-900">$500 - $2,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Recording Fees</td>
                  <td className="p-4 font-bold text-slate-900">$100 - $500</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Prepaid Property Taxes</td>
                  <td className="p-4 font-bold text-slate-900">Varies by location</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-4">
            <p className="text-indigo-900 font-semibold">
              💡 <strong>Example:</strong> On a $400,000 home, closing costs could be $8,000 - $20,000. Some sellers
              may agree to pay a portion of closing costs as part of negotiations.
            </p>
          </div>
        </section>

        {/* Section 9 - FAQ */}
        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How do I calculate my monthly mortgage payment?</h3>
              <p className="text-slate-700">
                Use our <button onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)} className="text-indigo-600 hover:underline font-semibold">mortgage calculator</button> to get an instant estimate.
                The formula includes principal, interest, property taxes, homeowners insurance, and PMI (if applicable).
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What's included in my monthly mortgage payment?</h3>
              <p className="text-slate-700">
                Your monthly payment includes PITI: Principal, Interest, Taxes (property), and Insurance (homeowners).
                If you have less than 20% equity, PMI is also included.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How much should I put down on a house?</h3>
              <p className="text-slate-700">
                While 20% down avoids PMI, many buyers put down 3-5% (FHA loans) or 10-15% (conventional loans).
                The right amount depends on your financial situation, but avoid draining your emergency fund.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Can I remove PMI early?</h3>
              <p className="text-slate-700">
                Yes! Once your loan-to-value ratio reaches 80% (through payments or home appreciation), you can request
                PMI removal. Some lenders require an appraisal to confirm the home's value.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Should I get a 15-year or 30-year mortgage?</h3>
              <p className="text-slate-700">
                A 15-year mortgage has lower interest rates and saves money long-term, but higher monthly payments.
                A 30-year mortgage offers lower payments and more flexibility. Choose based on your financial goals.
              </p>
            </div>
          </div>
        </section>

        {/* Recommended Tools - Affiliate Section */}
        <section className="my-12">
          <RecommendedTools calculatorType="mortgage" />
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Calculate Your Mortgage?</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Use our professional mortgage calculator with state-specific property tax rates and PMI calculations.
          </p>
          <button
            onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
            className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition text-lg"
          >
            Calculate Mortgage Payment →
          </button>
        </section>

        {/* Email Capture Section */}
        <section className="mt-12">
          <EmailCapture
            title="Get More Mortgage & Home Buying Resources"
            description="Subscribe to get exclusive mortgage guides, home buying tips, and financial strategies delivered to your inbox."
            leadMagnet={{
              title: "Mortgage Planning Resources",
              description: "Weekly tips on mortgages, home buying, and real estate investing."
            }}
            buttonText="Subscribe Free"
          />
        </section>

        {/* Author Bio */}
        <AuthorBio variant="compact" />
      </article>
    </div>
  );
};

export default MortgageCalculatorGuide2025;

'use client';

import React from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const BestMortgageCalculator2025: React.FC<BlogProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <header className="space-y-6">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span>📅 Updated October 2026</span>
          <span>•</span>
          <span>⏱️ 5 min read</span>
          <span>•</span>
          <span>🏡 Home Buying</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Best Mortgage Calculator 2026: Compare Top Tools & Features
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Finding the right mortgage calculator is crucial for accurate home buying decisions. This guide explains which
          features actually matter — <strong>PITI, PMI, property tax and amortization</strong> — how popular calculators
          differ in approach, and a simple test you can use to check whether any calculator&apos;s math is right.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Try Our Mortgage Calculator
              </h3>
              <p className="text-sm text-slate-600">
                Full PITI breakdown with adjustable property tax, insurance, HOA and PMI inputs
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Calculator →
            </button>
          </div>
        </div>
      </header>

      <article className="prose prose-lg max-w-none space-y-12">
        <section className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What a good mortgage calculator should do</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Almost every mortgage calculator gets principal and interest right, because it comes from one standard formula.
            The differences are in what else the tool includes and how much control you have over the assumptions. A
            calculator that shows only principal and interest can understate your real payment by hundreds of dollars a month,
            because property tax, homeowners insurance, mortgage insurance and HOA dues all sit on top. A good tool lets you:
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Enter your own property tax rate or annual bill, not just a national default</li>
            <li>• Enter a real insurance quote and any HOA dues</li>
            <li>• See PMI when you put less than 20% down — and when it would drop off</li>
            <li>• View an amortization schedule showing how much of each payment is interest</li>
            <li>• Change the rate, term and down payment quickly to test different scenarios</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Popular Mortgage Calculators Compared (2026)</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Below is a general overview of three common types of calculator. Features on third-party sites change often, so
            check each tool yourself before relying on it. QuantCurb is the publisher of this article, so we describe our own
            tool first and note its limitations.
          </p>

          <div className="space-y-8 mt-6">
            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🏆</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-black text-indigo-900 text-2xl">QuantCurb Mortgage Calculator</h3>
                    <span className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-bold">OUR TOOL</span>
                  </div>
                  <p className="text-indigo-800 font-semibold mb-4">PITI-focused calculator with explicit inputs for every cost</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-indigo-900 mb-3">✅ Pros</h4>
                  <ul className="space-y-2 text-indigo-800 text-sm">
                    <li>• Adjustable property tax rate, plus state pages with typical rates for selected states</li>
                    <li>• PMI estimate with automatic drop-off at 78% LTV on the original schedule</li>
                    <li>• Complete PITI breakdown, including HOA dues</li>
                    <li>• Free, no sign-up required</li>
                    <li>• Exact reducing-balance amortization math</li>
                    <li>• Amortization schedule visualization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-indigo-900 mb-3">❌ Cons</h4>
                  <ul className="space-y-2 text-indigo-800 text-sm">
                    <li>• Newer tool (less brand recognition)</li>
                    <li>• No mobile app (web only)</li>
                    <li>• Doesn&apos;t pull live rate quotes or listing data — you supply the inputs</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition"
              >
                Try QuantCurb Mortgage Calculator →
              </button>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-xl p-8">
              <h3 className="font-black text-slate-900 text-2xl mb-2">Bankrate Mortgage Calculator</h3>
              <p className="text-slate-600 font-semibold mb-4">Calculator from a large personal-finance publisher</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">✅ Pros</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Well-known brand</li>
                    <li>• Simple interface</li>
                    <li>• Free to use</li>
                    <li>• Sits alongside rate tables and explanatory articles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">❌ Cons</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Advertising- and referral-supported, so pages include ads and lender offers</li>
                    <li>• Default assumptions may not match your county&apos;s taxes or your insurance quote — override them</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-xl p-8">
              <h3 className="font-black text-slate-900 text-2xl mb-2">Zillow Mortgage Calculator</h3>
              <p className="text-slate-600 font-semibold mb-4">Real estate focused calculator</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">✅ Pros</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Integrated with property listings</li>
                    <li>• Good for quick estimates</li>
                    <li>• Mobile-friendly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">❌ Cons</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Payment estimates on listings rely on assumed taxes, insurance and rates</li>
                    <li>• Focused on Zillow listings and connecting you with lenders and agents</li>
                    <li>• Verify any estimate against the actual tax bill and a real insurance quote</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Key Features to Look For</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-3">🏠 Complete PITI Calculation</h3>
              <p className="text-slate-700 text-sm">Principal, Interest, Taxes, and Insurance all included in monthly payment.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-3">📊 Local Property Taxes</h3>
              <p className="text-slate-700 text-sm">Property tax rates vary significantly by state and county—essential for accurate calculations.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-3">💰 PMI Calculations</h3>
              <p className="text-slate-700 text-sm">Automatic PMI calculation and removal timeline based on LTV ratio.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-3">📈 Amortization Schedule</h3>
              <p className="text-slate-700 text-sm">Visual breakdown of principal vs interest over the life of the loan.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Match the calculator to the job</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The &quot;best&quot; calculator depends on where you are in the process:
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Browsing listings:</strong> a listing-site calculator is convenient for a rough monthly figure on a specific home.</li>
            <li>• <strong>Setting a budget:</strong> use a PITI calculator where you control the tax rate, insurance, HOA and PMI, and test several rates.</li>
            <li>• <strong>Comparing lender offers:</strong> use a side-by-side comparison that includes points and fees, not just the rate.</li>
            <li>• <strong>Planning extra payments:</strong> use a tool with an extra-payment input, such as the{' '}
              <a href="/loan-emi-calculator/" className="text-indigo-600 font-semibold hover:underline">loan payment calculator</a>, to see interest saved and the new payoff date.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to test any mortgage calculator in 60 seconds</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Principal and interest follow one formula: <strong>M = P × r(1 + r)<sup>n</sup> ÷ ((1 + r)<sup>n</sup> − 1)</strong>,
            where P is the loan amount, r is the annual rate divided by 12, and n is the number of monthly payments. Enter these
            hypothetical test cases (with taxes, insurance and PMI set to zero) and compare the results:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Loan amount</th>
                  <th className="text-left p-4 font-black text-slate-900">Rate</th>
                  <th className="text-left p-4 font-black text-slate-900">Term</th>
                  <th className="text-left p-4 font-black text-slate-900">Correct P&amp;I</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">$400,000</td><td className="p-4 text-slate-700">6.5%</td><td className="p-4 text-slate-700">30 years</td><td className="p-4 font-bold text-slate-900">$2,528.27</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">$400,000</td><td className="p-4 text-slate-700">5.75%</td><td className="p-4 text-slate-700">15 years</td><td className="p-4 font-bold text-slate-900">$3,321.64</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">$300,000</td><td className="p-4 text-slate-700">7%</td><td className="p-4 text-slate-700">30 years</td><td className="p-4 font-bold text-slate-900">$1,995.91</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            A result within a few cents is fine (rounding). A result that is off by more usually means the tool is using a
            different compounding convention or is quietly adding something. Next, add taxes and insurance and check that the
            tool adds exactly 1/12 of each annual amount. Finally, check the PMI logic: with 10% down, does the calculator show
            PMI, and does it show when PMI ends? Our guide on{' '}
            <a href="/blog/pmi-math-how-to-remove-faster/" className="text-indigo-600 font-semibold hover:underline">how PMI removal works</a>{' '}
            explains the 80% and 78% thresholds.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What no calculator can tell you</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Your actual rate.</strong> Only a lender quote based on your credit, down payment and loan type can do that. Treat any rate you type in as an assumption.</li>
            <li>• <strong>Your loan limits and program rules.</strong> For example, the 2026 conforming loan limit for a one-unit home is $832,750 in most counties; FHA loans allow 3.5% down with a credit score of 580 or higher. Check with your lender for the rules that apply to you.</li>
            <li>• <strong>Your future property tax bill.</strong> Reassessment after a sale can raise it above the seller&apos;s bill.</li>
            <li>• <strong>Whether you can afford it.</strong> That depends on your income, other debts and savings goals. Pair a payment calculator with the{' '}
              <a href="/debt-to-income-ratio-calculator/" className="text-indigo-600 font-semibold hover:underline">debt-to-income ratio calculator</a>{' '}
              and the{' '}
              <a href="/blog/how-much-house-can-i-afford-2025/" className="text-indigo-600 font-semibold hover:underline">home affordability guide</a>.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Why do different calculators give different payments?</h3>
              <p className="text-slate-700">
                Usually because of hidden defaults — a national-average tax rate, an assumed insurance premium, or PMI added
                automatically. Set every input yourself and the principal-and-interest figure should match across tools.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Does a calculator&apos;s payment match my Loan Estimate?</h3>
              <p className="text-slate-700">
                It should be close if you use the same loan amount, rate and term. Differences in the escrow estimate and mortgage
                insurance are the usual gap. Your Loan Estimate is the document to rely on.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Which calculator should I use to compare offers?</h3>
              <p className="text-slate-700">
                A payment calculator shows one loan at a time. To compare rates, points and fees side by side, use the{' '}
                <a href="/loan-comparison-tool/" className="text-indigo-600 font-semibold hover:underline">loan comparison tool</a>.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Where can I learn every input in detail?</h3>
              <p className="text-slate-700">
                See our{' '}
                <a href="/blog/mortgage-calculator-guide-2025/" className="text-indigo-600 font-semibold hover:underline">complete mortgage calculator guide</a>{' '}
                for PITI, PMI, property tax, closing costs and the 28/36 rule.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Consumer Financial Protection Bureau — homebuying guides and Loan Estimate explainer: <a href="https://www.consumerfinance.gov/" className="text-indigo-600 font-semibold hover:underline">consumerfinance.gov</a></li>
            <li>• Federal Housing Finance Agency — conforming loan limits: <a href="https://www.fhfa.gov/" className="text-indigo-600 font-semibold hover:underline">fhfa.gov</a></li>
          </ul>
          <p className="text-sm text-slate-500">
            Third-party tools are described in general terms and may have changed; QuantCurb is not affiliated with them. Test
            cases are computed with the standard amortization formula. This article is educational and is not individualized
            financial advice.
          </p>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-black mb-4">Calculate Your Mortgage Payment</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Use our mortgage calculator with adjustable property tax, insurance, HOA and PMI inputs.
          </p>
          <button
            onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
            className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition text-lg"
          >
            Use Mortgage Calculator →
          </button>
        </section>

        <section className="mt-12">
          <EmailCapture
            title="Get Mortgage Planning Resources"
            description="Subscribe for mortgage tips, home buying guides, and real estate investment strategies."
            leadMagnet={{
              title: "Mortgage Planning Resources",
              description: "Weekly tips on mortgages, home buying, and real estate investing."
            }}
            buttonText="Subscribe Free"
          />
        </section>
      </article>
    </div>
  );
};

export default BestMortgageCalculator2025;

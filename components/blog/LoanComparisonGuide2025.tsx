'use client';

import React from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const LoanComparisonGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>📅 Updated October 2026</span>
          <span>•</span>
          <span>⏱️ 5 min read</span>
          <span>•</span>
          <span>⚖️ Debt Strategy</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Loan Comparison Guide 2026: Compare APR, Fees, and Refinance Break-Even
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          The best loan isn&apos;t always the one with the lowest rate. You need to compare APR, fees, and the time it takes
          to break even. This guide shows how to compare loan offers like a pro.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Compare Loan Offers Instantly</h3>
              <p className="text-sm text-slate-600">Use our loan comparison tool to see total cost and break-even timing.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.LOAN_COMPARE)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open Loan Comparison →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('apr-vs-rate')} className="text-indigo-600 hover:underline">1. APR vs interest rate</button></li>
          <li><button onClick={() => scrollToSection('fees')} className="text-indigo-600 hover:underline">2. Fees that change the math</button></li>
          <li><button onClick={() => scrollToSection('break-even')} className="text-indigo-600 hover:underline">3. Refinance break-even explained</button></li>
          <li><button onClick={() => scrollToSection('apr-example')} className="text-indigo-600 hover:underline">4. Worked example: two mortgage offers</button></li>
          <li><button onClick={() => scrollToSection('refi-example')} className="text-indigo-600 hover:underline">5. Worked example: should you refinance?</button></li>
          <li><button onClick={() => scrollToSection('checklist')} className="text-indigo-600 hover:underline">6. Loan comparison checklist</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">7. Common mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="apr-vs-rate" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">APR vs interest rate</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The interest rate is the base cost of borrowing. <strong>APR</strong> includes fees, points, and other costs—so
            it&apos;s the number you should compare across lenders.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            APR spreads certain upfront finance charges over the full loan term and expresses the total as a yearly rate.
            That makes it a useful first filter, with two caveats. First, it assumes you keep the loan for the entire term; if
            you sell or refinance early, upfront fees cost you more per year than APR suggests. Second, not every closing cost is
            included — third-party charges such as title insurance or appraisal may sit outside the APR. So use APR to narrow
            the field, then compare total cost over the period you actually expect to keep the loan.
          </p>
        </section>

        <section id="fees" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Fees that change the math</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Origination fees</li>
            <li>• Points paid upfront</li>
            <li>• Closing costs and appraisals</li>
            <li>• Lender credits, which reduce your upfront cost in exchange for a higher rate</li>
            <li>• Mortgage insurance (PMI or FHA MIP) if your equity is below 20%</li>
            <li>• Prepayment penalties, more common on some personal, auto and non-standard loans than on typical home loans</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            For mortgages, every lender must give you a standardized <strong>Loan Estimate</strong> within three business days
            of your application. Because the format is the same everywhere, you can line up Section A (origination charges, including
            points) across offers and see exactly where they differ. Request your estimates within a short window: credit scoring
            models generally treat multiple mortgage inquiries in a brief shopping period as a single inquiry.
          </p>
        </section>

        <section id="break-even" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Refinance break-even explained</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Break-even is how long it takes for monthly savings to cover upfront fees. If you won&apos;t stay long enough,
            refinancing can cost more than it saves.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-lg text-slate-700">
              <strong>Break-even (months) = total upfront costs ÷ monthly payment savings.</strong> All payment figures in this
              guide use the standard amortization formula M = P·r(1+r)<sup>n</sup> ÷ ((1+r)<sup>n</sup> − 1).
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The monthly-savings shortcut has one big blind spot: the loan term. If you refinance a loan with 25 years left into a
            new 30-year loan, part of your &quot;savings&quot; is just stretching the debt over five more years. Always compare
            total remaining interest as well as the payment.
          </p>
        </section>

        <section id="apr-example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: two mortgage offers</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Hypothetical: a $400,000, 30-year fixed purchase loan with two illustrative quotes.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">&nbsp;</th>
                  <th className="text-left p-4 font-black text-slate-900">Offer A</th>
                  <th className="text-left p-4 font-black text-slate-900">Offer B</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Interest rate</td><td className="p-4 text-slate-700">6.50%</td><td className="p-4 text-slate-700">6.125%</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Lender fees + points</td><td className="p-4 text-slate-700">$2,500</td><td className="p-4 text-slate-700">$8,500 (incl. 1.5 points = $6,000)</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Monthly P&amp;I</td><td className="p-4 text-slate-700">$2,528</td><td className="p-4 text-slate-700">$2,430</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Approximate APR</td><td className="p-4 text-slate-700">~6.56%</td><td className="p-4 text-slate-700">~6.33%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Offer B has the lower APR, but it costs $6,000 more upfront to save about $98 a month — a simple break-even of about
            61 months. Counting fees, payments and the remaining balance you would owe, Offer A is about $1,500 cheaper if you
            sell or refinance after three years, while Offer B is about $1,500 cheaper after five years and about $9,000 cheaper
            after ten. The &quot;best&quot; offer depends on how long you keep it. For more on this trade-off, see{' '}
            <a href="/blog/mortgage-points-break-even-2026/" className="text-indigo-600 font-semibold hover:underline">should you pay mortgage points</a>.
          </p>
        </section>

        <section id="refi-example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: should you refinance?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Hypothetical: you owe $350,000 at 7.25% with 25 years left, so your principal-and-interest payment is about
            $2,530. A lender offers 6.25% with $7,000 of closing costs. Remaining interest on your current loan is about $408,900.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">New term at 6.25%</th>
                  <th className="text-left p-4 font-black text-slate-900">New payment</th>
                  <th className="text-left p-4 font-black text-slate-900">Monthly change</th>
                  <th className="text-left p-4 font-black text-slate-900">Simple break-even</th>
                  <th className="text-left p-4 font-black text-slate-900">Lifetime result incl. costs</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">30 years</td><td className="p-4 text-slate-700">$2,155</td><td className="p-4 text-slate-700">−$375</td><td className="p-4 text-slate-700">~19 months</td><td className="p-4 font-bold text-red-600">~$23,900 more</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">25 years</td><td className="p-4 text-slate-700">$2,309</td><td className="p-4 text-slate-700">−$221</td><td className="p-4 text-slate-700">~32 months</td><td className="p-4 font-bold text-emerald-600">~$59,300 saved</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">20 years</td><td className="p-4 text-slate-700">$2,558</td><td className="p-4 text-slate-700">+$28</td><td className="p-4 text-slate-700">n/a</td><td className="p-4 font-bold text-emerald-600">~$138,000 saved</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The 30-year refinance has the fastest break-even and the biggest payment drop, yet it costs more over the life of the
            loan because it adds five years of payments. Matching the remaining 25-year term keeps a real saving. A 20-year term
            costs about the same each month as today and saves the most interest. If you choose the 30-year option for cash-flow
            reasons, you can still recover much of the difference by paying extra principal.
          </p>
        </section>

        <section id="checklist" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Loan comparison checklist</h2>
          <ol className="space-y-3 text-slate-700">
            <li>1) Compare APR, not just rate.</li>
            <li>2) Add all fees to total cost.</li>
            <li>3) Calculate break-even timeline.</li>
            <li>4) Choose the offer that fits your holding period.</li>
            <li>5) Match the loan term when comparing a refinance, or compare total remaining interest.</li>
            <li>6) Confirm the rate lock length and what happens if closing is delayed.</li>
            <li>7) Check for prepayment penalties and how extra payments are applied.</li>
          </ol>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>Picking the lowest advertised rate.</strong> Advertised rates often assume points, top credit and a large down payment.</li>
            <li>• <strong>Rolling closing costs into the loan and calling it free.</strong> A &quot;no-cost&quot; refinance usually means a higher rate or a bigger balance.</li>
            <li>• <strong>Ignoring the time horizon.</strong> If you might move in three years, weigh upfront fees heavily.</li>
            <li>• <strong>Forgetting the escrow reset.</strong> A refinance may require funding a new escrow account at closing, even though you get the old one refunded later.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            The same principles apply outside mortgages; see{' '}
            <a href="/blog/72-month-car-loan-true-cost/" className="text-indigo-600 font-semibold hover:underline">the true cost of a 72-month car loan</a>{' '}
            and{' '}
            <a href="/blog/student-loan-refinance-math/" className="text-indigo-600 font-semibold hover:underline">student loan refinance math</a>.
          </p>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently asked questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How much should rates drop before I refinance?</h3>
              <p className="text-slate-700">
                There is no fixed threshold. What matters is whether the savings cover the costs within the time you expect to keep
                the loan, and whether total interest falls when you compare like-for-like terms.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is APR useful for ARMs?</h3>
              <p className="text-slate-700">
                Less so. An ARM&apos;s APR is based on assumptions about future rates, so also compare the margin, the index and the
                rate caps.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Can I deduct refinance points?</h3>
              <p className="text-slate-700">
                Points on a refinance are generally deducted over the life of the loan, not all at once, and only if you itemize.
                IRS Publication 936 explains the rules.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What&apos;s the fastest way to compare offers?</h3>
              <p className="text-slate-700">
                Enter each offer in the{' '}
                <a href="/loan-comparison-tool/" className="text-indigo-600 font-semibold hover:underline">loan comparison tool</a>{' '}
                and look at total cost at your expected holding period, then confirm payments with the{' '}
                <a href="/mortgage-payment-calculator/" className="text-indigo-600 font-semibold hover:underline">mortgage payment calculator</a>.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Consumer Financial Protection Bureau — Loan Estimates, APR and mortgage shopping: <a href="https://www.consumerfinance.gov/" className="text-indigo-600 font-semibold hover:underline">consumerfinance.gov</a></li>
            <li>• IRS Publication 936, Home Mortgage Interest Deduction: <a href="https://www.irs.gov/publications/p936" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p936</a></li>
          </ul>
          <p className="text-sm text-slate-500">
            All examples are hypothetical with illustrative rates; APRs are approximations. This guide is educational and is not
            individualized financial or lending advice.
          </p>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Smarter Borrowing Tips"
          description="Get weekly insights on loans, refinancing, and debt optimization."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.LOAN_COMPARE)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">⚖️ Loan Comparison Tool</h4>
            <p className="text-sm text-slate-600">Compare total costs across offers.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🏡 Mortgage Calculator</h4>
            <p className="text-sm text-slate-600">See payments, PMI, and property tax impact.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanComparisonGuide2025;

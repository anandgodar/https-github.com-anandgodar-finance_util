'use client';

import React from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const LoanEmiCalculatorGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>⏱️ 6 min read</span>
          <span>•</span>
          <span>💳 Loans</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Loan EMI Calculator Guide 2026: How to Calculate EMI and Save Interest
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          EMI stands for Equated Monthly Installment. It&apos;s the fixed payment you make every month on a loan. If you&apos;ve
          ever searched <strong>how to calculate EMI</strong>, this guide breaks it down in plain English—with worked
          examples, a tenure comparison, and the fastest ways to lower your interest costs.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate Your EMI Instantly</h3>
              <p className="text-sm text-slate-600">Use our EMI calculator to model monthly payments and interest savings.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.EMI_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open EMI Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('what-is-emi')} className="text-indigo-600 hover:underline">1. What is EMI?</button></li>
          <li><button onClick={() => scrollToSection('emi-formula')} className="text-indigo-600 hover:underline">2. EMI formula (simple breakdown)</button></li>
          <li><button onClick={() => scrollToSection('tenure')} className="text-indigo-600 hover:underline">3. Tenure vs total interest</button></li>
          <li><button onClick={() => scrollToSection('amortization')} className="text-indigo-600 hover:underline">4. Understanding amortization</button></li>
          <li><button onClick={() => scrollToSection('flat-vs-reducing')} className="text-indigo-600 hover:underline">5. Flat rate vs reducing balance</button></li>
          <li><button onClick={() => scrollToSection('affordability')} className="text-indigo-600 hover:underline">6. How much EMI can you afford?</button></li>
          <li><button onClick={() => scrollToSection('reduce-interest')} className="text-indigo-600 hover:underline">7. How to reduce loan interest</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. EMI calculator FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="what-is-emi" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is EMI?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            EMI is the fixed monthly payment that includes both principal and interest. The amount depends on three
            variables: loan amount, interest rate, and loan tenure. The term is most common in India for home, car,
            personal and education loans, but the math is identical to a U.S. fixed-rate mortgage or auto loan payment.
          </p>
        </section>

        <section id="emi-formula" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">EMI formula (simple breakdown)</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-slate-700">
              EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)
            </p>
            <p className="text-sm text-slate-600 mt-3">
              Where P is principal, r is monthly interest rate (annual rate ÷ 12), and n is number of monthly payments.
            </p>
          </div>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <p className="text-emerald-900 font-semibold">
              📊 <strong>Hypothetical example:</strong> ₹10,00,000 personal loan at an illustrative 9% a year for 5 years.
            </p>
            <ul className="mt-2 space-y-1 text-base text-emerald-900">
              <li>• r = 9% ÷ 12 = 0.75% = 0.0075; n = 5 × 12 = 60</li>
              <li>• (1.0075)^60 ≈ 1.5657</li>
              <li>• EMI = 10,00,000 × 0.0075 × 1.5657 ÷ 0.5657 ≈ <strong>₹20,758</strong></li>
              <li>• Total paid ≈ ₹12,45,501, so total interest ≈ <strong>₹2,45,501</strong></li>
            </ul>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The rate here is only an example. Actual rates depend on the lender, loan type, your credit profile, and
            whether the rate is fixed or floating, so always plug in the rate from your own sanction letter.
          </p>
        </section>

        <section id="tenure" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Tenure vs total interest</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Stretching the tenure lowers the EMI but raises the total interest, often dramatically. Hypothetical ₹50 lakh
            home loan at an illustrative 8.5%:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Tenure</th>
                  <th className="text-left p-4 font-black text-slate-900">Monthly EMI</th>
                  <th className="text-left p-4 font-black text-slate-900">Total interest</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">15 years</td><td className="p-4 text-slate-700">₹49,237</td><td className="p-4 font-bold text-indigo-600">≈ ₹38.6 lakh</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">20 years</td><td className="p-4 text-slate-700">₹43,391</td><td className="p-4 font-bold text-indigo-600">≈ ₹54.1 lakh</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">25 years</td><td className="p-4 text-slate-700">₹40,261</td><td className="p-4 font-bold text-indigo-600">≈ ₹70.8 lakh</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">30 years</td><td className="p-4 text-slate-700">₹38,446</td><td className="p-4 font-bold text-red-600">≈ ₹88.4 lakh</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Going from 20 to 30 years cuts the EMI by about ₹4,900 a month but adds roughly ₹34 lakh of interest. Pick the
            shortest tenure whose EMI you can carry comfortably alongside your other commitments and an emergency fund.
          </p>
        </section>

        <section id="amortization" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Understanding amortization</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            In the early months, most of your EMI goes toward interest. Over time, the principal portion grows. A good
            <strong> monthly loan payment calculator</strong> helps you see this shift clearly.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            In the 20-year, ₹50 lakh example, the first EMI of ₹43,391 splits into about ₹35,417 of interest (₹50,00,000 ×
            8.5% ÷ 12) and only ₹7,974 of principal. Across the whole first year you pay roughly ₹4.21 lakh of interest
            and repay less than ₹1 lakh of principal. Each month&apos;s interest is charged on the remaining balance, so as
            the balance falls, more of each EMI goes to principal.
          </p>
        </section>

        <section id="flat-vs-reducing" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Flat rate vs reducing balance</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Some lenders, especially for consumer durables and some personal or vehicle loans, quote a <strong>flat rate</strong>:
            interest is charged on the original principal for the whole tenure, even as you repay it. The EMI formula above
            uses the <strong>reducing balance</strong> method, where interest is charged only on what you still owe.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">₹1,00,000 for 3 years</th>
                  <th className="text-left p-4 font-black text-slate-900">EMI</th>
                  <th className="text-left p-4 font-black text-slate-900">Total interest</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">10% flat</td><td className="p-4 text-slate-700">₹3,611</td><td className="p-4 font-bold text-red-600">₹30,000</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">10% reducing balance</td><td className="p-4 text-slate-700">₹3,227</td><td className="p-4 font-bold text-emerald-600">≈ ₹16,162</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            A 10% flat rate here is equivalent to roughly 17.9% on a reducing-balance basis. When comparing offers, ask for
            the reducing-balance rate or the annual percentage rate, including processing fees. Our{' '}
            <a href="/loan-comparison-tool/" className="text-indigo-600 font-semibold hover:underline">loan comparison tool</a>{' '}
            lets you line offers up side by side.
          </p>
        </section>

        <section id="affordability" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How much EMI can you afford?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Lenders assess how much of your income already goes to debt payments, and each lender sets its own limits.
            Your own test should be stricter than theirs, because the lender is not the one living on what&apos;s left. A
            simple step-by-step check:
          </p>
          <ol className="space-y-3 text-slate-700">
            <li>1) Start with monthly take-home pay, not gross salary.</li>
            <li>2) Subtract existing EMIs, rent or household costs, insurance, and savings for goals.</li>
            <li>3) Keep an emergency fund of several months of expenses outside the loan.</li>
            <li>4) <strong>Stress-test floating rates.</strong> In the ₹50 lakh, 20-year example, a 1-point rise from 8.5% to 9.5% lifts the EMI from ₹43,391 to about ₹46,607, or roughly ₹3,200 more a month, if the lender adjusts EMI rather than tenure.</li>
            <li>5) If the stressed EMI still fits with room to spare, the loan is more likely to be sustainable.</li>
          </ol>
        </section>

        <section id="reduce-interest" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to reduce loan interest</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>Make small prepayments early in the loan.</strong> In the ₹50 lakh, 20-year example, a one-time ₹2 lakh prepayment after the 12th EMI, keeping the EMI unchanged, ends the loan about 21 months early and saves roughly ₹7.3 lakh of interest.</li>
            <li>• <strong>Refinance if rates drop significantly.</strong> Compare the interest saved with processing, legal and transfer fees first.</li>
            <li>• <strong>Choose a shorter tenure if cash flow allows.</strong> See the tenure table above.</li>
            <li>• <strong>Keep the EMI, shorten the tenure.</strong> After a prepayment, lenders may offer to reduce either your EMI or your remaining tenure; reducing tenure usually saves more interest.</li>
          </ul>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <p className="text-indigo-900 font-semibold">
              💡 In India, RBI rules generally do not allow banks to charge foreclosure or prepayment penalties on
              floating-rate term loans taken by individuals for non-business purposes. Fixed-rate loans and loans from some
              other lenders may carry charges, so read your loan agreement.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Borrowing in the U.S.? The same formula drives a mortgage payment. Try the{' '}
            <a href="/mortgage-payment-calculator/" className="text-indigo-600 font-semibold hover:underline">mortgage payment calculator</a>{' '}
            and check your{' '}
            <a href="/debt-to-income-ratio-calculator/" className="text-indigo-600 font-semibold hover:underline">debt-to-income ratio</a>{' '}
            before taking on a new payment.
          </p>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">EMI calculator FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">Is EMI fixed for the entire loan?</h3>
              <p className="text-slate-700">It&apos;s fixed for fixed-rate loans. For floating-rate loans, a rate reset can change the EMI, the remaining tenure, or both. Ask your lender which option applies and whether you can choose.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">Does a longer tenure always mean lower EMI?</h3>
              <p className="text-slate-700">Yes, but total interest paid is higher. Balance affordability with cost.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">Does the EMI include insurance or fees?</h3>
              <p className="text-slate-700">The formula covers only principal and interest. Processing fees, insurance and taxes on fees are separate, so include them when comparing the true cost of loans.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900">Why is my first EMI different?</h3>
              <p className="text-slate-700">Lenders often charge &quot;broken period&quot; or pre-EMI interest for the days between disbursement and the first full EMI cycle.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500">
            Examples use illustrative rates and are educational, not lending advice. Sources:{' '}
            <a href="https://www.rbi.org.in/" className="text-indigo-600 font-semibold hover:underline">Reserve Bank of India</a>,{' '}
            <a href="https://www.consumerfinance.gov/" className="text-indigo-600 font-semibold hover:underline">Consumer Financial Protection Bureau</a>.
          </p>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Get Debt-Smart Tips"
          description="Weekly insights on loans, EMI savings, and smarter repayment strategies."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.EMI_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">💳 EMI Calculator</h4>
            <p className="text-sm text-slate-600">Model monthly payments and interest savings.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.LOAN_COMPARE)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">⚖️ Loan Comparison Tool</h4>
            <p className="text-sm text-slate-600">Compare offers to pick the best APR and break-even point.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanEmiCalculatorGuide2025;

'use client';


import React from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const StudentLoanRepaymentStrategies2025: React.FC<BlogProps> = ({ onNavigate }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <header className="space-y-6">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span>📅 Updated October 2026</span>
          <span>•</span>
          <span>⏱️ 8 min read</span>
          <span>•</span>
          <span>🎓 Student Loans</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Student Loan Repayment Strategies 2026: Complete Guide to Paying Off Student Debt
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Federal student loan repayment changed significantly after the 2025 tax and spending law, so finding the right
          strategy matters more than ever. This 2026 guide covers the <strong>new Repayment Assistance Plan (RAP)</strong>,
          what is left of income-driven repayment, loan forgiveness programs, refinancing, and strategies to pay off
          student loans faster.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Calculate Your Student Loan Payment
              </h3>
              <p className="text-sm text-slate-600">
                Use our loan calculator to see how different repayment strategies affect your monthly payment and total interest
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.EMI_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Loan Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('repayment-plans')} className="text-indigo-600 hover:underline">1. Student Loan Repayment Plans: Standard, Graduated, Extended</button></li>
          <li><button onClick={() => scrollToSection('income-driven')} className="text-indigo-600 hover:underline">2. Income-Driven Repayment in 2026: RAP, IBR, and the End of SAVE</button></li>
          <li><button onClick={() => scrollToSection('loan-forgiveness')} className="text-indigo-600 hover:underline">3. Student Loan Forgiveness Programs: PSLF, Teacher, Public Service</button></li>
          <li><button onClick={() => scrollToSection('refinancing')} className="text-indigo-600 hover:underline">4. Student Loan Refinancing: When It Makes Sense</button></li>
          <li><button onClick={() => scrollToSection('pay-off-faster')} className="text-indigo-600 hover:underline">5. How to Pay Off Student Loans Faster: Strategies That Work</button></li>
          <li><button onClick={() => scrollToSection('tax-benefits')} className="text-indigo-600 hover:underline">6. Student Loan Interest Tax Deduction</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. Frequently Asked Questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">8. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="repayment-plans" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Student Loan Repayment Plans: Standard, Graduated, Extended</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Federal student loans offer several repayment plan options. Choosing the right plan can save you thousands
            in interest and help you pay off debt faster.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            Which plans you can use now depends on <strong>when your loans were made</strong>. Under the One Big Beautiful
            Bill Act (signed July 4, 2025), federal loans made on or after <strong>July 1, 2026</strong> can only be
            repaid under a standard plan or the new Repayment Assistance Plan (RAP). Borrowers with older loans may still
            have access to the traditional plans below, at least for now. Log in at{' '}
            <a href="https://studentaid.gov/" className="text-indigo-600 font-semibold hover:underline">studentaid.gov</a>{' '}
            to see the plans your specific loans qualify for.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Plan</th>
                  <th className="text-left p-4 font-black text-slate-900">Term</th>
                  <th className="text-left p-4 font-black text-slate-900">Payment</th>
                  <th className="text-left p-4 font-black text-slate-900">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Standard (older loans)</td>
                  <td className="p-4 text-slate-700">10 years</td>
                  <td className="p-4 text-slate-700">Fixed monthly</td>
                  <td className="p-4 text-slate-700">Most borrowers (lowest total interest)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Graduated</td>
                  <td className="p-4 text-slate-700">10 years</td>
                  <td className="p-4 text-slate-700">Starts low, increases every 2 years</td>
                  <td className="p-4 text-slate-700">Expecting income growth</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Extended</td>
                  <td className="p-4 text-slate-700">25 years</td>
                  <td className="p-4 text-slate-700">Fixed or graduated</td>
                  <td className="p-4 text-slate-700">Need lower monthly payment</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            For new loans made on or after July 1, 2026, the standard plan works differently: the repayment term depends on
            how much you borrowed, so larger balances get longer terms. Check the current terms on studentaid.gov before
            you plan around a specific payment.
          </p>
        </section>

        <section id="income-driven" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Income-Driven Repayment in 2026: RAP, IBR, and the End of SAVE</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Income-driven repayment plans tie your monthly payment to your income rather than your balance, making loans
            more manageable for borrowers with lower incomes. This is the area that changed most under the 2025 law.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold text-lg mb-2">💡 What changed for 2026</p>
            <ul className="space-y-2 text-indigo-800">
              <li>• <strong>SAVE is ending.</strong> The SAVE plan, which had been blocked in court, is being eliminated. Borrowers enrolled in SAVE will need to move to another plan.</li>
              <li>• <strong>RAP opens July 1, 2026.</strong> The new Repayment Assistance Plan becomes the main income-driven option and the only one for new loans made on or after that date.</li>
              <li>• <strong>Older plans are narrowing.</strong> PAYE and ICR are being phased out for current borrowers, while IBR remains available to many borrowers with existing loans.</li>
            </ul>
            <p className="text-indigo-800 mt-3">
              Deadlines and transition rules are set by the Department of Education, so confirm the details for your loans
              on studentaid.gov.
            </p>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">Income-Driven Options at a Glance</h3>

          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">RAP (Repayment Assistance Plan)</h4>
              <ul className="space-y-1 text-slate-700">
                <li>• Payment: a percentage of your adjusted gross income on a sliding scale, with a small minimum payment and a reduction for dependents</li>
                <li>• Forgiveness: after a longer period than the older plans (up to 30 years of qualifying payments)</li>
                <li>• Availability: opens July 1, 2026; the only income-driven plan for loans made on or after that date</li>
                <li>• Counts toward PSLF</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">IBR Plan (Income-Based Repayment)</h4>
              <ul className="space-y-1 text-slate-700">
                <li>• Payment: 10-15% of discretionary income, depending on when you first borrowed</li>
                <li>• Forgiveness: 20-25 years</li>
                <li>• Eligibility: borrowers with existing (pre-July 2026) loans; rules changed in 2025, so check studentaid.gov</li>
                <li>• Best for: existing borrowers who prefer the older formula to RAP</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">PAYE and ICR</h4>
              <ul className="space-y-1 text-slate-700">
                <li>• Status: being phased out under the 2025 law</li>
                <li>• Current enrollees: will need to move to another plan by the deadline the Department of Education sets</li>
                <li>• Tip: compare RAP and IBR with the Loan Simulator on studentaid.gov before switching</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
            <p className="text-yellow-900 font-semibold text-lg mb-2">⚠️ Taxes on IDR forgiveness</p>
            <p className="text-yellow-800">
              A temporary federal rule made most forgiven student debt tax-free through the end of 2025. Unless Congress
              extends it, balances forgiven under income-driven plans in 2026 or later may be taxable federal income. PSLF
              forgiveness remains tax-free, and the 2025 law permanently excludes discharges due to death or total and
              permanent disability. State tax treatment varies.
            </p>
          </div>
        </section>

        <section id="loan-forgiveness" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Student Loan Forgiveness Programs: PSLF, Teacher, Public Service</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Several programs offer student loan forgiveness for borrowers who work in public service, teaching, or
            other qualifying professions.
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold text-lg mb-2">✅ Public Service Loan Forgiveness (PSLF)</p>
            <p className="text-emerald-800 mb-3">
              <strong>PSLF</strong> forgives remaining federal student loan balance after 120 qualifying monthly payments
              (10 years) while working full-time for a qualifying employer (government, 501(c)(3) nonprofit).
            </p>
            <p className="text-emerald-800">
              <strong>Requirements:</strong> Have federal Direct Loans, repay under a qualifying plan (such as RAP, an
              income-driven plan, or the 10-year standard plan), work full-time for a qualifying employer, and make 120
              qualifying payments. The forgiven amount is <strong>tax-free</strong>. Certify your employment regularly
              through studentaid.gov.
            </p>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">Other Forgiveness Programs</h3>

          <ul className="space-y-4 text-slate-700">
            <li>
              <strong>Teacher Loan Forgiveness:</strong> Up to $5,000 forgiven for eligible teachers who work 5 consecutive
              years in a qualifying low-income school, or up to $17,500 for certain math, science, and special education
              teachers.
            </li>
            <li>
              <strong>Perkins Loan Cancellation:</strong> For borrowers who still hold Perkins Loans, up to 100%
              cancellation for teachers, nurses, firefighters, and other qualifying public service workers.
            </li>
            <li>
              <strong>Borrower Defense to Repayment:</strong> Loan discharge if your school misled you or violated laws.
            </li>
          </ul>
        </section>

        <section id="refinancing" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Student Loan Refinancing: When It Makes Sense</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Refinancing student loans can lower your interest rate and monthly payment, but you lose federal loan benefits
            like income-driven repayment and loan forgiveness.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
            <p className="text-yellow-900 font-semibold text-lg mb-2">⚠️ Important: Refinancing Federal Loans</p>
            <p className="text-yellow-800">
              When you refinance federal loans with a private lender, you <strong>lose access to:</strong>
            </p>
            <ul className="mt-2 space-y-1 text-yellow-800">
              <li>• Income-driven repayment plans</li>
              <li>• Loan forgiveness programs (PSLF, etc.)</li>
              <li>• Deferment and forbearance options</li>
              <li>• Federal loan protections</li>
            </ul>
            <p className="mt-3 text-yellow-800">
              <strong>Only refinance if:</strong> You have a stable income, good credit, and don't need federal benefits.
              You can save thousands in interest if you qualify for a lower rate. Our{' '}
              <a href="/blog/student-loan-refinance-math/" className="text-indigo-600 font-semibold hover:underline">student loan refinance math guide</a>{' '}
              walks through a full example, including how a longer term can erase the savings.
            </p>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">When to Refinance</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-emerald-200 rounded-xl p-6">
              <h4 className="font-bold text-emerald-700 text-lg mb-2">✅ Good Candidates</h4>
              <ul className="space-y-1 text-slate-700">
                <li>• Credit score 720+</li>
                <li>• Stable income</li>
                <li>• Private loans or high-rate federal loans</li>
                <li>• Don't need federal benefits</li>
                <li>• Can save 1%+ on interest rate</li>
              </ul>
            </div>

            <div className="bg-white border border-red-200 rounded-xl p-6">
              <h4 className="font-bold text-red-700 text-lg mb-2">❌ Not Good Candidates</h4>
              <ul className="space-y-1 text-slate-700">
                <li>• Pursuing PSLF or other forgiveness</li>
                <li>• Need income-driven repayment</li>
                <li>• Unstable income or job</li>
                <li>• Credit score below 650</li>
                <li>• Can't get better rate</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="pay-off-faster" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to Pay Off Student Loans Faster: Strategies That Work</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Paying off student loans faster saves thousands in interest. Here are proven strategies to accelerate repayment.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">1. Make Extra Payments</h4>
              <p className="text-slate-700 mb-3">
                Pay more than the minimum payment. Even an extra $50-100/month can shave years off your loan term.
                Always specify that extra payments go toward <strong>principal</strong>, not future payments.
              </p>
              <p className="text-sm text-slate-600 italic">
                Example (hypothetical): $30,000 loan at 6% for 10 years. Standard payment: $333/month, about $9,967 of
                total interest. Add $100/month extra: paid off in about 7 years and 2 months instead of 10, saving roughly
                $3,000 in interest.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">2. Use the Debt Avalanche Method</h4>
              <p className="text-slate-700 mb-3">
                Pay minimums on all loans, then put all extra money toward the loan with the <strong>highest interest rate</strong>.
                Once that's paid off, move to the next highest rate. This saves the most money in interest. See{' '}
                <a href="/blog/snowball-vs-avalanche-debt-payoff/" className="text-indigo-600 font-semibold hover:underline">snowball vs avalanche</a>{' '}
                for a side-by-side example.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">3. Make Bi-Weekly Payments</h4>
              <p className="text-slate-700 mb-3">
                Instead of monthly payments, make half-payments every two weeks. This results in 26 half-payments per year
                (equivalent to 13 full payments), paying off your loan faster. Confirm with your servicer how it applies
                partial and extra payments.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">4. Use Windfalls Strategically</h4>
              <p className="text-slate-700 mb-3">
                Apply tax refunds, bonuses, raises, and other windfalls directly to your student loan principal.
                In the $30,000, 6%, 10-year example, a $2,000 lump sum applied at the start saves about $1,550 in
                interest and ends the loan about 10 months early.
              </p>
            </div>
          </div>
        </section>

        <section id="tax-benefits" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Student Loan Interest Tax Deduction</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            You can deduct up to $2,500 in student loan interest paid during the tax year, reducing your taxable income.
            The deduction applies to qualified federal and private education loans, including refinanced ones.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold text-lg mb-2">💡 Tax Deduction Details</p>
            <ul className="space-y-2 text-indigo-800">
              <li>• <strong>Maximum deduction:</strong> $2,500 per year</li>
              <li>• <strong>Income limits:</strong> Phases out over a modified AGI range that the IRS adjusts for inflation each year; check IRS Publication 970 for the current range</li>
              <li>• <strong>Filing status:</strong> Not available if you file married filing separately</li>
              <li>• <strong>Above-the-line deduction:</strong> Reduces your AGI, even if you don't itemize</li>
              <li>• <strong>Only interest counts:</strong> Principal payments are not deductible</li>
            </ul>
          </div>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">Should I pay off student loans or invest?</h4>
              <p className="text-slate-700">
                Compare your loan rate with a realistic, after-tax expected return. Paying a 7% loan early is a guaranteed 7%
                return; stock returns have historically averaged more over long periods but are never guaranteed. If your
                rate is low (&lt;4%), investing (especially to capture an employer 401(k) match) often makes sense. Use our
                <button onClick={() => onNavigate?.(ToolType.BLOG_DEBT_OR_INVEST)} className="text-indigo-600 hover:underline font-semibold mx-1">
                  Should I Pay Off Debt or Invest calculator
                </button>
                to see the math.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">Can I get student loans forgiven?</h4>
              <p className="text-slate-700">
                Yes, through programs like PSLF (Public Service Loan Forgiveness), Teacher Loan Forgiveness, or
                income-driven plans such as IBR (forgiveness after 20-25 years) and RAP (up to 30 years). PSLF forgives
                Direct Loans after 120 qualifying payments for eligible public service workers.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">What happened to the SAVE plan?</h4>
              <p className="text-slate-700">
                SAVE (Saving on A Valuable Education) replaced REPAYE in 2023 but was blocked by federal courts, and the
                2025 law ends it. Borrowers who were enrolled in SAVE need to choose a different plan, such as RAP or IBR.
                Watch for notices from your servicer and check studentaid.gov for deadlines.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">I&apos;m borrowing for the first time in fall 2026. What are my options?</h4>
              <p className="text-slate-700">
                Federal loans made on or after July 1, 2026 can be repaid under the standard plan or RAP. Grad PLUS loans
                are no longer available to new borrowers from that date, so graduate students should review the current
                federal loan limits on studentaid.gov.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">Should I refinance my student loans?</h4>
              <p className="text-slate-700">
                Refinance if: You have good credit (720+), stable income, can get a lower rate, and don't need federal
                benefits. Don't refinance if: You're pursuing PSLF, need income-driven repayment, or have unstable income.
                Refinancing federal loans converts them to private loans, losing all federal protections.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-500">This article is educational and not individualized financial advice.</p>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• <a href="https://studentaid.gov/" className="text-indigo-600 hover:underline">Federal Student Aid (studentaid.gov)</a>: repayment plans, RAP, PSLF, Loan Simulator</li>
            <li>• <a href="https://www.irs.gov/publications/p970" className="text-indigo-600 hover:underline">IRS Publication 970, Tax Benefits for Education</a>: student loan interest deduction</li>
            <li>• <a href="https://www.consumerfinance.gov/" className="text-indigo-600 hover:underline">Consumer Financial Protection Bureau</a>: student loan repayment resources</li>
          </ul>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Get Weekly Student Loan Tips"
          description="Subscribe for weekly tips on student loan repayment, forgiveness programs, and strategies to pay off debt faster."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.EMI_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">💳 Loan EMI Calculator</h4>
            <p className="text-sm text-slate-600">Calculate your student loan payment and see how extra payments save interest</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.CREDIT_CARD_PAYOFF)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">💳 Credit Card Payoff Calculator</h4>
            <p className="text-sm text-slate-600">If you also have credit card debt, use this to prioritize which debt to pay first</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.LOAN_COMPARE)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">⚖️ Loan Comparison Tool</h4>
            <p className="text-sm text-slate-600">Compare refinancing offers to see if refinancing makes sense</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_DEBT_OR_INVEST)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📊 Should I Pay Off Debt or Invest?</h4>
            <p className="text-sm text-slate-600">Decide whether to pay off student loans or invest your extra money</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentLoanRepaymentStrategies2025;

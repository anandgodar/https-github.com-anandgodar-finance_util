import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const StudentLoanRefinanceMath2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>⏱️ 6 min read</span>
          <span>•</span>
          <span>🎓 Student Loans</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Should You Refinance Your Student Loans? The Math You Need to Know
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          A lower rate can save thousands, but refinancing federal loans can mean losing protections like income-driven
          repayment and forgiveness. Here&apos;s how to run the math.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Simulate your new monthly payment</h3>
              <p className="text-sm text-slate-600">
                Compare your current payment to a refinanced rate.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.LOAN_COMPARE)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Loan Comparison →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('what')} className="text-indigo-600 hover:underline">1. What refinancing actually does</button></li>
          <li><button onClick={() => scrollToSection('math')} className="text-indigo-600 hover:underline">2. Refinancing math: a worked example</button></li>
          <li><button onClick={() => scrollToSection('tradeoffs')} className="text-indigo-600 hover:underline">3. Federal protections you lose</button></li>
          <li><button onClick={() => scrollToSection('when')} className="text-indigo-600 hover:underline">4. When refinancing makes sense</button></li>
          <li><button onClick={() => scrollToSection('steps')} className="text-indigo-600 hover:underline">5. Step-by-step: how to evaluate an offer</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">6. Common mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. FAQ</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">8. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="what" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What refinancing actually does</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Refinancing means a <strong>private lender</strong> (a bank, credit union, or online lender) pays off your
            existing student loans and gives you one new private loan with a new interest rate, a new term, and new
            rules. The rate you get depends mostly on your credit score, income, existing debts, and whether you add a
            cosigner. You can usually choose a fixed rate or a variable rate, and a term somewhere between about 5 and 20
            years.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            This is not the same as a federal <strong>Direct Consolidation Loan</strong>. Federal consolidation combines
            federal loans into one federal loan at the weighted average of your old rates (rounded up slightly), so it does
            not lower your rate, but it keeps the loan federal. Private refinancing can lower the rate, but a refinanced
            federal loan is no longer a federal loan, and that change cannot be undone.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold text-lg mb-2">💡 The two questions that matter</p>
            <p className="text-indigo-800">
              1) Does the new loan cost less in <strong>total</strong> (not just per month)? 2) Are you willing to give up
              every federal benefit attached to the loans you refinance? If the answer to either is no, refinancing
              probably isn&apos;t worth it.
            </p>
          </div>
        </section>

        <section id="math" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The math: interest savings vs term length</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A lower rate can reduce total interest, but extending the term can offset savings. Compare total interest and
            payoff timelines, not just the monthly payment.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Hypothetical example:</strong> you owe $60,000 at 7% with 10 years left. A lender offers a 5.5% fixed
            rate (both rates are illustrative, not current market quotes). Here is how the term you pick changes the
            outcome, using standard amortization:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Scenario</th>
                  <th className="text-left p-4 font-black text-slate-900">Monthly Payment</th>
                  <th className="text-left p-4 font-black text-slate-900">Total Interest</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Keep: 7%, 10 years</td>
                  <td className="p-4 text-slate-700">$696.65</td>
                  <td className="p-4 font-bold text-slate-900">$23,598</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Refi: 5.5%, 7 years</td>
                  <td className="p-4 text-slate-700">$862.20</td>
                  <td className="p-4 font-bold text-slate-900">$12,425</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Refi: 5.5%, 10 years</td>
                  <td className="p-4 text-slate-700">$651.16</td>
                  <td className="p-4 font-bold text-slate-900">$18,139</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Refi: 5.5%, 15 years</td>
                  <td className="p-4 text-slate-700">$490.25</td>
                  <td className="p-4 font-bold text-slate-900">$28,245</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Keeping the same 10-year term saves about <strong>$5,459</strong> in interest and $45 a month. The 15-year
            option feels best at checkout because the payment drops by about $206, yet it costs roughly{' '}
            <strong>$4,647 more</strong> in interest than not refinancing at all. The 7-year option saves the most, but
            only if the higher payment fits your budget. You can plug your own numbers into the{' '}
            <a href="/loan-comparison-tool/" className="text-indigo-600 font-semibold hover:underline">loan comparison tool</a>{' '}
            or see the amortization schedule in the{' '}
            <a href="/loan-emi-calculator/" className="text-indigo-600 font-semibold hover:underline">loan payment calculator</a>.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <p className="text-emerald-900 font-semibold text-lg mb-2">✅ Quick rule of thumb</p>
            <p className="text-emerald-800">
              Match the refinance term to your current remaining term (or shorter). If you only need a lower payment, a
              federal income-driven plan may lower it without giving up protections.
            </p>
          </div>
        </section>

        <section id="tradeoffs" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Federal protections you give up</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            When a federal loan is refinanced into a private loan, it loses its federal benefits permanently. You cannot
            move it back into the federal system later. The main protections you give up:
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Income-driven repayment plans:</strong> payments tied to your income instead of your balance, including the new Repayment Assistance Plan (RAP) that opens July 1, 2026.</li>
            <li>• <strong>Public Service Loan Forgiveness eligibility:</strong> payments on a private loan never count toward PSLF.</li>
            <li>• <strong>Deferment and forbearance options:</strong> federal pauses for unemployment, economic hardship, military service, and similar situations. Private lenders may offer some forbearance, but terms are set by the lender.</li>
            <li>• <strong>Death and disability discharge:</strong> federal loans are discharged on the borrower&apos;s death or total and permanent disability; private lender policies vary.</li>
            <li>• <strong>Fixed federal rates:</strong> federal loans have fixed rates for life. A variable-rate private loan can become more expensive if rates rise.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            Federal repayment rules changed under the One Big Beautiful Bill Act (signed July 2025): the SAVE plan is
            ending, RAP launches July 1, 2026, and new federal loans made on or after that date can only use the standard
            plan or RAP. Before you refinance, check which plans <em>your</em> loans qualify for at{' '}
            <a href="https://studentaid.gov/" className="text-indigo-600 font-semibold hover:underline">studentaid.gov</a>, so
            you know exactly what you&apos;d be trading away.
          </p>
        </section>

        <section id="when" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When refinancing makes sense</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Refinancing can be smart if you have stable income, high-interest private loans, and no plans to use federal
            programs. Always run the numbers first.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-emerald-200 rounded-xl p-6">
              <h3 className="font-bold text-emerald-700 text-lg mb-2">✅ Usually a better fit</h3>
              <ul className="space-y-1 text-slate-700">
                <li>• You hold <strong>private</strong> loans at a high rate (nothing federal to lose)</li>
                <li>• Your income is stable and you have an emergency fund</li>
                <li>• Your credit has improved since you first borrowed</li>
                <li>• You can keep the same or a shorter term</li>
                <li>• You don&apos;t work, or plan to work, in public service</li>
              </ul>
            </div>
            <div className="bg-white border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-700 text-lg mb-2">❌ Usually a poor fit</h3>
              <ul className="space-y-1 text-slate-700">
                <li>• You&apos;re pursuing PSLF or another forgiveness program</li>
                <li>• Your payment would be much lower on an income-driven plan</li>
                <li>• Your job or income is uncertain</li>
                <li>• The rate cut is small or only available as a variable rate</li>
                <li>• You&apos;d need a much longer term to afford the payment</li>
              </ul>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            You also don&apos;t have to refinance everything. Many borrowers refinance only their private loans, or only
            their highest-rate federal loans, and leave the rest federal as a safety net.
          </p>
        </section>

        <section id="steps" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Step-by-step: how to evaluate an offer</h2>
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">1. List every loan</h3>
              <p className="text-slate-700">Note each balance, rate, remaining term, and whether it is federal or private. Your federal loans are listed in your studentaid.gov account.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">2. Price your federal alternative</h3>
              <p className="text-slate-700">Use the Loan Simulator at studentaid.gov to see your payment under the plans available to you. That is the baseline a private offer has to beat.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">3. Prequalify with several lenders</h3>
              <p className="text-slate-700">Many lenders show estimated rates with a soft credit check. Compare the APR, fixed vs variable, any fees, and the exact term.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">4. Compare total cost at the same term</h3>
              <p className="text-slate-700">Calculate total interest for your current loans and each offer over the same number of years, as in the table above.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">5. Read the hardship and cosigner terms</h3>
              <p className="text-slate-700">Check what forbearance the lender offers, what happens on death or disability, and whether a cosigner can be released later.</p>
            </div>
          </div>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Judging by monthly payment alone.</strong> A longer term can turn a lower rate into a higher total cost.</li>
            <li>• <strong>Refinancing federal loans while unsure about your career.</strong> A future public-service job could have made PSLF valuable.</li>
            <li>• <strong>Picking variable just because it starts lower.</strong> On a 10- to 15-year loan, rates can move a lot.</li>
            <li>• <strong>Forgetting the tax deduction still applies.</strong> Interest on a qualified refinanced education loan can still count toward the student loan interest deduction (up to $2,500 a year, subject to income limits; see IRS Publication 970).</li>
            <li>• <strong>Skipping the emergency fund.</strong> Without federal hardship options, a cash cushion matters more. See our <a href="/blog/6-month-emergency-fund-rule/" className="text-indigo-600 font-semibold hover:underline">emergency fund guide</a>.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Can I move a refinanced loan back to federal?</h3>
              <p className="text-slate-700">No. Once a private lender pays off your federal loan, the new loan is private for good.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Does refinancing hurt my credit?</h3>
              <p className="text-slate-700">A formal application usually triggers a hard inquiry, which can cause a small, temporary dip. Prequalification with a soft check does not.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Can I refinance more than once?</h3>
              <p className="text-slate-700">Generally yes. If your credit or income improves, or rates fall, you can refinance a private loan again with another lender.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is federal consolidation a cheaper alternative?</h3>
              <p className="text-slate-700">It won&apos;t lower your rate, but it can simplify payments and may help some older loan types qualify for federal plans. It keeps your federal protections.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500">This article is educational and not individualized financial advice.</p>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• <a href="https://studentaid.gov/" className="text-indigo-600 hover:underline">Federal Student Aid (studentaid.gov)</a>: repayment plans, consolidation, PSLF, Loan Simulator</li>
            <li>• <a href="https://www.consumerfinance.gov/" className="text-indigo-600 hover:underline">Consumer Financial Protection Bureau</a>: student loan and private lending guidance</li>
            <li>• <a href="https://www.irs.gov/publications/p970" className="text-indigo-600 hover:underline">IRS Publication 970</a>: student loan interest deduction</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default StudentLoanRefinanceMath2026;

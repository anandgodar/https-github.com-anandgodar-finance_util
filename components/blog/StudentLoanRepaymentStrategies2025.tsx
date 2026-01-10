
import React, { useEffect } from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';
import RecommendedTools from '../RecommendedTools';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const StudentLoanRepaymentStrategies2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Student Loan Repayment Strategies 2025: Complete Guide to Paying Off Student Debt",
      "description": "Master student loan repayment in 2025. Learn about income-driven repayment plans, loan forgiveness programs, refinancing strategies, and how to pay off student debt faster.",
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
      "datePublished": "2026-01-15",
      "dateModified": "2026-01-15",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/student-loan-repayment-strategies-2025"
      },
      "keywords": "student loan repayment, student loan forgiveness, income driven repayment, student loan refinancing, pay off student loans, student debt, PSLF, SAVE plan"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-student-loans';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-student-loans');
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
      <header className="space-y-6">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span>📅 Updated January 2026</span>
          <span>•</span>
          <span>⏱️ 18 min read</span>
          <span>•</span>
          <span>🎓 Student Loans</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Student Loan Repayment Strategies 2025: Complete Guide to Paying Off Student Debt
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          With over $1.7 trillion in student loan debt in America, finding the right repayment strategy is crucial.
          This comprehensive 2025 guide covers <strong>income-driven repayment plans</strong>, loan forgiveness programs,
          refinancing options, and strategies to pay off student loans faster.
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
          <li><button onClick={() => scrollToSection('income-driven')} className="text-indigo-600 hover:underline">2. Income-Driven Repayment Plans (IDR): SAVE, PAYE, IBR, ICR</button></li>
          <li><button onClick={() => scrollToSection('loan-forgiveness')} className="text-indigo-600 hover:underline">3. Student Loan Forgiveness Programs: PSLF, Teacher, Public Service</button></li>
          <li><button onClick={() => scrollToSection('refinancing')} className="text-indigo-600 hover:underline">4. Student Loan Refinancing: When It Makes Sense</button></li>
          <li><button onClick={() => scrollToSection('pay-off-faster')} className="text-indigo-600 hover:underline">5. How to Pay Off Student Loans Faster: Strategies That Work</button></li>
          <li><button onClick={() => scrollToSection('tax-benefits')} className="text-indigo-600 hover:underline">6. Student Loan Interest Tax Deduction</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. Frequently Asked Questions</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="repayment-plans" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Student Loan Repayment Plans: Standard, Graduated, Extended</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Federal student loans offer several repayment plan options. Choosing the right plan can save you thousands
            in interest and help you pay off debt faster.
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
                  <td className="p-4 font-bold text-indigo-600">Standard</td>
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
        </section>

        <section id="income-driven" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Income-Driven Repayment Plans (IDR): SAVE, PAYE, IBR, ICR</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Income-driven repayment plans cap your monthly payment at a percentage of your discretionary income,
            making loans more manageable for borrowers with lower incomes.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold text-lg mb-2">💡 The SAVE Plan (New in 2024)</p>
            <p className="text-indigo-800">
              The <strong>SAVE Plan</strong> (Saving on A Valuable Education) replaced REPAYE and offers the most generous
              benefits: payments are 5-10% of discretionary income (based on income level), and unpaid interest doesn't
              capitalize. After 20-25 years of payments, remaining balance is forgiven.
            </p>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">IDR Plan Comparison</h3>

          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">SAVE Plan</h4>
              <ul className="space-y-1 text-slate-700">
                <li>• Payment: 5-10% of discretionary income</li>
                <li>• Forgiveness: 20-25 years</li>
                <li>• Interest: Unpaid interest doesn't capitalize</li>
                <li>• Best for: Most borrowers (most generous)</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">PAYE Plan (Pay As You Earn)</h4>
              <ul className="space-y-1 text-slate-700">
                <li>• Payment: 10% of discretionary income (capped at standard payment)</li>
                <li>• Forgiveness: 20 years</li>
                <li>• Eligibility: Must be a new borrower after Oct 1, 2007</li>
                <li>• Best for: New borrowers with high debt-to-income ratio</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">IBR Plan (Income-Based Repayment)</h4>
              <ul className="space-y-1 text-slate-700">
                <li>• Payment: 10-15% of discretionary income</li>
                <li>• Forgiveness: 20-25 years</li>
                <li>• Eligibility: Must demonstrate financial hardship</li>
                <li>• Best for: Borrowers who don't qualify for PAYE</li>
              </ul>
            </div>
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
              <strong>Requirements:</strong> Must be on an income-driven repayment plan, work full-time for qualifying employer,
              make 120 on-time payments. The forgiven amount is <strong>tax-free</strong>.
            </p>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">Other Forgiveness Programs</h3>

          <ul className="space-y-4 text-slate-700">
            <li>
              <strong>Teacher Loan Forgiveness:</strong> Up to $17,500 forgiven for teachers who work 5 consecutive years
              in low-income schools.
            </li>
            <li>
              <strong>Perkins Loan Cancellation:</strong> Up to 100% cancellation for teachers, nurses, firefighters, and
              other public service workers.
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
              You can save thousands in interest if you qualify for a lower rate.
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
                Example: $30,000 loan at 6% for 10 years. Standard payment: $333/month. Add $100/month extra:
                Pay off in 7.5 years instead of 10, saving $3,000 in interest.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">2. Use the Debt Avalanche Method</h4>
              <p className="text-slate-700 mb-3">
                Pay minimums on all loans, then put all extra money toward the loan with the <strong>highest interest rate</strong>.
                Once that's paid off, move to the next highest rate. This saves the most money in interest.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">3. Make Bi-Weekly Payments</h4>
              <p className="text-slate-700 mb-3">
                Instead of monthly payments, make half-payments every two weeks. This results in 26 half-payments per year
                (equivalent to 13 full payments), paying off your loan faster.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">4. Use Windfalls Strategically</h4>
              <p className="text-slate-700 mb-3">
                Apply tax refunds, bonuses, raises, and other windfalls directly to your student loan principal.
                A $2,000 tax refund can save $1,500+ in interest over the life of the loan.
              </p>
            </div>
          </div>
        </section>

        <section id="tax-benefits" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Student Loan Interest Tax Deduction</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            You can deduct up to $2,500 in student loan interest paid during the tax year, reducing your taxable income.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold text-lg mb-2">💡 Tax Deduction Details</p>
            <ul className="space-y-2 text-indigo-800">
              <li>• <strong>Maximum deduction:</strong> $2,500 per year</li>
              <li>• <strong>Income limits:</strong> Phases out at $70,000-$85,000 (single) or $140,000-$170,000 (married filing jointly)</li>
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
                If your student loan interest rate is higher than expected investment returns (typically 7-8%), pay off loans first.
                If your rate is low (&lt;4%) and you can invest at higher returns, investing might make sense. Use our
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
                income-driven repayment plans (forgiveness after 20-25 years). PSLF is the most popular, forgiving
                loans after 10 years of qualifying payments for public service workers.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">What is the SAVE plan?</h4>
              <p className="text-slate-700">
                The SAVE Plan (Saving on A Valuable Education) is the newest income-driven repayment plan, replacing REPAYE.
                It offers the most generous benefits: payments are 5-10% of discretionary income, and unpaid interest doesn't
                capitalize. It's the best option for most borrowers on IDR plans.
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

      <RecommendedTools
        title="Related Calculators"
        tools={[
          {
            name: "Loan EMI Calculator",
            description: "Calculate your student loan payment and see how extra payments save interest",
            link: ToolType.EMI_CALC,
            icon: "💳"
          },
          {
            name: "Credit Card Payoff Calculator",
            description: "If you also have credit card debt, use this to prioritize which debt to pay first",
            link: ToolType.CREDIT_CARD_PAYOFF,
            icon: "💳"
          },
          {
            name: "Loan Comparison Tool",
            description: "Compare refinancing offers to see if refinancing makes sense",
            link: ToolType.LOAN_COMPARE,
            icon: "⚖️"
          },
          {
            name: "Should I Pay Off Debt or Invest?",
            description: "Decide whether to pay off student loans or invest your extra money",
            link: ToolType.BLOG_DEBT_OR_INVEST,
            icon: "📊"
          }
        ]}
        onNavigate={onNavigate}
      />
    </div>
  );
};

export default StudentLoanRepaymentStrategies2025;

import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const FreelancerEstimatedTaxesGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>🧑‍💻 Freelancing</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The Freelancer’s Guide to Estimated Taxes: How Much Should You Set Aside?
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          If you&apos;re 1099 or self-employed, nobody withholds taxes for you. That means you&apos;re responsible for estimated
          taxes. This guide helps you decide <strong>how much to set aside for quarterly payments</strong> in 2026, when each
          payment is due, and how to avoid IRS underpayment penalties.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate your quarterly taxes</h3>
              <p className="text-sm text-slate-600">
                Use Freelance Hub to estimate self-employment tax, income tax, and quarterly payments.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Freelance Hub →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('why-estimated')} className="text-indigo-600 hover:underline">1. Why estimated taxes matter</button></li>
          <li><button onClick={() => scrollToSection('how-much')} className="text-indigo-600 hover:underline">2. How much should you save?</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">3. Worked example: $85,000 net profit</button></li>
          <li><button onClick={() => scrollToSection('safe-harbor')} className="text-indigo-600 hover:underline">4. Safe harbor rules</button></li>
          <li><button onClick={() => scrollToSection('deadlines')} className="text-indigo-600 hover:underline">5. 2026 due dates</button></li>
          <li><button onClick={() => scrollToSection('workflow')} className="text-indigo-600 hover:underline">6. A simple quarterly workflow</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">7. Common mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. FAQ</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="why-estimated" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why estimated taxes matter for freelancers</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            As a freelancer, you pay both income tax and self-employment tax. The federal tax system is pay-as-you-go: an
            employer withholds tax from each paycheck, but when clients pay you on a 1099, nothing is withheld. The IRS
            therefore expects you to send in <strong>estimated tax payments</strong> during the year, generally in four
            installments using Form 1040-ES. If you wait until April, you may owe penalties.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            In general, you need to make estimated payments if you expect to owe <strong>$1,000 or more</strong> in federal
            tax for 2026 after subtracting withholding and refundable credits. The underpayment penalty works like interest:
            it is calculated separately for each quarter, based on how much you underpaid and for how many days. Paying
            late in the year doesn&apos;t erase the penalty for earlier quarters that were short.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Self-employment tax is what surprises most new freelancers. It is <strong>15.3%</strong> (12.4% Social
            Security plus 2.9% Medicare) on 92.35% of your net self-employment earnings, and the Social Security part stops
            at <strong>$184,500</strong> of combined wages and self-employment earnings for 2026. You can deduct half of it
            when figuring income tax. Our <a href="/blog/self-employment-tax-guide-2025/" className="text-indigo-600 font-semibold hover:underline">self-employment tax guide</a> walks
            through Schedule SE in detail.
          </p>
        </section>

        <section id="how-much" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How much should you set aside?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A simple starting rule is to save <strong>25% to 30%</strong> of net profit. High earners or high-tax states may
            need 35%+. Adjust for deductions, retirement contributions, and healthcare premiums. Net profit means revenue
            minus deductible business expenses—not your gross invoices.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-lg text-slate-700">
              Example: $8,000 monthly profit × 30% = $2,400 set aside for taxes.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The percentage rule is a cash-management habit, not a tax calculation. To check whether your percentage is in
            the right range, estimate your annual tax in four steps:
          </p>
          <ol className="space-y-2 text-lg text-slate-700">
            <li>1. <strong>Project net profit</strong> for the full year (year-to-date profit, scaled up, adjusted for known slow months).</li>
            <li>2. <strong>Self-employment tax:</strong> net profit × 92.35% × 15.3% (Social Security portion capped at $184,500 of earnings).</li>
            <li>3. <strong>Income tax:</strong> subtract half of SE tax, the $16,100 standard deduction (single) and, if you qualify, the 20% qualified business income (QBI) deduction, then apply the 2026 brackets.</li>
            <li>4. <strong>Add state income tax</strong> if your state has one, then divide the total by four.</li>
          </ol>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Net profit (hypothetical, single filer)</th>
                  <th className="text-left p-4 font-black text-slate-900">Est. federal tax (SE + income)</th>
                  <th className="text-left p-4 font-black text-slate-900">Share of profit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">$60,000</td>
                  <td className="p-4 text-slate-700">≈ $12,040</td>
                  <td className="p-4 text-slate-700">≈ 20%</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">$85,000</td>
                  <td className="p-4 text-slate-700">≈ $17,800</td>
                  <td className="p-4 text-slate-700">≈ 21%</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">$150,000</td>
                  <td className="p-4 text-slate-700">≈ $37,610</td>
                  <td className="p-4 text-slate-700">≈ 25%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500">
            Assumes 2026 federal rules only, no other income, standard deduction, full QBI deduction, no retirement
            contributions and no state tax. State income tax commonly adds several percentage points, which is why
            25%–30% is a reasonable all-in starting point for many freelancers.
          </p>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: $85,000 net profit</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Example: a hypothetical single freelancer expects $85,000 of net profit in 2026, has no other income, and lives
            in a state with no income tax.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-2 text-slate-700">
            <p>• <strong>SE tax:</strong> $85,000 × 92.35% × 15.3% ≈ <strong>$12,010</strong></p>
            <p>• <strong>Half of SE tax deducted:</strong> $85,000 − $6,005 = AGI of $78,995</p>
            <p>• <strong>Standard deduction:</strong> $78,995 − $16,100 = $62,895</p>
            <p>• <strong>QBI deduction:</strong> 20% of ($85,000 − $6,005) ≈ $15,799, limited to 20% of $62,895 ≈ $12,579</p>
            <p>• <strong>Taxable income:</strong> $62,895 − $12,579 = $50,316</p>
            <p>• <strong>Income tax:</strong> 10% of $12,400 + 12% of $37,916 ≈ <strong>$5,790</strong></p>
            <p className="pt-2 border-t border-slate-200"><strong>Total federal tax ≈ $17,800, or about $4,450 per quarter.</strong></p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Saving 25% of profit ($21,250) would cover the federal bill with roughly $3,450 to spare for a state bill, a
            better-than-expected year, or next year&apos;s first payment. Run your own numbers in the <a href="/quarterly-estimated-tax-calculator/" className="text-indigo-600 font-semibold hover:underline">quarterly estimated tax calculator</a>,
            which also handles state taxes.
          </p>
        </section>

        <section id="safe-harbor" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Safe harbor rules to avoid penalties</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Pay 90% of your current-year tax, or</li>
            <li>• Pay 100% of last year&apos;s tax (110% if last year&apos;s AGI was over $150,000, or $75,000 if married filing separately).</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you meet safe harbor, you can avoid penalties even if you owe more at filing time. The prior-year option is
            the easiest to plan around because the number is already known: it is the total tax on your 2025 return. For
            example, if your 2025 total tax was $14,000 and your AGI was under $150,000, paying $3,500 on each 2026 due date
            protects you from the penalty—even if 2026 turns out to be a much bigger year. You would simply owe the
            difference by April 15, 2027.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The trade-off: safe harbor protects you from the penalty, not from the tax. If your income is growing fast, keep
            saving your percentage on top of the safe-harbor payments. Our <a href="/academy/safe-harbor-estimated-taxes/" className="text-indigo-600 font-semibold hover:underline">safe harbor rules guide</a> covers
            the details and exceptions.
          </p>
        </section>

        <section id="deadlines" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">2026 estimated tax due dates</h2>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Payment</th>
                  <th className="text-left p-4 font-black text-slate-900">Income earned</th>
                  <th className="text-left p-4 font-black text-slate-900">Due date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">1</td>
                  <td className="p-4 text-slate-700">Jan 1 – Mar 31, 2026</td>
                  <td className="p-4 text-slate-700">April 15, 2026</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">2</td>
                  <td className="p-4 text-slate-700">Apr 1 – May 31, 2026</td>
                  <td className="p-4 text-slate-700">June 15, 2026</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">3</td>
                  <td className="p-4 text-slate-700">Jun 1 – Aug 31, 2026</td>
                  <td className="p-4 text-slate-700">September 15, 2026</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold">4</td>
                  <td className="p-4 text-slate-700">Sep 1 – Dec 31, 2026</td>
                  <td className="p-4 text-slate-700">January 15, 2027</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The &quot;quarters&quot; are not equal: the second covers two months and the fourth covers four. You can pay
            through IRS Direct Pay, EFTPS, your IRS online account, or by mailing a Form 1040-ES voucher. Most states with an
            income tax have their own estimated payment schedule, usually close to the federal dates.
          </p>
        </section>

        <section id="workflow" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">A simple quarterly workflow</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Set aside a tax percentage after each payment, ideally into a separate savings account.</li>
            <li>• Track net profit monthly to update your estimate. The <a href="/freelance-profit-hub/" className="text-indigo-600 font-semibold hover:underline">Freelance Profit Hub</a> can help.</li>
            <li>• Make quarterly payments by the 2026 due dates: April 15, June 15, September 15, and January 15, 2027 (the Q4 payment falls in the following calendar year).</li>
            <li>• After each payment, compare the total paid with your safe-harbor target and your projected tax, and adjust the next payment.</li>
            <li>• If your income is lumpy (for example, most of it arrives in the fall), look at the annualized income installment method on Form 2210, which can lower or eliminate penalties for early quarters.</li>
          </ul>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Budgeting only for income tax.</strong> Once net self-employment earnings reach $400, SE tax applies to all of them, even when your income tax is low.</li>
            <li>• <strong>Using gross revenue instead of profit</strong>, which overstates tax, or ignoring big one-time income, which understates it.</li>
            <li>• <strong>Skipping a quarter and doubling up later.</strong> The penalty is figured quarter by quarter.</li>
            <li>• <strong>Forgetting the state.</strong> State estimated payments are separate from federal ones.</li>
            <li>• <strong>Ignoring a W-2 option.</strong> If you or a spouse also has a job, extra withholding on Form W-4 is treated as paid evenly through the year and can cover side-income tax.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">FAQ</h2>
          <div className="space-y-4 text-slate-700">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Do I have to pay if this is my first freelance year?</h3>
              <p>If you owed no tax for 2025 and were a U.S. citizen or resident for the whole year, you generally won&apos;t owe an underpayment penalty for 2026. You will still owe the 2026 tax in April 2027, so saving during the year still matters.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Can I skip the January payment?</h3>
              <p>Yes, if you file your 2026 return and pay the full balance by the end of January 2027. Most people find it easier to make the January 15 payment.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">What if I overpay?</h3>
              <p>Overpayments come back as a refund when you file, or you can apply them to your 2027 estimated tax.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Do retirement contributions change my estimate?</h3>
              <p>SEP-IRA and Solo 401(k) contributions reduce income tax but not SE tax. Our <a href="/blog/sep-ira-vs-solo-401k-2025/" className="text-indigo-600 font-semibold hover:underline">SEP-IRA vs Solo 401(k) comparison</a> shows the 2026 limits.</p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• IRS Publication 505, Tax Withholding and Estimated Tax: <a href="https://www.irs.gov/publications/p505" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/publications/p505</a></li>
            <li>• IRS Publication 334, Tax Guide for Small Business: <a href="https://www.irs.gov/publications/p334" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/publications/p334</a></li>
            <li>• About Form 1040-ES: <a href="https://www.irs.gov/forms-pubs/about-form-1040-es" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/forms-pubs/about-form-1040-es</a></li>
            <li>• IRS payment options: <a href="https://www.irs.gov/payments" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">irs.gov/payments</a></li>
          </ul>
          <p className="text-sm text-slate-500">
            This guide is educational and not individualized tax advice. Figures reflect 2026 federal rules (IRS Rev. Proc.
            2025-32 and the SSA 2026 wage base); confirm your own situation with IRS guidance or a tax professional.
          </p>
        </section>
      </article>
    </div>
  );
};

export default FreelancerEstimatedTaxesGuide2025;

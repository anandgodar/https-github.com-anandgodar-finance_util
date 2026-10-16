import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const BonusTaxMyth2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>⏱️ 7 min read</span>
          <span>•</span>
          <span>💸 Salary & Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The &quot;Bonus Tax&quot; Myth: Why Your Bonus Is Withheld Differently (and What You Owe)
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Bonuses aren&apos;t taxed at a higher rate, but they often look smaller because employers use a different
          <strong> bonus withholding method</strong>. This guide explains the 22% flat withholding rule, why your bonus
          check feels extra light, and how to calculate your real 2026 tax liability with worked examples.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate your actual bonus take-home</h3>
              <p className="text-sm text-slate-600">
                Estimate your bonus tax liability based on your total income and filing status.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.SALARY_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Salary Tax Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('withholding')} className="text-indigo-600 hover:underline">1. Bonus withholding vs. bonus tax</button></li>
          <li><button onClick={() => scrollToSection('flat-rate')} className="text-indigo-600 hover:underline">2. The 22% flat rate explained</button></li>
          <li><button onClick={() => scrollToSection('aggregate')} className="text-indigo-600 hover:underline">3. Aggregate method & paycheck impact</button></li>
          <li><button onClick={() => scrollToSection('true-liability')} className="text-indigo-600 hover:underline">4. How to estimate true liability (worked examples)</button></li>
          <li><button onClick={() => scrollToSection('payroll-taxes')} className="text-indigo-600 hover:underline">5. FICA, state tax and the Social Security cap</button></li>
          <li><button onClick={() => scrollToSection('keep-more')} className="text-indigo-600 hover:underline">6. Legal ways to keep more of a bonus</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">7. Common mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. FAQ</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="withholding" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Bonus withholding is not bonus tax</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The biggest misconception is that bonuses are taxed higher. In reality, bonuses are just <strong>withheld</strong>
            differently. Your actual tax bill is based on your total annual income and deductions, not whether income is
            labeled salary or bonus.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Two separate things happen. First, when the bonus is paid, your employer <strong>withholds</strong> an estimate
            of the tax and sends it to the IRS on your behalf. Second, when you file your return, your <strong>actual
            liability</strong> is calculated on all of your income for the year using the normal{' '}
            <a href="/blog/tax-brackets-explained-2025/" className="text-indigo-600 font-semibold hover:underline">federal tax brackets</a>.
            Withholding is just a prepayment. If too much was withheld you get it back as a refund; if too little was
            withheld you pay the difference.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The IRS calls bonuses <strong>supplemental wages</strong>, a category that also includes commissions,
            overtime paid separately, severance, back pay, taxable fringe benefits and, often, vesting RSUs. The same
            withholding rules apply to all of them.
          </p>
        </section>

        <section id="flat-rate" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The 22% flat withholding rule</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            For most employees, employers use the IRS supplemental wage flat rate: <strong>22% federal withholding</strong>
            on supplemental wages up to $1 million in a year. Supplemental wages above $1 million <strong>must</strong> be
            withheld at <strong>37%</strong>. The flat rate is optional for the employer (under $1 million) when the bonus is
            paid separately or identified separately from regular wages and income tax was withheld from your regular
            wages. If you&apos;re in a lower bracket, you might get some of that back at tax time. If you&apos;re in a higher
            bracket, you may owe more.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Scenario</th>
                  <th className="text-left p-4 font-black text-slate-900">Withholding</th>
                  <th className="text-left p-4 font-black text-slate-900">True liability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">22% bracket</td>
                  <td className="p-4 text-slate-700">22% withheld</td>
                  <td className="p-4 text-slate-700">Pretty accurate</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">10% or 12% bracket</td>
                  <td className="p-4 text-slate-700">22% withheld</td>
                  <td className="p-4 text-slate-700">Likely refund</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">24% bracket</td>
                  <td className="p-4 text-slate-700">22% withheld</td>
                  <td className="p-4 text-slate-700">Small amount owed (2% of the bonus)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">32%+ bracket</td>
                  <td className="p-4 text-slate-700">22% withheld</td>
                  <td className="p-4 text-slate-700">Likely owe more</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            For 2026, a single filer reaches the 24% bracket at $105,700 of taxable income and the 32% bracket at
            $201,775 (married filing jointly: $211,400 and $403,550). Higher earners who receive large bonuses or stock
            vests are the group most likely to be under-withheld; see the{' '}
            <a href="/blog/rsu-22-percent-withholding-trap/" className="text-indigo-600 font-semibold hover:underline">RSU 22% withholding trap</a>{' '}
            for that scenario.
          </p>
        </section>

        <section id="aggregate" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Aggregate method: why your bonus check shrinks</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Some companies add your bonus to a regular paycheck and withhold as if you&apos;ll make that amount every pay
            period. That spikes withholding and makes the bonus look “over-taxed.” It evens out at filing time.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Hypothetical example: you are paid $3,000 every two weeks and a $10,000 bonus is added to one paycheck. Payroll
            software sees a $13,000 check and annualizes it — $13,000 × 26 pay periods = <strong>$338,000</strong> — then
            withholds from that check as if you earned $338,000 a year. That can push withholding on that one check well
            above 22%, even though your real annual income is about $88,000. The excess comes back as a refund (or reduces
            what you owe) when you file.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold text-lg mb-2">💡 Which method did my employer use?</p>
            <p className="text-indigo-800">
              Look at the pay stub. If the bonus is on its own check and federal withholding is exactly 22% of it, your
              employer used the flat-rate method. If it was combined with regular pay and the federal withholding on that
              check is unusually high, it was likely the aggregate method. Your payroll or HR team can confirm.
            </p>
          </div>
        </section>

        <section id="true-liability" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to estimate your real bonus take-home</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The best way is to model your total annual income, then compare it to year-to-date withholding. Use a
            <strong> bonus tax calculator</strong> or Salary Estimator to estimate the true net bonus after federal, state,
            and payroll taxes. By hand, the method is:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-lg text-slate-700">
            <li>Estimate taxable income without the bonus (salary minus pre-tax deductions minus the $16,100 single / $32,200 joint standard deduction for 2026).</li>
            <li>Add the bonus and recalculate federal income tax with the 2026 brackets.</li>
            <li>The difference is the bonus&apos;s real federal income tax.</li>
            <li>Compare it with what was withheld (usually 22% of the bonus).</li>
          </ol>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Hypothetical single filer, 2026</th>
                  <th className="text-left p-4 font-black text-slate-900">Real federal tax on bonus</th>
                  <th className="text-left p-4 font-black text-slate-900">22% withheld</th>
                  <th className="text-left p-4 font-black text-slate-900">At filing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">$45,000 salary + $5,000 bonus (taxable $28,900 → $33,900)</td>
                  <td className="p-4 text-slate-700">$600 (all at 12%)</td>
                  <td className="p-4 text-slate-700">$1,100</td>
                  <td className="p-4 font-bold text-emerald-600">$500 back</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">$90,000 salary + $10,000 bonus (taxable $73,900 → $83,900)</td>
                  <td className="p-4 text-slate-700">$2,200 (all at 22%)</td>
                  <td className="p-4 text-slate-700">$2,200</td>
                  <td className="p-4 font-bold text-indigo-600">Even</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">$120,000 salary + $20,000 bonus (taxable $103,900 → $123,900)</td>
                  <td className="p-4 text-slate-700">$4,764 ($1,800 at 22% + $18,200 at 24%)</td>
                  <td className="p-4 text-slate-700">$4,400</td>
                  <td className="p-4 font-bold text-rose-600">$364 owed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 italic">
            Assumes the standard deduction, no pre-tax deductions, no other income and no credits. Your own return may differ.
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold">
              ✅ In the $90,000 example, the $10,000 bonus nets about $7,035 before state tax: $10,000 − $2,200 federal
              income tax − $765 FICA. State income tax, if any, comes out on top of that.
            </p>
          </div>
        </section>

        <section id="payroll-taxes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">FICA, state tax and the Social Security cap</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Unlike federal income tax withholding, <strong>FICA is not an estimate</strong> — it is the actual tax. A bonus
            is subject to 6.2% Social Security and 1.45% Medicare, the same 7.65% as salary. Two exceptions matter for
            higher earners:
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Social Security cap:</strong> the 6.2% applies only to the first $184,500 of wages in 2026 (with each employer). If your salary already exceeds that, a year-end bonus only has the 1.45% Medicare tax taken out.</li>
            <li>• <strong>Additional Medicare tax:</strong> employers must withhold an extra 0.9% on wages above $200,000 in a calendar year. Your actual liability depends on filing status ($200,000 single, $250,000 joint), and it is reconciled on your return.</li>
            <li>• <strong>State tax:</strong> states have their own rules, and some set their own supplemental withholding rate for bonuses. States without a wage income tax, such as Texas and Florida, withhold nothing.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            This is why a bonus stub can show 30%–40% or more in total deductions: 22% federal + 7.65% FICA is already
            29.65% before state tax, retirement deferrals or other elections are taken out.
          </p>
        </section>

        <section id="keep-more" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Legal ways to keep more of a bonus</h2>
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">Defer part of it into your 401(k)</h4>
              <p className="text-slate-700">
                Many plans let you apply your deferral percentage to bonuses. Traditional 401(k) deferrals reduce federal
                income tax (but not FICA), up to the 2026 limit of $24,500 ($8,000 more if 50+, or $11,250 more at ages
                60–63). In the $120,000 example, deferring the $18,200 that landed in the 24% bracket would save about
                $4,368 of federal income tax this year. Check the{' '}
                <a href="/retirement-account-optimizer/" className="text-indigo-600 font-semibold hover:underline">retirement account optimizer</a>{' '}
                to compare traditional and Roth options.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">Fund an HSA</h4>
              <p className="text-slate-700">
                If you have an HSA-eligible health plan, payroll HSA contributions avoid both income tax and FICA. The 2026
                limits are $4,400 self-only and $8,750 family.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-2">Fix under-withholding before year-end</h4>
              <p className="text-slate-700">
                If your bonus pushes you into the 32%+ brackets, 22% withholding will fall short. You can submit a new Form
                W-4 with extra withholding in Step 4(c) for the rest of the year, or make an estimated payment. Paying
                at least 100% of last year&apos;s tax (110% if your prior-year AGI exceeded $150,000) through withholding
                generally avoids an underpayment penalty — see{' '}
                <a href="/academy/safe-harbor-estimated-taxes/" className="text-indigo-600 font-semibold hover:underline">safe harbor rules for estimated taxes</a>.
              </p>
            </div>
          </div>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes</h2>
          <ul className="space-y-3 text-lg text-slate-700">
            <li>• <strong>Turning down a bonus or raise to avoid a &quot;higher bracket.&quot;</strong> Only the dollars above a threshold are taxed at the higher rate, so more pay always means more take-home from federal brackets alone.</li>
            <li>• <strong>Treating the 22% as final.</strong> It is a prepayment. Your bracket decides the real number.</li>
            <li>• <strong>Assuming a big refund means the bonus was &quot;taxed less.&quot;</strong> A refund just means more was withheld than you owed.</li>
            <li>• <strong>Forgetting about stacked supplemental pay.</strong> A bonus plus RSU vests plus commissions in one year can push high earners well past the 22% bracket while withholding stays at 22%.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            The same withholding-versus-liability logic applies to overtime pay; see{' '}
            <button
              onClick={() => onNavigate?.(ToolType.BLOG_OVERTIME_TAX)}
              className="text-indigo-600 hover:underline font-semibold"
            >
              the overtime tax myth
            </button>.
          </p>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: bonus tax myths</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Is bonus tax different from regular income tax?</h3>
              <p className="text-lg text-slate-700">No. Bonuses are taxed as ordinary income; only withholding differs.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Why does my bonus show a 40%+ deduction?</h3>
              <p className="text-lg text-slate-700">FICA, state tax, and aggregate withholding can stack on top of the 22% federal rate. 401(k) deferrals applied to the bonus also reduce the check, though that money is still yours.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Can I ask my employer to withhold less from my bonus?</h3>
              <p className="text-lg text-slate-700">If your employer uses the 22% flat rate, your W-4 generally does not change it. If it uses the aggregate method, your W-4 does affect the result. Either way, any over-withholding comes back when you file.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Is it better to receive a bonus in December or January?</h3>
              <p className="text-lg text-slate-700">It only matters if your income or bracket differs between the two years. A bonus is taxed in the year you receive it, so shifting it into a lower-income year can lower the tax; otherwise the difference is mostly timing. Not every employer offers a choice.</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 italic">
            This article is educational and is not individualized tax advice. Run your own numbers in the{' '}
            <a href="/salary-tax-estimator/" className="text-indigo-600 font-semibold hover:underline">salary tax estimator</a>.
          </p>
        </section>

        <section id="sources" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• IRS Publication 15, Employer&apos;s Tax Guide (supplemental wages): <a href="https://www.irs.gov/publications/p15" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p15</a></li>
            <li>• IRS Publication 505, Tax Withholding and Estimated Tax: <a href="https://www.irs.gov/publications/p505" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p505</a></li>
            <li>• IRS Rev. Proc. 2025-32 (2026 tax brackets and standard deduction): <a href="https://www.irs.gov/" className="text-indigo-600 font-semibold hover:underline">irs.gov</a></li>
            <li>• Social Security Administration, 2026 contribution and benefit base: <a href="https://www.ssa.gov/oact/cola/cbb.html" className="text-indigo-600 font-semibold hover:underline">ssa.gov/oact/cola/cbb.html</a></li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default BonusTaxMyth2025;

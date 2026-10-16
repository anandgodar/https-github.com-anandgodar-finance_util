import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const NoTaxOnTipsExplained2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>💸 Salary &amp; Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          No Tax on Tips 2026, Explained With a Sample Server&apos;s Paycheck
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          &quot;No tax on tips&quot; is real, but it&apos;s narrower than the name suggests: a federal
          income tax deduction, not a payroll tax exemption. Here&apos;s exactly what it shields and
          what it doesn&apos;t, worked through a hypothetical server&apos;s W-2 for both 2025 and 2026 returns.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
          <p className="text-amber-900 font-semibold">
            ⚠️ Honest limitation: QuantCurb&apos;s Salary Tax Estimator doesn&apos;t currently have a
            dedicated tips input field, so this article walks the math by hand rather than linking to a
            live calculator result. Use the{' '}
            <button
              onClick={() => onNavigate?.(ToolType.SALARY_CALC)}
              className="underline font-bold hover:text-amber-950"
            >
              Salary Tax Estimator
            </button>{' '}
            for the base-wage side of your paycheck, and the worked example below for the tips side.
          </p>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('the-law')} className="text-indigo-600 hover:underline">1. What the 2025-2028 deduction actually is</button></li>
          <li><button onClick={() => scrollToSection('qualifying')} className="text-indigo-600 hover:underline">2. Which tips qualify, and which don&apos;t</button></li>
          <li><button onClick={() => scrollToSection('worked-example')} className="text-indigo-600 hover:underline">3. Worked example: $35k base + $20k in reported tips</button></li>
          <li><button onClick={() => scrollToSection('fica')} className="text-indigo-600 hover:underline">4. What it doesn&apos;t touch: FICA and state tax</button></li>
          <li><button onClick={() => scrollToSection('overtime-sibling')} className="text-indigo-600 hover:underline">5. The sibling deduction: no tax on overtime</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">6. FAQ</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">7. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="the-law" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What the 2025-2028 deduction actually is</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Signed into law on July 4, 2025 as part of the One Big Beautiful Bill Act (OBBBA), the
            &quot;no tax on tips&quot; provision lets eligible workers deduct up to <strong>$25,000</strong> of
            qualified tips per year from their federal taxable income. &quot;Cash tips&quot; in the law means tips paid in
            cash or by card or check — not non-cash gifts. You can claim it whether you
            take the standard deduction or itemize — it&apos;s a separate line, not a swap. The deduction
            phases out for single filers with modified adjusted gross income (MAGI) above{' '}
            <strong>$150,000</strong> (<strong>$300,000</strong> for joint filers), and it&apos;s temporary:
            it applies to tax years 2025 through 2028 only, then expires unless Congress extends it. Above the threshold,
            the maximum deduction shrinks by $100 for every $1,000 of extra MAGI — so a single filer with $160,000 of MAGI
            could deduct up to $24,000 instead of $25,000.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            For 2025 tips, you claim the deduction on Schedule 1-A when you file in early 2026. For 2026 tips, you
            claim it the same way on the return you file in early 2027. Employers don&apos;t automatically stop
            withholding income tax on tips, so for most workers the benefit shows up at filing as a bigger refund or
            smaller balance due. If you want some of it in your paychecks during 2026, you can account for expected
            deductions in Step 4(b) of a new Form W-4 — our{' '}
            <a href="/blog/w4-multiple-jobs-worksheet-decoded/" className="text-indigo-600 font-semibold hover:underline">W-4 worksheet walkthrough</a>{' '}
            explains how that step works. Be conservative: over-estimating the deduction can leave you owing at filing.
          </p>
        </section>

        <section id="qualifying" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Which tips qualify, and which don&apos;t</h2>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Qualifies</th>
                  <th className="text-left p-4 font-black text-slate-900">Doesn&apos;t qualify</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Voluntary cash tips reported on a W-2, 1099, or Form 4137</td>
                  <td className="p-4 text-slate-700">Mandatory service charges or auto-gratuities (not legally &quot;tips&quot;)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Work in an occupation that customarily and regularly received tips before 2025 (servers, bartenders, salon workers, and similar — the Treasury publishes the full occupation list)</td>
                  <td className="p-4 text-slate-700">Work in an occupation outside that published list, even if you occasionally receive a tip</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Filers with a valid Social Security number</td>
                  <td className="p-4 text-slate-700">Married filers who file separately instead of jointly</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Self-employed tipped workers in an eligible occupation (deduction limited to net income from that work)</td>
                  <td className="p-4 text-slate-700">Tips earned through a specified service trade or business, such as health, law or performing arts (check IRS guidance if this could apply to you)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="worked-example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: $35k base + $20k in reported tips</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Hypothetical example: say you&apos;re a single server with $35,000 in base hourly wages and $20,000 in reported cash
            tips for the year — $55,000 in total W-2 wages. Your tips are under the $25,000 cap and your
            income is nowhere near the $150,000 phase-out, so the full $20,000 is deductible. Here is how it plays out on
            a 2025 return and on a 2026 return, assuming no other income, deductions or credits.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Line (2025 return)</th>
                  <th className="text-left p-4 font-black text-slate-900">Without the tips deduction</th>
                  <th className="text-left p-4 font-black text-slate-900">With the tips deduction</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Total W-2 wages (base + tips)</td>
                  <td className="p-4 text-slate-700">$55,000</td>
                  <td className="p-4 text-slate-700">$55,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">2025 standard deduction (single)</td>
                  <td className="p-4 text-slate-700">-$15,750</td>
                  <td className="p-4 text-slate-700">-$15,750</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">No-tax-on-tips deduction</td>
                  <td className="p-4 text-slate-700">$0</td>
                  <td className="p-4 text-slate-700">-$20,000</td>
                </tr>
                <tr className="border-t border-slate-100 bg-emerald-50">
                  <td className="p-4 font-bold text-emerald-800">Federal taxable income</td>
                  <td className="p-4 font-bold text-emerald-800">$39,250</td>
                  <td className="p-4 font-bold text-emerald-800">$19,250</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Federal income tax (2025 brackets)</td>
                  <td className="p-4 text-slate-700">$4,471.50</td>
                  <td className="p-4 text-slate-700">$2,071.50</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Line (2026 return)</th>
                  <th className="text-left p-4 font-black text-slate-900">Without the tips deduction</th>
                  <th className="text-left p-4 font-black text-slate-900">With the tips deduction</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Total W-2 wages (base + tips)</td>
                  <td className="p-4 text-slate-700">$55,000</td>
                  <td className="p-4 text-slate-700">$55,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">2026 standard deduction (single)</td>
                  <td className="p-4 text-slate-700">-$16,100</td>
                  <td className="p-4 text-slate-700">-$16,100</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">No-tax-on-tips deduction</td>
                  <td className="p-4 text-slate-700">$0</td>
                  <td className="p-4 text-slate-700">-$20,000</td>
                </tr>
                <tr className="border-t border-slate-100 bg-emerald-50">
                  <td className="p-4 font-bold text-emerald-800">Federal taxable income</td>
                  <td className="p-4 font-bold text-emerald-800">$38,900</td>
                  <td className="p-4 font-bold text-emerald-800">$18,900</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Federal income tax (2026 brackets)</td>
                  <td className="p-4 text-slate-700">$4,420</td>
                  <td className="p-4 text-slate-700">$2,020</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold">
              ✅ That $20,000 swing in taxable income sits inside the 12% federal bracket for a single
              filer at this income level, so it's $2,400 less in federal income tax owed in either year — real money, and it shows up as a bigger refund or a smaller balance due when you file,
              not as a bigger paycheck along the way.
            </p>
          </div>
        </section>

        <section id="fica" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What it doesn&apos;t touch: FICA and state tax</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            This is the part that trips people up. &quot;No tax on tips&quot; only ever meant{' '}
            <strong>federal income tax</strong>. Social Security and Medicare tax (FICA, 7.65% combined)
            still applies to <strong>100% of the $20,000</strong> in this example — the deduction doesn&apos;t
            reduce it by a dollar. That&apos;s roughly <strong>$1,530</strong> in FICA tax on the tip income
            alone, withheld from paychecks the same way it always was.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            State income tax is a separate question again, and it depends on where you live: a state
            only exempts tip income the way the federal government does if that state&apos;s own tax
            code conforms to the federal change, which isn&apos;t automatic and varies state by state.
            Don&apos;t assume your state return gets the same break just because your federal one does —
            check your state&apos;s own guidance before you file.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Two more things the deduction doesn&apos;t change: you still have to report every tip to your employer
            (generally by the 10th of the following month when tips total $20 or more in a month), and the deduction
            doesn&apos;t lower your adjusted gross income, so it won&apos;t by itself raise income-based credits that
            are calculated from AGI. To see the payroll-tax side of a paycheck, run your base wage through the{' '}
            <a href="/salary-tax-estimator/" className="text-indigo-600 font-semibold hover:underline">salary tax estimator</a>.
          </p>
        </section>

        <section id="overtime-sibling" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The sibling deduction: no tax on overtime</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The same law created a parallel deduction for overtime pay, capped at $12,500 for single
            filers ($25,000 joint). It covers only the qualified overtime premium — the extra &quot;half&quot; in
            time-and-a-half required by the Fair Labor Standards Act — not your full overtime pay, and it has the same $150,000/$300,000 phase-out structure and the same
            2025-2028 window. If your job pays both tips and overtime, the two deductions are separate
            and stack — see{' '}
            <button
              onClick={() => onNavigate?.(ToolType.BLOG_OVERTIME_TAX)}
              className="text-indigo-600 hover:underline font-semibold"
            >
              why your overtime paycheck got hit so hard
            </button>{' '}
            for the overtime side, including the withholding-vs-liability mechanics that also apply to
            regular wages.
          </p>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: no tax on tips</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Is all tip income really tax-free now?</h3>
              <p className="text-lg text-slate-700">No. Up to $25,000 in qualified cash tips is deductible from federal taxable income for 2025-2028, subject to an income phase-out. FICA payroll tax and, depending on your state, state income tax can still apply to the full amount.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Will my paycheck get bigger right away?</h3>
              <p className="text-lg text-slate-700">Not automatically. For both 2025 and 2026, the benefit is claimed on Schedule 1-A when you file. You can choose to reduce 2026 withholding by updating your Form W-4, but nothing changes unless you do.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Do mandatory service charges count as tips for this deduction?</h3>
              <p className="text-lg text-slate-700">No. The deduction covers voluntary cash tips reported on a W-2, 1099, or Form 4137. Mandatory service charges and auto-gratuities are treated as regular wages, not tips, and don't qualify.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">What if my tips are more than $25,000?</h3>
              <p className="text-lg text-slate-700">Only the first $25,000 is deductible — that cap is the same $25,000 whether you're single or married filing jointly, unlike the overtime deduction, which splits into a $12,500/$25,000 tier. Tips above the cap are taxed as ordinary wage income, same as before the law changed. Married taxpayers must file a joint return to claim it at all; filing separately forfeits the deduction.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Does it apply after 2028?</h3>
              <p className="text-lg text-slate-700">Not under current law. Tips received in 2025, 2026, 2027 and 2028 can qualify; unless Congress extends the provision, tips received in 2029 and later are taxed as ordinary income again.</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 italic">
            This article is educational and is not individualized tax advice. For how the deduction interacts with
            your bracket, see our <a href="/blog/tax-brackets-explained-2025/" className="text-indigo-600 font-semibold hover:underline">tax brackets explainer</a>.
          </p>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• One Big Beautiful Bill Act, Public Law 119-21 (signed July 4, 2025)</li>
            <li>• IRS guidance on the tips and overtime deductions and Schedule 1-A: <a href="https://www.irs.gov/" className="text-indigo-600 font-semibold hover:underline">irs.gov</a></li>
            <li>• IRS Publication 505, Tax Withholding and Estimated Tax: <a href="https://www.irs.gov/publications/p505" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p505</a></li>
            <li>• IRS Publication 15, Employer&apos;s Tax Guide (tip reporting and FICA): <a href="https://www.irs.gov/publications/p15" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p15</a></li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default NoTaxOnTipsExplained2025;

import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const NoTaxOnTipsExplained2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "No Tax on Tips, Explained With a Real Server's Paycheck",
      "description": "The 2025-2028 federal deduction on tip income, worked through a real server's W-2 wages plus reported tips, including what it doesn't shield from FICA.",
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
      "datePublished": "2026-09-06",
      "dateModified": "2026-09-06",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/no-tax-on-tips-explained-2025"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-no-tax-on-tips';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-no-tax-on-tips');
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
          <span>📅 Updated September 2026</span>
          <span>•</span>
          <span>⏱️ 8 min read</span>
          <span>•</span>
          <span>💸 Salary &amp; Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          No Tax on Tips, Explained With a Real Server&apos;s Paycheck
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          &quot;No tax on tips&quot; is real, but it&apos;s narrower than the name suggests: a federal
          income tax deduction, not a payroll tax exemption. Here&apos;s exactly what it shields and
          what it doesn&apos;t, worked through a real server&apos;s W-2.
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
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="the-law" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What the 2025-2028 deduction actually is</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Signed into law on July 4, 2025 as part of the One Big Beautiful Bill Act (OBBBA), the
            &quot;no tax on tips&quot; provision lets eligible workers deduct up to <strong>$25,000</strong> of
            qualified cash tips per year from their federal taxable income. You can claim it whether you
            take the standard deduction or itemize — it&apos;s a separate line, not a swap. The deduction
            phases out for single filers with modified adjusted gross income (MAGI) above{' '}
            <strong>$150,000</strong> (<strong>$300,000</strong> for joint filers), and it&apos;s temporary:
            it applies to tax years 2025 through 2028 only, then expires unless Congress extends it.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            For 2025 tips, you claim the deduction on Schedule 1-A when you file in early 2026. The IRS
            has said paycheck withholding itself may start adjusting for some workers in later years of
            the provision — but for now, treat this as something that shows up at filing, not as a
            change to what lands in your bank account each payday.
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
              </tbody>
            </table>
          </div>
        </section>

        <section id="worked-example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: $35k base + $20k in reported tips</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Say you&apos;re a single server with $35,000 in base hourly wages and $20,000 in reported cash
            tips for the year — $55,000 in total W-2 wages. Your tips are under the $25,000 cap and your
            income is nowhere near the $150,000 phase-out, so the full $20,000 is deductible.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Line</th>
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
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold">
              ✅ That $20,000 swing in taxable income sits inside the 12% federal bracket for a single
              filer at this income level, so it's roughly $2,400 less in federal income tax owed for the
              year — real money, and it shows up as a bigger refund or a smaller balance due when you file,
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
        </section>

        <section id="overtime-sibling" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The sibling deduction: no tax on overtime</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The same law created a parallel deduction for overtime pay, capped at $12,500 for single
            filers ($25,000 joint) with the same $150,000/$300,000 phase-out structure and the same
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
              <p className="text-lg text-slate-700">Not automatically. For 2025, the benefit shows up when you file your return, on Schedule 1-A. The IRS has indicated withholding may adjust for some workers in later years of the provision, but don't count on a mid-year paycheck change.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Do mandatory service charges count as tips for this deduction?</h3>
              <p className="text-lg text-slate-700">No. The deduction covers voluntary cash tips reported on a W-2, 1099, or Form 4137. Mandatory service charges and auto-gratuities are treated as regular wages, not tips, and don't qualify.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">What if my tips are more than $25,000?</h3>
              <p className="text-lg text-slate-700">Only the first $25,000 is deductible — that cap is the same $25,000 whether you're single or married filing jointly, unlike the overtime deduction, which splits into a $12,500/$25,000 tier. Tips above the cap are taxed as ordinary wage income, same as before the law changed. Married taxpayers must file a joint return to claim it at all; filing separately forfeits the deduction.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default NoTaxOnTipsExplained2025;

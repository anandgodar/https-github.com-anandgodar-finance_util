import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const OvertimeTaxMyth2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Why Your Overtime Paycheck Got Hit So Hard (It's Not a Higher Tax Rate)",
      "description": "Overtime isn't taxed at a higher rate — it's withheld at a higher rate for that one paycheck. See the mechanism and a worked example, then how it reconciles at filing.",
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
      "datePublished": "2026-08-30",
      "dateModified": "2026-08-30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/overtime-tax-myth-withholding-vs-tax-rate"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-overtime-tax';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-overtime-tax');
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
          <span>📅 Updated August 2026</span>
          <span>•</span>
          <span>⏱️ 9 min read</span>
          <span>•</span>
          <span>💸 Salary & Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Why Your Overtime Paycheck Got Hit So Hard (It&apos;s Not a Higher Tax Rate)
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Overtime pay is taxed at the exact same rates as your regular wages — there is no special
          &quot;overtime tax bracket.&quot; What actually shrinks that check is <strong>withholding</strong>,
          not the tax itself. Here&apos;s the mechanism, a worked example, and how it evens out when you file.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">See your real effective tax rate</h3>
              <p className="text-sm text-slate-600">
                Add your overtime earnings to your annual gross and see your true effective tax rate — separate from what any one paycheck withholds.
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
          <li><button onClick={() => scrollToSection('the-myth')} className="text-indigo-600 hover:underline">1. The myth: overtime has its own tax rate</button></li>
          <li><button onClick={() => scrollToSection('annualizing')} className="text-indigo-600 hover:underline">2. Why withholding spikes: the annualizing effect</button></li>
          <li><button onClick={() => scrollToSection('worked-example')} className="text-indigo-600 hover:underline">3. Worked example: $26/hr with 12 hours of overtime</button></li>
          <li><button onClick={() => scrollToSection('qualified-deduction')} className="text-indigo-600 hover:underline">4. The 2025-2028 &quot;no tax on overtime&quot; deduction</button></li>
          <li><button onClick={() => scrollToSection('bonus-vs-overtime')} className="text-indigo-600 hover:underline">5. How this differs from bonus withholding</button></li>
          <li><button onClick={() => scrollToSection('reconciliation')} className="text-indigo-600 hover:underline">6. How it reconciles at tax time</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="the-myth" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Overtime doesn&apos;t have its own tax rate</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Federal income tax is calculated on your total annual income, and overtime dollars are taxed at
            exactly the same marginal rates as any other wage dollar you earn that year — there is no
            &quot;overtime bracket&quot; and no penalty for working extra hours. What changes is how much your
            employer <strong>withholds</strong> from that specific paycheck, which is a cash-flow timing issue,
            not a tax-rate issue.
          </p>
        </section>

        <section id="annualizing" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why withholding spikes: the annualizing effect</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The IRS technically classifies overtime pay as a form of <strong>supplemental wages</strong> — the
            same category as bonuses — so employers are allowed to withhold it at a flat 22% if they pay and
            identify it separately. In practice, most hourly workers never see that: their overtime hours are
            baked into the same regular paycheck at time-and-a-half, and employers run the whole check through
            the regular percentage-method withholding tables instead of splitting it out. That formula works by
            taking whatever you were paid <em>this period</em> and annualizing it: multiplying a biweekly check
            by 26, a weekly check by 52, and so on, to estimate what you&apos;d earn for the full year
            <strong> if every paycheck looked like this one</strong>. When overtime inflates a single check
            processed this way, the formula temporarily assumes you make that much every pay period — pushing
            more of that paycheck into higher withholding brackets than your actual annual income will end up in.
          </p>
        </section>

        <section id="worked-example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: $26/hr with 12 hours of overtime</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Say you&apos;re single, paid biweekly, at $26/hour. A standard 80-hour check (no overtime) is your
            baseline. One pay period, you work 12 hours of overtime at time-and-a-half ($39/hr).
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Paycheck</th>
                  <th className="text-left p-4 font-black text-slate-900">Gross pay</th>
                  <th className="text-left p-4 font-black text-slate-900">Annualized (× 26)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Standard, no overtime</td>
                  <td className="p-4 text-slate-700">80 hrs × $26 = $2,080</td>
                  <td className="p-4 text-slate-700">$54,080</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">This period, +12 hrs OT</td>
                  <td className="p-4 text-slate-700">$2,080 + (12 × $39) = $2,548</td>
                  <td className="p-4 text-slate-700">$66,248</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            The payroll system doesn&apos;t know this overtime is a one-time thing — for withholding purposes it
            treats you as if you&apos;d earn $66,248 all year instead of $54,080. That pushes a larger slice of
            <em> this specific paycheck</em> into a higher withholding bracket than the rest of your checks, so
            the take-home on the overtime hours looks disproportionately smaller than the regular hours right
            next to it on the same stub — even though your actual full-year tax liability is calculated only
            on what you really earned.
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold">
              ✅ If that 12-hour overtime shift only happens once, your real annual income is still around
              $54,080 + $468 = $54,548, not $66,248 — so the extra withholding on this check is a temporary
              overpayment, not a permanent one.
            </p>
          </div>
        </section>

        <section id="qualified-deduction" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The 2025-2028 &quot;no tax on overtime&quot; deduction</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Separately from the withholding mechanics above, federal law now lets many workers deduct part of
            their overtime pay when they file. For tax years 2025 through 2028, you can deduct the
            <strong> overtime premium</strong> — just the extra &quot;half&quot; on top of your regular rate
            that the Fair Labor Standards Act requires for overtime hours, not your entire overtime paycheck.
            The deduction is capped at <strong>$12,500</strong> ($25,000 if married filing jointly) and phases
            out above <strong>$150,000</strong> of modified adjusted gross income ($300,000 if married filing
            jointly).
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">What it does</th>
                  <th className="text-left p-4 font-black text-slate-900">What it doesn&apos;t do</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Deducts the overtime <em>premium</em> from federal taxable income, above-the-line, whether or not you itemize</td>
                  <td className="p-4 text-slate-700">Doesn&apos;t exempt overtime from Social Security or Medicare (FICA) taxes, or from state income tax</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Lowers what you owe when you file, claimed on Schedule 1-A</td>
                  <td className="p-4 text-slate-700">Doesn&apos;t change how much your employer withholds from each paycheck during the year</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            That last row matters for this whole article: your paycheck&apos;s withholding still runs on the
            annualizing logic above, with no adjustment for this deduction built in. A heavy-overtime year can
            now mean <em>two</em> gaps between what got withheld and what you actually owe — the temporary
            over-withholding from annualizing, and this deduction lowering your real liability further — both
            of which only resolve when you file.
          </p>
        </section>

        <section id="bonus-vs-overtime" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How this differs from bonus withholding</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            It&apos;s easy to conflate this with the &quot;bonus tax&quot; myth, and the two really are close
            cousins — the IRS groups both under supplemental wages. The practical difference is how they
            usually get paid: a bonus is typically a separate, one-off payment, so employers often take the
            simpler path and withhold a flat 22% on it regardless of your bracket. Overtime is almost always
            folded into your regular paycheck alongside your normal hours, so employers typically withhold on
            the combined total using the regular percentage-method tables — which is what causes the
            annualizing distortion above, rather than a flat rate. Same underlying confusion (&quot;this got
            taxed more&quot;), different plumbing — and if your employer does pay and identify overtime
            separately, it can be withheld at the flat 22% rate too.
          </p>
        </section>

        <section id="reconciliation" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How it reconciles at tax time</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Withholding is just a prepayment estimate. When you file, your actual tax liability is computed on
            your real total annual income — regular pay plus every hour of overtime you actually worked, no
            more, no less. If a heavy-overtime pay period over-withheld relative to your real annual rate,
            that difference comes back as part of your refund (or reduces what you owe). Steady overtime that
            continues all year does raise your real income and your real tax bill — but only by the normal
            marginal-rate math, never at some special elevated &quot;overtime rate.&quot;
          </p>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: overtime tax myths</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Is overtime pay taxed at a higher rate?</h3>
              <p className="text-lg text-slate-700">No. Overtime is taxed at the same marginal rates as regular wages based on your total annual income. Only the withholding on that specific paycheck runs higher.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Why did my overtime check show a much bigger deduction?</h3>
              <p className="text-lg text-slate-700">Payroll withholding annualizes each paycheck as if it repeated all year. A one-time overtime spike temporarily overstates your annual pay for withholding purposes, so more is held back than your real tax bill needs.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Will working overtime regularly push me into a higher tax bracket?</h3>
              <p className="text-lg text-slate-700">Only the income that actually falls in a higher bracket is taxed at that rate — see how marginal brackets work. Regular overtime does raise your real income and real tax bill, but through ordinary progressive taxation, not a penalty rate.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Is overtime pay really tax-free now?</h3>
              <p className="text-lg text-slate-700">Not entirely. For 2025 through 2028, you can deduct the overtime premium (the extra &quot;half&quot; of time-and-a-half) up to $12,500 ($25,000 married filing jointly), subject to income phaseouts — but it&apos;s a federal income tax deduction claimed when you file, not an exemption from FICA, state tax, or paycheck withholding.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default OvertimeTaxMyth2026;

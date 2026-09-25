import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const RSUWithholdingTrap2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The 22% RSU Withholding Trap: Why Your Vesting-Day Paycheck Feels Wrong",
      "description": "Employers withhold a flat 22% federal rate on RSU vests, but that rate isn't your real tax rate. Two worked examples show the gap, and how to cover it before it becomes a Q4 underpayment penalty.",
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
      "datePublished": "2026-09-15",
      "dateModified": "2026-09-15",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/rsu-22-percent-withholding-trap"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-rsu-withholding';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-rsu-withholding');
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
          <span>⏱️ 9 min read</span>
          <span>•</span>
          <span>📈 Salary & Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The 22% RSU Withholding Trap: Why Your Vesting-Day Paycheck Feels Wrong
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          When restricted stock units vest, your employer withholds federal tax at a flat 22% — not your
          actual tax rate. For most equity-comp employees that rate is too low, and the gap between what was
          withheld and what's really owed doesn't show up until you file, as a balance due instead of the
          refund the paycheck made it look like you'd earned.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Estimate your take-home, then check the bracket table below</h3>
              <p className="text-sm text-slate-600">
                The Salary Tax Estimator projects your take-home pay from base salary and vested RSU income
                combined. Compare that combined taxable income against the 2026 bracket table below to find
                the marginal rate that actually applies — the number that matters for this gap, not the 22%
                your pay stub shows.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.SALARY_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Salary Tax Estimator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('the-mechanism')} className="text-indigo-600 hover:underline">1. Why 22% — the flat rate that isn't personalized to you</button></li>
          <li><button onClick={() => scrollToSection('example-modest')} className="text-indigo-600 hover:underline">2. Worked example: a modest, easy-to-miss gap</button></li>
          <li><button onClick={() => scrollToSection('example-large')} className="text-indigo-600 hover:underline">3. Worked example: a $15,000+ shortfall</button></li>
          <li><button onClick={() => scrollToSection('million-dollar')} className="text-indigo-600 hover:underline">4. What changes above $1 million in supplemental wages</button></li>
          <li><button onClick={() => scrollToSection('closing-the-gap')} className="text-indigo-600 hover:underline">5. Closing the gap before it becomes a penalty</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">6. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="the-mechanism" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why 22% — the flat rate that isn't personalized to you</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            RSUs are taxed as ordinary income on the day they vest, based on the fair market value of the
            shares that day — added to your W-2 wages the same as a bonus or commission. The IRS classifies
            this as a <strong>supplemental wage</strong>, and supplemental wages get withheld differently from
            regular salary: instead of running through your W-4's graduated-bracket calculation, employers can
            use the flat <strong>percentage method</strong> — 22% federal, up to $1,000,000 in cumulative
            supplemental wages in a calendar year (37% on the amount above that; see below). Almost every
            payroll system defaults to this flat method because it's simpler to run than recomputing your
            personal W-4 withholding on every vest date.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The problem is that 22% is a flat number picked for administrative convenience, not a rate tied to
            your actual income. Your <em>real</em> marginal rate on that vested income depends on where it
            lands once it's stacked on top of everything else you earned that year — your base salary, any
            other vests, a spouse's income if you file jointly. For 2026, the federal brackets above 22% are
            24%, 32%, 35% and 37%. Anyone whose combined income puts the vested shares into one of those higher
            bands is under-withheld the moment the shares hit their account, whether or not the pay stub makes
            it look otherwise.
          </p>
        </section>

        <section id="example-modest" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: a modest, easy-to-miss gap</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Not every RSU holder owes a dramatic shortfall — but even a comfortably-employed single filer with
            no other equity income usually owes <em>something</em>. Take a $140,000 base salary with a $30,000
            RSU vest in the same year, filing single, taking the $16,100 standard deduction (2026):
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Line</th>
                  <th className="text-left p-4 font-black text-slate-900">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Base salary + RSU vest, gross</td>
                  <td className="p-4 font-mono text-slate-900 text-right">$170,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Taxable income after standard deduction</td>
                  <td className="p-4 font-mono text-slate-900 text-right">$153,900</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Bracket the $30,000 of RSU income falls in (24%: $105,701–$201,775 single)</td>
                  <td className="p-4 font-mono text-slate-900 text-right">24%</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Federal tax actually owed on the RSU ($30,000 × 24%)</td>
                  <td className="p-4 font-mono text-slate-900 text-right">$7,200</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Federal tax withheld on the RSU ($30,000 × 22%)</td>
                  <td className="p-4 font-mono text-slate-900 text-right">$6,600</td>
                </tr>
                <tr className="border-t border-slate-100 bg-amber-50">
                  <td className="p-4 text-amber-900 font-bold">Shortfall at filing</td>
                  <td className="p-4 font-mono text-amber-800 text-right font-bold">$600</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            $600 rarely triggers a real underpayment penalty on its own, but it's a preview of the same
            mechanism that gets much larger the higher your base salary climbs — the RSU income doesn't get a
            fresh set of brackets; it stacks on top of whatever you already earn.
          </p>
        </section>

        <section id="example-large" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: a $15,000+ shortfall</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Now take a more senior software engineer or manager: $260,000 base salary, $120,000 in RSUs
            vesting the same year, single filer, same $16,100 standard deduction. The base salary alone
            already sits in the 32% bracket ($201,776–$256,225 single, 2026), so the RSU income stacks on top
            of that — most of it lands in the 32% band, and the rest spills into the 35% band above it:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Slice of the $120,000 RSU vest</th>
                  <th className="text-left p-4 font-black text-slate-900">Bracket</th>
                  <th className="text-left p-4 font-black text-slate-900">Tax owed</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">$12,325 (fills out the 32% band)</td>
                  <td className="p-4 text-slate-700 text-center">32%</td>
                  <td className="p-4 font-mono text-slate-900 text-right">$3,944</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">$107,675 (spills into the 35% band)</td>
                  <td className="p-4 text-slate-700 text-center">35%</td>
                  <td className="p-4 font-mono text-slate-900 text-right">$37,686</td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50">
                  <td className="p-4 text-slate-900 font-bold" colSpan={2}>Total federal tax actually owed on the RSU vest</td>
                  <td className="p-4 font-mono text-slate-900 text-right font-bold">$41,630</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700" colSpan={2}>Federal tax withheld on the RSU ($120,000 × 22%)</td>
                  <td className="p-4 font-mono text-slate-700 text-right">$26,400</td>
                </tr>
                <tr className="border-t border-slate-100 bg-amber-50">
                  <td className="p-4 text-amber-900 font-bold" colSpan={2}>Shortfall at filing</td>
                  <td className="p-4 font-mono text-amber-800 text-right font-bold">$15,230</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            That's a real, five-figure balance due — not from anything going wrong, but from a flat withholding
            rate that was never trying to match this filer's actual 32%/35% blended bracket in the first place.
            Left unaddressed until the April filing deadline, a gap this size is also large enough to trigger
            an underpayment penalty on top of the tax itself.
          </p>
        </section>

        <section id="million-dollar" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What changes above $1 million in supplemental wages</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Once your cumulative supplemental wages for the calendar year — RSU vests, bonuses, commissions and
            severance all count together — pass $1,000,000, the IRS requires a flat <strong>37%</strong>{' '}
            withholding rate on the amount above that threshold, instead of 22%. That's the top federal
            bracket rate, so it closes most of the gap for very large vests, though it can still run slightly
            high or low depending on your exact blended rate that year. Below $1,000,000 in cumulative
            supplemental wages, an employer using the flat percentage method withholds every dollar at 22%
            regardless of how high your salary already is — which is exactly the range where the gap in the
            two examples above shows up. (An employer using the aggregate method instead — see below — isn't
            bound by that flat rate even under $1 million.)
          </p>
        </section>

        <section id="closing-the-gap" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Closing the gap before it becomes a penalty</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Three practical ways to close it, roughly in order of how much control you have over each:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg text-slate-700">
            <li>
              <strong>Ask your stock plan administrator about the sell-to-cover percentage.</strong> Some
              employer plans let you elect to withhold more shares than the statutory 22% minimum at vest;
              others don't support anything beyond the flat rate. It costs nothing to ask before the next vest
              date.
            </li>
            <li>
              <strong>Increase additional withholding on your W-4</strong> for the rest of the year, calculated
              off the real gap once you know your combined-income bracket — this catches the shortfall through
              your regular paycheck instead of a lump sum.
            </li>
            <li>
              <strong>Make an estimated tax payment</strong> covering the shortfall before the next quarterly
              deadline. The Quarterly Tax Calculator walks through the payment schedule and the underpayment-
              penalty safe harbor: you generally avoid a penalty by paying at least 90% of the current year's
              tax, or 100% of last year's tax (110% if last year's AGI was over $150,000), through the year via
              withholding and estimated payments combined. Each due date's installment it shows is an even
              quarter-slice of that full-year target, not the RSU-specific gap — to find what's actually still
              owed, compare your <em>cumulative</em> withholding and payments so far this year (including the
              22% taken at vest) against the <em>cumulative</em> safe-harbor amount through that same due date,
              not against a single installment figure on its own.
            </li>
          </ul>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Size your next estimated payment</h3>
                <p className="text-sm text-slate-600">
                  The Quarterly Tax Calculator shows each due date's installment as one quarter of your
                  full-year safe-harbor target — it doesn't know what you've already paid. Compare your total
                  withholding and payments so far this year (including the 22% RSU withholding above) against
                  the cumulative safe-harbor target through that same date, not against a single installment
                  number, to find what's actually left to pay.
                </p>
              </div>
              <button
                onClick={() => onNavigate?.(ToolType.QUARTERLY_TAX)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
              >
                Use Quarterly Tax Calculator →
              </button>
            </div>
          </div>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: RSU withholding</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Is this specific to RSUs, or does it apply to bonuses too?</h3>
              <p className="text-lg text-slate-700">The same flat percentage-method withholding applies to any supplemental wage — bonuses, commissions, severance and RSU vests alike. RSUs just trigger it most often for equity-comp employees, since a vest schedule can mean several supplemental-wage events a year.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Can my employer choose not to use the flat 22% rate?</h3>
              <p className="text-lg text-slate-700">Employers can use the aggregate method instead — combining the RSU income with your regular paycheck for that period and withholding at your W-4's graduated rate — but the flat percentage method is far more common because it's simpler to administer across an entire vesting population at once. Most large employers default to it.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Does state tax have the same gap?</h3>
              <p className="text-lg text-slate-700">Most states with an income tax apply their own separate flat supplemental withholding rate, independent of the federal one — it can run above or below your state's real marginal rate the same way the federal 22% does. Check your state's specific supplemental rate rather than assuming it matches the federal treatment.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">If I'm under-withheld, do I owe a penalty automatically?</h3>
              <p className="text-lg text-slate-700">Not automatically — the IRS's safe harbor rules (see above) let you avoid a penalty even with a balance due at filing, as long as your total withholding and estimated payments through the year hit the required threshold. A large, late-in-the-year vest is exactly the situation an estimated payment before the next quarterly deadline is designed to cover.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default RSUWithholdingTrap2026;

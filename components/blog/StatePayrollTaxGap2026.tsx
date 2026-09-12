import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const StatePayrollTaxGap2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Payroll Tax Your Calculator Doesn't Model: State Disability & Paid Family Leave",
      "description": "At least ten states withhold a separate payroll tax for disability and paid family leave insurance, on top of federal, state income tax and FICA — and most paycheck calculators, including ours, don't model it. Real 2026 rates and wage caps for all ten, with worked examples for CA, NY, NJ, WA, CO and MA.",
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
      "datePublished": "2026-09-11",
      "dateModified": "2026-09-11",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/state-disability-paid-leave-payroll-tax-2026"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-state-payroll-tax-gap';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-state-payroll-tax-gap');
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
          <span>⏱️ 10 min read</span>
          <span>•</span>
          <span>🩺 Salary & Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The Payroll Tax Your Calculator Doesn&apos;t Model: State Disability &amp; Paid Family Leave
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Federal tax, state income tax and FICA are the three line items every paycheck calculator shows. In at
          least ten states, there&apos;s a fourth: a payroll deduction that funds state disability insurance and
          paid family leave. It&apos;s not FICA, it&apos;s not state income tax, and most calculators — including
          the one on this site — don&apos;t ask about it at all. If you work in California, New York, New Jersey,
          Washington, Colorado, Massachusetts, Connecticut, Oregon, Minnesota or Maine, your real take-home pay is
          lower than a federal-plus-state-plus-FICA number suggests. Here&apos;s exactly how much, per state, with
          real 2026 rates — with worked examples for the six longest-running, highest-population programs.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
          <p className="text-amber-900 font-semibold">
            ⚠️ Full disclosure: quantcurb&apos;s own Salary Tax Estimator computes federal tax, state income tax
            and FICA — it does not have a field for state disability or paid-leave withholding. If you work in
            one of the ten states below, you&apos;ll need to subtract the amount yourself using the numbers in
            this piece. We&apos;d rather say that plainly than let the calculator&apos;s silence read as
            &quot;nothing else is owed.&quot;
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Get your federal + state + FICA number first</h3>
              <p className="text-sm text-slate-600">
                Run your salary through the estimator for that baseline, then come back here to subtract the
                disability/paid-leave withholding if you work in one of these ten states.
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
          <li><button onClick={() => scrollToSection('the-six-states')} className="text-indigo-600 hover:underline">1. Ten states, and what each program is called</button></li>
          <li><button onClick={() => scrollToSection('worked-example')} className="text-indigo-600 hover:underline">2. Worked example: the same salary in all six states</button></li>
          <li><button onClick={() => scrollToSection('wage-caps')} className="text-indigo-600 hover:underline">3. Why the gap widens at higher income — wage caps, and California's lack of one</button></li>
          <li><button onClick={() => scrollToSection('washington-two-deductions')} className="text-indigo-600 hover:underline">4. Washington is two separate deductions, not one</button></li>
          <li><button onClick={() => scrollToSection('how-to-adjust')} className="text-indigo-600 hover:underline">5. How to adjust the calculator's output by hand</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">6. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="the-six-states" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Ten states, and what each program is called</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Most states fund disability and paid-family-leave benefits through employer-only payroll taxes, or
            don&apos;t run a state program at all — in either case, nothing comes out of your paycheck for it and
            a calculator that skips it isn&apos;t missing anything. At least ten states are different: they fund
            some or all of the program through a deduction from <strong>your</strong> wages, on top of whatever
            federal and state income tax you already owe. All figures below are 2026 rates, sourced directly from
            each state&apos;s own labor or tax agency.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">State</th>
                  <th className="text-left p-4 font-black text-slate-900">Program</th>
                  <th className="text-left p-4 font-black text-slate-900">Employee rate (2026)</th>
                  <th className="text-left p-4 font-black text-slate-900">2026 wage cap</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">California</td><td className="p-4 text-slate-700">SDI (funds both disability &amp; PFL together)</td><td className="p-4 font-mono text-slate-900">1.3%</td><td className="p-4 font-mono text-slate-900">None</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">New York</td><td className="p-4 text-slate-700">Paid Family Leave (PFL)</td><td className="p-4 font-mono text-slate-900">0.432%</td><td className="p-4 font-mono text-slate-900">$411.91/yr max</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">New Jersey</td><td className="p-4 text-slate-700">TDI + FLI (two separate lines)</td><td className="p-4 font-mono text-slate-900">0.19% + 0.23%</td><td className="p-4 font-mono text-slate-900">$171,100 wages</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Washington</td><td className="p-4 text-slate-700">PFML + WA Cares (two separate programs)</td><td className="p-4 font-mono text-slate-900">≈0.808% + 0.58%</td><td className="p-4 font-mono text-slate-900">$184,500 / None</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Colorado</td><td className="p-4 text-slate-700">FAMLI</td><td className="p-4 font-mono text-slate-900">0.44%</td><td className="p-4 font-mono text-slate-900">$184,500 wages</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Massachusetts</td><td className="p-4 text-slate-700">PFML</td><td className="p-4 font-mono text-slate-900">up to 0.46%</td><td className="p-4 font-mono text-slate-900">$184,500 wages</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Connecticut</td><td className="p-4 text-slate-700">CT Paid Leave (CTPL)</td><td className="p-4 font-mono text-slate-900">0.5%</td><td className="p-4 font-mono text-slate-900">$184,500 wages</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Oregon</td><td className="p-4 text-slate-700">Paid Leave Oregon</td><td className="p-4 font-mono text-slate-900">0.6%</td><td className="p-4 font-mono text-slate-900">$184,500 wages</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Minnesota</td><td className="p-4 text-slate-700">Minnesota Paid Leave</td><td className="p-4 font-mono text-slate-900">up to 0.44%</td><td className="p-4 font-mono text-slate-900">$185,000 wages</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Maine</td><td className="p-4 text-slate-700">Paid Family &amp; Medical Leave</td><td className="p-4 font-mono text-slate-900">0.5%*</td><td className="p-4 font-mono text-slate-900">no published cap</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-sm">
            *Maine&apos;s employee share applies at employers with 15+ workers; smaller employers may pass through
            the full 0.5% (no employer share required there). Maine has been withholding since January 2025 even
            though its benefits don&apos;t start paying out until May 2026 — a real deduction on paychecks now,
            not a future one. Rhode Island and Hawaii also run employee-funded disability programs but hadn&apos;t
            published final 2026 rates as of this writing — check ri.gov and the Hawaii DLIR directly rather than
            assuming last year&apos;s number still applies. This isn&apos;t a state-by-state list of every payroll
            tax; it&apos;s specifically the disability/paid-leave category most calculators silently skip, and the
            worked examples below focus on the six longest-running, highest-population programs rather than all ten.
          </p>
        </section>

        <section id="worked-example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: the same salary in all six states</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Take a <strong>$80,000</strong> salary and apply each state&apos;s rate directly — every one of these
            is below its wage cap at this income, so it&apos;s a straight multiplication:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">State</th>
                  <th className="text-left p-4 font-black text-slate-900">Calculation</th>
                  <th className="text-left p-4 font-black text-slate-900">Annual cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">California</td><td className="p-4 font-mono text-slate-900">1.3% × $80,000</td><td className="p-4 font-mono font-bold text-slate-900">$1,040</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Washington</td><td className="p-4 font-mono text-slate-900">(0.808% + 0.58%) × $80,000</td><td className="p-4 font-mono font-bold text-slate-900">≈ $1,110</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Massachusetts</td><td className="p-4 font-mono text-slate-900">0.46% × $80,000</td><td className="p-4 font-mono font-bold text-slate-900">$368</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Colorado</td><td className="p-4 font-mono text-slate-900">0.44% × $80,000</td><td className="p-4 font-mono font-bold text-slate-900">$352</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">New Jersey</td><td className="p-4 font-mono text-slate-900">(0.19% + 0.23%) × $80,000</td><td className="p-4 font-mono font-bold text-slate-900">$336</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">New York</td><td className="p-4 font-mono text-slate-900">0.432% × $80,000</td><td className="p-4 font-mono font-bold text-slate-900">$346</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            On this salary, that&apos;s <strong>$29–$93 a month</strong> depending on the state — real money a
            federal-plus-state-plus-FICA calculator has no line item for, because it genuinely isn&apos;t any of
            those three things.
          </p>
        </section>

        <section id="wage-caps" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why the gap widens at higher income — wage caps, and California's lack of one</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Four of the six programs stop charging once wages cross a cap — New York&apos;s caps the dollar
            amount directly at $411.91/year, while New Jersey, Washington&apos;s PFML and Colorado and
            Massachusetts all cap the <em>wages</em> the rate applies to at $171,100 (NJ) or $184,500 (the others,
            matching the federal Social Security wage base). California&apos;s SDI and Washington&apos;s WA Cares
            Fund are different: <strong>neither has a wage cap at all</strong>, so the deduction keeps scaling with
            income indefinitely. Compare the same three salaries:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">State</th>
                  <th className="text-left p-4 font-black text-slate-900">$80,000</th>
                  <th className="text-left p-4 font-black text-slate-900">$150,000</th>
                  <th className="text-left p-4 font-black text-slate-900">$250,000</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">California (no cap)</td><td className="p-4 font-mono text-slate-900">$1,040</td><td className="p-4 font-mono text-slate-900">$1,950</td><td className="p-4 font-mono font-bold text-indigo-600">$3,250</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Washington (mixed)</td><td className="p-4 font-mono text-slate-900">$1,110</td><td className="p-4 font-mono text-slate-900">$2,082</td><td className="p-4 font-mono font-bold text-indigo-600">$2,941</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">New Jersey (capped)</td><td className="p-4 font-mono text-slate-900">$336</td><td className="p-4 font-mono text-slate-900">$630</td><td className="p-4 font-mono text-slate-900">$719 (capped)</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">New York (capped)</td><td className="p-4 font-mono text-slate-900">$346</td><td className="p-4 font-mono text-slate-900">$412 (capped)</td><td className="p-4 font-mono text-slate-900">$412 (capped)</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Colorado (capped)</td><td className="p-4 font-mono text-slate-900">$352</td><td className="p-4 font-mono text-slate-900">$660</td><td className="p-4 font-mono text-slate-900">$812 (capped)</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Massachusetts (capped)</td><td className="p-4 font-mono text-slate-900">$368</td><td className="p-4 font-mono text-slate-900">$690</td><td className="p-4 font-mono text-slate-900">$849 (capped)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            At $250,000, a California earner pays roughly <strong>$3,250/year</strong> into SDI with no ceiling in
            sight, while a New York earner making the identical salary is capped at <strong>$412</strong> — an
            eight-fold gap driven entirely by wage-cap design, not by income level. A calculator that treats
            &quot;California&quot; and &quot;New York&quot; as interchangeable high-tax states misses this
            entirely.
          </p>
        </section>

        <section id="washington-two-deductions" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Washington is two separate deductions, not one</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Washington runs two independent programs that both withhold from the same paycheck, which is easy to
            undercount if you only find one of them in a search: <strong>Paid Family &amp; Medical Leave (PFML)</strong>{' '}
            charges a total premium of 1.13% of wages in 2026, split so the employee pays 71.43% of it
            (≈0.808% of wages) and the employer pays the rest — capped at the $184,500 Social Security wage base.
            Separately, the <strong>WA Cares Fund</strong> (long-term care) charges a flat <strong>0.58%</strong>,
            paid entirely by the employee, with <strong>no wage cap at all</strong>. They show up as two distinct
            line items on a Washington pay stub, not one combined rate — a calculator or guide that lists only
            one of them is showing roughly half the real deduction.
          </p>
        </section>

        <section id="how-to-adjust" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to adjust the calculator's output by hand</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
            <p className="text-amber-900 font-semibold">
              ⚠️ Same honest limitation this site's local-tax piece flags: the Salary Tax Estimator's federal
              calculation is itself an approximation — a single bracket table applied regardless of filing status,
              without subtracting the standard deduction first. Treat the calculator's net pay as a rough starting
              point before layering the adjustment below on top of it.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">1. Run your federal + state + FICA number as normal</h3>
              <p className="text-slate-700">Use the calculator's output as a starting estimate.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">2. Check whether your wages are under or over the cap</h3>
              <p className="text-slate-700">For New York, apply the rate until you hit $411.91 total for the year, then stop. For New Jersey, Colorado, Massachusetts and Washington's PFML, apply the rate only to wages up to the cap. California's SDI and Washington's WA Cares Fund apply to every dollar, uncapped.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">3. Subtract the result from the calculator's take-home figure</h3>
              <p className="text-slate-700">Convert the annual amount to your pay period and subtract it from the calculator's net pay — a closer estimate, though still not exact given the federal caveat above.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: state disability &amp; paid-leave payroll tax</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Is this the same thing as FICA?</h3>
              <p className="text-lg text-slate-700">No. FICA (Social Security and Medicare) is a federal payroll tax that applies in every state. State disability/paid-leave withholding is a separate, state-run program that exists in at least these ten states (plus Rhode Island and Hawaii, which hadn't published final 2026 rates as of this writing), and it's withheld and reported separately from FICA on your pay stub.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Do I get this money back, like a tax?</h3>
              <p className="text-lg text-slate-700">Usually no — it's an insurance premium, paid whether or not you ever file a claim, the same way you don't get auto insurance premiums back for a year you didn't crash. <strong>The one real exception is over-withholding across multiple employers</strong>: each employer withholds independently up to that state's cap, with no way to know what another employer already withheld you this year — the same mechanic that creates the excess-Social-Security refund covered elsewhere on this site. California's FTB lets you claim excess SDI (over 0.90% of wages from a single employer isn't eligible — that's a payroll error, not this credit) via the Excess SDI Worksheet on Form 540. New Jersey's Form NJ-2450 does the same for excess UI/WF/SWF, DI and FLI combined. A single employer simply over-withholding past the cap isn't reconciled this way — that's a payroll mistake to take up with that employer directly, not a tax-return credit.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Why doesn't quantcurb's calculator just add this in?</h3>
              <p className="text-lg text-slate-700">Ten different states, ten different rate structures (a combined rate, two separate deductions, capped dollar amounts, capped wage bases, or no cap at all) is real scope of work to model and keep current every year as rates change — which is why this piece exists as an honest interim answer instead of the calculator silently treating "not modeled" as "zero."</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">I work in one of these states but my pay stub doesn't show a separate line for it — am I missing something?</h3>
              <p className="text-lg text-slate-700">Check your stub's abbreviations carefully first — CASDI, NY PFL, NJ TDI/FLI, WA PFML/WA Cares and CO FAMLI are the common labels, and they're easy to mistake for a state tax line if you're not looking for them by name. If it's genuinely not there and you believe it should be, that's a payroll setup question for your employer, not something this calculator can diagnose.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default StatePayrollTaxGap2026;

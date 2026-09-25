import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const HSAvs401kFICASavings2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "401(k) vs. HSA: Why the Same $500 Doesn't Save You the Same Amount of Tax",
      "description": "401(k) contributions only reduce your income-tax wages. HSA contributions made through payroll reduce your FICA wages too, because they run through a Section 125 cafeteria plan. Worked examples show the exact dollar gap at different income levels.",
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
      "datePublished": "2026-09-18",
      "dateModified": "2026-09-18",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/hsa-vs-401k-fica-tax-savings-2026"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-hsa-vs-401k';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-hsa-vs-401k');
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
          <span>🩹 Salary & Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          401(k) vs. HSA: Why the Same $500 Doesn&apos;t Save You the Same Amount of Tax
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Every pre-tax deduction guide tells you the order to prioritize: employer match, then HSA, then max the
          rest of your 401(k). Almost none of them show you <em>why</em> HSA ranks above a plain 401(k) dollar for
          dollar beyond &quot;triple tax advantage.&quot; The real, quantifiable reason is narrower and more
          concrete: an HSA contribution made through your employer&apos;s payroll runs through a Section 125
          cafeteria plan, which exempts it from FICA wages too. A 401(k) contribution never does. Same $500,
          same federal bracket, different total tax saved — here&apos;s the exact gap, at different income levels.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
          <p className="text-amber-900 font-semibold">
            ⚠️ Full disclosure: quantcurb&apos;s own Salary Tax Estimator has a 401(k) contribution field and a
            Health Insurance field, but no dedicated HSA input — and its FICA line is computed off your full gross
            pay regardless of either deduction. That&apos;s the correct treatment for a 401(k). It understates the
            real-world benefit of a true payroll HSA contribution, which does reduce FICA wages. See the
            &quot;how to adjust&quot; section below for the by-hand correction.
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">See your federal + FICA baseline first</h3>
              <p className="text-sm text-slate-600">
                Run your salary through the estimator to see your bracket and current FICA withholding, then come
                back here to see exactly how much extra an HSA-via-payroll dollar saves over the same 401(k) dollar.
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
          <li><button onClick={() => scrollToSection('the-mechanism')} className="text-indigo-600 hover:underline">1. Why HSA and 401(k) aren&apos;t treated the same way</button></li>
          <li><button onClick={() => scrollToSection('worked-example')} className="text-indigo-600 hover:underline">2. Worked example: the same $500, two accounts</button></li>
          <li><button onClick={() => scrollToSection('above-the-cap')} className="text-indigo-600 hover:underline">3. What changes once you're above the Social Security wage base</button></li>
          <li><button onClick={() => scrollToSection('the-catch')} className="text-indigo-600 hover:underline">4. The catch: this only works through payroll</button></li>
          <li><button onClick={() => scrollToSection('how-to-adjust')} className="text-indigo-600 hover:underline">5. How to adjust the calculator's output by hand</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">6. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="the-mechanism" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why HSA and 401(k) aren&apos;t treated the same way</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Both accounts let you defer income tax on the dollars you contribute. That part is identical, and it&apos;s
            the part most paycheck-deduction guides stop at. The difference is what each type of deduction does to
            your <strong>FICA wages</strong> — the number Social Security (6.2%) and Medicare (1.45%) are actually
            calculated from:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="font-black text-slate-900 mb-2">401(k) elective deferral</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Excluded from <strong>Box 1</strong> (federal taxable wages) on your W-2. Still fully included in{' '}
                <strong>Box 3</strong> (Social Security wages) and <strong>Box 5</strong> (Medicare wages). You pay
                full FICA on every 401(k) dollar, the same as if you&apos;d taken it as cash.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="font-black text-slate-900 mb-2">HSA contribution via payroll</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Made through your employer&apos;s <strong>Section 125 cafeteria plan</strong>, the same pre-tax
                mechanism that exempts your health insurance premium from payroll tax. Excluded from Box 1{' '}
                <em>and</em> Box 3 <em>and</em> Box 5. You pay no FICA on it at all.
              </p>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Nobody designed this as a &quot;HSA beats 401(k)&quot; feature — it&apos;s a side effect of which section
            of the tax code each account&apos;s pre-tax status comes from. A 401(k) deferral is authorized under
            IRC §401(k) itself, which only ever touches income-tax wages. An employer-sponsored HSA contribution
            rides through IRC §125, which was written broadly enough to also exempt qualifying benefits from
            employment tax. That one difference in which statute does the exempting is the entire gap this piece
            quantifies.
          </p>
        </section>

        <section id="worked-example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: the same $500, two accounts</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Take a single filer with $70,000 in wages — squarely in the 2026 22% federal bracket ($50,401–$105,700)
            and well under the $184,500 Social Security wage base, so the full 7.65% FICA rate applies to every
            additional dollar. Contribute $500 one of two ways:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Where the $500 goes</th>
                  <th className="text-left p-4 font-black text-slate-900">Federal savings (22%)</th>
                  <th className="text-left p-4 font-black text-slate-900">FICA savings (7.65%)</th>
                  <th className="text-left p-4 font-black text-slate-900">Total tax saved</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">401(k)</td>
                  <td className="p-4 font-mono text-slate-900">$110.00</td>
                  <td className="p-4 font-mono text-slate-900">$0.00</td>
                  <td className="p-4 font-mono font-bold text-slate-900">$110.00</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">HSA (via payroll)</td>
                  <td className="p-4 font-mono text-slate-900">$110.00</td>
                  <td className="p-4 font-mono text-slate-900">$38.25</td>
                  <td className="p-4 font-mono font-bold text-indigo-600">$148.25</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Identical contribution, identical bracket, identical intent — and the HSA route saves{' '}
            <strong>$38.25 more</strong>, or 35% more in combined tax savings, purely because of the FICA
            exemption. Scale that to a full year&apos;s HSA contribution and the gap becomes real money: maxing
            the 2026 self-only HSA limit of <strong>$4,400</strong> (IRS Revenue Procedure 2025-19) instead of
            putting the same $4,400 into a 401(k) saves an extra <strong>$336.60</strong> in FICA alone, on top of
            whatever federal and state savings both accounts share equally. Family-coverage filers maxing the
            $8,750 family HSA limit the same way save an extra <strong>$669.38</strong> in FICA.
          </p>
        </section>

        <section id="above-the-cap" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What changes once you&apos;re above the Social Security wage base</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The 7.65% edge above assumes every dollar is still subject to the full Social Security rate. Once your
            wages cross the <strong>$184,500</strong> Social Security wage base for 2026, the 6.2% portion stops
            applying to further income — Social Security is done taking its cut for the year, 401(k) or not. Only
            the uncapped <strong>1.45% Medicare</strong> portion is still live, so the HSA edge shrinks from 7.65%
            to 1.45% of the contribution. If you&apos;re also already past the $200,000 Additional Medicare Tax
            withholding threshold, it&apos;s actually 2.35% (1.45% + 0.9%), since Medicare wages in that band carry
            the extra levy too. Same $500 contribution, single filer at $250,000 in wages — squarely in the 2026
            32% bracket ($201,776–$256,225) and already well past both the Social Security cap and the $200,000
            Additional Medicare Tax threshold:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Where the $500 goes</th>
                  <th className="text-left p-4 font-black text-slate-900">Federal savings (32%)</th>
                  <th className="text-left p-4 font-black text-slate-900">Medicare savings (2.35%)</th>
                  <th className="text-left p-4 font-black text-slate-900">Total tax saved</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">401(k)</td>
                  <td className="p-4 font-mono text-slate-900">$160.00</td>
                  <td className="p-4 font-mono text-slate-900">$0.00</td>
                  <td className="p-4 font-mono font-bold text-slate-900">$160.00</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">HSA (via payroll)</td>
                  <td className="p-4 font-mono text-slate-900">$160.00</td>
                  <td className="p-4 font-mono text-slate-900">$11.75</td>
                  <td className="p-4 font-mono font-bold text-indigo-600">$171.75</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The edge is smaller in dollar terms at this income ($11.75 instead of $38.25) but doesn&apos;t
            disappear — it just tracks whichever FICA rate is still live on your next dollar of wages. The one
            group for whom the gap is largest: anyone whose wages sit entirely below the Social Security wage base,
            where the full 7.65% applies to the whole contribution.
          </p>
        </section>

        <section id="the-catch" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The catch: this only works through payroll</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The FICA exemption is specifically a payroll mechanic, not a property of HSAs in general. If you
            contribute to your HSA directly — writing a check or transferring money yourself, then taking the
            above-the-line deduction on Schedule 1 when you file — you still get the federal (and usually state)
            income-tax deduction, but <strong>you already paid FICA on that money when it was withheld from your
            paycheck as regular wages</strong>. There&apos;s no mechanism to claim it back. The FICA savings this
            piece describes exist only for contributions made by payroll deduction into an employer-sponsored HSA,
            under your employer&apos;s Section 125 plan — the same channel a 401(k) deferral or a pre-tax health
            insurance premium runs through, just with a wider tax exemption attached.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            One more wrinkle worth naming: an employer HSA <em>match</em> or direct employer contribution is
            already outside both employee wages and FICA wages entirely — it was never yours to be taxed on in the
            first place, so it doesn&apos;t factor into either side of this comparison.
          </p>
        </section>

        <section id="how-to-adjust" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to adjust the calculator&apos;s output by hand</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
            <p className="text-amber-900 font-semibold">
              ⚠️ Same honest limitation this site&apos;s other calculator-gap pieces flag: the Salary Tax
              Estimator&apos;s federal calculation is itself an approximation — a single bracket table applied
              without modeling filing status beyond single, and its FICA line always uses your full gross pay. That
              &apos;s correct for a 401(k) deferral. It&apos;s not correct for a true payroll HSA contribution.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">1. Enter your payroll HSA contribution in the Health Insurance field</h3>
              <p className="text-slate-700">Along with your salary and 401(k) percentage. The calculator already treats that field as a federal/state pre-tax deduction, so this step gets the income-tax half of the savings right — it&apos;s the FICA half that still needs a manual correction below.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">2. Add 7.65% of whichever part of the contribution is still under the $184,500 Social Security wage base (1.45–2.35% for the rest)</h3>
              <p className="text-slate-700">If your wages plus the contribution straddle $184,500 — say wages of $184,700 with a $500 contribution — split it: the $300 that&apos;s still under the cap saves the full 7.65%, the remaining $200 only saves the uncapped 1.45% (2.35% if you&apos;re also already past the $200,000 Additional Medicare Tax threshold). That&apos;s the FICA savings the calculator&apos;s Health Insurance field doesn&apos;t capture on its own.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">3. Add that FICA amount to the calculator&apos;s take-home figure</h3>
              <p className="text-slate-700">Your real net pay, with a payroll HSA contribution, is slightly higher than step 1&apos;s output because the calculator&apos;s FICA line doesn&apos;t currently reduce for this deduction type. <strong>California and New Jersey filers:</strong> both states tax HSA contributions — they don&apos;t conform to the federal exclusion — so subtract back the state-tax portion of step 1&apos;s savings before adding the FICA correction; only the federal and FICA savings are real for those two states.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: HSA vs. 401(k) FICA savings</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Does this mean I should put an HSA before my 401(k)?</h3>
              <p className="text-lg text-slate-700">Most standard deduction-ordering guides already put HSA ahead of 401(k) beyond the employer match, for reasons that include this FICA gap plus the HSA&apos;s separate triple-tax-advantage (tax-free growth and tax-free qualified withdrawals, which a traditional 401(k) doesn&apos;t offer). This piece isn&apos;t reordering that advice — it&apos;s quantifying the one piece of it (the FICA difference) that&apos;s rarely put in dollar terms.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Does a Roth 401(k) change this?</h3>
              <p className="text-lg text-slate-700">No. Roth 401(k) contributions are already after-tax for federal income tax, and like traditional 401(k) contributions, they were never exempt from FICA either way. The FICA comparison in this piece is specifically about pre-tax payroll deductions, which only the HSA (and a traditional 401(k), for federal tax only) qualifies as.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">What about an FSA — does it get the same FICA break?</h3>
              <p className="text-lg text-slate-700">Yes. A Flexible Spending Account also runs through the Section 125 cafeteria plan, so payroll FSA contributions are exempt from FICA wages the same way an HSA is. The mechanism in this piece applies to any true Section 125 benefit, not HSAs specifically — HSA is simply the one most often compared directly against a 401(k) in \"where should my next dollar go\" advice.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Why doesn&apos;t quantcurb&apos;s calculator just model this?</h3>
              <p className="text-lg text-slate-700">The calculator&apos;s current Health Insurance field is a flat annual dollar amount with no way to distinguish a true Section 125 payroll deduction from a different kind of pre-tax arrangement, and correctly modeling it means splitting the FICA line into a separate, deduction-aware calculation rather than the single gross-pay formula it uses today — which is why this piece exists as the honest interim answer instead of quietly getting it wrong.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default HSAvs401kFICASavings2026;

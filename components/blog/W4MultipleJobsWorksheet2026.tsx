import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const W4MultipleJobsWorksheet2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "W-4 Multiple Jobs Worksheet Decoded: Checkbox vs. Worksheet vs. Estimator",
      "description": "Decision tree for the three IRS multiple-jobs withholding methods, with worked two-income examples.",
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
      "datePublished": "2026-09-01",
      "dateModified": "2026-09-01",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/w4-multiple-jobs-worksheet-decoded"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-w4-multiple-jobs';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-w4-multiple-jobs');
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
          <span>⏱️ 11 min read</span>
          <span>•</span>
          <span>💸 Salary & Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The W-4 Multiple Jobs Worksheet, Decoded: Checkbox vs. Worksheet vs. IRS Estimator
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Step 2 of the W-4 gives you three ways to handle a two-income household, and the form itself
          doesn&apos;t tell you which one actually fits your numbers. Here&apos;s the decision tree, plus two
          fully worked examples so you can see why the same household can get very different results from
          each method.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">See the extra withholding on your own paycheck</h3>
              <p className="text-sm text-slate-600">
                Run your actual combined household income through the Salary Tax Estimator to check whether
                your current W-4 setup is under- or over-withholding.
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
          <li><button onClick={() => scrollToSection('three-options')} className="text-indigo-600 hover:underline">1. The three options on Step 2</button></li>
          <li><button onClick={() => scrollToSection('decision-tree')} className="text-indigo-600 hover:underline">2. Which one fits your household</button></li>
          <li><button onClick={() => scrollToSection('worksheet-example')} className="text-indigo-600 hover:underline">3. Worked example: two different pay levels</button></li>
          <li><button onClick={() => scrollToSection('checkbox-example')} className="text-indigo-600 hover:underline">4. Worked example: two similar-pay jobs</button></li>
          <li><button onClick={() => scrollToSection('mistake')} className="text-indigo-600 hover:underline">5. The mistake that undoes all of this</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">6. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="three-options" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The three options on Step 2</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If your household has more than one job between you and a spouse — or you personally work two jobs —
            the W-4&apos;s default single-job math under-withholds, because each employer calculates as if theirs
            is your only paycheck. Step 2 gives you three fixes, and the IRS deliberately doesn&apos;t rank them
            for you:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Option</th>
                  <th className="text-left p-4 font-black text-slate-900">How it works</th>
                  <th className="text-left p-4 font-black text-slate-900">Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">(a) IRS Tax Withholding Estimator</td>
                  <td className="p-4 text-slate-700">Online tool computes an exact extra-withholding dollar amount; you enter it on Line 4(c) of the highest-paying job&apos;s W-4.</td>
                  <td className="p-4 text-slate-700">Highest</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">(b) Multiple Jobs Worksheet</td>
                  <td className="p-4 text-slate-700">Manual lookup-table calculation on page 3 of the W-4; result also goes on Line 4(c) of the highest-paying job.</td>
                  <td className="p-4 text-slate-700">High, more effort</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">(c) Step 2(c) checkbox</td>
                  <td className="p-4 text-slate-700">Both spouses (or both jobs) check the &quot;two jobs&quot; box. No lookup, no dollar entry.</td>
                  <td className="p-4 text-slate-700">Lowest — assumes similar pay</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            All three exist because they trade off effort against precision. The checkbox takes ten seconds but
            only works cleanly when both jobs pay about the same. The other two take longer but adjust for the
            actual gap between what the two jobs pay.
          </p>
        </section>

        <section id="decision-tree" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Which one fits your household</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Work through these in order — the first one that applies is the one to use:
          </p>
          <div className="space-y-4">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
              <p className="text-emerald-900 font-semibold">
                Exactly two jobs total in the household, and the lower-paying one earns within roughly 15% of
                the higher-paying one → check the Step 2(c) box on both W-4s. The approximation error is small
                enough not to matter.
              </p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <p className="text-amber-900 font-semibold">
                Two jobs, but the pay gap is wide (one earns meaningfully more than the other) → use the
                Multiple Jobs Worksheet or the IRS Estimator. The checkbox will over-withhold the lower earner
                and can still under-withhold the household overall — see the worked example below.
              </p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <p className="text-amber-900 font-semibold">
                Three or more jobs in the household → the checkbox isn&apos;t available at all. Use the
                worksheet or the Estimator.
              </p>
            </div>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
              <p className="text-indigo-900 font-semibold">
                Want the least manual math regardless of the above → the IRS Estimator does the same job as the
                worksheet but runs the actual numbers for you instead of a lookup table, and it can also account
                for other income, credits, and deductions the worksheet ignores.
              </p>
            </div>
          </div>
        </section>

        <section id="worksheet-example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: two different pay levels</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Take a married couple filing jointly: Spouse A earns <strong>$85,000</strong> at the higher-paying
            job, Spouse B earns <strong>$42,000</strong> at the lower-paying job. That&apos;s a wide enough gap
            (roughly 2-to-1) that the Step 2(c) checkbox is the wrong tool here.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Here&apos;s the shape of the worksheet, using the 2026 Multiple Jobs Worksheet on page 3 of the
            W-4 and its Married Filing Jointly lookup table on page 4:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Worksheet step</th>
                  <th className="text-left p-4 font-black text-slate-900">What you do</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">1</td>
                  <td className="p-4 text-slate-700">Find the row for the higher earner&apos;s wage band ($85,000) and the column for the lower earner&apos;s wage band ($42,000) in the Married Filing Jointly table — this gives an estimated annual additional-withholding amount.</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">2</td>
                  <td className="p-4 text-slate-700">Divide that annual figure by the number of pay periods for the higher earner&apos;s job (26 for biweekly, 24 for semi-monthly, 52 for weekly).</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">3</td>
                  <td className="p-4 text-slate-700">Enter that per-paycheck number on Line 4(c) of <strong>Spouse A&apos;s</strong> W-4 (the higher-paying job) — never split it across both jobs, and never enter it on the lower earner&apos;s form.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The exact dollar figure from Line 1 depends on the current-year IRS tables, which update annually —
            look up your own two wage bands directly on the current W-4&apos;s page 4, or let the IRS Estimator
            run the same calculation without the manual lookup. The mechanism is what matters here: the extra
            withholding is sized to <em>this specific pay gap</em>, which is exactly what the flat checkbox
            can&apos;t do. If this couple had instead checked the Step 2(c) box, both employers would withhold
            as if each job paid the household&apos;s <em>combined</em> $127,000 — over-withholding Spouse B&apos;s
            paycheck substantially relative to what Spouse B alone earns, while Spouse A&apos;s withholding would
            still land close to correct. Combined, that&apos;s not necessarily wrong at filing time, but it can
            noticeably shrink Spouse B&apos;s take-home pay all year for no filing-time benefit — the worksheet
            (or Estimator) targets the shortfall more precisely by adding the adjustment on one job only.
          </p>
        </section>

        <section id="checkbox-example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: two similar-pay jobs</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Now take a couple where Spouse A earns <strong>$58,000</strong> and Spouse B earns <strong>$62,000</strong>
            — an 8% gap. Here the checkbox is the right call: both employers withhold as though the job pays the
            household&apos;s combined $120,000, which is close enough to each spouse&apos;s actual share (roughly
            48% and 52%) that the approximation doesn&apos;t meaningfully over- or under-withhold either paycheck.
            No lookup table, no Line 4(c) entry — check the box on both W-4s and the math takes care of itself.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold">
              ✅ Rule of thumb: if the lower-paying job earns within about 15% of the higher-paying job, the
              checkbox&apos;s built-in assumption of equal pay holds up well enough. Outside that range, the gap
              between assumption and reality is what shows up as a withholding surprise at filing time.
            </p>
          </div>
        </section>

        <section id="mistake" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The mistake that undoes all of this</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Whichever option you pick, it&apos;s a snapshot of your household&apos;s income <em>at the time you
            filled out the form</em>. The most common way this breaks: one spouse changes jobs, gets a raise that
            shifts the pay gap, or stops working entirely — and nobody updates the W-4s. A checkbox that was
            correct at $58k/$62k stops being correct if one job jumps to $80k. Re-run the decision tree (or the
            Estimator) any time either job&apos;s pay changes materially, not just once a year.
          </p>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: multiple-jobs withholding</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Can I check the Step 2(c) box with three jobs in the household?</h3>
              <p className="text-lg text-slate-700">No — the checkbox is only available when there are exactly two jobs total between you and a spouse. With three or more, use the worksheet or the IRS Estimator.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Do both spouses need to check the box, or just one?</h3>
              <p className="text-lg text-slate-700">Both. The Step 2(c) checkbox only produces the intended withholding when it&apos;s checked on both jobs&apos; W-4 forms.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Which job gets the Multiple Jobs Worksheet dollar amount — the higher- or lower-paying one?</h3>
              <p className="text-lg text-slate-700">The higher-paying job. Enter the extra per-paycheck amount on Line 4(c) of that job&apos;s W-4 only, and leave the lower-paying job&apos;s Step 2, 3, and 4 blank.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Is the IRS Estimator more accurate than the worksheet?</h3>
              <p className="text-lg text-slate-700">Generally yes — it runs the calculation directly instead of using a wage-band lookup table, and it can factor in other income, credits, and deductions the paper worksheet doesn&apos;t ask about.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default W4MultipleJobsWorksheet2026;

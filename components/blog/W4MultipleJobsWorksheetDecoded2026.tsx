import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const W4MultipleJobsWorksheetDecoded2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The W-4 Multiple Jobs Worksheet, Decoded: Checkbox vs. Worksheet vs. IRS Estimator",
      "description": "Three IRS-sanctioned ways to fill out a W-4 for two incomes: checkbox, worksheet, or estimator. A decision tree with worked examples from the 2026 IRS tables.",
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
      "datePublished": "2026-08-29",
      "dateModified": "2026-08-29",
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
          <span>📅 Updated August 2026</span>
          <span>•</span>
          <span>⏱️ 12 min read</span>
          <span>•</span>
          <span>💸 Salary & Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The W-4 Multiple Jobs Worksheet, Decoded: Checkbox vs. Worksheet vs. IRS Estimator
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Step 2 of Form W-4 gives two-income households three ways to handle multiple jobs — a checkbox, a
          worksheet, or an online estimator — and the IRS instructions don&apos;t tell you which one fits{' '}
          <em>your</em> household. Here&apos;s the decision tree, plus two full worked examples using the actual 2026
          IRS withholding tables.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">See your real take-home pay first</h3>
              <p className="text-sm text-slate-600">
                Run each spouse&apos;s salary through the calculator before touching a W-4 — you need real numbers to use the decision tree below.
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
          <li><button onClick={() => scrollToSection('three-options')} className="text-indigo-600 hover:underline">1. The three IRS-sanctioned options</button></li>
          <li><button onClick={() => scrollToSection('decision-tree')} className="text-indigo-600 hover:underline">2. The decision tree: which one fits your household</button></li>
          <li><button onClick={() => scrollToSection('example-similar')} className="text-indigo-600 hover:underline">3. Worked example: similar pay, checkbox works</button></li>
          <li><button onClick={() => scrollToSection('example-gap')} className="text-indigo-600 hover:underline">4. Worked example: big pay gap, worksheet wins</button></li>
          <li><button onClick={() => scrollToSection('three-jobs')} className="text-indigo-600 hover:underline">5. What changes with three jobs</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">6. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="three-options" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The three IRS-sanctioned options</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you have more than one job at a time, or you&apos;re married filing jointly and you and your spouse
            both work, <a href="https://www.irs.gov/pub/irs-pdf/fw4.pdf" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Step 2 of the 2026 Form W-4</a> gives
            you exactly three ways to tell your employer how much extra to withhold. The instructions rank their
            own accuracy — they just don&apos;t tell you which one is worth the extra effort for your specific numbers.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Option</th>
                  <th className="text-left p-4 font-black text-slate-900">What it is</th>
                  <th className="text-left p-4 font-black text-slate-900">IRS accuracy ranking</th>
                  <th className="text-left p-4 font-black text-slate-900">Effort</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">(a) Online estimator</td>
                  <td className="p-4 text-slate-700">The <a href="https://www.irs.gov/W4App" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Tax Withholding Estimator</a> at irs.gov/W4App</td>
                  <td className="p-4 text-slate-700">Most accurate</td>
                  <td className="p-4 text-slate-700">10-15 min, needs recent pay stubs</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">(b) Multiple Jobs Worksheet</td>
                  <td className="p-4 text-slate-700">A lookup-table calculation on page 3 of the form, kept for your records</td>
                  <td className="p-4 text-slate-700">Slightly less accurate</td>
                  <td className="p-4 text-slate-700">5 min, one table lookup</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">(c) Checkbox</td>
                  <td className="p-4 text-slate-700">Check a single box in Step 2(c) — no math at all</td>
                  <td className="p-4 text-slate-700">Accurate only for similar pay</td>
                  <td className="p-4 text-slate-700">30 seconds</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
            <p className="text-amber-900 font-semibold">
              ⚠️ The checkbox is only available at all if you (and your spouse, if applicable) have a total of
              exactly two jobs — and it must be checked on <em>both</em> W-4s. Three or more jobs between you
              skips straight to the worksheet or the estimator.
            </p>
          </div>
        </section>

        <section id="decision-tree" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The decision tree: which one fits your household</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The IRS instructions put it plainly: the checkbox &quot;is accurate for jobs with similar pay; otherwise,
            more tax than necessary may be withheld, and this extra amount of tax withheld will be larger the
            greater the difference in pay is between the two jobs.&quot; That&apos;s the whole decision, once you
            translate it into a number you can check against your own two paychecks.
          </p>

          <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-5">
            <div className="flex gap-4 items-start">
              <span className="text-2xl font-black text-indigo-400 flex-none">1</span>
              <p className="text-slate-200">
                <strong className="text-white">How many jobs total, across both spouses?</strong> Three or more →
                skip to the <button onClick={() => scrollToSection('three-jobs')} className="text-indigo-400 hover:underline">three-jobs section</button> below.
                Exactly two → continue.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl font-black text-indigo-400 flex-none">2</span>
              <p className="text-slate-200">
                <strong className="text-white">Does either job pay more than $120,000/year, or does your
                situation change mid-year</strong> (new job, new baby, dividends, bonuses, self-employment
                income)? If yes, the IRS itself recommends option (a), the online estimator — the lookup tables
                used by the worksheet stop at $120,000 and don&apos;t account for outside income at all.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl font-black text-indigo-400 flex-none">3</span>
              <p className="text-slate-200">
                <strong className="text-white">Otherwise, compare the two salaries.</strong> A commonly used rule
                of thumb — not the IRS&apos;s own wording, but consistent with its &quot;similar pay&quot; standard — is
                whether the lower-paying job earns <em>more than half</em> of the higher-paying job. Close to that
                or above it: the checkbox is a reasonable simplification. Well below it: the gap is exactly what
                the IRS warns will over-withhold, so run the worksheet instead — it only costs you five minutes
                and one table lookup.
              </p>
            </div>
          </div>
        </section>

        <section id="example-similar" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: similar pay, checkbox works</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A married couple filing jointly: <strong>$85,000</strong> and <strong>$78,000</strong>. The lower salary
            is 92% of the higher one — well inside &quot;similar pay.&quot; Both spouses check the box in Step 2(c) on
            their own W-4s, submit them, and stop. The standard deduction and tax brackets get split in half for
            each job&apos;s withholding calculation, which lines up closely with reality precisely because neither
            job dominates the household&apos;s income. No worksheet, no extra Step 4(c) entry, no online tool.
          </p>
        </section>

        <section id="example-gap" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: big pay gap, worksheet wins</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Same filing status, very different math: <strong>$150,000</strong> and <strong>$35,000</strong>. The
            lower salary is only 23% of the higher one — checking the box here would apply half the standard
            deduction and half the tax brackets to each job as if they were two roughly equal incomes, when in
            fact the $150,000 earner sits in a much higher bracket once the household&apos;s income is combined on
            one return. That mismatch is exactly what over-withholds. Here&apos;s the Multiple Jobs Worksheet, run
            against the actual 2026 IRS table for Married Filing Jointly:
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-indigo-600 w-12">1</td>
                  <td className="p-4 text-slate-700">Higher-paying job&apos;s annual wages</td>
                  <td className="p-4 font-mono text-slate-900 text-right">$150,000</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">2</td>
                  <td className="p-4 text-slate-700">Lower-paying job&apos;s annual wages</td>
                  <td className="p-4 font-mono text-slate-900 text-right">$35,000</td>
                </tr>
                <tr className="border-b border-slate-100 bg-indigo-50">
                  <td className="p-4 font-bold text-indigo-600">3</td>
                  <td className="p-4 text-slate-700">
                    Table lookup: row &quot;$150,000–239,999&quot; (higher job) × column &quot;$30,000–39,999&quot; (lower job)
                  </td>
                  <td className="p-4 font-mono text-slate-900 text-right font-bold">$8,270</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">4</td>
                  <td className="p-4 text-slate-700">Pay periods per year for the higher-paying job (biweekly)</td>
                  <td className="p-4 font-mono text-slate-900 text-right">26</td>
                </tr>
                <tr className="bg-emerald-50">
                  <td className="p-4 font-bold text-emerald-700">5</td>
                  <td className="p-4 text-slate-900 font-semibold">Extra withholding per paycheck ($8,270 ÷ 26)</td>
                  <td className="p-4 font-mono text-emerald-800 text-right font-bold">$318.08</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold">
              ✅ The $150,000 earner enters $318.08 in Step 4(c) of their own W-4 — not the lower earner&apos;s — and
              leaves Steps 3 and 4(b) blank on the $35,000 job&apos;s form, per the IRS&apos;s own instruction to complete
              those steps on only the highest-paying job.
            </p>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            If either paycheck comes weekly instead of biweekly, use 52 in row 4 instead of 26; monthly is 12.
            The $8,270 figure itself doesn&apos;t change — only how it&apos;s split across paychecks.
          </p>
        </section>

        <section id="three-jobs" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What changes with three jobs</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The checkbox disappears entirely once a household has three jobs running at once — it&apos;s only
            offered for exactly two. The worksheet adds two extra lines: look up the two highest-paying jobs
            against each other first (line 2a), then add their combined wages together and look that total up
            against the third, lowest-paying job (line 2b), then add 2a and 2b together (line 2c) before dividing
            by pay periods as before. Past $120,000 on more than one job, or more than three jobs total, the
            worksheet&apos;s own instructions send you to the online estimator instead — there&apos;s no printed table
            for those combinations.
          </p>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: W-4 multiple jobs</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Do both spouses need to check the box, or just one?</h3>
              <p className="text-lg text-slate-700">Both. The IRS instructions require the box checked on the W-4 for each of the two jobs, not just one.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Can I switch from the checkbox to the worksheet later?</h3>
              <p className="text-lg text-slate-700">Yes — submit a new W-4 to your employer any time your situation changes. There&apos;s no limit on how often you can update it.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">What if I don&apos;t want to tell my employer about my spouse&apos;s income?</h3>
              <p className="text-lg text-slate-700">The W-4&apos;s own privacy note covers this: skip Step 2(c) and instead add your own extra withholding estimate directly in Step 4(c), without revealing the other job&apos;s pay to either employer.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Which option actually gets me closest to owing $0 at filing?</h3>
              <p className="text-lg text-slate-700">The online estimator, per the IRS&apos;s own ranking — it accounts for bonuses, dividends, and mid-year changes the printed worksheet tables can&apos;t. The worksheet is the best paper-only option; the checkbox is the best zero-math option, but only when pay is genuinely close.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default W4MultipleJobsWorksheetDecoded2026;

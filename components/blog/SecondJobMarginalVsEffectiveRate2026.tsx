import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const SecondJobMarginalVsEffectiveRate2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Second Job, Same Bracket Fear: Why Crossing a Tax Bracket Doesn't Cost What You Think",
      "description": "Taking a second job can push your combined income into a higher tax bracket, but that doesn't mean your first job's pay gets retaxed at the new rate. A worked example showing exactly what a second job costs in tax, and a framework for deciding if it's worth it.",
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
      "datePublished": "2026-09-03",
      "dateModified": "2026-09-03",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/second-job-marginal-vs-effective-rate"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-second-job-marginal-rate';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-second-job-marginal-rate');
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
          <span>💸 Salary & Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Second Job, Same Bracket Fear: Why Crossing a Tax Bracket Doesn&apos;t Cost What You Think
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          &quot;I turned down the second job because it would push me into a higher bracket&quot; is one of the most
          common — and most expensive — misreadings of the tax code. Crossing into a new bracket is real. What
          people get wrong is what it actually costs. Here&apos;s the worked math, not the folklore.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Run your own numbers before deciding</h3>
              <p className="text-sm text-slate-600">
                Enter your current salary to see your actual bracket and effective rate, then add the second
                job&apos;s pay separately to see exactly how much of it lands in a higher bracket — if any does.
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
          <li><button onClick={() => scrollToSection('the-fear')} className="text-indigo-600 hover:underline">1. The fear, stated plainly</button></li>
          <li><button onClick={() => scrollToSection('how-brackets-work')} className="text-indigo-600 hover:underline">2. Brackets tax slices of income, not all of it</button></li>
          <li><button onClick={() => scrollToSection('worked-example')} className="text-indigo-600 hover:underline">3. Worked example: myth vs. reality on a real second job</button></li>
          <li><button onClick={() => scrollToSection('what-you-keep')} className="text-indigo-600 hover:underline">4. What you actually keep from the new paycheck</button></li>
          <li><button onClick={() => scrollToSection('decision-framework')} className="text-indigo-600 hover:underline">5. Is it worth it? A framework, not a vibe</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">6. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="the-fear" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The fear, stated plainly</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Someone earning $95,000 a year is offered a second job — a side contract, a part-time gig, a spouse
            going back to work — paying another $50,000. Their combined income of $145,000 now reaches into the
            24% federal bracket, one step above the 22% bracket their $95,000 sat in alone. The fear: <em>&quot;now
            everything I make gets taxed at 24% instead of 22% — is the second job even worth it after taxes?&quot;</em>
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            That fear treats a marginal bracket like a flat tax rate applied retroactively to every dollar you
            earn. It isn&apos;t. The U.S. federal income tax is a marginal system: each bracket only taxes the
            slice of income that falls inside it. Nothing about earning more moves your <em>existing</em> income
            into a higher bracket — only the new, additional income can reach the higher rate, and usually only
            part of it does.
          </p>
        </section>

        <section id="how-brackets-work" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Brackets tax slices of income, not all of it</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Using the 2026 federal brackets for a single filer (finalized by the IRS in Revenue Procedure 2025-32;
            the thresholds shift a little each year for inflation, but the mechanism below doesn&apos;t change):
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Rate</th>
                  <th className="text-left p-4 font-black text-slate-900">Taxable income (single filer)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">10%</td><td className="p-4 text-slate-700">$0 – $12,400</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">12%</td><td className="p-4 text-slate-700">$12,400 – $50,400</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">22%</td><td className="p-4 font-bold text-indigo-600">$50,400 – $105,700</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-emerald-700">24%</td><td className="p-4 font-bold text-emerald-700">$105,700 – $201,775</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">32% – 37%</td><td className="p-4 text-slate-700">$201,775 and up</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            A single filer with $80,000 of taxable income (after the standard deduction) sits in the 22% bracket —
            but only the portion of their income above $50,400 is actually taxed at 22%. Everything from $0 to
            $12,400 is still taxed at 10%, and everything from $12,400 to $50,400 is still taxed at 12%, exactly
            as it always was. Their <strong>marginal rate</strong> (the rate on their next dollar) is 22%. Their{' '}
            <strong>effective rate</strong> (total tax ÷ total income) is much lower, because most of their income
            was taxed at the cheaper rates below it.
          </p>
        </section>

        <section id="worked-example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: myth vs. reality on a real second job</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Take the scenario from the intro: a single filer earning <strong>$95,000</strong> from a primary job,
            considering a second job paying <strong>$50,000</strong>. The 2026 standard deduction of $16,100
            applies once, against the combined income. Alone, the $95,000 job produces $78,900 of taxable income —
            squarely in the 22% bracket, with a federal tax bill of <strong>$12,070</strong> (an effective rate of
            12.7% on the $95,000 gross).
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Add the $50,000 second job: combined gross is $145,000, taxable income is $128,900 — which does cross
            into the 24% bracket, by $23,200. Here&apos;s the myth against the real number, with the standard
            deduction applied the same way in both rows so the comparison isn&apos;t stacking two separate errors:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Assumption</th>
                  <th className="text-left p-4 font-black text-slate-900">Total federal tax</th>
                  <th className="text-left p-4 font-black text-slate-900">Take-home</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100 bg-red-50">
                  <td className="p-4 text-slate-900 font-semibold">Myth: crossing into 24% means all $128,900 of taxable income is taxed at 24%</td>
                  <td className="p-4 font-mono text-red-800 text-right font-bold">$30,936</td>
                  <td className="p-4 font-mono text-red-800 text-right font-bold">$114,064</td>
                </tr>
                <tr className="border-t border-slate-100 bg-emerald-50">
                  <td className="p-4 text-slate-900 font-semibold">Reality: only the $23,200 above $105,700 is taxed at 24%; every dollar below keeps its own bracket&apos;s rate</td>
                  <td className="p-4 font-mono text-emerald-800 text-right font-bold">$23,534</td>
                  <td className="p-4 font-mono text-emerald-800 text-right font-bold">$121,466</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
            <p className="text-amber-900 font-semibold">
              ⚠️ The myth overstates the tax bill by <strong>$7,402</strong> — even with the standard deduction
              applied the same way on both sides, it treats the entire $128,900 of taxable income as though it
              were retroactively re-taxed at the new top rate, when in fact the original $78,900 of it keeps the
              exact tax treatment it always had. This is the same &quot;the new rate applies to everything&quot;
              confusion behind the withholding myths around bonuses and overtime pay — crossing a bracket boundary
              only ever taxes the slice of income above the boundary, never the income already below it.
            </p>
          </div>
        </section>

        <section id="what-you-keep" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What you actually keep from the new paycheck</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The more useful question isn&apos;t &quot;what bracket am I in now&quot; — it&apos;s &quot;what does the{' '}
            <em>new</em> income actually cost me, and what do I keep.&quot; Isolate just the $50,000 second job:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-indigo-600 w-12">1</td>
                  <td className="p-4 text-slate-700">Federal tax with just the primary job ($78,900 taxable)</td>
                  <td className="p-4 font-mono text-slate-900 text-right">$12,070</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">2</td>
                  <td className="p-4 text-slate-700">Federal tax with both jobs combined ($128,900 taxable)</td>
                  <td className="p-4 font-mono text-slate-900 text-right">$23,534</td>
                </tr>
                <tr className="border-b border-slate-100 bg-indigo-50">
                  <td className="p-4 font-bold text-indigo-600">3</td>
                  <td className="p-4 text-slate-700">Federal tax actually caused by the second job (row 2 − row 1)</td>
                  <td className="p-4 font-mono text-slate-900 text-right font-bold">$11,464</td>
                </tr>
                <tr className="bg-emerald-50">
                  <td className="p-4 font-bold text-emerald-700">4</td>
                  <td className="p-4 text-slate-900 font-semibold">Take-home from the $50,000 second job ($50,000 − $11,464)</td>
                  <td className="p-4 font-mono text-emerald-800 text-right font-bold">$38,536</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The second job&apos;s <strong>blended federal rate</strong> comes out to 22.9% — a mix of the 22% that
            still applies to $26,800 of it and the 24% that applies to the remaining $23,200 above the bracket
            line — not a flat 24% on the whole $50,000. This is federal income tax only: state tax, and FICA
            or self-employment tax if the second job is 1099 work, are separate costs on top of this and belong in
            the full comparison before deciding.
          </p>
        </section>

        <section id="decision-framework" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Is it worth it? A framework, not a vibe</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            &quot;Is a second job worth it after taxes&quot; isn&apos;t answered by which bracket you land in — it&apos;s
            answered by running these four checks in order:
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">1. Find your current taxable income and top bracket</h3>
              <p className="text-slate-700">Gross income minus the standard (or itemized) deduction. That number, not gross pay, is what determines which bracket you&apos;re already in.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">2. Check how much of the new income actually crosses a bracket line</h3>
              <p className="text-slate-700">Add the second job&apos;s pay to your taxable income. If the total stays under the next bracket&apos;s threshold, none of it is taxed at a higher rate — the fear doesn&apos;t even apply. If it crosses, only the amount above the threshold does.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">3. Compute the blended rate on the new income only, not your whole income</h3>
              <p className="text-slate-700">As above: (tax with both incomes − tax with just the first) ÷ the new income. That percentage, applied only to the new money, is the real cost — never apply the new top bracket to income you were already earning.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">4. Add what the federal bracket math leaves out</h3>
              <p className="text-slate-700">State income tax (if your state has one), FICA at 7.65% if it&apos;s a second W-2 job, or the full 15.3% self-employment tax if it&apos;s 1099 work — plus whether the extra income phases out any credits you currently claim. None of that shows up in the federal bracket table, and all of it changes the real take-home number.</p>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            One more practical note: taking a second W-2 job creates the withholding coordination problem covered
            elsewhere on this site — each employer withholds as if their paycheck is your only income, so your
            combined withholding usually runs short even though your total tax bill (the number worked out above)
            is correct. That&apos;s a cash-flow and W-4 filing issue, not a reason the second job costs more than
            the math here shows.
          </p>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: second jobs and tax brackets</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Can a second job ever actually leave me with less money than before?</h3>
              <p className="text-lg text-slate-700">Not from federal income tax alone — every additional dollar of ordinary wage income is still taxed at less than 100%, so it always increases take-home pay in isolation. The real risk of a net loss comes from side effects: losing an income-capped credit or subsidy (like ACA premium tax credits), or, for a 1099 second job, business costs that exceed the extra income.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Does this work the same way for a raise instead of a second job?</h3>
              <p className="text-lg text-slate-700">Yes — a raise that pushes your salary into a new bracket follows the identical mechanism: only the portion of your new salary above the threshold is taxed at the higher rate. The math in this piece applies to any added income, not just a second employer.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Why does my paycheck withholding look like it's taxing the second job at a higher rate?</h3>
              <p className="text-lg text-slate-700">Payroll withholding tables are a rough estimate based on that one paycheck's pace of pay, not your actual annual bracket math — a second job's withholding often runs high (or a first job's runs low once combined) even when the year-end tax bill matches the numbers here exactly.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Do state taxes work the same marginal way?</h3>
              <p className="text-lg text-slate-700">Most states with a graduated income tax use the same marginal-bracket mechanism as the federal system. A handful of states use a flat rate instead, where every dollar is taxed identically regardless of total income — check your specific state before assuming the federal pattern applies.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default SecondJobMarginalVsEffectiveRate2026;

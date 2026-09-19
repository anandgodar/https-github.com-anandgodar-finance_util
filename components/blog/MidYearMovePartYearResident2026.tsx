import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const MidYearMovePartYearResident2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Moved Mid-Year? The Part-Year-Resident Withholding Problem No Calculator Warns You About",
      "description": "Working in two states in the same year isn't just 'file two returns.' Many states tax your new-state income at a rate set by your full-year income, not just what you earned there. A worked example and a moving-week checklist.",
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
      "datePublished": "2026-09-19",
      "dateModified": "2026-09-19",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/mid-year-move-part-year-resident-tax-guide-2026"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-midyear-move';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-midyear-move');
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
          Moved Mid-Year? The Part-Year-Resident Withholding Problem No Calculator Warns You About
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          &quot;Just calculate each state separately&quot; is the advice you&apos;ll find almost everywhere on a
          literal interstate move. It&apos;s also missing the one mechanic that actually surprises people: several
          states with graduated tax brackets don&apos;t look at your new-state income in isolation. They look at
          your <em>whole year&apos;s</em> income to decide what rate applies, then tax only the slice you earned as
          a resident. That can mean a higher effective rate on the new state&apos;s income than a standalone
          calculation would suggest — and it&apos;s different from anything covered by reciprocity or a
          remote-work sourcing rule.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Estimate each state's liability separately first</h3>
              <p className="text-sm text-slate-600">
                Run the calculator once for your old state on the income you earned there, and once for your new
                state on the income you earned there — that gives you the two raw numbers this piece shows you how
                to actually combine, instead of just adding them together.
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
          <li><button onClick={() => scrollToSection('not-the-same')} className="text-indigo-600 hover:underline">1. Why this isn&apos;t the reciprocity or remote-work question</button></li>
          <li><button onClick={() => scrollToSection('two-methods')} className="text-indigo-600 hover:underline">2. Two ways states tax a part-year resident, and why the difference matters</button></li>
          <li><button onClick={() => scrollToSection('worked-example')} className="text-indigo-600 hover:underline">3. Worked example: the same $90,000 taxed two different ways</button></li>
          <li><button onClick={() => scrollToSection('checklist')} className="text-indigo-600 hover:underline">4. The first-paycheck-after-a-move checklist</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">5. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="not-the-same" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why this isn&apos;t the reciprocity or remote-work question</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            It&apos;s easy to lump every multi-state paycheck question together, but a literal move changes which
            question you&apos;re actually asking:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Situation</th>
                  <th className="text-left p-4 font-black text-slate-900">What&apos;s actually being decided</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Remote for an out-of-state employer, never moved</td>
                  <td className="p-4 text-slate-700">Sourcing: does the employer&apos;s state get to tax income earned entirely from your home state? (Reciprocity and the convenience-of-the-employer rule.)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Comparing two states before a possible move</td>
                  <td className="p-4 text-slate-700">Cost of living and full-year tax exposure if you lived in state A vs. state B all year — a planning comparison, not a mid-year filing mechanic.</td>
                </tr>
                <tr className="border-t border-slate-100 bg-indigo-50">
                  <td className="p-4 font-bold text-indigo-600">Actually relocated partway through the year</td>
                  <td className="p-4 text-slate-900 font-semibold">Residency: you were a resident of state A for part of the year and state B for the rest, and each state's own part-year mechanics decide how much of your total income it gets to tax, and at what rate.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            That third row is this piece. Nothing here changes if you also work remotely part of the time — this is
            about residency status changing mid-year, not about where the work was physically performed.
          </p>
        </section>

        <section id="two-methods" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Two ways states tax a part-year resident, and why the difference matters</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Every state with a part-year resident category taxes you as a full resident on income earned while you
            lived there, and (if it has an income tax at all) on its own in-state-source income for the rest of the
            year. That part is universal and not the trap. The trap is <em>which tax rate</em> gets applied to the
            income earned during the resident period, and here the mechanics genuinely differ:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Method</th>
                  <th className="text-left p-4 font-black text-slate-900">How the rate is set</th>
                  <th className="text-left p-4 font-black text-slate-900">Documented example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Full-year-rate method</td>
                  <td className="p-4 text-slate-700">Compute the tax on your <em>entire year&apos;s income from everywhere</em>, as if you&apos;d lived there all year, to find which brackets that income touches — then apply only the share of that tax equal to (income earned there ÷ total income for the year).</td>
                  <td className="p-4 text-slate-700">California&apos;s Schedule CA (540NR): total income sets the bracket exposure, then a ratio applies it to the California-source share.</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Direct-allocation method</td>
                  <td className="p-4 text-slate-700">Tax only the income actually earned/sourced there, run through that state&apos;s brackets on its own, with no reference to what you earned elsewhere in the year.</td>
                  <td className="p-4 text-slate-700">New York&apos;s IT-203-B allocates wages by where the work was physically performed for the resident vs. nonresident period.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
            <p className="text-amber-900 font-semibold">
              ⚠️ Under the full-year-rate method, a raise or a new, higher-paying job that came with the move can
              push the tax rate on your new state&apos;s income higher than the same dollar amount would face if it
              were your only income for the year. This isn&apos;t a penalty for moving — it&apos;s the same logic
              graduated brackets use for anyone: your marginal rate is set by your total income, and a part-year
              resident&apos;s total income for that state&apos;s bracket test still means your total income for the
              full year, not just the months you lived there.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Which method your specific old and new state each use is exactly the kind of detail that&apos;s easy to
            get wrong from memory — check the part-year resident instructions for each state&apos;s own return
            (usually a form named something like &quot;Nonresident and Part-Year Resident,&quot; e.g. Form 540NR or
            IT-203) rather than assuming either mechanic applies.
          </p>
        </section>

        <section id="worked-example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: the same $90,000 taxed two different ways</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A single filer earns <strong>$60,000</strong> in a flat-tax state for the first half of the year, then
            relocates and takes a new job paying <strong>$90,000</strong> for the second half — a raise that came
            with the move, common enough that it&apos;s worth modeling rather than assuming income stays flat.
            Total income for the year: <strong>$150,000</strong>. Using California&apos;s published 2026 bracket
            structure (approximate — the Franchise Tax Board finalizes exact inflation-indexed thresholds closer to
            the tax year) and its standard deduction, here&apos;s what the full-year-rate method actually does to
            the $90,000 earned there:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-indigo-600 w-12">1</td>
                  <td className="p-4 text-slate-700">Hypothetical tax on the full $150,000 (all income, as if a full-year resident) run through CA&apos;s brackets</td>
                  <td className="p-4 font-mono text-slate-900 text-right">≈ $10,072</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">2</td>
                  <td className="p-4 text-slate-700">Ratio: California-source income ÷ total income ($90,000 ÷ $150,000)</td>
                  <td className="p-4 font-mono text-slate-900 text-right">60%</td>
                </tr>
                <tr className="border-b border-slate-100 bg-indigo-50">
                  <td className="p-4 font-bold text-indigo-600">3</td>
                  <td className="p-4 text-slate-700 font-semibold">Actual California tax owed (line 1 × line 2) — this is what the part-year return produces</td>
                  <td className="p-4 font-mono text-slate-900 text-right font-bold">≈ $6,043</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">4</td>
                  <td className="p-4 text-slate-700">What the same $90,000 would owe if California taxed it alone, as if it were the year&apos;s only income</td>
                  <td className="p-4 font-mono text-slate-900 text-right">≈ $4,492</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="p-4 font-bold text-red-700">5</td>
                  <td className="p-4 text-slate-900 font-semibold">Gap between the actual bill and the isolated-income assumption (line 3 − line 4)</td>
                  <td className="p-4 font-mono text-red-800 text-right font-bold">≈ $1,551</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            That $1,551 isn&apos;t double taxation and it isn&apos;t a fee for moving — it&apos;s the direct result
            of the $60,000 earned before the move pushing the household into higher brackets that the ratio method
            then applies to the California share. Someone who assumed each state simply taxes &quot;its own&quot;
            income on its own terms, at the rate a same-size paycheck would face on its own, would under-withhold
            for California by exactly this amount and owe it as a balance at filing instead. A state using the
            direct-allocation method instead (New York-style) would land closer to line 4 for its wage income,
            because it never runs the full-year total through its bracket schedule in the first place — which is
            the whole reason checking each state&apos;s actual method matters more than assuming either one.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The old flat-tax state in this example doesn&apos;t have this problem at all — a single flat rate
            applies to the $60,000 regardless of what was earned afterward elsewhere, which is a real, if minor,
            simplicity advantage flat-tax states have over graduated ones for a part-year filer.
          </p>
        </section>

        <section id="checklist" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The first-paycheck-after-a-move checklist</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The bracket mechanic above only shows up at filing. What actually goes wrong week-to-week is
            withholding — payroll systems don&apos;t always catch a mid-year address change cleanly:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-indigo-600 w-12">1</td>
                  <td className="p-4 text-slate-700">Pin down the actual move date — the day you established a permanent home in the new state, not the day you started the new job or updated your mailing address. Most states use this date, not an employment date, to split the year.</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">2</td>
                  <td className="p-4 text-slate-700">Update your state withholding form with your employer the same week — this is a separate form from your federal W-4, and payroll won&apos;t backfill it retroactively if you wait.</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">3</td>
                  <td className="p-4 text-slate-700">Check your first one or two post-move paychecks specifically for the state code — a same-day cutover on paper doesn&apos;t always take effect in payroll until the next full cycle, and a paycheck still coded to the old state after the new-state form was submitted is worth flagging immediately, not at filing.</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">4</td>
                  <td className="p-4 text-slate-700">Confirm old-state withholding actually stopped, not just that new-state withholding started — a lagging payroll system can briefly withhold for both, which is recoverable at filing but is an interest-free loan to two states instead of your paycheck.</td>
                </tr>
                <tr className="bg-emerald-50">
                  <td className="p-4 font-bold text-emerald-700">5</td>
                  <td className="p-4 text-slate-900 font-semibold">If you have any 1099 or self-employment income for the year, re-check estimated tax payment vouchers — a payment addressed to the wrong state after the move doesn&apos;t automatically transfer, and each state's part-year filing threshold is separate from the withholding question entirely.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: moving states mid-year</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Do I have to file a part-year return in both states?</h3>
              <p className="text-lg text-slate-700">If both states have an income tax, generally yes — each one taxes you as a resident for its portion of the year, using that state&apos;s own part-year resident form. Check each state&apos;s specific filing threshold; a very short residency period with little income there can sometimes fall under it.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Is this the same as the reciprocity or convenience-of-the-employer situation?</h3>
              <p className="text-lg text-slate-700">No. Those apply when you never changed residency at all — you live in one state and simply work for an employer based in another. This is about your residency itself changing partway through the year, which triggers each state&apos;s part-year rules regardless of where the work was performed.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Does moving to a no-income-tax state mid-year at least cut my tax bill for those months?</h3>
              <p className="text-lg text-slate-700">Generally yes for the months after the move — a no-income-tax state doesn&apos;t tax the income you earn while you live there. It doesn&apos;t erase what your former state is owed for the months you lived there before moving, and if your former state uses the full-year-rate method, income earned after the move (even from a no-tax state) can still affect the bracket calculation on what you owed before you left.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">How do I find out which method my specific states use?</h3>
              <p className="text-lg text-slate-700">Search for your state&apos;s "part-year resident" or "nonresident and part-year resident" tax form instructions directly on that state&apos;s department of revenue site — the form name and the line-by-line instructions state the method explicitly. This is worth five minutes before assuming either mechanic applies to your specific move.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default MidYearMovePartYearResident2026;

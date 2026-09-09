import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const LocalIncomeTaxByCity2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Local Tax Your Paycheck Calculator Might Be Missing",
      "description": "NYC, Yonkers, Philadelphia, Ohio's RITA/CCA cities, Denver and Kentucky's counties all tax paychecks on top of state and federal — and most calculators, including ours, only model state and federal. Real 2026 rates and how to adjust by hand.",
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
      "datePublished": "2026-09-05",
      "dateModified": "2026-09-05",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/local-income-tax-by-city-2026"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-local-income-tax-by-city';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-local-income-tax-by-city');
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
          <span>🏙️ Salary & Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The Local Tax Your Paycheck Calculator Might Be Missing
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Federal and state withholding are only two of the taxes that can come out of a paycheck. Roughly a
          dozen states let cities, counties or school districts add their own income tax on top — and most
          paycheck calculators, including the one on this site, only model federal and state. If you live or
          work in one of the places below, your real take-home pay is lower than any federal-plus-state number
          suggests. Here&apos;s exactly which places, how much, and how to adjust the number by hand.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
          <p className="text-amber-900 font-semibold">
            ⚠️ Full disclosure: quantcurb&apos;s own Salary Tax Estimator does not currently have a local-tax input
            field. It computes federal and state tax correctly, but if you&apos;re in one of the jurisdictions
            below, you&apos;ll need to subtract the local amount yourself using the method in this piece. We&apos;d
            rather tell you that plainly than let the calculator&apos;s silence read as &quot;no local tax owed.&quot;
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Get your federal + state number first</h3>
              <p className="text-sm text-slate-600">
                Run your salary through the estimator for the federal and state baseline, then come back here to
                layer on the local piece if you&apos;re in one of these cities or counties.
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
          <li><button onClick={() => scrollToSection('who-charges-it')} className="text-indigo-600 hover:underline">1. Who actually charges a local income tax</button></li>
          <li><button onClick={() => scrollToSection('nyc-yonkers')} className="text-indigo-600 hover:underline">2. New York: NYC and Yonkers, worked example</button></li>
          <li><button onClick={() => scrollToSection('philadelphia')} className="text-indigo-600 hover:underline">3. Philadelphia's Wage Tax — it taxes where you work, not where you live</button></li>
          <li><button onClick={() => scrollToSection('ohio')} className="text-indigo-600 hover:underline">4. Ohio's three-system mess: RITA, CCA, and self-administered cities</button></li>
          <li><button onClick={() => scrollToSection('denver-kentucky')} className="text-indigo-600 hover:underline">5. Denver's flat-fee OPT, and Kentucky's county-by-county occupational tax</button></li>
          <li><button onClick={() => scrollToSection('how-to-adjust')} className="text-indigo-600 hover:underline">6. How to adjust the calculator's output by hand</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="who-charges-it" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Who actually charges a local income tax</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Most of the country has no city or county income tax at all — your paycheck calculator's federal-plus-state
            number is the real number. But a real minority of places layer a local tax on top, and the mechanics
            differ enough by state that "does my city have one" isn't a single yes/no question:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Where</th>
                  <th className="text-left p-4 font-black text-slate-900">What it's called</th>
                  <th className="text-left p-4 font-black text-slate-900">Roughly how much</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">New York City (residents)</td><td className="p-4 text-slate-700">NYC personal income tax</td><td className="p-4 font-mono text-slate-900">3.078%–3.876%, graduated</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Yonkers, NY (residents)</td><td className="p-4 text-slate-700">Resident surcharge</td><td className="p-4 font-mono text-slate-900">16.75% of NY State tax owed</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Yonkers, NY (nonresident workers)</td><td className="p-4 text-slate-700">Nonresident Earnings Tax</td><td className="p-4 font-mono text-slate-900">0.5% flat on Yonkers wages</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Philadelphia (residents / nonresidents who work there)</td><td className="p-4 text-slate-700">Wage Tax</td><td className="p-4 font-mono text-slate-900">~3.75% / ~3.44% flat</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">~330 Ohio cities/villages (RITA), plus Cleveland (CCA), Columbus, Akron &amp; Cincinnati (self-administered)</td><td className="p-4 text-slate-700">Municipal income tax</td><td className="p-4 font-mono text-slate-900">commonly 1%–2.5% flat</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Denver, CO (workers earning $500+/mo)</td><td className="p-4 text-slate-700">Occupational Privilege Tax</td><td className="p-4 font-mono text-slate-900">$5.75/month flat fee</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Most Kentucky counties (87 of 120) &amp; many KY cities</td><td className="p-4 text-slate-700">Occupational license fee</td><td className="p-4 font-mono text-slate-900">0.5%–2.5% flat, county-set</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-sm">
            This isn't an exhaustive list — Detroit, several other Michigan cities, Maryland's county piggyback tax,
            and a handful of Delaware, Indiana and Missouri jurisdictions also levy one. If your city or county
            isn't above, check its finance department directly before assuming there's nothing to add.
          </p>
        </section>

        <section id="nyc-yonkers" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">New York: NYC and Yonkers, worked example</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            New York City's own resident income tax is graduated, separate from the state tax QuantCurb's calculator
            already models, and it stacks on top of it. For a single filer, the 2026 city bracket schedule is:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">NYC taxable income (single)</th>
                  <th className="text-left p-4 font-black text-slate-900">Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">$0 – $12,000</td><td className="p-4 text-slate-700">3.078%</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">$12,000 – $25,000</td><td className="p-4 text-slate-700">3.762%</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">$25,000 – $50,000</td><td className="p-4 text-slate-700">3.819%</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Over $50,000</td><td className="p-4 font-bold text-indigo-600">3.876%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Take a single NYC resident with <strong>$85,000</strong> of city taxable income (simplifying by using the
            same taxable-income figure the calculator already produces for state tax, rather than re-deriving NYC's
            own adjustments). Running that through the bracket table above — the same slice-by-slice method a
            federal or state bracket uses — comes to:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-slate-100"><td className="p-4 text-slate-700">3.078% × $12,000</td><td className="p-4 font-mono text-slate-900 text-right">$369.36</td></tr>
                <tr className="border-b border-slate-100"><td className="p-4 text-slate-700">3.762% × $13,000</td><td className="p-4 font-mono text-slate-900 text-right">$489.06</td></tr>
                <tr className="border-b border-slate-100"><td className="p-4 text-slate-700">3.819% × $25,000</td><td className="p-4 font-mono text-slate-900 text-right">$954.75</td></tr>
                <tr className="border-b border-slate-100"><td className="p-4 text-slate-700">3.876% × $35,000</td><td className="p-4 font-mono text-slate-900 text-right">$1,356.60</td></tr>
                <tr className="bg-indigo-50"><td className="p-4 font-bold text-slate-900">Total NYC tax for the year</td><td className="p-4 font-mono font-bold text-slate-900 text-right">≈ $3,170</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            That&apos;s about <strong>$264 a month</strong> — an effective NYC rate of roughly 3.73% on the $85,000 —
            that a federal-plus-state-only calculator has no way of showing, because it isn&apos;t federal or state
            tax at all. Commuters who live outside the five boroughs and work in NYC do <strong>not</strong> owe this
            tax; it applies to residents only, which is the opposite of how Philadelphia's version works (next
            section).
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Yonkers residents face a different structure entirely: rather than its own bracket table, Yonkers charges
            a <strong>16.75% surcharge on whatever New York State tax you already owe</strong> — so it scales with
            your state tax bill, not your income directly. Nonresidents who merely work in Yonkers pay a much
            smaller, flat <strong>0.5% Nonresident Earnings Tax</strong> on wages earned there (NY Form Y-203) instead
            of the resident surcharge.
          </p>
        </section>

        <section id="philadelphia" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Philadelphia's Wage Tax — residents owe it everywhere, nonresidents owe it where they work</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Philadelphia's Wage Tax is a flat percentage of wages, but the two rates below apply on <strong>different
            tests</strong>, not the same one. <strong>Residents owe the resident rate on all their wages no matter
            where they physically work</strong> — a Philadelphia resident who commutes to a New Jersey office, or
            works fully remote for an out-of-state employer, still owes the full resident rate. <strong>Nonresidents
            owe the lower rate only on wages from work physically performed inside city limits</strong> — a suburban
            commuter who works in the city owes it; the same commuter working from home on a given day generally
            doesn't, for that day's wages. As of 2026 the city is partway through a scheduled five-year reduction, so
            the rate itself steps down mid-year:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Filer</th>
                  <th className="text-left p-4 font-black text-slate-900">Jan 1 – Jun 30, 2026</th>
                  <th className="text-left p-4 font-black text-slate-900">Jul 1, 2026 onward</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Resident (all wages, any work location)</td><td className="p-4 font-mono text-slate-900">3.74%</td><td className="p-4 font-mono text-slate-900">3.735%</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Nonresident (only wages from work physically performed in Philadelphia)</td><td className="p-4 font-mono text-slate-900">3.43%</td><td className="p-4 font-mono text-slate-900">3.425%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            On a <strong>$60,000</strong> salary, the gap is small in percentage terms but real in dollars: a
            Philadelphia <strong>resident</strong> owes about <strong>$2,244/year</strong> (3.74%) in Wage Tax on the
            full amount regardless of where they work, while a <strong>nonresident</strong> commuter living in the
            New Jersey or Pennsylvania suburbs who physically works in the city owes about{' '}
            <strong>$2,058/year</strong> (3.43%) on that in-city work — a common surprise for people who assume a city
            tax can&apos;t apply to them because they don&apos;t live there. Both figures are on top of
            Pennsylvania&apos;s flat 3.07% state tax and federal tax, and neither shows up in a calculator that only
            asks for state of residence.
          </p>
        </section>

        <section id="ohio" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Ohio's three-system mess: RITA, CCA, and self-administered cities</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Ohio doesn&apos;t run one statewide local-tax system — each municipality with an income tax picks how it
            gets collected, and the three arrangements behave differently enough that "Ohio has RITA tax" is an
            oversimplification: <strong>RITA</strong> (the Regional Income Tax Agency) collects for roughly 330,
            mostly small-to-midsize cities and villages; <strong>CCA</strong> (the Central Collection Agency)
            collects for Cleveland and a separate set of communities; and several of Ohio&apos;s largest cities —
            Columbus, Akron and Cincinnati among them — administer their own tax directly rather than using either
            agency. Rates commonly run 1%–2.5% depending on the specific city.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The withholding mechanics add a second layer on top of just "what's the rate": your employer withholds a{' '}
            <strong>workplace tax</strong> for the municipality where you physically work, regardless of where you
            live. If your home municipality also taxes income, it may separately require a <strong>residence
            tax</strong> filing — but most give a credit for tax already paid to your workplace municipality, and
            that credit rate is set by each city's own ordinance, ranging from a full 100% credit down to 0%. Two
            people living in the same Ohio suburb but working in different cities can end up with genuinely different
            total local tax bills once their home city's specific credit rule is applied. There's no way to give one
            number here that's right for every combination — check your specific work and home municipalities (RITA,
            CCA, or the city's own site) rather than assuming a flat rate applies.
          </p>
        </section>

        <section id="denver-kentucky" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Denver's flat-fee OPT, and Kentucky's county-by-county occupational tax</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Denver charges an <strong>Occupational Privilege Tax</strong> that isn&apos;t a percentage at all — it's a
            flat <strong>$5.75 per month</strong> withheld from any employee earning at least $500 in a calendar month
            for work performed in the city, plus a separate $4/month paid by the employer (not deducted from your
            pay). At $69/year, it barely moves the needle on take-home pay, but it's still an omission if a
            calculator claims to show your exact Denver paycheck. One thing worth flagging for anyone using an older
            source: <strong>Aurora, Colorado repealed its own OPT effective January 1, 2025</strong> — if a guide or
            calculator still lists an Aurora occupational tax for 2026, that's stale information, not a live cost.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Kentucky runs local tax entirely differently again: there's no state involvement at all — each county
            sets its own <strong>occupational license fee</strong> on payroll earned within it, and 87 of Kentucky&apos;s
            120 counties currently levy one, at rates from 0.5% to 2.5% (median around 1%). Cities can layer their
            own fee on top of the county's, and — like Ohio's workplace/residence split above — the combined rate
            often depends on residency, not just location. Louisville/Jefferson County is a good example: the
            commonly-quoted <strong>2.2%</strong> rate (a 1.25% city/county operations fee, a 0.75% school board
            levy, and a 0.20% transit fee) applies to <strong>residents</strong>; the school board component is
            resident-only, so someone who works in Louisville Metro but lives elsewhere pays just{' '}
            <strong>1.45%</strong>. Lexington/Fayette County runs a single combined <strong>2.25%</strong> rate that
            doesn't carry the same resident/nonresident split. This is separate from — and stacks on top of —
            Kentucky's own state income tax, a flat rate that is itself scheduled to keep declining (3.5% as of
            January 1, 2026, down from 4.0% the year before).
          </p>
        </section>

        <section id="how-to-adjust" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to adjust the calculator's output by hand</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
            <p className="text-amber-900 font-semibold">
              ⚠️ One more honest limitation before you subtract anything: the Salary Tax Estimator's federal
              calculation is itself an approximation — it applies a single 2024 single-filer bracket table regardless
              of the filing status you select, and doesn't subtract the federal standard deduction before computing
              tax. That means the federal (and therefore net pay) figure runs especially high for married or
              head-of-household filers, independent of local tax entirely. Treat the calculator's net pay as a
              rough starting point, not an exact baseline, before layering the local-tax adjustment below on top of
              it — the two are separate gaps, and closing one doesn't close the other.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            With that caveat in mind, the local-tax layer itself is a three-step manual adjustment, not a guess:
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">1. Run your federal + state number as normal</h3>
              <p className="text-slate-700">Use the calculator's output as a starting estimate, not an exact figure — see the filing-status caveat above.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">2. Compute the local tax separately, using your specific jurisdiction's rule</h3>
              <p className="text-slate-700">A graduated bracket (NYC), a surcharge on state tax owed (Yonkers residents), a flat percentage of wages that depends on residency (Philadelphia, most Ohio cities, Kentucky counties), or a flat dollar fee (Denver) — match the method and the residency rule to the place, not a generic percentage.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">3. Subtract the local amount from the calculator's take-home figure</h3>
              <p className="text-slate-700">The calculator's net pay minus your local tax (converted to the same pay period) gets you closer to real take-home — treat the result as an estimate, not an exact number, given the federal caveat above.</p>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The Methodology page's own limitations section already discloses that our tools "cannot account for...
            municipal tax variations" — this piece is the concrete version of that disclosure for the specific
            places where it actually matters.
          </p>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: local income tax and paycheck calculators</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Does every big city have a local income tax?</h3>
              <p className="text-lg text-slate-700">No — most large US cities, including Los Angeles, Chicago, Houston, Phoenix and Miami, have no city-level income tax at all. It's a minority of states (New York, Pennsylvania, Ohio, Colorado, Kentucky, Michigan, Maryland, Delaware, Indiana, Missouri) where it's common, and even within those states it varies city by city.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Why doesn't quantcurb's calculator just add this in?</h3>
              <p className="text-lg text-slate-700">Local tax rules are unusually fragmented — different rate structures (bracket, surcharge, flat percentage, flat fee), different residency rules (some tax residents only, some tax workplace only, some tax both), and thousands of individual jurisdictions in Ohio and Kentucky alone. Modeling it accurately is a real scope of work, not a one-line addition, which is why this piece exists as an honest interim answer rather than the calculator silently treating "not modeled" as "zero."</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">If I work remotely for a company based in one of these cities but never set foot there, do I owe the local tax?</h3>
              <p className="text-lg text-slate-700">It depends on whether the tax is location-based or residency-based, and those are different things. Nonresident rates — Philadelphia's, most Ohio cities', Denver's OPT, Kentucky's nonresident occupational rate — are tied to where the work is physically performed, so working remotely for an out-of-state employer generally doesn't trigger them. But every resident-based tax in this piece — NYC, Yonkers' resident surcharge, Philadelphia's own resident Wage Tax, Kentucky's resident-inclusive county rate — is based on where you live, not where you or your employer are physically located, so it applies to a remote worker exactly the same as an in-office one. Always confirm with the specific city or agency for your situation.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Is my employer already withholding this correctly?</h3>
              <p className="text-lg text-slate-700">In most cases, yes — payroll systems generally handle local withholding correctly once an employee's work and home addresses are set up right, which is exactly why the tax doesn't show up as a line item you have to think about until you're trying to independently verify your own take-home pay, which is what a calculator like this one is for.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default LocalIncomeTaxByCity2026;

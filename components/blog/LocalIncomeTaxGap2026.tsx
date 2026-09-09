import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const LocalIncomeTaxGap2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Local Tax Your Paycheck Calculator Might Be Missing",
      "description": "Federal-plus-state calculators, including this site's own, stop at the state line. City and county income taxes in NYC, Philadelphia, Denver, Ohio's RITA municipalities and Kentucky can each take another bite — here's how to add it back by hand.",
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
      "datePublished": "2026-09-09",
      "dateModified": "2026-09-09",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/local-income-tax-your-calculator-doesnt-show"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-local-income-tax-gap';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-local-income-tax-gap');
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
          <span>💸 Salary & Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The Local Tax Your Paycheck Calculator Might Be Missing
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Run federal plus state tax on a paycheck and you get a real, useful number — for most of the
          country, the whole number. But roughly 30 million Americans also pay a city, county, or school
          district income tax on top of that, and most take-home-pay calculators, this site&apos;s own
          included, stop at the state line. Here&apos;s who actually owes a local tax, how much it is, and
          how to add it back by hand.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Run federal and state first</h3>
              <p className="text-sm text-slate-600">
                Get your federal-plus-state take-home number from the calculator, then use the worked
                examples below to subtract your local tax on top — the calculator doesn&apos;t do this step
                for you yet.
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
          <li><button onClick={() => scrollToSection('the-gap')} className="text-indigo-600 hover:underline">1. Why federal-plus-state isn&apos;t the whole story</button></li>
          <li><button onClick={() => scrollToSection('nyc-yonkers')} className="text-indigo-600 hover:underline">2. New York City and Yonkers</button></li>
          <li><button onClick={() => scrollToSection('philadelphia')} className="text-indigo-600 hover:underline">3. Philadelphia&apos;s Wage Tax</button></li>
          <li><button onClick={() => scrollToSection('ohio-rita')} className="text-indigo-600 hover:underline">4. Ohio&apos;s RITA and CCA municipalities</button></li>
          <li><button onClick={() => scrollToSection('denver-opt')} className="text-indigo-600 hover:underline">5. Denver&apos;s Occupational Privilege Tax</button></li>
          <li><button onClick={() => scrollToSection('kentucky')} className="text-indigo-600 hover:underline">6. Kentucky&apos;s county and city occupational taxes</button></li>
          <li><button onClick={() => scrollToSection('checklist')} className="text-indigo-600 hover:underline">7. How to check if you&apos;re affected</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="the-gap" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why federal-plus-state isn&apos;t the whole story</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Most U.S. paycheck calculators, including this site&apos;s Salary Tax Estimator, model two layers
            of tax: federal and state. For the large majority of filers that&apos;s the full picture — 40-plus
            states either have no local income tax at all or leave it to a small number of jurisdictions
            you&apos;re unlikely to live or work in. But a handful of cities and states layer a third tax
            directly onto wages, and it isn&apos;t a rounding error: at the numbers used below it runs from
            roughly $70 a year (Denver) to well over $3,000 a year (a New York City resident earning a
            typical mid-five-figure salary).
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you live or work in one of the places below, treat this calculator&apos;s federal-plus-state
            number as a floor, not a final answer, and use the worked math in each section to see what to
            subtract on top.
          </p>
        </section>

        <section id="nyc-yonkers" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">New York City and Yonkers</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            New York City runs its own resident income tax on top of New York State tax, administered
            through the same IT-201 return. Rates run from about 3.078% at the bottom of the city&apos;s
            bracket schedule up to 3.876% at the top, with the top rate applying to most full-time earners
            since it phases in well below six figures. For a rough worked number: a single NYC resident
            earning <strong>$85,000</strong>, taxed near the top of the city&apos;s schedule, owes somewhere
            in the neighborhood of <strong>$2,900–$3,300</strong> in city tax alone for the year — a real
            local number this calculator&apos;s federal-plus-New York-State output doesn&apos;t include.
            The exact bracket cutoffs shift slightly year to year, so treat this as a planning estimate and
            check the current-year NYC rate schedule in the IT-201 instructions for an exact figure.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Yonkers works differently: it isn&apos;t its own income-tax bracket, it&apos;s a surcharge — a
            resident of Yonkers pays an additional 16.75% <em>of their New York State tax liability</em>,
            not of their income. If your state tax bill is $4,000, the Yonkers surcharge adds about $670 on
            top. Non-residents who work in Yonkers pay a much smaller separate withholding, a fraction of a
            percent of wages earned there.
          </p>
        </section>

        <section id="philadelphia" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Philadelphia&apos;s Wage Tax</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Philadelphia&apos;s Wage Tax applies regardless of where you live, as long as you work in the
            city — residents currently pay <strong>3.74%</strong>, non-residents who commute in pay{' '}
            <strong>3.43%</strong> (rates in effect from July 2025 through June 2026; Philadelphia is partway
            through a multi-year schedule of small annual cuts, so expect this to tick down slightly each
            July). It&apos;s withheld directly from wages, separate from Pennsylvania&apos;s flat state
            income tax this calculator already accounts for.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Salary</th>
                  <th className="text-left p-4 font-black text-slate-900">Resident (3.74%)</th>
                  <th className="text-left p-4 font-black text-slate-900">Non-resident commuter (3.43%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">$60,000</td><td className="p-4 font-mono text-slate-900">$2,244/yr</td><td className="p-4 font-mono text-slate-900">$2,058/yr</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">$75,000</td><td className="p-4 font-mono text-slate-900">$2,805/yr</td><td className="p-4 font-mono text-slate-900">$2,573/yr</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">$100,000</td><td className="p-4 font-mono text-slate-900">$3,740/yr</td><td className="p-4 font-mono text-slate-900">$3,430/yr</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="ohio-rita" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Ohio&apos;s RITA and CCA municipalities</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Ohio is the messiest case here because it isn&apos;t one tax, it&apos;s hundreds of them. Most
            Ohio cities and villages levy their own municipal income tax — many collected through the
            Regional Income Tax Agency (RITA) or the Central Collection Agency (CCA), some run in-house — at
            rates that commonly fall between 1.5% and 2.5% of wages. You always owe the tax where you{' '}
            <em>work</em>; whether you also owe it where you <em>live</em> depends on whether your home
            municipality grants a credit for tax already paid to your work municipality, and by how much.
            That credit is set locally under Ohio law, city by city — it is not automatic or uniform
            statewide, so two people who live in different Ohio suburbs and work at the same downtown office
            can end up with different total local tax bills.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Rough math for someone working in a city with a 2.25% municipal rate on a $70,000 salary: about{' '}
            <strong>$1,575/year</strong> withheld to the work city. Whether any of that offsets a separate
            bill from the home municipality is the one number here you have to look up locally rather than
            estimate — check your own city or village&apos;s tax office (or RITA&apos;s municipality lookup)
            for its specific credit percentage before assuming it nets to zero.
          </p>
        </section>

        <section id="denver-opt" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Denver&apos;s Occupational Privilege Tax</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Denver&apos;s local tax is the smallest one on this list and the easiest to overlook because
            it&apos;s a flat dollar amount, not a percentage. Anyone earning at least $500 in a calendar
            month for work performed in Denver has <strong>$5.75/month</strong> withheld from their pay — a
            flat <strong>$69/year</strong> regardless of salary — with the employer separately paying $4/month
            per employee (that half never touches your paycheck). A handful of other Colorado
            cities — Aurora, Glendale, Greenwood Village and a few more — run a similar flat-dollar
            occupational tax at their own (usually smaller) amounts.
          </p>
        </section>

        <section id="kentucky" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Kentucky&apos;s county and city occupational taxes</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Kentucky has no statewide local-tax cap or single rate — occupational license taxes are set
            independently by each of the state&apos;s counties and, separately, by cities within those
            counties, and the two can stack. As of 2025, all 87 Kentucky counties levy some form of payroll
            occupational tax, with rates commonly running from about 0.5% to 2.5% and a statewide median
            around 1%; Lexington-Fayette&apos;s combined city-county rate is 2.25%. A $70,000 salary at that
            2.25% rate works out to <strong>$1,575/year</strong> — before checking whether your specific
            county and city both levy the tax or just one of them.
          </p>
        </section>

        <section id="checklist" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to check if you&apos;re affected</h2>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">1. Check your most recent pay stub first</h3>
              <p className="text-slate-700">A local tax that&apos;s already being withheld shows up as a separate line — often labeled with the city name, &quot;RITA,&quot; &quot;CCA,&quot; &quot;OPT,&quot; or &quot;local tax.&quot; If you don&apos;t see one, you&apos;re very likely in the majority of the country where this section doesn&apos;t apply to you.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">2. If you moved or changed jobs recently, don&apos;t assume payroll caught it</h3>
              <p className="text-slate-700">Local tax withholding is tied to your work address and, in credit-granting states, your home address — a move or a new job can change what you owe even if your salary didn&apos;t change. Confirm with payroll or HR rather than assuming last year&apos;s stub still applies.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">3. Subtract it manually from this calculator&apos;s output</h3>
              <p className="text-slate-700">Take the federal-plus-state take-home number from the Salary Tax Estimator, then subtract your local tax using the worked math above (or your actual pay-stub line) to get a real bottom-line number.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: local and municipal income tax</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Does this site&apos;s Salary Tax Estimator include local tax?</h3>
              <p className="text-lg text-slate-700">Not yet — it models federal and state tax only. For the cities and states covered above, use the worked examples here to adjust its output by hand. This is a real, honest gap in the tool today, not a hidden one.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Is my city one of the ones covered here?</h3>
              <p className="text-lg text-slate-700">This piece covers the largest, best-documented cases — NYC/Yonkers, Philadelphia, Ohio&apos;s RITA/CCA municipalities, Denver-area Colorado cities, and Kentucky. Local income tax also exists in parts of Maryland (county-level, collected with the state return), Indiana (county income tax) and a small number of other jurisdictions — check your pay stub first, per the checklist above, since it's the most direct evidence either way.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Is local income tax deductible anywhere else?</h3>
              <p className="text-lg text-slate-700">Local income tax counts toward the federal SALT (state and local tax) itemized deduction alongside state income tax and property tax, subject to the same federal cap — it isn&apos;t a separate, additional deduction.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Why doesn&apos;t the calculator just add this automatically?</h3>
              <p className="text-lg text-slate-700">Local tax rules vary by exact address, not just city or state — Ohio alone has hundreds of separate municipal rates and credit rules — which is a fundamentally different, address-level data problem than the state-level tables the calculator currently runs on. Rather than quietly guess, this piece exists so the gap is explicit instead of silently wrong.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default LocalIncomeTaxGap2026;

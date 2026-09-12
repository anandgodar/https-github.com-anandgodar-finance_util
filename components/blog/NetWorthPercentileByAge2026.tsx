import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const NetWorthPercentileByAge2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Net Worth Percentile by Age: The Homeownership Gap Behind the Table",
      "description": "The Federal Reserve's own age-band net worth medians hide a bigger split than age ever will: homeowners had a median net worth of $396,500 in 2022, renters just $10,410. What that means for reading your own percentile.",
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
      "datePublished": "2026-09-12",
      "dateModified": "2026-09-12",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/net-worth-percentile-by-age-2026"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-net-worth-percentile';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-net-worth-percentile');
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
          <span>💎 Financial Planning</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Net Worth Percentile by Age: The Homeownership Gap Behind the Table
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Every net worth percentile calculator sorts you by age and hands back a single number. But age is a weak
          predictor next to a split the same Federal Reserve survey reports right alongside it: homeowners had a
          median net worth <strong>38 times higher</strong> than renters in 2022. Two people the same age with the
          same net worth number can be in completely different positions — this is how to tell which one you are.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Get your own number first</h3>
              <p className="text-sm text-slate-600">
                The Net Worth Calculator adds up your assets — cash, investments, retirement accounts, and home
                equity — and subtracts your debts. Run yours, then come back and use the breakdown below to read
                what it actually means.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.NET_WORTH)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Net Worth Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('the-table')} className="text-indigo-600 hover:underline">1. Median net worth by age (2022 Federal Reserve data)</button></li>
          <li><button onClick={() => scrollToSection('the-real-split')} className="text-indigo-600 hover:underline">2. The gap the age table doesn&apos;t show: homeowners vs. renters</button></li>
          <li><button onClick={() => scrollToSection('worked-example')} className="text-indigo-600 hover:underline">3. Worked example: same age, same number, different position</button></li>
          <li><button onClick={() => scrollToSection('how-to-read')} className="text-indigo-600 hover:underline">4. How to read your own percentile correctly</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">5. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="the-table" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Median net worth by age (2022 Federal Reserve data)</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The Federal Reserve&apos;s <strong>Survey of Consumer Finances</strong> is the source every net worth
            percentile calculator is ultimately built on. It runs every three years; the 2022 wave (fieldwork
            through early 2023, published October 2023) is still the most recent one available, and the next wave
            isn&apos;t expected until late 2026 — so every &quot;2026&quot; percentile tool online, this one
            included, is running 2022 dollars, not a live figure.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Age of household head</th>
                  <th className="text-left p-4 font-black text-slate-900">Median net worth</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Under 35</td>
                  <td className="p-4 font-mono text-slate-900">$39,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">35–44</td>
                  <td className="p-4 font-mono text-slate-900">$135,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">45–54</td>
                  <td className="p-4 font-mono text-slate-900">$247,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">55–64</td>
                  <td className="p-4 font-mono text-slate-900">$364,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">65–74</td>
                  <td className="p-4 font-mono text-slate-900">$410,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">75 and older</td>
                  <td className="p-4 font-mono text-slate-900">$335,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            This is the table nearly every percentile site publishes — median net worth rises with age until the
            mid-70s, then dips slightly as retirees draw down savings. It&apos;s a real and useful benchmark. It
            just isn&apos;t the biggest split in the same dataset.
          </p>
        </section>

        <section id="the-real-split" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The gap the age table doesn&apos;t show: homeowners vs. renters</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            In the same 2022 survey, the Federal Reserve reported <strong>homeowner households had a median net
            worth of $396,500</strong>, versus <strong>$10,410 for renter households</strong> — a roughly 38-to-1
            gap, and one that widened sharply from 2019 (when it was about 41-to-1 in dollar terms but on a much
            smaller base: $295,480 vs. $7,270), driven mostly by home price appreciation between the two surveys.
            That split holds at every age band the Fed breaks out — a 40-year-old homeowner and a 40-year-old
            renter aren&apos;t two points on the same curve; they&apos;re two different distributions that happen
            to share an age.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Household type (2022)</th>
                  <th className="text-left p-4 font-black text-slate-900">Median net worth</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Homeowner</td>
                  <td className="p-4 font-mono text-slate-900">$396,500</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Renter</td>
                  <td className="p-4 font-mono text-slate-900">$10,410</td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50">
                  <td className="p-4 text-slate-900 font-bold">Ratio</td>
                  <td className="p-4 font-mono text-slate-900 text-right font-bold">≈ 38×</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            None of that is a judgment on renting — it&apos;s an arithmetic fact about what net worth is made of.
            For most homeowner households, home equity is the single largest asset on the balance sheet; for
            renters, it simply doesn&apos;t exist as a line item. An age-only percentile table averages both
            groups together and hands back one number, quietly assuming the mix of owners and renters is the same
            at every income and every age — it isn&apos;t.
          </p>
        </section>

        <section id="worked-example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: same age, same number, different position</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Take two 40-year-olds, each with a <strong>$250,000</strong> net worth — both would land in roughly the
            same spot on the age-band table above, comfortably above the $135,000 median for their age group.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Person</th>
                  <th className="text-left p-4 font-black text-slate-900">Assets</th>
                  <th className="text-left p-4 font-black text-slate-900">Net worth</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold align-top">Renter, brokerage-heavy</td>
                  <td className="p-4 text-slate-700">$230,000 in a taxable brokerage account, $20,000 cash. No debt.</td>
                  <td className="p-4 font-mono text-slate-900 align-top">$250,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700 font-semibold align-top">Homeowner, equity-heavy</td>
                  <td className="p-4 text-slate-700">House worth $420,000, mortgage balance $220,000 ($200,000 equity). $50,000 in a 401(k). No other savings.</td>
                  <td className="p-4 font-mono text-slate-900 align-top">$250,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Identical net worth, identical age band, and a percentile lookup treats them identically. But the first
            person can liquidate almost their entire net worth in days without moving; the second has 80% of theirs
            locked in one illiquid, undiversified, leveraged asset that also happens to be where they live — selling
            it means finding somewhere else to live first. Neither position is wrong, but they aren&apos;t the same
            position, and a single percentile number erases the difference entirely.
          </p>
        </section>

        <section id="how-to-read" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to read your own percentile correctly</h2>
          <ol className="space-y-4 list-decimal list-inside text-lg text-slate-700">
            <li>
              <strong>Find your age-band median</strong> from the table above as a starting reference point — it&apos;s
              real data, just a coarse one.
            </li>
            <li>
              <strong>Split your own net worth into liquid vs. home equity</strong> using the same asset categories
              the Net Worth Calculator already asks for (cash, investments and retirement accounts vs. property
              value minus mortgage balance). The tool totals them together for your net worth figure; it&apos;s
              worth looking at the split separately, since that ratio — not the total — is what determines how
              much of your position an age-only benchmark is actually describing.
            </li>
            <li>
              <strong>Weight the comparison by owner status when you can.</strong> If most of a benchmark figure's
              underlying households in your age band are homeowners (which is typical by your 40s and up), a renter
              comparing against the blended median is being compared against a number that&apos;s mostly home
              equity they don&apos;t hold — and a homeowner comparing against it should expect their number to lean
              on home equity too, not assume it&apos;s all liquid savings.
            </li>
          </ol>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: net worth percentiles</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Why does this site use 2022 data if it&apos;s 2026?</h3>
              <p className="text-lg text-slate-700">Because that&apos;s genuinely the most recent Federal Reserve Survey of Consumer Finances available — it&apos;s conducted every three years, the 2022 wave was published in October 2023, and the next one isn&apos;t expected until late 2026. Any calculator claiming a more current official figure is either estimating or reusing the same 2022 numbers under a newer label.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Should I include my home equity in my net worth at all?</h3>
              <p className="text-lg text-slate-700">Yes — it&apos;s a real asset and belongs in the total. The point here isn&apos;t to exclude it, it&apos;s to look at what share of your total it makes up before comparing yourself to a benchmark that mixes owners and renters together.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Is a high percentage of net worth in home equity a problem?</h3>
              <p className="text-lg text-slate-700">Not inherently — it&apos;s a normal outcome of buying a home with a mortgage. It matters most for flexibility (how quickly you could access the money) and concentration (how much of your financial life depends on one property in one location), which are different questions from whether your total number is &quot;good.&quot;</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Does the Net Worth Calculator on this site break out the liquid-vs-equity split automatically?</h3>
              <p className="text-lg text-slate-700">It asks for property value and mortgage balance as separate line items alongside cash and investments, so the split is visible in what you enter — it doesn&apos;t currently output a standalone liquid-vs-equity ratio or percentile. Doing the comparison above is a manual step on top of the tool&apos;s total, the same way this piece walks through it.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default NetWorthPercentileByAge2026;

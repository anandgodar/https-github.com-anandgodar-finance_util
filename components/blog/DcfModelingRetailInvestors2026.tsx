import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const DcfModelingRetailInvestors2026: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Why Two \"Reasonable\" DCF Models Can Disagree by 2.4x (And What to Do About It)",
      "description": "The same company, modeled with four defensible WACC and growth assumptions, can swing a DCF valuation from $12M to $29M. A worked sensitivity grid, why terminal value drives most of the gap, and a framework for reading a range instead of trusting one number.",
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
      "datePublished": "2026-02-14",
      "dateModified": "2026-09-20",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/dcf-modeling-retail-investors"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-dcf-retail';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-dcf-retail');
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
          <span>📊 Valuation</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Why Two &quot;Reasonable&quot; DCF Models Can Disagree by 2.4x
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Model the exact same company twice — once with a slightly more optimistic growth rate and a
          slightly lower discount rate, once with the opposite — and the resulting valuation can move from $12
          million to $29 million. Neither run used an extreme assumption. That is not a flaw in the model. It is
          what a DCF actually is: a range dressed up as a single number, unless you read it that way.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">See your own sensitivity grid, not just one output</h3>
              <p className="text-sm text-slate-600">
                The Excel Power Modeler builds the full WACC-by-growth grid and shows what share of your valuation
                is terminal value, alongside the single intrinsic-value number.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.EXCEL_MODELER)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Excel Power Modeler →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('one-number-trap')} className="text-indigo-600 hover:underline">1. The one-number trap</button></li>
          <li><button onClick={() => scrollToSection('the-grid')} className="text-indigo-600 hover:underline">2. Same company, 25 assumption pairs, 25 answers</button></li>
          <li><button onClick={() => scrollToSection('terminal-value')} className="text-indigo-600 hover:underline">3. Why terminal value drives most of the swing</button></li>
          <li><button onClick={() => scrollToSection('picking-wacc')} className="text-indigo-600 hover:underline">4. Picking a WACC without guessing</button></li>
          <li><button onClick={() => scrollToSection('reading-the-grid')} className="text-indigo-600 hover:underline">5. What to actually do with the range</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">6. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="one-number-trap" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The one-number trap</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Almost every free DCF tool online — and most spreadsheets built by hand — ends with a single headline
            figure: &quot;Intrinsic Value: $18.0M.&quot; That number looks precise. It isn&apos;t. It&apos;s the
            output of a handful of assumptions (revenue growth, margin, discount rate, and a terminal growth rate)
            that nobody can actually know with certainty five years out. Two analysts who each think they&apos;re
            being reasonable can land on inputs a couple of percentage points apart and walk away with valuations
            that differ by more than double.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            That isn&apos;t a reason to distrust DCF modeling — it&apos;s the reason professional analysts never
            present a DCF as one number. They present a <strong>sensitivity table</strong>: the same model, run
            across a grid of discount rates and growth rates, so the output is a range with a visible shape instead
            of a false point estimate. The rest of this piece walks through exactly that grid, using QuantCurb&apos;s
            own default model, so the numbers below are reproducible in the calculator itself rather than asserted.
          </p>
        </section>

        <section id="the-grid" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Same company, 25 assumption pairs, 25 answers</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Start from one company: $5,000,000 in current revenue, a 20% EBITDA margin, a 21% tax rate, growing at
            a center-case <strong>15%</strong> a year with a <strong>10%</strong> discount rate (WACC) and a 2.5%
            terminal growth rate. Project five years of free cash flow, discount it back, add the discounted
            terminal value, and the center case comes out to <strong>$18.0M</strong> in enterprise value — the
            number a single-point DCF would report and stop there.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Now hold every other input fixed and only move growth (±4 points) and WACC (±2 points) — a narrower
            band than most analysts would consider genuinely aggressive in either direction:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-3 font-black text-slate-900">Growth ↓ / WACC →</th>
                  <th className="text-center p-3 font-black text-slate-900">8%</th>
                  <th className="text-center p-3 font-black text-slate-900">9%</th>
                  <th className="text-center p-3 font-black text-slate-900 bg-indigo-50">10%</th>
                  <th className="text-center p-3 font-black text-slate-900">11%</th>
                  <th className="text-center p-3 font-black text-slate-900">12%</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-3 font-semibold text-slate-700">11%</td>
                  <td className="p-3 text-center font-mono text-slate-700">$21.2M</td>
                  <td className="p-3 text-center font-mono text-slate-700">$17.8M</td>
                  <td className="p-3 text-center font-mono text-slate-900 bg-indigo-50">$15.4M</td>
                  <td className="p-3 text-center font-mono text-slate-700">$13.5M</td>
                  <td className="p-3 text-center font-mono text-red-700 font-bold">$12.0M</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-3 font-semibold text-slate-700">13%</td>
                  <td className="p-3 text-center font-mono text-slate-700">$23.0M</td>
                  <td className="p-3 text-center font-mono text-slate-700">$19.3M</td>
                  <td className="p-3 text-center font-mono text-slate-900 bg-indigo-50">$16.6M</td>
                  <td className="p-3 text-center font-mono text-slate-700">$14.6M</td>
                  <td className="p-3 text-center font-mono text-slate-700">$13.0M</td>
                </tr>
                <tr className="border-t border-slate-100 bg-indigo-50/40">
                  <td className="p-3 font-black text-indigo-700">15% (center)</td>
                  <td className="p-3 text-center font-mono text-slate-700">$24.9M</td>
                  <td className="p-3 text-center font-mono text-slate-700">$20.9M</td>
                  <td className="p-3 text-center font-mono text-indigo-700 font-black">$18.0M</td>
                  <td className="p-3 text-center font-mono text-slate-700">$15.8M</td>
                  <td className="p-3 text-center font-mono text-slate-700">$14.0M</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-3 font-semibold text-slate-700">17%</td>
                  <td className="p-3 text-center font-mono text-slate-700">$27.0M</td>
                  <td className="p-3 text-center font-mono text-slate-700">$22.7M</td>
                  <td className="p-3 text-center font-mono text-slate-900 bg-indigo-50">$19.5M</td>
                  <td className="p-3 text-center font-mono text-slate-700">$17.0M</td>
                  <td className="p-3 text-center font-mono text-slate-700">$15.1M</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-3 font-semibold text-slate-700">19%</td>
                  <td className="p-3 text-center font-mono text-green-700 font-bold">$29.2M</td>
                  <td className="p-3 text-center font-mono text-slate-700">$24.5M</td>
                  <td className="p-3 text-center font-mono text-slate-900 bg-indigo-50">$21.0M</td>
                  <td className="p-3 text-center font-mono text-slate-700">$18.4M</td>
                  <td className="p-3 text-center font-mono text-slate-700">$16.3M</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
            <p className="text-amber-900 font-semibold">
              ⚠️ The bottom-left cell (19% growth, 8% WACC) and the top-right cell (11% growth, 12% WACC) are both
              inside a band most analysts would call defensible — yet they land at <strong>$29.2M</strong> and{' '}
              <strong>$12.0M</strong>. That&apos;s a <strong>2.4x spread</strong> from the same starting revenue,
              the same margin, the same tax rate — nothing changed except two inputs nobody can pin down exactly.
              A single &quot;Intrinsic Value: $18.0M&quot; heading hides that entire range.
            </p>
          </div>
        </section>

        <section id="terminal-value" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why terminal value drives most of the swing</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The grid above moves so much because of where the value actually sits. In the center-case model, the
            explicit five-year cash flow forecast contributes only about a quarter of the total valuation — the
            other <strong>~75%</strong> comes from the terminal value: a single perpetuity formula standing in for
            every year of cash flow beyond year five, discounted back to today. Move to the corners of the grid and
            that share ranges from <strong>68% at the low end to 82% at the high end</strong> — the majority, and
            usually the large majority, of every DCF valuation is a bet on a growth rate and a discount rate decades
            into the future, not on the five years of numbers actually being forecast.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            This isn&apos;t a defect in the DCF method — a perpetuity is the only mathematically honest way to
            capture the value of a business that keeps existing past year five. But it means the terminal growth
            rate and discount rate deserve more scrutiny than the five-year forecast usually gets, not less. A
            model built on careful, granular revenue and margin assumptions but a single unexamined terminal growth
            rate has spent its effort in the wrong place.
          </p>
        </section>

        <section id="picking-wacc" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Picking a WACC without guessing</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Given how much the discount rate moves the outcome, picking one by feel is the most common way a DCF
            goes wrong. The standard, defensible method is the Capital Asset Pricing Model (CAPM) for the cost of
            equity, blended with the after-tax cost of debt by capital structure weight:
          </p>
          <div className="bg-slate-900 rounded-2xl p-6 font-mono text-sm text-green-400 space-y-2">
            <div>Cost of Equity = Risk-Free Rate + Beta × Market Risk Premium</div>
            <div>WACC = (Equity Weight × Cost of Equity) + (Debt Weight × Cost of Debt × (1 − Tax Rate))</div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Worked with commonly-used inputs — a 4.2% risk-free rate (the 10-year Treasury), a beta of 1.2, a 7.0%
            historical market risk premium, a 5.5% pre-tax cost of debt, a 0.4 debt-to-equity ratio, and the same
            21% tax rate as the cash flow model above:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-3 text-slate-700">Cost of equity: 4.2% + (1.2 × 7.0%)</td>
                  <td className="p-3 font-mono text-slate-900 text-right font-bold">12.6%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3 text-slate-700">Equity weight (1 ÷ (1 + 0.4)) / Debt weight (0.4 ÷ 1.4)</td>
                  <td className="p-3 font-mono text-slate-900 text-right font-bold">71.4% / 28.6%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3 text-slate-700">After-tax cost of debt: 5.5% × (1 − 21%)</td>
                  <td className="p-3 font-mono text-slate-900 text-right font-bold">4.35%</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="p-3 text-slate-900 font-semibold">Calculated WACC</td>
                  <td className="p-3 font-mono text-indigo-700 text-right font-black">10.24%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            That lands almost exactly on the 10% center case used above — which is the point: a CAPM-derived WACC
            gives you a defensible center for the grid, not a replacement for it. Typical WACCs for established
            operating companies run roughly 8% to 12%; early-stage or high-risk businesses can run 15% to 25% or
            higher. If your discount rate falls far outside that range without a CAPM calculation backing it up,
            that&apos;s usually the first place to check your work before trusting the output.
          </p>
        </section>

        <section id="reading-the-grid" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What to actually do with the range</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A sensitivity grid is only useful if you read it as a decision tool, not a bigger version of the same
            single number. Four checks, in order:
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">1. Find where the current market price sits inside the grid</h3>
              <p className="text-slate-700">If the market price is below every cell in a defensible range, that&apos;s a stronger signal than the price being below just the center-case number. If it&apos;s only below the most optimistic corner, the case is much weaker than a single &quot;undervalued&quot; headline number would suggest.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">2. Check what share of the value is terminal value</h3>
              <p className="text-slate-700">If terminal value is north of 70-75% of the total — common, as shown above — treat the valuation primarily as a bet on the terminal growth rate and discount rate, and stress those two inputs harder than the five-year forecast.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">3. Widen the grid until it stops changing your conclusion</h3>
              <p className="text-slate-700">If a modest, defensible range of inputs still keeps the valuation on the same side of the market price, that&apos;s a real margin of safety. If the conclusion flips somewhere inside a range you&apos;d call reasonable, the honest answer is &quot;too close to call,&quot; not whichever cell you like best.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-1">4. Treat the DCF as one input, not the verdict</h3>
              <p className="text-slate-700">Cross-check the range against a comparable-companies multiple or the company&apos;s own historical valuation band. A DCF and a comps check that disagree by a wide margin is a reason to dig into why, not a reason to average the two and move on.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: DCF sensitivity and terminal value</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Why not just use a narrower, more confident range?</h3>
              <p className="text-lg text-slate-700">Because the narrowness would be manufactured, not earned. Nobody can forecast a company&apos;s growth rate or the market&apos;s required return five to ten years out to within a fraction of a percentage point — a grid spanning a couple of points in each direction reflects real uncertainty rather than hiding it behind false precision.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Is a high terminal-value share a red flag?</h3>
              <p className="text-lg text-slate-700">Not by itself — for a going concern with cash flows expected to continue indefinitely, a large terminal value share is normal and expected. It becomes a concern when the terminal growth rate assumed is unrealistically high (above long-run GDP growth, for instance) or when nobody has actually stress-tested it against the WACC.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">What&apos;s a reasonable terminal growth rate?</h3>
              <p className="text-lg text-slate-700">Most practitioners anchor terminal growth near long-run nominal GDP growth (commonly modeled around 2-3%) on the logic that no company can outgrow the entire economy forever. A terminal growth rate set close to or above the discount rate isn&apos;t just aggressive — the perpetuity formula breaks down mathematically as growth approaches WACC, producing an unbounded or negative result.</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Does a higher beta always mean a higher WACC?</h3>
              <p className="text-lg text-slate-700">Yes, all else equal — beta scales the equity risk premium directly in the CAPM formula, so a higher beta raises the cost of equity and therefore the blended WACC. A company with more debt in its capital structure partly offsets this, since debt is typically cheaper than equity, but the net effect depends on the specific weights and rates involved.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default DcfModelingRetailInvestors2026;

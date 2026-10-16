import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const LeanVsFatFire2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>📅 Updated October 2026</span>
          <span>•</span>
          <span>⏱️ 5 min read</span>
          <span>•</span>
          <span>💎 Retirement Lifestyle</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          LeanFIRE vs. FatFIRE: Which Lifestyle Can You Afford?
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          LeanFIRE aims for a minimalist retirement, while FatFIRE aims for a bigger lifestyle. The spending gap between
          $40k and $100k per year dramatically changes the target portfolio you need — and how long it takes to get there.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Model both scenarios</h3>
              <p className="text-sm text-slate-600">
                Compare LeanFIRE and FatFIRE spending levels side by side.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.RETIREMENT_OPTIMIZER)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Retirement Optimizer →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('definitions')} className="text-indigo-600 hover:underline">1. A note on the labels</button></li>
          <li><button onClick={() => scrollToSection('leanfire')} className="text-indigo-600 hover:underline">2. LeanFIRE profile</button></li>
          <li><button onClick={() => scrollToSection('fatfire')} className="text-indigo-600 hover:underline">3. FatFIRE profile</button></li>
          <li><button onClick={() => scrollToSection('math')} className="text-indigo-600 hover:underline">4. Portfolio math</button></li>
          <li><button onClick={() => scrollToSection('health-taxes')} className="text-indigo-600 hover:underline">5. Health insurance and taxes</button></li>
          <li><button onClick={() => scrollToSection('choose')} className="text-indigo-600 hover:underline">6. How to choose</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">8. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="definitions" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">A note on the labels</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            &quot;LeanFIRE&quot; and &quot;FatFIRE&quot; are informal terms from the financial independence community, not
            official definitions. There is no agreed cutoff. People often describe LeanFIRE as spending around $40,000 a
            year or less and FatFIRE as $100,000 or more, with &quot;regular&quot; FIRE in between, but a single person in a
            low-cost town and a family of five in a high-cost city will draw those lines very differently. This article uses
            $40,000 and $100,000 as round, illustrative numbers.
          </p>
        </section>

        <section id="leanfire" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">LeanFIRE: $40k per year lifestyle</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            LeanFIRE focuses on low housing costs, minimal travel, and simple living. At $40k/year, the 25x rule suggests
            a $1.0M portfolio.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The upside is speed: a smaller target can be reached years sooner. The downside is a thin margin. With little
            discretionary spending to cut, a market downturn, a medical bill or a rent increase lands directly on
            essentials.
          </p>
        </section>

        <section id="fatfire" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">FatFIRE: $100k per year lifestyle</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            FatFIRE assumes more travel, higher housing, and lifestyle upgrades. At $100k/year, the 25x rule points to a
            $2.5M portfolio.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The upside is resilience: a large share of the budget is optional, so you can trim travel or dining in a bad year
            without touching essentials. The downside is time — reaching $2.5 million usually takes a high income, many
            years of saving, or both.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Hypothetical monthly budget</th>
                  <th className="text-left p-4 font-black text-slate-900">LeanFIRE ($40k/yr)</th>
                  <th className="text-left p-4 font-black text-slate-900">FatFIRE ($100k/yr)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Housing</td><td className="p-4 text-slate-700">$1,200</td><td className="p-4 text-slate-700">$3,000</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Food</td><td className="p-4 text-slate-700">$500</td><td className="p-4 text-slate-700">$1,200</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Transportation</td><td className="p-4 text-slate-700">$300</td><td className="p-4 text-slate-700">$800</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Health insurance &amp; medical</td><td className="p-4 text-slate-700">$500</td><td className="p-4 text-slate-700">$900</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Utilities &amp; phone</td><td className="p-4 text-slate-700">$250</td><td className="p-4 text-slate-700">$400</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Travel &amp; entertainment</td><td className="p-4 text-slate-700">$300</td><td className="p-4 text-slate-700">$1,500</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Everything else</td><td className="p-4 text-slate-700">$283</td><td className="p-4 text-slate-700">$533</td></tr>
                <tr className="border-t border-slate-100 bg-slate-50"><td className="p-4 font-black text-slate-900">Total</td><td className="p-4 font-bold text-slate-900">$3,333</td><td className="p-4 font-bold text-slate-900">$8,333</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 italic">
            Illustrative only. Your costs depend on location, household size and whether your home is paid off — the{' '}
            <a href="/cost-of-living-calculator/" className="text-indigo-600 font-semibold hover:underline">cost of living calculator</a>{' '}
            can help compare cities.
          </p>
        </section>

        <section id="math" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why the gap matters</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A $60k difference in annual spending equals a $1.5M difference in your FI target. That&apos;s why lifestyle choices
            matter as much as savings rate.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Scenario</th>
                  <th className="text-left p-4 font-black text-slate-900">25x (4%)</th>
                  <th className="text-left p-4 font-black text-slate-900">30x (~3.3%)</th>
                  <th className="text-left p-4 font-black text-slate-900">Years at $60k/yr saved*</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-emerald-600">LeanFIRE $40k</td>
                  <td className="p-4 text-slate-700">$1,000,000</td>
                  <td className="p-4 text-slate-700">$1,200,000</td>
                  <td className="p-4 font-bold text-slate-900">~12.4 / ~14.2</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-purple-600">FatFIRE $100k</td>
                  <td className="p-4 text-slate-700">$2,500,000</td>
                  <td className="p-4 text-slate-700">$3,000,000</td>
                  <td className="p-4 font-bold text-slate-900">~23.1 / ~25.7</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-slate-500 p-4 italic">*Hypothetical: starting from $0, saving $60,000 at the end of each year, 5% real (after-inflation) return. Not a prediction.</p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Saving the same $60,000 a year, the FatFIRE target takes roughly twice as long. In practice, a household that
            wants to spend $100,000 in retirement usually spends more today too, which leaves less to save — so the gap is
            often wider. Our guide to the{' '}
            <a href="/blog/fi-number-math-financial-independence/" className="text-indigo-600 font-semibold hover:underline">FI number formula</a>{' '}
            explains when to use 25x versus a larger multiple.
          </p>
        </section>

        <section id="health-taxes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Health insurance and taxes change the math</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Before Medicare at 65, many early retirees buy ACA marketplace coverage. Premium tax credits are based on your
            household&apos;s modified adjusted gross income (MAGI), not your spending. The enhanced subsidies expired after
            2025, so for <strong>2026 coverage the 400% of poverty level cutoff is back</strong> unless Congress changes the
            law: about $62,600 for a single person and $128,600 for a family of four. Above that line, there is generally no
            premium credit.
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-slate-700">
            <li><strong>LeanFIRE</strong> households can often keep MAGI well under the cutoff and may qualify for meaningful credits.</li>
            <li><strong>FatFIRE</strong> households drawing $100,000+ from traditional accounts may land above it and pay full price — a cost to build into the budget.</li>
            <li>Because MAGI depends on <em>which</em> accounts you draw from, spending from cash or Roth contributions can keep income lower than spending.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            Taxes follow a similar pattern. For 2026, long-term capital gains are taxed at 0% federally up to $98,900 of
            taxable income for married couples filing jointly ($49,450 single), so a lean budget funded mainly from a taxable
            brokerage account may owe little federal tax on those gains. Larger budgets reach the 15% rate and higher ordinary
            brackets sooner. Estimate your marketplace costs with the{' '}
            <a href="/aca-health-insurance-subsidy-calculator/" className="text-indigo-600 font-semibold hover:underline">ACA subsidy calculator</a>{' '}
            and check current rules at HealthCare.gov.
          </p>
        </section>

        <section id="choose" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to choose your target</h2>
          <ol className="list-decimal list-inside space-y-2 text-lg text-slate-700">
            <li><strong>Start from real spending.</strong> Track a full year before labeling yourself lean or fat.</li>
            <li><strong>Separate needs from wants.</strong> Your &quot;floor&quot; budget is what you must cover; your &quot;ideal&quot; budget is what you would like.</li>
            <li><strong>Price both.</strong> Calculate the FI number for each and estimate how many years each takes.</li>
            <li><strong>Consider a middle path.</strong> Some people retire on the floor budget and add spending later, or keep part-time income until the portfolio reaches the ideal number.</li>
            <li><strong>Revisit yearly.</strong> Preferences change — many people find their spending looks different after they stop working.</li>
          </ol>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold text-lg">
              📊 <strong>Hypothetical middle path:</strong> A couple&apos;s floor budget is $40,000 and their ideal is
              $70,000. At 25x, those targets are $1,000,000 and $1,750,000. If they stop full-time work at $1,400,000,
              a 4% withdrawal provides $56,000; adding $15,000 a year of part-time income brings them to $71,000 — enough
              for the ideal budget while the portfolio keeps growing. If markets fall, they can drop toward the floor
              without a crisis.
            </p>
          </div>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently asked questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is $40,000 a year realistic for LeanFIRE?</h3>
              <p className="text-slate-700">
                It depends heavily on location and household size. With a paid-off home or low rent it may be; in a high-cost
                metro with children it may not. Use your own numbers rather than the label.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is FatFIRE safer than LeanFIRE?</h3>
              <p className="text-slate-700">
                Not automatically, but it often has more room to cut. A lean budget made of essentials has less flexibility in
                a bad market.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Can I switch from LeanFIRE to FatFIRE later?</h3>
              <p className="text-slate-700">
                Yes. If your portfolio grows faster than your withdrawals, you can raise spending. Planning for that rather than
                assuming it is the cautious approach.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Where does Coast FIRE fit?</h3>
              <p className="text-slate-700">
                Coast FIRE is a milestone on the way to either target. See{' '}
                <a href="/blog/coast-fire-how-to-retire-early/" className="text-indigo-600 font-semibold hover:underline">how Coast FIRE works</a>.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li><a href="https://www.healthcare.gov/" className="text-indigo-600 hover:underline">HealthCare.gov</a> — marketplace premium tax credits and income rules</li>
            <li>IRS Rev. Proc. 2025-32 (2026 capital gains thresholds) — <a href="https://www.irs.gov/publications/p17" className="text-indigo-600 hover:underline">IRS Publication 17</a></li>
            <li>Cooley, Hubbard &amp; Walz (1998), the &quot;Trinity study&quot; on withdrawal rates, <em>AAII Journal</em>.</li>
          </ul>
          <p className="text-sm text-slate-500 italic">
            This article is educational and not individualized financial, tax, or investment advice.
          </p>
        </section>
      </article>
    </div>
  );
};

export default LeanVsFatFire2026;

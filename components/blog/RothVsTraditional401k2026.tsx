import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const RothVsTraditional401k2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>⏱️ 6 min read</span>
          <span>•</span>
          <span>🧠 Tax Strategy</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Roth vs. Traditional 401(k): The Tax Bracket Bet
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Choosing between Roth and Traditional 401(k) contributions is a bet on your future tax bracket. Pay taxes now
          or later? The right answer depends on income trajectory and retirement goals.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Compare net outcomes</h3>
              <p className="text-sm text-slate-600">
                Model both options with our tax shield analysis.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.RETIREMENT_OPTIMIZER)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Tax Shield Analysis →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('roth')} className="text-indigo-600 hover:underline">1. Roth 401(k) basics</button></li>
          <li><button onClick={() => scrollToSection('traditional')} className="text-indigo-600 hover:underline">2. Traditional 401(k) basics</button></li>
          <li><button onClick={() => scrollToSection('compare')} className="text-indigo-600 hover:underline">3. Side-by-side comparison (2026)</button></li>
          <li><button onClick={() => scrollToSection('math')} className="text-indigo-600 hover:underline">4. The math: why equal tax rates tie</button></li>
          <li><button onClick={() => scrollToSection('decision')} className="text-indigo-600 hover:underline">5. How to decide</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">6. Common mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">8. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="roth" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Roth 401(k): pay taxes now</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Roth contributions are after-tax, but withdrawals are tax-free later. This can be powerful if you expect a
            higher tax bracket in retirement.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Your paycheck shrinks by the full contribution plus the income tax you still owe on that money. In exchange,
            a <strong>qualified distribution</strong> — generally one taken after age 59½ and at least five years after
            your first Roth contribution to the plan — comes out free of federal income tax, including all the growth.
            Since 2024, designated Roth accounts in 401(k) plans are no longer subject to required minimum distributions
            during the owner&apos;s lifetime, which removes one of the old drawbacks compared with a Roth IRA.
          </p>
        </section>

        <section id="traditional" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Traditional 401(k): defer taxes</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Traditional contributions reduce taxable income now, but withdrawals are taxed later. This usually wins when
            your retirement tax rate is lower.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Pre-tax deferrals come out of your paycheck before federal income tax (and usually state income tax), so a
            $1,000 contribution costs someone in the 22% bracket only about $780 of take-home pay. Note that Social
            Security and Medicare (FICA) taxes still apply to 401(k) deferrals of either type. Every dollar you later
            withdraw — contributions and growth — is taxed as ordinary income, and required minimum distributions
            generally begin at age 73.
          </p>
        </section>

        <section id="compare" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Side-by-side comparison (2026)</h2>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Feature</th>
                  <th className="text-left p-4 font-black text-slate-900">Traditional 401(k)</th>
                  <th className="text-left p-4 font-black text-slate-900">Roth 401(k)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Tax on contributions</td>
                  <td className="p-4 text-slate-700">Deferred (lowers taxable income now)</td>
                  <td className="p-4 text-slate-700">Taxed now</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Tax on qualified withdrawals</td>
                  <td className="p-4 text-slate-700">Ordinary income</td>
                  <td className="p-4 text-slate-700">Tax-free</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">2026 employee limit</td>
                  <td className="p-4 text-slate-700" colSpan={2}>$24,500 combined across both types; +$8,000 catch-up at 50+; $11,250 instead for ages 60–63</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Income limit to contribute</td>
                  <td className="p-4 text-slate-700">None</td>
                  <td className="p-4 text-slate-700">None (unlike a Roth IRA)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Lifetime RMDs</td>
                  <td className="p-4 text-slate-700">Yes, generally from age 73</td>
                  <td className="p-4 text-slate-700">No (since 2024)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Employer match</td>
                  <td className="p-4 text-slate-700">Pre-tax</td>
                  <td className="p-4 text-slate-700">Usually pre-tax; Roth match only if the plan allows</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The $24,500 limit is one bucket: you can split it any way you like between Roth and Traditional, but not
            contribute $24,500 to each. Under SECURE 2.0, higher earners (based on prior-year FICA wages above an
            inflation-indexed threshold) must make their catch-up contributions as Roth starting in 2026, so check how
            your plan handles this.
          </p>
        </section>

        <section id="math" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The math: why equal tax rates tie</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The cleanest way to compare the two is to hold your <strong>take-home cost</strong> constant. A $10,000
            Traditional contribution in the 22% bracket costs the same $7,800 of take-home pay as a $7,800 Roth
            contribution.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <div className="text-indigo-900 font-semibold">
              💡 <strong>Hypothetical example:</strong> same take-home cost, 7% annual return, 30 years (growth factor ≈ 7.61×)
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Roth: $7,800 grows to about $59,376 — all tax-free</li>
                <li>• Traditional: $10,000 grows to about $76,123 before tax</li>
                <li>• Withdrawn at 22%: $59,376 after tax — an exact tie</li>
                <li>• Withdrawn at 12%: $66,988 after tax — Traditional wins by ~$7,600</li>
                <li>• Withdrawn at 24%: $57,853 after tax — Roth wins by ~$1,500</li>
              </ul>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The takeaway: the account type doesn&apos;t change your investment return. Only the <strong>difference
            between today&apos;s tax rate and the rate on your future withdrawals</strong> decides the winner. (The Roth has
            one quiet edge: if you max out the limit, a Roth dollar holds more after-tax value than a Traditional dollar,
            so Roth effectively lets you shelter more.)
          </p>

          <h3 className="text-2xl font-black text-slate-900 mt-8">Marginal in, effective out</h3>
          <p className="text-lg text-slate-700 leading-relaxed">
            Traditional deferrals save tax at your <strong>marginal</strong> rate — the rate on your top dollars. In
            retirement, withdrawals fill the brackets from the bottom, starting with the standard deduction.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <div className="text-emerald-900 font-semibold">
              📊 <strong>Hypothetical example (2026 brackets for illustration):</strong> a married couple with no other
              income withdraws $60,000 from a Traditional 401(k).
              <ul className="mt-2 space-y-1 text-base">
                <li>• Minus the $32,200 standard deduction = $27,800 taxable</li>
                <li>• First $24,800 at 10% = $2,480; next $3,000 at 12% = $360</li>
                <li>• <strong>Total federal tax: $2,840 — about 4.7% of the withdrawal</strong></li>
              </ul>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            If that couple deferred the money while in the 22% or 24% bracket, Traditional was the better bet. Real
            retirees often have Social Security, pensions, or taxable investment income stacked on top, which pushes
            withdrawals into higher brackets — so plug your own numbers in rather than assuming.
          </p>
        </section>

        <section id="decision" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to make the bet</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you&apos;re early in your career or expect higher income later, Roth often makes sense. If you&apos;re in a high tax
            bracket now, Traditional can deliver bigger savings.
          </p>
          <div className="space-y-6 mt-6">
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Find your marginal bracket today</h3>
                  <p className="text-slate-700">
                    Example: a single filer earning $85,000 has $68,900 of taxable income after the $16,100 standard
                    deduction — inside the 22% bracket ($50,400–$105,700). A $10,000 Traditional deferral saves about
                    $2,200 of federal tax.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Watch bracket edges</h3>
                  <p className="text-slate-700">
                    Example: a married couple earning $250,000 has $217,800 taxable — $6,400 into the 24% bracket.
                    Deferring $24,500 saves $6,400 × 24% + $18,100 × 22% = $5,518. Pre-tax savings beyond the bracket
                    edge are worth a little less.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Estimate retirement income honestly</h3>
                  <p className="text-slate-700">
                    Add expected Social Security, pensions, RMDs from a large pre-tax balance, and any planned move to a
                    higher- or lower-tax state. A big Traditional balance can force large RMDs later.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h3 className="font-bold text-emerald-900 text-lg mb-2">When unsure, split</h3>
                  <p className="text-emerald-800">
                    Nobody knows future tax law. Splitting contributions builds &quot;tax diversification&quot; — pre-tax and Roth
                    buckets you can draw from strategically each year in retirement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Other factors that can tip the scale: a lower adjusted gross income from Traditional deferrals can help you
            qualify for income-tested benefits such as the{' '}
            <a href="/blog/child-tax-credit-2025-guide/" className="text-indigo-600 font-semibold hover:underline">Child Tax Credit</a>{' '}
            or{' '}
            <a href="/aca-health-insurance-subsidy-calculator/" className="text-indigo-600 font-semibold hover:underline">ACA premium tax credits</a>,
            and keep you under the phase-outs for a Roth IRA. To see how a bigger deferral changes your paycheck, read{' '}
            <a href="/blog/max-out-401k-take-home-pay/" className="text-indigo-600 font-semibold hover:underline">what maxing out your 401(k) does to take-home pay</a>.
          </p>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>Comparing equal contributions instead of equal take-home cost.</strong> $10,000 Roth costs more than $10,000 Traditional; compare like for like.</li>
            <li>• <strong>Using your effective rate today.</strong> The relevant saving today is your marginal rate.</li>
            <li>• <strong>Assuming retirement income will be tiny.</strong> Large pre-tax balances, pensions, and Social Security can keep you in the same bracket.</li>
            <li>• <strong>Skipping the match to chase Roth.</strong> Contribute enough to get the full employer match whichever type you pick.</li>
            <li>• <strong>Forgetting state taxes.</strong> Moving from a high-tax state to a no-income-tax state in retirement favors Traditional, and vice versa.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Can I contribute to both a Roth and a Traditional 401(k)?</h3>
              <p className="text-slate-700">
                Yes, if your plan offers both. Your combined employee deferrals can&apos;t exceed $24,500 in 2026 (plus any
                catch-up you qualify for).
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is there an income limit for the Roth 401(k)?</h3>
              <p className="text-slate-700">
                No. Unlike a Roth IRA, which phases out at $153,000–$168,000 of MAGI for single filers in 2026, the
                Roth 401(k) is available at any income level if your plan offers it.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Does a Roth 401(k) save FICA taxes?</h3>
              <p className="text-slate-700">
                No — neither type does. Social Security and Medicare taxes apply to 401(k) deferrals either way. Only
                certain payroll deductions, such as HSA contributions through a cafeteria plan, avoid FICA.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What if I&apos;m in the 12% bracket?</h3>
              <p className="text-slate-700">
                Roth is often attractive at 12% because the tax cost now is low and many people&apos;s retirement rate ends up
                similar or higher. It still depends on your expected retirement income.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• IRS Notice 2025-67 (2026 retirement plan limits) — <a href="https://www.irs.gov/retirement-plans" className="text-indigo-600 font-semibold hover:underline">IRS Retirement Plans</a></li>
            <li>• IRS Rev. Proc. 2025-32 (2026 tax brackets and standard deduction) — <a href="https://www.irs.gov/" className="text-indigo-600 font-semibold hover:underline">irs.gov</a></li>
            <li>• <a href="https://www.irs.gov/publications/p575" className="text-indigo-600 font-semibold hover:underline">IRS Publication 575, Pension and Annuity Income</a></li>
          </ul>
          <p className="text-sm text-slate-600 italic">
            This article is educational and is not individualized tax or investment advice. Examples are hypothetical.
          </p>
        </section>
      </article>
    </div>
  );
};

export default RothVsTraditional401k2026;

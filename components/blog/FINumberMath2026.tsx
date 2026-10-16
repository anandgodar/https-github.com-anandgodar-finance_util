import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const FINumberMath2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>🔥 Financial Independence</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          What is Your &quot;FI Number&quot;? The Math Behind Financial Independence
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Your <strong>FI number</strong> is the portfolio size that can support your annual spending. The classic rule is
          25x your expenses — a simple formula that turns your lifestyle into a target number. This guide shows where the
          25x comes from, how to adjust it for taxes, inflation and Social Security, and when a bigger multiple makes sense.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Find your freedom number</h3>
              <p className="text-sm text-slate-600">
                Use the FIRE Planner to calculate your exact FI target based on your expenses.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.FIRE_PLANNER)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use FIRE Planner →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('fi-number')} className="text-indigo-600 hover:underline">1. The FI number formula</button></li>
          <li><button onClick={() => scrollToSection('multiples')} className="text-indigo-600 hover:underline">2. Withdrawal rates and multiples</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">3. Example calculation</button></li>
          <li><button onClick={() => scrollToSection('steps')} className="text-indigo-600 hover:underline">4. Step-by-step: find your number</button></li>
          <li><button onClick={() => scrollToSection('adjust')} className="text-indigo-600 hover:underline">5. Adjusting for taxes and inflation</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">6. Common mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">8. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="fi-number" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The 25x rule in plain English</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Multiply your annual spending by 25. If you spend $50,000 per year, your FI number is about $1.25 million.
            That assumes a 4% withdrawal rate and a diversified portfolio.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The 25 is simply the inverse of 4%: 1 ÷ 0.04 = 25. The 4% figure traces back to William Bengen&apos;s 1994
            research and the 1998 Trinity study by Cooley, Hubbard and Walz, which found that withdrawing 4% of a 50/50
            stock/bond portfolio in year one — then raising the dollar amount with inflation — lasted through about 95% of
            the historical 30-year periods tested. So the general formula is:
          </p>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <p className="text-3xl font-black mb-2">FI Number = Annual Spending ÷ Withdrawal Rate</p>
            <p className="text-indigo-100 text-lg">At a 4% withdrawal rate, that is the same as spending × 25</p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Notice the formula is driven by <strong>spending, not income</strong>. Two people earning the same salary can
            have very different FI numbers, and every $1,000 of permanent annual spending you cut lowers the target by
            about $25,000.
          </p>
        </section>

        <section id="multiples" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Withdrawal rates and the multiples they imply</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The Trinity study looked at 30-year retirements. If you plan to retire in your 30s or 40s, your money may need to
            last 50 years or more, so many people choose a lower withdrawal rate and a larger multiple. The table shows the
            math for $60,000 of annual spending.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Withdrawal Rate</th>
                  <th className="text-left p-4 font-black text-slate-900">Multiple</th>
                  <th className="text-left p-4 font-black text-slate-900">FI Number at $60k/yr</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">4.0%</td>
                  <td className="p-4 text-slate-700">25x</td>
                  <td className="p-4 font-bold text-slate-900">$1,500,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">3.5%</td>
                  <td className="p-4 text-slate-700">~28.6x</td>
                  <td className="p-4 font-bold text-slate-900">$1,714,286</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">3.0%</td>
                  <td className="p-4 text-slate-700">~33.3x</td>
                  <td className="p-4 font-bold text-slate-900">$2,000,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Going from 4% to 3% raises the target by a third. For a deeper look at that trade-off, read{' '}
            <a href="/blog/4-percent-rule-dead-safe-withdrawal-rates/" className="text-indigo-600 font-semibold hover:underline">whether the 4% rule still holds up</a>.
          </p>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Example: $60,000 yearly expenses</h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-lg text-slate-700">
              $60,000 × 25 = <strong>$1,500,000</strong> FI number.
            </p>
          </div>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold text-lg">
              📊 <strong>Hypothetical example with Social Security:</strong> A retiree planning to stop work at 62 spends
              $64,000 per year and has a Social Security estimate of $24,000 per year starting at 62. The portfolio only needs
              to cover the gap: $64,000 − $24,000 = $40,000. At 4%, that is $40,000 × 25 = <strong>$1,000,000</strong>
              instead of $1.6 million.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The same logic applies to a pension, rental income or part-time work: subtract reliable income first, then
            multiply what&apos;s left. If that income starts later than your retirement date, you need extra savings to bridge
            the years before it begins. You can see your own benefit estimate in your my Social Security account at ssa.gov.
          </p>
        </section>

        <section id="steps" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Step-by-step: find your FI number</h2>
          <ol className="list-decimal list-inside space-y-3 text-lg text-slate-700">
            <li><strong>Track 12 months of real spending.</strong> Use bank and card statements, not a guess. Include annual bills like insurance and car registration.</li>
            <li><strong>Adjust for retirement.</strong> Remove costs that end (commuting, retirement contributions, a mortgage that will be paid off) and add costs that start (health insurance before Medicare, more travel).</li>
            <li><strong>Subtract reliable income.</strong> Social Security, pensions or steady part-time income reduce what the portfolio must supply.</li>
            <li><strong>Choose a withdrawal rate.</strong> 4% for a traditional 30-year retirement; 3–3.5% is a common choice for longer horizons.</li>
            <li><strong>Divide and add a buffer.</strong> Spending gap ÷ withdrawal rate, plus any one-off goals such as a car fund or a home repair reserve.</li>
          </ol>
          <p className="text-lg text-slate-700 leading-relaxed">
            Once you have the number, the{' '}
            <a href="/early-retirement-fire-planner/" className="text-indigo-600 font-semibold hover:underline">early retirement FIRE planner</a>{' '}
            shows how long it may take to reach it at your current savings rate.
          </p>
        </section>

        <section id="adjust" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Adjusting for taxes, inflation, and buffers</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Some people target 28x to 30x expenses to account for taxes and inflation. The key is using realistic spending
            and building a buffer for surprises.
          </p>
          <h3 className="text-2xl font-black text-slate-900 mt-8">Taxes: gross up your spending</h3>
          <p className="text-lg text-slate-700 leading-relaxed">
            The 25x rule works on whatever you withdraw, but you can only spend what&apos;s left after tax. Withdrawals from a
            traditional 401(k) or IRA are taxed as ordinary income; Roth withdrawals that meet the rules are tax-free; and
            taxable brokerage accounts are taxed mainly on gains.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold">
              💡 <strong>Hypothetical example (2026 federal rules):</strong> A single retiree over 59½ wants $50,000 to
              spend and draws everything from a traditional IRA. A withdrawal of about $54,300 minus the $16,100 standard
              deduction leaves about $38,200 of taxable income. Federal tax is about $1,240 (10% of the first $12,400) plus
              about $3,100 (12% of the rest), roughly $4,340 in total, leaving about $50,000. The FI number becomes
              $54,300 × 25 ≈ <strong>$1.36 million</strong>, not $1.25 million. State tax would add more in many states.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Our guide to{' '}
            <a href="/blog/tax-brackets-explained-2025/" className="text-indigo-600 font-semibold hover:underline">how tax brackets work</a>{' '}
            explains why only part of a withdrawal is taxed at your top rate.
          </p>
          <h3 className="text-2xl font-black text-slate-900 mt-8">Inflation: keep everything in today&apos;s dollars</h3>
          <p className="text-lg text-slate-700 leading-relaxed">
            The simplest approach is to state your FI number in today&apos;s dollars and project your portfolio using a real
            (after-inflation) return. If you prefer nominal numbers, inflate your spending first: $60,000 growing at 3% a
            year becomes about $93,500 in 15 years, so the nominal FI number at 25x would be about $2.34 million. Both
            approaches describe the same goal — just don&apos;t mix them. See{' '}
            <a href="/blog/inflation-calculator-million-worth-retirement/" className="text-indigo-600 font-semibold hover:underline">what $1 million will be worth in retirement</a>{' '}
            for more on this.
          </p>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common FI number mistakes</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-slate-700">
            <li><strong>Using income instead of spending.</strong> Your FI number depends on what you spend, not what you earn.</li>
            <li><strong>Forgetting irregular costs.</strong> Roof repairs, replacing a car and medical deductibles are real spending even if they don&apos;t happen every month.</li>
            <li><strong>Counting home equity.</strong> The house you live in doesn&apos;t pay your bills unless you plan to sell or downsize.</li>
            <li><strong>Leaving out health insurance.</strong> Before Medicare at 65, premiums and out-of-pocket costs can be a large line item.</li>
            <li><strong>Treating the number as fixed.</strong> Recalculate yearly as spending, tax law and your timeline change.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently asked questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is 25x enough for early retirement?</h3>
              <p className="text-slate-700">
                It may be, but the 4% research covered 30-year periods. For a 40- to 50-year retirement, many people use
                28x–33x (a 3.5%–3% withdrawal rate) or plan to cut spending in bad markets.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Do retirement accounts count toward my FI number?</h3>
              <p className="text-slate-700">
                Yes. 401(k)s, IRAs, HSAs and taxable brokerage accounts all count. Just remember traditional accounts carry a
                future tax bill, and withdrawals before 59½ may face a 10% penalty unless an exception applies.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What if I am not close to my FI number?</h3>
              <p className="text-slate-700">
                A partial milestone like{' '}
                <a href="/blog/coast-fire-how-to-retire-early/" className="text-indigo-600 font-semibold hover:underline">Coast FIRE</a>{' '}
                can be a useful intermediate goal: enough invested that growth alone may reach your number by a traditional
                retirement age.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Should I include my mortgage payment?</h3>
              <p className="text-slate-700">
                Include it only for the years you will still be paying it. If the loan will be paid off soon after you
                retire, some people save a separate lump sum for the remaining balance and leave the payment out of the 25x.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Bengen, W. P. (1994), &quot;Determining Withdrawal Rates Using Historical Data,&quot; <em>Journal of Financial Planning</em>.</li>
            <li>Cooley, P. L., Hubbard, C. M., &amp; Walz, D. T. (1998), &quot;Retirement Savings: Choosing a Withdrawal Rate That Is Sustainable,&quot; <em>AAII Journal</em>.</li>
            <li>IRS Rev. Proc. 2025-32 (2026 tax brackets and standard deduction) — <a href="https://www.irs.gov/publications/p17" className="text-indigo-600 hover:underline">IRS Publication 17</a></li>
            <li><a href="https://www.irs.gov/publications/p590b" className="text-indigo-600 hover:underline">IRS Publication 590-B</a> (IRA distributions)</li>
            <li><a href="https://www.ssa.gov/" className="text-indigo-600 hover:underline">Social Security Administration</a> (benefit estimates)</li>
          </ul>
          <p className="text-sm text-slate-500 italic">
            This article is educational and not individualized financial, tax, or investment advice.
          </p>
        </section>
      </article>
    </div>
  );
};

export default FINumberMath2026;

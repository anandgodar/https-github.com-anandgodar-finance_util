import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const CaliforniaVsTexasTakeHome2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>🌴 Salary & Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          $100k in California vs. Texas: Where Does Your Dollar Go Further?
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          A <strong>$100k salary in California vs Texas</strong> can feel like two completely different lives. California
          has high state income tax and higher housing costs, while Texas has no state income tax but rising metro rents.
          Let&apos;s break down take-home pay, living costs, and real purchasing power so you can decide where your money
          stretches further.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Compare your exact take-home pay</h3>
              <p className="text-sm text-slate-600">
                Plug your salary into our Salary Estimator to compare all 50 states and see your personalized net pay.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.SALARY_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Salary Estimator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('take-home')} className="text-indigo-600 hover:underline">1. Take-home pay comparison</button></li>
          <li><button onClick={() => scrollToSection('taxes')} className="text-indigo-600 hover:underline">2. How taxes drive the gap</button></li>
          <li><button onClick={() => scrollToSection('line-by-line')} className="text-indigo-600 hover:underline">3. The 2026 math, line by line</button></li>
          <li><button onClick={() => scrollToSection('401k')} className="text-indigo-600 hover:underline">4. What a 401(k) contribution changes</button></li>
          <li><button onClick={() => scrollToSection('costs')} className="text-indigo-600 hover:underline">5. Cost of living reality check</button></li>
          <li><button onClick={() => scrollToSection('winner')} className="text-indigo-600 hover:underline">6. Which state wins at $100k?</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">7. Common comparison mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. FAQ</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="take-home" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Take-home pay: California vs Texas on $100k</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            In a <strong>100k salary California vs Texas take-home pay</strong> comparison, the biggest swing is state
            income tax. California takes a bite, Texas doesn&apos;t. Federal and FICA are the same, so the state line item is
            the big differentiator.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">State</th>
                  <th className="text-left p-4 font-black text-slate-900">Estimated annual take-home</th>
                  <th className="text-left p-4 font-black text-slate-900">Monthly take-home</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">California</td>
                  <td className="p-4 text-slate-700">~$72.5k to $73k (approximate)</td>
                  <td className="p-4 font-bold text-slate-900">~$6,050/month</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-emerald-600">Texas</td>
                  <td className="p-4 text-slate-700">~$79,180</td>
                  <td className="p-4 font-bold text-slate-900">~$6,598/month</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold text-lg">
              ✅ Expect roughly <strong>$500 more per month</strong> in take-home pay in Texas versus California at the
              same $100k salary.
            </p>
          </div>
          <p className="text-sm text-slate-500">
            Assumes a single filer in 2026 with $100,000 of W-2 wages, the standard deduction, and no 401(k) or other
            pre-tax deductions. The California figure is an approximation; your exact amount depends on California&apos;s
            current-year brackets and the State Disability Insurance (SDI) rate.
          </p>
        </section>

        <section id="taxes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why taxes create the gap</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The federal bracket and FICA taxes don&apos;t change by state. The difference comes from California&apos;s state income
            tax, which climbs quickly for middle-to-high earners. Texas has no state income tax, so that line item stays
            at zero.
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• California state income tax: a 9.3% marginal rate at $100k for a single filer, but an effective rate of roughly 5% because lower brackets apply to the first dollars.</li>
            <li>• California SDI: an employee payroll deduction (roughly 1.2–1.3% of wages in recent years) that Texas doesn&apos;t have.</li>
            <li>• Texas state income tax: 0% (but higher property taxes in many counties).</li>
            <li>• Sales tax: comparable, but Texas can be slightly higher depending on city.</li>
          </ul>
        </section>

        <section id="line-by-line" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The 2026 math, line by line</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Example (hypothetical):</strong> a single filer earning $100,000 in salary, taking the 2026 standard
            deduction of $16,100.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Line item (annual)</th>
                  <th className="text-left p-4 font-black text-slate-900">Texas</th>
                  <th className="text-left p-4 font-black text-slate-900">California</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Gross salary</td><td className="p-4 font-bold text-slate-900">$100,000</td><td className="p-4 font-bold text-slate-900">$100,000</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Federal income tax (taxable income $83,900)</td><td className="p-4 font-bold text-slate-900">$13,170</td><td className="p-4 font-bold text-slate-900">$13,170</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Social Security (6.2%)</td><td className="p-4 font-bold text-slate-900">$6,200</td><td className="p-4 font-bold text-slate-900">$6,200</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">Medicare (1.45%)</td><td className="p-4 font-bold text-slate-900">$1,450</td><td className="p-4 font-bold text-slate-900">$1,450</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">State income tax</td><td className="p-4 font-bold text-slate-900">$0</td><td className="p-4 font-bold text-slate-900">≈ $5,000–$5,300</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 text-slate-700">State disability insurance (SDI)</td><td className="p-4 font-bold text-slate-900">$0</td><td className="p-4 font-bold text-slate-900">≈ $1,200–$1,300</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Take-home pay</td><td className="p-4 font-bold text-emerald-600">$79,180</td><td className="p-4 font-bold text-indigo-600">≈ $72,600–$73,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The federal figure uses the 2026 single brackets: 10% on the first $12,400 ($1,240), 12% from $12,400 to $50,400
            ($4,560), and 22% on the remaining $33,500 ($7,370), for a total of $13,170. FICA is 7.65% of wages because $100,000
            is well under the 2026 Social Security wage base of $184,500. The California lines are estimates labeled as
            approximate. Run your own salary through the <a href="/salary-tax-estimator/california/" className="text-indigo-600 font-semibold hover:underline">California salary calculator</a> and
            the <a href="/salary-tax-estimator/texas/" className="text-indigo-600 font-semibold hover:underline">Texas salary calculator</a> for current figures.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <p className="text-emerald-900 font-semibold text-lg">
              📊 The gap: roughly <strong>$6,200–$6,600 a year</strong>, or about $520–$550 a month, in Texas&apos;s favor at the same salary.
            </p>
          </div>
        </section>

        <section id="401k" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What a 401(k) contribution changes</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Traditional 401(k) contributions reduce federal taxable income in both states, and California also lets you
            exclude them from state taxable income. They don&apos;t reduce FICA. Suppose the same worker contributes 10%
            ($10,000) of salary:
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Federal taxable income falls to $73,900 and federal tax to $10,970, a <strong>$2,200</strong> saving (22% of $10,000).</li>
            <li>• Texas take-home becomes $100,000 − $10,000 − $10,970 − $7,650 = <strong>$71,380</strong>, about $7,800 less cash but $10,000 more saved for retirement.</li>
            <li>• In California, the same contribution also trims state tax by roughly 9.3% of $10,000, about $930, because it comes off the top bracket.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            The 2026 employee deferral limit is $24,500 (plus catch-up contributions if you&apos;re 50 or older). Our guide
            to <a href="/blog/max-out-401k-take-home-pay/" className="text-indigo-600 font-semibold hover:underline">how maxing out a 401(k) affects take-home pay</a> goes
            deeper.
          </p>
        </section>

        <section id="costs" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Cost of living: the hidden multiplier</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Take-home pay is only half the story. <strong>Cost of living in California vs Texas</strong> often swings the
            decision. Housing is the biggest lever, followed by childcare, transportation, and insurance.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="text-xl font-black text-slate-900 mb-3">Typical monthly budget on $100k</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <p className="font-bold text-slate-900 mb-2">California Metro</p>
                <ul className="space-y-1">
                  <li>• Rent or mortgage: $2,800 - $3,800</li>
                  <li>• Utilities & insurance: $400 - $600</li>
                  <li>• Transportation: $500 - $700</li>
                  <li>• Groceries & dining: $800 - $1,100</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <p className="font-bold text-slate-900 mb-2">Texas Metro</p>
                <ul className="space-y-1">
                  <li>• Rent or mortgage: $1,800 - $2,600</li>
                  <li>• Utilities & insurance: $350 - $550</li>
                  <li>• Transportation: $450 - $650</li>
                  <li>• Groceries & dining: $700 - $1,000</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="winner" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Which state wins on a $100k salary?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you care about pure purchasing power, Texas often wins thanks to lower housing costs and no state income
            tax. California can still win for career upside, equity compensation, or lifestyle preferences. The smartest
            move is to run the numbers with your real rent, commute, and benefits.
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
            <p className="text-indigo-900 font-semibold">
              🔍 Use a <strong>state-by-state salary calculator</strong> to compare your exact take-home pay and adjust for
              401(k), healthcare, and filing status.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Use the sample budgets above as a sanity check. At the midpoints, rent alone is about $3,300 a month in the
            California metro versus $2,200 in the Texas metro, a $1,100 monthly difference, or $13,200 a year. That is about
            twice the state tax gap. For many renters, housing decides the comparison more than taxes do. Homeowners should
            also compare property taxes: Texas has no state income tax but relies heavily on local property taxes, while
            California&apos;s Proposition 13 limits how fast a home&apos;s assessed value can rise while you own it.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            For a broader view, the <a href="/cost-of-living-calculator/" className="text-indigo-600 font-semibold hover:underline">cost of living calculator</a> compares
            typical costs between cities, and our academy lesson on the <a href="/academy/california-texas-take-home-comparison/" className="text-indigo-600 font-semibold hover:underline">California vs. Texas take-home comparison</a> walks
            through additional scenarios.
          </p>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common comparison mistakes</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Assuming the same salary.</strong> Pay for the same role often differs between metros. Compare real offers, not a fixed $100k.</li>
            <li>• <strong>Using the marginal rate as the average.</strong> California&apos;s 9.3% bracket doesn&apos;t apply to your whole income.</li>
            <li>• <strong>Ignoring payroll deductions.</strong> California SDI comes out of every paycheck; Texas has no equivalent employee deduction.</li>
            <li>• <strong>Forgetting insurance.</strong> Home and auto insurance costs vary a lot between metros in both states.</li>
            <li>• <strong>Moving mid-year without planning.</strong> You&apos;ll likely file a part-year California return for the months you lived there.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">FAQ: California vs Texas salary math</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">Is $100k a good salary in California?</h3>
              <p className="text-lg text-slate-700">
                It&apos;s solid but tighter in coastal metros. You&apos;ll feel more comfortable in inland cities or with dual
                incomes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Does Texas always beat California for take-home pay?</h3>
              <p className="text-lg text-slate-700">
                On taxes alone, yes. But total lifestyle cost depends on housing, family size, and commute.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Is the federal tax different in Texas?</h3>
              <p className="text-lg text-slate-700">
                No. Federal income tax, Social Security and Medicare use the same rules in every state. Only state and local
                taxes differ. See our step-by-step guide to <a href="/blog/how-to-calculate-take-home-pay-2025/" className="text-indigo-600 font-semibold hover:underline">calculating take-home pay</a>.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">What if I work remotely for a California company from Texas?</h3>
              <p className="text-lg text-slate-700">
                California generally taxes nonresidents on income from work performed in California. Wages for work you
                physically do in Texas are generally not California-source income, but days you spend working in California
                can be. Keep records and check with a tax professional if you split time.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-500">This article is educational and is not individualized tax advice.</p>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• IRS, 2026 federal brackets and standard deduction (Rev. Proc. 2025-32); see <a href="https://www.irs.gov/publications/p17" className="text-indigo-600 font-semibold hover:underline">IRS Publication 17</a></li>
            <li>• IRS Publication 15 (Circular E), Social Security and Medicare withholding: <a href="https://www.irs.gov/publications/p15" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p15</a></li>
            <li>• Social Security Administration, 2026 contribution and benefit base: <a href="https://www.ssa.gov/oact/cola/cbb.html" className="text-indigo-600 font-semibold hover:underline">ssa.gov/oact/cola/cbb.html</a></li>
            <li>• California figures are estimates; confirm current rates with the California Franchise Tax Board and Employment Development Department.</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default CaliforniaVsTexasTakeHome2025;

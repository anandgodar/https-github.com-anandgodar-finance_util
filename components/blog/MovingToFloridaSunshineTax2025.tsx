import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const MovingToFloridaSunshineTax2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>⏱️ 7 min read</span>
          <span>•</span>
          <span>🌞 Moving & Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Moving to Florida? The &quot;Sunshine Tax&quot; Savings Explained
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Florida&apos;s no-income-tax status is a magnet for New York and New Jersey earners. But the real savings depend on
          your salary, housing costs, and lifestyle. Here&apos;s how to estimate the <strong>Sunshine State tax savings</strong>
          and avoid surprises.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Simulate your Florida paycheck</h3>
              <p className="text-sm text-slate-600">
                Compare your current state and Florida to see your exact net pay difference.
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
          <li><button onClick={() => scrollToSection('tax-gap')} className="text-indigo-600 hover:underline">1. The state tax gap</button></li>
          <li><button onClick={() => scrollToSection('ny-nj')} className="text-indigo-600 hover:underline">2. New York & New Jersey comparisons</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">3. Worked example: what you really keep</button></li>
          <li><button onClick={() => scrollToSection('salt')} className="text-indigo-600 hover:underline">4. The federal SALT deduction offset</button></li>
          <li><button onClick={() => scrollToSection('costs')} className="text-indigo-600 hover:underline">5. Costs that eat the savings</button></li>
          <li><button onClick={() => scrollToSection('residency')} className="text-indigo-600 hover:underline">6. Residency and domicile: making the move stick</button></li>
          <li><button onClick={() => scrollToSection('remote')} className="text-indigo-600 hover:underline">7. Remote workers and retirees</button></li>
          <li><button onClick={() => scrollToSection('bottom-line')} className="text-indigo-600 hover:underline">8. Bottom line</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">9. FAQ</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">10. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="tax-gap" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Florida&apos;s state income tax advantage</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Florida has no state income tax. That means a high-income household can keep thousands more per year compared
            to New York or New Jersey. The higher your income, the bigger the gap.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Both New York and New Jersey use progressive income taxes, so the rate rises as income rises. At the very top,
            New York&apos;s state rate reaches 10.9% and New Jersey&apos;s reaches 10.75%, though those top rates apply only to
            very high incomes. Most earners pay a lower effective rate. New York City residents also pay a separate city
            income tax on top of the state tax, which is why NYC-to-Florida moves often show the largest savings.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Federal income tax and FICA don&apos;t change when you move. For 2026, you&apos;ll owe the same federal brackets and
            the same 7.65% employee FICA (6.2% Social Security on wages up to $184,500, plus 1.45% Medicare) in Miami as in
            Manhattan. The savings come only from state and local taxes.
          </p>
        </section>

        <section id="ny-nj" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">New York and New Jersey take-home examples</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            On a $150k salary, moving from NYC or North Jersey to Miami or Tampa can mean several thousand dollars, and for
            NYC residents often more than $10,000, in extra annual take-home pay. Federal taxes and deductions still apply,
            but the state income tax line disappears. Compare your exact numbers with the <a href="/salary-tax-estimator/new-york/" className="text-indigo-600 font-semibold hover:underline">New York salary calculator</a>,
            the <a href="/salary-tax-estimator/new-jersey/" className="text-indigo-600 font-semibold hover:underline">New Jersey salary calculator</a> and
            the <a href="/salary-tax-estimator/florida/" className="text-indigo-600 font-semibold hover:underline">Florida salary calculator</a>.
          </p>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: what you really keep</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Example (hypothetical):</strong> a single renter earns $150,000. To keep the math simple, assume her
            state and local income taxes work out to an effective 6% of her salary (your real effective rate depends on your
            state, city and deductions, so check yours with a calculator).
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <ul className="space-y-1 text-base text-emerald-900 font-semibold">
              <li>• State and local income tax eliminated: $150,000 × 6% = <strong>$9,000/year</strong></li>
              <li>• Higher renters and auto insurance in Florida (illustrative): −$2,000/year</li>
              <li>• Net if she takes the standard deduction either way: <strong>about $7,000/year</strong></li>
              <li>• Net if she itemized and her state tax deduction saved her 24% federally: $9,000 − $2,160 − $2,000 = <strong>about $4,840/year</strong></li>
            </ul>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Rent is the swing factor. If her Florida rent is $300 a month lower, she gains another $3,600 a year; if it&apos;s
            $300 higher, most of the tax savings vanish. That is why the tax line alone never answers the question.
          </p>
        </section>

        <section id="salt" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The federal SALT deduction offset</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you itemize deductions, state and local taxes (SALT) you pay in New York or New Jersey reduce your federal
            taxable income, up to a cap. The cap rose to $40,000 for 2025 and $40,400 for 2026, reduced for incomes above
            $505,000 in 2026 (but never below $10,000). With a higher cap, more NY and NJ itemizers get some federal benefit
            from their state taxes, which means part of what they pay to the state already comes back as a lower federal
            bill.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Moving to Florida removes that state tax, but also removes the deduction. The net savings are therefore a bit
            smaller than the raw state tax figure for itemizers. If you take the standard deduction ($16,100 single or $32,200
            married filing jointly for 2026), there is no offset and you keep the full state tax savings.
          </p>
        </section>

        <section id="costs" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Costs that can eat the savings</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Home insurance premiums are higher in many coastal areas.</li>
            <li>• Property taxes vary widely by county.</li>
            <li>• Summer utilities and hurricane prep can add new budget items.</li>
            <li>• Flood insurance may be needed in some areas, and standard homeowners policies typically don&apos;t cover flood damage.</li>
            <li>• Florida charges a 6% state sales tax, and many counties add a local surtax.</li>
            <li>• Car dependence: many Florida metros require a car for most trips, which adds payments, insurance and fuel.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            Homeowners do get a break: Florida offers a homestead exemption for a primary residence and limits how fast the
            assessed value of a homesteaded home can rise each year. Buyers of a home that was previously homesteaded should
            expect the assessment to reset, so ask the county property appraiser how the tax bill will change after the sale.
            Our <a href="/cost-of-living-calculator/" className="text-indigo-600 font-semibold hover:underline">cost of living calculator</a> helps
            compare everyday costs between your current city and a Florida metro.
          </p>
        </section>

        <section id="residency" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Residency and domicile: making the move stick</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            You stop owing New York or New Jersey resident tax only when you actually stop being a resident. Both states
            look at your <strong>domicile</strong>, the place you intend as your permanent home, and both pay close attention
            to high earners who leave.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            New York has a second test as well: even if your domicile is elsewhere, you can be taxed as a <strong>statutory
            resident</strong> if you keep a permanent place of abode in New York and spend more than 183 days there during
            the year. Keeping an apartment in the city and spending part of the year there can leave you taxed as a full
            resident. When reviewing a domicile change, New York looks at factors such as where your main home is, where you
            work, how you spend your time, where your family lives, and where you keep the possessions that matter most to you.
          </p>
          <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 text-lg mb-2">Steps that support a Florida domicile</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• Get a Florida driver&apos;s license and register your vehicles in Florida</li>
              <li>• Register to vote in Florida and update your address with banks, employers and the IRS</li>
              <li>• Apply for the homestead exemption if you buy a primary home</li>
              <li>• Consider filing a Declaration of Domicile with your county clerk</li>
              <li>• Keep a calendar or records showing where you spend each day</li>
              <li>• Move the things that matter most to you, not just your mail</li>
            </ul>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            In the year you move, expect to file a part-year resident return in your old state for the months before the
            move. Our <a href="/blog/mid-year-move-part-year-resident-tax-guide-2026/" className="text-indigo-600 font-semibold hover:underline">part-year resident tax guide</a> walks
            through how that works. For a high-income move, a tax professional familiar with residency audits is worth
            consulting.
          </p>
        </section>

        <section id="remote" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Remote workers and retirees</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Remote workers:</strong> moving to Florida while keeping a New York employer doesn&apos;t automatically
            end New York tax on your wages. New York applies a &quot;convenience of the employer&quot; rule that can treat
            days worked from home out of state as New York workdays when the remote arrangement is for your convenience rather
            than your employer&apos;s necessity. Read our guide to <a href="/blog/remote-work-taxes-reciprocity-convenience-rule/" className="text-indigo-600 font-semibold hover:underline">remote work taxes and the convenience rule</a> before
            you assume the savings.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Retirees:</strong> Florida doesn&apos;t tax retirement account withdrawals, pensions or investment income
            at the state level, and it has no estate or inheritance tax. New York has its own estate tax, and New Jersey has an
            inheritance tax for some heirs. Social Security and federal taxes on IRA and 401(k) withdrawals are unaffected by
            the move.
          </p>
        </section>

        <section id="bottom-line" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Bottom line: is the Sunshine Tax real?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Yes, the tax savings are real — but so are the costs. A Florida move is usually a net win for higher incomes
            and remote workers who can choose a lower-cost city. Run your numbers before you pack.
          </p>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Does Florida have a state income tax?</h3>
              <p className="text-slate-700">No. Florida doesn&apos;t tax wages, salaries, or most other personal income at the state level. You still owe federal income tax and FICA.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How many days do I need to spend in Florida?</h3>
              <p className="text-slate-700">There is no single magic number for leaving New York. New York&apos;s statutory residency test uses more than 183 days in the state combined with a permanent place of abode there, and domicile is judged on your overall ties. Keep good records of where you spend your time.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Can I keep my New York apartment?</h3>
              <p className="text-slate-700">You can, but keeping a permanent place of abode in New York makes the statutory residency test easier to trigger and can weaken your domicile case. Track your days carefully if you keep one.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is Florida cheaper overall?</h3>
              <p className="text-slate-700">It depends on the city and your situation. Insurance costs in many coastal areas can be high, while housing costs vary widely. Compare full budgets, not just tax rates.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500">This article is educational and is not individualized tax or legal advice.</p>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• IRS Publication 17, itemized deductions including state and local taxes: <a href="https://www.irs.gov/publications/p17" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p17</a></li>
            <li>• IRS Publication 15, federal and FICA withholding: <a href="https://www.irs.gov/publications/p15" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p15</a></li>
            <li>• Social Security Administration, 2026 contribution and benefit base: <a href="https://www.ssa.gov/oact/cola/cbb.html" className="text-indigo-600 font-semibold hover:underline">ssa.gov/oact/cola/cbb.html</a></li>
            <li>• Check New York and New Jersey residency rules with each state&apos;s tax department before you move.</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default MovingToFloridaSunshineTax2025;

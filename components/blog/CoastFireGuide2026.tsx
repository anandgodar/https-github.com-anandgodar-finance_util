import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const CoastFireGuide2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>🌊 Coast FIRE</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Coast FIRE: How to &quot;Retire&quot; at 30 Without Stopping Work Completely
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Coast FIRE means you invest aggressively early, then let compounding carry you to retirement while you work in
          lower-stress roles. You stop saving, but your portfolio keeps growing. Here is the formula, a table of coast
          targets by age, and the risks that are easy to overlook.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate your Coast FIRE age</h3>
              <p className="text-sm text-slate-600">
                Use the Wealth Projector to see when your investments can coast.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Wealth Projector →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('definition')} className="text-indigo-600 hover:underline">1. What Coast FIRE means</button></li>
          <li><button onClick={() => scrollToSection('math')} className="text-indigo-600 hover:underline">2. The math behind coasting</button></li>
          <li><button onClick={() => scrollToSection('table')} className="text-indigo-600 hover:underline">3. Coast targets by age</button></li>
          <li><button onClick={() => scrollToSection('timeline')} className="text-indigo-600 hover:underline">4. Example timeline</button></li>
          <li><button onClick={() => scrollToSection('risks')} className="text-indigo-600 hover:underline">5. Risks and when it doesn&apos;t fit</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">6. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">7. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="definition" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Coast FIRE is about timing</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            You build enough early so compound growth can take you to your full FI number without more contributions.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Coast FIRE is a milestone, not a full retirement. Once you reach it, your existing investments are projected to
            grow into your full{' '}
            <a href="/blog/fi-number-math-financial-independence/" className="text-indigo-600 font-semibold hover:underline">FI number</a>{' '}
            by a traditional retirement age, even if you never add another dollar. You still need to earn enough to pay
            your current bills, but you no longer need to earn enough to save on top of them. That freedom is what lets some
            people switch to part-time work, a lower-paying career they enjoy, or longer breaks between jobs.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Milestone</th>
                  <th className="text-left p-4 font-black text-slate-900">What it means</th>
                  <th className="text-left p-4 font-black text-slate-900">Still need a paycheck?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Coast FIRE</td>
                  <td className="p-4 text-slate-700">Investments can grow to your FI number by your target age with no new contributions</td>
                  <td className="p-4 font-bold text-slate-900">Yes — enough to cover living costs</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Full FIRE</td>
                  <td className="p-4 text-slate-700">Portfolio is already about 25x annual spending</td>
                  <td className="p-4 font-bold text-slate-900">No — withdrawals can cover spending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="math" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How the math works</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The earlier you invest, the more time your portfolio has to grow. That&apos;s why coast targets drop sharply if
            you start in your 20s instead of your 30s.
          </p>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <p className="text-3xl font-black mb-2">Coast Number = FI Number ÷ (1 + r)<sup>years</sup></p>
            <p className="text-indigo-100 text-lg">r = expected annual return after inflation; years = time until you plan to retire</p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Use a <strong>real</strong> (inflation-adjusted) return if your FI number is in today&apos;s dollars. This is the
            most common mistake in Coast FIRE math: plugging in a nominal 7%–10% return against a target stated in today&apos;s
            money makes the coast number look much smaller than it really is. The U.S. stock market has historically returned
            roughly 10% a year before inflation, but a diversified portfolio after inflation and fees is often modeled
            closer to 4%–6%. None of these rates is guaranteed.
          </p>
          <h3 className="text-2xl font-black text-slate-900 mt-8">Four steps to your coast number</h3>
          <ol className="list-decimal list-inside space-y-2 text-lg text-slate-700">
            <li>Estimate your annual retirement spending in today&apos;s dollars.</li>
            <li>Turn it into an FI number, for example spending × 25 at a 4% withdrawal rate.</li>
            <li>Pick a retirement age and count the years between now and then.</li>
            <li>Divide the FI number by (1 + real return) raised to that number of years, then compare the result with what you have invested today.</li>
          </ol>
        </section>

        <section id="table" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Coast targets by age</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The table shows how much you would need invested today to reach a <strong>$1.5 million FI number (in today&apos;s
            dollars) at age 65</strong>, assuming no further contributions and a steady real return. These are hypothetical
            projections, not predictions.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Current age</th>
                  <th className="text-left p-4 font-black text-slate-900">4% real</th>
                  <th className="text-left p-4 font-black text-slate-900">5% real</th>
                  <th className="text-left p-4 font-black text-slate-900">6% real</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-slate-900">25</td>
                  <td className="p-4 text-slate-700">$312,434</td>
                  <td className="p-4 text-slate-700">$213,069</td>
                  <td className="p-4 text-slate-700">$145,833</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-slate-900">30</td>
                  <td className="p-4 text-slate-700">$380,123</td>
                  <td className="p-4 text-slate-700">$271,935</td>
                  <td className="p-4 text-slate-700">$195,158</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-slate-900">35</td>
                  <td className="p-4 text-slate-700">$462,478</td>
                  <td className="p-4 text-slate-700">$347,066</td>
                  <td className="p-4 text-slate-700">$261,165</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-slate-900">40</td>
                  <td className="p-4 text-slate-700">$562,675</td>
                  <td className="p-4 text-slate-700">$442,954</td>
                  <td className="p-4 text-slate-700">$349,498</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-slate-900">45</td>
                  <td className="p-4 text-slate-700">$684,580</td>
                  <td className="p-4 text-slate-700">$565,334</td>
                  <td className="p-4 text-slate-700">$467,707</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Two things stand out. Waiting ten years — from 25 to 35 — raises the 5% coast number by about 63%. And the
            return assumption matters as much as age: at 30, the gap between a 4% and 6% assumption is nearly $185,000. Our
            post on the{' '}
            <a href="/blog/cost-of-waiting-compound-interest/" className="text-indigo-600 font-semibold hover:underline">cost of waiting to invest</a>{' '}
            explores the same effect.
          </p>
        </section>

        <section id="timeline" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Example timeline</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you need $1.5M by age 60, investing $200k by age 30 could be enough to coast only under optimistic
            assumptions. At a 7% real return, $200,000 grows to about $1.52 million in 30 years. At a more cautious 5% real
            return it grows to about $864,000 in today&apos;s dollars, and the coast number for $1.5 million at 60 is about
            $347,000. The exact number depends on your return assumptions, so test more than one.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold text-lg">
              📊 <strong>Hypothetical example:</strong> A 32-year-old has $150,000 invested and an FI target of $1.2 million
              (today&apos;s dollars) at 65. At a 5% real return, today&apos;s coast number is $1,200,000 ÷ 1.05<sup>33</sup> ≈
              <strong> $239,800</strong>, so they are not there yet. If they keep investing $15,000 a year, after 8 years
              (age 40) their balance is about $364,900, while the coast number for the remaining 25 years has risen to about
              $354,400. At that point they could, in theory, stop contributing and let the portfolio grow to roughly
              $1.2 million by 65.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            You can run your own version with the{' '}
            <a href="/wealth-investment-projector/" className="text-indigo-600 font-semibold hover:underline">wealth and investment projector</a>{' '}
            or test a full early-retirement plan in the{' '}
            <a href="/early-retirement-fire-planner/" className="text-indigo-600 font-semibold hover:underline">FIRE planner</a>.
          </p>
        </section>

        <section id="risks" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Risks and when Coast FIRE doesn&apos;t fit</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-slate-700">
            <li><strong>Return risk:</strong> Coasting relies on decades of growth. A weak decade near the end can leave you short, so many people keep making small contributions as a buffer.</li>
            <li><strong>Lifestyle creep:</strong> If your spending rises, your FI number rises with it and the coast number you hit is no longer enough.</li>
            <li><strong>Lower income, fewer benefits:</strong> Part-time or lower-paid work may mean losing an employer 401(k) match or employer health coverage. Marketplace coverage can help; you can estimate premium credits with our{' '}
              <a href="/aca-health-insurance-subsidy-calculator/" className="text-indigo-600 font-semibold hover:underline">ACA subsidy calculator</a>.</li>
            <li><strong>Social Security effects:</strong> Benefits are based on your highest 35 years of earnings, so years of lower pay can reduce your future benefit.</li>
            <li><strong>No emergency cushion:</strong> Coasting with no cash reserve can force you to sell investments in a downturn. Keep an emergency fund separate from the coast portfolio.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently asked questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Do I stop investing completely once I hit Coast FIRE?</h3>
              <p className="text-slate-700">
                You can, but you don&apos;t have to. Continuing even modest contributions — especially enough to capture any
                employer match — adds a margin of safety against below-average returns.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What return should I assume?</h3>
              <p className="text-slate-700">
                There is no correct answer. Testing a range, such as 4%, 5% and 6% real, shows how sensitive your plan is.
                If the plan only works at the highest rate, treat it as unfinished.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Does money in a 401(k) count?</h3>
              <p className="text-slate-700">
                Yes. Retirement accounts are often the main coast portfolio because they are meant for later life anyway.
                Remember that traditional balances will be taxed when withdrawn.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is Coast FIRE the same as Barista FIRE?</h3>
              <p className="text-slate-700">
                They overlap. Both are informal community terms. Coast FIRE usually means you don&apos;t touch the portfolio
                until retirement age; Barista FIRE usually means you withdraw some money now and cover the rest with
                part-time income.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li><a href="https://www.investor.gov/" className="text-indigo-600 hover:underline">Investor.gov</a> (SEC) — compound interest basics</li>
            <li><a href="https://www.ssa.gov/" className="text-indigo-600 hover:underline">Social Security Administration</a> — how benefits are calculated</li>
            <li><a href="https://www.healthcare.gov/" className="text-indigo-600 hover:underline">HealthCare.gov</a> — marketplace coverage</li>
          </ul>
          <p className="text-sm text-slate-500 italic">
            This article is educational and not individualized financial or investment advice.
          </p>
        </section>
      </article>
    </div>
  );
};

export default CoastFireGuide2026;

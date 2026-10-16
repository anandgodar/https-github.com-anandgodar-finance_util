import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const FinancialOrderOfOperations2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>🧭 Financial Strategy</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Where Should Your Next Dollar Go? The Financial Order of Operations
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          When money is limited, the order matters. Start with cash safety, grab your employer match, and crush high
          interest debt before chasing lower-return goals.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Check your emergency fund first</h3>
              <p className="text-sm text-slate-600">
                Make sure your Emergency Guard status is secure before the next step.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.EMERGENCY_FUND)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Emergency Guard →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('flow')} className="text-indigo-600 hover:underline">1. The flowchart in words</button></li>
          <li><button onClick={() => scrollToSection('emergency')} className="text-indigo-600 hover:underline">2. Emergency fund first</button></li>
          <li><button onClick={() => scrollToSection('match')} className="text-indigo-600 hover:underline">3. Employer match and high-interest debt</button></li>
          <li><button onClick={() => scrollToSection('accounts')} className="text-indigo-600 hover:underline">4. Tax-advantaged accounts (2026 limits)</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">5. Worked example</button></li>
          <li><button onClick={() => scrollToSection('exceptions')} className="text-indigo-600 hover:underline">6. When to change the order</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">8. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="flow" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The order of operations</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Build a starter emergency fund.</li>
            <li>• Capture the employer match.</li>
            <li>• Pay off high-interest debt.</li>
            <li>• Max retirement accounts, then invest extra.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            That is the short version. The longer version below adds a few steps in between. The logic is simple: deal with
            risks that can cause a crisis first, then grab the highest guaranteed returns, then move to goals with lower or
            uncertain returns.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Step</th>
                  <th className="text-left p-4 font-black text-slate-900">Action</th>
                  <th className="text-left p-4 font-black text-slate-900">Why here</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">0</td><td className="p-4 text-slate-700">Cover essentials and minimum debt payments</td><td className="p-4 text-slate-700">Missed payments bring fees, credit damage and collections</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">1</td><td className="p-4 text-slate-700">Starter emergency fund (about one month of expenses)</td><td className="p-4 text-slate-700">Keeps small surprises off a credit card</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">2</td><td className="p-4 text-slate-700">Contribute enough to get the full employer match</td><td className="p-4 text-slate-700">An immediate return that is hard to beat</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">3</td><td className="p-4 text-slate-700">Pay off high-interest debt (credit cards, many personal loans)</td><td className="p-4 text-slate-700">Paying a 20%+ APR is a guaranteed return of that rate</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">4</td><td className="p-4 text-slate-700">Full emergency fund (3–6 months)</td><td className="p-4 text-slate-700">Protects investments from forced selling</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">5</td><td className="p-4 text-slate-700">HSA (if eligible) and IRA</td><td className="p-4 text-slate-700">Tax advantages, more investment choices</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">6</td><td className="p-4 text-slate-700">Increase 401(k) toward the annual limit</td><td className="p-4 text-slate-700">More tax-advantaged room</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">7</td><td className="p-4 text-slate-700">Taxable investing, extra mortgage payments, other goals</td><td className="p-4 text-slate-700">Flexible money once the basics are covered</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="emergency" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Emergency fund before everything else</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Cash prevents you from using credit cards or selling investments during a crisis. Even one month of expenses
            changes your risk profile.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Keep it somewhere boring and accessible, such as an FDIC-insured high-yield savings account. The starter fund
            is deliberately small so you can move on to the match and high-interest debt quickly; you come back to build the
            full 3–6 months later. Households with one income, variable pay or self-employment income often aim for the
            higher end. Our guide to the{' '}
            <a href="/blog/6-month-emergency-fund-rule/" className="text-indigo-600 font-semibold hover:underline">6-month emergency fund rule</a>{' '}
            helps you size it.
          </p>
        </section>

        <section id="match" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Match beats most investments</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A 100% employer match is an instant return. After that, high-interest debt typically beats market returns on a
            risk-adjusted basis.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Even a 50% match — say, 50 cents per dollar on the first 6% of pay — is an immediate 50% return on those dollars,
            before any market growth. Check whether your plan has a vesting schedule; unvested match money can be forfeited
            if you leave early.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Paying off a credit card at 24% APR is equivalent to earning a guaranteed 24% — far above what stocks have
            historically returned (the S&amp;P 500 has averaged roughly 10% a year before inflation over the long run, with
            large swings). Where to draw the line for &quot;high interest&quot; is a judgment call; many people use something
            like 7%–8% as a rough cutoff. Lower-rate debt such as many mortgages can usually be paid on schedule while you
            invest. The{' '}
            <a href="/blog/snowball-vs-avalanche-debt-payoff/" className="text-indigo-600 font-semibold hover:underline">snowball vs. avalanche guide</a>{' '}
            compares two ways to attack multiple debts.
          </p>
        </section>

        <section id="accounts" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Tax-advantaged accounts: 2026 limits</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-slate-700">
            <li><strong>HSA:</strong> $4,400 self-only or $8,750 family (plus $1,000 catch-up at 55+), if you have an HSA-eligible high-deductible health plan. Payroll contributions also skip FICA tax.</li>
            <li><strong>IRA:</strong> $7,500 (plus $1,100 catch-up at 50+). Direct Roth IRA contributions phase out between $153,000 and $168,000 of modified AGI for single filers and $242,000–$252,000 for married couples filing jointly.</li>
            <li><strong>401(k), 403(b), 457:</strong> $24,500 employee deferral, plus $8,000 catch-up at 50+ or $11,250 at ages 60–63.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            Whether to choose Roth or traditional depends mainly on your tax rate now versus in retirement; see{' '}
            <a href="/blog/roth-vs-traditional-401k-tax-bracket-bet/" className="text-indigo-600 font-semibold hover:underline">Roth vs. traditional 401(k)</a>.
          </p>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example</h2>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <p className="text-emerald-900 font-semibold text-lg">
              📊 <strong>Hypothetical example:</strong> A single filer earns $70,000. Their employer matches 50% of
              contributions up to 6% of pay, and they owe $6,000 on a credit card at 24% APR.
            </p>
            <ul className="mt-2 space-y-1 text-base text-emerald-900">
              <li>• <strong>Step 1:</strong> Save one month of expenses in a savings account.</li>
              <li>• <strong>Step 2:</strong> Contribute 6% ($4,200 a year) to get the full $2,100 match.</li>
              <li>• <strong>Step 3:</strong> Send $600 a month to the card. At 24% APR (2% a month) the balance is gone in about 12 months, with roughly $760 of interest. Left alone, the balance would cost about $1,440 in interest in the first year.</li>
              <li>• <strong>Step 4:</strong> Redirect the $600 a month to finish a 3–6 month emergency fund.</li>
              <li>• <strong>Step 5 onward:</strong> Send that $600 to an IRA ($7,500 limit) and then raise the 401(k) contribution.</li>
            </ul>
          </div>
        </section>

        <section id="exceptions" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When to change the order</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-slate-700">
            <li><strong>Unstable job or health:</strong> Build the full emergency fund before aggressive debt payoff.</li>
            <li><strong>Debt in collections or past due:</strong> Contact the lender and stabilize payments first. The CFPB has free guidance on dealing with debt collectors.</li>
            <li><strong>Federal student loans:</strong> Repayment rules are changing in 2026 — a new Repayment Assistance Plan opens July 1, 2026 and SAVE is ending. Check your options at studentaid.gov before prepaying.</li>
            <li><strong>Big near-term goal:</strong> Money needed within a few years (a home down payment, for example) usually belongs in cash or short-term savings, not stocks.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            For a closer look at the trade-off in the middle steps, read{' '}
            <a href="/blog/should-i-pay-off-debt-or-invest-2025/" className="text-indigo-600 font-semibold hover:underline">should I pay off debt or invest</a>.
          </p>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently asked questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Should I stop the 401(k) match to pay off credit cards faster?</h3>
              <p className="text-slate-700">
                Usually not. The match is an immediate return on your contribution, which is typically larger than the
                interest you would save. Keep the match and put everything else toward the card.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Do I need 6 months saved before investing at all?</h3>
              <p className="text-slate-700">
                No. A starter fund plus the employer match can happen first. You build the rest alongside or after paying
                off high-interest debt.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Where does an HSA fit if I&apos;m healthy?</h3>
              <p className="text-slate-700">
                If you are eligible, an HSA can be one of the most tax-efficient accounts available, which is why it sits
                before maxing a 401(k). See{' '}
                <a href="/blog/hsa-vs-401k-fica-tax-savings-2026/" className="text-indigo-600 font-semibold hover:underline">HSA vs. 401(k)</a>.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Should I pay extra on my mortgage?</h3>
              <p className="text-slate-700">
                It is a guaranteed return equal to your rate, but money in home equity is hard to access. Most people
                handle it after retirement savings and the emergency fund are on track.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-4">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>IRS Notice 2025-67 (2026 401(k) and IRA limits) — <a href="https://www.irs.gov/publications/p590a" className="text-indigo-600 hover:underline">IRS Publication 590-A</a></li>
            <li>IRS Rev. Proc. 2025-19 (2026 HSA limits) — <a href="https://www.irs.gov/publications/p969" className="text-indigo-600 hover:underline">IRS Publication 969</a></li>
            <li><a href="https://www.consumerfinance.gov/" className="text-indigo-600 hover:underline">Consumer Financial Protection Bureau</a> — debt and emergency savings</li>
            <li><a href="https://studentaid.gov/" className="text-indigo-600 hover:underline">StudentAid.gov</a> — federal student loan repayment</li>
          </ul>
          <p className="text-sm text-slate-500 italic">
            This article is educational and not individualized financial advice.
          </p>
        </section>
      </article>
    </div>
  );
};

export default FinancialOrderOfOperations2026;

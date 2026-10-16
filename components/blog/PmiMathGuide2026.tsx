import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const PmiMathGuide2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>📉 Mortgages</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          The Mathematics of PMI: How to Get Rid of It Faster
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          PMI is the monthly fee for putting less than 20% down. The math is simple: increase equity faster and PMI goes
          away sooner. Here&apos;s how the <strong>loan-to-value ratio</strong> drives everything.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Check your LTV and PMI drop-off date</h3>
              <p className="text-sm text-slate-600">
                Estimate when you&apos;ll reach 80% LTV and how extra payments speed it up.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Mortgage Pro →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('pmi')} className="text-indigo-600 hover:underline">1. What PMI is</button></li>
          <li><button onClick={() => scrollToSection('ltv')} className="text-indigo-600 hover:underline">2. LTV math and the 80% rule</button></li>
          <li><button onClick={() => scrollToSection('strategies')} className="text-indigo-600 hover:underline">3. Four ways to drop PMI faster</button></li>
          <li><button onClick={() => scrollToSection('timeline')} className="text-indigo-600 hover:underline">4. Example timeline</button></li>
          <li><button onClick={() => scrollToSection('fha')} className="text-indigo-600 hover:underline">5. FHA loans work differently</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">6. Common mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">8. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="pmi" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">PMI is the cost of a smaller down payment</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Private mortgage insurance protects the lender, not you. On conventional loans it typically costs about 0.3% to
            1.5% of the loan per year, paid monthly until you reach enough equity. Where you land in that range depends mainly
            on your credit score and your loan-to-value ratio: a higher score and a bigger down payment mean a cheaper policy.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            PMI isn&apos;t always bad. If waiting years to save 20% would keep you renting while prices and rents rise, paying PMI
            for a while can be a reasonable trade. The goal is to know what it costs and to have a plan to remove it.
          </p>
        </section>

        <section id="ltv" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The LTV rule that turns PMI off</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The key threshold is 80% loan-to-value (LTV). Once your loan balance is 80% of the home&apos;s value, you can
            request PMI removal. It must drop at 78% under most conventional loans.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-lg text-slate-700">
              <strong>LTV = loan balance ÷ home value.</strong> On a $400,000 purchase, 80% LTV is a $320,000 balance and 78%
              LTV is a $312,000 balance.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The details matter. Under the federal Homeowners Protection Act, which covers most conventional loans on a primary
            residence:
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Borrower-requested cancellation at 80%</strong> uses the <em>original value</em> (generally the lower of purchase price or appraisal) and counts your actual payments, including extra principal. You must ask in writing, be current, have a good payment history, and the lender may require proof that the value hasn&apos;t fallen and that there are no second liens.</li>
            <li>• <strong>Automatic termination at 78%</strong> is based on the <em>original amortization schedule</em>. Extra payments do not move this date — so if you prepay, you have to request removal yourself.</li>
            <li>• <strong>Final termination</strong> happens at the midpoint of the loan term (year 15 on a 30-year loan) if you are current, even if neither threshold has been reached.</li>
          </ul>
        </section>

        <section id="strategies" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Four ways to eliminate PMI faster</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Make extra principal payments monthly.</strong> Every dollar of extra principal moves your balance toward the 80% line. Mark it clearly as principal.</li>
            <li>• <strong>Make a lump-sum payment.</strong> A bonus or tax refund applied to principal can jump you straight to 80%. Some servicers will also recast (re-amortize) the loan to lower your payment.</li>
            <li>• <strong>Request a new appraisal if your home value rises.</strong> Value-based removal is set by the loan investor and servicer, not by the 80% original-value rule. It commonly requires the loan to be seasoned for a minimum period (often at least two years) and may require a lower LTV, such as 75%, for younger loans. Ask your servicer for its exact rules before you pay for an appraisal.</li>
            <li>• <strong>Refinance into a new loan with 20% equity.</strong> Only worth it if the new rate and closing costs make sense on their own; see the{' '}
              <a href="/blog/loan-comparison-refinance-guide-2025/" className="text-indigo-600 font-semibold hover:underline">refinance break-even guide</a>.</li>
          </ul>
        </section>

        <section id="timeline" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Example: shaving PMI by about two years</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Hypothetical: a $400,000 home bought with 10% down, so a $360,000 30-year fixed loan at an illustrative 6.5% rate.
            Principal and interest are $2,275 a month. Assume PMI of 0.5% of the original loan per year, or $150 a month.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Extra principal / month</th>
                  <th className="text-left p-4 font-black text-slate-900">Reach 80% ($320,000)</th>
                  <th className="text-left p-4 font-black text-slate-900">Reach 78% ($312,000)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">$0</td>
                  <td className="p-4 text-slate-700">Month 95 (~7.9 years)</td>
                  <td className="p-4 font-bold text-slate-900">Month 109 (~9.1 years)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">$150</td>
                  <td className="p-4 text-slate-700">Month 70 (~5.8 years)</td>
                  <td className="p-4 font-bold text-slate-900">Month 81 (but you must request)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">$300</td>
                  <td className="p-4 text-slate-700">Month 56 (~4.7 years)</td>
                  <td className="p-4 font-bold text-slate-900">Month 65 (but you must request)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Paying $150 extra per month moves the 80% date up by 25 months. At $150 a month of PMI, requesting removal at month
            70 instead of month 95 saves about $3,750 of premiums; compared with waiting for automatic termination at month 109,
            it saves about $5,850. The $10,500 of extra principal you paid by month 70 isn&apos;t lost — it is equity, and it
            also cuts future interest.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The appraisal route can be even faster. In the same example the balance after three years is about $347,100. If the
            home appraised at $480,000, the LTV on current value would be about 72%, which could qualify under many servicers&apos;
            value-based rules — while the original-value LTV would still be about 87%.
          </p>
        </section>

        <section id="fha" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">FHA loans work differently</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            FHA loans don&apos;t have PMI; they have a mortgage insurance premium (MIP) set by the government. There is an upfront
            premium, usually financed into the loan, plus an annual premium paid monthly. For most new FHA loans the annual MIP is
            0.55% of the loan. If you put down less than 10%, annual MIP generally lasts for the life of the loan; with 10% or
            more down it ends after 11 years. Hitting 80% LTV does not cancel FHA MIP — the usual exit is refinancing into a
            conventional loan once you have enough equity.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Hypothetical: 3.5% down on a $400,000 home is a $386,000 base loan, and 0.55% of that is roughly $177 a month in the
            first year. Compare that with a conventional quote at the same down payment before choosing a loan type.
          </p>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Waiting for automatic removal after prepaying.</strong> The 78% date follows the original schedule, so you have to ask.</li>
            <li>• <strong>Starving your emergency fund to kill PMI.</strong> Home equity is hard to tap in a crisis; keep a cushion first. Our <a href="/emergency-fund-guard/" className="text-indigo-600 font-semibold hover:underline">emergency fund calculator</a> can help size it.</li>
            <li>• <strong>Ignoring higher-interest debt.</strong> Paying off a credit card at 20%+ usually beats prepaying a mortgage to remove PMI.</li>
            <li>• <strong>Paying for an appraisal without checking the rules.</strong> Confirm the servicer&apos;s seasoning and LTV requirements and its approved appraisal process first.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently asked questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Do home improvements count toward PMI removal?</h3>
              <p className="text-slate-700">
                They can, if your servicer accepts a new appraisal that reflects the added value. The original-value 80% rule
                ignores improvements, so this falls under the servicer&apos;s value-based policy.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is lender-paid PMI better?</h3>
              <p className="text-slate-700">
                With lender-paid mortgage insurance you pay a higher interest rate instead of a monthly premium. It can&apos;t be
                cancelled — the higher rate stays until you sell or refinance — so it tends to fit people who expect to move or
                refinance soon.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Does PMI apply to VA loans?</h3>
              <p className="text-slate-700">
                No. VA loans don&apos;t charge monthly mortgage insurance, though most borrowers pay a one-time VA funding fee.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How do I estimate my own removal date?</h3>
              <p className="text-slate-700">
                Find the month your balance reaches 80% of the original value on an amortization schedule. The{' '}
                <a href="/mortgage-payment-calculator/" className="text-indigo-600 font-semibold hover:underline">mortgage payment calculator</a>{' '}
                shows your schedule, and the{' '}
                <a href="/blog/piti-explained-mortgage-payment-breakdown/" className="text-indigo-600 font-semibold hover:underline">PITI breakdown guide</a>{' '}
                shows how PMI fits into the full payment.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Consumer Financial Protection Bureau — PMI cancellation rights under the Homeowners Protection Act: <a href="https://www.consumerfinance.gov/" className="text-indigo-600 font-semibold hover:underline">consumerfinance.gov</a></li>
            <li>• Federal Housing Finance Agency: <a href="https://www.fhfa.gov/" className="text-indigo-600 font-semibold hover:underline">fhfa.gov</a></li>
          </ul>
          <p className="text-sm text-slate-500">
            Examples are hypothetical and computed with the standard amortization formula; PMI pricing and removal rules vary by
            lender and loan. This article is educational and is not individualized financial or lending advice.
          </p>
        </section>
      </article>
    </div>
  );
};

export default PmiMathGuide2026;

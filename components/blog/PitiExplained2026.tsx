import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const PitiExplained2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>🏡 Mortgages</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          PITI Explained: Why Your Mortgage Payment Is Higher Than the Sticker Price
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          The list price doesn&apos;t tell you the monthly payment. <strong>PITI</strong> stands for principal, interest, taxes,
          and insurance — the four pieces that actually decide what you pay each month.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Estimate your true PITI payment</h3>
              <p className="text-sm text-slate-600">
                Account for taxes and insurance so your mortgage estimate matches reality.
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
          <li><button onClick={() => scrollToSection('piti')} className="text-indigo-600 hover:underline">1. What PITI means</button></li>
          <li><button onClick={() => scrollToSection('principal')} className="text-indigo-600 hover:underline">2. Principal and interest</button></li>
          <li><button onClick={() => scrollToSection('taxes')} className="text-indigo-600 hover:underline">3. Property taxes</button></li>
          <li><button onClick={() => scrollToSection('insurance')} className="text-indigo-600 hover:underline">4. Homeowners insurance</button></li>
          <li><button onClick={() => scrollToSection('escrow')} className="text-indigo-600 hover:underline">5. How escrow collects taxes and insurance</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">6. A real payment example</button></li>
          <li><button onClick={() => scrollToSection('beyond')} className="text-indigo-600 hover:underline">7. Costs that sit on top of PITI</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">8. Common PITI mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">9. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">10. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="piti" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What PITI actually covers</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            PITI is the full mortgage payment most lenders use to judge affordability. It&apos;s not just the loan — it&apos;s the
            loan plus property taxes and homeowners insurance.
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>P</strong>rincipal: the amount that reduces your loan balance.</li>
            <li>• <strong>I</strong>nterest: the cost of borrowing.</li>
            <li>• <strong>T</strong>axes: local property taxes paid monthly via escrow.</li>
            <li>• <strong>I</strong>nsurance: homeowners insurance premiums.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            Lenders care about PITI because it is the number that goes into your <strong>front-end ratio</strong> (housing
            payment ÷ gross monthly income) and, together with your other debts, your back-end debt-to-income ratio. If you
            only budget for principal and interest, you can end up approved for a payment you didn&apos;t plan for. You can
            check both ratios with the{' '}
            <a href="/debt-to-income-ratio-calculator/" className="text-indigo-600 font-semibold hover:underline">debt-to-income ratio calculator</a>.
          </p>
        </section>

        <section id="principal" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Principal and interest are just the baseline</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Your mortgage rate and loan term set the baseline payment. On a fixed-rate loan, principal and interest (P&amp;I)
            is the one part of PITI that never changes. It comes from the standard amortization formula:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-lg text-slate-700">
              <strong>M = P × r(1 + r)<sup>n</sup> ÷ ((1 + r)<sup>n</sup> − 1)</strong>, where P is the loan amount, r is the
              annual rate ÷ 12, and n is the number of monthly payments (360 for a 30-year loan).
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Early payments are mostly interest; later payments are mostly principal. The total stays the same, but the mix
            shifts every month. Taxes and insurance are added on top of that fixed P&amp;I figure — in the example below they
            add about 26% to the payment, and in high-tax or high-premium areas the share can be considerably larger.
          </p>
        </section>

        <section id="taxes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Property taxes can swing the payment</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Two identical homes can have wildly different payments if their tax rates differ. Always check the local tax
            rate before you fall in love with a list price.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Property tax is set by your county, city, school district and other local bodies, usually as a percentage of the
            assessed value. On a $450,000 home, a 0.6% effective rate costs about $225 per month, while a 2.0% rate costs
            about $750 per month — a $525 monthly difference on the same house. A few things to check before you buy:
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>The current tax bill</strong> on the listing or the county assessor&apos;s website.</li>
            <li>• <strong>Reassessment after sale.</strong> In many areas the assessment resets toward your purchase price, so the seller&apos;s bill can understate yours.</li>
            <li>• <strong>Exemptions</strong> such as a homestead exemption, which you may need to apply for yourself.</li>
            <li>• <strong>Special assessments</strong> or district levies that appear as separate line items.</li>
          </ul>
        </section>

        <section id="insurance" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Insurance is smaller — but not optional</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Insurance is usually the smallest piece of PITI, but it still adds hundreds per month in high-risk or coastal
            areas. Lenders require it to protect the home.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Premiums depend on the home&apos;s rebuild cost, location, age, roof, claims history and the deductible you choose.
            Standard homeowners policies generally do not cover flood damage, so if the home is in a designated flood zone your
            lender will also require separate flood insurance. Get real quotes during your inspection period rather than
            relying on an online average.
          </p>
        </section>

        <section id="escrow" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How escrow collects taxes and insurance</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Most lenders collect the T and I through an <strong>escrow account</strong>. Each month they add 1/12 of the
            estimated annual tax bill and insurance premium to your payment, hold the money, and pay the bills when due.
            Once a year the servicer runs an escrow analysis:
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• If taxes or premiums went up, you get a <strong>shortage</strong> notice and your payment rises.</li>
            <li>• If they went down, you may get a refund of the surplus and a lower payment.</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            Hypothetical example: your tax bill rises from $5,400 to $6,000 a year. Your escrow deposit goes from $450 to
            $500 a month, and if the account already paid the higher bill, the servicer may also spread the $600 shortfall
            over the next 12 months — so the payment can briefly rise by about $100 a month even though your loan never
            changed.
          </p>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Example: $450,000 home payment breakdown</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Hypothetical assumptions: $450,000 purchase price, 30-year fixed loan at an illustrative 6.5% rate, property
            tax of 1.2% of value ($5,400/year) and homeowners insurance of $1,680/year.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Monthly item</th>
                  <th className="text-left p-4 font-black text-slate-900">20% down ($360,000 loan)</th>
                  <th className="text-left p-4 font-black text-slate-900">10% down ($405,000 loan)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Principal + interest</td>
                  <td className="p-4 text-slate-700">$2,275</td>
                  <td className="p-4 text-slate-700">$2,560</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Property taxes</td>
                  <td className="p-4 text-slate-700">$450</td>
                  <td className="p-4 text-slate-700">$450</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Homeowners insurance</td>
                  <td className="p-4 text-slate-700">$140</td>
                  <td className="p-4 text-slate-700">$140</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">PMI (illustrative 0.5%/yr)</td>
                  <td className="p-4 text-slate-700">$0</td>
                  <td className="p-4 text-slate-700">$169</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-indigo-600">Total</td>
                  <td className="p-4 font-bold text-slate-900">~$2,865/month</td>
                  <td className="p-4 font-bold text-slate-900">~$3,319/month</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Notice that the smaller down payment raises the bill by about $454 a month: $285 from the bigger loan and $169 of
            PMI. Under a 28% front-end guideline, the first payment would need roughly $122,800 of gross annual income; the
            second, roughly $142,200. Read more about removing that PMI line in{' '}
            <a href="/blog/pmi-math-how-to-remove-faster/" className="text-indigo-600 font-semibold hover:underline">the math of getting rid of PMI faster</a>.
          </p>
        </section>

        <section id="beyond" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Costs that sit on top of PITI</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            PITI is the lender&apos;s core number, but it is not your full cost of owning a home:
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Mortgage insurance</strong> — PMI on conventional loans with less than 20% down, or MIP on FHA loans. Lenders often call the total &quot;PITI + MI&quot;.</li>
            <li>• <strong>HOA or condo dues</strong> — usually paid directly, not through escrow, but lenders count them in your ratios.</li>
            <li>• <strong>Flood or earthquake coverage</strong> where required or prudent.</li>
            <li>• <strong>Maintenance and repairs</strong> — not part of any lender formula, but real. Many planners budget around 1% of the home&apos;s value per year as a starting assumption.</li>
            <li>• <strong>Utilities</strong>, which are often higher in a house than in an apartment.</li>
          </ul>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common PITI mistakes</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Comparing homes by price alone.</strong> A cheaper house in a high-tax area can cost more per month than a pricier one elsewhere.</li>
            <li>• <strong>Using the seller&apos;s tax bill.</strong> Exemptions and older assessments may not carry over to you.</li>
            <li>• <strong>Assuming the payment is fixed forever.</strong> Only P&amp;I is fixed; the escrow portion can rise every year.</li>
            <li>• <strong>Counting on the mortgage interest deduction.</strong> Interest on up to $750,000 of acquisition debt is deductible, but it only helps if your itemized deductions exceed the standard deduction ($32,200 for married couples filing jointly in 2026).</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            For a broader look at how lenders size your budget, see{' '}
            <a href="/blog/how-much-house-can-i-afford-2025/" className="text-indigo-600 font-semibold hover:underline">how much house you can afford</a>.
          </p>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently asked questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is PMI part of PITI?</h3>
              <p className="text-slate-700">
                Strictly speaking, no — PITI is four items. But lenders include mortgage insurance and HOA dues when they
                calculate your housing ratio, so budget for them as if they were.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Can I pay taxes and insurance myself instead of using escrow?</h3>
              <p className="text-slate-700">
                Sometimes. Some conventional lenders allow an escrow waiver, often with enough equity and sometimes for a fee
                or a slightly higher rate. Government-backed loans generally require escrow. You then need the discipline to
                save for large lump-sum bills.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Why did my mortgage payment go up if I have a fixed rate?</h3>
              <p className="text-slate-700">
                Almost always because the escrow portion changed — higher property taxes, a higher insurance premium, or an
                escrow shortage being repaid. Your annual escrow statement shows the breakdown.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What PITI can I afford?</h3>
              <p className="text-slate-700">
                A common guideline keeps PITI at or below about 28% of gross monthly income and total debts at or below about
                36%, though loan programs allow higher ratios. Run your own numbers in the{' '}
                <a href="/mortgage-payment-calculator/" className="text-indigo-600 font-semibold hover:underline">mortgage payment calculator</a>.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Consumer Financial Protection Bureau — homebuying and escrow guidance: <a href="https://www.consumerfinance.gov/" className="text-indigo-600 font-semibold hover:underline">consumerfinance.gov</a></li>
            <li>• IRS Publication 936, Home Mortgage Interest Deduction: <a href="https://www.irs.gov/publications/p936" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p936</a></li>
            <li>• IRS Rev. Proc. 2025-32 (2026 standard deduction): <a href="https://www.irs.gov/" className="text-indigo-600 font-semibold hover:underline">irs.gov</a></li>
          </ul>
          <p className="text-sm text-slate-500">
            Payment figures are hypothetical and computed with the standard amortization formula. This article is educational
            and is not individualized financial, tax, or lending advice.
          </p>
        </section>
      </article>
    </div>
  );
};

export default PitiExplained2026;

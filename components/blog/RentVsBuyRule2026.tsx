import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const RentVsBuyRule2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>🏠 Housing</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Rent vs. Buy in 2026: The 5% Rule Explained
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          The 5% rule is a fast way to compare renting vs buying. It blends property taxes, maintenance, and the
          opportunity cost of your down payment into a single number so you can decide if buying makes sense.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Compare rent vs equity building</h3>
              <p className="text-sm text-slate-600">
                See the rent-vs-buy math with your home price, rates, and rent inputs.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Mortgage Simulator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('rule')} className="text-indigo-600 hover:underline">1. The 5% rule</button></li>
          <li><button onClick={() => scrollToSection('math')} className="text-indigo-600 hover:underline">2. How the math works</button></li>
          <li><button onClick={() => scrollToSection('examples')} className="text-indigo-600 hover:underline">3. Quick examples</button></li>
          <li><button onClick={() => scrollToSection('custom')} className="text-indigo-600 hover:underline">4. Build your own version</button></li>
          <li><button onClick={() => scrollToSection('missing')} className="text-indigo-600 hover:underline">5. What the rule leaves out</button></li>
          <li><button onClick={() => scrollToSection('when-rent')} className="text-indigo-600 hover:underline">6. When renting wins</button></li>
          <li><button onClick={() => scrollToSection('when-buy')} className="text-indigo-600 hover:underline">7. When buying wins</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. Frequently asked questions</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="rule" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The 5% rule in one sentence</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Multiply the home price by 5%, divide by 12, and compare it to your monthly rent. If rent is lower, renting
            can be cheaper; if rent is higher, buying may be competitive.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The heuristic was popularized by Ben Felix of PWL Capital as a way to compare the
            <strong> unrecoverable costs</strong> of owning with the unrecoverable cost of renting. Rent is entirely
            unrecoverable. But so is a large part of owning: property tax, maintenance and the cost of tying up capital. Your
            principal payments are not a cost — they are savings moved into home equity — so the rule leaves them out.
          </p>
          <ol className="space-y-2 text-lg text-slate-700">
            <li>1. Find the price of a home you would realistically buy.</li>
            <li>2. Find the rent for a truly comparable home — same area, size and condition — not the cheapest apartment nearby.</li>
            <li>3. Compute price × 5% ÷ 12 and compare it with that rent.</li>
            <li>4. If the gap is small, refine the 5% with your own tax rate, mortgage rate and expectations before deciding.</li>
          </ol>
        </section>


        <section id="math" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What that 5% actually includes</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Property taxes (about 1% annually)</li>
            <li>• Maintenance and repairs (about 1% annually)</li>
            <li>• Cost of capital (about 3%)</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed">
            The cost-of-capital piece is the subtle one. It combines the interest you pay on the mortgage with the return
            your down payment could have earned if invested, minus the appreciation you expect from the home. In Felix&apos;s
            original framing, an expected investment return a few points above expected home price growth, plus a relatively
            low mortgage rate, netted out to roughly 3% of the home&apos;s value. When mortgage rates are higher, that
            component can be larger — so it&apos;s worth rebuilding the number with your own inputs (see below).
          </p>
        </section>

        <section id="examples" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Quick examples</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The break-even monthly rent at 5% — plus 4% and 6% versions to show how sensitive the answer is:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Home price</th>
                  <th className="text-left p-4 font-black text-slate-900">4% rule</th>
                  <th className="text-left p-4 font-black text-slate-900">5% rule</th>
                  <th className="text-left p-4 font-black text-slate-900">6% rule</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">$300,000</td><td className="p-4 text-slate-700">$1,000</td><td className="p-4 font-bold text-slate-900">$1,250</td><td className="p-4 text-slate-700">$1,500</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">$400,000</td><td className="p-4 text-slate-700">$1,333</td><td className="p-4 font-bold text-slate-900">$1,667</td><td className="p-4 text-slate-700">$2,000</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">$500,000</td><td className="p-4 text-slate-700">$1,667</td><td className="p-4 font-bold text-slate-900">$2,083</td><td className="p-4 text-slate-700">$2,500</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">$750,000</td><td className="p-4 text-slate-700">$2,500</td><td className="p-4 font-bold text-slate-900">$3,125</td><td className="p-4 text-slate-700">$3,750</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Hypothetical: you are choosing between buying a $500,000 house and renting a comparable one. At 5%, the break-even
            rent is about $2,083 a month. If similar homes rent for $1,800, renting is cheaper on an unrecoverable-cost basis,
            provided you invest the money you would have used for the down payment and closing costs. If similar homes rent for
            $2,400, buying looks competitive — as long as you plan to stay long enough to absorb the costs of buying and selling.
          </p>
        </section>

        <section id="custom" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Build your own version of the rule</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Instead of assuming 3% for cost of capital, compute it. Hypothetical: $500,000 home, 20% down ($100,000), $400,000
            30-year loan at an illustrative 6.5%.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <ul className="space-y-2 text-lg text-slate-700">
              <li>• First-year mortgage interest: about <strong>$25,870</strong> (it shrinks a little each year as the balance falls)</li>
              <li>• Opportunity cost of the $100,000 down payment at an assumed 6% expected return: <strong>$6,000</strong></li>
              <li>• Minus expected appreciation at an assumed 3%: <strong>−$15,000</strong></li>
              <li>• Net cost of capital: about <strong>$16,870</strong> (≈3.4% of the price)</li>
              <li>• Property tax (1%) + maintenance (1%): <strong>$10,000</strong></li>
              <li>• <strong>Total unrecoverable cost: about $26,870 a year ≈ 5.4% ≈ $2,239 a month</strong></li>
            </ul>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            In this case the &quot;rule&quot; is closer to 5.4%, so the break-even rent rises from $2,083 to about $2,239. Change
            any assumption and the answer moves: higher expected appreciation lowers the cost; a higher tax rate or an older
            house needing more upkeep raises it. Expected returns and appreciation are assumptions, not guarantees — test a
            pessimistic case too. You can model the investment side with the{' '}
            <a href="/wealth-investment-projector/" className="text-indigo-600 font-semibold hover:underline">investment growth projector</a>{' '}
            and the mortgage side with the{' '}
            <a href="/mortgage-payment-calculator/" className="text-indigo-600 font-semibold hover:underline">mortgage payment calculator</a>.
          </p>
        </section>

        <section id="missing" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What the 5% rule leaves out</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>Transaction costs.</strong> Closing costs when you buy and agent fees, transfer taxes and other costs when you sell. Over a short holding period these can outweigh everything else.</li>
            <li>• <strong>Insurance and HOA dues.</strong> Homeowners insurance and association fees are extra unrecoverable costs; renters insurance is usually much cheaper.</li>
            <li>• <strong>Taxes.</strong> The mortgage interest deduction (on up to $750,000 of acquisition debt) only helps if you itemize, which many households don&apos;t with a 2026 standard deduction of $32,200 for married couples filing jointly. Gains on selling a main home may be partly excludable from income under IRS rules.</li>
            <li>• <strong>Behavior.</strong> The rule assumes a renter actually invests the difference. If the extra cash would be spent, a mortgage&apos;s forced savings has real value.</li>
            <li>• <strong>Rent increases and fixed payments.</strong> A fixed-rate mortgage locks principal and interest; rent can rise. Property taxes and insurance can still rise for owners.</li>
          </ul>
        </section>

        <section id="when-rent" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When renting usually wins</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Renting often wins if you plan to move within 3-5 years, live in a high-price market, or need flexibility.
            It also tends to win when local rents are low relative to prices, when your job or family plans are uncertain,
            or when buying would drain your emergency fund.
          </p>
        </section>

        <section id="when-buy" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When buying usually wins</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Buying tends to win if you plan to stay long-term and can afford the full PITI payment without stretching.
            It also helps when comparable rents are high relative to prices, when you value control over the property, and
            when you have reserves for repairs after closing. Before deciding, check what you can comfortably afford with the{' '}
            <a href="/blog/how-much-house-can-i-afford-2025/" className="text-indigo-600 font-semibold hover:underline">home affordability guide</a>.
          </p>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently asked questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Isn&apos;t rent just throwing money away?</h3>
              <p className="text-slate-700">
                No more than mortgage interest, property tax and maintenance are. Both renters and owners have unrecoverable
                costs; the 5% rule compares them on equal footing.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Should I use 5% in every market?</h3>
              <p className="text-slate-700">
                Treat 5% as a starting point. High-tax areas, older homes and higher mortgage rates push it up; low-tax areas and
                newer homes can push it down.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Does the rule apply if I pay cash?</h3>
              <p className="text-slate-700">
                Yes. With no mortgage, the whole cost of capital is the opportunity cost of the cash, minus expected
                appreciation.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How does my monthly payment compare?</h3>
              <p className="text-slate-700">
                Your actual PITI payment includes principal (which builds equity), so it is usually higher than the 5% figure.
                See{' '}
                <a href="/blog/500k-house-monthly-cost-rate-sensitivity/" className="text-indigo-600 font-semibold hover:underline">what a $500,000 house costs per month</a>{' '}
                for the payment side.
              </p>
            </div>
          </div>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• IRS Publication 936, Home Mortgage Interest Deduction: <a href="https://www.irs.gov/publications/p936" className="text-indigo-600 font-semibold hover:underline">irs.gov/publications/p936</a></li>
            <li>• Consumer Financial Protection Bureau — buying a home: <a href="https://www.consumerfinance.gov/" className="text-indigo-600 font-semibold hover:underline">consumerfinance.gov</a></li>
            <li>• Investor.gov — compound interest and investment basics: <a href="https://www.investor.gov/" className="text-indigo-600 font-semibold hover:underline">investor.gov</a></li>
          </ul>
          <p className="text-sm text-slate-500">
            Examples are hypothetical; expected returns and appreciation are assumptions, not predictions. This article is
            educational and is not individualized financial advice.
          </p>
        </section>
      </article>
    </div>
  );
};

export default RentVsBuyRule2026;

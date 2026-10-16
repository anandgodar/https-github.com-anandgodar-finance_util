import React from 'react';
import { ToolType } from '../../types';

interface IronCondorGuideProps {
  setActiveTool: (tool: ToolType) => void;
}

const IronCondorGuide: React.FC<IronCondorGuideProps> = ({ setActiveTool }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <button
            onClick={() => setActiveTool(ToolType.VALUATION_ACADEMY)}
            className="text-purple-300 hover:text-white font-semibold text-sm mb-4"
          >
            ← Back to Academy
          </button>
          <h1 className="text-5xl font-black mb-6">
            Iron Condor Strategy: When and How to Use It
          </h1>
          <div className="flex gap-6 text-sm text-purple-200">
            <span>📚 6 min read</span>
            <span>📊 Intermediate</span>
            <span>Updated: October 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-purple-600 text-white rounded-2xl p-6 mb-12 shadow-xl flex items-center justify-between">
          <div>
            <p className="font-black text-xl mb-2">Build Your First Iron Condor</p>
            <p className="text-purple-200">Visualize profit/loss, breakevens, and Greeks in real-time</p>
          </div>
          <button
            onClick={() => setActiveTool(ToolType.OPTIONS_STRATEGY_VISUALIZER)}
            className="bg-white text-purple-900 px-6 py-3 rounded-xl font-black hover:bg-purple-50 transition-all whitespace-nowrap"
          >
            Open Visualizer →
          </button>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">What is an Iron Condor?</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            An Iron Condor is a <strong>neutral income strategy</strong> that profits when the underlying
            stock stays within a range. It is a defined-risk strategy: you know your maximum gain and maximum loss the moment you open it. It is
            also a short-volatility trade, so it can lose money quickly when the stock makes a large move.
          </p>
          <div className="bg-slate-100 border-l-4 border-purple-600 p-6 rounded-r-xl my-6">
            <p className="text-lg font-bold text-slate-900 mb-2">The Setup (4-Leg Strategy):</p>
            <ul className="list-decimal list-inside space-y-2 text-slate-700">
              <li><strong>Sell 1 OTM Put</strong> (collect premium)</li>
              <li><strong>Buy 1 Further OTM Put</strong> (protection)</li>
              <li><strong>Sell 1 OTM Call</strong> (collect premium)</li>
              <li><strong>Buy 1 Further OTM Call</strong> (protection)</li>
            </ul>
            <p className="text-slate-600 mt-4 text-sm">
              Result: You collect net premium upfront and profit if the stock stays between the two sold strikes.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Worked Example</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Hypothetical trade:</strong> stock XYZ trades at $100, about 45 days before expiration. You open
            one iron condor:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
            <li>Sell the $95 put and buy the $90 put (the put spread)</li>
            <li>Sell the $105 call and buy the $110 call (the call spread)</li>
            <li>Net credit received: <strong>$2.00 per share = $200 per condor</strong> (illustrative premium)</li>
          </ul>
          <div className="bg-slate-100 border-l-4 border-purple-600 p-6 rounded-r-xl my-6">
            <p className="text-lg font-bold text-slate-900 mb-2">The key numbers:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li><strong>Max profit</strong> = net credit = $2.00 × 100 = <strong>$200</strong>, if XYZ closes between $95 and $105 at expiration</li>
              <li><strong>Max loss</strong> = (width of spread − net credit) × 100 = ($5 − $2) × 100 = <strong>$300</strong> per contract</li>
              <li><strong>Lower breakeven</strong> = short put − credit = $95 − $2 = <strong>$93</strong></li>
              <li><strong>Upper breakeven</strong> = short call + credit = $105 + $2 = <strong>$107</strong></li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
            <table className="w-full text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 font-black text-slate-900">XYZ at expiration</th>
                  <th className="p-4 font-black text-slate-900">Profit / loss (1 condor)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">$90 or below</td><td className="p-4 font-bold text-red-600">−$300 (max loss)</td></tr>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">$92</td><td className="p-4 font-bold text-red-600">−$100</td></tr>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">$93</td><td className="p-4 text-slate-700">$0 (breakeven)</td></tr>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">$95 to $105</td><td className="p-4 font-bold text-emerald-600">+$200 (max profit)</td></tr>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">$107</td><td className="p-4 text-slate-700">$0 (breakeven)</td></tr>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">$108</td><td className="p-4 font-bold text-red-600">−$100</td></tr>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">$110 or above</td><td className="p-4 font-bold text-red-600">−$300 (max loss)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Notice the asymmetry: you risk $300 to make $200. With out-of-the-money short strikes, iron condors are built to win small
            amounts more often and lose larger amounts less often, so one bad month can erase several good ones. Sizing matters more than the
            setup itself.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Choosing Strikes and Wing Width</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every choice trades premium for safety. The table below uses theoretical Black-Scholes mid-prices for the same
            hypothetical $100 stock (45 days, 25% implied volatility, 4.5% rate, no trading costs), so the credits are
            model estimates, not quotes (the $95 / $105 row is close to the $2.00 credit used above):
          </p>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
            <table className="w-full text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 font-black text-slate-900">Short strikes / wing width</th>
                  <th className="p-4 font-black text-slate-900">Model credit</th>
                  <th className="p-4 font-black text-slate-900">Max loss</th>
                  <th className="p-4 font-black text-slate-900">Breakevens</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">$93 / $107, $5 wide</td><td className="p-4 text-slate-700">$142</td><td className="p-4 font-bold text-red-600">$358</td><td className="p-4 text-slate-700">$91.58 – $108.42</td></tr>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">$95 / $105, $5 wide</td><td className="p-4 text-slate-700">$198</td><td className="p-4 font-bold text-red-600">$302</td><td className="p-4 text-slate-700">$93.02 – $106.98</td></tr>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">$97 / $103, $5 wide</td><td className="p-4 text-slate-700">$267</td><td className="p-4 font-bold text-red-600">$233</td><td className="p-4 text-slate-700">$94.33 – $105.67</td></tr>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">$95 / $105, $10 wide</td><td className="p-4 text-slate-700">$278</td><td className="p-4 font-bold text-red-600">$722</td><td className="p-4 text-slate-700">$92.22 – $107.78</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Moving the short strikes closer to the stock price collects more and lowers the max loss, but shrinks the
            range where you profit, so a loss becomes more likely. Widening the wings raises the credit a little and the
            max loss a lot. The formula never changes: <strong>max loss = (width − net credit) × 100 per contract</strong>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">When an Iron Condor Makes Sense</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
            <li><strong>You expect a range.</strong> The thesis is that the stock stays between your short strikes, not that it rises or falls.</li>
            <li><strong>Implied volatility is relatively high.</strong> Richer premiums mean a bigger credit and wider breakevens for the same strikes.</li>
            <li><strong>No big scheduled event.</strong> Earnings, drug trial results or court rulings can cause gaps that jump straight past your long strikes.</li>
            <li><strong>Liquid options.</strong> With four legs, wide bid-ask spreads and commissions eat into a small credit fast.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Step-by-Step: Planning One Before You Place It</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-4">
            <li>Pick a liquid underlying and check the calendar for earnings or other events before expiration.</li>
            <li>Choose an expiration and short strikes that bracket the range you actually expect.</li>
            <li>Choose wing width, then calculate max loss = (width − credit) × 100 before anything else.</li>
            <li>Size the position so that a full max loss is an amount you can accept.</li>
            <li>Enter the four legs as a single order with a limit price, not one leg at a time.</li>
            <li>Write down your profit-taking and loss-cutting rules before the trade goes on.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">The Greeks of an Iron Condor</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            At entry, an iron condor is usually close to delta-neutral. It has <strong>positive theta</strong> (time decay
            works for you), <strong>negative vega</strong> (a rise in implied volatility hurts), and
            <strong> negative gamma</strong> (large moves hurt, and that sensitivity grows as expiration approaches). If
            these terms are new, start with our{' '}
            <a href="/academy/options-greeks-delta-theta-vega-gamma/" className="text-indigo-600 font-semibold hover:underline">options Greeks guide</a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Managing the Trade</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
            <li><strong>Decide exits in advance.</strong> Some traders close when they have captured a set share of the credit, or when a loss reaches a set multiple of it, rather than holding to expiration.</li>
            <li><strong>Watch the tested side.</strong> If the stock approaches one short strike, you can close the whole position or just that spread. Rolling to later dates usually adds time and risk, not certainty.</li>
            <li><strong>Avoid holding into expiration day near a short strike.</strong> Pin risk means you may not know until after the close whether you will be assigned.</li>
            <li><strong>Know early-assignment rules.</strong> Most U.S. single-stock options are American-style and can be assigned early, especially short calls before an ex-dividend date.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li><strong>Sizing on max profit instead of max loss.</strong> Your account should survive several max losses in a row.</li>
            <li><strong>Selling strikes too close</strong> to collect a bigger credit, which narrows the profit zone.</li>
            <li><strong>Ignoring costs.</strong> Four legs to open and up to four to close add up on a $200 trade.</li>
            <li><strong>Assuming &quot;defined risk&quot; means low risk.</strong> Losing the full $300 on every condor you hold is entirely possible.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-black text-slate-900 mb-2">How much margin does an iron condor need?</h3>
              <p className="text-slate-700">Brokers generally require collateral equal to the maximum loss: the wider spread&apos;s width minus the credit, times 100. Check your broker&apos;s rules and options approval level.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-black text-slate-900 mb-2">Can both sides lose at once?</h3>
              <p className="text-slate-700">Not at expiration. The stock can only finish above or below the range, so at most one spread finishes in the money. Before expiration, though, a volatility spike can push both sides to a mark-to-market loss.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-black text-slate-900 mb-2">Iron condor vs. iron butterfly?</h3>
              <p className="text-slate-700">An iron butterfly sells both options at the same strike, collecting more premium with a much narrower profit zone. A condor trades some premium for a wider range.</p>
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            Options involve substantial risk, including the loss of the full amount at risk, and are not suitable for
            every investor. This guide is educational, not investment advice. Read the options disclosure document from
            your broker before trading. Sources:{' '}
            <a href="https://www.investor.gov/" className="text-indigo-600 font-semibold hover:underline">Investor.gov (SEC)</a>,{' '}
            <a href="https://www.theocc.com/" className="text-indigo-600 font-semibold hover:underline">The Options Clearing Corporation</a>,{' '}
            <a href="https://www.finra.org/" className="text-indigo-600 font-semibold hover:underline">FINRA</a>.
            Model your own strikes in the{' '}
            <a href="/options-strategy-visualizer/" className="text-indigo-600 font-semibold hover:underline">options strategy visualizer</a>.
          </p>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-black mb-4">Try Building Your First Iron Condor</h2>
            <p className="text-xl text-purple-100 mb-8">
              Our visualizer shows real-time P/L, breakevens, Greeks, and risk metrics
            </p>
            <button
              onClick={() => setActiveTool(ToolType.OPTIONS_STRATEGY_VISUALIZER)}
              className="bg-white text-purple-900 px-10 py-5 rounded-xl font-black text-xl hover:bg-purple-50 transition-all shadow-2xl"
            >
              Launch Options Visualizer →
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black text-slate-900 mb-6">Continue Learning</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => setActiveTool(ToolType.ACADEMY_GREEKS_GUIDE)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-purple-500"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-black text-slate-900 mb-2">Options Greeks</h3>
              <p className="text-slate-600 text-sm">Master Delta, Theta, Vega, Gamma</p>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.ACADEMY_DCF_GUIDE)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-purple-500"
            >
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-black text-slate-900 mb-2">DCF Valuation</h3>
              <p className="text-slate-600 text-sm">Stock valuation fundamentals</p>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.VALUATION_ACADEMY)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-purple-500"
            >
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-black text-slate-900 mb-2">All Guides</h3>
              <p className="text-slate-600 text-sm">Back to Academy</p>
            </button>
          </div>
        </section>
      </article>
    </div>
  );
};

export default IronCondorGuide;

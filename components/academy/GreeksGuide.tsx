import React from 'react';
import { ToolType } from '../../types';

interface GreeksGuideProps {
  setActiveTool: (tool: ToolType) => void;
}

const GreeksGuide: React.FC<GreeksGuideProps> = ({ setActiveTool }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <button
            onClick={() => setActiveTool(ToolType.VALUATION_ACADEMY)}
            className="text-emerald-300 hover:text-white font-semibold text-sm mb-4"
          >
            ← Back to Academy
          </button>
          <h1 className="text-5xl font-black mb-6">
            Options Greeks: Delta, Theta, Vega, Gamma for Beginners
          </h1>
          <div className="flex gap-6 text-sm text-emerald-200">
            <span>📚 6 min read</span>
            <span>📊 Beginner</span>
            <span>Updated: October 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-emerald-600 text-white rounded-2xl p-6 mb-12 shadow-xl flex items-center justify-between">
          <div>
            <p className="font-black text-xl mb-2">Visualize the Greeks in Real-Time</p>
            <p className="text-emerald-200">
              Our Options Strategy Visualizer shows Delta, Theta, Vega, Gamma for any strategy
            </p>
          </div>
          <button
            onClick={() => setActiveTool(ToolType.OPTIONS_STRATEGY_VISUALIZER)}
            className="bg-white text-emerald-900 px-6 py-3 rounded-xl font-black hover:bg-emerald-50 transition-all whitespace-nowrap"
          >
            Open Visualizer →
          </button>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">What Are the Greeks?</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Greeks are <strong>sensitivity measures</strong> that tell you how an option's price
            changes in response to different factors. Think of them as the "dashboard gauges" for your
            options position.
          </p>
          <div className="bg-slate-100 border-l-4 border-emerald-600 p-6 rounded-r-xl my-6">
            <p className="text-lg font-bold text-slate-900">The Greeks answer four critical questions:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-slate-700">
              <li><strong>Delta:</strong> How much will the option price change if the stock moves $1?</li>
              <li><strong>Theta:</strong> How much value do I lose every day due to time decay?</li>
              <li><strong>Vega:</strong> How much will the option price change if volatility increases 1%?</li>
              <li><strong>Gamma:</strong> How fast is my Delta changing as the stock moves?</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">The Example Option We&apos;ll Use</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            To keep things concrete, every number below comes from the Black-Scholes model for one
            <strong> hypothetical</strong> option: stock at $100, strike $100 (at-the-money), 30 days to expiration,
            25% implied volatility, and a 4.5% interest rate, with no dividends. Real market prices will differ, but the
            relationships are the same.
          </p>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
            <table className="w-full text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 font-black text-slate-900">Measure</th>
                  <th className="p-4 font-black text-slate-900">Call</th>
                  <th className="p-4 font-black text-slate-900">Put</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">Theoretical price</td><td className="p-4 font-bold text-slate-900">$3.04</td><td className="p-4 font-bold text-slate-900">$2.67</td></tr>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">Delta</td><td className="p-4 text-slate-700">0.53</td><td className="p-4 text-slate-700">−0.47</td></tr>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">Gamma</td><td className="p-4 text-slate-700">0.055</td><td className="p-4 text-slate-700">0.055</td></tr>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">Theta (per day)</td><td className="p-4 text-slate-700">−$0.054</td><td className="p-4 text-slate-700">−$0.041</td></tr>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">Vega (per 1 vol point)</td><td className="p-4 text-slate-700">$0.114</td><td className="p-4 text-slate-700">$0.114</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm">
            Option prices are quoted per share; one standard U.S. equity contract covers 100 shares, so multiply by 100
            for the dollar impact per contract.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Delta: Direction</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Delta estimates how much the option price moves for a $1 move in the stock. Calls have delta between 0 and 1;
            puts between −1 and 0. Our call&apos;s delta of 0.53 means a $1 rise in the stock should lift the call by about
            $0.53, or about $53 per contract. Running the model again with the stock at $101 gives a call price of $3.60,
            about $0.56 higher; the extra few cents come from gamma.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Delta also works as a rough &quot;share equivalent&quot;: one contract with 0.53 delta behaves, for small moves,
            like owning about 53 shares. Far out-of-the-money options have small deltas; a 30-day $110 call in the same
            setup has a delta of only about 0.11.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Gamma: How Fast Delta Changes</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Gamma is the change in delta for a $1 move in the stock. With gamma of 0.055, a $1 rise pushes the call&apos;s
            delta from about 0.53 to about 0.59. Gamma is highest for at-the-money options close to expiration: with
            7 days left instead of 30, gamma roughly doubles to about 0.115. That is why short-dated options can swing
            from nearly worthless to valuable very quickly, and why option sellers are said to be &quot;short gamma&quot;.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Theta: Time Decay</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Theta is how much value the option loses per day if nothing else changes. Our call&apos;s theta of −$0.054 means
            it loses about 5 cents a day, roughly $5.40 per contract. Re-pricing it with 29 days left instead of 30 gives
            $2.99, confirming the estimate. Decay is not linear: it speeds up as expiration approaches.
          </p>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
            <table className="w-full text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 font-black text-slate-900">Days to expiry (ATM call)</th>
                  <th className="p-4 font-black text-slate-900">Price</th>
                  <th className="p-4 font-black text-slate-900">Theta / day</th>
                  <th className="p-4 font-black text-slate-900">Vega</th>
                  <th className="p-4 font-black text-slate-900">Gamma</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">90</td><td className="p-4 text-slate-700">$5.49</td><td className="p-4 text-slate-700">−$0.033</td><td className="p-4 text-slate-700">$0.196</td><td className="p-4 text-slate-700">0.032</td></tr>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">30</td><td className="p-4 text-slate-700">$3.04</td><td className="p-4 text-slate-700">−$0.054</td><td className="p-4 text-slate-700">$0.114</td><td className="p-4 text-slate-700">0.055</td></tr>
                <tr className="border-t border-slate-200"><td className="p-4 text-slate-700">7</td><td className="p-4 text-slate-700">$1.42</td><td className="p-4 text-slate-700">−$0.105</td><td className="p-4 text-slate-700">$0.055</td><td className="p-4 text-slate-700">0.115</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Read across the rows and the trade-offs appear: shorter-dated options are cheaper and more sensitive to the
            stock (higher gamma), but they decay faster and care less about volatility.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Vega: Volatility</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Vega is the price change for a one-percentage-point change in implied volatility. If implied volatility rises
            from 25% to 26%, our call goes from $3.04 to about $3.16, matching its vega of $0.114. Calls and puts with the
            same strike and expiration have the same vega. Implied volatility often rises before events like earnings and
            falls afterward, so an option buyer can be right on direction and still lose money if volatility collapses.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Reading the Greeks of a Position</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Position Greeks add up across legs (and flip sign when you sell). That gives a quick profile of any strategy:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
            <li><strong>Long call:</strong> positive delta, positive gamma, negative theta, positive vega. You pay time decay for upside.</li>
            <li><strong>Long put:</strong> negative delta, positive gamma, negative theta, positive vega.</li>
            <li><strong>Short premium strategies</strong> such as an iron condor: near-zero delta, negative gamma, positive theta, negative vega. Time decay helps you; big moves and volatility spikes hurt. Our{' '}
              <a href="/academy/iron-condor-strategy-guide/" className="text-indigo-600 font-semibold hover:underline">iron condor strategy guide</a> shows this in detail.</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            You can build any of these and watch the Greeks update in the{' '}
            <a href="/options-strategy-visualizer/" className="text-indigo-600 font-semibold hover:underline">options strategy visualizer</a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">A Pre-Trade Greeks Checklist</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-4">
            <li><strong>Delta:</strong> how many share-equivalents of exposure am I taking, and in which direction?</li>
            <li><strong>Theta:</strong> how much does this position cost (or earn) per day if the stock goes nowhere?</li>
            <li><strong>Vega:</strong> is implied volatility unusually high or low, and is there an event that could change it?</li>
            <li><strong>Gamma:</strong> how quickly could my exposure change if the stock moves sharply, especially in the final week?</li>
            <li><strong>Worst case:</strong> what is the maximum loss, and can I afford it without forced selling?</li>
          </ol>
          <p className="text-slate-700 leading-relaxed mb-4">
            Writing the answers down before entering a trade makes it far easier to decide later whether a loss came
            from a bad thesis or from a risk you simply hadn&apos;t measured.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li><strong>Treating Greeks as fixed.</strong> They change constantly with price, time and volatility; they are estimates for small moves.</li>
            <li><strong>Ignoring theta on long options.</strong> Buying short-dated options means paying the steepest decay.</li>
            <li><strong>Forgetting the contract multiplier.</strong> A $0.054 theta is about $5.40 per contract per day, and that scales with size.</li>
            <li><strong>Assuming the model is the market.</strong> Black-Scholes assumes constant volatility and no early exercise; real prices reflect supply, demand and skew.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-black text-slate-900 mb-2">Is delta the probability an option expires in the money?</h3>
              <p className="text-slate-700">It&apos;s often used as a rough proxy, but they are not the same number. In our example the call&apos;s delta is 0.53, while the model&apos;s own (risk-neutral) probability of finishing in the money is about 0.51. Treat delta as a ballpark only.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-black text-slate-900 mb-2">What about rho?</h3>
              <p className="text-slate-700">Rho measures sensitivity to interest rates. It matters most for long-dated options and is usually the smallest Greek for short-dated trades.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-black text-slate-900 mb-2">Which Greek matters most?</h3>
              <p className="text-slate-700">It depends on the strategy: delta for directional trades, theta and gamma for short-term premium selling, and vega around earnings or other volatility events.</p>
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            Options involve substantial risk and are not suitable for every investor. This guide is educational, not
            investment advice. Sources:{' '}
            <a href="https://www.investor.gov/" className="text-indigo-600 font-semibold hover:underline">Investor.gov (SEC)</a>,{' '}
            <a href="https://www.theocc.com/" className="text-indigo-600 font-semibold hover:underline">The Options Clearing Corporation</a>,{' '}
            <a href="https://www.finra.org/" className="text-indigo-600 font-semibold hover:underline">FINRA</a>.
          </p>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-black mb-4">Visualize the Greeks in Action</h2>
            <p className="text-xl text-emerald-100 mb-8">
              Our Options Strategy Visualizer calculates Delta, Theta, Vega, Gamma in real-time for any strategy
            </p>
            <button
              onClick={() => setActiveTool(ToolType.OPTIONS_STRATEGY_VISUALIZER)}
              className="bg-white text-emerald-900 px-10 py-5 rounded-xl font-black text-xl hover:bg-emerald-50 transition-all shadow-2xl"
            >
              Launch Visualizer →
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black text-slate-900 mb-6">Continue Learning</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => setActiveTool(ToolType.ACADEMY_IRON_CONDOR)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-emerald-500"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-black text-slate-900 mb-2">Iron Condor Guide</h3>
              <p className="text-slate-600 text-sm">Master neutral income strategies</p>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.ACADEMY_DCF_GUIDE)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-emerald-500"
            >
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-black text-slate-900 mb-2">DCF Valuation</h3>
              <p className="text-slate-600 text-sm">Learn stock valuation fundamentals</p>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.VALUATION_ACADEMY)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-emerald-500"
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

export default GreeksGuide;

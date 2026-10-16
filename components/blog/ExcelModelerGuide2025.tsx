'use client';

import React from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const ExcelModelerGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>📅 Updated October 2026</span>
          <span>•</span>
          <span>⏱️ 6 min read</span>
          <span>•</span>
          <span>📁 Valuation</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          DCF Valuation Guide 2026: Build a Simple Model Without Excel
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Discounted cash flow (DCF) models are the backbone of valuation. This guide simplifies the process so you can
          estimate intrinsic value without spreadsheets, with a fully worked five-year example you can check by hand.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Build a DCF in Minutes</h3>
              <p className="text-sm text-slate-600">Use our Excel Power Modeler for instant valuation scenarios.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.EXCEL_MODELER)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open Excel Modeler →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('dcf-basics')} className="text-indigo-600 hover:underline">1. DCF basics</button></li>
          <li><button onClick={() => scrollToSection('cash-flows')} className="text-indigo-600 hover:underline">2. Projecting cash flows</button></li>
          <li><button onClick={() => scrollToSection('wacc')} className="text-indigo-600 hover:underline">3. Choosing WACC</button></li>
          <li><button onClick={() => scrollToSection('terminal')} className="text-indigo-600 hover:underline">4. Terminal value</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">5. Worked example: from cash flows to price per share</button></li>
          <li><button onClick={() => scrollToSection('sensitivity')} className="text-indigo-600 hover:underline">6. Sensitivity: why small inputs move the answer</button></li>
          <li><button onClick={() => scrollToSection('reverse-dcf')} className="text-indigo-600 hover:underline">7. Reverse DCF: what is the market assuming?</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">8. Common mistakes and limits</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">9. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="dcf-basics" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">DCF basics</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A DCF estimates what a business is worth today based on its future cash flows, discounted back to present value.
            The logic is the time value of money: a dollar received in five years is worth less than a dollar today,
            because today&apos;s dollar could be invested and because future cash is uncertain.
          </p>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-slate-700">Value today = Σ FCF<sub>t</sub> ÷ (1 + WACC)<sup>t</sup> + Terminal value ÷ (1 + WACC)<sup>n</sup></p>
            <p className="text-sm text-slate-600 mt-3">
              FCF is free cash flow in year t, WACC is the discount rate, and n is the last year of your explicit forecast.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Every DCF has four moving parts: the cash flow forecast, the discount rate, the terminal value, and the bridge
            from enterprise value to equity value per share. The sections below take them in order.
          </p>
        </section>

        <section id="cash-flows" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Projecting cash flows</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Start with revenue assumptions, model margins, and translate to free cash flow. Keep assumptions realistic.
            The most common definition for an enterprise DCF is unlevered free cash flow:
          </p>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-slate-700">FCF = EBIT × (1 − tax rate) + depreciation &amp; amortization − capital expenditures − increase in working capital</p>
          </div>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>Anchor to history.</strong> Pull at least three to five years of revenue, operating margin and capex from the company&apos;s 10-K filings on SEC EDGAR.</li>
            <li>• <strong>Fade growth.</strong> Fast growth rarely lasts; most models taper toward a mature rate by the final forecast year.</li>
            <li>• <strong>Keep capex consistent with growth.</strong> A company can&apos;t grow revenue quickly for years without investing.</li>
            <li>• <strong>Five to ten years</strong> is the usual explicit forecast window.</li>
          </ul>
        </section>

        <section id="wacc" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Choosing WACC</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            WACC reflects the risk of the business. Higher risk = higher discount rate = lower valuation. WACC blends the
            cost of equity (usually estimated with CAPM: risk-free rate + beta × equity risk premium) and the after-tax cost
            of debt, weighted by market values. Our{' '}
            <a href="/academy/wacc-cost-of-capital-explained/" className="text-indigo-600 font-semibold hover:underline">WACC and cost of capital guide</a>{' '}
            walks through the full calculation. Use a current Treasury yield for the risk-free rate rather than a number
            from an old article, because yields change.
          </p>
        </section>

        <section id="terminal" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Terminal value</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Terminal value captures the company&apos;s value beyond the forecast window. Be conservative with growth rates.
            The Gordon growth (perpetuity) method is the standard approach:
          </p>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-slate-700">Terminal value = FCF<sub>n</sub> × (1 + g) ÷ (WACC − g)</p>
            <p className="text-sm text-slate-600 mt-3">
              g is the long-run growth rate. It must be below WACC, and it is usually set at or below expected long-run
              nominal economic growth, often 2%–3%.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            The alternative is an exit multiple (for example, a multiple of final-year EBITDA). Running both is a useful
            cross-check: if they disagree wildly, one of your assumptions is probably off.
          </p>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: from cash flows to price per share</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Hypothetical company:</strong> free cash flow was $100 million last year and is expected to grow 5% a
            year for five years. WACC is 9%, terminal growth is 2.5%, net debt is $200 million, and there are 100 million
            shares outstanding. All figures are illustrative.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Year</th>
                  <th className="text-left p-4 font-black text-slate-900">FCF ($M)</th>
                  <th className="text-left p-4 font-black text-slate-900">Discount factor at 9%</th>
                  <th className="text-left p-4 font-black text-slate-900">Present value ($M)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">1</td><td className="p-4 text-slate-700">105.0</td><td className="p-4 text-slate-700">0.917</td><td className="p-4 font-bold text-indigo-600">96.3</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">2</td><td className="p-4 text-slate-700">110.3</td><td className="p-4 text-slate-700">0.842</td><td className="p-4 font-bold text-indigo-600">92.8</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">3</td><td className="p-4 text-slate-700">115.8</td><td className="p-4 text-slate-700">0.772</td><td className="p-4 font-bold text-indigo-600">89.4</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">4</td><td className="p-4 text-slate-700">121.6</td><td className="p-4 text-slate-700">0.708</td><td className="p-4 font-bold text-indigo-600">86.1</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">5</td><td className="p-4 text-slate-700">127.6</td><td className="p-4 text-slate-700">0.650</td><td className="p-4 font-bold text-indigo-600">82.9</td></tr>
              </tbody>
            </table>
          </div>
          <ol className="space-y-3 text-slate-700">
            <li>1) <strong>PV of forecast cash flows:</strong> ≈ $447.6M.</li>
            <li>2) <strong>Terminal value at year 5:</strong> 127.6 × 1.025 ÷ (0.09 − 0.025) ≈ $2,012.6M.</li>
            <li>3) <strong>PV of terminal value:</strong> 2,012.6 ÷ 1.09<sup>5</sup> ≈ $1,308.1M.</li>
            <li>4) <strong>Enterprise value:</strong> 447.6 + 1,308.1 ≈ $1,755.6M.</li>
            <li>5) <strong>Equity value:</strong> 1,755.6 − 200 net debt ≈ $1,555.6M.</li>
            <li>6) <strong>Value per share:</strong> 1,555.6 ÷ 100M shares ≈ <strong>$15.56</strong>.</li>
          </ol>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <p className="text-indigo-900 font-semibold">
              💡 Notice that about 75% of the enterprise value comes from the terminal value. That is typical, and it is
              why the terminal growth rate and WACC deserve more scrutiny than any single year of the forecast.
            </p>
          </div>
        </section>

        <section id="sensitivity" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sensitivity: why small inputs move the answer</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Same hypothetical cash flows, enterprise value in $ millions for different WACC and terminal growth inputs:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">WACC</th>
                  <th className="text-left p-4 font-black text-slate-900">g = 2.0%</th>
                  <th className="text-left p-4 font-black text-slate-900">g = 2.5%</th>
                  <th className="text-left p-4 font-black text-slate-900">g = 3.0%</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">8%</td><td className="p-4 text-slate-700">1,936</td><td className="p-4 text-slate-700">2,079</td><td className="p-4 text-slate-700">2,249</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">9%</td><td className="p-4 text-slate-700">1,656</td><td className="p-4 font-bold text-indigo-600">1,756</td><td className="p-4 text-slate-700">1,872</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">10%</td><td className="p-4 text-slate-700">1,446</td><td className="p-4 text-slate-700">1,519</td><td className="p-4 text-slate-700">1,602</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            A one-point change in WACC moves enterprise value by roughly 13%–20% in this example. Instead of a single
            &quot;fair value&quot;, think in ranges, and only act when the market price sits well outside your range.
            For a retail-friendly walkthrough of this mindset, see{' '}
            <a href="/blog/dcf-modeling-retail-investors/" className="text-indigo-600 font-semibold hover:underline">DCF modeling for retail investors</a>{' '}
            and the longer{' '}
            <a href="/academy/dcf-valuation-complete-guide/" className="text-indigo-600 font-semibold hover:underline">complete DCF valuation guide</a>.
          </p>
        </section>

        <section id="reverse-dcf" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Reverse DCF: what is the market assuming?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Instead of asking &quot;what is this worth?&quot;, a reverse DCF asks &quot;what growth is already priced in?&quot;.
            Hold WACC and terminal growth fixed, then adjust the growth rate until the model matches the share price.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            In the hypothetical company above, a $20 share price (instead of $15.56) implies free cash flow growth of
            about 10.4% a year for five years, roughly double the 5% base case, with the same 9% WACC and 2.5% terminal
            growth. If the company has never grown that fast, the price may be asking a lot. If it routinely does, the
            price may be reasonable. Either way, you now have a concrete question to research instead of a vague feeling.
          </p>
          <ol className="space-y-3 text-slate-700">
            <li>1) Pull the current share price, diluted share count, debt and cash from the latest 10-Q.</li>
            <li>2) Enter your WACC and a conservative terminal growth rate.</li>
            <li>3) Change only the forecast growth rate until value per share equals the price.</li>
            <li>4) Compare that implied growth with the company&apos;s history and its industry.</li>
          </ol>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes and limits</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>Terminal growth above WACC</strong> (or very close to it) makes the formula explode. Keep a healthy gap.</li>
            <li>• <strong>Mixing cash flow types.</strong> Unlevered FCF pairs with WACC; levered FCF (after interest) pairs with the cost of equity.</li>
            <li>• <strong>Forgetting the equity bridge.</strong> Subtract debt, add cash, and use diluted share count.</li>
            <li>• <strong>Hockey-stick forecasts</strong> that assume margins expand every year without a reason.</li>
            <li>• <strong>Poor fit companies.</strong> DCF works best for businesses with positive, reasonably predictable cash flow. Banks, insurers, early-stage startups and highly cyclical firms usually need other methods.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Do I need Excel to build a DCF?</h3>
              <p className="text-slate-700">No. The math is a handful of discounting steps. A calculator or an online modeler is enough for a simple five-year model; spreadsheets help when you want detailed line items.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What discount rate should I use?</h3>
              <p className="text-slate-700">For an enterprise DCF, the company&apos;s WACC. Many individual investors also test a higher personal hurdle rate to build in a margin of safety.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Why does my DCF value differ from the stock price?</h3>
              <p className="text-slate-700">The market is pricing different assumptions. Try solving for the growth rate that justifies today&apos;s price, then ask whether that growth seems plausible.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500">
            Educational only, not investment advice. Sources:{' '}
            <a href="https://www.sec.gov/" className="text-indigo-600 font-semibold hover:underline">SEC (EDGAR filings)</a>,{' '}
            <a href="https://www.investor.gov/" className="text-indigo-600 font-semibold hover:underline">Investor.gov</a>,{' '}
            <a href="https://home.treasury.gov/" className="text-indigo-600 font-semibold hover:underline">U.S. Treasury (yields)</a>.
          </p>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Valuation Insights"
          description="Get weekly valuation and finance insights that make complex models practical."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.EXCEL_MODELER)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📁 Excel Power Modeler</h4>
            <p className="text-sm text-slate-600">Model DCF valuations without spreadsheets.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📈 Investment Calculator</h4>
            <p className="text-sm text-slate-600">Project long-term growth scenarios.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExcelModelerGuide2025;

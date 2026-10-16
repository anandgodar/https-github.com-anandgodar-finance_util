'use client';

import React from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const DividendReinvestmentGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>💹 Dividends</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Dividend Reinvestment (DRIP) Guide 2026: Compounding Explained
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Dividend reinvestment (DRIP) turns cash payouts into more shares, which compounds over time. If you&apos;ve wondered
          <strong> how dividend reinvestment works</strong>, how much difference it really makes, and how reinvested
          dividends are taxed, this guide walks through the math step by step.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Model DRIP Growth</h3>
              <p className="text-sm text-slate-600">Use our DRIP calculator to visualize compounding.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.DRIP_CALCULATOR)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open DRIP Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('what-is-drip')} className="text-indigo-600 hover:underline">1. What is DRIP?</button></li>
          <li><button onClick={() => scrollToSection('why-compounds')} className="text-indigo-600 hover:underline">2. Why compounding accelerates wealth</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">3. Worked example: DRIP vs taking cash</button></li>
          <li><button onClick={() => scrollToSection('taxes')} className="text-indigo-600 hover:underline">4. How reinvested dividends are taxed (2026)</button></li>
          <li><button onClick={() => scrollToSection('drip-vs-cash')} className="text-indigo-600 hover:underline">5. DRIP vs cash dividends: which fits you?</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">6. Common mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="what-is-drip" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is DRIP?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            DRIP stands for Dividend Reinvestment Plan. Instead of taking cash, dividends buy more shares automatically.
            Most brokerages let you switch reinvestment on for an entire account or for individual holdings, and many
            buy fractional shares so every cent of the dividend goes to work. Some companies also run their own DRIPs
            through a transfer agent, occasionally offering shares at a small discount.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Mechanically, nothing magical happens: on the payment date, the cash that would have landed in your account
            is used to buy more of the same stock or fund at that day&apos;s price. What matters is what those extra shares
            do next.
          </p>
        </section>

        <section id="why-compounds" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Why compounding accelerates wealth</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Each new share earns dividends too, which creates a snowball effect. If a holding pays a 3% yield and the
            share price also rises over time, reinvesting means your share count grows every quarter, and each future
            dividend is paid on a larger base. Your total return becomes roughly price growth <em>plus</em> dividend
            yield, compounded, rather than price growth alone.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The effect is small in the first few years and large after a decade or two, which is why time in the
            market matters more than the exact yield. You can see the same pattern in our article on{' '}
            <a href="/blog/cost-of-waiting-compound-interest/" className="text-indigo-600 font-semibold hover:underline">the cost of waiting to invest</a>.
          </p>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Worked example: DRIP vs taking cash</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Hypothetical example:</strong> you invest $10,000 in a fund that yields 3% a year and whose share price
            grows 5% a year. These are round illustrative numbers, not a forecast, and the example ignores taxes and fees
            (as it would roughly be inside an IRA).
          </p>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>With DRIP:</strong> the portfolio compounds at about 8% (5% growth + 3% yield).</li>
            <li>• <strong>Taking cash:</strong> the shares compound at 5%, and you collect dividends that grow as the share price grows, but they don&apos;t buy more shares.</li>
          </ul>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Years</th>
                  <th className="text-left p-4 font-black text-slate-900">DRIP portfolio value</th>
                  <th className="text-left p-4 font-black text-slate-900">Cash route: shares + dividends collected</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-slate-900">10</td>
                  <td className="p-4 font-bold text-indigo-600">$21,589</td>
                  <td className="p-4 text-slate-700">$16,289 + $3,773 = $20,062</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-slate-900">20</td>
                  <td className="p-4 font-bold text-indigo-600">$46,610</td>
                  <td className="p-4 text-slate-700">$26,533 + $9,920 = $36,453</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-slate-900">30</td>
                  <td className="p-4 font-bold text-indigo-600">$100,627</td>
                  <td className="p-4 text-slate-700">$43,219 + $19,932 = $63,151</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <p className="text-emerald-900 font-semibold">
              📊 After 10 years the gap is about $1,500. After 30 years it is roughly $37,000, on the same $10,000
              starting investment. The cash dividends in the right-hand column were not reinvested anywhere; if you spent
              them, the cash route ends with only the share value.
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Real returns are uneven, yields change, and companies can cut dividends, so treat this as an illustration of
            the mechanism. To test your own numbers, plug them into the{' '}
            <a href="/dividend-reinvestment-calculator/" className="text-indigo-600 font-semibold hover:underline">dividend reinvestment calculator</a>{' '}
            or a broader{' '}
            <a href="/wealth-investment-projector/" className="text-indigo-600 font-semibold hover:underline">investment growth projector</a>.
          </p>
        </section>

        <section id="taxes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How reinvested dividends are taxed (2026)</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            This is the part many investors miss: <strong>in a taxable brokerage account, reinvested dividends are still
            taxable in the year they are paid</strong>, exactly as if you had received cash. Your broker reports them on
            Form 1099-DIV. Inside an IRA, 401(k), or other tax-advantaged account, dividends are not taxed when paid.
          </p>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>Qualified dividends</strong> are taxed at long-term capital gains rates. For 2026 that is 0% on taxable income up to $49,450 (single) or $98,900 (married filing jointly), 15% up to $545,500 (single) or $613,700 (MFJ), and 20% above that.</li>
            <li>• <strong>Ordinary (non-qualified) dividends</strong>, such as most REIT distributions and dividends on shares you didn&apos;t hold long enough, are taxed at your regular income tax rate.</li>
            <li>• To be qualified, you generally must hold the stock more than 60 days during the 121-day period that starts 60 days before the ex-dividend date.</li>
            <li>• Higher earners may also owe the 3.8% Net Investment Income Tax when modified AGI exceeds $200,000 (single) or $250,000 (MFJ).</li>
          </ul>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <p className="text-indigo-900 font-semibold">
              💡 <strong>Hypothetical example:</strong> a single filer with $85,000 of 2026 taxable income receives $2,000 of
              qualified dividends, all reinvested. Their income is in the 15% band, so they owe about $300 of federal tax on
              dividends they never received as cash. Plan for that bill (for example via withholding or{' '}
              <a href="/quarterly-estimated-tax-calculator/" className="text-indigo-600 font-semibold hover:underline">quarterly estimated taxes</a>).
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Cost basis:</strong> each reinvestment is a new purchase that adds to your cost basis. Because you
            already paid tax on those dividends, keeping accurate basis records prevents you from paying tax on the same
            money again when you sell. Brokers are required to report basis for most shares bought in recent years, but check your records if
            you transferred accounts or hold older positions.
          </p>
        </section>

        <section id="drip-vs-cash" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">DRIP vs cash dividends: which fits you?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Cash dividends provide income today. DRIP prioritizes long-term growth. Your choice depends on your goals.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">DRIP tends to suit you if…</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• You are still accumulating and won&apos;t need the income for years.</li>
                <li>• You want automatic, fee-free investing without timing decisions.</li>
                <li>• The holding is a diversified fund rather than a single stock.</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Taking cash may suit you if…</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• You are retired or living partly on portfolio income.</li>
                <li>• You prefer to direct dividends to underweight assets when rebalancing.</li>
                <li>• One position is already too large and you don&apos;t want it to grow further.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>Ignoring dividend tax impact.</strong> Reinvesting doesn&apos;t defer the tax in a taxable account.</li>
            <li>• <strong>Over-concentrating in one dividend stock.</strong> Automatic reinvestment keeps adding to the same name.</li>
            <li>• <strong>Forgetting to rebalance periodically.</strong> DRIP can slowly push your allocation away from target.</li>
            <li>• <strong>Triggering a wash sale.</strong> If you sell shares at a loss and a DRIP buys the same security within 30 days before or after, part of the loss can be disallowed.</li>
            <li>• <strong>Chasing the highest yield.</strong> An unusually high yield can signal a dividend cut ahead; total return matters more than yield alone.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Do I pay tax on dividends I reinvest?</h3>
              <p className="text-slate-700">Yes, in a taxable account. Reinvested dividends count as income in the year paid. In IRAs and 401(k)s they are not taxed when paid.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Does DRIP cost anything?</h3>
              <p className="text-slate-700">Most major brokerages reinvest dividends without a commission, but check your broker&apos;s fee schedule and any company-run plan terms.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Can I turn DRIP off later?</h3>
              <p className="text-slate-700">Usually yes, per holding or per account. Future dividends are then paid in cash; shares already bought stay in your account.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is DRIP better than buying more shares myself?</h3>
              <p className="text-slate-700">Economically it&apos;s similar. DRIP&apos;s advantage is automation and fractional shares; manual reinvestment gives you control over where the money goes.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500">
            This guide is educational and not individualized tax or investment advice. Sources:{' '}
            <a href="https://www.irs.gov/taxtopics/tc404" className="text-indigo-600 font-semibold hover:underline">IRS Topic 404, Dividends</a>,{' '}
            <a href="https://www.irs.gov/publications/p550" className="text-indigo-600 font-semibold hover:underline">IRS Publication 550</a>,{' '}
            <a href="https://www.investor.gov/" className="text-indigo-600 font-semibold hover:underline">Investor.gov (SEC)</a>.
          </p>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Dividend Strategy Tips"
          description="Get weekly insights on dividends, compounding, and portfolio income."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.DRIP_CALCULATOR)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">💹 DRIP Calculator</h4>
            <p className="text-sm text-slate-600">Model dividend compounding over time.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📈 Investment Calculator</h4>
            <p className="text-sm text-slate-600">Project growth with recurring contributions.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DividendReinvestmentGuide2025;

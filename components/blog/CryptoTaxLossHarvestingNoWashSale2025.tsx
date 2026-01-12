import React, { useEffect } from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const CryptoTaxLossHarvestingNoWashSale2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Why Crypto Tax Loss Harvesting is 10X Better Than Stocks: The No Wash Sale Rule Loophole",
      "description": "Understand why crypto tax loss harvesting beats stocks. Learn the no wash sale rule advantage, how to immediately rebuy crypto, step-by-step harvesting, reporting tips, and common mistakes.",
      "author": {
        "@type": "Organization",
        "name": "QuantCurb"
      },
      "publisher": {
        "@type": "Organization",
        "name": "QuantCurb",
        "logo": {
          "@type": "ImageObject",
          "url": "https://quantcurb.com/logo.png"
        }
      },
      "datePublished": "2026-02-10",
      "dateModified": "2026-02-10",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/no-wash-sale-rule-crypto-tax-loss-harvesting"
      },
      "keywords": "no wash sale rule crypto, crypto tax loss harvesting vs stocks, can you immediately rebuy crypto after selling, why crypto tax loss harvesting is better"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-crypto-wash-sale';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-crypto-wash-sale');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

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
          <span>📅 Updated February 2026</span>
          <span>•</span>
          <span>⏱️ 20 min read</span>
          <span>•</span>
          <span>🪙 Crypto Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Why Crypto Tax Loss Harvesting is 10X Better Than Stocks: The No Wash Sale Rule Loophole
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Here&apos;s the truth: the biggest tax mistake crypto investors make isn&apos;t a bad trade—it&apos;s skipping tax loss harvesting.
          The <strong>no wash sale rule for crypto</strong> creates a rare edge that stock investors simply don&apos;t get. If you
          understand it, you can harvest losses, immediately rebuy, and stay invested while lowering your tax bill.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Estimate Your Crypto Tax Savings Instantly
              </h3>
              <p className="text-sm text-slate-600">
                Use our free calculator to model harvestable losses and see your potential tax reduction.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.CRYPTO_TAX_LOSS)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use the Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('the-10k-mistake')} className="text-indigo-600 hover:underline">1. The $10,000 mistake crypto investors make</button></li>
          <li><button onClick={() => scrollToSection('what-is-tlh')} className="text-indigo-600 hover:underline">2. What is tax loss harvesting? (Quick explainer)</button></li>
          <li><button onClick={() => scrollToSection('stock-wash-sale')} className="text-indigo-600 hover:underline">3. The stock problem: the 30-day wash sale rule</button></li>
          <li><button onClick={() => scrollToSection('crypto-advantage')} className="text-indigo-600 hover:underline">4. The crypto advantage: no wash sale rule</button></li>
          <li><button onClick={() => scrollToSection('stocks-vs-crypto')} className="text-indigo-600 hover:underline">5. Stocks vs crypto: side-by-side comparison</button></li>
          <li><button onClick={() => scrollToSection('50k-example')} className="text-indigo-600 hover:underline">6. Real example: harvesting $50k in losses</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">7. Common mistakes to avoid</button></li>
          <li><button onClick={() => scrollToSection('reporting')} className="text-indigo-600 hover:underline">8. How to report crypto losses (Form 8949 & Schedule D)</button></li>
          <li><button onClick={() => scrollToSection('software')} className="text-indigo-600 hover:underline">9. Best crypto tax software for harvesting</button></li>
          <li><button onClick={() => scrollToSection('calculator-cta')} className="text-indigo-600 hover:underline">10. Use our free crypto tax loss calculator</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="the-10k-mistake" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The $10,000 mistake crypto investors make</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Imagine you bought $100,000 of crypto, watched it drop to $50,000, and held on because you "don&apos;t want to lock
            in a loss." That instinct is normal—but it&apos;s often a <strong>$10,000+ tax mistake</strong>. If you sold at the low,
            you could claim a $50,000 capital loss. That loss can offset gains and even reduce ordinary income. If you then
            immediately rebuy the crypto, your market exposure barely changes—but your tax bill does.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            This is the core of <strong>crypto tax loss harvesting</strong>: realize a loss on paper, keep your portfolio
            position intact, and use the loss to cut taxes. The reason it works so well in crypto is simple:
            <strong> there&apos;s no wash sale rule for crypto (yet)</strong>. Stock investors don&apos;t get this advantage.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
            <p className="text-yellow-900 font-semibold text-lg mb-2">⚠️ Quick Reality Check</p>
            <p className="text-yellow-800">
              The IRS can change rules over time, and Congress has discussed extending wash sale rules to crypto. Always
              check current guidance or consult a tax professional. This guide is educational, not tax advice.
            </p>
          </div>
        </section>

        <section id="what-is-tlh" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is tax loss harvesting? (Quick explainer)</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Tax loss harvesting</strong> is the strategy of selling assets at a loss to offset capital gains.
            In the U.S., you can also use up to <strong>$3,000 of net losses</strong> per year to reduce ordinary income,
            with unused losses carried forward indefinitely.
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-black text-slate-900 mb-4">Why it matters in crypto</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• Crypto is volatile, creating frequent loss opportunities.</li>
              <li>• Losses can offset crypto gains, stock gains, or other capital gains.</li>
              <li>• You can rebuy immediately without triggering a wash sale (for now).</li>
            </ul>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            Think of it like a tax coupon. If you&apos;re down on a position, you can turn that paper loss into a real tax asset
            without changing your long-term investment thesis.
          </p>
        </section>

        <section id="stock-wash-sale" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The stock problem: the 30-day wash sale rule</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Stocks are governed by the <strong>wash sale rule</strong>. If you sell a stock at a loss and buy the same or a
            substantially identical stock within 30 days, the IRS disallows the loss. The loss is added to your cost basis
            instead of being deductible right away.
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-black text-slate-900 mb-4">Why this hurts stock investors</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• You must wait 31 days to rebuy the same stock if you want the loss.</li>
              <li>• Waiting 31 days means missing market rebounds.</li>
              <li>• Using a "similar" stock adds tracking risk.</li>
            </ul>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            In practice, the wash sale rule forces stock investors to choose: harvest the loss and risk being out of the
            market, or stay invested and miss the deduction. Crypto investors, for now, don&apos;t face that tradeoff.
          </p>
        </section>

        <section id="crypto-advantage" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The crypto advantage: no wash sale rule</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            The IRS currently treats cryptocurrency as <strong>property</strong>, not a security. That classification means
            the wash sale rule—written for stocks and securities—does not explicitly apply to crypto. As a result, you can:
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <ul className="space-y-2 text-emerald-900 font-semibold">
              <li>✅ Sell crypto at a loss</li>
              <li>✅ Immediately rebuy the same coin</li>
              <li>✅ Keep your market exposure</li>
              <li>✅ Still claim the tax loss</li>
            </ul>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            This is the loophole investors talk about when they search "<strong>can you immediately rebuy crypto after selling</strong>."
            The answer, under current rules: <strong>yes</strong>. That single difference makes crypto tax loss harvesting
            dramatically more efficient than stocks.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold text-lg mb-2">💡 Pro Tip</p>
            <p className="text-indigo-800">
              The best time to harvest is when volatility creates sharp dips. You can sell, rebuy, and keep your position
              while resetting your cost basis lower.
            </p>
          </div>
        </section>

        <section id="stocks-vs-crypto" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Stocks vs crypto: side-by-side comparison</h2>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Feature</th>
                  <th className="text-left p-4 font-black text-slate-900">Stocks</th>
                  <th className="text-left p-4 font-black text-slate-900">Crypto</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Wash Sale Rule</td>
                  <td className="p-4 text-slate-700">Applies (30-day wait)</td>
                  <td className="p-4 font-bold text-emerald-600">Does not apply (for now)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Rebuy after selling</td>
                  <td className="p-4 text-slate-700">Wait 31 days</td>
                  <td className="p-4 font-bold text-emerald-600">Immediate rebuy allowed</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Market exposure risk</td>
                  <td className="p-4 text-slate-700">High (out of market)</td>
                  <td className="p-4 font-bold text-emerald-600">Low (stay invested)</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Harvesting efficiency</td>
                  <td className="p-4 text-slate-700">Limited</td>
                  <td className="p-4 font-bold text-emerald-600">High</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            This is why the keyword <strong>"crypto tax loss harvesting vs stocks"</strong> keeps trending. Crypto offers
            a clean, repeatable way to harvest losses without changing your exposure. Stocks can&apos;t do that without a
            31-day gap.
          </p>
        </section>

        <section id="50k-example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Real example: harvesting $50K in losses (step-by-step)</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Here&apos;s a realistic scenario. You bought $120,000 of ETH. It drops to $70,000. You still believe in ETH
            long-term, but you want the tax benefit now.
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-black text-slate-900 mb-4">Step-by-step walkthrough</h3>
            <ol className="space-y-3 text-slate-700">
              <li><strong>1) Sell your ETH position</strong> at $70,000. Realized loss: $50,000.</li>
              <li><strong>2) Immediately rebuy ETH</strong> for $70,000 (same day).</li>
              <li><strong>3) Record the realized loss</strong> on Form 8949 and Schedule D.</li>
              <li><strong>4) Use the loss</strong> to offset gains or reduce taxable income by up to $3,000 this year.</li>
              <li><strong>5) Carry forward</strong> any leftover loss into future years.</li>
            </ol>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
            <h3 className="text-xl font-black text-indigo-900 mb-3">How much could you save?</h3>
            <p className="text-indigo-800">
              If your effective capital gains rate is 20%, a $50,000 harvested loss could reduce taxes by around
              <strong> $10,000</strong>. That&apos;s real money—without changing your portfolio.
            </p>
          </div>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes to avoid</h2>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-black text-slate-900 mb-3">1. Forgetting to track cost basis</h3>
              <p className="text-slate-700">
                You need accurate cost basis data to claim losses. Missing records can erase your deduction or create audit
                risk. Use a tax tool that pulls in exchange data automatically.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-black text-slate-900 mb-3">2. Harvesting without a plan</h3>
              <p className="text-slate-700">
                Harvesting losses without considering your overall tax picture can waste deductions. If you have no gains
                this year, you might only use $3,000 of losses now and carry the rest forward.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-black text-slate-900 mb-3">3. Overlooking short-term vs long-term rates</h3>
              <p className="text-slate-700">
                Short-term gains are taxed at higher ordinary income rates. If you have short-term gains, harvesting losses
                against them can be especially valuable.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-black text-slate-900 mb-3">4. Assuming the rule is permanent</h3>
              <p className="text-slate-700">
                The no-wash-sale advantage might change. Treat it as a current opportunity, not a forever rule. Keep
                monitoring tax law updates.
              </p>
            </div>
          </div>
        </section>

        <section id="reporting" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to report crypto losses (Form 8949 & Schedule D)</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Reporting crypto losses isn&apos;t complicated, but you need the right forms. Most taxpayers will use:
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-black text-slate-900 mb-4">The two core forms</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• <strong>Form 8949</strong>: List each crypto sale, with dates, proceeds, and cost basis.</li>
              <li>• <strong>Schedule D</strong>: Summarize total capital gains and losses from Form 8949.</li>
            </ul>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            If you use a crypto tax platform, it will generate these forms for you automatically. The key is making sure
            every transaction is captured with accurate timestamps and cost basis.
          </p>
        </section>

        <section id="software" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Best crypto tax software for harvesting</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            You can do this manually, but it&apos;s painful. Most active traders rely on software to sync exchange data,
            calculate cost basis, and generate tax forms. These tools are consistently popular:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-black text-slate-900 mb-2">CoinLedger</h3>
              <p className="text-sm text-slate-600">Easy import, clear reporting, and strong tax form generation.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-black text-slate-900 mb-2">Koinly</h3>
              <p className="text-sm text-slate-600">Wide exchange support, portfolio tracking, and flexible cost basis.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-black text-slate-900 mb-2">TokenTax</h3>
              <p className="text-sm text-slate-600">Premium support, tax professional add-ons, and DeFi handling.</p>
            </div>
          </div>
        </section>

        <section id="calculator-cta" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Use our free crypto tax loss calculator</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Don&apos;t guess. Our calculator lets you input your positions, see potential losses, and estimate your tax savings
            in minutes. It&apos;s the fastest way to quantify whether harvesting is worth it right now.
          </p>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black mb-2">Calculate Your Savings Now</h3>
                <p className="text-indigo-100">
                  See how much tax you could save by harvesting crypto losses this year.
                </p>
              </div>
              <button
                onClick={() => onNavigate?.(ToolType.CRYPTO_TAX_LOSS)}
                className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-xl hover:bg-indigo-50 transition"
              >
                Launch Calculator →
              </button>
            </div>
          </div>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Get Crypto Tax Tips That Actually Save Money"
          description="Weekly insights on tax loss harvesting, crypto reporting, and strategy updates so you never miss a legal edge."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.CRYPTO_TAX_LOSS)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🧮 Crypto Tax Loss Harvester</h4>
            <p className="text-sm text-slate-600">Model harvestable losses and estimate your tax bill reduction.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_TAX_BRACKETS)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📖 Tax Brackets Explained 2025</h4>
            <p className="text-sm text-slate-600">Understand the brackets that determine your capital gains tax rate.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_SE_TAX)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📊 Self-Employment Tax Guide</h4>
            <p className="text-sm text-slate-600">Learn how taxes are calculated when you&apos;re self-employed.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_INDEX)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🗂️ QuantCurb Blog Index</h4>
            <p className="text-sm text-slate-600">Browse our full library of tax and investing guides.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoTaxLossHarvestingNoWashSale2025;

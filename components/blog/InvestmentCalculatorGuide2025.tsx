import React, { useEffect } from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const InvestmentCalculatorGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Complete Guide to Investment Calculator 2025: SIP, Compound Interest & Wealth Growth",
      "description": "Master investment calculations with our comprehensive 2025 guide. Learn SIP investing, compound interest, inflation-adjusted returns, and how to use an investment calculator to project your wealth growth.",
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
      "datePublished": "2026-01-08",
      "dateModified": "2026-01-08",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://quantcurb.com/blog/investment-calculator-guide-2025"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-investment';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-investment');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <header className="space-y-6">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span>📅 Updated January 2026</span>
          <span>•</span>
          <span>⏱️ 13 min read</span>
          <span>•</span>
          <span>📈 Investing</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Complete Guide to Investment Calculator 2025: SIP, Compound Interest & Wealth Growth
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Understanding how investments grow over time is crucial for building wealth. This comprehensive guide explains
          <strong> SIP (Systematic Investment Plans)</strong>, compound interest, inflation-adjusted returns, and how to
          use an investment calculator to project your financial future.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Calculate Your Investment Growth
              </h3>
              <p className="text-sm text-slate-600">
                Use our investment calculator to project wealth growth with SIP and compound interest
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Calculator →
            </button>
          </div>
        </div>
      </header>

      <article className="prose prose-lg max-w-none space-y-12">
        <section className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What is an Investment Calculator?</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            An <strong>investment calculator</strong> helps you project how your money will grow over time based on
            your initial investment, monthly contributions (SIP), expected returns, and time horizon. It's essential
            for planning long-term wealth building.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold text-lg">
              💡 <strong>Key Use Cases:</strong>
              <ul className="mt-2 space-y-1 text-base">
                <li>• Project retirement savings growth</li>
                <li>• Calculate SIP investment outcomes</li>
                <li>• Compare different investment strategies</li>
                <li>• Plan for major financial goals (house, education)</li>
              </ul>
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Understanding Compound Interest</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Compound interest</strong> is when your investment earnings generate their own earnings. Over time,
            this creates exponential growth—the "snowball effect" of investing.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Year</th>
                  <th className="text-left p-4 font-black text-slate-900">Starting Balance</th>
                  <th className="text-left p-4 font-black text-slate-900">Annual Contribution</th>
                  <th className="text-left p-4 font-black text-slate-900">Returns (7%)</th>
                  <th className="text-left p-4 font-black text-slate-900">Ending Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Year 1</td>
                  <td className="p-4 font-bold text-slate-900">$10,000</td>
                  <td className="p-4 font-bold text-slate-900">$12,000</td>
                  <td className="p-4 font-bold text-emerald-600">$1,540</td>
                  <td className="p-4 font-bold text-indigo-600">$23,540</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Year 5</td>
                  <td className="p-4 font-bold text-slate-900">$70,000</td>
                  <td className="p-4 font-bold text-slate-900">$12,000</td>
                  <td className="p-4 font-bold text-emerald-600">$5,740</td>
                  <td className="p-4 font-bold text-indigo-600">$87,740</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Year 10</td>
                  <td className="p-4 font-bold text-slate-900">$150,000</td>
                  <td className="p-4 font-bold text-slate-900">$12,000</td>
                  <td className="p-4 font-bold text-emerald-600">$11,340</td>
                  <td className="p-4 font-bold text-indigo-600">$173,340</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Year 20</td>
                  <td className="p-4 font-bold text-slate-900">$400,000</td>
                  <td className="p-4 font-bold text-slate-900">$12,000</td>
                  <td className="p-4 font-bold text-emerald-600">$28,840</td>
                  <td className="p-4 font-bold text-indigo-600">$440,840</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <p className="text-emerald-900 font-semibold">
              📊 <strong>Power of Compounding:</strong> After 20 years, your $12,000 annual contribution generates
              $28,840 in returns—more than double your contribution! This is the magic of compound interest.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">SIP (Systematic Investment Plans)</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>SIP</strong> is a strategy where you invest a fixed amount regularly (monthly, quarterly) regardless
            of market conditions. This approach:
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-700 mt-4">
            <li><strong>Dollar-cost averaging:</strong> Buy more shares when prices are low, fewer when high</li>
            <li><strong>Disciplined investing:</strong> Automates your investment habit</li>
            <li><strong>Reduces timing risk:</strong> Don't need to time the market</li>
            <li><strong>Compounds faster:</strong> Regular contributions accelerate growth</li>
          </ul>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <p className="text-indigo-900 font-semibold">
              💡 <strong>Example:</strong> Investing $500/month for 30 years at 7% returns:
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Total invested: $180,000</li>
                <li>• Final value: ~$600,000</li>
                <li>• Earnings: $420,000 (from compound interest!)</li>
              </ul>
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-black mb-4">Calculate Your Investment Growth</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Use our investment calculator to project wealth growth with SIP, compound interest, and inflation adjustments.
          </p>
          <button
            onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
            className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition text-lg"
          >
            Use Investment Calculator →
          </button>
        </section>

        <section className="mt-12">
          <EmailCapture
            title="Get Investment Planning Resources"
            description="Subscribe for investment strategies, SIP tips, and wealth-building guides."
            leadMagnet={{
              title: "Investment Planning Guide 2025",
              description: "Complete guide to SIP investing, compound interest, and wealth building strategies."
            }}
            buttonText="Subscribe Free"
          />
        </section>
      </article>
    </div>
  );
};

export default InvestmentCalculatorGuide2025;

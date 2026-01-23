'use client';


import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const ShouldIPayOffDebtOrInvest2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Should I Pay Off Debt or Invest? Complete 2025 Guide with Calculator",
      "description": "Decide whether to pay off debt or invest your money in 2025. Learn the debt vs investment math, interest rate comparisons, and strategies to maximize your wealth.",
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
        "@id": "https://quantcurb.com/blog/should-i-pay-off-debt-or-invest-2025"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-debt-invest';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-debt-invest');
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
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span>📅 Updated January 2026</span>
          <span>•</span>
          <span>⏱️ 14 min read</span>
          <span>•</span>
          <span>💰 Financial Strategy</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Should I Pay Off Debt or Invest? Complete 2025 Guide with Calculator
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          One of the most common financial questions: <strong>"Should I pay off debt or invest?"</strong>
          This comprehensive guide explains the math, interest rate comparisons, and strategies to maximize your wealth
          in 2025.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Calculate Your Best Strategy
              </h3>
              <p className="text-sm text-slate-600">
                Use our investment calculator to compare debt payoff vs investment returns
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

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('the-math')} className="text-indigo-600 hover:underline">1. The Math: Interest Rate Comparison</button></li>
          <li><button onClick={() => scrollToSection('when-pay-debt')} className="text-indigo-600 hover:underline">2. When to Pay Off Debt First</button></li>
          <li><button onClick={() => scrollToSection('when-invest')} className="text-indigo-600 hover:underline">3. When to Invest Instead</button></li>
          <li><button onClick={() => scrollToSection('hybrid-strategy')} className="text-indigo-600 hover:underline">4. Hybrid Strategy: The Best of Both</button></li>
          <li><button onClick={() => scrollToSection('debt-types')} className="text-indigo-600 hover:underline">5. Different Types of Debt</button></li>
          <li><button onClick={() => scrollToSection('examples')} className="text-indigo-600 hover:underline">6. Real-World Examples</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. Frequently Asked Questions</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="the-math" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The Math: Interest Rate Comparison</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            The fundamental question is: <strong>Is your debt's interest rate higher than your expected investment returns?</strong>
            If yes, pay off debt. If no, invest.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
            <p className="text-indigo-900 font-semibold text-lg">
              💡 <strong>Simple Rule:</strong> If debt interest rate &gt; expected investment return → Pay off debt first.
              If debt interest rate &lt; expected investment return → Invest first.
            </p>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">Expected Investment Returns (2025)</h3>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-4">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Investment Type</th>
                  <th className="text-left p-4 font-black text-slate-900">Expected Annual Return</th>
                  <th className="text-left p-4 font-black text-slate-900">Risk Level</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">S&P 500 Index Fund</td>
                  <td className="p-4 font-bold text-indigo-600">7-10%</td>
                  <td className="p-4 text-slate-700">Moderate</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Total Stock Market Fund</td>
                  <td className="p-4 font-bold text-indigo-600">7-10%</td>
                  <td className="p-4 text-slate-700">Moderate</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">401(k) with Employer Match</td>
                  <td className="p-4 font-bold text-emerald-600">100%+ (instant match)</td>
                  <td className="p-4 text-emerald-600 font-bold">ALWAYS DO THIS FIRST</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">High-Yield Savings Account</td>
                  <td className="p-4 font-bold text-slate-600">4-5%</td>
                  <td className="p-4 text-slate-700">Low</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Bonds</td>
                  <td className="p-4 font-bold text-slate-600">3-5%</td>
                  <td className="p-4 text-slate-700">Low</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-8">Common Debt Interest Rates</h3>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-4">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Debt Type</th>
                  <th className="text-left p-4 font-black text-slate-900">Typical Interest Rate</th>
                  <th className="text-left p-4 font-black text-slate-900">Recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Credit Card Debt</td>
                  <td className="p-4 font-bold text-red-600">18-28%</td>
                  <td className="p-4 font-bold text-red-600">PAY OFF FIRST</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Personal Loans</td>
                  <td className="p-4 font-bold text-yellow-600">6-12%</td>
                  <td className="p-4 text-slate-700">Usually pay off</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Auto Loans</td>
                  <td className="p-4 font-bold text-indigo-600">4-8%</td>
                  <td className="p-4 text-slate-700">Depends on rate</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Student Loans</td>
                  <td className="p-4 font-bold text-indigo-600">3-7%</td>
                  <td className="p-4 text-slate-700">Often invest instead</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">Mortgage</td>
                  <td className="p-4 font-bold text-emerald-600">6-7%</td>
                  <td className="p-4 text-slate-700">Usually invest</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="when-pay-debt" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When to Pay Off Debt First</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Pay off debt first when:
          </p>

          <div className="space-y-4 mt-6">
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
              <h3 className="font-bold text-red-900 text-lg mb-2">1. High-Interest Debt (10%+)</h3>
              <p className="text-red-800">
                Credit cards, payday loans, and high-rate personal loans should be paid off immediately.
                These rates (18-28%) far exceed investment returns.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl p-6">
              <h3 className="font-bold text-yellow-900 text-lg mb-2">2. Debt Causes Stress</h3>
              <p className="text-yellow-800">
                If debt is causing anxiety or affecting your mental health, paying it off provides
                psychological benefits that may outweigh financial optimization.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-6">
              <h3 className="font-bold text-orange-900 text-lg mb-2">3. No Emergency Fund</h3>
              <p className="text-orange-800">
                If you don't have 3-6 months of expenses saved, focus on building an emergency fund
                before aggressive investing. Debt payoff can wait if you have high-interest debt.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6">
              <h3 className="font-bold text-purple-900 text-lg mb-2">4. Debt-to-Income Ratio is High</h3>
              <p className="text-purple-800">
                If your debt payments consume more than 36% of your income, reducing debt improves
                your financial flexibility and credit score.
              </p>
            </div>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <p className="text-emerald-900 font-semibold text-lg">
              📊 <strong>Example:</strong> You have $10,000 in credit card debt at 24% APR.
              <ul className="mt-2 space-y-1 text-base">
                <li>• Paying it off = Guaranteed 24% return (saving $2,400/year in interest)</li>
                <li>• Investing instead = Uncertain 7-10% return (maybe $700-1,000/year)</li>
                <li>• <strong>Verdict:</strong> Pay off debt first!</li>
              </ul>
            </p>
          </div>
        </section>

        <section id="when-invest" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When to Invest Instead</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Invest instead of paying off debt when:
          </p>

          <div className="space-y-4 mt-6">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6">
              <h3 className="font-bold text-emerald-900 text-lg mb-2">1. Employer 401(k) Match</h3>
              <p className="text-emerald-800">
                <strong>ALWAYS contribute enough to get the full employer match.</strong> This is free money
                and an instant 50-100% return. Even if you have high-interest debt, get the match first.
              </p>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-r-xl p-6">
              <h3 className="font-bold text-indigo-900 text-lg mb-2">2. Low-Interest Debt (Under 5%)</h3>
              <p className="text-indigo-800">
                Mortgages, low-rate student loans, and auto loans often have rates below expected
                investment returns. Investing may provide better long-term wealth.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
              <h3 className="font-bold text-blue-900 text-lg mb-2">3. Tax-Advantaged Accounts</h3>
              <p className="text-blue-800">
                Contributing to 401(k)s, IRAs, and HSAs provides tax benefits that can outweigh
                the benefits of paying off low-rate debt.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6">
              <h3 className="font-bold text-purple-900 text-lg mb-2">4. Time in Market Matters</h3>
              <p className="text-purple-800">
                The earlier you invest, the more time your money has to compound. Delaying investments
                to pay off low-rate debt can cost you significant long-term wealth.
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <p className="text-indigo-900 font-semibold text-lg">
              📊 <strong>Example:</strong> You have a $20,000 student loan at 4% APR and $20,000 to invest.
              <ul className="mt-2 space-y-1 text-base">
                <li>• Paying off loan = Guaranteed 4% return (saving $800/year)</li>
                <li>• Investing in S&P 500 = Expected 7-10% return ($1,400-2,000/year)</li>
                <li>• <strong>Verdict:</strong> Invest! The expected return exceeds the debt rate.</li>
              </ul>
            </p>
          </div>
        </section>

        <section id="hybrid-strategy" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Hybrid Strategy: The Best of Both Worlds</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            You don't have to choose one or the other. A hybrid approach often works best:
          </p>

          <div className="space-y-6 mt-6">
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-xl mb-4">Step 1: Emergency Fund First</h3>
              <p className="text-slate-700 mb-4">
                Build 3-6 months of expenses in a high-yield savings account before aggressive debt payoff or investing.
              </p>
            </div>

            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-xl mb-4">Step 2: Get 401(k) Match</h3>
              <p className="text-slate-700 mb-4">
                Contribute enough to get your full employer match—this is free money with instant returns.
              </p>
            </div>

            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-xl mb-4">Step 3: Pay Off High-Interest Debt</h3>
              <p className="text-slate-700 mb-4">
                Aggressively pay off credit cards and any debt above 8-10% interest rate.
              </p>
            </div>

            <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-xl mb-4">Step 4: Invest & Pay Low-Interest Debt</h3>
              <p className="text-slate-700 mb-4">
                Split extra money between investing (401(k), IRA, taxable accounts) and paying down
                low-interest debt (mortgages, student loans). Make minimum payments on low-rate debt
                while investing the rest.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6 mt-6">
            <h3 className="font-bold text-slate-900 text-lg mb-3">Recommended Allocation Example</h3>
            <p className="text-slate-700 mb-4">If you have $1,000/month extra after expenses:</p>
            <ul className="space-y-2 text-slate-700">
              <li>• <strong>$300</strong> → 401(k) (beyond match) or IRA</li>
              <li>• <strong>$400</strong> → Pay off high-interest debt (credit cards)</li>
              <li>• <strong>$200</strong> → Pay extra on low-interest debt (student loans)</li>
              <li>• <strong>$100</strong> → Taxable investment account</li>
            </ul>
          </div>
        </section>

        <section id="debt-types" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Different Types of Debt: Priority Order</h2>

          <div className="space-y-4 mt-6">
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
              <h3 className="font-bold text-red-900 text-xl mb-2">Priority 1: Credit Card Debt</h3>
              <p className="text-red-800">
                <strong>ALWAYS pay off first.</strong> Rates of 18-28% are financial emergencies.
                Stop using credit cards and pay these off aggressively.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-6">
              <h3 className="font-bold text-orange-900 text-xl mb-2">Priority 2: High-Rate Personal Loans</h3>
              <p className="text-orange-800">
                Pay off loans with rates above 10% before investing. These rates exceed expected investment returns.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl p-6">
              <h3 className="font-bold text-yellow-900 text-xl mb-2">Priority 3: Auto Loans (6-8%)</h3>
              <p className="text-yellow-800">
                Consider paying off if rate is above 6-7%. Below that, make minimum payments and invest instead.
              </p>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-r-xl p-6">
              <h3 className="font-bold text-indigo-900 text-xl mb-2">Priority 4: Student Loans (3-7%)</h3>
              <p className="text-indigo-800">
                Usually better to invest. Student loans often have tax benefits and low rates.
                Make minimum payments and invest the rest.
              </p>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6">
              <h3 className="font-bold text-emerald-900 text-xl mb-2">Priority 5: Mortgages (6-7%)</h3>
              <p className="text-emerald-800">
                Generally invest instead. Mortgage rates are often close to investment returns, but
                investing provides liquidity and tax benefits. Make regular payments, invest extra.
              </p>
            </div>
          </div>
        </section>

        <section id="examples" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Real-World Examples</h2>

          <div className="space-y-6 mt-6">
            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-indigo-900 text-xl mb-4">Example 1: Credit Card Debt</h3>
              <div className="space-y-2 text-indigo-800">
                <p><strong>Situation:</strong> $15,000 credit card debt at 24% APR, $500/month extra to allocate</p>
                <p><strong>Option A:</strong> Pay off debt → Saves $3,600/year in interest</p>
                <p><strong>Option B:</strong> Invest $500/month → Might earn $350-500/year (7-10% return)</p>
                <p className="font-bold text-lg mt-2">✅ Verdict: Pay off debt first (guaranteed 24% return)</p>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <h3 className="font-bold text-purple-900 text-xl mb-4">Example 2: Student Loan</h3>
              <div className="space-y-2 text-purple-800">
                <p><strong>Situation:</strong> $30,000 student loan at 4.5% APR, $500/month extra to allocate</p>
                <p><strong>Option A:</strong> Pay off loan → Saves $1,350/year in interest</p>
                <p><strong>Option B:</strong> Invest $500/month → Expected $2,100-3,000/year (7-10% return)</p>
                <p className="font-bold text-lg mt-2">✅ Verdict: Invest (expected return exceeds debt rate)</p>
              </div>
            </div>

            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
              <h3 className="font-bold text-emerald-900 text-xl mb-4">Example 3: Mixed Debt</h3>
              <div className="space-y-2 text-emerald-800">
                <p><strong>Situation:</strong> $5,000 credit card (24%), $20,000 student loan (4%), $1,000/month extra</p>
                <p><strong>Strategy:</strong> Hybrid approach</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>$600/month → Pay off credit card (high priority)</li>
                  <li>$300/month → Invest in 401(k) or IRA</li>
                  <li>$100/month → Extra payment on student loan</li>
                </ul>
                <p className="font-bold text-lg mt-2">✅ Verdict: Hybrid strategy maximizes wealth</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Should I pay off my mortgage or invest?</h3>
              <p className="text-slate-700">
                Generally, invest. Mortgage rates (6-7%) are often close to expected investment returns (7-10%),
                but investing provides liquidity and tax benefits. However, if you're close to retirement or
                value peace of mind, paying off your mortgage can be worthwhile.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What about student loan debt?</h3>
              <p className="text-slate-700">
                Student loans typically have low rates (3-7%) and tax benefits. Make minimum payments and invest
                the rest. However, if student loans cause stress or you're close to forgiveness programs, paying
                them off may be worth it.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Should I invest if I have credit card debt?</h3>
              <p className="text-slate-700">
                <strong>No.</strong> Credit card rates (18-28%) far exceed investment returns. Pay off credit cards
                first, then invest. The only exception is contributing enough to get a 401(k) employer match,
                which is free money.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What if I can't decide?</h3>
              <p className="text-slate-700">
                Use a hybrid approach: pay off high-interest debt aggressively, make minimum payments on low-interest
                debt, and invest the rest. This balances risk reduction with wealth building.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-black mb-4">Calculate Your Best Strategy</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Use our investment calculator to compare debt payoff vs investment returns and find your optimal strategy.
          </p>
          <button
            onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
            className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition text-lg"
          >
            Use Investment Calculator →
          </button>
        </section>
      </article>
    </div>
  );
};

export default ShouldIPayOffDebtOrInvest2025;

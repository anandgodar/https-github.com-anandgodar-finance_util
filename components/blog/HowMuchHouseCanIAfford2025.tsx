
import React, { useEffect } from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const HowMuchHouseCanIAfford2025: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How Much House Can I Afford? Complete 2025 Guide with Calculator",
      "description": "Calculate how much house you can afford in 2025. Learn the 28/36 rule, debt-to-income ratios, down payment requirements, and use our mortgage calculator to find your perfect home price range.",
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
        "@id": "https://quantcurb.com/blog/how-much-house-can-i-afford-2025"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema-house-afford';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema-house-afford');
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
          <span>⏱️ 12 min read</span>
          <span>•</span>
          <span>🏡 Home Buying</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          How Much House Can I Afford? Complete 2025 Guide with Calculator
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          One of the most important questions when buying a home: <strong>"How much house can I afford?"</strong>
          This comprehensive guide explains the 28/36 rule, debt-to-income ratios, down payment strategies, and
          how to calculate your maximum home price in 2025.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Calculate How Much House You Can Afford
              </h3>
              <p className="text-sm text-slate-600">
                Use our mortgage calculator with your income and debts to find your perfect price range
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
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
          <li><button onClick={() => scrollToSection('28-36-rule')} className="text-indigo-600 hover:underline">1. The 28/36 Rule: Lender Guidelines</button></li>
          <li><button onClick={() => scrollToSection('calculate-affordability')} className="text-indigo-600 hover:underline">2. How to Calculate Affordability</button></li>
          <li><button onClick={() => scrollToSection('down-payment')} className="text-indigo-600 hover:underline">3. Down Payment Impact on Affordability</button></li>
          <li><button onClick={() => scrollToSection('credit-score')} className="text-indigo-600 hover:underline">4. Credit Score & Interest Rates</button></li>
          <li><button onClick={() => scrollToSection('other-costs')} className="text-indigo-600 hover:underline">5. Hidden Costs Beyond the Mortgage</button></li>
          <li><button onClick={() => scrollToSection('examples')} className="text-indigo-600 hover:underline">6. Real-World Examples</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">7. Frequently Asked Questions</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="28-36-rule" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The 28/36 Rule: Lender Guidelines for Affordability</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Lenders use the <strong>28/36 rule</strong> as a standard guideline to determine how much house you can afford.
            This rule ensures you don't become "house poor" by taking on too much debt.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-black text-indigo-900 text-2xl mb-3">28% Front-End Ratio</h3>
              <p className="text-indigo-800 text-lg mb-4">
                Your monthly housing costs (PITI) should not exceed <strong>28% of your gross monthly income</strong>.
              </p>
              <div className="bg-white rounded-lg p-4 mt-4">
                <p className="text-sm text-slate-600 mb-1">Formula:</p>
                <p className="font-bold text-indigo-900">Monthly Income × 0.28 = Max Housing Payment</p>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <h3 className="font-black text-purple-900 text-2xl mb-3">36% Back-End Ratio</h3>
              <p className="text-purple-800 text-lg mb-4">
                Your total monthly debt payments (including PITI) should not exceed <strong>36% of your gross monthly income</strong>.
              </p>
              <div className="bg-white rounded-lg p-4 mt-4">
                <p className="text-sm text-slate-600 mb-1">Formula:</p>
                <p className="font-bold text-purple-900">Monthly Income × 0.36 = Max Total Debt</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <p className="text-emerald-900 font-semibold text-lg">
              📊 <strong>Example:</strong> If you earn $100,000/year ($8,333/month):
              <ul className="mt-3 space-y-2 text-base">
                <li>• <strong>28% Rule:</strong> Max housing payment = $8,333 × 0.28 = <strong>$2,333/month</strong></li>
                <li>• <strong>36% Rule:</strong> Max total debt = $8,333 × 0.36 = <strong>$3,000/month</strong></li>
                <li>• If you have $500/month in other debts (car loan, credit cards), your max housing payment = $3,000 - $500 = <strong>$2,500/month</strong></li>
              </ul>
            </p>
          </div>
        </section>

        <section id="calculate-affordability" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">How to Calculate How Much House You Can Afford</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Follow these steps to calculate your maximum home price:
          </p>

          <div className="space-y-6 mt-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate Your Maximum Monthly Payment</h3>
                  <p className="text-slate-700 mb-3">Use the 28/36 rule based on your gross monthly income and existing debts.</p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-2">Example: $100,000/year income, $500/month other debts</p>
                    <p className="font-mono text-sm">Max Total Debt = $8,333 × 0.36 = $3,000</p>
                    <p className="font-mono text-sm">Max Housing = $3,000 - $500 = $2,500/month</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Subtract Non-Mortgage Costs</h3>
                  <p className="text-slate-700 mb-3">From your max housing payment, subtract property taxes, homeowners insurance, and PMI (if applicable).</p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-2">Example: $2,500 max housing payment</p>
                    <p className="font-mono text-sm">- $400 (property taxes)</p>
                    <p className="font-mono text-sm">- $150 (homeowners insurance)</p>
                    <p className="font-mono text-sm">- $200 (PMI with 10% down)</p>
                    <p className="font-mono text-sm font-bold mt-2">= $1,750 available for Principal & Interest</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate Maximum Loan Amount</h3>
                  <p className="text-slate-700 mb-3">Use a mortgage calculator with your available P&I payment, interest rate, and loan term.</p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-2">Example: $1,750/month P&I, 6.5% rate, 30-year term</p>
                    <p className="font-mono text-sm font-bold">Maximum Loan Amount ≈ $275,000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Add Your Down Payment</h3>
                  <p className="text-slate-700 mb-3">Add your down payment to the maximum loan amount to get your maximum home price.</p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-2">Example: $275,000 loan + $30,000 down payment (10%)</p>
                    <p className="font-mono text-sm font-bold text-lg">Maximum Home Price = $305,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="down-payment" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Down Payment Impact on Affordability</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Your down payment significantly affects how much house you can afford. A larger down payment:
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-700 mt-4">
            <li>Reduces your loan amount (lower monthly payment)</li>
            <li>Eliminates PMI if you put down 20% or more</li>
            <li>May qualify you for a lower interest rate</li>
            <li>Reduces total interest paid over the life of the loan</li>
          </ul>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Home Price</th>
                  <th className="text-left p-4 font-black text-slate-900">Down Payment</th>
                  <th className="text-left p-4 font-black text-slate-900">Loan Amount</th>
                  <th className="text-left p-4 font-black text-slate-900">Monthly P&I*</th>
                  <th className="text-left p-4 font-black text-slate-900">PMI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">$400,000</td>
                  <td className="p-4 text-slate-700">5% ($20,000)</td>
                  <td className="p-4 font-bold text-slate-900">$380,000</td>
                  <td className="p-4 font-bold text-slate-900">$2,296</td>
                  <td className="p-4 font-bold text-red-600">$317</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">$400,000</td>
                  <td className="p-4 text-slate-700">10% ($40,000)</td>
                  <td className="p-4 font-bold text-slate-900">$360,000</td>
                  <td className="p-4 font-bold text-slate-900">$2,175</td>
                  <td className="p-4 font-bold text-red-600">$250</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">$400,000</td>
                  <td className="p-4 text-slate-700">20% ($80,000)</td>
                  <td className="p-4 font-bold text-slate-900">$320,000</td>
                  <td className="p-4 font-bold text-slate-900">$1,933</td>
                  <td className="p-4 font-bold text-emerald-600">$0</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-slate-500 p-4 italic">*Principal & Interest at 6.5% for 30 years</p>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-4">
            <p className="text-indigo-900 font-semibold">
              💡 <strong>Key Insight:</strong> Putting down 20% saves you $363/month in PMI and reduces your monthly payment by $363.
              However, don't drain your emergency fund—keep 3-6 months of expenses saved.
            </p>
          </div>
        </section>

        <section id="credit-score" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Credit Score & Interest Rates: How They Affect Affordability</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Your credit score directly impacts your interest rate, which affects how much house you can afford.
            A higher credit score = lower interest rate = more buying power.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Credit Score</th>
                  <th className="text-left p-4 font-black text-slate-900">Interest Rate*</th>
                  <th className="text-left p-4 font-black text-slate-900">Monthly P&I on $300k</th>
                  <th className="text-left p-4 font-black text-slate-900">Max Loan Amount**</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">760+ (Excellent)</td>
                  <td className="p-4 font-bold text-emerald-600">6.0%</td>
                  <td className="p-4 font-bold text-slate-900">$1,799</td>
                  <td className="p-4 font-bold text-slate-900">$333,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">700-759 (Good)</td>
                  <td className="p-4 font-bold text-indigo-600">6.5%</td>
                  <td className="p-4 font-bold text-slate-900">$1,896</td>
                  <td className="p-4 font-bold text-slate-900">$316,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">660-699 (Fair)</td>
                  <td className="p-4 font-bold text-yellow-600">7.0%</td>
                  <td className="p-4 font-bold text-slate-900">$1,996</td>
                  <td className="p-4 font-bold text-slate-900">$300,000</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 text-slate-700">620-659 (Poor)</td>
                  <td className="p-4 font-bold text-red-600">7.5%</td>
                  <td className="p-4 font-bold text-slate-900">$2,098</td>
                  <td className="p-4 font-bold text-slate-900">$285,000</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-slate-500 p-4 italic">*Rates as of early 2025. **Based on $2,000/month max P&I payment</p>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-4">
            <p className="text-emerald-900 font-semibold">
              📈 <strong>Impact:</strong> Improving your credit score from 660 to 760 can increase your buying power by $33,000
              (assuming the same monthly payment budget).
            </p>
          </div>
        </section>

        <section id="other-costs" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Hidden Costs Beyond the Mortgage</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            When calculating affordability, don't forget these additional costs:
          </p>

          <div className="space-y-4 mt-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">💰 Closing Costs</h3>
              <p className="text-slate-700">Typically 2-5% of home price ($8,000-$20,000 on a $400,000 home)</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">🔧 Home Maintenance</h3>
              <p className="text-slate-700">Budget 1-2% of home value annually ($4,000-$8,000/year on a $400,000 home)</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">🏘️ HOA Fees</h3>
              <p className="text-slate-700">If buying a condo or townhouse, HOA fees can be $200-$500/month or more</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">⚡ Utilities</h3>
              <p className="text-slate-700">Electricity, water, gas, internet, and trash can add $200-$400/month</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">🏠 Property Insurance Increases</h3>
              <p className="text-slate-700">Homeowners insurance may increase over time, especially in disaster-prone areas</p>
            </div>
          </div>
        </section>

        <section id="examples" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Real-World Affordability Examples</h2>

          <div className="space-y-6 mt-6">
            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="font-bold text-indigo-900 text-xl mb-4">Example 1: First-Time Homebuyer</h3>
              <div className="space-y-2 text-indigo-800">
                <p><strong>Annual Income:</strong> $75,000 ($6,250/month)</p>
                <p><strong>Other Debts:</strong> $300/month (car loan)</p>
                <p><strong>Down Payment:</strong> $25,000 (saved)</p>
                <p><strong>Credit Score:</strong> 720</p>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="font-bold text-indigo-900 mb-2">Calculation:</p>
                  <p className="text-sm">Max Total Debt = $6,250 × 0.36 = $2,250</p>
                  <p className="text-sm">Max Housing = $2,250 - $300 = $1,950</p>
                  <p className="text-sm">After taxes/insurance/PMI: ~$1,400 available for P&I</p>
                  <p className="font-bold text-lg mt-2">Max Home Price: ~$240,000</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <h3 className="font-bold text-purple-900 text-xl mb-4">Example 2: Growing Family</h3>
              <div className="space-y-2 text-purple-800">
                <p><strong>Annual Income:</strong> $150,000 ($12,500/month)</p>
                <p><strong>Other Debts:</strong> $800/month (car loans, student loans)</p>
                <p><strong>Down Payment:</strong> $80,000 (20% down)</p>
                <p><strong>Credit Score:</strong> 780</p>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="font-bold text-purple-900 mb-2">Calculation:</p>
                  <p className="text-sm">Max Total Debt = $12,500 × 0.36 = $4,500</p>
                  <p className="text-sm">Max Housing = $4,500 - $800 = $3,700</p>
                  <p className="text-sm">After taxes/insurance (no PMI): ~$2,800 available for P&I</p>
                  <p className="font-bold text-lg mt-2">Max Home Price: ~$450,000</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How much house can I afford with a $100,000 salary?</h3>
              <p className="text-slate-700">
                With a $100,000 salary ($8,333/month), following the 28/36 rule, you can typically afford a home priced
                between $300,000-$400,000, depending on your down payment, credit score, existing debts, and local property taxes.
                Use our <button onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)} className="text-indigo-600 hover:underline font-semibold">mortgage calculator</button> for a precise estimate.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Should I use the 28/36 rule or a different guideline?</h3>
              <p className="text-slate-700">
                The 28/36 rule is a conservative guideline used by most lenders. Some lenders may approve up to 43% debt-to-income
                ratio, but this leaves less room for savings and emergencies. It's wise to stay within 28/36 for financial security.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How much should I put down on a house?</h3>
              <p className="text-slate-700">
                While 20% down eliminates PMI, many buyers put down 3-5% (FHA loans) or 10-15% (conventional loans).
                The right amount depends on your financial situation—don't drain your emergency fund. Keep 3-6 months of expenses saved.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Can I afford a house if I have student loan debt?</h3>
              <p className="text-slate-700">
                Yes! Student loan debt is included in your debt-to-income ratio. If your total debts (including student loans)
                stay under 36% of your income, you can still qualify. Consider income-driven repayment plans to lower monthly payments.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-black mb-4">Calculate Your Maximum Home Price</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Use our professional mortgage calculator to find exactly how much house you can afford based on your income, debts, and down payment.
          </p>
          <button
            onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
            className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition text-lg"
          >
            Calculate Affordability →
          </button>
        </section>
      </article>
    </div>
  );
};

export default HowMuchHouseCanIAfford2025;

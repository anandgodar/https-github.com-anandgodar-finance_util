'use client';

import React from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const GstCalculatorGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>🧾 Business Taxes</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          GST Calculator Guide 2026: Inclusive vs Exclusive Pricing Made Simple
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          If you invoice clients or sell products, GST math needs to be correct. This guide explains inclusive vs
          exclusive GST, how to split pricing in seconds, and how rates differ between countries.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Calculate GST Instantly</h3>
              <p className="text-sm text-slate-600">Use our GST calculator to split inclusive and exclusive amounts for cleaner invoices.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.GST_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open GST Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('gst-basics')} className="text-indigo-600 hover:underline">1. GST basics</button></li>
          <li><button onClick={() => scrollToSection('rates')} className="text-indigo-600 hover:underline">2. GST rates by country</button></li>
          <li><button onClick={() => scrollToSection('inclusive-exclusive')} className="text-indigo-600 hover:underline">3. Inclusive vs exclusive GST</button></li>
          <li><button onClick={() => scrollToSection('gst-formulas')} className="text-indigo-600 hover:underline">4. GST formulas and worked examples</button></li>
          <li><button onClick={() => scrollToSection('input-credit')} className="text-indigo-600 hover:underline">5. Input tax credits: what you actually remit</button></li>
          <li><button onClick={() => scrollToSection('invoice-steps')} className="text-indigo-600 hover:underline">6. Step by step: getting a GST invoice right</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">7. Common GST mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. FAQ</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="gst-basics" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">GST basics</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            GST (Goods and Services Tax) is a consumption tax applied to goods and services. Businesses collect GST on
            sales and remit it to the government. Because registered businesses can usually claim back the GST they pay on
            their own purchases, the tax is ultimately borne by the final consumer.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Many countries use a similar tax under the name VAT. The United States has neither: it relies on state and
            local sales taxes instead, which work differently. If you&apos;re a U.S. freelancer billing clients in a GST
            country, whether you must register depends on that country&apos;s rules, so check with its tax authority.
          </p>
        </section>

        <section id="rates" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">GST rates by country</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Standard rates as of 2026 for common GST countries. Many goods and services are exempt, zero-rated, or taxed
            at a different rate, so confirm the rate for your specific product with the official source.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Country</th>
                  <th className="text-left p-4 font-black text-slate-900">Standard rate</th>
                  <th className="text-left p-4 font-black text-slate-900">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Australia</td><td className="p-4 font-bold text-slate-900">10%</td><td className="p-4 text-slate-700">Some items, such as many basic foods, are GST-free</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">New Zealand</td><td className="p-4 font-bold text-slate-900">15%</td><td className="p-4 text-slate-700">Broad base with few exemptions</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Singapore</td><td className="p-4 font-bold text-slate-900">9%</td><td className="p-4 text-slate-700">Rate since January 1, 2024</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">Canada</td><td className="p-4 font-bold text-slate-900">5% federal GST</td><td className="p-4 text-slate-700">Combined HST in participating provinces (e.g. 13% in Ontario); some provinces add a separate PST or QST</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-indigo-600">India</td><td className="p-4 font-bold text-slate-900">Mainly 5% and 18%</td><td className="p-4 text-slate-700">Restructured in September 2025; a 40% rate applies to certain sin and luxury goods, and some items are nil-rated or use special rates</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-6">
            <p className="text-indigo-900 font-semibold">
              💡 India&apos;s September 2025 reform largely replaced the older 12% and 28% slabs. Older invoices,
              price lists, and calculators may still show those rates. Always check the current rate for your goods or
              service on the official GST portal before invoicing.
            </p>
          </div>
        </section>

        <section id="inclusive-exclusive" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Inclusive vs exclusive GST</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Exclusive</strong> means GST is added on top of the base price. <strong>Inclusive</strong> means the price
            already includes GST and you need to split it out.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Consumer prices in countries like Australia and New Zealand are generally shown GST-inclusive, while
            business-to-business quotes are often exclusive. Whichever you use, say so on the quote and invoice.
          </p>
        </section>

        <section id="gst-formulas" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">GST formulas and worked examples</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-slate-700"><strong>Adding GST (exclusive price):</strong> GST Amount = Price × GST Rate; Total = Price × (1 + GST Rate)</p>
            <p className="text-slate-700 mt-2"><strong>Removing GST (inclusive price):</strong> Base Price = Price ÷ (1 + GST Rate); GST Amount = Price − Base Price</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Rate</th>
                  <th className="text-left p-4 font-black text-slate-900">GST share of an inclusive price</th>
                  <th className="text-left p-4 font-black text-slate-900">Check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">5%</td><td className="p-4 text-slate-700">5/105 (1/21)</td><td className="p-4 text-slate-700">105 → 5 GST</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">9%</td><td className="p-4 text-slate-700">9/109</td><td className="p-4 text-slate-700">109 → 9 GST</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">10%</td><td className="p-4 text-slate-700">1/11</td><td className="p-4 text-slate-700">110 → 10 GST</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">15%</td><td className="p-4 text-slate-700">3/23</td><td className="p-4 text-slate-700">115 → 15 GST</td></tr>
                <tr className="border-t border-slate-100"><td className="p-4 font-bold text-slate-900">18%</td><td className="p-4 text-slate-700">18/118</td><td className="p-4 text-slate-700">118 → 18 GST</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <p className="text-emerald-900 font-semibold">📊 <strong>Example 1 (Australia, 10%):</strong></p>
            <ul className="mt-2 space-y-1 text-base text-emerald-900">
              <li>• Exclusive: $1,000 service + 10% GST = $100 GST, invoice total <strong>$1,100</strong>.</li>
              <li>• Inclusive: a $1,100 GST-inclusive price ÷ 1.10 = $1,000 base, so GST = <strong>$100</strong> (1/11 of $1,100).</li>
              <li>• Wrong way: 10% × $1,100 = $110. That overstates GST by $10.</li>
            </ul>
          </div>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
            <p className="text-emerald-900 font-semibold">📊 <strong>Example 2 (India, 18%):</strong></p>
            <ul className="mt-2 space-y-1 text-base text-emerald-900">
              <li>• Exclusive: ₹10,000 + 18% = ₹1,800 GST, total ₹11,800.</li>
              <li>• Within one state, the ₹1,800 is split into CGST 9% (₹900) and SGST 9% (₹900). Between states, it is charged as IGST 18% (₹1,800).</li>
              <li>• Inclusive: ₹11,800 ÷ 1.18 = ₹10,000 base, GST ₹1,800.</li>
            </ul>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Our GST calculator does these splits for you; for a rate it doesn&apos;t list, the formulas above work for any
            percentage.
          </p>
        </section>

        <section id="input-credit" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Input tax credits: what you actually remit</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A registered business usually doesn&apos;t send all the GST it collects to the government. It subtracts the GST
            it paid on business purchases (input tax credits) from the GST it charged on sales:
          </p>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-slate-700">GST payable = GST collected on sales − GST paid on eligible purchases</p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Hypothetical example at 10%:</strong> you invoice $1,100 including $100 GST and buy $440 of supplies
            including $40 GST. You remit $100 − $40 = <strong>$60</strong>. Keep valid tax invoices for purchases, because
            credits generally require them. Rules on what qualifies vary by country.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            GST you collect is not your income, so set it aside. If you&apos;re self-employed, our{' '}
            <a href="/freelance-profit-hub/" className="text-indigo-600 font-semibold hover:underline">freelance profit hub</a>{' '}
            helps you track revenue and expenses, and the guide to{' '}
            <a href="/blog/tax-deductions-freelancers-2025/" className="text-indigo-600 font-semibold hover:underline">tax deductions for freelancers</a>{' '}
            covers the U.S. income tax side.
          </p>
        </section>

        <section id="invoice-steps" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Step by step: getting a GST invoice right</h2>
          <ol className="space-y-3 text-slate-700">
            <li>1) Confirm you are registered (or required to be) and note your registration number, which most tax invoices must show.</li>
            <li>2) Look up the current rate for each item or service; one invoice can mix rates and exempt items.</li>
            <li>3) Decide whether your prices are inclusive or exclusive and state it clearly.</li>
            <li>4) Calculate GST per line with the formulas above, then total it, applying a consistent rounding rule.</li>
            <li>5) Show the taxable amount, the GST amount, and the total payable separately.</li>
            <li>6) Record the GST in your books so it flows into the next return, and keep a copy for the required retention period.</li>
          </ol>
          <p className="text-lg text-slate-700 leading-relaxed">
            Exact invoice requirements, such as buyer details, HSN or SAC codes in India, or wording like &quot;tax
            invoice&quot;, differ by country and sometimes by invoice size, so use the official checklist for yours.
          </p>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common GST mistakes</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>Forgetting to label invoices as inclusive or exclusive.</strong> It causes disputes and wrong returns.</li>
            <li>• <strong>Using the wrong GST rate for the product category</strong>, or an outdated rate after a change like India&apos;s 2025 reform.</li>
            <li>• <strong>Rounding errors on high-volume invoices.</strong> Decide whether you round per line or per invoice, and be consistent with local rules.</li>
            <li>• <strong>Multiplying an inclusive price by the rate</strong> instead of dividing by (1 + rate).</li>
            <li>• <strong>Spending collected GST.</strong> It belongs to the tax authority until you file.</li>
            <li>• <strong>Charging GST before registering</strong>, or failing to register after crossing the turnover threshold.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How do I calculate GST from a total price?</h3>
              <p className="text-slate-700">Divide the total by (1 + rate) to get the base, then subtract. At 10%, GST is 1/11 of the total; at 15%, 3/23; at 18%, 18/118.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Do I need to register for GST?</h3>
              <p className="text-slate-700">Most countries require registration once your turnover passes a threshold, and some require it sooner for certain activities. Thresholds differ by country, so check the official tax authority.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Is GST the same as U.S. sales tax?</h3>
              <p className="text-slate-700">No. U.S. sales tax is set by states and localities and is generally charged only at the final sale, without input credits for businesses along the chain.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500">
            Educational only, not tax advice. Rates and rules change; confirm with the official source:{' '}
            <a href="https://www.ato.gov.au/" className="text-indigo-600 font-semibold hover:underline">Australian Taxation Office</a>,{' '}
            <a href="https://www.ird.govt.nz/" className="text-indigo-600 font-semibold hover:underline">Inland Revenue (NZ)</a>,{' '}
            <a href="https://www.iras.gov.sg/" className="text-indigo-600 font-semibold hover:underline">IRAS (Singapore)</a>,{' '}
            <a href="https://www.canada.ca/en/revenue-agency.html" className="text-indigo-600 font-semibold hover:underline">Canada Revenue Agency</a>,{' '}
            <a href="https://www.gst.gov.in/" className="text-indigo-600 font-semibold hover:underline">GST Portal (India)</a>.
          </p>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Business Finance Tips"
          description="Stay ahead with weekly invoicing, tax, and cash-flow tips."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.GST_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">🧾 GST Calculator</h4>
            <p className="text-sm text-slate-600">Split inclusive/exclusive GST in seconds.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.FREELANCE_PROFIT)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">💼 Freelance Profit Hub</h4>
            <p className="text-sm text-slate-600">Track revenue, expenses, and take-home profit.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GstCalculatorGuide2025;

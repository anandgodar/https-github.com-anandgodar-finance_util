'use client';

import React from 'react';
import { ToolType } from '../../types';
import EmailCapture from '../EmailCapture';
import AdPlacement from '../AdPlacement';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const CreditCardPayoffGuide2025: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>⏱️ 5 min read</span>
          <span>•</span>
          <span>✂️ Debt Payoff</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Credit Card Payoff Guide 2026: Avalanche vs Snowball Strategy
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Credit card interest is expensive. The two most popular payoff methods are the <strong>avalanche</strong> and the
          <strong> snowball</strong>. This guide shows how both work and when to use each.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Plan Your Payoff</h3>
              <p className="text-sm text-slate-600">Use our payoff calculator to compare avalanche vs snowball results.</p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.CREDIT_CARD_PAYOFF)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Open Payoff Calculator →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('numbers')} className="text-indigo-600 hover:underline">1. Start with your numbers</button></li>
          <li><button onClick={() => scrollToSection('avalanche')} className="text-indigo-600 hover:underline">2. Avalanche method</button></li>
          <li><button onClick={() => scrollToSection('snowball')} className="text-indigo-600 hover:underline">3. Snowball method</button></li>
          <li><button onClick={() => scrollToSection('which-is-better')} className="text-indigo-600 hover:underline">4. Which method is better?</button></li>
          <li><button onClick={() => scrollToSection('lower-rate')} className="text-indigo-600 hover:underline">5. Lowering the rate: balance transfers and consolidation</button></li>
          <li><button onClick={() => scrollToSection('extra-payments')} className="text-indigo-600 hover:underline">6. Extra payment tips</button></li>
          <li><button onClick={() => scrollToSection('mistakes')} className="text-indigo-600 hover:underline">7. Common mistakes</button></li>
          <li><button onClick={() => scrollToSection('faq')} className="text-indigo-600 hover:underline">8. FAQ</button></li>
          <li><button onClick={() => scrollToSection('sources')} className="text-indigo-600 hover:underline">9. Sources</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="numbers" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Start with your numbers</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Every payoff plan starts with an honest list. Pull up each card&apos;s latest statement and write down four
            things: the balance, the APR (the purchase APR and any promotional or cash-advance APR), the minimum payment,
            and the due date. Then decide one number: the total amount you can send to cards every month, reliably, after
            essentials.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            That monthly total matters more than any strategy. Card interest accrues every day, so each extra dollar you
            add stops interest at your card&apos;s full rate. A quick sanity check is to compare your plan with the minimum
            payment warning printed on each statement, which shows how long minimum-only payoff would take. See{' '}
            <a href="/blog/credit-card-minimum-payments-20-years/" className="text-indigo-600 font-semibold hover:underline">why minimum payments can take 20 years</a>{' '}
            for the math.
          </p>
        </section>

        <section id="avalanche" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Avalanche method</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Pay minimums on all cards, then put extra money toward the highest interest rate first. It saves the most
            interest overall.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            When the highest-rate card is paid off, add its entire payment to the card with the next-highest rate, and so
            on. Rank by APR, not by balance or minimum.
          </p>
        </section>

        <section id="snowball" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Snowball method</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Pay minimums on all cards, then attack the smallest balance first. This creates fast wins and motivation.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The rollover works the same way: each paid-off card&apos;s payment moves to the next-smallest balance. You may
            pay somewhat more interest than with the avalanche, but you close accounts sooner.
          </p>
        </section>

        <section id="which-is-better" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Which method is better?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Avalanche wins on math, snowball wins on psychology. If you need momentum, snowball can be more sustainable.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Hypothetical example:</strong> two cards and a $500 monthly budget. Card 1 has $2,500 at 27% (minimum
            $75). Card 2 has $7,500 at 21% (minimum $190). Rates are illustrative, minimums are held fixed, and interest
            is charged monthly at APR ÷ 12.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mt-6">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-black text-slate-900">Target Order</th>
                  <th className="text-left p-4 font-black text-slate-900">Debt-Free</th>
                  <th className="text-left p-4 font-black text-slate-900">Total Interest</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-emerald-600">Card 1 first (both snowball and avalanche)</td>
                  <td className="p-4 text-slate-700">26 months (Card 1 gone in month 9)</td>
                  <td className="p-4 font-bold text-slate-900">$2,509</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-bold text-red-600">Card 2 first (neither method)</td>
                  <td className="p-4 text-slate-700">26 months</td>
                  <td className="p-4 font-bold text-slate-900">$2,760</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Here the smallest card is also the most expensive one, so both methods agree, and the wrong order costs about
            $251. When your debts don&apos;t line up this neatly, the methods diverge; our{' '}
            <a href="/blog/snowball-vs-avalanche-debt-payoff/" className="text-indigo-600 font-semibold hover:underline">snowball vs avalanche comparison</a>{' '}
            works through a three-debt example where they do.
          </p>
        </section>

        <section id="lower-rate" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Lowering the rate: balance transfers and consolidation</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Payoff order only decides where money goes. Cutting the rate itself can save more. Two common tools:
          </p>
          <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 text-xl mb-4">0% balance transfer card</h3>
            <p className="text-slate-700 mb-4">
              <strong>Hypothetical example:</strong> you move $6,000 from a 22% card to a card with a 0% introductory
              rate for 18 months and a 3% transfer fee ($180). Paying it off in 18 months takes $343.33 a month, and the
              total cost is the $180 fee. Paying the same $6,000 off in 18 months at 22% would take $394.37 a month and
              about $1,099 of interest, so the transfer saves roughly <strong>$919</strong>. At a 5% fee ($300), it would
              still save about $799.
            </p>
            <p className="text-slate-700">
              Watch the details: fees and promo lengths vary by card, the regular APR applies to anything left when the
              promo ends, new purchases may not get the 0% rate, and approval usually requires good credit.
            </p>
          </div>
          <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 text-xl mb-4">Debt consolidation loan</h3>
            <p className="text-slate-700">
              A fixed-rate personal loan pays off the cards and gives you one payment with an end date. At an illustrative
              12% for 36 months, $6,000 costs $199.29 a month and about $1,174 of interest, compared with $229.14 a month
              and about $2,249 at 22% over the same 36 months. Compare offers, including any origination fee, in the{' '}
              <a href="/loan-comparison-tool/" className="text-indigo-600 font-semibold hover:underline">loan comparison tool</a>.
            </p>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
            <p className="text-yellow-900 font-semibold text-lg mb-2">⚠️ The catch</p>
            <p className="text-yellow-800">
              Both tools only help if the old cards don&apos;t fill back up. Moving a balance and then spending on the
              emptied card can leave you with more debt than you started with.
            </p>
          </div>
        </section>

        <section id="extra-payments" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Extra payment tips</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• Automate extra payments on payday.</li>
            <li>• Apply windfalls to your highest-interest balance.</li>
            <li>• Stop new interest by reducing usage.</li>
            <li>• Set autopay to at least the minimum on every card so a missed due date never triggers a late fee or penalty APR.</li>
            <li>• Call your issuer and ask for a lower APR; it costs nothing to ask.</li>
            <li>• Keep a small emergency fund so a surprise bill doesn&apos;t go back on a card. Our <a href="/emergency-fund-guard/" className="text-indigo-600 font-semibold hover:underline">emergency fund calculator</a> can help size it.</li>
          </ul>
        </section>

        <section id="mistakes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Common mistakes</h2>
          <ul className="space-y-3 text-slate-700">
            <li>• <strong>Closing paid-off cards right away.</strong> Closing a card reduces your available credit, which can raise your utilization. Keeping a no-fee card open and unused is often fine.</li>
            <li>• <strong>Investing while carrying high-rate card debt.</strong> Few investments reliably beat a 20%+ APR. The usual exception is contributing enough to get an employer 401(k) match.</li>
            <li>• <strong>Ignoring promotional deadlines.</strong> Store-card &quot;no interest if paid in full&quot; offers can charge all deferred interest if any balance remains when the promotion ends.</li>
            <li>• <strong>No written plan.</strong> Without a target card and a fixed monthly amount, extra payments tend to shrink.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How long will it take to pay off my cards?</h3>
              <p className="text-slate-700">It depends on balances, rates, and your monthly amount. Enter them in the payoff calculator above to get a month-by-month timeline.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Will paying off cards raise my credit score?</h3>
              <p className="text-slate-700">Lower balances reduce your credit utilization, which often helps scores. On-time payments matter most over time.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Should I use savings to pay off a card?</h3>
              <p className="text-slate-700">Using cash beyond your emergency cushion on a high-rate card is often a good trade. Keep enough set aside for real emergencies.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">What if I&apos;m falling behind?</h3>
              <p className="text-slate-700">Contact your issuer about hardship options and consider a reputable nonprofit credit counselor. The CFPB explains how to choose one.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500">This article is educational and not individualized financial advice.</p>
        </section>

        <section id="sources" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Sources</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• <a href="https://www.consumerfinance.gov/" className="text-indigo-600 hover:underline">Consumer Financial Protection Bureau</a>: credit cards, balance transfers, deferred interest, and credit counseling</li>
            <li>• <a href="https://www.federalreserve.gov/" className="text-indigo-600 hover:underline">Federal Reserve</a>: consumer credit information</li>
          </ul>
        </section>
      </article>

      <section className="mt-12">
        <EmailCapture
          title="Debt-Free Strategies"
          description="Get weekly tips on paying off debt and building a stronger credit profile."
          buttonText="Subscribe"
        />
      </section>

      <AdPlacement size="responsive" position="bottom" />

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Related Calculators & Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.CREDIT_CARD_PAYOFF)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">✂️ Credit Card Payoff Calculator</h4>
            <p className="text-sm text-slate-600">Compare avalanche vs snowball timelines.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_DEBT_OR_INVEST)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h4 className="font-bold text-slate-900 mb-2">📊 Debt vs Invest Guide</h4>
            <p className="text-sm text-slate-600">Decide where extra cash should go.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreditCardPayoffGuide2025;

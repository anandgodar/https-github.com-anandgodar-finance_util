import React from 'react';
import { ToolType } from '../types';

/**
 * Server-rendered explanatory prose for tool pages whose interactive island
 * carries little static text. Rendered by app/[[...tool]]/page.tsx below the
 * app shell, so the words are in the HTML regardless of client hydration
 * (lazy-loaded client components render only a fallback at build time, which
 * is how these pages ended up at 100–250 body words — one of the likely
 * triggers of the 4 Nov 2026 AdSense "Low value content" rejection).
 *
 * Rules: describe only what the tool actually computes (its formula and
 * inputs), name its limits plainly, and state no external figure that is not
 * either user-supplied or stable law/mechanics. No invented statistics.
 */

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm mt-6">
    <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>
    <div className="space-y-4 text-slate-700 leading-relaxed">{children}</div>
  </section>
);

const PROSE: Partial<Record<ToolType, React.ReactNode>> = {
  [ToolType.DRIP_CALCULATOR]: (
    <>
      <Section title="How this DRIP calculator works">
        <p>
          The calculator grows your balance month by month from five inputs you control: starting principal,
          annual contribution, dividend yield, expected share-price appreciation, and your dividend tax rate.
          Each period it computes the dividend thrown off by the current balance, subtracts tax at the rate you
          set, and then either reinvests the after-tax dividend back into the balance (DRIP on) or accumulates
          it as cash on the side (DRIP off). Running both paths side by side is the point: the gap between them
          is the compounding you get from reinvesting, not from picking better stocks.
        </p>
        <p>
          Reinvested dividends buy more shares, and those shares produce their own dividends — that is the whole
          mechanism. Over short horizons the two paths look nearly identical; the divergence shows up in the back
          half of a multi-decade horizon, which is why the chart matters more than the final number.
        </p>
      </Section>
      <Section title="What it deliberately does not model">
        <p>
          The projection assumes the yield and appreciation rates you enter hold constant for the whole horizon.
          Real dividends get cut, raised, and suspended; real prices do not move in straight lines. Treat the
          output as an illustration of the reinvestment mechanism at your chosen assumptions, not a forecast.
          The tool also models tax as a single flat rate you supply. In a taxable account, dividends are taxed in
          the year they are paid whether or not you reinvest them — reinvesting does not defer the tax — while in
          an IRA or 401(k) you can set the tax rate to zero. Each reinvested dividend also adds a new tax lot to
          your cost basis; most brokers track this for you, but it is worth knowing when you eventually sell.
        </p>
      </Section>
    </>
  ),
  [ToolType.OPTIONS_STRATEGY_VISUALIZER]: (
    <>
      <Section title="What the payoff chart shows">
        <p>
          The visualizer draws profit and loss <em>at expiration</em> for a strategy built from up to four legs
          (calls and puts, long or short, each with its own strike, premium, and quantity). For every underlying
          price on the horizontal axis it computes each leg&apos;s intrinsic value at expiry — for a call,
          price minus strike when the option finishes in the money, otherwise zero; the mirror image for a put —
          then nets the premiums you paid or collected. The preset strategies (covered call, bull call spread,
          bear put spread, iron condor, straddle, and the rest) are just prefilled leg combinations; edit any
          strike or premium and the chart recomputes.
        </p>
        <p>
          The three numbers to read off the chart are maximum profit, maximum loss, and the breakeven price(s)
          where the line crosses zero. A defined-risk spread shows both extremes as flat plateaus; an undefined-risk
          position (like a naked short call) keeps falling off the edge of the chart, which is the picture worth
          internalizing before placing one.
        </p>
      </Section>
      <Section title="Limits of an expiration-only view">
        <p>
          Everything here is terminal value: the chart says nothing about how the position behaves <em>before</em>
          expiration. Time decay, implied-volatility changes, and early assignment on short American-style legs all
          move real positions off this line while the trade is open. Premiums are inputs you supply from your
          broker&apos;s chain, not live quotes, and the math ignores commissions and per-contract fees. Multiply
          everything by 100 per contract for dollar terms. Use the chart to understand a structure&apos;s shape and
          worst case — not as a pricing model.
        </p>
      </Section>
    </>
  ),
  [ToolType.INVESTMENT_ACADEMY]: (
    <Section title="How to use this academy">
      <p>
        These guides are sequenced: start with the index-funds-versus-ETF comparison if you are choosing your
        first fund — the two wrappers often hold identical portfolios, and the differences that matter are trading
        mechanics, minimums, and tax treatment rather than returns. Then read the diversification guide before the
        portfolio blueprint, because the blueprint only makes sense once you know what each asset class is doing
        in the mix. Every article states its assumptions inline, and where a figure comes from a fund prospectus
        or index methodology we say which one. One number worth carrying into all of them: a fund&apos;s expense
        ratio is deducted from returns every single year, so a difference that looks trivial annually compounds
        into a meaningful slice of the final balance over multi-decade horizons — which is why costs come up in
        every guide here.
      </p>
    </Section>
  ),
};

export default function ToolProse({ slug }: { slug: string }) {
  const prose = PROSE[slug as ToolType];
  if (!prose) return null;
  return <div className="max-w-4xl mx-auto px-4 pb-12">{prose}</div>;
}

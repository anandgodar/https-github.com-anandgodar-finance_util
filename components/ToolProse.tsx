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
          The calculator grows your balance year by year from the inputs you control: starting principal,
          annual contribution, dividend yield, expected share-price appreciation, your dividend tax rate, and
          the time horizon. Each year it adds your contribution, computes the dividend on the new balance, and
          subtracts tax at the rate you set. With reinvestment on, the after-tax dividend goes back into the
          balance before that year&apos;s price appreciation is applied; with it off, the dividend simply leaves
          the projection — the chart tracks portfolio value only and does not keep the skipped dividends as a
          cash pile on the side. Running both paths side by side is the point: the gap between the two lines is
          the after-tax dividends themselves plus everything they go on to earn once reinvested — not a verdict
          on picking better stocks.
        </p>
        <p>
          Reinvested dividends buy more shares, and those shares produce their own dividends — that is the whole
          mechanism. The two paths start close together; the divergence shows up in the back
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
          The visualizer draws profit and loss <em>at expiration</em> for a strategy built from any number of
          call and put legs, long or short, each with its own strike, premium, and quantity. For every underlying
          price on the horizontal axis it computes each leg&apos;s intrinsic value at expiry — for a call,
          price minus strike when the option finishes in the money, otherwise zero; the mirror image for a put —
          then nets the premiums you paid or collected. The preset strategies (long call, bull call spread,
          bear put spread, iron condor, iron butterfly, straddle, and strangle) are just prefilled combinations of
          one to four legs; edit any strike or premium, or add legs of your own, and the chart recomputes. The
          chart is already in dollar terms: it counts each contract as 100 shares of the per-share premium you enter.
        </p>
        <p>
          The three numbers to read off the solid expiration line are maximum profit, maximum loss, and the
          breakeven price(s) where it crosses zero. A defined-risk spread shows both extremes as flat plateaus;
          an undefined-risk position (like a naked short call) keeps falling off the edge of the chart, which is
          the picture worth internalizing before placing one.
        </p>
      </Section>
      <Section title="Limits of an expiration-only view">
        <p>
          The headline numbers all come from the expiration line, which says nothing about how the position
          behaves <em>before</em> expiry. The dashed what-if line the volatility slider adds is a deliberately
          crude sketch — it just scales each leg&apos;s premium by the percentage you pick — so it is not a
          pricing model. Time decay and early assignment on short American-style legs are not
          modeled at all. Premiums are inputs you supply from your broker&apos;s chain, not live quotes, and the
          math ignores commissions and per-contract fees. Use the chart to understand a structure&apos;s shape
          and worst case — not to price a trade.
        </p>
      </Section>
    </>
  ),
  [ToolType.INVESTMENT_ACADEMY]: (
    <Section title="How to use this academy">
      <p>
        This page is an interactive explorer of four broad fund categories — index funds, ETFs, actively managed
        mutual funds, and REITs. Pick a category to read how it works, what it is typically used for, and widely
        known examples; the selection matrix puts the four side by side on cost, volatility, risk/return profile,
        and tax treatment; and the selector view narrows them down from a risk tolerance and a goal (safety, growth, or
        income) that you choose. If index funds versus ETFs is your actual question, the two wrappers often hold
        identical portfolios — the differences that matter are trading mechanics, minimums, and tax treatment,
        not returns.
      </p>
      <p>
        Read the figures on the cards for what they are: broad characterizations we wrote for each category — an
        expense-ratio range, a 1–10 volatility score, a tax-efficiency label — not measured data about any
        specific fund. Before buying anything, check that fund&apos;s own prospectus for its real expense ratio
        and holdings. The one mechanical point worth carrying out of this page: a fund&apos;s expense ratio is
        deducted from returns every single year, so a difference that looks trivial annually compounds into a
        meaningful slice of the final balance over multi-decade horizons.
      </p>
    </Section>
  ),
};

export default function ToolProse({ slug }: { slug: string }) {
  const prose = PROSE[slug as ToolType];
  if (!prose) return null;
  return <div className="max-w-4xl mx-auto px-4 pb-12">{prose}</div>;
}

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import SiteShell from '../../../components/SiteShell';
import TickerCalculatorClient from './TickerCalculatorClient';
import { ToolType } from '../../../types';
import { fitTitle, clampDescription } from '../../../lib/seo';
import {
  DIVIDEND_DATA_AS_OF,
  formatUsd,
  getDividendStock,
  getDividendStocks,
  pct,
  projectDrip
} from '../../../lib/dividend-stocks';

type PageProps = {
  params: {
    ticker: string;
  };
};

export const dynamic = 'force-static';
export const dynamicParams = false;

const PRINCIPAL = 10000;
const HORIZONS = [10, 20, 30];

export function generateStaticParams() {
  return getDividendStocks().map((stock) => ({ ticker: stock.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const stock = getDividendStock(params.ticker);
  if (!stock) {
    return { title: 'Dividend Calculator', robots: { index: false, follow: true } };
  }
  const url = `https://quantcurb.com/dividend-calculator/${stock.slug}/`;
  const description = clampDescription(
    `See how $10,000 in ${stock.companyName} (${stock.ticker}) could grow with dividends reinvested: ${pct(stock.yieldPct)} reference yield, ${pct(stock.growthPct)} dividend growth, 10-30 year DRIP math and 2026 tax notes.`
  );
  return {
    title: fitTitle(
      `${stock.ticker} Dividend Calculator: ${stock.companyName} DRIP`,
      `${stock.ticker} Dividend Reinvestment Calculator`
    ),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${stock.companyName} (${stock.ticker}) Dividend Calculator`,
      description,
      url,
      siteName: 'QuantCurb',
      type: 'website'
    }
  };
}

const card = 'bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-10';
const h2 = 'text-2xl md:text-3xl font-black text-slate-900 mb-4';
const p = 'text-slate-700 leading-relaxed';
const th = 'p-3 text-left text-xs font-black uppercase tracking-wider text-slate-500';
const td = 'p-3 text-slate-700';
const link = 'text-indigo-600 font-semibold hover:underline';

export default function DividendTickerPage({ params }: PageProps) {
  const stock = getDividendStock(params.ticker);
  if (!stock) {
    notFound();
  }

  const all = getDividendStocks();
  const y = stock.yieldPct / 100;
  const g = stock.growthPct / 100;
  const projections = HORIZONS.map((years) => projectDrip(stock, PRINCIPAL, years));
  const p30 = projections[projections.length - 1];
  const firstYearIncome = PRINCIPAL * y;
  const doublingYears = g > 0 ? 72 / stock.growthPct : null;
  const yieldOnCost10 = stock.yieldPct * Math.pow(1 + g, 10);
  const yieldOnCost20 = stock.yieldPct * Math.pow(1 + g, 20);
  const neededFor1000 = 1000 / y;

  const yieldRank = [...all].sort((a, b) => b.yieldPct - a.yieldPct).findIndex((s) => s.slug === stock.slug) + 1;
  const growthRank = [...all].sort((a, b) => b.growthPct - a.growthPct).findIndex((s) => s.slug === stock.slug) + 1;
  const peers = all.filter((s) => s.sector === stock.sector && s.slug !== stock.slug);
  const sectorAvgYield = [stock, ...peers].reduce((sum, s) => sum + s.yieldPct, 0) / (peers.length + 1);

  const highYield = stock.yieldPct >= 5;
  const growthTilted = stock.yieldPct < 2.5 && stock.growthPct >= 8;
  const slowGrowth = stock.growthPct < 2.5;
  const profile = highYield
    ? 'a high-yield income stock'
    : growthTilted
      ? 'a lower-yield, faster-growing dividend payer'
      : 'a middle-of-the-road dividend payer';

  // 2026 qualified dividend example: 15% bracket (taxable income above $49,450 single).
  const taxAt15 = firstYearIncome * 0.15;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://quantcurb.com/' },
      { '@type': 'ListItem', position: 2, name: 'Dividend Calculators', item: 'https://quantcurb.com/dividend-calculator/' },
      { '@type': 'ListItem', position: 3, name: `${stock.ticker} Dividend Calculator`, item: `https://quantcurb.com/dividend-calculator/${stock.slug}/` }
    ]
  };

  const faqs = [
    {
      q: `How much do I need to invest in ${stock.ticker} to earn $1,000 a year in dividends?`,
      a: `At the reference yield of ${pct(stock.yieldPct)}, about ${formatUsd(neededFor1000)}. If ${stock.companyName} keeps growing its dividend around ${pct(stock.growthPct)} a year, the same position would pay more each year without adding money. The actual amount depends on the yield when you buy.`
    },
    {
      q: `Should I reinvest ${stock.ticker} dividends (DRIP)?`,
      a: `Reinvesting compounds your share count: in this model, ${formatUsd(PRINCIPAL)} grows to about ${formatUsd(p30.dripValue)} over 30 years with DRIP versus ${formatUsd(p30.cashValue + p30.cashDividendsCollected)} (shares plus dividends collected) without it. Taking the cash makes sense if you need the income now, want to rebalance into other holdings, or already hold too much of one stock.`
    },
    {
      q: `Is ${stock.ticker} a good dividend stock?`,
      a: `This page doesn't make recommendations. To judge any dividend stock, look at the payout ratio (dividends vs. earnings and free cash flow), debt levels, how the dividend held up in past recessions, and whether the business can keep growing. A single stock is riskier than a diversified fund, whatever its yield.`
    },
    {
      q: `Are ${stock.ticker} dividends taxed if I reinvest them?`,
      a: `Yes, in a taxable brokerage account. Reinvested dividends are taxed the same year, usually as qualified dividends at 0%, 15% or 20% for 2026 if you meet the holding period. In a traditional IRA or 401(k) they aren't taxed until you withdraw, and in a Roth account qualified withdrawals are tax-free.`
    }
  ];

  return (
    <SiteShell activeTool={ToolType.DRIP_CALCULATOR}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="max-w-5xl mx-auto py-8 space-y-10">
        <header className="space-y-5">
          <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link>
            {' › '}
            <Link href="/dividend-calculator/" className="hover:underline">Dividend Calculators</Link>
            {' › '}
            <span>{stock.ticker}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            {stock.companyName} ({stock.ticker}) Dividend Calculator
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {stock.companyName} is {profile} in the {stock.sector} sector, with a reference dividend yield of{' '}
            <strong>{pct(stock.yieldPct)}</strong> and five-year dividend growth of about{' '}
            <strong>{pct(stock.growthPct)} a year</strong>. Below is what {formatUsd(PRINCIPAL)} could grow to with
            dividends reinvested, how much income it could pay, and how those dividends are taxed in 2026.
          </p>
          <p className="text-sm text-slate-500">
            Figures are reference values compiled in {DIVIDEND_DATA_AS_OF}, not live quotes. Yields move every day with the
            share price; check the current yield before you invest. Educational only, not investment advice.
          </p>
        </header>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Reference yield', value: pct(stock.yieldPct), note: `#${yieldRank} of ${all.length} stocks we track` },
            { label: '5-yr dividend growth', value: `${pct(stock.growthPct)}/yr`, note: `#${growthRank} of ${all.length}` },
            { label: `Year-1 income on ${formatUsd(PRINCIPAL)}`, value: formatUsd(firstYearIncome), note: `${formatUsd(firstYearIncome / 4)} a quarter` },
            {
              label: 'Dividend doubles in',
              value: doublingYears ? `~${Math.round(doublingYears)} yrs` : 'n/a',
              note: 'Rule of 72 at current growth'
            }
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl border border-slate-200 p-5">
              <p className="text-xs font-black uppercase tracking-wider text-slate-500">{item.label}</p>
              <p className="text-2xl font-black text-slate-900 mt-2">{item.value}</p>
              <p className="text-xs text-slate-500 mt-1">{item.note}</p>
            </div>
          ))}
        </section>

        <section className={card}>
          <h2 className={h2}>How {formatUsd(PRINCIPAL)} in {stock.ticker} could grow</h2>
          <p className={`${p} mb-6`}>
            The model assumes the yield stays at {pct(stock.yieldPct)}, so the share price and the dividend per share both
            grow at {pct(stock.growthPct)} a year. With DRIP, each year&apos;s dividends buy more shares; without it, they
            are paid to you as cash. It ignores taxes, fees and market swings, which in reality are large.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>Years</th>
                  <th className={th}>Value with DRIP</th>
                  <th className={th}>Annual income (DRIP)</th>
                  <th className={th}>Value without DRIP</th>
                  <th className={th}>Cash dividends collected</th>
                </tr>
              </thead>
              <tbody>
                {projections.map((row) => (
                  <tr key={row.years} className="border-t border-slate-100">
                    <td className={`${td} font-bold`}>{row.years}</td>
                    <td className={`${td} font-bold text-emerald-700`}>{formatUsd(row.dripValue)}</td>
                    <td className={td}>{formatUsd(row.dripAnnualIncome)}</td>
                    <td className={td}>{formatUsd(row.cashValue)}</td>
                    <td className={td}>{formatUsd(row.cashDividendsCollected)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`${p} mt-6`}>
            After 30 years, reinvesting ends about {formatUsd(p30.dripValue - p30.cashValue - p30.cashDividendsCollected)}{' '}
            ahead of taking the cash and leaving it uninvested, and the position would pay roughly{' '}
            {formatUsd(p30.dripAnnualIncome)} a year in dividends. Your yield on the original {formatUsd(PRINCIPAL)} (yield
            on cost) would rise from {pct(stock.yieldPct)} to about {pct(yieldOnCost10)} after 10 years and{' '}
            {pct(yieldOnCost20)} after 20 years from dividend growth alone, before counting reinvested shares.
          </p>
        </section>

        <section className={card}>
          <h2 className={h2}>What drives the result for {stock.ticker}</h2>
          {highYield && (
            <p className={`${p} mb-4`}>
              Most of {stock.ticker}&apos;s projected return comes from the {pct(stock.yieldPct)} yield rather than growth.
              A yield this high can mean the market expects slow growth or doubts the dividend can be sustained, so check
              the payout ratio against earnings and free cash flow before relying on the income.
            </p>
          )}
          {growthTilted && (
            <p className={`${p} mb-4`}>
              {stock.ticker} pays a modest {pct(stock.yieldPct)} today, but at {pct(stock.growthPct)} annual dividend
              growth its income can catch up with higher-yielding stocks over time. That only holds if growth continues,
              and fast dividend growth rarely lasts for decades.
            </p>
          )}
          {!highYield && !growthTilted && (
            <p className={`${p} mb-4`}>
              {stock.ticker} combines a {pct(stock.yieldPct)} yield with {pct(stock.growthPct)} dividend growth, so both
              current income and growth contribute to the projection. In this model the total annual return is roughly
              yield plus growth: about {pct((((1 + g) * (1 + y)) - 1) * 100)} a year.
            </p>
          )}
          {slowGrowth && (
            <p className={`${p} mb-4`}>
              Dividend growth of {pct(stock.growthPct)} is below the roughly 2%–3% long-run US inflation rate, so the
              purchasing power of each dividend could shrink even as the dollar amount rises.
            </p>
          )}
          <p className={p}>
            The {stock.sector} stocks we track average a {pct(sectorAvgYield)} yield. Sector matters: utilities and
            consumer staples tend to pay steady dividends, while technology and industrial companies often pay less
            today but have raised payouts faster. None of this is guaranteed; companies can and do cut dividends.
          </p>
        </section>

        {peers.length > 0 && (
          <section className={card}>
            <h2 className={h2}>{stock.ticker} vs. other {stock.sector} dividend stocks</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className={th}>Stock</th>
                    <th className={th}>Reference yield</th>
                    <th className={th}>5-yr dividend growth</th>
                    <th className={th}>30-yr DRIP value of $10k</th>
                  </tr>
                </thead>
                <tbody>
                  {[stock, ...peers].map((s) => (
                    <tr key={s.slug} className="border-t border-slate-100">
                      <td className={`${td} font-bold`}>
                        {s.slug === stock.slug ? (
                          `${s.companyName} (${s.ticker})`
                        ) : (
                          <Link href={`/dividend-calculator/${s.slug}/`} className={link}>
                            {s.companyName} ({s.ticker})
                          </Link>
                        )}
                      </td>
                      <td className={td}>{pct(s.yieldPct)}</td>
                      <td className={td}>{pct(s.growthPct)}</td>
                      <td className={td}>{formatUsd(projectDrip(s, PRINCIPAL, 30).dripValue)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <section className={card}>
          <h2 className={h2}>Taxes on {stock.ticker} dividends in 2026</h2>
          <p className={`${p} mb-4`}>
            In a taxable brokerage account, dividends are taxed in the year they&apos;re paid, even when DRIP reinvests them.
            Most dividends from US companies like {stock.companyName} are <strong>qualified dividends</strong> if you hold
            the shares for more than 60 days during the 121-day window around the ex-dividend date. For 2026 they&apos;re
            taxed at 0% up to $49,450 of taxable income ($98,900 married filing jointly), 15% up to $545,500 ($613,700),
            and 20% above that, plus the 3.8% net investment income tax at higher incomes.
          </p>
          <p className={`${p} mb-4`}>
            Example: {formatUsd(PRINCIPAL)} in {stock.ticker} pays about {formatUsd(firstYearIncome)} in the first year. In the
            15% bracket the federal tax is about {formatUsd(taxAt15)}, owed even if every dollar was reinvested. Each
            reinvestment also adds to your cost basis, so keep records (your broker usually tracks this) to avoid paying
            tax twice when you sell.
          </p>
          <p className={p}>
            Holding {stock.ticker} in a traditional IRA or 401(k) defers the tax until withdrawal; in a Roth account,
            qualified withdrawals are tax-free. See our <Link href="/blog/dividend-reinvestment-calculator-guide-2025/" className={link}>DRIP guide</Link>{' '}
            and <Link href="/blog/roth-ira-vs-traditional-ira-2025/" className={link}>Roth vs traditional IRA</Link> for more.
          </p>
        </section>

        <section>
          <h2 className={h2}>Run your own numbers for {stock.ticker}</h2>
          <p className={`${p} mb-6`}>
            The calculator starts with {stock.ticker}&apos;s reference yield and growth rate. Change the amount, time
            horizon, yield and growth to match today&apos;s price and your own assumptions.
          </p>
          <TickerCalculatorClient dividendYield={stock.yieldPct} growthRate={stock.growthPct} />
        </section>

        <section className={card}>
          <h2 className={h2}>{stock.ticker} dividend FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className={p}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 rounded-3xl border border-slate-200 p-8 text-sm text-slate-600 space-y-3">
          <p>
            <strong>About this data:</strong> yields and five-year dividend growth rates are reference figures compiled in{' '}
            {DIVIDEND_DATA_AS_OF} and are not updated in real time. Past dividend growth does not guarantee future
            dividends. This page is educational and is not a recommendation to buy or sell {stock.ticker}.
          </p>
          <p>
            Sources for tax rules: <a href="https://www.irs.gov/publications/p550" className={link}>IRS Publication 550</a>{' '}
            and <a href="https://www.irs.gov/taxtopics/tc404" className={link}>IRS Topic 404 (Dividends)</a>. Investor
            education: <a href="https://www.investor.gov/" className={link}>Investor.gov</a>.
          </p>
          <p>
            <Link href="/dividend-calculator/" className={link}>Browse all {all.length} dividend stock calculators</Link> or
            use the general <Link href="/dividend-reinvestment-calculator/" className={link}>DRIP calculator</Link>.
          </p>
        </section>
      </main>
    </SiteShell>
  );
}

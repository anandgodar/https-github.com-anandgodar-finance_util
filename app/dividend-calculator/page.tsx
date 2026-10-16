import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

import SiteShell from '../../components/SiteShell';
import { ToolType } from '../../types';
import { fitTitle } from '../../lib/seo';
import { DIVIDEND_DATA_AS_OF, formatUsd, getDividendStocks, pct, projectDrip } from '../../lib/dividend-stocks';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: fitTitle('Dividend Stock Calculators: DRIP Returns by Stock'),
  description:
    'Pick a dividend stock to see what $10,000 could grow to with dividends reinvested, its reference yield and dividend growth, and how the income is taxed.',
  alternates: { canonical: 'https://quantcurb.com/dividend-calculator/' }
};

const th = 'p-3 text-left text-xs font-black uppercase tracking-wider text-slate-500';
const td = 'p-3 text-slate-700';

export default function DividendCalculatorHub() {
  const stocks = getDividendStocks();
  const sectors = Array.from(new Set(stocks.map((s) => s.sector))).sort();
  const avgYield = stocks.reduce((sum, s) => sum + s.yieldPct, 0) / stocks.length;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://quantcurb.com/' },
      { '@type': 'ListItem', position: 2, name: 'Dividend Calculators', item: 'https://quantcurb.com/dividend-calculator/' }
    ]
  };

  return (
    <SiteShell activeTool={ToolType.DRIP_CALCULATOR}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="max-w-5xl mx-auto py-8 space-y-10">
        <header className="space-y-5">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Dividend Stock Calculators</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            See how {stocks.length} well-known US dividend stocks compare when you reinvest the dividends. Each page
            projects what {formatUsd(10000)} could grow to over 10, 20 and 30 years, the income it could pay, how it
            stacks up against its sector, and how the dividends are taxed in 2026.
          </p>
          <p className="text-sm text-slate-500">
            Yields and dividend growth rates are reference figures compiled in {DIVIDEND_DATA_AS_OF}, not live quotes.
            Educational only, not investment advice.
          </p>
        </header>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-10 space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-black text-slate-900">How to read these numbers</h2>
          <p>
            A stock&apos;s <strong>dividend yield</strong> is its annual dividend divided by the share price. The average
            reference yield across this list is {pct(avgYield)}. <strong>Dividend growth</strong> is how fast the payout has
            risen per year over the last five years. A high yield pays more today; fast growth pays more later.
          </p>
          <p>
            The 30-year column assumes the yield stays constant, so the share price and dividend grow at the five-year
            dividend growth rate, with every dividend reinvested. Real returns will differ, sometimes a lot, because
            prices swing and dividends can be cut. A diversified dividend fund spreads that single-company risk; see our{' '}
            <Link href="/blog/index-funds-etf-guide-2025/" className="text-indigo-600 font-semibold hover:underline">index funds and ETFs guide</Link>{' '}
            and the <Link href="/dividend-reinvestment-calculator/" className="text-indigo-600 font-semibold hover:underline">DRIP calculator</Link>{' '}
            for your own inputs.
          </p>
        </section>

        {sectors.map((sector) => {
          const rows = stocks.filter((s) => s.sector === sector).sort((a, b) => b.yieldPct - a.yieldPct);
          return (
            <section key={sector} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
              <h2 className="text-xl font-black text-slate-900 mb-4">{sector}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className={th}>Stock</th>
                      <th className={th}>Reference yield</th>
                      <th className={th}>5-yr dividend growth</th>
                      <th className={th}>$10k after 30 yrs (DRIP)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((s) => (
                      <tr key={s.slug} className="border-t border-slate-100">
                        <td className={`${td} font-bold`}>
                          <Link href={`/dividend-calculator/${s.slug}/`} className="text-indigo-600 hover:underline">
                            {s.companyName} ({s.ticker})
                          </Link>
                        </td>
                        <td className={td}>{pct(s.yieldPct)}</td>
                        <td className={td}>{pct(s.growthPct)}</td>
                        <td className={td}>{formatUsd(projectDrip(s, 10000, 30).dripValue)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}
      </main>
    </SiteShell>
  );
}

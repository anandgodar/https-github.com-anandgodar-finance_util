import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { notFound } from 'next/navigation';

import DividendStockPage from '../../../src/components/DividendStockPage';

type PageProps = {
  params: {
    ticker: string;
  };
};

export const dynamic = 'force-static';
export const dynamicParams = false;

const loadTickers = () => {
  const filePath = path.join(process.cwd(), 'public', 'data', 'stocks.csv');
  const csv = fs.readFileSync(filePath, 'utf8');
  return csv
    .trim()
    .split(/\r?\n/)
    .slice(1)
    .map((line) => line.split(',')[0]?.trim())
    .filter(Boolean);
};

export function generateStaticParams() {
  return loadTickers().map((ticker) => ({ ticker: ticker.toLowerCase() }));
}

export function generateMetadata({ params }: PageProps) {
  const ticker = params.ticker?.toUpperCase();
  return {
    title: `Dividend Calculator for ${ticker}`,
    description: `Estimate dividend reinvestment growth for ${ticker} using historical yield assumptions.`,
    alternates: {
      canonical: `https://quantcurb.com/dividend-calculator/${params.ticker?.toLowerCase()}/`
    },
    // Ticker pages are client-rendered with little unique server HTML; keep them
    // out of the index (and the sitemap) until each has substantial content.
    robots: {
      index: false,
      follow: true
    }
  };
}

export default function DividendCalculatorPage({ params }: PageProps) {
  const ticker = params.ticker?.toUpperCase();

  if (!ticker) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <DividendStockPage ticker={ticker} />
    </main>
  );
}

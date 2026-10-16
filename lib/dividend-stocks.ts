import fs from 'node:fs';
import path from 'node:path';

// Server-only helpers for the /dividend-calculator/ pages. Figures come from
// public/data/stocks.csv: reference yields and 5-year dividend growth rates
// compiled in early 2026. They are not live quotes.

export const DIVIDEND_DATA_AS_OF = 'early 2026';

export type DividendStock = {
  ticker: string;
  slug: string;
  companyName: string;
  yieldPct: number;
  growthPct: number;
  sector: string;
};

let cache: DividendStock[] | null = null;

export function getDividendStocks(): DividendStock[] {
  if (cache) return cache;
  const csv = fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'stocks.csv'), 'utf8');
  cache = csv
    .trim()
    .split(/\r?\n/)
    .slice(1)
    .map((line) => {
      const [ticker, companyName, yieldPct, growthPct, sector] = line.split(',').map((cell) => cell.trim());
      return {
        ticker: ticker.toUpperCase(),
        slug: ticker.toLowerCase(),
        companyName,
        yieldPct: Number(yieldPct.replace('%', '')),
        growthPct: Number(growthPct.replace('%', '')),
        sector
      };
    })
    .filter((stock) => stock.ticker && Number.isFinite(stock.yieldPct));
  return cache;
}

export function getDividendStock(slug: string): DividendStock | undefined {
  return getDividendStocks().find((stock) => stock.slug === slug.toLowerCase());
}

export type DripProjection = {
  years: number;
  dripValue: number;
  dripAnnualIncome: number;
  cashValue: number;
  cashDividendsCollected: number;
};

/**
 * Annual model: the yield stays constant, so the share price and the dividend
 * per share both grow at the 5-year dividend growth rate. With DRIP the
 * dividends buy more shares each year; without it they are paid out as cash.
 * Ignores taxes, fees and fractional timing.
 */
export function projectDrip(stock: DividendStock, principal: number, years: number): DripProjection {
  const y = stock.yieldPct / 100;
  const g = stock.growthPct / 100;
  const dripValue = principal * Math.pow((1 + g) * (1 + y), years);
  const cashValue = principal * Math.pow(1 + g, years);
  let cashDividendsCollected = 0;
  for (let year = 0; year < years; year++) {
    cashDividendsCollected += principal * Math.pow(1 + g, year) * y;
  }
  return {
    years,
    dripValue,
    dripAnnualIncome: dripValue * y,
    cashValue,
    cashDividendsCollected
  };
}

export const formatUsd = (value: number) =>
  value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export const pct = (value: number, digits = 1) => `${value.toFixed(digits)}%`;

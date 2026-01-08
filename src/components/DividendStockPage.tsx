import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import DividendReinvestmentCalculator from '../../components/DividendReinvestmentCalculator';

type StockRow = {
  ticker: string;
  companyName: string;
  currentYield: number;
  fiveYearGrowth: number;
};

const DividendStockPage: React.FC = () => {
  const { ticker } = useParams();
  const [rows, setRows] = useState<StockRow[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const normalizedTicker = (ticker ?? '').trim().toUpperCase();

  useEffect(() => {
    let isMounted = true;
    const loadCsv = async () => {
      try {
        const response = await fetch(new URL('../data/stocks.csv', import.meta.url));
        const text = await response.text();
        const lines = text.trim().split(/\r?\n/);
        const parsedRows = lines.slice(1).map((line) => {
          const [rowTicker, companyName, currentYield, fiveYearGrowth] = line.split(',');
          return {
            ticker: rowTicker?.trim().toUpperCase(),
            companyName: companyName?.trim(),
            currentYield: Number(currentYield?.replace('%', '') ?? 0),
            fiveYearGrowth: Number(fiveYearGrowth?.replace('%', '') ?? 0),
          } as StockRow;
        });
        if (isMounted) {
          setRows(parsedRows);
        }
      } catch (error) {
        console.error('Failed to load stocks.csv', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadCsv();
    return () => {
      isMounted = false;
    };
  }, []);

  const selectedStock = useMemo(
    () => rows.find((row) => row.ticker === normalizedTicker),
    [rows, normalizedTicker],
  );

  useEffect(() => {
    if (selectedStock) {
      document.title = `Calculate ${selectedStock.companyName} (${selectedStock.ticker}) Dividend Returns`;
    } else if (normalizedTicker) {
      document.title = 'Dividend Calculator';
    }
  }, [normalizedTicker, selectedStock]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center text-slate-500">
        Loading dividend data...
      </div>
    );
  }

  if (!selectedStock) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h2 className="text-3xl font-black text-slate-900">Stock not found</h2>
        <p className="mt-4 text-slate-500">
          We could not locate that ticker in the dividend dataset. Try another symbol from the S&P 500 list.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900">
          See how $10k in {selectedStock.companyName} grows over 20 years
        </h2>
        <p className="mt-3 text-slate-500">
          Ticker: {selectedStock.ticker} · Yield {selectedStock.currentYield.toFixed(2)}% ·
          5-Year Growth {selectedStock.fiveYearGrowth.toFixed(2)}%
        </p>
      </div>

      <DividendReinvestmentCalculator
        initialPrincipal={10000}
        initialTimeHorizon={20}
        initialDividendYield={selectedStock.currentYield}
        initialStockAppreciation={selectedStock.fiveYearGrowth}
      />
    </div>
  );
};

export default DividendStockPage;

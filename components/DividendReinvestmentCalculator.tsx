import React, { useMemo, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const DividendReinvestmentCalculator: React.FC = () => {
  const [initialPrincipal, setInitialPrincipal] = useState<number>(50000);
  const [annualContribution, setAnnualContribution] = useState<number>(12000);
  const [dividendYield, setDividendYield] = useState<number>(3.5);
  const [stockAppreciation, setStockAppreciation] = useState<number>(7);
  const [timeHorizon, setTimeHorizon] = useState<number>(30);
  const [taxRate, setTaxRate] = useState<number>(15);
  const [reinvestDividends, setReinvestDividends] = useState<boolean>(true);

  const { chartData, withDripFinal, withoutDripFinal } = useMemo(() => {
    const data: { year: number; label: string; withDrip: number; withoutDrip: number }[] = [];
    const dividendRate = dividendYield / 100;
    const appreciationRate = stockAppreciation / 100;
    const taxRateDecimal = taxRate / 100;

    const growBalance = (balance: number, reinvest: boolean) => {
      const startingBalance = balance + annualContribution;
      const dividendCash = startingBalance * dividendRate;
      const dividendAfterTax = dividendCash * (1 - taxRateDecimal);
      let nextBalance = startingBalance;
      if (reinvest) {
        nextBalance += dividendAfterTax;
      }
      const appreciationGain = nextBalance * appreciationRate;
      nextBalance += appreciationGain;
      return nextBalance;
    };

    let withDripBalance = initialPrincipal;
    let withoutDripBalance = initialPrincipal;

    for (let year = 0; year <= timeHorizon; year += 1) {
      data.push({
        year,
        label: year === 0 ? 'Today' : `Year ${year}`,
        withDrip: Math.round(withDripBalance),
        withoutDrip: Math.round(withoutDripBalance),
      });

      if (year < timeHorizon) {
        withDripBalance = growBalance(withDripBalance, true);
        withoutDripBalance = growBalance(withoutDripBalance, false);
      }
    }

    return {
      chartData: data,
      withDripFinal: data[data.length - 1]?.withDrip ?? 0,
      withoutDripFinal: data[data.length - 1]?.withoutDrip ?? 0,
    };
  }, [annualContribution, dividendYield, initialPrincipal, stockAppreciation, taxRate, timeHorizon]);

  const formatCurrency = (value: number) =>
    `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

  const costOfWaiting = Math.max(withDripFinal - withoutDripFinal, 0);

  const incomeForYear = (targetYear: number) => {
    const dividendRate = dividendYield / 100;
    const taxRateDecimal = taxRate / 100;
    const selectedSeries = chartData[Math.min(targetYear, chartData.length - 1)];
    const base = reinvestDividends ? selectedSeries.withDrip : selectedSeries.withoutDrip;
    return (base * dividendRate * (1 - taxRateDecimal)) / 12;
  };

  const sliderClass =
    'w-full accent-emerald-400/80 bg-slate-800 h-2 rounded-full appearance-none cursor-pointer';

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-24">
      <header className="space-y-3">
        <p className="text-emerald-400 text-xs font-bold uppercase tracking-[0.3em]">Dividend Reinvestment Lab</p>
        <h2 className="text-4xl font-black text-white">
          DRIP <span className="text-emerald-500">Snowball</span> Calculator
        </h2>
        <p className="text-slate-300 max-w-3xl">
          Model dividend reinvestment vs cash payouts in a Bloomberg-terminal dark mode interface.
          See the compounding curve, the cost of waiting, and your projected passive income.
        </p>
      </header>

      <div className="grid lg:grid-cols-[360px_1fr] gap-8">
        <section className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-2xl">
          <div>
            <label className="block text-xs uppercase tracking-[0.3em] text-slate-400">Initial Principal ($)</label>
            <div className="mt-3 flex items-baseline justify-between text-slate-200">
              <span className="text-2xl font-bold">{formatCurrency(initialPrincipal)}</span>
              <span className="text-xs text-slate-500">$0 - $500k</span>
            </div>
            <input
              className={sliderClass}
              type="range"
              min={0}
              max={500000}
              step={1000}
              value={initialPrincipal}
              onChange={(event) => setInitialPrincipal(Number(event.target.value))}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.3em] text-slate-400">Annual Contribution ($)</label>
            <div className="mt-3 flex items-baseline justify-between text-slate-200">
              <span className="text-2xl font-bold">{formatCurrency(annualContribution)}</span>
              <span className="text-xs text-slate-500">$0 - $100k</span>
            </div>
            <input
              className={sliderClass}
              type="range"
              min={0}
              max={100000}
              step={500}
              value={annualContribution}
              onChange={(event) => setAnnualContribution(Number(event.target.value))}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.3em] text-slate-400">Dividend Yield (%)</label>
            <div className="mt-3 flex items-baseline justify-between text-slate-200">
              <span className="text-2xl font-bold">{dividendYield.toFixed(2)}%</span>
              <span className="text-xs text-slate-500">0% - 10%</span>
            </div>
            <input
              className={sliderClass}
              type="range"
              min={0}
              max={10}
              step={0.1}
              value={dividendYield}
              onChange={(event) => setDividendYield(Number(event.target.value))}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.3em] text-slate-400">Stock Appreciation (%)</label>
            <div className="mt-3 flex items-baseline justify-between text-slate-200">
              <span className="text-2xl font-bold">{stockAppreciation.toFixed(2)}%</span>
              <span className="text-xs text-slate-500">0% - 15%</span>
            </div>
            <input
              className={sliderClass}
              type="range"
              min={0}
              max={15}
              step={0.1}
              value={stockAppreciation}
              onChange={(event) => setStockAppreciation(Number(event.target.value))}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.3em] text-slate-400">Time Horizon (Years)</label>
            <div className="mt-3 flex items-baseline justify-between text-slate-200">
              <span className="text-2xl font-bold">{timeHorizon} yrs</span>
              <span className="text-xs text-slate-500">1 - 40</span>
            </div>
            <input
              className={sliderClass}
              type="range"
              min={1}
              max={40}
              step={1}
              value={timeHorizon}
              onChange={(event) => setTimeHorizon(Number(event.target.value))}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.3em] text-slate-400">Tax Rate (%)</label>
            <div className="mt-3 flex items-baseline justify-between text-slate-200">
              <span className="text-2xl font-bold">{taxRate.toFixed(1)}%</span>
              <span className="text-xs text-slate-500">0% - 37%</span>
            </div>
            <input
              className={sliderClass}
              type="range"
              min={0}
              max={37}
              step={0.5}
              value={taxRate}
              onChange={(event) => setTaxRate(Number(event.target.value))}
            />
          </div>

          <div className="pt-4 border-t border-slate-800">
            <label className="block text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">Reinvest Dividends?</label>
            <div className="flex gap-3">
              <button
                type="button"
                className={`flex-1 py-3 rounded-2xl text-sm font-bold transition ${
                  reinvestDividends
                    ? 'bg-emerald-500 text-slate-900'
                    : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
                onClick={() => setReinvestDividends(true)}
              >
                Yes
              </button>
              <button
                type="button"
                className={`flex-1 py-3 rounded-2xl text-sm font-bold transition ${
                  reinvestDividends
                    ? 'bg-slate-800 text-slate-400 hover:text-slate-200'
                    : 'bg-rose-500 text-white'
                }`}
                onClick={() => setReinvestDividends(false)}
              >
                No
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Cost of Waiting</p>
              <p className="mt-4 text-4xl font-black text-emerald-500">{formatCurrency(costOfWaiting)}</p>
              <p className="mt-3 text-sm text-slate-400">
                Difference between with-DRIP and without-DRIP portfolios at year {timeHorizon}.
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Portfolio Snapshot</p>
              <div className="mt-4 space-y-2 text-slate-200">
                <p className="text-lg font-semibold">
                  With DRIP: <span className="text-emerald-400">{formatCurrency(withDripFinal)}</span>
                </p>
                <p className="text-lg font-semibold">
                  Without DRIP: <span className="text-rose-400">{formatCurrency(withoutDripFinal)}</span>
                </p>
              </div>
              <p className="mt-3 text-sm text-slate-400">Snowball compounding modeled annually.</p>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl h-[360px]">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-4">Snowball Chart</p>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ left: 8, right: 8 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1f2937" />
                <XAxis dataKey="label" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis
                  stroke="#94a3b8"
                  fontSize={10}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `$${Number(value) / 1000}k`}
                />
                <Tooltip
                  formatter={(value: number) => formatCurrency(value)}
                  contentStyle={{ background: '#0f172a', border: '1px solid #1f2937', borderRadius: 12 }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Legend wrapperStyle={{ color: '#e2e8f0' }} />
                <Line
                  type="monotone"
                  dataKey="withDrip"
                  name="With DRIP"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="withoutDrip"
                  name="Without DRIP"
                  stroke="#f43f5e"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Monthly Passive Income</p>
            <div className="mt-4 grid md:grid-cols-3 gap-4 text-slate-200">
              {[10, 20, 30].map((year) => (
                <div key={year} className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Year {year}</p>
                  <p className="mt-2 text-2xl font-bold text-emerald-400">
                    {formatCurrency(incomeForYear(year))}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">After-tax dividends / month</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DividendReinvestmentCalculator;

import React, { useMemo, useState } from 'react';
import { ParentSize } from '@visx/responsive';
import { scaleBand } from '@visx/scale';

type HeatmapPoint = {
  price: number;
  daysRemaining: number;
  profitPct: number;
};

const PRICE_STEPS = 21;
const DAY_STEPS = 21;

const OptionsHeatmap: React.FC = () => {
  const [currentPrice, setCurrentPrice] = useState<number>(100);
  const [strikePrice, setStrikePrice] = useState<number>(105);
  const [daysToExpiry, setDaysToExpiry] = useState<number>(45);
  const [premiumPaid, setPremiumPaid] = useState<number>(4.5);

  const heatmapData = useMemo(() => {
    const prices = Array.from({ length: PRICE_STEPS }, (_, idx) => {
      const offset = -0.2 + (0.4 * idx) / (PRICE_STEPS - 1);
      return currentPrice * (1 + offset);
    });
    const daysRemaining = Array.from({ length: DAY_STEPS }, (_, idx) => {
      return Math.max(0, Math.round((daysToExpiry * idx) / (DAY_STEPS - 1)));
    }).reverse();

    const points: HeatmapPoint[] = [];
    prices.forEach((price) => {
      daysRemaining.forEach((days) => {
        const intrinsic = Math.max(price - strikePrice, 0);
        const timeDecayFactor = daysToExpiry > 0 ? days / daysToExpiry : 0;
        const timeValue = premiumPaid * timeDecayFactor;
        const optionValue = intrinsic + timeValue;
        const profit = optionValue - premiumPaid;
        const profitPct = premiumPaid > 0 ? (profit / premiumPaid) * 100 : 0;
        points.push({ price, daysRemaining: days, profitPct });
      });
    });

    return { points, prices, daysRemaining };
  }, [currentPrice, strikePrice, daysToExpiry, premiumPaid]);

  const formatPercent = (value: number) => `${value.toFixed(0)}%`;

  const getCellColor = (profitPct: number) => {
    if (profitPct >= 40) return '#064e3b';
    if (profitPct >= 20) return '#047857';
    if (profitPct > 0) return '#10b981';
    if (profitPct <= -40) return '#7f1d1d';
    if (profitPct <= -20) return '#b91c1c';
    if (profitPct < 0) return '#ef4444';
    return '#111827';
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-24">
      <header className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-500 font-black">Options Strategy Lab</p>
        <h2 className="text-4xl font-black text-slate-900">Options Profit Heatmap</h2>
        <p className="text-slate-500 text-sm max-w-2xl">
          Visualize profit and loss sensitivity across price and time using a simplified decay model.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <label className="space-y-2 text-xs font-bold text-slate-500">
          Current Price
          <input
            type="number"
            value={currentPrice}
            onChange={(event) => setCurrentPrice(Number(event.target.value))}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-lg font-black text-slate-700"
          />
        </label>
        <label className="space-y-2 text-xs font-bold text-slate-500">
          Strike Price
          <input
            type="number"
            value={strikePrice}
            onChange={(event) => setStrikePrice(Number(event.target.value))}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-lg font-black text-slate-700"
          />
        </label>
        <label className="space-y-2 text-xs font-bold text-slate-500">
          Days to Expiry
          <input
            type="number"
            value={daysToExpiry}
            onChange={(event) => setDaysToExpiry(Number(event.target.value))}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-lg font-black text-slate-700"
          />
        </label>
        <label className="space-y-2 text-xs font-bold text-slate-500">
          Premium Paid
          <input
            type="number"
            step="0.01"
            value={premiumPaid}
            onChange={(event) => setPremiumPaid(Number(event.target.value))}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-lg font-black text-slate-700"
          />
        </label>
      </section>

      <section className="bg-gray-950 border border-gray-800 rounded-3xl p-6 shadow-2xl">
        <div className="flex items-center justify-between text-xs text-gray-400 uppercase tracking-[0.3em] font-black">
          <span>Profit Heatmap</span>
          <span>Break-even highlighted</span>
        </div>
        <div className="mt-6 h-[520px]">
          <ParentSize>
            {({ width, height }) => {
              const margin = { top: 12, right: 12, bottom: 40, left: 60 };
              const innerWidth = Math.max(0, width - margin.left - margin.right);
              const innerHeight = Math.max(0, height - margin.top - margin.bottom);

              const xScale = scaleBand<number>({
                domain: heatmapData.prices,
                range: [0, innerWidth],
                padding: 0.05,
              });

              const yScale = scaleBand<number>({
                domain: heatmapData.daysRemaining,
                range: [0, innerHeight],
                padding: 0.05,
              });

              return (
                <svg width={width} height={height}>
                  <rect width={width} height={height} fill="#030712" rx={24} />
                  <g transform={`translate(${margin.left},${margin.top})`}>
                    {heatmapData.points.map((point) => {
                      const x = xScale(point.price);
                      const y = yScale(point.daysRemaining);
                      if (x === undefined || y === undefined) return null;
                      const isBreakEven = Math.abs(point.profitPct) < 1;
                      return (
                        <rect
                          key={`${point.price}-${point.daysRemaining}`}
                          x={x}
                          y={y}
                          width={xScale.bandwidth()}
                          height={yScale.bandwidth()}
                          fill={getCellColor(point.profitPct)}
                          stroke={isBreakEven ? '#ffffff' : 'none'}
                          strokeWidth={isBreakEven ? 1.5 : 0}
                        >
                          <title>
                            {`Price: $${point.price.toFixed(2)} | Days: ${point.daysRemaining} | Profit: ${formatPercent(point.profitPct)}`}
                          </title>
                        </rect>
                      );
                    })}
                    {heatmapData.prices.map((price) => {
                      const x = xScale(price);
                      if (x === undefined) return null;
                      return (
                        <text
                          key={`x-${price}`}
                          x={x + xScale.bandwidth() / 2}
                          y={innerHeight + 24}
                          textAnchor="middle"
                          fontSize={10}
                          fill="#9ca3af"
                        >
                          ${price.toFixed(0)}
                        </text>
                      );
                    })}
                    {heatmapData.daysRemaining.map((days) => {
                      const y = yScale(days);
                      if (y === undefined) return null;
                      return (
                        <text
                          key={`y-${days}`}
                          x={-10}
                          y={y + yScale.bandwidth() / 2 + 4}
                          textAnchor="end"
                          fontSize={10}
                          fill="#9ca3af"
                        >
                          {days}d
                        </text>
                      );
                    })}
                  </g>
                </svg>
              );
            }}
          </ParentSize>
        </div>
      </section>
    </div>
  );
};

export default OptionsHeatmap;

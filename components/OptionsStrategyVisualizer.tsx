
import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

type OptionType = 'call' | 'put';
type PositionType = 'long' | 'short';

interface OptionLeg {
  id: string;
  type: OptionType;
  position: PositionType;
  strike: number;
  premium: number;
  quantity: number;
}

interface StrategyTemplate {
  name: string;
  description: string;
  legs: Omit<OptionLeg, 'id'>[];
  category: 'bullish' | 'bearish' | 'neutral' | 'volatile';
}

const STRATEGY_TEMPLATES: Record<string, StrategyTemplate> = {
  longCall: {
    name: 'Long Call',
    description: 'Unlimited upside, limited downside. Bullish bet on stock price increase.',
    category: 'bullish',
    legs: [{ type: 'call', position: 'long', strike: 150, premium: 5, quantity: 1 }]
  },
  bullCallSpread: {
    name: 'Bull Call Spread',
    description: 'Limited risk, limited profit. Buy lower strike, sell higher strike call.',
    category: 'bullish',
    legs: [
      { type: 'call', position: 'long', strike: 145, premium: 7, quantity: 1 },
      { type: 'call', position: 'short', strike: 155, premium: 3, quantity: 1 }
    ]
  },
  bearPutSpread: {
    name: 'Bear Put Spread',
    description: 'Limited risk bearish strategy. Buy higher strike, sell lower strike put.',
    category: 'bearish',
    legs: [
      { type: 'put', position: 'long', strike: 150, premium: 6, quantity: 1 },
      { type: 'put', position: 'short', strike: 140, premium: 2, quantity: 1 }
    ]
  },
  ironCondor: {
    name: 'Iron Condor',
    description: 'Profit from low volatility. Sell OTM call & put spreads. "Tent" P&L shape.',
    category: 'neutral',
    legs: [
      { type: 'put', position: 'long', strike: 135, premium: 1, quantity: 1 },
      { type: 'put', position: 'short', strike: 145, premium: 3, quantity: 1 },
      { type: 'call', position: 'short', strike: 155, premium: 3, quantity: 1 },
      { type: 'call', position: 'long', strike: 165, premium: 1, quantity: 1 }
    ]
  },
  ironButterfly: {
    name: 'Iron Butterfly',
    description: 'Max profit at ATM strike. Extremely narrow profit zone.',
    category: 'neutral',
    legs: [
      { type: 'put', position: 'long', strike: 140, premium: 2, quantity: 1 },
      { type: 'put', position: 'short', strike: 150, premium: 6, quantity: 1 },
      { type: 'call', position: 'short', strike: 150, premium: 6, quantity: 1 },
      { type: 'call', position: 'long', strike: 160, premium: 2, quantity: 1 }
    ]
  },
  straddle: {
    name: 'Long Straddle',
    description: 'Bet on high volatility. Profit from big move in either direction.',
    category: 'volatile',
    legs: [
      { type: 'call', position: 'long', strike: 150, premium: 5, quantity: 1 },
      { type: 'put', position: 'long', strike: 150, premium: 5, quantity: 1 }
    ]
  },
  strangle: {
    name: 'Long Strangle',
    description: 'Cheaper than straddle. Profit from large price swing.',
    category: 'volatile',
    legs: [
      { type: 'call', position: 'long', strike: 155, premium: 3, quantity: 1 },
      { type: 'put', position: 'long', strike: 145, premium: 3, quantity: 1 }
    ]
  }
};

const OptionsStrategyVisualizer: React.FC = () => {
  const [stockPrice, setStockPrice] = useState<number>(150);
  const [legs, setLegs] = useState<OptionLeg[]>([
    { id: '1', type: 'call', position: 'long', strike: 150, premium: 5, quantity: 1 }
  ]);
  const [ivAdjustment, setIVAdjustment] = useState<number>(0); // -50% to +50%
  const [selectedCategory, setSelectedCategory] = useState<string>('bullish');

  const loadStrategy = (templateKey: string) => {
    const template = STRATEGY_TEMPLATES[templateKey];
    const newLegs = template.legs.map((leg, idx) => ({
      ...leg,
      id: `${Date.now()}-${idx}`
    }));
    setLegs(newLegs);
  };

  const addLeg = () => {
    setLegs([...legs, {
      id: Date.now().toString(),
      type: 'call',
      position: 'long',
      strike: stockPrice,
      premium: 5,
      quantity: 1
    }]);
  };

  const updateLeg = (id: string, field: keyof OptionLeg, value: any) => {
    setLegs(legs.map(leg => leg.id === id ? { ...leg, [field]: value } : leg));
  };

  const removeLeg = (id: string) => {
    if (legs.length > 1) setLegs(legs.filter(leg => leg.id !== id));
  };

  const calculatePL = (price: number, leg: OptionLeg, iv: number): number => {
    const intrinsic = leg.type === 'call'
      ? Math.max(price - leg.strike, 0)
      : Math.max(leg.strike - price, 0);

    // Simplified IV effect: options gain/lose value with IV changes
    const ivEffect = leg.premium * (iv / 100);
    const optionValue = intrinsic + ivEffect;

    const pl = leg.position === 'long'
      ? (optionValue - leg.premium) * leg.quantity * 100
      : (leg.premium - optionValue) * leg.quantity * 100;

    return pl;
  };

  const chartData = useMemo(() => {
    const minStrike = Math.min(...legs.map(l => l.strike));
    const maxStrike = Math.max(...legs.map(l => l.strike));
    const range = maxStrike - minStrike || 50;
    const start = Math.max(minStrike - range * 0.3, 0);
    const end = maxStrike + range * 0.3;
    const step = (end - start) / 100;

    const data = [];
    for (let price = start; price <= end; price += step) {
      const totalPL = legs.reduce((sum, leg) => sum + calculatePL(price, leg, ivAdjustment), 0);
      data.push({
        price: Math.round(price),
        pl: Math.round(totalPL),
        plAtExpiry: Math.round(legs.reduce((sum, leg) => sum + calculatePL(price, leg, 0), 0))
      });
    }
    return data;
  }, [legs, ivAdjustment]);

  const greeks = useMemo(() => {
    // Simplified Greeks calculation
    const totalDelta = legs.reduce((sum, leg) => {
      const delta = leg.type === 'call' ? 0.5 : -0.5; // Simplified ATM delta
      return sum + (leg.position === 'long' ? delta : -delta) * leg.quantity;
    }, 0);

    const totalGamma = legs.reduce((sum, leg) => {
      return sum + 0.05 * leg.quantity; // Simplified
    }, 0);

    const totalTheta = legs.reduce((sum, leg) => {
      const theta = -leg.premium * 0.02; // Approx daily decay
      return sum + (leg.position === 'long' ? theta : -theta) * leg.quantity;
    }, 0);

    const totalVega = legs.reduce((sum, leg) => {
      return sum + (leg.position === 'long' ? 0.1 : -0.1) * leg.quantity;
    }, 0);

    return {
      delta: totalDelta.toFixed(2),
      gamma: totalGamma.toFixed(3),
      theta: totalTheta.toFixed(2),
      vega: totalVega.toFixed(2)
    };
  }, [legs]);

  const maxProfit = Math.max(...chartData.map(d => d.plAtExpiry));
  const maxLoss = Math.min(...chartData.map(d => d.plAtExpiry));
  const breakevens = chartData.filter((d, i, arr) => {
    if (i === 0) return false;
    return (d.plAtExpiry >= 0 && arr[i - 1].plAtExpiry < 0) || (d.plAtExpiry <= 0 && arr[i - 1].plAtExpiry > 0);
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-24 px-4 md:px-0">
      {/* Header */}
      <header className="bg-white p-8 md:p-10 rounded-3xl md:rounded-[4rem] border border-slate-100 shadow-sm">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-indigo-600 text-white rounded-xl font-black text-xs shadow-lg">OPTIONS</span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Strategy <span className="text-indigo-600">Visualizer</span>
            </h1>
          </div>
          <p className="text-slate-500 max-w-3xl font-medium text-sm md:text-base leading-relaxed">
            Build multi-leg options strategies and visualize P&L across price and volatility scenarios. Analyze Greeks and understand risk exposure in real-time.
          </p>
        </div>
      </header>

      {/* Strategy Templates */}
      <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">Quick Strategy Templates</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {(['bullish', 'bearish', 'neutral', 'volatile'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {Object.entries(STRATEGY_TEMPLATES)
            .filter(([_, template]) => template.category === selectedCategory)
            .map(([key, template]) => (
              <button
                key={key}
                onClick={() => loadStrategy(key)}
                className="text-left p-4 bg-slate-50 hover:bg-indigo-50 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all group"
              >
                <h4 className="text-sm font-black text-slate-900 mb-1 group-hover:text-indigo-600">
                  {template.name}
                </h4>
                <p className="text-[10px] text-slate-500 leading-relaxed">{template.description}</p>
                <div className="mt-2 text-[9px] font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to load →
                </div>
              </button>
            ))}
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Position Builder */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Position Legs</h3>
              <button
                onClick={addLeg}
                className="px-4 py-2 bg-indigo-600 text-white text-[10px] font-black rounded-xl hover:bg-indigo-700 transition-all"
              >
                + Add Leg
              </button>
            </div>

            <div className="space-y-3">
              {legs.map(leg => (
                <div key={leg.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex justify-between items-center">
                    <select
                      value={`${leg.position}-${leg.type}`}
                      onChange={(e) => {
                        const [pos, type] = e.target.value.split('-');
                        updateLeg(leg.id, 'position', pos);
                        updateLeg(leg.id, 'type', type);
                      }}
                      className="text-xs font-bold bg-white border border-slate-300 rounded-lg px-2 py-1"
                    >
                      <option value="long-call">Buy Call</option>
                      <option value="short-call">Sell Call</option>
                      <option value="long-put">Buy Put</option>
                      <option value="short-put">Sell Put</option>
                    </select>
                    {legs.length > 1 && (
                      <button
                        onClick={() => removeLeg(leg.id)}
                        className="text-red-500 hover:text-red-700 text-sm font-bold"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <label className="space-y-1">
                      <span className="text-[9px] text-slate-500 font-bold uppercase">Strike</span>
                      <input
                        type="number"
                        value={leg.strike}
                        onChange={(e) => updateLeg(leg.id, 'strike', Number(e.target.value))}
                        className="w-full px-2 py-1.5 text-sm font-bold bg-white border border-slate-300 rounded-lg"
                      />
                    </label>
                    <label className="space-y-1">
                      <span className="text-[9px] text-slate-500 font-bold uppercase">Premium</span>
                      <input
                        type="number"
                        step="0.1"
                        value={leg.premium}
                        onChange={(e) => updateLeg(leg.id, 'premium', Number(e.target.value))}
                        className="w-full px-2 py-1.5 text-sm font-bold bg-white border border-slate-300 rounded-lg"
                      />
                    </label>
                  </div>

                  <label className="space-y-1">
                    <span className="text-[9px] text-slate-500 font-bold uppercase">Quantity (Contracts)</span>
                    <input
                      type="number"
                      value={leg.quantity}
                      onChange={(e) => updateLeg(leg.id, 'quantity', Number(e.target.value))}
                      className="w-full px-2 py-1.5 text-sm font-bold bg-white border border-slate-300 rounded-lg"
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Greeks Dashboard */}
          <div className="bg-slate-900 p-6 rounded-3xl text-white space-y-4">
            <h3 className="text-xs font-black text-indigo-400 uppercase tracking-wider">Greeks</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-[9px] text-slate-400 font-bold uppercase">Delta (Directional)</p>
                <p className="text-2xl font-black text-white">{greeks.delta}</p>
                <p className="text-[8px] text-slate-500">~{Math.abs(Number(greeks.delta) * 100).toFixed(0)} shares equivalent</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] text-slate-400 font-bold uppercase">Theta (Time Decay)</p>
                <p className={`text-2xl font-black ${Number(greeks.theta) < 0 ? 'text-red-400' : 'text-green-400'}`}>
                  ${greeks.theta}
                </p>
                <p className="text-[8px] text-slate-500">Per day</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] text-slate-400 font-bold uppercase">Gamma (Acceleration)</p>
                <p className="text-2xl font-black text-white">{greeks.gamma}</p>
                <p className="text-[8px] text-slate-500">Delta change per $1</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] text-slate-400 font-bold uppercase">Vega (IV Risk)</p>
                <p className="text-2xl font-black text-white">{greeks.vega}</p>
                <p className="text-[8px] text-slate-500">Per 1% IV change</p>
              </div>
            </div>
          </div>

          {/* Risk Metrics */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 space-y-3">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Risk Profile</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-600">Max Profit</span>
                <span className={`text-sm font-black ${maxProfit === Infinity ? 'text-green-600' : 'text-slate-900'}`}>
                  {maxProfit === Infinity ? 'Unlimited' : `$${maxProfit.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-600">Max Loss</span>
                <span className={`text-sm font-black ${maxLoss === -Infinity ? 'text-red-600' : 'text-slate-900'}`}>
                  {maxLoss === -Infinity ? 'Unlimited' : `$${maxLoss.toLocaleString()}`}
                </span>
              </div>
              {breakevens.length > 0 && (
                <div className="flex justify-between items-center py-2">
                  <span className="text-xs font-bold text-slate-600">Breakeven{breakevens.length > 1 ? 's' : ''}</span>
                  <span className="text-sm font-black text-indigo-600">
                    {breakevens.map(b => `$${b.price}`).join(', ')}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Chart */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Profit/Loss Diagram</h3>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-500">Current Price:</span>
                    <input
                      type="number"
                      value={stockPrice}
                      onChange={(e) => setStockPrice(Number(e.target.value))}
                      className="w-20 px-2 py-1 text-sm font-bold bg-slate-50 border border-slate-300 rounded-lg"
                    />
                  </label>
                </div>
              </div>

              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis
                      dataKey="price"
                      stroke="#94a3b8"
                      fontSize={11}
                      label={{ value: 'Stock Price at Expiry', position: 'insideBottom', offset: -5, fontSize: 10, fontWeight: 700 }}
                    />
                    <YAxis
                      stroke="#94a3b8"
                      fontSize={11}
                      label={{ value: 'Profit/Loss ($)', angle: -90, position: 'insideLeft', fontSize: 10, fontWeight: 700 }}
                    />
                    <Tooltip
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                      formatter={(value: any) => [`$${value}`, 'P/L']}
                    />
                    <ReferenceLine y={0} stroke="#64748b" strokeWidth={2} strokeDasharray="5 5" />
                    <ReferenceLine x={stockPrice} stroke="#6366f1" strokeWidth={2} label={{ value: 'Current', position: 'top', fontSize: 10, fontWeight: 700 }} />
                    <Line type="monotone" dataKey="plAtExpiry" stroke="#10b981" strokeWidth={3} dot={false} name="At Expiry" />
                    {ivAdjustment !== 0 && (
                      <Line type="monotone" dataKey="pl" stroke="#f59e0b" strokeWidth={2} dot={false} strokeDasharray="5 5" name="With IV Change" />
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-500">Implied Volatility Adjustment</label>
                  <span className="text-sm font-black text-orange-600">{ivAdjustment > 0 ? '+' : ''}{ivAdjustment}%</span>
                </div>
                <input
                  type="range"
                  min="-50"
                  max="50"
                  step="5"
                  value={ivAdjustment}
                  onChange={(e) => setIVAdjustment(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <p className="text-[10px] text-slate-400 leading-relaxed">
                  Adjust to see impact of IV crush (earnings) or IV expansion (uncertainty). Orange dashed line shows current P/L before expiry.
                </p>
              </div>
            </div>
          </div>

          {/* Educational Section */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-8 rounded-3xl text-white">
            <h3 className="text-sm font-black text-indigo-300 uppercase tracking-wider mb-4">Understanding Options Strategies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xs font-black text-white uppercase">Multi-Leg Strategies</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Combine multiple option positions to create asymmetric payoffs. Spreads limit both risk and reward, while straddles/strangles profit from volatility.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-black text-white uppercase">The Greeks</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Delta measures directional exposure. Theta quantifies time decay. Vega captures IV risk. Gamma shows how delta changes with price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsStrategyVisualizer;

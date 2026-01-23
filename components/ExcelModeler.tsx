
import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

type Scenario = 'base' | 'upside' | 'downside';
type Industry = 'saas' | 'manufacturing' | 'retail' | 'custom';

interface IndustryTemplate {
  name: string;
  growth: number;
  margin: number;
  wacc: number;
  terminal: number;
}

const TEMPLATES: Record<Industry, IndustryTemplate> = {
  saas: { name: 'SaaS / High Growth', growth: 45, margin: 22, wacc: 11, terminal: 3.5 },
  manufacturing: { name: 'Industrial / Mature', growth: 6, margin: 12, wacc: 8, terminal: 2.0 },
  retail: { name: 'Consumer / Retail', growth: 12, margin: 8, wacc: 9, terminal: 2.2 },
  custom: { name: 'Custom Model', growth: 15, margin: 20, wacc: 10, terminal: 2.5 }
};

const ExcelModeler: React.FC = () => {
  const [industry, setIndustry] = useState<Industry>('custom');
  const [scenario, setScenario] = useState<Scenario>('base');

  // Base Inputs (Controlled by Template or Manual)
  const [revenueBase, setRevenueBase] = useState<number>(5000000);
  const [growthRate, setGrowthRate] = useState<number>(15);
  const [ebitdaMargin, setEbitdaMargin] = useState<number>(20);
  const [taxRate, setTaxRate] = useState<number>(21);
  const [discountRate, setDiscountRate] = useState<number>(10);
  const [terminalGrowth, setTerminalGrowth] = useState<number>(2.5);
  const [showFormulas, setShowFormulas] = useState<boolean>(false);

  // WACC Wizard State
  const [showWACCWizard, setShowWACCWizard] = useState<boolean>(false);
  const [riskFreeRate, setRiskFreeRate] = useState<number>(4.2); // US 10-year treasury
  const [beta, setBeta] = useState<number>(1.2);
  const [marketRiskPremium, setMarketRiskPremium] = useState<number>(7.0); // Historical average
  const [costOfDebt, setCostOfDebt] = useState<number>(5.5);
  const [debtToEquity, setDebtToEquity] = useState<number>(0.4); // D/E ratio

  // CAPM Calculation: Ke = Rf + β(Rm - Rf)
  const costOfEquity = useMemo(() => {
    return riskFreeRate + beta * marketRiskPremium;
  }, [riskFreeRate, beta, marketRiskPremium]);

  // WACC = (E/(E+D) × Ke) + (D/(E+D) × Kd × (1-Tax))
  const calculatedWACC = useMemo(() => {
    const equityWeight = 1 / (1 + debtToEquity);
    const debtWeight = debtToEquity / (1 + debtToEquity);
    return (equityWeight * costOfEquity) + (debtWeight * costOfDebt * (1 - taxRate / 100));
  }, [costOfEquity, costOfDebt, debtToEquity, taxRate]);

  const applyTemplate = (key: Industry) => {
    const t = TEMPLATES[key];
    setIndustry(key);
    setGrowthRate(t.growth);
    setEbitdaMargin(t.margin);
    setDiscountRate(t.wacc);
    setTerminalGrowth(t.terminal);
  };

  // Scenario Logic
  const activeParams = useMemo(() => {
    switch (scenario) {
      case 'upside': return { growth: growthRate * 1.25, margin: ebitdaMargin + 5 };
      case 'downside': return { growth: growthRate * 0.75, margin: ebitdaMargin - 8 };
      default: return { growth: growthRate, margin: ebitdaMargin };
    }
  }, [scenario, growthRate, ebitdaMargin]);

  const modelData = useMemo(() => {
    const projection = [];
    let currentRev = revenueBase;
    
    for (let i = 1; i <= 5; i++) {
      currentRev = currentRev * (1 + activeParams.growth / 100);
      const ebitda = currentRev * (activeParams.margin / 100);
      const tax = ebitda * (taxRate / 100);
      const fcf = ebitda - tax; 
      const discountFactor = Math.pow(1 + discountRate / 100, i);
      const pv = fcf / discountFactor;
      
      projection.push({
        year: `Y${i}`,
        revenue: Math.round(currentRev),
        ebitda: Math.round(ebitda),
        tax: Math.round(tax),
        fcf: Math.round(fcf),
        pv: Math.round(pv)
      });
    }

    const lastFCF = projection[projection.length - 1].fcf;
    const terminalValue = (lastFCF * (1 + terminalGrowth / 100)) / (discountRate / 100 - terminalGrowth / 100);
    const pvOfTV = terminalValue / Math.pow(1 + discountRate / 100, 5);
    const enterpriseValue = projection.reduce((sum, p) => sum + p.pv, 0) + pvOfTV;

    return { projection, enterpriseValue, pvOfTV, terminalValue, lastEbitda: projection[4].ebitda };
  }, [revenueBase, activeParams, taxRate, discountRate, terminalGrowth]);

  const sensitivityGrid = useMemo(() => {
    const waccSteps = [discountRate - 2, discountRate - 1, discountRate, discountRate + 1, discountRate + 2];
    const growthSteps = [activeParams.growth - 4, activeParams.growth - 2, activeParams.growth, activeParams.growth + 2, activeParams.growth + 4];
    
    return growthSteps.map(g => {
      return waccSteps.map(w => {
        let rev = revenueBase;
        let sumPV = 0;
        let lastFCF = 0;
        for (let i = 1; i <= 5; i++) {
          rev *= (1 + g / 100);
          lastFCF = rev * (activeParams.margin / 100) * (1 - taxRate / 100);
          sumPV += lastFCF / Math.pow(1 + w / 100, i);
        }
        const tv = (lastFCF * (1 + terminalGrowth / 100)) / (w / 100 - terminalGrowth / 100);
        const ev = sumPV + (tv / Math.pow(1 + w / 100, 5));
        return Math.round(ev / 1000000); 
      });
    });
  }, [revenueBase, activeParams.margin, taxRate, terminalGrowth, discountRate, activeParams.growth]);

  const chartData = [
    ...modelData.projection.map(p => ({ name: p.year, value: p.pv, type: 'Cash Flow' })),
    { name: 'Terminal', value: modelData.pvOfTV, type: 'Terminal Value' }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-500 pb-24">
      {/* Header with KPI Cards */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="space-y-4 relative z-10">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-green-600 text-white rounded-lg font-black text-xs shadow-lg shadow-green-100">XLSX</span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">Excel Power <span className="text-green-600">Modeler</span></h1>
          </div>
          <p className="text-slate-500 max-w-lg font-medium text-sm leading-relaxed">
            Simulate institutional equity valuation using 5-stage DCF modeling, WACC sensitivity grids, and Power Query style logic audit.
          </p>
          
          <div className="flex flex-wrap gap-2">
            {(Object.keys(TEMPLATES) as Industry[]).map(t => (
              <button 
                key={t}
                onClick={() => applyTemplate(t)}
                className={`px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border ${
                  industry === t ? 'bg-slate-900 text-white border-slate-900 shadow-xl' : 'bg-slate-50 text-slate-400 border-slate-100 hover:bg-white'
                }`}
              >
                {TEMPLATES[t].name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-auto relative z-10">
          <div className="bg-slate-900 px-8 py-6 rounded-[2.5rem] text-white flex flex-col justify-center">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-green-400 mb-1">Exit Multiple (EV/EBITDA)</p>
            <p className="text-4xl font-black tracking-tighter">{(modelData.enterpriseValue / modelData.lastEbitda).toFixed(1)}x</p>
          </div>
          <div className="bg-green-600 px-8 py-6 rounded-[2.5rem] text-white shadow-2xl shadow-green-200 flex flex-col justify-center border border-green-500">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-green-100 mb-1">Intrinsic Value ($M)</p>
            <p className="text-4xl font-black tracking-tighter">${(modelData.enterpriseValue / 1000000).toFixed(1)}M</p>
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Model Assuptions Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <section className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] border-b pb-4 flex justify-between items-center">
              <span>Assumptions Console</span>
              <button onClick={() => setShowFormulas(!showFormulas)} className="text-green-600 text-[9px] hover:underline font-black">{showFormulas ? 'CLOSE AUDIT' : 'VIEW FORMULAS'}</button>
            </h3>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-end px-2">
                  <label className="text-[10px] font-black text-slate-900 uppercase">Revenue Base ($)</label>
                  <span className="text-sm font-black text-green-600">${(revenueBase / 1000000).toFixed(1)}M</span>
                </div>
                <input type="range" min="1000000" max="100000000" step="1000000" value={revenueBase} onChange={e => setRevenueBase(Number(e.target.value))} className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-green-600" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end px-2">
                  <label className="text-[10px] font-black text-slate-900 uppercase">Yearly Growth (%)</label>
                  <span className="text-sm font-black text-green-600">{growthRate}%</span>
                </div>
                <input type="range" min="0" max="100" step="1" value={growthRate} onChange={e => { setGrowthRate(Number(e.target.value)); setIndustry('custom'); }} className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-green-600" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end px-2">
                  <label className="text-[10px] font-black text-slate-900 uppercase">EBITDA Margin (%)</label>
                  <span className="text-sm font-black text-green-600">{ebitdaMargin}%</span>
                </div>
                <input type="range" min="5" max="60" step="1" value={ebitdaMargin} onChange={e => { setEbitdaMargin(Number(e.target.value)); setIndustry('custom'); }} className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-green-600" />
              </div>
            </div>

            <div className="pt-8 border-t border-slate-50 flex gap-2">
              {(['base', 'upside', 'downside'] as Scenario[]).map(s => (
                <button 
                  key={s}
                  onClick={() => setScenario(s)}
                  className={`flex-1 py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all ${
                    scenario === s ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 p-8 rounded-[3rem] text-white space-y-8 border border-slate-800 shadow-2xl">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <h3 className="text-[10px] font-black text-green-400 uppercase tracking-[0.3em]">WACC & Terminal Logic</h3>
              <button
                onClick={() => setShowWACCWizard(!showWACCWizard)}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-[9px] font-black uppercase tracking-wider rounded-xl transition-all"
              >
                {showWACCWizard ? 'Hide' : 'WACC Wizard'}
              </button>
            </div>

            {showWACCWizard ? (
              <div className="space-y-6 bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-xs font-black text-green-300 uppercase tracking-widest">CAPM Calculator (Cost of Equity)</h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-slate-400 uppercase flex items-center gap-1">
                      Risk-Free Rate (Rf)
                      <span className="cursor-help" title="US 10-Year Treasury Yield">ⓘ</span>
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={riskFreeRate}
                      onChange={e => setRiskFreeRate(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-slate-900 border border-white/20 rounded-lg text-white text-sm font-bold"
                    />
                    <span className="text-[8px] text-slate-500">Current: 4.2%</span>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-slate-400 uppercase flex items-center gap-1">
                      Beta (β)
                      <span className="cursor-help" title="Stock volatility vs market">ⓘ</span>
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={beta}
                      onChange={e => setBeta(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-slate-900 border border-white/20 rounded-lg text-white text-sm font-bold"
                    />
                    <div className="text-[8px] text-slate-500 space-x-2">
                      <button onClick={() => setBeta(0.8)} className="hover:text-green-400">Tech: 1.2</button>
                      <button onClick={() => setBeta(1.1)} className="hover:text-green-400">Finance: 1.1</button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-slate-400 uppercase flex items-center gap-1">
                      Market Risk Premium
                      <span className="cursor-help" title="Expected market return - Rf">ⓘ</span>
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={marketRiskPremium}
                      onChange={e => setMarketRiskPremium(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-slate-900 border border-white/20 rounded-lg text-white text-sm font-bold"
                    />
                    <span className="text-[8px] text-slate-500">Historical: 7.0%</span>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-green-300 uppercase">Cost of Equity (Ke)</label>
                    <div className="px-3 py-2 bg-green-600/20 border border-green-500/30 rounded-lg text-green-300 text-lg font-black">
                      {costOfEquity.toFixed(2)}%
                    </div>
                    <span className="text-[8px] text-slate-500">= Rf + β × (Rm - Rf)</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 space-y-4">
                  <h4 className="text-xs font-black text-green-300 uppercase tracking-widest">Capital Structure</h4>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold text-slate-400 uppercase">Cost of Debt (Kd)</label>
                      <input
                        type="number"
                        step="0.1"
                        value={costOfDebt}
                        onChange={e => setCostOfDebt(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-slate-900 border border-white/20 rounded-lg text-white text-sm font-bold"
                      />
                      <span className="text-[8px] text-slate-500">After-tax interest rate</span>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-bold text-slate-400 uppercase">D/E Ratio</label>
                      <input
                        type="number"
                        step="0.1"
                        value={debtToEquity}
                        onChange={e => setDebtToEquity(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-slate-900 border border-white/20 rounded-lg text-white text-sm font-bold"
                      />
                      <span className="text-[8px] text-slate-500">Debt / Equity</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-black text-green-100 uppercase tracking-widest">Calculated WACC</span>
                      <span className="text-2xl font-black text-white">{calculatedWACC.toFixed(2)}%</span>
                    </div>
                    <button
                      onClick={() => {
                        setDiscountRate(Number(calculatedWACC.toFixed(1)));
                        setShowWACCWizard(false);
                      }}
                      className="mt-3 w-full py-2 bg-white text-green-700 rounded-lg text-[10px] font-black uppercase tracking-wider hover:bg-green-50 transition-all"
                    >
                      Apply to Model
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-end px-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase">Cost of Capital (WACC)</label>
                    <span className="text-sm font-black text-green-400">{discountRate}%</span>
                  </div>
                  <input type="range" min="5" max="25" step="0.5" value={discountRate} onChange={e => setDiscountRate(Number(e.target.value))} className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-500" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-end px-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase">Terminal Growth Rate</label>
                    <span className="text-sm font-black text-green-400">{terminalGrowth}%</span>
                  </div>
                  <input type="range" min="1" max="5" step="0.1" value={terminalGrowth} onChange={e => setTerminalGrowth(Number(e.target.value))} className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-500" />
                </div>
              </div>
            )}
          </section>
        </div>

        {/* Spreadsheet Engine */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-slate-50 border-b p-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                   <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Master Financial Statement</h4>
                </div>
              </div>
              <div className="flex gap-2">
                {['A','B','C','D','E','F'].map(l => <span key={l} className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-[9px] font-black text-slate-400">{l}</span>)}
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="p-4 text-[9px] font-black text-slate-300 uppercase border-r text-center w-12">#</th>
                    <th className="p-4 text-[9px] font-black text-slate-400 uppercase border-r">Valuation Line Item</th>
                    {modelData.projection.map(p => <th key={p.year} className="p-4 text-center text-[10px] font-black text-slate-800">{p.year}</th>)}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 font-mono text-[11px]">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 text-center text-slate-200 border-r bg-slate-50/30">1</td>
                    <td className="p-4 font-bold text-slate-500 border-r bg-slate-50/20">Revenue ($M)</td>
                    {modelData.projection.map((p, i) => (
                      <td key={i} className="p-4 text-center">
                        {showFormulas ? `=(B1*(1+G))` : (p.revenue / 1000000).toFixed(1)}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 text-center text-slate-200 border-r bg-slate-50/30">2</td>
                    <td className="p-4 font-bold text-slate-500 border-r bg-slate-50/20">EBITDA Earnings</td>
                    {modelData.projection.map((p, i) => (
                      <td key={i} className="p-4 text-center text-slate-900 font-bold">
                        {showFormulas ? `=REV*Margin` : (p.ebitda / 1000000).toFixed(1)}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 text-center text-slate-200 border-r bg-slate-50/30">3</td>
                    <td className="p-4 font-bold text-slate-500 border-r bg-slate-50/20">Tax Deductions</td>
                    {modelData.projection.map((p, i) => (
                      <td key={i} className="p-4 text-center text-rose-500">
                        ({showFormulas ? `=EBIT*TR` : (p.tax / 1000000).toFixed(1)})
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-green-50/30 font-black border-t-2 border-slate-100">
                    <td className="p-4 text-center text-green-300 border-r bg-green-50/50">4</td>
                    <td className="p-4 text-slate-900 border-r">Free Cash Flow (FCF)</td>
                    {modelData.projection.map((p, i) => (
                      <td key={i} className="p-4 text-center text-green-600">
                        {showFormulas ? `=EBITDA-Tax` : (p.fcf / 1000000).toFixed(1)}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-slate-900 text-white font-black">
                    <td className="p-4 text-center text-slate-500 border-r border-slate-800">5</td>
                    <td className="p-4 border-r border-slate-800">Present Value (PV)</td>
                    {modelData.projection.map((p, i) => (
                      <td key={i} className="p-4 text-center">
                        {showFormulas ? `=FCF/DF` : (p.pv / 1000000).toFixed(1)}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-slate-50 flex justify-between items-center text-[9px] font-black text-slate-400 uppercase tracking-widest">
               <span>Audited DCF Logic Engine v4.2</span>
               <span className="text-green-600">Status: Computation Stable</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Intrinsic Value Breakdown</h4>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                    <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.type === 'Terminal Value' ? '#10b981' : '#6366f1'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-[10px] text-slate-400 font-bold text-center leading-relaxed">
                Terminal Value accounts for <strong>{((modelData.pvOfTV / modelData.enterpriseValue) * 100).toFixed(1)}%</strong> of total valuation.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
              <div className="flex justify-between items-end">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">WACC vs Growth Grid</h4>
                <span className="text-[9px] font-black text-green-600">Sensitivity Grid</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-center border-collapse text-[10px]">
                  <thead>
                    <tr>
                      <th className="p-2 bg-slate-50 font-black text-slate-400 border border-slate-100">G \ WACC</th>
                      {[discountRate-2, discountRate-1, discountRate, discountRate+1, discountRate+2].map(w => <th key={w} className="p-2 bg-slate-900 text-white font-black border border-slate-800">{w}%</th>)}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[activeParams.growth-4, activeParams.growth-2, activeParams.growth, activeParams.growth+2, activeParams.growth+4].map((g, ridx) => (
                      <tr key={g}>
                        <td className="p-2 bg-slate-50 font-black text-slate-900 border border-slate-100">{Math.round(g)}%</td>
                        {sensitivityGrid[ridx].map((val, cidx) => (
                          <td key={cidx} className={`p-2 font-bold border border-slate-100 ${cidx === 2 && ridx === 2 ? 'bg-green-100 text-green-700' : 'text-slate-500'}`}>${val}M</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[9px] text-slate-400 leading-relaxed font-bold text-center uppercase tracking-widest">Crosshair indicates current assumption set.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded SEO & Knowledge Hub */}
      <section className="bg-slate-900 p-12 md:p-24 rounded-[5rem] space-y-20 relative overflow-hidden shadow-2xl">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-indigo-500"></div>
        
        <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <span className="text-[10px] font-black text-green-400 uppercase tracking-[0.5em]">Valuation Knowledge Base</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">Mastering <span className="text-green-500">Equity Valuation</span> Frameworks</h2>
            <p className="text-slate-400 text-xl leading-relaxed font-medium">
              A Discounted Cash Flow (DCF) model is the "Gold Standard" for intrinsic valuation. It projects the future cash generation of a business and discounts it back to the present using a risk-adjusted rate (WACC).
            </p>
            <div className="flex gap-6 pt-6">
              <div className="px-8 py-5 bg-white/5 border border-white/10 rounded-[2rem]">
                <p className="text-xs font-black text-green-400 uppercase mb-1">Intrinsic Logic</p>
                <p className="text-2xl font-black text-white">DCF Engine</p>
              </div>
              <div className="px-8 py-5 bg-white/5 border border-white/10 rounded-[2rem]">
                <p className="text-xs font-black text-indigo-400 uppercase mb-1">Risk Modeling</p>
                <p className="text-2xl font-black text-white">Monte Carlo</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-12 rounded-[4rem] backdrop-blur-xl space-y-10">
            <h4 className="text-[10px] font-black text-green-300 uppercase tracking-widest text-center">Power Query Data Transformation</h4>
            <div className="space-y-4">
              {[
                { label: 'Import Trial Balances', status: 'SOURCE CONNECTED', color: 'bg-green-500' },
                { label: 'Calculate NOPAT & FCF', status: 'TRANSFORMED', color: 'bg-indigo-500' },
                { label: 'Apply Sensitivity Matrix', status: 'STRESS TESTED', color: 'bg-emerald-500' },
                { label: 'Generate Intrinsic Target', status: 'OUTPUT SYNCED', color: 'bg-sky-500' }
              ].map((step, i) => (
                <div key={i} className="flex justify-between items-center p-6 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white/10 transition-all cursor-default">
                  <span className="text-xs font-black text-white uppercase tracking-wider">{step.label}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-bold text-slate-500">{step.status}</span>
                    <div className={`w-2 h-2 rounded-full ${step.color} animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEO Intelligence Tags */}
        <div className="pt-12 border-t border-white/5">
          <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-10 text-center">Search Intent & Financial Taxonomy</h5>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Enterprise Value Calculation", "SaaS Valuation Multiple", "Equity Risk Premium", "Cost of Capital Analysis",
              "Intrinsic Value Formula", "Discounted Cash Flow Excel", "NPV Valuation Tool", "Terminal Value Drag",
              "Sensitivity Table Finance", "Business Valuation DCF", "EBITDA Exit Multiples", "WACC Computation"
            ].map(tag => (
              <span key={tag} className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:text-green-400 hover:border-green-400 transition-all cursor-default">
                #{tag.replace(/\s+/g, '')}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center pt-8">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">QuantCurb Institutional Engineering • High-Fidelity Logic</p>
      </footer>
    </div>
  );
};

export default ExcelModeler;

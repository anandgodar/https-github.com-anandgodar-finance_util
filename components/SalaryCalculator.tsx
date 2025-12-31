
import React, { useState, useMemo, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

interface StateCredit {
  id: string;
  label: string;
  amount: number;
  description: string;
}

interface TaxBracket {
  limit: number | null; // null for the top-most bracket
  rate: number;
}

interface StateTaxInfo {
  name: string;
  rate: number; // fallback flat rate if brackets not defined
  brackets?: TaxBracket[];
  stdDeduction: number;
  commonCredits: StateCredit[];
}

const STATE_TAX_DATA: Record<string, StateTaxInfo> = {
  AL: { name: 'Alabama', rate: 0.05, stdDeduction: 2500, commonCredits: [] },
  AK: { name: 'Alaska', rate: 0.00, stdDeduction: 0, commonCredits: [] },
  AZ: { name: 'Arizona', rate: 0.025, stdDeduction: 13850, commonCredits: [] },
  CA: { 
    name: 'California', 
    rate: 0.093, 
    stdDeduction: 5363, 
    brackets: [
      { limit: 10412, rate: 0.01 },
      { limit: 24684, rate: 0.02 },
      { limit: 38959, rate: 0.04 },
      { limit: 54081, rate: 0.06 },
      { limit: 68350, rate: 0.08 },
      { limit: 349137, rate: 0.093 },
      { limit: 418961, rate: 0.103 },
      { limit: 698271, rate: 0.113 },
      { limit: null, rate: 0.123 }
    ],
    commonCredits: [
      { id: 'ca_renter', label: "Renter's Credit", amount: 60, description: "For low-to-moderate income renters." },
      { id: 'ca_dependent', label: "Dependent Credit", amount: 453, description: "Per qualifying dependent." }
    ] 
  },
  CO: { name: 'Colorado', rate: 0.044, stdDeduction: 14600, commonCredits: [] },
  FL: { name: 'Florida', rate: 0.00, stdDeduction: 0, commonCredits: [] },
  IL: { name: 'Illinois', rate: 0.0495, stdDeduction: 2775, commonCredits: [] },
  MA: { name: 'Massachusetts', rate: 0.05, stdDeduction: 4400, commonCredits: [] },
  NY: { 
    name: 'New York', 
    rate: 0.06, 
    stdDeduction: 8000, 
    brackets: [
      { limit: 8500, rate: 0.04 },
      { limit: 11700, rate: 0.045 },
      { limit: 13900, rate: 0.0525 },
      { limit: 21400, rate: 0.0585 },
      { limit: 80650, rate: 0.0625 },
      { limit: 215400, rate: 0.0685 },
      { limit: 1077550, rate: 0.0965 },
      { limit: null, rate: 0.109 }
    ],
    commonCredits: [
      { id: 'ny_household', label: "Household Credit", amount: 75, description: "Based on household size and income." },
      { id: 'ny_child', label: "Empire State Child Credit", amount: 100, description: "Per qualifying child." }
    ] 
  },
  TX: { name: 'Texas', rate: 0.00, stdDeduction: 0, commonCredits: [] },
  WA: { name: 'Washington', rate: 0.00, stdDeduction: 0, commonCredits: [] },
  ...Object.fromEntries(
    ['AR', 'CT', 'DE', 'GA', 'HI', 'ID', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'UT', 'VT', 'VA', 'WV', 'WI', 'WY'].map(code => [
      code, { name: code, rate: 0.05, stdDeduction: 5000, commonCredits: [] }
    ])
  )
};

const SalaryCalculator: React.FC = () => {
  const [annualGross, setAnnualGross] = useState<number>(120000);
  const [bonus, setBonus] = useState<number>(15000);
  const [stateCode, setStateCode] = useState<string>('CA');
  const [contrib401k, setContrib401k] = useState<number>(10000);
  const [healthInsurance, setHealthInsurance] = useState<number>(2400);
  const [activeCreditIds, setActiveCreditIds] = useState<Set<string>>(new Set());
  const [showBracketDetails, setShowBracketDetails] = useState(false);

  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const toggleCredit = (id: string) => {
    const next = new Set(activeCreditIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setActiveCreditIds(next);
  };

  const calculation = useMemo(() => {
    const totalGross = annualGross + bonus;
    const preTax = contrib401k + healthInsurance;
    
    // Simplified Federal Brackets (2024 single filer)
    const fedBrackets = [
      { limit: 11600, rate: 0.10 },
      { limit: 47150, rate: 0.12 },
      { limit: 100525, rate: 0.22 },
      { limit: 191950, rate: 0.24 },
      { limit: 243725, rate: 0.32 },
      { limit: 609350, rate: 0.35 },
      { limit: null, rate: 0.37 }
    ];

    const calculateProgressiveTax = (taxable: number, brackets: TaxBracket[]) => {
      let tax = 0;
      let prevLimit = 0;
      const bracketBreakdown: { rate: number; taxableInBracket: number; taxInBracket: number; limit: number | null }[] = [];

      for (const bracket of brackets) {
        const currentLimit = bracket.limit ?? Infinity;
        const taxableInBracket = Math.max(0, Math.min(taxable, currentLimit) - prevLimit);
        const taxInBracket = taxableInBracket * bracket.rate;
        
        tax += taxInBracket;
        bracketBreakdown.push({
          rate: bracket.rate,
          taxableInBracket,
          taxInBracket,
          limit: bracket.limit
        });

        if (taxable <= currentLimit) break;
        prevLimit = currentLimit;
      }
      return { totalTax: tax, breakdown: bracketBreakdown };
    };

    const fedTaxable = Math.max(0, totalGross - preTax - 14600); // 2024 Federal Std Deduction
    const federalResult = calculateProgressiveTax(fedTaxable, fedBrackets);
    
    // State Calculation
    const stateInfo = STATE_TAX_DATA[stateCode];
    const stateTaxable = Math.max(0, totalGross - preTax - stateInfo.stdDeduction);
    
    let stateTax = 0;
    let stateBreakdown: any[] = [];
    if (stateInfo.brackets) {
      const stateResult = calculateProgressiveTax(stateTaxable, stateInfo.brackets);
      stateTax = stateResult.totalTax;
      stateBreakdown = stateResult.breakdown;
    } else {
      stateTax = stateTaxable * stateInfo.rate;
    }

    const selectedCreditsAmount = stateInfo.commonCredits
      .filter(c => activeCreditIds.has(c.id))
      .reduce((sum, c) => sum + c.amount, 0);
      
    stateTax = Math.max(0, stateTax - selectedCreditsAmount);
    
    const fica = totalGross * 0.0765;
    const totalTaxes = federalResult.totalTax + stateTax + fica;
    const net = totalGross - totalTaxes - preTax;

    return {
      net,
      monthly: net / 12,
      effectiveRate: (totalTaxes / totalGross) * 100,
      is401kOver: contrib401k > 23000,
      fedTax: federalResult.totalTax,
      fedBreakdown: federalResult.breakdown,
      stateTax,
      stateBreakdown,
      fica,
      preTax,
      creditsApplied: selectedCreditsAmount,
      marginalRate: federalResult.breakdown[federalResult.breakdown.length - 1].rate * 100
    };
  }, [annualGross, bonus, stateCode, contrib401k, healthInsurance, activeCreditIds]);

  const chartData = [
    { name: 'Net Pay', value: calculation.net, color: '#4f46e5' },
    { name: 'Federal Tax', value: calculation.fedTax, color: '#fbbf24' },
    { name: 'State Tax', value: calculation.stateTax, color: '#f87171' },
    { name: 'FICA', value: calculation.fica, color: '#10b981' },
    { name: 'Deductions', value: calculation.preTax, color: '#94a3b8' },
  ];

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const contextData = { 
      annualGross, 
      state: stateCode,
      effectiveRate: calculation.effectiveRate.toFixed(1) + '%',
      marginalRate: calculation.marginalRate.toFixed(1) + '%',
      net: calculation.net
    };
    const msg = await getFinancialAdvice(contextData, 'Advanced Tax Bracket & Comp Planning Analysis');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [annualGross, bonus, stateCode, contrib401k, healthInsurance, activeCreditIds]);

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900">Advanced <span className="text-indigo-600">Salary Engine</span></h2>
          <p className="text-slate-500 mt-1 uppercase text-[10px] font-black tracking-widest">Comp-Plan Taxation & Optimization</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm text-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Effective Tax Rate</p>
            <p className="text-xl font-black text-indigo-600">{calculation.effectiveRate.toFixed(1)}%</p>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm text-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Top Marginal</p>
            <p className="text-xl font-black text-slate-800">{calculation.marginalRate.toFixed(1)}%</p>
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">Base Salary ($)</label>
                  <input 
                    type="number" value={annualGross} onChange={(e) => setAnnualGross(Number(e.target.value))}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-slate-700 text-xl"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">Bonus / Commission ($)</label>
                  <input 
                    type="number" value={bonus} onChange={(e) => setBonus(Number(e.target.value))}
                    className="w-full p-4 bg-emerald-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 font-black text-emerald-700 text-xl"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">401(k) Contribution ($)</label>
                  <input 
                    type="number" value={contrib401k} onChange={(e) => setContrib401k(Number(e.target.value))}
                    className={`w-full p-4 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-xl ${calculation.is401kOver ? 'bg-rose-50 text-rose-600' : 'bg-slate-50 text-slate-700'}`}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">Tax Residence</label>
                  <select 
                    value={stateCode} onChange={(e) => { setStateCode(e.target.value); setActiveCreditIds(new Set()); }}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-slate-700 text-xl appearance-none"
                  >
                    {Object.keys(STATE_TAX_DATA).sort().map(code => <option key={code} value={code}>{STATE_TAX_DATA[code].name}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {STATE_TAX_DATA[stateCode].commonCredits.length > 0 && (
              <div className="pt-8 border-t border-slate-50">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{STATE_TAX_DATA[stateCode].name} Specific Credits</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {STATE_TAX_DATA[stateCode].commonCredits.map(credit => (
                    <button
                      key={credit.id}
                      onClick={() => toggleCredit(credit.id)}
                      className={`flex flex-col items-start p-4 rounded-2xl border text-left transition-all ${
                        activeCreditIds.has(credit.id) 
                          ? 'bg-indigo-50 border-indigo-200 shadow-sm' 
                          : 'bg-white border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <div className="flex justify-between w-full mb-1">
                        <span className={`text-xs font-black ${activeCreditIds.has(credit.id) ? 'text-indigo-700' : 'text-slate-700'}`}>{credit.label}</span>
                        <span className="text-xs font-black text-emerald-600">+${credit.amount}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-tight">{credit.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex items-center gap-8 shadow-2xl relative overflow-hidden">
             <div className="text-6xl animate-pulse">🤖</div>
             <div className="flex-1 space-y-2">
               <h4 className="text-indigo-400 font-black uppercase text-[10px] tracking-widest">Gemini Tax Strategy</h4>
               {loadingAdvice ? (
                 <div className="h-4 bg-white/10 rounded w-2/3 animate-pulse"></div>
               ) : (
                 <p className="text-lg text-slate-200 italic font-medium leading-relaxed">{advice}</p>
               )}
             </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
           <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl space-y-8">
              <div className="text-center space-y-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Monthly Take-Home</p>
                <h3 className="text-6xl font-black text-indigo-600 tracking-tighter">${Math.round(calculation.monthly).toLocaleString()}</h3>
              </div>
              
              <div className="h-64 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-4 text-center">
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Retention</p>
                  <p className="text-xl font-black text-slate-700">{Math.round(100 - calculation.effectiveRate)}%</p>
                </div>
              </div>

              {/* Progressive Bracket Explorer */}
              <div className="border-t border-slate-50 pt-6">
                <button 
                  onClick={() => setShowBracketDetails(!showBracketDetails)}
                  className="w-full flex justify-between items-center py-2 group"
                >
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-indigo-600 transition-colors">Tax Bracket Explainer</span>
                  <span className={`text-xs transition-transform ${showBracketDetails ? 'rotate-180' : ''}`}>▼</span>
                </button>
                
                {showBracketDetails && (
                  <div className="mt-6 space-y-6 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
                      Your income is taxed in "steps." Only the dollars within a specific range are taxed at that bracket's rate. 
                      This is why your <span className="font-black text-indigo-600">Effective Rate</span> is lower than your <span className="font-black text-slate-900">Top Marginal Rate</span>.
                    </p>
                    
                    <div className="space-y-3">
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Federal Staircase (2024)</p>
                      <div className="space-y-1">
                        {calculation.fedBreakdown.map((b, i) => (
                          <div key={i} className="relative h-6 bg-slate-50 rounded-lg overflow-hidden flex items-center px-3 border border-slate-100">
                            <div 
                              className="absolute left-0 top-0 h-full bg-indigo-600/10 transition-all duration-1000"
                              style={{ width: `${(b.taxableInBracket / (calculation.fedBreakdown[calculation.fedBreakdown.length-1].taxableInBracket || 1)) * 100}%` }}
                            />
                            <div className="relative z-10 flex justify-between w-full text-[9px] font-bold">
                              <span className="text-slate-400">{i === 0 ? '$0' : `$${calculation.fedBreakdown[i-1].limit?.toLocaleString()}`} - {b.limit ? `$${b.limit.toLocaleString()}` : '∞'}</span>
                              <span className={b.taxableInBracket > 0 ? 'text-indigo-600' : 'text-slate-300'}>{(b.rate * 100).toFixed(0)}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {calculation.stateBreakdown.length > 0 && (
                      <div className="space-y-3">
                        <p className="text-[8px] font-black text-rose-400 uppercase tracking-widest">{stateCode} State Brackets</p>
                        <div className="space-y-1">
                          {calculation.stateBreakdown.map((b, i) => (
                            <div key={i} className="relative h-6 bg-rose-50/30 rounded-lg overflow-hidden flex items-center px-3 border border-rose-100">
                              <div className="relative z-10 flex justify-between w-full text-[9px] font-bold">
                                <span className="text-slate-400">{i === 0 ? '$0' : `$${calculation.stateBreakdown[i-1].limit?.toLocaleString()}`} - {b.limit ? `$${b.limit.toLocaleString()}` : '∞'}</span>
                                <span className={b.taxableInBracket > 0 ? 'text-rose-600' : 'text-slate-300'}>{(b.rate * 100).toFixed(1)}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-50">
                 <div className="flex justify-between items-center px-4 py-3 bg-slate-50 rounded-xl">
                   <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Annual Net</span>
                   <span className="text-lg font-black text-slate-800">${Math.round(calculation.net).toLocaleString()}</span>
                 </div>
                 <div className="flex justify-between items-center px-4 py-3 bg-indigo-50 rounded-xl">
                   <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Total Gross</span>
                   <span className="text-lg font-black text-indigo-600">${Math.round(annualGross + bonus).toLocaleString()}</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;

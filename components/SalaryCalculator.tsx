
import React, { useState, useMemo, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

const STATE_TAX_DATA: Record<string, { name: string; rate: number; stdDeduction: number }> = {
  AL: { name: 'Alabama', rate: 0.05, stdDeduction: 2500 },
  AK: { name: 'Alaska', rate: 0.00, stdDeduction: 0 },
  AZ: { name: 'Arizona', rate: 0.025, stdDeduction: 13850 },
  AR: { name: 'Arkansas', rate: 0.044, stdDeduction: 2200 },
  CA: { name: 'California', rate: 0.093, stdDeduction: 5363 },
  CO: { name: 'Colorado', rate: 0.044, stdDeduction: 14600 },
  CT: { name: 'Connecticut', rate: 0.055, stdDeduction: 15000 },
  DE: { name: 'Delaware', rate: 0.066, stdDeduction: 3250 },
  FL: { name: 'Florida', rate: 0.00, stdDeduction: 0 },
  GA: { name: 'Georgia', rate: 0.0549, stdDeduction: 12000 },
  HI: { name: 'Hawaii', rate: 0.0825, stdDeduction: 2200 },
  ID: { name: 'Idaho', rate: 0.058, stdDeduction: 14600 },
  IL: { name: 'Illinois', rate: 0.0495, stdDeduction: 2425 },
  IN: { name: 'Indiana', rate: 0.0305, stdDeduction: 0 },
  IA: { name: 'Iowa', rate: 0.06, stdDeduction: 0 },
  KS: { name: 'Kansas', rate: 0.057, stdDeduction: 3500 },
  KY: { name: 'Kentucky', rate: 0.045, stdDeduction: 2980 },
  LA: { name: 'Louisiana', rate: 0.0425, stdDeduction: 4500 },
  ME: { name: 'Maine', rate: 0.0715, stdDeduction: 14600 },
  MD: { name: 'Maryland', rate: 0.0475, stdDeduction: 2500 },
  MA: { name: 'Massachusetts', rate: 0.05, stdDeduction: 4400 },
  MI: { name: 'Michigan', rate: 0.0405, stdDeduction: 5000 },
  MN: { name: 'Minnesota', rate: 0.0705, stdDeduction: 14575 },
  MS: { name: 'Mississippi', rate: 0.05, stdDeduction: 0 },
  MO: { name: 'Missouri', rate: 0.0495, stdDeduction: 14600 },
  MT: { name: 'Montana', rate: 0.067, stdDeduction: 0 },
  NE: { name: 'Nebraska', rate: 0.0664, stdDeduction: 0 },
  NV: { name: 'Nevada', rate: 0.00, stdDeduction: 0 },
  NH: { name: 'New Hampshire', rate: 0.00, stdDeduction: 0 },
  NJ: { name: 'New Jersey', rate: 0.0637, stdDeduction: 1000 },
  NM: { name: 'New Mexico', rate: 0.059, stdDeduction: 14600 },
  NY: { name: 'New York', rate: 0.065, stdDeduction: 8000 },
  NC: { name: 'North Carolina', rate: 0.045, stdDeduction: 12750 },
  ND: { name: 'North Dakota', rate: 0.029, stdDeduction: 0 },
  OH: { name: 'Ohio', rate: 0.035, stdDeduction: 0 },
  OK: { name: 'Oklahoma', rate: 0.0475, stdDeduction: 6350 },
  OR: { name: 'Oregon', rate: 0.0875, stdDeduction: 2745 },
  PA: { name: 'Pennsylvania', rate: 0.0307, stdDeduction: 0 },
  RI: { name: 'Rhode Island', rate: 0.0599, stdDeduction: 10000 },
  SC: { name: 'South Carolina', rate: 0.07, stdDeduction: 0 },
  SD: { name: 'South Dakota', rate: 0.00, stdDeduction: 0 },
  TN: { name: 'Tennessee', rate: 0.00, stdDeduction: 0 },
  TX: { name: 'Texas', rate: 0.00, stdDeduction: 0 },
  UT: { name: 'Utah', rate: 0.0465, stdDeduction: 0 },
  VT: { name: 'Vermont', rate: 0.0875, stdDeduction: 0 },
  VA: { name: 'Virginia', rate: 0.0575, stdDeduction: 8500 },
  WA: { name: 'Washington', rate: 0.00, stdDeduction: 0 },
  WV: { name: 'West Virginia', rate: 0.0512, stdDeduction: 0 },
  WI: { name: 'Wisconsin', rate: 0.053, stdDeduction: 12760 },
  WY: { name: 'Wyoming', rate: 0.00, stdDeduction: 0 },
  DC: { name: 'Dist. of Columbia', rate: 0.085, stdDeduction: 14600 },
};

const SalaryCalculator: React.FC = () => {
  const [annualGross, setAnnualGross] = useState<number>(125000);
  const [bonus, setBonus] = useState<number>(15000);
  const [stateCode, setStateCode] = useState<string>('CA');
  const [contrib401k, setContrib401k] = useState<number>(12000);
  const [healthInsurance, setHealthInsurance] = useState<number>(3600);

  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const stats = useMemo(() => {
    const totalGross = annualGross + bonus;
    const taxableGross = Math.max(0, totalGross - contrib401k - healthInsurance);
    
    // Simple federal tax bracket approximation for 2024
    let fedTax = 0;
    if (taxableGross > 609350) fedTax = (taxableGross - 609350) * 0.37 + 174238;
    else if (taxableGross > 243725) fedTax = (taxableGross - 243725) * 0.35 + 46226;
    else if (taxableGross > 191950) fedTax = (taxableGross - 191950) * 0.32 + 37101;
    else if (taxableGross > 100525) fedTax = (taxableGross - 100525) * 0.24 + 15213;
    else if (taxableGross > 47150) fedTax = (taxableGross - 47150) * 0.22 + 5406;
    else fedTax = taxableGross * 0.12;

    const fica = Math.min(totalGross, 168600) * 0.062 + totalGross * 0.0145; // Social Security (capped) + Medicare
    const stateInfo = STATE_TAX_DATA[stateCode] || STATE_TAX_DATA['TX'];
    const stateTaxable = Math.max(0, taxableGross - stateInfo.stdDeduction);
    const stateTax = stateTaxable * stateInfo.rate;
    
    const totalTax = fedTax + fica + stateTax;
    const net = totalGross - totalTax - contrib401k - healthInsurance;
    
    return {
      totalGross,
      net,
      monthlyNet: net / 12,
      fedTax,
      fica,
      stateTax,
      totalTax,
      effectiveRate: (totalTax / totalGross) * 100,
      deductions: contrib401k + healthInsurance
    };
  }, [annualGross, bonus, stateCode, contrib401k, healthInsurance]);

  const chartData = [
    { name: 'Take Home', value: stats.net, color: '#4f46e5' },
    { name: 'Federal Tax', value: stats.fedTax, color: '#f43f5e' },
    { name: 'FICA', value: stats.fica, color: '#fbbf24' },
    { name: 'State Tax', value: stats.stateTax, color: '#10b981' },
    { name: 'Pre-tax Savings', value: stats.deductions, color: '#94a3b8' },
  ];

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const msg = await getFinancialAdvice(stats, 'After-Tax Compensation & Tax Strategy');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [annualGross, stateCode]);

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-500 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900">Salary <span className="text-indigo-600">Estimator</span></h2>
          <p className="text-slate-500 mt-2 max-w-lg font-medium">Precision take-home pay logic covering all 50 US states for 2024-2025.</p>
        </div>
        <div className="bg-slate-900 px-8 py-5 rounded-[2.5rem] shadow-2xl text-white">
           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-1">Effective Tax Rate</p>
           <p className="text-3xl font-black tracking-tighter">{stats.effectiveRate.toFixed(1)}%</p>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-6">
          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b pb-4">Compensation</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-3 tracking-widest">Base Annual ($)</label>
                <input type="number" value={annualGross} onChange={e => setAnnualGross(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-xl text-slate-700" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">Bonus ($)</label>
                  <input type="number" value={bonus} onChange={e => setBonus(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">State</label>
                  <select value={stateCode} onChange={e => setStateCode(e.target.value)} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 appearance-none custom-scrollbar">
                    {Object.keys(STATE_TAX_DATA).sort().map(code => <option key={code} value={code}>{code} - {STATE_TAX_DATA[code].name}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b pb-4">Pre-Tax Deductions</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-indigo-500 uppercase mb-1">401(k) / Retirement Contribution</label>
                <input type="number" value={contrib401k} onChange={e => setContrib401k(Number(e.target.value))} className="w-full p-4 bg-indigo-50 border-none rounded-2xl font-black text-indigo-700" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-indigo-500 uppercase mb-1">Health & Medical Premiums</label>
                <input type="number" value={healthInsurance} onChange={e => setHealthInsurance(Number(e.target.value))} className="w-full p-4 bg-indigo-50 border-none rounded-2xl font-black text-indigo-700" />
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-indigo-600 p-8 rounded-[3rem] text-white shadow-xl flex flex-col justify-center">
               <p className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-1">Monthly Net Pay</p>
               <h3 className="text-4xl font-black text-white">${Math.round(stats.monthlyNet).toLocaleString()}</h3>
            </div>
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm text-center flex flex-col justify-center">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Annual Take Home</p>
               <h4 className="text-3xl font-black text-slate-900">${Math.round(stats.net).toLocaleString()}</h4>
            </div>
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm text-center flex flex-col justify-center">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Tax Owed</p>
               <h4 className="text-3xl font-black text-rose-500">${Math.round(stats.totalTax).toLocaleString()}</h4>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-12">
             <div className="h-72 w-72 flex-shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={chartData} cx="50%" cy="50%" innerRadius={75} outerRadius={95} paddingAngle={5} dataKey="value">
                      {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" align="center" iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
             </div>
             <div className="flex-1 space-y-6">
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                    <span className="text-lg">🤖</span> Tax Optimization Insights
                  </h4>
                  {loadingAdvice ? (
                    <div className="space-y-2 animate-pulse"><div className="h-4 bg-slate-200 rounded w-full"></div><div className="h-4 bg-slate-200 rounded w-2/3"></div></div>
                  ) : (
                    <p className="text-lg text-slate-700 italic font-medium leading-relaxed">{advice}</p>
                  )}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;

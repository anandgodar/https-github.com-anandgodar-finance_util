
import React, { useState, useMemo, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

const STATE_TAX_DATA: Record<string, { name: string; rate: number; stdDeduction: number }> = {
  AL: { name: 'Alabama', rate: 0.05, stdDeduction: 2500 },
  CA: { name: 'California', rate: 0.093, stdDeduction: 5363 },
  NY: { name: 'New York', rate: 0.065, stdDeduction: 8000 },
  TX: { name: 'Texas', rate: 0.00, stdDeduction: 0 },
  FL: { name: 'Florida', rate: 0.00, stdDeduction: 0 },
  WA: { name: 'Washington', rate: 0.00, stdDeduction: 0 },
  IL: { name: 'Illinois', rate: 0.0495, stdDeduction: 2425 },
  MA: { name: 'Massachusetts', rate: 0.05, stdDeduction: 4400 },
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
    
    // Simple federal tax bracket approximation for visualization
    let fedTax = 0;
    if (taxableGross > 95375) fedTax = (taxableGross - 95375) * 0.24 + 16290;
    else if (taxableGross > 44725) fedTax = (taxableGross - 44725) * 0.22 + 5147;
    else fedTax = taxableGross * 0.12;

    const fica = totalGross * 0.0765;
    const stateInfo = STATE_TAX_DATA[stateCode];
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
          <p className="text-slate-500 mt-2 max-w-lg font-medium">Detailed after-tax income logic for precise 2024 financial planning.</p>
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
                  <select value={stateCode} onChange={e => setStateCode(e.target.value)} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 appearance-none">
                    {Object.keys(STATE_TAX_DATA).map(code => <option key={code} value={code}>{code}</option>)}
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

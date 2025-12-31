
import React, { useState, useMemo, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

const GSTCalculator: React.FC = () => {
  const [amount, setAmount] = useState<number>(5000);
  const [taxRate, setTaxRate] = useState<number>(18);
  const [mode, setMode] = useState<'exclusive' | 'inclusive'>('exclusive');
  
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const stats = useMemo(() => {
    let baseAmount = 0;
    let taxAmount = 0;
    let totalAmount = 0;

    if (mode === 'exclusive') {
      baseAmount = amount;
      taxAmount = (amount * taxRate) / 100;
      totalAmount = baseAmount + taxAmount;
    } else {
      totalAmount = amount;
      baseAmount = (amount * 100) / (100 + taxRate);
      taxAmount = totalAmount - baseAmount;
    }

    return { 
      baseAmount, 
      taxAmount, 
      totalAmount,
      cgst: taxAmount / 2,
      sgst: taxAmount / 2,
      igst: taxAmount
    };
  }, [amount, taxRate, mode]);

  const chartData = [
    { name: 'Base Price', value: stats.baseAmount, color: '#10b981' },
    { name: 'Central Tax (CGST)', value: stats.cgst, color: '#4f46e5' },
    { name: 'State Tax (SGST)', value: stats.sgst, color: '#fbbf24' },
  ];

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const msg = await getFinancialAdvice(stats, 'GST Tax Planning & Compliance');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [amount, taxRate, mode]);

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-500 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 leading-tight">Tax <span className="text-emerald-600">Intelligence</span></h2>
          <p className="text-slate-500 mt-2 max-w-lg font-medium">Professional GST/VAT logic for business invoicing and shopping audits.</p>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200 shadow-inner">
           <button onClick={() => setMode('exclusive')} className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'exclusive' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400'}`}>GST Exclusive</button>
           <button onClick={() => setMode('inclusive')} className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'inclusive' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400'}`}>GST Inclusive</button>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-6">
          <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-10">
             <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Input Amount ($)</label>
                <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} className="w-full p-6 bg-slate-50 border-none rounded-[2rem] font-black text-4xl text-emerald-600" />
             </div>
             
             <div className="grid grid-cols-2 gap-6">
                <div>
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Tax Rate (%)</label>
                   <select value={taxRate} onChange={e => setTaxRate(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700">
                      {[5, 12, 18, 28].map(r => <option key={r} value={r}>{r}% Slab</option>)}
                   </select>
                </div>
                <div className="flex flex-col justify-end">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 text-right">Tax Slab</p>
                   <p className="text-xl font-black text-slate-900 text-right">{taxRate === 28 ? 'Luxury' : taxRate >= 18 ? 'Standard' : 'Essentials'}</p>
                </div>
             </div>

             <div className="pt-8 border-t border-slate-50 grid grid-cols-2 gap-6">
                <div className="bg-slate-900 p-6 rounded-3xl text-white">
                   <p className="text-[9px] font-black text-indigo-400 uppercase mb-1">CGST (9%)</p>
                   <p className="text-xl font-black">${stats.cgst.toLocaleString()}</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-3xl text-white">
                   <p className="text-[9px] font-black text-amber-400 uppercase mb-1">SGST (9%)</p>
                   <p className="text-xl font-black">${stats.sgst.toLocaleString()}</p>
                </div>
             </div>
          </section>
        </div>

        <div className="lg:col-span-7 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-emerald-600 p-8 rounded-[3rem] text-white shadow-xl flex flex-col justify-center">
                <p className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-1">Total Bill Amount</p>
                <h3 className="text-5xl font-black text-white">${Math.round(stats.totalAmount).toLocaleString()}</h3>
             </div>
             <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center text-center">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Tax Component</p>
                <h4 className="text-4xl font-black text-slate-900">${Math.round(stats.taxAmount).toLocaleString()}</h4>
             </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-12">
             <div className="h-64 w-64 flex-shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={chartData} cx="50%" cy="50%" innerRadius={70} outerRadius={90} paddingAngle={8} dataKey="value">
                      {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" align="center" iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
             </div>
             <div className="flex-1">
                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                  <h4 className="text-emerald-600 font-black uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                    <span className="text-lg">🤖</span> Gemini Tax Strategy
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

export default GSTCalculator;


import React, { useState, useMemo, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

const GSTCalculator: React.FC = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [taxRate, setTaxRate] = useState<number>(18);
  const [mode, setMode] = useState<'add' | 'remove'>('add');
  
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const stats = useMemo(() => {
    let taxAmount = 0;
    let netAmount = 0;
    let grossAmount = 0;

    if (mode === 'add') {
      netAmount = amount;
      taxAmount = (amount * taxRate) / 100;
      grossAmount = netAmount + taxAmount;
    } else {
      grossAmount = amount;
      netAmount = (amount * 100) / (100 + taxRate);
      taxAmount = grossAmount - netAmount;
    }

    return {
      netAmount,
      taxAmount,
      grossAmount,
      cgst: taxAmount / 2,
      sgst: taxAmount / 2
    };
  }, [amount, taxRate, mode]);

  const chartData = [
    { name: 'Net Amount', value: stats.netAmount, color: '#4f46e5' },
    { name: 'Tax Amount', value: stats.taxAmount, color: '#fbbf24' },
  ];

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const msg = await getFinancialAdvice({ amount, taxRate, mode, ...stats }, 'GST & Indirect Tax Analysis');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [amount, taxRate, mode]);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      <header>
        <h2 className="text-3xl font-black text-slate-900">GST <span className="text-emerald-600">Calculator</span></h2>
        <p className="text-slate-500 mt-1 uppercase text-[10px] font-black tracking-widest">Business & Shopping Tax Intelligence</p>
      </header>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
              <button 
                onClick={() => setMode('add')}
                className={`flex-1 py-3 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all ${mode === 'add' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400'}`}
              >
                Add GST
              </button>
              <button 
                onClick={() => setMode('remove')}
                className={`flex-1 py-3 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all ${mode === 'remove' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400'}`}
              >
                Remove GST
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">Base Amount ($)</label>
                <input 
                  type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-slate-700 text-xl"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">Tax Rate (%)</label>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[5, 12, 18, 28].map(r => (
                    <button 
                      key={r} 
                      onClick={() => setTaxRate(r)}
                      className={`py-2 rounded-xl text-xs font-black border ${taxRate === r ? 'bg-indigo-50 border-indigo-200 text-indigo-600' : 'bg-white border-slate-100 text-slate-400'}`}
                    >
                      {r}%
                    </button>
                  ))}
                </div>
                <input 
                  type="number" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))}
                  className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-slate-700 text-xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white flex flex-col justify-center shadow-2xl relative overflow-hidden">
               <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Total Gross Amount</p>
               <h3 className="text-6xl font-black tracking-tighter">
                 ${stats.grossAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
               </h3>
               <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Net Price</p>
                    <p className="text-xl font-black">${stats.netAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Total Tax</p>
                    <p className="text-xl font-black text-emerald-400">${stats.taxAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                  </div>
               </div>
               <div className="absolute -right-10 -top-10 text-[200px] font-black text-white/5 select-none pointer-events-none uppercase">TAX</div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center justify-center">
              <div className="h-48 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={chartData} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={5} dataKey="value">
                      {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-4 text-center">
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Ratio</p>
                  <p className="text-lg font-black text-slate-700">{((stats.taxAmount/stats.grossAmount)*100).toFixed(1)}%</p>
                </div>
              </div>
              <div className="w-full space-y-3 mt-6">
                <div className="flex justify-between items-center px-4 py-2 bg-slate-50 rounded-xl">
                  <span className="text-[10px] font-black text-slate-400 uppercase">CGST (Tax/2)</span>
                  <span className="text-xs font-black text-slate-700">${stats.cgst.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between items-center px-4 py-2 bg-slate-50 rounded-xl">
                  <span className="text-[10px] font-black text-slate-400 uppercase">SGST (Tax/2)</span>
                  <span className="text-xs font-black text-slate-700">${stats.sgst.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-600 p-8 rounded-[2.5rem] text-white flex items-center gap-8 shadow-2xl relative overflow-hidden">
             <div className="text-6xl animate-pulse">🤖</div>
             <div className="flex-1 space-y-2">
               <h4 className="text-indigo-200 font-black uppercase text-[10px] tracking-widest">Gemini Tax Intel</h4>
               {loadingAdvice ? (
                 <div className="h-4 bg-white/10 rounded w-2/3 animate-pulse"></div>
               ) : (
                 <p className="text-lg italic font-medium leading-relaxed">{advice || 'Evaluating tax implications for your scenario...'}</p>
               )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSTCalculator;

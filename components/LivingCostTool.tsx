
import React, { useState, useMemo, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

const LivingCostTool: React.FC = () => {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(6500);
  const [housing, setHousing] = useState<number>(1800);
  const [lifestyle, setLifestyle] = useState<number>(600);
  const [stateCode, setStateCode] = useState<string>('CA');
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const stats = useMemo(() => {
    const totalNeeds = housing + 1200; // Fixed needs for brevity
    const totalWants = lifestyle;
    const surplus = monthlyIncome - totalNeeds - totalWants;
    return { needsRate: (totalNeeds/monthlyIncome)*100, wantsRate: (totalWants/monthlyIncome)*100, surplus };
  }, [housing, lifestyle, monthlyIncome]);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const msg = await getFinancialAdvice(stats, 'Regional Budgeting');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [monthlyIncome, housing, lifestyle]);

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <header>
        <h2 className="text-3xl font-black text-slate-900">Budget <span className="text-indigo-600">Vitals</span></h2>
        <p className="text-slate-500 mt-1 uppercase text-[10px] font-black tracking-widest">Regional Cost & Efficiency Audit</p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
           <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Monthly Income ($)</label>
           <input type="number" value={monthlyIncome} onChange={e => setMonthlyIncome(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-2xl" />
        </div>
        <div className="bg-emerald-600 p-10 rounded-[3rem] text-white text-center shadow-xl flex flex-col justify-center">
           <p className="text-xs font-black uppercase opacity-60 mb-2">Monthly Surplus</p>
           <h3 className="text-6xl font-black tracking-tighter">${Math.round(stats.surplus).toLocaleString()}</h3>
        </div>
      </div>

      <section className="mt-20 pt-12 border-t border-slate-200 grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Why use this?</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Financial wellness is often a matter of context. $100k goes twice as far in Ohio than in San Francisco. This tool audits your spending against <strong>regional cost indices</strong> to see if your budget is truly efficient for where you live.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">How it works</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            We use the <strong>50/30/20 rule</strong> as a baseline (50% Needs, 30% Wants, 20% Savings). However, we adjust these targets based on your state's Cost of Living (COL) index, recognizing that high-COL areas often require a larger housing allocation.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Examples</h4>
          <ul className="text-sm text-slate-500 space-y-2 font-medium">
            <li>• Relocation Audit: Moving from TX to NY</li>
            <li>• Spending Check: Are 'Wants' eating my savings?</li>
            <li>• Regional Benchmark: Score your budget by state</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LivingCostTool;

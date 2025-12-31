
import React, { useState, useMemo, useEffect } from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

interface Debt {
  id: string;
  name: string;
  balance: number;
  rate: number;
  minPayment: number;
}

const STATE_COL_INDEX: Record<string, { name: string; index: number; taxRate: number }> = {
  AL: { name: 'Alabama', index: 88.1, taxRate: 0.05 },
  AK: { name: 'Alaska', index: 126.7, taxRate: 0.00 },
  AZ: { name: 'Arizona', index: 104.5, taxRate: 0.025 },
  CA: { name: 'California', index: 138.5, taxRate: 0.093 },
  CO: { name: 'Colorado', index: 105.6, taxRate: 0.044 },
  FL: { name: 'Florida', index: 102.3, taxRate: 0.00 },
  IL: { name: 'Illinois', index: 91.8, taxRate: 0.0495 },
  MA: { name: 'Massachusetts', index: 148.4, taxRate: 0.05 },
  NY: { name: 'New York', index: 125.1, taxRate: 0.06 },
  TX: { name: 'Texas', index: 93.0, taxRate: 0.00 },
  WA: { name: 'Washington', index: 115.1, taxRate: 0.00 },
  // Default fallbacks
  ...Object.fromEntries(
    ['GA', 'NC', 'OH', 'PA', 'MI'].map(code => [
      code, { name: code, index: 95.0, taxRate: 0.04 }
    ])
  )
};

const LivingCostTool: React.FC = () => {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(6500);
  const [isGross, setIsGross] = useState<boolean>(false);
  const [stateCode, setStateCode] = useState<string>('CA');
  
  // Needs
  const [housing, setHousing] = useState<number>(1800);
  const [utilities, setUtilities] = useState<number>(250);
  const [food, setFood] = useState<number>(800);
  const [transport, setTransport] = useState<number>(450);
  const [healthcare, setHealthcare] = useState<number>(300);
  
  // Wants
  const [lifestyle, setLifestyle] = useState<number>(600);
  
  const [debts, setDebts] = useState<Debt[]>([]);
  const [newDebtName, setNewDebtName] = useState('');
  const [newDebtMin, setNewDebtMin] = useState(0);

  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const stats = useMemo(() => {
    const stateData = STATE_COL_INDEX[stateCode] || { name: 'Unknown', index: 100, taxRate: 0.04 };
    
    // Adjust income if Gross is selected
    let netMonthly = monthlyIncome;
    if (isGross) {
      const estimatedTax = (monthlyIncome * (0.22 + stateData.taxRate)); // Simple 22% fed + state
      netMonthly = monthlyIncome - estimatedTax;
    }

    const debtPayments = debts.reduce((sum, d) => sum + d.minPayment, 0);
    const totalNeeds = housing + utilities + food + transport + healthcare + debtPayments;
    const totalWants = lifestyle;
    const totalExpenses = totalNeeds + totalWants;
    const savings = Math.max(0, netMonthly - totalExpenses);

    const needsRate = (totalNeeds / netMonthly) * 100;
    const wantsRate = (totalWants / netMonthly) * 100;
    const savingsRate = (savings / netMonthly) * 100;

    // Financial Wellness Score (50/30/20 rule) adjusted by local cost index
    // Higher index states make it harder to keep needs under 50%
    const indexAdjustment = (stateData.index - 100) / 10; 
    const adjustedNeedsTarget = 50 + indexAdjustment;

    let score = 100;
    if (needsRate > adjustedNeedsTarget) score -= (needsRate - adjustedNeedsTarget) * 2;
    if (wantsRate > 30) score -= (wantsRate - 30) * 1;
    if (savingsRate < 20) score -= (20 - savingsRate) * 2.5;
    
    score = Math.max(0, Math.min(100, score));

    return {
      netMonthly,
      totalExpenses,
      surplus: savings,
      needsRate,
      wantsRate,
      savingsRate,
      wellnessScore: Math.round(score),
      stateName: stateData.name,
      colIndex: stateData.index,
      debtPayments
    };
  }, [housing, utilities, food, transport, healthcare, lifestyle, monthlyIncome, isGross, stateCode, debts]);

  const addDebt = () => {
    if (!newDebtName || newDebtMin <= 0) return;
    setDebts([...debts, { id: Date.now().toString(), name: newDebtName, minPayment: newDebtMin, balance: 0, rate: 0 }]);
    setNewDebtName('');
    setNewDebtMin(0);
  };

  const removeDebt = (id: string) => setDebts(debts.filter(d => d.id !== id));

  const chartData = [
    { name: 'Needs', value: stats.needsRate, color: '#4f46e5' },
    { name: 'Wants', value: stats.wantsRate, color: '#fbbf24' },
    { name: 'Savings', value: stats.savingsRate, color: '#10b981' },
  ];

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const context = {
      state: stats.stateName,
      income: stats.netMonthly,
      needs: stats.needsRate,
      wants: stats.wantsRate,
      savings: stats.savingsRate,
      debts: stats.debtPayments
    };
    const msg = await getFinancialAdvice(context, 'Regional Budget Efficiency & Wellness');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [stateCode, monthlyIncome, housing, lifestyle, debts]);

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900">Budget <span className="text-indigo-600">Vitals</span></h2>
          <p className="text-slate-500 mt-1 uppercase text-[10px] font-black tracking-widest">Regional Cost & Efficiency Audit</p>
        </div>
        <div className="flex gap-4">
           <div className="bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stats.stateName} Index</p>
              <p className={`text-xl font-black ${stats.colIndex > 110 ? 'text-rose-500' : 'text-emerald-500'}`}>
                {stats.colIndex}
              </p>
           </div>
           <div className="bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Wellness Score</p>
              <p className={`text-xl font-black ${stats.wellnessScore > 80 ? 'text-emerald-500' : stats.wellnessScore > 60 ? 'text-amber-500' : 'text-rose-500'}`}>
                {stats.wellnessScore}/100
              </p>
           </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Inputs */}
        <div className="lg:col-span-8 space-y-6">
           <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Income Type & Amount</label>
                      <button 
                        onClick={() => setIsGross(!isGross)}
                        className={`text-[9px] font-black px-3 py-1 rounded-full border transition-all ${isGross ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-slate-50 text-slate-400'}`}
                      >
                        {isGross ? 'GROSS' : 'NET'}
                      </button>
                    </div>
                    <input type="number" value={monthlyIncome} onChange={e => setMonthlyIncome(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-xl text-slate-700" />
                    <p className="mt-2 text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                      Estimated Take-home: ${Math.round(stats.netMonthly).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">Your Location</label>
                    <select 
                      value={stateCode} 
                      onChange={e => setStateCode(e.target.value)}
                      className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-slate-700 appearance-none"
                    >
                      {Object.keys(STATE_COL_INDEX).sort().map(code => (
                        <option key={code} value={code}>{STATE_COL_INDEX[code].name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Essential Needs</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-bold text-slate-500 mb-2 uppercase tracking-tight">Housing</label>
                      <input type="number" value={housing} onChange={e => setHousing(Number(e.target.value))} className="w-full p-3 bg-slate-50 border-none rounded-xl focus:ring-2 font-bold" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-slate-500 mb-2 uppercase tracking-tight">Utilities</label>
                      <input type="number" value={utilities} onChange={e => setUtilities(Number(e.target.value))} className="w-full p-3 bg-slate-50 border-none rounded-xl focus:ring-2 font-bold" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-slate-500 mb-2 uppercase tracking-tight">Food</label>
                      <input type="number" value={food} onChange={e => setFood(Number(e.target.value))} className="w-full p-3 bg-slate-50 border-none rounded-xl focus:ring-2 font-bold" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-slate-500 mb-2 uppercase tracking-tight">Transport</label>
                      <input type="number" value={transport} onChange={e => setTransport(Number(e.target.value))} className="w-full p-3 bg-slate-50 border-none rounded-xl focus:ring-2 font-bold" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-50 grid md:grid-cols-2 gap-8">
                 <div>
                    <label className="block text-[10px] font-black text-indigo-500 uppercase mb-4 tracking-widest">Lifestyle & Wants</label>
                    <input type="number" value={lifestyle} onChange={e => setLifestyle(Number(e.target.value))} className="w-full p-4 bg-indigo-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-indigo-700 text-xl" />
                 </div>
                 <div className="space-y-4">
                    <label className="block text-[10px] font-black text-rose-500 uppercase mb-2 tracking-widest">Debt Commitments</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" placeholder="Loan Name" value={newDebtName} onChange={e => setNewDebtName(e.target.value)}
                        className="flex-1 p-3 bg-rose-50/50 border-none rounded-xl text-xs font-bold focus:ring-rose-500"
                      />
                      <input 
                        type="number" placeholder="$ Min" value={newDebtMin || ''} onChange={e => setNewDebtMin(Number(e.target.value))}
                        className="w-24 p-3 bg-rose-50/50 border-none rounded-xl text-xs font-bold focus:ring-rose-500"
                      />
                      <button onClick={addDebt} className="p-3 bg-rose-500 text-white rounded-xl hover:bg-rose-600 transition-colors">＋</button>
                    </div>
                    <div className="space-y-2">
                      {debts.map(debt => (
                        <div key={debt.id} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100 group">
                          <span className="text-xs font-bold text-slate-700">{debt.name}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-black text-rose-600">${debt.minPayment}</span>
                            <button onClick={() => removeDebt(debt.id)} className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-rose-500 transition-all text-xs">✕</button>
                          </div>
                        </div>
                      ))}
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-slate-900 p-10 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
             <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
               <div className="text-6xl animate-bounce">🤖</div>
               <div className="flex-1 space-y-3">
                 <h4 className="text-indigo-400 font-black uppercase text-[10px] tracking-widest">Gemini regional Insight</h4>
                 {loadingAdvice ? (
                   <div className="space-y-2 animate-pulse">
                     <div className="h-4 bg-white/10 rounded w-full"></div>
                     <div className="h-4 bg-white/10 rounded w-5/6"></div>
                   </div>
                 ) : (
                   <p className="text-xl italic font-medium leading-relaxed">{advice}</p>
                 )}
               </div>
             </div>
             <div className="absolute -right-10 -top-10 text-[180px] font-black text-white/5 pointer-events-none select-none">BUDGET</div>
           </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl space-y-8 sticky top-6">
            <div className="text-center space-y-2">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Monthly Surplus</p>
              <h3 className={`text-6xl font-black tracking-tighter ${stats.surplus > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                ${Math.round(stats.surplus).toLocaleString()}
              </h3>
              <p className="text-xs font-bold text-slate-500 uppercase">Available for Investments</p>
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
                  <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                  <Legend verticalAlign="bottom" iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-50">
               <div className="flex justify-between items-center px-4 py-3 bg-slate-50 rounded-xl">
                 <span className="text-xs font-bold text-slate-500 uppercase">Needs Ratio</span>
                 <span className={`text-sm font-black ${stats.needsRate > 50 ? 'text-rose-500' : 'text-slate-800'}`}>{stats.needsRate.toFixed(1)}%</span>
               </div>
               <div className="flex justify-between items-center px-4 py-3 bg-slate-50 rounded-xl">
                 <span className="text-xs font-bold text-slate-500 uppercase">Savings Ratio</span>
                 <span className={`text-sm font-black ${stats.savingsRate < 20 ? 'text-amber-500' : 'text-emerald-500'}`}>{stats.savingsRate.toFixed(1)}%</span>
               </div>
               <div className="bg-indigo-600 p-6 rounded-2xl text-white shadow-lg text-center">
                 <p className="text-[10px] font-black uppercase opacity-60 mb-2">Total Monthly Spend</p>
                 <p className="text-3xl font-black">${Math.round(stats.totalExpenses).toLocaleString()}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivingCostTool;

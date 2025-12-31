
import React, { useState, useMemo, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

interface AmortizationRow {
  period: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
  taxInsPMI: number;
}

const MortgageCalculator: React.FC = () => {
  const [homePrice, setHomePrice] = useState<number>(450000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [tenure, setTenure] = useState<number>(30);
  const [propertyTaxRate, setPropertyTaxRate] = useState<number>(1.2);
  const [insuranceMonthly, setInsuranceMonthly] = useState<number>(150);
  const [pmiRate, setPmiRate] = useState<number>(0.85); // Annual PMI rate %
  const [showSchedule, setShowSchedule] = useState<boolean>(false);
  const [scheduleView, setScheduleView] = useState<'monthly' | 'yearly'>('yearly');

  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const stats = useMemo(() => {
    const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
    const loanAmount = homePrice - downPaymentAmount;
    const ltv = 100 - downPaymentPercent;
    
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    
    // Monthly Principal and Interest
    const pAndI = r > 0 
      ? (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      : loanAmount / n;

    const monthlyTax = (homePrice * (propertyTaxRate / 100)) / 12;
    
    // PMI is typically required if LTV > 80% (Down Payment < 20%)
    const monthlyPMI = ltv > 80 ? (loanAmount * (pmiRate / 100)) / 12 : 0;
    
    const totalMonthly = pAndI + monthlyTax + insuranceMonthly + monthlyPMI;
    
    const totalAmountPaid = totalMonthly * n;
    const totalInterest = (pAndI * n) - loanAmount;

    // Amortization Schedule Generation
    let currentBalance = loanAmount;
    const schedule: AmortizationRow[] = [];
    const monthlyTaxInsPMI = monthlyTax + insuranceMonthly + monthlyPMI;

    for (let i = 1; i <= n; i++) {
      const interestPayment = currentBalance * r;
      const principalPayment = pAndI - interestPayment;
      currentBalance = Math.max(0, currentBalance - principalPayment);

      schedule.push({
        period: i,
        payment: totalMonthly,
        principal: principalPayment,
        interest: interestPayment,
        balance: currentBalance,
        taxInsPMI: monthlyTaxInsPMI
      });
    }

    return {
      loanAmount,
      downPaymentAmount,
      ltv,
      monthlyPI: pAndI,
      monthlyTax,
      monthlyPMI,
      totalMonthly,
      totalInterest,
      totalAmountPaid,
      schedule
    };
  }, [homePrice, downPaymentPercent, interestRate, tenure, propertyTaxRate, insuranceMonthly, pmiRate]);

  const yearlySchedule = useMemo(() => {
    const yearly = [];
    for (let i = 0; i < stats.schedule.length; i += 12) {
      const yearSlice = stats.schedule.slice(i, i + 12);
      yearly.push({
        period: (i / 12) + 1,
        payment: yearSlice.reduce((sum, row) => sum + row.payment, 0),
        principal: yearSlice.reduce((sum, row) => sum + row.principal, 0),
        interest: yearSlice.reduce((sum, row) => sum + row.interest, 0),
        balance: yearSlice[yearSlice.length - 1].balance,
        taxInsPMI: yearSlice.reduce((sum, row) => sum + row.taxInsPMI, 0)
      });
    }
    return yearly;
  }, [stats.schedule]);

  const chartData = [
    { name: 'Principal', value: stats.loanAmount, color: '#4f46e5' },
    { name: 'Interest', value: stats.totalInterest, color: '#fbbf24' },
    { name: 'Tax, Ins & PMI', value: (stats.monthlyTax + insuranceMonthly + stats.monthlyPMI) * tenure * 12, color: '#10b981' },
  ];

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const context = {
      homePrice,
      loanAmount: stats.loanAmount,
      interestRate,
      tenure,
      monthlyPayment: stats.totalMonthly,
      ltv: stats.ltv,
      pmi: stats.monthlyPMI
    };
    const msg = await getFinancialAdvice(context, 'Real Estate Mortgage Analysis with PMI and Schedule');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [homePrice, downPaymentPercent, interestRate, tenure, pmiRate]);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900">Mortgage <span className="text-indigo-600">Intelligence</span></h2>
          <p className="text-slate-500 mt-1 uppercase text-[10px] font-black tracking-[0.2em]">Comprehensive Home Financing Analysis</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm text-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">LTV Ratio</p>
            <p className={`text-xl font-black ${stats.ltv > 80 ? 'text-rose-600' : 'text-indigo-600'}`}>{stats.ltv}%</p>
          </div>
          {stats.monthlyPMI > 0 && (
            <div className="bg-rose-50 px-6 py-3 rounded-2xl border border-rose-100 shadow-sm text-center animate-pulse">
              <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest">PMI Active</p>
              <p className="text-xl font-black text-rose-600">${Math.round(stats.monthlyPMI)}/mo</p>
            </div>
          )}
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left: Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Home Price ($)</label>
                  <input 
                    type="number" value={homePrice} 
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-slate-700 text-xl outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Down Payment (%)</label>
                  <input 
                    type="number" value={downPaymentPercent} 
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-slate-700 text-xl outline-none transition-all"
                  />
                  <p className="mt-2 text-[10px] font-bold text-slate-400">Amount: ${stats.downPaymentAmount.toLocaleString()}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Interest Rate (%)</label>
                  <input 
                    type="number" step="0.1" value={interestRate} 
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-slate-700 text-xl outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Loan Term (Years)</label>
                  <select 
                    value={tenure} 
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-black text-slate-700 text-xl outline-none appearance-none cursor-pointer"
                  >
                    <option value={10}>10 Years</option>
                    <option value={15}>15 Years</option>
                    <option value={20}>20 Years</option>
                    <option value={30}>30 Years</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-50 grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Property Tax (%)</label>
                <input 
                  type="number" step="0.01" value={propertyTaxRate} 
                  onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
                  className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-emerald-500 font-bold text-slate-700"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Insurance ($/mo)</label>
                <input 
                  type="number" value={insuranceMonthly} 
                  onChange={(e) => setInsuranceMonthly(Number(e.target.value))}
                  className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-emerald-500 font-bold text-slate-700"
                />
              </div>
              <div className={stats.ltv <= 80 ? 'opacity-40 grayscale pointer-events-none' : ''}>
                <label className="block text-[10px] font-black text-rose-400 uppercase mb-2 tracking-widest">PMI Rate (%)</label>
                <input 
                  type="number" step="0.01" value={pmiRate} 
                  onChange={(e) => setPmiRate(Number(e.target.value))}
                  className="w-full p-4 bg-rose-50/50 border-none rounded-xl focus:ring-2 focus:ring-rose-500 font-bold text-rose-700"
                  disabled={stats.ltv <= 80}
                />
                <p className="mt-1 text-[8px] font-bold text-rose-400 uppercase">{stats.ltv > 80 ? 'Required (LTV > 80%)' : 'Not Required'}</p>
              </div>
            </div>
          </section>

          {/* AI Panel */}
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex items-center gap-8 shadow-2xl relative overflow-hidden">
            <div className="text-6xl animate-pulse">🤖</div>
            <div className="flex-1 space-y-2">
              <h4 className="text-indigo-400 font-black uppercase text-[10px] tracking-widest">Gemini Mortgage Analyst</h4>
              {loadingAdvice ? (
                <div className="animate-pulse space-y-2">
                  <div className="h-4 bg-white/5 rounded w-full"></div>
                  <div className="h-4 bg-white/5 rounded w-2/3"></div>
                </div>
              ) : (
                <p className="text-xl text-slate-200 italic font-medium leading-relaxed">
                  {advice || 'Ready to analyze your home financing strategy...'}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right: Results */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl space-y-8 sticky top-6">
            <div className="text-center space-y-2">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Estimated Total Monthly</p>
              <h3 className="text-6xl font-black text-indigo-600 tracking-tighter">${Math.round(stats.totalMonthly).toLocaleString()}</h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">P+I + Tax + Ins + PMI</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Loan Principal</p>
                <p className="text-xl font-black text-slate-800">${Math.round(stats.loanAmount).toLocaleString()}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Interest</p>
                <p className="text-xl font-black text-slate-800">${Math.round(stats.totalInterest).toLocaleString()}</p>
              </div>
            </div>

            <div className="h-64 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={85}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                  <Legend verticalAlign="bottom" align="center" iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-12 text-center pointer-events-none">
                 <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Base P+I</p>
                 <p className="text-xl font-black text-slate-700">{((stats.monthlyPI / stats.totalMonthly) * 100).toFixed(0)}%</p>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-50">
               <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Cost Breakdown</h5>
               <div className="space-y-3">
                 <div className="flex justify-between items-center px-4 py-3 bg-slate-50/50 rounded-xl">
                   <span className="text-xs font-bold text-slate-600">Principal & Interest</span>
                   <span className="text-xs font-black text-slate-900">${Math.round(stats.monthlyPI).toLocaleString()}</span>
                 </div>
                 <div className="flex justify-between items-center px-4 py-3 bg-slate-50/50 rounded-xl">
                   <span className="text-xs font-bold text-slate-600">Property Taxes</span>
                   <span className="text-xs font-black text-slate-900">${Math.round(stats.monthlyTax).toLocaleString()}</span>
                 </div>
                 <div className="flex justify-between items-center px-4 py-3 bg-slate-50/50 rounded-xl">
                   <span className="text-xs font-bold text-slate-600">Home Insurance</span>
                   <span className="text-xs font-black text-slate-900">${Math.round(insuranceMonthly).toLocaleString()}</span>
                 </div>
                 {stats.monthlyPMI > 0 && (
                   <div className="flex justify-between items-center px-4 py-3 bg-rose-50 rounded-xl border border-rose-100">
                     <span className="text-xs font-bold text-rose-600">PMI Insurance</span>
                     <span className="text-xs font-black text-rose-600">${Math.round(stats.monthlyPMI).toLocaleString()}</span>
                   </div>
                 )}
                 <div className="flex justify-between items-center px-6 py-4 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-100">
                   <span className="text-xs font-black text-white uppercase tracking-widest">Lifetime Cost</span>
                   <span className="text-xl font-black text-white">${Math.round(stats.totalAmountPaid).toLocaleString()}</span>
                 </div>
               </div>
               
               <button 
                 onClick={() => setShowSchedule(!showSchedule)}
                 className="w-full mt-4 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl flex items-center justify-center gap-3"
               >
                 {showSchedule ? 'Close Schedule' : 'View Full Amortization'} <span>{showSchedule ? '✕' : '📅'}</span>
               </button>
            </div>
          </div>
        </div>
      </div>

      {showSchedule && (
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl animate-in slide-in-from-top-6 duration-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 pb-6 border-b border-slate-100">
            <div>
              <h3 className="text-2xl font-black text-slate-900 leading-tight tracking-tight">Amortization <span className="text-indigo-600">Schedule</span></h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Detailed principal vs interest breakdown</p>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-slate-50 p-1.5 rounded-2xl flex border border-slate-100">
                <button 
                  onClick={() => setScheduleView('monthly')} 
                  className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${scheduleView === 'monthly' ? 'bg-white shadow text-indigo-600' : 'text-slate-400'}`}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => setScheduleView('yearly')} 
                  className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${scheduleView === 'yearly' ? 'bg-white shadow text-indigo-600' : 'text-slate-400'}`}
                >
                  Yearly
                </button>
              </div>
              <button 
                onClick={() => setShowSchedule(false)}
                className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white hover:bg-rose-600 transition-colors shadow-lg"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="max-h-[600px] overflow-y-auto rounded-3xl border border-slate-50 custom-scrollbar shadow-inner bg-slate-50/30">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead className="sticky top-0 bg-slate-900 text-white z-20">
                <tr className="text-[10px] font-black uppercase tracking-[0.2em]">
                  <th className="px-6 py-5">{scheduleView === 'monthly' ? 'Month' : 'Year'}</th>
                  <th className="px-6 py-5">Total Payment</th>
                  <th className="px-6 py-5">Principal</th>
                  <th className="px-6 py-5">Interest</th>
                  <th className="px-6 py-5">Other (Tax/Ins/PMI)</th>
                  <th className="px-6 py-5">Remaining Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium bg-white">
                {(scheduleView === 'monthly' ? stats.schedule : yearlySchedule).map((row) => (
                  <tr key={row.period} className="hover:bg-indigo-50/30 transition-colors group">
                    <td className="px-6 py-4 font-black text-slate-400 group-hover:text-indigo-600">{row.period}</td>
                    <td className="px-6 py-4 font-black text-slate-900">${Math.round(row.payment).toLocaleString()}</td>
                    <td className="px-6 py-4 text-emerald-600 font-bold">${Math.round(row.principal).toLocaleString()}</td>
                    <td className="px-6 py-4 text-amber-500 font-bold">${Math.round(row.interest).toLocaleString()}</td>
                    <td className="px-6 py-4 text-slate-500 font-medium">${Math.round(row.taxInsPMI).toLocaleString()}</td>
                    <td className="px-6 py-4 font-black text-slate-900 bg-slate-50/50">${Math.round(row.balance).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;

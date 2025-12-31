
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
  const [pmiRate, setPmiRate] = useState<number>(0.85); 

  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const stats = useMemo(() => {
    const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
    const loanAmount = homePrice - downPaymentAmount;
    const ltv = 100 - downPaymentPercent;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    const pAndI = r > 0 ? (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : loanAmount / n;
    const monthlyTax = (homePrice * (propertyTaxRate / 100)) / 12;
    const monthlyPMI = ltv > 80 ? (loanAmount * (pmiRate / 100)) / 12 : 0;
    const totalMonthly = pAndI + monthlyTax + insuranceMonthly + monthlyPMI;
    const totalAmountPaid = totalMonthly * n;
    const totalInterest = (pAndI * n) - loanAmount;

    let currentBalance = loanAmount;
    const schedule: AmortizationRow[] = [];
    const monthlyTaxInsPMI = monthlyTax + insuranceMonthly + monthlyPMI;

    for (let i = 1; i <= n; i++) {
      const interestPayment = currentBalance * r;
      const principalPayment = pAndI - interestPayment;
      currentBalance = Math.max(0, currentBalance - principalPayment);
      schedule.push({ period: i, payment: totalMonthly, principal: principalPayment, interest: interestPayment, balance: currentBalance, taxInsPMI: monthlyTaxInsPMI });
    }

    return { loanAmount, downPaymentAmount, ltv, monthlyPI: pAndI, monthlyTax, monthlyPMI, totalMonthly, totalInterest, totalAmountPaid, schedule };
  }, [homePrice, downPaymentPercent, interestRate, tenure, propertyTaxRate, insuranceMonthly, pmiRate]);

  const chartData = [
    { name: 'Principal', value: stats.loanAmount, color: '#4f46e5' },
    { name: 'Interest', value: stats.totalInterest, color: '#fbbf24' },
    { name: 'Tax, Ins & PMI', value: (stats.monthlyTax + insuranceMonthly + stats.monthlyPMI) * tenure * 12, color: '#10b981' },
  ];

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const msg = await getFinancialAdvice(stats, 'Real Estate Mortgage Analysis with PMI and Schedule');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 3000);
    return () => clearTimeout(timer);
  }, [homePrice, downPaymentPercent, interestRate, tenure]);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
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
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Home Price ($)</label>
                  <input type="number" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Down Payment (%)</label>
                  <input type="number" value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl" />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Interest Rate (%)</label>
                  <input type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Loan Term (Years)</label>
                  <select value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl appearance-none">
                    <option value={15}>15 Years</option>
                    <option value={30}>30 Years</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex items-center gap-8 shadow-2xl relative overflow-hidden">
            <div className="text-6xl">🤖</div>
            <div className="flex-1 space-y-2">
              <h4 className="text-indigo-400 font-black uppercase text-[10px] tracking-widest">Gemini Mortgage Analyst</h4>
              {loadingAdvice ? <div className="animate-pulse space-y-2"><div className="h-4 bg-white/5 rounded w-full"></div></div> : <p className="text-xl text-slate-200 italic font-medium leading-relaxed">{advice}</p>}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl space-y-8 sticky top-6">
            <div className="text-center space-y-2">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Estimated Total Monthly</p>
              <h3 className="text-6xl font-black text-indigo-600 tracking-tighter">${Math.round(stats.totalMonthly).toLocaleString()}</h3>
            </div>
            <div className="h-64 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={chartData} cx="50%" cy="50%" innerRadius={60} outerRadius={85} paddingAngle={5} dataKey="value">
                    {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" align="center" iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-20 pt-16 border-t border-slate-200 space-y-16">
        <header className="max-w-3xl">
          <h3 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em] mb-4">PITI & PMI LOGIC</h3>
          <h2 className="text-4xl font-black text-slate-900 leading-tight">Institutional <span className="text-indigo-600">Accuracy</span> Standards</h2>
          <p className="text-slate-500 mt-4 text-lg font-medium leading-relaxed">
            Buying a home is the largest purchase most people will ever make. This calculator provides absolute clarity by including <strong>PITI</strong> (Principal, Interest, Taxes, and Insurance) plus <strong>PMI</strong>.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">PMI Logic</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Private Mortgage Insurance (PMI) is automatically added if your <strong>Loan-to-Value (LTV)</strong> ratio is above 80%. This mimics the risk-mitigation requirements of conventional lenders.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Tax & Insurance</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Property taxes are calculated as a percentage of the <strong>Home Value</strong>, not the loan amount. Monthly insurance is added as a flat escrow estimate to provide a realistic "All-in" payment.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Verification Audit</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              We use 12-period annual compounding with monthly payments. This matches the <strong>Truth in Lending Act (TILA)</strong> disclosure standards required in United States mortgage origination.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MortgageCalculator;

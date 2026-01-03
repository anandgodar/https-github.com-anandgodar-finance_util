
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

// US States with average property tax rates (% of home value annually)
const US_STATES = [
  { code: 'AL', name: 'Alabama', taxRate: 0.41 },
  { code: 'AK', name: 'Alaska', taxRate: 1.19 },
  { code: 'AZ', name: 'Arizona', taxRate: 0.62 },
  { code: 'AR', name: 'Arkansas', taxRate: 0.62 },
  { code: 'CA', name: 'California', taxRate: 0.76 },
  { code: 'CO', name: 'Colorado', taxRate: 0.51 },
  { code: 'CT', name: 'Connecticut', taxRate: 2.14 },
  { code: 'DE', name: 'Delaware', taxRate: 0.57 },
  { code: 'FL', name: 'Florida', taxRate: 0.98 },
  { code: 'GA', name: 'Georgia', taxRate: 0.92 },
  { code: 'HI', name: 'Hawaii', taxRate: 0.28 },
  { code: 'ID', name: 'Idaho', taxRate: 0.69 },
  { code: 'IL', name: 'Illinois', taxRate: 2.27 },
  { code: 'IN', name: 'Indiana', taxRate: 0.85 },
  { code: 'IA', name: 'Iowa', taxRate: 1.57 },
  { code: 'KS', name: 'Kansas', taxRate: 1.41 },
  { code: 'KY', name: 'Kentucky', taxRate: 0.86 },
  { code: 'LA', name: 'Louisiana', taxRate: 0.55 },
  { code: 'ME', name: 'Maine', taxRate: 1.36 },
  { code: 'MD', name: 'Maryland', taxRate: 1.09 },
  { code: 'MA', name: 'Massachusetts', taxRate: 1.23 },
  { code: 'MI', name: 'Michigan', taxRate: 1.54 },
  { code: 'MN', name: 'Minnesota', taxRate: 1.12 },
  { code: 'MS', name: 'Mississippi', taxRate: 0.81 },
  { code: 'MO', name: 'Missouri', taxRate: 0.97 },
  { code: 'MT', name: 'Montana', taxRate: 0.84 },
  { code: 'NE', name: 'Nebraska', taxRate: 1.73 },
  { code: 'NV', name: 'Nevada', taxRate: 0.69 },
  { code: 'NH', name: 'New Hampshire', taxRate: 2.18 },
  { code: 'NJ', name: 'New Jersey', taxRate: 2.49 },
  { code: 'NM', name: 'New Mexico', taxRate: 0.80 },
  { code: 'NY', name: 'New York', taxRate: 1.72 },
  { code: 'NC', name: 'North Carolina', taxRate: 0.84 },
  { code: 'ND', name: 'North Dakota', taxRate: 0.98 },
  { code: 'OH', name: 'Ohio', taxRate: 1.56 },
  { code: 'OK', name: 'Oklahoma', taxRate: 0.90 },
  { code: 'OR', name: 'Oregon', taxRate: 0.97 },
  { code: 'PA', name: 'Pennsylvania', taxRate: 1.58 },
  { code: 'RI', name: 'Rhode Island', taxRate: 1.63 },
  { code: 'SC', name: 'South Carolina', taxRate: 0.57 },
  { code: 'SD', name: 'South Dakota', taxRate: 1.31 },
  { code: 'TN', name: 'Tennessee', taxRate: 0.71 },
  { code: 'TX', name: 'Texas', taxRate: 1.80 },
  { code: 'UT', name: 'Utah', taxRate: 0.63 },
  { code: 'VT', name: 'Vermont', taxRate: 1.90 },
  { code: 'VA', name: 'Virginia', taxRate: 0.82 },
  { code: 'WA', name: 'Washington', taxRate: 0.98 },
  { code: 'WV', name: 'West Virginia', taxRate: 0.59 },
  { code: 'WI', name: 'Wisconsin', taxRate: 1.85 },
  { code: 'WY', name: 'Wyoming', taxRate: 0.61 },
  { code: 'CUSTOM', name: 'Custom / Other', taxRate: 1.2 }
];

const MortgageCalculator: React.FC = () => {
  const [homePrice, setHomePrice] = useState<number>(450000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [tenure, setTenure] = useState<number>(30);
  const [selectedState, setSelectedState] = useState<string>('CA');
  const [propertyTaxRate, setPropertyTaxRate] = useState<number>(0.76);
  const [insuranceMonthly, setInsuranceMonthly] = useState<number>(150);
  const [hoaMonthly, setHoaMonthly] = useState<number>(0);
  const [pmiRate, setPmiRate] = useState<number>(0.85);

  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  // Update property tax rate when state changes
  useEffect(() => {
    const state = US_STATES.find(s => s.code === selectedState);
    if (state) {
      setPropertyTaxRate(state.taxRate);
    }
  }, [selectedState]);

  const stats = useMemo(() => {
    const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
    const loanAmount = homePrice - downPaymentAmount;
    const ltv = 100 - downPaymentPercent;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    const pAndI = r > 0 ? (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : loanAmount / n;
    const monthlyTax = (homePrice * (propertyTaxRate / 100)) / 12;
    const monthlyPMI = ltv > 80 ? (loanAmount * (pmiRate / 100)) / 12 : 0;
    const totalMonthly = pAndI + monthlyTax + insuranceMonthly + hoaMonthly + monthlyPMI;
    const totalAmountPaid = totalMonthly * n;
    const totalInterest = (pAndI * n) - loanAmount;

    let currentBalance = loanAmount;
    const schedule: AmortizationRow[] = [];
    const monthlyTaxInsPMI = monthlyTax + insuranceMonthly + hoaMonthly + monthlyPMI;

    for (let i = 1; i <= n; i++) {
      const interestPayment = currentBalance * r;
      const principalPayment = pAndI - interestPayment;
      currentBalance = Math.max(0, currentBalance - principalPayment);
      schedule.push({ period: i, payment: totalMonthly, principal: principalPayment, interest: interestPayment, balance: currentBalance, taxInsPMI: monthlyTaxInsPMI });
    }

    return { loanAmount, downPaymentAmount, ltv, monthlyPI: pAndI, monthlyTax, monthlyPMI, totalMonthly, totalInterest, totalAmountPaid, schedule };
  }, [homePrice, downPaymentPercent, interestRate, tenure, propertyTaxRate, insuranceMonthly, hoaMonthly, pmiRate]);

  const chartData = [
    { name: 'Principal', value: stats.loanAmount, color: '#4f46e5' },
    { name: 'Interest', value: stats.totalInterest, color: '#fbbf24' },
    { name: 'Tax, Ins, HOA & PMI', value: (stats.monthlyTax + insuranceMonthly + hoaMonthly + stats.monthlyPMI) * tenure * 12, color: '#10b981' },
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
    <article className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900">Mortgage <span className="text-indigo-600">Intelligence</span></h1>
          <p className="text-slate-500 mt-1 uppercase text-[10px] font-black tracking-[0.2em]">Comprehensive Home Financing Analysis for Buyers</p>
        </div>
        <div className="flex gap-4">
          <section className="bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm text-center">
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">LTV Ratio</h2>
            <p className={`text-xl font-black ${stats.ltv > 80 ? 'text-rose-600' : 'text-indigo-600'}`}>{stats.ltv}%</p>
          </section>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b pb-4">Financing Inputs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="homePrice" className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Home Price ($)</label>
                  <input id="homePrice" type="number" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl" />
                </div>
                <div>
                  <label htmlFor="downPayment" className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Down Payment (%)</label>
                  <input id="downPayment" type="number" value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl" />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label htmlFor="mortgageRate" className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Interest Rate (%)</label>
                  <input id="mortgageRate" type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl" />
                </div>
                <div>
                  <label htmlFor="loanTerm" className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Loan Term (Years)</label>
                  <select id="loanTerm" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl appearance-none" aria-label="Mortgage Term">
                    <option value={15}>15 Years</option>
                    <option value={30}>30 Years</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* PITI Components Section */}
          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <div className="flex justify-between items-center border-b pb-4">
              <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">PITI Components</h2>
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">State-Specific</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="state" className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Property State</label>
                  <select
                    id="state"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700 text-lg appearance-none cursor-pointer"
                    aria-label="Select State"
                  >
                    {US_STATES.map(state => (
                      <option key={state.code} value={state.code}>
                        {state.name} {state.code !== 'CUSTOM' && `(${state.taxRate}% avg)`}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-slate-500 mt-2 font-medium">Auto-populates average property tax rate</p>
                </div>
                <div>
                  <label htmlFor="propertyTax" className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Property Tax Rate (% annually)</label>
                  <input
                    id="propertyTax"
                    type="number"
                    step="0.01"
                    value={propertyTaxRate}
                    onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl"
                  />
                  <p className="text-xs text-slate-500 mt-2 font-medium">Monthly: ${Math.round((homePrice * propertyTaxRate / 100) / 12).toLocaleString()}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label htmlFor="insurance" className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Home Insurance ($ monthly)</label>
                  <input
                    id="insurance"
                    type="number"
                    value={insuranceMonthly}
                    onChange={(e) => setInsuranceMonthly(Number(e.target.value))}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl"
                  />
                  <p className="text-xs text-slate-500 mt-2 font-medium">Typically $800-$2000/year</p>
                </div>
                <div>
                  <label htmlFor="hoa" className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">HOA Fees ($ monthly)</label>
                  <input
                    id="hoa"
                    type="number"
                    value={hoaMonthly}
                    onChange={(e) => setHoaMonthly(Number(e.target.value))}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl"
                  />
                  <p className="text-xs text-slate-500 mt-2 font-medium">{hoaMonthly > 0 ? 'Included in total monthly' : 'Enter $0 if no HOA'}</p>
                </div>
                <div>
                  <label htmlFor="pmi" className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">PMI Rate (% annually)</label>
                  <input
                    id="pmi"
                    type="number"
                    step="0.01"
                    value={pmiRate}
                    onChange={(e) => setPmiRate(Number(e.target.value))}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 text-xl"
                    disabled={stats.ltv <= 80}
                  />
                  <p className="text-xs text-slate-500 mt-2 font-medium">
                    {stats.ltv > 80 ? `Monthly: $${Math.round(stats.monthlyPMI).toLocaleString()}` : 'Not required (LTV ≤ 80%)'}
                  </p>
                </div>
              </div>
            </div>

            {/* State Tax Info Banner */}
            {selectedState !== 'CUSTOM' && (
              <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100">
                <div className="flex gap-4">
                  <div className="text-3xl">📍</div>
                  <div className="flex-1">
                    <h3 className="text-sm font-black text-indigo-900 mb-2">
                      {US_STATES.find(s => s.code === selectedState)?.name} Property Tax Info
                    </h3>
                    <p className="text-sm text-indigo-800 leading-relaxed">
                      Average state property tax: <strong>{propertyTaxRate}%</strong> of home value annually.
                      {propertyTaxRate > 1.5 && ' This is a high-tax state - property taxes significantly impact total housing costs.'}
                      {propertyTaxRate < 0.7 && ' This is a low-tax state - favorable for homeownership costs.'}
                    </p>
                    <p className="text-xs text-indigo-700 mt-2">
                      💡 Actual rates vary by county. Check your specific county tax assessor for precise rates.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>

          <aside className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex items-center gap-8 shadow-2xl relative overflow-hidden">
            <div className="text-6xl" aria-hidden="true">🤖</div>
            <div className="flex-1 space-y-2">
              <h3 className="text-indigo-400 font-black uppercase text-[10px] tracking-widest">Gemini Mortgage Analyst</h3>
              {loadingAdvice ? <div className="animate-pulse space-y-2"><div className="h-4 bg-white/5 rounded w-full"></div></div> : <p className="text-xl text-slate-200 italic font-medium leading-relaxed">{advice}</p>}
            </div>
          </aside>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <section className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl space-y-8 sticky top-6">
            <header className="text-center space-y-2">
              <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Estimated Total Monthly</h2>
              <p className="text-6xl font-black text-indigo-600 tracking-tighter">${Math.round(stats.totalMonthly).toLocaleString()}</p>
            </header>
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
          </section>
        </div>
      </div>

      {/* SEO ENHANCED KNOWLEDGE BASE */}
      <section className="mt-20 pt-16 border-t border-slate-200 space-y-16">
        <header className="max-w-4xl">
          <h3 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em] mb-4">Strategic Home Finance Framework</h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter">Understanding the <span className="text-indigo-600">PITI Breakdown</span></h2>
          <p className="text-slate-500 mt-6 text-xl font-medium leading-relaxed max-w-3xl">
            A standard mortgage involves more than just principal and interest. Lenders look at your <strong>Debt-to-Income (DTI)</strong> based on your all-in housing costs.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          <section className="space-y-6 group">
             <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform shadow-sm">🏦</div>
             <h3 className="text-2xl font-black text-slate-900 leading-tight">PMI & LTV Logic <br/>Benchmarks</h3>
             <p className="text-slate-500 text-sm leading-relaxed font-medium">
               Private Mortgage Insurance (PMI) is usually required if your <strong>Loan-to-Value (LTV)</strong> ratio is greater than 80% (less than a 20% down payment). PMI serves as risk mitigation for the lender and typically costs between 0.5% and 1.5% of the annual loan balance.
             </p>
          </section>
          <section className="space-y-6 group">
             <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform shadow-xl">⚖️</div>
             <h3 className="text-2xl font-black text-slate-900 leading-tight">Escrow, Tax & <br/>Insurance Triage</h3>
             <p className="text-slate-500 text-sm leading-relaxed font-medium">
               Property taxes vary wildly by state and county. QuantCurb models this as a percentage of the home value. Combined with hazard insurance, these "escrowed" items can increase your monthly commitment by 20% to 30% over the base loan payment.
             </p>
          </section>
          <section className="space-y-6 group">
             <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform shadow-sm">📑</div>
             <h3 className="text-2xl font-black text-slate-900 leading-tight">Truth in Lending <br/>Compliance</h3>
             <p className="text-slate-500 text-sm leading-relaxed font-medium">
               We utilize the standard reducing balance amortization formula, aligning with the <strong>Truth in Lending Act (TILA)</strong> standards used by institutional banks. This ensures that the interest and principal splits are mathematically accurate for US-based mortgages.
             </p>
          </section>
        </div>

        <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8 text-center">Institutional Mortgage FAQs</h4>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-3">
              <p className="text-base font-black text-indigo-600">How is the DTI front-end ratio calculated?</p>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">The front-end ratio is your total PITI divided by your gross monthly income. Most conventional lenders look for a ratio below 28% to qualify for prime interest rates.</p>
            </div>
            <div className="space-y-3">
              <p className="text-base font-black text-indigo-600">When should I drop PMI on my current mortgage?</p>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">Under the Homeowners Protection Act, you can request PMI cancellation when your LTV reaches 80% of the original value. Lenders are legally required to terminate it automatically at 78% LTV.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center pt-16 border-t border-slate-100 flex flex-col items-center gap-6">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">QuantCurb Home Finance Hub v4.0 • PITI Amortization Engine</p>
        <div className="flex flex-wrap justify-center gap-3">
           {["Mortgage Interest Rates", "PITI Breakdown", "LTV Thresholds", "PMI Cost Analysis", "Loan Amortization Table", "Escrow Forecasting"].map(tag => (
             <span key={tag} className="px-5 py-2 bg-white text-slate-500 rounded-xl text-[9px] font-black uppercase tracking-widest border border-slate-100">{tag}</span>
           ))}
        </div>
      </footer>
    </article>
  );
};

export default MortgageCalculator;

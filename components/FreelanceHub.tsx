
import React, { useState, useMemo, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

const STATE_TAX_DATA: Record<string, { name: string; rate: number }> = {
  AL: { name: 'Alabama', rate: 0.05 }, AK: { name: 'Alaska', rate: 0.00 }, AZ: { name: 'Arizona', rate: 0.025 },
  AR: { name: 'Arkansas', rate: 0.047 }, CA: { name: 'California', rate: 0.093 }, CO: { name: 'Colorado', rate: 0.044 },
  CT: { name: 'Connecticut', rate: 0.05 }, DE: { name: 'Delaware', rate: 0.066 }, FL: { name: 'Florida', rate: 0.00 },
  GA: { name: 'Georgia', rate: 0.0575 }, HI: { name: 'Hawaii', rate: 0.0825 }, ID: { name: 'Idaho', rate: 0.058 },
  IL: { name: 'Illinois', rate: 0.0495 }, IN: { name: 'Indiana', rate: 0.0323 }, IA: { name: 'Iowa', rate: 0.06 },
  KS: { name: 'Kansas', rate: 0.057 }, KY: { name: 'Kentucky', rate: 0.05 }, LA: { name: 'Louisiana', rate: 0.0425 },
  ME: { name: 'Maine', rate: 0.0715 }, MD: { name: 'Maryland', rate: 0.0475 }, MA: { name: 'Massachusetts', rate: 0.05 },
  MI: { name: 'Michigan', rate: 0.0425 }, MN: { name: 'Minnesota', rate: 0.07 }, MS: { name: 'Mississippi', rate: 0.05 },
  MO: { name: 'Missouri', rate: 0.054 }, MT: { name: 'Montana', rate: 0.0675 }, NE: { name: 'Nebraska', rate: 0.068 },
  NV: { name: 'Nevada', rate: 0.00 }, NH: { name: 'New Hampshire', rate: 0.00 }, NJ: { name: 'New Jersey', rate: 0.0637 },
  NM: { name: 'New Mexico', rate: 0.059 }, NY: { name: 'New York', rate: 0.065 }, NC: { name: 'North Carolina', rate: 0.0475 },
  ND: { name: 'North Dakota', rate: 0.029 }, OH: { name: 'Ohio', rate: 0.0399 }, OK: { name: 'Oklahoma', rate: 0.0475 },
  OR: { name: 'Oregon', rate: 0.0875 }, PA: { name: 'Pennsylvania', rate: 0.0307 }, RI: { name: 'Rhode Island', rate: 0.0599 },
  SC: { name: 'South Carolina', rate: 0.07 }, SD: { name: 'South Dakota', rate: 0.00 }, TN: { name: 'Tennessee', rate: 0.00 },
  TX: { name: 'Texas', rate: 0.00 }, UT: { name: 'Utah', rate: 0.0485 }, VT: { name: 'Vermont', rate: 0.0875 },
  VA: { name: 'Virginia', rate: 0.0575 }, WA: { name: 'Washington', rate: 0.00 }, WV: { name: 'West Virginia', rate: 0.065 },
  WI: { name: 'Wisconsin', rate: 0.053 }, WY: { name: 'Wyoming', rate: 0.00 },
};

const FreelanceHub: React.FC = () => {
  const [grossIncome, setGrossIncome] = useState<number>(12000);
  const [hoursWorked, setHoursWorked] = useState<number>(160);
  const [stateCode, setStateCode] = useState<string>('CA');
  
  const [expSoftware, setExpSoftware] = useState<number>(200);
  const [expMarketing, setExpMarketing] = useState<number>(300);
  const [expHardware, setExpHardware] = useState<number>(100);
  const [expHealthcare, setExpHealthcare] = useState<number>(600);
  const [expRetirement, setExpRetirement] = useState<number>(1000);
  const [expOffice, setExpOffice] = useState<number>(400);

  const [federalTaxRate, setFederalTaxRate] = useState<number>(22);
  const [seTaxRate, setSeTaxRate] = useState<number>(15.3);

  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const stats = useMemo(() => {
    const businessExpenses = expSoftware + expMarketing + expHardware + expOffice;
    const personalBenefits = expHealthcare + expRetirement;
    const totalDeductions = businessExpenses + personalBenefits;
    const adjustedGross = Math.max(0, grossIncome - businessExpenses);
    const stateRate = STATE_TAX_DATA[stateCode]?.rate || 0;
    const federalTaxAmount = (adjustedGross * federalTaxRate) / 100;
    const stateTaxAmount = (adjustedGross * stateRate);
    const seTaxAmount = (adjustedGross * seTaxRate) / 100;
    const totalTax = federalTaxAmount + stateTaxAmount + seTaxAmount;
    const netIncome = grossIncome - totalTax - totalDeductions;
    const fteBenefitValue = 1100; 
    const corporateEquivalentAnnual = (netIncome + fteBenefitValue) * 12 / 0.75;

    return { netIncome, realHourlyRate: hoursWorked > 0 ? netIncome / hoursWorked : 0, efficiency: grossIncome > 0 ? (netIncome / grossIncome) * 100 : 0, totalTax, totalExpenses: businessExpenses, totalBenefits: personalBenefits, federalTaxAmount, stateTaxAmount, seTaxAmount, corporateEquivalentAnnual };
  }, [grossIncome, hoursWorked, stateCode, federalTaxRate, seTaxRate, expSoftware, expMarketing, expHardware, expHealthcare, expRetirement, expOffice]);

  const chartData = [
    { name: 'Take Home', value: Math.max(0, stats.netIncome), color: '#10b981' },
    { name: 'Taxes', value: Math.max(0, stats.totalTax), color: '#4f46e5' },
    { name: 'Op-Ex', value: Math.max(0, stats.totalExpenses), color: '#f43f5e' },
    { name: 'Benefits', value: Math.max(0, stats.totalBenefits), color: '#fbbf24' },
  ];

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const msg = await getFinancialAdvice(stats, 'Detailed Freelance Strategy');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [grossIncome, hoursWorked, stateCode]);

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-500 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 leading-tight">Freelance <span className="text-indigo-600">Profit Engine</span></h2>
          <p className="text-slate-500 mt-2 max-w-lg font-medium">Analyze net earnings, self-employment taxes, and corporate salary equivalents for independent contractors.</p>
        </div>
        <div className="bg-slate-900 px-8 py-5 rounded-[2.5rem] shadow-2xl text-white border border-slate-800">
           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-1">FTE Salary Equivalent</p>
           <p className="text-3xl font-black tracking-tighter">${Math.round(stats.corporateEquivalentAnnual).toLocaleString()}<span className="text-sm font-bold text-slate-400 ml-1">/yr</span></p>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-6">
          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b pb-4">Revenue Config</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Gross Monthly Revenue</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <input type="number" value={grossIncome} onChange={e => setGrossIncome(Number(e.target.value))} className="w-full pl-10 p-4 bg-slate-50 border-none rounded-2xl font-black text-xl text-slate-700 focus:ring-2 focus:ring-indigo-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">Hours / Mo</label>
                  <input type="number" value={hoursWorked} onChange={e => setHoursWorked(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">State Nexus</label>
                  <select value={stateCode} onChange={e => setStateCode(e.target.value)} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700 appearance-none">
                    {Object.keys(STATE_TAX_DATA).map(code => <option key={code} value={code}>{code}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b pb-4">Operating & Benefits</h3>
            <div className="grid grid-cols-2 gap-4">
               <div>
                 <label className="block text-[9px] font-black text-slate-400 uppercase mb-1">Software</label>
                 <input type="number" value={expSoftware} onChange={e => setExpSoftware(Number(e.target.value))} className="w-full p-3 bg-slate-50 border-none rounded-xl font-bold" />
               </div>
               <div>
                 <label className="block text-[9px] font-black text-slate-400 uppercase mb-1">Marketing</label>
                 <input type="number" value={expMarketing} onChange={e => setExpMarketing(Number(e.target.value))} className="w-full p-3 bg-slate-50 border-none rounded-xl font-bold" />
               </div>
               <div>
                 <label className="block text-[9px] font-black text-slate-400 uppercase mb-1">Coworking</label>
                 <input type="number" value={expOffice} onChange={e => setExpOffice(Number(e.target.value))} className="w-full p-3 bg-slate-50 border-none rounded-xl font-bold" />
               </div>
               <div>
                 <label className="block text-[9px] font-black text-slate-400 uppercase mb-1">Hardware</label>
                 <input type="number" value={expHardware} onChange={e => setExpHardware(Number(e.target.value))} className="w-full p-3 bg-slate-50 border-none rounded-xl font-bold" />
               </div>
            </div>
            <div className="pt-6 border-t border-slate-50 space-y-4">
               <div>
                 <label className="block text-[9px] font-black text-indigo-500 uppercase mb-1">Health Insurance</label>
                 <input type="number" value={expHealthcare} onChange={e => setExpHealthcare(Number(e.target.value))} className="w-full p-3 bg-indigo-50 border-none rounded-xl font-bold" />
               </div>
               <div>
                 <label className="block text-[9px] font-black text-indigo-500 uppercase mb-1">Solo 401k / SEP IRA</label>
                 <input type="number" value={expRetirement} onChange={e => setExpRetirement(Number(e.target.value))} className="w-full p-3 bg-indigo-50 border-none rounded-xl font-bold" />
               </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-indigo-600 p-8 rounded-[3rem] text-white shadow-xl flex flex-col justify-center">
               <p className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-1">Monthly Net Profit</p>
               <h3 className="text-4xl font-black text-white">${Math.round(stats.netIncome).toLocaleString()}</h3>
            </div>
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm text-center flex flex-col justify-center">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Real Hourly Rate</p>
               <h4 className="text-3xl font-black text-slate-900">${stats.realHourlyRate.toFixed(2)}</h4>
            </div>
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm text-center flex flex-col justify-center">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Annual Tax Burden</p>
               <h4 className="text-3xl font-black text-rose-500">${Math.round(stats.totalTax * 12).toLocaleString()}</h4>
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
             <div className="flex-1 space-y-6">
                <div>
                  <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                    <span className="text-lg">🤖</span> Gemini Dynamic Advisory
                  </h4>
                  {loadingAdvice ? (
                    <div className="space-y-2 animate-pulse"><div className="h-4 bg-slate-50 rounded w-full"></div><div className="h-4 bg-slate-50 rounded w-2/3"></div></div>
                  ) : (
                    <p className="text-lg text-slate-700 italic font-medium leading-relaxed">{advice}</p>
                  )}
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* SEO-Optimized Expert Knowledge Base - Static Section */}
      <section className="mt-20 pt-16 border-t border-slate-200 space-y-16">
        <header className="max-w-3xl">
          <h3 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em] mb-4">Strategic Framework</h3>
          <h2 className="text-4xl font-black text-slate-900 leading-tight">Optimizing <span className="text-indigo-600">Self-Employed</span> Net Profitability</h2>
          <p className="text-slate-500 mt-4 text-lg font-medium leading-relaxed">
            Understanding the transition from W2 employee to 1099 independent contractor requires a rigorous analysis of taxes, overhead, and the real value of time.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-indigo-600 pl-6">The 15.3% SE Tax Reality</h4>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Freelancers are responsible for both the employer and employee portions of FICA (Social Security and Medicare). While employees pay 7.65%, freelancers must pay 15.3% on their net profit. This "tax drag" is the primary reason why gross hourly rates must be significantly higher than corporate salaries.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-emerald-500 pl-6">Schedule C Optimization</h4>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Every dollar spent on business operations (Op-Ex) like software, hardware, and marketing is a deduction that lowers your taxable income. However, personal benefits like health insurance and retirement contributions are handled differently depending on your business structure (LLC vs S-Corp).
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-amber-500 pl-6">Real Hourly Rate Logic</h4>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Your "Real Hourly Rate" is your net income divided by total hours worked (including non-billable hours like admin and sales). If your real rate is lower than your previous corporate hourly wage, you are effectively paying to work for yourself.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">FTE Benchmarking Examples</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-100">
               <p className="text-[10px] font-black text-indigo-600 uppercase mb-2">High Efficiency</p>
               <p className="text-sm font-bold text-slate-800">$150/hr @ 120 hrs</p>
               <p className="text-[10px] text-slate-500 mt-1">Equivalent to $185k FTE Salary</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100">
               <p className="text-[10px] font-black text-indigo-600 uppercase mb-2">Mid Range</p>
               <p className="text-sm font-bold text-slate-800">$95/hr @ 160 hrs</p>
               <p className="text-[10px] text-slate-500 mt-1">Equivalent to $115k FTE Salary</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100">
               <p className="text-[10px] font-black text-rose-600 uppercase mb-2">High Overhead</p>
               <p className="text-sm font-bold text-slate-800">$75/hr + $2k OpEx</p>
               <p className="text-[10px] text-slate-500 mt-1">Equivalent to $72k FTE Salary</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100">
               <p className="text-[10px] font-black text-emerald-600 uppercase mb-2">Tax Haven</p>
               <p className="text-sm font-bold text-slate-800">$100/hr in Florida</p>
               <p className="text-[10px] text-slate-500 mt-1">+9.3% Higher Net than CA</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-12 pt-12 border-t border-slate-100">
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Why use this?</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Freelancing involves many 'invisible' costs. Without factoring in <strong>Self-Employment Tax</strong>, business overhead, and <strong>State Income Tax</strong>, your gross rate might be dangerously misleading. This hub reveals your <strong>True Hourly Rate</strong>.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">How it works</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            We use a multi-stage logic: 1. Subtract Business Op-Ex from Gross. 2. Calculate SE Tax (15.3%) and Income Taxes on Profit. 3. Deduct Personal Benefits (Health/Retire). 4. Benchmark the result against a standard W2 corporate compensation package.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Related Tools</h4>
          <ul className="text-sm text-slate-500 space-y-2 font-medium">
            <li>• <strong>Quarterly Tax Calculator</strong> - Plan your 1040-ES estimated payments</li>
            <li>• <strong>ACA Health Subsidy</strong> - Calculate healthcare costs for self-employed</li>
            <li>• <strong>Child Tax Credit</strong> - Reduce tax liability with family credits</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FreelanceHub;

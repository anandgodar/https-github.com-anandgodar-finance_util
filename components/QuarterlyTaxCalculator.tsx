
import React, { useState, useMemo, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

type FilingStatus = 'single' | 'married' | 'hoh';
type SafeHarborMethod = 'prior_year' | 'current_year';

// 2025 Federal Tax Brackets
const FEDERAL_TAX_BRACKETS = {
  single: [
    { limit: 11600, rate: 0.10 },
    { limit: 47150, rate: 0.12 },
    { limit: 100525, rate: 0.22 },
    { limit: 191950, rate: 0.24 },
    { limit: 243725, rate: 0.32 },
    { limit: 609350, rate: 0.35 },
    { limit: Infinity, rate: 0.37 }
  ],
  married: [
    { limit: 23200, rate: 0.10 },
    { limit: 94300, rate: 0.12 },
    { limit: 201050, rate: 0.22 },
    { limit: 383900, rate: 0.24 },
    { limit: 487450, rate: 0.32 },
    { limit: 731200, rate: 0.35 },
    { limit: Infinity, rate: 0.37 }
  ],
  hoh: [
    { limit: 16550, rate: 0.10 },
    { limit: 63100, rate: 0.12 },
    { limit: 100500, rate: 0.22 },
    { limit: 191950, rate: 0.24 },
    { limit: 243700, rate: 0.32 },
    { limit: 609350, rate: 0.35 },
    { limit: Infinity, rate: 0.37 }
  ]
};

const STATE_TAX_RATES: Record<string, { name: string; rate: number }> = {
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

const QUARTERLY_DEADLINES = [
  { quarter: 'Q1', period: 'Jan 1 - Mar 31', deadline: 'April 15, 2025' },
  { quarter: 'Q2', period: 'Apr 1 - May 31', deadline: 'June 16, 2025' },
  { quarter: 'Q3', period: 'Jun 1 - Aug 31', deadline: 'September 15, 2025' },
  { quarter: 'Q4', period: 'Sep 1 - Dec 31', deadline: 'January 15, 2026' }
];

const QuarterlyTaxCalculator: React.FC = () => {
  const [estimatedIncome, setEstimatedIncome] = useState<number>(120000);
  const [selfEmploymentIncome, setSelfEmploymentIncome] = useState<number>(120000);
  const [w2Income, setW2Income] = useState<number>(0);
  const [priorYearTax, setPriorYearTax] = useState<number>(22000);
  const [priorYearAGI, setPriorYearAGI] = useState<number>(100000);
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');
  const [stateCode, setStateCode] = useState<string>('CA');
  const [businessExpenses, setBusinessExpenses] = useState<number>(12000);
  const [safeHarborMethod, setSafeHarborMethod] = useState<SafeHarborMethod>('prior_year');
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const calculations = useMemo(() => {
    // Net self-employment income after deductions
    const netSEIncome = Math.max(0, selfEmploymentIncome - businessExpenses);

    // Self-Employment Tax (15.3% = 12.4% Social Security + 2.9% Medicare)
    const seTax = netSEIncome * 0.153;

    // SE Tax Deduction (50% of SE tax)
    const seTaxDeduction = seTax * 0.5;

    // Adjusted Gross Income
    const agi = w2Income + netSEIncome - seTaxDeduction;

    // Calculate Federal Income Tax
    const brackets = FEDERAL_TAX_BRACKETS[filingStatus];
    let federalTax = 0;
    let remainingIncome = agi;
    let prevLimit = 0;

    for (const bracket of brackets) {
      const taxableInBracket = Math.min(remainingIncome, bracket.limit - prevLimit);
      if (taxableInBracket <= 0) break;
      federalTax += taxableInBracket * bracket.rate;
      remainingIncome -= taxableInBracket;
      prevLimit = bracket.limit;
    }

    // State Tax
    const stateRate = STATE_TAX_RATES[stateCode]?.rate || 0;
    const stateTax = agi * stateRate;

    // Total Tax Liability
    const totalTax = federalTax + stateTax + seTax;

    // Safe Harbor Calculations
    const isHighEarner = priorYearAGI > 150000;
    const priorYearSafeHarbor = isHighEarner ? priorYearTax * 1.10 : priorYearTax;
    const currentYearSafeHarbor = totalTax * 0.90;

    // Use the LOWER safe harbor amount (most beneficial)
    const recommendedSafeHarbor = Math.min(priorYearSafeHarbor, currentYearSafeHarbor);

    // Quarterly Payment
    const quarterlyPayment = safeHarborMethod === 'prior_year'
      ? priorYearSafeHarbor / 4
      : currentYearSafeHarbor / 4;

    // Underpayment Penalty Estimation (simplified)
    const minimumRequired = Math.min(priorYearSafeHarbor, currentYearSafeHarbor);
    const shortfall = Math.max(0, totalTax - minimumRequired);
    const underpaymentPenalty = shortfall * 0.08; // Approximate 8% annual penalty

    // Effective Tax Rate
    const effectiveTaxRate = agi > 0 ? (totalTax / agi) * 100 : 0;

    return {
      netSEIncome,
      seTax,
      seTaxDeduction,
      agi,
      federalTax,
      stateTax,
      totalTax,
      priorYearSafeHarbor,
      currentYearSafeHarbor,
      recommendedSafeHarbor,
      quarterlyPayment,
      underpaymentPenalty,
      effectiveTaxRate,
      isHighEarner
    };
  }, [estimatedIncome, selfEmploymentIncome, w2Income, priorYearTax, priorYearAGI, filingStatus, stateCode, businessExpenses, safeHarborMethod]);

  const taxBreakdownData = [
    { name: 'Federal Income Tax', value: calculations.federalTax, color: '#4f46e5' },
    { name: 'Self-Employment Tax', value: calculations.seTax, color: '#f59e0b' },
    { name: 'State Tax', value: calculations.stateTax, color: '#10b981' }
  ].filter(item => item.value > 0);

  const quarterlyScheduleData = QUARTERLY_DEADLINES.map(q => ({
    name: q.quarter,
    amount: calculations.quarterlyPayment,
    deadline: q.deadline
  }));

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    try {
      const context = {
        ...calculations,
        filingStatus,
        stateCode,
        safeHarborMethod,
        selfEmploymentIncome,
        w2Income
      };
      const msg = await getFinancialAdvice(context, 'Quarterly Estimated Tax Strategy & IRS Form 1040-ES Optimization');
      setAdvice(msg || '');
    } catch (error) {
      console.error('Failed to fetch quarterly tax advice:', error);
      setAdvice('Unable to load tax planning advice at this time. Please try again later.');
    } finally {
      setLoadingAdvice(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [estimatedIncome, selfEmploymentIncome, w2Income, priorYearTax, filingStatus, stateCode, safeHarborMethod]);

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <header>
        <h2 className="text-3xl font-black text-slate-900">
          Quarterly Tax <span className="text-indigo-600">Calculator 2025</span>
        </h2>
        <p className="text-slate-500 mt-2 max-w-3xl font-medium">
          Calculate your IRS Form 1040-ES estimated tax payments. Avoid underpayment penalties with safe harbor rules
          for freelancers, self-employed, and gig workers. Plan for <strong>${calculations.quarterlyPayment.toLocaleString()}</strong> per quarter.
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Input Panel */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b pb-4">
              Income Estimation
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Self-Employment Income (Annual)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xl">$</span>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={selfEmploymentIncome}
                  onChange={(e) => setSelfEmploymentIncome(Number(e.target.value))}
                  className="w-full pl-10 p-4 bg-slate-50 border-none rounded-2xl font-black text-xl text-slate-700 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <p className="text-xs text-slate-400 mt-2">Freelance, 1099, business income</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                W-2 Income (Annual)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xl">$</span>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={w2Income}
                  onChange={(e) => setW2Income(Number(e.target.value))}
                  className="w-full pl-10 p-4 bg-slate-50 border-none rounded-2xl font-black text-xl text-slate-700 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <p className="text-xs text-slate-400 mt-2">Employment income with withholding</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Business Expenses (Annual)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xl">$</span>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={businessExpenses}
                  onChange={(e) => setBusinessExpenses(Number(e.target.value))}
                  className="w-full pl-10 p-4 bg-slate-50 border-none rounded-2xl font-black text-xl text-slate-700 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <p className="text-xs text-slate-400 mt-2">Deductible Schedule C expenses</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Filing Status
                </label>
                <select
                  value={filingStatus}
                  onChange={(e) => setFilingStatus(e.target.value as FilingStatus)}
                  className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700 focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="hoh">Head of HH</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  State
                </label>
                <select
                  value={stateCode}
                  onChange={(e) => setStateCode(e.target.value)}
                  className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700 focus:ring-2 focus:ring-indigo-500"
                >
                  {Object.entries(STATE_TAX_RATES).map(([code, data]) => (
                    <option key={code} value={code}>{code}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 shadow-sm space-y-6">
            <h3 className="text-sm font-black text-indigo-900 uppercase tracking-widest border-b border-indigo-200 pb-4">
              Safe Harbor Method
            </h3>

            <div>
              <label className="block text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">
                Prior Year Tax Liability
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 font-bold text-xl">$</span>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={priorYearTax}
                  onChange={(e) => setPriorYearTax(Number(e.target.value))}
                  className="w-full pl-10 p-4 bg-white border-none rounded-2xl font-black text-xl text-slate-700 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <p className="text-xs text-indigo-500 mt-2">From 2024 tax return (Line 24)</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">
                Prior Year AGI
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 font-bold text-xl">$</span>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={priorYearAGI}
                  onChange={(e) => setPriorYearAGI(Number(e.target.value))}
                  className="w-full pl-10 p-4 bg-white border-none rounded-2xl font-black text-xl text-slate-700 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <p className="text-xs text-indigo-500 mt-2">Determines 100% vs 110% rule</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">
                Payment Strategy
              </label>
              <div className="space-y-2">
                <label className="flex items-center p-3 bg-white rounded-xl cursor-pointer hover:bg-indigo-50 transition">
                  <input
                    type="radio"
                    value="prior_year"
                    checked={safeHarborMethod === 'prior_year'}
                    onChange={(e) => setSafeHarborMethod(e.target.value as SafeHarborMethod)}
                    className="mr-3"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-700">Prior Year Safe Harbor</p>
                    <p className="text-xs text-slate-500">
                      {calculations.isHighEarner ? '110%' : '100%'} of 2024 tax
                    </p>
                  </div>
                </label>
                <label className="flex items-center p-3 bg-white rounded-xl cursor-pointer hover:bg-indigo-50 transition">
                  <input
                    type="radio"
                    value="current_year"
                    checked={safeHarborMethod === 'current_year'}
                    onChange={(e) => setSafeHarborMethod(e.target.value as SafeHarborMethod)}
                    className="mr-3"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-700">Current Year Safe Harbor</p>
                    <p className="text-xs text-slate-500">90% of 2025 estimated tax</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quarterly Payment Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-[2.5rem] p-10 text-white relative shadow-2xl overflow-hidden">
            <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-2">
              Quarterly Payment (Each)
            </p>
            <h3 className="text-6xl font-black tracking-tighter mb-4">
              ${calculations.quarterlyPayment.toLocaleString()}
            </h3>
            <div className="flex gap-8 text-sm">
              <div>
                <p className="text-indigo-200 text-xs uppercase">Annual Total</p>
                <p className="text-2xl font-black">${(calculations.quarterlyPayment * 4).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-indigo-200 text-xs uppercase">Effective Rate</p>
                <p className="text-2xl font-black">{calculations.effectiveTaxRate.toFixed(1)}%</p>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 text-[180px] text-white/5 font-black">1040-ES</div>
          </div>

          {/* Payment Schedule */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
              2025 Payment Schedule
            </h4>
            <div className="space-y-4">
              {QUARTERLY_DEADLINES.map((deadline, idx) => (
                <div key={deadline.quarter} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-indigo-50 transition">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-indigo-600 text-white rounded-xl flex items-center justify-center">
                      <p className="text-2xl font-black">{deadline.quarter}</p>
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900">{deadline.period}</p>
                      <p className="text-xs text-slate-500">Due: <strong>{deadline.deadline}</strong></p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-slate-900">
                      ${calculations.quarterlyPayment.toLocaleString()}
                    </p>
                    <p className="text-xs text-slate-400">Payment {idx + 1} of 4</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tax Breakdown Chart */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
              Tax Breakdown
            </h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={taxBreakdownData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {taxBreakdownData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                  <p className="text-xs font-bold text-indigo-600 uppercase mb-1">Federal Income Tax</p>
                  <p className="text-2xl font-black text-slate-900">${calculations.federalTax.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                  <p className="text-xs font-bold text-amber-600 uppercase mb-1">Self-Employment Tax</p>
                  <p className="text-2xl font-black text-slate-900">${calculations.seTax.toLocaleString()}</p>
                  <p className="text-xs text-slate-500 mt-1">15.3% on net profit</p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <p className="text-xs font-bold text-emerald-600 uppercase mb-1">State Tax ({stateCode})</p>
                  <p className="text-2xl font-black text-slate-900">${calculations.stateTax.toLocaleString()}</p>
                  <p className="text-xs text-slate-500 mt-1">{(STATE_TAX_RATES[stateCode]?.rate * 100).toFixed(2)}% rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Safe Harbor Comparison */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                Prior Year Safe Harbor
              </p>
              <p className="text-3xl font-black text-indigo-600">
                ${calculations.priorYearSafeHarbor.toLocaleString()}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {calculations.isHighEarner ? '110%' : '100%'} of 2024 tax
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                Current Year Safe Harbor
              </p>
              <p className="text-3xl font-black text-purple-600">
                ${calculations.currentYearSafeHarbor.toLocaleString()}
              </p>
              <p className="text-xs text-slate-500 mt-1">90% of 2025 estimated</p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200 shadow-sm">
              <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-2">
                Recommended Total
              </p>
              <p className="text-3xl font-black text-emerald-700">
                ${calculations.recommendedSafeHarbor.toLocaleString()}
              </p>
              <p className="text-xs text-emerald-600 mt-1">Use lower amount</p>
            </div>
          </div>

          {/* AI Advice Panel */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-indigo-600 font-black uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
              <span className="text-2xl">🤖</span> AI Tax Strategy Insights
            </h4>
            {loadingAdvice ? (
              <div className="space-y-3 animate-pulse">
                <div className="h-4 bg-slate-100 rounded w-full"></div>
                <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                <div className="h-4 bg-slate-100 rounded w-4/6"></div>
              </div>
            ) : (
              <p className="text-lg text-slate-700 italic font-medium leading-relaxed">{advice}</p>
            )}
          </div>
        </div>
      </div>

      {/* Educational Content - SEO Optimized */}
      <section className="mt-16 pt-12 border-t border-slate-200 space-y-12">
        <header className="max-w-3xl">
          <h3 className="text-xs font-black text-indigo-500 uppercase tracking-widest mb-4">
            Understanding Estimated Taxes
          </h3>
          <h2 className="text-4xl font-black text-slate-900 leading-tight">
            Master IRS Form <span className="text-indigo-600">1040-ES</span> Payments
          </h2>
          <p className="text-slate-500 mt-4 text-lg font-medium leading-relaxed">
            Quarterly estimated taxes are required for freelancers, self-employed individuals, and anyone with income not subject to withholding.
            Underpayment penalties can add 8%+ to your tax bill - use safe harbor rules to avoid them.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-indigo-600 pl-6">
              Safe Harbor Rules
            </h4>
            <div className="text-slate-600 text-sm leading-relaxed font-medium space-y-3">
              <p><strong>100% Prior Year Rule:</strong> Pay 100% of last year's tax liability (110% if AGI &gt; $150k).</p>
              <p><strong>90% Current Year Rule:</strong> Pay 90% of current year's estimated tax liability.</p>
              <p><strong>No Penalty:</strong> If you meet either safe harbor, you won't face underpayment penalties even if you underpaid.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-purple-600 pl-6">
              Payment Deadlines 2025
            </h4>
            <div className="text-slate-600 text-sm leading-relaxed font-medium space-y-3">
              <p><strong>Q1:</strong> April 15, 2025 (Jan-Mar income)</p>
              <p><strong>Q2:</strong> June 16, 2025 (Apr-May income)</p>
              <p><strong>Q3:</strong> September 15, 2025 (Jun-Aug income)</p>
              <p><strong>Q4:</strong> January 15, 2026 (Sep-Dec income)</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-emerald-600 pl-6">
              Who Must Pay?
            </h4>
            <div className="text-slate-600 text-sm leading-relaxed font-medium space-y-3">
              <p><strong>Freelancers & 1099 contractors</strong> - No withholding on payments received.</p>
              <p><strong>Self-employed business owners</strong> - Schedule C, LLC, sole proprietor income.</p>
              <p><strong>Gig workers</strong> - Uber, DoorDash, Airbnb, Etsy sellers.</p>
              <p><strong>Investment income earners</strong> - Significant dividends, capital gains, rental income.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">
            Common Scenarios
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <p className="text-xs font-black text-indigo-600 uppercase mb-2">New Freelancer</p>
              <p className="text-sm font-bold text-slate-800">First year 1099</p>
              <p className="text-xs text-slate-500 mt-2"><strong>Strategy:</strong> Use 90% current year estimate (no prior year tax)</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <p className="text-xs font-black text-indigo-600 uppercase mb-2">Variable Income</p>
              <p className="text-sm font-bold text-slate-800">Fluctuating monthly</p>
              <p className="text-xs text-slate-500 mt-2"><strong>Strategy:</strong> Use annualized installment method (Form 2210)</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <p className="text-xs font-black text-rose-600 uppercase mb-2">High Growth Year</p>
              <p className="text-sm font-bold text-slate-800">Income doubled</p>
              <p className="text-xs text-slate-500 mt-2"><strong>Strategy:</strong> Prior year safe harbor, pay difference at year-end</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <p className="text-xs font-black text-emerald-600 uppercase mb-2">Side Hustle</p>
              <p className="text-sm font-bold text-slate-800">W-2 + 1099 income</p>
              <p className="text-xs text-slate-500 mt-2"><strong>Strategy:</strong> Adjust W-4 withholding OR make quarterly payments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Metadata Section */}
      <section className="grid md:grid-cols-3 gap-12 pt-12 border-t border-slate-100">
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Why use this?</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            The IRS charges underpayment penalties (currently around 8% annually) if you don't pay enough tax throughout the year.
            This calculator helps you use <strong>safe harbor rules</strong> to legally minimize quarterly payments while avoiding penalties.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">How it works</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            We calculate your total tax liability (federal income + self-employment + state), then apply safe harbor rules.
            The calculator compares <strong>100%/110% of prior year</strong> vs <strong>90% of current year</strong> and recommends the lower amount to minimize cash flow impact.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Related Tools</h4>
          <ul className="text-sm text-slate-500 space-y-2 font-medium">
            <li>• <strong>Freelance Profit Hub</strong> - Calculate net income for MAGI</li>
            <li>• <strong>ACA Health Subsidy</strong> - Lower MAGI for healthcare subsidies</li>
            <li>• <strong>Child Tax Credit</strong> - Reduce tax liability with credits</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default QuarterlyTaxCalculator;

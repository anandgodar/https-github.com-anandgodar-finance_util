import React, { useEffect, useMemo, useState } from 'react';
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import EmailCapture from './EmailCapture';
import RecommendedTools from './RecommendedTools';
import AdPlacement from './AdPlacement';

interface AmortizationEntry {
  month: number;
  principal: number;
  interest: number;
  balance: number;
  equity: number;
  cumulativeInterest: number;
}

interface MortgageCalculationState {
  loanAmount: number;
  downPaymentAmount: number;
  monthlyPrincipal: number;
  monthlyInterest: number;
  monthlyTaxes: number;
  monthlyInsurance: number;
  monthlyPMI: number;
  totalMonthlyPayment: number;
  amortization: AmortizationEntry[];
  breakEvenMonth: number | null;
}

const MortgageCalculator: React.FC = () => {
  const [homePrice, setHomePrice] = useState<number>(500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [propertyTaxRate, setPropertyTaxRate] = useState<number>(1.1);
  const [insuranceMonthly, setInsuranceMonthly] = useState<number>(140);
  const [pmiRate, setPmiRate] = useState<number>(0.85);
  const [pmiDropMonth, setPmiDropMonth] = useState<number | null>(null);

  useEffect(() => {
    const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
    const loanAmount = homePrice - downPaymentAmount;
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = 360;
    const monthlyPI =
      monthlyRate > 0
        ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
          (Math.pow(1 + monthlyRate, totalMonths) - 1)
        : loanAmount / totalMonths;

    let balance = loanAmount;
    let cutoff: number | null = null;

    for (let month = 1; month <= totalMonths; month += 1) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthlyPI - interestPayment;
      balance = Math.max(0, balance - principalPayment);
      const ltv = (balance / homePrice) * 100;
      if (cutoff === null && ltv < 78) {
        cutoff = month;
      }
    }

    setPmiDropMonth(cutoff);
  }, [downPaymentPercent, homePrice, interestRate]);

  const calculations = useMemo<MortgageCalculationState>(() => {
    const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
    const loanAmount = homePrice - downPaymentAmount;
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = 360;
    const monthlyPI =
      monthlyRate > 0
        ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
          (Math.pow(1 + monthlyRate, totalMonths) - 1)
        : loanAmount / totalMonths;
    const monthlyTaxes = (homePrice * (propertyTaxRate / 100)) / 12;
    const monthlyPMIBase = (loanAmount * (pmiRate / 100)) / 12;

    let balance = loanAmount;
    let cumulativeInterest = 0;
    const amortization: AmortizationEntry[] = [];
    let breakEvenMonth: number | null = null;

    for (let month = 1; month <= totalMonths; month += 1) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthlyPI - interestPayment;
      balance = Math.max(0, balance - principalPayment);
      cumulativeInterest += interestPayment;
      const equity = homePrice - balance;

      if (breakEvenMonth === null && equity > cumulativeInterest) {
        breakEvenMonth = month;
      }

      amortization.push({
        month,
        principal: principalPayment,
        interest: interestPayment,
        balance,
        equity,
        cumulativeInterest,
      });
    }

    const pmiRequiredAtOrigination = downPaymentPercent < 20;
    const pmiApplies = pmiRequiredAtOrigination && (pmiDropMonth === null || 1 < pmiDropMonth);
    const monthlyPMI = pmiApplies ? monthlyPMIBase : 0;

    return {
      loanAmount,
      downPaymentAmount,
      monthlyPrincipal: amortization[0]?.principal ?? 0,
      monthlyInterest: amortization[0]?.interest ?? 0,
      monthlyTaxes,
      monthlyInsurance: insuranceMonthly,
      monthlyPMI,
      totalMonthlyPayment: monthlyPI + monthlyTaxes + insuranceMonthly + monthlyPMI,
      amortization,
      breakEvenMonth,
    };
  }, [downPaymentPercent, homePrice, insuranceMonthly, interestRate, pmiDropMonth, pmiRate, propertyTaxRate]);

  const breakEvenLabel = useMemo(() => {
    if (!calculations.breakEvenMonth) {
      return 'Not reached within 30 years';
    }
    const date = new Date();
    date.setMonth(date.getMonth() + calculations.breakEvenMonth);
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  }, [calculations.breakEvenMonth]);

  const chartData = calculations.amortization.map((entry) => ({
    month: entry.month,
    principal: entry.principal,
    interest: entry.interest,
    balance: entry.balance,
  }));

  const formatCurrency = (value: number) =>
    value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ value: number; name: string }> }) => {
    if (!active || !payload?.length) {
      return null;
    }
    return (
      <div className="rounded-2xl bg-gray-950 border border-gray-800 px-4 py-3 text-xs text-gray-100">
        <p className="text-[10px] uppercase tracking-widest text-gray-400">Break-Even Date</p>
        <p className="text-sm font-bold text-emerald-300">{breakEvenLabel}</p>
        <div className="mt-2 space-y-1">
          {payload.map((item) => (
            <div key={item.name} className="flex justify-between gap-4 text-[11px]">
              <span className="text-gray-400">{item.name}</span>
              <span className="text-gray-100">{formatCurrency(item.value)}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <article className="max-w-6xl mx-auto space-y-10 pb-24">
      <header className="space-y-2">
        <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em]">Institutional Mortgage Desk</p>
        <h1 className="text-4xl font-black text-slate-900">Mortgage PITI Analyzer</h1>
        <p className="text-slate-500 text-sm max-w-2xl">
          Institutional-grade amortization with explicit PITI breakdowns, PMI auto-removal at 78% LTV, and a
          break-even equity timeline.
        </p>
      </header>

      <section className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black">Loan Inputs</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <label className="space-y-2 text-xs font-bold text-slate-500">
                Home Price
                <input
                  type="number"
                  value={homePrice}
                  onChange={(event) => setHomePrice(Number(event.target.value))}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-lg font-black text-slate-700"
                />
              </label>
              <label className="space-y-2 text-xs font-bold text-slate-500">
                Down Payment (%)
                <input
                  type="number"
                  value={downPaymentPercent}
                  onChange={(event) => setDownPaymentPercent(Number(event.target.value))}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-lg font-black text-slate-700"
                />
              </label>
              <label className="space-y-2 text-xs font-bold text-slate-500">
                Interest Rate (%)
                <input
                  type="number"
                  step="0.01"
                  value={interestRate}
                  onChange={(event) => setInterestRate(Number(event.target.value))}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-lg font-black text-slate-700"
                />
              </label>
              <label className="space-y-2 text-xs font-bold text-slate-500">
                Property Tax Rate (% annually)
                <input
                  type="number"
                  step="0.01"
                  value={propertyTaxRate}
                  onChange={(event) => setPropertyTaxRate(Number(event.target.value))}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-lg font-black text-slate-700"
                />
              </label>
              <label className="space-y-2 text-xs font-bold text-slate-500">
                Insurance ($/mo)
                <input
                  type="number"
                  value={insuranceMonthly}
                  onChange={(event) => setInsuranceMonthly(Number(event.target.value))}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-lg font-black text-slate-700"
                />
              </label>
              <label className="space-y-2 text-xs font-bold text-slate-500">
                PMI Rate (% annually)
                <input
                  type="number"
                  step="0.01"
                  value={pmiRate}
                  onChange={(event) => setPmiRate(Number(event.target.value))}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-lg font-black text-slate-700"
                />
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black">Monthly PITI</p>
              <p className="mt-4 text-4xl font-black text-slate-900">
                {formatCurrency(calculations.totalMonthlyPayment)}
              </p>
              <div className="mt-4 space-y-2 text-sm text-slate-500">
                <div className="flex justify-between"><span>Principal</span><span>{formatCurrency(calculations.monthlyPrincipal)}</span></div>
                <div className="flex justify-between"><span>Interest</span><span>{formatCurrency(calculations.monthlyInterest)}</span></div>
                <div className="flex justify-between"><span>Taxes</span><span>{formatCurrency(calculations.monthlyTaxes)}</span></div>
                <div className="flex justify-between"><span>Insurance</span><span>{formatCurrency(calculations.monthlyInsurance)}</span></div>
                <div className="flex justify-between"><span>PMI</span><span>{formatCurrency(calculations.monthlyPMI)}</span></div>
              </div>
            </div>
            <div className="bg-gray-950 rounded-3xl p-6 shadow-2xl border border-gray-800 text-gray-100">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-black">PMI Removal</p>
              <p className="mt-4 text-3xl font-black text-emerald-300">
                {pmiDropMonth ? `Month ${pmiDropMonth}` : 'Not Required'}
              </p>
              <p className="mt-3 text-sm text-gray-400">
                PMI automatically drops when LTV falls below 78% based on the amortization schedule.
              </p>
              <p className="mt-4 text-xs text-gray-500">Break-even equity date: {breakEvenLabel}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-950 rounded-3xl border border-gray-800 p-6 shadow-2xl">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-black">Principal vs Interest</h2>
          <div className="mt-6 h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData} margin={{ left: 10, right: 16 }}>
                <CartesianGrid stroke="#333" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis
                  yAxisId="left"
                  stroke="#6b7280"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${Math.round(value / 1000)}k`}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#6b7280"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${Math.round(value / 1000)}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="principal"
                  stackId="piti"
                  stroke="#4AF6C3"
                  fill="#4AF6C3"
                  fillOpacity={0.15}
                />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="interest"
                  stackId="piti"
                  stroke="#FF433D"
                  fill="#FF433D"
                  fillOpacity={0.2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="balance"
                  stroke="#FFA028"
                  strokeWidth={2}
                  dot={false}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Recommended Tools - Affiliate Section */}
      <section className="mt-12">
        <RecommendedTools calculatorType="mortgage" />
      </section>

      {/* Ad Placement */}
      <div className="mt-8">
        <AdPlacement size="responsive" position="bottom" lazy={true} />
      </div>

      {/* Email Capture Section */}
      <section className="mt-12">
        <EmailCapture
          title="Get Your Free Mortgage Planning Checklist"
          description="Download our comprehensive mortgage planning checklist with PITI breakdown, PMI removal strategies, and home buying tips."
          leadMagnet={{
            title: "Mortgage Planning Checklist 2025",
            description: "Complete guide to mortgage planning including PITI calculations, PMI strategies, and home buying tips.",
            type: "mortgage"
          }}
          buttonText="Get Free Checklist"
        />
      </section>
    </article>
  );
};

export default MortgageCalculator;

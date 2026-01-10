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
import CalculatorFAQ from './CalculatorFAQ';
import { ToolType } from '../types';

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
  monthlyHOA: number;
  monthlyPMI: number;
  totalMonthlyPayment: number;
  amortization: AmortizationEntry[];
  breakEvenMonth: number | null;
}

interface MortgageCalculatorProps {
  onNavigate?: (tool: ToolType) => void;
}

const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({ onNavigate }) => {
  const [homePrice, setHomePrice] = useState<number>(500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [propertyTaxRate, setPropertyTaxRate] = useState<number>(1.1);
  const [insuranceMonthly, setInsuranceMonthly] = useState<number>(140);
  const [hoaMonthly, setHoaMonthly] = useState<number>(0);
  const [pmiRate, setPmiRate] = useState<number>(0.85);
  const [pmiDropMonth, setPmiDropMonth] = useState<number | null>(null);

  useEffect(() => {
    // Add HowTo schema for "How to calculate mortgage payment"
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Calculate Your Mortgage Payment (PITI)",
      "description": "Step-by-step guide to calculating your total monthly mortgage payment including principal, interest, taxes, insurance, and HOA fees.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Enter Home Price",
          "text": "Enter the total purchase price of the home you're considering."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Set Down Payment",
          "text": "Enter your down payment percentage (typically 3-20%). A 20% down payment avoids PMI."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Enter Interest Rate",
          "text": "Enter your mortgage interest rate (current rates are typically 6-7% in 2025)."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Add Property Tax Rate",
          "text": "Enter your state's property tax rate (varies by state, typically 0.5-2.5% annually)."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Add Insurance and HOA",
          "text": "Enter monthly homeowners insurance and HOA fees (if applicable)."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Review Results",
          "text": "The calculator shows your total monthly PITI payment, PMI if applicable, and when PMI will drop."
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(howToSchema);
    script.id = 'howto-schema-mortgage';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('howto-schema-mortgage');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

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
      monthlyHOA: hoaMonthly,
      monthlyPMI,
      totalMonthlyPayment: monthlyPI + monthlyTaxes + insuranceMonthly + hoaMonthly + monthlyPMI,
      amortization,
      breakEvenMonth,
    };
  }, [downPaymentPercent, homePrice, insuranceMonthly, hoaMonthly, interestRate, pmiDropMonth, pmiRate, propertyTaxRate]);

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
                HOA Fees ($/mo)
                <input
                  type="number"
                  value={hoaMonthly}
                  onChange={(event) => setHoaMonthly(Number(event.target.value))}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-lg font-black text-slate-700"
                  placeholder="0"
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
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black">Monthly PITI + HOA</p>
              <p className="mt-4 text-4xl font-black text-slate-900">
                {formatCurrency(calculations.totalMonthlyPayment)}
              </p>
              <div className="mt-4 space-y-2 text-sm text-slate-500">
                <div className="flex justify-between"><span>Principal</span><span>{formatCurrency(calculations.monthlyPrincipal)}</span></div>
                <div className="flex justify-between"><span>Interest</span><span>{formatCurrency(calculations.monthlyInterest)}</span></div>
                <div className="flex justify-between"><span>Taxes</span><span>{formatCurrency(calculations.monthlyTaxes)}</span></div>
                <div className="flex justify-between"><span>Insurance</span><span>{formatCurrency(calculations.monthlyInsurance)}</span></div>
                {calculations.monthlyHOA > 0 && (
                  <div className="flex justify-between"><span>HOA</span><span>{formatCurrency(calculations.monthlyHOA)}</span></div>
                )}
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

      {/* Related Resources Section */}
      <section className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200">
        <h2 className="text-2xl font-black text-slate-900 mb-6">Related Resources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_MORTGAGE_GUIDE)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">📖 Complete Mortgage Calculator Guide 2025</h3>
            <p className="text-sm text-slate-600">Learn about PITI, PMI, property taxes by state, and mortgage strategies.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_HOW_MUCH_HOUSE)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">💰 How Much House Can I Afford?</h3>
            <p className="text-sm text-slate-600">Use the 28/36 rule to determine your maximum home price.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_BEST_MORTGAGE)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">🏆 Best Mortgage Calculator 2025</h3>
            <p className="text-sm text-slate-600">Compare top mortgage calculators and find the best tool for you.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.LOAN_COMPARE)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">⚖️ Loan Comparison Tool</h3>
            <p className="text-sm text-slate-600">Compare multiple mortgage offers side-by-side.</p>
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <CalculatorFAQ
        calculatorName="Mortgage Calculator"
        calculatorUrl="https://quantcurb.com/mortgage-payment-calculator"
        faqs={[
          {
            question: "What is PITI in a mortgage payment?",
            answer: "PITI stands for Principal, Interest, Taxes, and Insurance. It represents your total monthly mortgage payment. Principal is the loan amount you're paying down, Interest is the cost of borrowing, Taxes are property taxes (varies by state), and Insurance includes homeowners insurance and PMI (Private Mortgage Insurance) if your down payment is less than 20%."
          },
          {
            question: "How do I calculate my mortgage payment?",
            answer: "Use our mortgage calculator above! Enter your home price, down payment percentage, interest rate, property tax rate (varies by state), homeowners insurance, and HOA fees if applicable. The calculator automatically computes your monthly PITI payment, PMI if needed, and shows when PMI will drop (when your loan-to-value ratio falls below 78%)."
          },
          {
            question: "What is PMI and when does it drop?",
            answer: "PMI (Private Mortgage Insurance) is required when your down payment is less than 20% of the home price. It protects the lender if you default. PMI automatically drops when your loan-to-value (LTV) ratio falls below 78% based on the original amortization schedule, or you can request removal when LTV reaches 80% with a new appraisal."
          },
          {
            question: "How much house can I afford?",
            answer: "Use the 28/36 rule: Your monthly housing costs (PITI) should not exceed 28% of your gross monthly income, and total debt payments should not exceed 36%. For example, if you earn $100,000/year ($8,333/month), your maximum monthly housing payment should be around $2,333. Use our 'How Much House Can I Afford' calculator for a detailed analysis."
          },
          {
            question: "What are property tax rates by state?",
            answer: "Property tax rates vary significantly by state. New Jersey has the highest average rate at 2.49%, while Hawaii has the lowest at 0.28%. Our calculator includes state-specific property tax rates for all 50 US states. Property taxes are typically 1-2% of your home's assessed value annually, paid monthly through escrow."
          },
          {
            question: "Should I pay extra on my mortgage?",
            answer: "Paying extra on your mortgage can save thousands in interest and shorten your loan term. For example, paying an extra $200/month on a $400,000 mortgage at 6.5% can save over $100,000 in interest and pay off the loan 7 years early. However, consider if you could earn more by investing that money instead, especially if your mortgage rate is low."
          },
          {
            question: "What's the difference between a 15-year and 30-year mortgage?",
            answer: "A 15-year mortgage has higher monthly payments but much lower total interest paid and builds equity faster. A 30-year mortgage has lower monthly payments, making it more affordable, but you'll pay significantly more interest over the life of the loan. Use our calculator to compare both options side-by-side."
          },
          {
            question: "What are closing costs?",
            answer: "Closing costs typically range from 2-5% of the home price and include loan origination fees, appraisal, title insurance, home inspection, prepaid property taxes and insurance, and other fees. On a $500,000 home, expect closing costs of $10,000-$25,000. These are separate from your down payment."
          }
        ]}
      />

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

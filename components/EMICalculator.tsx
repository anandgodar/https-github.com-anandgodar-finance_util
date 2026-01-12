
import React, { useState, useMemo, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, AreaChart, Area, XAxis, YAxis, CartesianGrid, BarChart, Bar, ComposedChart, Line } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';
import CalculatorFAQ from './CalculatorFAQ';
import { ToolType } from '../types';

interface EMICalculatorProps {
  onNavigate?: (tool: ToolType) => void;
}

const EMICalculator: React.FC<EMICalculatorProps> = ({ onNavigate }) => {
  const [loanAmount, setLoanAmount] = useState<number>(50000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenure, setTenure] = useState<number>(5);
  const [extraPayment, setExtraPayment] = useState<number>(200);
  
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  // Core Calculation Function
  const calculateLoanVitals = (principal: number, rate: number, years: number, extra: number) => {
    const r = rate / 12 / 100;
    const n = years * 12;
    const emi = r > 0 ? (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : principal / n;
    const totalWithoutExtra = emi * n;
    const totalInterestWithoutExtra = totalWithoutExtra - principal;

    let balance = principal;
    let monthsWithExtra = 0;
    let totalPaidWithExtra = 0;
    const schedule = [];

    while (balance > 0 && monthsWithExtra < 600) {
      const interest = balance * r;
      const principalFromEmi = emi - interest;
      const totalPrincipalPaid = principalFromEmi + extra;
      
      const actualPayment = Math.min(balance + interest, emi + extra);
      totalPaidWithExtra += actualPayment;
      balance = Math.max(0, balance + interest - actualPayment);
      monthsWithExtra++;
      
      if (monthsWithExtra % 12 === 0 || balance === 0) {
        schedule.push({ month: monthsWithExtra, balance: Math.round(balance) });
      }
    }

    const interestSaved = Math.max(0, totalInterestWithoutExtra - (totalPaidWithExtra - principal));
    const monthsSaved = Math.max(0, n - monthsWithExtra);

    return {
      monthlyEmi: emi,
      totalInterestWithoutExtra,
      interestSaved,
      monthsSaved,
      monthsWithExtra,
      schedule,
      totalPaidWithExtra
    };
  };

  const stats = useMemo(() => calculateLoanVitals(loanAmount, interestRate, tenure, extraPayment), [loanAmount, interestRate, tenure, extraPayment]);

  // Sensitivity Analysis: Impact of varying extra payments
  const sensitivityData = useMemo(() => {
    const data = [];
    const baseExtra = extraPayment || 100;
    const steps = [0, baseExtra * 0.5, baseExtra, baseExtra * 1.5, baseExtra * 2, baseExtra * 3, baseExtra * 5];
    
    // Sort and filter unique steps
    const uniqueSteps = Array.from(new Set(steps)).sort((a, b) => a - b);

    for (const step of uniqueSteps) {
      const result = calculateLoanVitals(loanAmount, interestRate, tenure, step);
      data.push({
        extra: `$${Math.round(step)}`,
        interestSaved: Math.round(result.interestSaved),
        monthsSaved: result.monthsSaved,
        label: `+${Math.round(step)}/mo`
      });
    }
    return data;
  }, [loanAmount, interestRate, tenure, extraPayment]);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const msg = await getFinancialAdvice({ loanAmount, interestRate, tenure, emi: stats.monthlyEmi.toFixed(2), extra: extraPayment, saved: stats.interestSaved.toFixed(2) }, 'Loan EMI & Prepayment ROI');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [loanAmount, interestRate, tenure, extraPayment]);

  useEffect(() => {
    // Add HowTo schema for "How to calculate EMI"
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Calculate EMI (Equated Monthly Installment) and Save on Interest",
      "description": "Step-by-step guide to calculating loan EMI, understanding amortization, and using extra payments to save interest and pay off loans faster.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Enter Loan Amount",
          "text": "Enter your loan principal amount (the total amount you're borrowing)."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Enter Interest Rate",
          "text": "Enter your annual interest rate (APR) as a percentage. This is the rate your lender charges."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Set Loan Tenure",
          "text": "Enter the loan term in years (how long you have to repay the loan)."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Calculate Standard EMI",
          "text": "The calculator shows your monthly EMI using the reducing balance method. This is your fixed monthly payment."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Add Extra Payments (Optional)",
          "text": "Enter any extra monthly payment you plan to make. This goes directly toward principal, saving interest and reducing loan term."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Review Savings",
          "text": "See how much interest you'll save and how many months you'll shave off your loan term with extra payments."
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(howToSchema);
    script.id = 'howto-schema-emi';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('howto-schema-emi');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    // Add FAQPage schema for EMI and loan prepayment questions
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I calculate EMI (Equated Monthly Installment)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EMI is calculated using the formula: EMI = [P × R × (1+R)^N] / [(1+R)^N - 1], where P = Principal, R = Monthly Interest Rate (APR/12), N = Number of Months. Our calculator uses the reducing balance method, which is the standard for most loans. Just enter your loan amount, interest rate, and tenure to get your monthly EMI."
          }
        },
        {
          "@type": "Question",
          "name": "What is the reducing balance method?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reducing balance method means interest is calculated on the remaining principal balance each month. As you pay down the principal, the interest portion decreases and more of your payment goes toward principal. This is the standard method for home loans, personal loans, and auto loans. Our calculator uses this method for accurate calculations."
          }
        },
        {
          "@type": "Question",
          "name": "How much interest can I save by making extra payments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Extra payments save significant interest because they go directly toward principal, reducing the balance on which interest is calculated. For example, paying an extra $200/month on a $50,000 loan at 8.5% for 5 years can save $2,000+ in interest and shave 6-12 months off your loan term. Use our sensitivity analysis to see the impact of different extra payment amounts."
          }
        },
        {
          "@type": "Question",
          "name": "Should I pay extra on my loan or invest the money?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If your loan interest rate is higher than expected investment returns (typically 7-8%), paying extra on the loan is better. For example, paying off an 8.5% loan is like earning a guaranteed 8.5% return. However, if you have low-rate debt (<4%) and can invest at higher returns, investing might make sense. Use our 'Should I Pay Off Debt or Invest' calculator to compare."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between EMI and principal payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EMI is your total monthly payment (principal + interest). The principal portion is the amount that reduces your loan balance. Early in the loan, most of your EMI goes toward interest. As the balance decreases, more goes toward principal. Extra payments go 100% toward principal, accelerating payoff."
          }
        },
        {
          "@type": "Question",
          "name": "Can I reduce my EMI by extending the loan tenure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, extending the loan tenure reduces your monthly EMI but increases total interest paid. For example, a $50,000 loan at 8.5%: 5 years = $1,026/month EMI, $11,560 total interest. 10 years = $620/month EMI, $24,400 total interest. You pay less monthly but $12,840 more in interest. Our calculator shows both scenarios."
          }
        },
        {
          "@type": "Question",
          "name": "How does prepayment affect my loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Prepayment (extra payments) reduces your principal balance immediately, which means: 1) Less interest accrues each month, 2) More of your regular EMI goes toward principal, 3) You pay off the loan faster, 4) You save thousands in interest. Our calculator shows exactly how much you'll save and how many months you'll shave off."
          }
        },
        {
          "@type": "Question",
          "name": "What is amortization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amortization is the process of paying off a loan through regular payments over time. Each payment covers both interest and principal. Early payments are mostly interest; later payments are mostly principal. Our calculator shows your amortization schedule, showing how your balance decreases over time."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = 'faq-schema-emi';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema-emi');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <article className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-500 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">EMI <span className="text-indigo-600">Accelerator</span></h1>
          <p className="text-slate-500 mt-2 max-w-lg font-medium text-lg">Calculate your loan repayments and quantify the ROI of early debt repayment through reducing balance principal injection.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full md:w-auto relative z-10">
          <section className="bg-slate-900 px-8 py-6 rounded-[2.5rem] text-white">
            <h2 className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-1">Time Saved</h2>
            <p className="text-3xl font-black tracking-tighter">{stats.monthsSaved} <span className="text-sm">Months</span></p>
          </section>
          <section className="bg-indigo-600 px-8 py-6 rounded-[2.5rem] text-white shadow-xl shadow-indigo-100 border border-indigo-500">
            <h2 className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-100 mb-1">Interest Saved</h2>
            <p className="text-3xl font-black tracking-tighter">${Math.round(stats.interestSaved).toLocaleString()}</p>
          </section>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <section className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] border-b pb-4">Loan Parameter Console</h3>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-end px-2">
                  <label htmlFor="loanAmount" className="text-[10px] font-black text-slate-900 uppercase">Loan Principal ($)</label>
                  <span className="text-sm font-black text-indigo-600">${loanAmount.toLocaleString()}</span>
                </div>
                <input id="loanAmount" type="range" min="5000" max="1000000" step="5000" value={loanAmount} onChange={e => setLoanAmount(Number(e.target.value))} className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" aria-label="Loan Principal Amount" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="interestRate" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">APR (%)</label>
                  <input id="interestRate" type="number" step="0.1" value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="tenure" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Term (Yrs)</label>
                  <input id="tenure" type="number" value={tenure} onChange={e => setTenure(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-black text-slate-700" />
                </div>
              </div>

              <div className="pt-8 border-t border-slate-50 space-y-4">
                <div className="flex justify-between items-end px-2">
                  <label htmlFor="extraPayment" className="text-[10px] font-black text-emerald-600 uppercase">Extra Monthly Payment ($)</label>
                  <span className="text-sm font-black text-emerald-600">${extraPayment}</span>
                </div>
                <input id="extraPayment" type="range" min="0" max="5000" step="50" value={extraPayment} onChange={e => setExtraPayment(Number(e.target.value))} className="w-full h-1.5 bg-emerald-50 rounded-lg appearance-none cursor-pointer accent-emerald-500" aria-label="Extra Monthly Prepayment" />
              </div>
            </div>
          </section>

          <aside className="bg-slate-900 p-8 rounded-[3rem] text-white space-y-6 shadow-2xl relative overflow-hidden">
             <div className="flex items-start gap-4 relative z-10">
                <div className="text-4xl" aria-hidden="true">🤖</div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-indigo-400 font-black uppercase text-[10px] tracking-widest">Prepayment Triage</h3>
                  {loadingAdvice ? (
                    <div className="h-4 bg-white/10 rounded w-full animate-pulse"></div>
                  ) : (
                    <p className="text-lg text-slate-200 italic font-medium leading-relaxed">{advice}</p>
                  )}
                </div>
             </div>
             <div className="absolute -right-10 -bottom-10 text-[140px] font-black text-white/5 pointer-events-none select-none">ROI</div>
          </aside>
        </div>

        <div className="lg:col-span-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <section className="bg-indigo-50 p-8 rounded-[3rem] border border-indigo-100 text-center flex flex-col justify-center">
               <h3 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">Standard Monthly EMI</h3>
               <p className="text-3xl font-black text-indigo-700">${Math.round(stats.monthlyEmi).toLocaleString()}</p>
            </section>
            <section className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm text-center flex flex-col justify-center">
               <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Interest (Base)</h3>
               <p className="text-3xl font-black text-slate-900">${Math.round(stats.totalInterestWithoutExtra).toLocaleString()}</p>
            </section>
            <section className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm text-center flex flex-col justify-center">
               <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Payoff Duration</h3>
               <p className="text-3xl font-black text-emerald-600">{stats.monthsWithExtra} <span className="text-xs">Mo.</span></p>
            </section>
          </div>

          <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
             <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-black text-slate-900">Prepayment Sensitivity Analysis</h3>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Impact of monthly extra payment on total cost & time</p>
                </div>
                <span className="text-[9px] font-black text-indigo-400 bg-indigo-50 px-3 py-1 rounded-full">Institutional Grade Model</span>
             </div>
             <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={sensitivityData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="extra" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                    <YAxis yAxisId="left" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                    <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                    <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase'}} />
                    <Bar yAxisId="left" dataKey="interestSaved" name="Interest Saved ($)" fill="#6366f1" radius={[10, 10, 0, 0]} />
                    <Line yAxisId="right" type="monotone" dataKey="monthsSaved" name="Months Saved" stroke="#10b981" strokeWidth={4} dot={{r: 6, fill: '#10b981', strokeWidth: 2, stroke: '#fff'}} />
                  </ComposedChart>
                </ResponsiveContainer>
             </div>
          </section>

          <section className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
             <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8 ml-2">Loan Payoff Trajectory (Balance over Time)</h3>
             <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={stats.schedule}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} label={{ value: 'Months', position: 'insideBottomRight', offset: -10, fontSize: 8 }} />
                    <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                    <Area type="monotone" dataKey="balance" stroke="#6366f1" strokeWidth={4} fill="#6366f1" fillOpacity={0.05} />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </section>
        </div>
      </div>

      <section className="mt-20 pt-16 border-t border-slate-200 space-y-16">
        <header className="max-w-3xl">
          <h3 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em] mb-4">Verification QA & Framework</h3>
          <h2 className="text-4xl font-black text-slate-900 leading-tight">Beyond the <span className="text-indigo-600">Calculator</span></h2>
          <p className="text-slate-500 mt-4 text-lg font-medium leading-relaxed">
            QuantCurb utilizes <strong>Reducing Balance Amortization</strong>, the institutional standard for global lending. Understanding how your extra payments interact with the interest floor is key to financial leverage.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          <section className="space-y-6">
            <h3 className="text-xl font-black text-slate-900 border-l-4 border-indigo-600 pl-6">The Prepayment Effect</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Every dollar added to your EMI goes 100% toward the <strong>Principal Balance</strong>. This creates a compounding savings loop: lower principal leads to lower interest next month, which allows more of your standard EMI to go toward principal.
            </p>
          </section>
          <section className="space-y-6">
            <h3 className="text-xl font-black text-slate-900 border-l-4 border-slate-900 pl-6">Amortization Math</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Interest is computed monthly using the periodic rate (APR/12). Our engine solves for the intersection of principal reduction and extra payment velocity to provide a high-fidelity payoff timestamp.
            </p>
          </section>
          <section className="space-y-6">
            <h3 className="text-xl font-black text-slate-900 border-l-4 border-emerald-600 pl-6">Economic ROI</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Prepaying a loan with 8.5% interest is mathematically equivalent to achieving a <strong>guaranteed 8.5% post-tax return</strong> on your investment. In a volatile market, debt reduction is often the most stable wealth-building strategy.
            </p>
          </section>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200">
        <h2 className="text-2xl font-black text-slate-900 mb-6">Related Resources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">🏠 Mortgage Calculator</h3>
            <p className="text-sm text-slate-600">Calculate mortgage payments, PITI, PMI, and see how extra payments save interest on home loans.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.CREDIT_CARD_PAYOFF)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">💳 Credit Card Payoff Calculator</h3>
            <p className="text-sm text-slate-600">Compare Avalanche vs Snowball methods to pay off credit card debt faster.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.LOAN_COMPARE)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">⚖️ Loan Comparison Tool</h3>
            <p className="text-sm text-slate-600">Compare different loan offers, interest rates, and terms to find the best deal.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_DEBT_OR_INVEST)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">📖 Should I Pay Off Debt or Invest?</h3>
            <p className="text-sm text-slate-600">Learn when to prioritize debt payoff vs investing based on interest rates and returns.</p>
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <CalculatorFAQ
        calculatorName="EMI Calculator"
        calculatorUrl="https://quantcurb.com/emi-accelerator"
        faqs={[
          {
            question: "How do I calculate EMI (Equated Monthly Installment)?",
            answer: "EMI is calculated using the formula: EMI = [P × R × (1+R)^N] / [(1+R)^N - 1], where P = Principal, R = Monthly Interest Rate (APR/12), N = Number of Months. Our calculator uses the reducing balance method, which is the standard for most loans. Just enter your loan amount, interest rate, and tenure to get your monthly EMI."
          },
          {
            question: "What is the reducing balance method?",
            answer: "Reducing balance method means interest is calculated on the remaining principal balance each month. As you pay down the principal, the interest portion decreases and more of your payment goes toward principal. This is the standard method for home loans, personal loans, and auto loans. Our calculator uses this method for accurate calculations."
          },
          {
            question: "How much interest can I save by making extra payments?",
            answer: "Extra payments save significant interest because they go directly toward principal, reducing the balance on which interest is calculated. For example, paying an extra $200/month on a $50,000 loan at 8.5% for 5 years can save $2,000+ in interest and shave 6-12 months off your loan term. Use our sensitivity analysis to see the impact of different extra payment amounts."
          },
          {
            question: "Should I pay extra on my loan or invest the money?",
            answer: "If your loan interest rate is higher than expected investment returns (typically 7-8%), paying extra on the loan is better. For example, paying off an 8.5% loan is like earning a guaranteed 8.5% return. However, if you have low-rate debt (<4%) and can invest at higher returns, investing might make sense. Use our 'Should I Pay Off Debt or Invest' calculator to compare."
          },
          {
            question: "What's the difference between EMI and principal payment?",
            answer: "EMI is your total monthly payment (principal + interest). The principal portion is the amount that reduces your loan balance. Early in the loan, most of your EMI goes toward interest. As the balance decreases, more goes toward principal. Extra payments go 100% toward principal, accelerating payoff."
          },
          {
            question: "Can I reduce my EMI by extending the loan tenure?",
            answer: "Yes, extending the loan tenure reduces your monthly EMI but increases total interest paid. For example, a $50,000 loan at 8.5%: 5 years = $1,026/month EMI, $11,560 total interest. 10 years = $620/month EMI, $24,400 total interest. You pay less monthly but $12,840 more in interest. Our calculator shows both scenarios."
          },
          {
            question: "How does prepayment affect my loan?",
            answer: "Prepayment (extra payments) reduces your principal balance immediately, which means: 1) Less interest accrues each month, 2) More of your regular EMI goes toward principal, 3) You pay off the loan faster, 4) You save thousands in interest. Our calculator shows exactly how much you'll save and how many months you'll shave off."
          },
          {
            question: "What is amortization?",
            answer: "Amortization is the process of paying off a loan through regular payments over time. Each payment covers both interest and principal. Early payments are mostly interest; later payments are mostly principal. Our calculator shows your amortization schedule, showing how your balance decreases over time."
          }
        ]}
      />

      <footer className="text-center pt-16 border-t border-slate-100">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-8">QuantCurb Debt Engineering Hub v4.0 • Institutional Modeling</p>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {[
            "Reducing Balance Method", "Interest Saved Matrix", "Principal Injection Logic", "Loan Term Optimization",
            "APR Sensitivity Grid", "Mortgage Triage", "Debt Payoff Simulation", "Financial Freedom Pathing"
          ].map(tag => (
            <span key={tag} className="px-5 py-2 bg-slate-100 text-slate-500 rounded-xl text-[10px] font-bold border border-slate-200/50">{tag}</span>
          ))}
        </div>
      </footer>
    </article>
  );
};

export default EMICalculator;

import React, { useState, useMemo, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';
import CalculatorFAQ from './CalculatorFAQ';
import RecommendedTools from './RecommendedTools';
import AdPlacement from './AdPlacement';
import { ToolType } from '../types';

interface DTICalculatorProps {
  onNavigate?: (tool: ToolType) => void;
}

const DTICalculator: React.FC<DTICalculatorProps> = ({ onNavigate }) => {
  // Monthly Income
  const [grossMonthlyIncome, setGrossMonthlyIncome] = useState<number>(7500);
  const [additionalIncome, setAdditionalIncome] = useState<number>(0);

  // Monthly Debt Payments
  const [mortgageOrRent, setMortgageOrRent] = useState<number>(2000);
  const [carPayments, setCarPayments] = useState<number>(400);
  const [studentLoans, setStudentLoans] = useState<number>(300);
  const [creditCards, setCreditCards] = useState<number>(150);
  const [personalLoans, setPersonalLoans] = useState<number>(0);
  const [otherDebts, setOtherDebts] = useState<number>(0);

  // AI Advice
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState(false);

  const calculations = useMemo(() => {
    const totalMonthlyIncome = grossMonthlyIncome + additionalIncome;
    const totalMonthlyDebts = mortgageOrRent + carPayments + studentLoans + creditCards + personalLoans + otherDebts;

    // Front-end ratio (housing only)
    const frontEndRatio = totalMonthlyIncome > 0 ? (mortgageOrRent / totalMonthlyIncome) * 100 : 0;

    // Back-end ratio (all debts)
    const backEndRatio = totalMonthlyIncome > 0 ? (totalMonthlyDebts / totalMonthlyIncome) * 100 : 0;

    // Determine DTI health status
    let status = 'excellent';
    let statusColor = 'emerald';
    let statusMessage = 'Excellent! You have very low debt relative to income.';

    if (backEndRatio > 50) {
      status = 'critical';
      statusColor = 'red';
      statusMessage = 'Critical: Your DTI is too high. Lenders will likely deny loans.';
    } else if (backEndRatio > 43) {
      status = 'poor';
      statusColor = 'orange';
      statusMessage = 'Poor: Your DTI exceeds most lender limits. Reduce debt before applying for loans.';
    } else if (backEndRatio > 36) {
      status = 'fair';
      statusColor = 'yellow';
      statusMessage = 'Fair: Your DTI is manageable but leaves little room for emergencies. Consider reducing debt.';
    } else if (backEndRatio > 28) {
      status = 'good';
      statusColor = 'blue';
      statusMessage = 'Good: Your DTI is within acceptable range. Most lenders will approve you.';
    }

    // Calculate maximum affordable debt at different DTI targets
    const maxDebtAt28 = (totalMonthlyIncome * 0.28);
    const maxDebtAt36 = (totalMonthlyIncome * 0.36);
    const maxDebtAt43 = (totalMonthlyIncome * 0.43);

    return {
      totalMonthlyIncome,
      totalMonthlyDebts,
      frontEndRatio,
      backEndRatio,
      status,
      statusColor,
      statusMessage,
      maxDebtAt28,
      maxDebtAt36,
      maxDebtAt43,
      remainingDebtCapacity: maxDebtAt36 - totalMonthlyDebts,
      annualIncome: totalMonthlyIncome * 12,
      annualDebtPayments: totalMonthlyDebts * 12
    };
  }, [grossMonthlyIncome, additionalIncome, mortgageOrRent, carPayments, studentLoans, creditCards, personalLoans, otherDebts]);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const prompt = `User has ${calculations.backEndRatio.toFixed(1)}% DTI ratio (${calculations.status}). Monthly income: $${calculations.totalMonthlyIncome.toLocaleString()}, monthly debts: $${calculations.totalMonthlyDebts.toLocaleString()}. Housing: $${mortgageOrRent}, car: $${carPayments}, student loans: $${studentLoans}, credit cards: $${creditCards}. Provide 2-3 sentence actionable advice on improving DTI or qualification strategies.`;
    const msg = await getFinancialAdvice(prompt, 'general');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [grossMonthlyIncome, additionalIncome, mortgageOrRent, carPayments, studentLoans, creditCards, personalLoans, otherDebts]);

  useEffect(() => {
    // Add HowTo schema for "How to calculate debt-to-income ratio"
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Calculate Your Debt-to-Income (DTI) Ratio for Mortgage Approval",
      "description": "Step-by-step guide to calculating your debt-to-income ratio to determine if you qualify for a mortgage or loan. Learn the 28/36 rule used by lenders.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Calculate Total Monthly Income",
          "text": "Add up your gross monthly income (before taxes) from all sources including salary, bonuses, rental income, and side income."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "List All Monthly Debt Payments",
          "text": "List all minimum monthly debt payments: mortgage/rent, car loans, student loans, credit cards, personal loans, and other recurring debts."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Calculate Front-End Ratio",
          "text": "Divide your monthly housing costs (mortgage, property tax, insurance, HOA) by your gross monthly income. Multiply by 100 to get percentage. Lenders prefer 28% or less."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Calculate Back-End Ratio",
          "text": "Divide your total monthly debt payments by your gross monthly income. Multiply by 100. This is your DTI ratio. Lenders prefer 36% or less, with 43% as the maximum for most loans."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Compare to Lender Requirements",
          "text": "Excellent DTI: <28%. Good DTI: 28-36%. Fair DTI: 36-43%. Poor DTI: >43%. FHA loans allow up to 43%, conventional loans prefer 36% or less."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Improve Your DTI if Needed",
          "text": "To improve DTI: increase income, pay down high-interest debt, avoid new debt, consider debt consolidation, or make extra payments on existing debt."
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(howToSchema);
    script.id = 'howto-schema-dti';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('howto-schema-dti');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const pieData = [
    { name: 'Available Income', value: Math.max(0, calculations.totalMonthlyIncome - calculations.totalMonthlyDebts), color: '#10b981' },
    { name: 'Debt Payments', value: calculations.totalMonthlyDebts, color: '#ef4444' }
  ];

  const debtBreakdown = [
    { name: 'Housing', value: mortgageOrRent, color: '#6366f1' },
    { name: 'Auto', value: carPayments, color: '#8b5cf6' },
    { name: 'Student Loans', value: studentLoans, color: '#ec4899' },
    { name: 'Credit Cards', value: creditCards, color: '#f59e0b' },
    { name: 'Personal Loans', value: personalLoans, color: '#14b8a6' },
    { name: 'Other', value: otherDebts, color: '#64748b' }
  ].filter(item => item.value > 0);

  return (
    <article className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-500 pb-24">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-10 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -mr-32"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">Mortgage Qualifier</span>
            <span className="text-blue-200 font-bold text-[10px] uppercase tracking-widest">28/36 Rule Calculator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Debt-to-Income <span className="text-blue-300">Ratio Calculator</span>
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl font-medium leading-relaxed">
            Calculate your DTI ratio to see if you qualify for a mortgage or loan. Lenders use the 28/36 rule: housing costs ≤28%, total debt ≤36% of gross income.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-2xl">
              <div className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Your DTI Ratio</div>
              <div className="text-3xl font-black">{calculations.backEndRatio.toFixed(1)}%</div>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-2xl">
              <div className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Status</div>
              <div className={`text-2xl font-black text-${calculations.statusColor}-300`}>{calculations.status.toUpperCase()}</div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <div className="lg:col-span-1 space-y-6">
          <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-6">Monthly Income</h3>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Gross Monthly Income</label>
                <input
                  type="number"
                  value={grossMonthlyIncome}
                  onChange={(e) => setGrossMonthlyIncome(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-lg font-semibold"
                />
                <p className="text-xs text-slate-500 mt-1">Before taxes (salary, wages)</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Additional Income (Optional)</label>
                <input
                  type="number"
                  value={additionalIncome}
                  onChange={(e) => setAdditionalIncome(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-lg font-semibold"
                />
                <p className="text-xs text-slate-500 mt-1">Bonuses, rental, side income</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-6">Monthly Debt Payments</h3>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Mortgage/Rent Payment</label>
                <input
                  type="number"
                  value={mortgageOrRent}
                  onChange={(e) => setMortgageOrRent(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-lg font-semibold"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Car Payments</label>
                <input
                  type="number"
                  value={carPayments}
                  onChange={(e) => setCarPayments(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-lg font-semibold"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Student Loans</label>
                <input
                  type="number"
                  value={studentLoans}
                  onChange={(e) => setStudentLoans(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-lg font-semibold"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Credit Card Minimums</label>
                <input
                  type="number"
                  value={creditCards}
                  onChange={(e) => setCreditCards(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-lg font-semibold"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Personal Loans</label>
                <input
                  type="number"
                  value={personalLoans}
                  onChange={(e) => setPersonalLoans(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-lg font-semibold"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Other Debts</label>
                <input
                  type="number"
                  value={otherDebts}
                  onChange={(e) => setOtherDebts(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all text-lg font-semibold"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Results Section */}
        <div className="lg:col-span-2 space-y-8">
          {/* DTI Status Card */}
          <section className={`bg-gradient-to-br from-${calculations.statusColor}-50 to-white p-8 rounded-3xl border-2 border-${calculations.statusColor}-200 shadow-lg`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-slate-900">Your DTI Analysis</h3>
              <div className={`px-6 py-2 bg-${calculations.statusColor}-500 text-white rounded-full font-black text-sm uppercase tracking-wider`}>
                {calculations.status}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="text-sm font-bold text-slate-600 mb-2">Front-End Ratio (Housing Only)</div>
                <div className="text-4xl font-black text-indigo-600 mb-2">{calculations.frontEndRatio.toFixed(1)}%</div>
                <div className="text-xs text-slate-500">Lenders prefer ≤28%</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="text-sm font-bold text-slate-600 mb-2">Back-End Ratio (All Debt)</div>
                <div className="text-4xl font-black text-rose-600 mb-2">{calculations.backEndRatio.toFixed(1)}%</div>
                <div className="text-xs text-slate-500">Lenders prefer ≤36%</div>
              </div>
            </div>

            <div className={`bg-${calculations.statusColor}-100 border-2 border-${calculations.statusColor}-300 rounded-2xl p-6`}>
              <p className="text-slate-800 font-semibold leading-relaxed">{calculations.statusMessage}</p>
            </div>
          </section>

          {/* Income vs Debt Visualization */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-6">Income vs Debt Breakdown</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: any) => `$${Number(value).toLocaleString()}`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={debtBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {debtBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: any) => `$${Number(value).toLocaleString()}`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          {/* Maximum Affordable Debt */}
          <section className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-3xl border border-indigo-200 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-6">Maximum Affordable Debt by DTI Target</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-2xl border-2 border-emerald-300">
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">Excellent (28%)</div>
                <div className="text-3xl font-black text-emerald-600">${calculations.maxDebtAt28.toFixed(0)}</div>
                <div className="text-xs text-slate-500 mt-2">per month</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-blue-300">
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">Good (36%)</div>
                <div className="text-3xl font-black text-blue-600">${calculations.maxDebtAt36.toFixed(0)}</div>
                <div className="text-xs text-slate-500 mt-2">per month</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-orange-300">
                <div className="text-xs font-bold text-orange-700 uppercase tracking-wider mb-2">Max (43%)</div>
                <div className="text-3xl font-black text-orange-600">${calculations.maxDebtAt43.toFixed(0)}</div>
                <div className="text-xs text-slate-500 mt-2">per month</div>
              </div>
            </div>

            <div className="mt-6 bg-indigo-100 border-2 border-indigo-300 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">💡</span>
                <span className="font-black text-indigo-900">Remaining Debt Capacity</span>
              </div>
              <p className="text-slate-700">
                {calculations.remainingDebtCapacity > 0 ? (
                  <>You can afford up to <strong>${calculations.remainingDebtCapacity.toFixed(0)}/month</strong> in additional debt while staying within the 36% guideline.</>
                ) : (
                  <>You're currently <strong>${Math.abs(calculations.remainingDebtCapacity).toFixed(0)}/month</strong> over the 36% guideline. Pay down debt before taking on more.</>
                )}
              </p>
            </div>
          </section>

          {/* AI Advice */}
          {advice && (
            <section className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border border-purple-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🤖</span>
                <h3 className="text-xl font-black text-slate-900">AI-Powered Advice</h3>
              </div>
              {loadingAdvice ? (
                <div className="flex items-center gap-3 text-slate-500">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
                  <span>Analyzing your DTI ratio...</span>
                </div>
              ) : (
                <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{advice}</p>
              )}
            </section>
          )}
        </div>
      </div>

      {/* AdPlacement */}
      <AdPlacement size="responsive" position="middle" />

      {/* FAQ Section */}
      <CalculatorFAQ
        calculatorName="Debt-to-Income Ratio Calculator"
        calculatorUrl="https://quantcurb.com/debt-to-income-ratio-calculator"
        faqs={[
          {
            question: "What is debt-to-income ratio and how do I calculate it?",
            answer: "Debt-to-income (DTI) ratio is your total monthly debt payments divided by your gross monthly income, expressed as a percentage. For example, if you have $2,500 in monthly debt payments and $7,500 in monthly income, your DTI is 33% ($2,500 / $7,500 = 0.33). Lenders use this to determine if you can afford a loan."
          },
          {
            question: "What is a good debt-to-income ratio?",
            answer: "A good DTI ratio is 36% or lower. Excellent is below 28%, good is 28-36%, fair is 36-43%, and poor is above 43%. Most lenders prefer 36% or less, though FHA loans allow up to 43%. The lower your DTI, the better your chances of loan approval and favorable interest rates."
          },
          {
            question: "What is the 28/36 rule for debt-to-income ratio?",
            answer: "The 28/36 rule states that your housing costs should not exceed 28% of gross monthly income (front-end ratio), and your total debt payments should not exceed 36% (back-end ratio). For example, with $7,500 monthly income, housing should be below $2,100 and total debts below $2,700."
          },
          {
            question: "What debts are included in DTI ratio?",
            answer: "DTI includes all recurring monthly debt payments: mortgage or rent, car loans, student loans, credit card minimum payments, personal loans, and other installment debts. It does NOT include utilities, groceries, insurance premiums (except mortgage insurance), or other living expenses."
          },
          {
            question: "What is the maximum DTI ratio for a mortgage?",
            answer: "Maximum DTI for mortgages: Conventional loans typically allow 43-45%, FHA loans allow 43% (up to 50% with compensating factors), VA loans allow 41%, and USDA loans allow 41%. Some lenders may go higher with excellent credit and compensating factors."
          },
          {
            question: "How can I lower my debt-to-income ratio?",
            answer: "To lower DTI: 1) Pay off high-interest debt first, 2) Increase income through raises, side jobs, or bonuses, 3) Avoid taking on new debt, 4) Make extra payments on existing debt, 5) Consider debt consolidation, 6) Refinance high-interest loans to lower payments, 7) Ask for credit card limit increases without increasing spending."
          },
          {
            question: "Does DTI include rent or just mortgage?",
            answer: "DTI includes both rent and mortgage. If you're renting, your monthly rent payment is included. If you're applying for a mortgage, lenders use your proposed mortgage payment (including principal, interest, taxes, insurance, and HOA fees) in the DTI calculation, not your current rent."
          },
          {
            question: "What is front-end vs back-end DTI ratio?",
            answer: "Front-end DTI is housing costs only (mortgage, taxes, insurance, HOA) divided by income. Lenders prefer 28% or less. Back-end DTI is ALL debt payments (housing + car loans + student loans + credit cards, etc.) divided by income. Lenders prefer 36% or less. Back-end DTI is what's typically referred to as 'DTI ratio'."
          }
        ]}
      />

      {/* Recommended Tools */}
      <RecommendedTools calculatorType="mortgage" />
    </article>
  );
};

export default DTICalculator;

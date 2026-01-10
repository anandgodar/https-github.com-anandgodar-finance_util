
import React, { useState, useMemo, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ComposedChart, Line } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';
import CalculatorFAQ from './CalculatorFAQ';
import { ToolType } from '../types';

interface InvestmentCalculatorProps {
  onNavigate?: (tool: ToolType) => void;
}

const InvestmentCalculator: React.FC<InvestmentCalculatorProps> = ({ onNavigate }) => {
  const [initialInvestment, setInitialInvestment] = useState<number>(10000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500);
  const [expectedReturn, setExpectedReturn] = useState<number>(10);
  const [years, setYears] = useState<number>(20);
  const [inflationRate, setInflationRate] = useState<number>(2.5);
  const [showInflationAdjusted, setShowInflationAdjusted] = useState<boolean>(true);
  const [targetGoal, setTargetGoal] = useState<number>(0); // Goal-based investing
  const [targetDate, setTargetDate] = useState<number>(0); // Years to goal
  const [dividendYield, setDividendYield] = useState<number>(0); // Dividend yield for DRIP
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const data = useMemo(() => {
    let balance = initialInvestment;
    let totalInvested = initialInvestment;
    const monthlyRate = expectedReturn / 100 / 12;
    const monthlyDividendRate = dividendYield / 100 / 12; // Dividend reinvestment
    const result = [];
    for (let i = 0; i <= years; i++) {
      const earnings = balance - totalInvested;
      result.push({ 
        year: `Year ${i}`, 
        balance: Math.round(balance), 
        invested: Math.round(totalInvested),
        earnings: Math.round(earnings),
        dividends: Math.round(balance * monthlyDividendRate * 12 * i) // Cumulative dividends
      });
      for (let m = 0; m < 12; m++) {
        // Add monthly contribution
        balance = balance + monthlyContribution;
        totalInvested += monthlyContribution;
        // Apply investment return
        balance = balance * (1 + monthlyRate);
        // Apply dividend reinvestment (DRIP)
        if (dividendYield > 0) {
          const dividend = balance * monthlyDividendRate;
          balance = balance + dividend; // Reinvest dividends
        }
      }
    }
    return result;
  }, [initialInvestment, monthlyContribution, expectedReturn, years, dividendYield]);

  const finalStats = useMemo(() => {
    const last = data[data.length - 1];
    return { 
      finalBalance: last.balance, 
      totalInvested: last.invested, 
      totalEarnings: last.balance - last.invested,
      totalDividends: last.dividends
    };
  }, [data]);

  // Goal-based investing: Calculate required monthly contribution to reach target
  const goalCalculation = useMemo(() => {
    if (targetGoal <= 0 || targetDate <= 0) return null;
    
    const monthlyRate = expectedReturn / 100 / 12;
    const totalMonths = targetDate * 12;
    const futureValueOfInitial = initialInvestment * Math.pow(1 + monthlyRate, totalMonths);
    const remainingNeeded = targetGoal - futureValueOfInitial;
    
    if (remainingNeeded <= 0) {
      return { requiredMonthly: 0, achievable: true, message: 'Your initial investment alone will reach the goal!' };
    }
    
    // Calculate required monthly contribution using future value of annuity formula
    const requiredMonthly = remainingNeeded / (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate));
    
    return {
      requiredMonthly: Math.max(0, requiredMonthly),
      achievable: requiredMonthly >= 0 && requiredMonthly < monthlyContribution * 10, // Reasonable limit
      message: requiredMonthly > monthlyContribution * 10 
        ? 'Goal may be too ambitious. Consider extending timeline or reducing target.'
        : `You need to invest $${Math.round(requiredMonthly).toLocaleString()}/month to reach your goal.`
    };
  }, [targetGoal, targetDate, expectedReturn, initialInvestment, monthlyContribution]);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const msg = await getFinancialAdvice(finalStats, 'Investment Growth Strategy');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [initialInvestment, monthlyContribution, expectedReturn, years]);

  useEffect(() => {
    // Add HowTo schema for "How to calculate investment growth"
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Calculate Investment Growth with Compound Interest",
      "description": "Step-by-step guide to calculating investment growth using compound interest, SIP investing, and dividend reinvestment.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Enter Initial Investment",
          "text": "Enter your starting investment amount (lump sum you're investing today)."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Set Monthly Contribution",
          "text": "Enter your monthly SIP (Systematic Investment Plan) contribution amount."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Enter Expected Return",
          "text": "Enter your expected annual return percentage (typically 7-10% for index funds over long term)."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Set Time Horizon",
          "text": "Enter the number of years you plan to invest."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Add Dividend Yield (Optional)",
          "text": "If investing in dividend stocks, enter the dividend yield percentage for DRIP (Dividend Reinvestment Plan) calculations."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Set Goal (Optional)",
          "text": "Enter a target amount and timeline to see if you're on track or calculate required monthly contribution."
        },
        {
          "@type": "HowToStep",
          "position": 7,
          "name": "Review Results",
          "text": "The calculator shows your projected portfolio value, total invested, total earnings, and return on investment."
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(howToSchema);
    script.id = 'howto-schema-investment';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('howto-schema-investment');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <header>
        <h2 className="text-3xl font-black text-slate-900">Wealth <span className="text-indigo-600">Projector</span></h2>
        <p className="text-slate-500 mt-1">Visualize your financial future through the power of compounding.</p>
      </header>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Initial Investment ($)</label>
            <input type="number" value={initialInvestment} onChange={(e) => setInitialInvestment(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Monthly Contribution ($)</label>
            <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Expected Return (%)</label>
            <input type="number" step="0.1" value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Time Horizon (Years)</label>
            <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Dividend Yield (%)</label>
            <input 
              type="number" 
              step="0.1" 
              value={dividendYield} 
              onChange={(e) => setDividendYield(Number(e.target.value))} 
              className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold" 
              placeholder="0"
            />
            <p className="text-xs text-slate-500 mt-1">For DRIP (Dividend Reinvestment Plan)</p>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative shadow-2xl overflow-hidden">
             <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">Estimated Portfolio Value</p>
             <h3 className="text-6xl font-black tracking-tighter">${finalStats.finalBalance.toLocaleString()}</h3>
             <div className="absolute -right-10 -bottom-10 text-[200px] text-white/5 font-black">GROWTH</div>
          </div>

          {/* Goal-Based Investing Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200">
            <h3 className="text-lg font-black text-slate-900 mb-4">Goal-Based Investing</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-2">Target Amount ($)</label>
                <input 
                  type="number" 
                  value={targetGoal} 
                  onChange={(e) => setTargetGoal(Number(e.target.value))} 
                  className="w-full p-3 bg-white border border-slate-200 rounded-xl font-bold" 
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-2">Years to Goal</label>
                <input 
                  type="number" 
                  value={targetDate} 
                  onChange={(e) => setTargetDate(Number(e.target.value))} 
                  className="w-full p-3 bg-white border border-slate-200 rounded-xl font-bold" 
                  placeholder="0"
                />
              </div>
            </div>
            {goalCalculation && (
              <div className={`p-4 rounded-xl ${goalCalculation.achievable ? 'bg-emerald-50 border border-emerald-200' : 'bg-yellow-50 border border-yellow-200'}`}>
                <p className={`font-bold text-sm ${goalCalculation.achievable ? 'text-emerald-800' : 'text-yellow-800'}`}>
                  {goalCalculation.message}
                </p>
                {goalCalculation.requiredMonthly > 0 && (
                  <p className="text-xs text-slate-600 mt-2">
                    Current: ${monthlyContribution.toLocaleString()}/month | 
                    Required: ${Math.round(goalCalculation.requiredMonthly).toLocaleString()}/month | 
                    Gap: ${Math.round(Math.max(0, goalCalculation.requiredMonthly - monthlyContribution)).toLocaleString()}/month
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="balance" stroke="#4f46e5" strokeWidth={4} fill="#4f46e5" fillOpacity={0.1} />
                <Area type="monotone" dataKey="invested" stroke="#10b981" strokeWidth={2} fill="#10b981" fillOpacity={0.05} />
                {targetGoal > 0 && (
                  <Line type="monotone" dataKey={() => targetGoal} stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" />
                )}
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total Invested</p>
              <p className="text-2xl font-black text-slate-900">${finalStats.totalInvested.toLocaleString()}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total Earnings</p>
              <p className="text-2xl font-black text-emerald-600">${finalStats.totalEarnings.toLocaleString()}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Return on Investment</p>
              <p className="text-2xl font-black text-indigo-600">
                {finalStats.totalInvested > 0 ? ((finalStats.totalEarnings / finalStats.totalInvested) * 100).toFixed(1) : 0}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-16 pt-12 border-t border-slate-200 grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Why use this?</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Compound interest is the 8th wonder of the world. Seeing how consistent $500/month grows over 30 years vs 20 years is a powerful motivator to <strong>start early</strong>. It helps you set realistic goals for retirement or major life events.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">How it works</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            The calculator uses the compound interest formula with monthly additions. It assumes your returns are reinvested and compounded monthly, which is the standard model for index fund investing and modern brokerage accounts.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Examples</h4>
          <ul className="text-sm text-slate-500 space-y-2 font-medium">
            <li>• Retirement: $1000/mo @ 8% for 35 yrs</li>
            <li>• Child's College: $200/mo @ 7% for 18 yrs</li>
            <li>• House Downpayment: $2000/mo @ 5% for 5 yrs</li>
          </ul>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200">
        <h2 className="text-2xl font-black text-slate-900 mb-6">Related Resources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.BLOG_INVESTMENT_GUIDE)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">📖 Investment Calculator Guide 2025</h3>
            <p className="text-sm text-slate-600">Complete guide to SIP investing, compound interest, and wealth growth strategies.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.FIRE_PLANNER)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">🔥 FIRE Planner</h3>
            <p className="text-sm text-slate-600">Calculate your early retirement number and plan your path to financial independence.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.RETIREMENT_OPTIMIZER)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">🎯 Retirement Account Optimizer</h3>
            <p className="text-sm text-slate-600">Maximize your 401(k) and IRA contributions for tax-advantaged growth.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.DRIP_CALCULATOR)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">💹 Dividend Reinvestment Calculator</h3>
            <p className="text-sm text-slate-600">Calculate the power of dividend reinvestment and compound growth.</p>
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <CalculatorFAQ
        calculatorName="Investment Calculator"
        calculatorUrl="https://quantcurb.com/wealth-investment-projector"
        faqs={[
          {
            question: "How do I calculate investment growth with compound interest?",
            answer: "Compound interest means your investment earnings generate their own earnings. Use our calculator by entering your initial investment, monthly contribution (SIP), expected return rate, and time horizon. The calculator automatically compounds returns monthly and shows your projected portfolio value, total invested, and total earnings."
          },
          {
            question: "What is SIP (Systematic Investment Plan)?",
            answer: "SIP is investing a fixed amount regularly (monthly, quarterly) regardless of market conditions. This approach uses dollar-cost averaging (buying more shares when prices are low, fewer when high) and compounds faster due to regular contributions. Our calculator models SIP investing with monthly contributions."
          },
          {
            question: "What is a realistic expected return for long-term investing?",
            answer: "Historical stock market returns average 7-10% annually over long periods (20+ years). For index funds and ETFs, 7-8% is a conservative estimate. Higher returns (10%+) assume more risk. Our calculator lets you adjust the expected return to see different scenarios."
          },
          {
            question: "How does dividend reinvestment (DRIP) affect returns?",
            answer: "Dividend reinvestment automatically reinvests dividends back into your investment, accelerating compound growth. For example, a 2% dividend yield reinvested over 20 years can add 20-30% to your final portfolio value. Enter your dividend yield percentage in our calculator to see the impact."
          },
          {
            question: "How much should I invest monthly to reach my goal?",
            answer: "Use our Goal-Based Investing feature! Enter your target amount and timeline, and the calculator shows the required monthly contribution. For example, to reach $1,000,000 in 30 years at 8% returns, you'd need to invest about $670/month (plus initial investment)."
          },
          {
            question: "What's the difference between investing $500/month for 20 years vs 30 years?",
            answer: "Time is the most powerful factor in compound interest. Investing $500/month at 8% for 20 years = ~$295,000. For 30 years = ~$745,000. That extra 10 years more than doubles your wealth due to compound interest. Our calculator shows the dramatic impact of starting early."
          },
          {
            question: "Should I invest in a lump sum or monthly (SIP)?",
            answer: "SIP (monthly investing) is generally better because: 1) Dollar-cost averaging reduces timing risk, 2) It's more affordable and sustainable, 3) You invest consistently regardless of market conditions. However, if you have a large lump sum, investing it immediately typically outperforms SIP over long periods. Our calculator shows both scenarios."
          },
          {
            question: "How do I account for inflation in my investment calculations?",
            answer: "Inflation reduces your purchasing power over time. If you earn 8% returns but inflation is 3%, your real return is 5%. Our calculator shows nominal returns. To see inflation-adjusted values, mentally reduce your final balance by 2-3% per year, or use a lower expected return rate (5-6% instead of 8%)."
          }
        ]}
      />
    </div>
  );
};

export default InvestmentCalculator;

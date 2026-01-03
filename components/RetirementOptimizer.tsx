
import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

const RetirementOptimizer: React.FC = () => {
  const [age, setAge] = useState<number>(35);
  const [income, setIncome] = useState<number>(100000);
  const [currentSavings, setCurrentSavings] = useState<number>(50000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(1500);
  const [employerMatch, setEmployerMatch] = useState<number>(3);
  const [taxBracket, setTaxBracket] = useState<number>(24);
  const [retirementAge, setRetirementAge] = useState<number>(65);
  const [expectedReturn, setExpectedReturn] = useState<number>(7);
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  // 2025 Contribution Limits
  const limits2025 = {
    k401: 23500,
    k401CatchUp: 7500, // Age 50+
    ira: 7000,
    iraCatchUp: 1000, // Age 50+
    rothIra: 7000,
    rothCatchUpTotal: 8000
  };

  const isCatchUpEligible = age >= 50;
  const yearsToRetirement = retirementAge - age;

  // Calculate projections
  const calculations = useMemo(() => {
    const annualContribution = monthlyContribution * 12;
    const employerMatchAmount = Math.min((income * employerMatch) / 100, limits2025.k401);
    const total401kContribution = Math.min(
      annualContribution + employerMatchAmount,
      isCatchUpEligible ? limits2025.k401 + limits2025.k401CatchUp : limits2025.k401
    );

    // Traditional 401k (Pre-tax)
    const taxSavings401k = total401kContribution * (taxBracket / 100);
    const netCost401k = total401kContribution - taxSavings401k;

    // Calculate future value for 401k
    const monthlyRate = expectedReturn / 100 / 12;
    const months = yearsToRetirement * 12;
    const fv401k = currentSavings * Math.pow(1 + monthlyRate, months) +
      (total401kContribution / 12) * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    // Traditional IRA (Pre-tax)
    const maxIRA = isCatchUpEligible ? limits2025.ira + limits2025.iraCatchUp : limits2025.ira;
    const iraContribution = Math.min(annualContribution, maxIRA);
    const taxSavingsIRA = iraContribution * (taxBracket / 100);
    const netCostIRA = iraContribution - taxSavingsIRA;
    const fvIRA = currentSavings * Math.pow(1 + monthlyRate, months) +
      (iraContribution / 12) * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    // Roth IRA (Post-tax, tax-free growth)
    const maxRothIRA = isCatchUpEligible ? limits2025.rothCatchUpTotal : limits2025.rothIra;
    const rothContribution = Math.min(annualContribution, maxRothIRA);
    const taxSavingsRoth = 0; // No upfront tax savings
    const netCostRoth = rothContribution;
    const fvRoth = currentSavings * Math.pow(1 + monthlyRate, months) +
      (rothContribution / 12) * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    // Tax implications at retirement (assuming same bracket)
    const taxOn401kWithdrawal = fv401k * (taxBracket / 100);
    const afterTax401k = fv401k - taxOn401kWithdrawal;
    const taxOnIRAWithdrawal = fvIRA * (taxBracket / 100);
    const afterTaxIRA = fvIRA - taxOnIRAWithdrawal;
    const afterTaxRoth = fvRoth; // Tax-free withdrawals

    return {
      traditional401k: {
        annualContribution: total401kContribution,
        employerMatch: employerMatchAmount,
        taxSavingsNow: taxSavings401k,
        netCost: netCost401k,
        futureValue: fv401k,
        afterTaxValue: afterTax401k,
        effectiveReturn: ((afterTax401k / (netCost401k * yearsToRetirement)) ** (1 / yearsToRetirement) - 1) * 100
      },
      traditionalIRA: {
        annualContribution: iraContribution,
        taxSavingsNow: taxSavingsIRA,
        netCost: netCostIRA,
        futureValue: fvIRA,
        afterTaxValue: afterTaxIRA,
        effectiveReturn: ((afterTaxIRA / (netCostIRA * yearsToRetirement)) ** (1 / yearsToRetirement) - 1) * 100
      },
      rothIRA: {
        annualContribution: rothContribution,
        taxSavingsNow: taxSavingsRoth,
        netCost: netCostRoth,
        futureValue: fvRoth,
        afterTaxValue: afterTaxRoth,
        effectiveReturn: ((afterTaxRoth / (netCostRoth * yearsToRetirement)) ** (1 / yearsToRetirement) - 1) * 100
      }
    };
  }, [age, income, currentSavings, monthlyContribution, employerMatch, taxBracket, retirementAge, expectedReturn, yearsToRetirement, isCatchUpEligible]);

  const chartData = [
    {
      name: '401(k) + Match',
      'After-Tax Value': Math.round(calculations.traditional401k.afterTaxValue),
      'Employer Match': Math.round(calculations.traditional401k.employerMatch * yearsToRetirement),
      'Tax Savings': Math.round(calculations.traditional401k.taxSavingsNow * yearsToRetirement)
    },
    {
      name: 'Traditional IRA',
      'After-Tax Value': Math.round(calculations.traditionalIRA.afterTaxValue),
      'Tax Savings': Math.round(calculations.traditionalIRA.taxSavingsNow * yearsToRetirement)
    },
    {
      name: 'Roth IRA',
      'After-Tax Value': Math.round(calculations.rothIRA.afterTaxValue),
      'Tax-Free Growth': Math.round(calculations.rothIRA.afterTaxValue - currentSavings - calculations.rothIRA.netCost * yearsToRetirement)
    }
  ];

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    try {
      const context = {
        age,
        income,
        monthlyContribution,
        taxBracket,
        yearsToRetirement,
        best: calculations.traditional401k.afterTaxValue > calculations.rothIRA.afterTaxValue ? '401k' : 'Roth'
      };
      const msg = await getFinancialAdvice(context, 'Retirement Account Strategy & Tax Optimization');
      setAdvice(msg || '');
    } catch (error) {
      console.error('Failed to fetch retirement advice:', error);
      setAdvice('Unable to load optimization advice at this time. Consider consulting a tax professional.');
    } finally {
      setLoadingAdvice(false);
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [age, income, taxBracket, monthlyContribution]);

  return (
    <article className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-500 pb-24">
      {/* Header */}
      <header className="bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 p-10 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -mr-32"></div>
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 bg-purple-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">Tax Alpha Protocol v2.0</span>
          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
            Retirement Account <span className="text-purple-400">Optimizer</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium max-w-4xl">
            Compare 401(k), Traditional IRA, and Roth IRA tax strategies. Maximize employer match, minimize lifetime tax burden, and model your optimal contribution path to retirement freedom.
          </p>
        </div>
      </header>

      {/* Input Section */}
      <div className="grid lg:grid-cols-2 gap-10">
        <section className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
          <header className="border-b border-slate-50 pb-6">
            <h2 className="text-2xl font-black text-slate-900">Personal Financial Profile</h2>
            <p className="text-slate-500 text-sm mt-2 font-medium">Enter your current situation for precise modeling</p>
          </header>

          <div className="space-y-6">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Current Age</label>
              <input
                type="number"
                value={age}
                onChange={e => setAge(Number(e.target.value))}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-2xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Annual Gross Income ($)</label>
              <input
                type="number"
                value={income}
                onChange={e => setIncome(Number(e.target.value))}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-2xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Current Retirement Savings ($)</label>
              <input
                type="number"
                value={currentSavings}
                onChange={e => setCurrentSavings(Number(e.target.value))}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-2xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Monthly Contribution ($)</label>
              <input
                type="number"
                value={monthlyContribution}
                onChange={e => setMonthlyContribution(Number(e.target.value))}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-2xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Employer Match (%)</label>
              <input
                type="number"
                value={employerMatch}
                onChange={e => setEmployerMatch(Number(e.target.value))}
                step="0.5"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-2xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Federal Tax Bracket (%)</label>
              <select
                value={taxBracket}
                onChange={e => setTaxBracket(Number(e.target.value))}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all cursor-pointer"
              >
                <option value={10}>10% - Up to $11,600</option>
                <option value={12}>12% - $11,601 to $47,150</option>
                <option value={22}>22% - $47,151 to $100,525</option>
                <option value={24}>24% - $100,526 to $191,950</option>
                <option value={32}>32% - $191,951 to $243,725</option>
                <option value={35}>35% - $243,726 to $609,350</option>
                <option value={37}>37% - Over $609,350</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Target Retirement Age</label>
              <input
                type="number"
                value={retirementAge}
                onChange={e => setRetirementAge(Number(e.target.value))}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-2xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Expected Annual Return (%)</label>
              <input
                type="number"
                value={expectedReturn}
                onChange={e => setExpectedReturn(Number(e.target.value))}
                step="0.5"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-2xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {isCatchUpEligible && (
            <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
              <p className="text-emerald-800 font-bold text-sm">✅ <strong>Catch-Up Eligible:</strong> You qualify for additional $7,500 (401k) and $1,000 (IRA) contributions!</p>
            </div>
          )}
        </section>

        {/* Results Section */}
        <div className="space-y-8">
          {/* AI Advice */}
          <section className="bg-slate-900 p-12 rounded-[4rem] text-white shadow-2xl min-h-[400px] flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-600/5 to-transparent pointer-events-none"></div>
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-purple-600/20 text-purple-400 border border-purple-600/30 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-2xl">🎯</div>
                <div>
                  <h3 className="text-purple-400 font-black uppercase text-[11px] tracking-[0.5em] mb-1">AI Tax Strategist</h3>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Optimizing {yearsToRetirement} Years to Freedom</p>
                </div>
              </div>
              {loadingAdvice ? (
                <div className="space-y-5 animate-pulse">
                  <div className="h-5 bg-white/10 rounded w-full"></div>
                  <div className="h-5 bg-white/10 rounded w-5/6"></div>
                  <div className="h-5 bg-white/10 rounded w-4/6"></div>
                </div>
              ) : (
                <p className="text-3xl md:text-4xl text-slate-200 italic font-medium leading-tight tracking-tight">
                  {advice || 'Analyzing your retirement account tax optimization strategy...'}
                </p>
              )}
            </div>
          </section>

          {/* Comparison Cards */}
          <div className="grid gap-6">
            {/* 401(k) */}
            <div className="bg-white p-8 rounded-[3rem] border-2 border-purple-100 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Traditional 401(k)</h3>
                  <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest mt-1">+ Employer Match Advantage</p>
                </div>
                <span className="text-4xl">🏢</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium text-sm">Annual Contribution</span>
                  <span className="text-slate-900 font-black text-lg">${calculations.traditional401k.annualContribution.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium text-sm">Employer Match</span>
                  <span className="text-emerald-600 font-black text-lg">+${calculations.traditional401k.employerMatch.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium text-sm">Tax Savings Now</span>
                  <span className="text-purple-600 font-black text-lg">${calculations.traditional401k.taxSavingsNow.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-slate-100">
                  <span className="text-slate-500 font-bold text-sm uppercase tracking-wider">After-Tax Value @{retirementAge}</span>
                  <span className="text-purple-600 font-black text-2xl">${(calculations.traditional401k.afterTaxValue / 1000).toFixed(0)}K</span>
                </div>
              </div>
            </div>

            {/* Traditional IRA */}
            <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Traditional IRA</h3>
                  <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mt-1">Tax-Deferred Growth</p>
                </div>
                <span className="text-4xl">🏦</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium text-sm">Annual Contribution</span>
                  <span className="text-slate-900 font-black text-lg">${calculations.traditionalIRA.annualContribution.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium text-sm">Tax Savings Now</span>
                  <span className="text-indigo-600 font-black text-lg">${calculations.traditionalIRA.taxSavingsNow.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-slate-100">
                  <span className="text-slate-500 font-bold text-sm uppercase tracking-wider">After-Tax Value @{retirementAge}</span>
                  <span className="text-indigo-600 font-black text-2xl">${(calculations.traditionalIRA.afterTaxValue / 1000).toFixed(0)}K</span>
                </div>
              </div>
            </div>

            {/* Roth IRA */}
            <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Roth IRA</h3>
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mt-1">Tax-Free Withdrawals</p>
                </div>
                <span className="text-4xl">💎</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium text-sm">Annual Contribution</span>
                  <span className="text-slate-900 font-black text-lg">${calculations.rothIRA.annualContribution.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium text-sm">Tax Savings Now</span>
                  <span className="text-slate-400 font-black text-lg">$0 (Post-Tax)</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-slate-100">
                  <span className="text-slate-500 font-bold text-sm uppercase tracking-wider">Tax-Free Value @{retirementAge}</span>
                  <span className="text-emerald-600 font-black text-2xl">${(calculations.rothIRA.afterTaxValue / 1000).toFixed(0)}K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visualization */}
      <section className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
        <header className="text-center">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">After-Tax Wealth Comparison</h2>
          <p className="text-slate-500 font-medium text-lg mt-2">All values account for taxes, employer match, and compound growth over {yearsToRetirement} years</p>
        </header>
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} fontWeight={900} />
              <YAxis stroke="#64748b" fontSize={11} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
              <Tooltip
                contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)' }}
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
              <Legend wrapperStyle={{ paddingTop: '30px', fontWeight: 700, fontSize: '12px' }} />
              <Bar dataKey="After-Tax Value" fill="#8b5cf6" radius={[12, 12, 0, 0]} />
              <Bar dataKey="Employer Match" fill="#10b981" radius={[12, 12, 0, 0]} />
              <Bar dataKey="Tax Savings" fill="#6366f1" radius={[12, 12, 0, 0]} />
              <Bar dataKey="Tax-Free Growth" fill="#059669" radius={[12, 12, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Educational Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-purple-50 p-10 rounded-[3.5rem] border border-purple-100">
          <div className="w-16 h-16 bg-purple-100 rounded-3xl flex items-center justify-center text-4xl mb-6">🏢</div>
          <h3 className="text-2xl font-black text-slate-900 mb-4">401(k) Power</h3>
          <p className="text-slate-600 leading-relaxed font-medium">
            Higher contribution limits (${isCatchUpEligible ? '31,000' : '23,500'}) plus employer match create unbeatable wealth velocity. Always maximize match before other accounts.
          </p>
        </div>

        <div className="bg-indigo-50 p-10 rounded-[3.5rem] border border-indigo-100">
          <div className="w-16 h-16 bg-indigo-100 rounded-3xl flex items-center justify-center text-4xl mb-6">🏦</div>
          <h3 className="text-2xl font-black text-slate-900 mb-4">Traditional IRA</h3>
          <p className="text-slate-600 leading-relaxed font-medium">
            Immediate tax deduction lowers current taxable income. Best for high earners expecting lower tax brackets in retirement. Contribution limit: ${isCatchUpEligible ? '8,000' : '7,000'}.
          </p>
        </div>

        <div className="bg-emerald-50 p-10 rounded-[3.5rem] border border-emerald-100">
          <div className="w-16 h-16 bg-emerald-100 rounded-3xl flex items-center justify-center text-4xl mb-6">💎</div>
          <h3 className="text-2xl font-black text-slate-900 mb-4">Roth IRA</h3>
          <p className="text-slate-600 leading-relaxed font-medium">
            Pay taxes now, withdraw tax-free forever. Ideal for younger savers in lower brackets expecting higher retirement income. No RMDs (Required Minimum Distributions).
          </p>
        </div>
      </section>

      {/* Strategy Recommendations */}
      <footer className="bg-slate-900 p-12 md:p-20 rounded-[4rem] text-white shadow-2xl">
        <h2 className="text-4xl font-black mb-8">The Optimal Strategy</h2>
        <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
          <p className="flex items-start gap-4">
            <span className="text-3xl">1️⃣</span>
            <span><strong className="text-white">Always capture 100% employer match</strong> — This is instant {employerMatch}% return risk-free.</span>
          </p>
          <p className="flex items-start gap-4">
            <span className="text-3xl">2️⃣</span>
            <span><strong className="text-white">Max out Roth IRA if income allows</strong> — Tax-free growth is powerful for long time horizons.</span>
          </p>
          <p className="flex items-start gap-4">
            <span className="text-3xl">3️⃣</span>
            <span><strong className="text-white">Return to 401(k) for remaining capacity</strong> — Scale up to the ${isCatchUpEligible ? '$31,000' : '$23,500'} limit for maximum tax deferral.</span>
          </p>
          <p className="flex items-start gap-4">
            <span className="text-3xl">4️⃣</span>
            <span><strong className="text-white">Consider tax diversification</strong> — Split between pre-tax and Roth for flexibility in retirement tax planning.</span>
          </p>
        </div>
      </footer>
    </article>
  );
};

export default RetirementOptimizer;

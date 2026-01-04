
import React, { useState, useMemo, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';

type FilingStatus = 'single' | 'married' | 'hoh';

const ChildTaxCreditCalculator: React.FC = () => {
  const [childrenUnder17, setChildrenUnder17] = useState<number>(2);
  const [otherDependents, setOtherDependents] = useState<number>(0);
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');
  const [magi, setMagi] = useState<number>(75000);
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  // 2025 Tax Credit Constants
  const CTC_PER_CHILD = 2000;
  const ODC_PER_DEPENDENT = 500; // Other Dependent Credit
  const REFUNDABLE_MAX = 1700; // Additional Child Tax Credit (ACTC)
  const PHASE_OUT_THRESHOLDS: Record<FilingStatus, number> = {
    single: 200000,
    married: 400000,
    hoh: 200000
  };
  const PHASE_OUT_RATE = 50; // $50 per $1,000 over threshold

  const calculations = useMemo(() => {
    // Base credits
    const baseCTC = childrenUnder17 * CTC_PER_CHILD;
    const baseODC = otherDependents * ODC_PER_DEPENDENT;
    const baseTotal = baseCTC + baseODC;

    // Phase-out calculation
    const threshold = PHASE_OUT_THRESHOLDS[filingStatus];
    const excessIncome = Math.max(0, magi - threshold);
    const incomeOverThreshold = Math.ceil(excessIncome / 1000); // Round up to nearest $1,000
    const phaseOutAmount = incomeOverThreshold * PHASE_OUT_RATE;

    // Final credit after phase-out
    const finalCredit = Math.max(0, baseTotal - phaseOutAmount);

    // Refundable portion (Additional Child Tax Credit)
    // Simplified: 15% of earned income over $2,500, up to $1,700 per child
    const earnedIncomeThreshold = 2500;
    const refundableBase = Math.max(0, (magi - earnedIncomeThreshold) * 0.15);
    const maxRefundable = Math.min(childrenUnder17 * REFUNDABLE_MAX, refundableBase);
    const actualRefundable = Math.min(finalCredit, maxRefundable);
    const nonRefundable = finalCredit - actualRefundable;

    // EITC Eligibility Check (simplified - actual EITC is complex)
    const eitcThresholds: Record<number, number> = {
      0: 18591,
      1: 49084,
      2: 55768,
      3: 59899
    };
    const childrenForEITC = Math.min(childrenUnder17, 3);
    const eitcLimit = eitcThresholds[childrenForEITC] || eitcThresholds[3];
    const eitcEligible = magi <= eitcLimit;

    // Calculate potential savings
    const annualSavings = finalCredit;
    const monthlySavings = annualSavings / 12;

    return {
      baseCTC,
      baseODC,
      baseTotal,
      threshold,
      excessIncome,
      phaseOutAmount,
      finalCredit,
      actualRefundable,
      nonRefundable,
      eitcEligible,
      eitcLimit,
      annualSavings,
      monthlySavings
    };
  }, [childrenUnder17, otherDependents, filingStatus, magi]);

  const chartData = [
    { name: 'Refundable', value: calculations.actualRefundable, color: '#10b981' },
    { name: 'Non-Refundable', value: calculations.nonRefundable, color: '#4f46e5' },
    { name: 'Phased Out', value: calculations.phaseOutAmount, color: '#f43f5e' }
  ].filter(item => item.value > 0);

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    try {
      const context = {
        ...calculations,
        childrenUnder17,
        otherDependents,
        filingStatus,
        magi
      };
      const msg = await getFinancialAdvice(context, 'Child Tax Credit Optimization & Family Tax Planning');
      setAdvice(msg || '');
    } catch (error) {
      console.error('Failed to fetch tax credit advice:', error);
      setAdvice('Unable to load tax planning advice at this time. Please try again later.');
    } finally {
      setLoadingAdvice(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 2000);
    return () => clearTimeout(timer);
  }, [childrenUnder17, otherDependents, filingStatus, magi]);

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <header>
        <h2 className="text-3xl font-black text-slate-900">
          Child Tax Credit <span className="text-indigo-600">Calculator 2025</span>
        </h2>
        <p className="text-slate-500 mt-2 max-w-3xl font-medium">
          Calculate your Child Tax Credit (CTC), Additional Child Tax Credit (ACTC), and check EITC eligibility for tax year 2025.
          Plan for up to <strong>${calculations.finalCredit.toLocaleString()}</strong> in tax savings.
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Input Panel */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b pb-4">
              Family Details
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Qualifying Children (Under 17)
              </label>
              <input
                type="number"
                min="0"
                max="10"
                value={childrenUnder17}
                onChange={(e) => setChildrenUnder17(Number(e.target.value))}
                className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-2xl text-slate-700 focus:ring-2 focus:ring-indigo-500"
              />
              <p className="text-xs text-slate-400 mt-2">$2,000 credit per child</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Other Dependents (17+)
              </label>
              <input
                type="number"
                min="0"
                max="10"
                value={otherDependents}
                onChange={(e) => setOtherDependents(Number(e.target.value))}
                className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-2xl text-slate-700 focus:ring-2 focus:ring-indigo-500"
              />
              <p className="text-xs text-slate-400 mt-2">$500 credit per dependent</p>
            </div>

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
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Modified Adjusted Gross Income (MAGI)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xl">$</span>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={magi}
                  onChange={(e) => setMagi(Number(e.target.value))}
                  className="w-full pl-10 p-4 bg-slate-50 border-none rounded-2xl font-black text-xl text-slate-700 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Phase-out begins at ${calculations.threshold.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Main Credit Display */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-[2.5rem] p-10 text-white relative shadow-2xl overflow-hidden">
            <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-2">
              Total Tax Credit 2025
            </p>
            <h3 className="text-6xl font-black tracking-tighter mb-4">
              ${calculations.finalCredit.toLocaleString()}
            </h3>
            <div className="flex gap-6 text-sm">
              <div>
                <p className="text-indigo-200 text-xs uppercase">Refundable</p>
                <p className="text-2xl font-black">${calculations.actualRefundable.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-indigo-200 text-xs uppercase">Non-Refundable</p>
                <p className="text-2xl font-black">${calculations.nonRefundable.toLocaleString()}</p>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 text-[200px] text-white/5 font-black">CTC</div>
          </div>

          {/* Credit Breakdown Chart */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
              Credit Breakdown
            </h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                  <XAxis type="number" stroke="#94a3b8" fontSize={11} axisLine={false} tickLine={false} />
                  <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={11} axisLine={false} tickLine={false} width={120} />
                  <Tooltip />
                  <Bar dataKey="value" radius={[0, 12, 12, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                Monthly Savings
              </p>
              <p className="text-3xl font-black text-emerald-600">
                ${calculations.monthlySavings.toFixed(0)}
              </p>
              <p className="text-xs text-slate-500 mt-1">If paid monthly</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                Phase-Out
              </p>
              <p className="text-3xl font-black text-rose-500">
                ${calculations.phaseOutAmount.toLocaleString()}
              </p>
              <p className="text-xs text-slate-500 mt-1">Credit reduced</p>
            </div>

            <div className={`p-6 rounded-2xl border shadow-sm ${calculations.eitcEligible ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-100'}`}>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                EITC Eligible
              </p>
              <p className={`text-3xl font-black ${calculations.eitcEligible ? 'text-emerald-600' : 'text-slate-400'}`}>
                {calculations.eitcEligible ? 'YES' : 'NO'}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Limit: ${calculations.eitcLimit.toLocaleString()}
              </p>
            </div>
          </div>

          {/* AI Advice Panel */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-indigo-600 font-black uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
              <span className="text-2xl">🤖</span> AI Tax Planning Insights
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
            Understanding 2025 Tax Credits
          </h3>
          <h2 className="text-4xl font-black text-slate-900 leading-tight">
            Maximize Your <span className="text-indigo-600">Family Tax Benefits</span>
          </h2>
          <p className="text-slate-500 mt-4 text-lg font-medium leading-relaxed">
            The Child Tax Credit (CTC) is one of the most valuable tax benefits for families, potentially worth up to $2,000 per qualifying child. Understanding how it works can save you thousands.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-indigo-600 pl-6">
              2025 Credit Amounts
            </h4>
            <div className="text-slate-600 text-sm leading-relaxed font-medium space-y-3">
              <p><strong>$2,000 per child under 17</strong> - The standard Child Tax Credit for qualifying children.</p>
              <p><strong>$500 per other dependent</strong> - For dependents 17+ or non-child dependents.</p>
              <p><strong>Up to $1,700 refundable</strong> - Additional Child Tax Credit (ACTC) if credit exceeds tax liability.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-purple-600 pl-6">
              Phase-Out Rules
            </h4>
            <div className="text-slate-600 text-sm leading-relaxed font-medium space-y-3">
              <p><strong>Single/HOH: $200,000</strong> - Phase-out begins at this Modified AGI level.</p>
              <p><strong>Married: $400,000</strong> - Higher threshold for joint filers.</p>
              <p><strong>$50 per $1,000 over</strong> - Credit reduces by $50 for every $1,000 over the threshold (rounded up).</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-black text-slate-900 border-l-4 border-emerald-600 pl-6">
              Qualifying Child Rules
            </h4>
            <div className="text-slate-600 text-sm leading-relaxed font-medium space-y-3">
              <p><strong>Age:</strong> Must be under 17 at end of tax year (Dec 31).</p>
              <p><strong>Relationship:</strong> Your child, stepchild, foster child, sibling, or descendant.</p>
              <p><strong>Support:</strong> Did not provide more than half of their own support.</p>
              <p><strong>Residency:</strong> Lived with you for more than half the year.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">
            Common Scenarios
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <p className="text-xs font-black text-indigo-600 uppercase mb-2">Single Parent, 2 Kids</p>
              <p className="text-sm font-bold text-slate-800">Income: $60k</p>
              <p className="text-2xl font-black text-emerald-600 mt-2">$4,000 CTC</p>
              <p className="text-xs text-slate-500 mt-1">Fully refundable</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <p className="text-xs font-black text-indigo-600 uppercase mb-2">Married, 3 Kids</p>
              <p className="text-sm font-bold text-slate-800">Income: $150k</p>
              <p className="text-2xl font-black text-emerald-600 mt-2">$6,000 CTC</p>
              <p className="text-xs text-slate-500 mt-1">No phase-out</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <p className="text-xs font-black text-rose-600 uppercase mb-2">High Earner</p>
              <p className="text-sm font-bold text-slate-800">Income: $250k, 1 Child</p>
              <p className="text-2xl font-black text-slate-600 mt-2">$500 CTC</p>
              <p className="text-xs text-slate-500 mt-1">$1,500 phased out</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <p className="text-xs font-black text-purple-600 uppercase mb-2">Blended Family</p>
              <p className="text-sm font-bold text-slate-800">2 kids + 1 teen (17)</p>
              <p className="text-2xl font-black text-emerald-600 mt-2">$4,500 Total</p>
              <p className="text-xs text-slate-500 mt-1">$4k CTC + $500 ODC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Metadata Section */}
      <section className="grid md:grid-cols-3 gap-12 pt-12 border-t border-slate-100">
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Why use this?</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            The Child Tax Credit can dramatically reduce your tax bill or increase your refund. Many families don't realize they can receive up to <strong>$1,700 as a refund</strong> even if they owe no taxes. This calculator helps you plan ahead and maximize your benefits.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">How it works</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            We calculate your base credit ($2,000 per child under 17, $500 per other dependent), then apply income-based phase-outs. The <strong>Additional Child Tax Credit (ACTC)</strong> is calculated based on your earned income, allowing up to $1,700 per child to be refundable.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Related Tools</h4>
          <ul className="text-sm text-slate-500 space-y-2 font-medium">
            <li>• <strong>Quarterly Tax Calculator</strong> - Plan estimated tax payments</li>
            <li>• <strong>ACA Health Subsidy</strong> - Healthcare costs for families</li>
            <li>• <strong>529 College Savings</strong> - Plan for education costs (coming soon)</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ChildTaxCreditCalculator;

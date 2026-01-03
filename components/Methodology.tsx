
import React from 'react';

const Methodology: React.FC = () => {
  return (
    <article className="max-w-5xl mx-auto space-y-16 pb-24 animate-in fade-in duration-500">
      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 bg-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">Mathematical Transparency v2.0</span>
          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
            Methodology & <span className="text-indigo-400">Assumptions</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium max-w-4xl">
            Full disclosure of all data sources, tax logic, calculation methodologies, and update frequencies powering QuantCurb's institutional-grade financial modeling.
          </p>
          <div className="mt-8 inline-block px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
            <p className="text-sm font-bold text-white">Last Updated: <span className="text-indigo-400">January 3, 2026</span></p>
          </div>
        </div>
      </header>

      {/* Core Principles */}
      <section className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
        <header className="border-b border-slate-50 pb-6">
          <h2 className="text-3xl font-black text-slate-900">Core Principles</h2>
          <p className="text-slate-500 mt-2 font-medium">Mathematical rigor and algorithmic sovereignty</p>
        </header>

        <div className="space-y-6">
          <div className="flex gap-6">
            <div className="w-16 h-16 bg-indigo-50 rounded-3xl flex items-center justify-center text-4xl flex-shrink-0">🎯</div>
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Precision Over Estimation</h3>
              <p className="text-slate-600 leading-relaxed">All calculations use exact mathematical formulas, not approximations. We employ reducing balance amortization, compound interest with continuous compounding where applicable, and precise tax bracket marginal calculations.</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-16 h-16 bg-emerald-50 rounded-3xl flex items-center justify-center text-4xl flex-shrink-0">📊</div>
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Transparent Data Sources</h3>
              <p className="text-slate-600 leading-relaxed">Every data point is traceable to official government sources, central bank publications, or verified financial institutions. We cite IRS tax tables, Federal Reserve economic data, and State Department of Revenue publications.</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-16 h-16 bg-purple-50 rounded-3xl flex items-center justify-center text-4xl flex-shrink-0">🔄</div>
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Regular Updates</h3>
              <p className="text-slate-600 leading-relaxed">Tax brackets, contribution limits, and regulatory thresholds are updated annually (typically January-February). Interest rate data and currency exchange rates refresh monthly. Market sentiment analysis updates in real-time via AI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax & Salary Calculations */}
      <section className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
        <header className="border-b border-slate-50 pb-6">
          <h2 className="text-3xl font-black text-slate-900">Tax & Salary Calculations</h2>
          <p className="text-slate-500 mt-2 font-medium">2025-2026 tax year specifications</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-black text-slate-900">Federal Tax Brackets (2025)</h3>
            <div className="bg-slate-50 p-6 rounded-3xl space-y-2 font-mono text-sm">
              <p>10%: $0 - $11,600</p>
              <p>12%: $11,601 - $47,150</p>
              <p>22%: $47,151 - $100,525</p>
              <p>24%: $100,526 - $191,950</p>
              <p>32%: $191,951 - $243,725</p>
              <p>35%: $243,726 - $609,350</p>
              <p>37%: $609,351+</p>
            </div>
            <p className="text-xs text-slate-500 italic">Source: IRS Revenue Procedure 2024-40 (Single Filer)</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-slate-900">FICA & Payroll Taxes</h3>
            <div className="bg-slate-50 p-6 rounded-3xl space-y-3">
              <div>
                <p className="font-bold text-slate-900">Social Security: 6.2%</p>
                <p className="text-sm text-slate-600">Wage base limit: $168,600 (2025)</p>
              </div>
              <div>
                <p className="font-bold text-slate-900">Medicare: 1.45%</p>
                <p className="text-sm text-slate-600">Additional 0.9% on income &gt; $200k</p>
              </div>
              <div>
                <p className="font-bold text-slate-900">Self-Employment: 15.3%</p>
                <p className="text-sm text-slate-600">(12.4% SS + 2.9% Medicare)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
          <h4 className="text-lg font-black text-indigo-900 mb-3">State Tax Handling</h4>
          <p className="text-indigo-800 leading-relaxed">Our Salary Estimator models all 50 states' income tax structures. For states with progressive brackets (e.g., California, New York), we use marginal bracket math. For flat-tax states (e.g., Illinois, Colorado), we apply the single rate. Nine states have no income tax (Alaska, Florida, Nevada, South Dakota, Tennessee, Texas, Washington, Wyoming, New Hampshire).</p>
        </div>
      </section>

      {/* Loan & Mortgage Calculations */}
      <section className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
        <header className="border-b border-slate-50 pb-6">
          <h2 className="text-3xl font-black text-slate-900">Loan & Mortgage Calculations</h2>
          <p className="text-slate-500 mt-2 font-medium">Amortization methodology and assumptions</p>
        </header>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">EMI Formula (Reducing Balance)</h3>
            <div className="bg-slate-900 p-6 rounded-3xl font-mono text-green-400 text-sm overflow-x-auto">
              <code>EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)</code>
              <p className="mt-4 text-slate-400 font-sans">Where:</p>
              <p className="text-slate-300 font-sans">P = Principal loan amount</p>
              <p className="text-slate-300 font-sans">r = Monthly interest rate (annual rate / 12)</p>
              <p className="text-slate-300 font-sans">n = Total number of monthly payments</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Mortgage PITI Breakdown</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 p-6 rounded-3xl">
                <p className="font-black text-purple-900 mb-2">Principal & Interest</p>
                <p className="text-purple-800 text-sm">Standard amortization formula (above)</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-3xl">
                <p className="font-black text-purple-900 mb-2">Property Taxes</p>
                <p className="text-purple-800 text-sm">User input, typically 0.5-2.5% of home value annually</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-3xl">
                <p className="font-black text-purple-900 mb-2">Insurance</p>
                <p className="text-purple-800 text-sm">User input, avg $800-2000/year</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-3xl">
                <p className="font-black text-purple-900 mb-2">PMI (if LTV &gt; 80%)</p>
                <p className="text-purple-800 text-sm">0.3-1.5% of loan amount annually</p>
              </div>
            </div>
          </div>

          <div className="bg-rose-50 p-8 rounded-3xl border border-rose-100">
            <h4 className="text-lg font-black text-rose-900 mb-3">⚠️ Prepayment Assumptions</h4>
            <p className="text-rose-800 leading-relaxed">When modeling extra principal payments, we assume: (1) Payments are applied immediately to principal, (2) No prepayment penalties, (3) Monthly payment remains constant unless explicitly recalculated. Always verify your loan agreement allows penalty-free prepayment.</p>
          </div>
        </div>
      </section>

      {/* Investment & Retirement Calculations */}
      <section className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
        <header className="border-b border-slate-50 pb-6">
          <h2 className="text-3xl font-black text-slate-900">Investment & Retirement Calculations</h2>
          <p className="text-slate-500 mt-2 font-medium">Growth projections and compounding logic</p>
        </header>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Compound Interest (Future Value)</h3>
            <div className="bg-slate-900 p-6 rounded-3xl font-mono text-green-400 text-sm overflow-x-auto">
              <code>FV = PV × (1 + r)^t + PMT × [((1 + r)^t - 1) / r]</code>
              <p className="mt-4 text-slate-400 font-sans">Where:</p>
              <p className="text-slate-300 font-sans">PV = Present value (initial investment)</p>
              <p className="text-slate-300 font-sans">PMT = Periodic contribution (monthly SIP)</p>
              <p className="text-slate-300 font-sans">r = Periodic return rate</p>
              <p className="text-slate-300 font-sans">t = Number of periods</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">2025 Retirement Contribution Limits</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-emerald-50 p-6 rounded-3xl text-center">
                <p className="text-4xl font-black text-emerald-600 mb-2">$23,500</p>
                <p className="text-sm font-bold text-emerald-900">401(k) Limit</p>
                <p className="text-xs text-emerald-700 mt-1">+$7,500 catch-up (50+)</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-3xl text-center">
                <p className="text-4xl font-black text-emerald-600 mb-2">$7,000</p>
                <p className="text-sm font-bold text-emerald-900">IRA Limit</p>
                <p className="text-xs text-emerald-700 mt-1">+$1,000 catch-up (50+)</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-3xl text-center">
                <p className="text-4xl font-black text-emerald-600 mb-2">$7,000</p>
                <p className="text-sm font-bold text-emerald-900">Roth IRA Limit</p>
                <p className="text-xs text-emerald-700 mt-1">Income phase-outs apply</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 italic mt-4">Source: IRS Notice 2024-80</p>
          </div>

          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">FIRE Planning (4% Rule)</h3>
            <div className="bg-slate-50 p-6 rounded-3xl">
              <p className="text-slate-700 leading-relaxed mb-4">The "4% Safe Withdrawal Rate" is based on the Trinity Study (1998, updated 2020). It models a 95% success probability of sustaining withdrawals over 30 years with a 50/50 stock/bond portfolio.</p>
              <div className="bg-white p-4 rounded-2xl border border-slate-200">
                <p className="font-mono text-sm text-slate-900">Freedom Number = Annual Expenses × 25</p>
                <p className="text-xs text-slate-500 mt-2">Example: $60,000/year × 25 = $1,500,000 portfolio target</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Currency & Market Data */}
      <section className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
        <header className="border-b border-slate-50 pb-6">
          <h2 className="text-3xl font-black text-slate-900">Currency & Market Data</h2>
          <p className="text-slate-500 mt-2 font-medium">Exchange rates and AI sentiment analysis</p>
        </header>

        <div className="space-y-6">
          <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100">
            <h4 className="text-lg font-black text-sky-900 mb-3">Forex Exchange Rates</h4>
            <p className="text-sky-800 leading-relaxed mb-4">Currency conversion rates are based on interbank mid-market rates (the midpoint between buy and sell prices). These represent the "true" market rate without retail markup. Data refreshes monthly from central bank publications and OECD Economic Outlook reports.</p>
            <p className="text-xs text-sky-700 italic">Note: Actual consumer rates at banks/exchanges typically include 1-5% markup. Our tool shows the benchmark for auditing provider spreads.</p>
          </div>

          <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
            <h4 className="text-lg font-black text-indigo-900 mb-3">AI Market Sentiment</h4>
            <p className="text-indigo-800 leading-relaxed">Market insights and sentiment analysis are generated using Google's Gemini AI (gemini-3-flash-preview for data synthesis, gemini-3-pro-preview for advice). The AI analyzes: (1) Interest rate differentials, (2) Geopolitical stability indices, (3) Historical volatility patterns, (4) Institutional vs retail app ecosystem trends.</p>
          </div>
        </div>
      </section>

      {/* Limitations & Disclaimers */}
      <section className="bg-rose-50 p-12 rounded-[4rem] border-2 border-rose-200 space-y-8">
        <header className="border-b border-rose-200 pb-6">
          <h2 className="text-3xl font-black text-rose-900">Important Limitations</h2>
          <p className="text-rose-700 mt-2 font-medium">What our calculators DO NOT account for</p>
        </header>

        <div className="space-y-6">
          <div className="flex gap-4">
            <span className="text-3xl">⚠️</span>
            <div>
              <h3 className="text-lg font-black text-rose-900 mb-2">Individual Circumstances</h3>
              <p className="text-rose-800 leading-relaxed">Our tools use standardized assumptions. They cannot account for: specific state tax credits, municipal tax variations, unique loan terms, employer-specific benefit structures, or personal risk tolerance.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-3xl">📉</span>
            <div>
              <h3 className="text-lg font-black text-rose-900 mb-2">Market Volatility</h3>
              <p className="text-rose-800 leading-relaxed">Investment projections assume constant returns. Real markets experience volatility, sequence-of-returns risk, and black swan events. Historical performance does not guarantee future results.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-3xl">🏛️</span>
            <div>
              <h3 className="text-lg font-black text-rose-900 mb-2">Regulatory Changes</h3>
              <p className="text-rose-800 leading-relaxed">Tax laws, contribution limits, and financial regulations change. Congress can modify tax brackets, deduction limits, and retirement account rules. Always verify current year regulations with official IRS publications or a licensed tax professional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 p-12 rounded-[4rem] text-white text-center space-y-6">
        <h2 className="text-3xl font-black">Not Financial Advice</h2>
        <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-lg">
          QuantCurb provides <strong>mathematical models</strong>, not financial advice. We are educators and engineers, not licensed financial advisors or CPAs. For personalized guidance on taxes, investments, or major financial decisions, consult a qualified professional.
        </p>
        <div className="pt-6 border-t border-white/10">
          <p className="text-sm text-slate-400 uppercase tracking-widest">Last Methodology Update: January 3, 2026</p>
        </div>
      </footer>
    </article>
  );
};

export default Methodology;

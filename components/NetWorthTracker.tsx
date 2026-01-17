
import React, { useState, useMemo, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getFinancialAdvice } from '../services/geminiService';
import CalculatorFAQ from './CalculatorFAQ';
import { ToolType } from '../types';

interface NetWorthTrackerProps {
  onNavigate?: (tool: ToolType) => void;
}

const NetWorthTracker: React.FC<NetWorthTrackerProps> = ({ onNavigate }) => {
  // Assets
  const [cash, setCash] = useState<number>(25000);
  const [investments, setInvestments] = useState<number>(85000);
  const [property, setProperty] = useState<number>(450000);
  const [otherAssets, setOtherAssets] = useState<number>(15000);

  // Liabilities
  const [mortgage, setMortgage] = useState<number>(320000);
  const [studentLoans, setStudentLoans] = useState<number>(12000);
  const [creditCardDebt, setCreditCardDebt] = useState<number>(3500);
  const [otherDebts, setOtherDebts] = useState<number>(0);

  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);

  const totals = useMemo(() => {
    const totalAssets = cash + investments + property + otherAssets;
    const totalLiabilities = mortgage + studentLoans + creditCardDebt + otherDebts;
    const netWorth = totalAssets - totalLiabilities;
    const debtToAssetRatio = totalAssets > 0 ? (totalLiabilities / totalAssets) * 100 : 0;

    // Liquidity Analysis
    const liquidAssets = cash + investments;
    const illiquidAssets = property + otherAssets;
    const liquidityRatio = totalAssets > 0 ? (liquidAssets / totalAssets) * 100 : 0;

    // Debt Quality
    const highInterestDebt = creditCardDebt + otherDebts; // Simplified
    const strategicDebt = mortgage + studentLoans;

    return { 
      totalAssets, 
      totalLiabilities, 
      netWorth, 
      debtToAssetRatio, 
      liquidAssets, 
      illiquidAssets, 
      liquidityRatio,
      highInterestDebt,
      strategicDebt
    };
  }, [cash, investments, property, otherAssets, mortgage, studentLoans, creditCardDebt, otherDebts]);

  const pieData = [
    { name: 'Liquid Assets', value: totals.liquidAssets, color: '#10b981' },
    { name: 'Fixed Assets', value: totals.illiquidAssets, color: '#6366f1' },
    { name: 'Liabilities', value: totals.totalLiabilities, color: '#f43f5e' },
  ];

  const barData = [
    { name: 'Strategic Debt', value: totals.strategicDebt, fill: '#94a3b8' },
    { name: 'Toxic Debt', value: totals.highInterestDebt, fill: '#f43f5e' },
  ];

  const fetchAdvice = async () => {
    setLoadingAdvice(true);
    const msg = await getFinancialAdvice(totals, 'Holistic Net Worth, Liquidity Mix & Debt Triage');
    setAdvice(msg || '');
    setLoadingAdvice(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchAdvice(), 3000);
    return () => clearTimeout(timer);
  }, [totals.netWorth]);

  useEffect(() => {
    // Add HowTo schema for "How to calculate net worth"
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Calculate Your Net Worth: Assets vs Liabilities",
      "description": "Step-by-step guide to calculating your net worth by listing all assets and liabilities. Learn how to track your financial progress and build wealth over time.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "List All Assets",
          "text": "Add up all your assets: cash (checking, savings), investments (stocks, bonds, retirement accounts), property (home value, vehicles), and other assets (jewelry, collectibles)."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "List All Liabilities",
          "text": "Add up all your debts: mortgage balance, student loans, credit card debt, car loans, personal loans, and any other debts you owe."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Calculate Net Worth",
          "text": "Net Worth = Total Assets - Total Liabilities. If positive, you're solvent. If negative, you owe more than you own."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Analyze Debt-to-Asset Ratio",
          "text": "Calculate debt-to-asset ratio: (Total Liabilities ÷ Total Assets) × 100. Under 25% is excellent, 25-50% is stable, over 50% indicates high leverage risk."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Review Liquidity",
          "text": "Liquid assets (cash + investments) should be 20-30% of total assets for financial flexibility. Too much illiquid assets (property) can limit your options."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Track Over Time",
          "text": "Calculate net worth monthly or quarterly to track progress. Increasing net worth means you're building wealth. Decreasing net worth may indicate overspending or investment losses."
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(howToSchema);
    script.id = 'howto-schema-net-worth';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('howto-schema-net-worth');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <article className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-500 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
             <span className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">Pro Wealth View</span>
             <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">v3.2 Protocol</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">Net Worth <span className="text-indigo-600">Command</span></h1>
          <p className="text-slate-500 mt-2 max-w-lg font-medium text-lg leading-relaxed">The institutional source of truth for your private balance sheet. Analyze capital efficiency and debt velocity.</p>
        </div>
        <div className="bg-slate-900 px-10 py-8 rounded-[3rem] text-white shadow-2xl relative z-10 border border-slate-800">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Total Net Worth</h2>
            <span className={`text-[10px] font-black px-2 py-0.5 rounded-lg ${totals.netWorth > 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
              {totals.netWorth > 0 ? 'Solvent' : 'Insolvent'}
            </span>
          </div>
          <p className="text-5xl md:text-6xl font-black tracking-tighter">${totals.netWorth.toLocaleString()}</p>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* Input Matrix */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Asset Column */}
            <section className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-8">
              <header className="flex justify-between items-center border-b border-slate-50 pb-6">
                <div className="space-y-1">
                  <h3 className="text-[11px] font-black text-emerald-600 uppercase tracking-widest">Asset Inventory</h3>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Liquidity Grade: {totals.liquidityRatio.toFixed(0)}%</p>
                </div>
                <span className="text-2xl font-black text-slate-900">${totals.totalAssets.toLocaleString()}</span>
              </header>
              <div className="space-y-6">
                {[
                  { label: 'Liquid Cash / Savings', val: cash, set: setCash, color: 'emerald' },
                  { label: 'Marketable Securities (Stocks/ETFs)', val: investments, set: setInvestments, color: 'emerald' },
                  { label: 'Real Estate / Land Equity', val: property, set: setProperty, color: 'indigo' },
                  { label: 'Collectibles / Private Equity', val: otherAssets, set: setOtherAssets, color: 'indigo' }
                ].map((item, i) => (
                  <div key={i} className="space-y-2 group">
                    <div className="flex justify-between px-2">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</label>
                      <span className="text-[10px] font-black text-slate-300">#{i+1}</span>
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 font-bold">$</span>
                      <input 
                        type="number" 
                        value={item.val} 
                        onChange={e => item.set(Number(e.target.value))} 
                        className={`w-full pl-10 p-5 bg-slate-50 border-none rounded-[1.5rem] font-black text-slate-700 focus:ring-2 focus:ring-${item.color}-500 transition-all`} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Liabilities Column */}
            <section className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-8">
              <header className="flex justify-between items-center border-b border-slate-50 pb-6">
                <div className="space-y-1">
                  <h3 className="text-[11px] font-black text-rose-600 uppercase tracking-widest">Liability Register</h3>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Leverage Index: {totals.debtToAssetRatio.toFixed(0)}%</p>
                </div>
                <span className="text-2xl font-black text-slate-900">${totals.totalLiabilities.toLocaleString()}</span>
              </header>
              <div className="space-y-6">
                {[
                  { label: 'Mortgage Debt', val: mortgage, set: setMortgage, color: 'slate' },
                  { label: 'Student / Educational Loans', val: studentLoans, set: setStudentLoans, color: 'slate' },
                  { label: 'Toxic Credit Card Balances', val: creditCardDebt, set: setCreditCardDebt, color: 'rose' },
                  { label: 'Other Obligations', val: otherDebts, set: setOtherDebts, color: 'rose' }
                ].map((item, i) => (
                  <div key={i} className="space-y-2 group">
                    <div className="flex justify-between px-2">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</label>
                      {item.color === 'rose' && <span className="text-[8px] font-black text-rose-500 uppercase tracking-tighter">High Risk</span>}
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 font-bold">$</span>
                      <input 
                        type="number" 
                        value={item.val} 
                        onChange={e => item.set(Number(e.target.value))} 
                        className={`w-full pl-10 p-5 bg-slate-50 border-none rounded-[1.5rem] font-black text-slate-700 focus:ring-2 focus:ring-${item.color}-500 transition-all`} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="bg-slate-900 p-12 rounded-[4rem] text-white flex items-start gap-10 shadow-2xl relative overflow-hidden group">
             <div className="text-7xl relative z-10 transition-transform group-hover:scale-110" aria-hidden="true">💎</div>
             <div className="flex-1 relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <h4 className="text-indigo-400 font-black uppercase text-[10px] tracking-widest">Solvency Triage Oracle</h4>
                  <div className="h-px flex-1 bg-white/10"></div>
                </div>
                {loadingAdvice ? (
                  <div className="space-y-3 animate-pulse">
                    <div className="h-4 bg-white/10 rounded w-full"></div>
                    <div className="h-4 bg-white/10 rounded w-4/5"></div>
                    <div className="h-4 bg-white/10 rounded w-3/4"></div>
                  </div>
                ) : (
                  <p className="text-2xl text-slate-200 italic font-medium leading-relaxed">{advice}</p>
                )}
             </div>
             <div className="absolute -right-10 -bottom-10 text-[250px] font-black text-white/[0.03] pointer-events-none select-none tracking-tighter">COMMAND</div>
          </aside>
        </div>

        {/* Analytics Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <section className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10 sticky top-6">
            <header className="text-center space-y-2">
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Composition Mix</h3>
              <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Institutional Asset Classes</p>
            </header>
            
            <div className="h-72 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie 
                      data={pieData} 
                      cx="50%" 
                      cy="50%" 
                      innerRadius={80} 
                      outerRadius={105} 
                      paddingAngle={12} 
                      dataKey="value"
                      stroke="none"
                    >
                      {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.1)' }} 
                      itemStyle={{ fontWeight: 900, textTransform: 'uppercase', fontSize: '10px' }}
                    />
                    <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase' }} />
                  </PieChart>
               </ResponsiveContainer>
            </div>

            <div className="space-y-6">
               <div className="bg-slate-50 p-6 rounded-[2rem] space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Financial Health</span>
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                      totals.debtToAssetRatio < 25 ? 'bg-emerald-100 text-emerald-600' : 
                      totals.debtToAssetRatio < 50 ? 'bg-indigo-100 text-indigo-600' : 'bg-rose-100 text-rose-600'
                    }`}>
                      {totals.debtToAssetRatio < 25 ? 'Tier 1 Prime' : totals.debtToAssetRatio < 50 ? 'Stable' : 'Leverage Risk'}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden shadow-inner">
                    <div 
                      style={{ width: `${Math.min(100, totals.debtToAssetRatio)}%` }} 
                      className={`h-full transition-all duration-1000 ${
                        totals.debtToAssetRatio < 25 ? 'bg-emerald-500' : 
                        totals.debtToAssetRatio < 50 ? 'bg-indigo-500' : 'bg-rose-500'
                      }`}
                    ></div>
                  </div>
               </div>

               <div className="bg-slate-900 p-8 rounded-[2rem] space-y-6 shadow-xl">
                  <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] text-center border-b border-white/5 pb-4">Debt Toxicity Analysis</h4>
                  <div className="h-40 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.05)" />
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" hide />
                        <Tooltip 
                          cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                          contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '16px' }}
                          labelStyle={{ color: '#94a3b8', fontWeight: 900 }}
                        />
                        <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={20} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-between text-[8px] font-black text-slate-500 uppercase">
                    <span>Low Drag</span>
                    <span>High Drag</span>
                  </div>
               </div>
            </div>
          </section>
        </div>
      </div>

      <section className="mt-20 pt-16 border-t border-slate-200 space-y-20">
        <header className="max-w-4xl">
          <h3 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.4em] mb-4">Institutional Methodology</h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">The Quantitative <span className="text-indigo-600">Balance Sheet</span></h2>
          <p className="text-slate-500 mt-6 text-xl font-medium leading-relaxed max-w-3xl">
            Wealth is not what you earn, but what you keep. The Command Center uses a **Mark-to-Market** framework to visualize the spread between your appreciation velocity and debt service requirements.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-16">
          <section className="space-y-6 group">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-6 transition-transform">⚖️</div>
            <h4 className="text-2xl font-black text-slate-900 leading-tight">Debt-to-Asset <br/>Efficiency</h4>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              Institutions measure success by the "Leverage Ratio." A net worth composed of high-appreciation assets (Stocks/Property) backed by low-cost debt (Mortgage) creates a wealth multiplier. Toxic debt (Credit Cards) is the primary destroyer of this multiplier.
            </p>
          </section>
          <section className="space-y-6 group">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-6 transition-transform">🌊</div>
            <h4 className="text-2xl font-black text-slate-900 leading-tight">Liquidity <br/>Velocity Score</h4>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              A high net worth is useless during a crisis if it's "frozen" in illiquid assets. We audit your **Liquidity Gradient** to ensure you have enough market-ready capital to sustain operations during high-volatility events without liquidating fixed assets at a loss.
            </p>
          </section>
          <section className="space-y-6 group">
            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-6 transition-transform">🚀</div>
            <h4 className="text-2xl font-black text-slate-900 leading-tight">Equity <br/>Accrual Logic</h4>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              Generational wealth is built on the intersection of **Principal Reduction** and **Asset Appreciation**. As your liabilities shrink (see our EMI tool) and your assets grow (see Wealth Projector), your net worth experiences exponential drift.
            </p>
          </section>
        </div>
      </section>

      <footer className="text-center pt-12 border-t border-slate-100 flex flex-col items-center gap-6">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">QuantCurb Intelligence v3.5 • Institutional Balance Sheet Protocol</p>
        <div className="flex gap-4">
           {['Mark-to-Market', 'Capital Efficiency', 'Solvency Index', 'Leverage Protocol'].map(tag => (
             <span key={tag} className="text-[8px] font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 uppercase tracking-widest">{tag}</span>
           ))}
        </div>
      </footer>

      {/* Related Resources Section */}
      <section className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200">
        <h2 className="text-2xl font-black text-slate-900 mb-6">Related Resources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.(ToolType.EMERGENCY_FUND)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">🛡️ Emergency Fund Calculator</h3>
            <p className="text-sm text-slate-600">Calculate how much emergency fund you need (part of your liquid assets).</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.INVESTMENT_CALC)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">📈 Investment Calculator</h3>
            <p className="text-sm text-slate-600">See how your investments can grow and increase your net worth over time.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.RETIREMENT_OPTIMIZER)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">🎯 Retirement Account Optimizer</h3>
            <p className="text-sm text-slate-600">Maximize your 401(k) and IRA contributions to build retirement assets.</p>
          </button>
          <button
            onClick={() => onNavigate?.(ToolType.CREDIT_CARD_PAYOFF)}
            className="text-left bg-white rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-slate-900 mb-2">💳 Credit Card Payoff Calculator</h3>
            <p className="text-sm text-slate-600">Pay off high-interest debt to improve your net worth and debt-to-asset ratio.</p>
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <CalculatorFAQ
        calculatorName="Net Worth Tracker"
        calculatorUrl="https://quantcurb.com/net-worth-command-center"
        faqs={[
          {
            question: "How do I calculate my net worth?",
            answer: "Net worth = Total Assets - Total Liabilities. List all assets (cash, investments, property, vehicles) and subtract all debts (mortgage, loans, credit cards). For example, if you have $500,000 in assets and $200,000 in debts, your net worth is $300,000. Our calculator makes this easy by organizing assets and liabilities separately."
          },
          {
            question: "What counts as an asset?",
            answer: "Assets include: cash (checking, savings), investments (stocks, bonds, retirement accounts, crypto), property (home value, rental properties, vehicles), and other assets (jewelry, collectibles, business equity). Use current market values, not purchase prices. For your home, use estimated market value, not what you paid."
          },
          {
            question: "What counts as a liability?",
            answer: "Liabilities are all debts you owe: mortgage balance, home equity loans, student loans, car loans, credit card debt, personal loans, medical debt, and any other outstanding debts. Use current balances, not original loan amounts. For mortgages, use the remaining balance, not the original loan."
          },
          {
            question: "What is a good net worth by age?",
            answer: "General benchmarks: Age 30: 1x annual income, Age 40: 3x annual income, Age 50: 6x annual income, Age 60: 8x annual income. However, these vary based on income, location, and life circumstances. Focus on increasing your net worth over time rather than comparing to others."
          },
          {
            question: "What is debt-to-asset ratio?",
            answer: "Debt-to-asset ratio = (Total Liabilities ÷ Total Assets) × 100. It shows how leveraged you are. Under 25% is excellent (low leverage), 25-50% is stable, over 50% indicates high leverage risk. For example, if you have $400,000 in assets and $100,000 in debt, your ratio is 25% (excellent)."
          },
          {
            question: "Should I include my home in net worth?",
            answer: "Yes, include your home's current market value as an asset, but also include your mortgage balance as a liability. For example, if your home is worth $500,000 and you owe $300,000, you have $200,000 in home equity. This is the net value that contributes to your net worth."
          },
          {
            question: "What is the difference between liquid and illiquid assets?",
            answer: "Liquid assets (cash, stocks, bonds) can be quickly converted to cash without significant loss. Illiquid assets (real estate, vehicles) take time to sell and may have transaction costs. Aim for 20-30% of assets in liquid form for financial flexibility. Too much illiquid assets can limit your options during emergencies."
          },
          {
            question: "How often should I calculate my net worth?",
            answer: "Calculate net worth monthly or quarterly to track progress. Monthly tracking helps you stay motivated and catch issues early. Quarterly is sufficient for most people. Update asset values (especially investments and property) to current market values, not purchase prices. Increasing net worth over time means you're building wealth."
          }
        ]}
      />
    </article>
  );
};

export default NetWorthTracker;


import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import EMICalculator from './components/EMICalculator';
import SalaryCalculator from './components/SalaryCalculator';
import InvestmentCalculator from './components/InvestmentCalculator';
import MarketInsights from './components/MarketInsights';
import LoanComparison from './components/LoanComparison';
import LivingCostTool from './components/LivingCostTool';
import MortgageCalculator from './components/MortgageCalculator';
import CurrencyConverter from './components/CurrencyConverter';
import GSTCalculator from './components/GSTCalculator';
import CreditCardPayoff from './components/CreditCardPayoff';
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';
import Sitemap from './components/Sitemap';
import { ToolType } from './types';

const METADATA: Record<ToolType, { title: string; desc: string }> = {
  [ToolType.DASHBOARD]: { title: "FinVault Pro | AI Financial Intelligence Dashboard", desc: "Manage your wealth with AI-driven calculators for EMI, Mortgages, and Investments." },
  [ToolType.EMI_CALC]: { title: "EMI Calculator & Debt Accelerator | FinVault Pro", desc: "Calculate your monthly loan payments and see how much interest you can save with prepayments." },
  [ToolType.MORTGAGE_CALC]: { title: "Mortgage Pro | Detailed Amortization & Tax Analysis", desc: "Advanced home financing tool with property tax, insurance, and PMI calculations." },
  [ToolType.SALARY_CALC]: { title: "Salary Estimator | After-Tax Take Home Pay", desc: "Calculate your net income across all 50 states including credits and 401k optimization." },
  [ToolType.INVESTMENT_CALC]: { title: "Wealth Projector | SIP & Compound Growth Visualization", desc: "Plan your retirement or long-term goals with our advanced wealth projection engine." },
  [ToolType.MARKET_INSIGHTS]: { title: "AI Market Pulse | Real-time Financial Analysis", desc: "Live market trends and strategic insights powered by Gemini 3.0 Pro AI." },
  [ToolType.LOAN_COMPARE]: { title: "Loan Intelligence | Compare Mortgage & Personal Loans", desc: "Refinance analysis and side-by-side loan comparisons to find the best deal." },
  [ToolType.LIVING_COST]: { title: "Living Cost Vitals | Regional Budgeting & Wellness", desc: "Audit your spending against local indices to improve your financial health score." },
  [ToolType.CURRENCY_CONV]: { title: "Currency Intel | Global Exchange & Forex Logic", desc: "Convert global currencies with real-time AI-powered market context." },
  [ToolType.GST_CALC]: { title: "GST Calculator | Direct & Indirect Tax Intel", desc: "Quickly calculate inclusive and exclusive tax amounts for business or shopping." },
  [ToolType.CREDIT_CARD_PAYOFF]: { title: "Card Payoff Intel | Debt Snowball Strategy", desc: "Exit the credit card debt loop with optimized monthly payment strategies." },
  [ToolType.FAQ]: { title: "Financial FAQ | Expert Guidance & Help", desc: "Frequently asked questions about loans, taxes, and financial planning." },
  [ToolType.PRIVACY]: { title: "Privacy Policy | Your Data Security", desc: "Learn how we protect your financial data and maintain your privacy." },
  [ToolType.SITEMAP]: { title: "Sitemap | Explore FinVault Utilities", desc: "Complete directory of all financial tools and resources on FinVault Pro." }
};

const App: React.FC = () => {
  const getInitialTool = (): ToolType => {
    try {
      const path = window.location.pathname.replace('/', '');
      const tools = Object.values(ToolType);
      return tools.includes(path as ToolType) ? (path as ToolType) : ToolType.DASHBOARD;
    } catch (e) {
      return ToolType.DASHBOARD;
    }
  };

  const [activeTool, setActiveTool] = useState<ToolType>(getInitialTool());

  useEffect(() => {
    const meta = METADATA[activeTool];
    if (meta) {
      document.title = meta.title;
      let descriptionTag = document.querySelector('meta[name="description"]');
      if (!descriptionTag) {
        descriptionTag = document.createElement('meta');
        descriptionTag.setAttribute('name', 'description');
        document.head.appendChild(descriptionTag);
      }
      descriptionTag.setAttribute('content', meta.desc);
    }

    try {
      const isBlob = window.location.protocol === 'blob:';
      const path = activeTool === ToolType.DASHBOARD ? '/' : `/${activeTool}`;
      // CRITICAL FIX: Robust check for origin issues in sandboxed environments
      if (!isBlob && window.location.pathname !== path && window.history && typeof window.history.pushState === 'function') {
        const currentOrigin = window.location.origin;
        // Only try to push state if the origin matches (simple heuristic)
        if (currentOrigin && !currentOrigin.includes('usercontent.goog')) {
           window.history.pushState({ tool: activeTool }, meta?.title || '', path);
        }
      }
    } catch (e) {
      console.warn("FinVault Navigation: pushState restricted. Use manual navigation.");
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTool]);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.tool) {
        setActiveTool(event.state.tool);
      } else {
        setActiveTool(getInitialTool());
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderTool = () => {
    switch (activeTool) {
      case ToolType.DASHBOARD: return <Dashboard onSelectTool={setActiveTool} />;
      case ToolType.EMI_CALC: return <EMICalculator />;
      case ToolType.MORTGAGE_CALC: return <MortgageCalculator />;
      case ToolType.SALARY_CALC: return <SalaryCalculator />;
      case ToolType.INVESTMENT_CALC: return <InvestmentCalculator />;
      case ToolType.MARKET_INSIGHTS: return <MarketInsights />;
      case ToolType.LOAN_COMPARE: return <LoanComparison />;
      case ToolType.LIVING_COST: return <LivingCostTool />;
      case ToolType.CURRENCY_CONV: return <CurrencyConverter />;
      case ToolType.GST_CALC: return <GSTCalculator />;
      case ToolType.CREDIT_CARD_PAYOFF: return <CreditCardPayoff />;
      case ToolType.FAQ: return <FAQ />;
      case ToolType.PRIVACY: return <PrivacyPolicy />;
      case ToolType.SITEMAP: return <Sitemap onSelectTool={setActiveTool} />;
      default: return <Dashboard onSelectTool={setActiveTool} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 flex-col md:flex-row">
      <Sidebar activeTool={activeTool} setActiveTool={setActiveTool} />
      
      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        <header className="flex justify-between items-center p-6 md:hidden bg-white border-b sticky top-0 z-40">
          <h1 className="text-xl font-black text-indigo-600 flex items-center gap-2">
            <span>🏦</span> FinVault
          </h1>
          <button 
            onClick={() => setActiveTool(ToolType.DASHBOARD)}
            className="p-3 bg-indigo-50 text-indigo-600 rounded-xl font-bold"
          >
            🏠
          </button>
        </header>

        <div className="flex-1 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            {renderTool()}
          </div>
        </div>

        <Footer setActiveTool={setActiveTool} />

        <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl border border-slate-200 px-6 py-4 rounded-[2rem] shadow-2xl flex gap-10 z-50">
           <button onClick={() => setActiveTool(ToolType.DASHBOARD)} className={`${activeTool === ToolType.DASHBOARD ? 'text-indigo-600 scale-125' : 'text-slate-400'} transition-all text-xl`}>📊</button>
           <button onClick={() => setActiveTool(ToolType.EMI_CALC)} className={`${activeTool === ToolType.EMI_CALC ? 'text-indigo-600 scale-125' : 'text-slate-400'} transition-all text-xl`}>💳</button>
           <button onClick={() => setActiveTool(ToolType.MARKET_INSIGHTS)} className={`${activeTool === ToolType.MARKET_INSIGHTS ? 'text-indigo-600 scale-125' : 'text-slate-400'} transition-all text-xl`}>🤖</button>
           <button onClick={() => setActiveTool(ToolType.SITEMAP)} className={`${activeTool === ToolType.SITEMAP ? 'text-indigo-600 scale-125' : 'text-slate-400'} transition-all text-xl`}>🗺️</button>
        </div>
      </main>
    </div>
  );
};

export default App;

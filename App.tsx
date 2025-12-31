
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
import FIREPlanner from './components/FIREPlanner';
import FreelanceHub from './components/FreelanceHub';
import InvestmentAcademy from './components/InvestmentAcademy';
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';
import Sitemap from './components/Sitemap';
import { ToolType } from './types';

const METADATA: Record<ToolType, { title: string; desc: string }> = {
  [ToolType.DASHBOARD]: { title: "QuantCurb | AI Financial Intelligence Dashboard", desc: "Professional-grade wealth management with AI-driven calculators for EMI, Mortgages, and Investments." },
  [ToolType.EMI_CALC]: { title: "Loan EMI Pro | QuantCurb Debt Optimization", desc: "Calculate monthly loan payments and interest savings using the institutional reducing balance method." },
  [ToolType.MORTGAGE_CALC]: { title: "Mortgage Intelligence | QuantCurb Real Estate Analysis", desc: "Plan your home purchase with detailed PITI calculations, property tax, and PMI estimation." },
  [ToolType.SALARY_CALC]: { title: "Salary Estimator | QuantCurb After-Tax Analysis", desc: "Calculate precise net take-home pay across 50 states including 401k and tax deductions." },
  [ToolType.INVESTMENT_CALC]: { title: "Wealth Projector | QuantCurb SIP & Compound Growth", desc: "Visualize long-term wealth growth with monthly contributions and inflation-adjusted modeling." },
  [ToolType.MARKET_INSIGHTS]: { title: "Market Pulse | QuantCurb App Ecosystem Intelligence", desc: "AI-driven analysis of the financial app ecosystem for professionals and retail users." },
  [ToolType.LOAN_COMPARE]: { title: "Loan Intel | QuantCurb Comparison Hub", desc: "Compare multiple loan offers side-by-side to minimize total interest and refinance costs." },
  [ToolType.LIVING_COST]: { title: "Budget Vitals | QuantCurb Regional Cost Audit", desc: "Compare your living expenses against regional indices to improve your financial efficiency." },
  [ToolType.CURRENCY_CONV]: { title: "Currency Intel | QuantCurb Global Exchange Rates", desc: "Convert global currencies with real-time rates and AI-driven market sentiment." },
  [ToolType.GST_CALC]: { title: "Tax Intelligence | QuantCurb GST & VAT Tool", desc: "Quickly calculate inclusive and exclusive tax amounts for professional business invoicing." },
  [ToolType.CREDIT_CARD_PAYOFF]: { title: "Debt Strategist | QuantCurb Card Payoff Triage", desc: "Exit the high-interest debt loop with optimized card payoff simulation using Avalanche logic." },
  [ToolType.FIRE_PLANNER]: { title: "FIRE Freedom Logic | QuantCurb Early Retirement", desc: "Calculate your retirement crossover point with the 4% safe withdrawal rule." },
  [ToolType.FREELANCE_PROFIT]: { title: "Freelance Hub | QuantCurb Profit Engine", desc: "Analyze true hourly rates and tax burdens for 1099 freelancers and independent contractors." },
  [ToolType.INVESTMENT_ACADEMY]: { title: "Fund Academy | QuantCurb Institutional Knowledge", desc: "Deep dive into the global fund ecosystem, risk-reward patterns, and institutional benchmarks." },
  [ToolType.FAQ]: { title: "Knowledge Base | QuantCurb Financial FAQ", desc: "Deep-dive into the mathematical and strategic logic powering QuantCurb utilities." },
  [ToolType.PRIVACY]: { title: "Privacy Standards | QuantCurb Data Sovereignty", desc: "Our commitment to protecting your financial data and maintaining algorithmic transparency." },
  [ToolType.SITEMAP]: { title: "QuantCurb Sitemap | Explore Our Utility Suite", desc: "Complete directory of all financial intelligence tools and knowledge resources." }
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
      if (!isBlob && window.location.pathname !== path && window.history && typeof window.history.pushState === 'function') {
        const currentOrigin = window.location.origin;
        if (currentOrigin && !currentOrigin.includes('usercontent.goog')) {
           window.history.pushState({ tool: activeTool }, meta?.title || '', path);
        }
      }
    } catch (e) {
      console.warn("QuantCurb Navigation: pushState restricted.");
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
      case ToolType.FIRE_PLANNER: return <FIREPlanner />;
      case ToolType.FREELANCE_PROFIT: return <FreelanceHub />;
      case ToolType.INVESTMENT_ACADEMY: return <InvestmentAcademy />;
      case ToolType.FAQ: return <FAQ onSelectTool={setActiveTool} />;
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
            <span>📈</span> QuantCurb
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

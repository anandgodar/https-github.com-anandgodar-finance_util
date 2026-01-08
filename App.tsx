
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import ExcelModeler from './components/ExcelModeler';
import NetWorthTracker from './components/NetWorthTracker';
import EmergencyFundTool from './components/EmergencyFundTool';
import RetirementOptimizer from './components/RetirementOptimizer';
import DividendReinvestmentCalculator from './components/DividendReinvestmentCalculator';
import CryptoTaxLossHarvester from './components/CryptoTaxLossHarvester';
import DividendStockPage from './src/components/DividendStockPage';
import ChildTaxCreditCalculator from './components/ChildTaxCreditCalculator';
import QuarterlyTaxCalculator from './components/QuarterlyTaxCalculator';
import ACASubsidyCalculator from './components/ACASubsidyCalculator';
import ChildTaxCreditGuide2025 from './components/blog/ChildTaxCreditGuide2025';
import ACAHealthInsuranceFreelancers2025 from './components/blog/ACAHealthInsuranceFreelancers2025';
import QuarterlyEstimatedTaxesGuide2025 from './components/blog/QuarterlyEstimatedTaxesGuide2025';
import SelfEmploymentTaxGuide2025 from './components/blog/SelfEmploymentTaxGuide2025';
import TaxDeductionsFreelancers2025 from './components/blog/TaxDeductionsFreelancers2025';
import Comparison1099VsW2_2025 from './components/blog/Comparison1099VsW2_2025';
import LLCvsSoleProp2025 from './components/blog/LLCvsSoleProp2025';
import SEPIRAvsSolo401k2025 from './components/blog/SEPIRAvsSolo401k2025';
import HomeOfficeDeduction2025 from './components/blog/HomeOfficeDeduction2025';
import FAQ from './components/FAQ';
import Methodology from './components/Methodology';
import PrivacyPolicy from './components/PrivacyPolicy';
import Sitemap from './components/Sitemap';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Disclaimer from './components/Disclaimer';
import { ToolType } from './types';

const METADATA: Record<ToolType, { title: string; desc: string; keywords: string }> = {
  [ToolType.DASHBOARD]: { 
    title: "QuantCurb | Professional Financial Intelligence & AI Wealth Insights", 
    desc: "Maximize your net worth with QuantCurb. Institutional-grade financial modeling, real-time market insights, and precision calculators for EMI, tax, and wealth growth.",
    keywords: "financial intelligence, wealth management, mortgage calculator, tax estimator"
  },
  [ToolType.NET_WORTH]: { 
    title: "Net Worth Tracker - Professional Asset & Liability Balance Sheet", 
    desc: "Track your private balance sheet with QuantCurb. Mark-to-market asset analysis, debt triage, and solvency grading for institutional-grade wealth tracking.",
    keywords: "net worth tracker, balance sheet, asset liability, wealth tracking"
  },
  [ToolType.EMERGENCY_FUND]: { 
    title: "Emergency Fund Calculator - Survival Runway & Inflation Stress Test", 
    desc: "Calculate your liquid safety net. Stress-test your survival runway against inflation and audit your term life insurance needs with Emergency Guard.",
    keywords: "emergency fund calculator, financial safety net, survival runway, inflation stress"
  },
  [ToolType.EMI_CALC]: { 
    title: "EMI Calculator - Reducing Balance Loan & Interest Savings Pro", 
    desc: "Optimize your loan repayments. Use our reducing balance EMI calculator to model principal prepayments and shave years off your debt tenure.",
    keywords: "emi calculator, loan repayment, interest savings, prepayment calculator"
  },
  [ToolType.MORTGAGE_CALC]: {
    title: "Mortgage Calculator - State-Specific PITI, PMI, HOA & Property Tax Estimator",
    desc: "Professional home financing tool with all 50 US states property tax rates. Model Principal, Interest, Taxes, Insurance, HOA with automated PMI logic and LTV stress testing for 2026.",
    keywords: "mortgage calculator, piti calculator, state property tax rates, hoa calculator, pmi calculator, home loan estimator, mortgage by state"
  },
  [ToolType.SALARY_CALC]: { 
    title: "Take Home Pay Calculator - 2025 Salary Tax & 401k Estimator", 
    desc: "Precise net pay modeling for all 50 US states. Account for 401k tax shields, FICA, Federal, and State tax deductions with the Salary Estimator.",
    keywords: "salary calculator, take home pay, 401k calculator, tax estimator"
  },
  [ToolType.INVESTMENT_CALC]: { 
    title: "Investment Calculator - Wealth SIP & Compounding Growth Simulator", 
    desc: "Visualize your compound interest trajectory. Model recurring SIPs, expected returns, and inflation-adjusted wealth growth for 2025.",
    keywords: "investment calculator, sip calculator, compound interest, wealth growth"
  },
  [ToolType.MARKET_INSIGHTS]: { 
    title: "AI Market Pulse - Institutional vs Retail App Ecosystem Analysis", 
    desc: "Compare Bloomberg and FactSet against Robinhood and Wise. Deep AI-driven analysis of the digital financial stack for professional workflows.",
    keywords: "market insights, fintech analysis, bloomberg vs robinhood, financial apps"
  },
  [ToolType.LOAN_COMPARE]: { 
    title: "Loan Comparison Pro - Refinance Break-even & APR Matrix", 
    desc: "Audit loan offers side-by-side. Calculate refinancing ROI, break-even periods, and the total interest delta between different debt structures.",
    keywords: "loan comparison, refinance calculator, apr comparison, debt audit"
  },
  [ToolType.LIVING_COST]: { 
    title: "Cost of Living Calculator - Regional Budget & Efficiency Audit", 
    desc: "Benchmark your monthly spend against regional COL indices. Audit your 50/30/20 budget efficiency for major US cities and states.",
    keywords: "cost of living, budget audit, 50 30 20 rule, regional cost"
  },
  [ToolType.CURRENCY_CONV]: { 
    title: "Live Currency Converter - Interbank Rates & Forex Sentiment AI", 
    desc: "Real-time interbank forex conversion. AI-powered market sentiment, 12-month volatility heatmaps, and zero-markup spread auditing.",
    keywords: "currency converter, forex rates, interbank rate, usd to inr, eur to usd"
  },
  [ToolType.GST_CALC]: { 
    title: "GST Calculator - Professional Tax Invoicing & Compliance Hub", 
    desc: "Accurate GST and VAT splitting for businesses. Handle inclusive and exclusive pricing with automated CGST, SGST, and IGST breakdowns.",
    keywords: "gst calculator, vat calculator, tax invoicing, business tax tool"
  },
  [ToolType.CREDIT_CARD_PAYOFF]: { 
    title: "Credit Card Payoff Strategist - Avalanche vs Snowball Method", 
    desc: "Eliminate debt using optimized algorithms. Compare Avalanche and Snowball trajectories to save on interest and shave months off debt.",
    keywords: "credit card payoff, debt avalanche, debt snowball, interest savings"
  },
  [ToolType.FIRE_PLANNER]: { 
    title: "FIRE Planner - 4% Rule & Early Retirement Freedom Number", 
    desc: "Calculate your crossover point to freedom. Plan for Lean, Standard, or Fat FIRE with inflation-adjusted investment and expense modeling.",
    keywords: "fire planner, early retirement, 4 percent rule, freedom number"
  },
  [ToolType.FREELANCE_PROFIT]: { 
    title: "Freelance Hub - 1099 Net Profit & FTE Salary Equivalent Tool", 
    desc: "Analyze your true hourly rate as a contractor. Factor in self-employment taxes, health insurance, and OpEx to find your salary equivalent.",
    keywords: "freelance calculator, 1099 taxes, self employment tax, contractor rate"
  },
  [ToolType.INVESTMENT_ACADEMY]: { 
    title: "Fund Academy - Mastering Index Funds, ETFs & REITs Strategy", 
    desc: "Institutional knowledge on fund selection. Master risk-reward profiles, expense ratios, and asset allocation strategies for long-term alpha.",
    keywords: "investment funds, index funds vs etfs, reit strategy, fund selection"
  },
  [ToolType.EXCEL_MODELER]: {
    title: "Excel Power Modeler - Professional DCF & Valuation Engine",
    desc: "Run institutional 5-stage DCF models without spreadsheets. Analyze enterprise value, terminal growth, and WACC sensitivity matrices.",
    keywords: "dcf calculator, business valuation, wacc matrix, enterprise value"
  },
  [ToolType.RETIREMENT_OPTIMIZER]: {
    title: "Retirement Account Optimizer - 401k vs IRA vs Roth Strategy",
    desc: "Compare 401(k), Traditional IRA, and Roth IRA tax strategies. Maximize employer match, minimize lifetime tax burden with AI-driven optimization for 2025 contribution limits.",
    keywords: "retirement optimizer, 401k calculator, roth ira calculator, traditional ira, retirement tax strategy"
  },
  [ToolType.DRIP_CALCULATOR]: {
    title: "Dividend Reinvestment (DRIP) Calculator - Snowball Compounding Model",
    desc: "Model dividend reinvestment compounding vs cash payouts. Visualize the DRIP snowball effect, cost of waiting, and projected passive income.",
    keywords: "drip calculator, dividend reinvestment, dividend yield, passive income, compounding"
  },
  [ToolType.CRYPTO_TAX_LOSS]: {
    title: "Crypto Tax Loss Harvester - Estimated Tax Bill Reduction Simulator",
    desc: "Estimate harvestable crypto losses and tax savings across multiple positions with a clean, client-side simulator.",
    keywords: "crypto tax loss harvesting, tax loss harvester, crypto taxes, capital losses"
  },
  [ToolType.CHILD_TAX_CREDIT]: {
    title: "Child Tax Credit Calculator 2025 - CTC & ACTC Estimator",
    desc: "Calculate your 2025 Child Tax Credit (CTC) and Additional Child Tax Credit (ACTC). Estimate up to $2,000 per child with phase-out analysis, refundable credit calculations, and EITC eligibility check for single parents and families.",
    keywords: "child tax credit calculator 2025, ctc calculator, child tax credit phase out, additional child tax credit, actc calculator, child tax credit single parent, eitc eligibility, tax credit for children"
  },
  [ToolType.QUARTERLY_TAX]: {
    title: "Quarterly Estimated Tax Calculator 2025 - IRS Form 1040-ES",
    desc: "Calculate quarterly estimated tax payments for freelancers, self-employed, and 1099 contractors. Avoid IRS underpayment penalties with safe harbor rules (100%/110% prior year, 90% current year). Plan Q1-Q4 payments with self-employment tax calculations.",
    keywords: "quarterly tax calculator, 1040-es calculator, estimated tax payments, quarterly taxes, self employment tax calculator, freelance tax calculator, how much to pay quarterly taxes, estimated tax due dates 2025, safe harbor tax rule"
  },
  [ToolType.ACA_SUBSIDY]: {
    title: "ACA Health Insurance Subsidy Calculator 2025 - Obamacare Premium Tax Credit",
    desc: "Calculate ACA marketplace subsidies and Premium Tax Credits for 2025. Determine Medicaid eligibility, cost-sharing reductions, and monthly healthcare costs for freelancers, self-employed, and families. Check coverage gap status and Federal Poverty Level percentage.",
    keywords: "aca subsidy calculator, obamacare subsidy calculator, premium tax credit calculator, healthcare subsidy calculator, aca marketplace calculator, health insurance subsidy, medicaid eligibility calculator, federal poverty level calculator, cost sharing reduction, healthcare.gov calculator"
  },
  [ToolType.BLOG_CTC_2025]: {
    title: "Child Tax Credit 2025: Complete Guide to CTC, ACTC, and Tax Savings",
    desc: "Comprehensive guide to the 2025 Child Tax Credit. Learn eligibility requirements, income phase-outs, how to claim the $2,000 CTC and $1,700 refundable ACTC, and strategies to maximize your tax savings. Essential reading for parents, single filers, and families.",
    keywords: "child tax credit 2025, ctc guide, additional child tax credit, actc guide, child tax credit eligibility, child tax credit phase out 2025, how to claim child tax credit, tax credit for children, child tax credit income limits, schedule 8812"
  },
  [ToolType.BLOG_ACA_FREELANCERS]: {
    title: "ACA Health Insurance for Freelancers 2025: Complete Guide to Subsidies & Marketplace",
    desc: "Ultimate guide to ACA health insurance for freelancers, self-employed, and contractors in 2025. Master Premium Tax Credits, Medicaid expansion, coverage gaps, enrollment deadlines, and cost optimization strategies. Save thousands on healthcare with our expert freelancer insurance guide.",
    keywords: "health insurance for freelancers, self employed health insurance, aca marketplace freelancers, health insurance for contractors, freelance health insurance 2025, premium tax credit, medicaid expansion, healthcare.gov for self employed, health insurance tax deduction, cost sharing reduction"
  },
  [ToolType.BLOG_QUARTERLY_TAX]: {
    title: "Quarterly Estimated Taxes 2025: Complete Guide for Freelancers & Self-Employed",
    desc: "Master quarterly estimated taxes with our comprehensive 2025 guide. Learn safe harbor rules (100%/110% prior year, 90% current year), payment deadlines, penalty avoidance, IRS Form 1040-ES, and exact calculations for freelancers, contractors, and gig workers. Essential tax planning for the self-employed.",
    keywords: "quarterly estimated taxes, quarterly tax guide, 1040-es guide, estimated tax payments, safe harbor rules, quarterly tax deadlines 2025, self employment tax guide, freelance quarterly taxes, how to pay quarterly taxes, estimated tax penalty, quarterly tax calculator guide"
  },
  [ToolType.BLOG_SE_TAX]: {
    title: "Self-Employment Tax Guide 2025: Complete Schedule SE & Tax Calculation Guide",
    desc: "Master self-employment tax in 2025. Understand the 15.3% SE tax rate, Schedule SE calculations, 92.35% rule, SE tax deduction strategies, and how to minimize your tax burden. Essential guide for freelancers, contractors, and sole proprietors navigating Social Security and Medicare taxes.",
    keywords: "self employment tax, schedule SE, self employment tax rate 2025, how to calculate self employment tax, self employment tax deduction, freelance taxes, independent contractor taxes, social security tax self employed, medicare tax self employed, 92.35 rule, SE tax calculator"
  },
  [ToolType.BLOG_TAX_DEDUCTIONS]: {
    title: "Tax Deductions for Freelancers 2025: Complete Write-Off Guide & Strategies",
    desc: "Maximize your freelance tax deductions in 2025. Master home office deduction ($5/sq ft simplified method), mileage tracking ($0.67/mile), Section 179 equipment deduction, health insurance write-off, retirement contributions, and more. Save thousands with our comprehensive freelancer tax deduction guide.",
    keywords: "tax deductions for freelancers, self employed tax deductions 2025, freelance write offs, home office deduction, business expense deductions, section 179 deduction, self employed health insurance deduction, mileage deduction 2025, freelance tax savings"
  },
  [ToolType.BLOG_1099_W2]: {
    title: "1099 vs W-2 in 2025: Complete Tax & Benefits Comparison for Contractors",
    desc: "Understand the complete difference between 1099 independent contractor and W-2 employee status in 2025. Compare taxes (self-employment vs payroll), benefits, take-home pay, legal classification rules, and when to negotiate each status. Essential guide for freelancers and contractors.",
    keywords: "1099 vs w2, independent contractor vs employee, 1099 vs w2 taxes, contractor vs employee benefits, w2 to 1099 conversion, self employment tax vs payroll tax, 1099 employee, irs 20 factor test, misclassification, freelance vs employee"
  },
  [ToolType.BLOG_LLC_SOLE_PROP]: {
    title: "LLC vs Sole Proprietor 2025: Complete Tax & Legal Comparison Guide",
    desc: "Comprehensive comparison of LLC vs Sole Proprietorship for freelancers and small business owners. Understand tax differences, liability protection, formation costs by state, S-Corp election benefits, and which structure saves you the most money in 2025.",
    keywords: "llc vs sole proprietor, llc vs sole proprietorship taxes, sole proprietor vs llc, should i form an llc, s corp election, llc tax benefits, sole proprietorship liability, llc formation costs, business structure comparison, llc for freelancers"
  },
  [ToolType.BLOG_SEP_SOLO401K]: {
    title: "SEP-IRA vs Solo 401(k) 2025: Complete Contribution Limits & Comparison Guide",
    desc: "Comprehensive comparison of SEP-IRA vs Solo 401(k) for self-employed individuals and freelancers. Understand 2025 contribution limits ($69k max), tax benefits, setup costs, deadlines, Roth options, and which retirement plan saves you the most money.",
    keywords: "sep ira vs solo 401k, sep ira vs individual 401k, self employed retirement plans, solo 401k contribution limits 2025, sep ira contribution limits 2025, best retirement plan for self employed, roth solo 401k, sep ira vs 401k, retirement plans for freelancers"
  },
  [ToolType.BLOG_HOME_OFFICE]: {
    title: "Home Office Deduction 2025: Complete Guide to Simplified vs Regular Method",
    desc: "Comprehensive guide to claiming the home office deduction for self-employed individuals and freelancers in 2025. Learn the simplified method ($5/sq ft, max $1,500), regular method (actual expenses), qualification requirements, exclusive use rules, depreciation, and audit-proof documentation.",
    keywords: "home office deduction 2025, simplified home office deduction, home office deduction rules, how to claim home office deduction, home office tax deduction, exclusive use test, principal place of business, home office deduction calculator, irs home office deduction, form 8829"
  },
  [ToolType.FAQ]: {
    title: "Financial Knowledge Base - Expert Logic & Strategy FAQ",
    desc: "Deep technical documentation on the mathematical frameworks and strategies powering QuantCurb's institutional finance suite.",
    keywords: "finance faq, amortization math, ppi calculation, fire logic"
  },
  [ToolType.METHODOLOGY]: {
    title: "Methodology & Assumptions - Data Sources & Tax Logic Transparency",
    desc: "Complete disclosure of all calculation methodologies, tax brackets, data sources, and assumptions. YMYL compliance for 2025-2026 tax year with IRS-sourced brackets.",
    keywords: "financial methodology, tax calculations, ymyl compliance, data sources, calculation assumptions"
  },
  [ToolType.PRIVACY]: { 
    title: "Privacy Policy - Financial Data Sovereignty & Algorithm Standards", 
    desc: "QuantCurb's commitment to financial data privacy and algorithmic integrity. Your private balance sheet data remains your own.",
    keywords: "privacy policy, financial privacy, data sovereignty"
  },
  [ToolType.SITEMAP]: { 
    title: "QuantCurb Sitemap - Explore Professional Financial Utilities", 
    desc: "A complete directory of high-fidelity financial modeling tools and educational resources in the QuantCurb intelligence ecosystem.",
    keywords: "sitemap, financial calculators, wealth modeling"
  },
  [ToolType.ABOUT]: { 
    title: "About QuantCurb - Our Mission & Institutional Philosophy", 
    desc: "Learn about the core team and engineering principles behind QuantCurb. Bridging the gap between banking software and retail finance.",
    keywords: "about us, quantcurb mission, financial transparency, wealth engineering"
  },
  [ToolType.CONTACT]: { 
    title: "Contact QuantCurb - Professional Inquiries & Support", 
    desc: "Get in touch with the QuantCurb intelligence team for support, feature requests, or professional partnerships.",
    keywords: "contact us, financial support, quantcurb help"
  },
  [ToolType.DISCLAIMER]: { 
    title: "Legal Disclaimer - Terms of Use & Financial Compliance", 
    desc: "Important legal information regarding the algorithmic nature of QuantCurb. We provide models, not advice.",
    keywords: "legal disclaimer, financial compliance, terms of use"
  }
};

const AppShell: React.FC = () => {
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

  // ADVANCED SEO: Dynamic JSON-LD & Meta Management
  useEffect(() => {
    const meta = METADATA[activeTool];
    if (meta) {
      document.title = meta.title;
      
      // Update Description
      let descriptionTag = document.querySelector('meta[name="description"]');
      if (!descriptionTag) {
        descriptionTag = document.createElement('meta');
        descriptionTag.setAttribute('name', 'description');
        document.head.appendChild(descriptionTag);
      }
      descriptionTag.setAttribute('content', meta.desc);

      // Update Keywords
      let keywordsTag = document.querySelector('meta[name="keywords"]');
      if (!keywordsTag) {
        keywordsTag = document.createElement('meta');
        keywordsTag.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsTag);
      }
      keywordsTag.setAttribute('content', meta.keywords);

      // DYNAMIC SCHEMA INJECTION
      const scriptId = 'quantcurb-json-ld';
      let scriptTag = document.getElementById(scriptId) as HTMLScriptElement;
      if (scriptTag) scriptTag.remove();

      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": meta.title,
        "description": meta.desc,
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "All",
        "url": `https://quantcurb.com/${activeTool}`,
        "author": {
          "@type": "Organization",
          "name": "QuantCurb Intelligence"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      };

      scriptTag.text = JSON.stringify(schemaData);
      document.head.appendChild(scriptTag);

      // Add BreadcrumbList Schema
      const breadcrumbId = 'quantcurb-breadcrumb';
      let breadcrumbScript = document.getElementById(breadcrumbId) as HTMLScriptElement;
      if (breadcrumbScript) breadcrumbScript.remove();

      breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = breadcrumbId;
      breadcrumbScript.type = 'application/ld+json';

      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://quantcurb.com/"
          },
          ...(activeTool !== ToolType.DASHBOARD ? [{
            "@type": "ListItem",
            "position": 2,
            "name": meta.title.split(' - ')[0] || meta.title,
            "item": `https://quantcurb.com/${activeTool}`
          }] : [])
        ]
      };

      breadcrumbScript.text = JSON.stringify(breadcrumbData);
      document.head.appendChild(breadcrumbScript);
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
      case ToolType.NET_WORTH: return <NetWorthTracker />;
      case ToolType.EMERGENCY_FUND: return <EmergencyFundTool />;
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
      case ToolType.EXCEL_MODELER: return <ExcelModeler />;
      case ToolType.RETIREMENT_OPTIMIZER: return <RetirementOptimizer />;
      case ToolType.DRIP_CALCULATOR: return <DividendReinvestmentCalculator />;
      case ToolType.CRYPTO_TAX_LOSS: return <CryptoTaxLossHarvester />;
      case ToolType.CHILD_TAX_CREDIT: return <ChildTaxCreditCalculator />;
      case ToolType.QUARTERLY_TAX: return <QuarterlyTaxCalculator />;
      case ToolType.ACA_SUBSIDY: return <ACASubsidyCalculator />;
      case ToolType.BLOG_CTC_2025: return <ChildTaxCreditGuide2025 onNavigate={setActiveTool} />;
      case ToolType.BLOG_ACA_FREELANCERS: return <ACAHealthInsuranceFreelancers2025 onNavigate={setActiveTool} />;
      case ToolType.BLOG_QUARTERLY_TAX: return <QuarterlyEstimatedTaxesGuide2025 onNavigate={setActiveTool} />;
      case ToolType.BLOG_SE_TAX: return <SelfEmploymentTaxGuide2025 onNavigate={setActiveTool} />;
      case ToolType.BLOG_TAX_DEDUCTIONS: return <TaxDeductionsFreelancers2025 onNavigate={setActiveTool} />;
      case ToolType.BLOG_1099_W2: return <Comparison1099VsW2_2025 onNavigate={setActiveTool} />;
      case ToolType.BLOG_LLC_SOLE_PROP: return <LLCvsSoleProp2025 onNavigate={setActiveTool} />;
      case ToolType.BLOG_SEP_SOLO401K: return <SEPIRAvsSolo401k2025 onNavigate={setActiveTool} />;
      case ToolType.BLOG_HOME_OFFICE: return <HomeOfficeDeduction2025 onNavigate={setActiveTool} />;
      case ToolType.FAQ: return <FAQ onSelectTool={setActiveTool} />;
      case ToolType.METHODOLOGY: return <Methodology />;
      case ToolType.PRIVACY: return <PrivacyPolicy />;
      case ToolType.SITEMAP: return <Sitemap onSelectTool={setActiveTool} />;
      case ToolType.ABOUT: return <AboutUs />;
      case ToolType.CONTACT: return <ContactUs />;
      case ToolType.DISCLAIMER: return <Disclaimer />;
      default: return <Dashboard onSelectTool={setActiveTool} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 flex-col md:flex-row">
      <Sidebar activeTool={activeTool} setActiveTool={setActiveTool} />
      
      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        <header className="flex justify-between items-center p-6 md:hidden bg-white border-b sticky top-0 z-40">
          <div className="text-xl font-black text-indigo-600 flex items-center gap-2">
            <span>📈</span> QuantCurb
          </div>
          <button 
            onClick={() => setActiveTool(ToolType.DASHBOARD)}
            className="p-3 bg-indigo-50 text-indigo-600 rounded-xl font-bold"
            aria-label="Back to Home"
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
           <button onClick={() => setActiveTool(ToolType.DASHBOARD)} className={`${activeTool === ToolType.DASHBOARD ? 'text-indigo-600 scale-125' : 'text-slate-400'} transition-all text-xl`} aria-label="Dashboard">📊</button>
           <button onClick={() => setActiveTool(ToolType.NET_WORTH)} className={`${activeTool === ToolType.NET_WORTH ? 'text-indigo-600 scale-125' : 'text-slate-400'} transition-all text-xl`} aria-label="Net Worth">💎</button>
           <button onClick={() => setActiveTool(ToolType.MARKET_INSIGHTS)} className={`${activeTool === ToolType.MARKET_INSIGHTS ? 'text-indigo-600 scale-125' : 'text-slate-400'} transition-all text-xl`} aria-label="Market Insights">🤖</button>
           <button onClick={() => setActiveTool(ToolType.SITEMAP)} className={`${activeTool === ToolType.SITEMAP ? 'text-indigo-600 scale-125' : 'text-slate-400'} transition-all text-xl`} aria-label="Sitemap">🗺️</button>
        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/dividend-calculator/:ticker" element={<DividendStockPage />} />
      <Route path="/*" element={<AppShell />} />
    </Routes>
  </BrowserRouter>
);

export default App;

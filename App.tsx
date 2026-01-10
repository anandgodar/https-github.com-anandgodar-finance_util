
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import { ToolType } from './types';

// Lazy load all calculator components for code splitting
const EMICalculator = lazy(() => import('./components/EMICalculator'));
const SalaryCalculator = lazy(() => import('./components/SalaryCalculator'));
const InvestmentCalculator = lazy(() => import('./components/InvestmentCalculator'));
const MarketInsights = lazy(() => import('./components/MarketInsights'));
const LoanComparison = lazy(() => import('./components/LoanComparison'));
const LivingCostTool = lazy(() => import('./components/LivingCostTool'));
const MortgageCalculator = lazy(() => import('./components/MortgageCalculator'));
const CurrencyConverter = lazy(() => import('./components/CurrencyConverter'));
const GSTCalculator = lazy(() => import('./components/GSTCalculator'));
const CreditCardPayoff = lazy(() => import('./components/CreditCardPayoff'));
const FIREPlanner = lazy(() => import('./components/FIREPlanner'));
const FreelanceHub = lazy(() => import('./components/FreelanceHub'));
const InvestmentAcademy = lazy(() => import('./components/InvestmentAcademy'));
const ExcelModeler = lazy(() => import('./components/ExcelModeler'));
const NetWorthTracker = lazy(() => import('./components/NetWorthTracker'));
const EmergencyFundTool = lazy(() => import('./components/EmergencyFundTool'));
const RetirementOptimizer = lazy(() => import('./components/RetirementOptimizer'));
const DividendReinvestmentCalculator = lazy(() => import('./components/DividendReinvestmentCalculator'));
const CryptoTaxLossHarvester = lazy(() => import('./components/CryptoTaxLossHarvester'));
const DividendStockPage = lazy(() => import('./src/components/DividendStockPage'));
const ChildTaxCreditCalculator = lazy(() => import('./components/ChildTaxCreditCalculator'));
const QuarterlyTaxCalculator = lazy(() => import('./components/QuarterlyTaxCalculator'));
const ACASubsidyCalculator = lazy(() => import('./components/ACASubsidyCalculator'));

// Lazy load blog posts
const ChildTaxCreditGuide2025 = lazy(() => import('./components/blog/ChildTaxCreditGuide2025'));
const ACAHealthInsuranceFreelancers2025 = lazy(() => import('./components/blog/ACAHealthInsuranceFreelancers2025'));
const QuarterlyEstimatedTaxesGuide2025 = lazy(() => import('./components/blog/QuarterlyEstimatedTaxesGuide2025'));
const SelfEmploymentTaxGuide2025 = lazy(() => import('./components/blog/SelfEmploymentTaxGuide2025'));
const TaxDeductionsFreelancers2025 = lazy(() => import('./components/blog/TaxDeductionsFreelancers2025'));
const Comparison1099VsW2_2025 = lazy(() => import('./components/blog/Comparison1099VsW2_2025'));
const LLCvsSoleProp2025 = lazy(() => import('./components/blog/LLCvsSoleProp2025'));
const SEPIRAvsSolo401k2025 = lazy(() => import('./components/blog/SEPIRAvsSolo401k2025'));
const HomeOfficeDeduction2025 = lazy(() => import('./components/blog/HomeOfficeDeduction2025'));
const MortgageCalculatorGuide2025 = lazy(() => import('./components/blog/MortgageCalculatorGuide2025'));
const HowMuchHouseCanIAfford2025 = lazy(() => import('./components/blog/HowMuchHouseCanIAfford2025'));
const ShouldIPayOffDebtOrInvest2025 = lazy(() => import('./components/blog/ShouldIPayOffDebtOrInvest2025'));
const HowToCalculateTakeHomePay2025 = lazy(() => import('./components/blog/HowToCalculateTakeHomePay2025'));
const RothIRAvsTraditionalIRA2025 = lazy(() => import('./components/blog/RothIRAvsTraditionalIRA2025'));
const HowMuchEmergencyFundDoINeed2025 = lazy(() => import('./components/blog/HowMuchEmergencyFundDoINeed2025'));
const FIRECalculatorGuide2025 = lazy(() => import('./components/blog/FIRECalculatorGuide2025'));
const BestRetirementCalculator2025 = lazy(() => import('./components/blog/BestRetirementCalculator2025'));
const InvestmentCalculatorGuide2025 = lazy(() => import('./components/blog/InvestmentCalculatorGuide2025'));
const BestMortgageCalculator2025 = lazy(() => import('./components/blog/BestMortgageCalculator2025'));
const StudentLoanRepaymentStrategies2025 = lazy(() => import('./components/blog/StudentLoanRepaymentStrategies2025'));
const TaxBracketsExplained2025 = lazy(() => import('./components/blog/TaxBracketsExplained2025'));
const FourZeroOneKVsIRAComparison2025 = lazy(() => import('./components/blog/401kVsIRAComparison2025'));
const BudgetingGuide2025 = lazy(() => import('./components/blog/BudgetingGuide2025'));
const BlogIndex = lazy(() => import('./components/BlogIndex'));

// Lazy load static pages
const FAQ = lazy(() => import('./components/FAQ'));
const Methodology = lazy(() => import('./components/Methodology'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const Sitemap = lazy(() => import('./components/Sitemap'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const Disclaimer = lazy(() => import('./components/Disclaimer'));

// Loading component
const LoadingFallback: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
      <p className="text-slate-600 font-medium">Loading calculator...</p>
    </div>
  </div>
);

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
    title: "EMI Calculator 2025 - Loan EMI Calculator with Extra Payment Savings", 
    desc: "Optimize your loan repayments. Use our reducing balance EMI calculator to model principal prepayments and shave years off your debt tenure.",
    keywords: "emi calculator, loan repayment, interest savings, prepayment calculator"
  },
  [ToolType.MORTGAGE_CALC]: {
    title: "Mortgage Calculator 2025 - PITI, PMI, HOA & Property Tax Calculator by State",
    desc: "Free mortgage calculator with PITI breakdown, PMI calculations, HOA fees, and all 50 US states property tax rates. Calculate your monthly mortgage payment, see when PMI drops, and plan your home purchase with our professional-grade tool.",
    keywords: "mortgage calculator, mortgage calculator 2025, piti calculator, monthly mortgage payment, pmi calculator, property tax calculator, hoa calculator, mortgage payment calculator, home loan calculator, mortgage by state, mortgage calculator with taxes, mortgage calculator with pmi"
  },
  [ToolType.SALARY_CALC]: { 
    title: "Take Home Pay Calculator 2025 - Salary Tax Calculator by State with 401k", 
    desc: "Free salary calculator to calculate your take-home pay after taxes. Includes federal tax, state tax (all 50 states), FICA, 401(k) deductions, and pay frequency options. Get your exact net pay for weekly, bi-weekly, semi-monthly, or monthly paychecks.",
    keywords: "salary calculator, take home pay calculator, salary calculator 2025, net pay calculator, after tax salary, paycheck calculator, take home pay by state, 401k calculator, tax estimator, salary after taxes, biweekly paycheck calculator, weekly paycheck calculator"
  },
  [ToolType.INVESTMENT_CALC]: { 
    title: "Investment Calculator 2025 - SIP Calculator with Compound Interest & Goal-Based Investing", 
    desc: "Free investment calculator to calculate investment growth with compound interest. Includes SIP investing, dividend reinvestment (DRIP), goal-based investing, and wealth projection. See how your investments grow over time with monthly contributions.",
    keywords: "investment calculator, investment calculator 2025, sip calculator, compound interest calculator, investment growth calculator, wealth calculator, sip investing, compound interest, dividend reinvestment, drip calculator, goal based investing, investment projection, wealth growth calculator"
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
    title: "Credit Card Payoff Calculator 2025 - Avalanche vs Snowball Method with Balance Transfer", 
    desc: "Free credit card payoff calculator to eliminate debt faster. Compare Avalanche vs Snowball methods, calculate payoff timeline, total interest paid, and balance transfer savings. Find the best strategy to become debt-free.",
    keywords: "credit card payoff calculator, debt payoff calculator, avalanche method, snowball method, credit card debt calculator, balance transfer calculator, debt free calculator, credit card interest calculator, debt payoff strategy, avalanche vs snowball"
  },
  [ToolType.FIRE_PLANNER]: { 
    title: "FIRE Calculator 2025 - Early Retirement Planner with Coast FIRE, Barista FIRE & Geographic Arbitrage", 
    desc: "Free FIRE calculator to calculate your early retirement number using the 4% rule. Includes Lean FIRE, Fat FIRE, Coast FIRE, Barista FIRE, and geographic arbitrage calculator. Plan your path to financial independence and early retirement.",
    keywords: "fire calculator, fire planner, early retirement calculator, fire number calculator, coast fire calculator, barista fire calculator, geographic arbitrage, 4 percent rule, financial independence retire early, lean fire, fat fire, fire planning, early retirement planning"
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
    title: "Retirement Account Optimizer 2025 - 401k vs IRA vs Roth Calculator with Readiness Score",
    desc: "Free retirement calculator to compare 401(k), Traditional IRA, and Roth IRA strategies. Calculate retirement readiness score, RMD estimates, Social Security, and maximize employer match. Optimize your retirement savings for 2025 contribution limits.",
    keywords: "retirement optimizer, retirement calculator, 401k calculator, roth ira calculator, traditional ira calculator, retirement tax strategy, retirement readiness score, rmd calculator, social security calculator, 401k vs roth, retirement account comparison, 2025 contribution limits"
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
  [ToolType.BLOG_MORTGAGE_GUIDE]: {
    title: "Complete Guide to Mortgage Calculator 2025: PITI, PMI, Property Tax & More",
    desc: "Master mortgage calculations with our comprehensive 2025 guide. Learn PITI (Principal, Interest, Taxes, Insurance), PMI, property tax rates by state, and how to use a mortgage calculator to find your perfect home.",
    keywords: "mortgage calculator guide, piti calculator, mortgage payment calculator, property tax by state, pmi calculator, how to calculate mortgage, mortgage calculator 2025, home buying guide, mortgage guide"
  },
  [ToolType.BLOG_HOW_MUCH_HOUSE]: {
    title: "How Much House Can I Afford? Complete 2025 Guide with Calculator",
    desc: "Calculate how much house you can afford in 2025. Learn the 28/36 rule, debt-to-income ratios, down payment requirements, and use our mortgage calculator to find your perfect home price range.",
    keywords: "how much house can i afford, house affordability calculator, 28 36 rule, debt to income ratio, how much can i afford, home buying calculator, mortgage affordability, house price calculator"
  },
  [ToolType.BLOG_DEBT_OR_INVEST]: {
    title: "Should I Pay Off Debt or Invest? Complete 2025 Guide with Calculator",
    desc: "Decide whether to pay off debt or invest your money in 2025. Learn the debt vs investment math, interest rate comparisons, and strategies to maximize your wealth.",
    keywords: "pay off debt or invest, debt vs investment, should i pay off debt, debt payoff vs investing, pay off mortgage or invest, student loan vs invest, credit card debt or invest"
  },
  [ToolType.BLOG_TAKE_HOME_PAY]: {
    title: "How to Calculate Take-Home Pay After Taxes: Complete 2025 Guide",
    desc: "Learn how to calculate your take-home pay after taxes in 2025. Understand federal tax, state tax, FICA, 401k deductions, and use our salary calculator to get your exact net pay.",
    keywords: "take home pay calculator, net pay calculator, salary after taxes, how to calculate take home pay, salary calculator 2025, after tax salary, net income calculator, take home pay after taxes"
  },
  [ToolType.BLOG_ROTH_TRADITIONAL]: {
    title: "Roth IRA vs Traditional IRA 2025: Which is Better? Complete Comparison",
    desc: "Compare Roth IRA vs Traditional IRA in 2025. Learn contribution limits, tax benefits, withdrawal rules, and which retirement account is better for your situation.",
    keywords: "roth ira vs traditional ira, roth vs traditional ira, which ira is better, roth ira vs traditional, traditional ira vs roth, roth ira comparison, traditional ira comparison, retirement account comparison"
  },
  [ToolType.BLOG_EMERGENCY_FUND]: {
    title: "How Much Emergency Fund Do I Need? Complete 2025 Guide with Calculator",
    desc: "Calculate how much emergency fund you need in 2025. Learn the 3-6 month rule, how to build your emergency fund, where to keep it, and use our calculator to find your perfect safety net.",
    keywords: "how much emergency fund, emergency fund calculator, emergency fund guide, how much should i save, emergency savings, 3 6 month rule, emergency fund amount, financial safety net"
  },
  [ToolType.BLOG_FIRE_GUIDE]: {
    title: "FIRE Calculator: Calculate Your Early Retirement Number - Complete 2025 Guide",
    desc: "Calculate your FIRE (Financial Independence Retire Early) number with our comprehensive guide. Learn the 4% rule, Lean FIRE vs Fat FIRE, and how to achieve financial independence.",
    keywords: "fire calculator, fire number, financial independence retire early, 4 percent rule, early retirement calculator, fire planning, lean fire, fat fire, financial independence"
  },
  [ToolType.BLOG_BEST_RETIREMENT]: {
    title: "Best Retirement Calculator 2025: Compare Top Tools & Find Your Perfect Match",
    desc: "Compare the best retirement calculators in 2025. Review top tools including QuantCurb, Bankrate, NerdWallet, and find the perfect calculator for your retirement planning needs.",
    keywords: "best retirement calculator, retirement calculator comparison, 401k calculator, ira calculator, retirement planning tools, best retirement planning calculator 2025"
  },
  [ToolType.BLOG_INVESTMENT_GUIDE]: {
    title: "Complete Guide to Investment Calculator 2025: SIP, Compound Interest & Wealth Growth",
    desc: "Master investment calculations with our comprehensive 2025 guide. Learn SIP investing, compound interest, inflation-adjusted returns, and how to use an investment calculator to project your wealth growth.",
    keywords: "investment calculator, sip calculator, compound interest calculator, investment growth calculator, wealth calculator, sip investing, compound interest guide"
  },
  [ToolType.BLOG_BEST_MORTGAGE]: {
    title: "Best Mortgage Calculator 2025: Compare Top Tools & Features",
    desc: "Compare the best mortgage calculators in 2025. Review top tools including QuantCurb, Bankrate, Zillow, and find the perfect calculator with PITI, PMI, and property tax calculations.",
    keywords: "best mortgage calculator, mortgage calculator comparison, piti calculator, best mortgage calculator 2025, mortgage calculator review, home loan calculator comparison"
  },
  [ToolType.BLOG_STUDENT_LOANS]: {
    title: "Student Loan Repayment Strategies 2025: Complete Guide to Paying Off Student Debt",
    desc: "Master student loan repayment in 2025. Learn about income-driven repayment plans (SAVE, PAYE, IBR), loan forgiveness programs (PSLF), refinancing strategies, and how to pay off student debt faster.",
    keywords: "student loan repayment, student loan forgiveness, income driven repayment, SAVE plan, PSLF, student loan refinancing, pay off student loans, student debt, student loan calculator, student loan strategies"
  },
  [ToolType.BLOG_TAX_BRACKETS]: {
    title: "Tax Brackets Explained 2025: Complete Guide to Federal Income Tax Rates",
    desc: "Understand 2025 federal tax brackets and how progressive taxation works. Learn effective vs marginal tax rate, tax bracket calculations, and how to reduce your tax bill legally.",
    keywords: "tax brackets, federal tax brackets 2025, marginal tax rate, effective tax rate, tax brackets explained, income tax brackets, tax rates 2025, progressive tax, tax bracket calculator"
  },
  [ToolType.BLOG_401K_VS_IRA]: {
    title: "401(k) vs IRA 2025: Complete Comparison Guide - Which Retirement Account is Better?",
    desc: "Compare 401(k) vs IRA in 2025. Learn contribution limits, employer match, tax benefits, withdrawal rules, and which retirement account is better for your situation.",
    keywords: "401k vs ira, 401k vs roth ira, traditional 401k vs ira, which retirement account is better, 401k contribution limits 2025, ira contribution limits 2025, employer match, retirement planning"
  },
  [ToolType.BLOG_BUDGETING]: {
    title: "Complete Budgeting Guide 2025: 50/30/20 Rule, Zero-Based Budgeting & More",
    desc: "Master budgeting in 2025 with our complete guide. Learn the 50/30/20 rule, zero-based budgeting, envelope method, and proven strategies to take control of your finances.",
    keywords: "budgeting guide, 50 30 20 rule, zero based budgeting, envelope method, how to budget, monthly budget, budgeting tips, personal finance budgeting, budget planner"
  },
  [ToolType.BLOG_CAPITAL_GAINS]: {
    title: "Capital Gains Tax Guide 2025: Complete Guide to Long-Term vs Short-Term Capital Gains",
    desc: "Understand capital gains tax in 2025. Learn long-term vs short-term capital gains rates, tax brackets, how to reduce capital gains tax, and strategies for tax-loss harvesting.",
    keywords: "capital gains tax, long term capital gains, short term capital gains, capital gains tax rates 2025, how to reduce capital gains tax, tax loss harvesting, capital gains calculator"
  },
  [ToolType.BLOG_INDEX]: {
    title: "QuantCurb Financial Blog - Expert Guides & Calculators 2025",
    desc: "Comprehensive financial guides, calculators, and expert insights for mortgages, taxes, retirement planning, and wealth management. Learn how to make smarter financial decisions with institutional-grade tools.",
    keywords: "financial blog, finance guides, mortgage calculator guide, tax planning guide, retirement planning guide, financial education, personal finance blog, wealth management guides"
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
    const toolComponent = (() => {
      switch (activeTool) {
        case ToolType.DASHBOARD: return <Dashboard onSelectTool={setActiveTool} />;
        case ToolType.NET_WORTH: return <NetWorthTracker onNavigate={setActiveTool} />;
        case ToolType.EMERGENCY_FUND: return <EmergencyFundTool onNavigate={setActiveTool} />;
        case ToolType.EMI_CALC: return <EMICalculator onNavigate={setActiveTool} />;
        case ToolType.MORTGAGE_CALC: return <MortgageCalculator onNavigate={setActiveTool} />;
        case ToolType.SALARY_CALC: return <SalaryCalculator onNavigate={setActiveTool} />;
        case ToolType.INVESTMENT_CALC: return <InvestmentCalculator onNavigate={setActiveTool} />;
        case ToolType.MARKET_INSIGHTS: return <MarketInsights />;
        case ToolType.LOAN_COMPARE: return <LoanComparison onNavigate={setActiveTool} />;
        case ToolType.LIVING_COST: return <LivingCostTool />;
        case ToolType.CURRENCY_CONV: return <CurrencyConverter />;
        case ToolType.GST_CALC: return <GSTCalculator />;
        case ToolType.CREDIT_CARD_PAYOFF: return <CreditCardPayoff onNavigate={setActiveTool} />;
        case ToolType.FIRE_PLANNER: return <FIREPlanner onNavigate={setActiveTool} />;
        case ToolType.FREELANCE_PROFIT: return <FreelanceHub onNavigate={setActiveTool} />;
        case ToolType.INVESTMENT_ACADEMY: return <InvestmentAcademy />;
        case ToolType.EXCEL_MODELER: return <ExcelModeler />;
        case ToolType.RETIREMENT_OPTIMIZER: return <RetirementOptimizer onNavigate={setActiveTool} />;
        case ToolType.DRIP_CALCULATOR: return <DividendReinvestmentCalculator />;
        case ToolType.CRYPTO_TAX_LOSS: return <CryptoTaxLossHarvester />;
        case ToolType.CHILD_TAX_CREDIT: return <ChildTaxCreditCalculator onNavigate={setActiveTool} />;
        case ToolType.QUARTERLY_TAX: return <QuarterlyTaxCalculator onNavigate={setActiveTool} />;
        case ToolType.ACA_SUBSIDY: return <ACASubsidyCalculator onNavigate={setActiveTool} />;
        case ToolType.BLOG_CTC_2025: return <ChildTaxCreditGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_ACA_FREELANCERS: return <ACAHealthInsuranceFreelancers2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_QUARTERLY_TAX: return <QuarterlyEstimatedTaxesGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_SE_TAX: return <SelfEmploymentTaxGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_TAX_DEDUCTIONS: return <TaxDeductionsFreelancers2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_1099_W2: return <Comparison1099VsW2_2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_LLC_SOLE_PROP: return <LLCvsSoleProp2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_SEP_SOLO401K: return <SEPIRAvsSolo401k2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_HOME_OFFICE: return <HomeOfficeDeduction2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_MORTGAGE_GUIDE: return <MortgageCalculatorGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_HOW_MUCH_HOUSE: return <HowMuchHouseCanIAfford2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_DEBT_OR_INVEST: return <ShouldIPayOffDebtOrInvest2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_TAKE_HOME_PAY: return <HowToCalculateTakeHomePay2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_ROTH_TRADITIONAL: return <RothIRAvsTraditionalIRA2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_EMERGENCY_FUND: return <HowMuchEmergencyFundDoINeed2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_FIRE_GUIDE: return <FIRECalculatorGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_BEST_RETIREMENT: return <BestRetirementCalculator2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_INVESTMENT_GUIDE: return <InvestmentCalculatorGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_BEST_MORTGAGE: return <BestMortgageCalculator2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_STUDENT_LOANS: return <StudentLoanRepaymentStrategies2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_TAX_BRACKETS: return <TaxBracketsExplained2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_401K_VS_IRA: return <FourZeroOneKVsIRAComparison2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_BUDGETING: return <BudgetingGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_INDEX: return <BlogIndex onNavigate={setActiveTool} />;
        case ToolType.FAQ: return <FAQ onSelectTool={setActiveTool} />;
        case ToolType.METHODOLOGY: return <Methodology />;
        case ToolType.PRIVACY: return <PrivacyPolicy />;
        case ToolType.SITEMAP: return <Sitemap onSelectTool={setActiveTool} />;
        case ToolType.ABOUT: return <AboutUs />;
        case ToolType.CONTACT: return <ContactUs />;
        case ToolType.DISCLAIMER: return <Disclaimer />;
        default: return <Dashboard onSelectTool={setActiveTool} />;
      }
    })();

    return <Suspense fallback={<LoadingFallback />}>{toolComponent}</Suspense>;
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

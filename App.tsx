
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
const DTICalculator = lazy(() => import('./components/DTICalculator'));

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
const CaliforniaVsTexasTakeHome2025 = lazy(() => import('./components/blog/CaliforniaVsTexasTakeHome2025'));
const BonusTaxMyth2025 = lazy(() => import('./components/blog/BonusTaxMyth2025'));
const RaiseWorthMoving2025 = lazy(() => import('./components/blog/RaiseWorthMoving2025'));
const MaxOut401kTakeHome2025 = lazy(() => import('./components/blog/MaxOut401kTakeHome2025'));
const GrossVsNetPay2025 = lazy(() => import('./components/blog/GrossVsNetPay2025'));
const FreelancerEstimatedTaxesGuide2025 = lazy(() => import('./components/blog/FreelancerEstimatedTaxesGuide2025'));
const MovingToFloridaSunshineTax2025 = lazy(() => import('./components/blog/MovingToFloridaSunshineTax2025'));
const PitiExplained2026 = lazy(() => import('./components/blog/PitiExplained2026'));
const MortgagePointsBreakEven2026 = lazy(() => import('./components/blog/MortgagePointsBreakEven2026'));
const PmiMathGuide2026 = lazy(() => import('./components/blog/PmiMathGuide2026'));
const RentVsBuyRule2026 = lazy(() => import('./components/blog/RentVsBuyRule2026'));
const HouseCostRateSensitivity2026 = lazy(() => import('./components/blog/HouseCostRateSensitivity2026'));
const BiWeeklyMortgagePayments2026 = lazy(() => import('./components/blog/BiWeeklyMortgagePayments2026'));
const FINumberMath2026 = lazy(() => import('./components/blog/FINumberMath2026'));
const LeanVsFatFire2026 = lazy(() => import('./components/blog/LeanVsFatFire2026'));
const FourPercentRuleDebate2026 = lazy(() => import('./components/blog/FourPercentRuleDebate2026'));
const CoastFireGuide2026 = lazy(() => import('./components/blog/CoastFireGuide2026'));
const CostOfWaiting2026 = lazy(() => import('./components/blog/CostOfWaiting2026'));
const RothVsTraditional401k2026 = lazy(() => import('./components/blog/RothVsTraditional401k2026'));
const DebtSnowballVsAvalanche2026 = lazy(() => import('./components/blog/DebtSnowballVsAvalanche2026'));
const CarLoan72MonthCost2026 = lazy(() => import('./components/blog/CarLoan72MonthCost2026'));
const StudentLoanRefinanceMath2026 = lazy(() => import('./components/blog/StudentLoanRefinanceMath2026'));
const CreditCardMinimumPayments2026 = lazy(() => import('./components/blog/CreditCardMinimumPayments2026'));
const AssetsVsLiabilitiesNetWorth2026 = lazy(() => import('./components/blog/AssetsVsLiabilitiesNetWorth2026'));
const FinancialOrderOfOperations2026 = lazy(() => import('./components/blog/FinancialOrderOfOperations2026'));
const InflationMillionWorth2026 = lazy(() => import('./components/blog/InflationMillionWorth2026'));
const EmergencyFundRule2026 = lazy(() => import('./components/blog/EmergencyFundRule2026'));
const LatteFactorBigWins2026 = lazy(() => import('./components/blog/LatteFactorBigWins2026'));
const DcfModelingRetailInvestors2026 = lazy(() => import('./components/blog/DcfModelingRetailInvestors2026'));
const LumpSumVsDca2026 = lazy(() => import('./components/blog/LumpSumVsDca2026'));
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
const NetWorthTrackerGuide2025 = lazy(() => import('./components/blog/NetWorthTrackerGuide2025'));
const LoanEmiCalculatorGuide2025 = lazy(() => import('./components/blog/LoanEmiCalculatorGuide2025'));
const LoanComparisonGuide2025 = lazy(() => import('./components/blog/LoanComparisonGuide2025'));
const CostOfLivingCalculatorGuide2025 = lazy(() => import('./components/blog/CostOfLivingCalculatorGuide2025'));
const CurrencyConverterGuide2025 = lazy(() => import('./components/blog/CurrencyConverterGuide2025'));
const GstCalculatorGuide2025 = lazy(() => import('./components/blog/GstCalculatorGuide2025'));
const CreditCardPayoffGuide2025 = lazy(() => import('./components/blog/CreditCardPayoffGuide2025'));
const MarketInsightsGuide2025 = lazy(() => import('./components/blog/MarketInsightsGuide2025'));
const InvestmentAcademyGuide2025 = lazy(() => import('./components/blog/InvestmentAcademyGuide2025'));
const ExcelModelerGuide2025 = lazy(() => import('./components/blog/ExcelModelerGuide2025'));
const DividendReinvestmentGuide2025 = lazy(() => import('./components/blog/DividendReinvestmentGuide2025'));
const DtiCalculatorGuide2025 = lazy(() => import('./components/blog/DtiCalculatorGuide2025'));
const CryptoTaxLossHarvestingNoWashSale2025 = lazy(() => import('./components/blog/CryptoTaxLossHarvestingNoWashSale2025'));
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
    title: "How to Calculate EMI? Loan EMI Calculator 2025 with Extra Payment Savings",
    desc: "Calculate your loan EMI (Equated Monthly Installment) with our reducing balance calculator. Model principal prepayments and see how much interest you can save by paying extra each month.",
    keywords: "how to calculate emi, emi calculator, loan repayment calculator, interest savings calculator, prepayment calculator, what is emi"
  },
  [ToolType.MORTGAGE_CALC]: {
    title: "How to Calculate Mortgage Payment? PITI Calculator 2025 with PMI & Property Tax",
    desc: "Calculate your monthly mortgage payment with PITI breakdown (Principal, Interest, Taxes, Insurance), PMI calculations, and property tax rates for all 50 US states. See when PMI drops and plan your home purchase.",
    keywords: "how to calculate mortgage payment, mortgage calculator, piti calculator, what is piti, pmi calculator, property tax calculator, monthly mortgage payment, home loan calculator"
  },
  [ToolType.SALARY_CALC]: {
    title: "How Much Will I Take Home? Salary Calculator 2025 - Calculate Net Pay by State",
    desc: "Calculate your take-home pay after taxes with our salary calculator. Includes federal tax, state tax (all 50 states), FICA, 401(k) deductions, and pay frequency options for accurate net pay calculation.",
    keywords: "salary calculator, take home pay calculator, salary calculator 2025, net pay calculator, after tax salary, paycheck calculator, take home pay by state, 401k calculator, tax estimator, salary after taxes, biweekly paycheck calculator, weekly paycheck calculator"
  },
  [ToolType.INVESTMENT_CALC]: {
    title: "How to Calculate Investment Growth? SIP Calculator 2025 with Compound Interest",
    desc: "Calculate your investment growth with compound interest using our SIP calculator. Includes dividend reinvestment (DRIP), goal-based investing, and wealth projection to see how your investments grow over time.",
    keywords: "how to calculate investment growth, investment calculator, sip calculator, compound interest calculator, what is compound interest, wealth calculator, drip calculator, goal based investing"
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
    title: "How Long to Pay Off Credit Card Debt? Avalanche vs Snowball Calculator 2025",
    desc: "Calculate how long it will take to pay off your credit card debt. Compare Avalanche vs Snowball methods, see total interest paid, and find the fastest strategy to become debt-free.",
    keywords: "how long to pay off credit card debt, credit card payoff calculator, avalanche vs snowball, debt payoff calculator, avalanche method, snowball method, balance transfer calculator"
  },
  [ToolType.FIRE_PLANNER]: {
    title: "What is My FIRE Number? Early Retirement Calculator 2025 with 4% Rule",
    desc: "Calculate your FIRE number for early retirement using the 4% rule. Includes Lean FIRE, Fat FIRE, Coast FIRE, Barista FIRE, and geographic arbitrage to plan your financial independence.",
    keywords: "what is my fire number, fire calculator, early retirement calculator, 4 percent rule, coast fire calculator, barista fire calculator, financial independence, lean fire, fat fire"
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
    title: "401k vs Roth IRA: Which is Better? Retirement Calculator 2025 with Readiness Score",
    desc: "Compare 401(k) vs Traditional IRA vs Roth IRA to find the best retirement strategy. Calculate your retirement readiness score, RMD estimates, and maximize employer match with 2025 contribution limits.",
    keywords: "401k vs roth ira which is better, retirement calculator, 401k vs ira, retirement readiness score, rmd calculator, 401k vs roth, roth vs traditional ira, retirement account comparison"
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
    title: "How Much is the Child Tax Credit? CTC Calculator 2025 - Up to $2,000 Per Child",
    desc: "Calculate your 2025 Child Tax Credit (CTC) and Additional Child Tax Credit (ACTC). Get up to $2,000 per child with our phase-out calculator and refundable credit estimator for single parents and families.",
    keywords: "how much is child tax credit, child tax credit calculator 2025, ctc calculator, child tax credit phase out, additional child tax credit, actc calculator, tax credit for children"
  },
  [ToolType.QUARTERLY_TAX]: {
    title: "How to Calculate Quarterly Taxes? Estimated Tax Calculator 2025 - Form 1040-ES",
    desc: "Calculate your quarterly estimated tax payments for freelancers, self-employed, and 1099 contractors. Avoid IRS penalties with safe harbor rules and plan Q1-Q4 payments with self-employment tax calculations.",
    keywords: "how to calculate quarterly taxes, quarterly tax calculator, 1040-es calculator, estimated tax payments, quarterly taxes, safe harbor rule, self employment tax calculator"
  },
  [ToolType.ACA_SUBSIDY]: {
    title: "ACA Health Insurance Subsidy Calculator 2025 - Obamacare Premium Tax Credit",
    desc: "Calculate ACA marketplace subsidies and Premium Tax Credits for 2025. Determine Medicaid eligibility, cost-sharing reductions, and monthly healthcare costs for freelancers, self-employed, and families. Check coverage gap status and Federal Poverty Level percentage.",
    keywords: "aca subsidy calculator, obamacare subsidy calculator, premium tax credit calculator, healthcare subsidy calculator, aca marketplace calculator, health insurance subsidy, medicaid eligibility calculator, federal poverty level calculator, cost sharing reduction, healthcare.gov calculator"
  },
  [ToolType.DTI_CALCULATOR]: {
    title: "What is Debt-to-Income Ratio? DTI Calculator 2025 - 28/36 Rule for Mortgages",
    desc: "Calculate your debt-to-income (DTI) ratio to see if you qualify for a mortgage. Learn the 28/36 rule, front-end vs back-end DTI, and how lenders use DTI for FHA, VA, conventional, and USDA loans.",
    keywords: "what is debt to income ratio, dti calculator, how to calculate dti, 28 36 rule, debt to income calculator, dti ratio calculator, mortgage qualification calculator, front end dti, back end dti"
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
  [ToolType.BLOG_CA_TX_TAKE_HOME]: {
    title: "$100k in California vs Texas: Take-Home Pay & Cost of Living Comparison",
    desc: "Compare a $100k salary in California vs Texas. See take-home pay differences, state tax impact, and which state stretches your paycheck further in 2025.",
    keywords: "100k salary california vs texas, california vs texas take home pay, cost of living california vs texas, state tax comparison, salary comparison by state"
  },
  [ToolType.BLOG_BONUS_TAX]: {
    title: "Bonus Tax Myth: 22% Withholding vs Real Bonus Tax Liability",
    desc: "Learn why bonuses are withheld at 22% and how to calculate your real bonus tax liability. Stop overestimating the bonus tax rate and get accurate take-home pay.",
    keywords: "bonus tax myth, bonus tax withholding 22 percent, bonus tax calculator, supplemental wage tax, how are bonuses taxed, bonus take home pay"
  },
  [ToolType.BLOG_RAISE_MOVE]: {
    title: "Is a $10,000 Raise Worth Moving For? Relocation Cost Calculator",
    desc: "Break down a $10k raise after taxes and relocation costs. Compare cost of living, moving expenses, and net pay to decide if relocating makes sense.",
    keywords: "is a 10k raise worth moving, relocation cost calculator, raise vs cost of living, moving for a job, relocation salary comparison"
  },
  [ToolType.BLOG_MAX_401K]: {
    title: "Max Out 401(k) Take-Home Pay: How Pre-Tax Contributions Reduce Taxes",
    desc: "See how maxing out a 401(k) lowers taxable income and makes the take-home impact smaller than expected. Includes marginal tax bracket examples.",
    keywords: "max out 401k take home pay, 401k tax savings, pre tax 401k contribution, 401k marginal tax bracket, 401k contribution impact"
  },
  [ToolType.BLOG_GROSS_NET]: {
    title: "Gross vs Net Pay Explained: Paycheck Deductions for New Grads",
    desc: "A beginner guide to gross vs net pay, FICA, Medicare, and state taxes. Learn why your paycheck is smaller than expected and how to estimate net pay.",
    keywords: "gross vs net pay, paycheck deductions explained, fica tax, medicare tax, why is my paycheck smaller, net pay calculator"
  },
  [ToolType.BLOG_FREELANCE_ESTIMATED]: {
    title: "Freelancer Estimated Taxes Guide 2025: How Much to Set Aside",
    desc: "A 1099-friendly estimated tax guide. Learn safe harbor rules, how much to save for quarterly taxes, and how to calculate payments in 2025.",
    keywords: "freelancer estimated taxes, quarterly taxes for freelancers, 1099 estimated tax guide, how much to set aside for taxes, safe harbor rules 2025"
  },
  [ToolType.BLOG_FLORIDA_MOVE]: {
    title: "Moving to Florida: Sunshine Tax Savings for NY/NJ Residents",
    desc: "See how moving to Florida changes your take-home pay. Compare New York and New Jersey state taxes to Florida in 2025 and estimate real savings.",
    keywords: "moving to florida tax savings, sunshine tax savings, florida vs new york taxes, florida vs new jersey taxes, florida take home pay"
  },
  [ToolType.BLOG_PITI_EXPLAINED]: {
    title: "PITI Explained: Why Your Mortgage Payment Is Higher Than the Sticker Price",
    desc: "Break down principal, interest, taxes, and insurance to understand your true monthly mortgage payment and why PITI is higher than the list price suggests.",
    keywords: "piti explained, mortgage payment breakdown, principal interest taxes insurance, monthly mortgage payment, what is piti"
  },
  [ToolType.BLOG_POINTS_BREAK_EVEN]: {
    title: "Should You Pay Mortgage Points in 2026? Break-Even Analysis",
    desc: "Learn when mortgage points make sense, how to calculate break-even, and when buying down the rate is worth it in 2026.",
    keywords: "mortgage points break even, should i pay points, buy down rate math, mortgage points calculator, mortgage points 2026"
  },
  [ToolType.BLOG_PMI_MATH]: {
    title: "The Mathematics of PMI: How to Get Rid of It Faster",
    desc: "Understand PMI, the 80% LTV rule, and how extra payments or appraisal updates can remove private mortgage insurance sooner.",
    keywords: "pmi math, private mortgage insurance removal, ltv ratio 80 percent, get rid of pmi faster, pmi drop off date"
  },
  [ToolType.BLOG_RENT_BUY_2026]: {
    title: "Rent vs Buy in 2026: The 5% Rule Explained",
    desc: "Use the 5% rule to compare renting vs buying in 2026. Learn the math and when homeownership is worth it.",
    keywords: "rent vs buy 2026, 5 percent rule rent vs buy, should i rent or buy, rent vs buy calculator"
  },
  [ToolType.BLOG_500K_COST]: {
    title: "What Does a $500,000 House Cost per Month? (6%, 7%, 8% Rates)",
    desc: "See how interest rates change the monthly cost of a $500k home and why rate sensitivity matters for affordability.",
    keywords: "500k house monthly cost, mortgage payment at 6 percent, mortgage payment at 7 percent, mortgage payment at 8 percent, rate sensitivity"
  },
  [ToolType.BLOG_BIWEEKLY]: {
    title: "Bi-Weekly Mortgage Payments: Save Interest Faster",
    desc: "Learn how bi-weekly payments create one extra payment per year and reduce mortgage interest with a simple payment shift.",
    keywords: "biweekly mortgage payments, extra payment mortgage strategy, save interest on mortgage, 26 payments equals 13"
  },
  [ToolType.BLOG_FI_NUMBER]: {
    title: "What is Your FI Number? The Math Behind Financial Independence",
    desc: "Learn the 25x annual expenses rule and calculate your financial independence number with clear examples.",
    keywords: "fi number, financial independence number, 25x rule, freedom number calculator, fi math"
  },
  [ToolType.BLOG_LEAN_FAT_FIRE]: {
    title: "LeanFIRE vs FatFIRE: Which Lifestyle Can You Afford?",
    desc: "Compare LeanFIRE and FatFIRE spending levels and see how lifestyle choices change your retirement target.",
    keywords: "leanfire vs fatfire, fatfire lifestyle, leanfire budget, retirement lifestyle comparison"
  },
  [ToolType.BLOG_FOUR_PERCENT]: {
    title: "The 4% Rule Is Dead? Why Safe Withdrawal Rates Are Changing",
    desc: "Explore inflation, longevity risk, and alternative withdrawal rates to stress test your retirement plan.",
    keywords: "4 percent rule, safe withdrawal rate, retirement withdrawal strategy, inflation risk retirement"
  },
  [ToolType.BLOG_COAST_FIRE]: {
    title: "Coast FIRE: How to Retire at 30 Without Stopping Work Completely",
    desc: "Understand Coast FIRE and how front-loading investments lets you coast to financial independence.",
    keywords: "coast fire, coast fire age, front load investing, retire early without quitting"
  },
  [ToolType.BLOG_COST_WAITING]: {
    title: "The Cost of Waiting: Starting at 25 vs 35 Costs You $1 Million",
    desc: "See how delaying investing erodes compounding and why starting earlier builds a bigger portfolio.",
    keywords: "cost of waiting investing, start investing early, compound interest delay, starting at 25 vs 35"
  },
  [ToolType.BLOG_ROTH_TRAD_401K]: {
    title: "Roth vs Traditional 401(k): The Tax Bracket Bet",
    desc: "Compare Roth vs Traditional 401(k) choices and learn when paying taxes now vs later makes sense.",
    keywords: "roth vs traditional 401k, tax bracket bet, 401k tax strategy, roth 401k vs traditional"
  },
  [ToolType.BLOG_SNOWBALL_AVALANCHE]: {
    title: "Snowball vs Avalanche: Which Debt Payoff Method Saves More Money?",
    desc: "Compare the avalanche and snowball debt payoff methods to see which saves more interest and fits your style.",
    keywords: "snowball vs avalanche, debt payoff method, avalanche vs snowball interest savings, debt payoff strategy"
  },
  [ToolType.BLOG_CAR_LOAN_72]: {
    title: "The True Cost of a 72-Month Car Loan",
    desc: "See how long-term auto loans inflate total interest and keep you underwater longer than expected.",
    keywords: "72 month car loan, long term auto loan cost, car loan interest calculator, auto loan term comparison"
  },
  [ToolType.BLOG_STUDENT_LOAN_REFI]: {
    title: "Should You Refinance Your Student Loans? The Math You Need to Know",
    desc: "Learn when refinancing student loans makes sense and how to weigh rate savings against federal protections.",
    keywords: "student loan refinance math, refinance student loans, lower rate vs federal protections, student loan payment calculator"
  },
  [ToolType.BLOG_CC_MIN_PAY]: {
    title: "Credit Card Minimum Payments: Why You Will Be in Debt for 20 Years",
    desc: "Understand how minimum payments stretch credit card debt and how small extra payments shrink payoff time.",
    keywords: "credit card minimum payments, 2 percent minimum payment, credit card payoff timeline, pay off credit card faster"
  },
  [ToolType.BLOG_ASSETS_LIABILITIES]: {
    title: "Assets vs Liabilities: How to Calculate Your True Net Worth",
    desc: "Learn the difference between assets and liabilities and calculate your true net worth in minutes.",
    keywords: "assets vs liabilities, net worth formula, calculate net worth, assets minus liabilities"
  },
  [ToolType.BLOG_ORDER_OPS]: {
    title: "Where Should Your Next Dollar Go? Financial Order of Operations",
    desc: "Follow a simple financial order of operations: emergency fund, employer match, high-interest debt, and investing.",
    keywords: "financial order of operations, where to put your money, emergency fund first, employer match priority"
  },
  [ToolType.BLOG_INFLATION_MILLION]: {
    title: "Inflation Calculator: What $1 Million Will Be Worth When You Retire",
    desc: "See how inflation erodes purchasing power and what $1 million could feel like in retirement dollars.",
    keywords: "inflation calculator, million dollars worth in retirement, purchasing power erosion, inflation impact"
  },
  [ToolType.BLOG_EMERGENCY_RULE]: {
    title: "How Much Cash Should You Keep? The 6-Month Emergency Fund Rule",
    desc: "Learn the 6-month emergency fund rule and calculate the cash buffer that keeps you safe during layoffs.",
    keywords: "6 month emergency fund rule, how much cash to keep, emergency fund calculator, survival number"
  },
  [ToolType.BLOG_LATTE_FACTOR]: {
    title: "The Latte Factor vs Big Wins: What Actually Builds Wealth?",
    desc: "Focus on housing, transportation, and taxes before obsessing over small daily expenses.",
    keywords: "latte factor, big wins wealth, housing cost impact, car payment budget, tax savings strategy"
  },
  [ToolType.BLOG_DCF_RETAIL]: {
    title: "DCF Modeling for Retail Investors: How to Value a Stock Like a Pro",
    desc: "Learn discounted cash flow basics and build a professional valuation with clear assumptions.",
    keywords: "dcf modeling, value a stock, discounted cash flow explained, stock valuation for beginners"
  },
  [ToolType.BLOG_LUMP_SUM_DCA]: {
    title: "Lump Sum vs Dollar Cost Averaging: What the Data Says",
    desc: "Compare lump sum investing vs dollar cost averaging and learn which strategy fits your risk tolerance.",
    keywords: "lump sum vs dca, dollar cost averaging data, investment timing strategy, lump sum investing"
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
  [ToolType.BLOG_NET_WORTH]: {
    title: "Net Worth Tracker Guide 2025: How to Track Assets, Debts, and Real Wealth",
    desc: "Learn how to calculate net worth, track assets and liabilities, and build a monthly net worth tracking habit.",
    keywords: "net worth tracker, how to calculate net worth, net worth calculator, assets and liabilities list, track net worth monthly"
  },
  [ToolType.BLOG_EMI_GUIDE]: {
    title: "Loan EMI Calculator Guide 2025: How to Calculate EMI and Save Interest",
    desc: "Understand EMI calculations, amortization, and practical ways to reduce loan interest with an EMI calculator.",
    keywords: "loan emi calculator, how to calculate emi, emi formula, monthly loan payment calculator, reduce loan interest"
  },
  [ToolType.BLOG_LOAN_COMPARE]: {
    title: "Loan Comparison Guide 2025: Compare APR, Fees, and Refinance Break-Even",
    desc: "Compare loan offers with APR, fees, and break-even analysis so you can choose the lowest total cost option.",
    keywords: "loan comparison tool, compare loan offers, refinance break even calculator, apr vs interest rate"
  },
  [ToolType.BLOG_LIVING_COST]: {
    title: "Cost of Living Calculator Guide 2025: Compare Cities and Build a Realistic Budget",
    desc: "Use a cost of living calculator to compare cities, understand key expense categories, and plan your budget.",
    keywords: "cost of living calculator, compare cost of living by city, cost of living index, moving budget calculator"
  },
  [ToolType.BLOG_CURRENCY_CONVERTER]: {
    title: "Currency Converter Guide 2025: Live Rates, Fees, and Smart FX Tips",
    desc: "Learn how live exchange rates work, how to avoid FX fees, and how to use a currency converter smartly.",
    keywords: "currency converter, live exchange rates, forex rate calculator, currency exchange fees, usd to eur converter"
  },
  [ToolType.BLOG_GST_GUIDE]: {
    title: "GST Calculator Guide 2025: Inclusive vs Exclusive Pricing Made Simple",
    desc: "Calculate GST accurately, split inclusive pricing, and avoid invoicing errors with a GST calculator.",
    keywords: "gst calculator, gst inclusive vs exclusive, gst tax formula, vat calculator, gst invoice breakdown"
  },
  [ToolType.BLOG_CREDIT_CARD_PAYOFF]: {
    title: "Credit Card Payoff Guide 2025: Avalanche vs Snowball Strategy",
    desc: "Pay off credit card debt faster with avalanche or snowball strategies and a payoff calculator.",
    keywords: "credit card payoff calculator, avalanche vs snowball, pay off credit card debt fast, debt payoff plan"
  },
  [ToolType.BLOG_MARKET_INSIGHTS]: {
    title: "AI Market Insights Guide 2025: How to Read Signals Without the Noise",
    desc: "Use AI market insights to interpret macro signals, sentiment shifts, and trend confirmation.",
    keywords: "ai market insights, market sentiment analysis, macro trend signals, market intelligence tools"
  },
  [ToolType.BLOG_INVESTMENT_ACADEMY]: {
    title: "Index Funds & ETFs Guide 2025: Build a Simple, Diversified Portfolio",
    desc: "Learn index funds vs ETFs, diversification basics, and a simple portfolio blueprint for long-term investing.",
    keywords: "index funds guide, etf investing basics, diversified portfolio strategy, beginner investing guide"
  },
  [ToolType.BLOG_EXCEL_MODELER]: {
    title: "DCF Valuation Guide 2025: Build a Simple Model Without Excel",
    desc: "Learn DCF valuation basics, WACC, and terminal value in a clear, practical format.",
    keywords: "dcf valuation guide, wacc calculator, terminal value formula, discounted cash flow model"
  },
  [ToolType.BLOG_DRIP_GUIDE]: {
    title: "Dividend Reinvestment (DRIP) Guide 2025: Compounding Explained",
    desc: "Understand how dividend reinvestment works and how DRIP compounding builds long-term wealth.",
    keywords: "dividend reinvestment calculator, drip investing, dividend compounding, passive income calculator"
  },
  [ToolType.BLOG_DTI_GUIDE]: {
    title: "DTI Calculator Guide 2025: What Debt-to-Income Ratio Lenders Want",
    desc: "Learn how DTI is calculated, what lenders prefer, and how to improve your ratios before applying.",
    keywords: "dti calculator, debt to income ratio, 28 36 rule, mortgage qualification dti"
  },
  [ToolType.BLOG_CRYPTO_WASH_SALE]: {
    title: "Why Crypto Tax Loss Harvesting is 10X Better Than Stocks: The No Wash Sale Rule Loophole",
    desc: "Discover why crypto tax loss harvesting beats stocks. Learn the no wash sale rule advantage, how to immediately rebuy crypto after selling, and step-by-step loss harvesting.",
    keywords: "no wash sale rule crypto, crypto tax loss harvesting vs stocks, can you immediately rebuy crypto after selling, why crypto tax loss harvesting is better"
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

      // Update Canonical URL
      const currentUrl = activeTool === ToolType.DASHBOARD ? 'https://quantcurb.com/' : `https://quantcurb.com/${activeTool}`;
      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute('href', currentUrl);

      // Update Open Graph Tags
      let ogTitleTag = document.querySelector('meta[property="og:title"]');
      if (!ogTitleTag) {
        ogTitleTag = document.createElement('meta');
        ogTitleTag.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitleTag);
      }
      ogTitleTag.setAttribute('content', meta.title);

      let ogDescTag = document.querySelector('meta[property="og:description"]');
      if (!ogDescTag) {
        ogDescTag = document.createElement('meta');
        ogDescTag.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescTag);
      }
      ogDescTag.setAttribute('content', meta.desc);

      let ogUrlTag = document.querySelector('meta[property="og:url"]');
      if (!ogUrlTag) {
        ogUrlTag = document.createElement('meta');
        ogUrlTag.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrlTag);
      }
      ogUrlTag.setAttribute('content', currentUrl);

      // Update Twitter Card Tags
      let twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
      if (!twitterTitleTag) {
        twitterTitleTag = document.createElement('meta');
        twitterTitleTag.setAttribute('name', 'twitter:title');
        document.head.appendChild(twitterTitleTag);
      }
      twitterTitleTag.setAttribute('content', meta.title);

      let twitterDescTag = document.querySelector('meta[name="twitter:description"]');
      if (!twitterDescTag) {
        twitterDescTag = document.createElement('meta');
        twitterDescTag.setAttribute('name', 'twitter:description');
        document.head.appendChild(twitterDescTag);
      }
      twitterDescTag.setAttribute('content', meta.desc);

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
        case ToolType.DTI_CALCULATOR: return <DTICalculator onNavigate={setActiveTool} />;
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
        case ToolType.BLOG_CA_TX_TAKE_HOME: return <CaliforniaVsTexasTakeHome2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_BONUS_TAX: return <BonusTaxMyth2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_RAISE_MOVE: return <RaiseWorthMoving2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_MAX_401K: return <MaxOut401kTakeHome2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_GROSS_NET: return <GrossVsNetPay2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_FREELANCE_ESTIMATED: return <FreelancerEstimatedTaxesGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_FLORIDA_MOVE: return <MovingToFloridaSunshineTax2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_PITI_EXPLAINED: return <PitiExplained2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_POINTS_BREAK_EVEN: return <MortgagePointsBreakEven2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_PMI_MATH: return <PmiMathGuide2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_RENT_BUY_2026: return <RentVsBuyRule2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_500K_COST: return <HouseCostRateSensitivity2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_BIWEEKLY: return <BiWeeklyMortgagePayments2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_FI_NUMBER: return <FINumberMath2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_LEAN_FAT_FIRE: return <LeanVsFatFire2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_FOUR_PERCENT: return <FourPercentRuleDebate2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_COAST_FIRE: return <CoastFireGuide2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_COST_WAITING: return <CostOfWaiting2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_ROTH_TRAD_401K: return <RothVsTraditional401k2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_SNOWBALL_AVALANCHE: return <DebtSnowballVsAvalanche2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_CAR_LOAN_72: return <CarLoan72MonthCost2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_STUDENT_LOAN_REFI: return <StudentLoanRefinanceMath2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_CC_MIN_PAY: return <CreditCardMinimumPayments2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_ASSETS_LIABILITIES: return <AssetsVsLiabilitiesNetWorth2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_ORDER_OPS: return <FinancialOrderOfOperations2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_INFLATION_MILLION: return <InflationMillionWorth2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_EMERGENCY_RULE: return <EmergencyFundRule2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_LATTE_FACTOR: return <LatteFactorBigWins2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_DCF_RETAIL: return <DcfModelingRetailInvestors2026 onNavigate={setActiveTool} />;
        case ToolType.BLOG_LUMP_SUM_DCA: return <LumpSumVsDca2026 onNavigate={setActiveTool} />;
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
        case ToolType.BLOG_NET_WORTH: return <NetWorthTrackerGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_EMI_GUIDE: return <LoanEmiCalculatorGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_LOAN_COMPARE: return <LoanComparisonGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_LIVING_COST: return <CostOfLivingCalculatorGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_CURRENCY_CONVERTER: return <CurrencyConverterGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_GST_GUIDE: return <GstCalculatorGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_CREDIT_CARD_PAYOFF: return <CreditCardPayoffGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_MARKET_INSIGHTS: return <MarketInsightsGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_INVESTMENT_ACADEMY: return <InvestmentAcademyGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_EXCEL_MODELER: return <ExcelModelerGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_DRIP_GUIDE: return <DividendReinvestmentGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_DTI_GUIDE: return <DtiCalculatorGuide2025 onNavigate={setActiveTool} />;
        case ToolType.BLOG_CRYPTO_WASH_SALE: return <CryptoTaxLossHarvestingNoWashSale2025 onNavigate={setActiveTool} />;
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

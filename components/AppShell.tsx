'use client';

import React, { Suspense, lazy, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Dashboard from './Dashboard';
import { ToolType } from '../types';

// Lazy load all calculator components for code splitting
const EMICalculator = lazy(() => import('./EMICalculator'));
const SalaryCalculator = lazy(() => import('./SalaryCalculator'));
const InvestmentCalculator = lazy(() => import('./InvestmentCalculator'));
const MarketInsights = lazy(() => import('./MarketInsights'));
const LoanComparison = lazy(() => import('./LoanComparison'));
const LivingCostTool = lazy(() => import('./LivingCostTool'));
const MortgageCalculator = lazy(() => import('./MortgageCalculator'));
const CurrencyConverter = lazy(() => import('./CurrencyConverter'));
const GSTCalculator = lazy(() => import('./GSTCalculator'));
const CreditCardPayoff = lazy(() => import('./CreditCardPayoff'));
const FIREPlanner = lazy(() => import('./FIREPlanner'));
const FreelanceHub = lazy(() => import('./FreelanceHub'));
const InvestmentAcademy = lazy(() => import('./InvestmentAcademy'));
const ExcelModeler = lazy(() => import('./ExcelModeler'));
const NetWorthTracker = lazy(() => import('./NetWorthTracker'));
const EmergencyFundTool = lazy(() => import('./EmergencyFundTool'));
const RetirementOptimizer = lazy(() => import('./RetirementOptimizer'));
const DividendReinvestmentCalculator = lazy(() => import('./DividendReinvestmentCalculator'));
const CryptoTaxLossHarvester = lazy(() => import('./CryptoTaxLossHarvester'));
const ChildTaxCreditCalculator = lazy(() => import('./ChildTaxCreditCalculator'));
const QuarterlyTaxCalculator = lazy(() => import('./QuarterlyTaxCalculator'));
const ACASubsidyCalculator = lazy(() => import('./ACASubsidyCalculator'));
const DTICalculator = lazy(() => import('./DTICalculator'));
const OptionsStrategyVisualizer = lazy(() => import('./OptionsStrategyVisualizer'));

// Lazy load blog posts
const ChildTaxCreditGuide2025 = lazy(() => import('./blog/ChildTaxCreditGuide2025'));
const ACAHealthInsuranceFreelancers2025 = lazy(() => import('./blog/ACAHealthInsuranceFreelancers2025'));
const QuarterlyEstimatedTaxesGuide2025 = lazy(() => import('./blog/QuarterlyEstimatedTaxesGuide2025'));
const SelfEmploymentTaxGuide2025 = lazy(() => import('./blog/SelfEmploymentTaxGuide2025'));
const TaxDeductionsFreelancers2025 = lazy(() => import('./blog/TaxDeductionsFreelancers2025'));
const Comparison1099VsW2_2025 = lazy(() => import('./blog/Comparison1099VsW2_2025'));
const LLCvsSoleProp2025 = lazy(() => import('./blog/LLCvsSoleProp2025'));
const SEPIRAvsSolo401k2025 = lazy(() => import('./blog/SEPIRAvsSolo401k2025'));
const HomeOfficeDeduction2025 = lazy(() => import('./blog/HomeOfficeDeduction2025'));
const MortgageCalculatorGuide2025 = lazy(() => import('./blog/MortgageCalculatorGuide2025'));
const HowMuchHouseCanIAfford2025 = lazy(() => import('./blog/HowMuchHouseCanIAfford2025'));
const ShouldIPayOffDebtOrInvest2025 = lazy(() => import('./blog/ShouldIPayOffDebtOrInvest2025'));
const HowToCalculateTakeHomePay2025 = lazy(() => import('./blog/HowToCalculateTakeHomePay2025'));
const CaliforniaVsTexasTakeHome2025 = lazy(() => import('./blog/CaliforniaVsTexasTakeHome2025'));
const BonusTaxMyth2025 = lazy(() => import('./blog/BonusTaxMyth2025'));
const RaiseWorthMoving2025 = lazy(() => import('./blog/RaiseWorthMoving2025'));
const MaxOut401kTakeHome2025 = lazy(() => import('./blog/MaxOut401kTakeHome2025'));
const GrossVsNetPay2025 = lazy(() => import('./blog/GrossVsNetPay2025'));
const FreelancerEstimatedTaxesGuide2025 = lazy(() => import('./blog/FreelancerEstimatedTaxesGuide2025'));
const MovingToFloridaSunshineTax2025 = lazy(() => import('./blog/MovingToFloridaSunshineTax2025'));
const PitiExplained2026 = lazy(() => import('./blog/PitiExplained2026'));
const MortgagePointsBreakEven2026 = lazy(() => import('./blog/MortgagePointsBreakEven2026'));
const PmiMathGuide2026 = lazy(() => import('./blog/PmiMathGuide2026'));
const RentVsBuyRule2026 = lazy(() => import('./blog/RentVsBuyRule2026'));
const HouseCostRateSensitivity2026 = lazy(() => import('./blog/HouseCostRateSensitivity2026'));
const BiWeeklyMortgagePayments2026 = lazy(() => import('./blog/BiWeeklyMortgagePayments2026'));
const FINumberMath2026 = lazy(() => import('./blog/FINumberMath2026'));
const LeanVsFatFire2026 = lazy(() => import('./blog/LeanVsFatFire2026'));
const FourPercentRuleDebate2026 = lazy(() => import('./blog/FourPercentRuleDebate2026'));
const CoastFireGuide2026 = lazy(() => import('./blog/CoastFireGuide2026'));
const CostOfWaiting2026 = lazy(() => import('./blog/CostOfWaiting2026'));
const RothVsTraditional401k2026 = lazy(() => import('./blog/RothVsTraditional401k2026'));
const DebtSnowballVsAvalanche2026 = lazy(() => import('./blog/DebtSnowballVsAvalanche2026'));
const CarLoan72MonthCost2026 = lazy(() => import('./blog/CarLoan72MonthCost2026'));
const StudentLoanRefinanceMath2026 = lazy(() => import('./blog/StudentLoanRefinanceMath2026'));
const CreditCardMinimumPayments2026 = lazy(() => import('./blog/CreditCardMinimumPayments2026'));
const AssetsVsLiabilitiesNetWorth2026 = lazy(() => import('./blog/AssetsVsLiabilitiesNetWorth2026'));
const FinancialOrderOfOperations2026 = lazy(() => import('./blog/FinancialOrderOfOperations2026'));
const InflationMillionWorth2026 = lazy(() => import('./blog/InflationMillionWorth2026'));
const EmergencyFundRule2026 = lazy(() => import('./blog/EmergencyFundRule2026'));
const LatteFactorBigWins2026 = lazy(() => import('./blog/LatteFactorBigWins2026'));
const DcfModelingRetailInvestors2026 = lazy(() => import('./blog/DcfModelingRetailInvestors2026'));
const LumpSumVsDca2026 = lazy(() => import('./blog/LumpSumVsDca2026'));
const RothIRAvsTraditionalIRA2025 = lazy(() => import('./blog/RothIRAvsTraditionalIRA2025'));
const HowMuchEmergencyFundDoINeed2025 = lazy(() => import('./blog/HowMuchEmergencyFundDoINeed2025'));
const FIRECalculatorGuide2025 = lazy(() => import('./blog/FIRECalculatorGuide2025'));
const BestRetirementCalculator2025 = lazy(() => import('./blog/BestRetirementCalculator2025'));
const InvestmentCalculatorGuide2025 = lazy(() => import('./blog/InvestmentCalculatorGuide2025'));
const BestMortgageCalculator2025 = lazy(() => import('./blog/BestMortgageCalculator2025'));
const StudentLoanRepaymentStrategies2025 = lazy(() => import('./blog/StudentLoanRepaymentStrategies2025'));
const TaxBracketsExplained2025 = lazy(() => import('./blog/TaxBracketsExplained2025'));
const FourZeroOneKVsIRAComparison2025 = lazy(() => import('./blog/401kVsIRAComparison2025'));
const BudgetingGuide2025 = lazy(() => import('./blog/BudgetingGuide2025'));
const NetWorthTrackerGuide2025 = lazy(() => import('./blog/NetWorthTrackerGuide2025'));
const LoanEmiCalculatorGuide2025 = lazy(() => import('./blog/LoanEmiCalculatorGuide2025'));
const LoanComparisonGuide2025 = lazy(() => import('./blog/LoanComparisonGuide2025'));
const CostOfLivingCalculatorGuide2025 = lazy(() => import('./blog/CostOfLivingCalculatorGuide2025'));
const CurrencyConverterGuide2025 = lazy(() => import('./blog/CurrencyConverterGuide2025'));
const GstCalculatorGuide2025 = lazy(() => import('./blog/GstCalculatorGuide2025'));
const CreditCardPayoffGuide2025 = lazy(() => import('./blog/CreditCardPayoffGuide2025'));
const MarketInsightsGuide2025 = lazy(() => import('./blog/MarketInsightsGuide2025'));
const InvestmentAcademyGuide2025 = lazy(() => import('./blog/InvestmentAcademyGuide2025'));
const ExcelModelerGuide2025 = lazy(() => import('./blog/ExcelModelerGuide2025'));
const DividendReinvestmentGuide2025 = lazy(() => import('./blog/DividendReinvestmentGuide2025'));
const DtiCalculatorGuide2025 = lazy(() => import('./blog/DtiCalculatorGuide2025'));
const CryptoTaxLossHarvestingNoWashSale2025 = lazy(() => import('./blog/CryptoTaxLossHarvestingNoWashSale2025'));
const BlogIndex = lazy(() => import('./BlogIndex'));

// Lazy load static pages
const FAQ = lazy(() => import('./FAQ'));
const Methodology = lazy(() => import('./Methodology'));
const PrivacyPolicy = lazy(() => import('./PrivacyPolicy'));
const Sitemap = lazy(() => import('./Sitemap'));
const AboutUs = lazy(() => import('./AboutUs'));
const ContactUs = lazy(() => import('./ContactUs'));
const Disclaimer = lazy(() => import('./Disclaimer'));

type AppShellProps = {
  initialTool: ToolType;
};

// Loading component
const LoadingFallback: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
      <p className="text-slate-600 font-medium">Loading calculator...</p>
    </div>
  </div>
);

const AppShell: React.FC<AppShellProps> = ({ initialTool }) => {
  const router = useRouter();
  const [activeTool, setActiveTool] = useState<ToolType>(initialTool);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActiveTool(initialTool);
  }, [initialTool]);

  useEffect(() => {
    const toolString = activeTool.toString();
    
    // Special handling for blog index - navigate to /blog route
    if (activeTool === ToolType.BLOG_INDEX) {
      router.push('/blog');
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    
    // Handle blog posts - navigate to /blog/[slug]
    if (toolString.startsWith('blog/')) {
      const blogSlug = toolString.replace('blog/', '');
      router.push(`/blog/${blogSlug}`);
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    
    const nextPath = activeTool === ToolType.DASHBOARD ? '/' : `/${activeTool}`;
    router.push(nextPath);

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTool, router]);

  const renderTool = () => {
    const toolComponent = (() => {
      switch (activeTool) {
        case ToolType.DASHBOARD: return <Dashboard onSelectTool={setActiveTool} />;
        case ToolType.NET_WORTH: return <NetWorthTracker onNavigate={setActiveTool} />;
        case ToolType.EMERGENCY_FUND: return <EmergencyFundTool onNavigate={setActiveTool} />;
        case ToolType.EMI_CALC: return <EMICalculator onNavigate={setActiveTool} />;
        case ToolType.MORTGAGE_CALC: return <MortgageCalculator onNavigate={setActiveTool} />;
        case ToolType.SALARY_CALC: return <SalaryCalculator onNavigate={setActiveTool} initialState={undefined} />;
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
        case ToolType.OPTIONS_STRATEGY_VISUALIZER: return <OptionsStrategyVisualizer />;
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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activeTool]);

  const mainTools = [
    { id: ToolType.DASHBOARD, label: 'Dashboard', icon: '📊' },
    { id: ToolType.NET_WORTH, label: 'Net Worth Center', icon: '💎' },
    { id: ToolType.EMERGENCY_FUND, label: 'Emergency Guard', icon: '🛡️' },
    { id: ToolType.EXCEL_MODELER, label: 'Excel Power Modeler', icon: '📁' },
    { id: ToolType.EMI_CALC, label: 'Loan EMI Pro', icon: '💳' },
    { id: ToolType.MORTGAGE_CALC, label: 'Mortgage Pro', icon: '🏡' },
    { id: ToolType.FIRE_PLANNER, label: 'FIRE Planner', icon: '🔥' },
    { id: ToolType.RETIREMENT_OPTIMIZER, label: 'Retirement Optimizer', icon: '🎯' },
    { id: ToolType.DRIP_CALCULATOR, label: 'DRIP Calculator', icon: '💹' },
    { id: ToolType.CRYPTO_TAX_LOSS, label: 'Crypto Tax Loss', icon: '🧮' },
    { id: ToolType.SALARY_CALC, label: 'Salary Estimator', icon: '💰' },
    { id: ToolType.CHILD_TAX_CREDIT, label: 'Child Tax Credit', icon: '👨‍👩‍👧‍👦' },
    { id: ToolType.QUARTERLY_TAX, label: 'Quarterly Tax', icon: '📅' },
    { id: ToolType.ACA_SUBSIDY, label: 'ACA Health Subsidy', icon: '🏥' },
    { id: ToolType.FREELANCE_PROFIT, label: 'Freelance Hub', icon: '💼' },
    { id: ToolType.INVESTMENT_CALC, label: 'Wealth Projector', icon: '📈' },
    { id: ToolType.LOAN_COMPARE, label: 'Loan Intel', icon: '⚖️' },
    { id: ToolType.DTI_CALCULATOR, label: 'DTI Calculator', icon: '📊' },
  ];

  const dailyTools = [
    { id: ToolType.CURRENCY_CONV, label: 'Currency Intel', icon: '🌍' },
    { id: ToolType.GST_CALC, label: 'GST Calculator', icon: '🧾' },
    { id: ToolType.CREDIT_CARD_PAYOFF, label: 'Card Payoff', icon: '✂️' },
  ];

  const insightTools = [
    { id: ToolType.MARKET_INSIGHTS, label: 'Market Pulse', icon: '🤖' },
    { id: ToolType.INVESTMENT_ACADEMY, label: 'Fund Academy', icon: '🎓' },
    { id: ToolType.BLOG_INDEX, label: 'Blog', icon: '📝' },
    { id: ToolType.FAQ, label: 'Knowledge Base', icon: '❓' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 flex-col md:flex-row">
      <Sidebar activeTool={activeTool} setActiveTool={setActiveTool} />

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white z-10">
          <button
            onClick={() => {
              setActiveTool(ToolType.DASHBOARD);
              setMobileMenuOpen(false);
            }}
            className="text-2xl font-black text-slate-900 flex items-center gap-3"
          >
            <span className="p-2 bg-indigo-600 text-white rounded-xl shadow-lg">📈</span>
            <span>Quant<span className="text-indigo-600">Curb</span></span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 space-y-6">
          <section>
            <h3 className="px-4 py-2 text-xs font-black text-slate-400 uppercase tracking-wider">Core Utilities</h3>
            <nav className="space-y-1">
              {mainTools.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTool(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all text-left ${
                    activeTool === item.id
                      ? 'bg-indigo-600 text-white font-bold shadow-lg'
                      : 'text-slate-600 hover:bg-slate-50 font-medium active:bg-slate-100'
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </nav>
          </section>

          <section>
            <h3 className="px-4 py-2 text-xs font-black text-slate-400 uppercase tracking-wider">Daily Logic</h3>
            <nav className="space-y-1">
              {dailyTools.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTool(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all text-left ${
                    activeTool === item.id
                      ? 'bg-emerald-600 text-white font-bold shadow-lg'
                      : 'text-slate-600 hover:bg-slate-50 font-medium active:bg-slate-100'
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </nav>
          </section>

          <section>
            <h3 className="px-4 py-2 text-xs font-black text-slate-400 uppercase tracking-wider">Intelligence</h3>
            <nav className="space-y-1">
              {insightTools.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTool(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all text-left ${
                    activeTool === item.id
                      ? 'bg-slate-900 text-white font-bold'
                      : 'text-slate-600 hover:bg-slate-50 font-medium active:bg-slate-100'
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </nav>
          </section>
        </div>

        <div className="p-6 border-t mt-6">
          <div className="bg-slate-50 p-4 rounded-xl">
            <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">NETWORK STATUS</p>
            <p className="text-sm font-bold text-slate-700">Live: QuantCurb Oracle v3.1</p>
          </div>
        </div>
      </div>

      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        {/* Enhanced Mobile Header */}
        <header className="flex justify-between items-center px-4 py-4 md:hidden bg-white border-b sticky top-0 z-40 shadow-sm">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-3 hover:bg-slate-100 rounded-xl transition-colors active:bg-slate-200"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <button
            onClick={() => setActiveTool(ToolType.DASHBOARD)}
            className="text-xl font-black text-slate-900 flex items-center gap-2"
          >
            <span className="text-2xl">📈</span>
            <span>Quant<span className="text-indigo-600">Curb</span></span>
          </button>

          <button
            onClick={() => setActiveTool(ToolType.BLOG_INDEX)}
            className="p-3 bg-indigo-50 text-indigo-600 rounded-xl font-bold hover:bg-indigo-100 transition-colors active:bg-indigo-200"
            aria-label="Blog"
          >
            📝
          </button>
        </header>

        <div className="flex-1">
          <div className="max-w-7xl mx-auto px-0 md:px-2 lg:px-3 py-0 md:py-2 lg:py-3">
            {renderTool()}
          </div>
        </div>

        <Footer setActiveTool={setActiveTool} />

        {/* Enhanced Bottom Navigation */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-2 py-2 z-40 shadow-2xl">
          <div className="flex justify-around items-center max-w-md mx-auto">
            <button
              onClick={() => setActiveTool(ToolType.DASHBOARD)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all min-w-[60px] ${activeTool === ToolType.DASHBOARD ? 'text-indigo-600 bg-indigo-50' : 'text-slate-500'}`}
              aria-label="Dashboard"
            >
              <span className="text-2xl">📊</span>
              <span className="text-[10px] font-bold">Home</span>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.MORTGAGE_CALC)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all min-w-[60px] ${activeTool === ToolType.MORTGAGE_CALC ? 'text-indigo-600 bg-indigo-50' : 'text-slate-500'}`}
              aria-label="Mortgage"
            >
              <span className="text-2xl">🏡</span>
              <span className="text-[10px] font-bold">Mortgage</span>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.SALARY_CALC)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all min-w-[60px] ${activeTool === ToolType.SALARY_CALC ? 'text-indigo-600 bg-indigo-50' : 'text-slate-500'}`}
              aria-label="Salary"
            >
              <span className="text-2xl">💰</span>
              <span className="text-[10px] font-bold">Salary</span>
            </button>
            <button
              onClick={() => setActiveTool(ToolType.FIRE_PLANNER)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all min-w-[60px] ${activeTool === ToolType.FIRE_PLANNER ? 'text-indigo-600 bg-indigo-50' : 'text-slate-500'}`}
              aria-label="FIRE"
            >
              <span className="text-2xl">🔥</span>
              <span className="text-[10px] font-bold">FIRE</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all min-w-[60px] text-slate-500 hover:text-indigo-600 hover:bg-indigo-50"
              aria-label="More"
            >
              <span className="text-2xl">☰</span>
              <span className="text-[10px] font-bold">More</span>
            </button>
          </div>
        </nav>
      </main>
    </div>
  );
};

export default AppShell;

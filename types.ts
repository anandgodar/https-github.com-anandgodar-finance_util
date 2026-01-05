
export enum ToolType {
  DASHBOARD = 'dashboard',
  NET_WORTH = 'net-worth-command-center',
  EMERGENCY_FUND = 'emergency-fund-guard',
  EMI_CALC = 'loan-emi-calculator',
  SALARY_CALC = 'salary-tax-estimator',
  INVESTMENT_CALC = 'wealth-investment-projector',
  MARKET_INSIGHTS = 'market-intelligence-pulse',
  LOAN_COMPARE = 'loan-comparison-tool',
  LIVING_COST = 'cost-of-living-calculator',
  MORTGAGE_CALC = 'mortgage-payment-calculator',
  CURRENCY_CONV = 'currency-exchange-intel',
  GST_CALC = 'gst-tax-calculator',
  CREDIT_CARD_PAYOFF = 'credit-card-debt-strategist',
  FIRE_PLANNER = 'early-retirement-fire-planner',
  FREELANCE_PROFIT = 'freelance-profit-hub',
  INVESTMENT_ACADEMY = 'investment-funds-academy',
  EXCEL_MODELER = 'excel-power-modeler',
  RETIREMENT_OPTIMIZER = 'retirement-account-optimizer',
  CHILD_TAX_CREDIT = 'child-tax-credit-calculator',
  QUARTERLY_TAX = 'quarterly-estimated-tax-calculator',
  ACA_SUBSIDY = 'aca-health-insurance-subsidy-calculator',
  BLOG_CTC_2025 = 'blog/child-tax-credit-2025-guide',
  BLOG_ACA_FREELANCERS = 'blog/aca-health-insurance-freelancers-2025',
  BLOG_QUARTERLY_TAX = 'blog/quarterly-estimated-taxes-complete-guide',
  FAQ = 'financial-knowledge-base',
  METHODOLOGY = 'methodology-assumptions',
  PRIVACY = 'privacy-policy',
  SITEMAP = 'sitemap',
  ABOUT = 'about-quantcurb',
  CONTACT = 'contact-us',
  DISCLAIMER = 'legal-disclaimer'
}

export interface MarketInsight {
  title: string;
  summary: string;
  impact: 'Positive' | 'Neutral' | 'Negative';
  date: string;
}

export interface CalculationResult {
  monthlyPayment: number;
  totalInterest: number;
  totalAmount: number;
}

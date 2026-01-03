
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

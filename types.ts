
export enum ToolType {
  DASHBOARD = 'dashboard',
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
  FAQ = 'financial-knowledge-base',
  PRIVACY = 'privacy-policy',
  SITEMAP = 'sitemap'
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

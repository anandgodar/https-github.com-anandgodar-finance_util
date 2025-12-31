
export enum ToolType {
  DASHBOARD = 'dashboard',
  EMI_CALC = 'emi-calculator',
  SALARY_CALC = 'salary-estimator',
  INVESTMENT_CALC = 'wealth-projector',
  MARKET_INSIGHTS = 'market-pulse',
  LOAN_COMPARE = 'loan-intelligence',
  LIVING_COST = 'living-cost-vitals',
  MORTGAGE_CALC = 'mortgage-pro',
  CURRENCY_CONV = 'currency-intel',
  GST_CALC = 'gst-calculator',
  CREDIT_CARD_PAYOFF = 'credit-card-payoff',
  FIRE_PLANNER = 'fire-planner',
  FREELANCE_PROFIT = 'freelance-hub',
  FAQ = 'faq',
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

import { ToolType } from '../types';

/**
 * Maps blog post slugs to their relevant calculator tools
 * Used for sticky footer buttons and cross-linking
 */
export const blogToCalculatorMap: Record<string, ToolType> = {
  'mortgage-calculator-guide-2025': ToolType.MORTGAGE_CALC,
  'how-much-house-can-i-afford-2025': ToolType.MORTGAGE_CALC,
  'should-i-pay-off-debt-or-invest-2025': ToolType.LOAN_COMPARE,
  'how-to-calculate-take-home-pay-2025': ToolType.SALARY_CALC,
  '100k-california-vs-texas-take-home-pay': ToolType.SALARY_CALC,
  'bonus-tax-myth-withholding-vs-liability': ToolType.SALARY_CALC,
  'raise-vs-relocation-cost-of-living': ToolType.SALARY_CALC,
  'max-out-401k-take-home-pay': ToolType.SALARY_CALC,
  'gross-vs-net-pay-paycheck-breakdown': ToolType.SALARY_CALC,
  'freelancer-estimated-taxes-guide-2025': ToolType.QUARTERLY_TAX,
  'moving-to-florida-sunshine-tax-savings': ToolType.SALARY_CALC,
  'piti-explained-mortgage-payment-breakdown': ToolType.MORTGAGE_CALC,
  'mortgage-points-break-even-2026': ToolType.MORTGAGE_CALC,
  'pmi-math-how-to-remove-faster': ToolType.MORTGAGE_CALC,
  'rent-vs-buy-5-percent-rule-2026': ToolType.MORTGAGE_CALC,
  '500k-house-monthly-cost-rate-sensitivity': ToolType.MORTGAGE_CALC,
  'biweekly-mortgage-payments-interest-savings': ToolType.MORTGAGE_CALC,
  'fi-number-math-financial-independence': ToolType.FIRE_PLANNER,
  'leanfire-vs-fatfire-lifestyle-budget': ToolType.FIRE_PLANNER,
  '4-percent-rule-dead-safe-withdrawal-rates': ToolType.RETIREMENT_OPTIMIZER,
  'coast-fire-how-to-retire-early': ToolType.FIRE_PLANNER,
  'cost-of-waiting-compound-interest': ToolType.INVESTMENT_CALC,
  'roth-vs-traditional-401k-tax-bracket-bet': ToolType.RETIREMENT_OPTIMIZER,
  'snowball-vs-avalanche-debt-payoff': ToolType.CREDIT_CARD_PAYOFF,
  '72-month-car-loan-true-cost': ToolType.EMI_CALC,
  'student-loan-refinance-math': ToolType.EMI_CALC,
  'credit-card-minimum-payments-20-years': ToolType.CREDIT_CARD_PAYOFF,
  'assets-vs-liabilities-true-net-worth': ToolType.NET_WORTH,
  'financial-order-of-operations': ToolType.DASHBOARD,
  'inflation-calculator-million-worth-retirement': ToolType.INVESTMENT_CALC,
  '6-month-emergency-fund-rule': ToolType.EMERGENCY_FUND,
  'latte-factor-vs-big-wins-wealth': ToolType.DASHBOARD,
  'dcf-modeling-retail-investors': ToolType.EXCEL_MODELER,
  'lump-sum-vs-dollar-cost-averaging': ToolType.INVESTMENT_CALC,
  'roth-ira-vs-traditional-ira-2025': ToolType.RETIREMENT_OPTIMIZER,
  'how-much-emergency-fund-do-i-need-2025': ToolType.EMERGENCY_FUND,
  'fire-calculator-guide-2025': ToolType.FIRE_PLANNER,
  'best-retirement-calculator-2025': ToolType.RETIREMENT_OPTIMIZER,
  'investment-calculator-guide-2025': ToolType.INVESTMENT_CALC,
  'best-mortgage-calculator-2025': ToolType.MORTGAGE_CALC,
  'student-loan-repayment-strategies-2025': ToolType.EMI_CALC,
  'tax-brackets-explained-2025': ToolType.SALARY_CALC,
  '401k-vs-ira-comparison-2025': ToolType.RETIREMENT_OPTIMIZER,
  'budgeting-guide-2025': ToolType.DASHBOARD,
  'net-worth-tracker-guide-2025': ToolType.NET_WORTH,
  'loan-emi-calculator-guide-2025': ToolType.EMI_CALC,
  'loan-comparison-refinance-guide-2025': ToolType.LOAN_COMPARE,
  'cost-of-living-calculator-guide-2025': ToolType.LIVING_COST,
  'currency-converter-guide-2025': ToolType.CURRENCY_CONV,
  'gst-tax-calculator-guide-2025': ToolType.GST_CALC,
  'credit-card-payoff-strategy-guide-2025': ToolType.CREDIT_CARD_PAYOFF,
  'ai-market-insights-guide-2025': ToolType.MARKET_INSIGHTS,
  'index-funds-etf-guide-2025': ToolType.INVESTMENT_ACADEMY,
  'dcf-valuation-modeling-guide-2025': ToolType.EXCEL_MODELER,
  'dividend-reinvestment-calculator-guide-2025': ToolType.DRIP_CALCULATOR,
  'dti-calculator-guide-2025': ToolType.DTI_CALCULATOR,
  'no-wash-sale-rule-crypto-tax-loss-harvesting': ToolType.CRYPTO_TAX_LOSS,
  'child-tax-credit-2025-guide': ToolType.CHILD_TAX_CREDIT,
  'quarterly-estimated-taxes-complete-guide': ToolType.QUARTERLY_TAX,
  'self-employment-tax-guide-2025': ToolType.QUARTERLY_TAX,
  'tax-deductions-freelancers-2025': ToolType.QUARTERLY_TAX,
  '1099-vs-w2-comparison-2025': ToolType.SALARY_CALC,
  'llc-vs-sole-proprietor-2025': ToolType.FREELANCE_PROFIT,
  'sep-ira-vs-solo-401k-2025': ToolType.RETIREMENT_OPTIMIZER,
  'home-office-deduction-2025': ToolType.QUARTERLY_TAX,
  'aca-health-insurance-freelancers-2025': ToolType.ACA_SUBSIDY,
  // Default fallback for unmapped blogs
  'article-one': ToolType.DASHBOARD,
  'article-two': ToolType.DASHBOARD,
};

/**
 * Get the relevant calculator tool for a blog post slug
 */
export function getCalculatorForBlog(slug: string): ToolType | null {
  return blogToCalculatorMap[slug] || null;
}

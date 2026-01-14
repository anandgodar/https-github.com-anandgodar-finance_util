import { TOOL_METADATA } from './tool-metadata';
import { ToolType } from '../types';

export type BlogMetadata = {
  title: string;
  description: string;
  slug: string;
};

// Server-safe metadata for generateStaticParams and generateMetadata
export const blogMetadata: Record<string, BlogMetadata> = {
  'article-one': {
    title: 'Article One: Building a Simple Budget Plan',
    description: 'Learn the budgeting fundamentals with a simple, repeatable framework.',
    slug: 'article-one'
  },
  'article-two': {
    title: 'Article Two: Smarter Savings With Automated Goals',
    description: 'Set up automatic savings routines that help you hit your goals faster.',
    slug: 'article-two'
  },
  'mortgage-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_MORTGAGE_GUIDE].title,
    description: TOOL_METADATA[ToolType.BLOG_MORTGAGE_GUIDE].desc,
    slug: 'mortgage-calculator-guide-2025'
  },
  'child-tax-credit-2025-guide': {
    title: TOOL_METADATA[ToolType.BLOG_CTC_2025].title,
    description: TOOL_METADATA[ToolType.BLOG_CTC_2025].desc,
    slug: 'child-tax-credit-2025-guide'
  },
  'aca-health-insurance-freelancers-2025': {
    title: TOOL_METADATA[ToolType.BLOG_ACA_FREELANCERS].title,
    description: TOOL_METADATA[ToolType.BLOG_ACA_FREELANCERS].desc,
    slug: 'aca-health-insurance-freelancers-2025'
  },
  'quarterly-estimated-taxes-complete-guide': {
    title: TOOL_METADATA[ToolType.BLOG_QUARTERLY_TAX].title,
    description: TOOL_METADATA[ToolType.BLOG_QUARTERLY_TAX].desc,
    slug: 'quarterly-estimated-taxes-complete-guide'
  },
  'self-employment-tax-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_SE_TAX].title,
    description: TOOL_METADATA[ToolType.BLOG_SE_TAX].desc,
    slug: 'self-employment-tax-guide-2025'
  },
  'tax-deductions-freelancers-2025': {
    title: TOOL_METADATA[ToolType.BLOG_TAX_DEDUCTIONS].title,
    description: TOOL_METADATA[ToolType.BLOG_TAX_DEDUCTIONS].desc,
    slug: 'tax-deductions-freelancers-2025'
  },
  '1099-vs-w2-comparison-2025': {
    title: TOOL_METADATA[ToolType.BLOG_1099_W2].title,
    description: TOOL_METADATA[ToolType.BLOG_1099_W2].desc,
    slug: '1099-vs-w2-comparison-2025'
  },
  'llc-vs-sole-proprietor-2025': {
    title: TOOL_METADATA[ToolType.BLOG_LLC_SOLE_PROP].title,
    description: TOOL_METADATA[ToolType.BLOG_LLC_SOLE_PROP].desc,
    slug: 'llc-vs-sole-proprietor-2025'
  },
  'sep-ira-vs-solo-401k-2025': {
    title: TOOL_METADATA[ToolType.BLOG_SEP_SOLO401K].title,
    description: TOOL_METADATA[ToolType.BLOG_SEP_SOLO401K].desc,
    slug: 'sep-ira-vs-solo-401k-2025'
  },
  'home-office-deduction-2025': {
    title: TOOL_METADATA[ToolType.BLOG_HOME_OFFICE].title,
    description: TOOL_METADATA[ToolType.BLOG_HOME_OFFICE].desc,
    slug: 'home-office-deduction-2025'
  },
  'how-much-house-can-i-afford-2025': {
    title: TOOL_METADATA[ToolType.BLOG_HOW_MUCH_HOUSE].title,
    description: TOOL_METADATA[ToolType.BLOG_HOW_MUCH_HOUSE].desc,
    slug: 'how-much-house-can-i-afford-2025'
  },
  'should-i-pay-off-debt-or-invest-2025': {
    title: TOOL_METADATA[ToolType.BLOG_DEBT_OR_INVEST].title,
    description: TOOL_METADATA[ToolType.BLOG_DEBT_OR_INVEST].desc,
    slug: 'should-i-pay-off-debt-or-invest-2025'
  },
  'how-to-calculate-take-home-pay-2025': {
    title: TOOL_METADATA[ToolType.BLOG_TAKE_HOME_PAY].title,
    description: TOOL_METADATA[ToolType.BLOG_TAKE_HOME_PAY].desc,
    slug: 'how-to-calculate-take-home-pay-2025'
  },
  '100k-california-vs-texas-take-home-pay': {
    title: TOOL_METADATA[ToolType.BLOG_CA_TX_TAKE_HOME].title,
    description: TOOL_METADATA[ToolType.BLOG_CA_TX_TAKE_HOME].desc,
    slug: '100k-california-vs-texas-take-home-pay'
  },
  'bonus-tax-myth-withholding-vs-liability': {
    title: TOOL_METADATA[ToolType.BLOG_BONUS_TAX].title,
    description: TOOL_METADATA[ToolType.BLOG_BONUS_TAX].desc,
    slug: 'bonus-tax-myth-withholding-vs-liability'
  },
  'raise-vs-relocation-cost-of-living': {
    title: TOOL_METADATA[ToolType.BLOG_RAISE_MOVE].title,
    description: TOOL_METADATA[ToolType.BLOG_RAISE_MOVE].desc,
    slug: 'raise-vs-relocation-cost-of-living'
  },
  'max-out-401k-take-home-pay': {
    title: TOOL_METADATA[ToolType.BLOG_MAX_401K].title,
    description: TOOL_METADATA[ToolType.BLOG_MAX_401K].desc,
    slug: 'max-out-401k-take-home-pay'
  },
  'gross-vs-net-pay-paycheck-breakdown': {
    title: TOOL_METADATA[ToolType.BLOG_GROSS_NET].title,
    description: TOOL_METADATA[ToolType.BLOG_GROSS_NET].desc,
    slug: 'gross-vs-net-pay-paycheck-breakdown'
  },
  'freelancer-estimated-taxes-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_FREELANCE_ESTIMATED].title,
    description: TOOL_METADATA[ToolType.BLOG_FREELANCE_ESTIMATED].desc,
    slug: 'freelancer-estimated-taxes-guide-2025'
  },
  'moving-to-florida-sunshine-tax-savings': {
    title: TOOL_METADATA[ToolType.BLOG_FLORIDA_MOVE].title,
    description: TOOL_METADATA[ToolType.BLOG_FLORIDA_MOVE].desc,
    slug: 'moving-to-florida-sunshine-tax-savings'
  },
  'piti-explained-mortgage-payment-breakdown': {
    title: TOOL_METADATA[ToolType.BLOG_PITI_EXPLAINED].title,
    description: TOOL_METADATA[ToolType.BLOG_PITI_EXPLAINED].desc,
    slug: 'piti-explained-mortgage-payment-breakdown'
  },
  'mortgage-points-break-even-2026': {
    title: TOOL_METADATA[ToolType.BLOG_POINTS_BREAK_EVEN].title,
    description: TOOL_METADATA[ToolType.BLOG_POINTS_BREAK_EVEN].desc,
    slug: 'mortgage-points-break-even-2026'
  },
  'pmi-math-how-to-remove-faster': {
    title: TOOL_METADATA[ToolType.BLOG_PMI_MATH].title,
    description: TOOL_METADATA[ToolType.BLOG_PMI_MATH].desc,
    slug: 'pmi-math-how-to-remove-faster'
  },
  'rent-vs-buy-5-percent-rule-2026': {
    title: TOOL_METADATA[ToolType.BLOG_RENT_BUY_2026].title,
    description: TOOL_METADATA[ToolType.BLOG_RENT_BUY_2026].desc,
    slug: 'rent-vs-buy-5-percent-rule-2026'
  },
  '500k-house-monthly-cost-rate-sensitivity': {
    title: TOOL_METADATA[ToolType.BLOG_500K_COST].title,
    description: TOOL_METADATA[ToolType.BLOG_500K_COST].desc,
    slug: '500k-house-monthly-cost-rate-sensitivity'
  },
  'biweekly-mortgage-payments-interest-savings': {
    title: TOOL_METADATA[ToolType.BLOG_BIWEEKLY].title,
    description: TOOL_METADATA[ToolType.BLOG_BIWEEKLY].desc,
    slug: 'biweekly-mortgage-payments-interest-savings'
  },
  'fi-number-math-financial-independence': {
    title: TOOL_METADATA[ToolType.BLOG_FI_NUMBER].title,
    description: TOOL_METADATA[ToolType.BLOG_FI_NUMBER].desc,
    slug: 'fi-number-math-financial-independence'
  },
  'leanfire-vs-fatfire-lifestyle-budget': {
    title: TOOL_METADATA[ToolType.BLOG_LEAN_FAT_FIRE].title,
    description: TOOL_METADATA[ToolType.BLOG_LEAN_FAT_FIRE].desc,
    slug: 'leanfire-vs-fatfire-lifestyle-budget'
  },
  '4-percent-rule-dead-safe-withdrawal-rates': {
    title: TOOL_METADATA[ToolType.BLOG_FOUR_PERCENT].title,
    description: TOOL_METADATA[ToolType.BLOG_FOUR_PERCENT].desc,
    slug: '4-percent-rule-dead-safe-withdrawal-rates'
  },
  'coast-fire-how-to-retire-early': {
    title: TOOL_METADATA[ToolType.BLOG_COAST_FIRE].title,
    description: TOOL_METADATA[ToolType.BLOG_COAST_FIRE].desc,
    slug: 'coast-fire-how-to-retire-early'
  },
  'cost-of-waiting-compound-interest': {
    title: TOOL_METADATA[ToolType.BLOG_COST_WAITING].title,
    description: TOOL_METADATA[ToolType.BLOG_COST_WAITING].desc,
    slug: 'cost-of-waiting-compound-interest'
  },
  'roth-vs-traditional-401k-tax-bracket-bet': {
    title: TOOL_METADATA[ToolType.BLOG_ROTH_TRAD_401K].title,
    description: TOOL_METADATA[ToolType.BLOG_ROTH_TRAD_401K].desc,
    slug: 'roth-vs-traditional-401k-tax-bracket-bet'
  },
  'snowball-vs-avalanche-debt-payoff': {
    title: TOOL_METADATA[ToolType.BLOG_SNOWBALL_AVALANCHE].title,
    description: TOOL_METADATA[ToolType.BLOG_SNOWBALL_AVALANCHE].desc,
    slug: 'snowball-vs-avalanche-debt-payoff'
  },
  '72-month-car-loan-true-cost': {
    title: TOOL_METADATA[ToolType.BLOG_CAR_LOAN_72].title,
    description: TOOL_METADATA[ToolType.BLOG_CAR_LOAN_72].desc,
    slug: '72-month-car-loan-true-cost'
  },
  'student-loan-refinance-math': {
    title: TOOL_METADATA[ToolType.BLOG_STUDENT_LOAN_REFI].title,
    description: TOOL_METADATA[ToolType.BLOG_STUDENT_LOAN_REFI].desc,
    slug: 'student-loan-refinance-math'
  },
  'credit-card-minimum-payments-20-years': {
    title: TOOL_METADATA[ToolType.BLOG_CC_MIN_PAY].title,
    description: TOOL_METADATA[ToolType.BLOG_CC_MIN_PAY].desc,
    slug: 'credit-card-minimum-payments-20-years'
  },
  'assets-vs-liabilities-true-net-worth': {
    title: TOOL_METADATA[ToolType.BLOG_ASSETS_LIABILITIES].title,
    description: TOOL_METADATA[ToolType.BLOG_ASSETS_LIABILITIES].desc,
    slug: 'assets-vs-liabilities-true-net-worth'
  },
  'financial-order-of-operations': {
    title: TOOL_METADATA[ToolType.BLOG_ORDER_OPS].title,
    description: TOOL_METADATA[ToolType.BLOG_ORDER_OPS].desc,
    slug: 'financial-order-of-operations'
  },
  'inflation-calculator-million-worth-retirement': {
    title: TOOL_METADATA[ToolType.BLOG_INFLATION_MILLION].title,
    description: TOOL_METADATA[ToolType.BLOG_INFLATION_MILLION].desc,
    slug: 'inflation-calculator-million-worth-retirement'
  },
  '6-month-emergency-fund-rule': {
    title: TOOL_METADATA[ToolType.BLOG_EMERGENCY_RULE].title,
    description: TOOL_METADATA[ToolType.BLOG_EMERGENCY_RULE].desc,
    slug: '6-month-emergency-fund-rule'
  },
  'latte-factor-vs-big-wins-wealth': {
    title: TOOL_METADATA[ToolType.BLOG_LATTE_FACTOR].title,
    description: TOOL_METADATA[ToolType.BLOG_LATTE_FACTOR].desc,
    slug: 'latte-factor-vs-big-wins-wealth'
  },
  'dcf-modeling-retail-investors': {
    title: TOOL_METADATA[ToolType.BLOG_DCF_RETAIL].title,
    description: TOOL_METADATA[ToolType.BLOG_DCF_RETAIL].desc,
    slug: 'dcf-modeling-retail-investors'
  },
  'lump-sum-vs-dollar-cost-averaging': {
    title: TOOL_METADATA[ToolType.BLOG_LUMP_SUM_DCA].title,
    description: TOOL_METADATA[ToolType.BLOG_LUMP_SUM_DCA].desc,
    slug: 'lump-sum-vs-dollar-cost-averaging'
  },
  'roth-ira-vs-traditional-ira-2025': {
    title: TOOL_METADATA[ToolType.BLOG_ROTH_TRADITIONAL].title,
    description: TOOL_METADATA[ToolType.BLOG_ROTH_TRADITIONAL].desc,
    slug: 'roth-ira-vs-traditional-ira-2025'
  },
  'how-much-emergency-fund-do-i-need-2025': {
    title: TOOL_METADATA[ToolType.BLOG_EMERGENCY_FUND].title,
    description: TOOL_METADATA[ToolType.BLOG_EMERGENCY_FUND].desc,
    slug: 'how-much-emergency-fund-do-i-need-2025'
  },
  'fire-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_FIRE_GUIDE].title,
    description: TOOL_METADATA[ToolType.BLOG_FIRE_GUIDE].desc,
    slug: 'fire-calculator-guide-2025'
  },
  'best-retirement-calculator-2025': {
    title: TOOL_METADATA[ToolType.BLOG_BEST_RETIREMENT].title,
    description: TOOL_METADATA[ToolType.BLOG_BEST_RETIREMENT].desc,
    slug: 'best-retirement-calculator-2025'
  },
  'investment-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_INVESTMENT_GUIDE].title,
    description: TOOL_METADATA[ToolType.BLOG_INVESTMENT_GUIDE].desc,
    slug: 'investment-calculator-guide-2025'
  },
  'best-mortgage-calculator-2025': {
    title: TOOL_METADATA[ToolType.BLOG_BEST_MORTGAGE].title,
    description: TOOL_METADATA[ToolType.BLOG_BEST_MORTGAGE].desc,
    slug: 'best-mortgage-calculator-2025'
  },
  'student-loan-repayment-strategies-2025': {
    title: TOOL_METADATA[ToolType.BLOG_STUDENT_LOANS].title,
    description: TOOL_METADATA[ToolType.BLOG_STUDENT_LOANS].desc,
    slug: 'student-loan-repayment-strategies-2025'
  },
  'tax-brackets-explained-2025': {
    title: TOOL_METADATA[ToolType.BLOG_TAX_BRACKETS].title,
    description: TOOL_METADATA[ToolType.BLOG_TAX_BRACKETS].desc,
    slug: 'tax-brackets-explained-2025'
  },
  '401k-vs-ira-comparison-2025': {
    title: TOOL_METADATA[ToolType.BLOG_401K_VS_IRA].title,
    description: TOOL_METADATA[ToolType.BLOG_401K_VS_IRA].desc,
    slug: '401k-vs-ira-comparison-2025'
  },
  'budgeting-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_BUDGETING].title,
    description: TOOL_METADATA[ToolType.BLOG_BUDGETING].desc,
    slug: 'budgeting-guide-2025'
  },
  'net-worth-tracker-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_NET_WORTH].title,
    description: TOOL_METADATA[ToolType.BLOG_NET_WORTH].desc,
    slug: 'net-worth-tracker-guide-2025'
  },
  'loan-emi-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_EMI_GUIDE].title,
    description: TOOL_METADATA[ToolType.BLOG_EMI_GUIDE].desc,
    slug: 'loan-emi-calculator-guide-2025'
  },
  'loan-comparison-refinance-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_LOAN_COMPARE].title,
    description: TOOL_METADATA[ToolType.BLOG_LOAN_COMPARE].desc,
    slug: 'loan-comparison-refinance-guide-2025'
  },
  'cost-of-living-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_LIVING_COST].title,
    description: TOOL_METADATA[ToolType.BLOG_LIVING_COST].desc,
    slug: 'cost-of-living-calculator-guide-2025'
  },
  'currency-converter-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_CURRENCY_CONVERTER].title,
    description: TOOL_METADATA[ToolType.BLOG_CURRENCY_CONVERTER].desc,
    slug: 'currency-converter-guide-2025'
  },
  'gst-tax-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_GST_GUIDE].title,
    description: TOOL_METADATA[ToolType.BLOG_GST_GUIDE].desc,
    slug: 'gst-tax-calculator-guide-2025'
  },
  'credit-card-payoff-strategy-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_CREDIT_CARD_PAYOFF].title,
    description: TOOL_METADATA[ToolType.BLOG_CREDIT_CARD_PAYOFF].desc,
    slug: 'credit-card-payoff-strategy-guide-2025'
  },
  'ai-market-insights-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_MARKET_INSIGHTS].title,
    description: TOOL_METADATA[ToolType.BLOG_MARKET_INSIGHTS].desc,
    slug: 'ai-market-insights-guide-2025'
  },
  'index-funds-etf-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_INVESTMENT_ACADEMY].title,
    description: TOOL_METADATA[ToolType.BLOG_INVESTMENT_ACADEMY].desc,
    slug: 'index-funds-etf-guide-2025'
  },
  'dcf-valuation-modeling-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_EXCEL_MODELER].title,
    description: TOOL_METADATA[ToolType.BLOG_EXCEL_MODELER].desc,
    slug: 'dcf-valuation-modeling-guide-2025'
  },
  'dividend-reinvestment-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_DRIP_GUIDE].title,
    description: TOOL_METADATA[ToolType.BLOG_DRIP_GUIDE].desc,
    slug: 'dividend-reinvestment-calculator-guide-2025'
  },
  'dti-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_DTI_GUIDE].title,
    description: TOOL_METADATA[ToolType.BLOG_DTI_GUIDE].desc,
    slug: 'dti-calculator-guide-2025'
  },
  'no-wash-sale-rule-crypto-tax-loss-harvesting': {
    title: TOOL_METADATA[ToolType.BLOG_CRYPTO_WASH_SALE].title,
    description: TOOL_METADATA[ToolType.BLOG_CRYPTO_WASH_SALE].desc,
    slug: 'no-wash-sale-rule-crypto-tax-loss-harvesting'
  }
};

export const blogSlugs = Object.keys(blogMetadata);

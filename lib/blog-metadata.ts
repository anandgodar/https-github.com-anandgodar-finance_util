import { TOOL_METADATA } from './tool-metadata';
import { ToolType } from '../types';

export type BlogMetadata = {
  title: string;
  description: string;
  slug: string;
};

// Server-safe metadata for generateStaticParams and generateMetadata
export const blogMetadata: Record<string, BlogMetadata> = {
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
    description: "Discover every tax deduction available to freelancers in 2025. Learn about home office deduction ($5/sq ft simplified method), mileage ($0.67/mile), Section 179 equipment expensing, health insurance, retirement contributions, and business expense strategies to save thousands.",
    slug: 'tax-deductions-freelancers-2025'
  },
  '1099-vs-w2-comparison-2025': {
    title: TOOL_METADATA[ToolType.BLOG_1099_W2].title,
    description: "Comprehensive guide comparing 1099 independent contractor vs W-2 employee status. Learn tax differences, benefits comparison, take-home pay calculations, legal classification rules, and when to negotiate for each employment type.",
    slug: '1099-vs-w2-comparison-2025'
  },
  'llc-vs-sole-proprietor-2025': {
    title: TOOL_METADATA[ToolType.BLOG_LLC_SOLE_PROP].title,
    description: "Comprehensive comparison of LLC vs Sole Proprietorship for freelancers and small business owners. Understand tax differences, liability protection, formation costs, S-Corp election benefits, and which structure saves you the most money in 2025.",
    slug: 'llc-vs-sole-proprietor-2025'
  },
  'sep-ira-vs-solo-401k-2025': {
    title: TOOL_METADATA[ToolType.BLOG_SEP_SOLO401K].title,
    description: "Comprehensive comparison of SEP-IRA vs Solo 401(k) for self-employed individuals and freelancers. Understand 2025 contribution limits ($69k max), tax benefits, setup costs, deadlines, and which retirement plan saves you the most money.",
    slug: 'sep-ira-vs-solo-401k-2025'
  },
  'home-office-deduction-2025': {
    title: TOOL_METADATA[ToolType.BLOG_HOME_OFFICE].title,
    description: "Comprehensive guide to claiming the home office deduction for self-employed individuals and freelancers in 2025. Learn the simplified method ($5/sq ft, max $1,500), regular method (actual expenses), qualification requirements, depreciation, and audit-proof documentation.",
    slug: 'home-office-deduction-2025'
  },
  'how-much-house-can-i-afford-2025': {
    title: TOOL_METADATA[ToolType.BLOG_HOW_MUCH_HOUSE].title,
    description: "Calculate how much house you can afford in 2026. Learn the 28/36 rule, debt-to-income ratios, down payment requirements, and use our mortgage calculator to find your perfect home price range.",
    slug: 'how-much-house-can-i-afford-2025'
  },
  'should-i-pay-off-debt-or-invest-2025': {
    title: TOOL_METADATA[ToolType.BLOG_DEBT_OR_INVEST].title,
    description: "Decide whether to pay off debt or invest your money in 2025. Learn the debt vs investment math, interest rate comparisons, and strategies to maximize your wealth.",
    slug: 'should-i-pay-off-debt-or-invest-2025'
  },
  'how-to-calculate-take-home-pay-2025': {
    title: TOOL_METADATA[ToolType.BLOG_TAKE_HOME_PAY].title,
    description: "Learn how to calculate your take-home pay after taxes in 2026. Understand federal tax, state tax, FICA, 401k deductions, and use our salary calculator to get your exact net pay.",
    slug: 'how-to-calculate-take-home-pay-2025'
  },
  '100k-california-vs-texas-take-home-pay': {
    title: TOOL_METADATA[ToolType.BLOG_CA_TX_TAKE_HOME].title,
    description: "Compare take-home pay, taxes, and living costs for a $100k salary in California vs Texas. See which state stretches your paycheck further in 2025.",
    slug: '100k-california-vs-texas-take-home-pay'
  },
  'bonus-tax-myth-withholding-vs-liability': {
    title: TOOL_METADATA[ToolType.BLOG_BONUS_TAX].title,
    description: "Learn the difference between bonus withholding and actual tax liability. Understand the 22% flat withholding rule and calculate your real bonus take-home pay.",
    slug: 'bonus-tax-myth-withholding-vs-liability'
  },
  'overtime-tax-myth-withholding-vs-tax-rate': {
    title: TOOL_METADATA[ToolType.BLOG_OVERTIME_TAX].title,
    description: TOOL_METADATA[ToolType.BLOG_OVERTIME_TAX].desc,
    slug: 'overtime-tax-myth-withholding-vs-tax-rate'
  },
  'raise-vs-relocation-cost-of-living': {
    title: TOOL_METADATA[ToolType.BLOG_RAISE_MOVE].title,
    description: "Break down whether a $10,000 raise is worth relocating. Compare taxes, cost of living, and hidden moving costs before you accept the offer.",
    slug: 'raise-vs-relocation-cost-of-living'
  },
  'max-out-401k-take-home-pay': {
    title: TOOL_METADATA[ToolType.BLOG_MAX_401K].title,
    description: "Learn how pre-tax 401(k) contributions reduce taxable income and why maxing out can feel like a smaller hit to take-home pay than expected.",
    slug: 'max-out-401k-take-home-pay'
  },
  'gross-vs-net-pay-paycheck-breakdown': {
    title: TOOL_METADATA[ToolType.BLOG_GROSS_NET].title,
    description: "A beginner-friendly guide to gross vs net pay, FICA, Medicare, and state taxes. Learn why your paycheck is smaller and how to calculate take-home pay.",
    slug: 'gross-vs-net-pay-paycheck-breakdown'
  },
  'freelancer-estimated-taxes-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_FREELANCE_ESTIMATED].title,
    description: "A 1099-friendly guide to estimated taxes. Learn safe harbor rules, how much to save, and how to calculate quarterly payments for tax year 2026.",
    slug: 'freelancer-estimated-taxes-guide-2025'
  },
  'moving-to-florida-sunshine-tax-savings': {
    title: TOOL_METADATA[ToolType.BLOG_FLORIDA_MOVE].title,
    description: "Considering a move from New York or New Jersey to Florida? See how state tax savings change your take-home pay and budget in 2025.",
    slug: 'moving-to-florida-sunshine-tax-savings'
  },
  'piti-explained-mortgage-payment-breakdown': {
    title: TOOL_METADATA[ToolType.BLOG_PITI_EXPLAINED].title,
    description: "Understand PITI (principal, interest, taxes, and insurance) and why your monthly payment is higher than the list price implies.",
    slug: 'piti-explained-mortgage-payment-breakdown'
  },
  'mortgage-points-break-even-2026': {
    title: TOOL_METADATA[ToolType.BLOG_POINTS_BREAK_EVEN].title,
    description: "Learn when mortgage points make sense, how to calculate break-even, and when to skip buying down the rate in 2026.",
    slug: 'mortgage-points-break-even-2026'
  },
  'pmi-math-how-to-remove-faster': {
    title: TOOL_METADATA[ToolType.BLOG_PMI_MATH].title,
    description: "Understand PMI math, the 20% equity rule, and strategies to remove private mortgage insurance sooner.",
    slug: 'pmi-math-how-to-remove-faster'
  },
  'rent-vs-buy-5-percent-rule-2026': {
    title: TOOL_METADATA[ToolType.BLOG_RENT_BUY_2026].title,
    description: "Learn the 5% rule for rent vs buy decisions, and when homeownership makes sense in 2026.",
    slug: 'rent-vs-buy-5-percent-rule-2026'
  },
  '500k-house-monthly-cost-rate-sensitivity': {
    title: TOOL_METADATA[ToolType.BLOG_500K_COST].title,
    description: "See how interest rate changes affect the monthly cost of a $500,000 home and why rate sensitivity matters for buyers in 2026.",
    slug: '500k-house-monthly-cost-rate-sensitivity'
  },
  'biweekly-mortgage-payments-interest-savings': {
    title: TOOL_METADATA[ToolType.BLOG_BIWEEKLY].title,
    description: "Learn how bi-weekly mortgage payments create an extra full payment each year and reduce interest over the life of the loan.",
    slug: 'biweekly-mortgage-payments-interest-savings'
  },
  'fi-number-math-financial-independence': {
    title: TOOL_METADATA[ToolType.BLOG_FI_NUMBER].title,
    description: "Learn the 25x annual expenses rule and how to calculate your FI number for financial independence.",
    slug: 'fi-number-math-financial-independence'
  },
  'leanfire-vs-fatfire-lifestyle-budget': {
    title: TOOL_METADATA[ToolType.BLOG_LEAN_FAT_FIRE].title,
    description: "Compare LeanFIRE and FatFIRE spending targets and see how lifestyle costs change your retirement number.",
    slug: 'leanfire-vs-fatfire-lifestyle-budget'
  },
  '4-percent-rule-dead-safe-withdrawal-rates': {
    title: TOOL_METADATA[ToolType.BLOG_FOUR_PERCENT].title,
    description: "Explore why the 4% rule is under pressure from inflation and longevity risk, and how to test safer withdrawal rates.",
    slug: '4-percent-rule-dead-safe-withdrawal-rates'
  },
  'coast-fire-how-to-retire-early': {
    title: TOOL_METADATA[ToolType.BLOG_COAST_FIRE].title,
    description: "Learn how Coast FIRE works, why front-loading investments matters, and how to calculate your coast age.",
    slug: 'coast-fire-how-to-retire-early'
  },
  'cost-of-waiting-compound-interest': {
    title: TOOL_METADATA[ToolType.BLOG_COST_WAITING].title,
    description: "See how delaying investing reduces compounding and learn the real cost of starting 10 years later.",
    slug: 'cost-of-waiting-compound-interest'
  },
  'roth-vs-traditional-401k-tax-bracket-bet': {
    title: TOOL_METADATA[ToolType.BLOG_ROTH_TRAD_401K].title,
    description: "Compare Roth vs Traditional 401(k) choices based on tax brackets now vs later and learn when each option wins.",
    slug: 'roth-vs-traditional-401k-tax-bracket-bet'
  },
  'snowball-vs-avalanche-debt-payoff': {
    title: TOOL_METADATA[ToolType.BLOG_SNOWBALL_AVALANCHE].title,
    description: "Compare the snowball and avalanche debt payoff methods and see which strategy saves the most interest.",
    slug: 'snowball-vs-avalanche-debt-payoff'
  },
  '72-month-car-loan-true-cost': {
    title: TOOL_METADATA[ToolType.BLOG_CAR_LOAN_72].title,
    description: "Learn how long-term auto loans inflate total interest and keep you underwater longer.",
    slug: '72-month-car-loan-true-cost'
  },
  'student-loan-refinance-math': {
    title: TOOL_METADATA[ToolType.BLOG_STUDENT_LOAN_REFI].title,
    description: "Learn when refinancing student loans makes sense and how to weigh lower rates against lost federal protections.",
    slug: 'student-loan-refinance-math'
  },
  'credit-card-minimum-payments-20-years': {
    title: TOOL_METADATA[ToolType.BLOG_CC_MIN_PAY].title,
    description: "See how 2% minimum payments stretch credit card debt for decades and how a small extra payment changes the timeline.",
    slug: 'credit-card-minimum-payments-20-years'
  },
  'assets-vs-liabilities-true-net-worth': {
    title: TOOL_METADATA[ToolType.BLOG_ASSETS_LIABILITIES].title,
    description: "Learn the difference between assets and liabilities and how to calculate your true net worth step by step.",
    slug: 'assets-vs-liabilities-true-net-worth'
  },
  'financial-order-of-operations': {
    title: TOOL_METADATA[ToolType.BLOG_ORDER_OPS].title,
    description: "Follow the financial order of operations: emergency fund, employer match, high-interest debt, and beyond.",
    slug: 'financial-order-of-operations'
  },
  'inflation-calculator-million-worth-retirement': {
    title: TOOL_METADATA[ToolType.BLOG_INFLATION_MILLION].title,
    description: "See how inflation erodes purchasing power and what $1 million could feel like in retirement dollars.",
    slug: 'inflation-calculator-million-worth-retirement'
  },
  '6-month-emergency-fund-rule': {
    title: TOOL_METADATA[ToolType.BLOG_EMERGENCY_RULE].title,
    description: "Learn the 6-month emergency fund rule, how to size your cash buffer, and why layoffs make it essential.",
    slug: '6-month-emergency-fund-rule'
  },
  'latte-factor-vs-big-wins-wealth': {
    title: TOOL_METADATA[ToolType.BLOG_LATTE_FACTOR].title,
    description: "Small expenses add up, but housing, cars, and taxes move the needle far more. Learn where to focus.",
    slug: 'latte-factor-vs-big-wins-wealth'
  },
  'dcf-modeling-retail-investors': {
    title: TOOL_METADATA[ToolType.BLOG_DCF_RETAIL].title,
    description: TOOL_METADATA[ToolType.BLOG_DCF_RETAIL].desc,
    slug: 'dcf-modeling-retail-investors'
  },
  'lump-sum-vs-dollar-cost-averaging': {
    title: TOOL_METADATA[ToolType.BLOG_LUMP_SUM_DCA].title,
    description: "Compare lump sum investing vs dollar cost averaging and learn when each strategy makes sense.",
    slug: 'lump-sum-vs-dollar-cost-averaging'
  },
  'roth-ira-vs-traditional-ira-2025': {
    title: TOOL_METADATA[ToolType.BLOG_ROTH_TRADITIONAL].title,
    description: "Compare Roth IRA vs Traditional IRA in 2025. Learn contribution limits, tax benefits, withdrawal rules, and which retirement account is better for your situation.",
    slug: 'roth-ira-vs-traditional-ira-2025'
  },
  'how-much-emergency-fund-do-i-need-2025': {
    title: TOOL_METADATA[ToolType.BLOG_EMERGENCY_FUND].title,
    description: "Calculate how much emergency fund you need in 2025. Learn the 3-6 month rule, how to build your emergency fund, where to keep it, and use our calculator to find your perfect safety net.",
    slug: 'how-much-emergency-fund-do-i-need-2025'
  },
  'fire-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_FIRE_GUIDE].title,
    description: "Calculate your FIRE (Financial Independence Retire Early) number with our comprehensive guide. Learn the 4% rule, Lean FIRE vs Fat FIRE, and how to achieve financial independence.",
    slug: 'fire-calculator-guide-2025'
  },
  'best-retirement-calculator-2025': {
    title: TOOL_METADATA[ToolType.BLOG_BEST_RETIREMENT].title,
    description: "Compare the best retirement calculators in 2025. Review top tools including QuantCurb, Bankrate, NerdWallet, and find the perfect calculator for your retirement planning needs.",
    slug: 'best-retirement-calculator-2025'
  },
  'investment-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_INVESTMENT_GUIDE].title,
    description: "Master investment calculations with our comprehensive 2025 guide. Learn SIP investing, compound interest, inflation-adjusted returns, and how to use an investment calculator to project your wealth growth.",
    slug: 'investment-calculator-guide-2025'
  },
  'best-mortgage-calculator-2025': {
    title: TOOL_METADATA[ToolType.BLOG_BEST_MORTGAGE].title,
    description: "Compare the best mortgage calculators in 2025. Review top tools including QuantCurb, Bankrate, Zillow, and find the perfect calculator with PITI, PMI, and property tax calculations.",
    slug: 'best-mortgage-calculator-2025'
  },
  'student-loan-repayment-strategies-2025': {
    title: TOOL_METADATA[ToolType.BLOG_STUDENT_LOANS].title,
    description: "Master student loan repayment in 2025. Learn about income-driven repayment plans, loan forgiveness programs, refinancing strategies, and how to pay off student debt faster.",
    slug: 'student-loan-repayment-strategies-2025'
  },
  'tax-brackets-explained-2025': {
    title: TOOL_METADATA[ToolType.BLOG_TAX_BRACKETS].title,
    description: "Understand 2025 federal tax brackets and how progressive taxation works. Learn effective vs marginal tax rate, tax bracket calculations, and how to reduce your tax bill legally.",
    slug: 'tax-brackets-explained-2025'
  },
  '401k-vs-ira-comparison-2025': {
    title: TOOL_METADATA[ToolType.BLOG_401K_VS_IRA].title,
    description: "Compare 401(k) vs IRA in 2025. Learn contribution limits, employer match, tax benefits, withdrawal rules, and which retirement account is better for your situation.",
    slug: '401k-vs-ira-comparison-2025'
  },
  'budgeting-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_BUDGETING].title,
    description: "Master budgeting in 2025 with our complete guide. Learn the 50/30/20 rule, zero-based budgeting, envelope method, and proven strategies to take control of your finances.",
    slug: 'budgeting-guide-2025'
  },
  'net-worth-tracker-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_NET_WORTH].title,
    description: "A human-friendly guide to calculating net worth, tracking assets and liabilities, and using a net worth tracker to grow wealth with clarity.",
    slug: 'net-worth-tracker-guide-2025'
  },
  'loan-emi-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_EMI_GUIDE].title,
    description: "A human-friendly guide to EMI calculation, amortization, and how to lower loan interest using an EMI calculator.",
    slug: 'loan-emi-calculator-guide-2025'
  },
  'loan-comparison-refinance-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_LOAN_COMPARE].title,
    description: "Learn how to compare loan offers using APR, fees, and break-even analysis with a loan comparison calculator.",
    slug: 'loan-comparison-refinance-guide-2025'
  },
  'cost-of-living-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_LIVING_COST].title,
    description: "Learn how to use a cost of living calculator to compare cities, plan your budget, and avoid relocation surprises.",
    slug: 'cost-of-living-calculator-guide-2025'
  },
  'currency-converter-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_CURRENCY_CONVERTER].title,
    description: "Learn how to use a currency converter, understand exchange rate spreads, and avoid hidden fees when sending or spending money abroad.",
    slug: 'currency-converter-guide-2025'
  },
  'gst-tax-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_GST_GUIDE].title,
    description: "Learn how to calculate GST, split inclusive prices, and avoid invoicing errors using a GST calculator.",
    slug: 'gst-tax-calculator-guide-2025'
  },
  'credit-card-payoff-strategy-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_CREDIT_CARD_PAYOFF].title,
    description: "Learn how to pay off credit card debt faster using avalanche or snowball strategies and a payoff calculator.",
    slug: 'credit-card-payoff-strategy-guide-2025'
  },
  'ai-market-insights-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_MARKET_INSIGHTS].title,
    description: "A practical guide to interpreting market insights, sentiment signals, and macro trends using AI-driven tools.",
    slug: 'ai-market-insights-guide-2025'
  },
  'index-funds-etf-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_INVESTMENT_ACADEMY].title,
    description: "A beginner-friendly guide to index funds, ETFs, and building a diversified portfolio with clear, actionable steps.",
    slug: 'index-funds-etf-guide-2025'
  },
  'dcf-valuation-modeling-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_EXCEL_MODELER].title,
    description: "Learn the core steps of DCF valuation, WACC, and terminal value using a guided DCF modeler.",
    slug: 'dcf-valuation-modeling-guide-2025'
  },
  'dividend-reinvestment-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_DRIP_GUIDE].title,
    description: "Learn how dividend reinvestment works, why compounding accelerates wealth, and how to use a DRIP calculator.",
    slug: 'dividend-reinvestment-calculator-guide-2025'
  },
  'dti-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_DTI_GUIDE].title,
    description: "Learn how debt-to-income ratio is calculated, what lenders look for, and how to improve your DTI before applying.",
    slug: 'dti-calculator-guide-2025'
  },
  'no-wash-sale-rule-crypto-tax-loss-harvesting': {
    title: TOOL_METADATA[ToolType.BLOG_CRYPTO_WASH_SALE].title,
    description: "Understand why crypto tax loss harvesting beats stocks. Learn the no wash sale rule advantage, how to immediately rebuy crypto, step-by-step harvesting, reporting tips, and common mistakes.",
    slug: 'no-wash-sale-rule-crypto-tax-loss-harvesting'
  },
  'w4-multiple-jobs-worksheet-decoded': {
    title: TOOL_METADATA[ToolType.BLOG_W4_MULTIPLE_JOBS].title,
    description: TOOL_METADATA[ToolType.BLOG_W4_MULTIPLE_JOBS].desc,
    slug: 'w4-multiple-jobs-worksheet-decoded'
  },
  'remote-work-taxes-reciprocity-convenience-rule': {
    title: TOOL_METADATA[ToolType.BLOG_REMOTE_WORK_TAXES].title,
    description: TOOL_METADATA[ToolType.BLOG_REMOTE_WORK_TAXES].desc,
    slug: 'remote-work-taxes-reciprocity-convenience-rule'
  },
  'second-job-marginal-vs-effective-rate': {
    title: TOOL_METADATA[ToolType.BLOG_SECOND_JOB_BRACKET].title,
    description: TOOL_METADATA[ToolType.BLOG_SECOND_JOB_BRACKET].desc,
    slug: 'second-job-marginal-vs-effective-rate'
  },
  'local-income-tax-by-city-2026': {
    title: TOOL_METADATA[ToolType.BLOG_LOCAL_TAX_GAP].title,
    description: TOOL_METADATA[ToolType.BLOG_LOCAL_TAX_GAP].desc,
    slug: 'local-income-tax-by-city-2026'
  },
  'no-tax-on-tips-explained-2025': {
    title: TOOL_METADATA[ToolType.BLOG_NO_TAX_ON_TIPS].title,
    description: TOOL_METADATA[ToolType.BLOG_NO_TAX_ON_TIPS].desc,
    slug: 'no-tax-on-tips-explained-2025'
  },
  'excess-social-security-tax-refund-multiple-employers': {
    title: TOOL_METADATA[ToolType.BLOG_SS_REFUND].title,
    description: TOOL_METADATA[ToolType.BLOG_SS_REFUND].desc,
    slug: 'excess-social-security-tax-refund-multiple-employers'
  },
  'state-disability-paid-leave-payroll-tax-2026': {
    title: TOOL_METADATA[ToolType.BLOG_PAYROLL_GAP].title,
    description: TOOL_METADATA[ToolType.BLOG_PAYROLL_GAP].desc,
    slug: 'state-disability-paid-leave-payroll-tax-2026'
  },
  'rsu-22-percent-withholding-trap': {
    title: TOOL_METADATA[ToolType.BLOG_RSU_WITHHOLDING].title,
    description: TOOL_METADATA[ToolType.BLOG_RSU_WITHHOLDING].desc,
    slug: 'rsu-22-percent-withholding-trap'
  },
  'net-worth-percentile-by-age-2026': {
    title: TOOL_METADATA[ToolType.BLOG_NET_WORTH_PERCENTILE].title,
    description: TOOL_METADATA[ToolType.BLOG_NET_WORTH_PERCENTILE].desc,
    slug: 'net-worth-percentile-by-age-2026'
  },
  'hsa-vs-401k-fica-tax-savings-2026': {
    title: TOOL_METADATA[ToolType.BLOG_HSA_VS_401K].title,
    description: TOOL_METADATA[ToolType.BLOG_HSA_VS_401K].desc,
    slug: 'hsa-vs-401k-fica-tax-savings-2026'
  },
  'mid-year-move-part-year-resident-tax-guide-2026': {
    title: TOOL_METADATA[ToolType.BLOG_MIDYEAR_MOVE].title,
    description: TOOL_METADATA[ToolType.BLOG_MIDYEAR_MOVE].desc,
    slug: 'mid-year-move-part-year-resident-tax-guide-2026'
  }
};

export const blogSlugs = Object.keys(blogMetadata);

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
    description: "How a mortgage calculator works in 2026: PITI, PMI costs and removal, property taxes, the 28/36 rule, and worked payment examples you can check.",
    slug: 'mortgage-calculator-guide-2025'
  },
  'child-tax-credit-2025-guide': {
    title: TOOL_METADATA[ToolType.BLOG_CTC_2025].title,
    description: "The 2026 Child Tax Credit is $2,200 per child with up to $1,700 refundable. Learn the SSN rules, $200k/$400k phase-outs and worked ACTC refund examples.",
    slug: 'child-tax-credit-2025-guide'
  },
  'aca-health-insurance-freelancers-2025': {
    title: TOOL_METADATA[ToolType.BLOG_ACA_FREELANCERS].title,
    description: "2026 ACA guide for freelancers: enhanced subsidies expired, the 400% FPL cliff is back. Premium tax credit math, Medicaid, CSR and MAGI strategies.",
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
    description: "2026 freelancer write-offs: 72.5¢ mileage, home office, 100% bonus depreciation, health insurance, SEP/Solo 401(k) and QBI, with worked tax examples.",
    slug: 'tax-deductions-freelancers-2025'
  },
  '1099-vs-w2-comparison-2025': {
    title: TOOL_METADATA[ToolType.BLOG_1099_W2].title,
    description: "Compare 1099 contractor and W-2 employee pay in 2026: 15.3% self-employment tax, benefits value, the rate you need to break even, and worked scenarios.",
    slug: '1099-vs-w2-comparison-2025'
  },
  'llc-vs-sole-proprietor-2025': {
    title: TOOL_METADATA[ToolType.BLOG_LLC_SOLE_PROP].title,
    description: "LLC vs sole proprietor for 2026: liability protection, state fees, and S-corp math with QBI included. See what an S-corp election really saves.",
    slug: 'llc-vs-sole-proprietor-2025'
  },
  'sep-ira-vs-solo-401k-2025': {
    title: TOOL_METADATA[ToolType.BLOG_SEP_SOLO401K].title,
    description: "SEP-IRA vs Solo 401(k) for 2026: $72,000 limit, $24,500 deferral, catch-ups, Roth options and deadlines, with contribution math at every income.",
    slug: 'sep-ira-vs-solo-401k-2025'
  },
  'home-office-deduction-2025': {
    title: TOOL_METADATA[ToolType.BLOG_HOME_OFFICE].title,
    description: "Home office deduction for 2026: $5/sq ft simplified method vs actual expenses, who qualifies, income limits, depreciation recapture and worked examples.",
    slug: 'home-office-deduction-2025'
  },
  'how-much-house-can-i-afford-2025': {
    title: TOOL_METADATA[ToolType.BLOG_HOW_MUCH_HOUSE].title,
    description: "Calculate how much house you can afford in 2026. Learn the 28/36 rule, debt-to-income ratios, down payment requirements, and use our mortgage calculator to find your perfect home price range.",
    slug: 'how-much-house-can-i-afford-2025'
  },
  'should-i-pay-off-debt-or-invest-2025': {
    title: TOOL_METADATA[ToolType.BLOG_DEBT_OR_INVEST].title,
    description: "Pay off debt or invest in 2026? Compare interest rates to expected returns, use 2026 401(k), IRA and HSA limits, and follow a clear priority order.",
    slug: 'should-i-pay-off-debt-or-invest-2025'
  },
  'how-to-calculate-take-home-pay-2025': {
    title: TOOL_METADATA[ToolType.BLOG_TAKE_HOME_PAY].title,
    description: "Learn how to calculate your take-home pay after taxes in 2026. Understand federal tax, state tax, FICA, 401k deductions, and use our salary calculator to get your exact net pay.",
    slug: 'how-to-calculate-take-home-pay-2025'
  },
  '100k-california-vs-texas-take-home-pay': {
    title: TOOL_METADATA[ToolType.BLOG_CA_TX_TAKE_HOME].title,
    description: "Compare take-home pay on a $100k salary in California vs. Texas using 2026 federal and FICA figures, plus housing costs that often matter even more.",
    slug: '100k-california-vs-texas-take-home-pay'
  },
  'bonus-tax-myth-withholding-vs-liability': {
    title: TOOL_METADATA[ToolType.BLOG_BONUS_TAX].title,
    description: "Bonuses aren't taxed at a higher rate. Learn how 22% supplemental withholding and the aggregate method work, with 2026 examples of refunds and bills.",
    slug: 'bonus-tax-myth-withholding-vs-liability'
  },
  'overtime-tax-myth-withholding-vs-tax-rate': {
    title: TOOL_METADATA[ToolType.BLOG_OVERTIME_TAX].title,
    description: TOOL_METADATA[ToolType.BLOG_OVERTIME_TAX].desc,
    slug: 'overtime-tax-myth-withholding-vs-tax-rate'
  },
  'raise-vs-relocation-cost-of-living': {
    title: TOOL_METADATA[ToolType.BLOG_RAISE_MOVE].title,
    description: "See what a $10k raise really nets after 2026 federal, FICA and state taxes, how much higher rent and moving costs eat into it, and your payback period.",
    slug: 'raise-vs-relocation-cost-of-living'
  },
  'max-out-401k-take-home-pay': {
    title: TOOL_METADATA[ToolType.BLOG_MAX_401K].title,
    description: "A $24,500 401(k) contribution costs less than $24,500 of take-home pay. See 2026 limits and the real paycheck cost at $60k, $100k, $150k and $250k.",
    slug: 'max-out-401k-take-home-pay'
  },
  'gross-vs-net-pay-paycheck-breakdown': {
    title: TOOL_METADATA[ToolType.BLOG_GROSS_NET].title,
    description: "Why your paycheck is smaller than your salary: a line-by-line 2026 example of FICA, federal withholding, pre-tax benefits and state tax on $60,000.",
    slug: 'gross-vs-net-pay-paycheck-breakdown'
  },
  'freelancer-estimated-taxes-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_FREELANCE_ESTIMATED].title,
    description: "How much should freelancers set aside for taxes in 2026? A step-by-step estimate, an $85,000 worked example, safe harbor rules and 2026 due dates.",
    slug: 'freelancer-estimated-taxes-guide-2025'
  },
  'moving-to-florida-sunshine-tax-savings': {
    title: TOOL_METADATA[ToolType.BLOG_FLORIDA_MOVE].title,
    description: "Estimate what leaving New York or New Jersey for Florida really saves: state tax, SALT offset, insurance costs, and the residency rules that make it stick.",
    slug: 'moving-to-florida-sunshine-tax-savings'
  },
  'piti-explained-mortgage-payment-breakdown': {
    title: TOOL_METADATA[ToolType.BLOG_PITI_EXPLAINED].title,
    description: "PITI is principal, interest, taxes and insurance. See how escrow works, why fixed-rate payments still rise, and a $450,000 home payment line by line.",
    slug: 'piti-explained-mortgage-payment-breakdown'
  },
  'mortgage-points-break-even-2026': {
    title: TOOL_METADATA[ToolType.BLOG_POINTS_BREAK_EVEN].title,
    description: "Should you buy mortgage points in 2026? Break-even math on a $400,000 loan, when points pay off, when to skip them, and how they're taxed.",
    slug: 'mortgage-points-break-even-2026'
  },
  'pmi-math-how-to-remove-faster': {
    title: TOOL_METADATA[ToolType.BLOG_PMI_MATH].title,
    description: "PMI often costs 0.3%–1.5% of the loan per year. See the 80% and 78% LTV rules, how extra payments speed removal, and how FHA MIP differs.",
    slug: 'pmi-math-how-to-remove-faster'
  },
  'rent-vs-buy-5-percent-rule-2026': {
    title: TOOL_METADATA[ToolType.BLOG_RENT_BUY_2026].title,
    description: "Use the 5% rule to compare renting vs buying: price × 5% ÷ 12 vs rent. What the 5% covers, worked examples, and how to adjust it for 2026 rates.",
    slug: 'rent-vs-buy-5-percent-rule-2026'
  },
  '500k-house-monthly-cost-rate-sensitivity': {
    title: TOOL_METADATA[ToolType.BLOG_500K_COST].title,
    description: "What a $500,000 house costs per month at 5.5%–8% rates: principal, interest, full PITI, lifetime interest, and how higher rates shrink buying power.",
    slug: '500k-house-monthly-cost-rate-sensitivity'
  },
  'biweekly-mortgage-payments-interest-savings': {
    title: TOOL_METADATA[ToolType.BLOG_BIWEEKLY].title,
    description: "Bi-weekly mortgage payments add one extra payment a year. See the interest saved by loan size and rate, the servicer catch, and a fee-free DIY version.",
    slug: 'biweekly-mortgage-payments-interest-savings'
  },
  'fi-number-math-financial-independence': {
    title: TOOL_METADATA[ToolType.BLOG_FI_NUMBER].title,
    description: "Learn how to calculate your FI number with the 25x rule, when to use 28x–33x instead, and how taxes, inflation and Social Security change your target.",
    slug: 'fi-number-math-financial-independence'
  },
  'leanfire-vs-fatfire-lifestyle-budget': {
    title: TOOL_METADATA[ToolType.BLOG_LEAN_FAT_FIRE].title,
    description: "Compare LeanFIRE and FatFIRE budgets, the portfolio each needs at 25x or 30x, how long each takes, and how 2026 ACA subsidy rules affect each path.",
    slug: 'leanfire-vs-fatfire-lifestyle-budget'
  },
  '4-percent-rule-dead-safe-withdrawal-rates': {
    title: TOOL_METADATA[ToolType.BLOG_FOUR_PERCENT].title,
    description: "What the 4% rule really says, why longer retirements and sequence risk challenge it, and how 3%–3.5% rates and flexible spending change your plan.",
    slug: '4-percent-rule-dead-safe-withdrawal-rates'
  },
  'coast-fire-how-to-retire-early': {
    title: TOOL_METADATA[ToolType.BLOG_COAST_FIRE].title,
    description: "See how Coast FIRE works, the formula for your coast number, a table of targets by age and return, and the risks of coasting before you hit full FI.",
    slug: 'coast-fire-how-to-retire-early'
  },
  'cost-of-waiting-compound-interest': {
    title: TOOL_METADATA[ToolType.BLOG_COST_WAITING].title,
    description: "Starting to invest at 25 vs 35 can cost $600K to $2M+ depending on returns. See the compound interest math, catch-up amounts, and what to do now.",
    slug: 'cost-of-waiting-compound-interest'
  },
  'roth-vs-traditional-401k-tax-bracket-bet': {
    title: TOOL_METADATA[ToolType.BLOG_ROTH_TRAD_401K].title,
    description: "Roth or Traditional 401(k)? See the 2026 math behind the tax bracket bet, worked examples at 12%, 22% and 24%, bracket edges, and when to split.",
    slug: 'roth-vs-traditional-401k-tax-bracket-bet'
  },
  'snowball-vs-avalanche-debt-payoff': {
    title: TOOL_METADATA[ToolType.BLOG_SNOWBALL_AVALANCHE].title,
    description: "Snowball vs avalanche debt payoff compared with a worked example: total interest, payoff dates, when each method wins, and mistakes that slow you down.",
    slug: 'snowball-vs-avalanche-debt-payoff'
  },
  '72-month-car-loan-true-cost': {
    title: TOOL_METADATA[ToolType.BLOG_CAR_LOAN_72].title,
    description: "What a 72-month car loan really costs: total interest vs 60 months, negative equity risk, the new car loan interest deduction and smarter ways to buy.",
    slug: '72-month-car-loan-true-cost'
  },
  'student-loan-refinance-math': {
    title: TOOL_METADATA[ToolType.BLOG_STUDENT_LOAN_REFI].title,
    description: "Run the student loan refinance math: compare total interest by term, see which federal protections you give up, and learn when refinancing makes sense.",
    slug: 'student-loan-refinance-math'
  },
  'credit-card-minimum-payments-20-years': {
    title: TOOL_METADATA[ToolType.BLOG_CC_MIN_PAY].title,
    description: "See why paying only the credit card minimum can take nearly 20 years, how minimum formulas work, and how a fixed payment can save thousands in interest.",
    slug: 'credit-card-minimum-payments-20-years'
  },
  'assets-vs-liabilities-true-net-worth': {
    title: TOOL_METADATA[ToolType.BLOG_ASSETS_LIABILITIES].title,
    description: "Learn what counts as an asset or liability, how to value your home, car and 401(k), and see a worked example that calculates true, after-tax net worth.",
    slug: 'assets-vs-liabilities-true-net-worth'
  },
  'financial-order-of-operations': {
    title: TOOL_METADATA[ToolType.BLOG_ORDER_OPS].title,
    description: "A step-by-step order for your money: emergency fund, 401(k) match, high-interest debt, HSA, IRA and more, with 2026 contribution limits and an example.",
    slug: 'financial-order-of-operations'
  },
  'inflation-calculator-million-worth-retirement': {
    title: TOOL_METADATA[ToolType.BLOG_INFLATION_MILLION].title,
    description: "See what $1 million buys after 10-30 years of inflation, the formula behind inflation calculators, and how to set an inflation-adjusted retirement goal.",
    slug: 'inflation-calculator-million-worth-retirement'
  },
  '6-month-emergency-fund-rule': {
    title: TOOL_METADATA[ToolType.BLOG_EMERGENCY_RULE].title,
    description: "Size your emergency fund with the 6-month rule: what expenses count, a worked example, when to hold 3 or 12 months, and where to keep the cash.",
    slug: '6-month-emergency-fund-rule'
  },
  'latte-factor-vs-big-wins-wealth': {
    title: TOOL_METADATA[ToolType.BLOG_LATTE_FACTOR].title,
    description: "Does skipping coffee make you rich? Compare the latte factor with big wins in housing, cars and taxes, with 30-year math and a quick budget audit.",
    slug: 'latte-factor-vs-big-wins-wealth'
  },
  'dcf-modeling-retail-investors': {
    title: TOOL_METADATA[ToolType.BLOG_DCF_RETAIL].title,
    description: TOOL_METADATA[ToolType.BLOG_DCF_RETAIL].desc,
    slug: 'dcf-modeling-retail-investors'
  },
  'lump-sum-vs-dollar-cost-averaging': {
    title: TOOL_METADATA[ToolType.BLOG_LUMP_SUM_DCA].title,
    description: "Lump sum beat dollar-cost averaging about two-thirds of the time historically. See worked examples, when DCA still makes sense, and a hybrid plan.",
    slug: 'lump-sum-vs-dollar-cost-averaging'
  },
  'roth-ira-vs-traditional-ira-2025': {
    title: TOOL_METADATA[ToolType.BLOG_ROTH_TRADITIONAL].title,
    description: "Roth IRA vs Traditional IRA for 2026: $7,500 limit, Roth income phase-outs, deduction rules, withdrawal rules, and worked examples by tax bracket.",
    slug: 'roth-ira-vs-traditional-ira-2025'
  },
  'how-much-emergency-fund-do-i-need-2025': {
    title: TOOL_METADATA[ToolType.BLOG_EMERGENCY_FUND].title,
    description: "Find your emergency fund target with the 3-6 month rule, a step-by-step expense method, worked examples, and where to keep the cash safely in 2026.",
    slug: 'how-much-emergency-fund-do-i-need-2025'
  },
  'fire-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_FIRE_GUIDE].title,
    description: "Calculate your FIRE number with the 4% rule, savings-rate timelines, 2026 401(k)/IRA/HSA limits, and the ACA subsidy cliff early retirees must plan around.",
    slug: 'fire-calculator-guide-2025'
  },
  'best-retirement-calculator-2025': {
    title: TOOL_METADATA[ToolType.BLOG_BEST_RETIREMENT].title,
    description: "How to choose a retirement calculator in 2026: compare tool types, features to look for, red flags, and why your return assumptions matter most.",
    slug: 'best-retirement-calculator-2025'
  },
  'investment-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_INVESTMENT_GUIDE].title,
    description: "How an investment calculator works: compound interest, monthly SIP investing, the Rule of 72, and adjusting projections for inflation, fees and taxes.",
    slug: 'investment-calculator-guide-2025'
  },
  'best-mortgage-calculator-2025': {
    title: TOOL_METADATA[ToolType.BLOG_BEST_MORTGAGE].title,
    description: "What to look for in a mortgage calculator in 2026: full PITI, PMI, property tax and amortization, plus a 60-second test to check any calculator's math.",
    slug: 'best-mortgage-calculator-2025'
  },
  'student-loan-repayment-strategies-2025': {
    title: TOOL_METADATA[ToolType.BLOG_STUDENT_LOANS].title,
    description: "Federal student loan repayment changed in 2026: the new RAP plan, the end of SAVE, IBR, PSLF, refinancing and faster payoff strategies, with examples.",
    slug: 'student-loan-repayment-strategies-2025'
  },
  'tax-brackets-explained-2025': {
    title: TOOL_METADATA[ToolType.BLOG_TAX_BRACKETS].title,
    description: "See the 2026 federal tax brackets for single and joint filers, marginal vs effective rates, and worked examples using the $16,100 standard deduction.",
    slug: 'tax-brackets-explained-2025'
  },
  '401k-vs-ira-comparison-2025': {
    title: TOOL_METADATA[ToolType.BLOG_401K_VS_IRA].title,
    description: "Compare 401(k) and IRA rules for 2026: $24,500 vs $7,500 limits, catch-ups, employer match, Roth income limits, withdrawals, and the order to fund them.",
    slug: '401k-vs-ira-comparison-2025'
  },
  'budgeting-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_BUDGETING].title,
    description: "Build a budget that works in 2026: the 50/30/20 rule, zero-based budgeting, the envelope method, worked $5,000 examples, and 2026 savings limits.",
    slug: 'budgeting-guide-2025'
  },
  'net-worth-tracker-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_NET_WORTH].title,
    description: "Set up a simple net worth tracker: what to list, how often to update, a worked monthly example, and the metrics that show whether you're progressing.",
    slug: 'net-worth-tracker-guide-2025'
  },
  'loan-emi-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_EMI_GUIDE].title,
    description: "How to calculate loan EMI: the formula, worked examples, a tenure vs interest table, flat vs reducing rates, prepayment savings and an affordability test.",
    slug: 'loan-emi-calculator-guide-2025'
  },
  'loan-comparison-refinance-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_LOAN_COMPARE].title,
    description: "Compare loan offers in 2026 by APR, fees and break-even. Worked examples show when paying points wins and why a 30-year refinance can cost more overall.",
    slug: 'loan-comparison-refinance-guide-2025'
  },
  'cost-of-living-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_LIVING_COST].title,
    description: "Compare cities the right way: how cost of living indexes work, a worked example converting higher costs into the salary you need, and taxes to include.",
    slug: 'cost-of-living-calculator-guide-2025'
  },
  'currency-converter-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_CURRENCY_CONVERTER].title,
    description: "Understand the mid-market rate, spot exchange-rate markups and card fees, avoid dynamic currency conversion, and compare money transfer quotes by example.",
    slug: 'currency-converter-guide-2025'
  },
  'gst-tax-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_GST_GUIDE].title,
    description: "Add or remove GST correctly: formulas, 2026 rates for Australia, NZ, Singapore, Canada and India, worked examples, input tax credits and invoice mistakes.",
    slug: 'gst-tax-calculator-guide-2025'
  },
  'credit-card-payoff-strategy-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_CREDIT_CARD_PAYOFF].title,
    description: "A step-by-step credit card payoff plan for 2026: avalanche vs snowball, balance transfers, consolidation loans and extra payment tips, with real math.",
    slug: 'credit-card-payoff-strategy-guide-2025'
  },
  'ai-market-insights-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_MARKET_INSIGHTS].title,
    description: "Use AI market summaries responsibly: why AI output can be wrong, how to verify claims with BLS, Fed, BEA and SEC sources, and a simple weekly workflow.",
    slug: 'ai-market-insights-guide-2025'
  },
  'index-funds-etf-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_INVESTMENT_ACADEMY].title,
    description: "Learn how index funds and ETFs work, how fees compound, a simple three-fund portfolio, rebalancing with examples, and common investing mistakes.",
    slug: 'index-funds-etf-guide-2025'
  },
  'dcf-valuation-modeling-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_EXCEL_MODELER].title,
    description: "Build a simple DCF without Excel: project free cash flow, pick WACC, set terminal value and get a per-share value, plus sensitivity and a reverse DCF.",
    slug: 'dcf-valuation-modeling-guide-2025'
  },
  'dividend-reinvestment-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_DRIP_GUIDE].title,
    description: "See how dividend reinvestment (DRIP) compounds, with a worked 30-year example, 2026 qualified dividend tax rates, cost basis tips and mistakes to avoid.",
    slug: 'dividend-reinvestment-calculator-guide-2025'
  },
  'dti-calculator-guide-2025': {
    title: TOOL_METADATA[ToolType.BLOG_DTI_GUIDE].title,
    description: "How to calculate your debt-to-income ratio, what counts, the 28/36 rule, typical lender limits for conventional and FHA loans, and how to lower DTI.",
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
    description: "The no-tax-on-tips deduction lets eligible workers deduct up to $25,000 of tips for 2025-2028. See what it saves, who qualifies, and why FICA applies.",
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

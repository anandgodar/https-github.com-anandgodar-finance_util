import { ToolType } from '../types';

export const TOOL_METADATA: Record<ToolType, { title: string; desc: string; keywords: string }> = {
  [ToolType.DASHBOARD]: {
    title: "Free Financial Calculators 2026 - Mortgage & Tax",
    desc: "40+ free financial calculators: mortgage, take-home pay, FIRE retirement, investment growth, and tax tools. Accurate for all 50 US states.",
    keywords: "financial calculators, free calculators, mortgage calculator, salary calculator, tax calculator, investment calculator, retirement calculator, net worth calculator, take home pay calculator, emi calculator, fire calculator, compound interest calculator"
  },
  [ToolType.NET_WORTH]: {
    title: "Net Worth Calculator 2026 - Assets, Liabilities & Wealth",
    desc: "Add up assets (home, investments, savings) and liabilities (mortgage, loans, cards) to calculate net worth. Free tracker for all 50 states.",
    keywords: "net worth calculator, net worth tracker, how to calculate net worth, assets vs liabilities, personal balance sheet, net worth by age, total wealth calculator, what is my net worth"
  },
  [ToolType.EMERGENCY_FUND]: {
    title: "Emergency Fund Calculator 2026 - How Much Do You Need?",
    desc: "Calculate the emergency fund you need from monthly expenses, income stability, and dependents. Compares 3-month vs. 6-month savings rules.",
    keywords: "emergency fund calculator, how much emergency fund do i need, 3 month emergency fund, 6 month emergency fund, emergency savings calculator, financial safety net calculator, emergency fund by income"
  },
  [ToolType.EMI_CALC]: {
    title: "Loan EMI Calculator 2026 - With Extra Payment Savings",
    desc: "Calculate your loan EMI with a reducing-balance calculator. Model principal prepayments and see how much interest extra payments save.",
    keywords: "how to calculate emi, emi calculator, loan repayment calculator, interest savings calculator, prepayment calculator, what is emi"
  },
  [ToolType.MORTGAGE_CALC]: {
    title: "Mortgage Payment Calculator 2026 - PITI & PMI",
    desc: "Calculate monthly mortgage payments with a full PITI breakdown, PMI, and property tax by state. See exactly when PMI drops off.",
    keywords: "how to calculate mortgage payment, mortgage calculator, piti calculator, what is piti, pmi calculator, property tax calculator, monthly mortgage payment, home loan calculator, mortgage calculator with pmi, mortgage calculator with property tax, mortgage calculator with hoa, mortgage calculator with extra payments, biweekly mortgage calculator, mortgage amortization calculator, fha loan calculator with pmi, va loan calculator, jumbo mortgage calculator, 15 year vs 30 year mortgage calculator, mortgage payoff calculator, how much house can i afford calculator, mortgage affordability calculator, mortgage points calculator, mortgage closing costs calculator, mortgage refinance calculator, first time home buyer mortgage calculator, when does pmi drop off calculator, mortgage payment breakdown, mortgage interest calculator, mortgage principal calculator, what is included in mortgage payment, how to calculate property tax on house, should i pay points on mortgage, is fha loan worth it, mortgage calculator by state, home loan payment calculator"
  },
  [ToolType.SALARY_CALC]: {
    title: "Salary Calculator 2026 - Take-Home Pay by State",
    desc: "Calculate take-home pay after federal tax, state tax (all 50 states), FICA, and 401(k) deductions, by pay frequency.",
    keywords: "salary calculator, take home pay calculator, how much will i take home, salary calculator 2025, net pay calculator, after tax salary, paycheck calculator, take home pay by state, 401k calculator, tax estimator, salary after taxes, biweekly paycheck calculator, weekly paycheck calculator, how to calculate take home pay, salary after tax calculator, net pay calculator after taxes, hourly to salary calculator after tax, salary calculator with 401k, gross to net salary calculator, salary tax calculator by state, paycheck calculator with pre tax deductions, annual salary to monthly take home, 100k salary take home, 150k salary after taxes, 200k salary take home, how much is 80k after taxes, 75k salary take home, paycheck calculator california, paycheck calculator texas, paycheck calculator new york, paycheck calculator florida, how much tax on 100k salary, what is my take home pay, gross pay vs net pay, fica tax calculator, federal tax calculator, state tax calculator, california vs texas salary, new york vs florida take home pay"
  },
  [ToolType.INVESTMENT_CALC]: {
    title: "Investment Growth Calculator 2026 - SIP & Compounding",
    desc: "Model investment growth with compound interest and SIP contributions. Includes dividend reinvestment (DRIP) and goal-based projections.",
    keywords: "how to calculate investment growth, investment calculator, sip calculator, compound interest calculator, what is compound interest, wealth calculator, drip calculator, goal based investing, compound interest calculator monthly, investment return calculator, portfolio growth calculator, retirement investment calculator, monthly investment calculator, lump sum investment calculator, investment calculator with inflation, stock market return calculator, mutual fund calculator, index fund calculator, dividend reinvestment calculator, 401k growth calculator, roth ira growth calculator, investment doubling calculator, rule of 72 calculator, how much will my investment grow, how to calculate compound interest, how long to double investment, compound interest formula, how much should i invest monthly, what is a good investment return, lump sum vs dollar cost averaging, monthly vs annual investing, compound interest vs simple interest"
  },
  [ToolType.MARKET_INSIGHTS]: {
    title: "AI Market Insights 2026 - Sentiment Dashboard",
    desc: "Free AI-powered market analysis with real-time sentiment tracking, sector trends, and institutional vs. retail flow comparison.",
    keywords: "ai market analysis, stock market insights, market sentiment, fintech analysis, stock market trends 2025, market outlook, investment analysis tool"
  },
  [ToolType.LOAN_COMPARE]: {
    title: "Loan Comparison Calculator - Rates, APR & Interest",
    desc: "Compare up to 4 loan offers side by side. See total interest, monthly payments, and refinance break-even points before you decide.",
    keywords: "loan comparison calculator, compare loan rates, refinance calculator, apr comparison, loan interest comparison, should i refinance, refinance break even calculator, best loan rates"
  },
  [ToolType.LIVING_COST]: {
    title: "Cost of Living Calculator 2026 - Compare Cities & States",
    desc: "Compare cost of living between US cities and states. See how far your salary goes with housing, food, transport, and tax breakdowns.",
    keywords: "cost of living calculator, cost of living comparison, cost of living by city, cost of living by state, 50 30 20 budget, how much to live in, cheapest states to live, most expensive cities"
  },
  [ToolType.CURRENCY_CONV]: {
    title: "Currency Converter 2026 - Mid-Market Rate & Fees",
    desc: "Estimate currency conversions with reference mid-market rates and see how bank markups and card fees change what you actually receive.",
    keywords: "currency converter, exchange rate calculator, usd to inr, eur to usd, live forex rates, currency exchange calculator, money converter, foreign exchange calculator"
  },
  [ToolType.GST_CALC]: {
    title: "GST Calculator - Goods and Services Tax Online",
    desc: "Calculate GST/VAT instantly for inclusive and exclusive pricing, with automatic CGST, SGST, and IGST breakdown across tax slabs.",
    keywords: "gst calculator, gst calculator online, vat calculator, goods and services tax calculator, cgst sgst calculator, gst inclusive calculator, gst exclusive calculator, tax invoice calculator"
  },
  [ToolType.CREDIT_CARD_PAYOFF]: {
    title: "Credit Card Payoff Calculator 2026 - Avalanche vs Snowball",
    desc: "Calculate how long it takes to pay off credit card debt. Compare Avalanche vs. Snowball methods and total interest paid.",
    keywords: "how long to pay off credit card debt, credit card payoff calculator, avalanche vs snowball, debt payoff calculator, avalanche method, snowball method, balance transfer calculator"
  },
  [ToolType.FIRE_PLANNER]: {
    title: "FIRE Number Calculator 2026 - Early Retirement, 4% Rule",
    desc: "Calculate your FIRE number using the 4% rule. Covers Lean, Fat, Coast, and Barista FIRE plus geographic arbitrage.",
    keywords: "what is my fire number, fire calculator, early retirement calculator, 4 percent rule calculator, 3 percent rule calculator, coast fire calculator, barista fire calculator, lean fire calculator, fat fire calculator, financial independence calculator, how much money do i need to fire, when can i retire early, how to calculate fire number, safe withdrawal rate calculator, retire at 40, retire at 45, retire at 50, retire at 55, early retirement with 1 million, early retirement with 500k, passive income retirement calculator, fire number by age, retirement age calculator, financial independence retire early, monte carlo retirement simulator, sequence of returns risk, how long until i can retire, retirement savings calculator by age, fire calculator with inflation, fire calculator with social security, early retirement calculator with pension, how much to retire comfortably, what age can i retire calculator, path to financial independence"
  },
  [ToolType.FREELANCE_PROFIT]: {
    title: "1099 Tax Calculator 2026 - Self-Employment Take-Home Pay",
    desc: "Calculate freelance take-home pay after self-employment tax, federal tax, and state tax. Compares 1099 income to an equivalent W-2 salary.",
    keywords: "freelance calculator, 1099 taxes, self employment tax, contractor rate, how to calculate self employment tax, 1099 tax calculator, freelance income tax calculator, self employed tax calculator 2026, freelance hourly rate calculator, freelance pricing calculator, contractor tax calculator, gig worker tax calculator, uber tax calculator, doordash tax calculator, self employment tax rate calculator, freelance business expense calculator, home office deduction calculator, qbi deduction calculator, s corp tax savings calculator, llc vs sole proprietor calculator, how much tax do freelancers pay, how to calculate 1099 taxes, what is self employment tax rate, how much should i charge as a freelancer, what can freelancers deduct, should i form an llc as a freelancer, how to reduce self employment tax, 1099 vs w2 calculator, llc vs s corp for freelancers, sole proprietor vs llc, freelance vs employee taxes, freelance tax calculator by state"
  },
  [ToolType.INVESTMENT_ACADEMY]: {
    title: "Index Fund & ETF Guide 2026 - Investing for Beginners",
    desc: "Learn how to invest in index funds, ETFs, and REITs. Covers asset allocation, expense ratios, tax efficiency, and portfolio construction.",
    keywords: "index fund guide, how to invest in etfs, index funds for beginners, etf investing guide, best index funds, vanguard vs fidelity, asset allocation guide, reits investing, passive investing guide"
  },
  [ToolType.EXCEL_MODELER]: {
    title: "DCF Calculator 2026 - Discounted Cash Flow Valuation",
    desc: "Calculate a stock's intrinsic value with a free DCF calculator: WACC, free cash flow projection, terminal value, and sensitivity analysis.",
    keywords: "excel modeler, dcf model, financial modeling templates, dcf calculator, stock valuation calculator, discounted cash flow calculator, wacc calculator, terminal value calculator, free cash flow calculator, dcf valuation calculator, stock intrinsic value calculator, enterprise value calculator, equity value calculator, fcf projection calculator, how to calculate dcf, how to value a stock dcf, wacc calculator with beta, cost of equity calculator, cost of debt calculator, capm calculator, perpetuity growth method calculator, exit multiple calculator, fcff calculator, fcfe calculator, how to calculate dcf valuation, what is wacc formula, how to calculate terminal value, how to value a company using dcf, what is a good wacc, how to calculate free cash flow, how to calculate intrinsic value, what is enterprise value vs equity value, how to calculate cost of equity, dcf vs comparable companies, fcff vs fcfe, enterprise value vs equity value, wacc vs capm"
  },
  [ToolType.RETIREMENT_OPTIMIZER]: {
    title: "401(k) & IRA Calculator 2026 - Contribution Optimizer",
    desc: "Calculate retirement savings with our 401(k) and IRA optimizer. Compare Roth vs. Traditional, model employer match, and project your balance.",
    keywords: "retirement optimizer, 401k contribution strategy, ira planning, retirement calculator, 401k calculator, roth ira calculator, how much to save for retirement, retirement savings calculator by age, 401k contribution calculator, roth vs traditional calculator, backdoor roth calculator, mega backdoor roth calculator, roth conversion calculator, retirement account optimizer, tax efficient retirement calculator, retirement withdrawal calculator, required minimum distribution calculator, rmd calculator, retirement tax calculator, social security retirement calculator, pension vs 401k calculator, how much should i contribute to 401k, should i do roth or traditional 401k, how much to retire comfortably, what is backdoor roth ira, how does mega backdoor roth work, when can i withdraw from 401k, what is roth conversion, roth vs traditional 401k, roth ira vs traditional ira, 401k vs ira, sep ira vs solo 401k"
  },
  [ToolType.DRIP_CALCULATOR]: {
    title: "Dividend Reinvestment (DRIP) Calculator 2026",
    desc: "See how reinvesting dividends grows your portfolio. Model DRIP returns with adjustable yield, share-price growth, and frequency.",
    keywords: "dividend reinvestment calculator, drip calculator, dividend growth calculator, dividend compound calculator, how much dividends will i earn, drip investing calculator, dividend yield calculator, dividend income calculator"
  },
  [ToolType.CRYPTO_TAX_LOSS]: {
    title: "Crypto Tax Loss Harvesting Calculator 2026",
    desc: "Find tax-loss harvesting opportunities in your crypto portfolio. Crypto has no wash sale rule, so you can rebuy right after harvesting losses.",
    keywords: "crypto tax loss harvesting, crypto tax calculator, cryptocurrency tax, crypto wash sale rule, bitcoin tax calculator, crypto capital gains, tax loss harvesting strategy, crypto tax savings"
  },
  [ToolType.CHILD_TAX_CREDIT]: {
    title: "Child Tax Credit Calculator - 2026 Eligibility & Refund",
    desc: "Estimate child tax credit eligibility and refunds with income and dependent inputs.",
    keywords: "child tax credit calculator, 2025 child tax credit, ctc calculator, child tax credit 2026, how much is child tax credit 2026, child tax credit eligibility calculator, child tax credit income limit, child tax credit phaseout calculator, additional child tax credit calculator, child tax credit per child, refundable child tax credit, child tax credit age limit, how to calculate child tax credit, will i get child tax credit, child tax credit modified agi calculator, how much is child tax credit, who qualifies for child tax credit, what is the income limit for child tax credit, at what income does child tax credit phase out, how many children qualify for ctc, is child tax credit refundable, how to claim child tax credit, child tax credit vs earned income credit, ctc vs eitc, child tax credit vs dependent care credit"
  },
  [ToolType.QUARTERLY_TAX]: {
    title: "Quarterly Estimated Tax Calculator - 2026 Safe Harbor",
    desc: "Plan quarterly tax payments with safe harbor rules and self-employment assumptions.",
    keywords: "quarterly tax calculator, estimated tax calculator, quarterly taxes calculator, how to calculate quarterly taxes, freelance quarterly tax calculator, self employed quarterly tax calculator, 1099 quarterly tax calculator, safe harbor quarterly tax calculator, quarterly estimated tax calculator irs, quarterly tax payment calculator, how much to pay quarterly taxes, quarterly tax deadline calculator, self employment tax quarterly calculator, estimated quarterly tax worksheet, how to avoid underpayment penalty, 110 percent safe harbor calculator, 100 percent prior year tax calculator, how to calculate quarterly taxes for self employed, do i need to pay quarterly taxes, when are quarterly taxes due, how much should i pay in quarterly taxes, what is safe harbor for taxes, how to avoid quarterly tax penalty, what happens if i miss quarterly taxes, how to pay quarterly estimated taxes, who needs to pay quarterly taxes, safe harbor vs 90 percent method, prior year method vs current year method, quarterly taxes by state, freelancer estimated taxes"
  },
  [ToolType.ACA_SUBSIDY]: {
    title: "Obamacare Subsidy Calculator 2027 (ACA Premium Tax Credit)",
    desc: "Free 2027 ACA subsidy calculator using the IRS Rev. Proc. 2026-26 percentages: estimate your premium tax credit, the 400% FPL cliff and Medicaid eligibility.",
    keywords: "aca subsidy calculator, premium tax credit, marketplace insurance, health insurance subsidy calculator, obamacare calculator, marketplace subsidy calculator, premium tax credit calculator, aca affordability calculator, health insurance marketplace calculator, obamacare subsidy calculator 2026, obamacare subsidy calculator 2027, aca subsidy calculator 2027, obama care calculator, how much is aca subsidy, health insurance tax credit calculator, cobra vs aca calculator, early retirement health insurance calculator, how much is aca subsidy, who qualifies for aca subsidy, how to calculate aca subsidy, what income qualifies for obamacare subsidy, how does aca subsidy work, is aca subsidy based on gross income, aca vs cobra, marketplace vs employer insurance, silver plan vs gold plan, aca subsidy by state, health insurance marketplace by state, obamacare by state"
  },
  [ToolType.DTI_CALCULATOR]: {
    title: "DTI Calculator 2026 - Will You Qualify for a Mortgage?",
    desc: "Calculate your debt-to-income (DTI) ratio for mortgage qualification. Lenders typically require front-end DTI under 28%, back-end under 36-43%.",
    keywords: "dti calculator, debt to income ratio calculator, mortgage qualification calculator, how to calculate dti, what is a good dti ratio, dti for mortgage, front end dti, back end dti, debt ratio calculator, mortgage approval calculator"
  },
  [ToolType.OPTIONS_STRATEGY_VISUALIZER]: {
    title: "Options Strategy Visualizer - Multi-Leg P&L Calculator",
    desc: "Build and visualize multi-leg options strategies with interactive P&L diagrams, a full Greeks dashboard, an IV slider, and risk metrics.",
    keywords: "options strategy calculator, options visualizer, iron condor calculator, bull call spread, options greeks calculator, delta theta vega, options profit calculator, multi-leg options, options trading simulator, implied volatility"
  },
  [ToolType.VALUATION_ACADEMY]: {
    title: "Financial Education Hub - DCF, WACC & Options Guides",
    desc: "Free guides on stock valuation, options trading, and tax planning: DCF modeling, WACC, options Greeks, iron condors, and safe harbor rules.",
    keywords: "financial education, dcf guide, wacc explained, options greeks tutorial, stock valuation guide, options trading guide, tax strategy guide, learn investing free"
  },
  [ToolType.ACADEMY_DCF_GUIDE]: {
    title: "DCF Valuation Guide - Value Stocks Like Wall Street",
    desc: "Step-by-step guide to discounted cash flow valuation: FCF projection, terminal value, WACC integration, and intrinsic value.",
    keywords: "dcf valuation guide, how to calculate dcf, discounted cash flow tutorial, stock valuation guide, terminal value explained, fcf projection, intrinsic value calculator"
  },
  [ToolType.ACADEMY_WACC_GUIDE]: {
    title: "WACC Explained: Formula, CAPM and a Worked Example",
    desc: "Learn how to calculate WACC step by step: CAPM cost of equity, after-tax cost of debt, market-value weights, a worked example and the most common mistakes.",
    keywords: "wacc explained, cost of capital guide, capm calculator tutorial, wacc formula, cost of equity calculation, weighted average cost of capital"
  },
  [ToolType.ACADEMY_GREEKS_GUIDE]: {
    title: "Options Greeks Explained: Delta, Theta, Vega, Gamma",
    desc: "Delta, gamma, theta and vega explained with one Black-Scholes example option, a time-decay table, position Greeks and a pre-trade checklist for beginners.",
    keywords: "options greeks explained, delta theta vega gamma, options greeks tutorial, what is delta, theta decay, vega volatility, gamma risk"
  },
  [ToolType.ACADEMY_SAFE_HARBOR]: {
    title: "Safe Harbor Rules for Estimated Taxes (2026)",
    desc: "Avoid IRS underpayment penalties in 2026: the 100%/110% prior-year and 90% current-year safe harbor tests, $1,000 rule, worked examples and exceptions.",
    keywords: "irs safe harbor rules, estimated tax penalty avoidance, quarterly tax guide, safe harbor tax strategy, freelance tax planning"
  },
  [ToolType.ACADEMY_IRON_CONDOR]: {
    title: "Iron Condor Strategy: Max Loss, Breakevens, Examples",
    desc: "How an iron condor works: a worked example with max profit, max loss (width minus credit x 100), breakevens, strike and width choices, and managing risk.",
    keywords: "iron condor strategy, iron condor guide, neutral options strategy, theta decay trading, credit spread strategy, options income"
  },
  [ToolType.ACADEMY_STATE_TAX_COMPARISON]: {
    title: "California vs Texas Take-Home Pay on $100K (2026)",
    desc: "How much more does a $100,000 salary take home in Texas than California? A step-by-step 2026 comparison of income tax, SDI, property tax and sales tax.",
    keywords: "california vs texas salary, state tax comparison, take home pay by state, best states for taxes, tax migration, no income tax states"
  },
  [ToolType.BLOG_CTC_2025]: {
    title: "Child Tax Credit 2026: $2,200 Per Child Explained",
    desc: "The 2026 Child Tax Credit is $2,200 per child with up to $1,700 refundable. Learn the SSN rules, $200k/$400k phase-outs and worked ACTC refund examples.",
    keywords: "child tax credit 2025, ctc guide, tax credits"
  },
  [ToolType.BLOG_ACA_FREELANCERS]: {
    title: "ACA Health Insurance for Freelancers 2026",
    desc: "2026 ACA guide for freelancers: enhanced subsidies expired, the 400% FPL cliff is back. Premium tax credit math, Medicaid, CSR and MAGI strategies.",
    keywords: "aca freelancers, health insurance subsidy, marketplace plan"
  },
  [ToolType.BLOG_QUARTERLY_TAX]: {
    title: "Quarterly Estimated Taxes Guide 2026 - Deadlines & Payments",
    desc: "Complete guide to quarterly estimated taxes with deadlines and penalty avoidance.",
    keywords: "quarterly estimated taxes, tax deadlines 2026"
  },
  [ToolType.BLOG_SE_TAX]: {
    title: "Self-Employment Tax 2026: Rates, Deductions & Tips",
    desc: "Break down self-employment tax rates and strategies to reduce liability.",
    keywords: "self employment tax guide, se tax 2026"
  },
  [ToolType.BLOG_TAX_DEDUCTIONS]: {
    title: "Tax Deductions for Freelancers 2026: Full Guide",
    desc: "2026 freelancer write-offs: 72.5¢ mileage, home office, 100% bonus depreciation, health insurance, SEP/Solo 401(k) and QBI, with worked tax examples.",
    keywords: "freelancer tax deductions, 1099 write offs"
  },
  [ToolType.BLOG_1099_W2]: {
    title: "1099 vs W-2 in 2026: Taxes, Benefits & Pay Compared",
    desc: "Compare 1099 contractor and W-2 employee pay in 2026: 15.3% self-employment tax, benefits value, the rate you need to break even, and worked scenarios.",
    keywords: "1099 vs w2, contractor vs employee"
  },
  [ToolType.BLOG_LLC_SOLE_PROP]: {
    title: "LLC vs Sole Proprietor 2026: Taxes, Costs, S-Corp",
    desc: "LLC vs sole proprietor for 2026: liability protection, state fees, and S-corp math with QBI included. See what an S-corp election really saves.",
    keywords: "llc vs sole proprietor, business structure"
  },
  [ToolType.BLOG_SEP_SOLO401K]: {
    title: "SEP-IRA vs Solo 401(k) 2026: Limits Compared",
    desc: "SEP-IRA vs Solo 401(k) for 2026: $72,000 limit, $24,500 deferral, catch-ups, Roth options and deadlines, with contribution math at every income.",
    keywords: "sep ira vs solo 401k, retirement contributions"
  },
  [ToolType.BLOG_HOME_OFFICE]: {
    title: "Home Office Deduction 2026: Simplified vs Regular",
    desc: "Home office deduction for 2026: $5/sq ft simplified method vs actual expenses, who qualifies, income limits, depreciation recapture and worked examples.",
    keywords: "home office deduction, tax write off"
  },
  [ToolType.BLOG_MORTGAGE_GUIDE]: {
    title: "Mortgage Calculator Guide 2026: PITI, PMI & Taxes",
    desc: "How a mortgage calculator works in 2026: PITI, PMI costs and removal, property taxes, the 28/36 rule, and worked payment examples you can check.",
    keywords: "mortgage calculator guide, piti, pmi"
  },
  [ToolType.BLOG_HOW_MUCH_HOUSE]: {
    title: "How Much House Can I Afford 2026 - Budget Rules",
    desc: "Learn affordability ratios and down payment considerations.",
    keywords: "how much house can i afford, affordability rule"
  },
  [ToolType.BLOG_DEBT_OR_INVEST]: {
    title: "Pay Off Debt or Invest? 2026 Guide & Calculator",
    desc: "Pay off debt or invest in 2026? Compare interest rates to expected returns, use 2026 401(k), IRA and HSA limits, and follow a clear priority order.",
    keywords: "pay off debt or invest, debt vs investing"
  },
  [ToolType.BLOG_TAKE_HOME_PAY]: {
    title: "How to Calculate Take Home Pay 2026 - Payroll Taxes",
    desc: "Guide to calculating net pay after taxes and deductions.",
    keywords: "take home pay, net pay calculation"
  },
  [ToolType.BLOG_CA_TX_TAKE_HOME]: {
    title: "$100k in California vs. Texas: 2026 Take-Home Pay",
    desc: "Compare take-home pay on a $100k salary in California vs. Texas using 2026 federal and FICA figures, plus housing costs that often matter even more.",
    keywords: "california vs texas take home pay, state taxes"
  },
  [ToolType.BLOG_BONUS_TAX]: {
    title: "Bonus Tax Myth: 22% Withholding vs What You Owe",
    desc: "Bonuses aren't taxed at a higher rate. Learn how 22% supplemental withholding and the aggregate method work, with 2026 examples of refunds and bills.",
    keywords: "bonus tax, withholding vs liability"
  },
  [ToolType.BLOG_OVERTIME_TAX]: {
    title: "Overtime Tax Myth: Why Your Check Got Hit Harder",
    desc: "Overtime isn't taxed higher, it's withheld higher. See why the paycheck shrinks and how it evens out at tax time.",
    keywords: "overtime tax myth, is overtime taxed more, overtime withholding, why is overtime taxed so much"
  },
  [ToolType.BLOG_RAISE_MOVE]: {
    title: "Is a $10,000 Raise Worth Moving For? 2026 Math",
    desc: "See what a $10k raise really nets after 2026 federal, FICA and state taxes, how much higher rent and moving costs eat into it, and your payback period.",
    keywords: "raise vs relocation, cost of living comparison"
  },
  [ToolType.BLOG_MAX_401K]: {
    title: "Maxing Out Your 401(k): The Real Take-Home Cost",
    desc: "A $24,500 401(k) contribution costs less than $24,500 of take-home pay. See 2026 limits and the real paycheck cost at $60k, $100k, $150k and $250k.",
    keywords: "max out 401k, take home pay impact"
  },
  [ToolType.BLOG_GROSS_NET]: {
    title: "Gross vs Net Pay: 2026 Paycheck Breakdown Explained",
    desc: "Why your paycheck is smaller than your salary: a line-by-line 2026 example of FICA, federal withholding, pre-tax benefits and state tax on $60,000.",
    keywords: "gross vs net pay, paycheck breakdown"
  },
  [ToolType.BLOG_FREELANCE_ESTIMATED]: {
    title: "Freelancer Estimated Taxes 2026: How Much to Save",
    desc: "How much should freelancers set aside for taxes in 2026? A step-by-step estimate, an $85,000 worked example, safe harbor rules and 2026 due dates.",
    keywords: "freelancer estimated taxes, quarterly taxes"
  },
  [ToolType.BLOG_FLORIDA_MOVE]: {
    title: "Moving to Florida: Real Tax Savings vs. NY & NJ",
    desc: "Estimate what leaving New York or New Jersey for Florida really saves: state tax, SALT offset, insurance costs, and the residency rules that make it stick.",
    keywords: "moving to florida, tax savings"
  },
  [ToolType.BLOG_PITI_EXPLAINED]: {
    title: "PITI Explained: What's in Your Mortgage Payment",
    desc: "PITI is principal, interest, taxes and insurance. See how escrow works, why fixed-rate payments still rise, and a $450,000 home payment line by line.",
    keywords: "piti explained, mortgage payment breakdown"
  },
  [ToolType.BLOG_POINTS_BREAK_EVEN]: {
    title: "Mortgage Points Break-Even Calculator Guide 2026",
    desc: "Should you buy mortgage points in 2026? Break-even math on a $400,000 loan, when points pay off, when to skip them, and how they're taxed.",
    keywords: "mortgage points break even"
  },
  [ToolType.BLOG_PMI_MATH]: {
    title: "PMI Removal Math: How to Drop PMI Faster",
    desc: "PMI often costs 0.3%–1.5% of the loan per year. See the 80% and 78% LTV rules, how extra payments speed removal, and how FHA MIP differs.",
    keywords: "pmi math guide, remove pmi"
  },
  [ToolType.BLOG_RENT_BUY_2026]: {
    title: "Rent vs Buy 2026: The 5% Rule Explained",
    desc: "Use the 5% rule to compare renting vs buying: price × 5% ÷ 12 vs rent. What the 5% covers, worked examples, and how to adjust it for 2026 rates.",
    keywords: "rent vs buy rule, 5 percent rule"
  },
  [ToolType.BLOG_500K_COST]: {
    title: "$500K House Monthly Cost at 6%, 7% and 8% Rates",
    desc: "What a $500,000 house costs per month at 5.5%–8% rates: principal, interest, full PITI, lifetime interest, and how higher rates shrink buying power.",
    keywords: "500k house monthly cost, rate sensitivity"
  },
  [ToolType.BLOG_BIWEEKLY]: {
    title: "Bi-Weekly Mortgage Payments: Real Interest Savings",
    desc: "Bi-weekly mortgage payments add one extra payment a year. See the interest saved by loan size and rate, the servicer catch, and a fee-free DIY version.",
    keywords: "biweekly mortgage payments, interest savings"
  },
  [ToolType.BLOG_FI_NUMBER]: {
    title: "What Is Your FI Number? The 25x Rule, Explained",
    desc: "Learn how to calculate your FI number with the 25x rule, when to use 28x–33x instead, and how taxes, inflation and Social Security change your target.",
    keywords: "fi number, financial independence"
  },
  [ToolType.BLOG_LEAN_FAT_FIRE]: {
    title: "LeanFIRE vs FatFIRE: Budgets, Targets and Timelines",
    desc: "Compare LeanFIRE and FatFIRE budgets, the portfolio each needs at 25x or 30x, how long each takes, and how 2026 ACA subsidy rules affect each path.",
    keywords: "lean fire vs fat fire, fire budget"
  },
  [ToolType.BLOG_FOUR_PERCENT]: {
    title: "Is the 4% Rule Dead? Safe Withdrawal Rates in 2026",
    desc: "What the 4% rule really says, why longer retirements and sequence risk challenge it, and how 3%–3.5% rates and flexible spending change your plan.",
    keywords: "4 percent rule, safe withdrawal rate"
  },
  [ToolType.BLOG_COAST_FIRE]: {
    title: "Coast FIRE: How Much You Need to Stop Saving",
    desc: "See how Coast FIRE works, the formula for your coast number, a table of targets by age and return, and the risks of coasting before you hit full FI.",
    keywords: "coast fire guide"
  },
  [ToolType.BLOG_COST_WAITING]: {
    title: "Cost of Waiting: Starting to Invest at 25 vs 35",
    desc: "Starting to invest at 25 vs 35 can cost $600K to $2M+ depending on returns. See the compound interest math, catch-up amounts, and what to do now.",
    keywords: "cost of waiting, compound interest"
  },
  [ToolType.BLOG_ROTH_TRAD_401K]: {
    title: "Roth vs Traditional 401(k): The Tax Bracket Bet",
    desc: "Roth or Traditional 401(k)? See the 2026 math behind the tax bracket bet, worked examples at 12%, 22% and 24%, bracket edges, and when to split.",
    keywords: "roth vs traditional 401k"
  },
  [ToolType.BLOG_SNOWBALL_AVALANCHE]: {
    title: "Snowball vs Avalanche: Which Saves More?",
    desc: "Snowball vs avalanche debt payoff compared with a worked example: total interest, payoff dates, when each method wins, and mistakes that slow you down.",
    keywords: "snowball vs avalanche"
  },
  [ToolType.BLOG_CAR_LOAN_72]: {
    title: "72-Month Car Loan: The True Cost Explained",
    desc: "What a 72-month car loan really costs: total interest vs 60 months, negative equity risk, the new car loan interest deduction and smarter ways to buy.",
    keywords: "72 month car loan cost"
  },
  [ToolType.BLOG_STUDENT_LOAN_REFI]: {
    title: "Student Loan Refinance Math: Is It Worth It?",
    desc: "Run the student loan refinance math: compare total interest by term, see which federal protections you give up, and learn when refinancing makes sense.",
    keywords: "student loan refinance math"
  },
  [ToolType.BLOG_CC_MIN_PAY]: {
    title: "Credit Card Minimum Payments: The 20-Year Trap",
    desc: "See why paying only the credit card minimum can take nearly 20 years, how minimum formulas work, and how a fixed payment can save thousands in interest.",
    keywords: "credit card minimum payments"
  },
  [ToolType.BLOG_ASSETS_LIABILITIES]: {
    title: "Assets vs. Liabilities: Calculate Your Net Worth",
    desc: "Learn what counts as an asset or liability, how to value your home, car and 401(k), and see a worked example that calculates true, after-tax net worth.",
    keywords: "assets vs liabilities"
  },
  [ToolType.BLOG_ORDER_OPS]: {
    title: "Financial Order of Operations: Where to Put $1 Next",
    desc: "A step-by-step order for your money: emergency fund, 401(k) match, high-interest debt, HSA, IRA and more, with 2026 contribution limits and an example.",
    keywords: "financial order of operations"
  },
  [ToolType.BLOG_INFLATION_MILLION]: {
    title: "What Will $1 Million Be Worth When You Retire?",
    desc: "See what $1 million buys after 10-30 years of inflation, the formula behind inflation calculators, and how to set an inflation-adjusted retirement goal.",
    keywords: "inflation calculator million worth"
  },
  [ToolType.BLOG_EMERGENCY_RULE]: {
    title: "The 6-Month Emergency Fund Rule: How Much Cash?",
    desc: "Size your emergency fund with the 6-month rule: what expenses count, a worked example, when to hold 3 or 12 months, and where to keep the cash.",
    keywords: "emergency fund rule"
  },
  [ToolType.BLOG_LATTE_FACTOR]: {
    title: "Latte Factor vs. Big Wins: What Builds Wealth",
    desc: "Does skipping coffee make you rich? Compare the latte factor with big wins in housing, cars and taxes, with 30-year math and a quick budget audit.",
    keywords: "latte factor vs big wins"
  },
  [ToolType.BLOG_DCF_RETAIL]: {
    title: "DCF Sensitivity Grid: Why One DCF Number Isn't Enough",
    desc: "See why the same company can be valued from $12M to $29M depending on WACC and growth, and how to read a sensitivity grid instead.",
    keywords: "dcf sensitivity analysis, dcf terminal value, how to pick wacc discount rate, dcf modeling for retail investors, dcf valuation range"
  },
  [ToolType.BLOG_LUMP_SUM_DCA]: {
    title: "Lump Sum vs Dollar-Cost Averaging: What Data Says",
    desc: "Lump sum beat dollar-cost averaging about two-thirds of the time historically. See worked examples, when DCA still makes sense, and a hybrid plan.",
    keywords: "lump sum vs dca"
  },
  [ToolType.BLOG_ROTH_TRADITIONAL]: {
    title: "Roth IRA vs Traditional IRA 2026: Which Is Better?",
    desc: "Roth IRA vs Traditional IRA for 2026: $7,500 limit, Roth income phase-outs, deduction rules, withdrawal rules, and worked examples by tax bracket.",
    keywords: "roth ira vs traditional ira"
  },
  [ToolType.BLOG_EMERGENCY_FUND]: {
    title: "How Much Emergency Fund Do I Need? 2026 Guide",
    desc: "Find your emergency fund target with the 3-6 month rule, a step-by-step expense method, worked examples, and where to keep the cash safely in 2026.",
    keywords: "how much emergency fund"
  },
  [ToolType.BLOG_FIRE_GUIDE]: {
    title: "FIRE Calculator 2026: Find Your Early Retirement Number",
    desc: "Calculate your FIRE number with the 4% rule, savings-rate timelines, 2026 401(k)/IRA/HSA limits, and the ACA subsidy cliff early retirees must plan around.",
    keywords: "fire calculator guide"
  },
  [ToolType.BLOG_BEST_RETIREMENT]: {
    title: "Best Retirement Calculator 2026: How to Choose One",
    desc: "How to choose a retirement calculator in 2026: compare tool types, features to look for, red flags, and why your return assumptions matter most.",
    keywords: "best retirement calculator"
  },
  [ToolType.BLOG_INVESTMENT_GUIDE]: {
    title: "Investment Calculator Guide 2026: Compound Growth",
    desc: "How an investment calculator works: compound interest, monthly SIP investing, the Rule of 72, and adjusting projections for inflation, fees and taxes.",
    keywords: "investment calculator guide"
  },
  [ToolType.BLOG_BEST_MORTGAGE]: {
    title: "Best Mortgage Calculator 2026: Features to Compare",
    desc: "What to look for in a mortgage calculator in 2026: full PITI, PMI, property tax and amortization, plus a 60-second test to check any calculator's math.",
    keywords: "best mortgage calculator"
  },
  [ToolType.BLOG_STUDENT_LOANS]: {
    title: "Student Loan Repayment Strategies 2026: RAP & More",
    desc: "Federal student loan repayment changed in 2026: the new RAP plan, the end of SAVE, IBR, PSLF, refinancing and faster payoff strategies, with examples.",
    keywords: "student loan repayment strategies"
  },
  [ToolType.BLOG_TAX_BRACKETS]: {
    title: "Tax Brackets 2026: Rates, Examples & Effective Rate",
    desc: "See the 2026 federal tax brackets for single and joint filers, marginal vs effective rates, and worked examples using the $16,100 standard deduction.",
    keywords: "tax brackets 2025"
  },
  [ToolType.BLOG_401K_VS_IRA]: {
    title: "401(k) vs IRA 2026: Limits, Match & Which to Fund First",
    desc: "Compare 401(k) and IRA rules for 2026: $24,500 vs $7,500 limits, catch-ups, employer match, Roth income limits, withdrawals, and the order to fund them.",
    keywords: "401k vs ira"
  },
  [ToolType.BLOG_BUDGETING]: {
    title: "Budgeting Guide 2026: 50/30/20, Zero-Based & More",
    desc: "Build a budget that works in 2026: the 50/30/20 rule, zero-based budgeting, the envelope method, worked $5,000 examples, and 2026 savings limits.",
    keywords: "budgeting guide 2025"
  },
  [ToolType.BLOG_NET_WORTH]: {
    title: "Net Worth Tracker Guide 2026: Track Real Wealth",
    desc: "Set up a simple net worth tracker: what to list, how often to update, a worked monthly example, and the metrics that show whether you're progressing.",
    keywords: "net worth tracker guide"
  },
  [ToolType.BLOG_EMI_GUIDE]: {
    title: "EMI Calculator Guide 2026: Formula, Examples, Savings",
    desc: "How to calculate loan EMI: the formula, worked examples, a tenure vs interest table, flat vs reducing rates, prepayment savings and an affordability test.",
    keywords: "loan emi calculator guide"
  },
  [ToolType.BLOG_LOAN_COMPARE]: {
    title: "Loan Comparison Guide 2026: APR, Fees & Refinance",
    desc: "Compare loan offers in 2026 by APR, fees and break-even. Worked examples show when paying points wins and why a 30-year refinance can cost more overall.",
    keywords: "loan comparison refinance guide"
  },
  [ToolType.BLOG_LIVING_COST]: {
    title: "Cost of Living Calculator Guide 2026: Compare Cities",
    desc: "Compare cities the right way: how cost of living indexes work, a worked example converting higher costs into the salary you need, and taxes to include.",
    keywords: "cost of living calculator guide"
  },
  [ToolType.BLOG_CURRENCY_CONVERTER]: {
    title: "Currency Converter Guide 2026: Rates, Markups, Fees",
    desc: "Understand the mid-market rate, spot exchange-rate markups and card fees, avoid dynamic currency conversion, and compare money transfer quotes by example.",
    keywords: "currency converter guide"
  },
  [ToolType.BLOG_GST_GUIDE]: {
    title: "GST Calculator Guide 2026: Inclusive vs Exclusive GST",
    desc: "Add or remove GST correctly: formulas, 2026 rates for Australia, NZ, Singapore, Canada and India, worked examples, input tax credits and invoice mistakes.",
    keywords: "gst calculator guide"
  },
  [ToolType.BLOG_CREDIT_CARD_PAYOFF]: {
    title: "Credit Card Payoff Guide 2026: Pick Your Strategy",
    desc: "A step-by-step credit card payoff plan for 2026: avalanche vs snowball, balance transfers, consolidation loans and extra payment tips, with real math.",
    keywords: "credit card payoff guide"
  },
  [ToolType.BLOG_MARKET_INSIGHTS]: {
    title: "AI Market Insights 2026: How to Fact-Check AI Output",
    desc: "Use AI market summaries responsibly: why AI output can be wrong, how to verify claims with BLS, Fed, BEA and SEC sources, and a simple weekly workflow.",
    keywords: "market insights guide"
  },
  [ToolType.BLOG_INVESTMENT_ACADEMY]: {
    title: "Index Funds & ETFs Guide 2026: Simple Portfolios",
    desc: "Learn how index funds and ETFs work, how fees compound, a simple three-fund portfolio, rebalancing with examples, and common investing mistakes.",
    keywords: "index funds etf guide"
  },
  [ToolType.BLOG_EXCEL_MODELER]: {
    title: "DCF Valuation Guide 2026: Simple Model, Worked Example",
    desc: "Build a simple DCF without Excel: project free cash flow, pick WACC, set terminal value and get a per-share value, plus sensitivity and a reverse DCF.",
    keywords: "dcf modeling guide"
  },
  [ToolType.BLOG_DRIP_GUIDE]: {
    title: "DRIP Calculator Guide 2026: How Reinvesting Compounds",
    desc: "See how dividend reinvestment (DRIP) compounds, with a worked 30-year example, 2026 qualified dividend tax rates, cost basis tips and mistakes to avoid.",
    keywords: "dividend reinvestment guide"
  },
  [ToolType.BLOG_DTI_GUIDE]: {
    title: "DTI Calculator Guide 2026: Ratios Lenders Want",
    desc: "How to calculate your debt-to-income ratio, what counts, the 28/36 rule, typical lender limits for conventional and FHA loans, and how to lower DTI.",
    keywords: "dti calculator guide"
  },
  [ToolType.BLOG_CRYPTO_WASH_SALE]: {
    title: "No Wash Sale Rule: Crypto Tax Loss Harvesting",
    desc: "Understand wash sale rules for crypto tax loss harvesting.",
    keywords: "crypto wash sale rule"
  },
  [ToolType.BLOG_CAPITAL_GAINS]: {
    title: "Capital Gains Tax Guide 2025",
    desc: "Overview of capital gains taxes and planning.",
    keywords: "capital gains tax guide"
  },
  [ToolType.BLOG_W4_MULTIPLE_JOBS]: {
    title: "W-4 Multiple Jobs Worksheet Explained (2026)",
    desc: "Three IRS-sanctioned ways to fill out a W-4 for two incomes: checkbox, worksheet, or estimator. A decision tree with worked examples from the 2026 IRS tables.",
    keywords: "w4 multiple jobs worksheet, how to fill out w4 two income household, w4 checkbox two jobs, multiple jobs worksheet w4 2026"
  },
  [ToolType.BLOG_REMOTE_WORK_TAXES]: {
    title: "Remote Work Taxes: Reciprocity & Convenience Rule",
    desc: "Working remotely for an out-of-state employer without moving can mean two states taxing the same paycheck. Reciprocity, the convenience-of-the-employer rule, and worked examples of each.",
    keywords: "remote work state taxes reciprocity, convenience of the employer rule, double state tax withholding remote work, working remotely different state than employer taxes"
  },
  [ToolType.BLOG_SECOND_JOB_BRACKET]: {
    title: "Second Job Taxes: Marginal vs Effective Rate",
    desc: "Taking a second job can push your combined income into a higher tax bracket, but that doesn't mean your first job's pay gets retaxed at the new rate. A worked example and a decision framework.",
    keywords: "marginal tax rate vs effective tax rate second job, is a second job worth it after taxes, tax bracket second job calculator, does a second job push you into a higher tax bracket"
  },
  [ToolType.BLOG_LOCAL_TAX_GAP]: {
    title: "The Local Tax Your Paycheck Calculator Might Be Missing",
    desc: "NYC, Yonkers, Philadelphia, Ohio's RITA cities, Denver and Kentucky's counties all tax paychecks on top of state and federal — and most calculators, including ours, only model state and federal. Real 2026 rates and the manual adjustment.",
    keywords: "local income tax by city, nyc paycheck local tax, does my paycheck calculator include city tax, philadelphia wage tax paycheck, ohio RITA municipal tax paycheck"
  },
  [ToolType.BLOG_NO_TAX_ON_TIPS]: {
    title: "No Tax on Tips 2026: What the Deduction Really Saves",
    desc: "The no-tax-on-tips deduction lets eligible workers deduct up to $25,000 of tips for 2025-2028. See what it saves, who qualifies, and why FICA applies.",
    keywords: "no tax on tips 2025, tip income tax deduction explained, is tip income taxed, OBBBA tips deduction"
  },
  [ToolType.BLOG_SS_REFUND]: {
    title: "Excess Social Security Refund When You Have Two Employers",
    desc: "Two employers can each withhold Social Security tax up to the same cap. Switch jobs mid-year and the combined excess is a real, missable refund on Schedule 3.",
    keywords: "excess social security tax withheld, social security tax refund multiple employers, schedule 3 line 11 social security, changed jobs social security overpayment, 2026 social security wage base"
  },
  [ToolType.BLOG_PAYROLL_GAP]: {
    title: "State Disability & Paid Leave Payroll Tax 2026",
    desc: "At least ten states withhold a separate payroll tax for disability and paid family leave insurance, on top of federal, state income tax and FICA. Real 2026 rates and wage caps for all ten, with worked examples for CA, NY, NJ, WA, CO and MA.",
    keywords: "state disability insurance payroll tax, CASDI 2026, NY PFL rate 2026, NJ TDI FLI rate, WA Cares Fund rate, colorado FAMLI rate, massachusetts PFML rate, connecticut paid leave rate, oregon paid leave rate, minnesota paid leave rate, paycheck calculator missing state disability tax"
  },
  [ToolType.BLOG_RSU_WITHHOLDING]: {
    title: "RSU 22% Withholding Trap: What You Really Owe",
    desc: "Employers withhold a flat 22% federal rate on RSU vests, but your real marginal rate can be 24%, 32% or 35%. Two worked examples show the gap, plus how to close it before it becomes a Q4 underpayment penalty.",
    keywords: "rsu tax withholding 22%, why is my rsu paycheck taxed so much, rsu withholding shortfall, supplemental wage withholding rate, rsu underpayment penalty"
  },
  [ToolType.BLOG_NET_WORTH_PERCENTILE]: {
    title: "Net Worth Percentile by Age: Where Do You Rank?",
    desc: "The Federal Reserve's own 2022 data shows homeowners had a median net worth 38x higher than renters. What the age-only percentile tables miss, and how to read your own number correctly.",
    keywords: "net worth percentile by age, net worth by age calculator, average net worth by age 2026, median net worth by age, homeowner vs renter net worth, am i rich for my age, net worth percentile calculator"
  },
  [ToolType.BLOG_HSA_VS_401K]: {
    title: "HSA vs 401(k): Why the HSA Saves More Tax (FICA)",
    desc: "401(k) contributions only reduce your income-tax wages. HSA contributions made through payroll also reduce your FICA wages, because they run through a Section 125 cafeteria plan. Worked examples at two income levels show the exact gap.",
    keywords: "hsa vs 401k tax savings, does hsa reduce fica tax, hsa fica exemption, section 125 cafeteria plan fica, hsa contribution limits 2026, pretax deduction order 401k hsa"
  },
  [ToolType.BLOG_MIDYEAR_MOVE]: {
    title: "Moved Mid-Year? Part-Year Resident Tax Guide 2026",
    desc: "Working in two states in the same year isn't just 'file two returns.' Many states tax your new-state income at a rate set by your full-year income, not just what you earned there. A worked example and a moving-week checklist.",
    keywords: "moved to new state mid year taxes, part year resident withholding two states, part year resident tax calculation, moving states mid year tax, part year resident California New York"
  },
  [ToolType.BLOG_INDEX]: {
    title: "QuantCurb Blog - Financial Planning Guides",
    desc: "Free guides to paycheck taxes, mortgages, retirement, FIRE and debt payoff, with worked examples and links to the matching QuantCurb calculator.",
    keywords: "financial planning blog, investing guides"
  },
  [ToolType.FAQ]: {
    title: "Financial Knowledge Base - FAQs",
    desc: "Plain-English answers to common questions about paycheck taxes, mortgages, retirement accounts, FIRE, budgeting and paying off debt.",
    keywords: "financial faq, knowledge base"
  },
  [ToolType.METHODOLOGY]: {
    title: "Methodology & Assumptions",
    desc: "How QuantCurb calculators work: the formulas, IRS and state tax data sources, and assumptions behind every result, so you can check our math.",
    keywords: "methodology, assumptions"
  },
  [ToolType.PRIVACY]: {
    title: "Privacy Policy",
    desc: "How QuantCurb handles your data: calculator inputs stay in your browser, plus how we use cookies, Google Analytics and Google AdSense ads.",
    keywords: "privacy policy"
  },
  [ToolType.TERMS]: {
    title: "Terms of Use",
    desc: "Terms for using QuantCurb: calculators give educational estimates from IRS and state sources, not tax, legal or financial advice. Verify before relying.",
    keywords: "terms of use, terms of service"
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
  },
  [ToolType.TAX_CALCULATORS_HUB]: {
    title: "Free Tax Calculators 2026 - Income, Quarterly & Credits",
    desc: "Free 2026 tax calculators: income tax, quarterly payments, Child Tax Credit, self-employment tax, and ACA subsidies, all in one place.",
    keywords: "free tax calculators, income tax calculator, quarterly tax calculator, child tax credit, self employment tax, aca subsidy calculator, 2026 tax tools, tax planning"
  },
  [ToolType.RETIREMENT_CALCULATORS_HUB]: {
    title: "Free Retirement Calculators 2026 - 401(k), IRA & FIRE",
    desc: "Plan retirement and financial independence with a full suite of tools. Compare 401(k), IRA, and Roth strategies, and find your FIRE number.",
    keywords: "free retirement calculators, 401k calculator, ira calculator, roth ira calculator, fire calculator, early retirement calculator, retirement planning tools 2026"
  },
  [ToolType.MORTGAGE_CALCULATORS_HUB]: {
    title: "Free Mortgage Calculators 2026 - PITI, PMI & More",
    desc: "Estimate mortgage payments, compare loans, and plan your home purchase with a full PITI breakdown and PMI calculations.",
    keywords: "free mortgage calculators, mortgage calculator, piti calculator, pmi calculator, property tax calculator, loan comparison calculator, mortgage payment calculator 2026"
  },
  [ToolType.INVESTMENT_CALCULATORS_HUB]: {
    title: "Free Investment Calculators 2026 - Compound Interest & SIP",
    desc: "Free 2026 investment calculators for compound interest, SIP investing, dividend reinvestment, and wealth projection, with full guides.",
    keywords: "investment calculators, free investment calculator, compound interest calculator, sip calculator, drip calculator, investment growth calculator, wealth calculator, investment calculator 2026"
  },
  [ToolType.MORTGAGE_CALCULATOR_COMPARISON]: {
    title: "Best Mortgage Calculator 2026: Features to Compare",
    desc: "What to look for in a mortgage calculator in 2026: full PITI, PMI, property tax and amortization, plus a 60-second test to check any calculator's math.",
    keywords: "best mortgage calculator, mortgage calculator comparison, best mortgage calculator 2026, quantcurb vs bankrate, mortgage calculator review, piti calculator comparison, free mortgage calculator"
  }
};

export const toolSlugs = Object.values(ToolType).filter((slug) => !slug.startsWith('blog/'));

import { ToolType } from '../types';

export const TOOL_METADATA: Record<ToolType, { title: string; desc: string; keywords: string }> = {
  [ToolType.DASHBOARD]: {
    title: "QuantCurb | Professional Financial Intelligence & AI Wealth Insights",
    desc: "Maximize your net worth with QuantCurb. Institutional-grade financial modeling, real-time market insights, and precision calculators for EMI, tax, and wealth growth.",
    keywords: "financial intelligence, wealth management, mortgage calculator, tax estimator"
  },
  [ToolType.NET_WORTH]: {
    title: "Net Worth Tracker - Professional Asset & Liability Balance Sheet",
    desc: "Track your private balance sheet with QuantCurb. Mark-to-market asset analysis, debt triage, and solvency grading for institutional-grade wealth tracking.",
    keywords: "net worth tracker, balance sheet, asset liability, wealth tracking"
  },
  [ToolType.EMERGENCY_FUND]: {
    title: "Emergency Fund Calculator - Survival Runway & Inflation Stress Test",
    desc: "Calculate your liquid safety net. Stress-test your survival runway against inflation and audit your term life insurance needs with Emergency Guard.",
    keywords: "emergency fund calculator, financial safety net, survival runway, inflation stress"
  },
  [ToolType.EMI_CALC]: {
    title: "How to Calculate EMI? Loan EMI Calculator 2025 with Extra Payment Savings",
    desc: "Calculate your loan EMI (Equated Monthly Installment) with our reducing balance calculator. Model principal prepayments and see how much interest you can save by paying extra each month.",
    keywords: "how to calculate emi, emi calculator, loan repayment calculator, interest savings calculator, prepayment calculator, what is emi"
  },
  [ToolType.MORTGAGE_CALC]: {
    title: "How to Calculate Mortgage Payment? PITI Calculator 2025 with PMI & Property Tax",
    desc: "Calculate your monthly mortgage payment with PITI breakdown (Principal, Interest, Taxes, Insurance), PMI calculations, and property tax rates for all 50 US states. See when PMI drops and plan your home purchase.",
    keywords: "how to calculate mortgage payment, mortgage calculator, piti calculator, what is piti, pmi calculator, property tax calculator, monthly mortgage payment, home loan calculator, mortgage calculator with pmi, mortgage calculator with property tax, mortgage calculator with hoa, mortgage calculator with extra payments, biweekly mortgage calculator, mortgage amortization calculator, fha loan calculator with pmi, va loan calculator, jumbo mortgage calculator, 15 year vs 30 year mortgage calculator, mortgage payoff calculator, how much house can i afford calculator, mortgage affordability calculator, mortgage points calculator, mortgage closing costs calculator, mortgage refinance calculator, first time home buyer mortgage calculator, when does pmi drop off calculator, mortgage payment breakdown, mortgage interest calculator, mortgage principal calculator, what is included in mortgage payment, how to calculate property tax on house, should i pay points on mortgage, is fha loan worth it, mortgage calculator by state, home loan payment calculator"
  },
  [ToolType.SALARY_CALC]: {
    title: "How Much Will I Take Home? Salary Calculator 2025 - Calculate Net Pay by State",
    desc: "Calculate your take-home pay after taxes with our salary calculator. Includes federal tax, state tax (all 50 states), FICA, 401(k) deductions, and pay frequency options for accurate net pay calculation.",
    keywords: "salary calculator, take home pay calculator, how much will i take home, salary calculator 2025, net pay calculator, after tax salary, paycheck calculator, take home pay by state, 401k calculator, tax estimator, salary after taxes, biweekly paycheck calculator, weekly paycheck calculator, how to calculate take home pay, salary after tax calculator, net pay calculator after taxes, hourly to salary calculator after tax, salary calculator with 401k, gross to net salary calculator, salary tax calculator by state, paycheck calculator with pre tax deductions, annual salary to monthly take home, 100k salary take home, 150k salary after taxes, 200k salary take home, how much is 80k after taxes, 75k salary take home, paycheck calculator california, paycheck calculator texas, paycheck calculator new york, paycheck calculator florida, how much tax on 100k salary, what is my take home pay, gross pay vs net pay, fica tax calculator, federal tax calculator, state tax calculator, california vs texas salary, new york vs florida take home pay"
  },
  [ToolType.INVESTMENT_CALC]: {
    title: "How to Calculate Investment Growth? SIP Calculator 2025 with Compound Interest",
    desc: "Calculate your investment growth with compound interest using our SIP calculator. Includes dividend reinvestment (DRIP), goal-based investing, and wealth projection to see how your investments grow over time.",
    keywords: "how to calculate investment growth, investment calculator, sip calculator, compound interest calculator, what is compound interest, wealth calculator, drip calculator, goal based investing, compound interest calculator monthly, investment return calculator, portfolio growth calculator, retirement investment calculator, monthly investment calculator, lump sum investment calculator, investment calculator with inflation, stock market return calculator, mutual fund calculator, index fund calculator, dividend reinvestment calculator, 401k growth calculator, roth ira growth calculator, investment doubling calculator, rule of 72 calculator, how much will my investment grow, how to calculate compound interest, how long to double investment, compound interest formula, how much should i invest monthly, what is a good investment return, lump sum vs dollar cost averaging, monthly vs annual investing, compound interest vs simple interest"
  },
  [ToolType.MARKET_INSIGHTS]: {
    title: "AI Market Pulse - Institutional vs Retail App Ecosystem Analysis",
    desc: "Compare Bloomberg and FactSet against Robinhood and Wise. Deep AI-driven analysis of the digital financial stack for professional workflows.",
    keywords: "market insights, fintech analysis, bloomberg vs robinhood, financial apps"
  },
  [ToolType.LOAN_COMPARE]: {
    title: "Loan Comparison Pro - Refinance Break-even & APR Matrix",
    desc: "Audit loan offers side-by-side. Calculate refinancing ROI, break-even periods, and the total interest delta between different debt structures.",
    keywords: "loan comparison, refinance calculator, apr comparison, debt audit"
  },
  [ToolType.LIVING_COST]: {
    title: "Cost of Living Calculator - Regional Budget & Efficiency Audit",
    desc: "Benchmark your monthly spend against regional COL indices. Audit your 50/30/20 budget efficiency for major US cities and states.",
    keywords: "cost of living, budget audit, 50 30 20 rule, regional cost"
  },
  [ToolType.CURRENCY_CONV]: {
    title: "Live Currency Converter - Interbank Rates & Forex Sentiment AI",
    desc: "Real-time interbank forex conversion. AI-powered market sentiment, 12-month volatility heatmaps, and zero-markup spread auditing.",
    keywords: "currency converter, forex rates, interbank rate, usd to inr, eur to usd"
  },
  [ToolType.GST_CALC]: {
    title: "GST Calculator - Professional Tax Invoicing & Compliance Hub",
    desc: "Accurate GST and VAT splitting for businesses. Handle inclusive and exclusive pricing with automated CGST, SGST, and IGST breakdowns.",
    keywords: "gst calculator, vat calculator, tax invoicing, business tax tool"
  },
  [ToolType.CREDIT_CARD_PAYOFF]: {
    title: "How Long to Pay Off Credit Card Debt? Avalanche vs Snowball Calculator 2025",
    desc: "Calculate how long it will take to pay off your credit card debt. Compare Avalanche vs Snowball methods, see total interest paid, and find the fastest strategy to become debt-free.",
    keywords: "how long to pay off credit card debt, credit card payoff calculator, avalanche vs snowball, debt payoff calculator, avalanche method, snowball method, balance transfer calculator"
  },
  [ToolType.FIRE_PLANNER]: {
    title: "What is My FIRE Number? Early Retirement Calculator 2025 with 4% Rule",
    desc: "Calculate your FIRE number for early retirement using the 4% rule. Includes Lean FIRE, Fat FIRE, Coast FIRE, Barista FIRE, and geographic arbitrage to plan your financial independence.",
    keywords: "what is my fire number, fire calculator, early retirement calculator, 4 percent rule calculator, 3 percent rule calculator, coast fire calculator, barista fire calculator, lean fire calculator, fat fire calculator, financial independence calculator, how much money do i need to fire, when can i retire early, how to calculate fire number, safe withdrawal rate calculator, retire at 40, retire at 45, retire at 50, retire at 55, early retirement with 1 million, early retirement with 500k, passive income retirement calculator, fire number by age, retirement age calculator, financial independence retire early, monte carlo retirement simulator, sequence of returns risk, how long until i can retire, retirement savings calculator by age, fire calculator with inflation, fire calculator with social security, early retirement calculator with pension, how much to retire comfortably, what age can i retire calculator, path to financial independence"
  },
  [ToolType.FREELANCE_PROFIT]: {
    title: "Freelance Hub - 1099 Net Profit & FTE Salary Equivalent Tool",
    desc: "Analyze your true hourly rate as a contractor. Factor in self-employment taxes, health insurance, and OpEx to find your salary equivalent.",
    keywords: "freelance calculator, 1099 taxes, self employment tax, contractor rate, how to calculate self employment tax, 1099 tax calculator, freelance income tax calculator, self employed tax calculator 2026, freelance hourly rate calculator, freelance pricing calculator, contractor tax calculator, gig worker tax calculator, uber tax calculator, doordash tax calculator, self employment tax rate calculator, freelance business expense calculator, home office deduction calculator, qbi deduction calculator, s corp tax savings calculator, llc vs sole proprietor calculator, how much tax do freelancers pay, how to calculate 1099 taxes, what is self employment tax rate, how much should i charge as a freelancer, what can freelancers deduct, should i form an llc as a freelancer, how to reduce self employment tax, 1099 vs w2 calculator, llc vs s corp for freelancers, sole proprietor vs llc, freelance vs employee taxes, freelance tax calculator by state"
  },
  [ToolType.INVESTMENT_ACADEMY]: {
    title: "Fund Academy - Mastering Index Funds, ETFs & REITs Strategy",
    desc: "Institutional grade ETF investing curriculum with market cycle insights and allocation backtesting.",
    keywords: "investment academy, index funds, etfs, reits strategy"
  },
  [ToolType.EXCEL_MODELER]: {
    title: "Excel Power Modeler - DCF & Financial Model Templates",
    desc: "Build discounted cash flow models with professional Excel templates and valuation logic.",
    keywords: "excel modeler, dcf model, financial modeling templates, dcf calculator, stock valuation calculator, discounted cash flow calculator, wacc calculator, terminal value calculator, free cash flow calculator, dcf valuation calculator, stock intrinsic value calculator, enterprise value calculator, equity value calculator, fcf projection calculator, how to calculate dcf, how to value a stock dcf, wacc calculator with beta, cost of equity calculator, cost of debt calculator, capm calculator, perpetuity growth method calculator, exit multiple calculator, fcff calculator, fcfe calculator, how to calculate dcf valuation, what is wacc formula, how to calculate terminal value, how to value a company using dcf, what is a good wacc, how to calculate free cash flow, how to calculate intrinsic value, what is enterprise value vs equity value, how to calculate cost of equity, dcf vs comparable companies, fcff vs fcfe, enterprise value vs equity value, wacc vs capm"
  },
  [ToolType.RETIREMENT_OPTIMIZER]: {
    title: "Retirement Optimizer - 401(k) and IRA Contribution Strategy",
    desc: "Optimize retirement contributions with tax-aware modeling and retirement readiness checkpoints.",
    keywords: "retirement optimizer, 401k contribution strategy, ira planning, retirement calculator, 401k calculator, roth ira calculator, how much to save for retirement, retirement savings calculator by age, 401k contribution calculator, roth vs traditional calculator, backdoor roth calculator, mega backdoor roth calculator, roth conversion calculator, retirement account optimizer, tax efficient retirement calculator, retirement withdrawal calculator, required minimum distribution calculator, rmd calculator, retirement tax calculator, social security retirement calculator, pension vs 401k calculator, how much should i contribute to 401k, should i do roth or traditional 401k, how much to retire comfortably, what is backdoor roth ira, how does mega backdoor roth work, when can i withdraw from 401k, what is roth conversion, roth vs traditional 401k, roth ira vs traditional ira, 401k vs ira, sep ira vs solo 401k"
  },
  [ToolType.DRIP_CALCULATOR]: {
    title: "Dividend Reinvestment Calculator - DRIP Growth Modeling",
    desc: "Model dividend reinvestment (DRIP) growth with dividend yield and stock appreciation assumptions.",
    keywords: "dividend reinvestment calculator, drip calculator, dividend growth"
  },
  [ToolType.CRYPTO_TAX_LOSS]: {
    title: "Crypto Tax Loss Harvester - No Wash Sale Strategy",
    desc: "Analyze crypto positions for loss harvesting and tax alpha opportunities.",
    keywords: "crypto tax loss harvesting, crypto wash sale, tax alpha"
  },
  [ToolType.CHILD_TAX_CREDIT]: {
    title: "Child Tax Credit Calculator - 2025 Eligibility & Refund Estimate",
    desc: "Estimate child tax credit eligibility and refunds with income and dependent inputs.",
    keywords: "child tax credit calculator, 2025 child tax credit, ctc calculator, child tax credit 2026, how much is child tax credit 2026, child tax credit eligibility calculator, child tax credit income limit, child tax credit phaseout calculator, additional child tax credit calculator, child tax credit per child, refundable child tax credit, child tax credit age limit, how to calculate child tax credit, will i get child tax credit, child tax credit modified agi calculator, how much is child tax credit, who qualifies for child tax credit, what is the income limit for child tax credit, at what income does child tax credit phase out, how many children qualify for ctc, is child tax credit refundable, how to claim child tax credit, child tax credit vs earned income credit, ctc vs eitc, child tax credit vs dependent care credit"
  },
  [ToolType.QUARTERLY_TAX]: {
    title: "Quarterly Estimated Tax Calculator - 2025 Safe Harbor",
    desc: "Plan quarterly tax payments with safe harbor rules and self-employment assumptions.",
    keywords: "quarterly tax calculator, estimated tax calculator, quarterly taxes calculator, how to calculate quarterly taxes, freelance quarterly tax calculator, self employed quarterly tax calculator, 1099 quarterly tax calculator, safe harbor quarterly tax calculator, quarterly estimated tax calculator irs, quarterly tax payment calculator, how much to pay quarterly taxes, quarterly tax deadline calculator, self employment tax quarterly calculator, estimated quarterly tax worksheet, how to avoid underpayment penalty, 110 percent safe harbor calculator, 100 percent prior year tax calculator, how to calculate quarterly taxes for self employed, do i need to pay quarterly taxes, when are quarterly taxes due, how much should i pay in quarterly taxes, what is safe harbor for taxes, how to avoid quarterly tax penalty, what happens if i miss quarterly taxes, how to pay quarterly estimated taxes, who needs to pay quarterly taxes, safe harbor vs 90 percent method, prior year method vs current year method, quarterly taxes by state, freelancer estimated taxes"
  },
  [ToolType.ACA_SUBSIDY]: {
    title: "ACA Health Insurance Subsidy Calculator - 2025 Marketplace Credits",
    desc: "Estimate ACA premium tax credits based on income and household size.",
    keywords: "aca subsidy calculator, premium tax credit, marketplace insurance, health insurance subsidy calculator, obamacare calculator, marketplace subsidy calculator, premium tax credit calculator, aca affordability calculator, health insurance marketplace calculator, obamacare subsidy calculator 2026, how much is aca subsidy, health insurance tax credit calculator, cobra vs aca calculator, early retirement health insurance calculator, how much is aca subsidy, who qualifies for aca subsidy, how to calculate aca subsidy, what income qualifies for obamacare subsidy, how does aca subsidy work, is aca subsidy based on gross income, aca vs cobra, marketplace vs employer insurance, silver plan vs gold plan, aca subsidy by state, health insurance marketplace by state, obamacare by state"
  },
  [ToolType.DTI_CALCULATOR]: {
    title: "Debt-to-Income Ratio Calculator - Mortgage Underwriting Benchmarks",
    desc: "Compute your DTI ratio to understand mortgage and loan qualification thresholds.",
    keywords: "dti calculator, debt to income ratio"
  },
  [ToolType.OPTIONS_STRATEGY_VISUALIZER]: {
    title: "Options Strategy Visualizer - Multi-Leg P&L Calculator with Greeks",
    desc: "Build and visualize multi-leg options strategies (Iron Condor, Bull Call Spread, Straddles). Interactive P&L diagrams, Greeks dashboard (Delta, Theta, Vega, Gamma), IV slider, and risk metrics. Mobile-optimized for traders on Robinhood and Webull.",
    keywords: "options strategy calculator, options visualizer, iron condor calculator, bull call spread, options greeks calculator, delta theta vega, options profit calculator, multi-leg options, options trading simulator, implied volatility"
  },
  [ToolType.VALUATION_ACADEMY]: {
    title: "Valuation Academy - Learn DCF, WACC, Options Greeks, and Tax Strategy",
    desc: "Master institutional-grade financial analysis with in-depth guides on DCF valuation, WACC calculation, options Greeks, iron condor strategies, safe harbor tax rules, and state tax comparisons. Educational content hub with 2,000+ words per guide.",
    keywords: "valuation academy, dcf guide, wacc explained, options greeks tutorial, financial education, stock valuation course, tax strategy guide"
  },
  [ToolType.ACADEMY_DCF_GUIDE]: {
    title: "DCF Valuation Complete Guide - How to Value Stocks Like Wall Street",
    desc: "Step-by-step guide to Discounted Cash Flow valuation. Learn FCF projection, terminal value calculation, WACC integration, and how to calculate intrinsic stock value using institutional methodology.",
    keywords: "dcf valuation guide, how to calculate dcf, discounted cash flow tutorial, stock valuation guide, terminal value explained, fcf projection, intrinsic value calculator"
  },
  [ToolType.ACADEMY_WACC_GUIDE]: {
    title: "WACC Explained - Weighted Average Cost of Capital Complete Guide",
    desc: "Master WACC calculation with our comprehensive guide. Learn CAPM formula, cost of equity, cost of debt, capital structure weighting, and how WACC impacts DCF valuation.",
    keywords: "wacc explained, cost of capital guide, capm calculator tutorial, wacc formula, cost of equity calculation, weighted average cost of capital"
  },
  [ToolType.ACADEMY_GREEKS_GUIDE]: {
    title: "Options Greeks Explained - Delta, Theta, Vega, Gamma for Beginners",
    desc: "Complete guide to options Greeks. Understand Delta (directional exposure), Theta (time decay), Vega (IV sensitivity), and Gamma (delta acceleration) with real examples and trading applications.",
    keywords: "options greeks explained, delta theta vega gamma, options greeks tutorial, what is delta, theta decay, vega volatility, gamma risk"
  },
  [ToolType.ACADEMY_SAFE_HARBOR]: {
    title: "IRS Safe Harbor Rules - Never Pay Estimated Tax Penalties Again",
    desc: "Complete guide to IRS safe harbor provisions for estimated taxes. Learn the 100%/110% prior year rule, 90% current year method, quarterly deadlines, and HYSA arbitrage strategy to optimize cash flow.",
    keywords: "irs safe harbor rules, estimated tax penalty avoidance, quarterly tax guide, safe harbor tax strategy, freelance tax planning"
  },
  [ToolType.ACADEMY_IRON_CONDOR]: {
    title: "Iron Condor Strategy Guide - Neutral Options Income Strategy",
    desc: "Learn how to trade iron condors for monthly income. Understand the 4-leg setup, Greeks profile, when to use (low IV, range-bound), exit rules, and strike selection for optimal probability of profit.",
    keywords: "iron condor strategy, iron condor guide, neutral options strategy, theta decay trading, credit spread strategy, options income"
  },
  [ToolType.ACADEMY_STATE_TAX_COMPARISON]: {
    title: "California vs Texas Take-Home Pay - State Tax Comparison 2026",
    desc: "Compare real take-home pay between high-tax and no-tax states. Analyze California vs Texas salary differences, housing costs, tax migration trends, and wealth-building impact over 10 years.",
    keywords: "california vs texas salary, state tax comparison, take home pay by state, best states for taxes, tax migration, no income tax states"
  },
  [ToolType.BLOG_CTC_2025]: {
    title: "Child Tax Credit 2025 Guide - Eligibility, Refunds, and Phaseouts",
    desc: "Learn how the 2025 Child Tax Credit works, who qualifies, and how to calculate refunds.",
    keywords: "child tax credit 2025, ctc guide, tax credits"
  },
  [ToolType.BLOG_ACA_FREELANCERS]: {
    title: "ACA Health Insurance for Freelancers 2025 - Subsidy Strategy",
    desc: "Understand ACA marketplace plans, subsidies, and income planning for freelancers.",
    keywords: "aca freelancers, health insurance subsidy, marketplace plan"
  },
  [ToolType.BLOG_QUARTERLY_TAX]: {
    title: "Quarterly Estimated Taxes Guide 2025 - Deadlines & Payments",
    desc: "Complete guide to quarterly estimated taxes with deadlines and penalty avoidance.",
    keywords: "quarterly estimated taxes, tax deadlines 2025"
  },
  [ToolType.BLOG_SE_TAX]: {
    title: "Self-Employment Tax Guide 2025 - Rates, Deductions, and Planning",
    desc: "Break down self-employment tax rates and strategies to reduce liability.",
    keywords: "self employment tax guide, se tax 2025"
  },
  [ToolType.BLOG_TAX_DEDUCTIONS]: {
    title: "Tax Deductions for Freelancers 2025 - Maximize Write-Offs",
    desc: "List of freelance tax deductions and documentation tips.",
    keywords: "freelancer tax deductions, 1099 write offs"
  },
  [ToolType.BLOG_1099_W2]: {
    title: "1099 vs W-2 Comparison 2025 - Pay, Benefits, and Taxes",
    desc: "Compare contractor and employee paychecks with tax differences.",
    keywords: "1099 vs w2, contractor vs employee"
  },
  [ToolType.BLOG_LLC_SOLE_PROP]: {
    title: "LLC vs Sole Proprietor 2025 - Which Structure Wins?",
    desc: "Compare LLC and sole proprietor structures for liability and taxes.",
    keywords: "llc vs sole proprietor, business structure"
  },
  [ToolType.BLOG_SEP_SOLO401K]: {
    title: "SEP IRA vs Solo 401(k) 2025 - Contribution Limits",
    desc: "Review SEP IRA and solo 401(k) contribution strategies.",
    keywords: "sep ira vs solo 401k, retirement contributions"
  },
  [ToolType.BLOG_HOME_OFFICE]: {
    title: "Home Office Deduction 2025 - Calculator & Requirements",
    desc: "How to claim the home office deduction and maximize write-offs.",
    keywords: "home office deduction, tax write off"
  },
  [ToolType.BLOG_MORTGAGE_GUIDE]: {
    title: "Mortgage Calculator Guide 2025 - PITI & PMI Explained",
    desc: "Understand mortgage calculator outputs, PMI thresholds, and PITI breakdowns.",
    keywords: "mortgage calculator guide, piti, pmi"
  },
  [ToolType.BLOG_HOW_MUCH_HOUSE]: {
    title: "How Much House Can I Afford 2025 - Budget Rules",
    desc: "Learn affordability ratios and down payment considerations.",
    keywords: "how much house can i afford, affordability rule"
  },
  [ToolType.BLOG_DEBT_OR_INVEST]: {
    title: "Pay Off Debt or Invest 2025 - Decision Framework",
    desc: "Balance debt payoff vs investing with interest rate comparisons.",
    keywords: "pay off debt or invest, debt vs investing"
  },
  [ToolType.BLOG_TAKE_HOME_PAY]: {
    title: "How to Calculate Take Home Pay 2025 - Payroll Taxes",
    desc: "Guide to calculating net pay after taxes and deductions.",
    keywords: "take home pay, net pay calculation"
  },
  [ToolType.BLOG_CA_TX_TAKE_HOME]: {
    title: "100k Salary: California vs Texas Take-Home Pay",
    desc: "Compare state tax impacts on a $100k salary.",
    keywords: "california vs texas take home pay, state taxes"
  },
  [ToolType.BLOG_BONUS_TAX]: {
    title: "Bonus Tax Myth - Withholding vs Real Liability",
    desc: "Understand bonus withholding and actual tax owed.",
    keywords: "bonus tax, withholding vs liability"
  },
  [ToolType.BLOG_RAISE_MOVE]: {
    title: "Raise vs Relocation: Cost of Living Comparison",
    desc: "See when a raise outweighs relocation costs.",
    keywords: "raise vs relocation, cost of living comparison"
  },
  [ToolType.BLOG_MAX_401K]: {
    title: "Max Out 401(k) Take-Home Pay Impact",
    desc: "How maxing 401(k) contributions changes net pay.",
    keywords: "max out 401k, take home pay impact"
  },
  [ToolType.BLOG_GROSS_NET]: {
    title: "Gross vs Net Pay - Paycheck Breakdown",
    desc: "Break down gross vs net pay and common deductions.",
    keywords: "gross vs net pay, paycheck breakdown"
  },
  [ToolType.BLOG_FREELANCE_ESTIMATED]: {
    title: "Freelancer Estimated Taxes Guide 2025",
    desc: "Plan quarterly estimated taxes as a freelancer.",
    keywords: "freelancer estimated taxes, quarterly taxes"
  },
  [ToolType.BLOG_FLORIDA_MOVE]: {
    title: "Moving to Florida: Sunshine Tax Savings",
    desc: "Estimate tax savings when relocating to Florida.",
    keywords: "moving to florida, tax savings"
  },
  [ToolType.BLOG_PITI_EXPLAINED]: {
    title: "PITI Explained - Mortgage Payment Breakdown",
    desc: "Understand principal, interest, taxes, and insurance.",
    keywords: "piti explained, mortgage payment breakdown"
  },
  [ToolType.BLOG_POINTS_BREAK_EVEN]: {
    title: "Mortgage Points Break-Even 2026",
    desc: "Calculate when mortgage points pay off.",
    keywords: "mortgage points break even"
  },
  [ToolType.BLOG_PMI_MATH]: {
    title: "PMI Math Guide - How to Remove PMI Faster",
    desc: "Learn how PMI works and removal strategies.",
    keywords: "pmi math guide, remove pmi"
  },
  [ToolType.BLOG_RENT_BUY_2026]: {
    title: "Rent vs Buy 5% Rule 2026",
    desc: "Use the 5% rule to compare renting vs buying.",
    keywords: "rent vs buy rule, 5 percent rule"
  },
  [ToolType.BLOG_500K_COST]: {
    title: "500k House Monthly Cost - Rate Sensitivity",
    desc: "See how interest rates affect monthly costs on a $500k home.",
    keywords: "500k house monthly cost, rate sensitivity"
  },
  [ToolType.BLOG_BIWEEKLY]: {
    title: "Biweekly Mortgage Payments - Interest Savings",
    desc: "Estimate interest savings from biweekly payments.",
    keywords: "biweekly mortgage payments, interest savings"
  },
  [ToolType.BLOG_FI_NUMBER]: {
    title: "FI Number Math - Financial Independence",
    desc: "Calculate your FI number and retirement targets.",
    keywords: "fi number, financial independence"
  },
  [ToolType.BLOG_LEAN_FAT_FIRE]: {
    title: "Lean FIRE vs Fat FIRE - Lifestyle Budget",
    desc: "Compare lean and fat FIRE budgets.",
    keywords: "lean fire vs fat fire, fire budget"
  },
  [ToolType.BLOG_FOUR_PERCENT]: {
    title: "4% Rule Debate - Safe Withdrawal Rates",
    desc: "Explore the 4% rule and withdrawal rate debate.",
    keywords: "4 percent rule, safe withdrawal rate"
  },
  [ToolType.BLOG_COAST_FIRE]: {
    title: "Coast FIRE Guide - How to Retire Early",
    desc: "Understand the Coast FIRE strategy.",
    keywords: "coast fire guide"
  },
  [ToolType.BLOG_COST_WAITING]: {
    title: "Cost of Waiting - Compound Interest",
    desc: "See the cost of delaying investing.",
    keywords: "cost of waiting, compound interest"
  },
  [ToolType.BLOG_ROTH_TRAD_401K]: {
    title: "Roth vs Traditional 401(k) Tax Bracket Bet",
    desc: "Compare Roth and traditional 401(k) strategies.",
    keywords: "roth vs traditional 401k"
  },
  [ToolType.BLOG_SNOWBALL_AVALANCHE]: {
    title: "Snowball vs Avalanche Debt Payoff",
    desc: "Compare debt payoff strategies.",
    keywords: "snowball vs avalanche"
  },
  [ToolType.BLOG_CAR_LOAN_72]: {
    title: "72-Month Car Loan True Cost",
    desc: "Understand the long-term cost of 72-month loans.",
    keywords: "72 month car loan cost"
  },
  [ToolType.BLOG_STUDENT_LOAN_REFI]: {
    title: "Student Loan Refinance Math",
    desc: "Calculate refinance savings for student loans.",
    keywords: "student loan refinance math"
  },
  [ToolType.BLOG_CC_MIN_PAY]: {
    title: "Credit Card Minimum Payments - 20 Year Trap",
    desc: "See how minimum payments extend repayment timelines.",
    keywords: "credit card minimum payments"
  },
  [ToolType.BLOG_ASSETS_LIABILITIES]: {
    title: "Assets vs Liabilities - True Net Worth",
    desc: "Define assets and liabilities to track net worth.",
    keywords: "assets vs liabilities"
  },
  [ToolType.BLOG_ORDER_OPS]: {
    title: "Financial Order of Operations",
    desc: "Prioritize financial decisions with the order of operations.",
    keywords: "financial order of operations"
  },
  [ToolType.BLOG_INFLATION_MILLION]: {
    title: "Inflation Calculator - Million Worth in Retirement",
    desc: "Measure the future value of $1M with inflation.",
    keywords: "inflation calculator million worth"
  },
  [ToolType.BLOG_EMERGENCY_RULE]: {
    title: "6-Month Emergency Fund Rule",
    desc: "Understand the 6-month emergency fund rule.",
    keywords: "emergency fund rule"
  },
  [ToolType.BLOG_LATTE_FACTOR]: {
    title: "Latte Factor vs Big Wins Wealth",
    desc: "Compare small spending cuts with major financial wins.",
    keywords: "latte factor vs big wins"
  },
  [ToolType.BLOG_DCF_RETAIL]: {
    title: "DCF Modeling for Retail Investors",
    desc: "Learn discounted cash flow modeling basics.",
    keywords: "dcf modeling for retail investors"
  },
  [ToolType.BLOG_LUMP_SUM_DCA]: {
    title: "Lump Sum vs Dollar Cost Averaging",
    desc: "Compare lump sum investing vs DCA.",
    keywords: "lump sum vs dca"
  },
  [ToolType.BLOG_ROTH_TRADITIONAL]: {
    title: "Roth IRA vs Traditional IRA 2025",
    desc: "Compare Roth and traditional IRA strategies.",
    keywords: "roth ira vs traditional ira"
  },
  [ToolType.BLOG_EMERGENCY_FUND]: {
    title: "How Much Emergency Fund Do I Need 2025",
    desc: "Calculate emergency fund sizing guidelines.",
    keywords: "how much emergency fund"
  },
  [ToolType.BLOG_FIRE_GUIDE]: {
    title: "FIRE Calculator Guide 2025",
    desc: "Guide to using the FIRE calculator.",
    keywords: "fire calculator guide"
  },
  [ToolType.BLOG_BEST_RETIREMENT]: {
    title: "Best Retirement Calculator 2025",
    desc: "Compare retirement calculator options and assumptions.",
    keywords: "best retirement calculator"
  },
  [ToolType.BLOG_INVESTMENT_GUIDE]: {
    title: "Investment Calculator Guide 2025",
    desc: "Learn how to model investment growth.",
    keywords: "investment calculator guide"
  },
  [ToolType.BLOG_BEST_MORTGAGE]: {
    title: "Best Mortgage Calculator 2025",
    desc: "Compare mortgage calculators and data inputs.",
    keywords: "best mortgage calculator"
  },
  [ToolType.BLOG_STUDENT_LOANS]: {
    title: "Student Loan Repayment Strategies 2025",
    desc: "Explore student loan repayment options.",
    keywords: "student loan repayment strategies"
  },
  [ToolType.BLOG_TAX_BRACKETS]: {
    title: "Tax Brackets Explained 2025",
    desc: "Understand federal tax brackets for 2025.",
    keywords: "tax brackets 2025"
  },
  [ToolType.BLOG_401K_VS_IRA]: {
    title: "401(k) vs IRA Comparison 2025",
    desc: "Compare retirement account options.",
    keywords: "401k vs ira"
  },
  [ToolType.BLOG_BUDGETING]: {
    title: "Budgeting Guide 2025",
    desc: "Learn practical budgeting steps and tools.",
    keywords: "budgeting guide 2025"
  },
  [ToolType.BLOG_NET_WORTH]: {
    title: "Net Worth Tracker Guide 2025",
    desc: "How to track net worth with tools.",
    keywords: "net worth tracker guide"
  },
  [ToolType.BLOG_EMI_GUIDE]: {
    title: "Loan EMI Calculator Guide 2025",
    desc: "Guide to EMI calculations and assumptions.",
    keywords: "loan emi calculator guide"
  },
  [ToolType.BLOG_LOAN_COMPARE]: {
    title: "Loan Comparison Refinance Guide 2025",
    desc: "Compare refinance offers side by side.",
    keywords: "loan comparison refinance guide"
  },
  [ToolType.BLOG_LIVING_COST]: {
    title: "Cost of Living Calculator Guide 2025",
    desc: "How to use cost of living calculators effectively.",
    keywords: "cost of living calculator guide"
  },
  [ToolType.BLOG_CURRENCY_CONVERTER]: {
    title: "Currency Converter Guide 2025",
    desc: "Guide to using currency converters and FX rates.",
    keywords: "currency converter guide"
  },
  [ToolType.BLOG_GST_GUIDE]: {
    title: "GST Tax Calculator Guide 2025",
    desc: "GST calculator usage and compliance tips.",
    keywords: "gst calculator guide"
  },
  [ToolType.BLOG_CREDIT_CARD_PAYOFF]: {
    title: "Credit Card Payoff Strategy Guide 2025",
    desc: "Guide to using the credit card payoff calculator.",
    keywords: "credit card payoff guide"
  },
  [ToolType.BLOG_MARKET_INSIGHTS]: {
    title: "AI Market Insights Guide 2025",
    desc: "Overview of market insights and AI signals.",
    keywords: "market insights guide"
  },
  [ToolType.BLOG_INVESTMENT_ACADEMY]: {
    title: "Index Funds & ETF Guide 2025",
    desc: "Guide to index funds, ETFs, and investing basics.",
    keywords: "index funds etf guide"
  },
  [ToolType.BLOG_EXCEL_MODELER]: {
    title: "DCF Valuation Modeling Guide 2025",
    desc: "Learn DCF valuation modeling steps and templates.",
    keywords: "dcf modeling guide"
  },
  [ToolType.BLOG_DRIP_GUIDE]: {
    title: "Dividend Reinvestment Calculator Guide 2025",
    desc: "How to use the dividend reinvestment calculator.",
    keywords: "dividend reinvestment guide"
  },
  [ToolType.BLOG_DTI_GUIDE]: {
    title: "DTI Calculator Guide 2025",
    desc: "Guide to debt-to-income ratio calculations.",
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
  [ToolType.BLOG_INDEX]: {
    title: "QuantCurb Blog - Financial Planning Guides",
    desc: "Browse the QuantCurb financial planning and investing guides.",
    keywords: "financial planning blog, investing guides"
  },
  [ToolType.FAQ]: {
    title: "Financial Knowledge Base - FAQs",
    desc: "Get answers to common financial planning questions.",
    keywords: "financial faq, knowledge base"
  },
  [ToolType.METHODOLOGY]: {
    title: "Methodology & Assumptions - QuantCurb",
    desc: "Learn about the assumptions and data sources behind QuantCurb models.",
    keywords: "methodology, assumptions"
  },
  [ToolType.PRIVACY]: {
    title: "Privacy Policy - QuantCurb",
    desc: "Read the QuantCurb privacy policy and data handling practices.",
    keywords: "privacy policy"
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
    title: "Free Tax Calculators 2025 - Income, Quarterly, Child Tax Credit & More",
    desc: "Calculate your 2025 taxes with QuantCurb's free tax calculators. Estimate income tax, quarterly payments, child tax credit, self-employment tax, and ACA subsidies. Simplify your tax planning now!",
    keywords: "free tax calculators, income tax calculator, quarterly tax calculator, child tax credit, self employment tax, aca subsidy calculator, 2025 tax tools, tax planning"
  },
  [ToolType.RETIREMENT_CALCULATORS_HUB]: {
    title: "Free Retirement Calculators 2025 - 401k, IRA, FIRE & Early Retirement Planning",
    desc: "Plan your financial independence and early retirement with our suite of high-fidelity retirement planning tools. Compare 401(k), IRA, Roth strategies, and calculate your FIRE number.",
    keywords: "free retirement calculators, 401k calculator, ira calculator, roth ira calculator, fire calculator, early retirement calculator, retirement planning tools 2025"
  },
  [ToolType.MORTGAGE_CALCULATORS_HUB]: {
    title: "Free Mortgage Calculators 2025 - PITI, PMI, Property Tax & Loan Comparison",
    desc: "Navigate home financing with confidence. Our suite of mortgage calculators helps you estimate payments, compare loans, and plan your home purchase with PITI breakdown and PMI calculations.",
    keywords: "free mortgage calculators, mortgage calculator, piti calculator, pmi calculator, property tax calculator, loan comparison calculator, mortgage payment calculator 2025"
  },
  [ToolType.INVESTMENT_CALCULATORS_HUB]: {
    title: "Free Investment Calculators Hub 2025: Compound Interest, SIP, DRIP & Wealth Projection",
    desc: "Complete collection of free investment calculators for 2025. Calculate compound interest, SIP investing, dividend reinvestment, and wealth projection. All tools are free and include comprehensive guides.",
    keywords: "investment calculators, free investment calculator, compound interest calculator, sip calculator, drip calculator, investment growth calculator, wealth calculator, investment calculator 2025"
  },
  [ToolType.MORTGAGE_CALCULATOR_COMPARISON]: {
    title: "Best Mortgage Calculator 2025: Complete Comparison - QuantCurb vs Bankrate vs Zillow",
    desc: "Compare the best mortgage calculators in 2025. Review QuantCurb, Bankrate, Zillow, NerdWallet, and other top tools. Find the perfect mortgage calculator with PITI, PMI, and property tax calculations.",
    keywords: "best mortgage calculator, mortgage calculator comparison, best mortgage calculator 2025, quantcurb vs bankrate, mortgage calculator review, piti calculator comparison, free mortgage calculator"
  }
};

export const toolSlugs = Object.values(ToolType).filter((slug) => !slug.startsWith('blog/'));

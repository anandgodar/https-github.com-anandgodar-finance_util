'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ToolType } from '../types';

interface BlogIndexProps {
  onNavigate?: (tool: ToolType) => void;
}

interface BlogPost {
  id: ToolType;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  icon: string;
}

const BlogIndex: React.FC<BlogIndexProps> = ({ onNavigate }) => {
  const router = useRouter();

  const handleNavigate = (tool: ToolType) => {
    if (onNavigate) {
      onNavigate(tool);
      return;
    }
    const path = tool === ToolType.DASHBOARD ? '/' : `/${tool}`;
    router.push(path);
  };
  useEffect(() => {
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "QuantCurb Financial Blog",
      "description": "Comprehensive financial guides, calculators, and expert insights for mortgages, taxes, retirement, and wealth management.",
      "url": "https://quantcurb.com/blog",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 65,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Complete Guide to Mortgage Calculator 2025",
            "url": "https://quantcurb.com/blog/mortgage-calculator-guide-2025"
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(blogSchema);
    script.id = 'blog-index-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('blog-index-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const blogPosts: BlogPost[] = [
    // New SEO Posts
    {
      id: ToolType.BLOG_MORTGAGE_GUIDE,
      title: "Complete Guide to Mortgage Calculator 2025: PITI, PMI, Property Tax & More",
      description: "Master mortgage calculations with our comprehensive 2025 guide. Learn PITI (Principal, Interest, Taxes, Insurance), PMI, property tax rates by state, and how to use a mortgage calculator.",
      category: "Home Buying",
      readTime: "15 min",
      date: "January 2026",
      icon: "🏡"
    },
    {
      id: ToolType.BLOG_HOW_MUCH_HOUSE,
      title: "How Much House Can I Afford? Complete 2025 Guide with Calculator",
      description: "Calculate how much house you can afford in 2025. Learn the 28/36 rule, debt-to-income ratios, down payment requirements, and find your perfect home price range.",
      category: "Home Buying",
      readTime: "12 min",
      date: "January 2026",
      icon: "💰"
    },
    {
      id: ToolType.BLOG_DEBT_OR_INVEST,
      title: "Should I Pay Off Debt or Invest? Complete 2025 Guide with Calculator",
      description: "Decide whether to pay off debt or invest your money in 2025. Learn the debt vs investment math, interest rate comparisons, and strategies to maximize your wealth.",
      category: "Financial Strategy",
      readTime: "14 min",
      date: "January 2026",
      icon: "📊"
    },
    {
      id: ToolType.BLOG_TAKE_HOME_PAY,
      title: "How to Calculate Take-Home Pay After Taxes: Complete 2025 Guide",
      description: "Learn how to calculate your take-home pay after taxes in 2025. Understand federal tax, state tax, FICA, 401k deductions, and use our salary calculator to get your exact net pay.",
      category: "Salary & Taxes",
      readTime: "13 min",
      date: "January 2026",
      icon: "💵"
    },
    {
      id: ToolType.BLOG_CA_TX_TAKE_HOME,
      title: "$100k in California vs. Texas: Where Does Your Dollar Go Further?",
      description: "Compare take-home pay, state taxes, and cost of living to see how a $100k salary stretches in California vs Texas.",
      category: "Salary & Taxes",
      readTime: "12 min",
      date: "February 2026",
      icon: "🌴"
    },
    {
      id: ToolType.BLOG_BONUS_TAX,
      title: "The \"Bonus Tax\" Myth: Why Your Bonus Is Withheld Differently",
      description: "Understand 22% bonus withholding vs actual tax liability and calculate your real bonus take-home pay.",
      category: "Salary & Taxes",
      readTime: "10 min",
      date: "February 2026",
      icon: "🎁"
    },
    {
      id: ToolType.BLOG_RAISE_MOVE,
      title: "Is a $10,000 Raise Worth Moving For? The Real Cost of Relocation",
      description: "Compare taxes, relocation expenses, and cost of living to see if a $10k raise is actually a net win.",
      category: "Career Moves",
      readTime: "11 min",
      date: "February 2026",
      icon: "🚚"
    },
    {
      id: ToolType.BLOG_MAX_401K,
      title: "How Maxing Out Your 401(k) Can Increase Take-Home Pay (Sort Of)",
      description: "See how 401(k) tax shielding lowers taxable income and makes the take-home hit smaller than expected.",
      category: "Retirement Planning",
      readTime: "9 min",
      date: "February 2026",
      icon: "🧮"
    },
    {
      id: ToolType.BLOG_GROSS_NET,
      title: "Gross vs. Net Pay: Why Your Paycheck Is Smaller Than You Think",
      description: "A beginner-friendly breakdown of FICA, Medicare, and state taxes that shrink your paycheck.",
      category: "Salary & Taxes",
      readTime: "10 min",
      date: "February 2026",
      icon: "🧾"
    },
    {
      id: ToolType.BLOG_FREELANCE_ESTIMATED,
      title: "The Freelancer’s Guide to Estimated Taxes: How Much Should You Set Aside?",
      description: "A 1099-friendly guide to quarterly taxes, safe harbor rules, and how much to save for the IRS.",
      category: "Tax Planning",
      readTime: "12 min",
      date: "February 2026",
      icon: "🧑‍💻"
    },
    {
      id: ToolType.BLOG_FLORIDA_MOVE,
      title: "Moving to Florida? The \"Sunshine Tax\" Savings Explained",
      description: "See how Florida's no-income-tax status changes your take-home pay compared to NY/NJ.",
      category: "Relocation",
      readTime: "10 min",
      date: "February 2026",
      icon: "🌞"
    },
    {
      id: ToolType.BLOG_PITI_EXPLAINED,
      title: "PITI Explained: Why Your Mortgage Payment Is Higher Than the Sticker Price",
      description: "Break down principal, interest, taxes, and insurance to understand your true monthly mortgage payment.",
      category: "Home Buying",
      readTime: "10 min",
      date: "February 2026",
      icon: "🏡"
    },
    {
      id: ToolType.BLOG_POINTS_BREAK_EVEN,
      title: "Should You Pay Points on Your Mortgage in 2026? A Break-Even Analysis",
      description: "See when buying down the rate makes sense and how long it takes to break even.",
      category: "Home Buying",
      readTime: "11 min",
      date: "February 2026",
      icon: "📉"
    },
    {
      id: ToolType.BLOG_PMI_MATH,
      title: "The Mathematics of PMI: How to Get Rid of It Faster",
      description: "Understand the 80% LTV rule and strategies to eliminate private mortgage insurance sooner.",
      category: "Home Buying",
      readTime: "10 min",
      date: "February 2026",
      icon: "🧮"
    },
    {
      id: ToolType.BLOG_RENT_BUY_2026,
      title: "Rent vs. Buy in 2026: The 5% Rule Explained",
      description: "Use the 5% rule to compare renting vs buying and make a smarter housing decision.",
      category: "Housing Strategy",
      readTime: "11 min",
      date: "February 2026",
      icon: "🏠"
    },
    {
      id: ToolType.BLOG_500K_COST,
      title: "What Does a $500,000 House Actually Cost per Month? (6%, 7%, and 8% Rates)",
      description: "See how interest rate changes affect monthly payments and buying power on a $500k home.",
      category: "Home Buying",
      readTime: "9 min",
      date: "February 2026",
      icon: "💸"
    },
    {
      id: ToolType.BLOG_BIWEEKLY,
      title: "Bi-Weekly Mortgage Payments: The \"Secret\" to Saving $50,000 in Interest",
      description: "Learn how 26 half-payments per year reduce interest and shorten your mortgage term.",
      category: "Debt & Loans",
      readTime: "9 min",
      date: "February 2026",
      icon: "🔁"
    },
    {
      id: ToolType.BLOG_FI_NUMBER,
      title: "What is Your \"FI Number\"? The Math Behind Financial Independence",
      description: "Understand the 25x rule and calculate the freedom number that fits your annual expenses.",
      category: "Financial Independence",
      readTime: "9 min",
      date: "February 2026",
      icon: "🔥"
    },
    {
      id: ToolType.BLOG_LEAN_FAT_FIRE,
      title: "LeanFIRE vs. FatFIRE: Which Lifestyle Can You Afford?",
      description: "Compare $40k vs $100k retirement lifestyles and see how the FI target changes.",
      category: "Financial Independence",
      readTime: "10 min",
      date: "February 2026",
      icon: "💎"
    },
    {
      id: ToolType.BLOG_FOUR_PERCENT,
      title: "The 4% Rule Is Dead? Why Safe Withdrawal Rates Are Changing",
      description: "Explore inflation and longevity risk and stress test different withdrawal rates.",
      category: "Financial Independence",
      readTime: "10 min",
      date: "February 2026",
      icon: "📈"
    },
    {
      id: ToolType.BLOG_COAST_FIRE,
      title: "Coast FIRE: How to \"Retire\" at 30 Without Stopping Work Completely",
      description: "Front-load investments and coast later with a lower-stress career path.",
      category: "Financial Independence",
      readTime: "9 min",
      date: "February 2026",
      icon: "🌊"
    },
    {
      id: ToolType.BLOG_COST_WAITING,
      title: "The Cost of Waiting: Why Starting at 25 vs. 35 Costs You $1 Million",
      description: "See the compounding gap and why delaying investments is so expensive.",
      category: "Investing",
      readTime: "9 min",
      date: "February 2026",
      icon: "⏳"
    },
    {
      id: ToolType.BLOG_ROTH_TRAD_401K,
      title: "Roth vs. Traditional 401(k): The Tax Bracket Bet",
      description: "Decide whether to pay taxes now or later by comparing Roth and Traditional 401(k) outcomes.",
      category: "Retirement Planning",
      readTime: "10 min",
      date: "February 2026",
      icon: "🧠"
    },
    {
      id: ToolType.BLOG_SNOWBALL_AVALANCHE,
      title: "Snowball vs. Avalanche: Which Debt Payoff Method Saves You More Money?",
      description: "Compare the math of avalanche vs snowball and find the payoff path that keeps you on track.",
      category: "Debt & Loans",
      readTime: "9 min",
      date: "February 2026",
      icon: "⚖️"
    },
    {
      id: ToolType.BLOG_CAR_LOAN_72,
      title: "The True Cost of a 72-Month Car Loan",
      description: "Understand how long-term auto loans inflate interest and keep you underwater longer.",
      category: "Debt & Loans",
      readTime: "8 min",
      date: "February 2026",
      icon: "🚗"
    },
    {
      id: ToolType.BLOG_STUDENT_LOAN_REFI,
      title: "Should You Refinance Your Student Loans? The Math You Need to Know",
      description: "See when a lower rate outweighs the loss of federal protections and forgiveness options.",
      category: "Debt & Loans",
      readTime: "10 min",
      date: "February 2026",
      icon: "🎓"
    },
    {
      id: ToolType.BLOG_CC_MIN_PAY,
      title: "Credit Card Minimum Payments: Why You Will Be in Debt for 20 Years",
      description: "Learn why 2% minimum payments keep you in debt and how a small extra payment changes the timeline.",
      category: "Debt & Loans",
      readTime: "9 min",
      date: "February 2026",
      icon: "🧾"
    },
    {
      id: ToolType.BLOG_ASSETS_LIABILITIES,
      title: "Assets vs. Liabilities: How to Calculate Your True Net Worth",
      description: "Learn the simple net worth formula and categorize assets vs liabilities correctly.",
      category: "Financial Planning",
      readTime: "9 min",
      date: "February 2026",
      icon: "💎"
    },
    {
      id: ToolType.BLOG_ORDER_OPS,
      title: "Where Should Your Next Dollar Go? The Financial Order of Operations",
      description: "Follow the emergency fund → match → high-interest debt flowchart for smarter money decisions.",
      category: "Financial Strategy",
      readTime: "10 min",
      date: "February 2026",
      icon: "🧭"
    },
    {
      id: ToolType.BLOG_INFLATION_MILLION,
      title: "Inflation Calculator: What $1 Million Will Be Worth When You Retire",
      description: "See how inflation erodes purchasing power and why future dollars feel smaller.",
      category: "Investing",
      readTime: "9 min",
      date: "February 2026",
      icon: "📉"
    },
    {
      id: ToolType.BLOG_EMERGENCY_RULE,
      title: "How Much Cash Should You Keep? The 6-Month Emergency Fund Rule",
      description: "Calculate a six-month safety net and adjust for your job stability.",
      category: "Financial Planning",
      readTime: "8 min",
      date: "February 2026",
      icon: "🛡️"
    },
    {
      id: ToolType.BLOG_LATTE_FACTOR,
      title: "The \"Latte Factor\" vs. Big Wins: What Actually Builds Wealth?",
      description: "Focus on housing, car, and tax wins before sweating small daily expenses.",
      category: "Financial Strategy",
      readTime: "8 min",
      date: "February 2026",
      icon: "☕"
    },
    {
      id: ToolType.BLOG_DCF_RETAIL,
      title: "DCF Modeling for Retail Investors: How to Value a Stock Like a Pro",
      description: "Bring Wall Street valuation tools to Main Street with a simple DCF framework.",
      category: "Investing",
      readTime: "10 min",
      date: "February 2026",
      icon: "📊"
    },
    {
      id: ToolType.BLOG_LUMP_SUM_DCA,
      title: "Lump Sum vs. Dollar Cost Averaging: What the Data Says",
      description: "Compare time-in-market vs smoothing risk and decide the right strategy.",
      category: "Investing",
      readTime: "9 min",
      date: "February 2026",
      icon: "📈"
    },
    {
      id: ToolType.BLOG_ROTH_TRADITIONAL,
      title: "Roth IRA vs Traditional IRA 2025: Which is Better? Complete Comparison",
      description: "Compare Roth IRA vs Traditional IRA in 2025. Learn contribution limits, tax benefits, withdrawal rules, and which retirement account is better for your situation.",
      category: "Retirement Planning",
      readTime: "15 min",
      date: "January 2026",
      icon: "🎯"
    },
    {
      id: ToolType.BLOG_EMERGENCY_FUND,
      title: "How Much Emergency Fund Do I Need? Complete 2025 Guide with Calculator",
      description: "Calculate how much emergency fund you need in 2025. Learn the 3-6 month rule, how to build your emergency fund, where to keep it, and use our calculator to find your perfect safety net.",
      category: "Financial Planning",
      readTime: "12 min",
      date: "January 2026",
      icon: "🛡️"
    },
    {
      id: ToolType.BLOG_FIRE_GUIDE,
      title: "FIRE Calculator: Calculate Your Early Retirement Number - Complete 2025 Guide",
      description: "Calculate your FIRE (Financial Independence Retire Early) number with our comprehensive guide. Learn the 4% rule, Lean FIRE vs Fat FIRE, and how to achieve financial independence.",
      category: "Early Retirement",
      readTime: "16 min",
      date: "January 2026",
      icon: "🔥"
    },
    {
      id: ToolType.BLOG_BEST_RETIREMENT,
      title: "Best Retirement Calculator 2025: Compare Top Tools & Find Your Perfect Match",
      description: "Compare the best retirement calculators in 2025. Review top tools including QuantCurb, Bankrate, NerdWallet, and find the perfect calculator for your retirement planning needs.",
      category: "Retirement Planning",
      readTime: "14 min",
      date: "January 2026",
      icon: "💎"
    },
    {
      id: ToolType.BLOG_INVESTMENT_GUIDE,
      title: "Complete Guide to Investment Calculator 2025: SIP, Compound Interest & Wealth Growth",
      description: "Master investment calculations with our comprehensive 2025 guide. Learn SIP investing, compound interest, inflation-adjusted returns, and how to use an investment calculator to project your wealth growth.",
      category: "Investing",
      readTime: "13 min",
      date: "January 2026",
      icon: "📈"
    },
    {
      id: ToolType.BLOG_BEST_MORTGAGE,
      title: "Best Mortgage Calculator 2025: Compare Top Tools & Features",
      description: "Compare the best mortgage calculators in 2025. Review top tools including QuantCurb, Bankrate, Zillow, and find the perfect calculator with PITI, PMI, and property tax calculations.",
      category: "Home Buying",
      readTime: "12 min",
      date: "January 2026",
      icon: "🏠"
    },
    {
      id: ToolType.BLOG_STUDENT_LOANS,
      title: "Student Loan Repayment Strategies 2025: Complete Guide to Paying Off Student Debt",
      description: "Master student loan repayment in 2025. Learn about income-driven repayment plans (SAVE, PAYE, IBR), loan forgiveness programs (PSLF), refinancing strategies, and how to pay off student debt faster.",
      category: "Debt Management",
      readTime: "18 min",
      date: "January 2026",
      icon: "🎓"
    },
    {
      id: ToolType.BLOG_TAX_BRACKETS,
      title: "Tax Brackets Explained 2025: Complete Guide to Federal Income Tax Rates",
      description: "Understand 2025 federal tax brackets and how progressive taxation works. Learn effective vs marginal tax rate, tax bracket calculations, and how to reduce your tax bill legally.",
      category: "Tax Planning",
      readTime: "16 min",
      date: "January 2026",
      icon: "💰"
    },
    {
      id: ToolType.BLOG_CRYPTO_WASH_SALE,
      title: "Why Crypto Tax Loss Harvesting is 10X Better Than Stocks: The No Wash Sale Rule Loophole",
      description: "Learn how the no wash sale rule for crypto lets you harvest losses, rebuy immediately, and cut your tax bill without losing exposure.",
      category: "Tax Planning",
      readTime: "20 min",
      date: "February 2026",
      icon: "🪙"
    },
    {
      id: ToolType.BLOG_401K_VS_IRA,
      title: "401(k) vs IRA 2025: Complete Comparison Guide - Which Retirement Account is Better?",
      description: "Compare 401(k) vs IRA in 2025. Learn contribution limits, employer match, tax benefits, withdrawal rules, and which retirement account is better for your situation.",
      category: "Retirement Planning",
      readTime: "17 min",
      date: "January 2026",
      icon: "🎯"
    },
    {
      id: ToolType.BLOG_BUDGETING,
      title: "Complete Budgeting Guide 2025: 50/30/20 Rule, Zero-Based Budgeting & More",
      description: "Master budgeting in 2025 with our complete guide. Learn the 50/30/20 rule, zero-based budgeting, envelope method, and proven strategies to take control of your finances.",
      category: "Financial Planning",
      readTime: "19 min",
      date: "January 2026",
      icon: "📊"
    },
    {
      id: ToolType.BLOG_NET_WORTH,
      title: "Net Worth Tracker Guide 2025: How to Track Assets, Debts, and Real Wealth",
      description: "Learn how to calculate net worth, track assets and liabilities, and build a simple monthly tracking habit.",
      category: "Financial Planning",
      readTime: "12 min",
      date: "February 2026",
      icon: "💎"
    },
    {
      id: ToolType.BLOG_EMI_GUIDE,
      title: "Loan EMI Calculator Guide 2025: How to Calculate EMI and Save Interest",
      description: "Break down EMI math, amortization, and practical ways to reduce total loan interest.",
      category: "Debt & Loans",
      readTime: "11 min",
      date: "February 2026",
      icon: "💳"
    },
    {
      id: ToolType.BLOG_LOAN_COMPARE,
      title: "Loan Comparison Guide 2025: Compare APR, Fees, and Refinance Break-Even",
      description: "Compare loan offers with APR, fees, and break-even analysis to pick the lowest total cost.",
      category: "Debt & Loans",
      readTime: "10 min",
      date: "February 2026",
      icon: "⚖️"
    },
    {
      id: ToolType.BLOG_CREDIT_CARD_PAYOFF,
      title: "Credit Card Payoff Guide 2025: Avalanche vs Snowball Strategy",
      description: "Choose the fastest credit card payoff strategy and build a debt-free plan that sticks.",
      category: "Debt & Loans",
      readTime: "11 min",
      date: "February 2026",
      icon: "✂️"
    },
    {
      id: ToolType.BLOG_DTI_GUIDE,
      title: "DTI Calculator Guide 2025: What Debt-to-Income Ratio Lenders Want",
      description: "Understand DTI ratios, the 28/36 rule, and how to improve mortgage approval odds.",
      category: "Home Buying",
      readTime: "10 min",
      date: "February 2026",
      icon: "🏦"
    },
    {
      id: ToolType.BLOG_LIVING_COST,
      title: "Cost of Living Calculator Guide 2025: Compare Cities and Build a Realistic Budget",
      description: "Compare city costs, plan a relocation budget, and understand the biggest expense categories.",
      category: "Lifestyle",
      readTime: "10 min",
      date: "February 2026",
      icon: "🌆"
    },
    {
      id: ToolType.BLOG_CURRENCY_CONVERTER,
      title: "Currency Converter Guide 2025: Live Rates, Fees, and Smart FX Tips",
      description: "Use live exchange rates, avoid FX fees, and convert money with confidence.",
      category: "Utilities",
      readTime: "9 min",
      date: "February 2026",
      icon: "🌍"
    },
    {
      id: ToolType.BLOG_GST_GUIDE,
      title: "GST Calculator Guide 2025: Inclusive vs Exclusive Pricing Made Simple",
      description: "Calculate GST accurately, split inclusive pricing, and avoid invoice mistakes.",
      category: "Business",
      readTime: "9 min",
      date: "February 2026",
      icon: "🧾"
    },
    {
      id: ToolType.BLOG_MARKET_INSIGHTS,
      title: "AI Market Insights Guide 2025: How to Read Signals Without the Noise",
      description: "Interpret macro signals, sentiment shifts, and trend confirmation with AI market insights.",
      category: "Investing",
      readTime: "9 min",
      date: "February 2026",
      icon: "🤖"
    },
    {
      id: ToolType.BLOG_INVESTMENT_ACADEMY,
      title: "Index Funds & ETFs Guide 2025: Build a Simple, Diversified Portfolio",
      description: "Learn index funds vs ETFs, diversification basics, and a simple portfolio blueprint.",
      category: "Investing",
      readTime: "12 min",
      date: "February 2026",
      icon: "🎓"
    },
    {
      id: ToolType.BLOG_EXCEL_MODELER,
      title: "DCF Valuation Guide 2025: Build a Simple Model Without Excel",
      description: "Understand cash flows, WACC, and terminal value with a clean DCF walkthrough.",
      category: "Investing",
      readTime: "12 min",
      date: "February 2026",
      icon: "📁"
    },
    {
      id: ToolType.BLOG_DRIP_GUIDE,
      title: "Dividend Reinvestment (DRIP) Guide 2025: Compounding Explained",
      description: "See how dividend reinvestment compounds and how to model long-term income growth.",
      category: "Investing",
      readTime: "10 min",
      date: "February 2026",
      icon: "💹"
    },
    // Tax & Freelancer Posts
    {
      id: ToolType.BLOG_CTC_2025,
      title: "Child Tax Credit 2025: Complete Guide to CTC, ACTC, and Tax Savings",
      description: "Comprehensive guide to the 2025 Child Tax Credit. Learn eligibility requirements, income phase-outs, how to claim the $2,000 CTC and $1,700 refundable ACTC.",
      category: "Tax Planning",
      readTime: "12 min",
      date: "January 2026",
      icon: "👶"
    },
    {
      id: ToolType.BLOG_QUARTERLY_TAX,
      title: "Quarterly Estimated Taxes 2025: Complete Guide for Freelancers & Self-Employed",
      description: "Master quarterly estimated taxes with our comprehensive 2025 guide. Learn safe harbor rules, payment deadlines, penalty avoidance, and exact calculations for freelancers.",
      category: "Tax Planning",
      readTime: "14 min",
      date: "January 2026",
      icon: "📅"
    },
    {
      id: ToolType.BLOG_ACA_FREELANCERS,
      title: "ACA Health Insurance for Freelancers 2025: Complete Guide to Subsidies & Marketplace",
      description: "Ultimate guide to ACA health insurance for freelancers, self-employed, and contractors in 2025. Master Premium Tax Credits, Medicaid expansion, and cost optimization strategies.",
      category: "Health Insurance",
      readTime: "16 min",
      date: "January 2026",
      icon: "🏥"
    },
    {
      id: ToolType.BLOG_SE_TAX,
      title: "Self-Employment Tax Guide 2025: Complete Schedule SE & Tax Calculation Guide",
      description: "Master self-employment tax in 2025. Understand the 15.3% SE tax rate, Schedule SE calculations, 92.35% rule, and how to minimize your tax burden.",
      category: "Tax Planning",
      readTime: "13 min",
      date: "January 2026",
      icon: "📋"
    },
    {
      id: ToolType.BLOG_TAX_DEDUCTIONS,
      title: "Tax Deductions for Freelancers 2025: Complete Write-Off Guide & Strategies",
      description: "Maximize your freelance tax deductions in 2025. Master home office deduction, mileage tracking, Section 179 equipment deduction, health insurance write-off, and more.",
      category: "Tax Planning",
      readTime: "15 min",
      date: "January 2026",
      icon: "✍️"
    },
    {
      id: ToolType.BLOG_1099_W2,
      title: "1099 vs W-2 in 2025: Complete Tax & Benefits Comparison for Contractors",
      description: "Understand the complete difference between 1099 independent contractor and W-2 employee status in 2025. Compare taxes, benefits, take-home pay, and legal classification rules.",
      category: "Employment",
      readTime: "14 min",
      date: "January 2026",
      icon: "💼"
    },
    {
      id: ToolType.BLOG_LLC_SOLE_PROP,
      title: "LLC vs Sole Proprietor 2025: Complete Tax & Legal Comparison Guide",
      description: "Comprehensive comparison of LLC vs Sole Proprietorship for freelancers and small business owners. Understand tax differences, liability protection, and which structure saves you the most money.",
      category: "Business Structure",
      readTime: "13 min",
      date: "January 2026",
      icon: "🏢"
    },
    {
      id: ToolType.BLOG_SEP_SOLO401K,
      title: "SEP-IRA vs Solo 401(k) 2025: Complete Contribution Limits & Comparison Guide",
      description: "Comprehensive comparison of SEP-IRA vs Solo 401(k) for self-employed individuals. Understand 2025 contribution limits, tax benefits, setup costs, and which retirement plan saves you the most money.",
      category: "Retirement Planning",
      readTime: "14 min",
      date: "January 2026",
      icon: "💎"
    },
    {
      id: ToolType.BLOG_HOME_OFFICE,
      title: "Home Office Deduction 2025: Complete Guide to Simplified vs Regular Method",
      description: "Comprehensive guide to claiming the home office deduction for self-employed individuals in 2025. Learn the simplified method ($5/sq ft), regular method, and audit-proof documentation.",
      category: "Tax Planning",
      readTime: "12 min",
      date: "January 2026",
      icon: "🏠"
    }
  ];

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-500 pb-24">
      {/* Hero Section */}
      <header className="space-y-6 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
          QuantCurb Financial Blog
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Expert financial guides, calculators, and insights for mortgages, taxes, retirement planning,
          and wealth management. Learn how to make smarter financial decisions with institutional-grade tools.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
          <span>📚 {blogPosts.length} Comprehensive Guides</span>
          <span>•</span>
          <span>💰 High-Value Financial Topics</span>
          <span>•</span>
          <span>📊 Interactive Calculators</span>
        </div>
        <p className="text-center text-slate-500 text-sm mt-2">
          Updated regularly with the latest 2025 tax laws, financial strategies, and calculator guides
        </p>
      </header>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition">
          All Posts
        </button>
        {categories.map(category => (
          <button
            key={category}
            className="px-6 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:bg-indigo-50 hover:border-indigo-300 transition"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => handleNavigate(post.id)}
            className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl group-hover:scale-110 transition-transform">
                {post.icon}
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold mb-3">
                  {post.category}
                </span>
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span>⏱️ {post.readTime} read</span>
                  <span>•</span>
                  <span>📅 {post.date}</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight">
              {post.title}
            </h2>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              {post.description}
            </p>
            
            <div className="flex items-center text-indigo-600 font-bold text-sm group-hover:gap-2 transition-all">
              Read Guide
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </article>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center">
        <h2 className="text-3xl font-black mb-4">Ready to Calculate Your Financial Future?</h2>
        <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
          Use our professional-grade financial calculators to make informed decisions about mortgages,
          taxes, retirement, and investments.
        </p>
        <button
          onClick={() => handleNavigate(ToolType.DASHBOARD)}
          className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition text-lg"
        >
          Explore All Calculators →
        </button>
      </section>
    </div>
  );
};

export default BlogIndex;

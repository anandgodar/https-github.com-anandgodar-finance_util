/**
 * HowTo Schema Definitions for SEO
 *
 * Pre-built HowTo structured data for key calculators to improve
 * Google search visibility and featured snippet eligibility.
 */

export interface HowToStep {
  name: string;
  text: string;
}

export interface HowToData {
  title: string;
  description: string;
  estimatedTime: string;
  steps: HowToStep[];
}

// ============================================================================
// MORTGAGE CALCULATOR - How to Calculate Monthly Mortgage Payment
// ============================================================================

export const mortgageCalculatorHowTo: HowToData = {
  title: 'How to Calculate Your Monthly Mortgage Payment',
  description: 'Learn how to calculate your monthly mortgage payment including principal, interest, property taxes, and insurance (PITI) using our free mortgage calculator.',
  estimatedTime: 'PT3M',
  steps: [
    {
      name: 'Enter the Home Price',
      text: 'Start by entering the purchase price of the home you want to buy. This is the total cost before any down payment. For example, if the home costs $400,000, enter 400000 in the home price field.'
    },
    {
      name: 'Input Your Down Payment',
      text: 'Enter your down payment amount or percentage. A 20% down payment ($80,000 on a $400,000 home) avoids PMI. First-time buyers may put down as little as 3-5%.'
    },
    {
      name: 'Set the Interest Rate',
      text: 'Enter the mortgage interest rate. Check current rates from multiple lenders. Even 0.25% difference significantly impacts total cost over 30 years.'
    },
    {
      name: 'Choose Your Loan Term',
      text: 'Select your loan term - typically 15 or 30 years. A 15-year term has higher payments but less total interest. A 30-year term has lower payments but more total interest paid.'
    },
    {
      name: 'Add Property Tax and Insurance',
      text: 'Enter your annual property tax rate (varies by state, typically 0.5%-2.5%) and annual homeowners insurance cost. These are included in your monthly PITI payment.'
    },
    {
      name: 'Review Your Results',
      text: 'View your monthly payment breakdown showing principal, interest, taxes, and insurance. See the amortization schedule to understand how payments apply over time. Compare different scenarios to find the best option.'
    }
  ]
};

// ============================================================================
// SALARY CALCULATOR - How to Calculate Take-Home Pay
// ============================================================================

export const salaryCalculatorHowTo: HowToData = {
  title: 'How to Calculate Your Take-Home Pay from Salary',
  description: 'Learn how to calculate your net take-home pay after federal taxes, state taxes, Social Security, Medicare, and other deductions from your gross salary.',
  estimatedTime: 'PT2M',
  steps: [
    {
      name: 'Enter Your Gross Salary',
      text: 'Enter your annual gross salary before any deductions. This is the total amount your employer pays you. If you know your hourly rate, multiply by 2080 (40 hours x 52 weeks) for annual salary.'
    },
    {
      name: 'Select Your Filing Status',
      text: 'Choose your tax filing status: Single, Married Filing Jointly, Married Filing Separately, or Head of Household. This determines your federal tax brackets and standard deduction.'
    },
    {
      name: 'Select Your State',
      text: 'Choose your state of residence. States like Texas, Florida, and Nevada have no state income tax. California and New York have higher rates. State taxes significantly affect take-home pay.'
    },
    {
      name: 'Enter Pre-Tax Deductions',
      text: 'Add any pre-tax deductions like 401(k) contributions, health insurance premiums, and HSA contributions. These reduce your taxable income and lower your tax bill.'
    },
    {
      name: 'Review Your Paycheck Breakdown',
      text: 'View your detailed paycheck breakdown showing federal tax, state tax, Social Security (6.2%), Medicare (1.45%), and net pay. See your effective tax rate and compare it to marginal rates.'
    }
  ]
};

// ============================================================================
// FIRE CALCULATOR - How to Calculate FIRE Number
// ============================================================================

export const fireCalculatorHowTo: HowToData = {
  title: 'How to Calculate Your FIRE Number for Early Retirement',
  description: 'Learn how to calculate your Financial Independence Retire Early (FIRE) number using the 25x rule and 4% safe withdrawal rate to determine when you can retire.',
  estimatedTime: 'PT4M',
  steps: [
    {
      name: 'Calculate Your Annual Expenses',
      text: 'Add up all your annual expenses: housing, food, transportation, healthcare, insurance, entertainment, and discretionary spending. Be thorough - this determines your FIRE target.'
    },
    {
      name: 'Apply the 25x Rule',
      text: 'Multiply your annual expenses by 25. This is your FIRE number. For example, $50,000 annual expenses x 25 = $1,250,000 needed to retire. This is based on the 4% safe withdrawal rate.'
    },
    {
      name: 'Enter Your Current Savings',
      text: 'Enter your current retirement savings and investments including 401(k), IRA, brokerage accounts, and other invested assets. Exclude home equity and emergency funds.'
    },
    {
      name: 'Set Your Monthly Contribution',
      text: 'Enter how much you save and invest each month. Higher savings rates dramatically reduce time to FIRE. Aim for 25-50%+ savings rate for early retirement.'
    },
    {
      name: 'Adjust Expected Returns',
      text: 'Set your expected annual investment return. Historical stock market average is 7-10%. Use conservative estimates (6-7%) for planning. Account for inflation.'
    },
    {
      name: 'Review Your FIRE Timeline',
      text: 'See when you can reach FIRE with projections for Lean FIRE (minimal expenses), regular FIRE, Fat FIRE (comfortable lifestyle), and Coast FIRE (stop saving, let compound growth finish).'
    }
  ]
};

// ============================================================================
// EMI CALCULATOR - How to Calculate Loan EMI
// ============================================================================

export const emiCalculatorHowTo: HowToData = {
  title: 'How to Calculate Your Loan EMI (Equated Monthly Installment)',
  description: 'Learn how to calculate EMI for any loan - home loan, car loan, personal loan, or education loan. Understand the EMI formula and how interest rate and tenure affect your payment.',
  estimatedTime: 'PT2M',
  steps: [
    {
      name: 'Enter the Loan Principal Amount',
      text: 'Enter the total loan amount you want to borrow. This is the principal before interest. For example, if you need a $25,000 car loan, enter 25000.'
    },
    {
      name: 'Input the Interest Rate',
      text: 'Enter the annual interest rate. Home loans are typically 6-8%, car loans 5-10%, personal loans 10-20%. Compare rates from multiple lenders before deciding.'
    },
    {
      name: 'Set the Loan Tenure',
      text: 'Choose your loan repayment period in months or years. Longer tenure means lower EMI but more total interest paid. Shorter tenure means higher EMI but less total interest.'
    },
    {
      name: 'View Your EMI Calculation',
      text: 'The calculator uses the formula: EMI = P x R x (1+R)^N / [(1+R)^N - 1], where P is principal, R is monthly interest rate, and N is number of months. See your exact EMI amount.'
    },
    {
      name: 'Analyze the Amortization Schedule',
      text: 'Review the month-by-month breakdown showing how each EMI splits between principal and interest. Early payments are mostly interest; later payments are mostly principal.'
    },
    {
      name: 'Compare Different Scenarios',
      text: 'Try different loan amounts, interest rates, and tenures to find the best option. See how prepayments can reduce total interest and loan duration.'
    }
  ]
};

// ============================================================================
// QUARTERLY TAX CALCULATOR - How to Calculate Estimated Taxes
// ============================================================================

export const quarterlyTaxCalculatorHowTo: HowToData = {
  title: 'How to Calculate Quarterly Estimated Tax Payments',
  description: 'Learn how to calculate and pay quarterly estimated taxes for self-employment income, freelance work, or other income without withholding. Avoid IRS underpayment penalties.',
  estimatedTime: 'PT3M',
  steps: [
    {
      name: 'Estimate Your Annual Income',
      text: 'Project your total annual income from self-employment, freelancing, 1099 work, investments, rental income, or other sources without tax withholding. Include all taxable income.'
    },
    {
      name: 'Calculate Self-Employment Tax',
      text: 'Self-employment tax is 15.3% (12.4% Social Security + 2.9% Medicare) on 92.35% of net self-employment income. This is in addition to income tax.'
    },
    {
      name: 'Estimate Income Tax',
      text: 'Calculate federal income tax based on your projected taxable income and filing status. Add state income tax if applicable. Account for deductions like QBI, home office, and business expenses.'
    },
    {
      name: 'Apply Safe Harbor Rules',
      text: 'To avoid penalties, pay at least 90% of current year tax liability OR 100% of last year tax (110% if AGI over $150,000). Safe harbor protects you even if you underpay.'
    },
    {
      name: 'Divide by Four Quarters',
      text: 'Divide your total estimated tax by 4 for equal quarterly payments. Due dates: April 15, June 15, September 15, January 15. Mark your calendar to avoid late penalties.'
    },
    {
      name: 'Pay Using IRS Direct Pay or EFTPS',
      text: 'Pay federal estimated taxes online via IRS Direct Pay or EFTPS. Use Form 1040-ES vouchers for mail payments. Pay state estimated taxes through your state tax authority website.'
    }
  ]
};

// ============================================================================
// FREELANCE PROFIT CALCULATOR - How to Calculate Freelance Taxes
// ============================================================================

export const freelanceProfitHowTo: HowToData = {
  title: 'How to Calculate Freelance Taxes and Self-Employment Tax',
  description: 'Learn how to calculate taxes as a freelancer or independent contractor, including self-employment tax, income tax, and deductions to maximize your take-home profit.',
  estimatedTime: 'PT3M',
  steps: [
    {
      name: 'Calculate Gross Freelance Income',
      text: 'Add all your 1099-NEC income from clients, plus any cash payments. This is your gross self-employment income before expenses and taxes.'
    },
    {
      name: 'Subtract Business Expenses',
      text: 'Deduct legitimate business expenses: home office (simplified or actual method), equipment, software, professional development, marketing, business travel, health insurance premiums, and retirement contributions.'
    },
    {
      name: 'Calculate Self-Employment Tax',
      text: 'SE tax is 15.3% on 92.35% of net self-employment earnings. You can deduct half of SE tax from income. For $100K net income: $100K x 92.35% x 15.3% = $14,130 SE tax.'
    },
    {
      name: 'Calculate Federal Income Tax',
      text: 'Apply federal tax brackets to your taxable income (gross - expenses - adjustments). Freelancers may qualify for 20% QBI deduction on qualified business income.'
    },
    {
      name: 'Add State Income Tax',
      text: 'Calculate state income tax based on your state rates. Some states (TX, FL, NV, WA) have no income tax. High-tax states (CA, NY) can take 10%+ of income.'
    },
    {
      name: 'Review Net Profit and Effective Tax Rate',
      text: 'See your total tax burden, effective tax rate, and actual take-home profit. Compare 1099 vs W2 equivalent to understand the true cost of self-employment.'
    }
  ]
};

// ============================================================================
// INVESTMENT CALCULATOR - How to Calculate Investment Growth
// ============================================================================

export const investmentCalculatorHowTo: HowToData = {
  title: 'How to Calculate Investment Growth with Compound Interest',
  description: 'Learn how to project investment growth using compound interest calculator. See how initial investment, monthly contributions, time horizon, and returns affect your wealth.',
  estimatedTime: 'PT2M',
  steps: [
    {
      name: 'Enter Your Initial Investment',
      text: 'Enter the lump sum amount you are starting with. This could be savings, an inheritance, bonus, or any initial capital you want to invest.'
    },
    {
      name: 'Set Monthly Contributions',
      text: 'Enter how much you will invest each month. Consistent contributions significantly boost long-term growth through dollar-cost averaging. Even $500/month compounds substantially over decades.'
    },
    {
      name: 'Choose Your Time Horizon',
      text: 'Set your investment timeframe in years. Longer time horizons allow more compounding. For retirement, calculate years until you need the money.'
    },
    {
      name: 'Set Expected Annual Return',
      text: 'Enter expected annual return. Historical stock market average is 10% nominal, 7% inflation-adjusted. Bond returns average 4-6%. Use conservative estimates for planning.'
    },
    {
      name: 'Account for Inflation',
      text: 'Factor in inflation (historically 3% average) to see real purchasing power of future wealth. The calculator shows both nominal and inflation-adjusted projections.'
    },
    {
      name: 'Analyze Growth Projections',
      text: 'Review year-by-year projections showing total contributions vs investment growth. See how compound interest accelerates over time - most growth happens in later years.'
    }
  ]
};

// ============================================================================
// DTI CALCULATOR - How to Calculate Debt-to-Income Ratio
// ============================================================================

export const dtiCalculatorHowTo: HowToData = {
  title: 'How to Calculate Your Debt-to-Income (DTI) Ratio',
  description: 'Learn how to calculate your debt-to-income ratio for mortgage qualification. Understand what DTI lenders look for and how to improve your ratio for loan approval.',
  estimatedTime: 'PT2M',
  steps: [
    {
      name: 'Calculate Monthly Gross Income',
      text: 'Add all monthly income sources before taxes: salary, wages, bonuses, commissions, rental income, alimony, and other regular income. Use gross (pre-tax) amounts.'
    },
    {
      name: 'Add Monthly Debt Payments',
      text: 'List all monthly debt obligations: mortgage/rent, car payments, student loans, credit card minimums, personal loans, child support, and alimony payments.'
    },
    {
      name: 'Calculate Front-End DTI',
      text: 'Divide monthly housing costs (mortgage, taxes, insurance, HOA) by gross monthly income. Multiply by 100 for percentage. Lenders prefer front-end DTI under 28%.'
    },
    {
      name: 'Calculate Back-End DTI',
      text: 'Divide total monthly debts (housing + all other debts) by gross monthly income. Multiply by 100. Most lenders want back-end DTI under 36%, though some allow up to 43-50%.'
    },
    {
      name: 'Understand DTI Requirements',
      text: 'Conventional loans typically require DTI under 43%. FHA allows up to 50% with compensating factors. Lower DTI means better rates and higher approval chances.'
    },
    {
      name: 'Improve Your DTI Ratio',
      text: 'Lower DTI by paying down debt, increasing income, or reducing the home price you are targeting. Even small improvements in DTI can significantly affect mortgage approval.'
    }
  ]
};

// ============================================================================
// CREDIT CARD PAYOFF - How to Pay Off Credit Card Debt
// ============================================================================

export const creditCardPayoffHowTo: HowToData = {
  title: 'How to Calculate Credit Card Payoff Time and Interest',
  description: 'Learn how to calculate how long it takes to pay off credit card debt and total interest paid. Compare minimum payments vs fixed payments and debt payoff strategies.',
  estimatedTime: 'PT2M',
  steps: [
    {
      name: 'Enter Your Credit Card Balance',
      text: 'Enter your current credit card balance. Include all cards if calculating total debt payoff. Average American carries $6,500 in credit card debt.'
    },
    {
      name: 'Input Your Interest Rate (APR)',
      text: 'Enter your card APR. Average credit card APR is 20-25%. Find your rate on your statement. Higher rates mean dramatically more interest paid over time.'
    },
    {
      name: 'Set Your Monthly Payment',
      text: 'Enter your planned monthly payment. Compare minimum payment (usually 2% of balance) vs fixed higher payments. Minimum payments can take 20+ years to pay off debt.'
    },
    {
      name: 'Calculate Payoff Timeline',
      text: 'See how long it takes to become debt-free at your payment amount. Calculate total interest paid. Doubling minimum payment can cut payoff time by 75%.'
    },
    {
      name: 'Compare Payoff Strategies',
      text: 'Compare debt avalanche (highest interest first) vs debt snowball (lowest balance first). Avalanche saves more money; snowball provides psychological wins. Choose based on your motivation style.'
    },
    {
      name: 'Consider Balance Transfer',
      text: 'Calculate savings from 0% APR balance transfer offers. Factor in transfer fees (typically 3-5%). Break-even analysis shows if transfer makes sense for your situation.'
    }
  ]
};

// ============================================================================
// DRIP CALCULATOR - How to Calculate Dividend Reinvestment
// ============================================================================

export const dripCalculatorHowTo: HowToData = {
  title: 'How to Calculate Dividend Reinvestment (DRIP) Growth',
  description: 'Learn how to calculate compound growth from dividend reinvestment. See how DRIP accelerates wealth building through automatic share purchases and compounding dividends.',
  estimatedTime: 'PT2M',
  steps: [
    {
      name: 'Enter Initial Investment',
      text: 'Enter your starting investment amount in the dividend stock or fund. This is your principal that will generate dividends.'
    },
    {
      name: 'Input Dividend Yield',
      text: 'Enter the annual dividend yield percentage. High-yield stocks pay 4-8%+, growth stocks pay 1-2%, S&P 500 average is about 1.5%. Higher yield means more shares purchased through DRIP.'
    },
    {
      name: 'Set Expected Dividend Growth',
      text: 'Enter expected annual dividend growth rate. Quality dividend stocks grow dividends 5-10% annually. Dividend aristocrats have 25+ years of consecutive increases.'
    },
    {
      name: 'Set Share Price Appreciation',
      text: 'Enter expected annual stock price growth. Combined with dividends, this is your total return. Historical stock market total return averages 10% annually.'
    },
    {
      name: 'Choose Time Horizon',
      text: 'Set your investment timeframe. DRIP benefits compound dramatically over longer periods. 20-30 year horizons show exponential growth from reinvested dividends.'
    },
    {
      name: 'Analyze DRIP vs Non-DRIP',
      text: 'Compare portfolio growth with dividend reinvestment vs taking dividends as cash. DRIP typically results in 2-3x more wealth over 30 years through compounding.'
    }
  ]
};

// ============================================================================
// Map of tool types to HowTo data
// ============================================================================

import { ToolType } from '../types';

export const toolHowToMap: Record<string, HowToData> = {
  [ToolType.MORTGAGE_CALC]: mortgageCalculatorHowTo,
  [ToolType.SALARY_CALC]: salaryCalculatorHowTo,
  [ToolType.FIRE_PLANNER]: fireCalculatorHowTo,
  [ToolType.EMI_CALC]: emiCalculatorHowTo,
  [ToolType.QUARTERLY_TAX]: quarterlyTaxCalculatorHowTo,
  [ToolType.FREELANCE_PROFIT]: freelanceProfitHowTo,
  [ToolType.INVESTMENT_CALC]: investmentCalculatorHowTo,
  [ToolType.DTI_CALCULATOR]: dtiCalculatorHowTo,
  [ToolType.CREDIT_CARD_PAYOFF]: creditCardPayoffHowTo,
  [ToolType.DRIP_CALCULATOR]: dripCalculatorHowTo,
};

/**
 * Generate HowTo schema JSON-LD for a given tool
 */
export function generateHowToSchemaForTool(toolType: string): object | null {
  const howToData = toolHowToMap[toolType];
  if (!howToData) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howToData.title,
    description: howToData.description,
    totalTime: howToData.estimatedTime,
    step: howToData.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text
    })),
    tool: {
      '@type': 'HowToTool',
      name: 'QuantCurb Financial Calculator'
    }
  };
}

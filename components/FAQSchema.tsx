import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  showVisual?: boolean;
}

// FAQ Schema component that generates JSON-LD and optionally displays FAQs visually
const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs, showVisual = false }) => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {showVisual && (
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-50 rounded-xl p-4 border border-slate-200"
              >
                <summary className="cursor-pointer font-semibold text-slate-800 group-open:text-indigo-600 transition-colors list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">
                    &#x25BC;
                  </span>
                </summary>
                <p className="mt-3 text-slate-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

// Pre-defined FAQs for common calculator pages
export const mortgageCalculatorFAQs: FAQItem[] = [
  {
    question: 'How do I calculate my monthly mortgage payment?',
    answer: 'Your monthly mortgage payment is calculated using the loan amount, interest rate, and loan term. The formula accounts for principal and interest, plus you should add property taxes, homeowners insurance, and PMI if applicable (known as PITI: Principal, Interest, Taxes, Insurance).',
  },
  {
    question: 'What is PMI and when can I remove it?',
    answer: 'PMI (Private Mortgage Insurance) is required when your down payment is less than 20%. You can request PMI removal once you reach 20% equity, and lenders must automatically cancel it at 22% equity. PMI typically costs 0.5% to 1% of the loan amount annually.',
  },
  {
    question: 'How much house can I afford with my income?',
    answer: 'A common guideline is the 28/36 rule: spend no more than 28% of gross monthly income on housing costs, and no more than 36% on total debt. For a $100,000 salary, this suggests a maximum monthly payment around $2,333.',
  },
  {
    question: 'Should I choose a 15-year or 30-year mortgage?',
    answer: 'A 15-year mortgage has higher monthly payments but significantly lower total interest (often 50%+ less). A 30-year mortgage offers lower payments and more flexibility. Choose based on your monthly budget, other financial goals, and job stability.',
  },
  {
    question: 'What is included in PITI?',
    answer: 'PITI stands for Principal (loan balance), Interest (cost of borrowing), Taxes (property taxes), and Insurance (homeowners insurance). Some lenders also include PMI and HOA fees in your monthly escrow payment.',
  },
];

export const salaryCalculatorFAQs: FAQItem[] = [
  {
    question: 'How do I calculate my take-home pay?',
    answer: 'Take-home pay is your gross salary minus federal income tax, state income tax (if applicable), Social Security (6.2%), Medicare (1.45%), and any pre-tax deductions like 401(k) contributions and health insurance premiums.',
  },
  {
    question: 'Why is my bonus taxed so much?',
    answer: 'Bonuses appear heavily taxed due to the flat 22% federal supplemental withholding rate, but this is just withholding, not your actual tax rate. At tax time, bonuses are taxed as regular income, and you may receive a refund if over-withheld.',
  },
  {
    question: 'How does a 401(k) contribution affect my paycheck?',
    answer: 'Traditional 401(k) contributions reduce your taxable income, lowering your federal and state income tax withholding. For example, contributing $500/month from a $6,000 salary might only reduce your take-home by $350-400 after tax savings.',
  },
  {
    question: 'Which states have no income tax?',
    answer: 'Nine states have no state income tax: Alaska, Florida, Nevada, New Hampshire (dividends only), South Dakota, Tennessee (investment income only until 2021), Texas, Washington, and Wyoming. However, these states may have higher property or sales taxes.',
  },
  {
    question: 'What is the difference between gross and net pay?',
    answer: 'Gross pay is your total earnings before any deductions. Net pay (take-home pay) is what you receive after federal taxes, state taxes, FICA (Social Security + Medicare), and any other deductions like insurance or retirement contributions.',
  },
];

export const fireCalculatorFAQs: FAQItem[] = [
  {
    question: 'What is the FIRE number and how is it calculated?',
    answer: 'Your FIRE number is the amount you need invested to retire early. Using the 4% rule, multiply your annual expenses by 25. For example, if you spend $50,000/year, your FIRE number is $1,250,000. This assumes a 4% safe withdrawal rate.',
  },
  {
    question: 'What is the 4% rule?',
    answer: 'The 4% rule suggests you can withdraw 4% of your portfolio in year one of retirement, then adjust for inflation annually, with high confidence your money will last 30+ years. It is based on historical stock/bond returns and the Trinity Study.',
  },
  {
    question: 'What is the difference between Lean FIRE and Fat FIRE?',
    answer: 'Lean FIRE targets minimal expenses (often under $40,000/year), requiring a smaller portfolio but a frugal lifestyle. Fat FIRE targets higher spending ($100,000+/year), requiring a larger portfolio but allowing for more luxuries and flexibility.',
  },
  {
    question: 'What is Coast FIRE?',
    answer: 'Coast FIRE means you have saved enough that compound growth alone will fund traditional retirement (age 65), even without additional contributions. You can then work part-time or lower-stress jobs to cover current expenses.',
  },
  {
    question: 'How much should I save each month to retire early?',
    answer: 'Your savings rate is the biggest factor. A 50% savings rate can lead to retirement in roughly 17 years, while 70% can achieve it in about 8-9 years. Use the FIRE calculator to model your specific numbers based on income and expenses.',
  },
];

export const taxCalculatorFAQs: FAQItem[] = [
  {
    question: 'How do I calculate quarterly estimated taxes?',
    answer: 'Estimate your annual tax liability, subtract any withholding, and divide by 4. To avoid penalties, pay at least 100% of last year\'s tax (110% if AGI over $150,000) or 90% of current year tax. Due dates are April 15, June 15, September 15, and January 15.',
  },
  {
    question: 'What is the self-employment tax rate?',
    answer: 'Self-employment tax is 15.3% (12.4% Social Security + 2.9% Medicare) on 92.35% of net self-employment income. You can deduct half of SE tax from your income. The Social Security portion caps at $168,600 (2024).',
  },
  {
    question: 'What is the safe harbor rule for estimated taxes?',
    answer: 'The safe harbor rule protects you from underpayment penalties if you pay either 100% of last year\'s tax liability (110% if AGI over $150,000) or 90% of your current year tax. This is useful when income varies significantly.',
  },
  {
    question: 'How much is the Child Tax Credit worth?',
    answer: 'For 2025, the Child Tax Credit is up to $2,000 per qualifying child under 17. Up to $1,700 is refundable (Additional Child Tax Credit). The credit phases out starting at $200,000 AGI ($400,000 for married filing jointly).',
  },
  {
    question: 'Should I use the standard deduction or itemize?',
    answer: 'Take whichever is larger. For 2025, the standard deduction is $15,000 (single) or $30,000 (married filing jointly). Itemize only if your mortgage interest, state/local taxes (capped at $10,000), and charitable donations exceed these amounts.',
  },
];

export const investmentCalculatorFAQs: FAQItem[] = [
  {
    question: 'How does compound interest work?',
    answer: 'Compound interest is earning returns on your returns. With monthly compounding, interest is calculated on your principal plus accumulated interest each month. A $10,000 investment at 7% grows to $19,672 in 10 years, but $38,697 in 20 years.',
  },
  {
    question: 'What is the difference between SIP and lump sum investing?',
    answer: 'SIP (Systematic Investment Plan) invests fixed amounts regularly, averaging your purchase price over time (dollar-cost averaging). Lump sum invests everything at once. Historically, lump sum outperforms 66% of the time, but SIP reduces timing risk.',
  },
  {
    question: 'What return should I expect from stocks?',
    answer: 'The S&P 500 has returned about 10% annually since 1926 (7% after inflation). However, returns vary significantly year-to-year. Use conservative estimates (6-8%) for planning, and remember past performance does not guarantee future results.',
  },
  {
    question: 'How does dividend reinvestment (DRIP) boost returns?',
    answer: 'DRIP automatically reinvests dividends to buy more shares, compounding your returns. Over 30 years, a dividend stock returning 3% yield plus 5% price appreciation can double vs. taking dividends as cash, due to compounding.',
  },
  {
    question: 'Should I invest or pay off debt first?',
    answer: 'Compare your debt interest rate to expected investment returns. Pay off high-interest debt (10%+) first. For moderate rates (5-7%), consider doing both. Always contribute enough to get employer 401(k) match, and maintain an emergency fund.',
  },
];

export const emiCalculatorFAQs: FAQItem[] = [
  {
    question: 'What is EMI and how is it calculated?',
    answer: 'EMI (Equated Monthly Installment) is a fixed monthly payment that includes both principal and interest. The formula is: EMI = P × r × (1+r)^n / [(1+r)^n – 1], where P is principal, r is monthly interest rate, and n is number of months.',
  },
  {
    question: 'How does loan tenure affect EMI?',
    answer: 'Longer tenure means lower EMI but higher total interest paid. For example, a $25,000 loan at 8%: 3-year tenure = $783 EMI ($3,188 interest), 5-year tenure = $507 EMI ($5,420 interest). Choose based on your monthly budget and total cost preference.',
  },
  {
    question: 'Can I reduce my EMI by making prepayments?',
    answer: 'Yes, prepayments reduce your principal, which can either reduce EMI or shorten tenure. Most loans allow prepayment without penalty. A single extra EMI per year can reduce a 30-year loan by 4-5 years.',
  },
  {
    question: 'What is the difference between flat rate and reducing balance EMI?',
    answer: 'Flat rate calculates interest on the full principal throughout the loan. Reducing balance (most common) calculates interest on remaining principal. A 10% flat rate equals roughly 18-20% reducing balance rate. Always compare using reducing balance.',
  },
  {
    question: 'How much EMI can I afford based on my income?',
    answer: 'The general rule is total EMIs should not exceed 40-50% of your net monthly income. For example, with $5,000 net income, limit total EMIs to $2,000-2,500. Also maintain emergency fund covering 6 months of EMIs.',
  },
];

export const netWorthFAQs: FAQItem[] = [
  {
    question: 'How do I calculate my net worth?',
    answer: 'Net worth = Total Assets - Total Liabilities. Assets include cash, investments, real estate, and valuable property. Liabilities include mortgages, loans, credit card debt, and other obligations. Track monthly to see financial progress.',
  },
  {
    question: 'What should my net worth be at my age?',
    answer: 'A common benchmark: net worth should equal your annual salary by age 30, 3x by 40, 6x by 50, and 8x by 60. The formula "Age x Income / 10" from The Millionaire Next Door is another popular guideline.',
  },
  {
    question: 'Should I include my home in net worth?',
    answer: 'Yes, but track separately. Your home is an asset (current market value) with a liability (mortgage balance). Home equity (value minus mortgage) contributes to net worth but is not liquid. Track both total and liquid net worth.',
  },
  {
    question: 'How often should I update my net worth?',
    answer: 'Monthly tracking is ideal for active management. At minimum, update quarterly. Regular tracking helps identify trends, motivates saving, and catches issues early. Use consistent valuation methods for accuracy.',
  },
  {
    question: 'Is negative net worth normal?',
    answer: 'Many young adults start with negative net worth due to student loans, especially new graduates. Focus on the trend rather than the absolute number. Paying down debt and building savings will steadily move you positive.',
  },
];

export const emergencyFundFAQs: FAQItem[] = [
  {
    question: 'How much should I have in my emergency fund?',
    answer: 'Standard advice is 3-6 months of essential expenses. Single income households, self-employed individuals, or those in unstable industries should target 6-12 months. Include housing, utilities, food, insurance, and minimum debt payments.',
  },
  {
    question: 'Where should I keep my emergency fund?',
    answer: 'Keep it in a high-yield savings account (4-5% APY currently) for easy access and some growth. Avoid CDs, brokerage accounts, or illiquid investments. The goal is preservation and accessibility, not growth.',
  },
  {
    question: 'Should I invest my emergency fund?',
    answer: 'Generally no - emergency funds should be liquid and stable. Some experts suggest keeping 3 months in savings and additional months in conservative investments like I-bonds or money market funds, but never in stocks.',
  },
  {
    question: 'Emergency fund or pay off debt first?',
    answer: 'Start with a small emergency fund ($1,000-2,000) to avoid new debt from emergencies, then aggressively pay high-interest debt, then build full emergency fund. This balances protection against emergencies with debt payoff efficiency.',
  },
  {
    question: 'What counts as an emergency?',
    answer: 'True emergencies: job loss, medical emergencies, essential car repairs, urgent home repairs. Not emergencies: vacations, planned expenses, wants vs. needs. Create separate sinking funds for expected irregular expenses.',
  },
];

export const loanCompareFAQs: FAQItem[] = [
  {
    question: 'How do I compare loan offers effectively?',
    answer: 'Compare APR (not just interest rate), which includes fees. Look at total interest paid over the loan term, monthly payment, and any prepayment penalties. A lower rate with high fees may cost more than a higher rate with no fees.',
  },
  {
    question: 'When should I refinance my loan?',
    answer: 'Consider refinancing if you can reduce your rate by 0.5-1% or more, your credit score has improved significantly, or you want to change loan terms. Factor in closing costs and calculate break-even point (usually 1-3 years).',
  },
  {
    question: 'What is the difference between APR and interest rate?',
    answer: 'Interest rate is the cost of borrowing the principal. APR (Annual Percentage Rate) includes interest plus fees like origination, points, and closing costs. APR gives a more accurate total cost comparison between loans.',
  },
  {
    question: 'Should I choose a shorter or longer loan term?',
    answer: 'Shorter terms have higher monthly payments but much less total interest. Longer terms have lower payments but more total cost. Choose based on monthly cash flow needs and total cost tolerance. You can always pay extra on long terms.',
  },
  {
    question: 'How much do origination fees affect loan cost?',
    answer: 'Origination fees (typically 0.5-2% of loan amount) directly add to loan cost. A 1% fee on a $200,000 loan adds $2,000. Compare total cost including fees, not just the rate. Some lenders offer no-fee loans with slightly higher rates.',
  },
];

export const costOfLivingFAQs: FAQItem[] = [
  {
    question: 'How is cost of living calculated?',
    answer: 'Cost of living indexes compare expenses across locations using categories: housing (30-40% weight), food, transportation, utilities, healthcare, and miscellaneous. An index of 100 is the U.S. average. 120 means 20% more expensive.',
  },
  {
    question: 'What is the cost of living difference between states?',
    answer: 'Costs vary dramatically. Mississippi and Oklahoma are 15-20% below average. California, New York, and Hawaii are 30-50%+ above average. Housing is the biggest driver of these differences.',
  },
  {
    question: 'How much more should I earn in a high cost area?',
    answer: 'To maintain the same lifestyle, increase salary proportionally to cost of living difference. If moving from 100 index to 150 index area, you need 50% higher salary. But also consider taxes - a $100K salary in Texas equals roughly $115K in California after state income tax.',
  },
  {
    question: 'Should I take a raise to move to an expensive city?',
    answer: 'Calculate your effective raise after cost of living adjustment. A $20K raise to move where costs are 30% higher may actually reduce your purchasing power. Factor in housing, taxes, and commute costs specifically.',
  },
  {
    question: 'What is the cheapest state to live in?',
    answer: 'Mississippi, Oklahoma, Kansas, Arkansas, and Alabama consistently rank as cheapest with indexes around 85-90 (10-15% below national average). Housing costs drive these rankings - median home prices under $200,000.',
  },
];

export const creditCardPayoffFAQs: FAQItem[] = [
  {
    question: 'How long will it take to pay off my credit card?',
    answer: 'Paying only minimums (usually 2% of balance), a $5,000 debt at 20% APR takes about 20 years and costs $7,000+ in interest. Doubling payments cuts it to 3 years and $1,500 interest. Use our calculator for your specific numbers.',
  },
  {
    question: 'What is the debt avalanche method?',
    answer: 'Pay minimum on all debts, put extra money toward highest interest rate debt first. Mathematically optimal - saves the most money. Continue until all debts are paid, always targeting the highest rate remaining.',
  },
  {
    question: 'What is the debt snowball method?',
    answer: 'Pay minimum on all debts, put extra toward smallest balance first. Not mathematically optimal but provides psychological wins as debts disappear faster. Research shows people often stick with snowball better despite higher total interest.',
  },
  {
    question: 'Should I do a balance transfer?',
    answer: 'Balance transfers to 0% APR cards can save significant interest if you can pay off during the promotional period (usually 12-21 months). Factor in 3-5% transfer fees. Calculate break-even and ensure you will not just accumulate new debt.',
  },
  {
    question: 'Does paying off credit cards improve my credit score?',
    answer: 'Yes, significantly. Credit utilization (30% of score) improves as balances decrease. Paying down to under 30% utilization, then under 10%, provides the biggest score boosts. Keep accounts open after payoff for length of history.',
  },
];

export const dtiFAQs: FAQItem[] = [
  {
    question: 'What is a good debt-to-income ratio?',
    answer: 'For mortgage qualification: front-end DTI (housing costs only) should be under 28%, back-end DTI (all debts) under 36%. Many lenders accept up to 43% for qualified mortgages. FHA may allow up to 50% with compensating factors.',
  },
  {
    question: 'How do I calculate my DTI ratio?',
    answer: 'Add all monthly debt payments (mortgage, car loans, student loans, credit card minimums, child support) and divide by gross monthly income. Multiply by 100 for percentage. Example: $2,000 debts / $6,000 income = 33% DTI.',
  },
  {
    question: 'What debts are included in DTI?',
    answer: 'Include: mortgage/rent, car loans, student loans, credit card minimums, personal loans, child support, alimony. Do not include: utilities, insurance (unless part of mortgage), cell phone, subscriptions, food, or other living expenses.',
  },
  {
    question: 'How can I lower my DTI ratio?',
    answer: 'Reduce debt by paying down balances (especially high payments), refinancing to lower rates/longer terms, or paying off small debts entirely. Increase income through raises, side work, or adding a co-borrower. Avoid new debt before applying.',
  },
  {
    question: 'Does DTI affect my credit score?',
    answer: 'DTI itself is not in credit scores (FICO does not see your income). However, the underlying debts affect utilization and payment history. DTI is critical for mortgage qualification and is calculated separately by lenders.',
  },
];

export const cryptoTaxFAQs: FAQItem[] = [
  {
    question: 'Do I have to pay taxes on crypto?',
    answer: 'Yes, the IRS treats cryptocurrency as property. You owe capital gains tax when selling, trading, or using crypto to buy things. Mining, staking rewards, and airdrops are taxed as ordinary income when received.',
  },
  {
    question: 'What is crypto tax loss harvesting?',
    answer: 'Selling crypto at a loss to offset gains and reduce taxes. Unlike stocks, crypto is NOT subject to wash sale rules (as of 2025), so you can immediately rebuy the same asset. This lets you realize losses for tax purposes while maintaining your position.',
  },
  {
    question: 'How are crypto capital gains taxed?',
    answer: 'Short-term gains (held under 1 year) are taxed as ordinary income (10-37%). Long-term gains (over 1 year) get preferential rates: 0%, 15%, or 20% depending on income. Hold over a year when possible to minimize taxes.',
  },
  {
    question: 'Do I need to report crypto if I did not sell?',
    answer: 'Simply holding crypto is not taxable. You must report when you sell, trade crypto-to-crypto, use crypto to pay for goods/services, or receive crypto income (mining, staking, airdrops, payments). Every disposal is potentially taxable.',
  },
  {
    question: 'How do I track crypto cost basis?',
    answer: 'Track every purchase: date, amount, price paid. Use FIFO (first in, first out), LIFO, or specific identification method consistently. Crypto tax software like Koinly, CoinTracker, or TokenTax can import exchange data automatically.',
  },
];

export const acaSubsidyFAQs: FAQItem[] = [
  {
    question: 'How do I qualify for ACA subsidies?',
    answer: 'You must: buy insurance through Healthcare.gov marketplace, have household income 100-400% of Federal Poverty Level (FPL), not be eligible for employer coverage or Medicare, and file taxes (married filing jointly if married).',
  },
  {
    question: 'How much is the ACA premium tax credit?',
    answer: 'Subsidy amount depends on income as percentage of FPL and cost of benchmark (second-lowest Silver) plan in your area. At 150% FPL, you pay ~2% of income for benchmark plan. At 400% FPL, you pay ~8.5%. Enhanced subsidies through 2025 removed the cliff.',
  },
  {
    question: 'What happens if my income changes after enrolling?',
    answer: 'If income increases, you may owe back some subsidy at tax time. If income decreases, you will get additional credit as refund. Report income changes to the marketplace to adjust subsidy and avoid large reconciliation at tax time.',
  },
  {
    question: 'Can self-employed people get ACA subsidies?',
    answer: 'Yes, self-employed individuals often benefit most from ACA. Business deductions (home office, equipment, retirement contributions) reduce MAGI, potentially increasing subsidies. Strategic income planning can optimize coverage costs.',
  },
  {
    question: 'What is the ACA subsidy cliff?',
    answer: 'Before enhanced subsidies (and after 2025 unless extended), income over 400% FPL meant zero subsidy - a cliff where a $1 income increase could cost thousands in lost subsidies. Current enhanced subsidies cap premiums at 8.5% of income instead.',
  },
];

export default FAQSchema;

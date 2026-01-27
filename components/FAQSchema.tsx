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

export default FAQSchema;

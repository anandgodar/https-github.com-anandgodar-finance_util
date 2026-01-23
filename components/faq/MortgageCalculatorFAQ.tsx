import React from 'react';

/**
 * FAQ Component for Mortgage Calculator
 * Optimized for featured snippets and question-based keywords
 */

interface FAQItem {
  question: string;
  answer: string;
  keywords: string[];
}

const faqItems: FAQItem[] = [
  {
    question: "How to calculate mortgage payment?",
    answer: "To calculate your monthly mortgage payment manually, use this formula: M = P × [r(1+r)^n] / [(1+r)^n-1], where M = monthly payment, P = principal loan amount, r = monthly interest rate (annual rate ÷ 12), n = number of payments (years × 12). For example, a $400,000 loan at 7% for 30 years: M = 400,000 × [0.00583(1.00583)^360] / [(1.00583)^360-1] = $2,661/month. Add property tax, insurance, and PMI for total PITI payment.",
    keywords: ["how to calculate mortgage payment", "mortgage payment formula", "how is mortgage calculated"]
  },
  {
    question: "How much house can I afford?",
    answer: "Use the 28/36 rule: Your monthly housing costs (PITI) should not exceed 28% of gross monthly income, and total debt payments should not exceed 36%. For example, with $8,000/month income: maximum housing payment = $2,240 (28%), maximum total debt = $2,880 (36%). With 7% rate and 20% down, you can afford approximately $400,000-$450,000 home. However, consider: 1) Emergency fund needs, 2) Other financial goals, 3) Job stability, 4) True cost of homeownership.",
    keywords: ["how much house can i afford", "mortgage affordability calculator", "home affordability calculator"]
  },
  {
    question: "What is PITI in mortgage?",
    answer: "PITI stands for Principal, Interest, Taxes, and Insurance - the four components of your total monthly mortgage payment. Principal = loan amount being paid down, Interest = cost of borrowing, Taxes = property tax (typically 0.5-2.5% of home value annually), Insurance = homeowners insurance (typically $1,000-$3,000/year). PMI (Private Mortgage Insurance) is added if down payment < 20%. Example: $400K loan at 7% = $2,661 P&I + $600 taxes + $150 insurance + $200 PMI = $3,611 total PITI.",
    keywords: ["what is piti", "piti explained", "what is included in mortgage payment"]
  },
  {
    question: "When can I remove PMI?",
    answer: "You can remove PMI when: 1) Loan-to-Value (LTV) reaches 80% through payments and/or appreciation (automatic at 78% LTV), 2) You've made on-time payments for at least 2 years, 3) No subordinate liens. For a $400K home with $360K loan (90% LTV), PMI drops at $320K balance (80% LTV). Ways to remove PMI faster: 1) Make extra principal payments, 2) Home value appreciation, 3) Refinance if home appreciates significantly, 4) Request appraisal when LTV hits 80%. PMI typically costs 0.5-1% annually.",
    keywords: ["when can i remove pmi", "how to remove pmi", "pmi removal calculator", "when does pmi drop off"]
  },
  {
    question: "Should I pay points on my mortgage?",
    answer: "Pay points only if you'll break even before selling/refinancing. One point = 1% of loan amount, typically reduces rate by 0.25%. For $400K loan: one point costs $4,000 and saves ~$60/month. Breakeven = 67 months (5.6 years). Pay points if: 1) You'll stay 7+ years, 2) You won't refinance soon, 3) You have excess cash after 20% down and 6-month emergency fund. Don't pay points if: 1) You might move in 5 years, 2) Rates may drop (refinance opportunity), 3) Cash is better used for higher down payment to avoid PMI.",
    keywords: ["should i pay points on mortgage", "mortgage points calculator", "are mortgage points worth it", "points break even calculator"]
  },
  {
    question: "Is an FHA loan worth it?",
    answer: "FHA loans are worth it if: 1) You have low down payment (3.5% vs 20% conventional), 2) Credit score 580-620 (conventional needs 620+), 3) Debt-to-income ratio up to 50% (vs 43% conventional). However, FHA requires: 1) Upfront mortgage insurance premium (1.75% of loan), 2) Annual PMI that never drops off (unless you refinance), 3) Slightly higher rates. Example: $400K home, FHA = $14K down + $7K upfront MIP + $280/month PMI forever. Conventional = $80K down + no MIP + PMI drops at 78% LTV. FHA makes sense for first-time buyers with limited savings.",
    keywords: ["is fha loan worth it", "fha vs conventional loan", "should i get fha loan", "fha loan pros and cons"]
  },
  {
    question: "How to calculate property tax on a house?",
    answer: "Property tax = Assessed Home Value × Property Tax Rate. Rates vary by state: Texas 1.8%, California 0.76%, New Jersey 2.5%. For a $400,000 home: Texas = $400,000 × 0.018 = $7,200/year ($600/month), California = $400,000 × 0.0076 = $3,040/year ($253/month). Note: 1) Assessed value may differ from purchase price, 2) Reassessment rules vary by state (California Prop 13 limits increases), 3) Exemptions available (homestead, senior, veteran), 4) Tax rate includes county, city, and school district levies.",
    keywords: ["how to calculate property tax", "property tax calculator", "how much is property tax", "property tax by state"]
  },
  {
    question: "What are closing costs and how much are they?",
    answer: "Closing costs typically total 2-5% of home price and include: 1) Loan origination fee (0.5-1%), 2) Appraisal ($500-$800), 3) Title insurance ($1,000-$3,000), 4) Title search ($200-$400), 5) Survey ($300-$600), 6) Recording fees ($100-$300), 7) Prepaid property taxes and insurance, 8) Attorney fees ($500-$2,000). For a $400,000 home: expect $8,000-$20,000 in closing costs. Buyer typically pays most; seller pays realtor commission (5-6%). Shop lenders to compare fees; some are negotiable.",
    keywords: ["what are closing costs", "how much are closing costs", "closing costs calculator", "closing costs breakdown"]
  },
  {
    question: "Should I do a 15-year vs 30-year mortgage?",
    answer: "15-year mortgage: Pros = Save $200K+ in interest, build equity faster, typically 0.5-0.75% lower rate. Cons = Higher monthly payment (70% more), less cash flow flexibility. 30-year mortgage: Pros = Lower payment, more cash for investments/emergencies, inflation works in your favor. Cons = Pay 2x in interest, slower equity build. Example: $400K at 7%: 30-year = $2,661/month ($558K total interest), 15-year = $3,595/month ($247K total interest). Choose 15-year if: stable high income, low expenses, near retirement. Choose 30-year if: starting career, other high-return investments available, want flexibility.",
    keywords: ["15 year vs 30 year mortgage", "should i get 15 or 30 year mortgage", "15 vs 30 year mortgage calculator"]
  },
  {
    question: "How does biweekly mortgage payment work?",
    answer: "Biweekly payments mean paying half your monthly mortgage every two weeks (26 payments/year = 13 full monthly payments instead of 12). This extra payment goes to principal, paying off a 30-year mortgage in ~25 years and saving 6+ years of interest. Example: $2,661/month mortgage → $1,330.50 biweekly. You make $34,593/year in payments vs $31,932 on monthly schedule. The extra $2,661 annually shaves off years and saves $60K+ in interest. Set up manually by adding 1/12 of monthly payment to each regular payment if bank charges setup fees.",
    keywords: ["biweekly mortgage payment", "how does biweekly mortgage work", "biweekly vs monthly mortgage"]
  }
];

export const MortgageCalculatorFAQ: React.FC = () => {
  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-black text-slate-900 mb-8">
          Frequently Asked Questions About Mortgages
        </h2>

        <div className="space-y-6">
          {faqItems.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-purple-500 transition-all"
            >
              <summary className="font-black text-lg text-slate-900 cursor-pointer flex items-start gap-3">
                <span className="text-purple-600 flex-shrink-0">Q:</span>
                <span>{faq.question}</span>
              </summary>
              <div className="mt-4 pl-7 text-slate-700 leading-relaxed">
                <span className="font-bold text-emerald-600">A: </span>
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Schema.org FAQPage structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqItems.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </div>
  );
};

export default MortgageCalculatorFAQ;

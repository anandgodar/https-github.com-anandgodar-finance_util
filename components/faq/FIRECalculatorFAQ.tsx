import React from 'react';

/**
 * FAQ Component for FIRE Calculator
 * Optimized for featured snippets and question-based keywords
 */

interface FAQItem {
  question: string;
  answer: string;
  keywords: string[];
}

const faqItems: FAQItem[] = [
  {
    question: "How much money do I need to FIRE?",
    answer: "To calculate your FIRE number, multiply your annual expenses by 25 (using the 4% rule) or by 33 (using the more conservative 3% rule). For example, if you spend $50,000 per year, you'll need $1.25 million (50,000 × 25) to retire early. This assumes you can safely withdraw 4% of your portfolio annually without running out of money.",
    keywords: ["how much money do i need to fire", "what is my fire number", "how to calculate fire number"]
  },
  {
    question: "When can I retire early?",
    answer: "You can retire early when your investment portfolio reaches 25-33 times your annual expenses. To calculate the exact year, divide the amount you still need to save by your annual savings rate. For example, if you need $1 million and save $50,000/year with 7% returns, you can retire in approximately 13-14 years.",
    keywords: ["when can i retire early", "how long until i can retire", "retirement age calculator"]
  },
  {
    question: "What is the 4 percent rule?",
    answer: "The 4% rule states that you can safely withdraw 4% of your retirement portfolio in the first year, then adjust that amount for inflation each year, without running out of money for at least 30 years. Based on the Trinity Study, this rule has a 95% success rate over 30-year periods. For a $1 million portfolio, you can withdraw $40,000 in year one.",
    keywords: ["what is the 4 percent rule", "4 percent rule calculator", "safe withdrawal rate"]
  },
  {
    question: "Can I retire at 40 with 1 million?",
    answer: "Yes, you can retire at 40 with $1 million if your annual expenses are $40,000 or less (using the 4% rule). However, consider these factors: 1) You'll need healthcare coverage until Medicare at 65, 2) Your money needs to last 50+ years, not 30, 3) A 3% withdrawal rate ($30,000/year) may be safer for early retirement, 4) Sequence of returns risk is higher with longer retirement.",
    keywords: ["can i retire at 40 with 1 million", "retire at 40", "early retirement with 1 million"]
  },
  {
    question: "What is Coast FIRE?",
    answer: "Coast FIRE means you've saved enough that your investments will grow to a full retirement nest egg by age 65, even if you never save another dollar. You can 'coast' with a lower-stress job covering just your current expenses. For example, if you have $200,000 at age 30 and it grows at 7% for 35 years, you'll have $2.1 million at 65 without adding more.",
    keywords: ["what is coast fire", "coast fire calculator", "coast fire vs regular fire"]
  },
  {
    question: "What is Lean FIRE vs Fat FIRE?",
    answer: "Lean FIRE means retiring with minimal expenses (typically $25,000-$40,000/year, requiring $625,000-$1M). Fat FIRE means retiring with a luxurious lifestyle (typically $100,000+/year, requiring $2.5M+). Regular FIRE falls in between at $50,000-$75,000/year expenses ($1.25M-$2M needed). Your FIRE number depends on your desired retirement lifestyle.",
    keywords: ["lean fire vs fat fire", "what is lean fire", "what is fat fire", "types of fire"]
  },
  {
    question: "Is the 4% rule still safe in 2026?",
    answer: "The 4% rule remains a reasonable guideline, but consider these 2026 factors: 1) Higher market valuations suggest a 3.5% withdrawal rate may be safer, 2) Lower bond yields reduce portfolio income, 3) Longer retirements (40-50 years) need more conservative rates, 4) Flexibility to reduce spending during downturns improves success rates. Most experts recommend 3-3.5% for early retirement.",
    keywords: ["is the 4% rule safe", "4% rule in 2026", "safe withdrawal rate 2026"]
  },
  {
    question: "How much to retire at 45?",
    answer: "To retire at 45, you need 25-33 times your annual expenses. For $60,000/year expenses: $1.5 million (25x) to $2 million (33x). Consider these factors: 1) 20 years until Medicare means higher healthcare costs, 2) 40+ year retirement needs conservative withdrawal rates (3-3.5%), 3) Inflation protection through TIPS or real estate, 4) Part-time income or 'Barista FIRE' reduces portfolio stress.",
    keywords: ["how much to retire at 45", "retire at 45", "early retirement at 45"]
  },
  {
    question: "What is Barista FIRE?",
    answer: "Barista FIRE means semi-retirement where you work part-time to cover basic expenses and healthcare, while your portfolio grows untouched. For example, work 20 hours/week at $20/hour ($20,800/year) to cover health insurance and living costs, letting your $500,000 portfolio compound for full retirement later. This reduces sequence of returns risk and extends runway.",
    keywords: ["what is barista fire", "barista fire calculator", "part time retirement"]
  },
  {
    question: "How to calculate FIRE number with inflation?",
    answer: "To calculate your inflation-adjusted FIRE number: 1) Estimate annual expenses in today's dollars, 2) Project to retirement year using 3% inflation (Future = Current × 1.03^years), 3) Multiply by 25-33 for FIRE number. Example: $50,000 current expenses, retiring in 15 years = $50,000 × 1.03^15 = $77,898 future dollars. FIRE number = $77,898 × 25 = $1.95 million.",
    keywords: ["fire calculator with inflation", "inflation adjusted fire number", "how to account for inflation in fire"]
  }
];

export const FIRECalculatorFAQ: React.FC = () => {
  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-black text-slate-900 mb-8">
          Frequently Asked Questions About FIRE
        </h2>

        <div className="space-y-6">
          {faqItems.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-indigo-500 transition-all"
            >
              <summary className="font-black text-lg text-slate-900 cursor-pointer flex items-start gap-3">
                <span className="text-indigo-600 flex-shrink-0">Q:</span>
                <span>{faq.question}</span>
              </summary>
              <div className="mt-4 pl-7 text-slate-700 leading-relaxed">
                <span className="font-bold text-emerald-600">A: </span>
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Schema.org FAQPage structured data for rich snippets */}
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

export default FIRECalculatorFAQ;

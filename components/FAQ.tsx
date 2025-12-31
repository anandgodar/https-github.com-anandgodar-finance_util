
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "What is an EMI and how is it calculated?",
      a: "EMI stands for Equated Monthly Installment. It is calculated based on your loan amount (principal), the interest rate, and the loan tenure. Our calculator uses the Reducing Balance method, ensuring you see the true impact of interest over time."
    },
    {
      q: "How does property tax affect my mortgage?",
      a: "Property taxes are often escrowed into your monthly mortgage payment. Our Mortgage Pro tool allows you to input local tax percentages to get a comprehensive view of your total monthly cash outflow, including principal, interest, taxes, and insurance (PITI)."
    },
    {
      q: "Can I save money by prepaying my loan?",
      a: "Absolutely. Even small monthly prepayments can significantly reduce the total interest you pay over the life of a loan. Our EMI Accelerator visualizes these savings and shows how much time you shave off your debt."
    },
    {
      q: "Why is state tax important in salary calculations?",
      a: "Different states have widely varying tax brackets and standard deductions. For example, states like Florida and Texas have no income tax, whereas California has progressive brackets up to 13.3%. Our tool handles these nuances automatically."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <header className="text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Financial <span className="text-indigo-600">Knowledge Base</span></h1>
        <p className="text-slate-500 font-medium text-lg">Your expert guide to the metrics that define your wealth.</p>
      </header>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <h3 className="text-lg font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">Q: {faq.q}</h3>
            <p className="text-slate-600 leading-relaxed font-medium">A: {faq.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex items-center gap-10">
        <div className="text-6xl">💡</div>
        <div>
          <h4 className="text-xl font-bold mb-2">Need Personalized Advice?</h4>
          <p className="text-slate-400 text-sm leading-relaxed">Our AI tools provide custom insights based on your specific numbers. Start by entering your data into any of our calculators.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

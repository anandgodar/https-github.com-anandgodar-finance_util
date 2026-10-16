import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface CalculatorFAQProps {
  faqs: FAQItem[];
  calculatorName: string;
  calculatorUrl: string;
}

const CalculatorFAQ: React.FC<CalculatorFAQProps> = ({ faqs, calculatorName, calculatorUrl }) => {
  return (
    <section className="mt-16 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
      <h2 className="text-3xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-lg mb-3">{faq.question}</h3>
            <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalculatorFAQ;

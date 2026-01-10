import React, { useEffect } from 'react';

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
  useEffect(() => {
    // Add FAQPage schema markup
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = `faq-schema-${calculatorName.toLowerCase().replace(/\s+/g, '-')}`;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(script.id);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [faqs, calculatorName]);

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


import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm animate-in fade-in duration-700">
      <h1 className="text-4xl font-black text-slate-900 mb-12">Privacy <span className="text-indigo-600">Policy</span></h1>
      
      <div className="prose prose-slate prose-lg font-medium text-slate-600 space-y-8">
        <section>
          <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-widest text-sm">1. Data Sovereignty</h2>
          <p>At FinVault Pro, we believe your financial data is private. All calculations performed on our platform are processed securely. We do not sell your personal financial profile to third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-widest text-sm">2. AI Analysis</h2>
          <p>When you use our AI Market Pulse or advisory features, your data is used contextually by Gemini AI to provide real-time insights. This data is non-persistent and is not used to train the underlying models without your explicit consent.</p>
        </section>

        <section>
          <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-widest text-sm">3. Security Standards</h2>
          <p>We employ enterprise-grade encryption for all data transmissions. Our systems are audited regularly to ensure compliance with modern security standards like SOC2 and GDPR.</p>
        </section>

        <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100 mt-12">
          <p className="text-indigo-700 text-sm font-bold">Last Updated: May 2024. For further inquiries, please contact our data protection office.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

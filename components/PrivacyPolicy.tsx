
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[4rem] border border-slate-100 shadow-sm animate-in fade-in duration-700 text-left">
      <header className="mb-16 space-y-4">
        <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest">Security Standards</span>
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Privacy <span className="text-indigo-600">Policy</span></h1>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Effective Date: January 1, 2025</p>
      </header>
      
      <div className="prose prose-slate prose-lg font-medium text-slate-600 space-y-12">
        <section className="space-y-6">
          <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-widest text-sm flex items-center gap-3">
             <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
             1. Data Sovereignty
          </h2>
          <p>
            At QuantCurb, your financial profile is yours alone. Most calculations are performed client-side. We do not store or sell your private assets, liabilities, or income data to third-party brokers. Our business model is built on intelligence, not surveillance.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-widest text-sm flex items-center gap-3">
             <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
             2. AI Analysis Protocol
          </h2>
          <p>
            When utilizing our "Gemini AI" market features, data is transmitted over encrypted channels to provide contextual insights. This data is transient and governed by our strict non-persistence policy. We do not use your private financial scenarios to train global LLMs.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-widest text-sm flex items-center gap-3">
             <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
             3. Encryption & Cookies
          </h2>
          <p>
            We employ TLS 1.3 encryption for all site traffic. Cookies are used strictly for session persistence (maintaining your chosen calculator settings) and anonymous analytics to improve our algorithms. We do not use cross-site tracking cookies for targeted advertising.
          </p>
        </section>

        <section className="space-y-6">
           <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-widest text-sm flex items-center gap-3">
             <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
             4. Compliance
           </h2>
           <p>
             QuantCurb adheres to the principles of the GDPR (General Data Protection Regulation) and CCPA (California Consumer Privacy Act). You have the right to request a full wipe of any local storage session data at any time.
           </p>
        </section>

        <div className="p-10 bg-indigo-50 rounded-[3rem] border border-indigo-100 mt-16 space-y-4">
          <p className="text-indigo-900 text-sm font-black uppercase tracking-widest">Questions or Audit Requests?</p>
          <p className="text-indigo-700 text-base font-medium">Contact our Data Sovereignty Office at <span className="underline font-bold">privacy@quantcurb.com</span>.</p>
        </div>
      </div>
    </article>
  );
};

export default PrivacyPolicy;

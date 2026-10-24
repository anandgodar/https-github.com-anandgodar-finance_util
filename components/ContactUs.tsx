

import React from 'react';

const CONTACT_EMAIL = 'hello@quantcurb.com';

const ContactUs: React.FC = () => {
  return (
    <article className="max-w-3xl mx-auto animate-in fade-in duration-700 pb-24 text-left">
      <section className="bg-white p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm space-y-10">
        <header className="space-y-6">
          <span className="px-4 py-1.5 bg-slate-900 text-indigo-400 rounded-xl text-[10px] font-black uppercase tracking-widest">Connect</span>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter leading-tight">Get in <span className="text-indigo-600">Touch</span></h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Found a figure that looks wrong, a broken calculator, or have a feature request? Email QuantCurb and
            include the page address and the inputs you used, so the result can be reproduced.
          </p>
        </header>

        <div className="flex items-center gap-6">
          <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-2xl" aria-hidden="true">✉️</div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-black text-indigo-600 underline break-all">{CONTACT_EMAIL}</a>
          </div>
        </div>

        <p className="text-sm text-slate-500 font-medium leading-relaxed">
          QuantCurb cannot give personal tax, legal or financial advice by email. For questions about your own return
          or account, contact the IRS, your state revenue department, your lender or a qualified professional.
        </p>
      </section>
    </article>
  );
};

export default ContactUs;

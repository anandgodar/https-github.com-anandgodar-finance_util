
import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto bg-white p-16 rounded-[4rem] border border-emerald-100 text-center space-y-8 animate-in zoom-in-95 duration-500 shadow-2xl">
         <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center text-5xl mx-auto">✓</div>
         <h2 className="text-4xl font-black text-slate-900 tracking-tight">Transmission Received</h2>
         <p className="text-slate-500 font-medium text-lg leading-relaxed">
           Our intelligence team has received your inquiry. We typically respond within 2 interbank business days.
         </p>
         <button onClick={() => setSubmitted(false)} className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-indigo-600 transition-colors">New Message</button>
      </div>
    );
  }

  return (
    <article className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 animate-in fade-in duration-700 pb-24 text-left">
      <div className="md:col-span-5 space-y-12">
        <header className="space-y-6">
          <span className="px-4 py-1.5 bg-slate-900 text-indigo-400 rounded-xl text-[10px] font-black uppercase tracking-widest">Connect</span>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter leading-tight">Get in <span className="text-indigo-600">Touch</span></h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Have a feature request, professional inquiry, or technical bug report? Our team audits every submission.
          </p>
        </header>

        <div className="space-y-8">
           <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-2xl group-hover:bg-indigo-50 transition-colors">📍</div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global HQ</p>
                 <p className="font-black text-slate-800">Financial District, New York</p>
              </div>
           </div>
           <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-2xl group-hover:bg-indigo-50 transition-colors">✉️</div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Support</p>
                 <p className="font-black text-slate-800">intelligence@quantcurb.com</p>
              </div>
           </div>
           <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-2xl group-hover:bg-indigo-50 transition-colors">⚡</div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Response Time</p>
                 <p className="font-black text-slate-800">&lt; 48 Hours</p>
              </div>
           </div>
        </div>
      </div>

      <div className="md:col-span-7">
        <section className="bg-white p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Your Name</label>
                <input required type="text" className="w-full p-5 bg-slate-50 border-none rounded-3xl font-black text-slate-700 focus:ring-2 focus:ring-indigo-500" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Email Address</label>
                <input required type="email" className="w-full p-5 bg-slate-50 border-none rounded-3xl font-black text-slate-700 focus:ring-2 focus:ring-indigo-500" placeholder="john@example.com" />
              </div>
            </div>

            <div className="space-y-2">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Inquiry Category</label>
               <select className="w-full p-5 bg-slate-50 border-none rounded-3xl font-black text-slate-700 appearance-none focus:ring-2 focus:ring-indigo-500">
                  <option>Support Request</option>
                  <option>Feature Improvement</option>
                  <option>Algorithmic Audit Request</option>
                  <option>Professional Partnership</option>
               </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Message</label>
              <textarea required rows={5} className="w-full p-5 bg-slate-50 border-none rounded-3xl font-black text-slate-700 focus:ring-2 focus:ring-indigo-500" placeholder="How can we help with your financial modeling?"></textarea>
            </div>

            <button type="submit" className="w-full py-6 bg-slate-900 text-white rounded-3xl font-black uppercase text-xs tracking-[0.3em] shadow-xl hover:bg-indigo-600 transition-all hover:scale-[1.02] active:scale-[0.98]">
               Transmit Inquiry 🚀
            </button>
          </form>
        </section>
      </div>
    </article>
  );
};

export default ContactUs;

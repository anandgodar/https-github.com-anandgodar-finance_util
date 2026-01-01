
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <article className="max-w-5xl mx-auto space-y-16 animate-in fade-in duration-700 pb-24 text-left">
      <header className="bg-white p-12 md:p-20 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        <div className="relative z-10 space-y-6">
          <span className="px-4 py-1.5 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">Our DNA</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">Institutional Logic, <br/><span className="text-indigo-600">Daily Wealth.</span></h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl">
            QuantCurb was founded on a simple premise: Retail investors shouldn't be limited by simple math. We build banking-grade algorithms to power your daily financial decisions.
          </p>
        </div>
      </header>

      <section className="grid md:grid-cols-2 gap-12">
        <div className="bg-slate-900 p-12 rounded-[3.5rem] text-white space-y-8 shadow-2xl">
          <h2 className="text-3xl font-black tracking-tight">The QuantCurb <br/>Mission</h2>
          <p className="text-slate-400 text-lg leading-relaxed font-medium">
            Most finance apps focus on "Budgeting"—counting where your money went. QuantCurb focuses on **Wealth Engineering**—simulating where your money *can go* through algorithmic optimization.
          </p>
          <div className="space-y-4 pt-4 border-t border-white/10">
             <div className="flex items-center gap-4">
               <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
               <p className="text-sm font-black uppercase tracking-widest text-slate-300">100% Transparency</p>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
               <p className="text-sm font-black uppercase tracking-widest text-slate-300">Zero Retail Markups</p>
             </div>
          </div>
        </div>
        <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-8">
           <h2 className="text-3xl font-black text-slate-900 tracking-tight">Built by <br/>Engineers</h2>
           <p className="text-slate-500 text-lg leading-relaxed font-medium">
             Our team consists of data scientists and fintech engineers who believe in mathematical sovereignty. We don't sell your data, and we don't push high-interest credit cards. We build tools that calculate the truth.
           </p>
           <div className="flex gap-4">
              <span className="p-4 bg-slate-50 rounded-2xl text-3xl">🛡️</span>
              <span className="p-4 bg-slate-50 rounded-2xl text-3xl">⚙️</span>
              <span className="p-4 bg-slate-50 rounded-2xl text-3xl">💎</span>
           </div>
        </div>
      </section>

      <section className="space-y-12">
         <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.5em] text-center">Core Pillars</h3>
         <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'Algorithmic Integrity', desc: 'Every calculator uses the reducing balance standard used by Tier-1 global banks.', icon: '📉' },
              { title: 'Data Sovereignty', desc: 'Your private balance sheet stays on your device. We prioritize logic over surveillance.', icon: '🔐' },
              { title: 'AI Synthesis', desc: 'We bridge raw data with AI sentiment to give you context, not just digits.', icon: '🤖' }
            ].map(pillar => (
              <div key={pillar.title} className="text-center space-y-4 group">
                 <div className="w-20 h-20 bg-indigo-50 rounded-[2rem] flex items-center justify-center text-4xl mx-auto group-hover:scale-110 transition-transform shadow-sm">
                   {pillar.icon}
                 </div>
                 <h4 className="text-xl font-black text-slate-900">{pillar.title}</h4>
                 <p className="text-sm text-slate-500 font-medium leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
         </div>
      </section>

      <footer className="bg-indigo-600 p-12 md:p-16 rounded-[4rem] text-white text-center shadow-2xl relative overflow-hidden">
         <div className="relative z-10 space-y-6">
            <h4 className="text-3xl font-black">Join the Community</h4>
            <p className="text-indigo-100 text-lg font-medium opacity-90 max-w-xl mx-auto">
              Over 250,000 simulations are run monthly on QuantCurb. Start engineering your financial freedom today.
            </p>
         </div>
         <div className="absolute -right-10 -bottom-10 text-[200px] font-black text-white/5 pointer-events-none select-none tracking-tighter">QUANT</div>
      </footer>
    </article>
  );
};

export default AboutUs;

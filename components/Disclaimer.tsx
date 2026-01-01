
import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700 pb-24 text-left">
      <header className="bg-rose-50 p-12 rounded-[4rem] border border-rose-100 text-center space-y-4">
         <span className="text-4xl">⚖️</span>
         <h1 className="text-4xl font-black text-rose-600 tracking-tight">Legal & Algorithmic <span className="text-slate-900">Disclaimer</span></h1>
         <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.4em]">Essential Compliance Notice</p>
      </header>

      <section className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-10 font-medium text-slate-600 leading-relaxed">
         <div className="space-y-4">
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest text-sm">1. No Financial Advice</h2>
            <p>
              QuantCurb (quantcurb.com) is a platform for educational and algorithmic modeling. All results, charts, and AI-generated insights are provided "as-is" for illustrative purposes only. Nothing on this site constitutes professional financial, legal, or tax advice. 
            </p>
         </div>

         <div className="space-y-4">
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest text-sm">2. Accuracy & Calculations</h2>
            <p>
              While our engineering team utilizes industry-standard formulas (e.g., Reducing Balance Amortization), financial variables such as interest rates, tax laws, and market conditions are subject to rapid change. We do not guarantee the absolute mathematical accuracy of any projection. 
            </p>
         </div>

         <div className="space-y-4">
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest text-sm">3. Risk Disclosure</h2>
            <p>
              Investing and debt management involve significant risk. Historical performance does not guarantee future results. Users are encouraged to consult with a certified financial planner (CFP) or tax professional before making significant life decisions based on these models.
            </p>
         </div>

         <div className="space-y-4 pt-8 border-t">
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest text-sm">4. Third-Party Market Data</h2>
            <p>
              Currency exchange rates and market insights are sourced from interbank data feeds and AI synthesis. These values may lag behind actual spot market prices and should not be used for high-frequency trading or time-sensitive financial execution.
            </p>
         </div>

         <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
            <p className="text-sm font-bold opacity-80 italic">
              "By using QuantCurb, you acknowledge that you are the sole party responsible for your financial decisions. QuantCurb Intelligence and its parent entity hold zero liability for economic losses resulting from the use of our algorithmic suite."
            </p>
         </div>
      </section>
      
      <footer className="text-center">
         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Updated: January 2025 • QuantCurb Legal Protocol</p>
      </footer>
    </article>
  );
};

export default Disclaimer;

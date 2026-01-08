
import React from 'react';
import { ToolType } from '../types';

interface FooterProps {
  setActiveTool: (tool: ToolType) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveTool }) => {
  return (
    <footer className="bg-white border-t mt-auto pt-16 pb-24 md:pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-left">
        <div className="col-span-2">
          <h4 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <span className="p-2 bg-indigo-600 text-white rounded-lg shadow-lg">📈</span> QuantCurb Intelligence
          </h4>
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
            Bridging the gap between institutional financial modeling and daily retail wealth management. Precision-built for the QuantCurb.com community.
          </p>
          <div className="flex gap-4 mt-8">
            <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">𝕏</div>
            <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">in</div>
            <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">ig</div>
          </div>
        </div>

        <div>
          <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Quant Suite</h5>
          <ul className="space-y-4">
            <li><button onClick={() => setActiveTool(ToolType.MORTGAGE_CALC)} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Mortgage Pro</button></li>
            <li><button onClick={() => setActiveTool(ToolType.EMI_CALC)} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">EMI Accelerator</button></li>
            <li><button onClick={() => setActiveTool(ToolType.SALARY_CALC)} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Salary Estimator</button></li>
            <li><button onClick={() => setActiveTool(ToolType.LOAN_COMPARE)} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Loan Intel</button></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Company</h5>
          <ul className="space-y-4">
            <li><button onClick={() => setActiveTool(ToolType.ABOUT)} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">About QuantCurb</button></li>
            <li><button onClick={() => setActiveTool(ToolType.METHODOLOGY)} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Methodology</button></li>
            <li><button onClick={() => setActiveTool(ToolType.CONTACT)} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Contact Support</button></li>
            <li><button onClick={() => setActiveTool(ToolType.DISCLAIMER)} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors text-rose-500">Legal Disclaimer</button></li>
            <li><button onClick={() => setActiveTool(ToolType.PRIVACY)} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Privacy Policy</button></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-10 rounded-3xl border border-amber-200 bg-amber-50 px-6 py-5 text-xs text-amber-900 leading-relaxed font-semibold">
        Financial Disclaimer: All figures, projections, and outputs shown on this calculator site are
        estimates only, provided for informational purposes, and should not be relied upon as
        financial, tax, investment, or legal advice. Results can vary based on market conditions,
        fees, taxes, and individual circumstances. You are responsible for verifying information and
        consulting qualified professionals before making any financial decisions.
        <span className="block mt-3">
          FTC Affiliate Disclosure: This site may include affiliate links or partnerships. If you
          click or purchase through those links, we may receive compensation at no additional cost to
          you. We only feature partners we believe may be useful, but you should evaluate any service
          independently.
        </span>
      </div>

      <div className="max-w-7xl mx-auto border-t mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">© 2025 QUANTCURB.COM - CALCULATED WITH PRECISION</p>
        <div className="flex gap-6">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">SSL SECURED</span>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">GDPR COMPLIANT</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

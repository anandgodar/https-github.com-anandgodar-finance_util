
import React from 'react';
import { ToolType } from '../types';

interface FooterProps {
  setActiveTool: (tool: ToolType) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveTool }) => {
  return (
    <footer className="bg-white border-t mt-auto pt-16 pb-24 md:pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <h4 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <span className="p-2 bg-slate-900 text-white rounded-lg">🏦</span> FinVault Intelligence
          </h4>
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
            Empowering individuals with high-fidelity financial modeling. Our mission is to make complex wealth management accessible to everyone through AI and data science.
          </p>
          <div className="flex gap-4 mt-8">
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">𝕏</div>
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">in</div>
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">ig</div>
          </div>
        </div>

        <div>
          <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Utilities</h5>
          <ul className="space-y-4">
            <li><button onClick={() => setActiveTool(ToolType.MORTGAGE_CALC)} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Mortgage Pro</button></li>
            <li><button onClick={() => setActiveTool(ToolType.EMI_CALC)} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">EMI Accelerator</button></li>
            <li><button onClick={() => setActiveTool(ToolType.SALARY_CALC)} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Salary Estimator</button></li>
            <li><button onClick={() => setActiveTool(ToolType.LOAN_COMPARE)} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Loan Intelligence</button></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Company</h5>
          <ul className="space-y-4">
            <li><button onClick={() => setActiveTool(ToolType.FAQ)} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Financial FAQ</button></li>
            <li><button onClick={() => setActiveTool(ToolType.PRIVACY)} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Privacy Policy</button></li>
            <li><button onClick={() => setActiveTool(ToolType.SITEMAP)} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Visual Sitemap</button></li>
            <li><button onClick={() => setActiveTool(ToolType.MARKET_INSIGHTS)} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">AI Insights</button></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">© 2024 FINVAULT PRO - ALL RIGHTS RESERVED</p>
        <div className="flex gap-6">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">SOC2 COMPLIANT</span>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">GDPR READY</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

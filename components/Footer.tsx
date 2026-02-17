
import React from 'react';
import Link from 'next/link';
import { ToolType } from '../types';

interface FooterProps {
  setActiveTool: (tool: ToolType) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveTool }) => {
  const handleClick = (e: React.MouseEvent, tool: ToolType) => {
    e.preventDefault();
    setActiveTool(tool);
  };

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
            <a href="https://twitter.com/quantcurb" target="_blank" rel="noopener noreferrer" aria-label="QuantCurb on X (Twitter)" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">𝕏</a>
            <a href="https://linkedin.com/company/quantcurb" target="_blank" rel="noopener noreferrer" aria-label="QuantCurb on LinkedIn" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">in</a>
            <a href="https://github.com/quantcurb" target="_blank" rel="noopener noreferrer" aria-label="QuantCurb on GitHub" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">gh</a>
          </div>
        </div>

        <div>
          <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Quant Suite</h5>
          <nav aria-label="Financial calculators">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/mortgage-payment-calculator/"
                  onClick={(e) => handleClick(e, ToolType.MORTGAGE_CALC)}
                  className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Mortgage Pro
                </Link>
              </li>
              <li>
                <Link
                  href="/loan-emi-calculator/"
                  onClick={(e) => handleClick(e, ToolType.EMI_CALC)}
                  className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  EMI Accelerator
                </Link>
              </li>
              <li>
                <Link
                  href="/salary-tax-estimator/"
                  onClick={(e) => handleClick(e, ToolType.SALARY_CALC)}
                  className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Salary Estimator
                </Link>
              </li>
              <li>
                <Link
                  href="/loan-comparison-tool/"
                  onClick={(e) => handleClick(e, ToolType.LOAN_COMPARE)}
                  className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Loan Intel
                </Link>
              </li>
              <li>
                <Link
                  href="/early-retirement-fire-planner/"
                  onClick={(e) => handleClick(e, ToolType.FIRE_PLANNER)}
                  className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  FIRE Planner
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/"
                  onClick={(e) => handleClick(e, ToolType.BLOG_INDEX)}
                  className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Financial Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Company</h5>
          <nav aria-label="Company links">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about-quantcurb/"
                  onClick={(e) => handleClick(e, ToolType.ABOUT)}
                  className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  About QuantCurb
                </Link>
              </li>
              <li>
                <Link
                  href="/methodology-assumptions/"
                  onClick={(e) => handleClick(e, ToolType.METHODOLOGY)}
                  className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Methodology
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us/"
                  onClick={(e) => handleClick(e, ToolType.CONTACT)}
                  className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-disclaimer/"
                  onClick={(e) => handleClick(e, ToolType.DISCLAIMER)}
                  className="text-sm font-bold text-rose-500 hover:text-rose-600 transition-colors"
                >
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy/"
                  onClick={(e) => handleClick(e, ToolType.PRIVACY)}
                  className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap/"
                  onClick={(e) => handleClick(e, ToolType.SITEMAP)}
                  className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </nav>
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
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">&copy; 2025 QUANTCURB.COM - CALCULATED WITH PRECISION</p>
        <div className="flex gap-6">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">SSL SECURED</span>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">GDPR COMPLIANT</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

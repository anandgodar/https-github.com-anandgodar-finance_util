import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const StudentLoanRefinanceMath2026: React.FC<BlogProps> = ({ onNavigate }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <header className="space-y-6">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span>📅 Updated February 2026</span>
          <span>•</span>
          <span>⏱️ 10 min read</span>
          <span>•</span>
          <span>🎓 Student Loans</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Should You Refinance Your Student Loans? The Math You Need to Know
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          A lower rate can save thousands, but refinancing federal loans can mean losing protections like income-driven
          repayment and forgiveness. Here&apos;s how to run the math.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Simulate your new monthly payment</h3>
              <p className="text-sm text-slate-600">
                Compare your current payment to a refinanced rate.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.LOAN_COMPARE)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Loan Comparison →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('math')} className="text-indigo-600 hover:underline">1. Refinancing math</button></li>
          <li><button onClick={() => scrollToSection('tradeoffs')} className="text-indigo-600 hover:underline">2. Federal protections you lose</button></li>
          <li><button onClick={() => scrollToSection('when')} className="text-indigo-600 hover:underline">3. When refinancing makes sense</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="math" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">The math: interest savings vs term length</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A lower rate can reduce total interest, but extending the term can offset savings. Compare total interest and
            payoff timelines, not just the monthly payment.
          </p>
        </section>

        <section id="tradeoffs" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Federal protections you give up</h2>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• Income-driven repayment plans</li>
            <li>• Public Service Loan Forgiveness eligibility</li>
            <li>• Deferment and forbearance options</li>
          </ul>
        </section>

        <section id="when" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">When refinancing makes sense</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Refinancing can be smart if you have stable income, high-interest private loans, and no plans to use federal
            programs. Always run the numbers first.
          </p>
        </section>
      </article>
    </div>
  );
};

export default StudentLoanRefinanceMath2026;

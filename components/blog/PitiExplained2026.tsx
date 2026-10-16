import React from 'react';
import { ToolType } from '../../types';

interface BlogProps {
  onNavigate?: (tool: ToolType) => void;
}

const PitiExplained2026: React.FC<BlogProps> = ({ onNavigate }) => {
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
          <span>🏡 Mortgages</span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          PITI Explained: Why Your Mortgage Payment Is Higher Than the Sticker Price
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          The list price doesn&apos;t tell you the monthly payment. <strong>PITI</strong> stands for principal, interest, taxes,
          and insurance — the four pieces that actually decide what you pay each month.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Estimate your true PITI payment</h3>
              <p className="text-sm text-slate-600">
                Account for taxes and insurance so your mortgage estimate matches reality.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.(ToolType.MORTGAGE_CALC)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition whitespace-nowrap"
            >
              Use Mortgage Pro →
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-lg font-black text-slate-900 mb-4">📋 Table of Contents</h2>
        <ol className="space-y-2 text-sm">
          <li><button onClick={() => scrollToSection('piti')} className="text-indigo-600 hover:underline">1. What PITI means</button></li>
          <li><button onClick={() => scrollToSection('principal')} className="text-indigo-600 hover:underline">2. Principal and interest</button></li>
          <li><button onClick={() => scrollToSection('taxes')} className="text-indigo-600 hover:underline">3. Property taxes</button></li>
          <li><button onClick={() => scrollToSection('insurance')} className="text-indigo-600 hover:underline">4. Homeowners insurance</button></li>
          <li><button onClick={() => scrollToSection('example')} className="text-indigo-600 hover:underline">5. A real payment example</button></li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none space-y-12">
        <section id="piti" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">What PITI actually covers</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            PITI is the full mortgage payment most lenders use to judge affordability. It&apos;s not just the loan — it&apos;s the
            loan plus property taxes and homeowners insurance.
          </p>
          <ul className="space-y-2 text-lg text-slate-700">
            <li>• <strong>P</strong>rincipal: the amount that reduces your loan balance.</li>
            <li>• <strong>I</strong>nterest: the cost of borrowing.</li>
            <li>• <strong>T</strong>axes: local property taxes paid monthly via escrow.</li>
            <li>• <strong>I</strong>nsurance: homeowners insurance premiums.</li>
          </ul>
        </section>

        <section id="principal" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Principal and interest are just the baseline</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Your mortgage rate and loan term set the baseline payment. But taxes and insurance can add 15% to 40% on top
            depending on your location and coverage.
          </p>
        </section>

        <section id="taxes" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Property taxes can swing the payment</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Two identical homes can have wildly different payments if their tax rates differ. Always check the local tax
            rate before you fall in love with a list price.
          </p>
        </section>

        <section id="insurance" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Insurance is smaller — but not optional</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Insurance is usually the smallest piece of PITI, but it still adds hundreds per month in high-risk or coastal
            areas. Lenders require it to protect the home.
          </p>
        </section>

        <section id="example" className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Example: $450,000 home payment breakdown</h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <ul className="space-y-2 text-lg text-slate-700">
              <li>• Principal + interest: ~$2,700</li>
              <li>• Property taxes: ~$450</li>
              <li>• Insurance: ~$140</li>
              <li>• <strong>Total PITI:</strong> ~$3,290/month</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
};

export default PitiExplained2026;

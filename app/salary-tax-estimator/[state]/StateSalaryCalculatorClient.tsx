'use client';

import React from 'react';
import SalaryCalculator from '../../../components/SalaryCalculator';
import SiteShell from '../../../components/SiteShell';
import { ToolType } from '../../../types';

type StateSalaryCalculatorClientProps = {
  stateCode: string;
  stateName: string;
  stateTaxRate: number;
  stateDescription: string;
  taxStatus: 'none' | 'flat' | 'progressive';
};

export default function StateSalaryCalculatorClient({ 
  stateCode, 
  stateName,
  stateTaxRate,
  stateDescription,
  taxStatus
}: StateSalaryCalculatorClientProps) {
  const handleNavigate = (tool: ToolType) => {
    // Handle navigation if needed
    if (tool === ToolType.DASHBOARD) {
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
      return;
    }
    
    // Handle blog posts
    if (tool.toString().startsWith('blog/')) {
      const blogSlug = tool.toString().replace('blog/', '');
      if (typeof window !== 'undefined') {
        window.location.href = `/blog/${blogSlug}`;
      }
      return;
    }
    
    const path = `/${tool}`;
    if (typeof window !== 'undefined') {
      window.location.href = path;
    }
  };

  // Generate state-specific intro text
  const getStateIntroText = () => {
    if (stateTaxRate === 0) {
      return stateDescription;
    }
    return stateDescription;
  };

  // Generate tax explanation based on tax status
  const getTaxExplanation = () => {
    if (taxStatus === 'none') {
      return `Residents of ${stateName} are subject to federal tax rates, but lucky for you, there is no state income tax on wages. This means your paycheck is only subject to federal income tax and FICA (Social Security and Medicare) taxes, resulting in higher take-home pay compared to states with income taxes.`;
    } else if (taxStatus === 'flat') {
      const ratePercent = (stateTaxRate * 100).toFixed(2);
      return `Residents of ${stateName} are subject to federal tax rates, and you must also factor in state income taxes. ${stateName} uses a flat ${ratePercent}% state income tax rate, which makes calculating your take-home pay straightforward compared to progressive tax states.`;
    } else {
      return `Residents of ${stateName} are subject to federal tax rates, and you must also factor in state income taxes. ${stateName} uses a progressive tax system, meaning your tax rate increases as your income rises. Use our calculator below to see exactly how ${stateName}'s tax brackets affect your take-home pay.`;
    }
  };

  return (
    <SiteShell activeTool={ToolType.SALARY_CALC}>
      <div className="w-full max-w-7xl mx-auto">
        {/* Unique SEO Header */}
        <header className="mb-8 text-center bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            {stateName} Paycheck Calculator 2026
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {getStateIntroText()}
          </p>
        </header>

        {/* The Tool (Pre-selected state) */}
        <div className="mb-12">
          <SalaryCalculator 
            onNavigate={handleNavigate}
            initialState={stateCode}
            customTitle={`${stateName} Salary Paycheck Calculator 2026`}
            introText={getStateIntroText()}
          />
        </div>

        {/* Programmatic SEO Content Block */}
        <article className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 prose prose-slate max-w-none">
          <h2 className="text-3xl font-black text-slate-900 mb-6">How Taxes Work in {stateName}</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            {getTaxExplanation()}
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mt-8">
            <h3 className="text-xl font-black text-slate-900 mb-4">What Gets Deducted from Your {stateName} Paycheck?</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-black">•</span>
                <span><strong>Federal Income Tax:</strong> Based on your income bracket and filing status (single, married, head of household)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-black">•</span>
                <span><strong>FICA Taxes:</strong> 7.65% total (6.2% Social Security on income up to $168,600, 1.45% Medicare on all income)</span>
              </li>
              {stateTaxRate > 0 && (
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-black">•</span>
                  <span><strong>{stateName} State Income Tax:</strong> {taxStatus === 'flat' ? `Flat ${(stateTaxRate * 100).toFixed(2)}% rate` : 'Progressive rates based on income brackets'}</span>
                </li>
              )}
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-black">•</span>
                <span><strong>401(k) Contributions:</strong> Pre-tax contributions reduce your taxable income</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-black">•</span>
                <span><strong>Health Insurance:</strong> Pre-tax deductions for employer-sponsored health plans</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-200">
            <h3 className="text-xl font-black text-slate-900 mb-3">Why Use a {stateName} Paycheck Calculator?</h3>
            <p className="text-slate-700 leading-relaxed">
              Calculating your exact take-home pay in {stateName} is essential for budgeting, financial planning, and making informed decisions about job offers or relocations. Our calculator accounts for federal tax brackets, {stateTaxRate > 0 ? 'state income tax rates,' : ''} FICA deductions, and common pre-tax deductions like 401(k) contributions and health insurance premiums.
            </p>
          </div>
        </article>
      </div>
    </SiteShell>
  );
}

'use client';

import React from 'react';
import SalaryCalculator from '../../../components/SalaryCalculator';
import SiteShell from '../../../components/SiteShell';
import AuthorCredentials from '../../../components/AuthorCredentials';
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

        {/* Visible FAQ Section - helps Google understand content quality */}
        <section className="mt-12 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
          <h2 className="text-3xl font-black text-slate-900 mb-8">
            Frequently Asked Questions: {stateName} Taxes
          </h2>
          <div className="space-y-6">
            {getStateSalaryFAQs(stateName, stateTaxRate, taxStatus).map((faq, idx) => (
              <details
                key={idx}
                className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden"
                open={idx === 0}
              >
                <summary className="cursor-pointer p-6 font-bold text-lg text-slate-800 group-open:text-indigo-600 transition-colors list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform text-xl">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related State Tools */}
        <div className="mt-12 bg-gradient-to-br from-indigo-900 to-purple-900 text-white rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-black mb-6">
            More {stateName} Financial Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href={`/mortgage-calculator/${stateCode.toLowerCase()}`} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all border border-white/20">
              <div className="text-3xl mb-2">🏡</div>
              <div className="font-black text-lg">{stateName} Mortgage Calculator</div>
              <div className="text-sm text-indigo-200">Calculate home loan payments</div>
            </a>
            <a href={`/early-retirement-fire-planner/${stateCode.toLowerCase()}`} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all border border-white/20">
              <div className="text-3xl mb-2">🔥</div>
              <div className="font-black text-lg">{stateName} FIRE Calculator</div>
              <div className="text-sm text-indigo-200">Plan early retirement</div>
            </a>
            <a href={`/freelance-profit-hub/${stateCode.toLowerCase()}`} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all border border-white/20">
              <div className="text-3xl mb-2">💼</div>
              <div className="font-black text-lg">{stateName} Freelance Calculator</div>
              <div className="text-sm text-indigo-200">Self-employment taxes</div>
            </a>
          </div>
        </div>

        {/* E-E-A-T: Author Credentials for Trust Signals */}
        <AuthorCredentials variant="full" />
      </div>
    </SiteShell>
  );
}

// Helper: State-specific salary FAQs for visible content
function getStateSalaryFAQs(
  stateName: string,
  stateTaxRate: number,
  taxStatus: 'none' | 'flat' | 'progressive'
): Array<{question: string, answer: string}> {
  const noTax = stateTaxRate === 0;
  const ratePercent = (stateTaxRate * 100).toFixed(2);

  // Calculate example take-home for $100k salary
  const federalTax = 17400; // Approximate for single filer at $100k
  const fica = 7650; // 7.65% of $100k
  const stateTax = noTax ? 0 : 100000 * stateTaxRate;
  const takeHome = 100000 - federalTax - fica - stateTax;

  return [
    {
      question: `What is the ${stateName} state income tax rate in 2026?`,
      answer: noTax
        ? `${stateName} is one of the few states with NO state income tax! This means your earnings are only subject to federal income tax and FICA taxes (Social Security and Medicare). This can result in significantly higher take-home pay compared to states like California (13.3% top rate) or New York (10.9% top rate).`
        : taxStatus === 'flat'
          ? `${stateName} has a flat state income tax rate of ${ratePercent}%. This means all taxable income is taxed at the same rate regardless of how much you earn. Flat tax states make calculating your take-home pay more straightforward.`
          : `${stateName} uses a progressive income tax system with a top marginal rate of ${ratePercent}%. This means higher portions of your income are taxed at higher rates. Use our calculator to see your effective tax rate based on your specific income.`
    },
    {
      question: `How much will I take home from a $100,000 salary in ${stateName}?`,
      answer: `On a $100,000 annual salary in ${stateName}, you can expect to take home approximately $${takeHome.toLocaleString()} per year (about $${Math.round(takeHome / 12).toLocaleString()} per month) as a single filer with no pre-tax deductions. This accounts for federal income tax (~$17,400), FICA taxes (~$7,650)${noTax ? '' : `, and ${stateName} state income tax (~$${Math.round(stateTax).toLocaleString()})`}. Your actual take-home will vary based on filing status, deductions, and withholding choices.`
    },
    {
      question: `How do ${stateName} taxes compare to other states?`,
      answer: noTax
        ? `${stateName} offers significant tax advantages compared to most states. By having no state income tax, residents keep more of their earnings. However, ${stateName} may offset this through other taxes like property tax or sales tax. Always consider the total tax picture, not just income tax, when comparing states.`
        : `${stateName}'s ${ratePercent}% ${taxStatus === 'flat' ? 'flat' : 'top marginal'} income tax rate is ${stateTaxRate > 0.05 ? 'higher' : 'lower'} than the national average. States like Texas, Florida, and Nevada have no income tax, while California and New York exceed 10%. Consider total tax burden including property and sales taxes when comparing.`
    },
    {
      question: `Does ${stateName} tax retirement income?`,
      answer: noTax
        ? `No! Since ${stateName} has no state income tax, all forms of retirement income are tax-free at the state level. This includes: Social Security benefits, 401(k) withdrawals, IRA distributions, pension income, and investment income. This makes ${stateName} attractive for retirees looking to maximize their retirement income.`
        : `${stateName} taxes most forms of retirement income including 401(k) withdrawals, IRA distributions, and pension income. Social Security benefits may be partially or fully exempt depending on your total income. Check current ${stateName} tax rules or use our FIRE calculator for retirement planning in ${stateName}.`
    },
    {
      question: `Should I move to ${stateName} for lower taxes?`,
      answer: noTax
        ? `${stateName}'s lack of state income tax can mean substantial savings, especially for high earners. A $200,000 salary in a 10% tax state would save $20,000 annually in ${stateName}. However, also consider: cost of living, property tax rates, sales taxes, job opportunities, and quality of life factors before relocating. Use our cost of living calculator to compare total expenses.`
        : `Moving to ${stateName} for tax purposes depends on your current state and income level. If coming from a no-tax state like Texas or Florida, you would pay more. If coming from California or New York, you might save. Consider total compensation, cost of living, career opportunities, and lifestyle factors beyond just tax rates.`
    }
  ];
}

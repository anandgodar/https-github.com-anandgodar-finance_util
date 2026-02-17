'use client';

import React from 'react';
import QuarterlyTaxCalculator from '../../../components/QuarterlyTaxCalculator';
import SiteShell from '../../../components/SiteShell';
import AuthorCredentials from '../../../components/AuthorCredentials';
import { ToolType } from '../../../types';
import { StateConfig } from '../../../lib/state-configs';

type StateToolClientProps = {
  stateConfig: StateConfig;
};

export default function StateToolClient({ stateConfig }: StateToolClientProps) {
  const handleNavigate = (tool: ToolType) => {
    // Handle navigation without state prefix
    if (tool === ToolType.DASHBOARD) {
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
      return;
    }

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

  // Generate state-specific intro
  const getStateIntro = () => {
    const taxInfo = stateConfig.stateTaxRate === 0
      ? `With no state income tax, ${stateConfig.name} offers significant advantages for ${getToolContext()}.`
      : `${stateConfig.name}'s ${stateConfig.stateTaxRate.toFixed(2)}% state income tax affects your ${getToolContext()}. Use our calculator to see the exact impact.`;

    return taxInfo;
  };

  const getToolContext = () => {
    return 'quarterly tax obligations';
  };

  const getTaxAdvantages = () => {
    if (stateConfig.taxAdvantages.length === 0) {
      return null;
    }

    return (
      <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200 mt-6">
        <h3 className="text-xl font-black text-slate-900 mb-4">
          💰 {stateConfig.name} Tax Advantages
        </h3>
        <ul className="space-y-2">
          {stateConfig.taxAdvantages.map((advantage, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-700">
              <span className="text-emerald-600 font-black">•</span>
              <span>{advantage}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <SiteShell activeTool={ToolType.QUARTERLY_TAX}>
      <div className="w-full max-w-7xl mx-auto">
        {/* SEO Header */}
        <header className="mb-8 text-center bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl">{getStateEmoji(stateConfig.code)}</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              {stateConfig.name} Quarterly Tax Calculator
            </h1>
          </div>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {getStateIntro()}
          </p>
        </header>

        {/* State Stats */}
        <div className="mb-8 bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8">
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {stateConfig.name} Financial Profile
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 border-l-4 border-indigo-600">
              <p className="text-sm text-slate-600 mb-1">State Income Tax</p>
              <p className="text-3xl font-black text-slate-900">
                {stateConfig.stateTaxRate === 0 ? 'None' : `${stateConfig.stateTaxRate.toFixed(2)}%`}
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 border-l-4 border-purple-600">
              <p className="text-sm text-slate-600 mb-1">Property Tax Rate</p>
              <p className="text-3xl font-black text-slate-900">
                {stateConfig.propertyTaxRate.toFixed(2)}%
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 border-l-4 border-emerald-600">
              <p className="text-sm text-slate-600 mb-1">Cost of Living Index</p>
              <p className="text-3xl font-black text-slate-900">
                {stateConfig.costOfLivingIndex}
              </p>
              <p className="text-xs text-slate-500 mt-1">100 = US average</p>
            </div>
          </div>
          {getTaxAdvantages()}
        </div>

        {/* The Calculator Tool */}
        <div className="mb-12">
          <QuarterlyTaxCalculator onNavigate={handleNavigate} initialState={stateConfig.code} />
        </div>

        {/* SEO Content */}
        <article className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 prose prose-slate max-w-none">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            Why Use a {stateConfig.name} Quarterly Tax Calculator?
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            {getWhyUseContent(stateConfig, 'quarterly-tax-calculator')}
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mt-8">
            <h3 className="text-xl font-black text-slate-900 mb-4">
              Key Factors for {stateConfig.name} Residents
            </h3>
            <ul className="space-y-3 text-slate-700">
              {getKeyFactors(stateConfig, 'quarterly-tax-calculator').map((factor, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-indigo-600 font-black">•</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Visible FAQ Section - helps Google understand content quality */}
        <section className="mt-12 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
          <h2 className="text-3xl font-black text-slate-900 mb-8">
            Frequently Asked Questions: Quarterly Taxes in {stateConfig.name}
          </h2>
          <div className="space-y-6">
            {getStateQuarterlyTaxFAQs(stateConfig).map((faq, idx) => (
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
            More {stateConfig.name} Financial Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {getRelatedTools('quarterly-tax-calculator', stateConfig.slug).map((tool) => (
              <a
                key={tool.slug}
                href={`/${tool.slug}/${stateConfig.slug}`}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all border border-white/20"
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <div className="font-black text-lg">{tool.name}</div>
                <div className="text-sm text-indigo-200">{tool.description}</div>
              </a>
            ))}
          </div>
        </div>

        {/* E-E-A-T: Author Credentials for Trust Signals */}
        <AuthorCredentials variant="full" />
      </div>
    </SiteShell>
  );
}

// Helper: State emoji
function getStateEmoji(code: string): string {
  const emojis: Record<string, string> = {
    TX: '🤠', CA: '🌴', FL: '☀️', NY: '🗽', WA: '🌲',
    NV: '🎰', AZ: '🌵', NC: '🏔️', GA: '🍑',
  };
  return emojis[code] || '📍';
}

// Helper: Why use content
function getWhyUseContent(state: StateConfig, toolSlug: string): string {
  const toolContexts: Record<string, string> = {
    'early-retirement-fire-planner': `Planning early retirement in ${state.name} requires understanding state-specific tax implications, cost of living, and retirement benefits. Our calculator accounts for ${state.name}'s ${state.stateTaxRate === 0 ? 'tax-free status' : `${state.stateTaxRate.toFixed(2)}% state income tax`} to give you an accurate FIRE number.`,
    'mortgage-calculator': `Buying a home in ${state.name} means factoring in property taxes (${state.propertyTaxRate.toFixed(2)}%), local closing costs, and state-specific programs. Our calculator shows your true monthly PITI payment for ${state.name} properties.`,
    'freelance-profit-hub': `Freelancing in ${state.name} comes with unique tax obligations. With ${state.stateTaxRate === 0 ? 'no state income tax' : `a ${state.stateTaxRate.toFixed(2)}% state income tax`}, understanding your true profit after all taxes is essential.`,
    'quarterly-tax-calculator': `Calculating quarterly estimated taxes in ${state.name} requires accounting for federal, state, and self-employment taxes. Our calculator ensures you meet safe harbor requirements and avoid penalties.`,
  };
  return toolContexts[toolSlug] || '';
}

// Helper: Key factors
function getKeyFactors(state: StateConfig, toolSlug: string): string[] {
  const baseFactors: Record<string, string[]> = {
    'early-retirement-fire-planner': [
      `${state.name}'s ${state.stateTaxRate === 0 ? 'zero state income tax' : `${state.stateTaxRate.toFixed(2)}% state income tax rate`}`,
      `Cost of living index: ${state.costOfLivingIndex} (US average = 100)`,
      `Property tax rate: ${state.propertyTaxRate.toFixed(2)}% annually`,
      state.retirementFriendly ? 'Retirement-friendly state policies' : 'State retirement tax policies',
    ],
    'mortgage-calculator': [
      `Property tax: ${state.propertyTaxRate.toFixed(2)}% of home value annually`,
      `Average home price in ${state.name}: $${state.avgHomePrice.toLocaleString()}`,
      `Average closing costs: $${state.avgClosingCosts.toLocaleString()}`,
      `First-time buyer programs: ${state.firstTimeBuyerPrograms.join(', ')}`,
    ],
    'freelance-profit-hub': [
      `Self-employment tax: 15.3% on net profits`,
      `${state.name} state tax: ${state.stateTaxRate === 0 ? 'None' : `${state.stateTaxRate.toFixed(2)}%`}`,
      `LLC filing fee: $${state.llcFilingFee}`,
      `Annual franchise tax: $${state.annualFranchiseTax}`,
    ],
    'quarterly-tax-calculator': [
      `Federal estimated tax due quarterly`,
      `${state.name} state tax: ${state.stateTaxRate === 0 ? 'None required' : `${state.stateTaxRate.toFixed(2)}% estimated quarterly`}`,
      'Self-employment tax (15.3%) calculated quarterly',
      'Safe harbor rules to avoid penalties',
    ],
  };
  return baseFactors[toolSlug] || [];
}

// Helper: Related tools
function getRelatedTools(currentToolSlug: string, stateSlug: string) {
  const allTools = [
    { slug: 'early-retirement-fire-planner', name: 'FIRE Calculator', icon: '🔥', description: 'Plan early retirement' },
    { slug: 'mortgage-calculator', name: 'Mortgage Calculator', icon: '🏡', description: 'Home loan payments' },
    { slug: 'salary-tax-estimator', name: 'Salary Calculator', icon: '💰', description: 'Take-home pay' },
    { slug: 'freelance-profit-hub', name: 'Freelance Hub', icon: '💼', description: 'Self-employment taxes' },
  ];

  return allTools.filter(t => t.slug !== currentToolSlug).slice(0, 4);
}

// Helper: State-specific Quarterly Tax FAQs for visible content
function getStateQuarterlyTaxFAQs(state: StateConfig): Array<{question: string, answer: string}> {
  const noIncomeTax = state.stateTaxRate === 0;

  // Calculate example quarterly payment for $100k self-employment income
  const annualIncome = 100000;
  const netProfit = annualIncome * 0.8; // After expenses
  const selfEmploymentTax = Math.round(netProfit * 0.9235 * 0.153);
  const federalTax = Math.round((netProfit - selfEmploymentTax * 0.5) * 0.22);
  const stateTax = noIncomeTax ? 0 : Math.round(netProfit * state.stateTaxRate);
  const totalAnnualTax = selfEmploymentTax + federalTax + stateTax;
  const quarterlyPayment = Math.round(totalAnnualTax / 4);

  return [
    {
      question: `When are quarterly tax payments due in ${state.name} for 2026?`,
      answer: `For 2026, ${state.name} quarterly estimated tax deadlines are: Q1 (Jan-Mar): April 15, 2026, Q2 (Apr-May): June 15, 2026, Q3 (Jun-Aug): September 15, 2026, Q4 (Sep-Dec): January 15, 2027. ${noIncomeTax ? `Since ${state.name} has no state income tax, you only need to pay federal quarterly taxes to the IRS using Form 1040-ES.` : `You'll need to pay both federal (IRS Form 1040-ES) and ${state.name} state estimated taxes on these dates.`} Missing deadlines can result in underpayment penalties.`
    },
    {
      question: `How much should my quarterly payment be in ${state.name}?`,
      answer: `For a ${state.name} self-employed individual with $100,000 annual income and $20,000 in expenses ($80,000 net profit), quarterly payments would be approximately: Self-employment tax: $${Math.round(selfEmploymentTax / 4).toLocaleString()}/quarter, Federal income tax: ~$${Math.round(federalTax / 4).toLocaleString()}/quarter${noIncomeTax ? '' : `, ${state.name} state tax: ~$${Math.round(stateTax / 4).toLocaleString()}/quarter`}. Total quarterly payment: ~$${quarterlyPayment.toLocaleString()}. Use our calculator above for your exact amount based on your income.`
    },
    {
      question: `How do I avoid quarterly tax penalties in ${state.name}?`,
      answer: `To avoid underpayment penalties in ${state.name}, meet the IRS safe harbor rules: Pay at least 90% of your current year's tax liability, OR pay 100% of last year's tax liability (110% if AGI exceeded $150,000). ${noIncomeTax ? `${state.name} doesn't have state income tax, so you only need to worry about federal safe harbor rules.` : `For ${state.name} state taxes, similar safe harbor rules typically apply - check ${state.name}'s tax authority for specific requirements.`} Making equal quarterly payments based on projected annual income is the safest approach.`
    },
    {
      question: `Do I need to pay quarterly taxes if I have a W-2 job in ${state.name}?`,
      answer: `If you have a W-2 job with adequate withholding, you may not need quarterly payments${noIncomeTax ? '' : ` for ${state.name} state taxes`}. However, if you have significant side income (freelancing, investments, rental income), you should make quarterly payments on that additional income. You can also ask your employer to increase W-2 withholding to cover extra income, simplifying your tax payments. Use our calculator to determine if your W-2 withholding covers your total tax liability.`
    },
    {
      question: `What forms do I need for ${state.name} quarterly taxes?`,
      answer: `For federal quarterly taxes, use IRS Form 1040-ES with payment vouchers or pay online at irs.gov/payments. ${noIncomeTax
        ? `Great news for ${state.name} residents: with no state income tax, you only need to file federal quarterly payments!`
        : `For ${state.name} state estimated taxes, you'll need the state's equivalent estimated tax form and payment voucher. Check the ${state.name} Department of Revenue website for specific forms and online payment options.`} Keep records of all payments for your annual tax return. You can also use IRS Direct Pay or EFTPS for federal payments.`
    }
  ];
}

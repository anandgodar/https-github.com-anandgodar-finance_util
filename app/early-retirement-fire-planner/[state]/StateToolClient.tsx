'use client';

import React from 'react';
import FIREPlanner from '../../../components/FIREPlanner';
import SiteShell from '../../../components/SiteShell';
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
    return 'early retirement planning';
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
    <SiteShell activeTool={ToolType.FIRE_PLANNER}>
      <div className="w-full max-w-7xl mx-auto">
        {/* SEO Header */}
        <header className="mb-8 text-center bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl">{getStateEmoji(stateConfig.code)}</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              {stateConfig.name} FIRE Calculator
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
          <FIREPlanner onNavigate={handleNavigate} />
        </div>

        {/* SEO Content */}
        <article className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 prose prose-slate max-w-none">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            Why Use a {stateConfig.name} FIRE Calculator?
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            {getWhyUseContent(stateConfig, 'early-retirement-fire-planner')}
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mt-8">
            <h3 className="text-xl font-black text-slate-900 mb-4">
              Key Factors for {stateConfig.name} Residents
            </h3>
            <ul className="space-y-3 text-slate-700">
              {getKeyFactors(stateConfig, 'early-retirement-fire-planner').map((factor, idx) => (
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
            Frequently Asked Questions: FIRE in {stateConfig.name}
          </h2>
          <div className="space-y-6">
            {getStateFIREFAQs(stateConfig).map((faq, idx) => (
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
            {getRelatedTools('early-retirement-fire-planner', stateConfig.slug).map((tool) => (
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

// Helper: State-specific FIRE FAQs for visible content
function getStateFIREFAQs(state: StateConfig): Array<{question: string, answer: string}> {
  const noIncomeTax = state.stateTaxRate === 0;

  // Calculate example FIRE numbers
  const annualExpenses = 60000 * (state.costOfLivingIndex / 100);
  const fireNumber25x = Math.round(annualExpenses * 25);
  const fireNumber33x = Math.round(annualExpenses * 33.3);
  const monthlyExpenses = Math.round(annualExpenses / 12);

  return [
    {
      question: `What is a good FIRE number for ${state.name} in 2026?`,
      answer: `Your FIRE number in ${state.name} depends on your desired annual spending. With ${state.name}'s cost of living index at ${state.costOfLivingIndex} (100 = US average), typical annual expenses of $60,000 nationally would be approximately $${annualExpenses.toLocaleString()} in ${state.name}. Using the 4% rule (25x expenses), your FIRE number would be $${fireNumber25x.toLocaleString()}. For a more conservative 3% withdrawal rate (33x expenses), you'd need $${fireNumber33x.toLocaleString()}.${noIncomeTax ? ` ${state.name}'s zero state income tax means you keep more of your investment withdrawals.` : ''}`
    },
    {
      question: `Is ${state.name} a good state for early retirement?`,
      answer: noIncomeTax
        ? `${state.name} is excellent for early retirement due to its zero state income tax. This means your 401(k) withdrawals, IRA distributions, Social Security benefits, and investment gains are only taxed federally. Combined with a cost of living index of ${state.costOfLivingIndex}, ${state.retirementFriendly ? `and retirement-friendly policies, ${state.name} ranks among the best states for FIRE.` : `${state.name} offers significant advantages for FIRE pursuers.`}`
        : `${state.name} has a ${state.stateTaxRate.toFixed(2)}% state income tax which affects retirement income. However, with a cost of living index of ${state.costOfLivingIndex}, ${state.retirementFriendly ? `and retirement-friendly policies, it can still be a viable FIRE destination.` : 'you should factor this into your FIRE calculations.'} Use our calculator to see how ${state.name} taxes impact your retirement timeline.`
    },
    {
      question: `How much do I need to save monthly to FIRE in ${state.name}?`,
      answer: `To reach a $${fireNumber25x.toLocaleString()} FIRE number in ${state.name} in 15 years (assuming 7% annual returns), you'd need to save approximately $${Math.round(fireNumber25x / 300).toLocaleString()} per month. For a 20-year timeline, that drops to around $${Math.round(fireNumber25x / 500).toLocaleString()} per month. These calculations assume you're starting from zero; if you already have savings, use our calculator above for a personalized number. ${noIncomeTax ? `Remember, ${state.name}'s lack of state income tax means more of your paycheck can go toward savings.` : ''}`
    },
    {
      question: `Does ${state.name} tax retirement account withdrawals?`,
      answer: noIncomeTax
        ? `No! ${state.name} has no state income tax, which means all retirement account withdrawals are state tax-free. This includes: Traditional IRA distributions, 401(k) withdrawals, Roth conversions (federal tax only), pension income, and Social Security benefits. This makes ${state.name} one of the most tax-advantaged states for FIRE retirees.`
        : `Yes, ${state.name} taxes most retirement account withdrawals at the ${state.stateTaxRate.toFixed(2)}% state income tax rate. This includes Traditional IRA distributions and 401(k) withdrawals. Social Security benefits may be partially exempt. Roth IRA qualified distributions are tax-free at both federal and state levels. Factor these taxes into your FIRE calculations.`
    },
    {
      question: `What are typical monthly expenses for FIRE in ${state.name}?`,
      answer: `With ${state.name}'s cost of living index of ${state.costOfLivingIndex}, expect monthly expenses around $${monthlyExpenses.toLocaleString()} for a moderate lifestyle. Key expenses include: Housing (${state.propertyTaxRate.toFixed(2)}% property tax rate), Healthcare (varies by age/plan), Utilities, Food, Transportation, and Insurance. ${noIncomeTax ? `The lack of state income tax means your gross withdrawal needs are lower.` : `Factor in ${state.stateTaxRate.toFixed(2)}% state income tax on investment withdrawals.`} Our calculator above can give you a personalized breakdown.`
    }
  ];
}

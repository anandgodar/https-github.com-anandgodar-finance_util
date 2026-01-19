#!/usr/bin/env node

/**
 * Generate state-specific tool pages programmatically
 *
 * CRITICAL ARCHITECTURE NOTE:
 * This script generates pages that use SiteShell (NOT AppShell) to prevent
 * automatic redirects. AppShell has a useEffect that redirects to /${activeTool},
 * which would break state-specific SEO URLs like /texas/fire-calculator.
 *
 * Pattern: Follow app/salary-tax-estimator/[state]/page.tsx
 *
 * Usage:
 *   node scripts/generate-state-pages.js --tool=fire-calculator
 *   node scripts/generate-state-pages.js --tool=all --states=texas,florida
 *   node scripts/generate-state-pages.js --generate-params-only
 */

const fs = require('fs');
const path = require('path');

// Tool configurations for state-specific pages
const TOOLS = {
  'early-retirement-fire-planner': {
    toolType: 'FIRE_PLANNER',
    title: 'FIRE Calculator',
    componentName: 'FIREPlanner',
    description: 'Calculate your path to early retirement and financial independence',
    seoKeywords: 'fire calculator, early retirement calculator, financial independence',
  },
  'mortgage-calculator': {
    toolType: 'MORTGAGE_CALC',
    componentName: 'MortgageCalculator',
    title: 'Mortgage Calculator',
    description: 'Calculate monthly mortgage payments with PITI breakdown',
    seoKeywords: 'mortgage calculator, home loan calculator, piti calculator',
  },
  'freelance-profit-hub': {
    toolType: 'FREELANCE_PROFIT',
    componentName: 'FreelanceHub',
    title: 'Freelance Tax Calculator',
    description: 'Self-employment tax and profit calculation for freelancers',
    seoKeywords: 'freelance tax calculator, self employment tax, 1099 calculator',
  },
  'quarterly-tax-calculator': {
    toolType: 'QUARTERLY_TAX',
    componentName: 'QuarterlyTaxCalculator',
    title: 'Quarterly Tax Calculator',
    description: 'Estimate quarterly estimated tax payments for self-employed',
    seoKeywords: 'quarterly tax calculator, estimated taxes, self employed taxes',
  },
};

// Page template using SiteShell pattern (NO REDIRECT)
const stateToolPageTemplate = (toolSlug, toolConfig) => `import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { STATE_CONFIGS } from '@/lib/state-configs';
import StateToolClient from './StateToolClient';

type PageProps = {
  params: {
    state: string;
  };
};

export const dynamic = 'force-static';
export const dynamicParams = false;

// Generate static params for all configured states
export function generateStaticParams() {
  const stateKeys = Object.keys(STATE_CONFIGS);
  return stateKeys.map((stateKey) => ({
    state: stateKey
  }));
}

// Dynamic SEO metadata for each state
export function generateMetadata({ params }: PageProps): Metadata {
  const stateConfig = STATE_CONFIGS[params.state];

  if (!stateConfig) {
    return {
      title: '${toolConfig.title}',
      description: '${toolConfig.description}'
    };
  }

  const stateName = stateConfig.name;

  return {
    title: \`\${stateName} ${toolConfig.title} 2026 | ${toolConfig.description}\`,
    description: \`${toolConfig.description} for \${stateName} residents. Updated for 2026 with \${stateName}-specific tax rates, deductions, and regulations.\`,
    keywords: \`\${stateName} ${toolConfig.seoKeywords}, \${stateName.toLowerCase()} ${toolSlug}, \${stateName.toLowerCase()} taxes\`,
    alternates: {
      canonical: \`https://quantcurb.com/${toolSlug}/\${params.state}\`
    }
  };
}

export default function State${toolConfig.componentName}Page({ params }: PageProps) {
  const stateConfig = STATE_CONFIGS[params.state];

  if (!stateConfig) {
    notFound();
  }

  return <StateToolClient stateConfig={stateConfig} />;
}
`;

// Client component template (uses SiteShell, no AppShell)
const stateToolClientTemplate = (toolSlug, toolConfig) => `'use client';

import React from 'react';
import ${toolConfig.componentName} from '@/components/${toolConfig.componentName}';
import SiteShell from '@/components/SiteShell';
import { ToolType } from '@/types';
import { StateConfig } from '@/lib/state-configs';

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
        window.location.href = \`/blog/\${blogSlug}\`;
      }
      return;
    }

    const path = \`/\${tool}\`;
    if (typeof window !== 'undefined') {
      window.location.href = path;
    }
  };

  // Generate state-specific intro
  const getStateIntro = () => {
    const taxInfo = stateConfig.stateTaxRate === 0
      ? \`With no state income tax, \${stateConfig.name} offers significant advantages for \${getToolContext()}.\`
      : \`\${stateConfig.name}'s \${stateConfig.stateTaxRate.toFixed(2)}% state income tax affects your \${getToolContext()}. Use our calculator to see the exact impact.\`;

    return taxInfo;
  };

  const getToolContext = () => {
    switch('${toolSlug}') {
      case 'early-retirement-fire-planner':
        return 'early retirement planning';
      case 'mortgage-calculator':
        return 'home buying decisions';
      case 'freelance-profit-hub':
        return 'freelance business profits';
      case 'quarterly-tax-calculator':
        return 'quarterly tax obligations';
      default:
        return 'financial planning';
    }
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
    <SiteShell activeTool={ToolType.${toolConfig.toolType}}>
      <div className="w-full max-w-7xl mx-auto">
        {/* SEO Header */}
        <header className="mb-8 text-center bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl">{getStateEmoji(stateConfig.code)}</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              {stateConfig.name} ${toolConfig.title}
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
                {stateConfig.stateTaxRate === 0 ? 'None' : \`\${stateConfig.stateTaxRate.toFixed(2)}%\`}
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
          <${toolConfig.componentName} onNavigate={handleNavigate} initialState={stateConfig.code} />
        </div>

        {/* SEO Content */}
        <article className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 prose prose-slate max-w-none">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            Why Use a {stateConfig.name} ${toolConfig.title}?
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            {getWhyUseContent(stateConfig, '${toolSlug}')}
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mt-8">
            <h3 className="text-xl font-black text-slate-900 mb-4">
              Key Factors for {stateConfig.name} Residents
            </h3>
            <ul className="space-y-3 text-slate-700">
              {getKeyFactors(stateConfig, '${toolSlug}').map((factor, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-indigo-600 font-black">•</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Related State Tools */}
        <div className="mt-12 bg-gradient-to-br from-indigo-900 to-purple-900 text-white rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-black mb-6">
            More {stateConfig.name} Financial Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {getRelatedTools('${toolSlug}', stateConfig.slug).map((tool) => (
              <a
                key={tool.slug}
                href={\`/\${tool.slug}/\${stateConfig.slug}\`}
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
    'early-retirement-fire-planner': \`Planning early retirement in \${state.name} requires understanding state-specific tax implications, cost of living, and retirement benefits. Our calculator accounts for \${state.name}'s \${state.stateTaxRate === 0 ? 'tax-free status' : \`\${state.stateTaxRate.toFixed(2)}% state income tax\`} to give you an accurate FIRE number.\`,
    'mortgage-calculator': \`Buying a home in \${state.name} means factoring in property taxes (\${state.propertyTaxRate.toFixed(2)}%), local closing costs, and state-specific programs. Our calculator shows your true monthly PITI payment for \${state.name} properties.\`,
    'freelance-profit-hub': \`Freelancing in \${state.name} comes with unique tax obligations. With \${state.stateTaxRate === 0 ? 'no state income tax' : \`a \${state.stateTaxRate.toFixed(2)}% state income tax\`}, understanding your true profit after all taxes is essential.\`,
    'quarterly-tax-calculator': \`Calculating quarterly estimated taxes in \${state.name} requires accounting for federal, state, and self-employment taxes. Our calculator ensures you meet safe harbor requirements and avoid penalties.\`,
  };
  return toolContexts[toolSlug] || '';
}

// Helper: Key factors
function getKeyFactors(state: StateConfig, toolSlug: string): string[] {
  const baseFactors: Record<string, string[]> = {
    'early-retirement-fire-planner': [
      \`\${state.name}'s \${state.stateTaxRate === 0 ? 'zero state income tax' : \`\${state.stateTaxRate.toFixed(2)}% state income tax rate\`}\`,
      \`Cost of living index: \${state.costOfLivingIndex} (US average = 100)\`,
      \`Property tax rate: \${state.propertyTaxRate.toFixed(2)}% annually\`,
      state.retirementFriendly ? 'Retirement-friendly state policies' : 'State retirement tax policies',
    ],
    'mortgage-calculator': [
      \`Property tax: \${state.propertyTaxRate.toFixed(2)}% of home value annually\`,
      \`Average home price in \${state.name}: $\${state.avgHomePrice.toLocaleString()}\`,
      \`Average closing costs: $\${state.avgClosingCosts.toLocaleString()}\`,
      \`First-time buyer programs: \${state.firstTimeBuyerPrograms.join(', ')}\`,
    ],
    'freelance-profit-hub': [
      \`Self-employment tax: 15.3% on net profits\`,
      \`\${state.name} state tax: \${state.stateTaxRate === 0 ? 'None' : \`\${state.stateTaxRate.toFixed(2)}%\`}\`,
      \`LLC filing fee: $\${state.llcFilingFee}\`,
      \`Annual franchise tax: $\${state.annualFranchiseTax}\`,
    ],
    'quarterly-tax-calculator': [
      \`Federal estimated tax due quarterly\`,
      \`\${state.name} state tax: \${state.stateTaxRate === 0 ? 'None required' : \`\${state.stateTaxRate.toFixed(2)}% estimated quarterly\`}\`,
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
`;

// Main generation function
async function generateStatePages(toolSlug, stateKeys = null) {
  const toolConfig = TOOLS[toolSlug];

  if (!toolConfig) {
    console.error(`❌ Unknown tool: ${toolSlug}`);
    console.log('Available tools:', Object.keys(TOOLS).join(', '));
    return;
  }

  // Create directory structure: app/[tool]/[state]/
  const toolDir = path.join(process.cwd(), 'app', toolSlug, '[state]');

  if (!fs.existsSync(toolDir)) {
    fs.mkdirSync(toolDir, { recursive: true });
    console.log(`✅ Created directory: ${toolDir}`);
  }

  // Generate page.tsx
  const pagePath = path.join(toolDir, 'page.tsx');
  const pageContent = stateToolPageTemplate(toolSlug, toolConfig);
  fs.writeFileSync(pagePath, pageContent);
  console.log(`✅ Generated ${pagePath}`);

  // Generate StateToolClient.tsx
  const clientPath = path.join(toolDir, 'StateToolClient.tsx');
  const clientContent = stateToolClientTemplate(toolSlug, toolConfig);
  fs.writeFileSync(clientPath, clientContent);
  console.log(`✅ Generated ${clientPath}`);

  console.log(`\n🚀 State pages for ${toolSlug} are ready!`);
  console.log(`   Next.js will generate pages for all states defined in lib/state-configs.ts`);
  console.log(`   Example URLs:`);
  console.log(`   - /${toolSlug}/texas`);
  console.log(`   - /${toolSlug}/california`);
  console.log(`   - /${toolSlug}/florida`);
}

// CLI
const args = process.argv.slice(2);
const toolArg = args.find(a => a.startsWith('--tool='))?.split('=')[1];

if (!toolArg) {
  console.log('Usage: node scripts/generate-state-pages.js --tool=<tool-slug>');
  console.log('Available tools:');
  Object.entries(TOOLS).forEach(([slug, config]) => {
    console.log(`  - ${slug}: ${config.description}`);
  });
  process.exit(1);
}

if (toolArg === 'all') {
  Object.keys(TOOLS).forEach(toolSlug => {
    generateStatePages(toolSlug);
  });
} else {
  generateStatePages(toolArg);
}

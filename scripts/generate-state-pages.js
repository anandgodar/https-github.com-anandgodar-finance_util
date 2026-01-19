#!/usr/bin/env node

/**
 * Generate state-specific tool pages programmatically
 *
 * Usage:
 *   node scripts/generate-state-pages.js --tool=fire-calculator
 *   node scripts/generate-state-pages.js --tool=all
 *   node scripts/generate-state-pages.js --states=texas,florida --tool=mortgage-calculator
 */

const fs = require('fs');
const path = require('path');

// State configurations (sync with lib/state-configs.ts)
const STATES = {
  texas: { name: 'Texas', code: 'TX', stateTaxRate: 0, propertyTaxRate: 1.80 },
  california: { name: 'California', code: 'CA', stateTaxRate: 13.3, propertyTaxRate: 0.76 },
  florida: { name: 'Florida', code: 'FL', stateTaxRate: 0, propertyTaxRate: 0.98 },
  'new-york': { name: 'New York', code: 'NY', stateTaxRate: 10.9, propertyTaxRate: 1.72 },
  washington: { name: 'Washington', code: 'WA', stateTaxRate: 0, propertyTaxRate: 0.98 },
  nevada: { name: 'Nevada', code: 'NV', stateTaxRate: 0, propertyTaxRate: 0.69 },
  // Add all 51 states/territories here
};

// Tool configurations
const TOOLS = {
  'fire-calculator': {
    toolType: 'FIRE_PLANNER',
    title: 'FIRE Calculator',
    description: 'Early retirement and financial independence planning',
  },
  'mortgage-calculator': {
    toolType: 'MORTGAGE_CALC',
    title: 'Mortgage Calculator',
    description: 'Calculate monthly mortgage payments with PITI breakdown',
  },
  'freelance-tax-calculator': {
    toolType: 'FREELANCE_PROFIT',
    title: 'Freelance Tax Calculator',
    description: 'Self-employment tax and profit calculation',
  },
  'salary-calculator': {
    toolType: 'SALARY_CALC',
    title: 'Salary Calculator',
    description: 'Calculate take-home pay after federal and state taxes',
  },
};

// Template for state tool page
const pageTemplate = (stateName, stateCode, stateSlug, tool, toolConfig) => `
import { Metadata } from 'next';
import AppShell from '@/components/AppShell';
import { ToolType } from '@/types';
import { STATE_CONFIGS } from '@/lib/state-configs';

export async function generateMetadata(): Promise<Metadata> {
  const stateConfig = STATE_CONFIGS['${stateSlug}'];

  return {
    title: \`${stateName} \${stateConfig.name} ${toolConfig.title} | ${toolConfig.description}\`,
    description: \`${toolConfig.description} for ${stateName} residents. Includes ${stateName}-specific tax rates, deductions, and local regulations.\`,
    keywords: \`${stateSlug} ${tool}, ${stateName} calculator, ${stateSlug} taxes, ${toolConfig.title.toLowerCase()}\`,
  };
}

export default function ${stateName.replace(/[^a-zA-Z]/g, '')}${tool.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  const stateConfig = STATE_CONFIGS['${stateSlug}'];

  return (
    <div>
      {/* State-specific intro banner */}
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">${getStateEmoji(stateCode)}</span>
            <h1 className="text-4xl font-black">
              ${stateName} ${toolConfig.title}
            </h1>
          </div>
          <p className="text-xl text-indigo-200">
            ${generateStateIntro(stateName, tool, toolConfig)}
          </p>
        </div>
      </div>

      {/* State-specific highlights */}
      <div className="bg-slate-50 border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h2 className="text-2xl font-black text-slate-900 mb-4">
            ${stateName}-Specific Considerations
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-600">
              <p className="text-sm text-slate-600 mb-1">State Income Tax</p>
              <p className="text-2xl font-black text-slate-900">
                {stateConfig.stateTaxRate}%
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-600">
              <p className="text-sm text-slate-600 mb-1">Property Tax</p>
              <p className="text-2xl font-black text-slate-900">
                {stateConfig.propertyTaxRate}%
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-emerald-600">
              <p className="text-sm text-slate-600 mb-1">Cost of Living</p>
              <p className="text-2xl font-black text-slate-900">
                {stateConfig.costOfLivingIndex}
              </p>
              <p className="text-xs text-slate-500">100 = US average</p>
            </div>
          </div>
          ${generateStateTaxAdvantages(stateSlug)}
        </div>
      </div>

      {/* Tool component */}
      <AppShell
        initialTool={ToolType.${toolConfig.toolType}}
        stateOverride={stateConfig}
      />

      {/* Other state tools CTA */}
      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-6">
            More ${stateName} Financial Tools
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            ${generateRelatedToolsLinks(stateSlug)}
          </div>
        </div>
      </div>
    </div>
  );
}
`.trim();

// Helper: Generate state emoji
function getStateEmoji(code) {
  const emojis = {
    TX: '🤠', CA: '🌴', FL: '☀️', NY: '🗽', WA: '🌲',
    NV: '🎰', AZ: '🌵', NC: '🏔️', GA: '🍑',
  };
  return emojis[code] || '📍';
}

// Helper: Generate state intro
function generateStateIntro(stateName, tool, toolConfig) {
  const intros = {
    'fire-calculator': `Calculate your path to financial independence in ${stateName}. Our calculator includes ${stateName}-specific tax rates and cost of living adjustments.`,
    'mortgage-calculator': `Planning to buy a home in ${stateName}? Our mortgage calculator includes ${stateName} property tax rates, closing costs, and first-time buyer programs.`,
    'freelance-tax-calculator': `Freelancing in ${stateName}? Calculate your self-employment tax, state tax, and quarterly estimated payments all in one place.`,
    'salary-calculator': `Calculate your exact take-home pay in ${stateName} after federal tax, state tax, FICA, and 401(k) contributions.`,
  };
  return intros[tool] || toolConfig.description;
}

// Helper: Generate tax advantages section
function generateStateTaxAdvantages(stateSlug) {
  const state = STATES[stateSlug];
  if (state.stateTaxRate === 0) {
    return `
          <div className="mt-6 bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-lg">
            <p className="font-bold text-emerald-900 mb-2">✓ No State Income Tax</p>
            <p className="text-sm text-emerald-800">
              ${state.name} residents keep more of their paycheck with 0% state income tax.
            </p>
          </div>
    `.trim();
  }
  return '';
}

// Helper: Generate related tools links
function generateRelatedToolsLinks(stateSlug) {
  const allTools = Object.keys(TOOLS);
  return allTools.map(toolSlug => `
            <a
              href="/${stateSlug}/${toolSlug}"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all"
            >
              <p className="font-bold">${TOOLS[toolSlug].title}</p>
            </a>
  `.trim()).join('\n            ');
}

// Main execution
function main() {
  const args = process.argv.slice(2);
  const toolArg = args.find(a => a.startsWith('--tool='))?.split('=')[1];
  const statesArg = args.find(a => a.startsWith('--states='))?.split('=')[1];

  if (!toolArg) {
    console.error('Error: --tool argument required');
    console.log('Usage: node generate-state-pages.js --tool=fire-calculator');
    process.exit(1);
  }

  const tools = toolArg === 'all' ? Object.keys(TOOLS) : [toolArg];
  const states = statesArg ? statesArg.split(',') : Object.keys(STATES);

  let pagesGenerated = 0;

  tools.forEach(tool => {
    if (!TOOLS[tool]) {
      console.error(`Error: Unknown tool "${tool}"`);
      return;
    }

    states.forEach(stateSlug => {
      if (!STATES[stateSlug]) {
        console.error(`Error: Unknown state "${stateSlug}"`);
        return;
      }

      const state = STATES[stateSlug];
      const toolConfig = TOOLS[tool];

      // Create directory structure
      const dirPath = path.join(process.cwd(), 'app', stateSlug, tool);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      // Generate page.tsx
      const pageContent = pageTemplate(
        state.name,
        state.code,
        stateSlug,
        tool,
        toolConfig
      );

      const filePath = path.join(dirPath, 'page.tsx');
      fs.writeFileSync(filePath, pageContent);

      console.log(`✓ Generated: ${stateSlug}/${tool}/page.tsx`);
      pagesGenerated++;
    });
  });

  console.log(`\n✨ Successfully generated ${pagesGenerated} pages!`);
  console.log('\nNext steps:');
  console.log('1. Run: npm run build');
  console.log('2. Test: http://localhost:3000/texas/fire-calculator');
  console.log('3. Deploy and submit sitemap to Google');
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { pageTemplate, STATES, TOOLS };

#!/usr/bin/env node
/**
 * Dynamic Sitemap Generator
 * Generates a comprehensive sitemap.xml from all static paths
 *
 * Usage: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://quantcurb.com';
const TODAY = new Date().toISOString().split('T')[0];

// All 50 US states + DC for programmatic SEO
const ALL_STATES = [
  'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado',
  'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho',
  'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana',
  'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi',
  'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire', 'new-jersey',
  'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio', 'oklahoma',
  'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
  'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington',
  'west-virginia', 'wisconsin', 'wyoming', 'district-of-columbia'
];

// Top dividend stocks for DRIP calculator
const DIVIDEND_TICKERS = [
  'vz', 't', 'xom', 'cvx', 'jnj', 'pg', 'ko', 'pep', 'abbv', 'mo',
  'ibm', 'mmm', 'cat', 'hd', 'wmt', 'cost', 'tgt', 'low', 'mcd', 'sbux',
  'pfe', 'mrk', 'unh', 'amgn', 'gild', 'bmy', 'lly', 'abt', 'tmo', 'dhr',
  'spy', 'voo', 'schd', 'vym', 'dgro', 'nobl', 'dvy', 'hdv', 'vti', 'vxus',
  'o', 'vici', 'amd', 'nvda', 'msft', 'aapl', 'googl', 'amzn', 'meta', 'tsla'
];

// Core tool pages
const CORE_TOOLS = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/dashboard/', priority: '0.9', changefreq: 'weekly' },
  { path: '/net-worth-command-center/', priority: '0.9', changefreq: 'monthly' },
  { path: '/emergency-fund-guard/', priority: '0.9', changefreq: 'monthly' },
  { path: '/mortgage-payment-calculator/', priority: '0.95', changefreq: 'weekly' },
  { path: '/loan-emi-calculator/', priority: '0.9', changefreq: 'monthly' },
  { path: '/salary-tax-estimator/', priority: '0.95', changefreq: 'weekly' },
  { path: '/early-retirement-fire-planner/', priority: '0.95', changefreq: 'weekly' },
  { path: '/retirement-account-optimizer/', priority: '0.9', changefreq: 'monthly' },
  { path: '/wealth-investment-projector/', priority: '0.9', changefreq: 'monthly' },
  { path: '/dividend-reinvestment-calculator/', priority: '0.9', changefreq: 'monthly' },
  { path: '/options-strategy-visualizer/', priority: '0.9', changefreq: 'monthly' },
  { path: '/credit-card-debt-strategist/', priority: '0.9', changefreq: 'monthly' },
  { path: '/loan-comparison-tool/', priority: '0.85', changefreq: 'monthly' },
  { path: '/currency-exchange-intel/', priority: '0.8', changefreq: 'daily' },
  { path: '/gst-tax-calculator/', priority: '0.8', changefreq: 'monthly' },
  { path: '/crypto-tax-loss-harvester/', priority: '0.85', changefreq: 'monthly' },
  { path: '/child-tax-credit-calculator/', priority: '0.9', changefreq: 'monthly' },
  { path: '/quarterly-estimated-tax-calculator/', priority: '0.9', changefreq: 'monthly' },
  { path: '/aca-health-insurance-subsidy-calculator/', priority: '0.85', changefreq: 'monthly' },
  { path: '/freelance-profit-hub/', priority: '0.9', changefreq: 'monthly' },
  { path: '/debt-to-income-ratio-calculator/', priority: '0.85', changefreq: 'monthly' },
  { path: '/excel-power-modeler/', priority: '0.8', changefreq: 'monthly' },
];

// Hub pages (high SEO value)
const HUB_PAGES = [
  { path: '/tax-calculators/', priority: '0.95', changefreq: 'weekly' },
  { path: '/retirement-calculators/', priority: '0.95', changefreq: 'weekly' },
  { path: '/mortgage-calculators/', priority: '0.95', changefreq: 'weekly' },
  { path: '/investment-calculators/', priority: '0.95', changefreq: 'weekly' },
  { path: '/best-mortgage-calculator-2025/', priority: '0.9', changefreq: 'monthly' },
];

// Academy/Education pages
const ACADEMY_PAGES = [
  { path: '/valuation-academy/', priority: '0.85', changefreq: 'monthly' },
  { path: '/investment-funds-academy/', priority: '0.85', changefreq: 'monthly' },
  { path: '/market-intelligence-pulse/', priority: '0.8', changefreq: 'weekly' },
  { path: '/financial-knowledge-base/', priority: '0.8', changefreq: 'monthly' },
];

// Company pages
const COMPANY_PAGES = [
  { path: '/about-quantcurb/', priority: '0.6', changefreq: 'monthly' },
  { path: '/methodology-assumptions/', priority: '0.5', changefreq: 'monthly' },
  { path: '/contact-us/', priority: '0.5', changefreq: 'yearly' },
  { path: '/privacy-policy/', priority: '0.3', changefreq: 'yearly' },
  { path: '/legal-disclaimer/', priority: '0.3', changefreq: 'yearly' },
  { path: '/sitemap/', priority: '0.4', changefreq: 'monthly' },
];

// Blog posts
const BLOG_POSTS = [
  'mortgage-calculator-guide-2025', 'how-much-house-can-i-afford-2025',
  'piti-explained-mortgage-payment-breakdown', 'mortgage-points-break-even-2026',
  'pmi-math-guide-how-to-remove-pmi-faster', 'rent-vs-buy-5-percent-rule-2026',
  '500k-house-monthly-cost-rate-sensitivity', 'biweekly-mortgage-payments-interest-savings',
  'fire-calculator-guide-2025', 'fi-number-math-financial-independence',
  'lean-fire-vs-fat-fire-lifestyle-budget', '4-percent-rule-dead-safe-withdrawal-rates',
  'coast-fire-how-to-retire-early', 'cost-of-waiting-compound-interest',
  'roth-vs-traditional-401k-tax-bracket-bet', 'best-retirement-calculator-2025',
  'child-tax-credit-2025-guide', 'quarterly-estimated-taxes-complete-guide',
  'self-employment-tax-guide-2025', 'tax-deductions-freelancers-2025',
  '1099-vs-w2-comparison-2025', 'llc-vs-sole-proprietor-2025',
  'sep-ira-vs-solo-401k-2025', 'home-office-deduction-2025',
  'aca-health-insurance-freelancers-2025',
  'how-to-calculate-take-home-pay-2025', '100k-california-vs-texas-take-home-pay',
  'bonus-tax-myth-withholding-vs-real-liability', 'raise-vs-relocation-cost-of-living-comparison',
  'max-out-401k-take-home-pay-impact', 'gross-vs-net-pay-paycheck-breakdown',
  'freelancer-estimated-taxes-guide-2025', 'moving-to-florida-sunshine-tax-savings',
  'snowball-vs-avalanche-debt-payoff', '72-month-car-loan-true-cost',
  'student-loan-refinance-math', 'credit-card-minimum-payments-20-years',
  'assets-vs-liabilities-true-net-worth', 'financial-order-of-operations',
  'inflation-calculator-million-worth-retirement', '6-month-emergency-fund-rule',
  'latte-factor-vs-big-wins-wealth', 'dcf-modeling-for-retail-investors',
  'lump-sum-vs-dollar-cost-averaging', 'roth-ira-vs-traditional-ira-2025',
  'how-much-emergency-fund-do-i-need-2025', 'investment-calculator-guide-2025',
  'best-mortgage-calculator-2025', 'student-loan-repayment-strategies-2025',
  'tax-brackets-explained-2025', '401k-vs-ira-comparison-2025',
  'budgeting-guide-2025', 'net-worth-tracker-guide-2025',
  'loan-emi-calculator-guide-2025', 'loan-comparison-refinance-guide-2025',
  'cost-of-living-calculator-guide-2025', 'currency-converter-guide-2025',
  'gst-tax-calculator-guide-2025', 'credit-card-payoff-strategy-guide-2025',
  'ai-market-insights-guide-2025', 'index-funds-etf-guide-2025',
  'dcf-valuation-modeling-guide-2025', 'dividend-reinvestment-guide-2025',
  'dti-calculator-guide-2025', 'crypto-wash-sale-rule-tax-loss-harvesting',
  'capital-gains-tax-guide-2025', 'pay-off-debt-or-invest-2025',
];

function generateUrlEntry(path, priority, changefreq) {
  return '  <url>\n' +
         '    <loc>' + SITE_URL + path + '</loc>\n' +
         '    <lastmod>' + TODAY + '</lastmod>\n' +
         '    <changefreq>' + changefreq + '</changefreq>\n' +
         '    <priority>' + priority + '</priority>\n' +
         '  </url>';
}

function generateSitemap() {
  const urls = [];

  // Add core tools
  console.log('Adding ' + CORE_TOOLS.length + ' core tools...');
  CORE_TOOLS.forEach(function(tool) {
    urls.push(generateUrlEntry(tool.path, tool.priority, tool.changefreq));
  });

  // Add hub pages
  console.log('Adding ' + HUB_PAGES.length + ' hub pages...');
  HUB_PAGES.forEach(function(page) {
    urls.push(generateUrlEntry(page.path, page.priority, page.changefreq));
  });

  // Add academy pages
  console.log('Adding ' + ACADEMY_PAGES.length + ' academy pages...');
  ACADEMY_PAGES.forEach(function(page) {
    urls.push(generateUrlEntry(page.path, page.priority, page.changefreq));
  });

  // Add company pages
  console.log('Adding ' + COMPANY_PAGES.length + ' company pages...');
  COMPANY_PAGES.forEach(function(page) {
    urls.push(generateUrlEntry(page.path, page.priority, page.changefreq));
  });

  // Add blog index
  urls.push(generateUrlEntry('/blog/', '0.9', 'weekly'));

  // Add blog posts
  console.log('Adding ' + BLOG_POSTS.length + ' blog posts...');
  BLOG_POSTS.forEach(function(post) {
    urls.push(generateUrlEntry('/blog/' + post + '/', '0.8', 'monthly'));
  });

  // Add salary calculator state pages (all 51)
  console.log('Adding ' + ALL_STATES.length + ' salary calculator state pages...');
  ALL_STATES.forEach(function(state) {
    urls.push(generateUrlEntry('/salary-tax-estimator/' + state + '/', '0.85', 'monthly'));
  });

  // Add mortgage calculator state pages (all 51)
  console.log('Adding ' + ALL_STATES.length + ' mortgage calculator state pages...');
  ALL_STATES.forEach(function(state) {
    urls.push(generateUrlEntry('/mortgage-calculator/' + state + '/', '0.85', 'monthly'));
  });

  // Add FIRE calculator state pages (all 51)
  console.log('Adding ' + ALL_STATES.length + ' FIRE calculator state pages...');
  ALL_STATES.forEach(function(state) {
    urls.push(generateUrlEntry('/early-retirement-fire-planner/' + state + '/', '0.85', 'monthly'));
  });

  // Add freelance calculator state pages (all 51)
  console.log('Adding ' + ALL_STATES.length + ' freelance calculator state pages...');
  ALL_STATES.forEach(function(state) {
    urls.push(generateUrlEntry('/freelance-profit-hub/' + state + '/', '0.85', 'monthly'));
  });

  // Add quarterly tax calculator state pages (all 51)
  console.log('Adding ' + ALL_STATES.length + ' quarterly tax state pages...');
  ALL_STATES.forEach(function(state) {
    urls.push(generateUrlEntry('/quarterly-tax-calculator/' + state + '/', '0.85', 'monthly'));
  });

  // Add dividend calculator ticker pages
  console.log('Adding ' + DIVIDEND_TICKERS.length + ' dividend ticker pages...');
  DIVIDEND_TICKERS.forEach(function(ticker) {
    urls.push(generateUrlEntry('/dividend-calculator/' + ticker + '/', '0.75', 'weekly'));
  });

  var sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.join('\n') + '\n' +
    '</urlset>';

  return sitemap;
}

function main() {
  console.log('============================================================');
  console.log('QuantCurb Sitemap Generator');
  console.log('============================================================');
  console.log('');

  var sitemap = generateSitemap();
  var outputPath = path.join(__dirname, '../public/sitemap.xml');

  fs.writeFileSync(outputPath, sitemap);

  var urlCount = (sitemap.match(/<url>/g) || []).length;
  console.log('');
  console.log('============================================================');
  console.log('SUCCESS: Generated sitemap with ' + urlCount + ' URLs');
  console.log('Output: ' + outputPath);
  console.log('============================================================');
}

main();

#!/usr/bin/env node
/**
 * Dynamic Sitemap Generator
 * Generates multiple sitemaps for better SEO organization
 *
 * Output files:
 * - sitemap.xml (sitemap index)
 * - sitemap-calculators.xml (core calculators + hub pages)
 * - sitemap-blog.xml (blog posts + academy articles)
 * - sitemap-states.xml (all state-specific calculator pages)
 *
 * Usage: node scripts/generate-sitemap.cjs
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

// Academy/Education pages (indexes)
const ACADEMY_PAGES = [
  { path: '/valuation-academy/', priority: '0.85', changefreq: 'monthly' },
  { path: '/investment-funds-academy/', priority: '0.85', changefreq: 'monthly' },
  { path: '/market-intelligence-pulse/', priority: '0.8', changefreq: 'weekly' },
  { path: '/financial-knowledge-base/', priority: '0.8', changefreq: 'monthly' },
];

// Academy articles (specific educational content)
const ACADEMY_ARTICLES = [
  'california-texas-take-home-comparison',
  'dcf-valuation-complete-guide',
  'iron-condor-strategy-guide',
  'options-greeks-delta-theta-vega-gamma',
  'safe-harbor-estimated-taxes',
  'wacc-cost-of-capital-explained',
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

// State calculator types for state pages
const STATE_CALCULATOR_TYPES = [
  { prefix: '/salary-tax-estimator/', priority: '0.85' },
  { prefix: '/mortgage-calculator/', priority: '0.85' },
  { prefix: '/early-retirement-fire-planner/', priority: '0.85' },
  { prefix: '/freelance-profit-hub/', priority: '0.85' },
  { prefix: '/quarterly-tax-calculator/', priority: '0.85' },
];

function generateUrlEntry(urlPath, priority, changefreq) {
  return '  <url>\n' +
         '    <loc>' + SITE_URL + urlPath + '</loc>\n' +
         '    <lastmod>' + TODAY + '</lastmod>\n' +
         '    <changefreq>' + changefreq + '</changefreq>\n' +
         '    <priority>' + priority + '</priority>\n' +
         '  </url>';
}

function wrapSitemap(urls) {
  return '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.join('\n') + '\n' +
    '</urlset>';
}

function generateSitemapIndex(sitemaps) {
  var entries = sitemaps.map(function(sitemap) {
    return '  <sitemap>\n' +
           '    <loc>' + SITE_URL + '/' + sitemap + '</loc>\n' +
           '    <lastmod>' + TODAY + '</lastmod>\n' +
           '  </sitemap>';
  });

  return '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries.join('\n') + '\n' +
    '</sitemapindex>';
}

function generateCalculatorsSitemap() {
  var urls = [];

  // Core tools
  CORE_TOOLS.forEach(function(tool) {
    urls.push(generateUrlEntry(tool.path, tool.priority, tool.changefreq));
  });

  // Hub pages
  HUB_PAGES.forEach(function(page) {
    urls.push(generateUrlEntry(page.path, page.priority, page.changefreq));
  });

  // Academy pages
  ACADEMY_PAGES.forEach(function(page) {
    urls.push(generateUrlEntry(page.path, page.priority, page.changefreq));
  });

  // Company pages
  COMPANY_PAGES.forEach(function(page) {
    urls.push(generateUrlEntry(page.path, page.priority, page.changefreq));
  });

  // Dividend calculator pages
  DIVIDEND_TICKERS.forEach(function(ticker) {
    urls.push(generateUrlEntry('/dividend-calculator/' + ticker + '/', '0.75', 'weekly'));
  });

  return wrapSitemap(urls);
}

function generateBlogSitemap() {
  var urls = [];

  // Blog index
  urls.push(generateUrlEntry('/blog/', '0.9', 'weekly'));

  // Blog posts
  BLOG_POSTS.forEach(function(post) {
    urls.push(generateUrlEntry('/blog/' + post + '/', '0.8', 'monthly'));
  });

  // Academy articles
  ACADEMY_ARTICLES.forEach(function(article) {
    urls.push(generateUrlEntry('/academy/' + article + '/', '0.8', 'monthly'));
  });

  return wrapSitemap(urls);
}

function generateStatesSitemap() {
  var urls = [];

  // All state calculator pages
  STATE_CALCULATOR_TYPES.forEach(function(calcType) {
    ALL_STATES.forEach(function(state) {
      urls.push(generateUrlEntry(calcType.prefix + state + '/', calcType.priority, 'monthly'));
    });
  });

  return wrapSitemap(urls);
}

function generateComprehensiveSitemap() {
  var urls = [];

  // Core tools
  CORE_TOOLS.forEach(function(tool) {
    urls.push(generateUrlEntry(tool.path, tool.priority, tool.changefreq));
  });

  // Hub pages
  HUB_PAGES.forEach(function(page) {
    urls.push(generateUrlEntry(page.path, page.priority, page.changefreq));
  });

  // Academy pages
  ACADEMY_PAGES.forEach(function(page) {
    urls.push(generateUrlEntry(page.path, page.priority, page.changefreq));
  });

  // Academy articles
  ACADEMY_ARTICLES.forEach(function(article) {
    urls.push(generateUrlEntry('/academy/' + article + '/', '0.8', 'monthly'));
  });

  // Company pages
  COMPANY_PAGES.forEach(function(page) {
    urls.push(generateUrlEntry(page.path, page.priority, page.changefreq));
  });

  // Blog index and posts
  urls.push(generateUrlEntry('/blog/', '0.9', 'weekly'));
  BLOG_POSTS.forEach(function(post) {
    urls.push(generateUrlEntry('/blog/' + post + '/', '0.8', 'monthly'));
  });

  // State calculator pages
  STATE_CALCULATOR_TYPES.forEach(function(calcType) {
    ALL_STATES.forEach(function(state) {
      urls.push(generateUrlEntry(calcType.prefix + state + '/', calcType.priority, 'monthly'));
    });
  });

  // Dividend calculator pages
  DIVIDEND_TICKERS.forEach(function(ticker) {
    urls.push(generateUrlEntry('/dividend-calculator/' + ticker + '/', '0.75', 'weekly'));
  });

  return wrapSitemap(urls);
}

function main() {
  console.log('============================================================');
  console.log('QuantCurb Sitemap Generator - Multi-Sitemap Edition');
  console.log('============================================================');
  console.log('');

  var publicDir = path.join(__dirname, '../public');

  // Generate individual sitemaps
  console.log('Generating sitemap-calculators.xml...');
  var calcSitemap = generateCalculatorsSitemap();
  fs.writeFileSync(path.join(publicDir, 'sitemap-calculators.xml'), calcSitemap);
  var calcCount = (calcSitemap.match(/<url>/g) || []).length;
  console.log('  - ' + calcCount + ' URLs');

  console.log('Generating sitemap-blog.xml...');
  var blogSitemap = generateBlogSitemap();
  fs.writeFileSync(path.join(publicDir, 'sitemap-blog.xml'), blogSitemap);
  var blogCount = (blogSitemap.match(/<url>/g) || []).length;
  console.log('  - ' + blogCount + ' URLs');

  console.log('Generating sitemap-states.xml...');
  var statesSitemap = generateStatesSitemap();
  fs.writeFileSync(path.join(publicDir, 'sitemap-states.xml'), statesSitemap);
  var statesCount = (statesSitemap.match(/<url>/g) || []).length;
  console.log('  - ' + statesCount + ' URLs');

  // Generate comprehensive sitemap (for backwards compatibility)
  console.log('Generating sitemap.xml (comprehensive)...');
  var mainSitemap = generateComprehensiveSitemap();
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), mainSitemap);
  var mainCount = (mainSitemap.match(/<url>/g) || []).length;
  console.log('  - ' + mainCount + ' URLs');

  // Generate sitemap index
  console.log('Generating sitemap-index.xml...');
  var sitemapIndex = generateSitemapIndex([
    'sitemap-calculators.xml',
    'sitemap-blog.xml',
    'sitemap-states.xml'
  ]);
  fs.writeFileSync(path.join(publicDir, 'sitemap-index.xml'), sitemapIndex);

  console.log('');
  console.log('============================================================');
  console.log('SUCCESS: Generated sitemaps');
  console.log('  - sitemap.xml: ' + mainCount + ' URLs (comprehensive)');
  console.log('  - sitemap-calculators.xml: ' + calcCount + ' URLs');
  console.log('  - sitemap-blog.xml: ' + blogCount + ' URLs');
  console.log('  - sitemap-states.xml: ' + statesCount + ' URLs');
  console.log('  - sitemap-index.xml: 3 sitemaps');
  console.log('============================================================');
}

main();

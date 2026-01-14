import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// State slugs for salary calculator pages
const STATE_SLUGS = [
  'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado',
  'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho',
  'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana',
  'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi',
  'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire', 'new-jersey',
  'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio', 'oklahoma',
  'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
  'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington',
  'west-virginia', 'wisconsin', 'wyoming', 'district-of-columbia', 'dc'
];

// Blog slugs from blog-content.tsx
const BLOG_SLUGS = [
  'article-one', 'article-two', 'mortgage-calculator-guide-2025',
  'how-much-house-can-i-afford-2025', 'should-i-pay-off-debt-or-invest-2025',
  'how-to-calculate-take-home-pay-2025', '100k-california-vs-texas-take-home-pay',
  'bonus-tax-myth-withholding-vs-liability', 'raise-vs-relocation-cost-of-living',
  'max-out-401k-take-home-pay', 'gross-vs-net-pay-paycheck-breakdown',
  'freelancer-estimated-taxes-guide-2025', 'moving-to-florida-sunshine-tax-savings',
  'piti-explained-mortgage-payment-breakdown', 'mortgage-points-break-even-2026',
  'pmi-math-how-to-remove-faster', 'rent-vs-buy-5-percent-rule-2026',
  '500k-house-monthly-cost-rate-sensitivity', 'biweekly-mortgage-payments-interest-savings',
  'fi-number-math-financial-independence', 'leanfire-vs-fatfire-lifestyle-budget',
  '4-percent-rule-dead-safe-withdrawal-rates', 'coast-fire-how-to-retire-early',
  'cost-of-waiting-compound-interest', 'roth-vs-traditional-401k-tax-bracket-bet',
  'snowball-vs-avalanche-debt-payoff', '72-month-car-loan-true-cost',
  'student-loan-refinance-math', 'credit-card-minimum-payments-20-years',
  'assets-vs-liabilities-true-net-worth', 'financial-order-of-operations',
  'inflation-calculator-million-worth-retirement', '6-month-emergency-fund-rule',
  'latte-factor-vs-big-wins-wealth', 'dcf-modeling-retail-investors',
  'lump-sum-vs-dollar-cost-averaging', 'roth-ira-vs-traditional-ira-2025',
  'how-much-emergency-fund-do-i-need-2025', 'fire-calculator-guide-2025',
  'best-retirement-calculator-2025', 'investment-calculator-guide-2025',
  'best-mortgage-calculator-2025', 'student-loan-repayment-strategies-2025',
  'tax-brackets-explained-2025', '401k-vs-ira-comparison-2025',
  'budgeting-guide-2025', 'net-worth-tracker-guide-2025',
  'loan-emi-calculator-guide-2025', 'loan-comparison-refinance-guide-2025',
  'cost-of-living-calculator-guide-2025', 'currency-converter-guide-2025',
  'gst-tax-calculator-guide-2025', 'credit-card-payoff-strategy-guide-2025',
  'ai-market-insights-guide-2025', 'index-funds-etf-guide-2025',
  'dcf-valuation-modeling-guide-2025', 'dividend-reinvestment-calculator-guide-2025',
  'dti-calculator-guide-2025', 'no-wash-sale-rule-crypto-tax-loss-harvesting',
  'child-tax-credit-2025-guide', 'quarterly-estimated-taxes-complete-guide',
  'self-employment-tax-guide-2025', 'tax-deductions-freelancers-2025',
  '1099-vs-w2-comparison-2025', 'llc-vs-sole-proprietor-2025',
  'sep-ira-vs-solo-401k-2025', 'home-office-deduction-2025',
  'aca-health-insurance-freelancers-2025'
];

const today = new Date().toISOString().split('T')[0];

function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Dashboard -->
  <url>
    <loc>https://quantcurb.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Blog Index -->
  <url>
    <loc>https://quantcurb.com/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- 50 State-Specific Salary Calculator Pages -->
`;

  STATE_SLUGS.forEach(state => {
    sitemap += `  <url>
    <loc>https://quantcurb.com/salary-tax-estimator/${state}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
`;
  });

  sitemap += `
  <!-- All Blog Posts -->
`;

  BLOG_SLUGS.forEach(slug => {
    sitemap += `  <url>
    <loc>https://quantcurb.com/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
`;
  });

  sitemap += `
  <!-- Core Quantitative Utilities -->
  <url>
    <loc>https://quantcurb.com/net-worth-command-center</loc>
    <lastmod>${today}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/emergency-fund-guard</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/loan-emi-calculator</loc>
    <lastmod>${today}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/mortgage-payment-calculator</loc>
    <lastmod>${today}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/salary-tax-estimator</loc>
    <lastmod>${today}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/wealth-investment-projector</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/early-retirement-fire-planner</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/excel-power-modeler</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/retirement-account-optimizer</loc>
    <lastmod>${today}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/dividend-reinvestment-calculator</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/crypto-tax-loss-harvester</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/child-tax-credit-calculator</loc>
    <lastmod>${today}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/quarterly-estimated-tax-calculator</loc>
    <lastmod>${today}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/aca-health-insurance-subsidy-calculator</loc>
    <lastmod>${today}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/freelance-profit-hub</loc>
    <lastmod>${today}</lastmod>
    <priority>0.7</priority>
  </url>

  <!-- Intelligence & Insights -->
  <url>
    <loc>https://quantcurb.com/market-intelligence-pulse</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/investment-funds-academy</loc>
    <lastmod>${today}</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/financial-knowledge-base</loc>
    <lastmod>${today}</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/methodology-assumptions</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>

  <!-- Daily Utilities -->
  <url>
    <loc>https://quantcurb.com/loan-comparison-tool</loc>
    <lastmod>${today}</lastmod>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/cost-of-living-calculator</loc>
    <lastmod>${today}</lastmod>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/currency-exchange-intel</loc>
    <lastmod>${today}</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/gst-tax-calculator</loc>
    <lastmod>${today}</lastmod>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/credit-card-debt-strategist</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>

  <!-- Company & Legal -->
  <url>
    <loc>https://quantcurb.com/about-quantcurb</loc>
    <lastmod>${today}</lastmod>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/privacy-policy</loc>
    <lastmod>${today}</lastmod>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/legal-disclaimer</loc>
    <lastmod>${today}</lastmod>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/contact-us</loc>
    <lastmod>${today}</lastmod>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://quantcurb.com/sitemap</loc>
    <lastmod>${today}</lastmod>
    <priority>0.3</priority>
  </url>
</urlset>`;

  return sitemap;
}

// Write sitemap to public directory
const sitemap = generateSitemap();
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
console.log('✅ Sitemap generated successfully with', STATE_SLUGS.length, 'state pages and', BLOG_SLUGS.length, 'blog posts');

#!/usr/bin/env node
/**
 * SEO Deployment Script
 * Run after deployment to notify search engines about the site
 *
 * Usage: node scripts/notify-search-engines.js
 */

const INDEXNOW_KEY = 'quantcurb-indexnow-2026-verification-key';
const SITE_HOST = 'quantcurb.com';
const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;

// Priority URLs to submit for initial indexation
const PRIORITY_URLS = [
  // Main pages
  'https://quantcurb.com/',
  'https://quantcurb.com/blog/',
  'https://quantcurb.com/dashboard/',

  // Hub pages (high value for SEO)
  'https://quantcurb.com/tax-calculators/',
  'https://quantcurb.com/retirement-calculators/',
  'https://quantcurb.com/mortgage-calculators/',
  'https://quantcurb.com/investment-calculators/',

  // High-traffic calculator pages
  'https://quantcurb.com/salary-tax-estimator/',
  'https://quantcurb.com/mortgage-payment-calculator/',
  'https://quantcurb.com/early-retirement-fire-planner/',
  'https://quantcurb.com/net-worth-command-center/',
  'https://quantcurb.com/loan-emi-calculator/',
  'https://quantcurb.com/wealth-investment-projector/',
  'https://quantcurb.com/retirement-account-optimizer/',
  'https://quantcurb.com/child-tax-credit-calculator/',
  'https://quantcurb.com/quarterly-estimated-tax-calculator/',
  'https://quantcurb.com/options-strategy-visualizer/',
  'https://quantcurb.com/credit-card-debt-strategist/',
  'https://quantcurb.com/freelance-profit-hub/',
  'https://quantcurb.com/dividend-reinvestment-calculator/',

  // High-traffic state pages
  'https://quantcurb.com/salary-tax-estimator/california/',
  'https://quantcurb.com/salary-tax-estimator/texas/',
  'https://quantcurb.com/salary-tax-estimator/new-york/',
  'https://quantcurb.com/salary-tax-estimator/florida/',

  // Company pages
  'https://quantcurb.com/about-quantcurb/',
  'https://quantcurb.com/sitemap/',
];

async function pingGoogleSitemap() {
  console.log('Pinging Google sitemap...');
  const sitemapUrl = encodeURIComponent('https://quantcurb.com/sitemap.xml');
  const pingUrl = `https://www.google.com/ping?sitemap=${sitemapUrl}`;

  try {
    const response = await fetch(pingUrl);
    console.log(`  Google: ${response.ok ? 'SUCCESS' : 'FAILED'} (${response.status})`);
    return response.ok;
  } catch (error) {
    console.log(`  Google: FAILED (${error.message})`);
    return false;
  }
}

async function pingBingSitemap() {
  console.log('Pinging Bing sitemap...');
  const sitemapUrl = encodeURIComponent('https://quantcurb.com/sitemap.xml');
  const pingUrl = `https://www.bing.com/ping?sitemap=${sitemapUrl}`;

  try {
    const response = await fetch(pingUrl);
    console.log(`  Bing: ${response.ok ? 'SUCCESS' : 'FAILED'} (${response.status})`);
    return response.ok;
  } catch (error) {
    console.log(`  Bing: FAILED (${error.message})`);
    return false;
  }
}

async function submitToIndexNow() {
  console.log(`\nSubmitting ${PRIORITY_URLS.length} URLs to IndexNow...`);

  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: PRIORITY_URLS
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    console.log(`  IndexNow: ${response.ok ? 'SUCCESS' : 'FAILED'} (${response.status})`);

    if (response.ok) {
      console.log(`  Submitted to: Bing, Yandex, Seznam, Naver`);
    }

    return response.ok;
  } catch (error) {
    console.log(`  IndexNow: FAILED (${error.message})`);
    return false;
  }
}

async function main() {
  console.log('='.repeat(60));
  console.log('QuantCurb SEO - Search Engine Notification Script');
  console.log('='.repeat(60));
  console.log(`\nSite: https://${SITE_HOST}`);
  console.log(`IndexNow Key: ${INDEXNOW_KEY}`);
  console.log(`Priority URLs: ${PRIORITY_URLS.length}`);
  console.log('');

  // Ping sitemap endpoints
  console.log('STEP 1: Pinging sitemap endpoints');
  console.log('-'.repeat(40));
  await pingGoogleSitemap();
  await pingBingSitemap();

  // Submit to IndexNow
  console.log('\nSTEP 2: Submitting to IndexNow');
  console.log('-'.repeat(40));
  await submitToIndexNow();

  console.log('\n' + '='.repeat(60));
  console.log('NEXT STEPS (Manual):');
  console.log('='.repeat(60));
  console.log(`
1. GOOGLE SEARCH CONSOLE (Critical!)
   - Go to: https://search.google.com/search-console
   - Add property: quantcurb.com
   - Verify ownership (DNS or HTML method)
   - Submit sitemap: sitemap.xml
   - Request indexing for homepage

2. BING WEBMASTER TOOLS
   - Go to: https://www.bing.com/webmasters
   - Add site: quantcurb.com
   - Import from Google Search Console (easiest)

3. UPDATE VERIFICATION CODES
   - Edit app/layout.tsx
   - Replace placeholder verification codes with real ones

4. BUILD BACKLINKS
   - Share on social media (Twitter, LinkedIn, Reddit)
   - Submit to calculator directories
   - Submit to Product Hunt

Expected timeline: 2-4 weeks for initial indexing
`);
}

main().catch(console.error);

/**
 * IndexNow Integration for Instant Search Engine Notifications
 *
 * IndexNow is a protocol that allows websites to instantly notify search engines
 * about content changes, resulting in faster indexation than traditional crawling.
 *
 * Supported search engines:
 * - Bing (primary)
 * - Yandex
 * - Seznam.cz
 * - Naver
 *
 * SETUP INSTRUCTIONS:
 * 1. Generate a unique key (already created in public/indexnow-key.txt)
 * 2. Place key file at https://quantcurb.com/quantcurb-indexnow-2026-verification-key.txt
 * 3. Use notifyIndexNow() when publishing or updating content
 *
 * @see https://www.indexnow.org/documentation
 */

const INDEXNOW_KEY = 'quantcurb-indexnow-2026-verification-key';
const SITE_HOST = 'quantcurb.com';
const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;

// IndexNow endpoints (any one will notify all participating search engines)
const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow'
];

interface IndexNowResponse {
  success: boolean;
  statusCode: number;
  message: string;
}

/**
 * Notify search engines about a single URL change
 * Call this when a page is published or significantly updated
 *
 * @param url - The full URL that was changed (e.g., "https://quantcurb.com/blog/new-post/")
 * @returns Promise with success status
 */
export async function notifyIndexNow(url: string): Promise<IndexNowResponse> {
  const endpoint = `${INDEXNOW_ENDPOINTS[0]}?url=${encodeURIComponent(url)}&key=${INDEXNOW_KEY}&keyLocation=${encodeURIComponent(KEY_LOCATION)}`;

  try {
    const response = await fetch(endpoint, { method: 'GET' });

    return {
      success: response.ok,
      statusCode: response.status,
      message: response.ok
        ? 'URL submitted successfully to IndexNow'
        : `IndexNow submission failed: ${response.statusText}`
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 0,
      message: `IndexNow request failed: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
}

/**
 * Notify search engines about multiple URL changes in a single request
 * More efficient for bulk updates (e.g., after deploying new content)
 *
 * @param urls - Array of full URLs that were changed
 * @returns Promise with success status
 */
export async function notifyIndexNowBatch(urls: string[]): Promise<IndexNowResponse> {
  if (urls.length === 0) {
    return { success: false, statusCode: 400, message: 'No URLs provided' };
  }

  if (urls.length > 10000) {
    return { success: false, statusCode: 400, message: 'Maximum 10,000 URLs per batch' };
  }

  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  };

  try {
    const response = await fetch(INDEXNOW_ENDPOINTS[0], {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    return {
      success: response.ok,
      statusCode: response.status,
      message: response.ok
        ? `${urls.length} URLs submitted successfully to IndexNow`
        : `IndexNow batch submission failed: ${response.statusText}`
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 0,
      message: `IndexNow batch request failed: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
}

/**
 * Get all sitemap URLs for bulk IndexNow submission
 * Useful for initial indexation push after deploying to a new domain
 *
 * @returns Array of all URLs from the sitemap
 */
export function getAllSitemapUrls(): string[] {
  // These are the key pages to prioritize for initial indexation
  const priorityPages = [
    // Main pages
    'https://quantcurb.com/',
    'https://quantcurb.com/blog/',

    // Hub pages (high value for SEO)
    'https://quantcurb.com/tax-calculators/',
    'https://quantcurb.com/retirement-calculators/',
    'https://quantcurb.com/mortgage-calculators/',
    'https://quantcurb.com/investment-calculators/',

    // High-value calculator pages
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
    'https://quantcurb.com/excel-power-modeler/',
    'https://quantcurb.com/credit-card-debt-strategist/',
    'https://quantcurb.com/crypto-tax-loss-harvester/',
    'https://quantcurb.com/aca-health-insurance-subsidy-calculator/',

    // Comparison page
    'https://quantcurb.com/best-mortgage-calculator-2025/',

    // Company pages
    'https://quantcurb.com/about-quantcurb/',
    'https://quantcurb.com/contact-us/',
    'https://quantcurb.com/methodology-assumptions/'
  ];

  return priorityPages;
}

/**
 * Submit priority pages to IndexNow for initial indexation
 * Call this once after initial deployment to jumpstart crawling
 */
export async function submitPriorityPagesToIndexNow(): Promise<IndexNowResponse> {
  const priorityUrls = getAllSitemapUrls();
  return notifyIndexNowBatch(priorityUrls);
}

/**
 * Google Search Console Ping (legacy method, still useful)
 * Pings Google's sitemap endpoint to request re-crawling
 */
export async function pingGoogleSitemap(): Promise<boolean> {
  const sitemapUrl = encodeURIComponent('https://quantcurb.com/sitemap.xml');
  const pingUrl = `https://www.google.com/ping?sitemap=${sitemapUrl}`;

  try {
    const response = await fetch(pingUrl);
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Bing Webmaster Sitemap Ping
 */
export async function pingBingSitemap(): Promise<boolean> {
  const sitemapUrl = encodeURIComponent('https://quantcurb.com/sitemap.xml');
  const pingUrl = `https://www.bing.com/ping?sitemap=${sitemapUrl}`;

  try {
    const response = await fetch(pingUrl);
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Ping all major search engines' sitemap endpoints
 */
export async function pingAllSearchEngines(): Promise<{
  google: boolean;
  bing: boolean;
}> {
  const [google, bing] = await Promise.all([
    pingGoogleSitemap(),
    pingBingSitemap()
  ]);

  return { google, bing };
}

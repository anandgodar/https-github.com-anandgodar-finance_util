# SEO Analytics & Tracking Setup Guide

This guide outlines the analytics setup required for comprehensive SEO monitoring and optimization.

## Google Search Console Setup

### 1. Verify Site Ownership
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://quantcurb.com`
3. Choose verification method:
   - **Recommended:** HTML file upload
   - **Alternative:** DNS record or HTML tag

### 2. Submit Sitemap
1. Navigate to Sitemaps section
2. Submit: `https://quantcurb.com/sitemap.xml`
3. Monitor indexing status for all pages

### 3. Request Indexing
- Request indexing for all hub pages:
  - `/tax-calculators`
  - `/retirement-calculators`
  - `/mortgage-calculators`
  - `/investment-calculators`
  - `/best-mortgage-calculator-2025`
- Request indexing for all calculator pages
- Request indexing for all blog posts

## Google Analytics 4 Setup

### Current Status
- Google Analytics is already implemented (G-WSKZ5JNETS)
- Located in `index.html`

### Enhanced Event Tracking

Add the following event tracking to calculator components:

```typescript
// Track calculator usage
gtag('event', 'calculator_used', {
  'calculator_name': 'Mortgage Calculator',
  'calculator_type': 'mortgage',
  'page_path': '/mortgage-payment-calculator'
});

// Track email captures
gtag('event', 'email_capture', {
  'calculator_name': 'Mortgage Calculator',
  'lead_magnet_type': 'checklist'
});

// Track internal link clicks
gtag('event', 'internal_link_click', {
  'link_text': 'Related Calculator',
  'destination': '/retirement-account-optimizer'
});
```

### Conversion Goals Setup

1. **Calculator Usage Goal**
   - Event: `calculator_used`
   - Value: 1 per session

2. **Email Capture Goal**
   - Event: `email_capture`
   - Value: 5 (higher value conversion)

3. **Hub Page Visit Goal**
   - Event: `page_view` on hub pages
   - Value: 2 per session

## Bing Webmaster Tools Setup

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site: `https://quantcurb.com`
3. Verify ownership (similar to Google Search Console)
4. Submit sitemap: `https://quantcurb.com/sitemap.xml`

## SEO Monitoring Checklist

### Weekly Tasks
- [ ] Check Google Search Console for indexing issues
- [ ] Monitor Core Web Vitals (LCP, CLS, FID)
- [ ] Review search performance (impressions, clicks, CTR)
- [ ] Check for crawl errors
- [ ] Monitor backlink growth

### Monthly Tasks
- [ ] Review keyword rankings (set up rank tracking tool)
- [ ] Analyze top-performing pages
- [ ] Identify content gaps
- [ ] Review competitor rankings
- [ ] Update sitemap lastmod dates

## Key Metrics to Track

### Search Performance
- Total impressions
- Total clicks
- Average CTR
- Average position
- Top queries
- Top pages

### User Engagement
- Bounce rate
- Average session duration
- Pages per session
- Calculator usage rate
- Email capture rate

### Technical SEO
- Core Web Vitals scores
- Mobile usability
- Index coverage
- Sitemap status

## Implementation Notes

- Google Analytics is already configured in `index.html`
- Add event tracking to calculator components as needed
- Set up Google Search Console verification
- Monitor performance weekly for first month, then monthly

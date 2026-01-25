# QuantCurb SEO Onboarding Checklist

This checklist addresses the "zero digital presence" finding and provides a roadmap for establishing search engine visibility.

## Immediate Actions (Week 1)

### 1. Google Search Console Setup
- [ ] Go to https://search.google.com/search-console
- [ ] Add property: `https://quantcurb.com`
- [ ] Verify ownership using one of these methods:
  - **Recommended**: DNS TXT record verification
  - HTML file upload
  - HTML meta tag (add to `app/layout.tsx` in verification object)
- [ ] After verification, update `app/layout.tsx`:
  ```typescript
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  }
  ```
- [ ] Submit sitemap: https://quantcurb.com/sitemap.xml
- [ ] Request indexing for homepage via URL Inspection tool

### 2. Bing Webmaster Tools Setup
- [ ] Go to https://www.bing.com/webmasters
- [ ] Add site: `https://quantcurb.com`
- [ ] Verify ownership (can import from Google Search Console)
- [ ] Add verification to `app/layout.tsx`:
  ```typescript
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    other: { 'msvalidate.01': 'YOUR_BING_VERIFICATION_CODE' }
  }
  ```
- [ ] Submit sitemap
- [ ] Enable IndexNow for instant notifications

### 3. IndexNow Activation
- [ ] Rename `public/indexnow-key.txt` to match your actual key
- [ ] Update `lib/indexnow.ts` with your key
- [ ] After deploying, run bulk submission:
  ```typescript
  import { submitPriorityPagesToIndexNow } from './lib/indexnow';
  await submitPriorityPagesToIndexNow();
  ```

### 4. Google Analytics Verification
- [ ] Confirm GA4 property (G-WSKZ5JNETS) is receiving data
- [ ] Set up conversion goals for:
  - Calculator usage (button clicks)
  - Affiliate link clicks
  - Newsletter signups
- [ ] Enable enhanced measurement

## Week 2-4 Actions

### 5. Build Initial Backlinks
Create profiles on these platforms to generate discovery paths:

**Social Profiles (Priority)**
- [ ] Twitter/X: @quantcurb
- [ ] LinkedIn Company Page
- [ ] GitHub Organization (for code examples)
- [ ] Medium Publication (for content syndication)

**Finance Directories**
- [ ] Submit to Quantocracy (quant blog aggregator)
- [ ] Crunchbase company profile
- [ ] ProductHunt launch (for tools)

**Community Participation**
- [ ] Reddit: r/algotrading, r/quantfinance, r/personalfinance
- [ ] Hacker News (share quality content)
- [ ] Stack Overflow (answer finance/programming questions)

### 6. Content Publishing Schedule
Publish 2-3 posts per week for first month:

**Week 1**
- [ ] "Complete Guide to Salary Tax Calculation 2025"
- [ ] "FIRE Calculator: How to Calculate Your Financial Independence Number"

**Week 2**
- [ ] "Mortgage Payment Breakdown: Understanding PITI"
- [ ] "Options Greeks Explained for Beginners"

**Week 3**
- [ ] "State Tax Comparison: California vs Texas vs Florida"
- [ ] "Quarterly Estimated Taxes: Complete Guide for Freelancers"

**Week 4**
- [ ] "Net Worth Tracking: Why It Matters More Than Income"
- [ ] "Compound Interest Calculator Guide"

## Month 2-3 Actions

### 7. Guest Posting Outreach
Target these publications for backlinks:

**Quantitative Finance**
- QuantInsti blog
- Seeking Alpha (contributor program)
- Investopedia (expert contributor)
- Benzinga (contributor)

**Personal Finance**
- The Balance
- NerdWallet (if they accept guest posts)
- Financial Samurai (guest feature)

### 8. HARO/Featured Responses
- [ ] Sign up for HARO (helpareporter.com)
- [ ] Sign up for Featured.com
- [ ] Respond to 3-5 finance queries per week
- [ ] Track earned mentions and backlinks

### 9. Apply for AdSense
Requirements before applying:
- [ ] 15+ quality content pages
- [ ] Privacy Policy page (/privacy-policy/)
- [ ] About page (/about-quantcurb/)
- [ ] Contact page (/contact-us/)
- [ ] Site live for 2-4 weeks minimum
- [ ] No prohibited content

## Technical SEO Verification

### Robots.txt Check
```bash
curl https://quantcurb.com/robots.txt
```
Expected: Allow all crawlers, sitemap reference

### Sitemap Validation
- [ ] Validate at https://www.xml-sitemaps.com/validate-xml-sitemap.html
- [ ] Check all URLs resolve (no 404s)
- [ ] Confirm trailing slashes match config

### Core Web Vitals
- [ ] Run PageSpeed Insights on key pages
- [ ] Target scores: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] Address any flagged issues

### Mobile-Friendliness
- [ ] Test with Google Mobile-Friendly Test
- [ ] Verify responsive design on multiple devices

## Monitoring & Tracking

### Weekly Checks
- [ ] Google Search Console: Coverage report
- [ ] Google Search Console: Performance report
- [ ] Google Analytics: Traffic sources
- [ ] Check for new backlinks (Ahrefs/SEMrush free tools)

### Monthly Reviews
- [ ] Indexed page count trend
- [ ] Keyword ranking changes
- [ ] Traffic growth
- [ ] Conversion rates
- [ ] Affiliate click performance

## Expected Timeline

| Milestone | Timeline | Indicator |
|-----------|----------|-----------|
| Site indexed by Google | 1-4 weeks | Homepage appears in site: search |
| 50+ pages indexed | 4-8 weeks | GSC coverage report |
| First organic traffic | 2-8 weeks | GA shows organic sessions |
| First page 1 ranking | 3-6 months | Low-competition keywords |
| 5,000 monthly visitors | 6-12 months | Diversified traffic sources |
| AdSense approval | 4-8 weeks | After content threshold |
| Mediavine eligible | 6-12 months | 1,000+ monthly sessions |

## Key Files Reference

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Global metadata, verification codes, schemas |
| `public/robots.txt` | Crawler directives |
| `public/sitemap.xml` | URL inventory for search engines |
| `lib/indexnow.ts` | Instant search engine notification |
| `lib/schema-utils.ts` | Structured data generators |
| `lib/trading-affiliates.ts` | Monetization partner catalog |

## Emergency Contacts

If site is not indexed after 4 weeks:
1. Check robots.txt is not blocking (/api/, /_next/ only)
2. Verify no noindex meta tags in page source
3. Check Google Search Console for crawl errors
4. Submit manual indexing request via URL Inspection
5. Consider technical SEO audit

---

*Last updated: 2026-01-25*

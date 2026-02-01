# QuantCurb SEO Deployment Checklist

This checklist ensures proper Google/Bing indexing for the 411+ pages on quantcurb.com.

## Critical Pre-Launch Steps (Must Complete)

### 1. Google Search Console Setup
- [ ] Go to [Google Search Console](https://search.google.com/search-console)
- [ ] Add property for `https://quantcurb.com`
- [ ] Choose verification method (recommended: HTML tag or DNS)
- [ ] Copy the verification code (e.g., `google-site-verification=ABC123...`)
- [ ] Update `app/layout.tsx` line 78 with actual code:
  ```tsx
  google: 'YOUR_ACTUAL_GOOGLE_VERIFICATION_CODE',
  ```
- [ ] Deploy the updated code
- [ ] Complete verification in Search Console
- [ ] Submit sitemap: `https://quantcurb.com/sitemap.xml`

### 2. Bing Webmaster Tools Setup
- [ ] Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Add site `https://quantcurb.com`
- [ ] Get verification code
- [ ] Update `app/layout.tsx` line 80 with actual code:
  ```tsx
  'msvalidate.01': 'YOUR_ACTUAL_BING_VERIFICATION_CODE',
  ```
- [ ] Deploy and verify
- [ ] Submit sitemap in Bing Webmaster Tools

### 3. Convert og-image.svg to og-image.png
Social media platforms require PNG/JPG for Open Graph images.
```bash
# Using Inkscape (install first)
inkscape public/og-image.svg --export-type=png --export-filename=public/og-image.png --export-width=1200 --export-height=630

# Or using ImageMagick
convert public/og-image.svg public/og-image.png

# Or use online converter: https://svgtopng.com
```

## Post-Deployment Verification

### 4. Request Indexing (After Verification)
In Google Search Console:
- [ ] Use URL Inspection tool on homepage
- [ ] Click "Request Indexing"
- [ ] Repeat for top 10 pages:
  - `/mortgage-payment-calculator/`
  - `/salary-tax-estimator/`
  - `/early-retirement-fire-planner/`
  - `/quarterly-estimated-tax-calculator/`
  - `/loan-emi-calculator/`
  - `/blog/`
  - `/tax-calculators/`
  - `/retirement-calculators/`
  - `/mortgage-calculators/`
  - `/investment-calculators/`

### 5. IndexNow Notification (Optional but Recommended)
```bash
# Run the notification script after deployment
node scripts/notify-search-engines.cjs
```

### 6. Verify Technical SEO
Use these tools to verify implementation:
- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results) - Test FAQ/HowTo schemas
- [ ] [Schema.org Validator](https://validator.schema.org/) - Validate structured data
- [ ] [Google PageSpeed Insights](https://pagespeed.web.dev/) - Check Core Web Vitals
- [ ] [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) - Verify mobile rendering

## Current SEO Implementation Summary

### Structured Data (JSON-LD)
- **Organization Schema** - Site-wide (layout.tsx)
- **WebSite Schema** - Site-wide with search action
- **WebApplication Schema** - Each tool page
- **FAQPage Schema** - 18 calculators with 90+ Q&A pairs
- **HowTo Schema** - 10 key calculators with step-by-step guides
- **BreadcrumbList Schema** - All tool and state pages
- **BlogPosting Schema** - All blog articles

### Page Coverage
- **Core Tools**: 23 calculators
- **Hub Pages**: 5 category hubs
- **Blog Posts**: 67 articles
- **State Pages**: 255 (51 states x 5 calculator types)
- **Dividend Pages**: 50 ticker-specific pages
- **Total Indexable Pages**: 411

### Meta Tags
- Unique title and description for every page
- Canonical URLs on all pages
- Open Graph tags for social sharing
- Twitter Card tags
- robots: index, follow on all public pages

## Troubleshooting

### If Pages Aren't Being Indexed After 2 Weeks:
1. Check `site:quantcurb.com` in Google
2. Review Coverage report in Search Console
3. Look for crawl errors or blocked resources
4. Verify robots.txt allows crawling: https://quantcurb.com/robots.txt
5. Check for noindex tags in page source
6. Ensure sitemap is accessible: https://quantcurb.com/sitemap.xml

### Common Issues:
- **JavaScript rendering**: Site uses SSG (static export), pages are pre-rendered HTML
- **Duplicate content**: Canonical URLs are set on all pages
- **Crawl budget**: 411 pages is well within reasonable limits

## Expected Timeline
- **Day 1-3**: Search Console verification complete
- **Day 3-7**: First pages appear in index
- **Week 2-4**: Bulk of pages indexed
- **Month 2-3**: Rankings begin stabilizing
- **Month 6+**: Consistent organic traffic growth

## Monthly SEO Maintenance
- [ ] Review Search Console for crawl errors
- [ ] Check Coverage report for indexing issues
- [ ] Monitor Core Web Vitals
- [ ] Update sitemap if new pages added
- [ ] Publish 4-8 new blog posts monthly
- [ ] Build backlinks through guest posting/outreach

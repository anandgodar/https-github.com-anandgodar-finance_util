# QuantCurb Technical SEO Audit Checklist

**Site:** https://quantcurb.com/
**Audit date:** 2026-10-16
**Goal:** get the site crawled, indexed and ranking, then pass Google AdSense review.

**How this audit was done:** this sandbox could not reach the live domain, so the audit ran on the source code plus a local production build (`next build`, static export, 430 HTML pages in `out/`). Every finding below comes from that build output or from the source files named. Items marked **(verify live)** also need a check on production, because hosting settings (Vercel) can change the result.

**Priority:** 🔴 P0 blocks indexing, ranking or AdSense approval, fix first · 🟠 P1 high impact · 🟡 P2 improvement

**Status:** ❌ Fail · ⚠️ Warning · ✅ Pass (keep as is)

---

## Fix status (updated 2026-10-16)

Re-audit of the build after the fix pass: 429 pages, each with a self-referencing canonical and exactly 1 H1 (the 50 noindexed ticker pages excepted). No hreflang, no Tailwind CDN, no hidden links, no FAQ/HowTo markup. All titles ≤ 60 characters, all descriptions 70–160, every sitemap URL builds, average HTML 77 KB → 58 KB.

**Fixed in code:** 1.1–1.7 · 2.1–2.6 · 3.1, 3.2, 3.4, 3.5 · 4.2 (ad banner), 4.4 · 5.1–5.4, 5.6, 5.9 (calculator H1 names) · 6.1–6.3, 6.5 (real dates) · 7.1–7.3, 7.5 (thin/AI pages noindexed), 7.6 (ad/affiliate disclosure + terms). Also: empty "Ad space reserved" boxes removed, unverifiable "CFA/CPA reviewed" claims replaced with verifiable sourcing statements, and the AI Market Insights page noindexed.

**Still on you (cannot be done from code):**
1. **Search Console / Bing:** verify the domain with a DNS TXT record, submit `https://quantcurb.com/sitemap.xml`, and request indexing for the top 10 pages (2.6, 2.7).
2. **AdSense → Privacy & messaging:** turn on the European regulations (GDPR) consent message before or right after approval (7.4).
3. **Social profiles:** keep the X, LinkedIn and GitHub links in the footer and Organization schema only if those accounts exist and are yours (6.4).
4. **Mailboxes:** make sure `privacy@quantcurb.com` (privacy policy) and the contact-page address receive mail.
5. **Content refresh:** 31 titles and 37 URLs still say 2025. Refresh each post's figures to 2026 one at a time, as in the recent commits (5.5). Don't mass-rename them without updating the numbers.
6. **Named author / E-E-A-T:** add a real author or reviewer page if you have one (5.7).
7. **Measure:** run PageSpeed Insights on production after deploy (3.7), and test redirects and www/http consolidation live (1.8, 2.8).
8. **Ticker pages:** the 50 `/dividend-calculator/<ticker>/` pages are `noindex` until each gets substantial server-rendered content (2.3).

**Maintenance scripts:** after adding or editing a post, run `node scripts/generate-content-dates.cjs` (real published/modified dates), then `npm run build && node scripts/generate-sitemap.cjs` (sitemaps, with a check that every URL exists).

---

## Summary: the 10 things hurting traffic most

| # | Issue | Pages affected |
|---|-------|----------------|
| 1 | robots.txt blocks `/_next/`, so Google cannot load the CSS/JS needed to render any page | All 430 |
| 2 | Every page has `hreflang` tags pointing at the **homepage**, so Google may fold pages into `/` | All 430 |
| 3 | `/blog/` canonical points to the homepage, so the blog hub is de-indexed | Blog hub |
| 4 | 50 dividend ticker pages are 9-word shells with no H1 and a homepage canonical | 50 |
| 5 | Sitemap lists 29 URLs that return 404 (`/dashboard/` and 28 tickers) | 29 |
| 6 | Tailwind is loaded from the CDN as a render-blocking runtime script, which hurts LCP/CLS | All |
| 7 | A hidden "CrawlerNav" link block on every page is a hidden-links spam risk | All |
| 8 | Article `datePublished`/`dateModified` and "Updated:" byline are set to the **build date** on every build (fake freshness) | All blog posts |
| 9 | Privacy policy doesn't disclose Google AdSense / advertising cookies, which AdSense review requires | AdSense |
| 10 | No `ads.txt`, a placeholder `ca-pub-XXXXXXXXXX` ad client, and placeholder Search Console verification codes | AdSense / GSC |

---

## 1. Crawlability (8 items)

### 1.1 🔴 ❌ robots.txt blocks Next.js assets (`/_next/`)
- **Evidence:** `public/robots.txt:11,26,32,43` set `Disallow: /_next/` for `*`, Googlebot, Googlebot-Image and Bingbot. Every page's CSS and JS chunks live under `/_next/static/`.
- **Impact:** Google renders pages without their JS/CSS. Calculators (client-rendered) look empty or broken, and mobile-friendliness and page-quality checks can fail.
- **Fix:** delete every `Disallow: /_next/` line. Static exports have no `/api/` folder, so `Disallow: /api/` is harmless but unnecessary.

### 1.2 🟠 ❌ Junk and non-standard robots.txt directives
- **Evidence:** `Crawl-delay: 1` (line 18) and `Host:` (line 93) are ignored by Google, and `Host` is a Yandex-only directive. `Disallow: /*.json$` and `Disallow: /*?*` apply only to `*`, because Googlebot has its own block, so the rules are inconsistent.
- **Fix:** rewrite robots.txt to about 10 lines: `User-agent: *`, `Allow: /`, `Disallow: /404/`, then a single `Sitemap: https://quantcurb.com/sitemap-index.xml`.

### 1.3 🔴 ❌ The sitemap lists URLs that 404
- **Evidence:** of the 430 URLs across `public/sitemap*.xml`, 29 have no built page:
  - `/dashboard/` (also linked in `components/CrawlerNav.tsx`)
  - 28 dividend tickers: `/dividend-calculator/aapl/`, `msft`, `nvda`, `spy`, `voo`, `schd` and others
- **Impact:** a sitemap full of 404s lowers Google's trust in it, and crawl budget is wasted.
- **Fix:** have `scripts/generate-sitemap.cjs` build the list **from the generated `out/` directory**, or from the same `generateStaticParams` data the pages use. Remove `/dashboard/` and point `/dashboard` at `/` with a 301 redirect in `vercel.json`.

### 1.4 🟠 ❌ Built pages missing from the sitemap
- **Evidence:** 28 dividend ticker pages that do exist (`abbv`, `cvx`, `jpm`, `xom` and others) are not in any sitemap. `/cost-of-living-calculator/` is also missing.
- **Fix:** same as 1.3: generate the sitemap from the build output.

### 1.5 🟠 ❌ Duplicate and overlapping sitemap files
- **Evidence:** `sitemap.xml` (427 URLs) duplicates `sitemap-blog.xml`, `sitemap-calculators.xml` and `sitemap-states.xml`. robots.txt lists all four, but not `sitemap-index.xml`.
- **Fix:** keep `sitemap-index.xml`, which points to the 3 child sitemaps. Either delete `sitemap.xml` or make it the index. Submit **only the index** in Search Console and Bing Webmaster Tools.

### 1.6 🟠 ⚠️ Sitemap `lastmod` is identical for every URL
- **Evidence:** every `<lastmod>` is `2026-09-25`. A blanket date tells Google the field can't be trusted.
- **Fix:** use each page's real last content change (git commit date of the page or component file). Drop `<changefreq>` and `<priority>`, which Google ignores.

### 1.7 🔴 ❌ Hidden link block on every page (`CrawlerNav`)
- **Evidence:** `app/layout.tsx:177` renders `<CrawlerNav />` on every page. `components/CrawlerNav.tsx` hides it with `sr-only`, `position:absolute` and `clip: rect(0,0,0,0)`, and its own comment says *"visually hidden but accessible to search crawlers"*.
- **Impact:** Google's spam policies name hidden links, and AdSense reviewers check for them too. It also adds about 100 identical links to every page.
- **Fix:** delete `CrawlerNav`. Give those links a **visible** home instead: the footer (already present), the HTML `/sitemap/` page, the hub pages, and contextual in-content links.

### 1.8 🟡 ⚠️ Redirect hygiene (verify live)
- **Evidence:** `vercel.json:83` has `/dividend-calculator` → `/dividend-reinvestment-calculator/` without a trailing-slash variant, while `/dividend-calculator/<ticker>/` pages exist below it. A parent that redirects while its children render confuses the hierarchy. `/mortgage-calculator` redirects to `/mortgage-payment-calculator/` while 51 pages live at `/mortgage-calculator/<state>/`.
- **Fix:** give `/dividend-calculator/` and `/mortgage-calculator/` real hub pages that list their child pages, or move the children under the redirect target. Confirm every redirect is a single 301/308 hop with `curl -I`.

---

## 2. Indexability (8 items)

### 2.1 🔴 ❌ Every page has an hreflang pointing to the homepage
- **Evidence:** `app/layout.tsx:151-152` hard-codes `<link rel="alternate" hrefLang="en" href="https://quantcurb.com/">` and `x-default` into **every** page (confirmed on all 430 built pages).
- **Impact:** each page tells Google that its English version is the homepage, which competes with its own canonical. Google can fold the pages into `/`.
- **Fix:** delete both lines. The site is English-only, so it doesn't need hreflang.

### 2.2 🔴 ❌ The default canonical `/` leaks to pages without their own
- **Evidence:** `app/layout.tsx:39` sets `alternates.canonical: '/'`. 53 built pages inherit it and canonicalize to the homepage:
  - `/blog/`, the main blog hub
  - all 50 `/dividend-calculator/<ticker>/` pages
  - `/404/`
  - `/salary-tax-estimator-[state]/`
- **Fix:** remove `canonical` from the root layout. Add a self-referencing canonical in `app/blog/page.tsx` and `app/dividend-calculator/[ticker]/page.tsx`. Re-run the audit script and confirm that canonical equals the page URL on every page.

### 2.3 🔴 ❌ 50 thin dividend ticker pages
- **Evidence:** `/dividend-calculator/abbv/` and its 49 siblings render **9 words**, no H1, and a homepage canonical in the server HTML. The content appears only after client-side JavaScript runs.
- **Impact:** "thin content" and "low value content" are the two most common AdSense rejection reasons. Fifty near-empty pages drag down the whole site.
- **Fix:** either (a) server-render real content for each ticker (current yield, payout history, 10-year DRIP projection table, FAQ) with at least 400 unique words, or (b) add `noindex` and remove them from the sitemap until they have content. Option (b) is the faster path to AdSense.

### 2.4 🔴 ❌ A literal `/salary-tax-estimator-[state]/` URL is deployed
- **Evidence:** the folder `app/salary-tax-estimator-[state]/` is not a valid Next.js dynamic segment, because brackets must cover the whole folder name. It builds a single junk page at `/salary-tax-estimator-[state]/` (18 words, homepage canonical).
- **Fix:** delete the folder. The 301 in `vercel.json` already handles `/salary-tax-estimator-:state`.

### 2.5 🟠 ❌ The 404 page has conflicting robots meta
- **Evidence:** `out/404.html` contains both `noindex` and `index, follow`, because the root layout's `robots` metadata merges in.
- **Fix:** add `app/not-found.tsx` with `export const metadata = { robots: { index: false, follow: true } }` and helpful links back to the calculators. **(verify live)** Check that unknown URLs return HTTP **404**, not 200.

### 2.6 🔴 ❌ Placeholder verification codes in production HTML
- **Evidence:** `app/layout.tsx:82-85` ships `REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE`, `REPLACE_WITH_BING_WEBMASTER_VERIFICATION_CODE` and `yandex-verification-placeholder` as meta tags.
- **Impact:** if Search Console isn't verified, you can't see indexing errors, submit sitemaps or request indexing, which matters a lot for a site with no traffic.
- **Fix:** verify the domain in Search Console using a **DNS TXT record** (covers http/https/www) and add the real codes, or remove the `verification` block.

### 2.7 🟠 ⚠️ Search Console indexing review (verify live)
- In GSC, open **Indexing → Pages** and export the "Crawled – currently not indexed", "Discovered – not indexed", "Duplicate, Google chose different canonical" and "Alternate page with proper canonical" lists. Items 2.1 and 2.2 are the likely causes of the last two.
- After the fixes, submit `sitemap-index.xml` and use **URL Inspection → Request indexing** on the top 10 pages: the homepage, the 6 main calculators and the 3 best guides.

### 2.8 🟠 ⚠️ www/http consolidation (verify live)
- Confirm that `http://quantcurb.com`, `http://www.quantcurb.com` and `https://www.quantcurb.com` all 301 to `https://quantcurb.com/` in one hop, and that the Vercel domain (`*.vercel.app`) doesn't serve indexable duplicates. If it does, add a redirect or `X-Robots-Tag: noindex` for non-production hosts.

---

## 3. Page Speed / Core Web Vitals (7 items)

### 3.1 🔴 ❌ Tailwind loaded from the CDN at runtime (render-blocking)
- **Evidence:** `app/layout.tsx:167` loads `<Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />`. This is the Tailwind **Play CDN**, which compiles CSS in the browser on every page view. Tailwind's documentation says it is not for production.
- **Impact:** an unstyled flash until the script compiles, which means large CLS and slow LCP on mobile. It is the single biggest Core Web Vitals problem on the site.
- **Fix:** install Tailwind as a build dependency (`tailwindcss`, `postcss`, `autoprefixer`, `tailwind.config.js` with `content: ['./app/**/*.tsx','./components/**/*.tsx','./src/**/*.tsx']`, `@tailwind` directives in `app/globals.css`), then delete the CDN script.

### 3.2 🟠 ❌ The Google Fonts stylesheet blocks rendering
- **Evidence:** `app/layout.tsx` links `fonts.googleapis.com` for Inter in **7 weights** (300–900).
- **Fix:** use `next/font/google` (`Inter({ subsets:['latin'], weight:['400','600','700'] })`). It self-hosts the font, removes the extra third-party connection and avoids layout shift. Cut the weights to the ones you actually use.

### 3.3 🟠 ⚠️ Heavy JavaScript bundles
- **Evidence:** `out/_next/static/chunks` totals **4.5 MB**. The largest chunks are 357 KB, 242 KB and 173 KB unminified. `recharts`, the `@visx` packages and `@google/genai` are all bundled.
- **Fix:** load charts with `next/dynamic` (`ssr:false`) only below the fold. Move `@google/genai` calls to a server or edge function so the SDK never ships to the browser. Run `npx @next/bundle-analyzer` and aim for under 200 KB of JS on first load for each calculator page.

### 3.4 🟠 ⚠️ Large HTML payloads
- **Evidence:** the average page is **77 KB** of HTML, and state and calculator pages are about 100 KB. Part of that is the hidden CrawlerNav (1.7) repeated on every page, plus inline JSON-LD and the RSC payload.
- **Fix:** removing CrawlerNav and the duplicate schema (6.x) trims each page. Aim for under 60 KB.

### 3.5 🟠 ⚠️ Ad slots will cause layout shift (CLS)
- **Evidence:** `components/AdPlacement.tsx` reserves `min-h-[250px]` for responsive units, which is good, but `banner` uses `min-w-[728px]`, which overflows on mobile.
- **Fix:** keep fixed minimum heights for each slot. Make the banner `w-full max-w-[728px] min-h-[90px]` and switch to a 320×100 unit on small screens. Avoid more than 3 ad units above the fold.

### 3.6 🟡 ⚠️ Images and the OG image
- **Evidence:** `images.unoptimized: true` (needed for static export). `og-image.png` is also used as the Organization `logo`, which is the wrong aspect ratio for a logo.
- **Fix:** export any content images to WebP/AVIF at the size they display. Add a square `logo.png` (at least 112×112) for schema.

### 3.7 🟠 ⚠️ Measure real Core Web Vitals (verify live)
- Run PageSpeed Insights (mobile) on `/`, `/salary-tax-estimator/` and `/mortgage-payment-calculator/`, plus one blog post. Targets: **LCP < 2.5 s, INP < 200 ms, CLS < 0.1**. Check GSC → Core Web Vitals once there is field data. Re-test after 3.1 and 3.2. Those two fixes alone should move the scores the most.

---

## 4. Mobile (5 items)

### 4.1 ✅ Viewport is set correctly
- `app/layout.tsx` sets `width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes`, so users can zoom. Keep it.

### 4.2 🟠 ⚠️ Horizontal overflow from fixed-width elements
- **Evidence:** the 728 px banner ad (3.5). Calculators with wide tables or charts (amortization tables, `OptionsHeatmap`, `ExcelModeler`) are also at risk.
- **Fix:** wrap tables in `overflow-x-auto`. Test every calculator at a 360 px width in Chrome DevTools and confirm there is no page-level horizontal scroll.

### 4.3 🟠 ⚠️ Tap targets and form inputs
- **Fix:** calculator inputs should be at least 44×44 px, with 8 px of spacing, and use `inputMode="decimal"` so mobile users get a numeric keypad. Labels need to be tied to inputs (`htmlFor`), which helps accessibility and how Google understands the page.

### 4.4 🔴 ❌ Mobile rendering depends on blocked resources
- Google indexes the mobile version first, and mobile Googlebot currently can't fetch `/_next/` (1.1) and gets an unstyled page until Tailwind CDN finishes compiling (3.1). Fix those two first, then check with **GSC URL Inspection → View tested page → Screenshot**.

### 4.5 🟡 ⚠️ PWA manifest and theme
- `public/manifest.json` exists and `themeColor` is set. Check that the manifest icons (192 px and 512 px) exist and load. Ranking isn't affected, but missing icons cause console errors.

---

## 5. On-Page SEO (9 items)

### 5.1 🟠 ❌ Missing H1 in the server-rendered HTML on core calculators
- **Evidence:** these pages have **0 H1** in the static HTML because the heading only renders client-side: `/early-retirement-fire-planner/`, `/wealth-investment-projector/`, `/loan-comparison-tool/`, `/freelance-profit-hub/`, `/cost-of-living-calculator/`, `/dividend-reinvestment-calculator/`, `/market-intelligence-pulse/` and `/aca-health-insurance-subsidy-calculator/`. The same applies to all 50 ticker pages.
- **Fix:** render a server-side H1 plus a 150–300 word intro above each calculator (what it does, who it's for, the 2026 assumptions), in `app/[[...tool]]/page.tsx` outside the lazy-loaded `AppShell`.

### 5.2 🟠 ❌ Two H1s on 102 state pages
- **Evidence:** every `/salary-tax-estimator/<state>/` page has 2 H1s ("Texas Paycheck Calculator 2026" and "Texas Salary Paycheck Calculator 2026"). Every `/mortgage-calculator/<state>/` page has 2 H1s ("Texas Mortgage Calculator" and "Mortgage PITI Analyzer").
- **Fix:** the embedded calculator component should take a `headingLevel` prop and render `h2` when it appears inside a state page.

### 5.3 🟠 ❌ Title tags too long
- **Evidence:** **312 of 430** titles are over 60 characters (258 over 70), so Google truncates them. For example, `Texas Mortgage Calculator 2026 | How Much House Can I Afford in Texas? | QuantCurb` is 82 characters.
- **Fix:** keep titles to 50–60 characters with the primary keyword first, e.g. `Texas Mortgage Calculator 2026 – PITI & Taxes | QuantCurb`. The `%s | QuantCurb` template adds 12 characters, so page titles should be 48 characters or fewer.

### 5.4 🟠 ❌ Meta descriptions too short or too long
- **Evidence:** 66 pages have descriptions under 70 characters (the `/blog/` hub has 61, privacy 62, the mortgage guide 76). 129 pages are over 160 characters (the Texas mortgage page has 184).
- **Fix:** aim for 140–155 characters that include the keyword, a concrete benefit and a call to action ("Free, no signup").

### 5.5 🟠 ❌ Stale "2025" in titles and URLs
- **Evidence:** 31 titles and **37 URLs** still say 2025 (`/blog/mortgage-calculator-guide-2025/`, `/blog/self-employment-tax-guide-2025/`, `/best-mortgage-calculator-2025/` and others) in October 2026. Searchers skip results that look a year out of date.
- **Fix:** update the content and titles to 2026, continuing the recent commits. For URLs, either move to **year-less slugs** (`/blog/self-employment-tax-guide/`) with 301s from the old ones, which is best long-term, or keep the URLs and change only titles and H1s. Don't create new `-2026` URLs every year.

### 5.6 🔴 ❌ Fake freshness dates
- **Evidence:** `app/blog/[slug]/page.tsx:75-76` and `lib/schema-utils.ts:372` set `datePublished`/`dateModified` to `new Date()`, which is the **build date**, so every post claims it was published today. `components/AuthorCredentials.tsx:11,30` shows "Updated: <today>" on every page view.
- **Impact:** Google treats changing dates without real edits as manipulative and can ignore or demote them. It also reads as untrustworthy to an AdSense reviewer.
- **Fix:** store real `publishedAt`/`updatedAt` for each post in `lib/blog-metadata.ts` and use those values in schema and the byline.

### 5.7 🟠 ⚠️ E-E-A-T: an anonymous publisher on YMYL topics
- **Evidence:** article `author` is `{"@type":"Organization","name":"QuantCurb"}`. Taxes, mortgages and retirement are "Your Money or Your Life" topics, where Google weighs expertise heavily.
- **Fix:** add a real named author (or editor or reviewer) with a `/authors/<name>/` page: bio, credentials, photo, LinkedIn. Use `"author":{"@type":"Person",...}` in schema. Add "Reviewed by" and sources (IRS, SSA and state revenue department links) on every tax article. Replace marketing language such as "Institutional Logic" and "High-Fidelity Financial Intelligence" with plain, verifiable claims.

### 5.8 🟠 ⚠️ Internal linking
- **Fix:** each blog post should link to its matching calculator (`lib/blog-calculator-map.ts` already exists, so render the links in the body). Each calculator should link to 2–3 related guides, each state page to its neighbouring states and the national calculator, and the hub pages to all of their children. Use descriptive anchor text, not "click here". This replaces the hidden CrawlerNav (1.7).

### 5.9 🟡 ⚠️ Keyword meta tags and title consistency
- `keywords` metadata has no ranking value. It's harmless but can go. Align the H1, title and URL: `/excel-power-modeler/` is titled as a "DCF" tool, and `/currency-exchange-intel/` should be about "currency converter". Branded slugs ("command-center", "guard", "intel") don't match what people search. The 301s from the keyword slugs exist, but the canonical URLs themselves aren't keyword-rich. Treat this as a long-term consideration, and don't churn URLs that are already indexed.

---

## 6. Structured Data (6 items)

### 6.1 🟠 ❌ Wrong schema type on content pages
- **Evidence:** `/privacy-policy/`, `/about-quantcurb/`, `/contact-us/`, `/legal-disclaimer/`, `/sitemap/` and the `/academy/*` guides all output `WebApplication` with `Offer price 0`.
- **Fix:** use `WebApplication` only on actual calculators. Use `AboutPage`, `ContactPage` and `WebPage` for the company pages and `Article` for the academy guides.

### 6.2 🟠 ❌ FAQ schema reused across unrelated tools
- **Evidence:** in `app/[[...tool]]/page.tsx`, `taxCalculatorFAQs` is attached to the Quarterly Tax, **Child Tax Credit** and **Freelance** pages. `fireCalculatorFAQs` is on the Retirement Optimizer and `investmentCalculatorFAQs` on DRIP.
- **Impact:** FAQ markup must match questions visible on the page, and identical FAQ blocks across pages count as duplicate content. Since 2023 Google shows FAQ rich results only for government and health sites, so the markup no longer earns snippets.
- **Fix:** write unique FAQs for each tool, visible on the page. Keep FAQPage markup only where the FAQ is rendered.

### 6.3 🟡 ⚠️ Deprecated HowTo and Sitelinks Search Box markup
- **Evidence:** every calculator gets a `HowTo` schema (`components/HowToSchema.tsx`). Google dropped HowTo rich results in 2023. `app/layout.tsx:128` declares a `SearchAction` to `/blog/?q=`, but Google retired the sitelinks search box in Nov 2024, and the blog has no working `?q` search.
- **Fix:** remove both. They add bytes and give nothing back.

### 6.4 🟠 ⚠️ Organization schema `sameAs` and logo (verify live)
- **Evidence:** `app/layout.tsx:108` lists `twitter.com/quantcurb`, `linkedin.com/company/quantcurb` and `github.com/quantcurb`, and the footer links to them too. If those profiles don't exist or aren't yours, they're false claims and broken outbound links.
- **Fix:** keep only profiles you control. Use a square logo (3.6). Add `email` to `contactPoint`.

### 6.5 🟠 ⚠️ Article schema completeness
- **Fix:** each blog post needs `headline` (≤110 characters), `image` (1200 px wide), `datePublished`/`dateModified` with real dates (5.6), `author` as a Person with a `url` (5.7), `publisher` with a `logo`, and `mainEntityOfPage`. Use the `BreadcrumbList` (Home › Blog › Post), which is already present on most pages.

### 6.6 🟡 ⚠️ Validate everything
- Run the Rich Results Test and the Schema.org validator on one page of each template (home, calculator, state page, blog post, ticker page, company page). Then watch GSC → Enhancements for errors after deploying.

---

## 7. AdSense Approval Readiness (7 items)

These are the usual reasons a new finance site gets rejected ("Low value content" or "Site not ready").

### 7.1 🔴 ❌ No `ads.txt`
- **Evidence:** `public/` contains no `ads.txt`.
- **Fix:** after AdSense gives you your publisher ID, add `public/ads.txt` containing `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`. Check that it loads at `https://quantcurb.com/ads.txt`.

### 7.2 🔴 ❌ No AdSense site-verification script, and a placeholder client ID
- **Evidence:** no `adsbygoogle.js` loader exists anywhere. `components/AdPlacement.tsx:103` hard-codes `data-ad-client="ca-pub-XXXXXXXXXX"`.
- **Fix:** add the AdSense code to `app/layout.tsx` with `<Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID" crossOrigin="anonymous" strategy="afterInteractive" />`. Read the ID from `NEXT_PUBLIC_ADSENSE_CLIENT` in `AdPlacement`. Don't show empty "Ad placeholder" boxes to visitors during review.

### 7.3 🔴 ❌ The privacy policy doesn't cover advertising
- **Evidence:** `/privacy-policy/` is 560 words and never mentions Google, AdSense, the DoubleClick cookie, personalized ads or the opt-out links. AdSense program policy **requires** this disclosure.
- **Fix:** add a section saying that third-party vendors, including Google, use cookies to serve ads based on prior visits, that Google's advertising cookies make that possible, and that users can opt out at https://adssettings.google.com and https://www.aboutads.info. Also cover Google Analytics (`G-WSKZ5JNETS`), the Gemini API (user inputs sent to Google), and localStorage use (`AffiliateBanner` click tracking).

### 7.4 🔴 ⚠️ Consent management for EEA, UK and Swiss traffic
- Google requires a **Google-certified CMP** (TCF v2.2) to serve ads to EEA, UK and Swiss users. The simplest route is the free "Privacy & messaging → European regulations" message inside AdSense. Enable it before or right after approval, and add Consent Mode v2 to the gtag config.

### 7.5 🔴 ❌ Thin and low-value pages must go before you apply
- The 50 ticker pages (2.3), the junk `[state]` page (2.4) and the 29 sitemap 404s (1.3) are exactly what triggers "Low value content". Also review the **255 programmatic state pages** (51 states × salary, mortgage, FIRE, freelance and quarterly tax): if two state pages differ only by the state name and tax rate, merge them or add real state-specific content (state tax brackets table, local cost data, a worked example, state FAQ) so each page has over 500 unique words.

### 7.6 🟠 ⚠️ Trust pages: present, but strengthen
- ✅ About, Contact, Privacy, Legal Disclaimer and Methodology exist and are linked in the footer.
- ⚠️ Add a separate **Terms of Use** page (`/terms/`) and a **Editorial policy / How we make money** page that discloses the affiliate links in `components/AffiliateBanner.tsx`. Mark affiliate links `rel="sponsored noopener"`.
- ⚠️ The Contact page should show a working email address, and ideally a business location. The About page should name the people behind the site.

### 7.7 🟠 ⚠️ Original content depth and AI content
- Several tools call Gemini (`services/geminiService.ts`) to generate "market insights". Google doesn't penalize AI content as such, but AdSense rejects **unreviewed, mass-generated** text. Keep AI output behind a user action, don't index it as pages, and make sure the ~80 blog posts are substantively original, edited by a person, and cite sources.
- **Before applying:** have at least 25–30 strong, indexed articles of 1,200 words or more, GSC showing them as *Indexed*, and some organic traffic. Approval rates rise sharply once Google has indexed the site properly, so do sections 1–2 first, wait 2–4 weeks, then apply.

---

## Fix order (suggested 4-week plan)

**Week 1: unblock Google (P0, mostly one-line fixes)**
1. robots.txt rewrite (1.1, 1.2)
2. Remove hreflang and the layout canonical. Add self-canonicals to `/blog/` and the ticker pages (2.1, 2.2)
3. Delete `CrawlerNav` (1.7) and the `salary-tax-estimator-[state]` folder (2.4)
4. Noindex the ticker pages and drop them from the sitemap (2.3). Generate the sitemap from the build (1.3–1.6)
5. Verify the domain in GSC and Bing, then submit `sitemap-index.xml` (2.6, 2.7)

**Week 2: speed and rendering**
6. Replace the Tailwind CDN with a built Tailwind (3.1). Switch to `next/font` (3.2)
7. Server-render H1s and intros on the calculators. Fix double H1s (5.1, 5.2)
8. Real publish/update dates (5.6). Remove the deprecated or incorrect schema (6.1–6.3)

**Week 3: content and trust**
9. Titles and descriptions (5.3, 5.4), the 2025 → 2026 refresh (5.5)
10. Privacy policy ad disclosure, a Terms page, affiliate disclosure, a named author (7.3, 7.6, 5.7)
11. Internal linking from posts to calculators and between states (5.8)

**Week 4: AdSense**
12. Confirm in GSC that most pages show *Indexed* and the Core Web Vitals are good (3.7)
13. Add the AdSense script and `ads.txt`, enable the CMP message, then apply (7.1, 7.2, 7.4)

---

## Re-audit command

After the fixes, rebuild and re-check the HTML that ships:

```bash
npm run build
# canonical must equal page URL; 0 hreflang; exactly 1 H1; >300 words
grep -L 'rel="canonical"' -r out --include=index.html     # pages missing canonical
grep -l 'hrefLang' -r out --include=index.html | wc -l     # should be 0
grep -l 'cdn.tailwindcss.com' -r out --include=*.html | wc -l  # should be 0
grep -c '_next' public/robots.txt                          # should be 0
```

**Item count:** Crawlability 8 · Indexability 8 · Page Speed 7 · Mobile 5 · On-Page 9 · Structured Data 6 · AdSense 7 = **50 items**.

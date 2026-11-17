#!/usr/bin/env node
/**
 * AdSense/content gate (Nov 2026, after the 4 Nov "Low value content"
 * rejection). Runs after `next build` and fails the build on regressions:
 *
 * 1. No indexable page under MIN_WORDS body words (EXEMPT lists the few
 *    interactive/utility pages whose value is the tool itself).
 * 2. No live page under the four retired state-tier prefixes or the retired
 *    market-intelligence-pulse page (they must not come back thin).
 * 3. No built page links a redirected URL (vercel.json exact sources and the
 *    retired-tier wildcards) — links must point at pages, not 301s.
 * 4. Every vercel.json redirect destination (static ones) resolves to a built
 *    page or an external URL, and no redirect source shadows a built page.
 * 5. Sitemap files only list built, indexable pages.
 *
 * AdSense reviews the LIVE site: noindex exempts nothing (lesson learned on
 * travelnursecalc and summitseeker). The thin-page rule therefore applies to
 * every built page, indexable or not.
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const APP = join(ROOT, '.next', 'server', 'app');
const MIN_WORDS = 300;
// Interactive/utility pages whose value is the tool, not prose. Keep this
// list short — a TIER tripping the word gate means fix the tier.
const EXEMPT = new Set(['/contact-us', '/sitemap', '/_not-found', '/_not-found/index']);

const RETIRED_PREFIXES = [
  '/freelance-profit-hub/',
  '/early-retirement-fire-planner/',
  '/mortgage-calculator/',
  '/quarterly-tax-calculator/',
];
const RETIRED_EXACT = new Set(['/market-intelligence-pulse']);

const failures = [];

// ---- walk built pages
function* htmlFiles(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) yield* htmlFiles(p);
    else if (e.endsWith('.html')) yield p;
  }
}
const pages = [];
for (const p of htmlFiles(APP)) {
  const html = readFileSync(p, 'utf8');
  const url = p.slice(APP.length, -5).replace(/\\/g, '/');
  let b = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<head[\s\S]*?<\/head>/g, '');
  b = b.replace(/<header[\s\S]*?<\/header>|<nav[\s\S]*?<\/nav>|<footer[\s\S]*?<\/footer>/g, '');
  const words = b.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  const noindex = /name="robots"[^>]*noindex/.test(html);
  pages.push({ url, words, noindex, html });
}
const byUrl = new Map(pages.map((p) => [p.url, p]));

// Rule 1 + 2
for (const p of pages) {
  if (!EXEMPT.has(p.url) && p.words < MIN_WORDS)
    failures.push(`thin: ${p.url} has ${p.words} body words (< ${MIN_WORDS}) — AdSense reviews the live site, noindex does not exempt it`);
  if (RETIRED_PREFIXES.some((x) => p.url.startsWith(x)) || RETIRED_EXACT.has(p.url))
    failures.push(`retired: ${p.url} is built but its URL space is redirected (vercel.json) — remove the page or the redirect`);
}

// ---- vercel.json
const vercel = JSON.parse(readFileSync(join(ROOT, 'vercel.json'), 'utf8'));
const redirectedExact = new Set();
for (const r of vercel.redirects || []) {
  const src = r.source.replace(/\/$/, '') || '/';
  if (!src.includes(':')) redirectedExact.add(src);
  const dst = (r.destination || '').replace(/\/$/, '') || '/';
  if (!src.includes(':') && byUrl.has(src === '/' ? '/index' : src)) {
    // A built page whose URL 301s is tolerated ONLY when its canonical points
    // at the redirect target (the repo's convention for moved posts: the 301
    // intercepts before the static file, which exists as a fallback).
    const pg = byUrl.get(src === '/' ? '/index' : src);
    const canon = /rel="canonical"\s+href="([^"]+)"/.exec(pg.html)?.[1]?.replace(/\/$/, '');
    const want = dst.startsWith('http') ? dst : `https://quantcurb.com${dst}`;
    if (canon !== want) failures.push(`redirects: ${src} is 301'd but also built, and its canonical (${canon}) is not the redirect target`);
  }
  if (!dst.startsWith('http') && dst !== '/' && !dst.includes(':') && !byUrl.has(dst))
    failures.push(`redirects: ${r.source} -> ${r.destination}, but the target is not built`);
}

// Rule 3: no built page links a redirected URL
const HREF_RE = /href=["']((?:https?:\/\/(?:www\.)?quantcurb\.com)?\/[a-z0-9/_-]+?)\/?["']/gi;
for (const p of pages) {
  const seen = new Set();
  for (const m of p.html.matchAll(HREF_RE)) {
    const path = (m[1].replace(/^https?:\/\/[^/]+/i, '') || '/').replace(/\/$/, '') || '/';
    if (seen.has(path)) continue;
    seen.add(path);
    const retired = RETIRED_PREFIXES.some((x) => path.startsWith(x)) || RETIRED_EXACT.has(path);
    if (retired || redirectedExact.has(path))
      failures.push(`link: ${p.url} links redirected URL ${path}`);
  }
}

// Rule 5: sitemaps list only built, indexable pages
for (const f of readdirSync(join(ROOT, 'public'))) {
  if (!/^sitemap.*\.xml$/.test(f) || f === 'sitemap-index.xml') continue;
  const xml = readFileSync(join(ROOT, 'public', f), 'utf8');
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    let path;
    try { path = new URL(m[1]).pathname.replace(/\/$/, '') || '/'; } catch { continue; }
    if (path.endsWith('.xml')) continue; // sitemap.xml is an index of child sitemaps
    const key = path === '/' ? '/index' : path;
    const p = byUrl.get(key);
    if (!p) failures.push(`sitemap: ${f} lists ${path} but it is not built`);
    else if (p.noindex) failures.push(`sitemap: ${f} lists ${path} but it is noindex`);
  }
}

if (failures.length) {
  const shown = failures.slice(0, 40);
  console.error(`[check-content] ${failures.length} failure(s):`);
  for (const f of shown) console.error('  ' + f);
  if (failures.length > shown.length) console.error(`  ... and ${failures.length - shown.length} more`);
  process.exit(1);
}
console.log(`[check-content] OK: ${pages.length} built pages, none thin outside EXEMPT; no links into redirects; sitemaps clean.`);

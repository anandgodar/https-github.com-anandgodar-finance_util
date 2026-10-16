#!/usr/bin/env node
/**
 * Writes lib/content-dates.json: real published/modified dates for every blog
 * post and academy guide (keyed "academy/<slug>"), taken from the git history of the post's own component file.
 *
 * Article schema used to stamp datePublished/dateModified with the build date,
 * so every post claimed to be brand new on every deploy. Vercel builds from a
 * shallow clone, so the dates are generated here (full history) and committed.
 *
 * Usage (after editing or adding a post, before committing):
 *   node scripts/generate-content-dates.cjs <slug> [<slug> ...]   update these posts
 *   node scripts/generate-content-dates.cjs                       add missing posts only
 *   node scripts/generate-content-dates.cjs --all                 recompute everything
 *
 * Existing entries are kept unless named (or --all), so a commit that only
 * touches markup (not the content) doesn't make every post look "updated".
 * Academy guides use the key "academy/<slug>".
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO_ROOT = path.join(__dirname, '..');
const OUT_FILE = path.join(REPO_ROOT, 'lib/content-dates.json');

function git(args) {
  try {
    return execSync('git ' + args, { cwd: REPO_ROOT, encoding: 'utf8' }).trim();
  } catch (e) {
    return '';
  }
}

if (git('rev-parse --is-shallow-repository') === 'true') {
  console.error('Shallow clone: run `git fetch --unshallow` first so first-commit dates are correct.');
  process.exit(1);
}

// slug -> component file, parsed from lib/blog-content.tsx (same approach as
// scripts/generate-sitemap.cjs).
const src = fs.readFileSync(path.join(REPO_ROOT, 'lib/blog-content.tsx'), 'utf8');
const compToFile = {};
const importRe = /import (\w+) from '\.\.\/components\/blog\/([^']+)';/g;
let m;
while ((m = importRe.exec(src))) {
  compToFile[m[1]] = 'components/blog/' + m[2] + '.tsx';
}
const args = process.argv.slice(2);
const recomputeAll = args.includes('--all');
const only = new Set(args.filter((a) => a !== '--all'));
let existing = {};
try {
  existing = JSON.parse(fs.readFileSync(OUT_FILE, 'utf8'));
} catch (e) {
  existing = {};
}
const dates = {};
const entryRe = /'([\w-]+)':\s*\{[^}]*?component:\s*(\w+)/gs;
while ((m = entryRe.exec(src))) {
  const file = compToFile[m[2]];
  if (!file) continue;
  const history = git('log --follow --format=%cs -- ' + JSON.stringify(file)).split('\n').filter(Boolean);
  if (!history.length) continue;
  dates[m[1]] = { published: history[history.length - 1], modified: history[0] };
}

// Academy guides live at /academy/<slug>/ (one component file each).
const ACADEMY_FILE_MAP = {
  'california-texas-take-home-comparison': 'components/academy/StateTaxComparison.tsx',
  'dcf-valuation-complete-guide': 'components/academy/DCFGuide.tsx',
  'iron-condor-strategy-guide': 'components/academy/IronCondorGuide.tsx',
  'options-greeks-delta-theta-vega-gamma': 'components/academy/GreeksGuide.tsx',
  'safe-harbor-estimated-taxes': 'components/academy/SafeHarborGuide.tsx',
  'wacc-cost-of-capital-explained': 'components/academy/WACCGuide.tsx',
};
Object.keys(ACADEMY_FILE_MAP).forEach((slug) => {
  const history = git('log --follow --format=%cs -- ' + JSON.stringify(ACADEMY_FILE_MAP[slug])).split('\n').filter(Boolean);
  if (history.length) dates['academy/' + slug] = { published: history[history.length - 1], modified: history[0] };
});

// Keep curated dates for posts that weren't named on the command line.
Object.keys(dates).forEach((key) => {
  if (!recomputeAll && !only.has(key) && existing[key]) dates[key] = existing[key];
});

const sorted = {};
Object.keys(dates).sort().forEach((k) => { sorted[k] = dates[k]; });
fs.writeFileSync(OUT_FILE, JSON.stringify(sorted, null, 2) + '\n');
console.log('Wrote ' + Object.keys(sorted).length + ' entries to lib/content-dates.json');

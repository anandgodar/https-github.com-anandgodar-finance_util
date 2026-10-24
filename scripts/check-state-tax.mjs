#!/usr/bin/env node
/**
 * Prints the five-salary take-home table for every sourced state
 * (lib/state-tax-2026) using the site's own paycheck engine, and exits
 * non-zero on NaN, a negative figure, or a known-answer mismatch.
 *
 * The engine is TypeScript; this script transpiles lib/paycheck-engine.ts and
 * lib/state-tax-2026/*.ts with the project's TypeScript compiler into a temp
 * directory and imports the result, so no extra tooling is needed.
 *
 *   node scripts/check-state-tax.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, mkdtempSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = mkdtempSync(join(tmpdir(), 'paycheck-engine-'));

function transpile(relPath) {
  const src = readFileSync(join(root, relPath), 'utf8');
  const { outputText } = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
    fileName: relPath,
  });
  // Node ESM needs explicit extensions on relative imports.
  const js = outputText.replace(/(from\s+['"])(\.{1,2}\/[^'"]+?)(['"])/g, (m, a, p, b) =>
    /\.(js|mjs|json)$/.test(p) ? m : `${a}${p}.js${b}`
  );
  const dest = join(out, relPath.replace(/\.ts$/, '.js'));
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, js);
}

transpile('lib/paycheck-engine.ts');
for (const f of readdirSync(join(root, 'lib/state-tax-2026'))) {
  if (f.endsWith('.ts')) transpile(`lib/state-tax-2026/${f}`);
}

const engine = await import(pathToFileURL(join(out, 'lib/paycheck-engine.js')).href);
const states = await import(pathToFileURL(join(out, 'lib/state-tax-2026/index.js')).href);

const usd = (n) => `$${Math.round(n).toLocaleString('en-US')}`.padStart(10);
let failed = false;

function check(cond, msg) {
  if (!cond) {
    failed = true;
    console.error(`FAIL: ${msg}`);
  }
}

for (const spec of states.SOURCED_STATES) {
  console.log(`\n${spec.name} (${spec.code}) — tax year ${spec.taxYear}, reviewed ${spec._meta.retrievedAt}`);
  console.log('    salary    federal       fica      state    payroll        net   biweekly');
  for (const salary of engine.TABLE_SALARIES) {
    const r = engine.computePaycheck({ grossWages: salary, filingStatus: 'single', state: spec });
    const vals = [r.federal.tax, r.fica.total, r.state.tax, r.state.payrollTotal, r.net, r.perPaycheck.biweekly];
    for (const v of vals) {
      check(Number.isFinite(v), `${spec.code} ${salary}: non-finite value`);
      check(v >= 0, `${spec.code} ${salary}: negative value ${v}`);
    }
    check(Math.abs(salary - r.federal.tax - r.fica.total - r.state.tax - r.state.payrollTotal - r.net) < 0.01, `${spec.code} ${salary}: lines do not sum to gross`);
    console.log(`${usd(salary)} ${vals.map(usd).join(' ')}`);
  }
}

// Known-answer checks, hand-computed from the sourced figures.
const fl60 = engine.computePaycheck({ grossWages: 60000, state: states.getSourcedStateTax('FL') });
check(fl60.state.tax === 0, 'Florida state tax must be zero');
// Federal single 2026 on 60,000 - 16,100 = 43,900 taxable: 10% of 12,400 + 12% of 31,500 = 1,240 + 3,780 = 5,020
check(Math.abs(fl60.federal.tax - 5020) < 0.01, `Federal tax on $60k single should be $5,020, got ${fl60.federal.tax}`);
check(Math.abs(fl60.fica.total - 4590) < 0.01, `FICA on $60k should be $4,590, got ${fl60.fica.total}`);

const pa60 = engine.computePaycheck({ grossWages: 60000, state: states.getSourcedStateTax('PA') });
check(Math.abs(pa60.state.tax - 1842) < 0.01, `PA 3.07% of $60k should be $1,842, got ${pa60.state.tax}`);
check(Math.abs(pa60.state.payrollTotal - 42) < 0.01, `PA UC 0.07% of $60k should be $42, got ${pa60.state.payrollTotal}`);

const il60 = engine.computePaycheck({ grossWages: 60000, state: states.getSourcedStateTax('IL') });
check(Math.abs(il60.state.tax - 0.0495 * (60000 - 2925)) < 0.01, `IL tax on $60k should be 4.95% of $57,075, got ${il60.state.tax}`);

// NJ single, $60k: taxable 59,000 after $1,000 exemption.
// 20,000*1.4% + 15,000*1.75% + 5,000*3.5% + 19,000*5.525% = 280 + 262.5 + 175 + 1,049.75 = 1,767.25
const nj60 = engine.computePaycheck({ grossWages: 60000, state: states.getSourcedStateTax('NJ') });
check(Math.abs(nj60.state.tax - 1767.25) < 0.01, `NJ tax on $60k single should be $1,767.25, got ${nj60.state.tax}`);
// NJ payroll on 60k: UI+WF 0.425% of 44,800 = 190.40; TDI 0.19% of 60k = 114; FLI 0.23% of 60k = 138 → 442.40
check(Math.abs(nj60.state.payrollTotal - 442.4) < 0.01, `NJ payroll on $60k should be $442.40, got ${nj60.state.payrollTotal}`);
// NJ married uses Table B: 150,000 taxable (152,000 - 2,000) → 280 + 525 + 490 + 350 + 3,867.5 = 5,512.5
const njMarried = engine.computePaycheck({ grossWages: 152000, filingStatus: 'married', state: states.getSourcedStateTax('NJ') });
check(Math.abs(njMarried.state.tax - 5512.5) < 0.01, `NJ married on $152k should be $5,512.50, got ${njMarried.state.tax}`);

// Ohio, ORC 5747.02(A)(3)(c) for 2026: $0 to $26,050, then "$332.00 plus 2.75% of the amount in excess of $26,050".
// Without the exemption, $60k → 332 + 2.75% × 33,950 = 1,265.63. (The old model omitted the $332 base.)
const OH = states.getSourcedStateTax('OH');
check(Math.abs(engine.taxFromBrackets(60000, OH.wageTax.single) - 1265.625) < 0.01, `OH schedule on $60k taxable should be $1,265.63, got ${engine.taxFromBrackets(60000, OH.wageTax.single)}`);
check(engine.taxFromBrackets(26050, OH.wageTax.single) === 0, 'OH schedule at exactly $26,050 must be $0');
check(Math.abs(engine.taxFromBrackets(26050.01, OH.wageTax.single) - 332) < 0.01, 'OH schedule must jump to $332 just above $26,050');
// With the personal exemption (2025 booklet, $2,150 tier for $40,001–$80,000 MAGI): taxable 57,850 → 332 + 2.75% × 31,800 = 1,206.50
const oh60 = engine.computePaycheck({ grossWages: 60000, state: OH });
check(oh60.state.deduction === 2150, `OH single $60k exemption should be $2,150, got ${oh60.state.deduction}`);
check(Math.abs(oh60.state.tax - 1206.5) < 0.01, `OH tax on $60k single should be $1,206.50, got ${oh60.state.tax}`);
// $100k single: $1,900 tier → taxable 98,100 → 332 + 2.75% × 72,050 = 2,313.375
const oh100 = engine.computePaycheck({ grossWages: 100000, state: OH });
check(Math.abs(oh100.state.tax - 2313.375) < 0.01, `OH tax on $100k single should be $2,313.38, got ${oh100.state.tax}`);
// Joint $60k: two exemptions in the $2,150 tier → taxable 55,700 → 332 + 2.75% × 29,650 = 1,147.375
const ohMarried = engine.computePaycheck({ grossWages: 60000, filingStatus: 'married', state: OH });
check(Math.abs(ohMarried.state.tax - 1147.375) < 0.01, `OH joint tax on $60k should be $1,147.38, got ${ohMarried.state.tax}`);
// Tier boundaries: $40,000 is still the $2,400 tier; $40,000.01 drops to $2,150; $500,000 MAGI gets no exemption (2026 limit)
check(engine.computePaycheck({ grossWages: 40000, state: OH }).state.deduction === 2400, 'OH $40,000 should keep the $2,400 exemption');
check(engine.computePaycheck({ grossWages: 40000.01, state: OH }).state.deduction === 2150, 'OH $40,000.01 should drop to the $2,150 exemption');
check(engine.computePaycheck({ grossWages: 500000, state: OH }).state.deduction === 0, 'OH $500,000 should get no exemption');
// $25,000 single: below the threshold even before the exemption → $0
check(engine.computePaycheck({ grossWages: 25000, state: OH }).state.tax === 0, 'OH $25k must owe no state tax');

// NC: 3.99% of (60,000 - 12,750) = 1,885.28
const nc60 = engine.computePaycheck({ grossWages: 60000, state: states.getSourcedStateTax('NC') });
check(Math.abs(nc60.state.tax - 0.0399 * (60000 - 12750)) < 0.01, `NC tax on $60k should be 3.99% of $47,250, got ${nc60.state.tax}`);

// Social Security cap: $200k single → 184,500*6.2% + 200,000*1.45% = 11,439 + 2,900 = 14,339 (no Additional Medicare at exactly 200k)
const tx200 = engine.computePaycheck({ grossWages: 200000, state: states.getSourcedStateTax('TX') });
check(Math.abs(tx200.fica.total - 14339) < 0.01, `FICA on $200k should be $14,339, got ${tx200.fica.total}`);

// --- Wave 2 known-answer checks (2026-10-23) ---

// Georgia: flat 4.99% after the $15,000 single standard deduction → 4.99% × 45,000 = 2,245.50
const ga60 = engine.computePaycheck({ grossWages: 60000, state: states.getSourcedStateTax('GA') });
check(Math.abs(ga60.state.tax - 2245.5) < 0.01, `GA tax on $60k should be $2,245.50, got ${ga60.state.tax}`);
// Georgia joint: $30,000 deduction → 4.99% × 30,000 = 1,497
const gaMarried = engine.computePaycheck({ grossWages: 60000, filingStatus: 'married', state: states.getSourcedStateTax('GA') });
check(Math.abs(gaMarried.state.tax - 1497) < 0.01, `GA joint tax on $60k should be $1,497, got ${gaMarried.state.tax}`);

// California single $100k: taxable 100,000 − 5,706 = 94,294.
// FTB Schedule X: $3,201.97 at $72,724 + 9.3% × (94,294 − 72,724) = 3,201.97 + 2,006.01 = 5,207.98
const ca100 = engine.computePaycheck({ grossWages: 100000, state: states.getSourcedStateTax('CA') });
check(Math.abs(ca100.state.tax - 5207.98) < 0.01, `CA tax on $100k single should be $5,207.98, got ${ca100.state.tax}`);
// SDI 1.3% uncapped → $1,300
check(Math.abs(ca100.state.payrollTotal - 1300) < 0.01, `CA SDI on $100k should be $1,300, got ${ca100.state.payrollTotal}`);
// Mental health services tax: $1.2M single → Schedule X $72,219.84 at $742,953 + 12.3% × 257,047 + 13.3% × 194,294 (taxable 1,194,294)
const ca12m = engine.computePaycheck({ grossWages: 1200000, state: states.getSourcedStateTax('CA') });
const ca12mExpected = 72219.84 + 0.123 * (1000000 - 742953) + 0.133 * (1194294 - 1000000);
check(Math.abs(ca12m.state.tax - ca12mExpected) < 0.05, // FTB's printed base amounts are rounded to the cent
 `CA tax on $1.2M should be ${ca12mExpected.toFixed(2)}, got ${ca12m.state.tax}`);
// SDI must be uncapped: 1.3% of 1.2M = 15,600
check(Math.abs(ca12m.state.payrollTotal - 15600) < 0.01, `CA SDI on $1.2M should be $15,600, got ${ca12m.state.payrollTotal}`);

// Washington: no income tax; PFML employee share 71.43% × 1.13% × 60,000 = 484.30; WA Cares 0.58% × 60,000 = 348
const wa60 = engine.computePaycheck({ grossWages: 60000, state: states.getSourcedStateTax('WA') });
check(wa60.state.tax === 0, 'Washington state income tax must be zero');
check(Math.abs(wa60.state.payrollTotal - (0.0113 * 0.7143 * 60000 + 348)) < 0.01, `WA payroll on $60k should be $832.30, got ${wa60.state.payrollTotal}`);
// PFML caps at the SS wage base, WA Cares does not: $300k → 0.0113×0.7143×184,500 + 0.0058×300,000
const wa300 = engine.computePaycheck({ grossWages: 300000, state: states.getSourcedStateTax('WA') });
check(Math.abs(wa300.state.payrollTotal - (0.0113 * 0.7143 * 184500 + 0.0058 * 300000)) < 0.01, `WA payroll on $300k should cap PFML only, got ${wa300.state.payrollTotal}`);

// New York single $60k: taxable 52,000. §601(c)(1)(B)(vii): 3.9% × 8,500 + 4.4% × 3,200 + 5.15% × 2,200 + 5.4% × 38,100
// = 331.50 + 140.80 + 113.30 + 2,057.40 = 2,643.00 (the statute prints the $585.60 base as $586)
const ny60 = engine.computePaycheck({ grossWages: 60000, state: states.getSourcedStateTax('NY') });
check(Math.abs(ny60.state.tax - 2643) < 0.01, `NY tax on $60k single should be $2,643.00, got ${ny60.state.tax}`);
// NY PFL 0.432% × 60,000 = 259.20; DBL capped at $31.20 → 290.40
check(Math.abs(ny60.state.payrollTotal - 290.4) < 0.01, `NY payroll on $60k should be $290.40, got ${ny60.state.payrollTotal}`);
// PFL cap: $411.91 at ≥ $95,348.76 of wages
const ny150 = engine.computePaycheck({ grossWages: 150000, state: states.getSourcedStateTax('NY') });
check(Math.abs(ny150.state.payrollTotal - (411.91 + 31.2)) < 0.02, `NY payroll on $150k should be $443.11, got ${ny150.state.payrollTotal}`);

// Maryland single $60k: taxable 56,650 → 20 + 30 + 40 + 4.75% × 53,650 = 2,638.38
const md60 = engine.computePaycheck({ grossWages: 60000, state: states.getSourcedStateTax('MD') });
check(Math.abs(md60.state.tax - 2638.375) < 0.01, `MD tax on $60k should be $2,638.38, got ${md60.state.tax}`);

// Virginia single $60k: taxable 51,250 → 60 + 60 + 600 + 5.75% × 34,250 = 2,689.375
const va60 = engine.computePaycheck({ grossWages: 60000, state: states.getSourcedStateTax('VA') });
check(Math.abs(va60.state.tax - 2689.375) < 0.01, `VA tax on $60k should be $2,689.38, got ${va60.state.tax}`);

// Massachusetts: 5% of (60,000 − 4,400) = 2,780; PFML 0.46% × 60,000 = 276
const ma60 = engine.computePaycheck({ grossWages: 60000, state: states.getSourcedStateTax('MA') });
check(Math.abs(ma60.state.tax - 2780) < 0.01, `MA tax on $60k should be $2,780, got ${ma60.state.tax}`);
check(Math.abs(ma60.state.payrollTotal - 276) < 0.01, `MA PFML on $60k should be $276, got ${ma60.state.payrollTotal}`);
// Surtax: $1.5M single → taxable 1,495,600 → 5% × 1,107,750 + 9% × 387,850
const ma15m = engine.computePaycheck({ grossWages: 1500000, state: states.getSourcedStateTax('MA') });
check(Math.abs(ma15m.state.tax - (0.05 * 1107750 + 0.09 * (1495600 - 1107750))) < 0.01, `MA surtax on $1.5M mis-computed: ${ma15m.state.tax}`);

// Colorado: 4.4% of (60,000 − 16,100 federal standard deduction) = 1,931.60; FAMLI 0.44% × 60,000 = 264
const co60 = engine.computePaycheck({ grossWages: 60000, state: states.getSourcedStateTax('CO') });
check(Math.abs(co60.state.tax - 1931.6) < 0.01, `CO tax on $60k should be $1,931.60, got ${co60.state.tax}`);
check(Math.abs(co60.state.payrollTotal - 264) < 0.01, `CO FAMLI on $60k should be $264, got ${co60.state.payrollTotal}`);

// Michigan: 4.25% of (60,000 − 5,900) = 2,299.25
const mi60 = engine.computePaycheck({ grossWages: 60000, state: states.getSourcedStateTax('MI') });
check(Math.abs(mi60.state.tax - 2299.25) < 0.01, `MI tax on $60k should be $2,299.25, got ${mi60.state.tax}`);

// Arizona: 2.5% of (60,000 − 15,750) = 1,106.25
const az60 = engine.computePaycheck({ grossWages: 60000, state: states.getSourcedStateTax('AZ') });
check(Math.abs(az60.state.tax - 1106.25) < 0.01, `AZ tax on $60k should be $1,106.25, got ${az60.state.tax}`);

// Every sourced spec must carry provenance on every figure-bearing object.
for (const spec of states.SOURCED_STATES) {
  const objs = [spec.wageTax, spec.deduction, ...spec.payrollDeductions, ...spec.lines, ...spec.notes];
  for (const o of objs) {
    check(typeof o.source === 'string' && o.source.length > 10, `${spec.code}: missing source on ${o.label ?? o.title ?? o.kind}`);
    check(/^https?:\/\//.test(o.sourceUrl ?? ''), `${spec.code}: missing sourceUrl on ${o.label ?? o.title ?? o.kind}`);
    check(/^\d{4}-\d{2}-\d{2}$/.test(o.retrievedAt ?? ''), `${spec.code}: missing retrievedAt on ${o.label ?? o.title ?? o.kind}`);
  }
  if (spec.wageTax.kind === 'brackets') {
    for (const fs of ['single', 'married', 'hoh']) {
      const br = spec.wageTax[fs];
      check(br[br.length - 1].upTo === null, `${spec.code} ${fs}: last bracket must be open-ended`);
      for (let i = 1; i < br.length; i++) {
        check(br[i - 1].upTo !== null && (br[i].upTo === null || br[i].upTo > br[i - 1].upTo), `${spec.code} ${fs}: bracket ceilings must ascend`);
        check(br[i].rate >= br[i - 1].rate, `${spec.code} ${fs}: rates must be non-decreasing`);
      }
      for (const b of br) check(b.base === undefined || (Number.isFinite(b.base) && b.base >= 0), `${spec.code} ${fs}: bracket base must be a non-negative number`);
    }
  }
  if (spec.deduction.tiers) {
    const t = spec.deduction.tiers;
    check(t.length >= 2 && t[t.length - 1].upTo === null, `${spec.code}: deduction tiers must end open-ended`);
    for (let i = 1; i < t.length; i++) check(t[i - 1].upTo !== null && (t[i].upTo === null || t[i].upTo > t[i - 1].upTo), `${spec.code}: deduction tier ceilings must ascend`);
    for (const fs of ['single', 'married', 'hoh']) check(spec.deduction[fs] === t[0][fs], `${spec.code}: deduction.${fs} must equal the first tier`);
  }
  check(spec.neighbors.length >= 3, `${spec.code}: fewer than 3 neighbor links`);
}

if (failed) {
  console.error('\nState tax check FAILED');
  process.exit(1);
}
console.log('\nAll state tax checks passed.');

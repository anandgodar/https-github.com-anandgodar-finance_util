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

// --- Wave 3 known-answer checks (2026-10-24) ---
const near = (a, b, tol = 0.01) => Math.abs(a - b) < tol;
const st = (code) => states.getSourcedStateTax(code);
const pay = (code, grossWages, filingStatus = 'single') => engine.computePaycheck({ grossWages, filingStatus, state: st(code) });

// No-tax state with an employee payroll line: Alaska UI 0.5% of the first $54,200.
const ak60 = pay('AK', 60000);
check(ak60.state.tax === 0, 'Alaska state income tax must be zero');
check(near(ak60.state.payrollTotal, 271), `AK UI on $60k should cap at $271, got ${ak60.state.payrollTotal}`);
check(near(pay('AK', 40000).state.payrollTotal, 200), 'AK UI on $40k should be $200');
for (const code of ['NV', 'NH', 'SD', 'TN', 'WY']) {
  const r = pay(code, 100000);
  check(r.state.tax === 0 && r.state.payrollTotal === 0, `${code} must have no state tax or payroll`);
}

// Printed statutory base amounts must equal the tax the brackets accumulate (no hidden Ohio-style base).
const baseAt = (code, fs, income) => engine.taxFromBrackets(income, st(code).wageTax[fs]);
check(near(baseAt('KS', 'single', 23000), 1196), 'KS base at $23,000 single should be $1,196 (K.S.A. 79-32,110)');
check(near(baseAt('KS', 'married', 46000), 2392), 'KS base at $46,000 joint should be $2,392');
check(near(baseAt('NM', 'single', 33500), 1165.5), 'NM base at $33,500 single should be $1,165.50 (§7-2-7)');
check(near(baseAt('NM', 'married', 315000), 14624), 'NM base at $315,000 joint should be $14,624');
check(near(baseAt('WV', 'single', 60000), 1950.5), 'WV base at $60,000 should be $1,950.50 (§11-21-4j)');
check(near(baseAt('DC', 'single', 1000000), 91525), 'DC base at $1M should be $91,525 (OTR)');
check(near(baseAt('NE', 'married', 49530), 1651.88, 0.01), 'NE base at $49,530 joint should be $1,651.88 (1040N-ES)');
check(near(baseAt('ME', 'single', 64850), 4117, 1), 'ME base at $64,850 single should be about $4,117 (rate schedule rounds)');
check(near(baseAt('DE', 'single', 60000), 2943.5), 'DE base at $60,000 should be $2,943.50');
check(near(baseAt('SC', 'single', 18230), 437.7), 'SC tax at $18,230 should be $437.70 (WH-1603F)');
check(near(baseAt('VT', 'married', 199450), 10482, 1), 'VT base at $199,450 joint should be about $10,482');

// Minnesota: 2026 brackets after $15,300; Paid Leave employee share 0.44% capped at $184,500.
const mn60 = pay('MN', 60000);
check(near(mn60.state.tax, 0.0535 * 33310 + 0.068 * (44700 - 33310)), `MN tax on $60k mis-computed: ${mn60.state.tax}`);
check(near(mn60.state.payrollTotal, 264), `MN Paid Leave on $60k should be $264, got ${mn60.state.payrollTotal}`);
check(near(pay('MN', 300000).state.payrollTotal, 0.0044 * 184500), 'MN Paid Leave must cap at the SS wage base');

// Wisconsin sliding-scale deduction reproduces the 2025 Standard Deduction Table at band midpoints.
const WI = st('WI');
check(near(engine.stateDeductionFor(WI, 60750, 'single') - 700, 8616, 0.5), 'WI single deduction at $60,750 should match the table ($8,616)');
check(near(engine.stateDeductionFor(WI, 60750, 'married') - 1400, 18674, 0.5), 'WI joint deduction at $60,750 should match the table ($18,674)');
check(near(engine.stateDeductionFor(WI, 60750, 'hoh') - 700, 8616, 0.5), 'WI HoH deduction at $60,750 should fall back to the single amount ($8,616)');
check(near(engine.stateDeductionFor(WI, 20750, 'hoh') - 700, 17250, 0.5), 'WI HoH deduction at $20,750 should match the table ($17,250)');
check(engine.stateDeductionFor(WI, 140000, 'single') === 700, 'WI single standard deduction should be gone at $140k');
check(near(pay('WI', 60000).state.tax, 513.8 + 0.044 * (50480 - 14680) + 0.053 * (60000 - 9406 - 50480)), 'WI tax on $60k mis-computed');

// Alabama: federal income tax is deducted; stepped standard deduction.
const AL = st('AL');
check(engine.stateDeductionFor(AL, 25999, 'single') === 4500, 'AL deduction at $25,999 single should be $3,000 + $1,500');
check(engine.stateDeductionFor(AL, 26000, 'single') === 4475, 'AL deduction just above $25,999 should drop $25');
check(engine.stateDeductionFor(AL, 35500, 'single') === 4000, 'AL deduction at $35,500 single should be $2,500 + $1,500');
check(engine.stateDeductionFor(AL, 35500, 'married') === 8000, 'AL joint deduction at $35,500 should be $5,000 + $3,000');
// $60k single: taxable 60,000 − 4,000 − 5,020 federal = 50,980 → 10 + 100 + 5% × 47,980 = 2,509
check(near(pay('AL', 60000).state.tax, 2509), `AL tax on $60k should be $2,509, got ${pay('AL', 60000).state.tax}`);

// Connecticut: (Table B + C + D) × (1 − E) after the Table A exemption.
// $60k single: exemption 0; B = 2,550; C = 25; D = 0; E = 0.10 → 2,317.50
check(near(pay('CT', 60000).state.tax, 2317.5), `CT tax on $60k should be $2,317.50, got ${pay('CT', 60000).state.tax}`);
// $40k single: exemption 15,000 − 10,000 = 5,000 → taxable 35,000 → B = 200 + 4.5% × 25,000 = 1,325; E = 0.10 → 1,192.50
check(near(pay('CT', 40000).state.tax, 1192.5), `CT tax on $40k should be $1,192.50, got ${pay('CT', 40000).state.tax}`);
// $150k single: B = 4,750 + 6% × 50,000 = 7,750; C = 250; D (145,000–150,000] = 225; E = 0 → 8,225
check(near(pay('CT', 150000).state.tax, 8225), `CT tax on $150k should be $8,225, got ${pay('CT', 150000).state.tax}`);
check(near(pay('CT', 60000).state.payrollTotal, 300), 'CT Paid Leave on $60k should be $300');

// Oregon: federal subtraction capped at $8,750 and phased out; $263 credit lost above $100k single; PFML 0.6% + transit 0.1%.
const or60 = pay('OR', 60000);
check(near(or60.state.tax, 216.125 + 462.375 + 0.0875 * (60000 - 2910 - 5020 - 11400) - 263), `OR tax on $60k mis-computed: ${or60.state.tax}`);
check(near(or60.state.payrollTotal, 420), `OR payroll on $60k should be $420, got ${or60.state.payrollTotal}`);
const or150 = pay('OR', 150000); // federal subtraction 0 at $145k+, no credit
check(near(or150.state.tax, 216.125 + 462.375 + 0.0875 * (125000 - 11400) + 0.099 * (150000 - 2910 - 125000)), `OR tax on $150k mis-computed: ${or150.state.tax}`);
const or127 = pay('OR', 127000); // cap 7,000 < federal tax
check(near(or127.state.deduction, 2910 + 7000), `OR deduction at $127k should include a $7,000 federal cap, got ${or127.state.deduction}`);

// Arkansas: high-income adjustment adds back up to $330.66 above $97,800 of net taxable income.
const AR = st('AR');
const arTax = (taxable) => engine.computeSourcedStateTax(AR, taxable + 2470, taxable + 2470, 'single').tax;
check(near(arTax(57530), 0.039 * 57530 - 419.96 - 29, 0.02), 'AR tax at $57,530 taxable should match the formula (3.9% − $419.96 − $29)');
check(near(arTax(120000), 0.039 * 120000 - 89.3 - 29, 0.02), 'AR tax above $97,800 should be 3.9% − $89.30 − $29');
check(near(arTax(95000), 0.039 * 95000 - 379.3 - 29, 0.02), 'AR tax at $95,000 should use the $379.30 subtraction');

// Utah: 4.45% less the phased taxpayer credit.
check(near(pay('UT', 60000).state.tax, 0.0445 * 60000 - (966 - 0.013 * (60000 - 18213))), 'UT tax on $60k mis-computed');
check(near(pay('UT', 100000).state.tax, 4450), 'UT credit must be fully phased out at $100k');

// Vermont: 3% minimum above $150,000 AGI does not bind at $160k but the schedule result is used.
const vt160 = pay('VT', 160000);
check(vt160.state.tax >= 0.03 * 160000, 'VT tax above $150k must be at least 3% of AGI');

// Rhode Island: deduction + exemption phase-out tiers; TDI 1.1% to $100k.
check(engine.stateDeductionFor(st('RI'), 254250, 'single') === 16000, 'RI full deduction at $254,250');
check(engine.stateDeductionFor(st('RI'), 254251, 'single') === 12800, 'RI 80% deduction just above $254,250');
check(engine.stateDeductionFor(st('RI'), 290000, 'married') === 0, 'RI deduction gone above $283,250');
check(near(pay('RI', 150000).state.payrollTotal, 1100), 'RI TDI must cap at $100,000 of wages');

// Hawaii TDI: 0.5% capped at the $1,500.21 weekly base → about $390.05 a year.
check(near(pay('HI', 120000).state.payrollTotal, 1500.21 * 52 * 0.005), 'HI TDI must cap at the weekly wage base');

// Maine 2026 surcharge: 2% above $1M single.
const me2m = pay('ME', 2000000);
check(near(me2m.state.tax, engine.taxFromBrackets(2000000 - 21000, st('ME').wageTax.single)), 'ME tax at $2M mis-computed');
check(near(engine.taxFromBrackets(1100000, st('ME').wageTax.single) - engine.taxFromBrackets(1000000, st('ME').wageTax.single), 9150), 'ME surcharge: $100k above $1M should add 9.15%');

// Single-filer $60k state figures quoted in the specs' notes.
const expect60 = { IN: 1740.5, MO: 1882.67, SC: 1977.9, KY: 1982.4, LA: 1413.75, OK: 2154.5, IA: 1668.2, MS: 1668, KS: 2548.31, NM: 1654.3, NE: 1850.46, WV: 1866.1, ID: 2071.72, ME: 2372.2, MT: 2063.3, RI: 1650, DE: 2653.13, VT: 1576.18, DC: 2453.5, HI: 2756.26, AR: 1794.71 };
for (const [code, want] of Object.entries(expect60)) {
  const got = pay(code, 60000).state.tax;
  check(near(got, want, 0.02), `${code} tax on $60k single should be $${want}, got ${got}`);
}
check(pay('ND', 60000).state.tax === 0, 'ND tax on $60k single should be $0 (zero bracket)');
check(near(pay('ND', 80000).state.tax, 0.0195 * (80000 - 16100 - 48475)), 'ND tax on $80k mis-computed');

// Every sourced spec must carry provenance on every figure-bearing object.
for (const spec of states.SOURCED_STATES) {
  const adj = spec.adjustments ?? {};
  const adjObjs = [adj.federalTaxDeduction, adj.credit, ...(adj.addOns ?? []), adj.taxReductionRate, adj.minimumTax].filter(Boolean);
  const objs = [spec.wageTax, spec.deduction, ...spec.payrollDeductions, ...spec.lines, ...spec.notes, ...adjObjs];
  if (spec.deduction.phaseout) {
    for (const fs of ['single', 'married', 'hoh']) {
      check(engine.stateDeductionFor(spec, 0, fs) === spec.deduction[fs], `${spec.code}: deduction.${fs} must equal the full (low-income) phased amount`);
    }
  }
  for (const t of [...(adj.addOns ?? []).map((a) => a.tiers), adj.taxReductionRate?.tiers, adj.credit?.tiers, adj.federalTaxDeduction?.capTiers].filter(Boolean)) {
    for (const fs of ['single', 'married', 'hoh']) {
      const list = t[fs];
      check(list.length >= 1 && list[list.length - 1].upTo === null, `${spec.code} ${fs}: step tiers must end open-ended`);
      for (let i = 1; i < list.length; i++) check(list[i - 1].upTo !== null && (list[i].upTo === null || list[i].upTo > list[i - 1].upTo), `${spec.code} ${fs}: step tier ceilings must ascend`);
    }
  }
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

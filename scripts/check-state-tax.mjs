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

// Ohio: first $26,050 at 0%, then 2.75%. $60k → 2.75% of 33,950 = 933.63
const oh60 = engine.computePaycheck({ grossWages: 60000, state: states.getSourcedStateTax('OH') });
check(Math.abs(oh60.state.tax - 0.0275 * (60000 - 26050)) < 0.01, `OH tax on $60k should be 2.75% of $33,950, got ${oh60.state.tax}`);

// NC: 3.99% of (60,000 - 12,750) = 1,885.28
const nc60 = engine.computePaycheck({ grossWages: 60000, state: states.getSourcedStateTax('NC') });
check(Math.abs(nc60.state.tax - 0.0399 * (60000 - 12750)) < 0.01, `NC tax on $60k should be 3.99% of $47,250, got ${nc60.state.tax}`);

// Social Security cap: $200k single → 184,500*6.2% + 200,000*1.45% = 11,439 + 2,900 = 14,339 (no Additional Medicare at exactly 200k)
const tx200 = engine.computePaycheck({ grossWages: 200000, state: states.getSourcedStateTax('TX') });
check(Math.abs(tx200.fica.total - 14339) < 0.01, `FICA on $200k should be $14,339, got ${tx200.fica.total}`);

if (failed) {
  console.error('\nState tax check FAILED');
  process.exit(1);
}
console.log('\nAll state tax checks passed.');

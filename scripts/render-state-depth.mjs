#!/usr/bin/env node
/**
 * Renders StatePaycheckDepth for every sourced state with react-dom/server and
 * checks the HTML for leaks (undefined/NaN/null/`${`), duplicate <h1>, and the
 * FAQ count. Lives in the repo tree so it resolves the project's React.
 *
 *   node scripts/render-state-depth.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, mkdtempSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import ts from 'typescript';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = mkdtempSync(join(tmpdir(), 'state-depth-'));
const require = createRequire(join(root, 'package.json'));
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

function transpile(relPath) {
  const src = readFileSync(join(root, relPath), 'utf8');
  const { outputText } = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
    fileName: relPath,
  });
  let js = outputText.replace(/(from\s+['"])(\.{1,2}\/[^'"]+?)(['"])/g, (m, a, p, b) =>
    /\.(js|mjs|json)$/.test(p) ? m : `${a}${p}.js${b}`
  );
  // Bare-module imports must resolve against the project's node_modules.
  js = js.replace(/(from\s+['"])(react(?:\/jsx-runtime)?|react-dom\/server)(['"])/g, (m, a, p, b) => `${a}${pathToFileURL(require.resolve(p)).href}${b}`);
  const dest = join(out, relPath.replace(/\.tsx?$/, '.js'));
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, js);
}

transpile('lib/paycheck-engine.ts');
for (const f of readdirSync(join(root, 'lib/state-tax-2026'))) if (f.endsWith('.ts')) transpile(`lib/state-tax-2026/${f}`);
transpile('app/salary-tax-estimator/[state]/StatePaycheckDepth.tsx');

const states = await import(pathToFileURL(join(out, 'lib/state-tax-2026/index.js')).href);
const Depth = (await import(pathToFileURL(join(out, 'app/salary-tax-estimator/[state]/StatePaycheckDepth.js')).href)).default;

let failed = false;
for (const spec of states.SOURCED_STATES) {
  const html = renderToStaticMarkup(React.createElement(Depth, { spec }));
  const text = html.replace(/<script[^>]*>[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  const faqs = (html.match(/<details/g) || []).length;
  const h1 = (html.match(/<h1/g) || []).length;
  const problems = [];
  for (const re of [/\bundefined\b/, /\bNaN\b/, /\bnull\b/, /\$\{/, /\[object Object\]/]) if (re.test(text)) problems.push(re.source);
  if (h1 !== 0) problems.push(`h1 count ${h1} (host page owns the h1)`);
  if (faqs !== 5) problems.push(`faq count ${faqs}`);
  if (words < 600) problems.push(`only ${words} words`);
  const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  try { JSON.parse(ld[1]); } catch { problems.push('ld+json unparseable'); }
  console.log(`${spec.code}  words=${words} faqs=${faqs} ${problems.length ? 'FAIL ' + problems.join('; ') : 'ok'}`);
  if (problems.length) failed = true;
  if (process.env.DUMP) writeFileSync(join(out, `${spec.slug}.html`), html);
}
if (process.env.DUMP) console.log(`HTML written to ${out}`);
process.exit(failed ? 1 : 0);

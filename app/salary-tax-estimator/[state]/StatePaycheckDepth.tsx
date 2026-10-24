import React from 'react';
import { computePaycheck, TABLE_SALARIES } from '../../../lib/paycheck-engine';
import { FEDERAL_2026, FICA_2026 } from '../../../lib/state-tax-2026/federal';
import type { StateTaxSpec } from '../../../lib/state-tax-2026/types';

/**
 * Server-rendered depth content for states with sourced tax data
 * (lib/state-tax-2026). Everything here is in the HTML Google crawls; the
 * interactive calculator island sits above it.
 */

const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;
const pct = (r: number, digits = 2) => `${(r * 100).toFixed(digits).replace(/\.?0+$/, '')}%`;
/** Indefinite article for a state name ("an Ohio paycheck", "a Texas paycheck"). */
// "Utah" starts with a "you" sound, so it takes "a".
const an = (name: string) => (/^[AEIOU]/i.test(name) && !/^U(tah)/i.test(name) ? 'an' : 'a');

export function buildTakeHomeRows(spec: StateTaxSpec) {
  return TABLE_SALARIES.map((salary) => {
    const r = computePaycheck({ grossWages: salary, filingStatus: 'single', state: spec });
    return {
      salary,
      federal: r.federal.tax,
      fica: r.fica.total,
      state: r.state.tax,
      payroll: r.state.payrollTotal,
      net: r.net,
      biweekly: r.perPaycheck.biweekly,
      effectiveRate: r.effectiveRate,
    };
  });
}

function stateRateText(spec: StateTaxSpec): string {
  const wt = spec.wageTax;
  if (wt.kind === 'none') return 'no state income tax';
  if (wt.kind === 'flat') return `a flat ${pct(wt.rate)} state income tax`;
  const rates = [...new Set(wt.single.map((b) => b.rate).filter((r) => r > 0))];
  const lo = Math.min(...rates);
  const hi = Math.max(...rates);
  if (lo === hi) return `a ${pct(hi)} state income tax`;
  // Two positive rates (Massachusetts surtax, Kansas, Montana) read better as rate-plus-upper-rate than as a range.
  // The threshold is the ceiling of the bracket just below the first bracket at the upper rate.
  const hiIdx = wt.single.findIndex((b) => b.rate === hi);
  const threshold = hiIdx > 0 ? wt.single[hiIdx - 1].upTo : null;
  if (rates.length === 2 && threshold !== null) return `a ${pct(lo)} state income tax (${pct(hi)} on taxable income above ${usd(threshold)})`;
  return `state income tax from ${pct(lo)} to ${pct(hi)}`;
}

export function buildStateFAQs(spec: StateTaxSpec) {
  const rows = buildTakeHomeRows(spec);
  const r60 = rows.find((r) => r.salary === 60000)!;
  const r100 = rows.find((r) => r.salary === 100000)!;
  const name = spec.name;
  const wt = spec.wageTax;
  const hasPayroll = spec.payrollDeductions.length > 0;

  const faqs: Array<{ question: string; answer: string }> = [];

  faqs.push({
    question: `What is the ${name} state income tax rate in ${spec.taxYear}?`,
    answer:
      wt.kind === 'none'
        ? `${name} has no state income tax on wages. ${
            hasPayroll
              ? `${an(name) === 'an' ? 'An' : 'A'} ${name} paycheck still carries federal income tax, Social Security (6.2% up to $${FICA_2026.socialSecurity.wageBase.toLocaleString()}), Medicare (1.45%) and the state payroll contributions below (${spec.payrollDeductions.map((p) => p.label.replace(/ \(.*\)$/, '')).join(' and ')}).`
              : `The only taxes withheld from ${an(name)} ${name} paycheck are federal income tax, Social Security (6.2% up to $${FICA_2026.socialSecurity.wageBase.toLocaleString()}) and Medicare (1.45%).`
          }`
        : wt.kind === 'flat'
          ? `${name} taxes wages at a flat ${pct(wt.rate)} in ${spec.taxYear}. ${
              spec.deduction.kind === 'none'
                ? 'There is no standard deduction or personal exemption, so the rate applies to every dollar of wages.'
                : `The rate applies after a ${usd(spec.deduction.single)} ${spec.deduction.kind === 'standard' ? 'standard deduction' : 'personal exemption'} for a single filer (${usd(spec.deduction.married)} married filing jointly).`
            }${spec.adjustments?.credit ? ` ${spec.summary}` : ''}`
          : `${name} uses ${stateRateText(spec)} in ${spec.taxYear}. ${spec.summary}`,
  });

  faqs.push({
    question: `How much is a $60,000 salary after taxes in ${name}?`,
    answer: `A single filer earning $60,000 in ${name} takes home about ${usd(r60.net)} a year, or ${usd(r60.biweekly)} per biweekly paycheck, in ${spec.taxYear}: ${usd(r60.federal)} federal income tax (after the $${FEDERAL_2026.standardDeduction.single.toLocaleString()} standard deduction), ${usd(r60.fica)} FICA${
      wt.kind === 'none' ? ' and $0 state income tax' : `, ${usd(r60.state)} ${name} state income tax`
    }${hasPayroll ? ` and ${usd(r60.payroll)} in state payroll contributions` : ''}. Pre-tax 401(k) or health deductions would change the figure.`,
  });

  faqs.push({
    question: `How much is $100,000 after taxes in ${name}?`,
    answer: `On $100,000, a single ${name} filer keeps about ${usd(r100.net)} a year (${usd(r100.biweekly)} biweekly) in ${spec.taxYear}. Federal income tax is ${usd(r100.federal)}, FICA ${usd(r100.fica)}, and ${name} state income tax ${usd(r100.state)}${
      hasPayroll ? `, plus ${usd(r100.payroll)} in employee payroll contributions (${spec.payrollDeductions.map((p) => p.label.replace(/ \(.*\)$/, '')).join(', ')})` : ''
    }. The effective rate on all taxes is ${pct(r100.effectiveRate, 1)}.`,
  });

  // Prefer a genuinely local line (city/county/municipal) over other non-computed lines such as an unapplied exemption.
  const localLine =
    spec.lines.find((l) => !l.computed && /local|city|cities|county|municipal|school district|occupational|yonkers/i.test(`${l.label} ${l.rateText}`)) ??
    spec.lines.find((l) => !l.computed);
  if (localLine) {
    faqs.push({
      question: `Does the ${name} paycheck calculator include local or city taxes?`,
      answer: `No. ${localLine.label}: ${localLine.rateText.replace(/ — not included$/, '')}. ${localLine.detail ?? ''} The table and calculator on this page show state tax only; add your local rate to see the full deduction.`,
    });
  } else if (hasPayroll) {
    faqs.push({
      question: `What are the ${name} payroll deductions besides income tax?`,
      answer: spec.payrollDeductions
        .map((p) => `${p.label}: ${pct(p.rate, 4)}${p.wageBase ? ` on the first $${p.wageBase.toLocaleString()}` : ' of all wages'}`)
        .join('; ') + `. These are withheld from employees in ${spec.taxYear} in addition to state income tax and are included in the table above.`,
    });
  } else if (!spec.lines.some((l) => /local/i.test(l.label))) {
    // No sourced statement about local taxes for this state: describe what the calculator applies instead of asserting there are none.
    faqs.push({
      question: `Which ${name} rules does this paycheck calculator apply?`,
      answer: `${spec.lines
        .filter((l) => l.computed)
        .map((l) => `${l.label}: ${l.rateText}`)
        .join('; ')}. Each rule links to the ${name} source it was read from in the list above.`,
    });
  } else {
    faqs.push({
      question: `Are there local income taxes in ${name}?`,
      answer: `No. ${spec.lines.find((l) => /local/i.test(l.label))?.detail ?? `No ${name} city or county levies a wage tax.`} Your paycheck carries ${wt.kind === 'none' ? 'federal income tax and FICA' : `federal income tax, FICA and ${name} state income tax`} only.`,
    });
  }

  const recip = spec.notes.find((n) => /recipro/i.test(n.title));
  if (recip) {
    faqs.push({
      question: `Does ${name} have reciprocal tax agreements with neighboring states?`,
      answer: recip.body,
    });
  } else {
    faqs.push({
      question: `What federal taxes come out of ${an(name)} ${name} paycheck in ${spec.taxYear}?`,
      answer: `Federal income tax at 10% to 37% after the $${FEDERAL_2026.standardDeduction.single.toLocaleString()} standard deduction (single), Social Security at 6.2% on wages up to $${FICA_2026.socialSecurity.wageBase.toLocaleString()}, and Medicare at 1.45% with an extra 0.9% above $200,000. These are the same in every state; the state line is what makes ${an(name)} ${name} paycheck different.`,
    });
  }

  return faqs.slice(0, 5);
}

const SourceLink: React.FC<{ source: string; sourceUrl: string; retrievedAt: string }> = ({ source, sourceUrl, retrievedAt }) => (
  <a
    href={sourceUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-600 hover:underline text-sm"
    title={`Read ${retrievedAt}`}
  >
    {source}
  </a>
);

export default function StatePaycheckDepth({ spec }: { spec: StateTaxSpec }) {
  const rows = buildTakeHomeRows(spec);
  const faqs = buildStateFAQs(spec);
  const hasPayroll = spec.payrollDeductions.length > 0;
  const noTax = spec.wageTax.kind === 'none';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* (a) Answer-first intro */}
      <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
        <h2 className="text-3xl font-black text-slate-900 mb-4">How much tax comes out of {an(spec.name)} {spec.name} paycheck?</h2>
        <p className="text-lg text-slate-700 leading-relaxed">{spec.summary}</p>
        <p className="text-slate-600 mt-4 leading-relaxed">
          Every figure below is computed for tax year {spec.taxYear} from the federal brackets and standard deduction in IRS Rev. Proc. 2025-32, the
          2026 Social Security wage base of ${FICA_2026.socialSecurity.wageBase.toLocaleString()}, and {spec.name}&apos;s published rates. Each rate links to
          the page it was read from.
        </p>
      </section>

      {/* (b) Take-home table */}
      <section className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
        <h2 className="text-3xl font-black text-slate-900 mb-2">{spec.name} take-home pay by salary ({spec.taxYear})</h2>
        <p className="text-slate-600 mb-6">
          Single filer, standard deduction, no 401(k) or health deductions. &quot;Per paycheck&quot; is biweekly (26 pay periods).
          {hasPayroll ? ` The state column includes ${spec.name}'s employee payroll contributions.` : ''}
          {spec.lines.some((l) => !l.computed) ? ' Local taxes are not included.' : ''}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm md:text-base">
            <thead>
              <tr className="border-b-2 border-slate-200 text-slate-500 uppercase text-xs tracking-wider">
                <th className="py-3 pr-4">Salary</th>
                <th className="py-3 pr-4">Federal tax</th>
                <th className="py-3 pr-4">FICA</th>
                <th className="py-3 pr-4">{spec.name} tax{hasPayroll ? ' + payroll' : ''}</th>
                <th className="py-3 pr-4">Net per year</th>
                <th className="py-3 pr-4">Per paycheck</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.salary} className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-bold text-slate-900">{usd(r.salary)}</td>
                  <td className="py-3 pr-4 text-slate-700">{usd(r.federal)}</td>
                  <td className="py-3 pr-4 text-slate-700">{usd(r.fica)}</td>
                  <td className="py-3 pr-4 text-slate-700">{noTax && !hasPayroll ? '$0' : usd(r.state + r.payroll)}</td>
                  <td className="py-3 pr-4 font-bold text-indigo-700">{usd(r.net)}</td>
                  <td className="py-3 pr-4 font-bold text-slate-900">{usd(r.biweekly)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-4">
          Federal: {FEDERAL_2026.taxYear} brackets (10%–37%) after the ${FEDERAL_2026.standardDeduction.single.toLocaleString('en-US')} single standard
          deduction, no credits. FICA: 6.2% Social Security to ${FICA_2026.socialSecurity.wageBase.toLocaleString('en-US')} plus 1.45% Medicare. Figures are annual estimates of liability, not withholding; your employer&apos;s W-4 withholding will differ slightly.
        </p>
      </section>

      {/* (c) What's taken out */}
      <section className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
        <h2 className="text-3xl font-black text-slate-900 mb-6">What&apos;s taken out of {an(spec.name)} {spec.name} paycheck</h2>
        <ul className="divide-y divide-slate-100">
          <li className="py-4">
            <div className="flex flex-wrap justify-between gap-2">
              <span className="font-bold text-slate-900">Federal income tax</span>
              <span className="text-slate-700">10% to 37%, after a ${FEDERAL_2026.standardDeduction.single.toLocaleString()} standard deduction (single)</span>
            </div>
            <div className="mt-1">
              <SourceLink {...FEDERAL_2026.provenance} />
            </div>
          </li>
          <li className="py-4">
            <div className="flex flex-wrap justify-between gap-2">
              <span className="font-bold text-slate-900">Social Security (OASDI)</span>
              <span className="text-slate-700">6.2% on wages up to ${FICA_2026.socialSecurity.wageBase.toLocaleString()} (2026)</span>
            </div>
            <div className="mt-1">
              <SourceLink source={FICA_2026.socialSecurity.source} sourceUrl={FICA_2026.socialSecurity.sourceUrl} retrievedAt={FICA_2026.socialSecurity.retrievedAt} />
            </div>
          </li>
          <li className="py-4">
            <div className="flex flex-wrap justify-between gap-2">
              <span className="font-bold text-slate-900">Medicare</span>
              <span className="text-slate-700">1.45% on all wages, plus 0.9% above $200,000 (single)</span>
            </div>
            <div className="mt-1">
              <SourceLink source={FICA_2026.medicare.source} sourceUrl={FICA_2026.medicare.sourceUrl} retrievedAt={FICA_2026.medicare.retrievedAt} />
            </div>
          </li>
          {spec.lines.map((line) => (
            <li key={line.label} className="py-4">
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-bold text-slate-900">
                  {line.label}
                  {!line.computed && (
                    <span className="ml-2 text-[10px] uppercase tracking-wider bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full align-middle">not in calculator</span>
                  )}
                </span>
                <span className="text-slate-700">{line.rateText}</span>
              </div>
              {line.detail && <p className="text-slate-600 text-sm mt-1">{line.detail}</p>}
              <div className="mt-1">
                <SourceLink source={line.source} sourceUrl={line.sourceUrl} retrievedAt={line.retrievedAt} />
                {line.note && <span className="text-xs text-slate-500 ml-2">({line.note})</span>}
              </div>
            </li>
          ))}
        </ul>
        {spec._meta.priorYearFigures && spec._meta.priorYearFigures.length > 0 && (
          <p className="text-xs text-slate-500 mt-4">
            Figures not yet republished for {spec.taxYear} at the time of review ({spec._meta.retrievedAt}): {spec._meta.priorYearFigures.join('; ')}.
          </p>
        )}
      </section>

      {/* (d) State-specific notes */}
      <section className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
        <h2 className="text-3xl font-black text-slate-900 mb-6">{spec.name} paycheck rules worth knowing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {spec.notes.map((n) => (
            <div key={n.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-black text-slate-900 mb-2">{n.title}</h3>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">{n.body}</p>
              <div className="mt-3">
                <SourceLink source={n.source} sourceUrl={n.sourceUrl} retrievedAt={n.retrievedAt} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* (e) FAQs */}
      <section className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
        <h2 className="text-3xl font-black text-slate-900 mb-8">{spec.name} paycheck FAQ</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <details key={faq.question} className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden" open={idx === 0}>
              <summary className="cursor-pointer p-6 font-bold text-lg text-slate-800 group-open:text-indigo-600 transition-colors list-none flex justify-between items-center">
                {faq.question}
                <span className="text-slate-400 group-open:rotate-180 transition-transform text-xl">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">{faq.answer}</div>
            </details>
          ))}
        </div>
      </section>

      {/* (f) Neighboring states */}
      <section className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
        <h2 className="text-2xl font-black text-slate-900 mb-4">Compare with nearby states</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {spec.neighbors.map((n) => (
            <li key={n.slug}>
              <a href={`/salary-tax-estimator/${n.slug}/`} className="block bg-slate-50 hover:bg-indigo-50 border border-slate-200 rounded-xl p-4 transition-colors">
                <span className="font-bold text-indigo-700">{n.name} paycheck calculator</span>
                {n.why && <span className="block text-sm text-slate-600 mt-1">{n.why}</span>}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-500 mt-6">
          Data reviewed {spec._meta.retrievedAt}. {spec._meta.description}
        </p>
      </section>
    </>
  );
}

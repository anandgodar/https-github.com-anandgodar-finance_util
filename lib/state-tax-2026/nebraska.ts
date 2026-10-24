import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const NE_ES = {
  source: 'Nebraska Department of Revenue, 2026 Form 1040N-ES (Rev. 11-2025) — 2026 Estimated Income Tax Rate Schedule, standard deduction and $176 personal exemption credit',
  sourceUrl: 'https://revenue.nebraska.gov/sites/default/files/doc/tax-forms/2025/f_1040N-ES.pdf',
  retrievedAt: RETRIEVED,
};

const NE_STATUTE = {
  source: 'Nebraska Revised Statutes §77-2715.03 — rates three and four set at 4.55% for 2026 and 3.99% from 2027',
  sourceUrl: 'https://nebraskalegislature.gov/laws/statutes.php?statute=77-2715.03',
  retrievedAt: RETRIEVED,
};

export const NEBRASKA: StateTaxSpec = {
  code: 'NE',
  slug: 'nebraska',
  name: 'Nebraska',
  taxYear: 2026,
  rateLead: '2.46%–4.55% state tax',
  summary:
    'Nebraska taxes 2026 income at 2.46% up to $4,130, 3.51% up to $24,760 and 4.55% above that for a single filer (wider bands for joint and head-of-household filers), after an $8,850 standard deduction, then subtracts a $176 personal exemption credit; the top rate falls to 3.99% in 2027.',
  wageTax: {
    kind: 'brackets',
    single: [
      { upTo: 4130, rate: 0.0246 },
      { upTo: 24760, rate: 0.0351 },
      { upTo: null, rate: 0.0455 },
    ],
    married: [
      { upTo: 8250, rate: 0.0246 },
      { upTo: 49530, rate: 0.0351 },
      { upTo: null, rate: 0.0455 },
    ],
    hoh: [
      { upTo: 7700, rate: 0.0246 },
      { upTo: 39620, rate: 0.0351 },
      { upTo: null, rate: 0.0455 },
    ],
    ...NE_ES,
  },
  deduction: { kind: 'standard', single: 8850, married: 17700, hoh: 12950, ...NE_ES },
  adjustments: {
    credit: { single: 176, married: 352, hoh: 176, ...NE_ES, note: '$176 per personal exemption; dependents not counted.' },
  },
  payrollDeductions: [],
  lines: [
    {
      label: 'Nebraska state income tax',
      rateText: '2.46% / 3.51% / 4.55% (2026)',
      computed: true,
      detail:
        'Single: 2.46% to $4,130, 3.51% to $24,760, 4.55% above. Married filing jointly: $8,250 / $49,530. Head of household: $7,700 / $39,620. Nebraska\'s third and fourth brackets are both 4.55% for 2026, so they are shown as one.',
      ...NE_ES,
    },
    {
      label: 'Standard deduction',
      rateText: '$8,850 single / $17,700 joint / $12,950 head of household (2026)',
      computed: true,
      detail: 'Indexed amounts printed on the 2026 estimated-tax worksheet. Extra amounts for age 65 or blindness are not applied.',
      ...NE_ES,
    },
    {
      label: 'Personal exemption credit',
      rateText: '$176 per exemption (2026)',
      computed: true,
      detail: 'Nebraska gives a credit against tax, not a deduction: $176 for each personal exemption. The calculator counts one for a single or head-of-household filer and two for a joint return.',
      ...NE_ES,
    },
  ],
  notes: [
    {
      title: 'The top rate keeps falling',
      body:
        'Section 77-2715.03 sets Nebraska\'s top rate at 5.20% for 2025, 4.55% for 2026 and 3.99% for taxable years beginning in 2027. A single filer on $60,000 has $51,150 of taxable income and owes $825.71 plus 4.55% of $26,390, less the $176 credit, about $1,850.',
      ...NE_STATUTE,
    },
    {
      title: 'A credit instead of an exemption deduction',
      body:
        'The personal exemption is worth the same $176 to every filer whatever their bracket, because it comes off the tax rather than the income. The Department indexes the credit, the standard deduction and the bracket thresholds each year.',
      ...NE_ES,
    },
    {
      title: 'Heads of household have their own brackets',
      body:
        'Nebraska publishes a separate schedule for heads of household, between the single and joint thresholds: 2.46% to $7,700 and 3.51% to $39,620 for 2026.',
      ...NE_ES,
    },
  ],
  neighbors: [
    { slug: 'iowa', name: 'Iowa', why: 'borders Nebraska; flat 3.8%' },
    { slug: 'kansas', name: 'Kansas', why: 'borders Nebraska; 5.2%–5.58%' },
    { slug: 'colorado', name: 'Colorado', why: 'borders Nebraska; flat 4.4%' },
    { slug: 'south-dakota', name: 'South Dakota', why: 'borders Nebraska; no income tax' },
    { slug: 'missouri', name: 'Missouri', why: 'borders Nebraska; up to 4.7%' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      '2026 rate schedule, standard deduction and $176 exemption credit from Nebraska DOR Form 1040N-ES (Rev. 11-2025); the 4.55% third/fourth rate per Neb. Rev. Stat. §77-2715.03.',
  },
};

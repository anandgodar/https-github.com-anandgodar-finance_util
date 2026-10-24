import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const ND_RATES = {
  source: 'North Dakota Office of State Tax Commissioner, Individual Income Tax — 2025 tax rate schedules (0% / 1.95% / 2.50%)',
  sourceUrl: 'https://www.tax.nd.gov/individual-income-tax',
  retrievedAt: RETRIEVED,
  note: '2025 schedules; the 2026 indexed brackets were not yet published.',
};

const ND_FORM = {
  source: 'North Dakota Office of State Tax Commissioner, Form ND-1 (2025) — line 1b "Federal taxable income from Form 1040 or 1040-SR, line 15"',
  sourceUrl: 'https://www.tax.nd.gov/sites/www/files/documents/forms/individual/2025-iit/28702-form-nd-1-2025.pdf',
  retrievedAt: RETRIEVED,
};

const ND_RECIP = {
  source: 'North Dakota Office of State Tax Commissioner, I Am a Nonresident — reciprocal agreement with Minnesota and Montana (Form NDW-R)',
  sourceUrl: 'https://www.tax.nd.gov/non-resident',
  retrievedAt: RETRIEVED,
};

export const NORTH_DAKOTA: StateTaxSpec = {
  code: 'ND',
  slug: 'north-dakota',
  name: 'North Dakota',
  taxYear: 2026,
  rateLead: '0%–2.5% state tax',
  summary:
    'North Dakota starts from federal taxable income and taxes nothing up to $48,475 for a single filer ($80,975 joint), then 1.95% and 2.5% above $244,825, so a single worker earning up to about $64,575 owes no North Dakota income tax (2025 brackets; 2026 amounts not yet published).',
  wageTax: {
    kind: 'brackets',
    single: [
      { upTo: 48475, rate: 0 },
      { upTo: 244825, rate: 0.0195 },
      { upTo: null, rate: 0.025 },
    ],
    married: [
      { upTo: 80975, rate: 0 },
      { upTo: 298075, rate: 0.0195 },
      { upTo: null, rate: 0.025 },
    ],
    hoh: [
      { upTo: 64950, rate: 0 },
      { upTo: 271450, rate: 0.0195 },
      { upTo: null, rate: 0.025 },
    ],
    ...ND_RATES,
  },
  deduction: { kind: 'standard', single: 16100, married: 32200, hoh: 24150, ...ND_FORM },
  payrollDeductions: [],
  lines: [
    {
      label: 'North Dakota state income tax',
      rateText: '0% / 1.95% / 2.50%',
      computed: true,
      detail:
        'Single: 0% to $48,475, 1.95% to $244,825, 2.5% above. Married filing jointly: $80,975 / $298,075. Head of household: $64,950 / $271,450. These are the 2025 brackets; North Dakota indexes them each year.',
      ...ND_RATES,
    },
    {
      label: 'Starting point: federal taxable income',
      rateText: 'Federal standard deduction applies',
      computed: true,
      detail: 'Form ND-1 begins with federal taxable income, so the 2026 federal standard deduction ($16,100 single, $32,200 joint, $24,150 head of household) is used.',
      ...ND_FORM,
    },
  ],
  notes: [
    {
      title: 'Reciprocity with Minnesota and Montana',
      body:
        'North Dakota has a reciprocal agreement with Minnesota and Montana: wages earned in North Dakota by a resident of either state are taxable only to the resident state, and the employee can file Form NDW-R so that North Dakota tax is not withheld.',
      ...ND_RECIP,
    },
    {
      title: 'A large zero bracket',
      body:
        'With the federal standard deduction applied first, a single filer pays no North Dakota tax until wages exceed about $64,575 ($16,100 + $48,475). On $80,000 the tax is 1.95% of $15,425, about $301.',
      ...ND_RATES,
    },
    {
      title: 'Why 2025 brackets',
      body:
        'The Tax Commissioner had published only the 2025 schedules at review. Indexing raises the thresholds, so the 2026 tax on the same wages will be slightly lower than shown.',
      ...ND_RATES,
    },
  ],
  neighbors: [
    { slug: 'minnesota', name: 'Minnesota', why: 'borders North Dakota; reciprocal state' },
    { slug: 'montana', name: 'Montana', why: 'borders North Dakota; reciprocal state' },
    { slug: 'south-dakota', name: 'South Dakota', why: 'borders North Dakota; no income tax' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    priorYearFigures: ['brackets are the 2025 schedules from the Tax Commissioner'],
    description:
      'North Dakota 2025 rate schedules applied to income after the 2026 federal standard deduction (ND-1 starts from federal taxable income). Reciprocity with Minnesota and Montana per the Tax Commissioner.',
  },
};

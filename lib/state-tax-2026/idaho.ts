import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const ID_SCHED = {
  source: 'Idaho State Tax Commission, Individual Income Tax Rate Schedule — 2025: 0% to $4,811 single / $9,622 married, 5.3% above',
  sourceUrl: 'https://tax.idaho.gov/taxes/income-tax/individual-income/individual-income-tax-rate-schedule/',
  retrievedAt: RETRIEVED,
  note: '2025 thresholds; the 2026 indexed amounts were not yet listed.',
};

const ID_STATUTE = {
  source: 'Idaho Code §63-3024 — 5.3% of taxable income over an indexed threshold; heads of household and surviving spouses treated as joint filers',
  sourceUrl: 'https://legislature.idaho.gov/statutesrules/idstat/title63/t63ch30/sect63-3024/',
  retrievedAt: RETRIEVED,
};

const ID_WH = {
  source: 'Idaho State Tax Commission, EPB00744 Table for Percentage Computation Method of Withholding (07-23-2026), annual payroll period: 5.3% of the amount over $16,100 (single, including head of household) / $32,200 (married)',
  sourceUrl: 'https://tax.idaho.gov/wp-content/uploads/pubs/EPB00744/EPB00744_07-23-2026.pdf',
  retrievedAt: RETRIEVED,
  note: 'The withholding table puts heads of household on the single table; the $24,150 head-of-household deduction used for the annual tax is the 2026 federal standard deduction (IRS Rev. Proc. 2025-32).',
};

export const IDAHO: StateTaxSpec = {
  code: 'ID',
  slug: 'idaho',
  name: 'Idaho',
  taxYear: 2026,
  rateLead: '5.3% above a small 0% band',
  summary:
    'Idaho taxes income at 5.3% above a small zero-rate band ($4,811 single, $9,622 joint or head of household for 2025) after the federal standard deduction of $16,100 single; the 2026 band will be slightly larger once Idaho publishes its indexed amount.',
  wageTax: {
    kind: 'brackets',
    single: [
      { upTo: 4811, rate: 0 },
      { upTo: null, rate: 0.053 },
    ],
    married: [
      { upTo: 9622, rate: 0 },
      { upTo: null, rate: 0.053 },
    ],
    hoh: [
      { upTo: 9622, rate: 0 },
      { upTo: null, rate: 0.053 },
    ],
    ...ID_SCHED,
  },
  deduction: { kind: 'standard', single: 16100, married: 32200, hoh: 24150, ...ID_WH },
  payrollDeductions: [],
  lines: [
    {
      label: 'Idaho state income tax',
      rateText: '0% to $4,811, 5.3% above (single, 2025 threshold)',
      computed: true,
      detail:
        'Idaho Code §63-3024 taxes income at 5.3% above an inflation-indexed threshold. For 2025 the Tax Commission lists 0% up to $4,811 for single filers and $9,622 for married filers; heads of household are treated as joint filers.',
      ...ID_SCHED,
    },
    {
      label: 'Standard deduction (federal amount)',
      rateText: '$16,100 single / $32,200 joint / $24,150 head of household (2026)',
      computed: true,
      detail: 'Idaho\'s 2026 withholding tables apply 5.3% to wages above $16,100 single and $32,200 married, matching the federal standard deduction, which the calculator uses for the annual tax.',
      ...ID_WH,
    },
  ],
  notes: [
    {
      title: 'Effectively a flat 5.3% tax',
      body:
        'Above the small zero-rate band every dollar of Idaho taxable income is taxed at 5.3%. A single filer on $60,000 has $43,900 of taxable income and owes 5.3% of $39,089, about $2,072, using the 2025 threshold.',
      ...ID_SCHED,
    },
    {
      title: 'Withholding skips the zero band',
      body:
        'The 2026 withholding tables start the 5.3% rate as soon as wages pass $16,100 (single), without the extra $4,811 zero-rate band, so withholding runs about $255 ahead of the annual tax for a single filer and the difference comes back as a refund.',
      ...ID_WH,
    },
    {
      title: 'Heads of household file like couples',
      body:
        'Section 63-3024 treats a head-of-household return as a joint return for the rate schedule, so heads of household get the larger $9,622 zero-rate band.',
      ...ID_STATUTE,
    },
  ],
  neighbors: [
    { slug: 'washington', name: 'Washington', why: 'borders Idaho; no income tax' },
    { slug: 'oregon', name: 'Oregon', why: 'borders Idaho; up to 9.9%' },
    { slug: 'utah', name: 'Utah', why: 'borders Idaho; flat 4.45%' },
    { slug: 'montana', name: 'Montana', why: 'borders Idaho; 4.7%–5.65%' },
    { slug: 'nevada', name: 'Nevada', why: 'borders Idaho; no income tax' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    priorYearFigures: ['zero-rate thresholds ($4,811 single / $9,622 joint and head of household) are the 2025 amounts from the Tax Commission rate schedule'],
    description:
      'Idaho 5.3% rate (§63-3024) above the 2025 zero-rate threshold, after the 2026 federal standard deduction (the amounts Idaho\'s 2026 withholding tables use).',
  },
};

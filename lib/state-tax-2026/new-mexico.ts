import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const NM_HB252 = {
  source: 'New Mexico Legislature, HB 252 (2024 regular session) final version — NMSA §7-2-7 rate tables for taxable years beginning on or after 1 January 2025',
  sourceUrl: 'https://www.nmlegis.gov/Sessions/24%20Regular/final/HB0252.pdf',
  retrievedAt: RETRIEVED,
};

const NM_PIT1 = {
  source: 'New Mexico Taxation and Revenue Department, Form PIT-1 (2024; archived copy at NBER TAXSIM) — line 12 "Federal standard or itemized deduction amount"',
  sourceUrl: 'https://taxsim.nber.org/historical_state_tax_forms/NM/2024/2024pit-1.pdf',
  retrievedAt: RETRIEVED,
};

const NM_WH = {
  source: 'Bloomberg Tax, "New Mexico Releases 2026 Withholding Formula" (21 Nov 2025) — rates unchanged at 1.5% to 5.9%; zero bracket $8,050 single / $12,075 head of household / $16,100 married',
  sourceUrl: 'https://news.bloombergtax.com/payroll/new-mexico-releases-2026-withholding-formula',
  retrievedAt: RETRIEVED,
};

const NM_SINGLE = [
  { upTo: 5500, rate: 0.015 },
  { upTo: 16500, rate: 0.032 },
  { upTo: 33500, rate: 0.043 },
  { upTo: 66500, rate: 0.047 },
  { upTo: 210000, rate: 0.049 },
  { upTo: null, rate: 0.059 },
];
const NM_JOINT = [
  { upTo: 8000, rate: 0.015 },
  { upTo: 25000, rate: 0.032 },
  { upTo: 50000, rate: 0.043 },
  { upTo: 100000, rate: 0.047 },
  { upTo: 315000, rate: 0.049 },
  { upTo: null, rate: 0.059 },
];

export const NEW_MEXICO: StateTaxSpec = {
  code: 'NM',
  slug: 'new-mexico',
  name: 'New Mexico',
  taxYear: 2026,
  rateLead: '1.5%–5.9% state tax',
  summary:
    'New Mexico taxes income on six brackets from 1.5% to 5.9% — most of a typical single salary falls in the 4.7% bracket — after the federal standard deduction ($16,100 single in 2026), which New Mexico\'s return carries over from the federal return.',
  wageTax: { kind: 'brackets', single: NM_SINGLE, married: NM_JOINT, hoh: NM_JOINT, ...NM_HB252 },
  deduction: { kind: 'standard', single: 16100, married: 32200, hoh: 24150, ...NM_PIT1 },
  payrollDeductions: [],
  lines: [
    {
      label: 'New Mexico state income tax',
      rateText: '1.5% / 3.2% / 4.3% / 4.7% / 4.9% / 5.9%',
      computed: true,
      detail:
        'Single: 1.5% to $5,500, 3.2% to $16,500, 4.3% to $33,500, 4.7% to $66,500, 4.9% to $210,000, 5.9% above. Married filing jointly, heads of household and surviving spouses: $8,000 / $25,000 / $50,000 / $100,000 / $315,000. These brackets apply from tax year 2025.',
      ...NM_HB252,
    },
    {
      label: 'Standard deduction (federal amount)',
      rateText: '$16,100 single / $32,200 joint / $24,150 head of household (2026)',
      computed: true,
      detail: 'Form PIT-1 subtracts the federal standard or itemized deduction in arriving at New Mexico taxable income, so the 2026 federal amounts are used here.',
      ...NM_PIT1,
    },
  ],
  notes: [
    {
      title: 'Six brackets since 2025',
      body:
        'HB 252 set six brackets for taxable years beginning on or after 1 January 2025. A single filer on $60,000 has $43,900 of taxable income and owes $1,165.50 plus 4.7% of $10,400, or $1,654.30.',
      ...NM_HB252,
    },
    {
      title: '2026 withholding uses the same rates',
      body:
        'The Taxation and Revenue Department\'s 2026 withholding formula keeps the 1.5% to 5.9% rates and raises the zero-tax band to $8,050 for single employees, $12,075 for heads of household and $16,100 for married employees.',
      ...NM_WH,
    },
    {
      title: 'Heads of household get the joint brackets',
      body:
        'Section 7-2-7 groups heads of household with married couples filing jointly and surviving spouses, so a head-of-household filer reaches the 4.7% rate only at $50,000 of taxable income rather than $33,500.',
      ...NM_HB252,
    },
  ],
  neighbors: [
    { slug: 'texas', name: 'Texas', why: 'borders New Mexico; no income tax' },
    { slug: 'arizona', name: 'Arizona', why: 'borders New Mexico; flat 2.5%' },
    { slug: 'colorado', name: 'Colorado', why: 'borders New Mexico; flat 4.4%' },
    { slug: 'oklahoma', name: 'Oklahoma', why: 'borders New Mexico; up to 4.5%' },
    { slug: 'utah', name: 'Utah', why: 'Four Corners; flat 4.45%' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'NMSA §7-2-7 brackets for tax years from 2025 (HB 252, 2024, final version) applied after the 2026 federal standard deduction, which PIT-1 carries over. 2026 withholding formula (rates unchanged) noted from Bloomberg Tax.',
  },
};

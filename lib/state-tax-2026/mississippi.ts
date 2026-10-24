import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const MS_DOR = {
  source: 'Mississippi Department of Revenue, Individual Income Tax General Information — exemptions, standard deductions and tax rates ("Tax Year 2026 Excess of $10,000 of Taxable Income is taxed @ 4%")',
  sourceUrl: 'https://www.dor.ms.gov/general-information',
  retrievedAt: RETRIEVED,
};

const MS_BRACKETS = [
  { upTo: 10000, rate: 0 },
  { upTo: null, rate: 0.04 },
];

export const MISSISSIPPI: StateTaxSpec = {
  code: 'MS',
  slug: 'mississippi',
  name: 'Mississippi',
  taxYear: 2026,
  rateLead: '0% to $10,000, 4% above',
  summary:
    'Mississippi taxes 2026 income at 0% on the first $10,000 of taxable income and 4% on the rest — down from 4.4% in 2025 and scheduled to fall to 3.75% in 2027 — after a $6,000 exemption and $2,300 standard deduction for a single filer ($12,000 and $4,600 for a married couple).',
  wageTax: { kind: 'brackets', single: MS_BRACKETS, married: MS_BRACKETS, hoh: MS_BRACKETS, ...MS_DOR },
  deduction: { kind: 'standard', single: 8300, married: 16600, hoh: 11400, ...MS_DOR },
  payrollDeductions: [],
  lines: [
    {
      label: 'Mississippi state income tax',
      rateText: '0% on the first $10,000, 4% above (2026)',
      computed: true,
      detail:
        'The Department lists the rate on taxable income above $10,000 as 4.4% for 2025, 4% for 2026 and 3.75% for 2027; the first $10,000 is taxed at 0%. On a combined return where both spouses work, each spouse may calculate the tax separately and add the results, which this calculator does not model.',
      ...MS_DOR,
    },
    {
      label: 'Exemption and standard deduction',
      rateText: '$6,000 + $2,300 single; $12,000 + $4,600 married; $8,000 + $3,400 head of family',
      computed: true,
      detail: 'The calculator subtracts both amounts: $8,300 single, $16,600 married filing jointly, $11,400 head of family. The $1,500 exemptions for dependents, age 65 and blindness are not counted.',
      ...MS_DOR,
    },
  ],
  notes: [
    {
      title: 'A rate that keeps falling',
      body:
        'Mississippi is cutting its single income tax rate in steps: 4.4% in 2025, 4% in 2026 and 3.75% in 2027. A single filer on $60,000 has $51,700 of taxable income in 2026 and pays 4% on $41,700, or $1,668.',
      ...MS_DOR,
    },
    {
      title: 'Two-earner couples can split the zero bracket',
      body:
        'If both spouses work and file a combined return, each spouse can calculate tax separately and add the results, which lets each use the $10,000 zero-rate band. The table here assumes one earner and applies the band once.',
      ...MS_DOR,
    },
    {
      title: 'Exemptions do most of the work',
      body:
        'Between the personal exemption, the standard deduction and the $10,000 zero bracket, a single filer pays no Mississippi tax on the first $18,300 of wages, and a married one-earner couple on the first $26,600.',
      ...MS_DOR,
    },
  ],
  neighbors: [
    { slug: 'alabama', name: 'Alabama', why: 'borders Mississippi; 2%–5%' },
    { slug: 'louisiana', name: 'Louisiana', why: 'borders Mississippi; flat 3%' },
    { slug: 'tennessee', name: 'Tennessee', why: 'borders Mississippi; no tax on wages' },
    { slug: 'arkansas', name: 'Arkansas', why: 'borders Mississippi; up to 3.9%' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Mississippi DOR general information: 0% on the first $10,000 and 4% above for tax year 2026; exemptions $6,000 / $12,000 / $8,000 and standard deductions $2,300 / $4,600 / $3,400.',
  },
};

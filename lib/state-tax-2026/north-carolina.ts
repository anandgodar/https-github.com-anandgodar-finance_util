import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-23';

const NCDOR_RATES = {
  source: 'North Carolina Department of Revenue, Tax Rate Schedules (individual income tax)',
  sourceUrl: 'https://www.ncdor.gov/taxes-forms/individual-income-tax/tax-rate-schedules',
  retrievedAt: RETRIEVED,
};

const NCDOR_STD = {
  source: 'North Carolina Department of Revenue, N.C. Standard Deduction or N.C. Itemized Deductions',
  sourceUrl:
    'https://www.ncdor.gov/taxes-forms/individual-income-tax/filing-topics/north-carolina-standard-deduction-or-north-carolina-itemized-deductions',
  retrievedAt: RETRIEVED,
  note: 'NCDOR page shows tax year 2025 amounts; the deduction is set in G.S. 105-153.5 and is not inflation-indexed. Verify when the 2026 page is published.',
};

export const NORTH_CAROLINA: StateTaxSpec = {
  code: 'NC',
  slug: 'north-carolina',
  name: 'North Carolina',
  taxYear: 2026,
  rateLead: 'flat 3.99% state tax',
  summary:
    'North Carolina taxes wages at a flat 3.99% for 2026 (down from 4.25% in 2025) after a $12,750 standard deduction for single filers, with no local income tax.',
  wageTax: { kind: 'flat', rate: 0.0399, ...NCDOR_RATES },
  deduction: { kind: 'standard', single: 12750, married: 25500, hoh: 19125, ...NCDOR_STD },
  payrollDeductions: [],
  lines: [
    {
      label: 'North Carolina state income tax',
      rateText: '3.99% flat (2026)',
      computed: true,
      detail:
        'NCDOR: "For Taxable Years after 2025, the North Carolina individual income tax rate is 3.99% (0.0399)." The 2025 rate was 4.25%; rate-reduction triggers may lower it again from 2027.',
      ...NCDOR_RATES,
    },
    {
      label: 'N.C. standard deduction',
      rateText: '$12,750 single · $25,500 married filing jointly · $19,125 head of household',
      computed: true,
      detail: 'Subtracted from wages before the 3.99% rate applies. Amounts shown are the published 2025 figures (not indexed).',
      ...NCDOR_STD,
    },
    {
      label: 'Local income tax',
      rateText: 'None',
      computed: true,
      detail: 'North Carolina counties and cities do not levy income or wage taxes.',
      ...NCDOR_RATES,
    },
  ],
  notes: [
    {
      title: 'The rate keeps stepping down',
      body:
        'North Carolina\'s flat rate has fallen every year since 2022: 4.99% (2022), 4.75% (2023), 4.50% (2024), 4.25% (2025) and 3.99% for 2026. NCDOR notes that additional reductions may apply from 2027 if revenue triggers are met. A paycheck calculator still using 4.25% overstates 2026 tax by about $120 a year for a single filer on a $60,000 salary (0.26% of $47,250 taxable).',
      ...NCDOR_RATES,
    },
    {
      title: 'No reciprocal agreements',
      body:
        'North Carolina has no reciprocity with Virginia, South Carolina, Tennessee or Georgia. A North Carolina resident who works in Virginia or South Carolina owes that state\'s nonresident tax and claims a credit on Form D-400. Tennessee residents working in North Carolina owe North Carolina nonresident tax on those wages.',
      ...NCDOR_RATES,
    },
  ],
  neighbors: [
    { slug: 'virginia', name: 'Virginia', why: 'borders North Carolina; progressive brackets' },
    { slug: 'south-carolina', name: 'South Carolina', why: 'borders North Carolina' },
    { slug: 'tennessee', name: 'Tennessee', why: 'borders North Carolina; no tax on wages' },
    { slug: 'georgia', name: 'Georgia', why: 'borders North Carolina; flat rate' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    priorYearFigures: ['standard deduction (NCDOR page shows 2025 amounts; statutory, not indexed)'],
    description:
      '2026 rate of 3.99% read from the NCDOR Tax Rate Schedules page. Standard deduction amounts are the 2025 figures from NCDOR; G.S. 105-153.5 does not index them.',
  },
};

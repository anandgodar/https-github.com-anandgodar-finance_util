import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const RI_2025 = {
  source: 'Rhode Island Division of Taxation, 2025 Tax Rate Schedule and Worksheets — one schedule for all filing statuses; standard deduction and $5,100 exemption with phase-out above $254,250',
  sourceUrl: 'https://tax.ri.gov/sites/g/files/xkgbur541/files/2026-01/2025%20Tax%20Rate%20and%20Worksheets.pdf',
  retrievedAt: RETRIEVED,
  note: '2025 amounts; the 2026 indexed figures were not yet published.',
};

const RI_TDI = {
  source: 'Rhode Island Department of Labor and Training, 2026 UI and TDI tax rates — TDI contribution rate 1.1% for 2026; TDI taxable wage base $100,000',
  sourceUrl: 'https://dlt.ri.gov/press-releases/2026-tax-rates-unemployment-insurance-and-temporary-disability-insurance',
  retrievedAt: RETRIEVED,
};

const RI_BRACKETS = [
  { upTo: 79900, rate: 0.0375 },
  { upTo: 181650, rate: 0.0475 },
  { upTo: null, rate: 0.0599 },
];

export const RHODE_ISLAND: StateTaxSpec = {
  code: 'RI',
  slug: 'rhode-island',
  name: 'Rhode Island',
  taxYear: 2026,
  rateLead: '3.75%–5.99% tax + 1.1% TDI',
  summary:
    'Rhode Island taxes income at 3.75% up to $79,900, 4.75% up to $181,650 and 5.99% above — one schedule for every filing status — after a $10,900 standard deduction and $5,100 exemption for a single filer (2025 amounts); employees also pay 1.1% of the first $100,000 of wages for Temporary Disability Insurance in 2026.',
  wageTax: { kind: 'brackets', single: RI_BRACKETS, married: RI_BRACKETS, hoh: RI_BRACKETS, ...RI_2025 },
  deduction: {
    kind: 'standard',
    single: 16000,
    married: 32000,
    hoh: 21450,
    // Standard deduction + one exemption (two jointly), reduced to 80/60/40/20/0% for each $7,250 (or part) of income above $254,250.
    tiers: [
      { upTo: 254250, single: 16000, married: 32000, hoh: 21450 },
      { upTo: 261500, single: 12800, married: 25600, hoh: 17160 },
      { upTo: 268750, single: 9600, married: 19200, hoh: 12870 },
      { upTo: 276000, single: 6400, married: 12800, hoh: 8580 },
      { upTo: 283250, single: 3200, married: 6400, hoh: 4290 },
      { upTo: null, single: 0, married: 0, hoh: 0 },
    ],
    ...RI_2025,
  },
  payrollDeductions: [{ id: 'ri-tdi', label: 'Temporary Disability Insurance', rate: 0.011, wageBase: 100000, ...RI_TDI }],
  lines: [
    {
      label: 'Rhode Island state income tax',
      rateText: '3.75% / 4.75% / 5.99%',
      computed: true,
      detail: 'Taxable income up to $79,900 is taxed at 3.75%, $79,900 to $181,650 at 4.75% and above that at 5.99%, for every filing status (2025 thresholds; Rhode Island indexes them each year).',
      ...RI_2025,
    },
    {
      label: 'Standard deduction and exemption',
      rateText: '$10,900 + $5,100 single / $21,800 + $10,200 joint / $16,350 + $5,100 head of household',
      computed: true,
      detail:
        'Both phase out once modified federal AGI exceeds $254,250: for each $7,250 or part of the excess the allowed share falls to 80%, 60%, 40% and 20%, and nothing is allowed above $283,250. Dependents\' exemptions are not counted here.',
      ...RI_2025,
    },
    {
      label: 'Temporary Disability Insurance',
      rateText: '1.1% of wages to $100,000 (2026)',
      computed: true,
      detail: 'The TDI rate falls from 1.3% in 2025 to 1.1% in 2026 while the wage base rises from $89,200 to $100,000, so the maximum is $1,100 a year. On $60,000 it is $660.',
      ...RI_TDI,
    },
  ],
  notes: [
    {
      title: 'One schedule for everyone',
      body:
        'Rhode Island uses the same three brackets for single, joint and head-of-household returns; only the standard deduction and number of exemptions differ. A single filer on $60,000 has $44,000 of taxable income and owes 3.75% of it, $1,650.',
      ...RI_2025,
    },
    {
      title: 'TDI is employee-paid',
      body:
        'Rhode Island\'s Temporary Disability Insurance is a payroll contribution withheld from wages. For 2026 the Department of Labor and Training cut the rate to 1.1% and raised the taxable wage base to $100,000.',
      ...RI_TDI,
    },
    {
      title: 'Why 2025 tax figures',
      body:
        'The Division of Taxation publishes indexed brackets, deductions and exemptions each year; at review the latest schedule was for 2025. Indexing raises the thresholds, so 2026 tax on the same wages will be slightly lower than shown.',
      ...RI_2025,
    },
  ],
  neighbors: [
    { slug: 'massachusetts', name: 'Massachusetts', why: 'borders Rhode Island; 5% plus surtax and PFML' },
    { slug: 'connecticut', name: 'Connecticut', why: 'borders Rhode Island; 2%–6.99% plus Paid Leave' },
    { slug: 'new-york', name: 'New York', why: 'Northeast comparison; 4%–10.9%' },
    { slug: 'new-hampshire', name: 'New Hampshire', why: 'New England; no tax on wages' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    priorYearFigures: ['brackets, standard deduction, $5,100 exemption and the $254,250 phase-out threshold are the 2025 amounts from the Division of Taxation worksheets'],
    description:
      'Rhode Island 2025 rate schedule and deduction/exemption phase-out (Division of Taxation), applied as prior-year figures; 2026 TDI 1.1% to $100,000 from the Department of Labor and Training.',
  },
};

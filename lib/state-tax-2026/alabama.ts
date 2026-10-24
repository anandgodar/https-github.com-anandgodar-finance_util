import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const AL_BOOKLET = {
  source: 'Alabama Department of Revenue, Withholding Tax Tables and Instructions (rev. 01/26), "Formula For Computing Alabama Withholding Tax" (p. 7)',
  sourceUrl: 'https://www.revenue.alabama.gov/wp-content/uploads/2026/01/whbooklet_0126.pdf',
  retrievedAt: RETRIEVED,
};

const BHAM = {
  source: 'City of Birmingham, Tax and License Administration — Employee Occupational Tax',
  sourceUrl: 'https://birminghamal.gov/3JnYv',
  retrievedAt: RETRIEVED,
};

export const ALABAMA: StateTaxSpec = {
  code: 'AL',
  slug: 'alabama',
  name: 'Alabama',
  taxYear: 2026,
  rateLead: '2%–5% state tax, federal tax deductible',
  summary:
    'Alabama taxes wages at 2% on the first $500, 4% on the next $2,500 and 5% above $3,000 (double those thresholds for a joint return), but lets you subtract your federal income tax along with a standard deduction of $2,500 to $3,000 and a $1,500 personal exemption for a single filer; some cities, including Birmingham, add an occupational tax that is not included here.',
  wageTax: {
    kind: 'brackets',
    single: [
      { upTo: 500, rate: 0.02 },
      { upTo: 3000, rate: 0.04 },
      { upTo: null, rate: 0.05 },
    ],
    married: [
      { upTo: 1000, rate: 0.02 },
      { upTo: 6000, rate: 0.04 },
      { upTo: null, rate: 0.05 },
    ],
    hoh: [
      { upTo: 500, rate: 0.02 },
      { upTo: 3000, rate: 0.04 },
      { upTo: null, rate: 0.05 },
    ],
    ...AL_BOOKLET,
  },
  deduction: {
    kind: 'standard',
    single: 4500,
    married: 11500,
    hoh: 8200,
    phaseout: {
      single: [{ amount: 3000, start: 25999, step: 500, perStep: 25, floor: 2500 }],
      married: [{ amount: 8500, start: 25999, step: 500, perStep: 175, floor: 5000 }],
      hoh: [{ amount: 5200, start: 25999, step: 500, perStep: 135, floor: 2500 }],
    },
    additional: { single: 1500, married: 3000, hoh: 3000 },
    ...AL_BOOKLET,
  },
  adjustments: {
    federalTaxDeduction: {
      capTiers: { single: [{ upTo: null, value: Infinity }], married: [{ upTo: null, value: Infinity }], hoh: [{ upTo: null, value: Infinity }] },
      ...AL_BOOKLET,
      note: 'The formula deducts the employee\'s annual federal withholding (line 2B); the calculator uses the computed federal income tax.',
    },
  },
  payrollDeductions: [],
  lines: [
    {
      label: 'Alabama state income tax',
      rateText: '2% / 4% / 5% (thresholds $500 and $3,000; $1,000 and $6,000 joint)',
      computed: true,
      detail:
        'Single, head of household and married-filing-separately: 2% on the first $500, 4% on the next $2,500, 5% above $3,000. Married filing jointly: 2% on the first $1,000, 4% on the next $5,000, 5% above $6,000.',
      ...AL_BOOKLET,
    },
    {
      label: 'Federal income tax deduction',
      rateText: 'Federal income tax is subtracted in full',
      computed: true,
      detail:
        'Alabama lets the federal tax withheld be deducted before the state rate applies. On a $60,000 single salary that removes about $5,000 from Alabama taxable income and lowers state tax by about $250.',
      ...AL_BOOKLET,
    },
    {
      label: 'Standard deduction (phases down)',
      rateText: '$3,000 single / $8,500 joint / $5,200 head of family, reducing to $2,500 / $5,000 / $2,500',
      computed: true,
      detail:
        'Above $25,999 of gross income the deduction falls by $25 (single), $175 (joint) or $135 (head of family) for each $500 or part of $500, reaching its minimum at $35,500. Personal exemptions of $1,500 (single) or $3,000 (married or head of family) are added; the $300 to $1,000 dependent amounts are not counted.',
      ...AL_BOOKLET,
    },
    {
      label: 'City and county occupational tax',
      rateText: 'Varies by city — not included',
      computed: false,
      detail:
        'Some Alabama cities and counties levy an occupational (license) tax on wages earned within their limits, withheld by the employer. Birmingham administers an Employee Occupational Tax; check the rate for the city where you work.',
      ...BHAM,
    },
  ],
  notes: [
    {
      title: 'The federal deduction changes the math',
      body:
        'Because federal income tax is subtracted before Alabama tax is computed, every extra dollar of federal tax lowers Alabama tax by up to 5 cents. That is why the Alabama figure on this page is computed after the federal line, and why it grows a little more slowly than a flat 5% as income rises.',
      ...AL_BOOKLET,
    },
    {
      title: 'Most of the deduction phase-down happens by $35,500',
      body:
        'The standard deduction steps down between $26,000 and $35,500 of gross income and then stays at its minimum, so above $35,500 every filer in a status gets the same deduction. A single filer\'s total of standard deduction and exemption is $4,500 at low incomes and $4,000 from $35,500 up.',
      ...AL_BOOKLET,
    },
    {
      title: 'Local occupational taxes',
      body:
        'Local occupational taxes are withheld on top of state tax. The table and calculator here show state tax only, so add your work city\'s rate if it has one.',
      ...BHAM,
    },
  ],
  neighbors: [
    { slug: 'georgia', name: 'Georgia', why: 'borders Alabama; flat 4.99%' },
    { slug: 'tennessee', name: 'Tennessee', why: 'borders Alabama; no tax on wages' },
    { slug: 'mississippi', name: 'Mississippi', why: 'borders Alabama; 4% above $10,000' },
    { slug: 'florida', name: 'Florida', why: 'borders Alabama; no income tax' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Alabama Department of Revenue withholding formula (rev. 01/26): sliding standard deduction, personal exemption, federal income tax deduction and the 2%/4%/5% schedule. Dependent amounts and local occupational taxes are not computed.',
  },
};

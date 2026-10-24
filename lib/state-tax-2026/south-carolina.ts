import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const SC_FORMULA = {
  source: 'South Carolina Department of Revenue, 2026 SC Withholding Tax Formula (WH-1603F): 0% under $3,640, 3% to $18,230, 6% above',
  sourceUrl: 'https://dor.sc.gov/sites/dor/files/forms/WH1603F_2026.pdf',
  retrievedAt: RETRIEVED,
};

const SC_CODE = {
  source: 'South Carolina Code of Laws, Title 12 Chapter 6 — §12-6-560 (taxable income "computed as determined under the Internal Revenue Code"), §12-6-510(B) (top rate phased to 6%; brackets indexed under §12-6-520)',
  sourceUrl: 'https://www.scstatehouse.gov/code/t12c006.php',
  retrievedAt: RETRIEVED,
};

const SC_BRACKETS = [
  { upTo: 3640, rate: 0 },
  { upTo: 18230, rate: 0.03 },
  { upTo: null, rate: 0.06 },
];

export const SOUTH_CAROLINA: StateTaxSpec = {
  code: 'SC',
  slug: 'south-carolina',
  name: 'South Carolina',
  taxYear: 2026,
  rateLead: '0%–6% state tax',
  summary:
    'South Carolina starts from federal taxable income, so the $16,100 federal standard deduction applies, and then taxes it at 0% up to $3,640, 3% up to $18,230 and 6% above that in 2026.',
  wageTax: { kind: 'brackets', single: SC_BRACKETS, married: SC_BRACKETS, hoh: SC_BRACKETS, ...SC_FORMULA },
  deduction: { kind: 'standard', single: 16100, married: 32200, hoh: 24150, ...SC_CODE },
  payrollDeductions: [],
  lines: [
    {
      label: 'South Carolina state income tax',
      rateText: '0% to $3,640, 3% to $18,230, 6% above (2026)',
      computed: true,
      detail:
        'The 2026 brackets are indexed under §12-6-520 and published in the Department\'s withholding formula. Tax at the top of the 3% bracket is $437.70; above it, the shortcut is 6% of taxable income minus $656.10. The same schedule applies to every filing status.',
      ...SC_FORMULA,
    },
    {
      label: 'Starting point: federal taxable income',
      rateText: '$16,100 single / $32,200 joint / $24,150 head of household',
      computed: true,
      detail:
        'Section 12-6-560 computes South Carolina taxable income as determined under the Internal Revenue Code, so the federal standard deduction carries over. The employer withholding formula uses its own simpler deduction (10% of wages up to $7,500 plus $5,000 per allowance), so withholding can differ from the annual tax shown here.',
      ...SC_CODE,
    },
  ],
  notes: [
    {
      title: 'The top rate has reached 6%',
      body:
        'Section 12-6-510(B) phased South Carolina\'s top marginal rate down from 7% toward 6%, and the 2026 withholding formula applies 6% above $18,230. A single filer on $60,000 has $43,900 of taxable income and owes $437.70 plus 6% of $25,670, or about $1,978.',
      ...SC_CODE,
    },
    {
      title: 'Withholding versus the annual return',
      body:
        'Employers withhold using the WH-1603F formula, which subtracts 10% of wages (up to $7,500) and $5,000 per allowance rather than the federal standard deduction. The figures on this page follow the annual tax computation, so the refund or balance due at filing is the difference.',
      ...SC_FORMULA,
    },
    {
      title: 'One schedule for every filing status',
      body:
        'South Carolina does not widen its brackets for married couples. A joint return gets the larger federal standard deduction but the same $3,640 and $18,230 thresholds, so two-earner couples reach the 6% rate on most of their combined income.',
      ...SC_FORMULA,
    },
  ],
  neighbors: [
    { slug: 'north-carolina', name: 'North Carolina', why: 'borders South Carolina; flat 3.99%' },
    { slug: 'georgia', name: 'Georgia', why: 'borders South Carolina; flat 4.99%' },
    { slug: 'tennessee', name: 'Tennessee', why: 'no tax on wages' },
    { slug: 'florida', name: 'Florida', why: 'no income tax' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      '2026 brackets from the SCDOR withholding formula (WH-1603F); federal standard deduction applied because SC Code §12-6-560 starts from IRC taxable income.',
  },
};

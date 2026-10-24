import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const AR_FORMULA = {
  source: 'Arkansas Department of Finance and Administration, 2026 Withholding Formula (effective 1 Jan 2026): standard deduction $2,470; rates 0%–3.9%; $29 personal tax credit per exemption',
  sourceUrl: 'https://www.dfa.arkansas.gov/wp-content/uploads/whformula_2026.pdf',
  retrievedAt: RETRIEVED,
};

/**
 * Above $94,700 of net taxable income the formula's subtraction shrinks by $10
 * for each $100 of income (from $419.96 to $89.30 at $97,801), which claws back
 * the benefit of the lower brackets. Expressed here as an amount added to the
 * marginal-bracket tax: $419.96 minus the printed subtraction.
 */
const AR_ADJUSTMENT = [
  { upTo: 94700, value: 0 },
  { upTo: 94800, value: 20.66 },
  { upTo: 94900, value: 30.66 },
  { upTo: 95000, value: 40.66 },
  { upTo: 95100, value: 50.66 },
  { upTo: 95200, value: 60.66 },
  { upTo: 95300, value: 70.66 },
  { upTo: 95400, value: 80.66 },
  { upTo: 95500, value: 90.66 },
  { upTo: 95600, value: 100.66 },
  { upTo: 95700, value: 110.66 },
  { upTo: 95800, value: 120.66 },
  { upTo: 95900, value: 130.66 },
  { upTo: 96000, value: 140.66 },
  { upTo: 96100, value: 150.66 },
  { upTo: 96200, value: 160.66 },
  { upTo: 96300, value: 170.66 },
  { upTo: 96400, value: 180.66 },
  { upTo: 96500, value: 190.66 },
  { upTo: 96600, value: 200.66 },
  { upTo: 96700, value: 210.66 },
  { upTo: 96800, value: 220.66 },
  { upTo: 96900, value: 230.66 },
  { upTo: 97000, value: 240.66 },
  { upTo: 97100, value: 250.66 },
  { upTo: 97200, value: 260.66 },
  { upTo: 97300, value: 270.66 },
  { upTo: 97400, value: 280.66 },
  { upTo: 97500, value: 290.66 },
  { upTo: 97600, value: 300.66 },
  { upTo: 97700, value: 310.66 },
  { upTo: 97800, value: 320.66 },
  { upTo: null, value: 330.66 },
];

const AR_BRACKETS = [
  { upTo: 5599, rate: 0 },
  { upTo: 11199, rate: 0.02 },
  { upTo: 15999, rate: 0.03 },
  { upTo: 26399, rate: 0.034 },
  { upTo: null, rate: 0.039 },
];

export const ARKANSAS: StateTaxSpec = {
  code: 'AR',
  slug: 'arkansas',
  name: 'Arkansas',
  taxYear: 2026,
  rateLead: '0%–3.9% state tax',
  summary:
    'Arkansas taxes 2026 wages at 0% up to $5,599 of net taxable income, then 2%, 3% and 3.4%, and 3.9% above $26,399, after a $2,470 standard deduction; a $29 personal credit comes off the tax, and above about $94,700 the benefit of the lower brackets is phased back out.',
  wageTax: { kind: 'brackets', single: AR_BRACKETS, married: AR_BRACKETS, hoh: AR_BRACKETS, ...AR_FORMULA },
  deduction: { kind: 'standard', single: 2470, married: 2470, hoh: 2470, ...AR_FORMULA },
  adjustments: {
    addOns: [
      {
        id: 'ar-bracket-adjustment',
        basis: 'taxable',
        tiers: { single: AR_ADJUSTMENT, married: AR_ADJUSTMENT, hoh: AR_ADJUSTMENT },
        ...AR_FORMULA,
      },
    ],
    credit: { single: 29, married: 58, hoh: 29, ...AR_FORMULA, note: '$29 per exemption: one for a single or head-of-household filer, two for a joint return; dependents not counted.' },
  },
  payrollDeductions: [],
  lines: [
    {
      label: 'Arkansas state income tax',
      rateText: '0% / 2% / 3% / 3.4% / 3.9% (2026)',
      computed: true,
      detail:
        'Net taxable income up to $5,599 is untaxed; 2% applies to $5,600–$11,199, 3% to $11,200–$15,999, 3.4% to $16,000–$26,399 and 3.9% above. The formula uses one schedule for every filing status.',
      ...AR_FORMULA,
    },
    {
      label: 'High-income bracket adjustment',
      rateText: 'Up to $330.66 added between $94,700 and $97,800',
      computed: true,
      detail:
        'Between $94,701 and $97,800 of net taxable income the amount subtracted from 3.9% of income falls by $10 for each $100, so tax rises by up to $330.66. From $97,801 the tax is 3.9% of income minus $89.30. The formula looks incomes below $100,001 up at the middle of a $100 range; the calculator uses exact income.',
      ...AR_FORMULA,
    },
    {
      label: 'Standard deduction and personal credit',
      rateText: '$2,470 deduction; $29 credit per exemption',
      computed: true,
      detail: 'The 2026 formula subtracts a $2,470 standard deduction from annual pay and $29 per exemption claimed on Form AR4EC from the tax. It does not vary the deduction by filing status.',
      ...AR_FORMULA,
    },
  ],
  notes: [
    {
      title: 'A top rate of 3.9%',
      body:
        'Every full-time salary in Arkansas reaches the 3.9% rate, which starts at $26,399 of net taxable income. A single filer on $60,000 has $57,530 after the deduction and owes $609.60 on the lower brackets plus 3.9% of $31,131, less the $29 credit — about $1,795.',
      ...AR_FORMULA,
    },
    {
      title: 'The recapture zone',
      body:
        'Arkansas phases out the benefit of its 0%–3.4% brackets over a narrow band: between $94,700 and $97,800 of net taxable income each extra $100 costs $13.90 of tax instead of $3.90. Above $97,800 the tax is simply 3.9% of income minus $89.30, before the personal credit.',
      ...AR_FORMULA,
    },
    {
      title: 'Same schedule for couples',
      body:
        'The withholding formula has a single schedule and a single $2,470 standard deduction, so the calculator shows married and head-of-household filers with the same thresholds as single filers; only the number of $29 credits differs.',
      ...AR_FORMULA,
    },
  ],
  neighbors: [
    { slug: 'missouri', name: 'Missouri', why: 'borders Arkansas; up to 4.7%' },
    { slug: 'tennessee', name: 'Tennessee', why: 'borders Arkansas; no tax on wages' },
    { slug: 'texas', name: 'Texas', why: 'borders Arkansas; no income tax' },
    { slug: 'oklahoma', name: 'Oklahoma', why: 'borders Arkansas; up to 4.5%' },
    { slug: 'louisiana', name: 'Louisiana', why: 'borders Arkansas; flat 3%' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Arkansas DFA 2026 withholding formula: $2,470 standard deduction, 0%–3.9% schedule, the $94,700–$97,800 bracket adjustment, and $29 personal credits. Same schedule for every filing status.',
  },
};

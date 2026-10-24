import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-23';

const VA_WITHHOLDING = {
  source: 'Virginia Tax, Withholding Tables for Wages Paid after July 1, 2025 (formula: 2% to $3,000, 3% to $5,000, 5% to $17,000, 5.75% above; standard deduction $8,750 / $17,500 for 2025–2026; exemption $930)',
  sourceUrl: 'https://www.tax.virginia.gov/node/35195',
  retrievedAt: RETRIEVED,
};

const VA_RECIPROCITY = {
  source: 'Virginia Tax, Reciprocity (District of Columbia, Kentucky, Maryland, Pennsylvania, West Virginia; Form VA-4)',
  sourceUrl: 'https://tax.virginia.gov/reciprocity',
  retrievedAt: RETRIEVED,
};

export const VIRGINIA: StateTaxSpec = {
  code: 'VA',
  slug: 'virginia',
  name: 'Virginia',
  taxYear: 2026,
  rateLead: '2%–5.75% state tax',
  summary:
    'Virginia taxes wages on four brackets — 2% to $3,000, 3% to $5,000, 5% to $17,000 and 5.75% above — so nearly all of a full-time salary is taxed at 5.75% after the $8,750 standard deduction for a single filer ($17,500 joint) that applies through tax year 2026; there are no local income taxes or employee payroll contributions.',
  wageTax: {
    kind: 'brackets',
    single: [
      { upTo: 3000, rate: 0.02 },
      { upTo: 5000, rate: 0.03 },
      { upTo: 17000, rate: 0.05 },
      { upTo: null, rate: 0.0575 },
    ],
    married: [
      { upTo: 3000, rate: 0.02 },
      { upTo: 5000, rate: 0.03 },
      { upTo: 17000, rate: 0.05 },
      { upTo: null, rate: 0.0575 },
    ],
    hoh: [
      { upTo: 3000, rate: 0.02 },
      { upTo: 5000, rate: 0.03 },
      { upTo: 17000, rate: 0.05 },
      { upTo: null, rate: 0.0575 },
    ],
    ...VA_WITHHOLDING,
  },
  deduction: {
    kind: 'standard',
    single: 8750,
    married: 17500,
    // Virginia has no head-of-household filing status; an unmarried filer uses Filing Status 1 (single).
    hoh: 8750,
    ...VA_WITHHOLDING,
    note: 'The $930 personal exemption per person is not applied, so the state figure is slightly conservative (about $53 a year per exemption at 5.75%).',
  },
  payrollDeductions: [],
  lines: [
    {
      label: 'Virginia state income tax',
      rateText: '2% to $3,000, 3% to $5,000, 5% to $17,000, 5.75% above',
      computed: true,
      detail:
        'The brackets are the same for every filing status and have not been indexed, so a single filer on $60,000 pays 5.75% on everything above $17,000 of taxable income. Tax at the top of the 5% bracket is $720.',
      ...VA_WITHHOLDING,
    },
    {
      label: 'Standard deduction',
      rateText: '$8,750 single / $17,500 married filing jointly (2025–2026)',
      computed: true,
      detail:
        'The increased deduction is scheduled to sunset after tax year 2026, reverting to $3,000 / $6,000 unless the General Assembly extends it again. Virginia also allows a $930 personal exemption per person and $800 for age 65+ or blind, not modelled here.',
      ...VA_WITHHOLDING,
    },
    {
      label: 'Local income tax',
      rateText: 'None',
      computed: true,
      detail: 'No Virginia city or county levies an income tax on wages.',
      ...VA_WITHHOLDING,
    },
  ],
  notes: [
    {
      title: 'Reciprocity with DC, KY, MD, PA and WV',
      body:
        'Virginia has reciprocity with the District of Columbia, Kentucky, Maryland, Pennsylvania and West Virginia, so wages are taxed only by the state of residence. The conditions differ: a Virginia resident working in D.C. who does not become a D.C. resident is exempt from D.C. tax; a Virginia resident must commute daily to Kentucky and earn only wages there; and for Maryland, Pennsylvania and West Virginia the resident must spend 183 days or fewer in that state, keep no abode there, and receive only wage or salary income there. Residents of those jurisdictions working in Virginia meet the mirror conditions and file Form VA-4 with their employer; nonresidents must recertify each year, and Form 763-S recovers Virginia tax withheld in error.',
      ...VA_RECIPROCITY,
    },
    {
      title: 'Almost a flat tax in practice',
      body:
        'Because the 5.75% bracket starts at $17,000 of taxable income and the lower brackets are tiny, a single filer on $60,000 owes $2,689 of Virginia tax, about 4.5% of gross — the three lower brackets save only $257.50 a year compared with a flat 5.75% on the same taxable income. Raising or lowering the standard deduction therefore moves Virginia tax almost one-for-one at 5.75%.',
      ...VA_WITHHOLDING,
    },
    {
      title: 'The deduction sunset to watch',
      body:
        'The $8,750 / $17,500 standard deduction applies to tax years 2025 and 2026 only. If it lapses as scheduled, a single filer\'s deduction falls by $5,750 for 2027, adding about $331 a year of Virginia tax at 5.75%. Figures on this page are for 2026 and do not assume either outcome.',
      ...VA_WITHHOLDING,
    },
  ],
  neighbors: [
    { slug: 'maryland', name: 'Maryland', why: 'borders Virginia; reciprocal state' },
    { slug: 'north-carolina', name: 'North Carolina', why: 'borders Virginia; flat 3.99%' },
    { slug: 'west-virginia', name: 'West Virginia', why: 'borders Virginia; reciprocal state' },
    { slug: 'tennessee', name: 'Tennessee', why: 'borders Virginia; no income tax' },
    { slug: 'kentucky', name: 'Kentucky', why: 'borders Virginia; reciprocal state' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Brackets, standard deduction ($8,750 / $17,500 through tax year 2026) and $930 exemption from Virginia Tax\'s withholding tables for wages paid after 1 July 2025. Reciprocity rules from Virginia Tax\'s reciprocity page. The personal exemption is not applied.',
  },
};

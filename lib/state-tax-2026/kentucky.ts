import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const KY_FORMULA = {
  source: 'Kentucky Department of Revenue, 2026 Withholding Formula ("2026 Kentucky Tax Rate: 3.5% of taxable income"; "2026 Kentucky Standard Deduction: $3,360")',
  sourceUrl: 'https://revenue.ky.gov/Forms/2026%20Withholding%20Formula.pdf',
  retrievedAt: RETRIEVED,
};

const KY_STD_NEWS = {
  source: 'Kentucky Department of Revenue news release, 4 Sep 2025 — "the standard deduction for 2026 is $3,360, an increase of $90"',
  sourceUrl: 'https://revenue.ky.gov/News/Pages/Kentucky-DOR-Announces-2026-Standard-Deduction.aspx',
  retrievedAt: RETRIEVED,
};

const KY_RECIP = {
  source: 'Kentucky Department of Revenue, Form 740-NP-R (2025) instructions — reciprocal states and covered income',
  sourceUrl: 'https://revenue.ky.gov/Forms/740-NP-R%20(2025).pdf',
  retrievedAt: RETRIEVED,
};

const LOU = {
  source: 'Louisville Metro Revenue Commission, 2025 Form OL-3D instructions — occupational license tax 2.2% for residents, 1.45% for nonresident individuals',
  sourceUrl: 'https://louisvilleky.gov/sites/default/files/2024-12/ol-3d_instructions_2025.pdf',
  retrievedAt: RETRIEVED,
  note: '2025 instructions; rates are set locally.',
};

export const KENTUCKY: StateTaxSpec = {
  code: 'KY',
  slug: 'kentucky',
  name: 'Kentucky',
  taxYear: 2026,
  rateLead: 'flat 3.5% state tax + local occupational tax',
  summary:
    'Kentucky taxes 2026 wages at a flat 3.5% after a $3,360 standard deduction; many Kentucky workers also pay a city or county occupational license tax — 2.2% for Louisville Metro residents — that this calculator lists but does not add.',
  wageTax: { kind: 'flat', rate: 0.035, ...KY_FORMULA },
  deduction: { kind: 'standard', single: 3360, married: 3360, hoh: 3360, ...KY_FORMULA },
  payrollDeductions: [],
  lines: [
    {
      label: 'Kentucky state income tax',
      rateText: '3.5% flat (2026)',
      computed: true,
      detail: 'The 2026 withholding formula applies 3.5% to annual wages minus the standard deduction. The same rate applies at every income level.',
      ...KY_FORMULA,
    },
    {
      label: 'Standard deduction',
      rateText: '$3,360 (2026)',
      computed: true,
      detail:
        'The Department raised the standard deduction by $90 for 2026 after adjusting for inflation. The withholding formula uses one amount for every employee, so the calculator applies $3,360 for each filing status.',
      ...KY_STD_NEWS,
    },
    {
      label: 'City / county occupational license tax',
      rateText: 'Varies — not included',
      computed: false,
      detail:
        'Kentucky cities and counties levy occupational license taxes on wages. In Louisville Metro the rate is 2.2% for residents (1.25% Metro, 0.2% TARC, 0.75% school boards) and 1.45% for nonresidents, who do not pay the school board portion.',
      ...LOU,
    },
  ],
  notes: [
    {
      title: 'Reciprocity with seven states',
      body:
        'Kentucky has reciprocal agreements covering wages with Illinois, Indiana, Michigan, Ohio, Virginia, West Virginia and Wisconsin. For Virginia the agreement applies to residents who commute daily; for Michigan and Wisconsin it covers income from personal services. A resident of one of those states working in Kentucky pays income tax to the home state instead.',
      ...KY_RECIP,
    },
    {
      title: 'Local tax can exceed half the state rate',
      body:
        'At 3.5% the state rate is modest, so a Louisville resident\'s 2.2% occupational tax adds more than 60% on top of it. Check the occupational tax of the city and county where you work.',
      ...LOU,
    },
    {
      title: 'One deduction, one rate',
      body:
        'The 2026 formula subtracts a single $3,360 standard deduction and applies 3.5% to the rest. On a $60,000 salary the state tax is 3.5% of $56,640, or $1,982.40; the $90 increase in the deduction for 2026 saves $3.15 a year.',
      ...KY_STD_NEWS,
    },
  ],
  neighbors: [
    { slug: 'ohio', name: 'Ohio', why: 'borders Kentucky; reciprocal state' },
    { slug: 'indiana', name: 'Indiana', why: 'borders Kentucky; reciprocal state' },
    { slug: 'tennessee', name: 'Tennessee', why: 'borders Kentucky; no tax on wages' },
    { slug: 'west-virginia', name: 'West Virginia', why: 'borders Kentucky; reciprocal state' },
    { slug: 'virginia', name: 'Virginia', why: 'borders Kentucky; reciprocal state' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Flat 3.5% and $3,360 standard deduction from the Kentucky DOR 2026 withholding formula. Reciprocity from Form 740-NP-R instructions; Louisville occupational tax rates from the 2025 OL-3D instructions (listed, not computed).',
  },
};

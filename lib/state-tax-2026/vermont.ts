import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const VT_2025 = {
  source: 'Vermont Department of Taxes, 2025 Form IN-111 Instructions — 2025 Vermont Tax Rate Schedules (p. 13), standard deduction chart and $5,300 personal exemption',
  sourceUrl: 'https://tax.vermont.gov/sites/tax/files/documents/IN-111-Instr-2025.pdf',
  retrievedAt: RETRIEVED,
  note: '2025 amounts; the 2026 indexed figures were not yet published.',
};

const VT_CCC = {
  source: 'Vermont Department of Taxes, Child Care Contribution — 0.44% of wages; employers may withhold a maximum of 25% of the contribution (0.11%) from employees; collection began 1 July 2024',
  sourceUrl: 'https://tax.vermont.gov/business/child-care-contribution',
  retrievedAt: RETRIEVED,
};

export const VERMONT: StateTaxSpec = {
  code: 'VT',
  slug: 'vermont',
  name: 'Vermont',
  taxYear: 2026,
  rateLead: '3.35%–8.75% tax + 0.11% child care',
  summary:
    'Vermont taxes income at 3.35%, 6.6%, 7.6% and 8.75%, with the 6.6% rate starting at $49,400 of taxable income for a single filer (2025 brackets), after a $7,650 standard deduction and $5,300 personal exemption; employers may also withhold up to 0.11% of wages toward the Child Care Contribution.',
  wageTax: {
    kind: 'brackets',
    single: [
      { upTo: 49400, rate: 0.0335 },
      { upTo: 119700, rate: 0.066 },
      { upTo: 249700, rate: 0.076 },
      { upTo: null, rate: 0.0875 },
    ],
    married: [
      { upTo: 82500, rate: 0.0335 },
      { upTo: 199450, rate: 0.066 },
      { upTo: 304000, rate: 0.076 },
      { upTo: null, rate: 0.0875 },
    ],
    hoh: [
      { upTo: 66200, rate: 0.0335 },
      { upTo: 171000, rate: 0.066 },
      { upTo: 276850, rate: 0.076 },
      { upTo: null, rate: 0.0875 },
    ],
    ...VT_2025,
  },
  deduction: { kind: 'standard', single: 12950, married: 25900, hoh: 16750, ...VT_2025 },
  adjustments: {
    minimumTax: {
      incomeOver: 150000,
      rate: 0.03,
      ...VT_2025,
      note: 'For adjusted gross income above $150,000, tax is the greater of 3% of AGI (less U.S. obligation interest) or the schedule amount.',
    },
  },
  payrollDeductions: [{ id: 'vt-ccc', label: 'Child Care Contribution (employee share)', rate: 0.0011, wageBase: null, ...VT_CCC }],
  lines: [
    {
      label: 'Vermont state income tax',
      rateText: '3.35% / 6.6% / 7.6% / 8.75%',
      computed: true,
      detail:
        'Single: 3.35% to $49,400, 6.6% to $119,700, 7.6% to $249,700, 8.75% above. Married filing jointly: $82,500 / $199,450 / $304,000. Head of household: $66,200 / $171,000 / $276,850. Above $150,000 of AGI the tax is at least 3% of AGI.',
      ...VT_2025,
    },
    {
      label: 'Standard deduction and personal exemption',
      rateText: '$7,650 + $5,300 single / $15,300 + $10,600 joint / $11,450 + $5,300 head of household',
      computed: true,
      detail: 'The 2025 standard deduction plus $5,300 per personal exemption (one single, two joint). Extra amounts for age or blindness and dependents are not counted.',
      ...VT_2025,
    },
    {
      label: 'Child Care Contribution (employee share)',
      rateText: 'Up to 0.11% of wages, no cap',
      computed: true,
      detail: 'Employers pay 0.44% of Vermont wages and may withhold up to a quarter of it, 0.11%, from employees. The calculator assumes the maximum: $66 a year on $60,000.',
      ...VT_CCC,
    },
  ],
  notes: [
    {
      title: 'The 6.6% bracket arrives early for single filers',
      body:
        'A single filer reaches Vermont\'s 6.6% rate at $49,400 of taxable income. On $60,000 of wages, taxable income is $47,050 and the tax is 3.35% of it, about $1,576; on $80,000 the 6.6% rate applies to $17,650 and the tax is about $2,820.',
      ...VT_2025,
    },
    {
      title: 'Child Care Contribution',
      body:
        'Since 1 July 2024 Vermont employers pay a 0.44% payroll tax to fund child care and may recover up to 25% of it, 0.11% of wages, from employees. There is no wage cap.',
      ...VT_CCC,
    },
    {
      title: 'Why 2025 figures',
      body:
        'Vermont indexes its brackets, standard deduction and exemption each year; at review the 2025 Form IN-111 instructions were the latest published. The 2026 tax on the same wages will be slightly lower than shown.',
      ...VT_2025,
    },
  ],
  neighbors: [
    { slug: 'new-hampshire', name: 'New Hampshire', why: 'borders Vermont; no tax on wages' },
    { slug: 'new-york', name: 'New York', why: 'borders Vermont; 4%–10.9%' },
    { slug: 'massachusetts', name: 'Massachusetts', why: 'borders Vermont; 5% plus surtax and PFML' },
    { slug: 'maine', name: 'Maine', why: 'New England; 5.8%–7.15%' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    priorYearFigures: ['rate schedules, standard deduction and $5,300 exemption are the 2025 amounts from the Form IN-111 instructions'],
    description:
      'Vermont 2025 rate schedules, standard deduction and exemption (IN-111 instructions), with the 3%-of-AGI minimum above $150,000; Child Care Contribution employee share up to 0.11%, no cap.',
  },
};

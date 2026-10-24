import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const MO_FORMULA = {
  source: 'Missouri Department of Revenue, 2026 Missouri Withholding Tax Formula (standard deduction $16,100 single / $32,200 spouse not working / $24,150 head of household; rates 0%–4.7%)',
  sourceUrl: 'https://dor.mo.gov/forms/Withholding%20Formula_2026.pdf',
  retrievedAt: RETRIEVED,
};

const KCMO = {
  source: 'City of Kansas City, Missouri, Earnings Tax ("a 1 percent tax on an individual\'s earned income")',
  sourceUrl: 'https://www.kcmo.gov/city-hall/departments/finance/earnings-tax',
  retrievedAt: RETRIEVED,
};

const STL = {
  source: 'City of St. Louis Collector of Revenue, Individual Earnings Tax Information (one percent earnings tax)',
  sourceUrl: 'https://www.stlouis-mo.gov/government/departments/collector/earnings-tax/individual-earnings-tax-info.cfm',
  retrievedAt: RETRIEVED,
};

// Annual payroll brackets from the 2026 formula; the same table applies to every filing status.
const MO_BRACKETS = [
  { upTo: 1348, rate: 0 },
  { upTo: 2696, rate: 0.02 },
  { upTo: 4044, rate: 0.025 },
  { upTo: 5392, rate: 0.03 },
  { upTo: 6740, rate: 0.035 },
  { upTo: 8088, rate: 0.04 },
  { upTo: 9436, rate: 0.045 },
  { upTo: null, rate: 0.047 },
];

export const MISSOURI: StateTaxSpec = {
  code: 'MO',
  slug: 'missouri',
  name: 'Missouri',
  taxYear: 2026,
  rateLead: '0%–4.7% state tax',
  summary:
    'Missouri taxes 2026 wages on a compressed schedule — nothing on the first $1,348 of taxable income, rising in half-point steps to 4.7% above $9,436 — after a standard deduction equal to the federal amount ($16,100 single); Kansas City and St. Louis add a 1% earnings tax that this calculator lists but does not include.',
  wageTax: { kind: 'brackets', single: MO_BRACKETS, married: MO_BRACKETS, hoh: MO_BRACKETS, ...MO_FORMULA },
  deduction: { kind: 'standard', single: 16100, married: 32200, hoh: 24150, ...MO_FORMULA },
  payrollDeductions: [],
  lines: [
    {
      label: 'Missouri state income tax',
      rateText: '0% to $1,348, then 2%–4.5% in $1,348 steps, 4.7% above $9,436',
      computed: true,
      detail:
        'The 2026 annual formula applies 0% to the first $1,348 of Missouri taxable income, then 2%, 2.5%, 3%, 3.5%, 4% and 4.5% on each further $1,348, and 4.7% above $9,436. Tax on the first $9,436 is $262.86, so a full-time salary is taxed at 4.7% on almost every dollar after the deduction. Supplemental pay can be withheld at a flat 4.7%.',
      ...MO_FORMULA,
    },
    {
      label: 'Standard deduction',
      rateText: '$16,100 single / $32,200 joint / $24,150 head of household (2026)',
      computed: true,
      detail:
        'The withholding formula uses the federal standard deduction amounts. The calculator follows the formula; deductions available only on the annual return are not modelled.',
      ...MO_FORMULA,
    },
    {
      label: 'Kansas City earnings tax',
      rateText: '1% — not included',
      computed: false,
      detail: 'Kansas City residents pay 1% on all earned income, even if they work outside the city; nonresidents pay 1% on income earned within city limits.',
      ...KCMO,
    },
    {
      label: 'St. Louis earnings tax',
      rateText: '1% — not included',
      computed: false,
      detail: 'The City of St. Louis collects a one percent earnings tax from city residents wherever they work and from employees of businesses located or performing work in the city, wherever they live.',
      ...STL,
    },
  ],
  notes: [
    {
      title: 'Almost flat in practice',
      body:
        'Missouri\'s brackets are only $1,348 wide, so the 4.7% top rate starts at $9,436 of taxable income. A single filer earning $60,000 has $43,900 of taxable income after the $16,100 deduction and owes $262.86 on the first $9,436 plus 4.7% of the remaining $34,464, about $1,883 in total.',
      ...MO_FORMULA,
    },
    {
      title: 'Two city earnings taxes',
      body:
        'Kansas City and St. Louis each levy a 1% earnings tax. In Kansas City residents pay on all earned income and nonresidents on what they earn inside the city; St. Louis taxes residents and anyone working in the city. On a $60,000 salary that is another $600 a year.',
      ...KCMO,
    },
    {
      title: 'City rules follow the work',
      body:
        'For the city taxes, where the work is performed matters as much as where you live: the St. Louis tax applies to employees of businesses located or performing work in the city, and Kansas City taxes nonresidents only on income earned within city limits.',
      ...STL,
    },
  ],
  neighbors: [
    { slug: 'kansas', name: 'Kansas', why: 'borders Missouri; 5.2%–5.58%' },
    { slug: 'illinois', name: 'Illinois', why: 'borders Missouri; flat 4.95%' },
    { slug: 'arkansas', name: 'Arkansas', why: 'borders Missouri; up to 3.9%' },
    { slug: 'iowa', name: 'Iowa', why: 'borders Missouri; flat 3.8%' },
    { slug: 'oklahoma', name: 'Oklahoma', why: 'borders Missouri; 0%–4.5%' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Missouri tax computed with the Department of Revenue 2026 withholding formula (standard deduction = federal amounts; 0%–4.7% annual brackets). Kansas City and St. Louis 1% earnings taxes listed, not computed.',
  },
};

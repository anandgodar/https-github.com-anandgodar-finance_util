import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const OR_FORMULA = {
  source: 'Oregon Department of Revenue, 150-206-436 Oregon Withholding Tax Formulas (Rev. 12-31-25), effective 1 Jan 2026',
  sourceUrl: 'https://www.oregon.gov/dor/forms/FormsPubs/withholding-tax-formulas_206-436_2026.pdf',
  retrievedAt: RETRIEVED,
};

const OR_PAYROLL = {
  source: 'Oregon Department of Revenue, Payroll formulas, tables and deductions — 2026 standard deductions $2,910 single / $5,820 married',
  sourceUrl: 'https://www.oregon.gov/dor/programs/businesses/Pages/payroll-updates.aspx',
  retrievedAt: RETRIEVED,
};

const OR_PAID_LEAVE = {
  source: 'Oregon Employment Department press release, 18 Nov 2025 — Paid Leave Oregon contribution rate remains 1% for 2026; employees pay 60%; wage ceiling $184,500',
  sourceUrl: 'https://www.oregon.gov/employ/NewsAndMedia/Documents/2025-11-18_Tax_Rate_2026_Press_Release.pdf',
  retrievedAt: RETRIEVED,
};

const OR_TRANSIT = {
  source: 'Oregon Department of Revenue, Statewide Transit Tax ("one-tenth of 1 percent or .001" of each employee\'s wages, withheld by the employer)',
  sourceUrl: 'https://www.oregon.gov/dor/programs/businesses/Pages/Statewide-Transit-Tax.aspx',
  retrievedAt: RETRIEVED,
};

const PDX_LOCAL = {
  source: 'City of Portland Revenue Division (administers both taxes), "Metro Supportive Housing Services and Multnomah County Preschool for All personal income taxes" — SHS 1% above $128,000 single / $205,000 joint for 2026 (indexed from 2026; $125,000 / $200,000 for 2025); PFA 1.5% above $125,000 / $200,000 plus 1.5% above $250,000 / $400,000; withholding mandatory above $200,000 of wages',
  sourceUrl: 'https://www.portland.gov/revenue/personal-tax',
  retrievedAt: RETRIEVED,
};

const OR_SINGLE = [
  { upTo: 4550, rate: 0.0475 },
  { upTo: 11400, rate: 0.0675 },
  { upTo: 125000, rate: 0.0875 },
  { upTo: null, rate: 0.099 },
];
const OR_MARRIED = [
  { upTo: 9100, rate: 0.0475 },
  { upTo: 22800, rate: 0.0675 },
  { upTo: 250000, rate: 0.0875 },
  { upTo: null, rate: 0.099 },
];

// Federal tax subtraction limit by wages (formula "PHASE OUT" tables): $8,750 until the
// phase-out starts, then $1,750 less for each $5,000 (single) or $10,000 (married).
const FED_CAP_SINGLE = [
  { upTo: 124999.99, value: 8750 },
  { upTo: 129999.99, value: 7000 },
  { upTo: 134999.99, value: 5250 },
  { upTo: 139999.99, value: 3500 },
  { upTo: 144999.99, value: 1750 },
  { upTo: null, value: 0 },
];
const FED_CAP_MARRIED = [
  { upTo: 249999.99, value: 8750 },
  { upTo: 259999.99, value: 7000 },
  { upTo: 269999.99, value: 5250 },
  { upTo: 279999.99, value: 3500 },
  { upTo: 289999.99, value: 1750 },
  { upTo: null, value: 0 },
];

export const OREGON: StateTaxSpec = {
  code: 'OR',
  slug: 'oregon',
  name: 'Oregon',
  taxYear: 2026,
  rateLead: '4.75%–9.9% tax + Paid Leave & transit',
  summary:
    'Oregon taxes wages at 4.75% to 9.9% — 8.75% on most of a typical salary — after a $2,910 standard deduction and a subtraction of up to $8,750 of federal income tax, less a $263 exemption credit; employees also pay 0.6% to Paid Leave Oregon and the 0.1% statewide transit tax.',
  wageTax: { kind: 'brackets', single: OR_SINGLE, married: OR_MARRIED, hoh: OR_SINGLE, ...OR_FORMULA },
  deduction: { kind: 'standard', single: 2910, married: 5820, hoh: 2910, ...OR_PAYROLL },
  adjustments: {
    federalTaxDeduction: {
      capTiers: { single: FED_CAP_SINGLE, married: FED_CAP_MARRIED, hoh: FED_CAP_SINGLE },
      ...OR_FORMULA,
      note: 'The formula subtracts federal tax withheld up to the limit; the calculator uses the computed federal income tax.',
    },
    credit: {
      single: 263,
      married: 526,
      hoh: 263,
      tiers: {
        single: [{ upTo: 100000, value: 263 }, { upTo: null, value: 0 }],
        married: [{ upTo: 200000, value: 526 }, { upTo: null, value: 0 }],
        hoh: [{ upTo: 100000, value: 263 }, { upTo: null, value: 0 }],
      },
      ...OR_FORMULA,
      note: '$263 per allowance; the formula sets allowances to zero for single wages over $100,000 and married wages over $200,000.',
    },
  },
  payrollDeductions: [
    { id: 'or-paid-leave', label: 'Paid Leave Oregon (employee share)', rate: 0.006, wageBase: 184500, ...OR_PAID_LEAVE },
    { id: 'or-transit', label: 'Statewide transit tax', rate: 0.001, wageBase: null, ...OR_TRANSIT },
  ],
  lines: [
    {
      label: 'Oregon state income tax',
      rateText: '4.75% / 6.75% / 8.75% / 9.9% (2026)',
      computed: true,
      detail:
        'Single: 4.75% to $4,550, 6.75% to $11,400, 8.75% to $125,000, 9.9% above. Married: $9,100 / $22,800 / $250,000. The withholding formula has no separate head-of-household schedule, so head-of-household filers are shown with the single brackets and deduction.',
      ...OR_FORMULA,
    },
    {
      label: 'Federal income tax subtraction',
      rateText: 'Up to $8,750, phasing out above $125,000 single / $250,000 married',
      computed: true,
      detail:
        'Federal tax is subtracted from Oregon income up to $8,750. The limit drops by $1,750 for each $5,000 of wages above $125,000 for a single filer (each $10,000 above $250,000 married) and is zero from $145,000 single or $290,000 married.',
      ...OR_FORMULA,
    },
    {
      label: 'Exemption credit',
      rateText: '$263 per person',
      computed: true,
      detail: 'A $263 credit per allowance (one single, two married). The formula allows none once single wages exceed $100,000 or married wages exceed $200,000.',
      ...OR_FORMULA,
    },
    {
      label: 'Paid Leave Oregon (employee share)',
      rateText: '0.6% of wages to $184,500 (2026)',
      computed: true,
      detail: 'The total contribution is 1% of wages; employees pay 60% and employers with 25 or more employees pay 40%. $360 a year on $60,000.',
      ...OR_PAID_LEAVE,
    },
    {
      label: 'Statewide transit tax',
      rateText: '0.1% of all wages',
      computed: true,
      detail: 'Withheld from the wages of Oregon residents wherever they work and of nonresidents working in Oregon. No wage cap is stated.',
      ...OR_TRANSIT,
    },
    {
      label: 'Portland-area personal income taxes',
      rateText: 'Metro 1% above $128,000 + Multnomah County 1.5% above $125,000 (3% above $250,000), single — not included',
      computed: false,
      detail:
        'Metro\'s Supportive Housing Services tax is 1% of Metro taxable income above $128,000 single or $205,000 joint in 2026 (thresholds indexed to inflation from 2026). Multnomah County\'s Preschool for All tax is 1.5% above $125,000 single or $200,000 joint, plus another 1.5% above $250,000 or $400,000. Both apply to residents and to nonresidents on income from work done inside the district or county. Employers must withhold for employees earning more than $200,000; below that, withholding is by employee opt-in.',
      ...PDX_LOCAL,
    },
  ],
  notes: [
    {
      title: 'Most of a salary is taxed at 8.75%',
      body:
        'Oregon\'s 8.75% bracket starts at only $11,400 of taxable income for a single filer, so a full-time salary sits almost entirely in it. On $60,000 a single filer subtracts $2,910 and $5,020 of federal tax, owes about $4,237 at the bracket rates and $3,974 after the $263 credit.',
      ...OR_FORMULA,
    },
    {
      title: 'Two payroll deductions besides income tax',
      body:
        'Every Oregon paycheck carries the 0.1% statewide transit tax, and most carry the 0.6% employee share of Paid Leave Oregon. Together they take about 0.7% of wages, $420 on $60,000. Paid Leave stops at $184,500 of wages; the transit tax has no cap.',
      ...OR_PAID_LEAVE,
    },
    {
      title: 'High earners lose two breaks',
      body:
        'Above $100,000 single the $263 exemption credit disappears, and from $125,000 the federal-tax subtraction shrinks in $1,750 steps until it is gone at $145,000. A single filer\'s Oregon tax therefore rises faster than 9.9% in that range.',
      ...OR_FORMULA,
    },
  ],
  neighbors: [
    { slug: 'washington', name: 'Washington', why: 'borders Oregon; no income tax' },
    { slug: 'california', name: 'California', why: 'borders Oregon; 1%–13.3% plus SDI' },
    { slug: 'idaho', name: 'Idaho', why: 'borders Oregon; 5.3%' },
    { slug: 'nevada', name: 'Nevada', why: 'borders Oregon; no income tax' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Oregon tax computed from the DOR 2026 withholding formula (150-206-436): brackets, $2,910/$5,820 standard deduction, federal tax subtraction up to $8,750 with its phase-out, and the $263 allowance credit. Paid Leave Oregon 0.6% employee share to $184,500 and the 0.1% statewide transit tax are included; Portland-area Metro and Multnomah County taxes are listed, not computed.',
  },
};

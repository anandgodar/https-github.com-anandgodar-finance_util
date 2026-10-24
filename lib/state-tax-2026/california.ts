import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-23';

const CA_RATE_SCHEDULE = {
  source: 'California Franchise Tax Board, 2025 Form 540 Tax Rate Schedules (Schedules X, Y, Z)',
  sourceUrl: 'https://www.ftb.ca.gov/forms/2025/2025-540-tax-rate-schedules.pdf',
  retrievedAt: RETRIEVED,
  note: 'FTB had not published 2026 schedules at retrieval; EDD\'s 2026 Method B withholding tables use these same bracket thresholds.',
};

const CA_EDD_METHOD_B = {
  source: 'California EDD, 2026 Withholding Schedules — Method B (Exact Calculation Method)',
  sourceUrl: 'https://edd.ca.gov/siteassets/files/pdf_pub_ctr/26methb.pdf',
  retrievedAt: RETRIEVED,
};

const CA_STD_DEDUCTION = {
  source: 'California Franchise Tax Board, Deductions — 2025 standard deduction amounts',
  sourceUrl: 'https://www.ftb.ca.gov/file/personal/deductions/index.html',
  retrievedAt: RETRIEVED,
  note: '2025 amounts; FTB had not published 2026 amounts at retrieval. EDD\'s 2026 withholding tables use the same $5,706 / $11,412.',
};

const CA_SDI = {
  source: 'California EDD, Contribution Rates, Withholding Schedules, and Meals and Lodging Values (2026)',
  sourceUrl: 'https://edd.ca.gov/en/Payroll_Taxes/Rates_and_Withholding',
  retrievedAt: RETRIEVED,
};

const CA_SDI_WAGES = {
  source: 'California EDD, Determine Taxable Wages and Calculate Taxes (SB 951 removed the SDI wage limit from 1 Jan 2024)',
  sourceUrl: 'https://edd.ca.gov/en/Payroll_Taxes/Determine_Taxable_Wages',
  retrievedAt: RETRIEVED,
};

const CA_MHST = {
  source: 'California Franchise Tax Board, legislative analysis of SB 326 (describes the existing 1% Mental Health Services Tax on taxable income over $1 million)',
  sourceUrl: 'https://www.ftb.ca.gov/tax-pros/law/legislation/2023-2024/SB326-071323.pdf',
  retrievedAt: RETRIEVED,
};

const CA_SCHEDULE_S = {
  source: 'California Franchise Tax Board, 2025 Instructions for Schedule S, Other State Tax Credit',
  sourceUrl: 'https://www.ftb.ca.gov/forms/2025/2025-540-s-instructions.html',
  retrievedAt: RETRIEVED,
};

export const CALIFORNIA: StateTaxSpec = {
  code: 'CA',
  slug: 'california',
  name: 'California',
  taxYear: 2026,
  rateLead: '1%–12.3% tax + 1.3% SDI',
  summary:
    'California taxes wages on nine brackets from 1% to 12.3% (plus a 1% mental health services tax on taxable income over $1 million), after a $5,706 standard deduction for a single filer, and every California paycheck also carries a 1.3% State Disability Insurance contribution on all wages in 2026.',
  wageTax: {
    kind: 'brackets',
    single: [
      { upTo: 11079, rate: 0.01 },
      { upTo: 26264, rate: 0.02 },
      { upTo: 41452, rate: 0.04 },
      { upTo: 57542, rate: 0.06 },
      { upTo: 72724, rate: 0.08 },
      { upTo: 371479, rate: 0.093 },
      { upTo: 445771, rate: 0.103 },
      { upTo: 742953, rate: 0.113 },
      { upTo: 1000000, rate: 0.123 },
      { upTo: null, rate: 0.133 },
    ],
    married: [
      { upTo: 22158, rate: 0.01 },
      { upTo: 52528, rate: 0.02 },
      { upTo: 82904, rate: 0.04 },
      { upTo: 115084, rate: 0.06 },
      { upTo: 145448, rate: 0.08 },
      { upTo: 742958, rate: 0.093 },
      { upTo: 891542, rate: 0.103 },
      { upTo: 1000000, rate: 0.113 },
      { upTo: 1485906, rate: 0.123 },
      { upTo: null, rate: 0.133 },
    ],
    hoh: [
      { upTo: 22173, rate: 0.01 },
      { upTo: 52530, rate: 0.02 },
      { upTo: 67716, rate: 0.04 },
      { upTo: 83805, rate: 0.06 },
      { upTo: 98990, rate: 0.08 },
      { upTo: 505208, rate: 0.093 },
      { upTo: 606251, rate: 0.103 },
      { upTo: 1000000, rate: 0.113 },
      { upTo: 1010417, rate: 0.123 },
      { upTo: null, rate: 0.133 },
    ],
    ...CA_RATE_SCHEDULE,
  },
  deduction: {
    kind: 'standard',
    single: 5706,
    married: 11412,
    hoh: 11412,
    ...CA_STD_DEDUCTION,
  },
  payrollDeductions: [
    {
      id: 'ca-sdi',
      label: 'State Disability Insurance (SDI)',
      rate: 0.013,
      wageBase: null,
      ...CA_SDI,
    },
  ],
  lines: [
    {
      label: 'California state income tax',
      rateText: '1% to 12.3% (nine brackets), after the standard deduction',
      computed: true,
      detail:
        'Single filers: 1% to $11,079, 2% to $26,264, 4% to $41,452, 6% to $57,542, 8% to $72,724, 9.3% to $371,479, 10.3% to $445,771, 11.3% to $742,953, 12.3% above. Joint filers get roughly doubled thresholds (Schedule Y); head of household uses Schedule Z. The $153 personal exemption credit is not applied, so the state figure is slightly conservative.',
      ...CA_RATE_SCHEDULE,
    },
    {
      label: 'Mental Health Services Tax',
      rateText: '1% on taxable income over $1,000,000',
      computed: true,
      detail: 'Added on top of the 12.3% bracket, for a 13.3% top marginal rate. It applies to the slice of taxable income above $1 million regardless of filing status.',
      ...CA_MHST,
    },
    {
      label: 'Standard deduction',
      rateText: '$5,706 single / $11,412 joint or head of household',
      computed: true,
      detail: 'Subtracted from wages before the brackets apply. 2025 amounts; FTB had not published the 2026 inflation-adjusted figures at the time of review.',
      ...CA_STD_DEDUCTION,
    },
    {
      label: 'State Disability Insurance (SDI)',
      rateText: '1.3% of all wages (2026), no wage cap',
      computed: true,
      detail:
        'Withheld from employees to fund disability and Paid Family Leave benefits. SB 951 removed the taxable wage limit and maximum withholding from 1 January 2024, so a $150,000 salary pays $1,950 a year.',
      ...CA_SDI_WAGES,
    },
    {
      label: 'Local income tax',
      rateText: 'None',
      computed: true,
      detail: 'No California city or county withholds an income tax from employee wages.',
      ...CA_RATE_SCHEDULE,
    },
  ],
  notes: [
    {
      title: 'No reciprocal agreements',
      body:
        'California has no reciprocal wage agreements with any state. Compensation for services has its source where the work is performed, so a nonresident who works in California owes California tax on those wages, and a California resident working elsewhere is taxed by California on all income and claims a credit on Schedule S for tax paid to the work state. For Arizona, Guam, Oregon and Virginia the credit runs the other way: the California resident claims it on the nonresident return of that state instead.',
      ...CA_SCHEDULE_S,
    },
    {
      title: 'SDI is now uncapped',
      body:
        'Until 2023 SDI stopped at a wage ceiling (about $153,000). Since 2024 it applies to every dollar of wages, and the rate rose to 1.3% for 2026. On a $200,000 salary that is $2,600 a year on top of income tax, which is why a California paycheck looks lighter than the bracket table alone suggests.',
      ...CA_SDI,
    },
    {
      title: 'Why 2025 thresholds appear here',
      body:
        'The FTB publishes each year\'s inflation-indexed brackets and standard deduction late in the year. At the time of review only the 2025 schedules were out; the EDD\'s 2026 Method B withholding tables (published for payrolls from 1 January 2026) use the same bracket thresholds and the same $5,706 / $11,412 standard deduction, so the figures on this page match what employers are withholding against in 2026.',
      ...CA_EDD_METHOD_B,
    },
  ],
  neighbors: [
    { slug: 'nevada', name: 'Nevada', why: 'borders California; no income tax' },
    { slug: 'arizona', name: 'Arizona', why: 'borders California; flat 2.5%' },
    { slug: 'oregon', name: 'Oregon', why: 'borders California; reverse-credit state' },
    { slug: 'washington', name: 'Washington', why: 'West Coast comparison; no income tax' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    priorYearFigures: [
      'Bracket thresholds and the $5,706 / $11,412 standard deduction are the FTB\'s 2025 figures (the FTB had not published 2026 inflation adjustments; EDD\'s 2026 withholding tables use the same thresholds)',
    ],
    description:
      'Brackets from the FTB 2025 Form 540 rate schedules (Schedules X/Y/Z), with the 1% Mental Health Services Tax over $1 million. Standard deduction from the FTB deductions page (2025). SDI 1.3%, no wage cap, from EDD 2026 rates. The $153 personal exemption credit is not applied.',
  },
};

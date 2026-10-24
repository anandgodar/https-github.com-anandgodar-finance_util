import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-23';

const NY_TAX_LAW_601 = {
  source: 'New York Tax Law § 601(a)–(c)(1)(B)(vii), rate tables for taxable years beginning in 2026 (as amended by Chapter 59 of the Laws of 2025, Part A)',
  sourceUrl: 'https://nysenate.gov/legislation/laws/TAX/601',
  retrievedAt: RETRIEVED,
};

const NY_WITHHOLDING_CHANGES = {
  source: 'New York State Department of Taxation and Finance, Withholding tax rate changes (payrolls on or after 1 Jan 2026)',
  sourceUrl: 'https://www.tax.ny.gov/bus/wt/rate.htm',
  retrievedAt: RETRIEVED,
};

const NY_STD_DEDUCTION = {
  source: 'New York State Department of Taxation and Finance, Standard deductions (2025 table, last updated 23 Oct 2025)',
  sourceUrl: 'https://www.tax.ny.gov/pit/file/standard_deductions.htm',
  retrievedAt: RETRIEVED,
  note: 'New York\'s standard deduction is fixed in statute (Tax Law § 614) and is not indexed; the Department\'s page lists the 2025 amounts.',
};

const NY_PFL = {
  source: 'New York State Paid Family Leave, Updates for 2026 (employee contribution 0.432%, maximum $411.91, NYSAWW $1,833.63)',
  sourceUrl: 'https://paidfamilyleave.ny.gov/2026',
  retrievedAt: RETRIEVED,
};

const NY_DBL = {
  source: 'New York State Workers\' Compensation Board, Employee Disability Benefits (contribution 0.5% of wages, not more than 60 cents a week)',
  sourceUrl: 'https://apps.wcb.ny.gov/content/main/DisabilityBenefits/employee-disability-benefits.jsp',
  retrievedAt: RETRIEVED,
};

const NJ_PA_RECIPROCAL = {
  source: 'New Jersey Division of Taxation, PA/NJ Reciprocal Income Tax Agreement (New York has no such agreement)',
  sourceUrl: 'https://nj.gov/treasury/taxation/njit25.shtml',
  retrievedAt: RETRIEVED,
};

export const NEW_YORK: StateTaxSpec = {
  code: 'NY',
  slug: 'new-york',
  name: 'New York',
  taxYear: 2026,
  rateLead: '3.9%–10.9% state tax',
  summary:
    'For 2026 New York State taxes wages on nine brackets from 3.9% to 10.9% after an $8,000 standard deduction for a single filer ($16,050 joint); a New York paycheck also carries a 0.432% Paid Family Leave contribution (capped at $411.91) and up to 60 cents a week for disability insurance, and New York City and Yonkers residents owe a separate local income tax that this calculator does not include.',
  wageTax: {
    kind: 'brackets',
    single: [
      { upTo: 8500, rate: 0.039 },
      { upTo: 11700, rate: 0.044 },
      { upTo: 13900, rate: 0.0515 },
      { upTo: 80650, rate: 0.054 },
      { upTo: 215400, rate: 0.059 },
      { upTo: 1077550, rate: 0.0685 },
      { upTo: 5000000, rate: 0.0965 },
      { upTo: 25000000, rate: 0.103 },
      { upTo: null, rate: 0.109 },
    ],
    married: [
      { upTo: 17150, rate: 0.039 },
      { upTo: 23600, rate: 0.044 },
      { upTo: 27900, rate: 0.0515 },
      { upTo: 161550, rate: 0.054 },
      { upTo: 323200, rate: 0.059 },
      { upTo: 2155350, rate: 0.0685 },
      { upTo: 5000000, rate: 0.0965 },
      { upTo: 25000000, rate: 0.103 },
      { upTo: null, rate: 0.109 },
    ],
    hoh: [
      { upTo: 12800, rate: 0.039 },
      { upTo: 17650, rate: 0.044 },
      { upTo: 20900, rate: 0.0515 },
      { upTo: 107650, rate: 0.054 },
      { upTo: 269300, rate: 0.059 },
      { upTo: 1616450, rate: 0.0685 },
      { upTo: 5000000, rate: 0.0965 },
      { upTo: 25000000, rate: 0.103 },
      { upTo: null, rate: 0.109 },
    ],
    ...NY_TAX_LAW_601,
  },
  deduction: {
    kind: 'standard',
    single: 8000,
    married: 16050,
    hoh: 11200,
    ...NY_STD_DEDUCTION,
  },
  payrollDeductions: [
    {
      id: 'ny-pfl',
      label: 'Paid Family Leave (employee contribution)',
      rate: 0.00432,
      // 52 × the 2026 NYSAWW of $1,833.63 = $95,348.76, which gives the published $411.91 maximum.
      wageBase: 95348.76,
      ...NY_PFL,
    },
    {
      id: 'ny-dbl',
      label: 'Disability Benefits (DBL) employee contribution',
      rate: 0.005,
      // 0.5% of wages, capped at $0.60 a week = $31.20 a year, i.e. the first $6,240 of wages.
      wageBase: 6240,
      ...NY_DBL,
    },
  ],
  lines: [
    {
      label: 'New York State income tax',
      rateText: '3.9% to 10.9% (nine brackets) for 2026',
      computed: true,
      detail:
        'Single filers: 3.9% to $8,500, 4.4% to $11,700, 5.15% to $13,900, 5.4% to $80,650, 5.9% to $215,400, 6.85% to $1,077,550, 9.65% to $5 million, 10.3% to $25 million, 10.9% above. Joint filers: 3.9% to $17,150, 4.4% to $23,600, 5.15% to $27,900, 5.4% to $161,550, 5.9% to $323,200, 6.85% to $2,155,350. The five lowest rates each fell 0.1 point from 2025 under Chapter 59 of 2025 and fall another 0.1 point in 2027. The "tax benefit recapture" supplemental tax that phases out the lower brackets above $107,650 is not modelled.',
      ...NY_TAX_LAW_601,
    },
    {
      label: 'Standard deduction',
      rateText: '$8,000 single / $16,050 joint / $11,200 head of household',
      computed: true,
      detail: 'Fixed in statute and unchanged for years; the Department\'s table shows the same amounts for 2025.',
      ...NY_STD_DEDUCTION,
    },
    {
      label: 'Paid Family Leave (employee contribution)',
      rateText: '0.432% of gross wages, maximum $411.91 (2026)',
      computed: true,
      detail: 'The cap equals 0.432% of 52 weeks at the 2026 statewide average weekly wage of $1,833.63 ($95,348.76 of wages).',
      ...NY_PFL,
    },
    {
      label: 'Disability Benefits (DBL) employee contribution',
      rateText: '0.5% of wages, not more than 60 cents a week',
      computed: true,
      detail: 'Employers may deduct up to this amount; the maximum is $31.20 a year. Some employers absorb it.',
      ...NY_DBL,
    },
    {
      label: 'New York City resident income tax',
      rateText: 'Varies — not included',
      computed: false,
      detail:
        'New York City residents pay a separate city income tax, withheld through payroll alongside the state tax (Publication NYS-50-T-NYC). Nonresidents who work in the city do not pay it.',
      ...NY_WITHHOLDING_CHANGES,
    },
    {
      label: 'Yonkers income tax',
      rateText: 'Resident surcharge / nonresident earnings tax — not included',
      computed: false,
      detail: 'Yonkers residents pay a surcharge on their state tax and nonresidents working in Yonkers pay an earnings tax, both withheld by the employer (Publication NYS-50-T-Y, revised for 2026).',
      ...NY_WITHHOLDING_CHANGES,
    },
  ],
  notes: [
    {
      title: 'The 2026 rate cut in one line',
      body:
        'Chapter 59 of the Laws of 2025 (Part A) trims New York\'s five lowest brackets by 0.1 point for 2026 (3.9%, 4.4%, 5.15%, 5.4%, 5.9%) and again for 2027 onward (3.8%, 4.3%, 5.05%, 5.3%, 5.8%). For a single filer on $60,000 the 2026 cut is worth about $52 a year. The 6.85% and higher brackets are unchanged; the 9.65%, 10.3% and 10.9% top rates stay in place through 2032.',
      ...NY_TAX_LAW_601,
    },
    {
      title: 'No reciprocity with New Jersey or Connecticut',
      body:
        'New York has no reciprocal wage agreement with any state. A New Jersey or Connecticut resident who works in New York pays New York nonresident tax through withholding and claims a credit on the home-state return; a New York resident who commutes out of state does the reverse. New Jersey\'s only reciprocal agreement is with Pennsylvania.',
      ...NJ_PA_RECIPROCAL,
    },
    {
      title: 'City tax is a separate line',
      body:
        'Where you live decides whether a city tax applies: New York City taxes its residents\' income wherever earned, and does not tax commuters. The 2026 state withholding tables changed; the city tables did not. If you live in one of the five boroughs or in Yonkers, add that local line to the figures on this page.',
      ...NY_WITHHOLDING_CHANGES,
    },
  ],
  neighbors: [
    { slug: 'new-jersey', name: 'New Jersey', why: 'borders New York; no reciprocity' },
    { slug: 'connecticut', name: 'Connecticut', why: 'borders New York; commuter state' },
    { slug: 'pennsylvania', name: 'Pennsylvania', why: 'borders New York; flat 3.07%' },
    { slug: 'massachusetts', name: 'Massachusetts', why: 'borders New York; flat 5%' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    priorYearFigures: [
      'Standard deduction amounts are from the Department\'s 2025 table; they are set in statute and not indexed',
    ],
    description:
      '2026 brackets read from Tax Law § 601 clause (vii) (taxable years beginning in 2026) for joint, head of household and single filers. Standard deduction from the Department\'s standard deductions page. PFL 0.432% / $411.91 cap from paidfamilyleave.ny.gov; DBL 0.5% to 60 cents a week from the Workers\' Compensation Board. NYC and Yonkers taxes and the tax benefit recapture are not computed.',
  },
};

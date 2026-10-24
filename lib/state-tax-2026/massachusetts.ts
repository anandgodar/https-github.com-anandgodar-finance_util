import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-23';

const MA_TAX_RATES = {
  source: 'Massachusetts Department of Revenue, Massachusetts Tax Rates (5.00% on wages; 4% surtax threshold $1,107,750 for 2026; page updated 30 Dec 2025)',
  sourceUrl: 'https://www.mass.gov/info-details/massachusetts-tax-rates',
  retrievedAt: RETRIEVED,
};

const MA_FORM_1ES_2026 = {
  source: 'Massachusetts Department of Revenue, 2026 Form 1-ES instructions ("The surtax threshold for tax year 2026 is $1,107,750")',
  sourceUrl: 'https://www.mass.gov/doc/2026-form-1-es-estimated-tax-payment-vouchers-instructions-and-worksheets/download',
  retrievedAt: RETRIEVED,
};

const MA_FORM_1_2024 = {
  source: 'Massachusetts Department of Revenue, 2024 Form 1, line 2a personal exemption ($4,400 single / $6,800 head of household / $8,800 married filing jointly)',
  sourceUrl: 'https://www.mass.gov/doc/2024-form-1-massachusetts-resident-income-tax-return/download',
  retrievedAt: RETRIEVED,
  note: 'The personal exemption is fixed in M.G.L. c. 62 § 3 and not indexed; the 2024 return is the latest form read.',
};

const MA_PFML = {
  source: 'Massachusetts Department of Family and Medical Leave, PFML contribution rates (2026: 0.88% total; employee share up to 0.18% family + 0.28% medical; capped at the Social Security taxable maximum; updated 1 Oct 2026)',
  sourceUrl: 'https://www.mass.gov/info-details/calculate-employer-paid-family-and-medical-leave-contributions',
  retrievedAt: RETRIEVED,
};

export const MASSACHUSETTS: StateTaxSpec = {
  code: 'MA',
  slug: 'massachusetts',
  name: 'Massachusetts',
  taxYear: 2026,
  rateLead: 'flat 5% tax + 0.46% PFML',
  summary:
    'Massachusetts taxes wages at a flat 5% after a $4,400 personal exemption for a single filer ($8,800 joint), with a 4% surtax on income over $1,107,750 in 2026, and a Massachusetts paycheck also carries up to 0.46% in Paid Family and Medical Leave contributions on wages up to the Social Security wage base; there are no local income taxes.',
  wageTax: {
    kind: 'brackets',
    single: [
      { upTo: 1107750, rate: 0.05 },
      { upTo: null, rate: 0.09 },
    ],
    married: [
      { upTo: 1107750, rate: 0.05 },
      { upTo: null, rate: 0.09 },
    ],
    hoh: [
      { upTo: 1107750, rate: 0.05 },
      { upTo: null, rate: 0.09 },
    ],
    ...MA_TAX_RATES,
  },
  deduction: {
    kind: 'exemption',
    single: 4400,
    married: 8800,
    hoh: 6800,
    ...MA_FORM_1_2024,
  },
  payrollDeductions: [
    {
      id: 'ma-pfml',
      label: 'Paid Family and Medical Leave (employee share)',
      rate: 0.0046,
      wageBase: 184500,
      ...MA_PFML,
    },
  ],
  lines: [
    {
      label: 'Massachusetts state income tax',
      rateText: '5% flat on wages (2026)',
      computed: true,
      detail: 'Wages, salaries and tips are "5% income". The rate is the same for every filing status; only the exemption differs.',
      ...MA_TAX_RATES,
    },
    {
      label: '4% surtax on income over $1,107,750',
      rateText: '4% on the slice above $1,107,750 (2026 threshold)',
      computed: true,
      detail: 'The voter-approved surtax applies to taxable income above an inflation-indexed threshold: $1,053,750 for 2024, $1,083,150 for 2025 and $1,107,750 for 2026. The threshold is the same regardless of filing status, which is why it is modelled as a 9% top bracket here.',
      ...MA_FORM_1ES_2026,
    },
    {
      label: 'Personal exemption',
      rateText: '$4,400 single / $6,800 head of household / $8,800 married filing jointly',
      computed: true,
      detail: 'Massachusetts has no standard deduction; the personal exemption is subtracted before the 5% rate applies. Dependent exemptions are not modelled.',
      ...MA_FORM_1_2024,
    },
    {
      label: 'Paid Family and Medical Leave (employee share)',
      rateText: 'Up to 0.46% of wages (0.18% family + 0.28% medical) to $184,500 (2026)',
      computed: true,
      detail:
        'The 2026 total contribution is 0.88% of wages for employers with 25 or more covered individuals: 0.18% family leave, of which employers may deduct all from employees, and 0.70% medical leave, of which they may deduct up to 40% (0.28%). Smaller employers (under 25) pay no employer share, and the employee share is the same 0.46%. Contributions stop at the Social Security taxable maximum. The calculator assumes the employer deducts the maximum allowed.',
      ...MA_PFML,
    },
    {
      label: 'Local income tax',
      rateText: 'None',
      computed: true,
      detail: 'No Massachusetts city or town levies an income tax on wages.',
      ...MA_TAX_RATES,
    },
  ],
  notes: [
    {
      title: 'No reciprocal agreements',
      body:
        'Massachusetts has no reciprocal wage agreements. Nonresidents pay Massachusetts tax on wages earned in Massachusetts, and Massachusetts residents are taxed on all income wherever earned. The 5% rate and the exemption on this page are the same for residents and nonresidents.',
      ...MA_TAX_RATES,
    },
    {
      title: 'The surtax almost never touches a paycheck',
      body:
        'The 4% surtax applies only to the portion of taxable income above $1,107,750 in 2026, so a salary of $200,000 or even $1,000,000 pays 5% flat. The threshold is adjusted each year: $1,053,750 for 2024, $1,083,150 for 2025, $1,107,750 for 2026.',
      ...MA_FORM_1ES_2026,
    },
    {
      title: 'PFML changes coming in 2027',
      body:
        'Chapter 101 of the Acts of 2026 shifts employer contributions from medical leave toward family leave from 1 January 2027. The 2026 employee share (up to 0.46%) is what this page models; check the Department of Family and Medical Leave rate page for 2027 before relying on it next year.',
      ...MA_PFML,
    },
  ],
  neighbors: [
    { slug: 'new-hampshire', name: 'New Hampshire', why: 'borders Massachusetts; no income tax' },
    { slug: 'connecticut', name: 'Connecticut', why: 'borders Massachusetts' },
    { slug: 'rhode-island', name: 'Rhode Island', why: 'borders Massachusetts' },
    { slug: 'new-york', name: 'New York', why: 'borders Massachusetts; 3.9%–10.9%' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    priorYearFigures: [
      'Personal exemption amounts ($4,400 / $6,800 / $8,800) are from the 2024 Form 1; they are set in statute and not indexed',
    ],
    description:
      '5% rate and the $1,107,750 surtax threshold for 2026 from the DOR tax-rates page and 2026 Form 1-ES instructions. Personal exemption from Form 1 line 2a (2024). PFML employee share 0.46% to the Social Security wage base from the Department of Family and Medical Leave 2026 rate page. Dependent exemptions are not computed.',
  },
};

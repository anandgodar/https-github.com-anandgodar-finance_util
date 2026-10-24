import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-23';

const WA_DOR_INCOME_TAX = {
  source: 'Washington State Department of Revenue, Income tax ("Washington does not currently have an individual income tax")',
  sourceUrl: 'https://dor.wa.gov/taxes-rates/income-tax',
  retrievedAt: RETRIEVED,
};

const WA_PFML_2026 = {
  source: 'Washington Employment Security Department, Paid Family & Medical Leave premium rate increases to 1.13% in 2026 (employees pay 71.43% of the premium; released 29 Oct 2025)',
  sourceUrl: 'https://esd.wa.gov/node/1109',
  retrievedAt: RETRIEVED,
};

const WA_CARES = {
  source: 'WA Cares Fund, Employer Information (premium 0.58% of gross wages, not capped at the Social Security taxable maximum, no employer share)',
  sourceUrl: 'https://wacaresfund.wa.gov/employers',
  retrievedAt: RETRIEVED,
};

/** Employee share of the 2026 Paid Leave premium: 71.43% of 1.13%. */
const WA_PFML_EMPLOYEE_RATE = 0.0113 * 0.7143;

export const WASHINGTON: StateTaxSpec = {
  code: 'WA',
  slug: 'washington',
  name: 'Washington',
  taxYear: 2026,
  rateLead: 'no income tax; PFML + WA Cares payroll',
  summary:
    'Washington has no state income tax on wages, but a Washington paycheck carries two state payroll contributions in 2026: the employee share of Paid Family & Medical Leave (71.43% of the 1.13% premium, about 0.81% of wages up to the Social Security wage base) and the 0.58% WA Cares long-term-care premium on all wages.',
  wageTax: {
    kind: 'none',
    ...WA_DOR_INCOME_TAX,
  },
  deduction: {
    kind: 'none',
    single: 0,
    married: 0,
    hoh: 0,
    ...WA_DOR_INCOME_TAX,
  },
  payrollDeductions: [
    {
      id: 'wa-pfml',
      label: 'Paid Family & Medical Leave (employee share)',
      rate: WA_PFML_EMPLOYEE_RATE,
      wageBase: 184500,
      ...WA_PFML_2026,
    },
    {
      id: 'wa-cares',
      label: 'WA Cares Fund (long-term care)',
      rate: 0.0058,
      wageBase: null,
      ...WA_CARES,
    },
  ],
  lines: [
    {
      label: 'Washington state income tax',
      rateText: 'None',
      computed: true,
      detail: 'Washington levies no individual income tax on wages, so filing status and deductions change only the federal figure.',
      ...WA_DOR_INCOME_TAX,
    },
    {
      label: 'Paid Family & Medical Leave (employee share)',
      rateText: '71.43% of the 1.13% premium ≈ 0.807% of wages to $184,500 (2026)',
      computed: true,
      detail:
        'The total premium rose from 0.92% in 2025 to 1.13% in 2026; employers pay 28.57% and employees 71.43%. Premiums apply to wages up to the Social Security taxable maximum. On $60,000 the employee share is about $484 a year.',
      ...WA_PFML_2026,
    },
    {
      label: 'WA Cares Fund',
      rateText: '0.58% of all wages, no cap',
      computed: true,
      detail: 'The long-term-care premium is paid entirely by employees (employers may choose to cover it) and, unlike Paid Leave, is not capped at the Social Security maximum. $348 a year on a $60,000 salary; $1,160 on $200,000.',
      ...WA_CARES,
    },
    {
      label: 'Local income tax',
      rateText: 'None',
      computed: true,
      detail: 'No Washington city or county levies an income tax on wages.',
      ...WA_DOR_INCOME_TAX,
    },
  ],
  notes: [
    {
      title: 'No income tax, but not zero state deductions',
      body:
        'Washington is often grouped with Texas and Florida as a no-income-tax state, and for income tax that is right. The difference shows up on the pay stub: Paid Leave and WA Cares together take roughly 1.39% of a typical salary in 2026, about $832 on $60,000. Texas and Florida have no comparable employee contributions.',
      ...WA_PFML_2026,
    },
    {
      title: 'The 2026 Paid Leave increase',
      body:
        'The premium rate is set each autumn by the Employment Security Department under state law. For 2026 it rose 23% to 1.13% of wages, and the employee share rose with it to 71.43% of the premium. On $80,000 the employee contribution is about $646 for 2026.',
      ...WA_PFML_2026,
    },
    {
      title: 'Two caps, two rules',
      body:
        'Paid Leave premiums stop at the Social Security taxable maximum ($184,500 in 2026), so the employee share tops out at about $1,489 a year. WA Cares has no such ceiling: the WA Cares Fund states that its contributions are not capped at the Social Security maximum, so a $300,000 salary pays $1,740 to WA Cares while its Paid Leave contribution is the same as at $184,500.',
      ...WA_CARES,
    },
  ],
  neighbors: [
    { slug: 'oregon', name: 'Oregon', why: 'borders Washington; up to 9.9% income tax' },
    { slug: 'idaho', name: 'Idaho', why: 'borders Washington' },
    { slug: 'california', name: 'California', why: 'West Coast comparison; 1%–13.3%' },
    { slug: 'nevada', name: 'Nevada', why: 'no income tax either' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'No wage income tax per the Washington DOR. Paid Leave 2026 premium 1.13% with a 71.43% employee share from the ESD announcement (wage cap = Social Security maximum, $184,500); WA Cares 0.58% uncapped from the WA Cares Fund employer page.',
  },
};

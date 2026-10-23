import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-23';

const PA_DOR = {
  source: 'Pennsylvania Department of Revenue, Personal Income Tax',
  sourceUrl: 'https://pa.gov/agencies/revenue/resources/tax-types-and-information/personal-income-tax',
  retrievedAt: RETRIEVED,
};

const PA_UC = {
  source: 'Pennsylvania Department of Labor & Industry, UC Tax — Employee Withholding (0.07% for 2023 and after; confirmed for 2026 and 2027)',
  sourceUrl: 'https://www.pa.gov/agencies/dli/resources/for-employers-and-educators/how-to-file/uc-tax/employee-withholding.html',
  retrievedAt: RETRIEVED,
};

const PA_ACT32 = {
  source: 'Pennsylvania DCED, FAQ: Act 32, Earned Income Tax Collection Reform',
  sourceUrl: 'https://dced.pa.gov/?p=1637',
  retrievedAt: RETRIEVED,
};

const PHILA_WAGE = {
  source: 'City of Philadelphia, Wage Tax (employers) — rate table',
  sourceUrl: 'https://www.phila.gov/services/payments-assistance-taxes/business-taxes/wage-tax-employers/',
  retrievedAt: RETRIEVED,
};

const PA_NJ_RECIPROCAL = {
  source: 'New Jersey Division of Taxation, PA/NJ Reciprocal Income Tax Agreement (Forms NJ-165 and REV-419EX)',
  sourceUrl: 'https://nj.gov/treasury/taxation/njit25.shtml',
  retrievedAt: RETRIEVED,
};

export const PENNSYLVANIA: StateTaxSpec = {
  code: 'PA',
  slug: 'pennsylvania',
  name: 'Pennsylvania',
  taxYear: 2026,
  rateLead: 'flat 3.07% state tax',
  summary:
    'Pennsylvania taxes wages at a flat 3.07% from the first dollar (no standard deduction or personal exemption), plus a 0.07% employee unemployment contribution; most workers also pay a local earned income tax that varies by municipality.',
  wageTax: { kind: 'flat', rate: 0.0307, ...PA_DOR },
  deduction: {
    kind: 'none',
    single: 0,
    married: 0,
    hoh: 0,
    ...PA_DOR,
    note: '"The Pennsylvania personal income tax does not provide for a standard deduction or personal exemption."',
  },
  payrollDeductions: [
    {
      id: 'pa-uc',
      label: 'PA Unemployment Compensation (employee withholding)',
      rate: 0.0007,
      wageBase: null,
      ...PA_UC,
    },
  ],
  lines: [
    {
      label: 'Pennsylvania personal income tax',
      rateText: '3.07% flat',
      computed: true,
      detail:
        'Levied "at the rate of 3.07 percent against taxable income of resident and nonresident individuals." Pennsylvania allows no standard deduction and no personal exemption, so the rate applies to every dollar of wages.',
      ...PA_DOR,
    },
    {
      label: 'PA UC employee withholding',
      rateText: '0.07% of gross wages, no cap (2026)',
      computed: true,
      detail: '70 cents per $1,000 of wages, withheld from all employees including those of reimbursable employers.',
      ...PA_UC,
    },
    {
      label: 'Local earned income tax (Act 32)',
      rateText: 'Varies by municipality + school district — not included',
      computed: false,
      detail:
        'Employers withhold the higher of your resident rate (where you live) and the non-resident rate where you work. Rates differ by address; DCED\'s own examples range from 0.5% to 1.6%. Look yours up with the DCED "Withholding Rates by Address" tool.',
      ...PA_ACT32,
    },
    {
      label: 'Philadelphia Wage Tax',
      rateText: '3.74% resident / 3.43% non-resident to 30 Jun 2026; 3.735% / 3.425% from 1 Jul 2026 — not included',
      computed: false,
      detail:
        'Replaces the Act 32 local tax for anyone who lives or works in Philadelphia. The city schedules small reductions each 1 July; the 2024 rates were 3.75% / 3.44%.',
      ...PHILA_WAGE,
    },
  ],
  notes: [
    {
      title: 'Why the state line is so simple',
      body:
        'Pennsylvania is one of the few states where state tax is exactly gross wages × 3.07%. There is no deduction to subtract and no bracket to climb: a $60,000 salary owes $1,842 to the state, a $120,000 salary owes $3,684. The 0.07% UC contribution adds $42 and $84 respectively.',
      ...PA_DOR,
    },
    {
      title: 'The local tax is the hidden line',
      body:
        'Under Act 32 nearly every Pennsylvania municipality and school district levies an earned income tax, withheld by your employer and remitted to the tax collector where you work. Because the rate depends on both your home and work addresses, this page does not add it; use DCED\'s address lookup and add that percentage of gross wages to the state figure.',
      ...PA_ACT32,
    },
    {
      title: 'Philadelphia residents and commuters',
      body:
        'Philadelphia\'s Wage Tax replaces the Act 32 tax: 3.74% for residents and 3.43% for non-residents through 30 June 2026, dropping to 3.735% and 3.425% on 1 July 2026. On an $80,000 salary a resident pays roughly $2,990 a year in Wage Tax, more than the $2,456 of state income tax.',
      ...PHILA_WAGE,
    },
    {
      title: 'PA–NJ reciprocal agreement',
      body:
        'New Jersey residents who work in Pennsylvania pay income tax only to New Jersey: give your employer Form REV-419EX to stop Pennsylvania withholding. Pennsylvania residents working in New Jersey give their employer Form NJ-165. The agreement covers wages only, and it does not stop Philadelphia from taxing a New Jersey resident who works in the city.',
      ...PA_NJ_RECIPROCAL,
    },
  ],
  neighbors: [
    { slug: 'new-jersey', name: 'New Jersey', why: 'reciprocal agreement' },
    { slug: 'ohio', name: 'Ohio', why: 'borders Pennsylvania; reciprocal state' },
    { slug: 'new-york', name: 'New York', why: 'borders Pennsylvania; no reciprocity' },
    { slug: 'maryland', name: 'Maryland', why: 'borders Pennsylvania' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      '3.07% flat rate and the no-deduction rule from the PA Department of Revenue; 0.07% UC employee withholding confirmed for 2026 by L&I; Philadelphia Wage Tax rates (3.74%/3.43% through 30 Jun 2026, 3.735%/3.425% from 1 Jul 2026) from the City\'s rate table. Act 32 local EIT is address-specific and not computed.',
  },
};

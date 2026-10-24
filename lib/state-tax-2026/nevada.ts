import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const NV_TAX = {
  source: 'Nevada Department of Taxation, Tax Information for Nevada ("The State of Nevada does not impose a state income tax on individuals")',
  sourceUrl: 'https://tax.nv.gov/about-nevada-department-of-taxation/income-tax-in-nevada',
  retrievedAt: RETRIEVED,
};

export const NEVADA: StateTaxSpec = {
  code: 'NV',
  slug: 'nevada',
  name: 'Nevada',
  taxYear: 2026,
  rateLead: 'no state income tax',
  summary:
    'Nevada has no state income tax on wages, so a Nevada paycheck loses only federal income tax and FICA (7.65% up to the Social Security wage base); there is no state payroll contribution for employees either.',
  wageTax: { kind: 'none', ...NV_TAX },
  deduction: { kind: 'none', single: 0, married: 0, hoh: 0, ...NV_TAX },
  payrollDeductions: [],
  lines: [
    {
      label: 'Nevada state income tax',
      rateText: 'None',
      computed: true,
      detail:
        'The Department of Taxation states that Nevada residents "do not pay state tax on income earned from salaries, wages, or similar compensation" and do not need to file a state income tax return.',
      ...NV_TAX,
    },
    {
      label: 'Local income tax',
      rateText: 'None',
      computed: true,
      detail: 'No Nevada city or county levies a wage tax; with no state return to file there is nothing local to piggyback on either.',
      ...NV_TAX,
    },
  ],
  notes: [
    {
      title: 'Nothing to file at the state level',
      body:
        'Because Nevada imposes no individual income tax, a Nevada resident files only the federal return. Filing status and pre-tax deductions change the federal line on this page; the state line stays at $0 whatever the salary.',
      ...NV_TAX,
    },
    {
      title: 'Commuting to California',
      body:
        'Nevada has no reciprocal agreements because it has no income tax to waive. A Nevada resident who works physically in California, for example around Lake Tahoe, owes California nonresident tax on the wages earned there, and California SDI is withheld from those wages as well.',
      ...NV_TAX,
    },
    {
      title: 'Where Nevada collects instead',
      body:
        'With no tax on wages, Nevada funds the state mainly through sales, gaming and business taxes. For a salaried worker this means the take-home figure is driven almost entirely by federal tax and FICA, so the table on this page is close to a pure federal calculation.',
      ...NV_TAX,
    },
  ],
  neighbors: [
    { slug: 'california', name: 'California', why: 'borders Nevada; 1%–13.3% plus SDI' },
    { slug: 'arizona', name: 'Arizona', why: 'borders Nevada; flat 2.5%' },
    { slug: 'utah', name: 'Utah', why: 'borders Nevada; flat 4.45%' },
    { slug: 'oregon', name: 'Oregon', why: 'borders Nevada; up to 9.9%' },
    { slug: 'idaho', name: 'Idaho', why: 'borders Nevada' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description: 'No individual income tax per the Nevada Department of Taxation. No employee payroll contributions apply. No figures are year-dependent.',
  },
};

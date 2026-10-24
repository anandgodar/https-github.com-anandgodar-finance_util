import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const SD_DOR = {
  source: 'South Dakota Department of Revenue, Individual taxes ("South Dakota is one of seven states that does not impose a state income tax")',
  sourceUrl: 'https://dor.sd.gov/individuals/taxes/',
  retrievedAt: RETRIEVED,
};

export const SOUTH_DAKOTA: StateTaxSpec = {
  code: 'SD',
  slug: 'south-dakota',
  name: 'South Dakota',
  taxYear: 2026,
  rateLead: 'no state income tax',
  summary:
    'South Dakota has no state income tax on wages, so a South Dakota paycheck loses only federal income tax and FICA; there is no state payroll contribution for employees.',
  wageTax: { kind: 'none', ...SD_DOR },
  deduction: { kind: 'none', single: 0, married: 0, hoh: 0, ...SD_DOR },
  payrollDeductions: [],
  lines: [
    {
      label: 'South Dakota state income tax',
      rateText: 'None',
      computed: true,
      detail: 'The Department of Revenue states that South Dakota does not impose a state income tax and refers federal questions to the IRS.',
      ...SD_DOR,
    },
    {
      label: 'Local income tax',
      rateText: 'None',
      computed: true,
      detail: 'No South Dakota city or county levies a wage tax.',
      ...SD_DOR,
    },
  ],
  notes: [
    {
      title: 'Only federal lines on the pay stub',
      body:
        'Without a state income tax, the deductions on a South Dakota paycheck are federal income tax, Social Security (6.2% up to the 2026 wage base) and Medicare (1.45%). The take-home table on this page is therefore a federal calculation with a $0 state line.',
      ...SD_DOR,
    },
    {
      title: 'Commuting into a neighboring state',
      body:
        'South Dakota has no reciprocal agreements because it has no income tax to exchange. Residents who work physically in Minnesota, Iowa, Nebraska or North Dakota owe that state\'s nonresident income tax on the wages earned there.',
      ...SD_DOR,
    },
    {
      title: 'How the state is funded',
      body:
        'South Dakota relies on sales and use taxes and property taxes instead of an income tax, so the cost of living rather than the paycheck is where state taxes show up for most households.',
      ...SD_DOR,
    },
  ],
  neighbors: [
    { slug: 'north-dakota', name: 'North Dakota', why: 'borders South Dakota; 0%–2.5%' },
    { slug: 'minnesota', name: 'Minnesota', why: 'borders South Dakota; 5.35%–9.85% plus Paid Leave' },
    { slug: 'nebraska', name: 'Nebraska', why: 'borders South Dakota; 2.46%–4.55%' },
    { slug: 'iowa', name: 'Iowa', why: 'borders South Dakota; flat 3.8%' },
    { slug: 'wyoming', name: 'Wyoming', why: 'borders South Dakota; no income tax either' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description: 'No individual income tax per the South Dakota Department of Revenue. No employee payroll contributions apply. No figures are year-dependent.',
  },
};

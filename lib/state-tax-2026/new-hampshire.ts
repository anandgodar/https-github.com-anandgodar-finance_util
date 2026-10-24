import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const NH_DRA = {
  source: 'New Hampshire Department of Revenue Administration, Interest & Dividends Tax ("repealed for taxable periods beginning after December 31, 2024"; "does not have an income tax on an individual\'s reported W-2 wages")',
  sourceUrl: 'https://revenue.nh.gov/taxes-glance/interest-dividends-tax',
  retrievedAt: RETRIEVED,
};

export const NEW_HAMPSHIRE: StateTaxSpec = {
  code: 'NH',
  slug: 'new-hampshire',
  name: 'New Hampshire',
  taxYear: 2026,
  rateLead: 'no tax on wages',
  summary:
    'New Hampshire does not tax wages, and since 2025 it no longer taxes interest and dividends either, so a New Hampshire paycheck loses only federal income tax and FICA.',
  wageTax: { kind: 'none', ...NH_DRA },
  deduction: { kind: 'none', single: 0, married: 0, hoh: 0, ...NH_DRA },
  payrollDeductions: [],
  lines: [
    {
      label: 'New Hampshire income tax on wages',
      rateText: 'None',
      computed: true,
      detail: 'The Department of Revenue Administration states that New Hampshire "does not have an income tax on an individual\'s reported W-2 wages."',
      ...NH_DRA,
    },
    {
      label: 'Interest & Dividends Tax',
      rateText: 'Repealed from 2025',
      computed: true,
      detail:
        'The 5% tax on interest and dividends was phased down to 4% and then 3% and is repealed for taxable periods beginning after 31 December 2024. It never applied to wages.',
      ...NH_DRA,
    },
    {
      label: 'Local income tax',
      rateText: 'None',
      computed: true,
      detail: 'No New Hampshire city or town taxes wages.',
      ...NH_DRA,
    },
  ],
  notes: [
    {
      title: 'The last income tax is gone',
      body:
        'New Hampshire never taxed wages, but until 2024 residents with interest and dividend income above an exemption paid the Interest & Dividends Tax. The rate stepped down from 5% to 4% and then 3%, and the tax is repealed for periods beginning after 31 December 2024, so 2026 is the second year with no individual income tax of any kind.',
      ...NH_DRA,
    },
    {
      title: 'Working in Massachusetts',
      body:
        'New Hampshire has no reciprocal agreements because it has no wage tax to waive. A New Hampshire resident who works physically in Massachusetts owes Massachusetts tax on those wages and pays Massachusetts Paid Family and Medical Leave contributions through payroll; days worked from home in New Hampshire are a separate question to settle with the employer.',
      ...NH_DRA,
    },
    {
      title: 'What the table shows',
      body:
        'With no state tax on wages, the take-home figures on this page are federal income tax (after the standard deduction) and FICA only. Filing status and pre-tax 401(k) or health deductions change the federal line; the state line stays at $0.',
      ...NH_DRA,
    },
  ],
  neighbors: [
    { slug: 'massachusetts', name: 'Massachusetts', why: 'borders New Hampshire; 5% plus surtax' },
    { slug: 'maine', name: 'Maine', why: 'borders New Hampshire; 5.8%–7.15%' },
    { slug: 'vermont', name: 'Vermont', why: 'borders New Hampshire; 3.35%–8.75%' },
    { slug: 'tennessee', name: 'Tennessee', why: 'also repealed its interest and dividends tax' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'No tax on W-2 wages and the Interest & Dividends Tax repealed for periods beginning after 31 December 2024, per the New Hampshire Department of Revenue Administration. No employee payroll contributions apply.',
  },
};

import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const MN_2026 = {
  source: 'Minnesota Department of Revenue, "Minnesota income tax brackets, standard deduction and dependent exemption amounts for tax year 2026" (16 Dec 2025)',
  sourceUrl: 'https://www.revenue.state.mn.us/mndor-pp/21641',
  retrievedAt: RETRIEVED,
};

const MN_PAID_LEAVE = {
  source: 'Minnesota Paid Leave, Premium rate and contributions ("For 2026 and 2027, the Paid Leave premium rate is 0.88%"; "employers can collect up to 0.44% from employees")',
  sourceUrl: 'https://pl.mn.gov/resources/calculators/premium-rate-and-contributions',
  retrievedAt: RETRIEVED,
};

const MN_268B = {
  source: 'Minnesota Statutes §268B.14 (subd. 3: employers pay at least 50% of premiums; subd. 4: wages subject to premium capped at the Social Security maximum)',
  sourceUrl: 'https://www.revisor.mn.gov/statutes/2025/2025-10-19%2012:30:42+00:00/cite/268B.14/pdf',
  retrievedAt: RETRIEVED,
};

const MN_MWR = {
  source: 'Minnesota Department of Revenue, Form MWR (Tax Year 2026) — Reciprocity Exemption/Affidavit of Residency "For Michigan and North Dakota residents who work in Minnesota"',
  sourceUrl: 'https://www.revenue.state.mn.us/sites/default/files/2025-12/mwr.pdf',
  retrievedAt: RETRIEVED,
};

export const MINNESOTA: StateTaxSpec = {
  code: 'MN',
  slug: 'minnesota',
  name: 'Minnesota',
  taxYear: 2026,
  rateLead: '5.35%–9.85% tax + 0.44% Paid Leave',
  summary:
    'Minnesota taxes 2026 wages at 5.35% to 9.85% after a $15,300 standard deduction for a single filer ($30,600 joint), and from 1 January 2026 employers may also withhold up to 0.44% of wages for the new Minnesota Paid Leave program.',
  wageTax: {
    kind: 'brackets',
    single: [
      { upTo: 33310, rate: 0.0535 },
      { upTo: 109430, rate: 0.068 },
      { upTo: 203150, rate: 0.0785 },
      { upTo: null, rate: 0.0985 },
    ],
    married: [
      { upTo: 48700, rate: 0.0535 },
      { upTo: 193480, rate: 0.068 },
      { upTo: 337930, rate: 0.0785 },
      { upTo: null, rate: 0.0985 },
    ],
    hoh: [
      { upTo: 41010, rate: 0.0535 },
      { upTo: 164800, rate: 0.068 },
      { upTo: 270060, rate: 0.0785 },
      { upTo: null, rate: 0.0985 },
    ],
    ...MN_2026,
  },
  deduction: { kind: 'standard', single: 15300, married: 30600, hoh: 23000, ...MN_2026 },
  payrollDeductions: [
    {
      id: 'mn-paid-leave',
      label: 'Minnesota Paid Leave (employee share)',
      rate: 0.0044,
      wageBase: 184500,
      ...MN_PAID_LEAVE,
      note: 'Maximum employee share; an employer may choose to pay more of the 0.88% premium. Wage cap = 2026 Social Security maximum ($184,500) per §268B.14 subd. 4.',
    },
  ],
  lines: [
    {
      label: 'Minnesota state income tax',
      rateText: '5.35% / 6.8% / 7.85% / 9.85% (2026)',
      computed: true,
      detail:
        'Single brackets for 2026: 5.35% up to $33,310, 6.8% to $109,430, 7.85% to $203,150 and 9.85% above. Joint filers: $48,700 / $193,480 / $337,930. Head of household: $41,010 / $164,800 / $270,060. The thresholds are adjusted for inflation each year.',
      ...MN_2026,
    },
    {
      label: 'Standard deduction',
      rateText: '$15,300 single / $30,600 joint / $23,000 head of household (2026)',
      computed: true,
      detail:
        'The calculator applies the full standard deduction at every income. The $5,300 per-dependent exemption is not counted.',
      ...MN_2026,
    },
    {
      label: 'Minnesota Paid Leave (employee share)',
      rateText: 'Up to 0.44% of wages to $184,500 (2026)',
      computed: true,
      detail:
        'Premiums began on 1 January 2026 at 0.88% of wages (0.27% family leave, 0.61% medical leave). Employers must pay at least half and may withhold up to 0.44% from employees; the calculator assumes the employer withholds the maximum. On $60,000 that is $264 a year.',
      ...MN_PAID_LEAVE,
    },
  ],
  notes: [
    {
      title: 'Reciprocity with Michigan and North Dakota',
      body:
        'Residents of Michigan and North Dakota who work in Minnesota can file Form MWR with their employer so that Minnesota income tax is not withheld; their wages are taxed by their home state instead. The form states that employees who live in any other state, including Minnesota, cannot use it.',
      ...MN_MWR,
    },
    {
      title: 'Paid Leave is new on 2026 pay stubs',
      body:
        'Minnesota Paid Leave premiums started on 1 January 2026, so many Minnesota workers see a new deduction this year. The 0.88% premium is shared: the law requires employers to pay at least half, and the Paid Leave program says employers can collect up to 0.44% from employees. Small employers pay a lower 0.66% total rate.',
      ...MN_PAID_LEAVE,
    },
    {
      title: 'Wages above the Social Security maximum',
      body:
        'Paid Leave premiums stop once wages reach the Social Security taxable maximum for the year, $184,500 in 2026, so the employee share tops out at about $812. Minnesota income tax has no such cap: the 9.85% bracket applies to all single-filer taxable income above $203,150.',
      ...MN_268B,
    },
  ],
  neighbors: [
    { slug: 'wisconsin', name: 'Wisconsin', why: 'borders Minnesota; 3.5%–7.65%' },
    { slug: 'north-dakota', name: 'North Dakota', why: 'borders Minnesota; reciprocal state' },
    { slug: 'iowa', name: 'Iowa', why: 'borders Minnesota; flat 3.8%' },
    { slug: 'south-dakota', name: 'South Dakota', why: 'borders Minnesota; no income tax' },
    { slug: 'michigan', name: 'Michigan', why: 'reciprocal state' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      '2026 brackets and standard deduction from the Minnesota Department of Revenue (16 Dec 2025). Paid Leave 0.88% premium with up to 0.44% withheld from employees (Minnesota Paid Leave), capped at the Social Security maximum (§268B.14). The dependent exemption is not modelled.',
  },
};

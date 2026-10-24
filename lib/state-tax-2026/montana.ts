import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const MT_HB337 = {
  source: 'Montana Department of Revenue, "HB 337" news — Tax Year 2026: 4.7% up to $47,500 single / $71,250 head of household / $95,000 joint, 5.65% above',
  sourceUrl: 'https://revenue.mt.gov/news/recent-news/HB-337',
  retrievedAt: RETRIEVED,
};

const MT_WH = {
  source: 'Montana Department of Revenue, 2026 Withholding Updates — top rate 5.65%; withholding now uses the federal standard deduction for each filing status',
  sourceUrl: 'https://revenue.mt.gov/news/recent-news/2026-withholding-updates',
  retrievedAt: RETRIEVED,
};

const ND_RECIP = {
  source: 'North Dakota Office of State Tax Commissioner, I Am a Nonresident — reciprocal agreement with Minnesota and Montana; wages taxable only to the resident state (Form NDW-R)',
  sourceUrl: 'https://www.tax.nd.gov/non-resident',
  retrievedAt: RETRIEVED,
};

export const MONTANA: StateTaxSpec = {
  code: 'MT',
  slug: 'montana',
  name: 'Montana',
  taxYear: 2026,
  rateLead: '4.7%–5.65% state tax',
  summary:
    'Montana taxes 2026 income at 4.7% up to $47,500 for a single filer ($95,000 joint, $71,250 head of household) and 5.65% above, down from 5.9%, after the federal standard deduction; the top rate falls to 5.4% in 2027.',
  wageTax: {
    kind: 'brackets',
    single: [
      { upTo: 47500, rate: 0.047 },
      { upTo: null, rate: 0.0565 },
    ],
    married: [
      { upTo: 95000, rate: 0.047 },
      { upTo: null, rate: 0.0565 },
    ],
    hoh: [
      { upTo: 71250, rate: 0.047 },
      { upTo: null, rate: 0.0565 },
    ],
    ...MT_HB337,
  },
  deduction: { kind: 'standard', single: 16100, married: 32200, hoh: 24150, ...MT_WH },
  payrollDeductions: [],
  lines: [
    {
      label: 'Montana state income tax',
      rateText: '4.7% / 5.65% (2026)',
      computed: true,
      detail:
        'HB 337 sets two rates on ordinary taxable income for 2026: 4.7% up to $47,500 single and married-separate, $71,250 head of household and $95,000 joint, and 5.65% above. Long-term capital gains keep their own 3.0% and 4.1% rates.',
      ...MT_HB337,
    },
    {
      label: 'Standard deduction (federal amount)',
      rateText: '$16,100 single / $32,200 joint / $24,150 head of household',
      computed: true,
      detail: 'The Department\'s 2026 withholding uses the federal standard deduction for each filing status and no longer uses Montana personal exemptions or Montana deductions, so the calculator applies the federal amounts.',
      ...MT_WH,
    },
  ],
  notes: [
    {
      title: 'Reciprocity with North Dakota',
      body:
        'North Dakota has a reciprocal agreement with Montana: wages a Montana resident earns working in North Dakota are taxable only to Montana, and the employee can file Form NDW-R so that North Dakota tax is not withheld.',
      ...ND_RECIP,
    },
    {
      title: 'Wider 4.7% band in 2026 and 2027',
      body:
        'HB 337 widens the 4.7% bracket and lowers the top rate in two steps: for 2026 the 4.7% band runs to $47,500 single with 5.65% above; for 2027 it runs to $65,000 with 5.4% above. A single filer on $60,000 has $43,900 of taxable income and owes 4.7% on all of it, $2,063.30.',
      ...MT_HB337,
    },
    {
      title: 'Withholding follows the federal deduction',
      body:
        'From 2026 Montana withholding uses the federal standard deduction for the employee\'s filing status and drops Montana exemptions, so employees who want more withheld must ask for an additional amount.',
      ...MT_WH,
    },
  ],
  neighbors: [
    { slug: 'north-dakota', name: 'North Dakota', why: 'borders Montana; reciprocal state' },
    { slug: 'idaho', name: 'Idaho', why: 'borders Montana; 5.3%' },
    { slug: 'wyoming', name: 'Wyoming', why: 'borders Montana; no income tax' },
    { slug: 'south-dakota', name: 'South Dakota', why: 'borders Montana; no income tax' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Montana 2026 rates and thresholds from the DOR HB 337 notice; the federal standard deduction is applied as in the Department\'s 2026 withholding method. Reciprocity per the North Dakota Tax Commissioner.',
  },
};

import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const KS_NOTICE = {
  source: 'Kansas Department of Revenue, Notice 24-08 — individual income tax changes "for tax year 2024, and all tax years thereafter" (K.S.A. 79-32,110, 79-32,119, 79-32,121)',
  sourceUrl: 'https://www.ksrevenue.gov/taxnotices/notice24-08.pdf',
  retrievedAt: RETRIEVED,
};

const KS_BOOKLET = {
  source: 'Kansas Department of Revenue, Income Tax Booklet 2025 — standard deduction $3,605 single / $8,240 joint / $6,180 head of household; exemption allowance $9,160 / $18,320',
  sourceUrl: 'https://ksrevenue.gov/incomebook25.html',
  retrievedAt: RETRIEVED,
};

export const KANSAS: StateTaxSpec = {
  code: 'KS',
  slug: 'kansas',
  name: 'Kansas',
  taxYear: 2026,
  rateLead: '5.2%–5.58% state tax',
  summary:
    'Kansas has two income tax rates — 5.2% on the first $23,000 of taxable income for a single filer ($46,000 joint) and 5.58% above — applied after a $3,605 standard deduction and a $9,160 personal exemption, so a single filer pays nothing on the first $12,765 of wages.',
  wageTax: {
    kind: 'brackets',
    single: [
      { upTo: 23000, rate: 0.052 },
      { upTo: null, rate: 0.0558 },
    ],
    married: [
      { upTo: 46000, rate: 0.052 },
      { upTo: null, rate: 0.0558 },
    ],
    hoh: [
      { upTo: 23000, rate: 0.052 },
      { upTo: null, rate: 0.0558 },
    ],
    ...KS_NOTICE,
  },
  deduction: { kind: 'standard', single: 12765, married: 26560, hoh: 15340, ...KS_NOTICE },
  payrollDeductions: [],
  lines: [
    {
      label: 'Kansas state income tax',
      rateText: '5.2% / 5.58% (thresholds $23,000 single, $46,000 joint)',
      computed: true,
      detail:
        'K.S.A. 79-32,110 as amended for 2024 and later years: 5.2% up to $23,000 of taxable income ($46,000 married filing jointly), then $1,196 ($2,392 joint) plus 5.58% of the excess. Heads of household use the single thresholds.',
      ...KS_NOTICE,
    },
    {
      label: 'Standard deduction',
      rateText: '$3,605 single / $8,240 joint / $6,180 head of household',
      computed: true,
      detail: 'Set by K.S.A. 79-32,119 for 2024 and later years; the 2025 booklet prints the same amounts.',
      ...KS_BOOKLET,
    },
    {
      label: 'Personal exemption',
      rateText: '$9,160 single or head of household / $18,320 joint',
      computed: true,
      detail: 'K.S.A. 79-32,121 allows $9,160 for single, head-of-household and married-separate filers and $18,320 on a joint return, plus $2,320 per dependent (dependents not counted here).',
      ...KS_NOTICE,
    },
  ],
  notes: [
    {
      title: 'Two rates since 2024',
      body:
        'The 2024 law set two rates for tax year 2024 and all later years. A single filer on $60,000 has $47,235 of taxable income and owes $1,196 on the first $23,000 plus 5.58% of $24,235, or $2,548.31.',
      ...KS_NOTICE,
    },
    {
      title: 'Large exemption, high starting rate',
      body:
        'Kansas starts taxing at 5.2% rather than with a low bottom bracket, but the $9,160 personal exemption and $3,605 standard deduction shelter the first $12,765 of a single filer\'s income and $26,560 of a married couple\'s.',
      ...KS_BOOKLET,
    },
    {
      title: 'Amounts are written into the statute',
      body:
        'The 2024 changes set the deduction, exemption and bracket amounts as dollar figures in K.S.A. 79-32,110, 79-32,119 and 79-32,121 for tax year 2024 and thereafter, so they apply unchanged in 2026 unless the Legislature amends them.',
      ...KS_NOTICE,
    },
  ],
  neighbors: [
    { slug: 'missouri', name: 'Missouri', why: 'borders Kansas; up to 4.7%' },
    { slug: 'oklahoma', name: 'Oklahoma', why: 'borders Kansas; up to 4.5%' },
    { slug: 'nebraska', name: 'Nebraska', why: 'borders Kansas; 2.46%–4.55%' },
    { slug: 'colorado', name: 'Colorado', why: 'borders Kansas; flat 4.4%' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Kansas rates, standard deduction and exemptions as set for tax year 2024 and thereafter (KDOR Notice 24-08), confirmed in the 2025 income tax booklet. Dependent exemptions not counted.',
  },
};

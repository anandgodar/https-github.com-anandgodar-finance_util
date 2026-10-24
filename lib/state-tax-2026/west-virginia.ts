import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const WV_SB392 = {
  source: 'West Virginia Legislature, SB 392 (2026 regular session) enrolled — W. Va. Code §11-21-4j rate schedule',
  sourceUrl: 'https://www.wvlegislature.gov/Bill_Text_HTML/2026_SESSIONS/RS/bills/sb392%20sub1%20enr.pdf',
  retrievedAt: RETRIEVED,
};

const WV_TAX = {
  source: 'West Virginia Tax Division, Personal Income Tax Reduction Bill — §11-21-4j effective 12 June 2026, "retroactive to January 1, 2026"',
  sourceUrl: 'https://tax.wv.gov/Individuals/Pages/PersonalIncomeTaxReductionBill.aspx',
  retrievedAt: RETRIEVED,
};

const WV_IT140 = {
  source: 'West Virginia Tax Division, Form IT-140 (2024, latest year on the Tax Division\'s prior-year forms page) — line 6 "Total Exemptions … x $2,000"; Schedule A special nonresident income for residents of Kentucky, Maryland, Ohio, Pennsylvania or Virginia',
  sourceUrl: 'https://tax.wv.gov/Documents/PIT/2024/it140.2024.pdf',
  retrievedAt: RETRIEVED,
};

const WV_BRACKETS = [
  { upTo: 10000, rate: 0.0211 },
  { upTo: 25000, rate: 0.0281 },
  { upTo: 40000, rate: 0.0316 },
  { upTo: 60000, rate: 0.0422 },
  { upTo: null, rate: 0.0458 },
];

export const WEST_VIRGINIA: StateTaxSpec = {
  code: 'WV',
  slug: 'west-virginia',
  name: 'West Virginia',
  taxYear: 2026,
  rateLead: '2.11%–4.58% state tax',
  summary:
    'West Virginia taxes 2026 income at 2.11% to 4.58% after a $2,000 personal exemption — rates cut about 5% by SB 392, retroactive to 1 January 2026 — with one schedule for single, head-of-household and joint filers.',
  wageTax: { kind: 'brackets', single: WV_BRACKETS, married: WV_BRACKETS, hoh: WV_BRACKETS, ...WV_SB392 },
  deduction: { kind: 'exemption', single: 2000, married: 4000, hoh: 2000, ...WV_IT140 },
  payrollDeductions: [],
  lines: [
    {
      label: 'West Virginia state income tax',
      rateText: '2.11% / 2.81% / 3.16% / 4.22% / 4.58% (2026)',
      computed: true,
      detail:
        '2.11% on the first $10,000, 2.81% to $25,000, 3.16% to $40,000, 4.22% to $60,000 and 4.58% above. The same thresholds apply to single, head-of-household and married-joint returns; married-separate filers use half of each.',
      ...WV_SB392,
    },
    {
      label: 'Personal exemption',
      rateText: '$2,000 per exemption',
      computed: true,
      detail: 'West Virginia has no standard deduction; each exemption is worth $2,000. The calculator counts one for a single or head-of-household filer and two for a joint return.',
      ...WV_IT140,
    },
  ],
  notes: [
    {
      title: 'A retroactive 2026 cut',
      body:
        'SB 392 was signed on 31 March 2026 and codified in §11-21-4j effective 12 June 2026, retroactive to 1 January 2026, lowering the top rate to 4.58%. A single filer on $60,000 has $58,000 of taxable income and owes $1,106.50 plus 4.22% of $18,000, or $1,866.10.',
      ...WV_TAX,
    },
    {
      title: 'Commuters from five states',
      body:
        'West Virginia\'s IT-140 lets residents of Kentucky, Maryland, Ohio, Pennsylvania and Virginia whose only West Virginia income is wages file as special nonresidents on Schedule A. Virginia, Ohio and Kentucky list West Virginia among their reciprocal states for wages.',
      ...WV_IT140,
    },
    {
      title: 'One schedule for couples',
      body:
        'Because married couples filing jointly use the same brackets as single filers, a two-earner household reaches the 4.58% rate at $60,000 of combined taxable income. Only the number of $2,000 exemptions differs.',
      ...WV_SB392,
    },
  ],
  neighbors: [
    { slug: 'virginia', name: 'Virginia', why: 'borders West Virginia; reciprocal state' },
    { slug: 'pennsylvania', name: 'Pennsylvania', why: 'borders West Virginia; flat 3.07%' },
    { slug: 'ohio', name: 'Ohio', why: 'borders West Virginia; reciprocal state' },
    { slug: 'kentucky', name: 'Kentucky', why: 'borders West Virginia; reciprocal state' },
    { slug: 'maryland', name: 'Maryland', why: 'borders West Virginia; reciprocal state' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'W. Va. Code §11-21-4j rates from SB 392 (2026), retroactive to 1 January 2026 per the Tax Division; $2,000 per exemption from Form IT-140. No standard deduction.',
  },
};

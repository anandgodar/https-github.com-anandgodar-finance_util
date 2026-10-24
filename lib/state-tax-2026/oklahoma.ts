import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const OK_HB2764 = {
  source: 'Oklahoma Legislature, HB 2764 (2025) enrolled — 68 O.S. §2355(D), rates "for tax year 2026": 0% / 2.5% / 3.5% / 4.5%',
  sourceUrl: 'https://www.oklegislature.gov/cf_pdf/2025-26%20ENR/hB/HB2764%20ENR.PDF',
  retrievedAt: RETRIEVED,
};

const OK_511 = {
  source: 'Oklahoma Tax Commission, 2025 Form 511 packet — standard deduction $6,350 single / $12,700 joint / $9,350 head of household',
  sourceUrl: 'https://oklahoma.gov/content/dam/ok/en/tax/documents/forms/individuals/current/511-Pkt.pdf',
  retrievedAt: RETRIEVED,
};

const OK_OW2 = {
  source: 'Oklahoma Tax Commission, Packet OW-2, 2026 Income Tax Withholding Tables — personal exemption amount of $1,000',
  sourceUrl: 'https://oklahoma.gov/content/dam/ok/en/tax/documents/resources/publications/businesses/withholding-tables/WHTables-2026.pdf',
  retrievedAt: RETRIEVED,
};

const OK_SINGLE = [
  { upTo: 3750, rate: 0 },
  { upTo: 4900, rate: 0.025 },
  { upTo: 7200, rate: 0.035 },
  { upTo: null, rate: 0.045 },
];
const OK_JOINT = [
  { upTo: 7500, rate: 0 },
  { upTo: 9800, rate: 0.025 },
  { upTo: 14400, rate: 0.035 },
  { upTo: null, rate: 0.045 },
];

export const OKLAHOMA: StateTaxSpec = {
  code: 'OK',
  slug: 'oklahoma',
  name: 'Oklahoma',
  taxYear: 2026,
  rateLead: '0%–4.5% state tax',
  summary:
    'Oklahoma\'s 2026 schedule has three rates after a 0% bracket — 2.5%, 3.5% and a top 4.5% above $7,200 of taxable income for a single filer ($14,400 joint) — applied after a $6,350 standard deduction and $1,000 personal exemption.',
  wageTax: { kind: 'brackets', single: OK_SINGLE, married: OK_JOINT, hoh: OK_JOINT, ...OK_HB2764 },
  deduction: { kind: 'standard', single: 7350, married: 14700, hoh: 10350, ...OK_511 },
  payrollDeductions: [],
  lines: [
    {
      label: 'Oklahoma state income tax',
      rateText: '0% / 2.5% / 3.5% / 4.5% (2026)',
      computed: true,
      detail:
        'Single and married-separate: 0% on the first $3,750, 2.5% on the next $1,150, 3.5% on the next $2,300, 4.5% on the rest. Married filing jointly, surviving spouses and heads of household: 0% on $7,500, 2.5% on $2,300, 3.5% on $4,600, 4.5% above $14,400. No deduction for federal income tax is allowed.',
      ...OK_HB2764,
    },
    {
      label: 'Standard deduction',
      rateText: '$6,350 single / $12,700 joint / $9,350 head of household',
      computed: true,
      detail: 'Amounts from the 2025 Form 511 instructions; the calculator adds a $1,000 personal exemption for each filer (two on a joint return), giving $7,350 / $14,700 / $10,350.',
      ...OK_511,
    },
    {
      label: 'Personal exemption',
      rateText: '$1,000 per exemption',
      computed: true,
      detail: 'The 2026 withholding tables describe the withholding allowance as the Oklahoma personal exemption amount of $1,000 per year. Dependents are not counted here.',
      ...OK_OW2,
    },
  ],
  notes: [
    {
      title: 'Six brackets became three for 2026',
      body:
        'HB 2764 rewrote 68 O.S. §2355 for tax year 2026: the old six-bracket ladder topping out at 4.75% is replaced by a 0% band and three rates topping out at 4.5%. A single filer on $60,000 has $52,650 of taxable income and owes $109.25 on the lower bands plus 4.5% of $45,450, about $2,155.',
      ...OK_HB2764,
    },
    {
      title: 'Further cuts are possible from 2027',
      body:
        'The same act lets the State Board of Equalization certify revenue growth each December, starting in 2026; each certification cuts every rate by 0.25 percentage point the following year until the rates reach zero. Figures on this page are for 2026 only.',
      ...OK_HB2764,
    },
    {
      title: 'Heads of household use the joint brackets',
      body:
        'Section 2355(D)(2) applies the wider joint schedule to married couples filing jointly, surviving spouses and heads of household, so a head-of-household filer reaches 4.5% only above $14,400 of taxable income.',
      ...OK_HB2764,
    },
  ],
  neighbors: [
    { slug: 'texas', name: 'Texas', why: 'borders Oklahoma; no income tax' },
    { slug: 'kansas', name: 'Kansas', why: 'borders Oklahoma; 5.2%–5.58%' },
    { slug: 'arkansas', name: 'Arkansas', why: 'borders Oklahoma; up to 3.9%' },
    { slug: 'missouri', name: 'Missouri', why: 'borders Oklahoma; up to 4.7%' },
    { slug: 'colorado', name: 'Colorado', why: 'borders Oklahoma; flat 4.4%' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    priorYearFigures: ['standard deduction amounts are from the 2025 Form 511 instructions (the 2026 Form 511 was not yet published)'],
    description:
      '2026 rates and brackets from HB 2764 (68 O.S. §2355(D)); standard deduction from the 2025 Form 511 packet; $1,000 personal exemption from the 2026 OW-2 withholding tables. Dependents not counted.',
  },
};

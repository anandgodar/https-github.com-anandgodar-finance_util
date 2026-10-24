import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const LA_RS4732 = {
  source: 'Louisiana Revised Statutes §47:32 (as amended by Acts 2024, 3rd Ex. Sess., No. 11) — tax "computed at the rate of three percent on net income"',
  sourceUrl: 'https://www.legis.la.gov/legis/Law.aspx?d=101946',
  retrievedAt: RETRIEVED,
};

const LA_R1306 = {
  source: 'Louisiana Department of Revenue, R-1306 (1/26) Withholding Tables and Instructions — formulas based on a 3.09% withholding rate; standard deduction $12,875 single / $25,750 joint or head of household',
  sourceUrl: 'https://dam.ldr.la.gov/taxforms/1306-1-26.pdf',
  retrievedAt: RETRIEVED,
};

export const LOUISIANA: StateTaxSpec = {
  code: 'LA',
  slug: 'louisiana',
  name: 'Louisiana',
  taxYear: 2026,
  rateLead: 'flat 3% state tax',
  summary:
    'Louisiana taxes 2026 income at a flat 3% after a standard deduction of $12,875 for a single filer ($25,750 for joint or head-of-household filers); employers withhold at a slightly higher 3.09%, so most workers get a small refund.',
  wageTax: { kind: 'flat', rate: 0.03, ...LA_RS4732 },
  deduction: { kind: 'standard', single: 12875, married: 25750, hoh: 25750, ...LA_R1306 },
  payrollDeductions: [],
  lines: [
    {
      label: 'Louisiana state income tax',
      rateText: '3% flat',
      computed: true,
      detail:
        'R.S. 47:32, as amended in the 2024 third extraordinary session, sets the individual rate at three percent of net income. The calculator uses the 3% liability rate.',
      ...LA_RS4732,
    },
    {
      label: 'Standard deduction',
      rateText: '$12,875 single / $25,750 joint or head of household (2026)',
      computed: true,
      detail: 'These are the 2026 amounts in the Department\'s withholding formulas. Married-separate filers use the single amount.',
      ...LA_R1306,
    },
  ],
  notes: [
    {
      title: 'One 3% rate',
      body:
        'Since the 2024 third extraordinary session, R.S. 47:32 computes Louisiana tax at three percent on net income. With the large standard deduction, a single filer on $60,000 owes 3% of $47,125, or $1,413.75.',
      ...LA_RS4732,
    },
    {
      title: 'Why withholding is a little higher than the tax',
      body:
        'The Department\'s 2026 formulas withhold at 3.09% rather than 3%. On the same $60,000 salary that is about $1,456 withheld against $1,414 owed, so expect roughly $40 back when you file. The table on this page shows the tax owed, not the amount withheld.',
      ...LA_R1306,
    },
    {
      title: 'Head of household gets the joint deduction',
      body:
        'Louisiana\'s formula gives head-of-household filers the same $25,750 deduction as married couples filing jointly, double the single amount, while the 3% rate is the same for everyone.',
      ...LA_R1306,
    },
  ],
  neighbors: [
    { slug: 'texas', name: 'Texas', why: 'borders Louisiana; no income tax' },
    { slug: 'mississippi', name: 'Mississippi', why: 'borders Louisiana; 4% above $10,000' },
    { slug: 'arkansas', name: 'Arkansas', why: 'borders Louisiana; up to 3.9%' },
    { slug: 'alabama', name: 'Alabama', why: 'Gulf Coast; 2%–5%' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Flat 3% liability rate per R.S. 47:32; 2026 standard deduction from LDR R-1306 (1/26), which withholds at 3.09%. The table shows tax owed at 3%.',
  },
};

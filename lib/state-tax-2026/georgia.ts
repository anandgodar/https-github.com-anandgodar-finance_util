import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-23';

const GA_WITHHOLDING_GUIDE = {
  source: 'Georgia Department of Revenue, 2026 Employer\'s Withholding Tax Guide (revised September 2026; rate 4.99% retroactive to 1 Jan 2026 under HB 463)',
  sourceUrl: 'https://dor.georgia.gov/document/document/2026-employers-tax-guide-updated-june-2026/download',
  retrievedAt: RETRIEVED,
};

const GA_HB463 = {
  source: 'Georgia General Assembly, HB 463 (as passed House and Senate): O.C.G.A. 48-7-20(a.1) rate "5.19 percent 4.99 percent" for taxable years beginning on or after 1 Jan 2026; 48-7-27 standard deduction "$12,000.00 $15,000.00" single / "$24,000.00 $30,000.00" joint; 48-7-26(b) dependent exemption "$4,000.00 $5,000.00"',
  sourceUrl: 'https://www.legis.ga.gov/api/legislation/document/20252026/249080',
  retrievedAt: '2026-10-24',
};

export const GEORGIA: StateTaxSpec = {
  code: 'GA',
  slug: 'georgia',
  name: 'Georgia',
  taxYear: 2026,
  rateLead: 'flat 4.99% state tax',
  summary:
    'Georgia taxes wages at a flat 4.99% for 2026 (cut from 5.19% by HB 463, retroactive to 1 January), after a $15,000 standard deduction for a single filer or $30,000 for a married couple filing jointly; there are no local income taxes and no employee payroll contributions.',
  wageTax: {
    kind: 'flat',
    rate: 0.0499,
    ...GA_WITHHOLDING_GUIDE,
  },
  deduction: {
    kind: 'standard',
    single: 15000,
    married: 30000,
    hoh: 15000,
    ...GA_WITHHOLDING_GUIDE,
    note: 'Georgia has no personal exemption for the taxpayer; the $5,000 dependent deduction is not modelled.',
  },
  payrollDeductions: [],
  lines: [
    {
      label: 'Georgia state income tax',
      rateText: '4.99% flat (2026)',
      computed: true,
      detail:
        'HB 463, signed 11 May 2026, cut the flat rate from 5.19% to 4.99% retroactive to taxable years beginning on or after 1 January 2026. Employers could withhold at 5.19% until the change took effect, so 2026 refunds may run higher than usual. The rate is scheduled to fall further from 2027 until it reaches 3.99%.',
      ...GA_WITHHOLDING_GUIDE,
    },
    {
      label: 'Standard deduction',
      rateText: '$15,000 single or head of household / $30,000 married filing jointly',
      computed: true,
      detail: 'Raised from $12,000 / $24,000 by HB 463 for 2026. The dependent deduction rose from $4,000 to $5,000 per dependent and is not included here.',
      ...GA_WITHHOLDING_GUIDE,
    },
    {
      label: 'Local income tax',
      rateText: 'None',
      computed: true,
      detail: 'No Georgia city or county levies an income tax on wages.',
      ...GA_WITHHOLDING_GUIDE,
    },
  ],
  notes: [
    {
      title: 'What the 2026 cut is worth',
      body:
        'Two changes stack for 2026: the rate fell 0.2 points and the single standard deduction rose $3,000. On a $60,000 salary a single filer owes 4.99% of $45,000, or $2,245.50, against $2,491.20 under the 2025 rules (5.19% of $48,000) — about $246 a year less. Because the law passed in May, paychecks early in 2026 were withheld at the old rate.',
      ...GA_HB463,
    },
    {
      title: 'Nonresidents and Georgia residents working elsewhere',
      body:
        'Georgia has no reciprocal agreements. Employers must withhold Georgia tax on a nonresident\'s wages earned in Georgia once more than 5% of the employee\'s total earned income, or more than $5,000, is attributable to Georgia. Georgia residents who work in another state are subject to that state\'s withholding and claim a credit on their Georgia return; if the work state does not withhold, Georgia tax is withheld instead.',
      ...GA_WITHHOLDING_GUIDE,
    },
    {
      title: 'Flat rate, so filing status only moves the deduction',
      body:
        'Because every dollar above the standard deduction is taxed at the same 4.99%, married filing jointly changes Georgia tax only through the larger $30,000 deduction (worth $748.50 a year at 4.99%). Federal tax, by contrast, moves through both the deduction and wider brackets.',
      ...GA_WITHHOLDING_GUIDE,
    },
  ],
  neighbors: [
    { slug: 'florida', name: 'Florida', why: 'borders Georgia; no income tax' },
    { slug: 'tennessee', name: 'Tennessee', why: 'borders Georgia; no income tax' },
    { slug: 'north-carolina', name: 'North Carolina', why: 'borders Georgia; flat 3.99%' },
    { slug: 'south-carolina', name: 'South Carolina', why: 'borders Georgia' },
    { slug: 'alabama', name: 'Alabama', why: 'borders Georgia' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      '4.99% flat rate and $15,000 / $30,000 standard deductions read from the Georgia DOR 2026 Employer\'s Withholding Tax Guide (revised September 2026) and confirmed against the HB 463 text as passed (struck 2025 amounts and inserted 2026 amounts), retroactive to 1 Jan 2026. The dependent deduction is not modelled.',
  },
};

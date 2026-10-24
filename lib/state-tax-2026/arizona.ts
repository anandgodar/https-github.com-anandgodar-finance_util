import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-23';

const AZ_140ES_2026 = {
  source: 'Arizona Department of Revenue, 2026 Form 140ES booklet ("the tax rate for estimating your tax liability is 2.5%")',
  sourceUrl: 'https://azdor.gov/sites/default/files/document/FORMS_INDIVIDUAL_2026_140ESBooklet.pdf',
  retrievedAt: RETRIEVED,
};

const AZ_140_2025 = {
  source: 'Arizona Department of Revenue, 2025 Form 140 instructions (standard deduction $15,750 / $31,500 / $23,625; 2.5% rate)',
  sourceUrl: 'https://azdor.gov/sites/default/files/document/FORMS_INDIVIDUAL_2025_140Booklet.pdf',
  retrievedAt: RETRIEVED,
  note: '2025 amounts; ADOR had not published 2026 standard deduction amounts at retrieval.',
};

const AZ_ARS_43_1041 = {
  source: 'Arizona Revised Statutes § 43-1041, Optional standard deduction (amounts adjusted for inflation in the same manner as the federal standard deduction under IRC § 63)',
  sourceUrl: 'https://www.azleg.gov/ars/43/01041.htm',
  retrievedAt: RETRIEVED,
};

const AZ_WEC = {
  source: 'Arizona Department of Revenue, Form WEC instructions — Employee Withholding Exemption Certificate (residents of California, Indiana, Oregon or Virginia)',
  sourceUrl: 'https://azdor.gov/sites/default/files/2023-10/FORMS_WITHHOLDING_WEC-SVi.pdf',
  retrievedAt: RETRIEVED,
};

export const ARIZONA: StateTaxSpec = {
  code: 'AZ',
  slug: 'arizona',
  name: 'Arizona',
  taxYear: 2026,
  rateLead: 'flat 2.5% state tax',
  summary:
    'Arizona taxes wages at a flat 2.5% — the lowest flat rate of any state with an income tax — after a standard deduction that tracks the federal amount ($15,750 single / $31,500 joint for 2025, the latest ADOR has published); there are no local income taxes and no employee payroll contributions.',
  wageTax: {
    kind: 'flat',
    rate: 0.025,
    ...AZ_140ES_2026,
  },
  deduction: {
    kind: 'standard',
    single: 15750,
    married: 31500,
    hoh: 23625,
    ...AZ_140_2025,
  },
  payrollDeductions: [],
  lines: [
    {
      label: 'Arizona state income tax',
      rateText: '2.5% flat for all income levels and filing statuses',
      computed: true,
      detail: 'Arizona moved to a single 2.5% rate for all filers; the 2026 Form 140ES booklet uses 2.5% for 2026 estimated payments. The old X and Y rate tables are obsolete.',
      ...AZ_140ES_2026,
    },
    {
      label: 'Standard deduction',
      rateText: '$15,750 single / $31,500 joint / $23,625 head of household (2025)',
      computed: true,
      detail:
        'A.R.S. § 43-1041 sets these amounts and has ADOR adjust them for inflation the same way the IRS adjusts the federal standard deduction, so the 2026 Arizona figures will track the federal $16,100 / $32,200 / $24,150 once published. Using the 2025 amounts slightly overstates Arizona tax.',
      ...AZ_ARS_43_1041,
    },
    {
      label: 'Local income tax',
      rateText: 'None',
      computed: true,
      detail: 'No Arizona city or county levies an income tax on wages.',
      ...AZ_140ES_2026,
    },
  ],
  notes: [
    {
      title: 'Withholding exemption for CA, IN, OR and VA residents',
      body:
        'A resident of California, Indiana, Oregon or Virginia who works in Arizona can file Form WEC with the employer to stop Arizona withholding, provided they are allowed to claim a credit on their Arizona nonresident return (Form 140NR, via Form 309) for tax paid to their home state. This is a credit arrangement rather than a full reciprocal agreement: the wages are still Arizona-source income, but the home state ends up with the tax.',
      ...AZ_WEC,
    },
    {
      title: 'Why the 2025 deduction appears here',
      body:
        'ADOR publishes the inflation-adjusted standard deduction in each year\'s Form 140 instructions, released after the year ends. The 2026 Form 140ES booklet points filers to the 2025 instructions for the deduction, so this page does the same and discloses it. At 2.5%, the difference between the 2025 single amount and the federal 2026 figure is $350 of deduction, or about $9 of tax.',
      ...AZ_140ES_2026,
    },
    {
      title: 'Flat tax means filing status barely matters',
      body:
        'With one 2.5% rate, married filing jointly changes Arizona tax only through the larger standard deduction (worth about $394 a year at 2025 amounts). On $100,000 a single filer owes 2.5% of $84,250, or $2,106.25 — a lower state bill than the federal Medicare tax alone.',
      ...AZ_140_2025,
    },
  ],
  neighbors: [
    { slug: 'nevada', name: 'Nevada', why: 'borders Arizona; no income tax' },
    { slug: 'california', name: 'California', why: 'borders Arizona; WEC exemption state' },
    { slug: 'new-mexico', name: 'New Mexico', why: 'borders Arizona' },
    { slug: 'utah', name: 'Utah', why: 'borders Arizona; flat tax' },
    { slug: 'colorado', name: 'Colorado', why: 'nearby flat-tax state (4.4%)' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    priorYearFigures: [
      'Standard deduction amounts ($15,750 / $31,500 / $23,625) are ADOR\'s 2025 figures; A.R.S. § 43-1041 indexes them like the federal deduction, but ADOR had not published 2026 amounts',
    ],
    description:
      '2.5% flat rate from the ADOR 2026 Form 140ES booklet. Standard deduction from the 2025 Form 140 instructions, indexed under A.R.S. § 43-1041 (2026 amounts not yet published). Form WEC exemption for CA/IN/OR/VA residents from the ADOR WEC instructions.',
  },
};

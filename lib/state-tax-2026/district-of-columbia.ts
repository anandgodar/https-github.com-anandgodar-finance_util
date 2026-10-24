import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const DC_OTR = {
  source: 'DC Office of Tax and Revenue, DC Individual and Fiduciary Income Tax Rates — rates for tax years beginning after 31 December 2021',
  sourceUrl: 'https://otr.cfo.dc.gov/page/dc-individual-and-fiduciary-income-tax-rates',
  retrievedAt: RETRIEVED,
};

const DC_CODE = {
  source: 'DC Code §47-1801.04 — for taxable years beginning after 31 December 2017, "the standard deduction as prescribed in section 63(c) of the Internal Revenue Code"',
  sourceUrl: 'https://code.dccouncil.gov/us/dc/council/code/sections/47-1801.04',
  retrievedAt: RETRIEVED,
};

const DC_D4A = {
  source: 'DC Office of Tax and Revenue, Form D-4A Certificate of Non-residence in DC (OTR withholding form listing: "File with employer when requested") — nonresidents file it "to establish that you are not subject to DC income tax withholding"',
  sourceUrl: 'https://otr.cfo.dc.gov/node/399402',
  retrievedAt: RETRIEVED,
};

const VA_RECIP = {
  source: 'Virginia Tax, Reciprocity (District of Columbia, Kentucky, Maryland, Pennsylvania, West Virginia)',
  sourceUrl: 'https://tax.virginia.gov/reciprocity',
  retrievedAt: RETRIEVED,
};

const DC_BRACKETS = [
  { upTo: 10000, rate: 0.04 },
  { upTo: 40000, rate: 0.06 },
  { upTo: 60000, rate: 0.065 },
  { upTo: 250000, rate: 0.085 },
  { upTo: 500000, rate: 0.0925 },
  { upTo: 1000000, rate: 0.0975 },
  { upTo: null, rate: 0.1075 },
];

export const DISTRICT_OF_COLUMBIA: StateTaxSpec = {
  code: 'DC',
  slug: 'district-of-columbia',
  name: 'District of Columbia',
  displayName: 'the District of Columbia',
  taxYear: 2026,
  rateLead: '4%–10.75% income tax',
  summary:
    'The District of Columbia taxes residents\' income at 4% to 10.75% — 6.5% on income between $40,000 and $60,000 and 8.5% up to $250,000 — after the federal standard deduction, with one schedule for every filing status; employees who live outside DC file Form D-4A and are not subject to DC withholding.',
  wageTax: { kind: 'brackets', single: DC_BRACKETS, married: DC_BRACKETS, hoh: DC_BRACKETS, ...DC_OTR },
  deduction: { kind: 'standard', single: 16100, married: 32200, hoh: 24150, ...DC_CODE },
  payrollDeductions: [],
  lines: [
    {
      label: 'DC income tax',
      rateText: '4% / 6% / 6.5% / 8.5% / 9.25% / 9.75% / 10.75%',
      computed: true,
      detail:
        '4% to $10,000, 6% to $40,000, 6.5% to $60,000, 8.5% to $250,000, 9.25% to $500,000, 9.75% to $1,000,000 and 10.75% above. The same schedule applies to single, joint and head-of-household returns.',
      ...DC_OTR,
    },
    {
      label: 'Standard deduction (federal amount)',
      rateText: '$16,100 single / $32,200 joint / $24,150 head of household (2026)',
      computed: true,
      detail: 'DC Code §47-1801.04 defines the DC standard deduction as the one prescribed in IRC §63(c), so the 2026 federal amounts are used.',
      ...DC_CODE,
    },
  ],
  notes: [
    {
      title: 'Reciprocity: only residents pay',
      body:
        'Virginia lists the District of Columbia among its reciprocal jurisdictions: a Virginia resident working in DC who does not become a DC resident is exempt from DC tax. Nonresident employees give their DC employer Form D-4A to establish that they are not subject to DC withholding.',
      ...VA_RECIP,
    },
    {
      title: 'Form D-4A for commuters',
      body:
        'An employee who does not live in the District files Form D-4A, Certificate of Nonresidence, with the employer so that no DC income tax is withheld; their wages are taxed by their home state instead.',
      ...DC_D4A,
    },
    {
      title: 'Where a typical salary lands',
      body:
        'A single DC resident earning $60,000 has $43,900 of taxable income after the federal standard deduction and owes $2,200 on the first $40,000 plus 6.5% of $3,900, or $2,453.50.',
      ...DC_OTR,
    },
  ],
  neighbors: [
    { slug: 'maryland', name: 'Maryland', why: 'borders DC; state plus county tax' },
    { slug: 'virginia', name: 'Virginia', why: 'borders DC; reciprocal jurisdiction' },
    { slug: 'delaware', name: 'Delaware', why: 'Mid-Atlantic; 0%–6.6%' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'DC rates for tax years after 2021 (OTR) applied after the federal standard deduction, which DC Code §47-1801.04 adopts. Nonresident rule from Form D-4A; Virginia reciprocity from Virginia Tax.',
  },
};

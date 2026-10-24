import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

/**
 * Primary source for the 2026 schedule: the authenticated Revised Code.
 * ORC 5747.02(A)(3)(c): "For taxable years beginning in 2026 and thereafter,
 * $332.00 plus 2.75% of the amount in excess of $26,050." Balances of $26,050
 * or less owe nothing. The $332 base is NOT the tax on the lower bracket (that
 * bracket is 0%) — it is a fixed amount the statute adds the moment income
 * crosses the threshold, so a 2.75%-above-$26,050 model without it understates
 * Ohio tax by $332 for every filer over the threshold.
 */
const OH_ORC_5747_02 = {
  source: 'Ohio Revised Code §5747.02(A)(3)(c), authenticated text effective 30 Sep 2025 (HB 96) — "$332.00 plus 2.75% of the amount in excess of $26,050"',
  sourceUrl: 'https://codes.ohio.gov/assets/laws/revised-code/authenticated/57/5747/5747.02/9-30-2025/5747.02-9-30-2025.pdf',
  retrievedAt: RETRIEVED,
};

const OH_ANNUAL_RATES = {
  source: 'Ohio Department of Taxation, Annual Tax Rates (individual income tax)',
  sourceUrl: 'https://tax.ohio.gov/individual/file-now/annual-tax-rates',
  retrievedAt: RETRIEVED,
  note: 'At retrieval the page listed schedules through tax year 2025 ($342.00 + 2.75% over $26,050 to $100,000; $2,394.32 + 3.125% above). No 2026 table yet; the 2026 schedule is read from the statute.',
};

/**
 * See also only (secondary): EY's summary of the Department's 2026 withholding
 * release. Not spread into any figure, line or note — ORC 5747.02 is the source.
 */
const OH_EY_SEE_ALSO = {
  source: 'EY Tax News Update 2026-1619 — Ohio releases modified 2026 withholding formulas reflecting the HB 96 flat 2.75% rate',
  sourceUrl:
    'https://taxnews.ey.com/news/2026-1619-ohio-releases-modified-2026-income-tax-withholding-formulas-and-tables-reflecting-scheduled-tax-cut',
  retrievedAt: RETRIEVED,
  note: 'EY describes the schedule as "a flat 2.75% applies to income over $26,050" and omits the statutory $332 base; the statute is used for the computation.',
};

/**
 * Personal exemption: ORC 5747.025 sets $2,350 / $2,100 / $1,850 per exemption
 * by modified AGI tier ($40,000 or less / to $80,000 / above), indexed each
 * August and rounded UP to the nearest $50, with no exemption at MAGI of
 * $750,000+ (2025) or $500,000+ (2026 and later). The Department's 2025 IT 1040
 * booklet prints the indexed 2025 amounts: $2,400 / $2,150 / $1,900. The 2026
 * indexed amounts were not published at retrieval; the 2025 amounts are applied
 * as prior-year figures (indexing can only raise them, so any error overstates
 * tax by at most 2.75% of the increase per exemption).
 */
const OH_EXEMPTION_BOOKLET = {
  source: 'Ohio Department of Taxation, 2025 IT 1040 / SD 100 instruction booklet, line 4 personal and dependent exemption table ($2,400 / $2,150 / $1,900 by modified AGI)',
  sourceUrl: 'https://dam.assets.ohio.gov/image/upload/v1767095693/tax.ohio.gov/forms/ohio_individual/individual/2025/it1040-booklet.pdf',
  retrievedAt: RETRIEVED,
  note: '2025 amounts; ORC 5747.025(C) indexes them upward each August for the following year and the 2026 figures were not yet published. 2026 MAGI cap is $500,000 (5747.025(A)).',
};

const OH_ORC_5747_025 = {
  source: 'Ohio Revised Code §5747.025 (personal exemption amounts, income tiers, $500,000 MAGI limit from 2026, annual indexing)',
  sourceUrl: 'https://codes.ohio.gov/assets/laws/revised-code/authenticated/57/5747/5747.025/9-30-2025/5747.025-9-30-2025.pdf',
  retrievedAt: RETRIEVED,
};

const OH_FINDER = {
  source: 'Ohio Department of Taxation, The Finder — municipal income tax rate lookup',
  sourceUrl: 'https://thefinder.tax.ohio.gov/StreamlineSalesTaxWeb/default_municipal.aspx',
  retrievedAt: RETRIEVED,
};

// Per-exemption amounts (2025 booklet) × exemptions claimed: single = 1,
// married filing jointly = 2 (taxpayer + spouse), head of household = 2
// (taxpayer + the one dependent the status requires). Additional dependents
// are not modelled. Tiers are keyed to wages after pre-tax deductions, the
// closest the calculator has to modified AGI.
const EXEMPTION_TIERS = [
  { upTo: 40000, single: 2400, married: 4800, hoh: 4800 },
  { upTo: 80000, single: 2150, married: 4300, hoh: 4300 },
  { upTo: 499999.99, single: 1900, married: 3800, hoh: 3800 }, // "less than $500,000" for 2026 (5747.025(A))
  { upTo: null, single: 0, married: 0, hoh: 0 },
];

const OH_BRACKETS = [
  { upTo: 26050, rate: 0 },
  { upTo: null, rate: 0.0275, base: 332 },
];

export const OHIO: StateTaxSpec = {
  code: 'OH',
  slug: 'ohio',
  name: 'Ohio',
  taxYear: 2026,
  rateLead: '$332 + 2.75% of income above $26,050',
  summary:
    'For 2026 Ohio taxes income above $26,050 at $332 plus 2.75% of the excess (nothing is owed at $26,050 or less), after a personal exemption of $2,400 to $1,900 per person depending on income; most Ohio cities add a separate municipal income tax that this calculator does not include.',
  wageTax: {
    kind: 'brackets',
    single: OH_BRACKETS,
    married: OH_BRACKETS,
    hoh: OH_BRACKETS,
    ...OH_ORC_5747_02,
  },
  deduction: {
    kind: 'exemption',
    single: 2400,
    married: 4800,
    hoh: 4800,
    tiers: EXEMPTION_TIERS,
    ...OH_EXEMPTION_BOOKLET,
  },
  payrollDeductions: [],
  lines: [
    {
      label: 'Ohio state income tax',
      rateText: '$0 up to $26,050; $332 + 2.75% of the excess above it (2026)',
      computed: true,
      detail:
        'ORC 5747.02(A)(3)(c) sets the 2026 schedule as "$332.00 plus 2.75% of the amount in excess of $26,050". HB 96 removed the 3.125% bracket that applied above $100,000 in 2025 (that year the base was $342). The same schedule applies to every filing status. Example: $60,000 single, after the $2,150 exemption, is $332 + 2.75% × ($57,850 − $26,050) = $1,206.50.',
      ...OH_ORC_5747_02,
    },
    {
      label: 'Personal exemption',
      rateText: '$2,400 / $2,150 / $1,900 per person by income (2025 amounts)',
      computed: true,
      detail:
        'Subtracted before the schedule applies: $2,400 per exemption at modified AGI of $40,000 or less, $2,150 to $80,000, $1,900 above that, and $0 from $500,000 (2026 limit). The calculator claims one exemption for a single filer and two for joint or head-of-household filers; dependents beyond that are not counted. Ohio indexes the amounts each August and had not published the 2026 figures at review.',
      ...OH_EXEMPTION_BOOKLET,
    },
    {
      label: 'Municipal (city) income tax',
      rateText: 'Varies by city — not included',
      computed: false,
      detail:
        'Most Ohio municipalities levy their own income tax on wages earned or lived in within their limits, withheld by the employer. The calculator shows state tax only; look up your city\'s rate with The Finder.',
      ...OH_FINDER,
    },
    {
      label: 'School district income tax',
      rateText: 'Varies — not included',
      computed: false,
      detail: 'Some Ohio school districts levy an additional income tax on residents, also withheld through payroll. The Finder lists these as well.',
      ...OH_FINDER,
    },
  ],
  notes: [
    {
      title: 'The 2026 change in one line',
      body:
        'In 2025 Ohio charged $342 plus 2.75% between $26,050 and $100,000, then $2,394.32 plus 3.125% above $100,000. For 2026 it is $332 plus 2.75% of everything above $26,050. A filer with $60,000 of taxable income pays $10 less than in 2025; one with $150,000 saves about $197 ($10 from the lower base plus 0.375% of the $50,000 that was in the higher bracket).',
      ...OH_ORC_5747_02,
    },
    {
      title: 'Why there is a $332 base after a 0% bracket',
      body:
        'Ohio\'s schedule is not a pure marginal table. Income of $26,050 or less owes nothing, but the first dollar above it triggers the $332 base plus 2.75% of the excess, so tax jumps from $0 to $332 at the threshold. Summaries that describe 2026 as "a flat 2.75% above $26,050" leave the base out and understate the tax by $332 for everyone over the line.',
      ...OH_ORC_5747_02,
    },
    {
      title: 'City tax is the bigger variable',
      body:
        'Because the state rate is low and flat, your municipality often decides more of your take-home than the state does. Municipal income taxes apply where you work and, often with a credit, where you live. Use The Finder to get both rates before trusting any Ohio paycheck estimate.',
      ...OH_FINDER,
    },
    {
      title: 'Reciprocity with neighbors',
      body:
        'Ohio has reciprocal agreements covering wages with Indiana, Kentucky, Michigan, Pennsylvania and West Virginia: residents of those states who work in Ohio pay income tax only to their home state (file Ohio Form IT 4NR with your employer). Municipal taxes are not covered by reciprocity.',
      source: 'Ohio Department of Taxation, Form IT 4NR — Employee\'s Statement of Residency in a Reciprocity State',
      sourceUrl: 'https://dam.assets.ohio.gov/image/upload/tax.ohio.gov/forms/employer_withholding/generic/wth_it4nr.pdf',
      retrievedAt: RETRIEVED,
    },
    {
      title: 'The exemption shrinks as income rises',
      body:
        'Ohio\'s personal exemption is tiered by modified adjusted gross income: $2,400 per person at $40,000 or less, $2,150 up to $80,000, $1,900 above that, and nothing once MAGI reaches $500,000 (2026). The statute indexes these each August, rounding up to the next $50, so the 2026 amounts will be at or slightly above the 2025 figures used here.',
      ...OH_ORC_5747_025,
    },
  ],
  neighbors: [
    { slug: 'pennsylvania', name: 'Pennsylvania', why: 'borders Ohio; reciprocal state' },
    { slug: 'michigan', name: 'Michigan', why: 'borders Ohio; reciprocal state' },
    { slug: 'indiana', name: 'Indiana', why: 'borders Ohio; reciprocal state' },
    { slug: 'kentucky', name: 'Kentucky', why: 'borders Ohio; reciprocal state' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    priorYearFigures: [
      'personal exemption amounts $2,400 / $2,150 / $1,900 are the 2025 IT 1040 booklet figures; ORC 5747.025 indexes them upward for 2026 and the Department had not published the 2026 amounts',
      'tax.ohio.gov Annual Tax Rates listed 2025 as its latest schedule; the 2026 schedule ($332 + 2.75% over $26,050) is read from ORC 5747.02(A)(3)(c)',
    ],
    description:
      '2026 Ohio schedule per ORC 5747.02(A)(3)(c): $0 to $26,050, then $332.00 plus 2.75% of the excess. Personal exemption (2025 amounts, one for single, two for joint/HoH) is subtracted first. Municipal and school-district taxes are not computed. Primary source: ORC 5747.02 (authenticated text). See also (secondary, not relied on): EY Tax News 2026-1619, which omits the $332 base.',
  },
};

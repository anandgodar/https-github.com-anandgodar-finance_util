import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-23';

const OH_ANNUAL_RATES = {
  source: 'Ohio Department of Taxation, Annual Tax Rates (individual income tax)',
  sourceUrl: 'https://tax.ohio.gov/individual/file-now/annual-tax-rates',
  retrievedAt: RETRIEVED,
  note: 'At retrieval the page listed schedules through tax year 2025 (0% to $26,050; 2.75% to $100,000; 3.125% above). The 2026 schedule is set by HB 96.',
};

const OH_HB96 = {
  source: 'Ohio HB 96 (2025 biennial budget) — flat 2.75% rate on income over $26,050 effective 1 Jan 2026, as summarised by EY Tax News Update 2026-1619',
  sourceUrl:
    'https://taxnews.ey.com/news/2026-1619-ohio-releases-modified-2026-income-tax-withholding-formulas-and-tables-reflecting-scheduled-tax-cut',
  retrievedAt: RETRIEVED,
};

const OH_FINDER = {
  source: 'Ohio Department of Taxation, The Finder — municipal income tax rate lookup',
  sourceUrl: 'https://thefinder.tax.ohio.gov/StreamlineSalesTaxWeb/default_municipal.aspx',
  retrievedAt: RETRIEVED,
};

export const OHIO: StateTaxSpec = {
  code: 'OH',
  slug: 'ohio',
  name: 'Ohio',
  taxYear: 2026,
  rateLead: '2.75% state tax above $26,050',
  summary:
    'For 2026 Ohio taxes wages above $26,050 at a flat 2.75% (the first $26,050 is tax-free); most Ohio cities add a separate municipal income tax that this calculator does not include.',
  wageTax: {
    kind: 'brackets',
    single: [
      { upTo: 26050, rate: 0 },
      { upTo: null, rate: 0.0275 },
    ],
    married: [
      { upTo: 26050, rate: 0 },
      { upTo: null, rate: 0.0275 },
    ],
    hoh: [
      { upTo: 26050, rate: 0 },
      { upTo: null, rate: 0.0275 },
    ],
    ...OH_HB96,
  },
  deduction: {
    kind: 'none',
    single: 0,
    married: 0,
    hoh: 0,
    ...OH_ANNUAL_RATES,
    note: 'Ohio allows an income-based personal exemption that is not applied here, so the state figure is slightly conservative.',
  },
  payrollDeductions: [],
  lines: [
    {
      label: 'Ohio state income tax',
      rateText: '0% on the first $26,050, then 2.75% flat (2026)',
      computed: true,
      detail:
        'HB 96 completed Ohio\'s move to a flat tax: the 3.125% top bracket that applied above $100,000 in 2025 is gone for 2026. Ohio uses the same thresholds for every filing status.',
      ...OH_HB96,
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
        'In 2025 Ohio taxed the slice above $100,000 at 3.125%; for 2026 everything above $26,050 is taxed at 2.75%. A single filer on $150,000 saves roughly $190 a year from the change (0.375% of the $50,000 that was in the higher bracket). Below $100,000 the state tax is unchanged.',
      ...OH_HB96,
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
      'Ohio DOT Annual Tax Rates page listed 2025 as the latest schedule at retrieval; the 2026 flat 2.75% above $26,050 comes from HB 96 (effective 1 Jan 2026)',
    ],
    description:
      '2026 Ohio schedule: 0% to $26,050, 2.75% above, per HB 96. The $26,050 threshold matches the 2025 schedule on tax.ohio.gov. Personal exemptions and municipal/school-district taxes are not computed.',
  },
};

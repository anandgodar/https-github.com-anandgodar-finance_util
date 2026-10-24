import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const IN_DN1 = {
  source: 'Indiana Department of Revenue, Departmental Notice #1 (R47 / 10-26, effective 1 Oct 2026) — "For 2026, the state adjusted gross income tax rate for individuals is 2.95%"; $1,000 per exemption; county rates by county',
  sourceUrl: 'https://www.in.gov/dor/files/dn01.pdf',
  retrievedAt: RETRIEVED,
};

const IN_IB33 = {
  source: 'Indiana Department of Revenue, Income Tax Information Bulletin #33 (December 2024) — reciprocal states Kentucky, Michigan, Ohio, Pennsylvania and Wisconsin',
  sourceUrl: 'https://WWW.IN.GOV/dor/files/ib33.pdf',
  retrievedAt: RETRIEVED,
};

export const INDIANA: StateTaxSpec = {
  code: 'IN',
  slug: 'indiana',
  name: 'Indiana',
  taxYear: 2026,
  rateLead: 'flat 2.95% state tax + county tax',
  summary:
    'Indiana taxes 2026 wages at a flat 2.95% after a $1,000 personal exemption, and every county adds its own local income tax — 2.02% in Marion County (Indianapolis), for example — which this calculator lists but does not add.',
  wageTax: { kind: 'flat', rate: 0.0295, ...IN_DN1 },
  deduction: { kind: 'exemption', single: 1000, married: 2000, hoh: 1000, ...IN_DN1 },
  payrollDeductions: [],
  lines: [
    {
      label: 'Indiana state income tax',
      rateText: '2.95% flat (2026)',
      computed: true,
      detail: 'Departmental Notice #1 sets the 2026 state adjusted gross income tax rate for individuals at 2.95%. The same rate applies to every filing status and income level.',
      ...IN_DN1,
    },
    {
      label: 'Personal exemption',
      rateText: '$1,000 per exemption',
      computed: true,
      detail:
        'Employees deduct $1,000 a year for each exemption claimed on Form WH-4. The calculator counts one for a single or head-of-household filer and two for a joint return; additional dependent exemptions are not counted.',
      ...IN_DN1,
    },
    {
      label: 'County income tax',
      rateText: 'Varies by county — not included',
      computed: false,
      detail:
        'Every Indiana county levies a local income tax, withheld by the employer based on the county where the employee lived on 1 January (or, for a nonresident, the county of principal employment). Rates in the October 2026 notice include Marion 2.02%, Lake 1.5% and Cass 2.95%. Add your county\'s rate on top of the state figure.',
      ...IN_DN1,
    },
  ],
  notes: [
    {
      title: 'Reciprocity with five neighbors — state tax only',
      body:
        'Indiana does not impose its adjusted gross income tax on the wages of residents of Kentucky, Michigan, Ohio, Pennsylvania and Wisconsin who work in Indiana. The exemption does not reach county tax: those workers are subject to Indiana local income tax in the same manner as residents of nonreciprocal states, so employers still withhold the county rate.',
      ...IN_IB33,
    },
    {
      title: 'County tax can rival the state rate',
      body:
        'With the state rate at 2.95%, county taxes of 1% to nearly 3% make up a large share of an Indiana worker\'s state and local withholding. Because the county is fixed on 1 January, moving mid-year does not change the county withheld until the next calendar year.',
      ...IN_DN1,
    },
    {
      title: 'A flat rate after a small exemption',
      body:
        'Indiana has no standard deduction; a single filer\'s first $1,000 is exempt and every dollar above it is taxed at 2.95%. On $60,000 that is $1,740.50 of state tax before any county tax.',
      ...IN_DN1,
    },
  ],
  neighbors: [
    { slug: 'illinois', name: 'Illinois', why: 'borders Indiana; flat 4.95%' },
    { slug: 'ohio', name: 'Ohio', why: 'borders Indiana; reciprocal state' },
    { slug: 'michigan', name: 'Michigan', why: 'borders Indiana; reciprocal state' },
    { slug: 'kentucky', name: 'Kentucky', why: 'borders Indiana; reciprocal state' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Flat 2.95% for 2026 and $1,000 per exemption from Indiana DOR Departmental Notice #1 (effective 1 Oct 2026). County income taxes are listed but not computed. Reciprocity from Information Bulletin #33.',
  },
};

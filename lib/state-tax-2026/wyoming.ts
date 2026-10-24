import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const WY_LSO = {
  source: 'Wyoming Legislative Service Office, "Wyoming Tax Structure, Rates and Collections" (3 June 2025): Individual Income Tax 0% (Wyoming Constitution Art. 15, Sec. 18), $0 collected',
  sourceUrl: 'https://wyoleg.gov/InterimCommittee/2025/03-202506032-01WyomingtaxstructureratesandcollectionsJune32025.pdf',
  retrievedAt: RETRIEVED,
};

export const WYOMING: StateTaxSpec = {
  code: 'WY',
  slug: 'wyoming',
  name: 'Wyoming',
  taxYear: 2026,
  rateLead: 'no state income tax',
  summary:
    'Wyoming has no state income tax on wages — the Legislature\'s own tax summary lists the individual income tax at 0% with nothing collected — so a Wyoming paycheck loses only federal income tax and FICA.',
  wageTax: { kind: 'none', ...WY_LSO },
  deduction: { kind: 'none', single: 0, married: 0, hoh: 0, ...WY_LSO },
  payrollDeductions: [],
  lines: [
    {
      label: 'Wyoming state income tax',
      rateText: 'None',
      computed: true,
      detail:
        'The Legislative Service Office lists "Individual Income Tax 0%" with $0 of fiscal-year 2024 collections and points to Article 15, Section 18 of the Wyoming Constitution, which governs any tax on income.',
      ...WY_LSO,
    },
    {
      label: 'Local income tax',
      rateText: 'None',
      computed: true,
      detail: 'No Wyoming city or county taxes wages.',
      ...WY_LSO,
    },
  ],
  notes: [
    {
      title: 'A 0% line in the state\'s own tax table',
      body:
        'Wyoming\'s tax code has an income-tax chapter, but the Legislative Service Office\'s 2025 summary of rates and collections shows the individual income tax at 0% and $0 collected. The state relies on minerals, sales and property taxes instead.',
      ...WY_LSO,
    },
    {
      title: 'Working in a neighboring state',
      body:
        'With nothing to reciprocate, Wyoming has no reciprocal agreements. A Wyoming resident who works in Colorado, Idaho, Montana, Nebraska or Utah owes that state\'s nonresident income tax on the wages earned there.',
      ...WY_LSO,
    },
    {
      title: 'What changes the number on this page',
      body:
        'Because there is no state tax, the take-home table is federal income tax after the standard deduction plus FICA. Choosing a different filing status or adding pre-tax 401(k) contributions moves only the federal line.',
      ...WY_LSO,
    },
  ],
  neighbors: [
    { slug: 'colorado', name: 'Colorado', why: 'borders Wyoming; flat 4.4% plus FAMLI' },
    { slug: 'montana', name: 'Montana', why: 'borders Wyoming; 4.7%–5.65%' },
    { slug: 'utah', name: 'Utah', why: 'borders Wyoming; flat 4.45%' },
    { slug: 'south-dakota', name: 'South Dakota', why: 'borders Wyoming; no income tax either' },
    { slug: 'idaho', name: 'Idaho', why: 'borders Wyoming' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description: 'No individual income tax: 0% and $0 collected per the Wyoming Legislative Service Office (June 2025). No employee payroll contributions apply.',
  },
};

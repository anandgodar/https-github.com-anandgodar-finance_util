import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const TN_CONST = {
  source: 'Tennessee Constitution, Article II, Section 28 ("the Legislature shall not levy, authorize or otherwise permit any state or local tax upon payroll or earned personal income"), via Justia',
  sourceUrl: 'https://law.justia.com/constitution/tennessee/article-ii/section-28/',
  retrievedAt: RETRIEVED,
};

const TN_HALL = {
  source: 'Tennessee Department of Revenue, HIT-3 — Hall Income Tax Repealed Beginning January 1, 2021',
  sourceUrl: 'https://revenue.support.tn.gov/hc/en-us/articles/360057828631-HIT-3-Hall-Income-Tax-Repealed-Beginning-January-1-2021',
  retrievedAt: RETRIEVED,
};

export const TENNESSEE: StateTaxSpec = {
  code: 'TN',
  slug: 'tennessee',
  name: 'Tennessee',
  taxYear: 2026,
  rateLead: 'no tax on wages',
  summary:
    'Tennessee has no income tax on wages — its constitution forbids any state or local tax on payroll or earned income — and the Hall tax on investment income was fully repealed from 2021, so a Tennessee paycheck loses only federal income tax and FICA.',
  wageTax: { kind: 'none', ...TN_CONST },
  deduction: { kind: 'none', single: 0, married: 0, hoh: 0, ...TN_CONST },
  payrollDeductions: [],
  lines: [
    {
      label: 'Tennessee income tax on wages',
      rateText: 'None (constitutional ban)',
      computed: true,
      detail:
        'Article II, Section 28 bars the Legislature from levying, authorizing or permitting any state or local tax on payroll or earned personal income, apart from taxes already in effect on 1 January 2011.',
      ...TN_CONST,
    },
    {
      label: 'Hall income tax',
      rateText: 'Repealed from 1 January 2021',
      computed: true,
      detail: 'The Hall tax applied to interest and dividends, not wages. It was phased out through 31 December 2020 and fully repealed beginning 1 January 2021.',
      ...TN_HALL,
    },
    {
      label: 'Local income tax',
      rateText: 'None',
      computed: true,
      detail: 'The same constitutional provision prohibits local payroll or earned-income taxes, so no Tennessee city or county taxes wages.',
      ...TN_CONST,
    },
  ],
  notes: [
    {
      title: 'Banned by the constitution, not just by statute',
      body:
        'Voters added the payroll and earned-income tax ban to Article II, Section 28 in 2014. It covers local governments as well as the state, so neither Nashville nor Memphis can add a city wage tax. Changing it would take another constitutional amendment.',
      ...TN_CONST,
    },
    {
      title: 'The Hall tax is gone too',
      body:
        'Tennessee once taxed interest and dividend income through the Hall income tax. It was phased down over several years and fully repealed beginning 1 January 2021, so in 2026 Tennessee taxes neither wages nor investment income.',
      ...TN_HALL,
    },
    {
      title: 'Working across the state line',
      body:
        'Tennessee has no reciprocal agreements because there is no wage tax to waive. A Tennessee resident who works physically in Kentucky, Georgia, Alabama, Mississippi, Arkansas, Missouri, Virginia or North Carolina owes that state\'s nonresident tax on the wages earned there.',
      ...TN_CONST,
    },
  ],
  neighbors: [
    { slug: 'kentucky', name: 'Kentucky', why: 'borders Tennessee; flat 3.5%' },
    { slug: 'georgia', name: 'Georgia', why: 'borders Tennessee; flat 4.99%' },
    { slug: 'alabama', name: 'Alabama', why: 'borders Tennessee; 2%–5%' },
    { slug: 'mississippi', name: 'Mississippi', why: 'borders Tennessee; 4% above $10,000' },
    { slug: 'north-carolina', name: 'North Carolina', why: 'borders Tennessee; flat 3.99%' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'No tax on wages (Tennessee Constitution Art. II §28) and the Hall tax on interest and dividends repealed from 1 January 2021 (Department of Revenue HIT-3). No employee payroll contributions apply.',
  },
};

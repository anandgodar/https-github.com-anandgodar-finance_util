import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-23';

const TX_CONST = {
  source: 'Texas Constitution, Article VIII, Section 24-a (HJR 38, adopted by voters 5 Nov 2019)',
  sourceUrl: 'https://statutes.capitol.texas.gov/Docs/CN/htm/CN.8/CN.8.24-a.htm',
  retrievedAt: RETRIEVED,
};

const TX_HJR38 = {
  source: 'Texas Legislature, HJR 38 (86R) bill analysis — prohibits an individual income tax',
  sourceUrl: 'https://capitol.texas.gov/tlodocs/86R/analysis/html/HJ00038E.htm',
  retrievedAt: RETRIEVED,
};

export const TEXAS: StateTaxSpec = {
  code: 'TX',
  slug: 'texas',
  name: 'Texas',
  taxYear: 2026,
  rateLead: 'no state income tax',
  summary:
    'Texas has no state income tax on wages, so a Texas paycheck loses only federal income tax and FICA (7.65%).',
  wageTax: { kind: 'none', ...TX_CONST },
  deduction: { kind: 'none', single: 0, married: 0, hoh: 0, ...TX_CONST },
  payrollDeductions: [],
  lines: [
    {
      label: 'Texas state income tax',
      rateText: 'None',
      computed: true,
      detail:
        'Article VIII, Section 24-a of the Texas Constitution prohibits the Legislature from imposing a tax on the net incomes of individuals.',
      ...TX_CONST,
    },
    {
      label: 'Local income tax',
      rateText: 'None',
      computed: true,
      detail: 'No Texas city, county or school district levies a wage tax.',
      ...TX_HJR38,
    },
  ],
  notes: [
    {
      title: 'The ban is constitutional, not just statutory',
      body:
        'Before 2019, Article VIII, Section 24 allowed an income tax if voters approved one. HJR 38 repealed that provision and added Section 24-a, which flatly prohibits a tax on individual net income, including a partner\'s share of partnership income. Reversing it would take another statewide constitutional amendment.',
      ...TX_HJR38,
    },
    {
      title: 'Living in Texas, working elsewhere',
      body:
        'Texas has no reciprocal agreements because it has nothing to reciprocate. A Texas resident who physically works in Oklahoma, Louisiana, New Mexico or Arkansas owes that state\'s nonresident income tax on the wages earned there, with no Texas credit to offset it.',
      ...TX_CONST,
    },
  ],
  neighbors: [
    { slug: 'oklahoma', name: 'Oklahoma', why: 'borders Texas; progressive income tax' },
    { slug: 'louisiana', name: 'Louisiana', why: 'borders Texas; flat income tax' },
    { slug: 'new-mexico', name: 'New Mexico', why: 'borders Texas' },
    { slug: 'florida', name: 'Florida', why: 'also has no state income tax' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Texas levies no individual income tax (constitutional prohibition since the 2019 adoption of Art. VIII §24-a). No figures are year-dependent.',
  },
};

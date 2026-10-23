import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-23';

const FL_DOR = {
  source: 'Florida Department of Revenue, FAQ: "Do I have to file a personal income tax return in Florida?"',
  sourceUrl: 'https://floridarevenue.com/faq/Pages/FAQDetails.aspx?FAQID=1466',
  retrievedAt: RETRIEVED,
};

const FL_CONST = {
  source: 'Florida Constitution, Article VII, Section 5 (prohibits a tax on the income of natural persons)',
  sourceUrl: 'https://floridacourtrules.com/florida-constitution/article-7-section-5/',
  retrievedAt: RETRIEVED,
};

export const FLORIDA: StateTaxSpec = {
  code: 'FL',
  slug: 'florida',
  name: 'Florida',
  taxYear: 2026,
  rateLead: 'no state income tax',
  summary:
    'Florida has no state income tax on wages, so a Florida paycheck loses only federal income tax and FICA (7.65%).',
  wageTax: { kind: 'none', ...FL_DOR },
  deduction: { kind: 'none', single: 0, married: 0, hoh: 0, ...FL_DOR },
  payrollDeductions: [],
  lines: [
    {
      label: 'Florida state income tax',
      rateText: 'None',
      computed: true,
      detail:
        'The Department of Revenue states: "Florida does not impose a personal income tax, so there are no filing requirements."',
      ...FL_DOR,
    },
    {
      label: 'Local income tax',
      rateText: 'None',
      computed: true,
      detail: 'No Florida city or county levies a tax on wages.',
      ...FL_CONST,
    },
  ],
  notes: [
    {
      title: 'Why there is no Florida income tax line',
      body:
        'Article VII, Section 5 of the Florida Constitution bars the state from taxing the income of natural persons. Your employer withholds federal income tax, Social Security and Medicare only; there is no state W-4 equivalent and no Florida return to file.',
      ...FL_CONST,
    },
    {
      title: 'Working in Florida for an out-of-state employer',
      body:
        'Florida taxes nothing, but your state of residence may. If you live in Georgia or Alabama and commute into Florida, your home state still taxes the wages; Florida has no reciprocal agreements because it has no income tax to reciprocate.',
      ...FL_DOR,
    },
  ],
  neighbors: [
    { slug: 'georgia', name: 'Georgia', why: 'borders Florida; flat state income tax' },
    { slug: 'alabama', name: 'Alabama', why: 'borders Florida' },
    { slug: 'texas', name: 'Texas', why: 'also has no state income tax' },
    { slug: 'tennessee', name: 'Tennessee', why: 'also has no tax on wages' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Florida levies no personal income tax (constitutional prohibition). No figures are year-dependent; the Department of Revenue FAQ and the constitutional text were read on the retrieval date.',
  },
};

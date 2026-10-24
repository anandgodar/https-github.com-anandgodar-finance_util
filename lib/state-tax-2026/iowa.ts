import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const IA_RATE = {
  source: 'Iowa Department of Revenue press release, 21 Oct 2025 — "Iowa law provides for a flat tax rate of 3.8 percent. In 2026, all levels of taxable individual income will be subject to this rate."',
  sourceUrl: 'https://revenue.iowa.gov/press-release/2025-10-21/idr-announces-2026-individual-income-tax-and-interest-rates',
  retrievedAt: RETRIEVED,
};

const IA_START = {
  source: 'Iowa Department of Revenue, What\'s New (tax year 2023) — "The starting point for taxation on the IA 1040 is now federal taxable income."',
  sourceUrl: 'https://tax.iowa.gov/node/5590/printable/print',
  retrievedAt: RETRIEVED,
};

const IA_WH = {
  source: 'Iowa Department of Revenue, Iowa Withholding Formula effective 1 Jan 2026 (rate 3.80%; annual deduction $13,000 other / $19,500 head of household / $26,000 married with non-earning spouse)',
  sourceUrl: 'https://revenue.iowa.gov/media/53/download',
  retrievedAt: RETRIEVED,
};

const IA_SURTAX = {
  source: 'Iowa Department of Revenue, Tax Research Bureau — Iowa Individual Income Tax School District Report, Tax Year 2024 (surtax base: Iowa income tax after nonrefundable credits, Iowa Code §257.21)',
  sourceUrl: 'https://revenue.iowa.gov/media/4438/download',
  retrievedAt: RETRIEVED,
};

const IA_IL = {
  source: 'Iowa Department of Revenue, Iowa–Illinois Reciprocal Agreement',
  sourceUrl: 'https://revenue.iowa.gov/taxes/tax-guidance/individual-income-tax/iowa-illinois-reciprocal-agreement',
  retrievedAt: RETRIEVED,
};

export const IOWA: StateTaxSpec = {
  code: 'IA',
  slug: 'iowa',
  name: 'Iowa',
  taxYear: 2026,
  rateLead: 'flat 3.8% state tax',
  summary:
    'Iowa taxes 2026 income at a single 3.8% rate, and because its return starts from federal taxable income, the federal standard deduction ($16,100 single, $32,200 joint) applies before the rate.',
  wageTax: { kind: 'flat', rate: 0.038, ...IA_RATE },
  deduction: { kind: 'standard', single: 16100, married: 32200, hoh: 24150, ...IA_START },
  payrollDeductions: [],
  lines: [
    {
      label: 'Iowa state income tax',
      rateText: '3.8% flat (2026)',
      computed: true,
      detail: 'For 2026 every level of taxable income is taxed at 3.8%.',
      ...IA_RATE,
    },
    {
      label: 'Starting point: federal taxable income',
      rateText: 'Federal standard deduction applies',
      computed: true,
      detail:
        'Since tax year 2023 the IA 1040 begins with federal taxable income, so the $16,100 / $32,200 / $24,150 federal standard deduction is already subtracted. The calculator applies the federal amounts.',
      ...IA_START,
    },
    {
      label: 'School district income surtax',
      rateText: 'Percentage of Iowa tax, by district — not included',
      computed: false,
      detail: 'Districts that levy the surtax apply their percentage to Iowa income tax after nonrefundable credits.',
      ...IA_SURTAX,
    },
  ],
  notes: [
    {
      title: 'School district surtax on top',
      body:
        'Iowa school districts may levy an income surtax: a percentage applied to the resident\'s Iowa income tax after nonrefundable credits, under Iowa Code §257.21. The percentage varies by district, so it is not included in the figures here.',
      ...IA_SURTAX,
    },
    {
      title: 'Reciprocity with Illinois',
      body:
        'Under the Iowa–Illinois reciprocal agreement, wages earned by an Iowa resident working in Illinois are taxable only to Iowa, and an Illinois resident working in Iowa pays only Illinois. Iowa residents file Illinois Form IL-W-5-NR with an Illinois employer; Illinois residents give an Iowa employer the Employee\'s Statement of Nonresidence (44-016).',
      ...IA_IL,
    },
    {
      title: 'One rate at every income',
      body:
        'The Department confirms that in 2026 all levels of taxable income are subject to the same 3.8% rate. A single filer on $60,000 has $43,900 of taxable income after the federal standard deduction and owes $1,668.20.',
      ...IA_RATE,
    },
    {
      title: 'Expect a small refund',
      body:
        'The withholding formula subtracts $13,000 rather than the $16,100 federal deduction for a single employee, so it withholds about $118 more than the 3.8% tax on the larger deduction. The table on this page shows the tax owed.',
      ...IA_WH,
    },
  ],
  neighbors: [
    { slug: 'illinois', name: 'Illinois', why: 'borders Iowa; reciprocal state' },
    { slug: 'minnesota', name: 'Minnesota', why: 'borders Iowa; 5.35%–9.85%' },
    { slug: 'nebraska', name: 'Nebraska', why: 'borders Iowa; 2.46%–4.55%' },
    { slug: 'missouri', name: 'Missouri', why: 'borders Iowa; up to 4.7%' },
    { slug: 'wisconsin', name: 'Wisconsin', why: 'borders Iowa; 3.5%–7.65%' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Flat 3.8% for 2026 (IDR press release, 21 Oct 2025) applied to income after the federal standard deduction, because the IA 1040 starts from federal taxable income (IDR What\'s New, 2023). Withholding formula noted but not used for the liability.',
  },
};

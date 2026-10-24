import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const WI_RATES = {
  source: 'Wisconsin Department of Revenue, Tax Rates FAQ — 2025 individual income tax rate schedules (3.50% / 4.40% / 5.30% / 7.65%)',
  sourceUrl: 'https://www.revenue.wi.gov/Pages/FAQS/pcs-taxrates.aspx',
  retrievedAt: RETRIEVED,
  note: '2025 schedule; the 2026 indexed brackets were not yet published.',
};

const WI_FORM1 = {
  source: 'Wisconsin Department of Revenue, 2025 Form 1 Instructions — Standard Deduction Table (p. 35) and line 10 exemptions ($700 per person)',
  sourceUrl: 'https://www.revenue.wi.gov/TaxForms2025/2025-Form1-Inst.pdf',
  retrievedAt: RETRIEVED,
  note: 'The sliding-scale formula below reproduces the 2025 table (to within the table\'s $500 income bands); 2026 amounts were not yet published.',
};

const WI_PUB121 = {
  source: 'Wisconsin Department of Revenue, Publication 121 (01/26), Reciprocity — agreements with Illinois, Indiana, Kentucky and Michigan; Form W-220',
  sourceUrl: 'https://www.revenue.wi.gov/DOR%20Publications/pb121.pdf',
  retrievedAt: RETRIEVED,
};

// Rates and brackets as printed for 2025 (head of household uses the single schedule).
const WI_SINGLE = [
  { upTo: 14680, rate: 0.035 },
  { upTo: 50480, rate: 0.044 },
  { upTo: 323290, rate: 0.053 },
  { upTo: null, rate: 0.0765 },
];
const WI_JOINT = [
  { upTo: 19580, rate: 0.035 },
  { upTo: 67300, rate: 0.044 },
  { upTo: 431060, rate: 0.053 },
  { upTo: null, rate: 0.0765 },
];

/*
 * Sliding-scale standard deduction, derived from the 2025 Standard Deduction
 * Table (rows are $500 income bands; the table value is the formula at the
 * band midpoint):
 *   single  $13,560 − 12%     × (income − $19,550)   → $0 at $132,550
 *   joint   $25,110 − 19.778% × (income − $28,210)
 *   HoH     $17,520 − 22.515% × (income − $19,550), but never below the single amount
 * Spot checks against the printed table: $20,500–$21,000 single $13,416, HoH $17,250;
 * $60,500–$61,000 single $8,616, joint $18,674, HoH $8,616.
 */
export const WISCONSIN: StateTaxSpec = {
  code: 'WI',
  slug: 'wisconsin',
  name: 'Wisconsin',
  taxYear: 2026,
  rateLead: '3.5%–7.65% state tax',
  summary:
    'Wisconsin taxes wages at 3.5% to 7.65% after a sliding-scale standard deduction that shrinks as income rises — $13,560 for a single filer at low incomes, about $8,700 at $60,000 and nothing above roughly $132,550 — plus a $700 personal exemption; 2026 figures use the 2025 schedules because the indexed 2026 amounts were not yet published.',
  wageTax: { kind: 'brackets', single: WI_SINGLE, married: WI_JOINT, hoh: WI_SINGLE, ...WI_RATES },
  deduction: {
    kind: 'standard',
    single: 14260,
    married: 26510,
    hoh: 18220,
    phaseout: {
      single: [{ amount: 13560, start: 19550, rate: 0.12 }],
      married: [{ amount: 25110, start: 28210, rate: 0.19778 }],
      hoh: [
        { amount: 17520, start: 19550, rate: 0.22515 },
        { amount: 13560, start: 19550, rate: 0.12 },
      ],
    },
    additional: { single: 700, married: 1400, hoh: 700 },
    ...WI_FORM1,
  },
  payrollDeductions: [],
  lines: [
    {
      label: 'Wisconsin state income tax',
      rateText: '3.50% / 4.40% / 5.30% / 7.65%',
      computed: true,
      detail:
        'Single and head of household: 3.5% to $14,680, 4.4% to $50,480, 5.3% to $323,290, 7.65% above. Married filing jointly: $19,580 / $67,300 / $431,060. These are the 2025 brackets after the 2025 budget widened the 4.4% bracket; Wisconsin indexes them each year.',
      ...WI_RATES,
    },
    {
      label: 'Sliding-scale standard deduction',
      rateText: '$13,560 single / $25,110 joint / $17,520 head of household, phasing out',
      computed: true,
      detail:
        'The deduction falls by 12% of income above about $19,550 for a single filer (19.778% above about $28,210 jointly) and reaches zero near $132,550 single. At $60,000 a single filer gets about $8,700. The calculator uses the formula behind the Department\'s table rather than the $500-band lookup, so results can differ from the form by a few dollars.',
      ...WI_FORM1,
    },
    {
      label: 'Personal exemption',
      rateText: '$700 per person',
      computed: true,
      detail: 'One exemption for a single or head-of-household filer and two for a joint return. Dependents ($700 each) and the extra $250 for age 65 or older are not counted.',
      ...WI_FORM1,
    },
  ],
  notes: [
    {
      title: 'Reciprocity with Illinois, Indiana, Kentucky and Michigan',
      body:
        'Wisconsin has reciprocity agreements with four states: Illinois, Indiana, Kentucky and Michigan. Residents of those states working in Wisconsin file Form W-220 with their employer to stop Wisconsin withholding on the covered wages and pay tax to their home state instead.',
      ...WI_PUB121,
    },
    {
      title: 'The deduction does most of the work at low incomes',
      body:
        'Because the standard deduction phases out, a Wisconsin raise is taxed at more than the bracket rate: each extra dollar of a single filer\'s income in the phase-out range also removes 12 cents of deduction. At the 4.4% bracket that adds about 0.5 percentage points to the effective marginal rate.',
      ...WI_FORM1,
    },
    {
      title: 'Why 2025 figures',
      body:
        'Wisconsin adjusts its brackets and standard deduction for inflation each year, but at review the Department had published only the 2025 schedules. Indexing raises the thresholds, so the 2026 tax on the same wages will be slightly lower than shown.',
      ...WI_RATES,
    },
  ],
  neighbors: [
    { slug: 'minnesota', name: 'Minnesota', why: 'borders Wisconsin; 5.35%–9.85%' },
    { slug: 'illinois', name: 'Illinois', why: 'borders Wisconsin; reciprocal state' },
    { slug: 'michigan', name: 'Michigan', why: 'borders Wisconsin; reciprocal state' },
    { slug: 'iowa', name: 'Iowa', why: 'borders Wisconsin; flat 3.8%' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    priorYearFigures: [
      'brackets are the 2025 schedules from the Department of Revenue Tax Rates page',
      'the sliding-scale standard deduction reproduces the 2025 Form 1 Standard Deduction Table; the $700 exemption is the 2025 amount',
    ],
    description:
      'Wisconsin 2025 rate schedules (DOR Tax Rates FAQ) and the 2025 sliding-scale standard deduction, expressed as the formula behind the Form 1 Standard Deduction Table, plus $700 per personal exemption. Reciprocity from DOR Publication 121 (01/26).',
  },
};

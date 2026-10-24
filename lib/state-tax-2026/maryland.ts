import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-23';

const MD_CPB_2026 = {
  source: 'Comptroller of Maryland, Central Payroll Bureau memo of 4 Feb 2026: 2026 Maryland State and Local Income Tax Withholding Information (state rate schedules, 2026 county rates, 7.0% nonresident rate)',
  sourceUrl: 'https://www.marylandcomptroller.gov/content/dam/mdcomp/md/state-payroll/memos/2026/2026-maryland-state-and-local-withholding-information.pdf',
  retrievedAt: RETRIEVED,
};

const MD_TAX_ALERT = {
  source: 'Comptroller of Maryland, Tax Alert (revised 22 Dec 2025): Changes to standard and itemized deductions and to state and local income tax rates from the 2025 legislative session (Chapter 604, Budget Reconciliation and Financing Act of 2025)',
  sourceUrl:
    'https://www.marylandcomptroller.gov/content/dam/mdcomp/tax/legal-publications/alerts/tax-alert-changes-to-standard-and-itemized-deductions-and-to-state-and-local-income-tax-rates-from-the-2025-legislative-session.pdf',
  retrievedAt: RETRIEVED,
  note: 'Standard deduction amounts stated for the tax year beginning after 31 Dec 2024 (2025), indexed thereafter; the 2026 employer guide uses $3,400 for single-filer withholding.',
};

const MD_WITHHOLDING_GUIDE_2026 = {
  source: 'Comptroller of Maryland, Maryland Employer Withholding Guide (revised December 2025, effective January 2026): standard deduction $3,400 for the percentage method; $3,200 per exemption',
  sourceUrl: 'https://www.marylandcomptroller.gov/content/dam/mdcomp/tax/instructions/withholding/2026/withholding-guide.pdf',
  retrievedAt: RETRIEVED,
};

const MD_MW507_2026 = {
  source: 'Comptroller of Maryland, 2026 Instructions for Form MW507 (exemption phase-out by federal AGI; residents of DC, Virginia, West Virginia and Pennsylvania exempt from Maryland withholding)',
  sourceUrl: 'https://www.marylandcomptroller.gov/content/dam/mdcomp/md/state-payroll/forms/withholding/2026-instructions-mw507.pdf',
  retrievedAt: RETRIEVED,
};

export const MARYLAND: StateTaxSpec = {
  code: 'MD',
  slug: 'maryland',
  name: 'Maryland',
  taxYear: 2026,
  rateLead: '2%–6.5% state tax (county tax extra)',
  summary:
    'Maryland taxes wages on ten brackets from 2% to 6.5%, with 4.75% covering most of a typical salary (taxable income from $3,000 to $100,000 single, $150,000 joint), after a $3,350 standard deduction for a single filer ($6,700 joint); every Maryland county and Baltimore City adds a local income tax of 2.25% to 3.3% that this calculator does not include.',
  wageTax: {
    kind: 'brackets',
    single: [
      { upTo: 1000, rate: 0.02 },
      { upTo: 2000, rate: 0.03 },
      { upTo: 3000, rate: 0.04 },
      { upTo: 100000, rate: 0.0475 },
      { upTo: 125000, rate: 0.05 },
      { upTo: 150000, rate: 0.0525 },
      { upTo: 250000, rate: 0.055 },
      { upTo: 500000, rate: 0.0575 },
      { upTo: 1000000, rate: 0.0625 },
      { upTo: null, rate: 0.065 },
    ],
    married: [
      { upTo: 1000, rate: 0.02 },
      { upTo: 2000, rate: 0.03 },
      { upTo: 3000, rate: 0.04 },
      { upTo: 150000, rate: 0.0475 },
      { upTo: 175000, rate: 0.05 },
      { upTo: 225000, rate: 0.0525 },
      { upTo: 300000, rate: 0.055 },
      { upTo: 600000, rate: 0.0575 },
      { upTo: 1200000, rate: 0.0625 },
      { upTo: null, rate: 0.065 },
    ],
    // Maryland uses the joint schedule for head of household.
    hoh: [
      { upTo: 1000, rate: 0.02 },
      { upTo: 2000, rate: 0.03 },
      { upTo: 3000, rate: 0.04 },
      { upTo: 150000, rate: 0.0475 },
      { upTo: 175000, rate: 0.05 },
      { upTo: 225000, rate: 0.0525 },
      { upTo: 300000, rate: 0.055 },
      { upTo: 600000, rate: 0.0575 },
      { upTo: 1200000, rate: 0.0625 },
      { upTo: null, rate: 0.065 },
    ],
    ...MD_CPB_2026,
  },
  deduction: {
    kind: 'standard',
    single: 3350,
    married: 6700,
    hoh: 6700,
    ...MD_TAX_ALERT,
    note: 'The $3,200 personal exemption (which phases out above $100,000 of federal AGI) is not applied, so the state figure is conservative by up to $3,200 × your bracket.',
  },
  payrollDeductions: [],
  lines: [
    {
      label: 'Maryland state income tax',
      rateText: '2% to 6.5% (ten brackets)',
      computed: true,
      detail:
        'Single filers: 2% to $1,000, 3% to $2,000, 4% to $3,000, 4.75% to $100,000, 5% to $125,000, 5.25% to $150,000, 5.5% to $250,000, 5.75% to $500,000, 6.25% to $1 million, 6.5% above. Joint and head-of-household filers: 4.75% to $150,000, 5% to $175,000, 5.25% to $225,000, 5.5% to $300,000, 5.75% to $600,000, 6.25% to $1.2 million, 6.5% above. The 6.25% and 6.5% brackets are new from tax year 2025 (Chapter 604 of 2025).',
      ...MD_CPB_2026,
    },
    {
      label: 'Standard deduction',
      rateText: '$3,350 single / $6,700 joint or head of household (2025, indexed)',
      computed: true,
      detail:
        'Chapter 604 of 2025 replaced the old income-based deduction (which was capped at $2,250 / $4,500) with a fixed amount indexed to cost of living. The Comptroller\'s 2026 withholding guide uses $3,400 for a single filer; the 2026 joint amount had not been published at retrieval, so the 2025 amounts are used for both.',
      ...MD_TAX_ALERT,
    },
    {
      label: 'Personal exemption',
      rateText: '$3,200 per exemption, phased out above $100,000 federal AGI — not applied',
      computed: false,
      detail:
        'Worth the full $3,200 at or below $100,000 of federal AGI for a single filer, $1,600 to $125,000, $800 to $150,000 and nothing above; joint filers keep the full amount to $150,000, then $1,600 to $175,000 and $800 to $200,000. Not modelled here because the phase-out depends on total household income.',
      ...MD_MW507_2026,
    },
    {
      label: 'County / Baltimore City income tax',
      rateText: '2.25% to 3.30% of Maryland taxable income — not included',
      computed: false,
      detail:
        'Every county and Baltimore City levies a local income tax collected with the state tax, based on where you live. 2026 rates: Worcester 2.25%; Talbot 2.40%; Garrett 2.65%; Cecil 2.74%; Washington 2.95%; Carroll and Charles 3.03%; Harford 3.06%; Allegany, Baltimore City, Baltimore County, Calvert, Caroline, Howard, Montgomery, Prince George\'s, Queen Anne\'s, St. Mary\'s, Somerset and Wicomico 3.20%; Dorchester and Kent 3.30%. Anne Arundel (2.70%–3.20%) and Frederick (2.25%–3.20%) use income brackets. Nonresidents pay a special 2.25% rate instead.',
      ...MD_CPB_2026,
    },
  ],
  notes: [
    {
      title: 'Reciprocity with DC, PA, VA and WV',
      body:
        'Residents of the District of Columbia, Virginia and West Virginia who work in Maryland, and do not maintain a place of abode in Maryland for 183 days or more, are exempt from Maryland withholding and pay only their home jurisdiction (Form MW507, line 4). Pennsylvania residents claim the exemption from the state portion on line 5, but the MW507 instructions note they may still owe Maryland local withholding at their county of employment\'s rate unless a further exemption on line 6 or 7 applies. Maryland residents working in those states get the mirror treatment and pay Maryland state and county tax on their wages. Residents of other states working in Maryland are taxed by Maryland.',
      ...MD_MW507_2026,
    },
    {
      title: 'The county line is as big as the state line',
      body:
        'For a single filer on $60,000, Maryland state tax is $2,638 while the county tax at the common 3.20% rate on the same taxable income is $1,813 — and in Dorchester or Kent (3.30%) slightly more. Add your county\'s rate from the list above to the state figure on this page to see the full Maryland deduction. Counties may raise their rate up to 3.30% from tax year 2026.',
      ...MD_TAX_ALERT,
    },
    {
      title: 'What changed in 2025 and 2026',
      body:
        'The Budget Reconciliation and Financing Act of 2025 (Chapter 604) added the 6.25% and 6.5% brackets for income over $500,000 / $600,000 and $1 million / $1.2 million, replaced the percentage-based standard deduction with a fixed indexed amount ($3,350 / $6,700 for 2025), and raised the maximum county rate from 3.20% to 3.30%. Allegany moved to 3.20% and Kent to 3.30% for 2026.',
      ...MD_TAX_ALERT,
    },
  ],
  neighbors: [
    { slug: 'virginia', name: 'Virginia', why: 'borders Maryland; reciprocal state' },
    { slug: 'pennsylvania', name: 'Pennsylvania', why: 'borders Maryland; reciprocal state' },
    { slug: 'west-virginia', name: 'West Virginia', why: 'borders Maryland; reciprocal state' },
    { slug: 'delaware', name: 'Delaware', why: 'borders Maryland' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    priorYearFigures: [
      'Standard deduction $3,350 / $6,700 is the 2025 amount from the Comptroller\'s tax alert (indexed; the 2026 withholding guide uses $3,400 for single filers, and no 2026 joint amount was published)',
    ],
    description:
      '2026 state brackets, county rates and the 7% nonresident rate from the Comptroller\'s Central Payroll Bureau memo of 4 Feb 2026. Standard deduction from the Comptroller\'s tax alert on Chapter 604 of 2025. Exemption phase-out and reciprocal states from the 2026 MW507 instructions. County taxes and the personal exemption are not computed.',
  },
};

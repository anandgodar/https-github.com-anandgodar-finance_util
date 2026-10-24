import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const DE_1102 = {
  source: 'Delaware Code Title 30 §1102(a)(14) — rates for taxable years beginning after 31 December 2013',
  sourceUrl: 'https://delcode.delaware.gov/title30/c011/sc01/index.html',
  retrievedAt: RETRIEVED,
};

const DE_SC2 = {
  source: 'Delaware Code Title 30 §1108 (standard deduction $3,250 individual / $6,500 joint) and §1110(b) ($110 personal credit per exemption)',
  sourceUrl: 'https://delcode.delaware.gov/title30/c011/sc02/index.html',
  retrievedAt: RETRIEVED,
};

const DE_PFML = {
  source: 'Delaware Code Title 19 §3705 (contributions: "For 2025 and 2026" 0.4% medical, 0.08% family caregiving, 0.32% parental; (d) employer "shall deduct not greater than 50%" from the employee) and §3701 ("wages" as determined for Social Security, so capped at the Social Security wage base)',
  sourceUrl: 'https://delcode.delaware.gov/title19/c037/index.html',
  retrievedAt: RETRIEVED,
};

const DE_DOL = {
  source: 'Delaware Department of Labor, Delaware Paid Leave presentation — "Employers can have employees contribute up to 50% of the 0.8% of wages"; contributions from 1 January 2025',
  sourceUrl: 'https://laborfiles.delaware.gov/main/pfl/Delaware_Paid_Leave_Presentation.pdf',
  retrievedAt: RETRIEVED,
};

const WILM = {
  source: 'City of Wilmington, Delaware — guidance on refunds of earned income (wage) taxes withheld from non-resident employees (Feb 2022)',
  sourceUrl: 'https://wilmingtonde.gov/home/showpublisheddocument/9785/637801043991670000',
  retrievedAt: RETRIEVED,
};

const DE_BRACKETS = [
  { upTo: 2000, rate: 0 },
  { upTo: 5000, rate: 0.022 },
  { upTo: 10000, rate: 0.039 },
  { upTo: 20000, rate: 0.048 },
  { upTo: 25000, rate: 0.052 },
  { upTo: 60000, rate: 0.0555 },
  { upTo: null, rate: 0.066 },
];

export const DELAWARE: StateTaxSpec = {
  code: 'DE',
  slug: 'delaware',
  name: 'Delaware',
  taxYear: 2026,
  rateLead: '0%–6.6% tax + 0.4% Paid Leave',
  summary:
    'Delaware taxes income from 2.2% to 6.6% above a $2,000 zero bracket, after a $3,250 standard deduction ($6,500 joint), and subtracts a $110 personal credit; employers may withhold up to 0.4% of wages for Delaware Paid Leave, and Wilmington adds its own wage tax, which is not included.',
  wageTax: { kind: 'brackets', single: DE_BRACKETS, married: DE_BRACKETS, hoh: DE_BRACKETS, ...DE_1102 },
  deduction: { kind: 'standard', single: 3250, married: 6500, hoh: 3250, ...DE_SC2 },
  adjustments: { credit: { single: 110, married: 220, hoh: 110, ...DE_SC2, note: '$110 per personal exemption; dependents not counted.' } },
  payrollDeductions: [
    {
      id: 'de-paid-leave',
      label: 'Delaware Paid Leave (employee share)',
      rate: 0.004,
      wageBase: 184500,
      ...DE_PFML,
      note: 'Maximum employee share (50% of 0.8%); wage cap = 2026 Social Security limit ($184,500).',
    },
  ],
  lines: [
    {
      label: 'Delaware state income tax',
      rateText: '0% to $2,000, then 2.2% / 3.9% / 4.8% / 5.2% / 5.55% / 6.6%',
      computed: true,
      detail:
        '2.2% on $2,000–$5,000, 3.9% to $10,000, 4.8% to $20,000, 5.2% to $25,000, 5.55% to $60,000 and 6.6% above $60,000. The schedule has applied since 2014 and is the same for every filing status.',
      ...DE_1102,
    },
    {
      label: 'Standard deduction and personal credit',
      rateText: '$3,250 single / $6,500 joint; $110 credit per exemption',
      computed: true,
      detail: 'Section 1108 sets the standard deduction; §1110(b) allows a $110 credit against tax for each personal exemption (one single, two joint). Extra amounts for older or blind filers are not applied.',
      ...DE_SC2,
    },
    {
      label: 'Delaware Paid Leave (employee share)',
      rateText: 'Up to 0.4% of wages to $184,500',
      computed: true,
      detail: 'Contributions began on 1 January 2025 at 0.8% of wages for 2025 and 2026. Employers may have employees contribute up to half; the calculator assumes the maximum. $240 a year on $60,000. Employers with 10 to 24 employees cover parental leave only (0.32%, so at most 0.16% from employees), and those with fewer than 10 are exempt.',
      ...DE_DOL,
    },
    {
      label: 'City of Wilmington wage tax',
      rateText: 'Applies in Wilmington — not included',
      computed: false,
      detail: 'The City of Wilmington levies an earned income (wage) tax that employers withhold, including from non-resident employees who work in the city. Check the city\'s current rate.',
      ...WILM,
    },
  ],
  notes: [
    {
      title: 'Six rates, unchanged since 2014',
      body:
        'Delaware\'s rate schedule has been in place for taxable years beginning after 2013. A single filer on $60,000 has $56,750 of taxable income and owes $1,001 on the first $25,000 plus 5.55% of $31,750, less the $110 credit, about $2,653.',
      ...DE_1102,
    },
    {
      title: 'Paid leave is new since 2025',
      body:
        'Delaware Paid Leave contributions started on 1 January 2025: 0.4% for medical leave, 0.08% for family caregiving and 0.32% for parental leave, 0.8% in all for 2025 and 2026. Employers may deduct up to 50% from employees on wages up to the Social Security limit.',
      ...DE_PFML,
    },
    {
      title: 'Wilmington withholds from commuters',
      body:
        'Employers in Wilmington withhold the city wage tax from non-resident employees as well as residents. The city\'s February 2022 guidance covered refunds of 2020 and 2021 wage tax withheld from non-residents for work done outside the city.',
      ...WILM,
    },
  ],
  neighbors: [
    { slug: 'maryland', name: 'Maryland', why: 'borders Delaware; state plus county tax' },
    { slug: 'pennsylvania', name: 'Pennsylvania', why: 'borders Delaware; flat 3.07%' },
    { slug: 'new-jersey', name: 'New Jersey', why: 'across the Delaware River; 1.4%–10.75%' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Delaware rates (30 Del. C. §1102(a)(14)), standard deduction (§1108) and $110 personal credit (§1110). Paid Leave employee share up to 0.4% to the Social Security limit. Wilmington wage tax listed, not computed.',
  },
};

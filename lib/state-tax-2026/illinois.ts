import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-23';

const IL_700T = {
  source: 'Illinois Department of Revenue, Booklet IL-700-T, 2026 Illinois Withholding Tax Tables (R-12/25)',
  sourceUrl: 'https://tax.illinois.gov/forms/withholding/currentyear/il-700-t-withholding-guide-tables.html',
  retrievedAt: RETRIEVED,
};

const IL_COMPTROLLER = {
  source: 'Illinois Office of the Comptroller, Payroll Bulletin 1-26: Illinois State Income Tax Exemptions — 2026',
  sourceUrl:
    'https://illinoiscomptroller.gov/__media/sites/comptroller/assets/File/PayrollBulletins/Payroll%20Bulletin%201-26%20-%20Illinois%20State%20Income%20Tax%20Exemptions%20-%202026.pdf',
  retrievedAt: RETRIEVED,
};

const IL_PUB119 = {
  source: 'Illinois Department of Revenue, Publication 119: Illinois Schedule NR for Individuals (reciprocal states)',
  sourceUrl: 'https://tax.illinois.gov/research/publications/pubs/illinois-schedule-nr-for-individuals.html',
  retrievedAt: RETRIEVED,
};

export const ILLINOIS: StateTaxSpec = {
  code: 'IL',
  slug: 'illinois',
  name: 'Illinois',
  taxYear: 2026,
  rateLead: 'flat 4.95% state tax',
  summary:
    'Illinois taxes wages at a flat 4.95% after a $2,925 personal exemption (2026), with no local income tax.',
  wageTax: { kind: 'flat', rate: 0.0495, ...IL_700T },
  deduction: {
    kind: 'exemption',
    single: 2925,
    married: 5850,
    hoh: 2925,
    ...IL_COMPTROLLER,
    note: 'Per-person exemption; a joint return claims two. Dependent exemptions are not modelled.',
  },
  payrollDeductions: [],
  lines: [
    {
      label: 'Illinois state income tax',
      rateText: '4.95% flat',
      computed: true,
      detail: 'Applied to wages after the personal exemption. The rate has not changed for 2026.',
      ...IL_700T,
    },
    {
      label: 'Personal exemption',
      rateText: '$2,925 per person (2026)',
      computed: true,
      detail: 'Up from $2,850 in 2025. Withholding tables value each IL-W-4 Line 1 allowance at this amount.',
      ...IL_COMPTROLLER,
    },
    {
      label: 'Local income tax',
      rateText: 'None',
      computed: true,
      detail: 'Illinois withholding consists of the state rate only; no city or county wage tax applies, including in Chicago.',
      ...IL_700T,
    },
  ],
  notes: [
    {
      title: 'Reciprocity with Iowa, Kentucky, Michigan and Wisconsin',
      body:
        'If you live in Iowa, Kentucky, Michigan or Wisconsin and work in Illinois, your wages are taxed by your home state, not Illinois. Give your employer Form IL-W-5-NR (Employee\'s Statement of Nonresidence in Illinois) to stop Illinois withholding. The reverse applies to Illinois residents working in those four states. Indiana and Missouri are not reciprocal: an Illinois resident working there files a nonresident return and claims a credit on the IL-1040.',
      ...IL_PUB119,
    },
    {
      title: 'How the flat rate is applied',
      body:
        'Illinois has no standard deduction and no brackets. Taxable wages are gross wages less $2,925 per exemption claimed; the result is taxed at 4.95%. A single filer earning $60,000 pays 4.95% × ($60,000 − $2,925) = $2,825 a year, about $109 per biweekly paycheck.',
      ...IL_700T,
    },
  ],
  neighbors: [
    { slug: 'indiana', name: 'Indiana', why: 'borders Illinois; not reciprocal' },
    { slug: 'wisconsin', name: 'Wisconsin', why: 'reciprocal state' },
    { slug: 'iowa', name: 'Iowa', why: 'reciprocal state' },
    { slug: 'missouri', name: 'Missouri', why: 'borders Illinois; not reciprocal' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      '2026 figures. Rate 4.95% and the $2,925 per-allowance exemption are from the 2026 IL-700-T withholding booklet and the Comptroller\'s 2026 payroll bulletin.',
  },
};

import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const UT_SB60 = {
  source: 'Utah Legislature, S.B. 60 Income Tax Rate Amendments (2026 General Session), enrolled copy — §59-10-104(2)(b) rate "4.45%"; takes effect 6 May 2026 with "retrospective operation for a taxable year beginning on or after January 1, 2026"',
  sourceUrl: 'https://le.utah.gov/Session/2026/bills/enrolled/SB0060.pdf',
  retrievedAt: RETRIEVED,
};

const UT_PUB14 = {
  source: 'Utah State Tax Commission, Publication 14 Withholding Tax Guide (Rev. 4/26, effective 1 June 2026) — 4.45% of wages less a base allowance reduced by 1.3% of wages above a threshold',
  sourceUrl: 'https://files.tax.utah.gov/tax/forms/pubs/pub-14.pdf',
  retrievedAt: RETRIEVED,
};

const UT_TC40 = {
  source: 'Utah State Tax Commission, 2025 TC-40 Instructions — taxpayer tax credit: 6% of federal standard deduction (plus dependent exemptions), less 1.3% of income above $18,213 single / $36,426 joint / $27,320 head of household',
  sourceUrl: 'https://files.tax.utah.gov/tax/forms/current/tc-40inst.pdf',
  retrievedAt: RETRIEVED,
  note: '2025 base phase-out amounts; 2026 amounts not yet published.',
};

export const UTAH: StateTaxSpec = {
  code: 'UT',
  slug: 'utah',
  name: 'Utah',
  taxYear: 2026,
  rateLead: 'flat 4.45% state tax',
  summary:
    'Utah taxes 2026 income at a flat 4.45% — cut from 4.5% by S.B. 60, retroactive to 1 January — with no standard deduction; instead a taxpayer credit worth 6% of the federal standard deduction ($966 for a single filer) is subtracted from the tax and phases out at 1.3 cents per dollar of income above $18,213.',
  wageTax: { kind: 'flat', rate: 0.0445, ...UT_SB60 },
  deduction: { kind: 'none', single: 0, married: 0, hoh: 0, ...UT_TC40 },
  adjustments: {
    credit: {
      single: 966,
      married: 1932,
      hoh: 1449,
      phaseoutStart: { single: 18213, married: 36426, hoh: 27320 },
      phaseoutRate: 0.013,
      ...UT_TC40,
      note: 'Initial credit = 6% × 2026 federal standard deduction ($16,100 / $32,200 / $24,150); dependents not counted; 2025 phase-out bases.',
    },
  },
  payrollDeductions: [],
  lines: [
    {
      label: 'Utah state income tax',
      rateText: '4.45% flat (2026)',
      computed: true,
      detail: 'S.B. 60 lowered the rate from 4.5% to 4.45% retroactive to 1 January 2026. The Tax Commission\'s revised withholding tables apply from pay periods beginning 1 June 2026.',
      ...UT_SB60,
    },
    {
      label: 'Taxpayer tax credit',
      rateText: '6% of the federal standard deduction, phasing out at 1.3% of income',
      computed: true,
      detail:
        'The credit starts at 6% of the federal standard deduction (plus dependent exemptions, not counted here): $966 single, $1,932 joint, $1,449 head of household. It falls by 1.3% of income above $18,213 single ($36,426 joint, $27,320 head of household) and is gone at about $92,500 for a single filer.',
      ...UT_TC40,
    },
  ],
  notes: [
    {
      title: 'A credit instead of a deduction',
      body:
        'Utah taxes from the first dollar and then gives back a taxpayer credit. A single filer on $60,000 owes 4.45% of $60,000, or $2,670, less a credit of $966 − 1.3% × $41,787 = $422.77, for about $2,247.',
      ...UT_TC40,
    },
    {
      title: 'The mid-year rate cut',
      body:
        'Because S.B. 60 took effect retroactively, wages paid before June 2026 were withheld at the old 4.5% rate and the Tax Commission\'s new tables apply from 1 June. Any over-withholding from the first five months comes back when the 2026 return is filed. The new annual schedule takes 4.45% of wages less a $485 base allowance (single) reduced by 1.3% of wages above $9,348.',
      ...UT_PUB14,
    },
    {
      title: 'Why the credit vanishes for higher earners',
      body:
        'At 1.3 cents per dollar, the $966 single credit is fully phased out once income exceeds about $92,500, so above that Utah is a true flat 4.45% tax on all income. Inside the phase-out range the effective marginal rate is 5.75%.',
      ...UT_TC40,
    },
  ],
  neighbors: [
    { slug: 'idaho', name: 'Idaho', why: 'borders Utah; 5.3%' },
    { slug: 'nevada', name: 'Nevada', why: 'borders Utah; no income tax' },
    { slug: 'arizona', name: 'Arizona', why: 'borders Utah; flat 2.5%' },
    { slug: 'colorado', name: 'Colorado', why: 'borders Utah; flat 4.4%' },
    { slug: 'wyoming', name: 'Wyoming', why: 'borders Utah; no income tax' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    priorYearFigures: ['taxpayer tax credit phase-out bases ($18,213 / $36,426 / $27,320) are from the 2025 TC-40 instructions'],
    description:
      'Flat 4.45% (S.B. 60, retroactive to 1 Jan 2026) on income with no deduction, less the taxpayer tax credit: 6% of the 2026 federal standard deduction, reduced by 1.3% of income above the 2025 TC-40 base amounts.',
  },
};

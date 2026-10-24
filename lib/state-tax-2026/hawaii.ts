import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const HI_235_51 = {
  source: 'Hawaii Revised Statutes §235-51 — rate schedules for taxable years beginning after 31 December 2024 (next change after 31 December 2026)',
  sourceUrl: 'https://www.capitol.hawaii.gov/hrscurrent/Vol04_Ch0201-0257/HRS0235/HRS_0235-0051.htm',
  retrievedAt: RETRIEVED,
};

const HI_STD = {
  source: 'Hawaii Revised Statutes §235-2.4(F) — standard deduction for taxable years beginning after 31 December 2025: $16,000 joint, $12,000 head of household, $8,000 single',
  sourceUrl: 'https://www.capitol.hawaii.gov/hrscurrent/Vol04_Ch0201-0257/HRS0235/HRS_0235-0002_0004.htm',
  retrievedAt: RETRIEVED,
};

const HI_EXEMPT = {
  source: 'Hawaii Revised Statutes §235-54 — personal exemption of $1,144 per exemption',
  sourceUrl: 'https://www.capitol.hawaii.gov/hrscurrent/Vol04_Ch0201-0257/HRS0235/HRS_0235-0054.htm',
  retrievedAt: RETRIEVED,
};

const HI_TDI = {
  source: 'Hawaii Disability Compensation Division, 2026 Maximum Weekly Wage Base ($1,500.21) and maximum weekly employee deduction ($7.50; no more than 0.5% of weekly wages)',
  sourceUrl: 'https://labor.hawaii.gov/dcd/files/2025/12/2026-Maximum-Weekly-Wage-Base.pdf',
  retrievedAt: RETRIEVED,
};

const RATES = [0.014, 0.032, 0.055, 0.064, 0.068, 0.072, 0.076, 0.079, 0.0825, 0.09, 0.1, 0.11];
const sched = (ceilings: number[]) => RATES.map((rate, i) => ({ upTo: i < ceilings.length ? ceilings[i] : null, rate }));

export const HAWAII: StateTaxSpec = {
  code: 'HI',
  slug: 'hawaii',
  name: 'Hawaii',
  taxYear: 2026,
  rateLead: '1.4%–11% tax + 0.5% TDI',
  summary:
    'Hawaii taxes 2026 income on twelve brackets from 1.4% to 11% after a standard deduction that doubles to $8,000 for a single filer in 2026 ($16,000 joint) plus a $1,144 personal exemption; employers may also withhold up to 0.5% of wages, at most $7.50 a week, for Temporary Disability Insurance.',
  wageTax: {
    kind: 'brackets',
    single: sched([9600, 14400, 19200, 24000, 36000, 48000, 125000, 175000, 225000, 275000, 325000]),
    married: sched([19200, 28800, 38400, 48000, 72000, 96000, 250000, 350000, 450000, 550000, 650000]),
    hoh: sched([14400, 21600, 28800, 36000, 54000, 72000, 187500, 262500, 337500, 412500, 487500]),
    ...HI_235_51,
  },
  deduction: { kind: 'standard', single: 9144, married: 18288, hoh: 13144, ...HI_STD },
  payrollDeductions: [
    {
      id: 'hi-tdi',
      label: 'Temporary Disability Insurance (employee share)',
      rate: 0.005,
      wageBase: 1500.21 * 52,
      ...HI_TDI,
      note: 'Maximum employee withholding: 0.5% of weekly wages up to the $1,500.21 weekly wage base ($7.50 a week), annualized over 52 weeks.',
    },
  ],
  lines: [
    {
      label: 'Hawaii state income tax',
      rateText: '1.4% to 11% across twelve brackets',
      computed: true,
      detail:
        'Single: 1.4% to $9,600, 3.2% to $14,400, 5.5% to $19,200, 6.4% to $24,000, 6.8% to $36,000, 7.2% to $48,000, 7.6% to $125,000, then 7.9%, 8.25%, 9%, 10% and 11% above $325,000. Joint brackets are twice the single ones and head-of-household brackets one and a half times. This schedule applies to 2025 and 2026; wider brackets start in 2027.',
      ...HI_235_51,
    },
    {
      label: 'Standard deduction and exemption',
      rateText: '$8,000 + $1,144 single / $16,000 + $2,288 joint / $12,000 + $1,144 head of household (2026)',
      computed: true,
      detail: 'The standard deduction rises to $8,000 single for taxable years beginning after 31 December 2025 and to $9,000 from 2028. The personal exemption is $1,144 per person; dependents are not counted here.',
      ...HI_STD,
    },
    {
      label: 'Temporary Disability Insurance (employee share)',
      rateText: 'Up to 0.5% of wages, max $7.50 a week (2026)',
      computed: true,
      detail:
        'An employer may withhold half the TDI premium cost but not more than 0.5% of the employee\'s weekly wage, with the 2026 weekly wage base of $1,500.21 capping the deduction at $7.50 a week, or $390 a year. The calculator assumes the maximum.',
      ...HI_TDI,
    },
  ],
  notes: [
    {
      title: 'The 2026 standard deduction jump',
      body:
        'HRS §235-2.4 raises the standard deduction in stages: $4,400 single for 2024–2025, $8,000 for 2026 and 2027, and $9,000 from 2028. Combined with the $1,144 exemption, a single filer on $60,000 has $50,856 of taxable income for 2026.',
      ...HI_STD,
    },
    {
      title: 'Most salaries reach the 7.6% bracket',
      body:
        'Hawaii\'s brackets are narrow at the bottom, so a single filer reaches 7.6% at $48,000 of taxable income. On $50,856 the tax is about $2,756: $2,539.20 on the first $48,000 plus 7.6% of $2,856.',
      ...HI_235_51,
    },
    {
      title: 'TDI is capped weekly',
      body:
        'Temporary Disability Insurance withholding is limited to $7.50 a week in 2026. Anyone earning at least $1,500.21 a week (about $78,000 a year) pays the same $390 for the year; below that it is 0.5% of pay.',
      ...HI_TDI,
    },
  ],
  neighbors: [
    { slug: 'california', name: 'California', why: 'West Coast comparison; 1%–13.3% plus SDI' },
    { slug: 'alaska', name: 'Alaska', why: 'the other non-contiguous state; no income tax' },
    { slug: 'oregon', name: 'Oregon', why: 'Pacific comparison; up to 9.9%' },
    { slug: 'washington', name: 'Washington', why: 'no income tax; PFML and WA Cares' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'HRS §235-51 brackets for tax years after 2024, HRS §235-2.4(F) standard deduction for tax years after 2025, $1,144 exemption (§235-54), and 2026 TDI maximum employee deduction from the Disability Compensation Division.',
  },
};

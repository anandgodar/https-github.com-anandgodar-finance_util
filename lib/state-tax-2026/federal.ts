import type { Bracket, FilingStatus, Provenance } from './types';

/**
 * Federal income tax and FICA parameters for tax year 2026.
 *
 * Brackets and standard deduction: IRS Rev. Proc. 2025-32 (IRB 2025-45),
 * as published in the IRS newsroom release of 9 Oct 2025. Single and
 * married-filing-jointly thresholds were read directly from that release.
 * Head-of-household thresholds are from the same Rev. Proc., cross-checked
 * against a secondary table on 2026-10-23 (the IRS release omits the HoH
 * rate table).
 */
export const FEDERAL_2026 = {
  taxYear: 2026,
  provenance: {
    source: 'IRS, Rev. Proc. 2025-32 (tax year 2026 inflation adjustments)',
    sourceUrl:
      'https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill',
    retrievedAt: '2026-10-23',
  } satisfies Provenance,
  standardDeduction: { single: 16100, married: 32200, hoh: 24150 } as Record<FilingStatus, number>,
  brackets: {
    single: [
      { upTo: 12400, rate: 0.1 },
      { upTo: 50400, rate: 0.12 },
      { upTo: 105700, rate: 0.22 },
      { upTo: 201775, rate: 0.24 },
      { upTo: 256225, rate: 0.32 },
      { upTo: 640600, rate: 0.35 },
      { upTo: null, rate: 0.37 },
    ],
    married: [
      { upTo: 24800, rate: 0.1 },
      { upTo: 100800, rate: 0.12 },
      { upTo: 211400, rate: 0.22 },
      { upTo: 403550, rate: 0.24 },
      { upTo: 512450, rate: 0.32 },
      { upTo: 768700, rate: 0.35 },
      { upTo: null, rate: 0.37 },
    ],
    hoh: [
      { upTo: 17700, rate: 0.1 },
      { upTo: 67450, rate: 0.12 },
      { upTo: 105700, rate: 0.22 },
      { upTo: 201750, rate: 0.24 },
      { upTo: 256200, rate: 0.32 },
      { upTo: 640600, rate: 0.35 },
      { upTo: null, rate: 0.37 },
    ],
  } as Record<FilingStatus, Bracket[]>,
};

/**
 * FICA for 2026. Social Security wage base from the SSA's October 2025
 * announcement; rates and the Additional Medicare Tax thresholds are
 * statutory and unchanged (IRS Topic 751).
 */
export const FICA_2026 = {
  taxYear: 2026,
  socialSecurity: {
    rate: 0.062,
    wageBase: 184500,
    source: 'Social Security Administration, 2026 Social Security Changes fact sheet',
    sourceUrl: 'https://www.ssa.gov/cola/factsheets/2026.html',
    retrievedAt: '2026-10-23',
  },
  medicare: {
    rate: 0.0145,
    additionalRate: 0.009,
    additionalThreshold: { single: 200000, married: 250000, hoh: 200000 } as Record<FilingStatus, number>,
    source: 'IRS Topic No. 751, Social Security and Medicare withholding rates',
    sourceUrl: 'https://www.irs.gov/taxtopics/tc751',
    retrievedAt: '2026-10-23',
  },
};

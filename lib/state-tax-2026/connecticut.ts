import type { StateTaxSpec, StatusTiers } from './types';

const RETRIEVED = '2026-10-24';

/**
 * Connecticut's income tax is built from five tables, all published in the
 * Department of Revenue Services' 2026 withholding calculation rules (TPG-211,
 * "unchanged from 2025"): A personal exemption (phases out $1,000 per $1,000),
 * B the rate schedule, C the 2% rate phase-out add-back, D the tax recapture,
 * and E the personal tax credit decimal. Tax = (B + C + D) × (1 − E).
 * Withholding codes map to filing status: F = single, C = married filing
 * jointly, B = head of household.
 */
const CT_TPG211 = {
  source: 'Connecticut Department of Revenue Services, TPG-211 2026 Withholding Calculation Rules (Rev. 12/25), Tables A–E',
  sourceUrl: 'https://portal.ct.gov/-/media/drs/forms/2025/wth/tpg-211_1225.pdf',
  retrievedAt: RETRIEVED,
};

const CT_PAID_LEAVE = {
  source: 'CT Paid Leave Authority, How CT Paid Leave contributions work — rate maintained at 0.5% for 2026, paid by employees up to the Social Security contribution limit',
  sourceUrl: 'https://www.ctpaidleave.org/how-ct-paid-leave-works/contributions',
  retrievedAt: RETRIEVED,
};

/** Table C — 2% tax rate phase-out add-back, keyed to annualized income. */
const TABLE_C: StatusTiers = {
    single: [{ upTo: 56500, value: 0 }, { upTo: 61500, value: 25 }, { upTo: 66500, value: 50 }, { upTo: 71500, value: 75 }, { upTo: 76500, value: 100 }, { upTo: 81500, value: 125 }, { upTo: 86500, value: 150 }, { upTo: 91500, value: 175 }, { upTo: 96500, value: 200 }, { upTo: 101500, value: 225 }, { upTo: null, value: 250 }],
    married: [{ upTo: 100500, value: 0 }, { upTo: 105500, value: 50 }, { upTo: 110500, value: 100 }, { upTo: 115500, value: 150 }, { upTo: 120500, value: 200 }, { upTo: 125500, value: 250 }, { upTo: 130500, value: 300 }, { upTo: 135500, value: 350 }, { upTo: 140500, value: 400 }, { upTo: 145500, value: 450 }, { upTo: null, value: 500 }],
    hoh: [{ upTo: 78500, value: 0 }, { upTo: 82500, value: 40 }, { upTo: 86500, value: 80 }, { upTo: 90500, value: 120 }, { upTo: 94500, value: 160 }, { upTo: 98500, value: 200 }, { upTo: 102500, value: 240 }, { upTo: 106500, value: 280 }, { upTo: 110500, value: 320 }, { upTo: 114500, value: 360 }, { upTo: null, value: 400 }],
  };

/** Table D — tax recapture, keyed to annualized income. */
const TABLE_D: StatusTiers = {
    single: [{ upTo: 105000, value: 0 }, { upTo: 110000, value: 25 }, { upTo: 115000, value: 50 }, { upTo: 120000, value: 75 }, { upTo: 125000, value: 100 }, { upTo: 130000, value: 125 }, { upTo: 135000, value: 150 }, { upTo: 140000, value: 175 }, { upTo: 145000, value: 200 }, { upTo: 150000, value: 225 }, { upTo: 200000, value: 250 }, { upTo: 205000, value: 340 }, { upTo: 210000, value: 430 }, { upTo: 215000, value: 520 }, { upTo: 220000, value: 610 }, { upTo: 225000, value: 700 }, { upTo: 230000, value: 790 }, { upTo: 235000, value: 880 }, { upTo: 240000, value: 970 }, { upTo: 245000, value: 1060 }, { upTo: 250000, value: 1150 }, { upTo: 255000, value: 1240 }, { upTo: 260000, value: 1330 }, { upTo: 265000, value: 1420 }, { upTo: 270000, value: 1510 }, { upTo: 275000, value: 1600 }, { upTo: 280000, value: 1690 }, { upTo: 285000, value: 1780 }, { upTo: 290000, value: 1870 }, { upTo: 295000, value: 1960 }, { upTo: 300000, value: 2050 }, { upTo: 305000, value: 2140 }, { upTo: 310000, value: 2230 }, { upTo: 315000, value: 2320 }, { upTo: 320000, value: 2410 }, { upTo: 325000, value: 2500 }, { upTo: 330000, value: 2590 }, { upTo: 335000, value: 2680 }, { upTo: 340000, value: 2770 }, { upTo: 345000, value: 2860 }, { upTo: 500000, value: 2950 }, { upTo: 505000, value: 3000 }, { upTo: 510000, value: 3050 }, { upTo: 515000, value: 3100 }, { upTo: 520000, value: 3150 }, { upTo: 525000, value: 3200 }, { upTo: 530000, value: 3250 }, { upTo: 535000, value: 3300 }, { upTo: 540000, value: 3350 }, { upTo: null, value: 3400 }],
    married: [{ upTo: 210000, value: 0 }, { upTo: 220000, value: 50 }, { upTo: 230000, value: 100 }, { upTo: 240000, value: 150 }, { upTo: 250000, value: 200 }, { upTo: 260000, value: 250 }, { upTo: 270000, value: 300 }, { upTo: 280000, value: 350 }, { upTo: 290000, value: 400 }, { upTo: 300000, value: 450 }, { upTo: 400000, value: 500 }, { upTo: 410000, value: 680 }, { upTo: 420000, value: 860 }, { upTo: 430000, value: 1040 }, { upTo: 440000, value: 1220 }, { upTo: 450000, value: 1400 }, { upTo: 460000, value: 1580 }, { upTo: 470000, value: 1760 }, { upTo: 480000, value: 1940 }, { upTo: 490000, value: 2120 }, { upTo: 500000, value: 2300 }, { upTo: 510000, value: 2480 }, { upTo: 520000, value: 2660 }, { upTo: 530000, value: 2840 }, { upTo: 540000, value: 3020 }, { upTo: 550000, value: 3200 }, { upTo: 560000, value: 3380 }, { upTo: 570000, value: 3560 }, { upTo: 580000, value: 3740 }, { upTo: 590000, value: 3920 }, { upTo: 600000, value: 4100 }, { upTo: 610000, value: 4280 }, { upTo: 620000, value: 4460 }, { upTo: 630000, value: 4640 }, { upTo: 640000, value: 4820 }, { upTo: 650000, value: 5000 }, { upTo: 660000, value: 5180 }, { upTo: 670000, value: 5360 }, { upTo: 680000, value: 5540 }, { upTo: 690000, value: 5720 }, { upTo: 1000000, value: 5900 }, { upTo: 1010000, value: 6000 }, { upTo: 1020000, value: 6100 }, { upTo: 1030000, value: 6200 }, { upTo: 1040000, value: 6300 }, { upTo: 1050000, value: 6400 }, { upTo: 1060000, value: 6500 }, { upTo: 1070000, value: 6600 }, { upTo: 1080000, value: 6700 }, { upTo: null, value: 6800 }],
    hoh: [{ upTo: 168000, value: 0 }, { upTo: 176000, value: 40 }, { upTo: 184000, value: 80 }, { upTo: 192000, value: 120 }, { upTo: 200000, value: 160 }, { upTo: 208000, value: 200 }, { upTo: 216000, value: 240 }, { upTo: 224000, value: 280 }, { upTo: 232000, value: 320 }, { upTo: 240000, value: 360 }, { upTo: 320000, value: 400 }, { upTo: 328000, value: 540 }, { upTo: 336000, value: 680 }, { upTo: 344000, value: 820 }, { upTo: 352000, value: 960 }, { upTo: 360000, value: 1100 }, { upTo: 368000, value: 1240 }, { upTo: 376000, value: 1380 }, { upTo: 384000, value: 1520 }, { upTo: 392000, value: 1660 }, { upTo: 400000, value: 1800 }, { upTo: 408000, value: 1940 }, { upTo: 416000, value: 2080 }, { upTo: 424000, value: 2220 }, { upTo: 432000, value: 2360 }, { upTo: 440000, value: 2500 }, { upTo: 448000, value: 2640 }, { upTo: 456000, value: 2780 }, { upTo: 464000, value: 2920 }, { upTo: 472000, value: 3060 }, { upTo: 480000, value: 3200 }, { upTo: 488000, value: 3340 }, { upTo: 496000, value: 3480 }, { upTo: 504000, value: 3620 }, { upTo: 512000, value: 3760 }, { upTo: 520000, value: 3900 }, { upTo: 528000, value: 4040 }, { upTo: 536000, value: 4180 }, { upTo: 544000, value: 4320 }, { upTo: 552000, value: 4460 }, { upTo: 800000, value: 4600 }, { upTo: 808000, value: 4680 }, { upTo: 816000, value: 4760 }, { upTo: 824000, value: 4840 }, { upTo: 832000, value: 4920 }, { upTo: 840000, value: 5000 }, { upTo: 848000, value: 5080 }, { upTo: 856000, value: 5160 }, { upTo: 864000, value: 5240 }, { upTo: null, value: 5320 }],
  };

/** Table E — personal tax credit decimal; tax is multiplied by (1 − decimal). */
const TABLE_E: StatusTiers = {
    single: [{ upTo: 18800, value: 0.75 }, { upTo: 19300, value: 0.7 }, { upTo: 19800, value: 0.65 }, { upTo: 20300, value: 0.6 }, { upTo: 20800, value: 0.55 }, { upTo: 21300, value: 0.5 }, { upTo: 21800, value: 0.45 }, { upTo: 22300, value: 0.4 }, { upTo: 25000, value: 0.35 }, { upTo: 25500, value: 0.3 }, { upTo: 26000, value: 0.25 }, { upTo: 26500, value: 0.2 }, { upTo: 31300, value: 0.15 }, { upTo: 31800, value: 0.14 }, { upTo: 32300, value: 0.13 }, { upTo: 32800, value: 0.12 }, { upTo: 33300, value: 0.11 }, { upTo: 60000, value: 0.1 }, { upTo: 60500, value: 0.09 }, { upTo: 61000, value: 0.08 }, { upTo: 61500, value: 0.07 }, { upTo: 62000, value: 0.06 }, { upTo: 62500, value: 0.05 }, { upTo: 63000, value: 0.04 }, { upTo: 63500, value: 0.03 }, { upTo: 64000, value: 0.02 }, { upTo: 64500, value: 0.01 }, { upTo: null, value: 0.0 }],
    married: [{ upTo: 30000, value: 0.75 }, { upTo: 30500, value: 0.7 }, { upTo: 31000, value: 0.65 }, { upTo: 31500, value: 0.6 }, { upTo: 32000, value: 0.55 }, { upTo: 32500, value: 0.5 }, { upTo: 33000, value: 0.45 }, { upTo: 33500, value: 0.4 }, { upTo: 40000, value: 0.35 }, { upTo: 40500, value: 0.3 }, { upTo: 41000, value: 0.25 }, { upTo: 41500, value: 0.2 }, { upTo: 50000, value: 0.15 }, { upTo: 50500, value: 0.14 }, { upTo: 51000, value: 0.13 }, { upTo: 51500, value: 0.12 }, { upTo: 52000, value: 0.11 }, { upTo: 96000, value: 0.1 }, { upTo: 96500, value: 0.09 }, { upTo: 97000, value: 0.08 }, { upTo: 97500, value: 0.07 }, { upTo: 98000, value: 0.06 }, { upTo: 98500, value: 0.05 }, { upTo: 99000, value: 0.04 }, { upTo: 99500, value: 0.03 }, { upTo: 100000, value: 0.02 }, { upTo: 100500, value: 0.01 }, { upTo: null, value: 0.0 }],
    hoh: [{ upTo: 24000, value: 0.75 }, { upTo: 24500, value: 0.7 }, { upTo: 25000, value: 0.65 }, { upTo: 25500, value: 0.6 }, { upTo: 26000, value: 0.55 }, { upTo: 26500, value: 0.5 }, { upTo: 27000, value: 0.45 }, { upTo: 27500, value: 0.4 }, { upTo: 34000, value: 0.35 }, { upTo: 34500, value: 0.3 }, { upTo: 35000, value: 0.25 }, { upTo: 35500, value: 0.2 }, { upTo: 44000, value: 0.15 }, { upTo: 44500, value: 0.14 }, { upTo: 45000, value: 0.13 }, { upTo: 45500, value: 0.12 }, { upTo: 46000, value: 0.11 }, { upTo: 74000, value: 0.1 }, { upTo: 74500, value: 0.09 }, { upTo: 75000, value: 0.08 }, { upTo: 75500, value: 0.07 }, { upTo: 76000, value: 0.06 }, { upTo: 76500, value: 0.05 }, { upTo: 77000, value: 0.04 }, { upTo: 77500, value: 0.03 }, { upTo: 78000, value: 0.02 }, { upTo: 78500, value: 0.01 }, { upTo: null, value: 0.0 }],
  };

export const CONNECTICUT: StateTaxSpec = {
  code: 'CT',
  slug: 'connecticut',
  name: 'Connecticut',
  taxYear: 2026,
  rateLead: '2%–6.99% tax + 0.5% CT Paid Leave',
  summary:
    'Connecticut taxes wages at 2% to 6.99%, but the schedule is only the start: the personal exemption ($15,000 single) phases out between $30,000 and $45,000, a personal tax credit of up to 75% of the tax phases out with income, and above about $56,500 (single) the benefit of the 2% bracket is added back; employees also pay 0.5% of wages to CT Paid Leave.',
  wageTax: {
    kind: 'brackets',
    single: [
      { upTo: 10000, rate: 0.02 },
      { upTo: 50000, rate: 0.045 },
      { upTo: 100000, rate: 0.055 },
      { upTo: 200000, rate: 0.06 },
      { upTo: 250000, rate: 0.065 },
      { upTo: 500000, rate: 0.069 },
      { upTo: null, rate: 0.0699 },
    ],
    married: [
      { upTo: 20000, rate: 0.02 },
      { upTo: 100000, rate: 0.045 },
      { upTo: 200000, rate: 0.055 },
      { upTo: 400000, rate: 0.06 },
      { upTo: 500000, rate: 0.065 },
      { upTo: 1000000, rate: 0.069 },
      { upTo: null, rate: 0.0699 },
    ],
    hoh: [
      { upTo: 16000, rate: 0.02 },
      { upTo: 80000, rate: 0.045 },
      { upTo: 160000, rate: 0.055 },
      { upTo: 320000, rate: 0.06 },
      { upTo: 400000, rate: 0.065 },
      { upTo: 800000, rate: 0.069 },
      { upTo: null, rate: 0.0699 },
    ],
    ...CT_TPG211,
  },
  deduction: {
    kind: 'exemption',
    single: 15000,
    married: 24000,
    hoh: 19000,
    phaseout: {
      single: [{ amount: 15000, start: 30000, step: 1000, perStep: 1000 }],
      married: [{ amount: 24000, start: 48000, step: 1000, perStep: 1000 }],
      hoh: [{ amount: 19000, start: 38000, step: 1000, perStep: 1000 }],
    },
    ...CT_TPG211,
  },
  adjustments: {
    addOns: [
      { id: 'ct-2pct-phaseout', basis: 'income', tiers: TABLE_C, ...CT_TPG211 },
      { id: 'ct-recapture', basis: 'income', tiers: TABLE_D, ...CT_TPG211 },
    ],
    taxReductionRate: { tiers: TABLE_E, ...CT_TPG211 },
  },
  payrollDeductions: [
    {
      id: 'ct-paid-leave',
      label: 'CT Paid Leave',
      rate: 0.005,
      wageBase: 184500,
      ...CT_PAID_LEAVE,
      note: 'Wage cap = 2026 Social Security contribution limit ($184,500).',
    },
  ],
  lines: [
    {
      label: 'Connecticut state income tax',
      rateText: '2% / 4.5% / 5.5% / 6% / 6.5% / 6.9% / 6.99%',
      computed: true,
      detail:
        'Single: 2% to $10,000, 4.5% to $50,000, 5.5% to $100,000, 6% to $200,000, 6.5% to $250,000, 6.9% to $500,000, 6.99% above. Joint filers have twice the single thresholds; heads of household $16,000 / $80,000 / $160,000 / $320,000 / $400,000 / $800,000.',
      ...CT_TPG211,
    },
    {
      label: 'Personal exemption (Table A)',
      rateText: '$15,000 single / $24,000 joint / $19,000 head of household, phasing out',
      computed: true,
      detail:
        'The exemption drops by $1,000 for each $1,000 (or part) of income above $30,000 single, $48,000 joint or $38,000 head of household, and is gone above $44,000, $71,000 and $56,000 respectively.',
      ...CT_TPG211,
    },
    {
      label: '2% rate phase-out and recapture (Tables C and D)',
      rateText: 'Up to $250 + recapture (single)',
      computed: true,
      detail:
        'Above $56,500 of income (single; $100,500 joint, $78,500 head of household) Connecticut adds back the benefit of the 2% bracket in steps, up to $250 single at $101,500. Above $105,000 single ($210,000 joint, $168,000 head of household) a further recapture amount is added, reaching $3,400 single at $540,000.',
      ...CT_TPG211,
    },
    {
      label: 'Personal tax credit (Table E)',
      rateText: '75% down to 0% of the tax',
      computed: true,
      detail:
        'A credit equal to a percentage of the tax: 75% for a single filer up to $18,800 of income, falling to 10% between $33,300 and $60,000 and to zero above $64,500 (joint: zero above $100,500; head of household: above $78,500).',
      ...CT_TPG211,
    },
    {
      label: 'CT Paid Leave',
      rateText: '0.5% of wages to $184,500 (2026)',
      computed: true,
      detail: 'Employee-funded: the employer deducts 0.5% of each paycheck and remits it to the CT Paid Leave Authority until wages reach the Social Security contribution limit. $300 a year on $60,000.',
      ...CT_PAID_LEAVE,
    },
  ],
  notes: [
    {
      title: 'Why a single rate table understates Connecticut tax',
      body:
        'For a single filer on $60,000 the rate schedule alone gives $2,550. Connecticut then adds $25 from the 2% phase-out table and takes a 10% personal credit, for $2,317.50 — but the $15,000 personal exemption is already gone at that income. A brackets-only estimate misses the add-back and the credit.',
      ...CT_TPG211,
    },
    {
      title: 'Paid Leave is paid by employees',
      body:
        'CT Paid Leave is funded by employee contributions: 0.5% of wages, maintained at that rate for 2026, deducted by the employer each pay period until wages reach the Social Security limit.',
      ...CT_PAID_LEAVE,
    },
    {
      title: 'The tables are unchanged for 2026',
      body:
        'DRS states that the 2026 withholding calculation rules and tables are unchanged from 2025. Because the exemption, credit and add-back move in steps with income, a raise can cost more than the bracket rate suggests when it crosses a step.',
      ...CT_TPG211,
    },
  ],
  neighbors: [
    { slug: 'new-york', name: 'New York', why: 'borders Connecticut; 4%–10.9%' },
    { slug: 'massachusetts', name: 'Massachusetts', why: 'borders Connecticut; 5% plus surtax' },
    { slug: 'rhode-island', name: 'Rhode Island', why: 'borders Connecticut; 3.75%–5.99% plus TDI' },
    { slug: 'new-jersey', name: 'New Jersey', why: 'tri-state commuter comparison' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Connecticut tax computed from DRS TPG-211 (2026 withholding calculation rules, unchanged from 2025): Table A exemption phase-out, Table B rates, Table C 2% phase-out add-back, Table D recapture and Table E personal credit, keyed to annual wages. CT Paid Leave 0.5% to the Social Security limit.',
  },
};

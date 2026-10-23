import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-23';

const NJ_RATE_SCHEDULE = {
  source: 'New Jersey Division of Taxation, NJ-1040 Tax Rate Schedules (tax years 2020 and after)',
  sourceUrl: 'https://www.nj.gov/treasury/taxation/pdf/current/njtaxratesch.pdf',
  retrievedAt: RETRIEVED,
  note: 'The Division publishes one schedule for 2020 and later; the Tax Tables page (last updated 09/28/26) still points to it for 2026.',
};

const NJ_EXEMPTIONS = {
  source: 'New Jersey Division of Taxation, Income Tax — Exemptions',
  sourceUrl: 'https://www.nj.gov/treasury/taxation/njit13.shtml',
  retrievedAt: RETRIEVED,
};

const NJ_LABOR_RATES = {
  source: 'NJ Department of Labor and Workforce Development, Rate information, contributions, and due dates (2026 worker rates)',
  sourceUrl: 'https://www.nj.gov/labor/ea/employer-services/rate-info',
  retrievedAt: RETRIEVED,
};

const NJ_LABOR_PRESS = {
  source: 'NJDOL press release, 29 Dec 2025: New benefit rates and taxable wage bases for 2026',
  sourceUrl: 'https://www.nj.gov/labor/lwdhome/press/2025/20251229_newbenefitrates2026.shtml',
  retrievedAt: RETRIEVED,
};

const NJ_PA_RECIPROCAL = {
  source: 'New Jersey Division of Taxation, Income Tax — PA/NJ Reciprocal Income Tax Agreement',
  sourceUrl: 'https://nj.gov/treasury/taxation/njit25.shtml',
  retrievedAt: RETRIEVED,
};

export const NEW_JERSEY: StateTaxSpec = {
  code: 'NJ',
  slug: 'new-jersey',
  name: 'New Jersey',
  taxYear: 2026,
  rateLead: '1.4%–10.75% state tax',
  summary:
    'New Jersey taxes wages on a progressive scale from 1.4% to 10.75%, and a New Jersey paycheck also carries employee UI, disability and family-leave contributions (0.845% combined on the first $44,800–$171,100 of wages in 2026).',
  wageTax: {
    kind: 'brackets',
    single: [
      { upTo: 20000, rate: 0.014 },
      { upTo: 35000, rate: 0.0175 },
      { upTo: 40000, rate: 0.035 },
      { upTo: 75000, rate: 0.05525 },
      { upTo: 500000, rate: 0.0637 },
      { upTo: 1000000, rate: 0.0897 },
      { upTo: null, rate: 0.1075 },
    ],
    married: [
      { upTo: 20000, rate: 0.014 },
      { upTo: 50000, rate: 0.0175 },
      { upTo: 70000, rate: 0.0245 },
      { upTo: 80000, rate: 0.035 },
      { upTo: 150000, rate: 0.05525 },
      { upTo: 500000, rate: 0.0637 },
      { upTo: 1000000, rate: 0.0897 },
      { upTo: null, rate: 0.1075 },
    ],
    // NJ uses Table B (the joint schedule) for head of household.
    hoh: [
      { upTo: 20000, rate: 0.014 },
      { upTo: 50000, rate: 0.0175 },
      { upTo: 70000, rate: 0.0245 },
      { upTo: 80000, rate: 0.035 },
      { upTo: 150000, rate: 0.05525 },
      { upTo: 500000, rate: 0.0637 },
      { upTo: 1000000, rate: 0.0897 },
      { upTo: null, rate: 0.1075 },
    ],
    ...NJ_RATE_SCHEDULE,
  },
  deduction: {
    kind: 'exemption',
    single: 1000,
    married: 2000,
    hoh: 1000,
    ...NJ_EXEMPTIONS,
    note: 'New Jersey has no standard deduction; a $1,000 regular exemption per taxpayer is modelled. Dependent and age-65 exemptions are not.',
  },
  payrollDeductions: [
    {
      id: 'nj-ui',
      label: 'Unemployment Insurance (worker share)',
      rate: 0.003825,
      wageBase: 44800,
      ...NJ_LABOR_RATES,
    },
    {
      id: 'nj-wf',
      label: 'Workforce Development / Supplemental Workforce',
      rate: 0.000425,
      wageBase: 44800,
      ...NJ_LABOR_RATES,
    },
    {
      id: 'nj-di',
      label: 'Temporary Disability Insurance (worker share)',
      rate: 0.0019,
      wageBase: 171100,
      ...NJ_LABOR_RATES,
    },
    {
      id: 'nj-fli',
      label: 'Family Leave Insurance',
      rate: 0.0023,
      wageBase: 171100,
      ...NJ_LABOR_RATES,
    },
  ],
  lines: [
    {
      label: 'New Jersey gross income tax',
      rateText: '1.4% to 10.75% (seven brackets, single; eight, joint)',
      computed: true,
      detail:
        'Single filers: 1.4% to $20,000, 1.75% to $35,000, 3.5% to $40,000, 5.525% to $75,000, 6.37% to $500,000, 8.97% to $1 million, 10.75% above. Joint filers get wider low brackets (1.75% to $50,000, 2.45% to $70,000, 3.5% to $80,000, 5.525% to $150,000).',
      ...NJ_RATE_SCHEDULE,
    },
    {
      label: 'Personal exemption',
      rateText: '$1,000 per taxpayer',
      computed: true,
      detail: 'New Jersey has no standard deduction. The regular exemption is $1,000 for you and $1,000 for a spouse on a joint return; dependents add $1,500 each.',
      ...NJ_EXEMPTIONS,
    },
    {
      label: 'UI + WF/SWF (worker share)',
      rateText: '0.3825% + 0.0425% on the first $44,800 (2026)',
      computed: true,
      detail: 'Maximum $190.40 a year combined. The wage base rose from $43,300 in 2025.',
      ...NJ_LABOR_PRESS,
    },
    {
      label: 'Temporary Disability Insurance (worker share)',
      rateText: '0.19% on the first $171,100 (2026)',
      computed: true,
      detail: 'Down from 0.23% in 2025; wage base up from $165,400. Maximum $325.09 a year.',
      ...NJ_LABOR_RATES,
    },
    {
      label: 'Family Leave Insurance',
      rateText: '0.23% on the first $171,100 (2026)',
      computed: true,
      detail: 'Down from 0.33% in 2025. Maximum $393.53 a year.',
      ...NJ_LABOR_RATES,
    },
    {
      label: 'Local income tax',
      rateText: 'None',
      computed: true,
      detail: 'No New Jersey municipality withholds an income tax from employee wages.',
      ...NJ_RATE_SCHEDULE,
    },
  ],
  notes: [
    {
      title: 'PA–NJ reciprocal agreement',
      body:
        'Pennsylvania residents who work in New Jersey owe no New Jersey income tax on their wages, and New Jersey residents working in Pennsylvania owe no Pennsylvania income tax. Give your employer Form NJ-165 (PA resident working in NJ) or REV-419EX (NJ resident working in PA) to stop the wrong state\'s withholding. The agreement covers employee compensation only, and it does not exempt NJ workers from the UI/TDI/FLI contributions above.',
      ...NJ_PA_RECIPROCAL,
    },
    {
      title: 'New York commuters are not covered',
      body:
        'There is no reciprocal agreement with New York. A New Jersey resident working in New York City pays New York State nonresident tax through withholding and claims a credit for it on the NJ-1040, so New Jersey tax is usually reduced to the difference, if any.',
      ...NJ_PA_RECIPROCAL,
    },
    {
      title: 'What the 2026 payroll-contribution changes mean',
      body:
        'The worker TDI rate fell from 0.23% to 0.19% and FLI from 0.33% to 0.23%, while the wage base rose to $171,100. On an $80,000 salary the four contributions total about $526 in 2026, against about $632 under 2025 rates.',
      ...NJ_LABOR_RATES,
    },
  ],
  neighbors: [
    { slug: 'pennsylvania', name: 'Pennsylvania', why: 'reciprocal agreement; flat 3.07%' },
    { slug: 'new-york', name: 'New York', why: 'borders New Jersey; no reciprocity' },
    { slug: 'delaware', name: 'Delaware', why: 'borders New Jersey' },
    { slug: 'connecticut', name: 'Connecticut', why: 'nearby commuter state' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Rate schedule: NJ Division of Taxation schedule for 2020 and after (unchanged; the Tax Tables page updated 09/28/26 still links it). Exemption $1,000 from the Division\'s exemptions page. 2026 UI/WF/TDI/FLI worker rates and wage bases from NJDOL.',
  },
};

import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-23';

const MI_CALENDAR_YEAR = {
  source: 'Michigan Department of Treasury, Withholding — Calendar Year Tax Information (2026: rate 4.25%, personal exemption $5,900)',
  sourceUrl: 'https://www.michigan.gov/taxes/business-taxes/withholding/calendar-year-tax-information',
  retrievedAt: RETRIEVED,
};

const MI_RECIPROCAL = {
  source: 'Michigan Department of Treasury, Individual Income Tax FAQ — nonresident telecommuting (lists the reciprocal states)',
  sourceUrl:
    'https://www.michigan.gov/taxes/questions/iit/accordion/covid19-tele/are-wages-earned-by-a-michigan-nonresident-while-temporarily-telecommuting-from-a-location-in-michi',
  retrievedAt: RETRIEVED,
};

const MI_CITIES = {
  source: 'Michigan Department of Treasury, What cities impose an income tax?',
  sourceUrl: 'https://michigan.gov/taxes/0,4676,7-238-75545_43715-153955--,00.html',
  retrievedAt: RETRIEVED,
};

export const MICHIGAN: StateTaxSpec = {
  code: 'MI',
  slug: 'michigan',
  name: 'Michigan',
  taxYear: 2026,
  rateLead: 'flat 4.25% state tax',
  summary:
    'Michigan taxes wages at a flat 4.25% in 2026 after a $5,900 personal exemption per person ($11,800 for a married couple), and 24 Michigan cities, including Detroit, Grand Rapids and Lansing, add their own income tax that this calculator does not include.',
  wageTax: {
    kind: 'flat',
    rate: 0.0425,
    ...MI_CALENDAR_YEAR,
  },
  deduction: {
    kind: 'exemption',
    single: 5900,
    married: 11800,
    hoh: 5900,
    ...MI_CALENDAR_YEAR,
    note: 'Michigan has no standard deduction; the personal exemption is modelled for the taxpayer (and spouse on a joint return). Dependent exemptions are not.',
  },
  payrollDeductions: [],
  lines: [
    {
      label: 'Michigan state income tax',
      rateText: '4.25% flat (2026)',
      computed: true,
      detail: 'The rate applies to every dollar above the personal exemption and is the same for all filing statuses.',
      ...MI_CALENDAR_YEAR,
    },
    {
      label: 'Personal exemption',
      rateText: '$5,900 per person (2026)',
      computed: true,
      detail: 'Up from $5,800 in 2025. A joint return claims two exemptions ($11,800); each dependent adds another $5,900, not modelled here.',
      ...MI_CALENDAR_YEAR,
    },
    {
      label: 'City income tax',
      rateText: 'Varies by city — not included',
      computed: false,
      detail:
        '24 Michigan cities levy an income tax on residents and on nonresidents who work in the city: Detroit (administered by the state Treasury) plus Albion, Battle Creek, Benton Harbor, Big Rapids, East Lansing, Flint, Grand Rapids, Grayling, Hamtramck, Highland Park, Hudson, Ionia, Jackson, Lansing, Lapeer, Muskegon, Muskegon Heights, Pontiac, Port Huron, Portland, Saginaw, Springfield and Walker. Each city sets and administers its own rates.',
      ...MI_CITIES,
    },
  ],
  notes: [
    {
      title: 'Reciprocity with six neighbors',
      body:
        'Michigan has reciprocal agreements with Illinois, Indiana, Kentucky, Minnesota, Ohio and Wisconsin: residents of those states who work in Michigan owe no Michigan income tax on their wages and pay only their home state. The reverse applies to Michigan residents working in those states. Other nonresidents physically working in Michigan are taxed by Michigan on those wages. City income taxes are not covered by the agreements.',
      ...MI_RECIPROCAL,
    },
    {
      title: 'Where you work and where you live both matter for city tax',
      body:
        'Detroit\'s income tax is administered by the Michigan Department of Treasury; the other 23 taxing cities administer their own, each with its own forms, filing and payment rules, and each publishes its own resident and nonresident rates. The state line on this page is the same everywhere in Michigan; the city line is what varies, so check your city\'s rate before trusting any Michigan paycheck estimate.',
      ...MI_CITIES,
    },
    {
      title: 'The exemption is indexed',
      body:
        'Michigan adjusts the personal exemption each year: $5,800 for 2025 and $5,900 for 2026. At 4.25% the $100 increase is worth $4.25 a year per exemption, so the practical effect of the change is small.',
      ...MI_CALENDAR_YEAR,
    },
  ],
  neighbors: [
    { slug: 'ohio', name: 'Ohio', why: 'borders Michigan; reciprocal state' },
    { slug: 'indiana', name: 'Indiana', why: 'borders Michigan; reciprocal state' },
    { slug: 'illinois', name: 'Illinois', why: 'reciprocal state; flat 4.95%' },
    { slug: 'wisconsin', name: 'Wisconsin', why: 'borders Michigan; reciprocal state' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      '2026 rate (4.25%) and personal exemption ($5,900) from the Michigan Treasury calendar-year withholding page. Reciprocal states from the Treasury FAQ; the 24 taxing cities from the Treasury city income tax page. City taxes and dependent exemptions are not computed.',
  },
};

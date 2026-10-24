import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

/** Chapter 2, SSSLA 1980 added AS 43.20.012: the net income tax "does not apply to individuals or to fiduciaries". */
const AK_REPEAL = {
  source: 'Alaska Legislature, Chapter 2 SSSLA 1980 (AS 43.20.012: "The tax imposed by this chapter does not apply to individuals or to fiduciaries"), effective 25 Sep 1980, retroactive to 1 Jan 1979',
  sourceUrl: 'https://www.akleg.gov/pdf/11/Bills/Final/CH%202%20SSSLA%201980.pdf',
  retrievedAt: RETRIEVED,
};

const AK_UI_2026 = {
  source: 'Alaska Department of Labor and Workforce Development, 2026 Unemployment Insurance Tax Rates ("The 2026 Taxable Wage Base is $54,200.00"; "The 2026 Employee Rate is 0.50%")',
  sourceUrl: 'https://labor.alaska.gov/estax/2026-experience-rates.html',
  retrievedAt: RETRIEVED,
};

export const ALASKA: StateTaxSpec = {
  code: 'AK',
  slug: 'alaska',
  name: 'Alaska',
  taxYear: 2026,
  rateLead: 'no income tax; 0.5% employee UI',
  summary:
    'Alaska has no state income tax on wages, but it is one of the few states where employees pay unemployment insurance: 0.5% of the first $54,200 of wages in 2026, at most $271 a year.',
  wageTax: { kind: 'none', ...AK_REPEAL },
  deduction: { kind: 'none', single: 0, married: 0, hoh: 0, ...AK_REPEAL },
  payrollDeductions: [
    {
      id: 'ak-ui',
      label: 'Unemployment insurance (employee share)',
      rate: 0.005,
      wageBase: 54200,
      ...AK_UI_2026,
    },
  ],
  lines: [
    {
      label: 'Alaska state income tax',
      rateText: 'None',
      computed: true,
      detail:
        'The individual net income tax was removed in 1980 by adding AS 43.20.012, which says the tax "does not apply to individuals or to fiduciaries". Alaska has had no individual income tax since tax year 1979.',
      ...AK_REPEAL,
    },
    {
      label: 'Unemployment insurance (employee share)',
      rateText: '0.5% of wages up to $54,200 (2026)',
      computed: true,
      detail:
        'Alaska withholds an employee contribution to the unemployment insurance fund in addition to the employer contribution. At the 2026 rate and wage base the maximum is $271 a year; on $40,000 it is $200.',
      ...AK_UI_2026,
    },
    {
      label: 'Local income tax',
      rateText: 'None',
      computed: true,
      detail: 'No Alaska borough or city levies an income tax on wages; local governments rely on property and sales taxes.',
      ...AK_REPEAL,
    },
  ],
  notes: [
    {
      title: 'No income tax since 1979',
      body:
        'Alaska taxed individual income until the Legislature repealed the tax in its 1980 second special session. The act took effect on 25 September 1980 and reached back to 1 January 1979, so 1979 tax already paid or withheld was refunded. Wages earned in Alaska are not subject to any state income tax today.',
      ...AK_REPEAL,
    },
    {
      title: 'The one state payroll deduction',
      body:
        'The line most Alaska workers notice on a pay stub besides federal tax and FICA is the 0.5% employee unemployment insurance contribution. It stops once wages reach the $54,200 taxable wage base for 2026, so anyone earning more than that pays the same $271 for the year.',
      ...AK_UI_2026,
    },
    {
      title: 'Working in another state',
      body:
        'Because Alaska has no income tax, there are no reciprocal agreements and no Alaska credit for tax paid elsewhere. An Alaska resident who works in a state with an income tax owes that state\'s nonresident tax on the wages earned there.',
      ...AK_REPEAL,
    },
  ],
  neighbors: [
    { slug: 'washington', name: 'Washington', why: 'no income tax; PFML and WA Cares payroll' },
    { slug: 'hawaii', name: 'Hawaii', why: 'the other non-contiguous state; 1.4%–11%' },
    { slug: 'oregon', name: 'Oregon', why: 'Pacific Northwest; up to 9.9%' },
    { slug: 'nevada', name: 'Nevada', why: 'no income tax either' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'No individual income tax (AS 43.20.012, Chapter 2 SSSLA 1980). Employee unemployment insurance 0.50% on the first $54,200 of wages for 2026 from the Alaska Department of Labor and Workforce Development.',
  },
};

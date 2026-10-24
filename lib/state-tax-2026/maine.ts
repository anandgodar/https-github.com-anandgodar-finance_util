import type { StateTaxSpec } from './types';

const RETRIEVED = '2026-10-24';

const ME_2026 = {
  source: 'Maine Revenue Services, 2026 Individual Income Tax Rate Schedules, Standard Deduction and Personal Exemption (revised 20 May 2026), including the 2% income tax surcharge from 2026',
  sourceUrl: 'https://www.maine.gov/revenue/sites/maine.gov.revenue/files/2026-05/ind_tax_rate_sched_2026_rev.pdf',
  retrievedAt: RETRIEVED,
};

const ME_PFML = {
  source: 'Maine Revised Statutes, Title 26 §850-F — Paid Family and Medical Leave premiums: combined rate not more than 1.0% of wages from 1 Jan 2025; employer may deduct up to 50% from employees; wages up to the Social Security contribution and benefit base',
  sourceUrl: 'https://www.legislature.maine.gov/legis/statutes/26/title26sec850-F.html',
  retrievedAt: RETRIEVED,
};

export const MAINE: StateTaxSpec = {
  code: 'ME',
  slug: 'maine',
  name: 'Maine',
  taxYear: 2026,
  rateLead: '5.8%–7.15% tax + 0.5% PFML',
  summary:
    'Maine taxes 2026 income at 5.8% up to $27,400, 6.75% up to $64,850 and 7.15% above for a single filer, after a $15,700 standard deduction and $5,300 personal exemption; a new 2% surcharge applies above $1 million, and employers may withhold up to 0.5% of wages for Maine Paid Family and Medical Leave.',
  wageTax: {
    kind: 'brackets',
    single: [
      { upTo: 27400, rate: 0.058 },
      { upTo: 64850, rate: 0.0675 },
      { upTo: 1000000, rate: 0.0715 },
      { upTo: null, rate: 0.0915 },
    ],
    married: [
      { upTo: 54850, rate: 0.058 },
      { upTo: 129750, rate: 0.0675 },
      { upTo: 1500000, rate: 0.0715 },
      { upTo: null, rate: 0.0915 },
    ],
    hoh: [
      { upTo: 41100, rate: 0.058 },
      { upTo: 97300, rate: 0.0675 },
      { upTo: 1500000, rate: 0.0715 },
      { upTo: null, rate: 0.0915 },
    ],
    ...ME_2026,
  },
  deduction: { kind: 'standard', single: 21000, married: 42000, hoh: 28850, ...ME_2026 },
  payrollDeductions: [
    {
      id: 'me-pfml',
      label: 'Maine Paid Family and Medical Leave (employee share)',
      rate: 0.005,
      wageBase: 184500,
      ...ME_PFML,
      note: 'Maximum employee share (50% of the 1.0% premium); wage cap = 2026 Social Security base ($184,500).',
    },
  ],
  lines: [
    {
      label: 'Maine state income tax',
      rateText: '5.8% / 6.75% / 7.15% (2026)',
      computed: true,
      detail:
        'Single: 5.8% below $27,400, 6.75% to $64,850, 7.15% above. Married filing jointly: $54,850 / $129,750. Head of household: $41,100 / $97,300. Maine adjusts these thresholds for inflation each year.',
      ...ME_2026,
    },
    {
      label: 'Income tax surcharge (new for 2026)',
      rateText: '2% on taxable income above $1,000,000 single / $1,500,000 joint or head of household',
      computed: true,
      detail: 'For tax years beginning on or after 1 January 2026 the tax is increased by 2% of Maine taxable income above the threshold, a combined top rate of 9.15%. The thresholds are indexed from 2027.',
      ...ME_2026,
    },
    {
      label: 'Standard deduction and personal exemption',
      rateText: '$15,700 + $5,300 single / $31,400 + $10,600 joint / $23,550 + $5,300 head of household',
      computed: true,
      detail: 'The 2026 standard deduction and $5,300 exemption for the taxpayer (and spouse on a joint return). Dependents are not counted here.',
      ...ME_2026,
    },
    {
      label: 'Paid Family and Medical Leave (employee share)',
      rateText: 'Up to 0.5% of wages to $184,500',
      computed: true,
      detail:
        'Premiums began on 1 January 2025 at no more than 1.0% of wages combined. Employers with 15 or more employees may deduct up to half from employee pay; the calculator assumes the maximum employee share. $300 a year on $60,000.',
      ...ME_PFML,
    },
  ],
  notes: [
    {
      title: 'Where a typical salary lands',
      body:
        'After the $21,000 of combined deduction and exemption, a single filer on $60,000 has $39,000 of Maine taxable income: $1,589 on the first $27,400 plus 6.75% of $11,600, about $2,372.',
      ...ME_2026,
    },
    {
      title: 'The millionaires\' surcharge',
      body:
        'Maine added a 2% surcharge from tax year 2026 on taxable income above $1,000,000 for single filers ($750,000 married filing separately, $1,500,000 joint or head of household), raising the top marginal rate to 9.15%.',
      ...ME_2026,
    },
    {
      title: 'Paid leave premiums',
      body:
        'Maine\'s paid family and medical leave premiums started in 2025. The law caps the combined premium at 1.0% of wages up to the Social Security base and lets larger employers recover up to 50% from employees, so most workers see at most 0.5% of pay withheld.',
      ...ME_PFML,
    },
  ],
  neighbors: [
    { slug: 'new-hampshire', name: 'New Hampshire', why: 'borders Maine; no tax on wages' },
    { slug: 'massachusetts', name: 'Massachusetts', why: 'New England; 5% plus surtax and PFML' },
    { slug: 'vermont', name: 'Vermont', why: 'New England; 3.35%–8.75%' },
    { slug: 'connecticut', name: 'Connecticut', why: 'New England; 2%–6.99% plus Paid Leave' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      'Maine Revenue Services 2026 rate schedules (revised 20 May 2026) including the 2% surcharge, 2026 standard deduction and $5,300 exemption; PFML employee share up to 0.5% to the Social Security base per 26 M.R.S. §850-F.',
  },
};

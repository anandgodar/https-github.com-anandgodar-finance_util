import type { StateTaxSpec } from './types';
import { FEDERAL_2026 } from './federal';

const RETRIEVED = '2026-10-23';

const CO_DR1098_2026 = {
  source: 'Colorado Department of Revenue, 2026 Colorado Withholding Worksheet for Employers, DR 1098 (10/21/25): "Multiply line 2b by 4.40% (0.044)"',
  sourceUrl: 'https://tax.colorado.gov/sites/default/files/documents/DR_1098_Colorado_Withholding_Worksheet_for_Employees.pdf',
  retrievedAt: RETRIEVED,
};

const CO_FEDERAL_BASE = {
  source: 'Colorado Legislative Council Staff, Individual Income Tax ("Federal taxable income serves as the base for Colorado income tax")',
  sourceUrl: 'https://content.leg.colorado.gov/content/individual-income-tax',
  retrievedAt: RETRIEVED,
  note: 'The page\'s own rate figure (4.63%) is from 2017; only the statement that Colorado starts from federal taxable income is used here. The deduction amounts are the IRS 2026 standard deduction.',
};

const CO_TABOR_FY26 = {
  source: 'Kiowa County Press (20 Oct 2026), reporting the State Controller\'s reissued FY2026 TABOR report: state revenue came in under the TABOR cap, so no surplus-triggered rate reduction applies for tax year 2026',
  sourceUrl: 'https://kiowacountypress.net/content/state-auditor-cannot-verify-accuracy-colorados-fiscal-year-2026-tabor-report',
  retrievedAt: RETRIEVED,
  note: 'Secondary (press) report of the Controller\'s certification, used only for the direction of the result; no figure from it is reproduced. The 4.4% rate itself comes from the DOR\'s 2026 DR 1098.',
};

const CO_TABOR_MECH = {
  source: 'Colorado General Assembly, SB24-228 TABOR Refund Mechanisms (signed 14 May 2024), bill summary as enacted: the temporary income tax rate reduction is active for income tax years 2024 through 2034 and, after 2024, cuts the 4.40% rate by 0.04 to 0.15 points depending on how far excess state revenue exceeds $300 million',
  sourceUrl: 'https://leg.colorado.gov/bills/sb24-228',
  retrievedAt: '2026-10-24',
  note: 'Used for the mechanism only; the rate on this page comes from the DOR\'s 2026 DR 1098.',
};

const CO_FAMLI = {
  source: 'Colorado FAMLI Division, Premium and Benefits Calculator (2026 premium 0.88% of wages, 0.44% paid by the employee, up to the $184,500 Social Security wage cap)',
  sourceUrl: 'https://famli.colorado.gov/individuals-and-families/how-famli-works/premium-and-benefits-calculator',
  retrievedAt: RETRIEVED,
};

const CO_OPT = {
  source: 'Patriot Software, A Breakdown of the Colorado Occupational Privilege Taxes (Denver, Aurora, Glendale, Greenwood Village, Sheridan)',
  sourceUrl: 'https://www.patriotsoftware.com/blog/payroll/occupational-privilege-tax-opt-colorado/',
  retrievedAt: RETRIEVED,
  note: 'Secondary source; the Denver page could not be read at retrieval. Amounts are not reproduced here — check the city\'s own schedule.',
};

export const COLORADO: StateTaxSpec = {
  code: 'CO',
  slug: 'colorado',
  name: 'Colorado',
  taxYear: 2026,
  rateLead: 'flat 4.4% tax + 0.44% FAMLI',
  summary:
    'Colorado taxes wages at a flat 4.4% of federal taxable income for 2026 — so the federal standard deduction ($16,100 single, $32,200 joint) comes off first — and a Colorado paycheck also carries the 0.44% employee share of the FAMLI paid-leave premium on wages up to $184,500; five Denver-area cities add a small flat monthly occupational privilege tax that is not included.',
  wageTax: {
    kind: 'flat',
    rate: 0.044,
    ...CO_DR1098_2026,
  },
  deduction: {
    kind: 'standard',
    single: FEDERAL_2026.standardDeduction.single,
    married: FEDERAL_2026.standardDeduction.married,
    hoh: FEDERAL_2026.standardDeduction.hoh,
    ...CO_FEDERAL_BASE,
  },
  payrollDeductions: [
    {
      id: 'co-famli',
      label: 'FAMLI paid leave (employee share)',
      rate: 0.0044,
      wageBase: 184500,
      ...CO_FAMLI,
    },
  ],
  lines: [
    {
      label: 'Colorado state income tax',
      rateText: '4.4% flat (2026)',
      computed: true,
      detail:
        'The 2026 employer withholding worksheet applies 4.40%. Colorado law (SB 24-228) allows a temporary cut below 4.4% in a tax year when the state\'s TABOR surplus exceeds a statutory threshold; the Controller\'s FY2026 report put revenue under the TABOR cap, so no cut applies for 2026.',
      ...CO_DR1098_2026,
      note: 'The TABOR mechanism is described from the enacted SB24-228 summary on leg.colorado.gov and the FY2026 result from a press report of the Controller\'s certification; neither is used for any figure on this page.',
    },
    {
      label: 'Federal standard deduction (Colorado starts from federal taxable income)',
      rateText: `$${FEDERAL_2026.standardDeduction.single.toLocaleString('en-US')} single / $${FEDERAL_2026.standardDeduction.married.toLocaleString('en-US')} joint / $${FEDERAL_2026.standardDeduction.hoh.toLocaleString('en-US')} head of household`,
      computed: true,
      detail: 'Colorado has no standard deduction of its own; its taxable income is federal taxable income with state additions and subtractions. For a wage earner with no adjustments, that means the IRS standard deduction for 2026.',
      ...CO_FEDERAL_BASE,
    },
    {
      label: 'FAMLI paid leave (employee share)',
      rateText: '0.44% of wages to $184,500 (2026)',
      computed: true,
      detail: 'The 2026 FAMLI premium is 0.88% of wages, split evenly: 0.44% employee and 0.44% employer (employers may pay more). Premiums stop at the federal Social Security wage cap, $184,500 in 2026. Maximum employee contribution $811.80.',
      ...CO_FAMLI,
    },
    {
      label: 'Occupational privilege tax (Denver, Aurora, Glendale, Greenwood Village, Sheridan)',
      rateText: 'Flat monthly amount — not included',
      computed: false,
      detail:
        'Five Denver-metro cities charge employees who earn above a monthly threshold a flat dollar amount per month (a "head tax"), withheld by the employer. It is not a percentage of wages and is not computed here; the amounts are small relative to income tax.',
      ...CO_OPT,
    },
  ],
  notes: [
    {
      title: 'Why the rate can change year to year',
      body:
        'Colorado\'s statutory rate is 4.4%, but SB 24-228 lets the rate drop temporarily in a tax year when the state collects more than a statutory threshold above its TABOR revenue cap, with the size of the cut scaled to the size of the surplus. Under the enacted bill the mechanism runs for income tax years 2024 through 2034, and the cut ranges from 0.04 to 0.15 points depending on how far the remaining surplus exceeds $300 million. The 4.4% on this page comes from the Department of Revenue\'s own 2026 withholding worksheet.',
      ...CO_TABOR_MECH,
    },
    {
      title: 'No TABOR cut for tax year 2026',
      body:
        'Whether a cut applies for 2026 depends on the State Controller\'s certification of FY2026 revenue against the TABOR cap. Press reporting of the Controller\'s reissued FY2026 report (20 Oct 2026) says revenue came in under the cap, so there is no surplus and the 4.4% rate stands for 2026. This is a secondary report of the result; no figure from it is used. Check again each autumn.',
      ...CO_TABOR_FY26,
    },
    {
      title: 'FAMLI is split 50/50',
      body:
        'Colorado\'s paid family and medical leave program is funded by a 0.88% premium on wages in 2026, half from the employer and half from the employee. An employer may choose to cover more than its half, but may not deduct more than 0.44% from the employee. The employee share stops at the $184,500 Social Security wage cap, so the most an employee contributes in 2026 is $811.80.',
      ...CO_FAMLI,
    },
    {
      title: 'Federal deduction, state rate',
      body:
        'Because Colorado piggybacks on federal taxable income, every federal change flows through: the 2026 standard deduction of $16,100 (single) is also Colorado\'s deduction, and pre-tax 401(k) contributions reduce Colorado tax at 4.4% exactly as they reduce federal taxable income. A single filer on $60,000 pays 4.4% of $43,900, or $1,931.60.',
      ...CO_FEDERAL_BASE,
    },
  ],
  neighbors: [
    { slug: 'utah', name: 'Utah', why: 'borders Colorado; flat tax' },
    { slug: 'arizona', name: 'Arizona', why: 'borders Colorado; flat 2.5%' },
    { slug: 'wyoming', name: 'Wyoming', why: 'borders Colorado; no income tax' },
    { slug: 'new-mexico', name: 'New Mexico', why: 'borders Colorado' },
    { slug: 'kansas', name: 'Kansas', why: 'borders Colorado' },
  ],
  _meta: {
    taxYear: 2026,
    retrievedAt: RETRIEVED,
    description:
      '4.4% from the DOR 2026 DR 1098 withholding worksheet; no TABOR surplus reduction for 2026 per the Controller\'s FY2026 report (as reported in the press, 20 Oct 2026, secondary and labelled; the SB 24-228 mechanism is from the enacted bill summary on leg.colorado.gov). Deduction = IRS 2026 standard deduction because Colorado taxable income starts from federal taxable income. FAMLI employee share 0.44% to $184,500 from the FAMLI Division. Occupational privilege taxes are not computed.',
  },
};

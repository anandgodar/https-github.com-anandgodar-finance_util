/**
 * Sourced state paycheck-tax data model.
 *
 * Every figure that reaches a page carries `source`, `sourceUrl` and
 * `retrievedAt`. Nothing in this folder is allowed to be a remembered or
 * averaged number: if a figure cannot be traced to a revenue department,
 * statute or official notice, it does not belong here.
 */

export type FilingStatus = 'single' | 'married' | 'hoh';

export interface Provenance {
  /** Publisher of the figure, e.g. "Illinois Department of Revenue". */
  source: string;
  /** Page the figure was read from. */
  sourceUrl: string;
  /** ISO date the page was read. */
  retrievedAt: string;
  /** Optional caveat, e.g. "2025 figure; 2026 not yet published". */
  note?: string;
}

export interface Sourced<T> extends Provenance {
  value: T;
}

/**
 * Marginal bracket: `upTo` is the top of the bracket (null = no ceiling).
 *
 * `base` is a fixed dollar amount the statute adds the moment taxable income
 * enters this bracket, on top of the marginal rate on the slice. Most schedules
 * print a base that merely equals the tax accumulated in the lower brackets
 * (leave it out — the engine already sums the lower slices). It is needed only
 * where the printed base is NOT the sum of the lower brackets, e.g. Ohio's
 * "$332.00 plus 2.75% of the amount in excess of $26,050" after a 0% bracket.
 */
export interface Bracket {
  upTo: number | null;
  rate: number;
  base?: number;
}

export type WageTax =
  | ({ kind: 'none' } & Provenance)
  | ({ kind: 'flat'; rate: number } & Provenance)
  | ({ kind: 'brackets'; single: Bracket[]; married: Bracket[]; hoh: Bracket[] } & Provenance);

/**
 * Amount subtracted from wages before the state rate applies. `kind` says what
 * the state calls it; `none` means the rate applies to the first dollar.
 */
export interface StateDeduction extends Provenance {
  kind: 'standard' | 'exemption' | 'none';
  single: number;
  married: number;
  hoh: number;
  /**
   * Income-tiered amounts (e.g. Ohio's personal exemption, which shrinks as
   * modified AGI rises). When present the engine picks the first tier whose
   * `upTo` (inclusive; null = no ceiling) is at or above the taxpayer's
   * income-tax wages and uses that tier's per-status totals; `single`/
   * `married`/`hoh` above must equal the first tier's values so that any
   * display of "the" deduction shows the lowest-income figure.
   */
  tiers?: Array<{ upTo: number | null; single: number; married: number; hoh: number }>;
  /**
   * Income phase-out of the standard deduction (e.g. Wisconsin's sliding
   * scale, Alabama's $25-per-$500 reduction, Connecticut's personal exemption).
   * When present it replaces `single`/`married`/`hoh` for the computation:
   * the phased amount is the largest result among the status's phases (a
   * status may have two, as Wisconsin's head-of-household schedule does), and
   * `additional` is then added on top. `single`/`married`/`hoh` must still hold
   * the full low-income total (phased amount + additional) for display.
   */
  phaseout?: { single: DeductionPhase[]; married: DeductionPhase[]; hoh: DeductionPhase[] };
  /** Fixed amounts added after the phase-out, e.g. personal exemptions that do not phase out. */
  additional?: { single: number; married: number; hoh: number };
}

/**
 * One phase-out rule: `amount` reduced once income exceeds `start`.
 * Continuous: reduction = rate × (income − start).
 * Stepped: reduction = perStep × ceil((income − start) / step) — the "for each
 * $500 or fraction thereof" wording many statutes use.
 * The result never falls below `floor` (default 0).
 */
export interface DeductionPhase {
  amount: number;
  start: number;
  rate?: number;
  step?: number;
  perStep?: number;
  floor?: number;
}

/** Amount keyed to income by filing status: the first tier whose `upTo` (inclusive; null = no ceiling) covers the income applies. */
export type IncomeTiers = Array<{ upTo: number | null; single: number; married: number; hoh: number }>;

/**
 * Step table with its own income breakpoints for each filing status (the
 * statuses rarely share thresholds). The first tier whose `upTo` (inclusive;
 * null = no ceiling) covers the income applies; each list must end open-ended.
 */
export interface StatusTiers {
  single: Array<{ upTo: number | null; value: number }>;
  married: Array<{ upTo: number | null; value: number }>;
  hoh: Array<{ upTo: number | null; value: number }>;
}

/**
 * Optional state-specific mechanics beyond brackets and a deduction. Each one
 * carries its own provenance so the page can link the rule it implements.
 */
export interface StateAdjustments {
  /**
   * Federal income tax subtracted from state taxable income (Alabama: all of
   * it; Oregon: up to a cap that phases out by income). A cap of Infinity
   * means unlimited.
   */
  federalTaxDeduction?: { capTiers: StatusTiers } & Provenance;
  /**
   * Nonrefundable credit subtracted from tax (e.g. Delaware's $110 personal
   * credit, Oregon's exemption credit, Utah's taxpayer credit). Either flat
   * per status, income-tiered (`tiers`, which then overrides the flat amounts),
   * or reduced by `phaseoutRate` × income above `phaseoutStart`.
   */
  credit?: {
    single: number;
    married: number;
    hoh: number;
    tiers?: StatusTiers;
    phaseoutStart?: { single: number; married: number; hoh: number };
    phaseoutRate?: number;
  } & Provenance;
  /**
   * Amounts added to tax from step tables, e.g. Connecticut's 2% phase-out
   * add-back and recapture (keyed to income) or Arkansas's high-income bracket
   * adjustment (keyed to taxable income).
   */
  addOns?: Array<{ id: string; basis: 'income' | 'taxable'; tiers: StatusTiers } & Provenance>;
  /** Tax multiplied by (1 − rate), e.g. Connecticut's personal tax credit decimal (Table E), keyed to income. */
  taxReductionRate?: { tiers: StatusTiers } & Provenance;
  /** Tax is the greater of the schedule and `rate` × income once income exceeds `incomeOver` (Vermont). */
  minimumTax?: { incomeOver: number; rate: number } & Provenance;
}

/**
 * An employee payroll contribution withheld in addition to income tax
 * (e.g. NJ SDI/FLI/UI, PA UC). Applied to gross wages up to `wageBase`.
 */
export interface PayrollDeduction extends Provenance {
  id: string;
  label: string;
  rate: number;
  /** null = no cap */
  wageBase: number | null;
}

/** A line shown in "what's taken out of a paycheck". */
export interface PaycheckLine extends Provenance {
  label: string;
  /** Human-readable rate, e.g. "3.07% flat", "1.4%–10.75%". */
  rateText: string;
  /** Whether the calculator applies it. */
  computed: boolean;
  detail?: string;
}

export interface NeighborLink {
  slug: string;
  name: string;
  /** Short reason the link is relevant, e.g. "no income tax either". */
  why?: string;
}

export interface StateNote extends Provenance {
  title: string;
  body: string;
}

export interface StateTaxSpec {
  code: string;
  slug: string;
  name: string;
  /** Tax year the figures describe. */
  taxYear: number;
  /** Very short rate phrase for meta descriptions, e.g. "flat 3.07% state tax". */
  rateLead: string;
  /** One-sentence answer-first summary with the headline figure. */
  summary: string;
  wageTax: WageTax;
  deduction: StateDeduction;
  payrollDeductions: PayrollDeduction[];
  /** State-specific mechanics (federal tax deduction, credits, add-backs). Omitted for most states. */
  adjustments?: StateAdjustments;
  /** Lines rendered in the "what's taken out" section (state/local only; federal lines are shared). */
  lines: PaycheckLine[];
  notes: StateNote[];
  neighbors: NeighborLink[];
  _meta: {
    taxYear: number;
    retrievedAt: string;
    /** Which figures are from a prior year because 2026 was not yet published. */
    priorYearFigures?: string[];
    description: string;
  };
}

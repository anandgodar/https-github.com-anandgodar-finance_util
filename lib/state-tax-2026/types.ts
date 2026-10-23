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

/** Marginal bracket: `upTo` is the top of the bracket (null = no ceiling). */
export interface Bracket {
  upTo: number | null;
  rate: number;
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

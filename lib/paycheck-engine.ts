/**
 * Paycheck engine: federal income tax, FICA and state wage tax for one year
 * of W-2 wages. Shared by the SalaryCalculator island and the server-rendered
 * take-home tables on the state paycheck pages, so both show the same numbers.
 *
 * Federal and FICA parameters come from `lib/state-tax-2026/federal.ts`
 * (IRS Rev. Proc. 2025-32, SSA 2026 fact sheet). State parameters come
 * either from a sourced `StateTaxSpec` (lib/state-tax-2026/<state>.ts) or,
 * for states not yet sourced, from a legacy flat/bracket spec supplied by
 * the caller.
 */

import { FEDERAL_2026, FICA_2026 } from './state-tax-2026/federal';
import type { Bracket, FilingStatus, StateTaxSpec } from './state-tax-2026/types';

export type { FilingStatus };

/**
 * Marginal tax on `taxable` across ascending brackets (upTo = bracket ceiling).
 * A bracket's optional `base` is added once, when taxable income exceeds that
 * bracket's floor (see `Bracket` in state-tax-2026/types.ts).
 */
export function taxFromBrackets(taxable: number, brackets: Bracket[]): number {
  let tax = 0;
  let floor = 0;
  for (const b of brackets) {
    if (taxable <= floor) break;
    const ceiling = b.upTo ?? Infinity;
    const slice = Math.min(taxable, ceiling) - floor;
    tax += (b.base ?? 0) + slice * b.rate;
    floor = ceiling;
  }
  return tax;
}

/** Deduction for a filing status, honouring income tiers when the spec has them. */
export function stateDeductionFor(spec: StateTaxSpec, adjustedWages: number, filingStatus: FilingStatus): number {
  const d = spec.deduction;
  if (d.tiers && d.tiers.length > 0) {
    const tier = d.tiers.find((t) => t.upTo === null || adjustedWages <= t.upTo) ?? d.tiers[d.tiers.length - 1];
    return tier[filingStatus];
  }
  return d[filingStatus];
}

export interface FederalResult {
  standardDeduction: number;
  taxableIncome: number;
  tax: number;
}

/** Federal income tax after the standard deduction (no credits). */
export function computeFederalTax(adjustedWages: number, filingStatus: FilingStatus): FederalResult {
  const standardDeduction = FEDERAL_2026.standardDeduction[filingStatus];
  const taxableIncome = Math.max(0, adjustedWages - standardDeduction);
  return {
    standardDeduction,
    taxableIncome,
    tax: taxFromBrackets(taxableIncome, FEDERAL_2026.brackets[filingStatus]),
  };
}

export interface FicaResult {
  socialSecurity: number;
  medicare: number;
  additionalMedicare: number;
  total: number;
}

/**
 * Employee FICA on gross wages. Pre-tax 401(k) deferrals do NOT reduce FICA
 * wages; Section 125 health premiums do, but the calculator treats the health
 * input as a generic pre-tax deduction and leaves FICA on full gross, which
 * is the conservative choice.
 */
export function computeFica(grossWages: number, filingStatus: FilingStatus): FicaResult {
  const ss = Math.min(grossWages, FICA_2026.socialSecurity.wageBase) * FICA_2026.socialSecurity.rate;
  const medicare = grossWages * FICA_2026.medicare.rate;
  const threshold = FICA_2026.medicare.additionalThreshold[filingStatus];
  const additional = Math.max(0, grossWages - threshold) * FICA_2026.medicare.additionalRate;
  return { socialSecurity: ss, medicare, additionalMedicare: additional, total: ss + medicare + additional };
}

/** Legacy per-state spec shape used by SalaryCalculator for unsourced states. */
export interface LegacyStateSpec {
  rate: number;
  stdDeduction: number;
  brackets?: Array<{ limit: number | null; rate: number }>;
}

export interface StateResult {
  deduction: number;
  taxable: number;
  tax: number;
  /** Employee payroll contributions (NJ UI/TDI/FLI, PA UC). Empty when none. */
  payroll: Array<{ id: string; label: string; amount: number }>;
  payrollTotal: number;
  sourced: boolean;
}

/** State wage tax from a sourced spec (brackets by filing status, deductions, payroll lines). */
export function computeSourcedStateTax(
  spec: StateTaxSpec,
  adjustedWages: number,
  grossWages: number,
  filingStatus: FilingStatus
): StateResult {
  const deduction = stateDeductionFor(spec, adjustedWages, filingStatus);
  const taxable = Math.max(0, adjustedWages - deduction);
  let tax = 0;
  if (spec.wageTax.kind === 'flat') tax = taxable * spec.wageTax.rate;
  else if (spec.wageTax.kind === 'brackets') tax = taxFromBrackets(taxable, spec.wageTax[filingStatus]);

  const payroll = spec.payrollDeductions.map((p) => ({
    id: p.id,
    label: p.label,
    amount: Math.min(grossWages, p.wageBase ?? Infinity) * p.rate,
  }));
  const payrollTotal = payroll.reduce((s, p) => s + p.amount, 0);
  return { deduction, taxable, tax, payroll, payrollTotal, sourced: true };
}

/** State wage tax from the legacy single-filer table (unsourced states). */
export function computeLegacyStateTax(spec: LegacyStateSpec, adjustedWages: number): StateResult {
  const taxable = Math.max(0, adjustedWages - spec.stdDeduction);
  const tax = spec.brackets
    ? taxFromBrackets(
        taxable,
        spec.brackets.map((b) => ({ upTo: b.limit, rate: b.rate }))
      )
    : taxable * spec.rate;
  return { deduction: spec.stdDeduction, taxable, tax, payroll: [], payrollTotal: 0, sourced: false };
}

export interface PaycheckInput {
  /** Annual gross wages including bonus. */
  grossWages: number;
  /** Pre-tax deductions (401(k), health premiums) that reduce income-taxable wages. */
  preTaxDeductions?: number;
  filingStatus?: FilingStatus;
  /** Sourced spec, or legacy spec, or null for a no-tax state. */
  state: StateTaxSpec | LegacyStateSpec | null;
}

export interface PaycheckResult {
  grossWages: number;
  preTaxDeductions: number;
  adjustedWages: number;
  federal: FederalResult;
  fica: FicaResult;
  state: StateResult;
  totalTax: number;
  net: number;
  perPaycheck: { weekly: number; biweekly: number; semimonthly: number; monthly: number };
  effectiveRate: number;
}

function isSourcedSpec(s: StateTaxSpec | LegacyStateSpec): s is StateTaxSpec {
  return (s as StateTaxSpec).wageTax !== undefined;
}

export function computePaycheck(input: PaycheckInput): PaycheckResult {
  const filingStatus = input.filingStatus ?? 'single';
  const grossWages = Math.max(0, input.grossWages);
  const preTaxDeductions = Math.max(0, input.preTaxDeductions ?? 0);
  const adjustedWages = Math.max(0, grossWages - preTaxDeductions);

  const federal = computeFederalTax(adjustedWages, filingStatus);
  const fica = computeFica(grossWages, filingStatus);
  const state: StateResult = input.state
    ? isSourcedSpec(input.state)
      ? computeSourcedStateTax(input.state, adjustedWages, grossWages, filingStatus)
      : computeLegacyStateTax(input.state, adjustedWages)
    : { deduction: 0, taxable: 0, tax: 0, payroll: [], payrollTotal: 0, sourced: true };

  const totalTax = federal.tax + fica.total + state.tax + state.payrollTotal;
  const net = grossWages - totalTax - preTaxDeductions;
  return {
    grossWages,
    preTaxDeductions,
    adjustedWages,
    federal,
    fica,
    state,
    totalTax,
    net,
    perPaycheck: { weekly: net / 52, biweekly: net / 26, semimonthly: net / 24, monthly: net / 12 },
    effectiveRate: grossWages > 0 ? totalTax / grossWages : 0,
  };
}

/** Salaries used for the server-rendered take-home table on state pages. */
export const TABLE_SALARIES = [40000, 60000, 80000, 100000, 150000] as const;

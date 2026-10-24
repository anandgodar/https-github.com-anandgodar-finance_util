import type { StateTaxSpec } from './types';
import { ARIZONA } from './arizona';
import { CALIFORNIA } from './california';
import { COLORADO } from './colorado';
import { FLORIDA } from './florida';
import { GEORGIA } from './georgia';
import { ILLINOIS } from './illinois';
import { MARYLAND } from './maryland';
import { MASSACHUSETTS } from './massachusetts';
import { MICHIGAN } from './michigan';
import { NEW_JERSEY } from './new-jersey';
import { NEW_YORK } from './new-york';
import { NORTH_CAROLINA } from './north-carolina';
import { OHIO } from './ohio';
import { PENNSYLVANIA } from './pennsylvania';
import { TEXAS } from './texas';
import { VIRGINIA } from './virginia';
import { WASHINGTON } from './washington';

export * from './types';
export { FEDERAL_2026, FICA_2026 } from './federal';

/**
 * States whose paycheck tax data is fully sourced (see each file's `_meta`).
 * Pages for these states render the server-side depth content and the
 * calculator uses these brackets instead of the legacy flat-rate table.
 */
export const SOURCED_STATES: readonly StateTaxSpec[] = [
  FLORIDA,
  ILLINOIS,
  TEXAS,
  NORTH_CAROLINA,
  OHIO,
  NEW_JERSEY,
  PENNSYLVANIA,
  // Wave 2 (2026-10-23): the next ten states by paycheck-calculator search demand.
  CALIFORNIA,
  NEW_YORK,
  GEORGIA,
  MICHIGAN,
  ARIZONA,
  VIRGINIA,
  MASSACHUSETTS,
  WASHINGTON,
  COLORADO,
  MARYLAND,
];

const BY_CODE = new Map(SOURCED_STATES.map((s) => [s.code, s]));
const BY_SLUG = new Map(SOURCED_STATES.map((s) => [s.slug, s]));

export function getSourcedStateTax(codeOrSlug: string): StateTaxSpec | undefined {
  return BY_CODE.get(codeOrSlug.toUpperCase()) ?? BY_SLUG.get(codeOrSlug.toLowerCase());
}

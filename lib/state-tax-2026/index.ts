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
// Wave 3 (2026-10-24): every remaining state and DC.
import { ALASKA } from './alaska';
import { NEVADA } from './nevada';
import { NEW_HAMPSHIRE } from './new-hampshire';
import { SOUTH_DAKOTA } from './south-dakota';
import { TENNESSEE } from './tennessee';
import { WYOMING } from './wyoming';
import { MINNESOTA } from './minnesota';
import { WISCONSIN } from './wisconsin';
import { INDIANA } from './indiana';
import { MISSOURI } from './missouri';
import { ALABAMA } from './alabama';
import { SOUTH_CAROLINA } from './south-carolina';
import { KENTUCKY } from './kentucky';
import { LOUISIANA } from './louisiana';
import { OKLAHOMA } from './oklahoma';
import { CONNECTICUT } from './connecticut';
import { OREGON } from './oregon';
import { IOWA } from './iowa';
import { UTAH } from './utah';
import { ARKANSAS } from './arkansas';
import { MISSISSIPPI } from './mississippi';
import { KANSAS } from './kansas';
import { NEW_MEXICO } from './new-mexico';
import { NEBRASKA } from './nebraska';
import { WEST_VIRGINIA } from './west-virginia';
import { IDAHO } from './idaho';
import { HAWAII } from './hawaii';
import { MAINE } from './maine';
import { MONTANA } from './montana';
import { RHODE_ISLAND } from './rhode-island';
import { DELAWARE } from './delaware';
import { NORTH_DAKOTA } from './north-dakota';
import { VERMONT } from './vermont';
import { DISTRICT_OF_COLUMBIA } from './district-of-columbia';

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
  // Wave 3 (2026-10-24): the six no-wage-tax states, then the rest by population.
  ALASKA,
  NEVADA,
  NEW_HAMPSHIRE,
  SOUTH_DAKOTA,
  TENNESSEE,
  WYOMING,
  MINNESOTA,
  WISCONSIN,
  INDIANA,
  MISSOURI,
  ALABAMA,
  SOUTH_CAROLINA,
  KENTUCKY,
  LOUISIANA,
  OKLAHOMA,
  CONNECTICUT,
  OREGON,
  IOWA,
  UTAH,
  ARKANSAS,
  MISSISSIPPI,
  KANSAS,
  NEW_MEXICO,
  NEBRASKA,
  WEST_VIRGINIA,
  IDAHO,
  HAWAII,
  MAINE,
  MONTANA,
  RHODE_ISLAND,
  DELAWARE,
  NORTH_DAKOTA,
  VERMONT,
  DISTRICT_OF_COLUMBIA,
];

const BY_CODE = new Map(SOURCED_STATES.map((s) => [s.code, s]));
const BY_SLUG = new Map(SOURCED_STATES.map((s) => [s.slug, s]));

export function getSourcedStateTax(codeOrSlug: string): StateTaxSpec | undefined {
  return BY_CODE.get(codeOrSlug.toUpperCase()) ?? BY_SLUG.get(codeOrSlug.toLowerCase());
}

import type { Metadata } from 'next';

// app/layout.tsx appends " | QuantCurb" to page titles via its title template.
const BRAND_SUFFIX = ' | QuantCurb';
const MAX_TITLE = 60;
const MAX_DESCRIPTION = 155;

/**
 * Returns a Metadata title that stays within ~60 characters (the width Google
 * shows before truncating). Keeps the brand suffix when it fits, drops it when
 * it doesn't, and falls back to `short` for very long names
 * (e.g. "District of Columbia").
 */
export function fitTitle(title: string, short?: string): Metadata['title'] {
  if ((title + BRAND_SUFFIX).length <= MAX_TITLE) return title;
  if (title.length <= MAX_TITLE) return { absolute: title };
  if (short) return fitTitle(short);
  return { absolute: title };
}

/** Collapses whitespace and trims to ~155 characters at a word boundary. */
export function clampDescription(description: string): string {
  const text = description.replace(/\s+/g, ' ').trim();
  if (text.length <= MAX_DESCRIPTION) return text;
  const cut = text.slice(0, MAX_DESCRIPTION - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return cut.slice(0, lastSpace > 100 ? lastSpace : cut.length).replace(/[,;:\-–—]$/, '') + '…';
}

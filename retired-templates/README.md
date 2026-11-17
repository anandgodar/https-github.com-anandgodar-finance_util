# Retired route templates (Nov 2026 — AdSense "Low value content" fix)

The four `/{tier}/{state}/` route templates moved here from `app/` because
Next.js `output: export` refuses a dynamic route with zero paths. The 204
pages they built were 98% identical boilerplate with the state name swapped
(GSC 28d to 16 Nov: ~250 impressions, 0 clicks across all four tiers) and are
the most likely trigger of the 4 Nov AdSense rejection. Their URLs 301 via
vercel.json wildcards to each tier's national tool.

To restore a tier: move its folder back under `app/{tier}/[state]`, give every
state page genuinely differentiated, SOURCED content (the old
`lib/state-configs.ts` figures are hand-typed and unsourced — do not present
them as data), remove the vercel.json wildcard for that tier, and re-add the
prefix in `scripts/generate-sitemap.cjs`.

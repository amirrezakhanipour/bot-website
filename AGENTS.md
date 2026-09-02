# Trading Bot Sales Website — Agent Rules

These rules apply to Antigravity and any other coding agent working in this repository.

## Project Scope

This repository is ONLY the marketing, sales, account/order-status, payment, and admin website for the existing Trading Bot product.

Do not rebuild or modify these external systems unless the user explicitly requests it in a later task:

- Trading Bot
- Licensing System
- Client Dashboard

MVP license/dashboard activation remains manual after payment.

## Current Phase Gate

Phase 1, Phase 2, and Phase 3 are complete.

Current authorized scope: **Phase 4 — Manual Performance Integration**.

During Phase 4, connect the existing public Home Page Performance and Monthly Performance sections to the existing Supabase read model described in `docs/PHASE4_MANUAL_PERFORMANCE.md`.

Do NOT implement Admin UI, authentication pages, checkout/payment gateway integration, other marketing pages, licensing integration, Client Dashboard integration, or any Phase 5+ work.

## Language & Direction

- The website's primary user-facing language is **Persian (Farsi)**.
- The default document direction is **RTL** and the root HTML element must use `lang="fa"` and `dir="rtl"`.
- New public, auth, customer, admin, legal, research, and installation UI should be written in Persian unless the user explicitly asks for another language.
- Keep unavoidable technical/product terms such as MT5, TP, SL, API, broker names, and code identifiers in their conventional form when clarity benefits from it.
- Do not silently revert the website to English in future phases.

## Preferred Stack

- Next.js App Router + TypeScript
- Vercel
- Supabase Postgres + Supabase Auth
- `@supabase/ssr` for cookie-based Next.js auth
- Tailwind CSS
- GitHub as source of truth

Use current stable package versions discovered from official documentation/tooling. Keep the existing lockfile authoritative unless a package is genuinely required.

## Architecture Rules

- Keep a single Next.js app for the MVP.
- Do not add microservices, queues, Prisma, a separate API server, or a CMS without a demonstrated need.
- Prefer Server Components by default.
- Use Client Components only where browser interactivity is required.
- Payment gateway code must stay behind the existing provider adapter.
- Future licensing integration must sit behind an adapter; do not couple website domain tables to licensing implementation details.

## Home UI Rules

- Keep the premium, modern, trustworthy trading/fintech visual system.
- Prioritize mobile responsiveness, accessibility, semantic HTML, and fast loading.
- Do not fabricate performance numbers, testimonials, client counts, broker logos, awards, certifications, reviews, or trading results.
- Do not imply guaranteed profit or low/no risk.
- Pricing UI may be displayed as a visual shell, but Buy/Checkout flows must not be implemented before their authorized phase.
- Navigation links to future pages may exist, but do not build those pages early.
- Keep marketing copy factual and restrained.
- Include clear trading risk language on the Home Page.

## Phase 4 Performance Rules

- Treat `docs/PHASE4_MANUAL_PERFORMANCE.md` as authoritative.
- Performance data is **manually authored by admins in the database**. It must never be read automatically from the Trading Bot, MT5, VPS, broker, or Client Dashboard.
- Phase 4 is **public read integration only**. Do not build the Admin editing interface yet.
- Use the existing tables and RLS policies:
  - `public.performance_metric_definitions`
  - `public.performance_metric_values`
  - `public.monthly_performance`
- Do not insert fake/demo/test performance rows into the production Supabase project.
- The current metric value is the newest append-only value for each metric definition. Historical metric revisions must remain untouched.
- Public display must include only definitions that are public and active, consistent with existing RLS.
- Monthly performance must display all stored months, including negative months. Never filter, hide, recolor into a positive state, or delete negative results because they are negative.
- Preserve a clear empty state when no values have been published.
- Distinguish a database/query failure from a legitimate empty/unpublished state. A failure must not silently become a fake zero.
- Never convert missing values into `0`.
- Format values using definition metadata and value type without inventing a currency or unit that the database does not define.
- Keep the Home Page Persian/RTL. Technical numeric values may use LTR where that improves readability.
- Prefer Server Components and server-side Supabase reads. Do not add client-side data fetching or a state-management library for this phase.
- Do not change the database schema unless a genuinely required blocker is discovered and explicitly documented. Prefer the existing Phase 1 schema.

## Live Bot Rules

- Phase 3 architecture remains OBS Studio Window Capture on the Windows VPS -> YouTube Live over RTMPS -> embedded YouTube player on the Home Page.
- Never stream the full VPS desktop.
- Never expose stream keys, VPS credentials, or MT5 passwords.
- Do not expand Live Bot scope during Phase 4.

## Security Rules

- Never request, store, log, or expose an MT5 master password.
- Never commit `.env` secrets.
- Never expose Supabase service/secret keys, payment secrets, licensing secrets, VPS credentials, DB credentials, admin credentials, or YouTube stream keys in client code.
- Website passwords belong to Supabase Auth only; do not create a custom password column.
- Enable RLS on every table in an exposed Supabase schema.
- Never use user-editable metadata for admin authorization.
- Never trust browser-provided order amount, payment status, transaction ID, or activation status.
- Admin routes require server-side authorization; UI hiding is not authorization.

## Data Rules

- Performance values are manually entered by admins.
- Performance metric edits are append-only so history/timestamps are preserved.
- Negative monthly performance must remain visible and stored.
- Pricing is database-managed and orders snapshot amount/currency at purchase time.
- MT5 account data is limited to login/account number, broker, and server.

## Verification

Before considering Phase 4 complete:

- verify public anonymous reads are allowed by existing RLS for the three performance tables;
- verify the real current database state with zero published metric values/monthly rows still renders the honest empty state;
- verify the data-present state using safe local/test fixtures or a reversible non-production approach — do not leave fake production performance data behind;
- verify latest-revision selection for append-only metric values;
- verify positive, negative, zero, and null monthly fields render correctly;
- verify negative months remain visible;
- verify query failures do not render zero/fake values and do not crash the whole Home Page;
- run `npm run lint`;
- run `npm run build`;
- inspect the Home Page at common desktop and mobile widths;
- check for horizontal overflow and broken RTL layout;
- inspect `git diff` and avoid unrelated changes.

For any Supabase DDL change, run current security/performance advisors and verify RLS cases before merge.

## Git Workflow

- Work on `phase/4-manual-performance` for this phase.
- Keep commits phase/task scoped.
- Do not force-push or rewrite shared history.
- Do not merge to `main` until review and CI are complete.
- Do not start the next phase automatically after completing the current one.

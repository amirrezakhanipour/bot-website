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

Current authorized scope: **Phase 2 — Home Page UI**.

Phase 1 is complete and merged.

During Phase 2, implement ONLY the public Home Page UI and reusable marketing UI primitives needed by that page.

Do NOT implement Phase 3 Live Bot streaming, Phase 4 Performance data integration, authentication, checkout/payment gateway integration, admin pages, other marketing pages, licensing integration, or Client Dashboard integration.

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

## Phase 2 Home UI Rules

- Build a premium, modern, trustworthy trading/fintech visual system.
- Prioritize mobile responsiveness, accessibility, semantic HTML, and fast loading.
- Do not fabricate performance numbers, testimonials, client counts, broker logos, awards, certifications, reviews, or trading results.
- Do not imply guaranteed profit or low/no risk.
- Live Bot section is a visual integration shell only in Phase 2. Do not create or embed a real stream.
- Performance sections are presentation shells only in Phase 2. Do not connect them to Supabase and do not invent metrics.
- Pricing UI may be displayed as a visual shell, but Buy/Checkout flows must not be implemented yet.
- Navigation links to future pages may exist, but do not build those pages in Phase 2.
- Keep marketing copy factual and restrained.
- Include clear trading risk language on the Home Page.

## Security Rules

- Never request, store, log, or expose an MT5 master password.
- Never commit `.env` secrets.
- Never expose Supabase service/secret keys, payment secrets, licensing secrets, VPS credentials, DB credentials, or admin credentials in client code.
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

## Live Bot Rule

Live streaming is Phase 3. When implemented, stream only a dedicated public MT5/window capture. Never stream the whole VPS desktop or expose VPS credentials.

## Verification

Before considering a task complete:

- run `npm run lint`;
- run `npm run build`;
- inspect the page at common desktop and mobile widths;
- check for obvious horizontal overflow and broken layout;
- ensure controls have accessible labels/focus behavior where applicable;
- inspect `git diff` and avoid unrelated changes.

For any future Supabase DDL changes, run current security/performance advisors and verify RLS cases.

## Git Workflow

- Work on `phase/2-home-ui` for this phase.
- Keep commits phase/task scoped.
- Do not force-push or rewrite shared history.
- Do not start the next phase automatically after completing the current one.

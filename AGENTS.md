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

Phase 1 and Phase 2 are complete.

Current authorized scope: **Phase 3 — 24/7 Live Bot**.

During Phase 3, implement only the public Live Bot streaming integration described in `docs/PHASE3_LIVE_BOT.md` and the small reusable/configuration pieces required for it.

Do NOT implement Phase 4 Performance data integration, authentication, checkout/payment gateway integration, admin pages, other marketing pages, licensing integration, or Client Dashboard integration.

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

- Build a premium, modern, trustworthy trading/fintech visual system.
- Prioritize mobile responsiveness, accessibility, semantic HTML, and fast loading.
- Do not fabricate performance numbers, testimonials, client counts, broker logos, awards, certifications, reviews, or trading results.
- Do not imply guaranteed profit or low/no risk.
- Performance sections remain presentation shells until Phase 4. Do not invent metrics.
- Pricing UI may be displayed as a visual shell, but Buy/Checkout flows must not be implemented before their authorized phase.
- Navigation links to future pages may exist, but do not build those pages early.
- Keep marketing copy factual and restrained.
- Include clear trading risk language on the Home Page.

## Phase 3 Live Bot Rules

- Treat `docs/PHASE3_LIVE_BOT.md` as authoritative.
- MVP architecture is OBS Studio Window Capture on the Windows VPS -> YouTube Live over RTMPS -> embedded YouTube player on the Home Page.
- Never stream the full VPS desktop.
- Never use Display Capture when the intended source is the dedicated public MT5 window.
- The website must never receive or contain the YouTube stream key, VPS address/credentials, MT5 master password, licensing secrets, or other private credentials.
- The website may receive only public-safe stream configuration such as a YouTube video ID.
- Keep the stream provider boundary simple so the player can be swapped later without rewriting the Home Page.
- If stream configuration is absent, render an honest Persian fallback state instead of a fake live state or runtime error.
- Do not promise guaranteed 100% stream uptime.
- Do not implement a stream-health backend, WebRTC server, custom HLS pipeline, remote-control system, or OBS automation service in this phase.

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

Before considering a task complete:

- run `npm run lint`;
- run `npm run build`;
- inspect the Home Page at common desktop and mobile widths;
- verify the no-stream-config fallback state;
- verify the configured YouTube embed state using a safe test/public video ID or equivalent local configuration without committing it;
- check for obvious horizontal overflow and broken RTL layout;
- ensure the iframe has an accessible title and responsive sizing;
- inspect `git diff` and avoid unrelated changes.

For any future Supabase DDL changes, run current security/performance advisors and verify RLS cases.

## Git Workflow

- Work on `phase/3-live-bot` for this phase.
- Keep commits phase/task scoped.
- Do not force-push or rewrite shared history.
- Do not start the next phase automatically after completing the current one.

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

Current authorized scope: **Phase 1 — Website Architecture + Database Schema**.

Do NOT implement Phase 2 Home Page UI or any later phase without explicit user approval.

## Preferred Stack

- Next.js App Router + TypeScript
- Vercel
- Supabase Postgres + Supabase Auth
- `@supabase/ssr` for cookie-based Next.js auth
- Tailwind CSS
- GitHub as source of truth

Use current stable package versions discovered from official documentation/tooling. Pin installed versions and commit the lockfile.

## Architecture Rules

- Keep a single Next.js app for the MVP.
- Do not add microservices, queues, Prisma, a separate API server, or a CMS without a demonstrated need.
- Prefer Server Components by default.
- Use Server Actions/Route Handlers for trusted mutations and integrations.
- Payment gateway code must sit behind a provider adapter so the gateway can change later.
- Future licensing integration must sit behind an adapter; do not couple website domain tables to licensing implementation details.

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

- run relevant type/lint/build/tests;
- for Supabase DDL, run current security/performance advisors after applying changes;
- verify RLS with anonymous, normal user, cross-user, and admin cases;
- inspect `git diff` and avoid unrelated changes.

## Git Workflow

- Keep commits phase/task scoped.
- Do not force-push or rewrite shared history.
- Do not start the next phase automatically after completing the current one.

# Trading Bot Sales Website

Public marketing and subscription website for the existing Trading Bot product.

## Scope

This repository contains the sales website only. The following systems already exist separately and must not be rebuilt here:

- Trading Bot
- Licensing System
- Client Dashboard

The MVP may use manual admin activation after payment. Future licensing/dashboard API integration must be additive and modular.

## Planned Stack

- Next.js App Router + TypeScript
- Vercel hosting
- Supabase Postgres + Auth
- Tailwind CSS
- Server-side payment provider adapter (gateway selected later)

## Current Development State

**Phase 1 only: Website Architecture + Database Schema**

Phase 2 (Home Page UI) must not begin until Phase 1 is reviewed and explicitly approved.

## Phase 1 Artifacts

- `docs/ARCHITECTURE.md` — system boundaries, technical architecture, route/page architecture, security model
- `docs/DATABASE.md` — database model and access rules
- `supabase/schema/phase1.sql` — Phase 1 SQL schema draft to be converted into a Supabase migration when a dedicated project is created
- `AGENTS.md` — repository rules for Antigravity and other coding agents

## Security Baselines

- Never request or store an MT5 master password.
- Never expose Supabase secret/service keys, payment secrets, licensing secrets, VPS credentials, database credentials, or admin credentials in client code.
- Website passwords are handled by Supabase Auth, not stored in application tables.
- RLS is required on every table in the exposed `public` schema.
- Payment/order amounts are validated and written server-side; the browser is never trusted for authoritative prices or payment status.

## Development Principle

Keep the MVP simple and production-oriented. Prefer clear modules over unnecessary abstraction, and keep the website decoupled from the existing bot, licensing, and dashboard systems.

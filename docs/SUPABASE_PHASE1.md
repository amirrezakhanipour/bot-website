# Supabase Phase 1 State

## Project

- Name: `bot-website`
- Project ref: `gmfdztiftuhxrrqaqyoo`
- Region: `us-east-1`
- Organization plan at creation: Free
- Cost reported for the project at creation: `$0/month`

The existing `Nivash` Supabase project was not modified.

## Applied migrations

1. `20260902152622_phase1_initial_schema`
2. `20260902152815_phase1_advisor_hardening`

The corresponding SQL files are committed under `supabase/migrations/`.

## Verification

After both migrations:

- All Phase 1 `public` tables have Row Level Security enabled.
- `private.admin_users` also has Row Level Security enabled.
- Direct authenticated access to `private.admin_users` is not granted.
- `private.is_admin()` is executable by authenticated users but reads the private admin table through the controlled security-definer function.
- 12 initial performance metric definitions are seeded; no fabricated performance values are seeded.
- Supabase Security Advisor reports no lints.
- Supabase Performance Advisor reports no warnings after hardening. Remaining notices are only `unused_index` INFO entries, expected while the new database has no application traffic.

## Environment contract

The application uses only:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

Do not commit real environment values. Do not add the legacy anon key as a required application variable.

## Phase boundary

This configuration is infrastructure only. Authentication UI, checkout, payment integration, admin UI, and all Phase 2+ features remain out of scope until their scheduled phases.

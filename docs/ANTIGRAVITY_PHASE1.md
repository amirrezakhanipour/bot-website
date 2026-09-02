# Antigravity — Phase 1 Execution Prompt

Use this prompt from the repository workspace after pulling the latest `main`.

---

You are working on the repository `amirrezakhanipour/bot-website`.

Read these files first and treat them as authoritative:

- `AGENTS.md`
- `docs/ARCHITECTURE.md`
- `docs/DATABASE.md`
- `supabase/schema/phase1.sql`

Your authorization is limited to **Phase 1: Website Architecture + Database Schema**. Do not start Home Page design or any Phase 2+ feature.

Tasks:

1. Inspect the current repository and confirm the Phase 1 documents are consistent.
2. Create a clean Next.js App Router foundation using the current stable `create-next-app` tooling with:
   - TypeScript
   - strict mode
   - App Router
   - `src/` directory
   - Tailwind CSS
   - ESLint
   - a pinned lockfile
3. Because the repository is not empty, scaffold safely in a temporary directory and merge only the required framework files into the repository root. Preserve all existing docs, `AGENTS.md`, Supabase files, and environment contract.
4. Install the current stable `@supabase/supabase-js` and `@supabase/ssr` packages and pin them in the lockfile.
5. Add only the minimal Supabase client architecture required for future phases:
   - `src/lib/supabase/client.ts`
   - `src/lib/supabase/server.ts`
   Use the current official Supabase SSR guidance and the existing environment names from `.env.example`.
6. Keep the root page as a neutral development placeholder only. Do not design the marketing Home Page, Hero, metrics, pricing, navigation, authentication screens, checkout, admin UI, or live stream.
7. Do not create a payment gateway implementation. If useful for architecture only, create a small provider interface/type without a concrete gateway adapter.
8. Do not rebuild or integrate the Trading Bot, Licensing System, or Client Dashboard.
9. Do not connect to or modify the existing Supabase project named `Nivash`.
10. Inspect current Supabase CLI commands using `--help`. Do not invent migration command flags.
11. If no dedicated Supabase project for `bot-website` is configured, do not apply the schema remotely. Keep `supabase/schema/phase1.sql` as the reviewed draft and clearly report that remote application/advisors are pending creation of the dedicated project.
12. Run all validation available for the local foundation:
    - install dependencies
    - lint
    - type check if separate from build
    - production build
13. Review `git diff` for unrelated changes.
14. Commit only Phase 1 foundation work and push it to GitHub on a branch named `phase/1-foundation`.
15. Report:
    - files added/changed
    - package versions actually installed
    - lint/build results
    - branch name
    - commit SHA
    - any remaining Phase 1 blocker

STOP after Phase 1. Do not begin Phase 2 even if Phase 1 succeeds.

---

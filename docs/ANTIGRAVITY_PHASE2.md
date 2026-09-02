# Antigravity Prompt — Phase 2 Home Page UI

Use the prompt below to execute Phase 2.

---

You are working on `amirrezakhanipour/bot-website`.

The currently authorized phase is ONLY:

**Phase 2 — Home Page UI**

## First actions

1. Fetch/pull the latest repository state.
2. Checkout the existing branch:
   `phase/2-home-ui`
3. Read completely before editing:
   - `AGENTS.md`
   - `docs/ARCHITECTURE.md`
   - `docs/PHASE2_HOME_UI.md`
   - `docs/SUPABASE_PHASE1.md`
4. Inspect the existing Next.js scaffold and current dependencies.

Treat `AGENTS.md` and `docs/PHASE2_HOME_UI.md` as authoritative.

## Objective

Replace the current Phase 1 placeholder at `/` with the complete production-quality Home Page described in `docs/PHASE2_HOME_UI.md`.

The result should look like a serious premium trading/fintech product website rather than a generic SaaS template or crypto casino page.

## Required design direction

Build a cohesive dark, technical, premium UI using the existing Next.js + TypeScript + Tailwind stack.

Prioritize:

- strong typography;
- clean visual hierarchy;
- premium spacing;
- subtle borders and depth;
- restrained accents/gradients;
- responsive layout;
- mobile quality;
- credibility and transparency;
- minimal client-side JavaScript.

Prefer custom HTML/CSS/Tailwind visuals over external stock images.

Do NOT create fake logos, fake broker partnerships, testimonials, reviews, awards, client counts, balances, P&L figures, win rates, returns, or any other fabricated trust/performance evidence.

## Required Home sections

Implement all of these in the specified order:

1. Header / Navigation
2. Hero
3. Product Principles / Trust Strip
4. 24/7 Live Bot UI Shell
5. Performance Metrics UI Shell
6. Monthly Performance / Historical Results UI Shell
7. Core Features
8. How It Works
9. Transparency / Product Principles
10. Pricing UI Shell
11. FAQ
12. Final CTA
13. Risk Warning + Footer

Use the content and behavioral requirements in `docs/PHASE2_HOME_UI.md`.

## Critical honesty requirements

Performance values do not exist in Phase 2.

Therefore:

- never invent numbers;
- use `—`, `Not published yet`, or an honest empty state;
- do not render fake chart bars/curves that could be interpreted as historical performance;
- make the Performance components structurally ready for Phase 4 data integration.

Live Bot streaming belongs to Phase 3.

Therefore:

- create the final polished responsive frame/container;
- render an honest pending/not-connected state;
- do NOT implement OBS, HLS, WebRTC, VNC, RDP, iframe remote desktop, VPS access, or any actual stream logic.

Pricing/payment integration belongs to later phases.

Therefore:

- build the pricing presentation only;
- do not invent a price;
- do not implement checkout/auth/order/payment behavior.

## Product capability copy

The Home Page may describe these existing bot capabilities:

- Signal Execution
- Risk Management
- Multi Take-Profit Execution
- Break-Even Management
- Position Sizing
- Duplicate Protection
- Signal Expiration
- Risk Limits

Keep copy factual and concise. Do not expose implementation secrets.

## Risk language

The page must clearly communicate that:

- trading involves substantial risk;
- losses are possible;
- historical results do not guarantee future performance;
- the bot does not guarantee profit.

The FAQ must explicitly state that the Website does NOT request or store the customer's MT5 master password.

## Code organization

Keep `src/app/page.tsx` primarily as composition.

Create reusable components under `src/components/marketing` and/or `src/components/shared` where that reduces duplication.

Do not over-engineer abstractions.

Server Components should be the default.

Use Client Components only for actual interactivity such as the FAQ accordion or mobile menu where needed.

Do not connect the Home Page to Supabase in Phase 2.

Do not modify the Supabase schema or migrations.

Do not modify payment provider behavior.

## Dependencies

Prefer the existing dependency set.

Do not add:

- a UI framework;
- a charting library;
- animation libraries;
- state-management libraries;
- other large dependencies.

If a tiny dependency is genuinely necessary, explain why in the final report, but first attempt the implementation without it.

## Metadata

Add factual Home metadata suitable for a Trading Bot / automated MT5 trade execution website.

Do not use guaranteed-profit language.

## Accessibility

Verify:

- one `h1`;
- logical heading hierarchy;
- visible keyboard focus;
- accessible FAQ behavior;
- mobile menu behavior if implemented;
- semantic landmarks;
- acceptable contrast;
- reduced-motion considerations;
- no horizontal scrolling at mobile widths.

## Visual verification

Run the application locally and visually inspect the actual rendered page.

At minimum verify approximately:

- 375px mobile;
- 768px tablet;
- 1280px desktop.

Fix visual issues you observe rather than relying only on code review.

Check:

- header/navigation;
- hero wrapping;
- terminal/product visual;
- Live Bot frame;
- metric cards;
- empty historical-results state;
- feature grid;
- How It Works;
- pricing card;
- FAQ;
- footer;
- horizontal overflow;
- spacing consistency.

## Validation

Before completion run:

- `npm run lint`
- `npm run build`
- `git status`
- inspect `git diff`

Do not ignore build/lint failures.

## Git delivery

Work only on:

`phase/2-home-ui`

Commit Phase 2 changes with a clear phase-scoped commit message and push the branch to GitHub.

Do NOT merge to `main` yourself.

Do NOT begin Phase 3.

## Final report

Report exactly:

- design summary;
- files created/modified;
- any dependencies added (preferably none);
- responsive widths verified;
- accessibility checks performed;
- lint result;
- build result;
- branch name;
- final commit SHA;
- remaining Phase 2 blockers, if any.

STOP after Phase 2.

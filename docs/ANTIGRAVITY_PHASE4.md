# Antigravity Execution Prompt — Phase 4

Work on repository:

`amirrezakhanipour/bot-website`

Execute **ONLY Phase 4 — Manual Performance Integration**.

## Start

1. Fetch/pull the latest repository state.
2. Checkout the existing branch:
   `phase/4-manual-performance`
3. Read completely before editing:
   - `AGENTS.md`
   - `docs/ARCHITECTURE.md`
   - `docs/DATABASE.md`
   - `docs/PHASE4_MANUAL_PERFORMANCE.md`
   - `docs/SUPABASE_PHASE1.md`
   - `src/lib/supabase/server.ts`
   - `src/components/marketing/performance-section.tsx`
   - `src/components/marketing/monthly-performance-section.tsx`
   - `src/components/shared/metric-card.tsx`
   - the Phase 1 Supabase migrations that define the performance tables/RLS

Treat `AGENTS.md` and `docs/PHASE4_MANUAL_PERFORMANCE.md` as authoritative.

## Database target

Use only the dedicated Supabase project for this website:

`gmfdztiftuhxrrqaqyoo` (`bot-website`)

Never modify or connect this work to the Nivash Supabase project.

The production performance state at Phase 4 opening is intentionally empty:

- 12 public/active metric definitions
- 0 metric value rows
- 0 monthly performance rows

Do not insert demo/fake trading results into production.

## Implement

Build a small server-side performance data layer and connect the two existing Home Page sections to real Supabase reads.

Recommended modules:

- `src/lib/performance/types.ts`
- `src/lib/performance/queries.ts`
- `src/lib/performance/format.ts`

You may adjust names if another equally simple structure better matches the repo.

### Performance metrics

Read:

- `performance_metric_definitions`
- `performance_metric_values`

Requirements:

- use only public/active definitions allowed by existing RLS;
- order definitions by `display_order`;
- select the newest append-only value for each definition;
- make latest selection deterministic using `recorded_at` and a stable tie-breaker such as `id`;
- support both `numeric_value` and `text_value`;
- never turn missing values into zero;
- preserve current honest `— / هنوز منتشر نشده` state when no value exists;
- keep the initial 12 labels/descriptions Persian using a stable presentation map keyed by definition `key`;
- unknown future metric keys must fall back to DB label/description rather than being hidden;
- format using `value_type`, `precision`, `display_prefix`, and `display_suffix`;
- do not invent a currency or unit;
- preserve negative values;
- optionally show a restrained real `آخرین بروزرسانی` timestamp only when stored data exists.

### Monthly performance

Read `monthly_performance` newest month first.

Requirements:

- display all stored rows;
- never hide negative months;
- preserve numeric sign;
- `return_percent`: positive/negative/zero visual state with sign still visible;
- `profit_loss`: no invented currency;
- `number_of_trades`: integer;
- `drawdown_percent`: percentage;
- any null field -> `—`, never zero;
- format month/year in Persian while explicitly preserving Gregorian calendar semantics;
- desktop should retain the five-column table concept;
- mobile must be readable and must not overflow horizontally;
- keep the existing polished empty state when the query succeeds with zero rows;
- show a distinct Persian unavailable/error state when the query fails.

### Error behavior

Do not allow a Supabase read error to crash the entire Home Page.

Do not silently treat query errors as empty data.

Return explicit typed states from the data layer and render an honest unavailable message.

Server-side logging may record a restrained error for development/operations, but never include secrets.

## Architecture constraints

- Prefer Server Components.
- Use the existing `@supabase/ssr` server client.
- Public Home reads must use the publishable/public-safe configuration only.
- Do not add a `service_role` key.
- Do not create a client-side fetch loop.
- Do not add SWR, React Query, Redux, Zustand, Realtime, or polling.
- Do not add dependencies unless genuinely required.
- Do not create a new SQL view/migration unless an unavoidable blocker is proven first.
- Do not change Phase 3 Live Bot behavior.
- Do not implement Admin forms yet.
- Do not implement Auth.
- Do not implement Checkout/Payment.
- Do not implement Phase 5+.

## Verification

Verify the real project state without creating fake production results.

1. Confirm anonymous/public RLS reads for the performance tables work as intended.
2. Confirm real production empty state:
   - metric definitions render;
   - all values remain `—` / unpublished;
   - monthly empty state renders;
   - no runtime errors.
3. Verify data-present formatting using safe local fixtures/pure helpers or a reversible non-production technique. Do not leave fake production rows.
4. Verify:
   - latest revision wins;
   - numeric value;
   - text value;
   - percentage;
   - integer;
   - negative values;
   - positive/negative/zero monthly returns;
   - null monthly fields;
   - unknown metric key fallback;
   - query-error UI path.
5. Visually inspect approximately:
   - 375px
   - 768px
   - 1280px
6. Check:
   - Persian + RTL remains correct;
   - no horizontal overflow;
   - metric values are readable;
   - negative months remain visible;
   - empty and error states are visually distinct.

Then run:

- `npm run lint`
- `npm run build`
- `git status`
- inspect `git diff`

Commit and push only to:

`phase/4-manual-performance`

Do NOT merge to `main`.

## Final report

Report:

- implementation summary;
- files created/modified;
- exact query/latest-value strategy;
- formatting behavior;
- empty-state verification;
- data-present verification method;
- negative-month verification;
- error-state verification;
- dependencies added (expected: none unless justified);
- lint result;
- build result;
- branch;
- final commit SHA;
- any remaining Phase 4 blockers.

STOP after Phase 4.

Do not begin Phase 5.

# Phase 4 — Manual Performance Integration

## 1. Goal

Connect the existing Home Page performance UI to the existing Supabase performance tables.

This phase makes the public website display performance records that are manually authored by the website admin/database process.

**This is not automatic bot telemetry.**

The Trading Bot, MT5 terminal, VPS, broker, licensing system, and Client Dashboard remain separate systems and must not be queried for performance data in Phase 4.

---

## 2. Phase Boundary

### In scope

- Public read-only Supabase integration for Home Page Performance Metrics.
- Public read-only Supabase integration for Monthly Performance.
- Honest empty states when no data has been published.
- Honest error/unavailable states when a query fails.
- Correct value formatting from existing metric definition metadata.
- Latest-value selection from append-only metric revisions.
- Display of all stored monthly records, including negative months.
- Persian/RTL presentation.
- Small reusable server-side performance data-access/formatting modules.

### Out of scope

- Admin Panel UI.
- Admin metric editing forms.
- Admin monthly result forms.
- Supabase Auth UI.
- Checkout/payment.
- Pricing integration.
- Automatic MT5/Bot/VPS telemetry.
- Broker APIs.
- Client Dashboard integration.
- Realtime subscriptions.
- Charts based on fabricated/interpolated data.
- Phase 5 or later pages/features.

---

## 3. Existing Database Contract

Use the existing Phase 1 schema. Do not create a replacement performance schema.

### `public.performance_metric_definitions`

Important fields:

- `id`
- `key`
- `label`
- `description`
- `value_type`
- `display_prefix`
- `display_suffix`
- `precision`
- `display_order`
- `is_public`
- `is_active`

Current seeded metric keys:

1. `total_profit`
2. `monthly_profit`
3. `profit_factor`
4. `recovery_factor`
5. `maximum_drawdown`
6. `win_rate`
7. `total_trades`
8. `winning_trades`
9. `losing_trades`
10. `average_win`
11. `average_loss`
12. `average_risk_reward`

The database definition catalog is extensible. New public/active definitions must be able to appear without changing the table schema.

### `public.performance_metric_values`

Append-only revision history.

Important fields:

- `id`
- `metric_definition_id`
- `numeric_value`
- `text_value`
- `note`
- `recorded_by`
- `recorded_at`

Exactly one of `numeric_value` or `text_value` is present.

The **current public value** for a metric is the newest revision for that metric definition.

Use deterministic latest-value selection:

1. newest `recorded_at` first;
2. if timestamps tie, newest/deterministic `id` ordering as a tie-breaker.

Do not update/delete historical revisions in this phase.

### `public.monthly_performance`

One row per calendar month.

Important fields:

- `id`
- `month_start`
- `return_percent`
- `profit_loss`
- `number_of_trades`
- `drawdown_percent`
- `note`
- `created_at`
- `updated_at`

Rules:

- Sort newest month first on the Home Page.
- Negative `return_percent` and negative `profit_loss` are valid and must remain visible.
- `null` means unknown/not provided; never convert it to zero.
- Do not hide a month because one optional field is null.

---

## 4. Current Production Data State

At the opening of Phase 4, the dedicated `bot-website` Supabase project contains:

- 12 active/public seeded metric definitions;
- 0 rows in `performance_metric_values`;
- 0 rows in `monthly_performance`.

Therefore the first production result after integration should still be an honest empty/unpublished UI until real values are manually entered.

Do **not** add demo performance values to production merely to make the UI look populated.

---

## 5. Public Read Security

Existing RLS already permits anonymous/authenticated public reads only for public/active performance definitions and their allowed values, plus monthly performance.

Phase 4 must use the browser-safe/public Supabase configuration already present in the project:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

Do not use or introduce a `service_role`/secret key for public Home Page reads.

Prefer the existing server-side Supabase client and Server Components.

The browser must not need an authenticated session to see published performance.

---

## 6. Recommended Code Structure

Keep data access separate from UI.

Recommended structure:

```text
src/lib/performance/
  types.ts
  queries.ts
  format.ts

src/components/marketing/
  performance-section.tsx
  monthly-performance-section.tsx
```

Names may vary slightly if the existing repository conventions make another simple layout clearer.

### `queries.ts`

Responsibilities:

- create/use the server Supabase client;
- load public/active metric definitions in `display_order`;
- load allowed metric value revisions;
- deterministically select the newest value per definition;
- load monthly results newest-first;
- return typed success/error results;
- never turn query errors into numeric zeroes.

For the MVP, it is acceptable to fetch the small append-only metric revision set and reduce it server-side to the latest value per definition.

Do not introduce a new SQL view/migration only for premature optimization unless the existing approach becomes a demonstrated blocker.

### `format.ts`

Responsibilities:

- format numeric/text values for display;
- honor `precision`;
- honor `display_prefix` and `display_suffix` when provided;
- `percentage`: append a percent sign only when an explicit suffix does not already provide one;
- `integer`: display without decimal places;
- `number` / `ratio`: respect precision but do not invent a unit;
- `currency`: do not invent USD/USDT/IRR/etc. when the definition contains no currency metadata;
- preserve negative signs;
- `null`/missing remains `—`.

Do not reinterpret the meaning of stored numbers.

---

## 7. Persian Metric Presentation

The database's initial seeded labels are English. The public website must remain Persian.

A small presentation map keyed by the stable metric `key` is acceptable for the initial 12 definitions, for example:

- `total_profit` -> `سود کل`
- `monthly_profit` -> `سود ماهانه`
- `profit_factor` -> `Profit Factor`
- `recovery_factor` -> `Recovery Factor`
- `maximum_drawdown` -> `حداکثر افت سرمایه`
- `win_rate` -> `نرخ برد`
- `total_trades` -> `تعداد کل معاملات`
- `winning_trades` -> `معاملات برنده`
- `losing_trades` -> `معاملات بازنده`
- `average_win` -> `میانگین سود`
- `average_loss` -> `میانگین زیان`
- `average_risk_reward` -> `میانگین ریسک به بازده`

Keep useful standard trading terms such as Profit Factor and Recovery Factor in English when that is clearer.

For future unknown metric keys, fall back safely to the database label/description instead of hiding the metric.

---

## 8. Performance Metrics UI Behavior

The existing design language should remain intact.

For each public/active metric definition:

### Published value

Display:

- Persian/fallback label;
- formatted current value;
- description;
- status such as `منتشر شده`;
- optional latest update timestamp may be shown in restrained form.

### No published value

Display:

- label;
- `—`;
- `هنوز منتشر نشده`.

A missing value must not display `0`.

### Query failure

Do not display fake cards with zeroes and do not crash the entire Home Page.

Render an honest Persian unavailable state such as:

`در حال حاضر دریافت آمار عملکرد با مشکل مواجه شده است.`

Keep the risk/transparency language intact.

---

## 9. Monthly Performance UI Behavior

When rows exist, replace the current empty-only body with real responsive monthly rows.

Desktop columns remain:

1. ماه
2. بازده ٪
3. سود / زیان
4. تعداد معاملات
5. حداکثر افت

### Month formatting

Format `month_start` as a readable Persian month/year while preserving the fact that the database row represents a Gregorian calendar month. A stable approach is a Persian locale with the Gregorian calendar explicitly selected.

### Return percentage

- positive -> positive visual accent;
- negative -> negative visual accent;
- zero -> neutral;
- null -> `—`.

Color is only an aid. Keep the numeric sign visible.

### Profit/loss

- preserve positive/negative sign;
- do not invent a currency symbol;
- null -> `—`.

### Trades

- integer;
- null -> `—`.

### Drawdown

- percentage;
- null -> `—`.

### Notes

Notes may be omitted from the compact table or shown in an accessible secondary detail if this can be done without making the Home Page cluttered. Do not invent notes.

### Empty state

If the query succeeds but there are zero rows, retain the existing polished Persian empty state.

### Query failure

Show a separate honest unavailable state rather than the normal empty-state message.

---

## 10. Update Transparency

Where practical, expose a small `آخرین بروزرسانی` indicator derived only from actual stored timestamps.

Rules:

- never fabricate a timestamp;
- do not show one when no performance data exists;
- metric `recorded_at` is the metric revision timestamp;
- monthly `updated_at` is the monthly row update timestamp.

This is a transparency aid, not an uptime/status guarantee.

---

## 11. Rendering & Performance

- Prefer Server Components.
- Do not add SWR, React Query, Redux, Zustand, or another state/data library.
- Do not use client-side polling.
- Do not use Supabase Realtime in Phase 4.
- A normal server render/request-time read is sufficient for the MVP.
- Keep the Home Page functional even if performance data is temporarily unavailable.

Future Admin work may add explicit revalidation after edits. That is not required in this phase.

---

## 12. Testing Without Fake Production Data

The production project currently has no performance values.

Required verification:

1. **Real production empty state**
   - use the actual project with zero values;
   - confirm the Home Page renders cleanly.

2. **Data-present rendering**
   - verify using local pure-function fixtures, component/data formatter tests if added, or a reversible/non-production mechanism;
   - do not leave fake rows in production.

3. Cover at least:
   - positive metric;
   - negative metric;
   - integer metric;
   - percentage metric;
   - text metric if supported by formatter;
   - positive monthly return;
   - negative monthly return;
   - zero monthly return;
   - null optional monthly fields;
   - latest revision wins over an older revision.

4. Query error handling must be exercised without modifying production performance data.

No test framework needs to be added solely for Phase 4 unless there is a clear benefit. Small pure helpers should remain easy to verify.

---

## 13. Acceptance Criteria

Phase 4 is complete only when:

- Home Performance reads from the existing Supabase tables;
- Home Monthly Performance reads from the existing Supabase table;
- the real empty database state renders honestly;
- no fake production performance data has been inserted;
- latest append-only metric revision is selected correctly;
- unknown/new metric definitions do not break the UI;
- negative months are visible;
- null is never converted to zero;
- query errors have a distinct safe UI state;
- no service-role secret is used;
- Home remains Persian + RTL;
- no Admin UI has been built;
- no Phase 5+ work has begun;
- `npm run lint` passes;
- `npm run build` passes;
- responsive visual inspection passes at approximately 375px, 768px, and 1280px;
- changes are committed and pushed only to `phase/4-manual-performance`;
- the branch is not merged to `main` by Antigravity.

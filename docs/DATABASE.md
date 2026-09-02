# Phase 1 — Database Model

Database: Supabase Postgres

The schema is designed for the sales website only. Existing licensing and client-dashboard databases are not copied into this project.

## 1. Authentication

Website authentication uses `auth.users` managed by Supabase Auth.

Do **not** create an application password column.

Application user data references `auth.users.id`.

## 2. Schemas

### `public`

Contains application tables exposed through Supabase's Data API where needed. RLS is enabled on every table.

### `private`

Contains authorization-only data such as admin membership. It must not be exposed as a public Data API schema.

## 3. Tables

### `profiles`

Purpose: application profile attached to an authenticated website user.

Key fields:

- `id` -> `auth.users.id`
- `display_name`
- timestamps

Email remains owned by Supabase Auth to avoid duplicated authentication truth.

### `mt5_accounts`

Purpose: MT5 account information required for license activation.

Fields:

- owner/user
- MT5 login/account number
- broker
- server
- primary flag
- timestamps

Forbidden data:

- MT5 master password
- investor password unless a future requirement is explicitly approved

The model supports more than one MT5 account later without forcing the MVP UI to expose that capability.

### `pricing_plans`

Admin-managed subscription catalog.

Fields:

- slug/name
- duration in months
- amount
- currency
- active flag
- display order
- timestamps

The MVP can contain one active monthly plan. The data model already supports 3/6/12-month plans later.

### `orders`

Authoritative purchase record.

Fields include:

- user
- selected MT5 account
- selected plan
- immutable price/currency snapshot for the order
- website order status
- license activation status
- dashboard activation/access status
- optional existing Client Dashboard URL
- paid/activated/expiry timestamps

Required public-facing order statuses:

- `payment_pending`
- `paid`
- `waiting_activation`
- `activated`
- `expired`

Only trusted server/admin code may create or mutate authoritative order/payment fields.

### `payments`

Payment transaction record.

Fields include:

- order
- user
- provider
- provider transaction/reference ID
- amount
- currency
- status
- payment date
- timestamps

The table is intentionally provider-neutral.

### `order_status_history`

Audit trail for status changes.

Fields:

- order
- previous status
- new status
- source (`admin`, `payment`, `system`, etc.)
- changed-by user when applicable
- note
- timestamp

### `performance_metric_definitions`

Expandable catalog of metrics.

Examples seeded in Phase 1:

- Total Profit
- Monthly Profit
- Profit Factor
- Recovery Factor
- Maximum Drawdown
- Win Rate
- Total Trades
- Winning Trades
- Losing Trades
- Average Win
- Average Loss
- Average Risk/Reward

Definitions contain formatting metadata and display order so new metrics can be added without schema changes.

### `performance_metric_values`

Append-only metric revisions.

An admin edit inserts a new row containing:

- metric definition
- numeric/text value
- optional note
- `recorded_by`
- `recorded_at`

The newest record for a definition is the current value. Old rows remain available as edit history.

### `monthly_performance`

One row per calendar month.

Fields:

- month start
- return percent
- profit/loss
- number of trades
- drawdown percent
- optional note
- created/updated timestamps
- created/updated by

Negative months are valid data and must not be filtered or deleted because they are negative.

### `research_references`

Admin-managed references used by the Research & Articles page.

Fields:

- title
- authors
- year
- description
- source URL
- type/category
- published flag
- display order
- timestamps

## 4. Admin Authorization

`private.admin_users` stores authenticated user IDs that are website admins.

A private database function checks whether the current authenticated user is an admin. RLS admin policies use that function.

The function must not trust `user_metadata` or other user-editable claims.

Bootstrap of the first admin is a controlled database/admin operation, not a public signup option.

## 5. RLS Summary

### Public read

Anonymous visitors may read only content intended for the marketing site:

- active pricing plans
- public performance metric definitions/values
- monthly performance
- published research references

### Authenticated customer access

Customers may:

- read/update their own profile
- read/add/update their own MT5 account details
- read their own orders
- read their own payment records
- read status history belonging to their own orders

Customers may **not** authoritatively set:

- order amount
- payment status
- transaction IDs
- activation status
- dashboard activation status

### Admin access

Admins can manage the website operational records required by the Admin Panel, with authorization enforced by RLS/server code.

## 6. Payment Integrity

The browser may submit a plan ID, but server code must load the active plan from the database and create the order using the database price/currency.

A future gateway callback/webhook must be verified and then matched to the internal order before payment status is changed.

Never trust a browser-provided `amount`, `status`, or `transaction_id` as authoritative.

## 7. Migration Strategy

`supabase/schema/phase1.sql` is the reviewed Phase 1 schema draft.

When a dedicated Supabase project exists, Antigravity should:

1. initialize/link Supabase CLI using current CLI commands discovered with `--help`;
2. create a migration using `supabase migration new phase1_initial_schema`;
3. move/copy the reviewed schema into the generated migration file;
4. apply it to the dedicated development/project database;
5. run Supabase security and performance advisors;
6. run verification queries;
7. commit the generated migration and lock/config files.

Do not apply this schema to the existing Nivash project.

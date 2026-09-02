-- Trading Bot Sales Website
-- Phase 1 schema draft.
-- IMPORTANT: Do not apply this file to unrelated Supabase projects.
-- When a dedicated project is created, generate an official migration with
-- `supabase migration new phase1_initial_schema` and move this reviewed SQL into it.

begin;

create schema if not exists private;
revoke all on schema private from public;
grant usage on schema private to authenticated, service_role;

create table if not exists private.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table private.admin_users enable row level security;

create or replace function private.is_admin()
returns boolean
language sql
stable
security definer
set search_path = private, pg_temp
as $$
  select exists (
    select 1
    from private.admin_users a
    where a.user_id = (select auth.uid())
  );
$$;

revoke all on function private.is_admin() from public;
grant execute on function private.is_admin() to authenticated, service_role;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = public, pg_temp
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.mt5_accounts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  login_id text not null,
  broker text not null,
  server text not null,
  is_primary boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint mt5_accounts_login_not_blank check (length(trim(login_id)) > 0),
  constraint mt5_accounts_broker_not_blank check (length(trim(broker)) > 0),
  constraint mt5_accounts_server_not_blank check (length(trim(server)) > 0),
  constraint mt5_accounts_unique_account unique (user_id, login_id, server)
);

create table if not exists public.pricing_plans (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text,
  duration_months integer not null,
  price_amount numeric(18,2) not null,
  currency text not null,
  is_active boolean not null default true,
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint pricing_plans_slug_not_blank check (length(trim(slug)) > 0),
  constraint pricing_plans_name_not_blank check (length(trim(name)) > 0),
  constraint pricing_plans_duration_positive check (duration_months > 0),
  constraint pricing_plans_price_nonnegative check (price_amount >= 0),
  constraint pricing_plans_currency_iso_like check (currency ~ '^[A-Z]{3}$')
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete restrict,
  plan_id uuid not null references public.pricing_plans(id) on delete restrict,
  mt5_account_id uuid not null references public.mt5_accounts(id) on delete restrict,
  amount_snapshot numeric(18,2) not null,
  currency_snapshot text not null,
  status text not null default 'payment_pending',
  license_status text not null default 'pending',
  dashboard_status text not null default 'not_ready',
  dashboard_url text,
  paid_at timestamptz,
  activated_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint orders_amount_nonnegative check (amount_snapshot >= 0),
  constraint orders_currency_iso_like check (currency_snapshot ~ '^[A-Z]{3}$'),
  constraint orders_status_valid check (
    status in ('payment_pending', 'paid', 'waiting_activation', 'activated', 'expired')
  ),
  constraint orders_license_status_valid check (
    license_status in ('pending', 'activated', 'failed', 'revoked', 'expired')
  ),
  constraint orders_dashboard_status_valid check (
    dashboard_status in ('not_ready', 'ready', 'disabled')
  )
);

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete restrict,
  user_id uuid not null references auth.users(id) on delete restrict,
  provider text not null,
  provider_transaction_id text,
  amount numeric(18,2) not null,
  currency text not null,
  status text not null default 'pending',
  payment_date timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint payments_provider_not_blank check (length(trim(provider)) > 0),
  constraint payments_amount_nonnegative check (amount >= 0),
  constraint payments_currency_iso_like check (currency ~ '^[A-Z]{3}$'),
  constraint payments_status_valid check (
    status in ('pending', 'paid', 'failed', 'refunded', 'cancelled')
  )
);

create unique index if not exists payments_provider_transaction_unique
  on public.payments(provider, provider_transaction_id)
  where provider_transaction_id is not null;

create table if not exists public.order_status_history (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  previous_status text,
  new_status text not null,
  source text not null,
  changed_by uuid references auth.users(id) on delete set null,
  note text,
  created_at timestamptz not null default now(),
  constraint order_status_history_new_status_valid check (
    new_status in ('payment_pending', 'paid', 'waiting_activation', 'activated', 'expired')
  ),
  constraint order_status_history_previous_status_valid check (
    previous_status is null or previous_status in ('payment_pending', 'paid', 'waiting_activation', 'activated', 'expired')
  ),
  constraint order_status_history_source_not_blank check (length(trim(source)) > 0)
);

create table if not exists public.performance_metric_definitions (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  label text not null,
  description text,
  value_type text not null default 'number',
  display_prefix text,
  display_suffix text,
  precision integer not null default 2,
  display_order integer not null default 0,
  is_public boolean not null default true,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint performance_metric_key_not_blank check (length(trim(key)) > 0),
  constraint performance_metric_label_not_blank check (length(trim(label)) > 0),
  constraint performance_metric_value_type_valid check (
    value_type in ('number', 'percentage', 'currency', 'ratio', 'integer', 'text')
  ),
  constraint performance_metric_precision_valid check (precision between 0 and 8)
);

create table if not exists public.performance_metric_values (
  id uuid primary key default gen_random_uuid(),
  metric_definition_id uuid not null references public.performance_metric_definitions(id) on delete restrict,
  numeric_value numeric,
  text_value text,
  note text,
  recorded_by uuid references auth.users(id) on delete set null,
  recorded_at timestamptz not null default now(),
  constraint performance_metric_exactly_one_value check (
    (numeric_value is not null and text_value is null)
    or
    (numeric_value is null and text_value is not null)
  )
);

create table if not exists public.monthly_performance (
  id uuid primary key default gen_random_uuid(),
  month_start date not null unique,
  return_percent numeric(12,4),
  profit_loss numeric(18,2),
  number_of_trades integer,
  drawdown_percent numeric(12,4),
  note text,
  created_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint monthly_performance_first_day check (extract(day from month_start) = 1),
  constraint monthly_performance_trade_count_nonnegative check (
    number_of_trades is null or number_of_trades >= 0
  ),
  constraint monthly_performance_drawdown_nonnegative check (
    drawdown_percent is null or drawdown_percent >= 0
  )
);

create table if not exists public.research_references (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  authors text,
  publication_year integer,
  description text,
  source_url text,
  reference_type text not null default 'article',
  is_published boolean not null default true,
  display_order integer not null default 0,
  created_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint research_title_not_blank check (length(trim(title)) > 0),
  constraint research_year_reasonable check (
    publication_year is null or publication_year between 1800 and 2200
  ),
  constraint research_reference_type_valid check (
    reference_type in ('paper', 'article', 'book', 'documentation', 'other')
  )
);

create index if not exists mt5_accounts_user_idx on public.mt5_accounts(user_id);
create index if not exists orders_user_created_idx on public.orders(user_id, created_at desc);
create index if not exists orders_status_idx on public.orders(status);
create index if not exists payments_order_idx on public.payments(order_id);
create index if not exists payments_user_created_idx on public.payments(user_id, created_at desc);
create index if not exists order_status_history_order_created_idx on public.order_status_history(order_id, created_at desc);
create index if not exists performance_metric_values_latest_idx on public.performance_metric_values(metric_definition_id, recorded_at desc);
create index if not exists monthly_performance_month_idx on public.monthly_performance(month_start desc);
create index if not exists research_references_public_idx on public.research_references(is_published, display_order);

-- Updated-at triggers

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists mt5_accounts_set_updated_at on public.mt5_accounts;
create trigger mt5_accounts_set_updated_at
before update on public.mt5_accounts
for each row execute function public.set_updated_at();

drop trigger if exists pricing_plans_set_updated_at on public.pricing_plans;
create trigger pricing_plans_set_updated_at
before update on public.pricing_plans
for each row execute function public.set_updated_at();

drop trigger if exists orders_set_updated_at on public.orders;
create trigger orders_set_updated_at
before update on public.orders
for each row execute function public.set_updated_at();

drop trigger if exists payments_set_updated_at on public.payments;
create trigger payments_set_updated_at
before update on public.payments
for each row execute function public.set_updated_at();

drop trigger if exists performance_metric_definitions_set_updated_at on public.performance_metric_definitions;
create trigger performance_metric_definitions_set_updated_at
before update on public.performance_metric_definitions
for each row execute function public.set_updated_at();

drop trigger if exists monthly_performance_set_updated_at on public.monthly_performance;
create trigger monthly_performance_set_updated_at
before update on public.monthly_performance
for each row execute function public.set_updated_at();

drop trigger if exists research_references_set_updated_at on public.research_references;
create trigger research_references_set_updated_at
before update on public.research_references
for each row execute function public.set_updated_at();

-- Row Level Security

alter table public.profiles enable row level security;
alter table public.mt5_accounts enable row level security;
alter table public.pricing_plans enable row level security;
alter table public.orders enable row level security;
alter table public.payments enable row level security;
alter table public.order_status_history enable row level security;
alter table public.performance_metric_definitions enable row level security;
alter table public.performance_metric_values enable row level security;
alter table public.monthly_performance enable row level security;
alter table public.research_references enable row level security;

-- Explicit Data API privileges. RLS remains the row-level authority.

grant select on public.pricing_plans to anon, authenticated;
grant select on public.performance_metric_definitions to anon, authenticated;
grant select on public.performance_metric_values to anon, authenticated;
grant select on public.monthly_performance to anon, authenticated;
grant select on public.research_references to anon, authenticated;

grant select, insert, update on public.profiles to authenticated;
grant select, insert, update on public.mt5_accounts to authenticated;
grant select, insert, update, delete on public.pricing_plans to authenticated;
grant select, insert, update, delete on public.orders to authenticated;
grant select on public.payments to authenticated;
grant select, insert on public.order_status_history to authenticated;
grant select, insert, update, delete on public.performance_metric_definitions to authenticated;
grant select, insert on public.performance_metric_values to authenticated;
grant select, insert, update, delete on public.monthly_performance to authenticated;
grant select, insert, update, delete on public.research_references to authenticated;

-- Profiles: customer owns their row; admins can read/update for support.

create policy profiles_select_own
on public.profiles for select
to authenticated
using ((select auth.uid()) = id);

create policy profiles_insert_own
on public.profiles for insert
to authenticated
with check ((select auth.uid()) = id);

create policy profiles_update_own
on public.profiles for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);

create policy profiles_admin_select
on public.profiles for select
to authenticated
using ((select private.is_admin()));

create policy profiles_admin_update
on public.profiles for update
to authenticated
using ((select private.is_admin()))
with check ((select private.is_admin()));

-- MT5 accounts: own account data for customers; admin support access.

create policy mt5_accounts_select_own
on public.mt5_accounts for select
to authenticated
using ((select auth.uid()) = user_id);

create policy mt5_accounts_insert_own
on public.mt5_accounts for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy mt5_accounts_update_own
on public.mt5_accounts for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy mt5_accounts_admin_select
on public.mt5_accounts for select
to authenticated
using ((select private.is_admin()));

create policy mt5_accounts_admin_update
on public.mt5_accounts for update
to authenticated
using ((select private.is_admin()))
with check ((select private.is_admin()));

-- Pricing: public sees active plans; admin manages all plans.

create policy pricing_plans_public_select
on public.pricing_plans for select
to anon, authenticated
using (is_active = true);

create policy pricing_plans_admin_all
on public.pricing_plans for all
to authenticated
using ((select private.is_admin()))
with check ((select private.is_admin()));

-- Orders: customers can only read their own orders. Creation and mutation are trusted server/admin operations.

create policy orders_select_own
on public.orders for select
to authenticated
using ((select auth.uid()) = user_id);

create policy orders_admin_all
on public.orders for all
to authenticated
using ((select private.is_admin()))
with check ((select private.is_admin()));

-- Payments: customers can read their own records; admins can read all. Writes are server-only/service-role.

create policy payments_select_own
on public.payments for select
to authenticated
using ((select auth.uid()) = user_id);

create policy payments_admin_select
on public.payments for select
to authenticated
using ((select private.is_admin()));

-- Order history: customers can read history for their own orders; admins manage/read history.

create policy order_status_history_select_own
on public.order_status_history for select
to authenticated
using (
  exists (
    select 1 from public.orders o
    where o.id = order_status_history.order_id
      and o.user_id = (select auth.uid())
  )
);

create policy order_status_history_admin_select
on public.order_status_history for select
to authenticated
using ((select private.is_admin()));

create policy order_status_history_admin_insert
on public.order_status_history for insert
to authenticated
with check ((select private.is_admin()));

-- Performance definitions: public only sees public/active metrics; admins manage definitions.

create policy performance_metric_definitions_public_select
on public.performance_metric_definitions for select
to anon, authenticated
using (is_public = true and is_active = true);

create policy performance_metric_definitions_admin_all
on public.performance_metric_definitions for all
to authenticated
using ((select private.is_admin()))
with check ((select private.is_admin()));

-- Performance values are append-only. Admin edits create a new row; old revisions remain.

create policy performance_metric_values_public_select
on public.performance_metric_values for select
to anon, authenticated
using (
  exists (
    select 1
    from public.performance_metric_definitions d
    where d.id = performance_metric_values.metric_definition_id
      and d.is_public = true
      and d.is_active = true
  )
);

create policy performance_metric_values_admin_select
on public.performance_metric_values for select
to authenticated
using ((select private.is_admin()));

create policy performance_metric_values_admin_insert
on public.performance_metric_values for insert
to authenticated
with check ((select private.is_admin()));

-- Monthly performance remains public, including negative months. Admin manages rows.

create policy monthly_performance_public_select
on public.monthly_performance for select
to anon, authenticated
using (true);

create policy monthly_performance_admin_all
on public.monthly_performance for all
to authenticated
using ((select private.is_admin()))
with check ((select private.is_admin()));

-- Research references: public sees published items; admin manages all.

create policy research_references_public_select
on public.research_references for select
to anon, authenticated
using (is_published = true);

create policy research_references_admin_all
on public.research_references for all
to authenticated
using ((select private.is_admin()))
with check ((select private.is_admin()));

-- Initial expandable metric catalog. No performance values are fabricated or seeded.

insert into public.performance_metric_definitions
  (key, label, value_type, display_order)
values
  ('total_profit', 'Total Profit', 'number', 10),
  ('monthly_profit', 'Monthly Profit', 'number', 20),
  ('profit_factor', 'Profit Factor', 'ratio', 30),
  ('recovery_factor', 'Recovery Factor', 'ratio', 40),
  ('maximum_drawdown', 'Maximum Drawdown', 'percentage', 50),
  ('win_rate', 'Win Rate', 'percentage', 60),
  ('total_trades', 'Total Trades', 'integer', 70),
  ('winning_trades', 'Winning Trades', 'integer', 80),
  ('losing_trades', 'Losing Trades', 'integer', 90),
  ('average_win', 'Average Win', 'number', 100),
  ('average_loss', 'Average Loss', 'number', 110),
  ('average_risk_reward', 'Average Risk/Reward', 'ratio', 120)
on conflict (key) do nothing;

commit;

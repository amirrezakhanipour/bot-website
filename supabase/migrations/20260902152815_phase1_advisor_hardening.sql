create index if not exists orders_plan_id_idx on public.orders(plan_id);
create index if not exists orders_mt5_account_id_idx on public.orders(mt5_account_id);
create index if not exists order_status_history_changed_by_idx on public.order_status_history(changed_by);
create index if not exists performance_metric_values_recorded_by_idx on public.performance_metric_values(recorded_by);
create index if not exists monthly_performance_created_by_idx on public.monthly_performance(created_by);
create index if not exists monthly_performance_updated_by_idx on public.monthly_performance(updated_by);
create index if not exists research_references_created_by_idx on public.research_references(created_by);
create index if not exists research_references_updated_by_idx on public.research_references(updated_by);

create policy admin_users_no_direct_access
on private.admin_users for all
to authenticated
using (false)
with check (false);

drop policy if exists profiles_select_own on public.profiles;
drop policy if exists profiles_admin_select on public.profiles;
create policy profiles_select_own_or_admin
on public.profiles for select
to authenticated
using ((select auth.uid()) = id or (select private.is_admin()));

drop policy if exists profiles_update_own on public.profiles;
drop policy if exists profiles_admin_update on public.profiles;
create policy profiles_update_own_or_admin
on public.profiles for update
to authenticated
using ((select auth.uid()) = id or (select private.is_admin()))
with check ((select auth.uid()) = id or (select private.is_admin()));

drop policy if exists mt5_accounts_select_own on public.mt5_accounts;
drop policy if exists mt5_accounts_admin_select on public.mt5_accounts;
create policy mt5_accounts_select_own_or_admin
on public.mt5_accounts for select
to authenticated
using ((select auth.uid()) = user_id or (select private.is_admin()));

drop policy if exists mt5_accounts_update_own on public.mt5_accounts;
drop policy if exists mt5_accounts_admin_update on public.mt5_accounts;
create policy mt5_accounts_update_own_or_admin
on public.mt5_accounts for update
to authenticated
using ((select auth.uid()) = user_id or (select private.is_admin()))
with check ((select auth.uid()) = user_id or (select private.is_admin()));

drop policy if exists pricing_plans_public_select on public.pricing_plans;
drop policy if exists pricing_plans_admin_all on public.pricing_plans;
create policy pricing_plans_anon_select_active
on public.pricing_plans for select
to anon
using (is_active = true);
create policy pricing_plans_authenticated_select
on public.pricing_plans for select
to authenticated
using (is_active = true or (select private.is_admin()));
create policy pricing_plans_admin_insert
on public.pricing_plans for insert
to authenticated
with check ((select private.is_admin()));
create policy pricing_plans_admin_update
on public.pricing_plans for update
to authenticated
using ((select private.is_admin()))
with check ((select private.is_admin()));
create policy pricing_plans_admin_delete
on public.pricing_plans for delete
to authenticated
using ((select private.is_admin()));

drop policy if exists orders_select_own on public.orders;
drop policy if exists orders_admin_all on public.orders;
create policy orders_select_own_or_admin
on public.orders for select
to authenticated
using ((select auth.uid()) = user_id or (select private.is_admin()));
create policy orders_admin_insert
on public.orders for insert
to authenticated
with check ((select private.is_admin()));
create policy orders_admin_update
on public.orders for update
to authenticated
using ((select private.is_admin()))
with check ((select private.is_admin()));
create policy orders_admin_delete
on public.orders for delete
to authenticated
using ((select private.is_admin()));

drop policy if exists payments_select_own on public.payments;
drop policy if exists payments_admin_select on public.payments;
create policy payments_select_own_or_admin
on public.payments for select
to authenticated
using ((select auth.uid()) = user_id or (select private.is_admin()));

drop policy if exists order_status_history_select_own on public.order_status_history;
drop policy if exists order_status_history_admin_select on public.order_status_history;
create policy order_status_history_select_own_or_admin
on public.order_status_history for select
to authenticated
using (
  (select private.is_admin())
  or exists (
    select 1 from public.orders o
    where o.id = order_status_history.order_id
      and o.user_id = (select auth.uid())
  )
);

drop policy if exists performance_metric_definitions_public_select on public.performance_metric_definitions;
drop policy if exists performance_metric_definitions_admin_all on public.performance_metric_definitions;
create policy performance_metric_definitions_anon_select_public
on public.performance_metric_definitions for select
to anon
using (is_public = true and is_active = true);
create policy performance_metric_definitions_authenticated_select
on public.performance_metric_definitions for select
to authenticated
using ((is_public = true and is_active = true) or (select private.is_admin()));
create policy performance_metric_definitions_admin_insert
on public.performance_metric_definitions for insert
to authenticated
with check ((select private.is_admin()));
create policy performance_metric_definitions_admin_update
on public.performance_metric_definitions for update
to authenticated
using ((select private.is_admin()))
with check ((select private.is_admin()));
create policy performance_metric_definitions_admin_delete
on public.performance_metric_definitions for delete
to authenticated
using ((select private.is_admin()));

drop policy if exists performance_metric_values_public_select on public.performance_metric_values;
drop policy if exists performance_metric_values_admin_select on public.performance_metric_values;
create policy performance_metric_values_anon_select_public
on public.performance_metric_values for select
to anon
using (
  exists (
    select 1
    from public.performance_metric_definitions d
    where d.id = performance_metric_values.metric_definition_id
      and d.is_public = true
      and d.is_active = true
  )
);
create policy performance_metric_values_authenticated_select
on public.performance_metric_values for select
to authenticated
using (
  (select private.is_admin())
  or exists (
    select 1
    from public.performance_metric_definitions d
    where d.id = performance_metric_values.metric_definition_id
      and d.is_public = true
      and d.is_active = true
  )
);

drop policy if exists monthly_performance_public_select on public.monthly_performance;
drop policy if exists monthly_performance_admin_all on public.monthly_performance;
create policy monthly_performance_public_select
on public.monthly_performance for select
to anon, authenticated
using (true);
create policy monthly_performance_admin_insert
on public.monthly_performance for insert
to authenticated
with check ((select private.is_admin()));
create policy monthly_performance_admin_update
on public.monthly_performance for update
to authenticated
using ((select private.is_admin()))
with check ((select private.is_admin()));
create policy monthly_performance_admin_delete
on public.monthly_performance for delete
to authenticated
using ((select private.is_admin()));

drop policy if exists research_references_public_select on public.research_references;
drop policy if exists research_references_admin_all on public.research_references;
create policy research_references_anon_select_published
on public.research_references for select
to anon
using (is_published = true);
create policy research_references_authenticated_select
on public.research_references for select
to authenticated
using (is_published = true or (select private.is_admin()));
create policy research_references_admin_insert
on public.research_references for insert
to authenticated
with check ((select private.is_admin()));
create policy research_references_admin_update
on public.research_references for update
to authenticated
using ((select private.is_admin()))
with check ((select private.is_admin()));
create policy research_references_admin_delete
on public.research_references for delete
to authenticated
using ((select private.is_admin()));

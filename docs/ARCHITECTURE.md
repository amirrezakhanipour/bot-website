# Phase 1 — Website Architecture

Status: **Phase 1 architecture locked for implementation review**

## 1. System Boundary

This repository is the **sales website** only.

Out of scope for this repository:

- Trading Bot implementation
- Licensing engine implementation
- Client Dashboard implementation
- Automatic license activation in MVP
- Changes to the Trading Bot unless separately requested

MVP activation flow after a successful payment is intentionally manual:

`Website -> Payment confirmed -> Order waiting for activation -> Admin uses existing systems -> Admin marks order activated`

A future licensing API can replace the manual activation step without changing the website domain model.

## 2. Technology Stack

### Frontend / Web application

- Next.js App Router (current stable generated with `create-next-app@latest`)
- TypeScript in strict mode
- React Server Components by default
- Client Components only where browser interactivity is required
- Tailwind CSS for UI styling

### Hosting

- Vercel
- GitHub repository as the source of truth
- Preview deployments for pull requests when deployment is introduced

### Backend / data

- Supabase Postgres
- Supabase Auth for website accounts
- `@supabase/ssr` for cookie-based Next.js authentication
- Supabase Row Level Security on every exposed `public` table
- Supabase Storage reserved for future research/installation media; not required in Phase 1

### Payment

The gateway is deliberately not selected in Phase 1.

Payment integration must use a server-only adapter boundary:

```text
Checkout UI
   -> Website server action / route handler
      -> PaymentProvider interface
         -> Concrete gateway adapter
            -> Gateway

Gateway webhook/callback
   -> Website route handler
      -> verify provider signature/reference
      -> persist payment
      -> update order status
```

No payment secret or authoritative price may come from the browser.

### 24/7 Live Bot

Live streaming is Phase 3 and is not implemented in Phase 1.

Architecture constraint already locked:

- Only a dedicated public MT5/window capture may be streamed.
- The VPS desktop must never be exposed.
- VPS credentials must never reach the website or browser.
- The website will consume an embeddable/public stream output, not direct VPS desktop access.

## 3. Application Layers

Keep the codebase as a single Next.js application for the MVP.

```text
Browser
  -> Next.js App Router
     -> Server Components / Server Actions / Route Handlers
        -> domain/service modules
           -> Supabase
           -> Payment Provider (later)
           -> Licensing Adapter (future)
```

Do not introduce microservices, queues, ORMs, or a second backend unless a real requirement appears.

## 4. Recommended Source Layout

The Next.js scaffold will be introduced during the implementation portion of Phase 1 / immediately before feature phases, without building the Home UI.

```text
src/
  app/
    (marketing)/
      page.tsx
      robot/page.tsx
      research/page.tsx
      installation/page.tsx
      terms/page.tsx
      privacy/page.tsx
      risk-disclosure/page.tsx
    (auth)/
      login/page.tsx
      register/page.tsx
    (purchase)/
      checkout/page.tsx
      payment/result/page.tsx
    (account)/
      account/page.tsx
      account/orders/[id]/page.tsx
    admin/
      page.tsx
      performance/page.tsx
      monthly-performance/page.tsx
      pricing/page.tsx
      orders/page.tsx
      users/page.tsx
      research/page.tsx
    api/
      payments/
        callback/route.ts
        webhook/route.ts
  components/
    marketing/
    account/
    admin/
    shared/
  lib/
    supabase/
      client.ts
      server.ts
    auth/
    payments/
      provider.ts
    orders/
    performance/
  types/
```

This is a target route/module map, not authorization to implement Phase 2 UI.

## 5. Page Architecture

### Public

- `/` — Home
  - Hero
  - short bot presentation
  - live bot placeholder/integration point
  - performance metrics
  - monthly performance
  - features
  - how it works
  - pricing
  - FAQ
  - CTA
  - risk warning
- `/robot` — full product presentation
- `/research` — papers, articles, references
- `/installation` — installation guide
- `/terms` — terms, subscription, refund, license and user responsibility sections
- `/risk-disclosure` — trading risk / no guaranteed profit
- `/privacy` — privacy policy

### Authentication

- `/register`
- `/login`

Registration uses Supabase Auth for email/password. Application tables never store the website password or password hash directly.

### Customer

- `/checkout`
- `/payment/result`
- `/account`
- `/account/orders/[id]`

The account area exposes the required order states:

- `payment_pending`
- `paid`
- `waiting_activation`
- `activated`
- `expired`

An activated order may contain a link to the existing Client Dashboard.

### Admin

- `/admin`
- `/admin/performance`
- `/admin/monthly-performance`
- `/admin/pricing`
- `/admin/orders`
- `/admin/users`
- `/admin/research`

Admin routes must be protected on the server. Hiding navigation in the browser is never considered authorization.

## 6. Authentication and Authorization

- Supabase Auth owns email/password authentication and secure password hashing.
- App profile data is keyed by `auth.users.id`.
- MT5 credentials stored by this website are limited to:
  - MT5 login/account number
  - broker
  - server
- MT5 master password is forbidden.
- Admin membership lives in a non-exposed private database schema.
- RLS policies enforce user ownership for customer records.
- Admin policies use a database-side admin check; they do not trust user-editable metadata.
- Server-only secrets are never prefixed with `NEXT_PUBLIC_`.

## 7. Content Ownership

### Database-managed in MVP / near-MVP

- pricing plans
- performance metric definitions
- performance metric history/current values
- monthly performance
- orders and activation status
- payments
- MT5 account details
- research references

### Code-managed initially

- product presentation copy
- installation guide copy
- terms/risk/privacy copy
- FAQ copy

These can be moved to a CMS/database later if editing frequency justifies it.

## 8. Performance Data Model Principle

Performance is manually managed and must remain transparent.

Metric edits are append-only: an admin records a new value instead of overwriting the previous value. This gives every metric a natural revision history with `recorded_at` and `recorded_by`.

Monthly rows are never removed merely because performance is negative.

## 9. Production Security Baseline

- RLS on every public table.
- User ownership checks in RLS.
- Admin authorization checked server-side and in RLS.
- No client writes to authoritative payment/order amounts.
- Payment callbacks/webhooks verified server-side when a provider is selected.
- No master passwords, secrets, VPS credentials, licensing secrets, or database credentials in public code.
- `.env*` local secret files ignored by Git.
- Public Supabase URL/publishable key may be browser-visible; secret/service keys may not.

## 10. Explicitly Deferred

The following are not Phase 1 implementation tasks:

- Home visual design
- Live stream implementation
- Admin UI
- Auth UI
- Checkout UI or gateway integration
- License API integration
- Client Dashboard rebuild

Phase 1 must be reviewed before any Phase 2 work starts.

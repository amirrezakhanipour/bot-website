# Phase 1 RLS Verification

The Phase 1 Supabase access model was verified against the dedicated `bot-website` project using temporary test users and rows. All persistent test data was removed before the verification transaction completed.

## Passing cases

- Anonymous user sees only active pricing plans.
- Anonymous user sees the 12 public performance metric definitions.
- Normal authenticated user sees only their own profile.
- Normal authenticated user sees only their own MT5 account.
- Normal authenticated user sees only active pricing plans.
- Cross-user profile update is blocked.
- User can update their own profile.
- Admin can see all profiles.
- Admin can see all MT5 accounts.
- Admin can see inactive pricing plans.
- Admin can update another user's profile.

All 11 checks passed.

## Advisor state after verification

- Security Advisor: no lints.
- Performance Advisor: no warnings.
- Remaining Performance Advisor entries are `unused_index` INFO notices only, expected for a new database with no application traffic.

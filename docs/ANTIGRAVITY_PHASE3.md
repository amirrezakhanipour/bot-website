# Antigravity Execution Brief — Phase 3 Live Bot

Implement **ONLY Phase 3 — 24/7 Live Bot** on branch `phase/3-live-bot`.

## Before editing

Read completely:

- `AGENTS.md`
- `docs/ARCHITECTURE.md`
- `docs/PHASE3_LIVE_BOT.md`
- `.env.example`
- `src/components/marketing/live-bot-section.tsx`

Treat `AGENTS.md` and `docs/PHASE3_LIVE_BOT.md` as authoritative.

## Objective

Replace the current Phase 3 placeholder in the Persian Home Page with a production-quality YouTube Live embed integration that remains safe when no stream is configured.

## Implementation contract

Use the existing selected architecture:

```text
Windows VPS MT5
-> OBS Studio Window Capture
-> YouTube Live via RTMPS
-> Website YouTube embed
```

Do not implement OBS itself in this repo and do not connect to the VPS.

### Environment configuration

Extend `.env.example` with public-safe placeholders only:

```env
NEXT_PUBLIC_LIVE_STREAM_PROVIDER=youtube
NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID=
```

Never add a YouTube stream key, RTMP/RTMPS stream key, VPS IP, VPS credential, MT5 password, or other secret.

### Stream config module

Create a small typed module, for example:

`src/lib/live-stream/config.ts`

It should:

- read the configured provider/video ID;
- normalize/trim the video ID;
- expose whether a usable stream configuration exists;
- build the public embed URL in one place;
- keep YouTube-specific details out of the marketing component as much as practical;
- avoid unnecessary client-side JavaScript.

Do not create a database table for stream configuration in Phase 3.

### Live Bot section

Update `src/components/marketing/live-bot-section.tsx`.

When a YouTube video ID is configured:

- render a responsive 16:9 YouTube player;
- use `youtube-nocookie.com` where practical;
- use an accessible Persian iframe title;
- keep the surrounding interface Persian and RTL;
- let the actual video/player use normal video orientation;
- use a restrained live-status badge such as `پخش زنده` / `متصل` without claiming guaranteed uptime;
- preserve the security messaging that the full VPS and sensitive credentials are not exposed;
- do not show any fabricated viewer count, uptime percentage, latency figure, trade result, balance, or performance number;
- autoplay only if browser-safe and muted; do not add brittle browser hacks merely to force autoplay.

When no video ID is configured:

- render the current polished fallback concept, updated to say the live view is not currently configured/available;
- do not throw;
- do not render a broken iframe;
- do not claim the bot itself is offline merely because the public stream is unavailable.

### Security

- No iframe source may come from user input.
- No raw HTML injection.
- No `dangerouslySetInnerHTML`.
- No secret may be included in `NEXT_PUBLIC_` config except values explicitly documented as public-safe.
- Never expose the YouTube stream key.

### Scope boundaries

Do NOT implement:

- Phase 4 Performance Supabase integration;
- Auth;
- Checkout/payment;
- Admin UI;
- other marketing pages;
- Cloudflare Stream integration;
- custom WebRTC/HLS infrastructure;
- stream health polling/backend;
- OBS remote control;
- VPS automation;
- Trading Bot changes.

## Documentation

If useful, add a concise `docs/LIVE_STREAM_SETUP.md` that explains the manual operational setup:

1. enable YouTube Live;
2. create encoder stream;
3. keep stream key private;
4. install/configure OBS on Windows VPS;
5. use Window Capture for the dedicated MT5 window, not Display Capture;
6. crop all private UI/account details;
7. configure YouTube RTMPS;
8. enable embedding;
9. place only the public YouTube video ID in local/Vercel environment config;
10. verify the public page before going live broadly.

Do not include a real stream key or credentials in docs.

## Verification

Test both states:

### State A — no stream configuration

- Home Page loads normally.
- Persian fallback is displayed.
- No broken iframe.
- No runtime exception.

### State B — safe test video ID

- Player renders responsively.
- iframe title exists.
- no horizontal overflow at approximately 375px, 768px, 1280px.
- surrounding RTL layout remains correct.

Then run:

- `npm run lint`
- `npm run build`
- `git status`
- inspect `git diff`

Commit and push only to `phase/3-live-bot`.

Do not merge to `main`.

At the end report:

- implementation summary;
- files modified/created;
- environment variables added;
- no-config fallback verification;
- configured embed verification;
- responsive widths checked;
- lint result;
- build result;
- branch;
- final commit SHA;
- remaining operational blockers, especially YouTube/OBS/VPS setup.

STOP after Phase 3. Do not start Phase 4.
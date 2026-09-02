# Phase 3 — 24/7 Live Bot

Status: **Architecture selected; implementation authorized**

## Goal

Connect the existing Home Page Live Bot section to a real public 24/7 view of a dedicated MetaTrader 5 window, without exposing the VPS desktop, credentials, account secrets, or unrelated applications.

## Selected MVP Architecture

```text
MT5 on Windows VPS
  -> OBS Studio Window Capture
     -> Safe crop / scene containing only the approved public MT5 area
        -> YouTube Live over RTMPS
           -> YouTube embedded player on the website Home Page
```

## Why this architecture

- Lowest-cost MVP: YouTube Live does not add a video-delivery bill to the website.
- OBS supports Window Capture on Windows so the selected MT5 window can be captured instead of the full desktop.
- YouTube accepts encoder-based streams and supports RTMPS ingestion.
- The website only receives an embeddable player identifier; it never receives VPS access.
- The website remains provider-swappable later if a paid low-latency provider becomes justified.

## Security Boundary

The public stream must never show:

- the full VPS desktop;
- Windows taskbar/system tray if it contains private information;
- RDP/VNC windows;
- browser tabs or password managers;
- terminal windows containing secrets;
- VPS IP/credentials;
- MT5 master password;
- licensing secrets;
- API/database/payment secrets;
- private account information not intentionally approved for publication.

Use **OBS Window Capture**, not Display Capture, for the MT5 source. Crop the scene so only the approved public area is visible.

A dedicated/public MT5 layout is strongly preferred. The safest operational model is a separate public/demo display account or otherwise sanitized terminal layout where accidental disclosure has minimal impact.

## OBS / VPS Operational Setup

Recommended Phase 3 operating profile:

- OBS Studio on the same Windows VPS as MT5.
- Source: Window Capture targeting the dedicated MT5 window.
- Scene: `Public MT5 Live`.
- Crop/pad the source to remove title bars, account identifiers, Navigator panels, or other private UI where necessary.
- No microphone/audio capture is required unless explicitly added later.
- Stream through YouTube RTMPS.
- Prefer 720p at 30 fps for a text/chart monitoring stream to reduce VPS and upload load.
- Use a bitrate compatible with the VPS upload connection and current YouTube recommendations.
- Test stream health before treating the feed as continuous.
- Configure OBS/Windows startup behavior separately so the encoder can recover after VPS reboot.
- Never store the YouTube stream key in GitHub or website code.

## YouTube Configuration

- Channel must be eligible for Live Streaming and verified.
- First-time Live Streaming activation may take time; this is an external operational prerequisite.
- Create an encoder-based YouTube Live stream.
- Use a reusable/custom stream key if appropriate for the operating workflow.
- Prefer RTMPS ingestion.
- Enable embedding for the broadcast.
- The stream may be `Unlisted` for website-first discoverability or `Public` if broader YouTube discovery is desired.
- Keep the stream key secret; it belongs only in OBS/secure VPS configuration.

## Website Integration Contract

The website must not hard-code a YouTube stream key, VPS address, or private credential.

Use a public embed identifier/configuration only.

Recommended environment contract:

```env
NEXT_PUBLIC_LIVE_STREAM_PROVIDER=youtube
NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID=
```

The YouTube video ID is public-safe. The stream key is NOT the video ID and must never be stored in these variables.

The Home Page Live Bot section should:

- show the real embedded YouTube player when a valid video ID is configured;
- use a privacy-enhanced YouTube embed host where practical;
- remain responsive at mobile/tablet/desktop widths;
- use a descriptive iframe title;
- show a clear fallback state when no video ID is configured;
- avoid pretending the stream is live if configuration is absent;
- preserve the Persian/RTL design around the player;
- allow the embedded video itself to remain standard video orientation.

## Reliability Semantics

The product may be designed for continuous 24/7 viewing, but the website must not promise guaranteed 100% uptime. VPS restarts, encoder failures, network outages, or YouTube interruptions can temporarily stop the feed.

If the player is unavailable, the website should communicate that the live view is temporarily unavailable rather than showing a fake live state.

## Scope of Phase 3

Included:

- selected stream architecture;
- website embed component/configuration;
- fallback/not-configured state;
- `.env.example` public configuration placeholders;
- documentation for OBS + YouTube setup;
- responsive/accessibility verification;
- lint/build/CI.

Not included:

- Phase 4 Performance integration;
- Auth;
- Checkout/payment;
- Admin UI;
- automatic stream health monitoring service;
- direct VPS remote-control features;
- WebRTC/HLS infrastructure owned by this repo;
- rebuilding the Trading Bot.

## Acceptance Criteria

Phase 3 website code is complete when:

1. With no video ID configured, the Home Page renders a polished Persian fallback state with no runtime error.
2. With a valid YouTube Live video ID configured, the section renders a responsive embedded player.
3. No stream secret, VPS credential, or master password exists in source control or client configuration.
4. The iframe is accessible and responsive.
5. The rest of the Phase 2 Home Page is not regressed.
6. `npm run lint` passes.
7. `npm run build` passes.
8. GitHub CI is green.

Operational go-live additionally requires the user to configure OBS and a YouTube Live broadcast on the VPS/account side.
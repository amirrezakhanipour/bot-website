# 24/7 Live Stream Operational Setup Guide

This document describes the manual operational setup for broadcasting a dedicated MetaTrader 5 (MT5) execution window from the Windows VPS to YouTube Live and embedding the public player on the website Home Page.

---

## 1. Architecture Overview

```text
MetaTrader 5 (Windows VPS)
  │
  ├── OBS Studio (Window Capture — Dedicated MT5 Window Only)
  │      │
  │      └── RTMPS Transmission
  │             │
  ▼             ▼
YouTube Live Broadcast
  │
  └── Public Video ID (NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID)
         │
         ▼
Website Embedded Player (youtube-nocookie.com)
```

The website does not receive the YouTube stream key and does not directly connect to the VPS. It only embeds a public YouTube video/broadcast ID.

---

## 2. Security Boundaries & Guidelines

> [!IMPORTANT]
> - **NEVER** use Display Capture in OBS Studio for the public feed. Always use **Window Capture** targeting only the dedicated MT5 application window.
> - **NEVER** expose the full VPS desktop, taskbar, browser windows, terminal sessions, password managers, or VPS credentials.
> - **NEVER** commit or expose YouTube stream keys, RTMPS URLs with embedded secrets, MT5 master passwords, or VPS credentials.
> - **NEVER** put YouTube stream keys into `NEXT_PUBLIC_` environment variables. Only the public video ID is safe for browser-visible configuration.
> - Crop or rearrange the captured MT5 window so account numbers, broker-sensitive details, terminal panels, notifications, and any other private data are not visible.

---

## 3. Operational Step-by-Step Setup

### Step 1: YouTube Live Setup
1. Log into the official YouTube account.
2. Verify that Live Streaming is enabled on the channel. First-time activation may require up to 24 hours.
3. Navigate to **YouTube Studio** -> **Go Live**.
4. Select **Stream** (Encoder Stream).
5. Use YouTube's RTMPS ingest option and copy the private Stream Key into OBS only.
6. Set the broadcast visibility as intended and make sure embedding is allowed.
7. For unattended operation, review YouTube's **Auto-start** and **Auto-stop** settings. YouTube also supports reusable stream settings and reusable/custom stream keys.

> [!NOTE]
> Reusing stream settings or a stream key does not mean the website should assume that every future broadcast has the same public Video ID. After creating/replacing a broadcast, verify its public watch URL and update `NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID` if the Video ID has changed.

### Step 2: OBS Studio Configuration on Windows VPS
1. Download and install OBS Studio on the Windows VPS.
2. Open OBS Studio and navigate to **Settings** -> **Stream**.
   - Service: `YouTube - RTMPS`
   - Server: the YouTube RTMPS ingest server shown in Live Control Room
   - Stream Key: paste the private stream key
3. In **Settings** -> **Video** for the MVP:
   - Base (Canvas) Resolution: `1280x720`
   - Output (Scaled) Resolution: `1280x720`
   - FPS: `30`
4. Under **Sources**, add a new **Window Capture** source:
   - Window: select the dedicated MetaTrader 5 window (`terminal64.exe` when applicable)
   - Capture Method: Windows Graphics Capture or Automatic, whichever is stable on the VPS
5. Transform/Crop the scene:
   - remove title bars, account numbers, navigator panels, notifications, and sensitive broker details
   - show only the chart/execution information intended for public viewing
   - keep the final canvas at a clean 16:9 layout
6. Disable or remove unnecessary audio sources unless audio is intentionally required.

### Step 3: Start Stream & Verification
1. In OBS Studio, click **Start Streaming**.
2. Confirm in YouTube Studio that the preview displays only the intended cropped MT5 view and that the connection health is acceptable.
3. Open the public watch page and confirm the broadcast is actually visible to an unauthenticated viewer.
4. Copy the public YouTube Video ID from the watch URL, for example from `https://www.youtube.com/watch?v=YOUR_VIDEO_ID`.

### Step 4: Website Environment Configuration
1. Open `.env.local` for local development or configure Vercel Environment Variables:

   ```env
   NEXT_PUBLIC_LIVE_STREAM_PROVIDER=youtube
   NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID=YOUR_VIDEO_ID
   ```

2. The Video ID must be the standard 11-character YouTube video identifier. Invalid values fail closed and the website shows the fallback state instead of constructing an arbitrary embed URL.
3. Restart the local development server (`npm run dev`) or redeploy on Vercel.
4. Open the Home Page (`/#live-bot`) and confirm that:
   - the public YouTube player is rendered responsively;
   - the player itself correctly reports whether the broadcast is live, offline, upcoming, or ended;
   - no VPS desktop, account numbers, or credentials are visible;
   - removing or invalidating `NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID` cleanly shows the fallback state.

---

## 4. Operational Reliability Notes

- The website only knows whether a valid public YouTube Video ID has been configured. It does **not** independently verify that OBS is connected or that YouTube is currently broadcasting.
- Therefore the website UI must not claim `LIVE` solely because an environment variable exists. Runtime online/offline status is represented by the YouTube player itself.
- For a real 24/7 setup, configure Windows/VPS recovery so OBS and MT5 restart after a machine reboot or crash, then verify the public player after recovery.
- If YouTube creates a different Video ID for a replacement broadcast, update the environment variable and redeploy the website.

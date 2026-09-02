# 24/7 Live Stream Operational Setup Guide

This document describes the manual operational setup for broadcasting the dedicated MetaTrader 5 (MT5) execution window from the Windows VPS to YouTube Live, and embedding it on the website Home Page.

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

---

## 2. Security Boundaries & Guidelines

> [!IMPORTANT]
> - **NEVER** use Display Capture in OBS Studio. Always use **Window Capture** targeting only the dedicated MT5 application window.
> - **NEVER** expose the full VPS desktop, taskbar, browser windows, terminal sessions, password managers, or VPS credentials.
> - **NEVER** commit or expose YouTube stream keys, RTMPS URLs with embedded secrets, MT5 master passwords, or VPS credentials.
> - **NEVER** put YouTube stream keys into `NEXT_PUBLIC_` environment variables. Only the public video ID is safe for browser environment variables.

---

## 3. Operational Step-by-Step Setup

### Step 1: YouTube Live Setup
1. Log into the official YouTube account.
2. Verify that Live Streaming is enabled on the channel (first-time activation may require up to 24 hours).
3. Navigate to **YouTube Studio** -> **Go Live**.
4. Select **Stream** (Encoder Stream).
5. Copy the RTMPS Stream URL and your private Stream Key (keep the key strictly confidential).
6. Enable **Allow Embedding** in the broadcast settings.

### Step 2: OBS Studio Configuration on Windows VPS
1. Download and install OBS Studio on the Windows VPS.
2. Open OBS Studio and navigate to **Settings** -> **Stream**.
   - Service: `YouTube - RTMPS`
   - Server: Primary YouTube ingest server
   - Stream Key: Paste your private stream key.
3. In **Settings** -> **Video**:
   - Base (Canvas) Resolution: `1280x720`
   - Output (Scaled) Resolution: `1280x720`
   - FPS: `30`
4. Under **Sources**, add a new **Window Capture** source:
   - Window: Select `terminal64.exe` (MetaTrader 5).
   - Capture Method: `Windows 10 / 11 (Graphics Capture)` or `Automatic`.
5. Transform/Crop the scene:
   - Crop out title bars, account numbers, navigator panels, or sensitive broker details.
   - Position the MT5 chart and execution log to fill the 16:9 canvas smoothly.

### Step 3: Start Stream & Verification
1. In OBS Studio, click **Start Streaming**.
2. Confirm in YouTube Studio that the live stream status is **Excellent** and the preview displays the cropped MT5 window.
3. Copy the public YouTube Video ID from the broadcast URL (e.g., from `https://www.youtube.com/watch?v=YOUR_VIDEO_ID`).

### Step 4: Website Environment Configuration
1. Open `.env.local` (or configure Vercel Project Environment Variables):
   ```env
   NEXT_PUBLIC_LIVE_STREAM_PROVIDER=youtube
   NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID=YOUR_VIDEO_ID
   ```
2. Restart the local development server (`npm run dev`) or re-deploy on Vercel.
3. Open the Home Page (`/#live-bot`) and confirm that:
   - The status badge displays `پخش زنده ۲۴/۷`.
   - The embedded player plays the live MT5 broadcast responsively.
   - Unsetting `NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID` cleanly displays the fallback message without runtime errors.

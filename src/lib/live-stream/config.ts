export interface LiveStreamConfig {
  provider: "youtube" | null;
  videoId: string | null;
  isConfigured: boolean;
  embedUrl: string | null;
}

const YOUTUBE_VIDEO_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;

export function getLiveStreamConfig(): LiveStreamConfig {
  const rawProvider = (
    process.env.NEXT_PUBLIC_LIVE_STREAM_PROVIDER || "youtube"
  )
    .trim()
    .toLowerCase();

  const provider = rawProvider === "youtube" ? "youtube" : null;

  const rawVideoId = process.env.NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID || "";
  const candidateVideoId = rawVideoId.trim();
  const videoId =
    provider === "youtube" && YOUTUBE_VIDEO_ID_PATTERN.test(candidateVideoId)
      ? candidateVideoId
      : null;

  const isConfigured = provider === "youtube" && Boolean(videoId);
  const embedUrl =
    isConfigured && videoId
      ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&rel=0`
      : null;

  return {
    provider,
    videoId,
    isConfigured,
    embedUrl,
  };
}

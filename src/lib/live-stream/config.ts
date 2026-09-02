export interface LiveStreamConfig {
  provider: string;
  videoId: string | null;
  isConfigured: boolean;
  embedUrl: string | null;
}

export function getLiveStreamConfig(): LiveStreamConfig {
  const provider = (
    process.env.NEXT_PUBLIC_LIVE_STREAM_PROVIDER || "youtube"
  )
    .trim()
    .toLowerCase();

  const rawVideoId = process.env.NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID || "";
  const videoId = rawVideoId.trim() || null;

  const isConfigured = Boolean(videoId);
  const embedUrl =
    isConfigured && videoId
      ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
          videoId
        )}?autoplay=1&mute=1&rel=0&modestbranding=1`
      : null;

  return {
    provider,
    videoId,
    isConfigured,
    embedUrl,
  };
}

export type LocalProgress = {
  videoId: string;
  lastPositionSeconds: number;
  watchedSecondsTotal: number;
  durationSeconds: number;
  segments: { start: number; end: number }[];
  updatedAt: number;
};

const KEY = "alt_progress_v1";

export function loadLocalProgress(videoId: string): LocalProgress | null {
  if (typeof window === "undefined") return null;
  try {
    const all = JSON.parse(localStorage.getItem(KEY) || "{}");
    return all[videoId] || null;
  } catch {
    return null;
  }
}

export function saveLocalProgress(videoId: string, patch: Partial<LocalProgress>): LocalProgress {
  const existing = loadLocalProgress(videoId) || {
    videoId,
    lastPositionSeconds: 0,
    watchedSecondsTotal: 0,
    durationSeconds: 0,
    segments: [],
    updatedAt: Date.now()
  };

  const next: LocalProgress = {
    ...existing,
    ...patch,
    updatedAt: Date.now()
  };

  try {
    const all = JSON.parse(localStorage.getItem(KEY) || "{}");
    all[videoId] = next;
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch {}

  return next;
}

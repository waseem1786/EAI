"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

let apiPromise: Promise<void> | null = null;

function loadYouTubeAPI(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (apiPromise) return apiPromise;

  apiPromise = new Promise<void>((resolve, reject) => {
    if (window.YT && window.YT.Player) { resolve(); return; }
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;
    tag.onerror = () => reject(new Error("Failed to load YouTube API"));
    document.head.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => resolve();
  });

  return apiPromise;
}

export type PlayerState = "idle" | "ready" | "playing" | "paused" | "ended" | "error";

export function YouTubePlayer({
  videoId,
  startSeconds,
  onTick,
  onState,
  onSeekRequest
}: {
  videoId: string;
  startSeconds: number;
  onTick: (p: { seconds: number; duration: number; deltaWatched: number }) => void;
  onState: (s: PlayerState) => void;
  onSeekRequest: (seekTo: (seconds: number) => void) => void;
}) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);
  const pollRef = useRef<number | null>(null);

  const [started, setStarted] = useState(false);
  const [state, setState] = useState<PlayerState>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const lastTimeRef = useRef<number>(startSeconds || 0);
  const playingRef = useRef<boolean>(false);

  useEffect(() => { onState(state); }, [state, onState]);

  useEffect(() => {
    onSeekRequest((seconds: number) => {
      try { playerRef.current?.seekTo?.(Math.max(0, seconds), true); } catch {}
    });
  }, [onSeekRequest]);

  const destroy = () => {
    if (pollRef.current) window.clearInterval(pollRef.current);
    pollRef.current = null;
    if (playerRef.current?.destroy) {
      try { playerRef.current.destroy(); } catch {}
    }
    playerRef.current = null;
    if (hostRef.current) hostRef.current.innerHTML = "";
  };

  const initPlayer = async () => {
    setErrorMsg(null);
    setState("idle");

    try {
      await loadYouTubeAPI();
      if (!hostRef.current) return;

      destroy();

      lastTimeRef.current = startSeconds || 0;
      playingRef.current = false;

      playerRef.current = new window.YT.Player(hostRef.current, {
        videoId,
        width: "100%",
        height: "100%",
        playerVars: { start: Math.max(0, Math.floor(startSeconds || 0)), autoplay: 1, rel: 0, modestbranding: 1 },
        events: {
          onReady: () => {
            setState("ready");
            try {
              playerRef.current.seekTo(Math.max(0, startSeconds || 0), true);
              playerRef.current.playVideo();
            } catch {}
            window.setTimeout(() => {
              try {
                const s = playerRef.current.getPlayerState?.();
                if (s !== 1) setState((prev) => (prev === "error" ? "error" : "paused"));
              } catch {}
            }, 1200);
          },
          onError: () => {
            setState("error");
            setErrorMsg("Video failed to load.");
          },
          onStateChange: (e: any) => {
            if (e.data === 1) { setState("playing"); playingRef.current = true; }
            else if (e.data === 2) { setState("paused"); playingRef.current = false; }
            else if (e.data === 0) { setState("ended"); playingRef.current = false; }
          }
        }
      });

      pollRef.current = window.setInterval(() => {
        try {
          const p = playerRef.current;
          if (!p || typeof p.getCurrentTime !== "function") return;

          const seconds = Number(p.getCurrentTime() || 0);
          const duration = Number(p.getDuration() || 0);

          if (!playingRef.current) {
            lastTimeRef.current = seconds;
            return;
          }

          const delta = Math.max(0, seconds - lastTimeRef.current);
          lastTimeRef.current = seconds;
          onTick({ seconds, duration, deltaWatched: delta });
        } catch {}
      }, 1000);
    } catch (e: any) {
      setState("error");
      setErrorMsg(e?.message || "Video failed to initialize.");
    }
  };

  useEffect(() => {
    destroy();
    setStarted(false);
    setState("idle");
    setErrorMsg(null);
    lastTimeRef.current = startSeconds || 0;
    playingRef.current = false;
    return () => destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);
  // If startSeconds updates after the player is mounted (e.g., progress arrives async),
  // seek once when we're ready/paused and the delta is meaningful.
  const lastAppliedStartRef = useRef<number>(-1);
  useEffect(() => {
    const p = playerRef.current;
    if (!p || typeof p.seekTo !== "function") return;
    const desired = Math.max(0, Number(startSeconds || 0));
    if (desired <= 0) return;

    // avoid spamming seek
    if (Math.abs(desired - (lastAppliedStartRef.current < 0 ? 0 : lastAppliedStartRef.current)) < 2) return;

    try {
      const cur = Number(p.getCurrentTime?.() || 0);
      // Only seek if we're near the beginning or clearly not at the desired point
      if (cur < 2 || Math.abs(cur - desired) > 3) {
        p.seekTo(desired, true);
        lastAppliedStartRef.current = desired;
      }
    } catch {}
  }, [startSeconds]);


  return (
    <div className="playerShell" style={{ width: "100%", aspectRatio: "16 / 9" }}>
      <div style={{ width: "100%", height: "100%" }}>
        <div ref={hostRef} style={{ width: "100%", height: "100%" }} />
      </div>

      {!started && (
        <div className="playerOverlay">
          <motion.div className="overlayCard" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            <p className="overlayTitle">Play lesson</p>
            <p className="overlayText">
              Click starts playback (reliable on all browsers). It resumes from your last saved position.
            </p>
            <div className="btnRow" style={{ marginTop: 10 }}>
              <button className="btn btnPrimary" onClick={async () => { setStarted(true); await initPlayer(); }}>▶ Play</button>
              <button className="btn btnTeal" onClick={() => { setStarted(true); initPlayer(); }}>Start</button>
            </div>
            <p className="overlayText" style={{ marginTop: 8, opacity: 0.78 }}>
              If it doesn’t start, click inside the video once.
            </p>
          </motion.div>
        </div>
      )}

      {state === "error" && (
        <div className="playerOverlay">
          <motion.div className="overlayCard" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            <p className="overlayTitle">Playback error</p>
            <p className="overlayText">{errorMsg || "Unknown error."}</p>
            <div className="btnRow" style={{ marginTop: 10 }}>
              <button className="btn btnPrimary" onClick={async () => { setStarted(true); await initPlayer(); }}>Retry</button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

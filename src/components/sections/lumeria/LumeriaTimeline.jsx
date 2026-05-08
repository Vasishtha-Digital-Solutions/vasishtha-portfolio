import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Heart, Share2, Bookmark, MessageCircle, Play, Volume2, VolumeX } from "lucide-react";

/* ═════════════════════════════════════════════════════════════
   LUMERIA — SECTION 4 : Content Timeline
   Four phone mockups staircased upward (heights 340 → 430px).
   When a month has a `reel` URL the phone shows a real Instagram
   Reel UI (video + overlay chrome). Falls back to the original
   text mockup if no reel is provided.
   ═════════════════════════════════════════════════════════════ */

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const phoneReveal = {
  hidden: { opacity: 0, y: 80, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.0,
      delay: 0.2 + i * 0.18,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function LumeriaTimeline({ data }) {
  const t = data.timeline;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Warm cream gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #f5ede0 0%, #ece4d4 50%, #f5ede0 100%)",
        }}
      />

      {/* Gold orb behind phones */}
      <div
        className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.14), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10">

        {/* ─── Section header ─── */}
        <div className="text-center mb-16">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{
              background: "rgba(42,32,18,0.05)",
              border: "1px solid rgba(42,32,18,0.08)",
            }}
          >
            <span className="font-[Syne] text-[0.68rem] font-bold tracking-[2.5px] uppercase text-[#8b7340]">
              {t.kicker}
            </span>
          </motion.div>

          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className="font-[Cormorant_Garamond] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.2] text-[#2a2012]"
          >
            {t.headline}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #8b6914, #c9a84c 25%, #a07c28 50%, #c9a84c 75%, #8b6914)",
                backgroundSize: "200% auto",
                animation: "shimmer 5s linear infinite",
              }}
            >
              {t.headlineAccent}
            </span>
          </motion.h2>

          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            className="text-[0.95rem] text-[#8b7340] mt-3 max-w-[520px] mx-auto leading-[1.7]"
          >
            {t.supporting}
          </motion.p>
        </div>

        {/* ─── Phones row, staircased bottom-aligned ─── */}
        <div className="relative">
          {/* Connecting thread */}
          <div
            className="hidden md:block absolute left-0 right-0 pointer-events-none"
            style={{
              bottom: "80px",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(218,165,32,0.25) 15%, rgba(218,165,32,0.4) 50%, rgba(218,165,32,0.3) 85%, transparent)",
              zIndex: 0,
            }}
          />

          {/* Traveling dot */}
          <motion.div
            className="hidden md:block absolute w-2 h-2 rounded-full pointer-events-none"
            style={{
              bottom: "75px",
              background: "#ffd700",
              boxShadow: "0 0 14px rgba(255,215,0,0.8)",
              zIndex: 1,
            }}
            initial={{ left: "5%" }}
            whileInView={{ left: "95%" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          />

          <div className="flex flex-wrap gap-6 md:gap-5 justify-center items-end relative z-[2]">
            {t.months.map((m, i) => (
              <motion.div
                key={m.id}
                variants={phoneReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                className="text-center w-[200px] flex-shrink-0"
              >
                {/* Phone outer shell */}
                <motion.div
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="w-[180px] mx-auto rounded-[26px] p-[6px]"
                  style={{
                    background: "#1a1508",
                    border: `1px solid ${m.isLaunch ? "rgba(255,215,0,0.25)" : "rgba(218,165,32,0.1)"}`,
                    boxShadow: m.isLaunch
                      ? "0 20px 60px rgba(42,32,18,0.3), 0 0 40px rgba(255,215,0,0.15), 0 0 80px rgba(218,165,32,0.08)"
                      : "0 20px 60px rgba(42,32,18,0.2), 0 0 30px rgba(42,32,18,0.1)",
                  }}
                >
                  {/* Phone screen */}
                  <div
                    className="rounded-[20px] overflow-hidden relative"
                    style={{ height: `${m.phoneHeight}px` }}
                  >
                    {m.reel ? (
                      <ReelMockup month={m} />
                    ) : (
                      <TextMockup month={m} />
                    )}
                  </div>
                </motion.div>

                {/* Label below phone */}
                <div className="mt-5">
                  <div
                    className="text-[0.68rem] font-bold tracking-[1.8px] uppercase mb-1"
                    style={{ color: m.isLaunch ? "#c9a84c" : "#8b7340" }}
                  >
                    {m.label}
                  </div>
                  <div className="text-[0.9rem] font-semibold text-[#2a2012] leading-tight">
                    {m.stage}
                  </div>
                  <div className="text-[0.75rem] text-[#8b7340] mt-1 leading-snug">
                    {m.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Reel mockup — real video with Instagram Reel overlay UI ─── */
function ReelMockup({ month: m }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleMouseEnter = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
      setIsPlaying(false);
      setIsMuted(true);
    }
  }, []);

  const toggleMute = useCallback((e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  }, []);

  return (
    <div
      className="relative w-full h-full bg-black cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video — paused by default, plays on hover */}
      <video
        ref={videoRef}
        src={m.reel}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* Top gradient — status bar readability */}
      <div
        className="absolute inset-x-0 top-0 h-14 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)" }}
      />

      {/* Bottom gradient — caption readability */}
      <div
        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)" }}
      />

      {/* Status bar */}
      <div className="absolute top-0 inset-x-0 flex justify-between items-center px-3 pt-2 text-[0.5rem] text-white/75 pointer-events-none">
        <span>9:41</span>
        <span>100%</span>
      </div>

      {/* Play overlay — visible when paused */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none"
        style={{ opacity: isPlaying ? 0 : 1 }}
      >
        <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20">
          <Play size={14} className="text-white/90 ml-0.5" fill="currentColor" />
        </div>
      </div>

      {/* Sound toggle — appears on hover when playing */}
      <button
        onClick={toggleMute}
        className="absolute top-8 right-2 w-6 h-6 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        style={{ display: isPlaying ? undefined : "none" }}
      >
        {isMuted
          ? <VolumeX size={10} className="text-white/80" />
          : <Volume2 size={10} className="text-white/80" />
        }
      </button>

      {/* Right-side action buttons — Instagram Reels chrome */}
      <div className="absolute right-2 bottom-14 flex flex-col items-center gap-3.5 pointer-events-none">
        <div className="flex flex-col items-center gap-0.5">
          <Heart size={14} className="text-white drop-shadow" fill="white" />
          <span className="text-[0.48rem] text-white/85 font-medium">{m.engagement.likes}</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <MessageCircle size={13} className="text-white drop-shadow" />
          <span className="text-[0.48rem] text-white/85 font-medium">{m.engagement.shares}</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <Share2 size={12} className="text-white drop-shadow" />
          <span className="text-[0.48rem] text-white/85 font-medium">{m.engagement.saves}</span>
        </div>
      </div>

      {/* Bottom caption */}
      <div className="absolute bottom-0 inset-x-0 px-3 pb-3 pointer-events-none">
        <p className="text-[0.58rem] font-semibold text-white mb-0.5">@lumeria</p>
        <p
          className="text-[0.52rem] text-white/80 leading-snug line-clamp-2"
          style={{ whiteSpace: "pre-line" }}
        >
          {m.post}
        </p>
      </div>
    </div>
  );
}

/* ─── Original text mockup — fallback when no reel ─── */
function TextMockup({ month: m }) {
  return (
    <div
      className="flex flex-col h-full"
      style={{ background: "linear-gradient(180deg, #2a2012, #1a1508)" }}
    >
      {/* Status bar */}
      <div
        className="flex justify-between items-center px-3 py-2 text-[0.55rem]"
        style={{ color: "rgba(245,237,224,0.3)" }}
      >
        <span>9:41</span>
        <span>100%</span>
      </div>

      {/* Post content */}
      <div className="flex-1 flex flex-col justify-center px-5 text-center">
        <div
          className="font-[Cormorant_Garamond] text-[1rem] font-semibold leading-[1.3] mb-3 whitespace-pre-line"
          style={{ color: m.color }}
        >
          {m.post}
        </div>
        <div className="w-7 h-px mx-auto" style={{ background: m.color, opacity: 0.35 }} />
      </div>

      {/* Engagement bar */}
      <div
        className="flex justify-around items-center px-3 py-2.5 text-[0.6rem]"
        style={{
          borderTop: "1px solid rgba(218,165,32,0.08)",
          color: "rgba(245,237,224,0.35)",
        }}
      >
        <span className="flex items-center gap-1">
          <Heart size={9} />{m.engagement.likes}
        </span>
        <span className="flex items-center gap-1">
          <Share2 size={9} />{m.engagement.shares}
        </span>
        <span className="flex items-center gap-1">
          <Bookmark size={9} />{m.engagement.saves}
        </span>
      </div>
    </div>
  );
}

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Single Video Cell ── */
function VideoCell({ src }) {
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
      className="aspect-[3/4] relative overflow-hidden rounded cursor-pointer group bg-[#2d0f0f]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Play icon overlay (visible when not playing) */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300"
        style={{ opacity: isPlaying ? 0 : 1 }}
      >
        <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/10">
          <Play size={20} className="text-white/80 ml-0.5" fill="currentColor" />
        </div>
      </div>

      {/* Speaker toggle (visible on hover) */}
      <button
        onClick={toggleMute}
        className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hover:bg-black/70"
      >
        {isMuted ? (
          <VolumeX size={14} className="text-white/80" />
        ) : (
          <Volume2 size={14} className="text-white/80" />
        )}
      </button>

      {/* Reel indicator */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <line x1="7" y1="2" x2="7" y2="22" />
          <line x1="17" y1="2" x2="17" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
      </div>
    </div>
  );
}

/* ── Single Image Cell ── */
function ImageCell({ src }) {
  return (
    <div className="aspect-[3/4] relative overflow-hidden rounded bg-[#2d0f0f] group">
      <img
        src={src}
        alt="Sri Rudra post"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}

/* ── Main Section ── */
export default function SriRudraContent({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { instagramGrid } = data;

  // Split grid into columns
  const leftCol = instagramGrid.grid.filter((item) => item.col === "left");
  const middleCol = instagramGrid.grid.filter((item) => item.col === "middle");
  const rightCol = instagramGrid.grid.filter((item) => item.col === "right");

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: "linear-gradient(180deg, #1a0a0a, #2d0f0f, #1a0a0a)",
      }}
    >
      {/* Stone divider top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(184,134,11,0.2) 50%, transparent 95%)",
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="text-center mb-12"
        >
          <h2 className="font-[Playfair_Display] text-[clamp(2rem,4vw,2.8rem)] font-bold text-[#f5e6d3]">
            The Content We{" "}
            <span className="text-[#E85D04]">Created</span>
          </h2>
        </motion.div>

        {/* Instagram Profile Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="rounded-lg overflow-hidden bg-[#0d0505] border border-[rgba(184,134,11,0.1)] mb-1"
          style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }}
        >
          {/* Profile row */}
          <div className="px-6 py-5 flex items-center gap-5 border-b border-[rgba(245,230,211,0.06)]">
            <div
              className="w-16 h-16 rounded-full flex-shrink-0 p-0.5"
              style={{
                background: "linear-gradient(135deg, #E85D04, #B8860B, #800020)",
              }}
            >
              <div className="w-full h-full rounded-full bg-[#2d0f0f] flex items-center justify-center font-[Playfair_Display] text-sm font-bold text-[#E85D04]">
                SR
              </div>
            </div>
            <div className="flex-1">
              <div className="font-bold text-[#f5e6d3] text-base mb-1.5">
                {instagramGrid.profile.username}
              </div>
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="font-bold text-[#f5e6d3]">
                    {instagramGrid.profile.posts}
                  </span>{" "}
                  <span className="text-[rgba(245,230,211,0.35)]">posts</span>
                </div>
                <div>
                  <span className="font-bold text-[#f5e6d3]">
                    {instagramGrid.profile.followers}
                  </span>{" "}
                  <span className="text-[rgba(245,230,211,0.35)]">
                    followers
                  </span>
                </div>
                <div>
                  <span className="font-bold text-[#f5e6d3]">
                    {instagramGrid.profile.following}
                  </span>{" "}
                  <span className="text-[rgba(245,230,211,0.35)]">
                    following
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="px-6 py-3 border-b border-[rgba(245,230,211,0.06)]">
            <div className="text-sm text-[#f5e6d3] font-semibold">
              {instagramGrid.profile.displayName}
            </div>
            {instagramGrid.profile.category && (
              <div className="text-[0.78rem] text-[rgba(245,230,211,0.25)] mt-0.5">
                {instagramGrid.profile.category}
              </div>
            )}
            <div className="text-[0.8rem] text-[rgba(245,230,211,0.4)] leading-relaxed mt-1.5 whitespace-pre-line">
              {instagramGrid.profile.bio}
            </div>
            <div className="text-[0.8rem] text-[#E85D04] mt-1 flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-70">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              {instagramGrid.profile.cta}
            </div>
          </div>

          {/* Highlights */}
          <div className="px-6 py-3.5 flex gap-4 overflow-x-auto border-b border-[rgba(245,230,211,0.06)]">
            {instagramGrid.highlights.map((hl) => (
              <div key={hl.label} className="text-center flex-shrink-0">
                <div
                  className="w-14 h-14 rounded-full p-0.5 mb-1"
                  style={{
                    background:
                      hl.color === "saffron"
                        ? "linear-gradient(135deg, #E85D04, #B8860B)"
                        : hl.color === "vermillion"
                          ? "linear-gradient(135deg, #E23D28, #E85D04)"
                          : hl.color === "brass"
                            ? "linear-gradient(135deg, #B8860B, #CD9B1D)"
                            : hl.color === "gold"
                              ? "linear-gradient(135deg, #CD9B1D, #DAA520)"
                              : "linear-gradient(135deg, #800020, #B8860B)",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-[#2d0f0f] flex items-center justify-center text-[0.5rem] text-[rgba(245,230,211,0.5)]">
                    {hl.label.split(" ")[0]}
                  </div>
                </div>
                <span className="text-[0.6rem] text-[rgba(245,230,211,0.4)]">
                  {hl.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3-Column Grid: Reels | Posts | Reels */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
          className="grid grid-cols-3 gap-1 rounded-b-lg overflow-hidden"
        >
          {/* Left column — Reels (9:16 aspect) */}
          <div className="flex flex-col gap-1">
            {leftCol.map((item, i) => (
              <VideoCell key={`left-${i}`} src={item.src} />
            ))}
          </div>

          {/* Middle column — Posts (1:1 aspect) */}
          <div className="flex flex-col gap-1">
            {middleCol.map((item, i) => (
              <ImageCell key={`mid-${i}`} src={item.src} />
            ))}
          </div>

          {/* Right column — Reels (9:16 aspect) */}
          <div className="flex flex-col gap-1">
            {rightCol.map((item, i) => (
              <VideoCell key={`right-${i}`} src={item.src} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stone divider bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(184,134,11,0.2) 50%, transparent 95%)",
        }}
      />
    </section>
  );
}

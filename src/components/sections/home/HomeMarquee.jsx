// ──────────────────────────────────────────────────────────────
// Home — MARQUEE (Section 2)
// Seamless horizontal strip below the hero. Client names + live
// status notes separated by orange dots. 40s linear loop,
// edge-fade masks on both sides, reduced-motion aware.
// ──────────────────────────────────────────────────────────────

import { homeData } from "../../../data/home"

export default function HomeMarquee() {
  const { palette, marquee } = homeData

  // Duplicate the list so the translate -50% loop is seamless
  const track = [...marquee, ...marquee]

  return (
    <section
      aria-label="VDS clients and live status"
      className="relative w-full overflow-hidden"
      style={{
        background: palette.bg,
        borderTop: `1px solid ${palette.line}`,
        borderBottom: `1px solid ${palette.line}`,
        paddingTop: 18,
        paddingBottom: 18,
      }}
    >
      {/* Edge-fade masks (left + right) — fade items into the bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10"
        style={{
          width: 96,
          background: `linear-gradient(90deg, ${palette.bg} 0%, transparent 100%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10"
        style={{
          width: 96,
          background: `linear-gradient(270deg, ${palette.bg} 0%, transparent 100%)`,
        }}
      />

      {/* Scoped keyframes + reduced-motion guard (kept local so we don't
          touch the global stylesheet for a single animation) */}
      <style>{`
        @keyframes homeMarqueeSlide {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .home-marquee-track {
          animation: homeMarqueeSlide 40s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .home-marquee-track { animation: none; }
        }
      `}</style>

      {/* Scrolling track (width = 200% since we duplicated the items) */}
      <div
        className="home-marquee-track flex min-w-[200%] items-center gap-10 whitespace-nowrap"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: palette.textDim,
        }}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex shrink-0 items-center gap-10"
          >
            <span>{item}</span>
            {/* Orange dot separator — repeats the logo's signature motif */}
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: palette.orange, opacity: 0.7 }}
            />
          </span>
        ))}
      </div>
    </section>
  )
}

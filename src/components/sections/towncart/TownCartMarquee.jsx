import { motion } from "framer-motion";

/* ═════════════════════════════════════════════════════════════
   TOWNCART — SECTION 2 · MARQUEE STRIP
   Full-bleed red band that scrolls horizontally at a slow,
   steady pace. Amber ✦ stars separate each phrase. 4px ink
   borders top/bottom, soft red-to-transparent fades on both
   edges so the content seems to dissolve rather than clip.
   Framer Motion drives the loop (data.marquee.durationSec).
   ═════════════════════════════════════════════════════════════ */

export default function TownCartMarquee({ data }) {
  const { items, durationSec = 50 } = data.marquee;

  // Duplicate the list so translating the track by -50% yields
  // a perfectly seamless loop (end of first copy = start of second).
  const loopItems = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "#C8321C",
        color: "#FDF3D8",
        padding: "20px 0",
        borderTop: "4px solid #1a1410",
        borderBottom: "4px solid #1a1410",
        zIndex: 10,
      }}
    >
      {/* ─── Edge fades ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 bottom-0 left-0"
        style={{
          width: 60,
          zIndex: 2,
          background:
            "linear-gradient(90deg, #C8321C, rgba(200, 50, 28, 0))",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 bottom-0 right-0"
        style={{
          width: 60,
          zIndex: 2,
          background:
            "linear-gradient(-90deg, #C8321C, rgba(200, 50, 28, 0))",
        }}
      />

      {/* ─── Scrolling track ─── */}
      <motion.div
        className="flex items-center whitespace-nowrap"
        style={{
          width: "max-content",
          gap: "3.5rem",
          fontFamily: "'Fraunces', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(19px, 2.2vw, 26px)",
          fontWeight: 500,
          willChange: "transform",
        }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: durationSec,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopItems.map((phrase, i) => (
          <span
            key={i}
            className="inline-flex items-center"
            style={{ gap: "1.25rem" }}
          >
            {/* Amber ✦ divider star */}
            <span
              aria-hidden="true"
              style={{
                color: "#FFB84D",
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: "1.1em",
              }}
            >
              ✦
            </span>
            {phrase}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

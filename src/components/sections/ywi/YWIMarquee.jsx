import { motion } from "framer-motion";

/* ═════════════════════════════════════════════════════════════
   YWI CASE STUDY — MARQUEE (Section 2 / connector band)
   Full-bleed yellow band with scrolling proof-points. Small
   ink dots separate each phrase. Items are duplicated so the
   loop reads seamlessly; motion animates from 0% → -50%.
   No pause on hover — editorial ribbon, not a widget.
   ═════════════════════════════════════════════════════════════ */

export default function YWIMarquee({ data }) {
  const { marquee, palette } = data;
  const { items, durationSec } = marquee;

  // Duplicate the items so the "-50%" translate lands on a
  // frame identical to "0%" — yields a perfectly seamless loop.
  const doubled = [...items, ...items];

  return (
    <div
      aria-label="Campaign highlights"
      className="relative w-full overflow-hidden"
      style={{
        background: palette.yellow,
        color: palette.bg,
        padding: "16px 0",
      }}
    >
      <motion.div
        className="flex items-center whitespace-nowrap"
        style={{
          gap: "3.5rem",
          width: "max-content",
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: "0.04em",
          willChange: "transform",
        }}
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: durationSec,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubled.map((phrase, i) => (
          <span
            key={i}
            className="inline-flex items-center"
            style={{ gap: "1.25rem" }}
          >
            {/* 6px ink dot separator (opacity .4) */}
            <span
              aria-hidden="true"
              className="block rounded-full"
              style={{
                width: 6,
                height: 6,
                background: palette.bg,
                opacity: 0.4,
              }}
            />
            {phrase}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

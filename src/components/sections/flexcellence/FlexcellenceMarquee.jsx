import { motion } from "framer-motion";

/* ═════════════════════════════════════════════════════════════
   FLEXCELLENCE CASE STUDY — MARQUEE (Section 2 / connector band)
   Full-bleed charcoal strip with scrolling wellness tokens.
   Orange ✦ sparkles separate each phrase. Items are duplicated
   so the "-50%" translate lands on a frame identical to "0%" —
   yields a perfectly seamless loop. No pause on hover — it's
   an editorial ribbon, not a widget.
   ═════════════════════════════════════════════════════════════ */

export default function FlexcellenceMarquee({ data }) {
  const { marquee, palette } = data;
  const { items, durationSec } = marquee;

  // Duplicate items for seamless 0% → -50% loop
  const doubled = [...items, ...items];

  return (
    <div
      aria-label="Campaign keywords"
      className="relative w-full overflow-hidden"
      style={{
        background: palette.charcoal,
        padding: "14px 0",
        fontFamily: "'Outfit', system-ui, sans-serif",
      }}
    >
      <motion.div
        className="flex items-center whitespace-nowrap"
        style={{
          width: "max-content",
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
            style={{
              gap: 20,
              padding: "0 28px",
              fontSize: 11,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              fontWeight: 500,
            }}
          >
            {phrase}
            <span
              aria-hidden="true"
              style={{
                color: palette.orange,
                fontSize: 10,
              }}
            >
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

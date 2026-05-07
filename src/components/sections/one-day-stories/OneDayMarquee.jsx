import { motion } from "framer-motion";

/* ═════════════════════════════════════════════════════════════
   ONE DAY STORIES — MARQUEE (Section 2)
   Burgundy band that breaks the page tonally between the dark
   hero and the ivory Work section. Eight italic keywords
   (services + adjectives) scroll horizontally on a 26-second
   loop, separated by champagne ✦ sparkles.

   Design notes
   ─ Background: burgundy `#6B1E2E` from the brand palette.
     Unapologetic colour break — feels like a film-festival
     ribbon or a "NOW PLAYING" theatre marquee.
   ─ Items: Cormorant Garamond italic 14px, ivory @ 75% alpha,
     letter-spacing 0.04em, padding 0 28px each.
   ─ Separators: champagne ✦ at 10px, opacity 0.45 — small
     palette callback so the marquee ties to the hero stats.
   ─ Edge fade mask: linear-gradient mask softens the left/
     right edges so items fade in/out instead of hard-cutting.
     Reads as premium "tape" rather than DIY scroller.

   Animation
   ─ Infinite scroll: pure-CSS @keyframes (24s linear,
     translateX(0) → translateX(-50%)). Items array is
     duplicated so the -50% loop is seamless.
   ─ Hover pause: animation-play-state: paused on hover so
     readers can catch a term they spotted.
   ─ Entrance reveal: band slides up from below + fades in
     on scroll via Framer Motion (whileInView, once).
   ─ Reduced motion: animation disabled, scroll position
     parked mid-loop so the band still reads as a marquee.
   ═════════════════════════════════════════════════════════════ */

const EASE_OUT = [0.22, 1, 0.36, 1];

export default function OneDayMarquee({ data }) {
  const { marquee, palette, fonts } = data;

  // Duplicate the keyword list so the -50% translate loops
  // seamlessly. Both halves share keys via index offset.
  const loopItems = [...marquee.items, ...marquee.items];

  return (
    <>
      {/* Scoped CSS — infinite scroll keyframe + reduced-motion */}
      <style>{`
        @keyframes ods-mq-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ods-mq-track {
          animation: ods-mq-scroll 26s linear infinite;
          will-change: transform;
        }
        .ods-mq-band:hover .ods-mq-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .ods-mq-track {
            animation: none;
            transform: translateX(-12%);
          }
        }
      `}</style>

      {/* ─── Marquee band — slides up + fades in on scroll ─── */}
      <motion.div
        initial={{ y: 28, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.85, ease: EASE_OUT }}
        className="ods-mq-band"
        role="region"
        aria-label={`Services and approach: ${marquee.items.join(", ")}`}
        style={{
          position: "relative",
          zIndex: 4,
          overflow: "hidden",
          padding: "16px 0",
          background: palette.burgundy,
          // Top + bottom hairlines tie the band into the page
          // rhythm without being loud.
          borderTop: "1px solid rgba(232,213,176,0.10)",
          borderBottom: "1px solid rgba(13,10,9,0.35)",
          // Soft edge fade — items glide in/out instead of cut.
          // Mask gradient runs left → solid → right transparency.
          maskImage:
            "linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%)",
        }}
      >
        <div
          className="ods-mq-track"
          aria-hidden="true"
          style={{
            display: "flex",
            width: "max-content",
          }}
        >
          {loopItems.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 22,
                padding: "0 30px",
                fontFamily: fonts.display,
                fontSize: 15,
                fontStyle: "italic",
                fontWeight: 300,
                color: "rgba(250,246,239,0.78)",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              {item}
              <span
                aria-hidden="true"
                style={{
                  fontStyle: "normal",
                  fontFamily: fonts.body,
                  opacity: 0.55,
                  fontSize: 10,
                  color: palette.champagne,
                  // Tiny vertical lift so ✦ sits optically
                  // centered against italic text.
                  transform: "translateY(-1px)",
                }}
              >
                ✦
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

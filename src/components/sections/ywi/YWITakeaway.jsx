import { motion } from "framer-motion";

/* ═════════════════════════════════════════════════════════════
   YWI CASE STUDY — SECTION 05 · THE TAKEAWAY
   Editorial closer. Centred on palette.bg2. A small yellow dot
   (opacity .6) floats above the italic DM Serif pull-quote;
   the accent phrase "content worth watching." is rendered
   upright (non-italic) and yellow, matching the `.twq em`
   override in the mockup. Mono endmark below with wide
   tracking. Viewport-triggered fade-ups via Framer Motion.
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, delay, ease: EASE },
});

export default function YWITakeaway({ data }) {
  const { takeaway, palette } = data;
  const { quote, endMark } = takeaway;

  return (
    <section
      className="text-center"
      style={{
        background: palette.bg2,
        color: palette.cream,
        padding: "clamp(5rem, 8vw, 7rem) 5vw",
      }}
    >
      {/* Small yellow dot */}
      <motion.div
        {...reveal(0.1)}
        aria-hidden="true"
        className="mx-auto rounded-full"
        style={{
          width: 14,
          height: 14,
          background: palette.yellow,
          marginBottom: "2rem",
          opacity: 0.6,
        }}
      />

      {/* Pull-quote */}
      <motion.p
        {...reveal(0.25)}
        className="m-0 mx-auto"
        style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(24px, 4vw, 42px)",
          lineHeight: 1.3,
          maxWidth: 700,
          letterSpacing: "-0.01em",
          color: palette.cream,
        }}
      >
        {quote.lead}
        <br />
        {quote.start}
        <em
          style={{
            fontStyle: "normal",
            color: palette.yellow,
          }}
        >
          {quote.accent}
        </em>
      </motion.p>

      {/* Endmark */}
      <motion.p
        {...reveal(0.45)}
        className="m-0"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          color: palette.cream3,
          letterSpacing: "0.3em",
          marginTop: "3rem",
        }}
      >
        {endMark}
      </motion.p>
    </section>
  );
}

import { motion } from "framer-motion";
import { useState } from "react";

/* ═════════════════════════════════════════════════════════════
   YWI CASE STUDY — SECTION 01 · THE BRIEF
   Chapter-style section: italic "01" numeral in yellow, mono
   label, hairline divider. Two-line h2 with yellow accent
   phrase. Italic lede. Three challenge cards below with:
   ─ Yellow-glow disc + symbol (0 / ! / ₹)
   ─ h3 title, dim body copy
   ─ Hover: yellow top-bar grows from left, border tints yellow
   Viewport-triggered fade-ups (matches .reveal observer in HTML).
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

export default function YWIBrief({ data }) {
  const { brief, palette } = data;

  // Reveal animation for the whole section block
  const reveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.08 },
    transition: { duration: 1, ease: EASE },
  };

  return (
    <section
      className="relative"
      style={{
        padding: "clamp(5rem, 9vw, 8rem) 5vw",
        background: palette.bg,
        color: palette.cream,
      }}
    >
      <div
        className="relative mx-auto"
        style={{ maxWidth: 1100 }}
      >
        {/* ─── Chapter header ─── */}
        <motion.div
          {...reveal}
          className="flex items-center"
          style={{
            gap: 20,
            marginBottom: "2.5rem",
            paddingBottom: "1.25rem",
            borderBottom: `1px solid ${palette.line}`,
          }}
        >
          <div
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(48px, 6vw, 72px)",
              color: palette.yellow,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              opacity: 0.8,
            }}
          >
            {brief.chapter.num}
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.25em",
              color: palette.cream3,
              lineHeight: 1.6,
            }}
          >
            {brief.chapter.label.map((ln, i) => (
              <span key={i} className="block">
                {ln}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ─── Headline with yellow accent ─── */}
        <motion.h2
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.1 }}
          className="m-0"
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontSize: "clamp(30px, 5vw, 56px)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            maxWidth: 760,
            marginBottom: "1.5rem",
          }}
        >
          {brief.headlineStart}{" "}
          <span style={{ color: palette.yellow }}>{brief.headlineAccent}</span>
        </motion.h2>

        {/* ─── Lede ─── */}
        <motion.p
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.2 }}
          className="m-0"
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontSize: "clamp(16px, 1.6vw, 18px)",
            lineHeight: 1.65,
            color: palette.cream2,
            maxWidth: 600,
            marginBottom: "3rem",
            fontWeight: 300,
          }}
        >
          {brief.lede}
        </motion.p>

        {/* ─── 3-card challenge grid ─── */}
        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.3 }}
          className="grid gap-4 mt-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {brief.cards.map((card, i) => (
            <BriefCard key={card.title} card={card} palette={palette} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Single challenge card with hover-driven yellow top-bar ─── */
function BriefCard({ card, palette, index }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.15 + index * 0.1, ease: EASE }}
      className="relative overflow-hidden"
      style={{
        background: palette.card,
        border: `0.5px solid ${hover ? "rgba(255,200,60,0.2)" : "rgba(242,237,230,0.06)"}`,
        padding: "2rem 1.75rem",
        borderRadius: 6,
        transition: "border-color 0.3s ease",
      }}
    >
      {/* Top yellow bar — grows from left on hover */}
      <motion.div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full origin-left"
        style={{
          height: 2,
          background: palette.yellow,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hover ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Yellow-glow icon disc */}
      <div
        className="flex items-center justify-center rounded-full"
        style={{
          width: 36,
          height: 36,
          background: palette.yglow,
          border: "1px solid rgba(255,200,60,0.2)",
          marginBottom: "1.25rem",
        }}
      >
        <span
          style={{
            color: palette.yellow,
            fontSize: 16,
            fontWeight: 700,
            fontFamily: "'Outfit', system-ui, sans-serif",
          }}
        >
          {card.symbol}
        </span>
      </div>

      {/* Title */}
      <h3
        className="m-0"
        style={{
          fontFamily: "'Outfit', system-ui, sans-serif",
          fontSize: 17,
          fontWeight: 600,
          lineHeight: 1.3,
          marginBottom: 8,
          color: palette.cream,
        }}
      >
        {card.title}
      </h3>

      {/* Body */}
      <p
        className="m-0"
        style={{
          fontSize: 14,
          color: palette.cream3,
          lineHeight: 1.6,
          fontWeight: 300,
        }}
      >
        {card.body}
      </p>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { useState } from "react";

/* ═════════════════════════════════════════════════════════════
   YWI CASE STUDY — SECTION 02 · THE SYSTEM
   Alternate dark-warm stage (palette.bg2). Chapter header
   mirrors Section 01. Two-line h2 with yellow accent phrase,
   italic lede, then a 4-cell horizontal loop (edge-to-edge
   rounded rectangle; hairline vertical dividers between cells;
   yellow "→" arrow on each divider except the last).
   ─ ≥768px: 4-col grid, arrows visible
   ─ <768px: 2-col grid, arrows hidden (avoid stranded arrows)
   ─ Hover: cell background shifts card → surface
   Footnote centred below: "↺ EVERY REEL FOLLOWS THIS LOOP".
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

export default function YWISystem({ data }) {
  const { system, palette } = data;

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
        background: palette.bg2,
        color: palette.cream,
      }}
    >
      {/* Scoped responsive styles — controls grid col count + arrow visibility */}
      <style>{`
        .ywi-sys-grid { grid-template-columns: repeat(2, 1fr); }
        .ywi-sys-arrow { display: none; }
        @media (min-width: 768px) {
          .ywi-sys-grid { grid-template-columns: repeat(4, 1fr); }
          .ywi-sys-arrow { display: block; }
        }
      `}</style>

      <div className="relative mx-auto" style={{ maxWidth: 1100 }}>
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
            {system.chapter.num}
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
            {system.chapter.label.map((ln, i) => (
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
          {system.headlineStart}{" "}
          <span style={{ color: palette.yellow }}>{system.headlineAccent}</span>
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
          {system.lede}
        </motion.p>

        {/* ─── 4-cell loop grid ─── */}
        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.3 }}
          className="ywi-sys-grid mt-8 grid overflow-hidden"
          style={{
            borderRadius: 6,
            border: `0.5px solid ${palette.line}`,
          }}
        >
          {system.steps.map((step, i) => (
            <SystemCell
              key={step.num}
              step={step}
              index={i}
              isLast={i === system.steps.length - 1}
              palette={palette}
            />
          ))}
        </motion.div>

        {/* ─── Footnote ─── */}
        <motion.p
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.45 }}
          className="m-0"
          style={{
            textAlign: "center",
            marginTop: "2.5rem",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: palette.cream3,
            letterSpacing: "0.2em",
          }}
        >
          {system.footnote}
        </motion.p>
      </div>
    </section>
  );
}

/* ─── A single loop cell ─── */
function SystemCell({ step, index, isLast, palette }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.1, ease: EASE }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative"
      style={{
        padding: "2rem 1.5rem",
        background: hover ? palette.surface : palette.card,
        borderRight: isLast ? "none" : `0.5px solid ${palette.line}`,
        transition: "background 0.3s ease",
      }}
    >
      {/* Italic yellow numeral */}
      <div
        style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: 42,
          color: palette.yellow,
          opacity: 0.6,
          lineHeight: 1,
          marginBottom: "1rem",
        }}
      >
        {step.num}
      </div>

      {/* Label */}
      <div
        style={{
          fontFamily: "'Outfit', system-ui, sans-serif",
          fontSize: 16,
          fontWeight: 600,
          marginBottom: 8,
          color: palette.cream,
        }}
      >
        {step.name}
      </div>

      {/* Description */}
      <div
        style={{
          fontFamily: "'Outfit', system-ui, sans-serif",
          fontSize: 13,
          color: palette.cream3,
          lineHeight: 1.6,
          fontWeight: 300,
        }}
      >
        {step.desc}
      </div>

      {/* Yellow arrow on the divider to the right of this cell
          (hidden <768px; the 2-col layout would strand it). */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="ywi-sys-arrow absolute"
          style={{
            top: "50%",
            right: -8,
            transform: "translateY(-50%)",
            color: palette.yellow,
            fontSize: 14,
            opacity: 0.5,
            zIndex: 2,
            lineHeight: 1,
            fontFamily: "'Outfit', system-ui, sans-serif",
          }}
        >
          →
        </div>
      )}
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { useState } from "react";

/* ═════════════════════════════════════════════════════════════
   FLEXCELLENCE CASE STUDY — THE OUTCOME (Section 4)
   Cream editorial block. Three logical parts:
   ─ Top strip: orange hairline + eyebrow, big serif H2 with
     italic orange accent on the last line, right-side pull
     quote with orange left border + attribution.
   ─ 4-up metrics grid: hover lights orange-pale bg and an
     orange bottom bar scales in from the left.
   ─ 3-up testimonial cards (1.4fr / 1fr / 1fr). Each has 5
     orange stars, italic Playfair quote, avatar + name
     + handle, and a subtle warm-white hover.
   Framer Motion handles entrance animations; hover uses local
   state so the top-level section stays clean.
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

const rise = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration, delay, ease: EASE },
});

function Metric({ m, idx, lastIdx, palette }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      {...rise(idx * 0.08)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative overflow-hidden"
      style={{
        padding: "52px 40px",
        borderRight:
          idx < lastIdx ? `1px solid ${palette.border}` : "none",
        background: hover ? palette.orangePale : "transparent",
        transition: "background 0.25s",
      }}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(44px, 4vw, 60px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          marginBottom: 10,
          color: m.accent ? palette.orange : palette.charcoal,
        }}
      >
        {m.num}
      </div>
      <div
        style={{
          fontSize: 14,
          color: palette.muted,
          lineHeight: 1.5,
          fontWeight: 400,
        }}
      >
        {m.label}
      </div>
      <div
        style={{
          fontSize: 11,
          color: palette.border2,
          marginTop: 8,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        {m.sub}
      </div>

      {/* Orange bottom bar (scaleX in from left on hover) */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: 3,
          background: palette.orange,
          transform: hover ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s cubic-bezier(.25,.46,.45,.94)",
        }}
      />
    </motion.div>
  );
}

function Testimonial({ t, idx, lastIdx, palette, sm }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      {...rise(idx * 0.1)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "52px 44px",
        borderRight:
          idx < lastIdx ? `1px solid ${palette.border}` : "none",
        background: hover ? palette.warmWhite : "transparent",
        transition: "background 0.3s",
      }}
    >
      {/* 5 orange stars */}
      <div
        style={{
          color: palette.orange,
          fontSize: 13,
          letterSpacing: 1,
          marginBottom: 14,
        }}
      >
        ★★★★★
      </div>

      {/* Italic quote */}
      <p
        className="m-0"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: sm ? 14 : 15,
          fontStyle: "italic",
          fontWeight: 400,
          color: palette.brown,
          lineHeight: 1.72,
          marginBottom: 24,
        }}
      >
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author row */}
      <div className="flex items-center" style={{ gap: 12 }}>
        <div
          className="flex-shrink-0 overflow-hidden rounded-full"
          style={{
            width: 40,
            height: 40,
            border: `2px solid ${palette.orangeSoft}`,
          }}
        >
          <img
            src={t.avatar}
            alt={t.name}
            loading="lazy"
            className="w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: palette.charcoal,
            }}
          >
            {t.name}
          </div>
          <div
            style={{ fontSize: 11, color: palette.muted, marginTop: 2 }}
          >
            {t.handle}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FlexcellenceOutcome({ data }) {
  const { outcome, palette } = data;
  const lastMetric = outcome.metrics.length - 1;
  const lastTesti = outcome.testimonials.length - 1;

  return (
    <section
      style={{
        background: palette.cream,
        color: palette.charcoal,
        fontFamily: "'Outfit', system-ui, sans-serif",
      }}
    >
      {/* ═══ Top strip — eyebrow, headline, pull quote ═══ */}
      <div
        className="grid md:grid-cols-2 items-center"
        style={{
          padding: "96px clamp(24px, 4vw, 48px) 80px",
          gap: 64,
          borderBottom: `1px solid ${palette.border}`,
        }}
      >
        <div>
          {/* Orange hairline + eyebrow */}
          <motion.div
            {...rise(0)}
            className="flex items-center mb-4"
            style={{ gap: 10 }}
          >
            <div
              aria-hidden="true"
              style={{ width: 28, height: 1, background: palette.orange }}
            />
            <span
              style={{
                fontSize: 11,
                color: palette.orange,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              {outcome.eyebrow}
            </span>
          </motion.div>

          {/* 3-line serif H2 with italic orange accent on last line */}
          <motion.h2
            {...rise(0.1)}
            className="m-0"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(44px, 5vw, 68px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
              color: palette.charcoal,
            }}
          >
            {outcome.headlineLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
            <em
              className="block"
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: palette.orange,
              }}
            >
              {outcome.headlineAccent}
            </em>
          </motion.h2>
        </div>

        {/* Pull quote with orange left border */}
        <motion.div {...rise(0.2)}>
          <p
            className="m-0"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(18px, 2vw, 24px)",
              fontStyle: "italic",
              fontWeight: 400,
              color: palette.brown,
              lineHeight: 1.6,
              marginBottom: 24,
              paddingLeft: 24,
              borderLeft: `2px solid ${palette.orange}`,
            }}
          >
            &ldquo;{outcome.pullQuote}&rdquo;
          </p>
          <div
            style={{
              fontSize: 13,
              color: palette.muted,
              fontWeight: 500,
              paddingLeft: 24,
            }}
          >
            — {outcome.pullAttrName}{" "}
            <span style={{ color: palette.charcoal, fontWeight: 600 }}>
              {outcome.pullAttrMeta}
            </span>
          </div>
        </motion.div>
      </div>

      {/* ═══ 4 metrics ═══ */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        style={{
          gap: 0,
          borderBottom: `1px solid ${palette.border}`,
        }}
      >
        {outcome.metrics.map((m, i) => (
          <Metric
            key={m.label}
            m={m}
            idx={i}
            lastIdx={lastMetric}
            palette={palette}
          />
        ))}
      </div>

      {/* ═══ 3 testimonial cards ═══ */}
      <div
        className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr]"
        style={{
          gap: 0,
          borderBottom: `1px solid ${palette.border}`,
        }}
      >
        {outcome.testimonials.map((t, i) => (
          <Testimonial
            key={t.name}
            t={t}
            idx={i}
            lastIdx={lastTesti}
            palette={palette}
            sm={!t.featured}
          />
        ))}
      </div>
    </section>
  );
}

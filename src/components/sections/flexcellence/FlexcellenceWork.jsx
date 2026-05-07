import { motion } from "framer-motion";
import { useState } from "react";

/* ═════════════════════════════════════════════════════════════
   FLEXCELLENCE CASE STUDY — THE WORK (Section 3)
   Full-bleed charcoal block. Three logical parts:
   ─ Top strip: orange hairline + eyebrow label, big serif H2
     with italic orange accent, right-aligned intro paragraph.
   ─ 3-up service cards (Nutrition / Fitness / Medical) with
     white-alpha hover, top-edge orange bar that scales in.
   ─ 4-step campaign approach with a connector line linking
     numbered discs; hover lights each disc orange.
   Framer Motion handles all entrance animations; hover states
   are pure React state (no :hover pseudo-elements needed).
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

// Viewport-triggered fade-up (once: true so it doesn't replay)
const rise = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration, delay, ease: EASE },
});

function ServiceCard({ svc, idx, lastIdx, palette }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      {...rise(idx * 0.1)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative overflow-hidden"
      style={{
        padding: "52px 40px",
        borderRight:
          idx < lastIdx ? "1px solid rgba(255,255,255,0.07)" : "none",
        background: hover ? "rgba(255,255,255,0.04)" : "transparent",
        transition: "background 0.35s",
      }}
    >
      {/* Top-edge orange bar (scaleX in from left on hover) */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0"
        style={{
          height: 2,
          background: palette.orange,
          transform: hover ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.45s cubic-bezier(.25,.46,.45,.94)",
        }}
      />

      {/* Icon tile */}
      <div
        className="flex items-center justify-center"
        style={{
          width: 52,
          height: 52,
          borderRadius: 16,
          background: "rgba(249,115,22,0.1)",
          border: "1px solid rgba(249,115,22,0.18)",
          fontSize: 22,
          marginBottom: 24,
        }}
      >
        {svc.icon}
      </div>

      {/* Title */}
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 22,
          fontWeight: 600,
          color: "#fff",
          letterSpacing: "-0.01em",
          marginBottom: 12,
        }}
      >
        {svc.title}
      </div>

      {/* Description */}
      <p
        className="m-0"
        style={{
          fontSize: 13,
          color: "rgba(255,255,255,0.4)",
          lineHeight: 1.75,
          fontWeight: 300,
          marginBottom: 20,
        }}
      >
        {svc.desc}
      </p>

      {/* Chip tags */}
      <div className="flex flex-wrap" style={{ gap: 6 }}>
        {svc.chips.map((c) => (
          <span
            key={c}
            style={{
              fontSize: 10,
              color: "rgba(249,115,22,0.75)",
              background: "rgba(249,115,22,0.08)",
              border: "1px solid rgba(249,115,22,0.15)",
              borderRadius: 100,
              padding: "3px 10px",
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}
          >
            {c}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ApproachStep({ step, idx, palette }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      {...rise(idx * 0.08)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative"
      style={{ padding: "0 24px 0 0" }}
    >
      {/* Numbered disc */}
      <div
        className="flex items-center justify-center relative"
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: hover
            ? `1px solid ${palette.orange}`
            : "1px solid rgba(255,255,255,0.12)",
          background: hover ? palette.orange : palette.charcoal,
          color: hover ? "#fff" : "rgba(255,255,255,0.3)",
          fontFamily: "'Playfair Display', serif",
          fontSize: 15,
          fontWeight: 600,
          marginBottom: 24,
          zIndex: 1,
          transition: "all 0.3s",
        }}
      >
        {step.num}
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: "#fff",
          marginBottom: 8,
        }}
      >
        {step.title}
      </div>

      {/* Description */}
      <p
        className="m-0"
        style={{
          fontSize: 13,
          color: "rgba(255,255,255,0.38)",
          lineHeight: 1.7,
          fontWeight: 300,
        }}
      >
        {step.desc}
      </p>
    </motion.div>
  );
}

export default function FlexcellenceWork({ data }) {
  const { work, palette } = data;

  return (
    <section
      className="relative"
      style={{
        background: palette.charcoal,
        color: "#fff",
        fontFamily: "'Outfit', system-ui, sans-serif",
      }}
    >
      {/* ═══ Top strip — eyebrow + title + intro ═══ */}
      <div
        className="grid items-end"
        style={{
          padding: "80px clamp(24px, 4vw, 48px) 64px",
          gridTemplateColumns: "minmax(0,1fr)",
          gap: 48,
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="grid md:grid-cols-2 items-end" style={{ gap: 80 }}>
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
                  color: "rgba(249,115,22,0.7)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {work.eyebrow}
              </span>
            </motion.div>

            {/* Big serif H2 with italic orange accent */}
            <motion.h2
              {...rise(0.1)}
              className="m-0"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(44px, 5vw, 68px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 0.95,
                color: "#fff",
              }}
            >
              {work.headlineStart}
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: palette.orange,
                }}
              >
                {work.headlineAccent}
              </em>
            </motion.h2>
          </div>

          {/* Right-aligned intro paragraph (aligns to bottom of H2) */}
          <motion.p
            {...rise(0.2)}
            className="m-0"
            style={{
              fontSize: 15,
              fontWeight: 300,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.85,
            }}
          >
            {work.intro}
          </motion.p>
        </div>
      </div>

      {/* ═══ 3 service cards ═══ */}
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{
          gap: 0,
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {work.services.map((svc, i) => (
          <ServiceCard
            key={svc.title}
            svc={svc}
            idx={i}
            lastIdx={work.services.length - 1}
            palette={palette}
          />
        ))}
      </div>

      {/* ═══ 4-step approach ═══ */}
      <div style={{ padding: "64px clamp(24px, 4vw, 48px)" }}>
        <motion.div
          {...rise(0)}
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 40,
          }}
        >
          {work.approachLabel}
        </motion.div>

        <div className="relative">
          {/* Connector line linking all numbered discs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute hidden md:block"
            style={{
              top: 20,
              left: 22,
              right: 22,
              height: 1,
              background: "rgba(255,255,255,0.08)",
            }}
          />
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 relative"
            style={{ gap: "32px 0" }}
          >
            {work.steps.map((step, i) => (
              <ApproachStep
                key={step.num}
                step={step}
                idx={i}
                palette={palette}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

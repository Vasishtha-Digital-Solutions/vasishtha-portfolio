import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

/* ═════════════════════════════════════════════════════════════
   ONE DAY STORIES — OUTCOME (Section 4)
   The page's second dark block — the return to cinematic after
   the cream interlude of the Work section. Two sub-blocks:

   A. Full-bleed outcome visual (~520px tall)
      ─ Wedding ceremony photo, dark saturated, left gradient
        overlay pulls ink across 40% of the frame for text
        legibility.
      ─ Left-anchored content: mono eyebrow "03 · The Outcome"
        with leading hairline, 3-line editorial title
        (ivory / ITALIC CHAMPAGNE / ivory), champagne hairline
        draws under the italic middle line, body paragraph.
      ─ Slow infinite Ken Burns on the image (alternating zoom).

   B. Metrics strip (4 equal columns on lg, 2 on sm, 1 on mobile)
      ─ Each cell: big champagne display number + ivory label
        + mono sub-text in muted champagne.
      ─ Hairlines top/bottom + between cells. Subtle hover
        background on each cell.
      ─ Numeric metrics (10 / 100%) count up on reveal;
        text metrics (1M / ↑4×) scale-fade in.

   Reveals (all scroll-triggered via whileInView, once)
   ─ Image fades in + begins Ken Burns loop.
   ─ Eyebrow fades up + hairline sweeps in from the left.
   ─ Title reveals line-by-line with word-mask (variants-driven).
   ─ Champagne hairline draws beneath italic middle line.
   ─ Body fades up.
   ─ Metrics stagger-scale in; count-ups fire just after their
     cell reveals.
   ═════════════════════════════════════════════════════════════ */

const EASE_OUT = [0.22, 1, 0.36, 1];

/* ─── WordReveal — variants pattern (parent → children).
   Copy of the fixed Work-section component: parent's whileInView
   triggers, each child word animates via shared variants. */
const wordVariants = {
  hidden: { y: "105%" },
  visible: { y: 0 },
};

function WordReveal({
  text,
  delay = 0,
  stagger = 0.07,
  duration = 1,
  className,
  style,
  as = "span",
  amount = 0.3,
}) {
  const Tag = motion[as] || motion.span;
  const words = text.split(" ");
  return (
    <Tag
      className={className}
      style={{ ...style, display: "block" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
            marginRight: i < words.length - 1 ? "0.22em" : 0,
            paddingBottom: "0.1em",
            lineHeight: style?.lineHeight ?? 0.95,
          }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            variants={wordVariants}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: EASE_OUT,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* ─── CountUp — animates 0 → target when `trigger` flips true.
   Used by metric cells whose reveal should time the count-up
   with the stagger. Defensive against React 18 double-invoke. */
function CountUp({
  target,
  trigger,
  duration = 1.4,
  delay = 0,
  suffix = "",
}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const controls = animate(0, target, {
      duration,
      delay,
      ease: EASE_OUT,
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => controls.stop();
  }, [target, trigger, duration, delay]);
  return (
    <>
      {val}
      {suffix}
    </>
  );
}

export default function OneDayOutcome({ data }) {
  const { outcome, palette, fonts } = data;

  // trigger state — flipped when the metrics grid reveals so
  // CountUps fire in sync with the stagger animation
  const [metricsVisible, setMetricsVisible] = useState(false);

  return (
    <>
      {/* Scoped CSS — Ken Burns + metric hover */}
      <style>{`
        @keyframes ods-out-kb {
          0%   { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.06) translate(0.8%, -0.5%); }
        }
        .ods-out-kb {
          animation: ods-out-kb 32s ease-in-out infinite alternate;
          will-change: transform;
        }
        .ods-out-mc {
          transition: background 0.4s ease;
        }
        .ods-out-mc:hover {
          background: rgba(232,213,176,0.04);
        }
      `}</style>

      <section
        style={{
          background: palette.deep,
          color: palette.ivory,
          position: "relative",
          zIndex: 3,
        }}
      >
        {/* ───────── A. FULL-BLEED OUTCOME VISUAL ───────── */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "clamp(440px, 62vh, 560px)",
          }}
        >
          {/* Background image — fades in, runs Ken Burns infinite */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.5, ease: EASE_OUT }}
            style={{ position: "absolute", inset: 0 }}
          >
            <img
              className="ods-out-kb"
              src={outcome.image}
              alt={outcome.imageAlt}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "saturate(0.65) brightness(0.45)",
                position: "absolute",
                inset: 0,
              }}
            />
          </motion.div>

          {/* Left-to-right gradient — pulls ink across the left
              40% so the text has legible backing without muddying
              the image composition on the right. */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(13,10,9,0.88) 0%, rgba(13,10,9,0.65) 35%, rgba(13,10,9,0.2) 70%, rgba(13,10,9,0.05) 100%)",
            }}
          />

          {/* Content — left-anchored inside the full-bleed frame */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              padding:
                "clamp(40px, 6vw, 88px) clamp(20px, 4vw, 56px)",
            }}
          >
            <div style={{ maxWidth: 620, width: "100%" }}>
              {/* Eyebrow with leading hairline sweep */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: EASE_OUT }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 24,
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  color: "rgba(232,213,176,0.45)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: EASE_OUT,
                  }}
                  style={{
                    display: "inline-block",
                    width: 42,
                    height: 1,
                    background: palette.champagne,
                    opacity: 0.5,
                    transformOrigin: "0% 50%",
                  }}
                />
                {outcome.eyebrow}
              </motion.div>

              {/* 3-line title — ivory / italic champagne / ivory
                  with a burgundy-to-champagne hairline drawn
                  beneath the middle italic line. */}
              <h2
                style={{
                  fontFamily: fonts.display,
                  fontSize: "clamp(36px, 5vw, 72px)",
                  fontWeight: 300,
                  lineHeight: 0.98,
                  letterSpacing: "-0.02em",
                  color: palette.ivory,
                  marginBottom: 28,
                }}
              >
                <WordReveal
                  text={outcome.titleLines[0]}
                  delay={0.15}
                  duration={0.95}
                  style={{ display: "block" }}
                />
                {/* Middle line wrapped for relative-position
                    so the hairline can anchor beneath it. */}
                <span
                  style={{
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  <WordReveal
                    text={outcome.titleLines[1]}
                    delay={0.35}
                    duration={0.95}
                    style={{
                      display: "block",
                      fontStyle: "italic",
                      color: palette.champagne,
                    }}
                  />
                  <motion.span
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.7,
                      ease: EASE_OUT,
                    }}
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: -6,
                      height: 1,
                      width: "min(240px, 62%)",
                      background: `linear-gradient(to right, ${palette.champagne} 0%, rgba(232,213,176,0) 100%)`,
                      transformOrigin: "0% 50%",
                    }}
                  />
                </span>
                <WordReveal
                  text={outcome.titleLines[2]}
                  delay={0.55}
                  duration={0.95}
                  style={{ display: "block" }}
                />
              </h2>

              {/* Body paragraph — fades up after title settles */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.9,
                  delay: 0.85,
                  ease: EASE_OUT,
                }}
                style={{
                  fontFamily: fonts.body,
                  fontSize: 15,
                  fontWeight: 300,
                  color: "rgba(250,246,239,0.6)",
                  lineHeight: 1.8,
                  maxWidth: 460,
                }}
              >
                {outcome.body}
              </motion.p>
            </div>
          </div>
        </div>

        {/* ───────── B. METRICS STRIP ───────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          onViewportEnter={() => setMetricsVisible(true)}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{
            borderTop: "1px solid rgba(232,213,176,0.15)",
            borderBottom: "1px solid rgba(232,213,176,0.15)",
          }}
        >
          {outcome.metrics.map((m, i) => {
            const cellDelay = 0.1 + i * 0.12;
            return (
              <motion.div
                key={m.label}
                className="ods-out-mc"
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: cellDelay,
                  ease: EASE_OUT,
                }}
                style={{
                  padding:
                    "clamp(44px, 5vw, 64px) clamp(28px, 3vw, 40px)",
                  borderRight:
                    i < outcome.metrics.length - 1
                      ? "1px solid rgba(232,213,176,0.15)"
                      : "none",
                }}
              >
                {/* Big champagne number — counts up if numeric,
                    else scales in as static display string. */}
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: "clamp(44px, 5vw, 68px)",
                    fontWeight: 300,
                    color: palette.champagne,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    marginBottom: 14,
                  }}
                >
                  {m.countTo ? (
                    <CountUp
                      target={m.countTo}
                      trigger={metricsVisible}
                      delay={cellDelay + 0.1}
                      duration={1.3}
                      suffix={m.suffix || ""}
                    />
                  ) : (
                    m.num
                  )}
                </div>
                <div
                  style={{
                    fontFamily: fonts.body,
                    fontSize: 14,
                    fontWeight: 300,
                    color: "rgba(250,246,239,0.58)",
                    lineHeight: 1.5,
                  }}
                >
                  {m.label}
                </div>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 9,
                    color: "rgba(232,213,176,0.3)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginTop: 10,
                  }}
                >
                  {m.sub}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
}

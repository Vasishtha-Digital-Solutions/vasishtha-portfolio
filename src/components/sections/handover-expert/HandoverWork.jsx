import { motion } from "framer-motion";
import {
  Droplets,
  Ruler,
  Zap,
  Eye,
  Lightbulb,
  Users,
  ShieldCheck,
} from "lucide-react";

/* ═════════════════════════════════════════════════════════════
   HANDOVER EXPERT — THE WORK (Section 2)
   Paper document feel. Two logical blocks inside one .work
   wrapper (matches source HTML structure):

   ─ Block A — STAMP HEADER
       Outlined "06" stamp on left (stroke only, no fill),
       stamp label + italic title on right. Paper bg, 3px
       ink bottom rule.

   ─ Block B — 3 PROBLEM COLUMNS
       3-column grid divided by 2px ink rules.
       Each column: PROBLEM 0X label → SVG icon (Lucide,
       replaces emoji per user spec) → title → body copy.
       3px ink bottom rule.

   ─ Block C — STRATEGY TIMELINE (dark bg)
       Full-bleed ink section. Header row with Our Approach
       label + 3-line title + right-aligned intro copy.
       4-step horizontal timeline connected by thin gold
       line; each step has a circled dot, title, and body.
       CSS handles the :hover fill on the dots — Framer
       Motion stays purely on reveal so hover state is
       instant and doesn't re-render.
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

const fadeUp = (delay = 0, duration = 0.7) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration, delay, ease: EASE },
});

// Map data icon key → Lucide component + stroke tuning
const PROBLEM_ICONS = {
  dampness: Droplets,
  measure: Ruler,
  wiring: Zap,
};

const STEP_ICONS = [Eye, Lightbulb, Users, ShieldCheck];

export default function HandoverWork({ data }) {
  const { work, palette, fonts } = data;

  return (
    <>
      {/* Scoped hover styles — CSS for micro-interactions so
          Framer Motion doesn't need to manage per-step state. */}
      <style>{`
        .he-step-dot {
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }
        .he-step:hover .he-step-dot,
        .he-step:focus-visible .he-step-dot {
          background: ${palette.gold};
          border-color: ${palette.gold};
          color: ${palette.ink};
        }
        .he-step:hover .he-step-dot-icon,
        .he-step:focus-visible .he-step-dot-icon {
          color: ${palette.ink};
        }
      `}</style>

      {/* ═════ PAPER BLOCKS (A + B) ═════ */}
      <section style={{ background: palette.paper, color: palette.ink }}>
        {/* ── Block A: Stamp header ── */}
        <div
          className="flex flex-col md:flex-row"
          style={{
            gap: "clamp(20px, 4vw, 48px)",
            padding: "clamp(56px, 8vw, 80px) clamp(20px, 4vw, 48px) clamp(32px, 5vw, 48px)",
            alignItems: "flex-start",
            borderBottom: `3px solid ${palette.ink}`,
          }}
        >
          {/* Giant outlined "06" */}
          <motion.div
            {...fadeUp(0)}
            aria-hidden="true"
            style={{
              fontFamily: fonts.cond,
              fontSize: "clamp(96px, 14vw, 180px)",
              fontWeight: 900,
              color: "transparent",
              WebkitTextStroke: `2px ${palette.concrete}`,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              flexShrink: 0,
              marginTop: -24,
            }}
          >
            {work.stampNumber}
          </motion.div>

          {/* Stamp label + title */}
          <motion.div
            {...fadeUp(0.12)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              paddingBottom: 8,
            }}
          >
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 10,
                color: palette.concrete,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              {work.stampLabel}
            </div>
            <h2
              style={{
                fontFamily: fonts.cond,
                fontSize: "clamp(36px, 5.5vw, 72px)",
                fontWeight: 900,
                color: palette.ink,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                lineHeight: 0.92,
              }}
            >
              {work.stampTitleTop}
              <br />
              {work.stampTitleMid}{" "}
              <em style={{ color: palette.navy, fontStyle: "italic" }}>
                {work.stampTitleEm}
              </em>{" "}
              {work.stampTitleBottom}
            </h2>
          </motion.div>
        </div>

        {/* ── Block B: 3 problem columns ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            gap: 0,
            borderBottom: `3px solid ${palette.ink}`,
          }}
        >
          {work.problems.map((p, i) => {
            const Icon = PROBLEM_ICONS[p.icon] || Droplets;
            const isLast = i === work.problems.length - 1;
            return (
              <motion.article
                key={p.num}
                {...fadeUp(i * 0.1)}
                className={isLast ? "" : "md:border-r"}
                style={{
                  padding: "clamp(32px, 5vw, 48px) clamp(24px, 4vw, 40px)",
                  borderRight: isLast ? "none" : undefined,
                  borderColor: palette.ink,
                  // mobile: bottom border between rows
                  borderBottom: isLast
                    ? "none"
                    : `1px solid ${palette.paper2}`,
                  borderBottomWidth: 0,
                }}
              >
                {/* Num label — mono, dashed lead-out line */}
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 10,
                    color: palette.concrete,
                    letterSpacing: "0.12em",
                    marginBottom: 20,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    textTransform: "uppercase",
                  }}
                >
                  <span>{p.num}</span>
                  <span
                    aria-hidden="true"
                    style={{
                      flex: 1,
                      height: 1,
                      background: palette.concrete,
                    }}
                  />
                </div>

                {/* SVG icon */}
                <div
                  aria-hidden="true"
                  style={{
                    marginBottom: 16,
                    color: palette.navy,
                    display: "inline-flex",
                    padding: 10,
                    border: `1px solid ${palette.paper2}`,
                    background: "#fff",
                  }}
                >
                  <Icon size={28} strokeWidth={1.6} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: fonts.cond,
                    fontSize: 26,
                    fontWeight: 800,
                    color: palette.ink,
                    textTransform: "uppercase",
                    letterSpacing: "0.01em",
                    marginBottom: 12,
                    lineHeight: 1.1,
                  }}
                >
                  {p.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontFamily: fonts.body,
                    fontSize: 13,
                    color: "#4A4A4A",
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}
                >
                  {p.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ═════ BLOCK C: STRATEGY TIMELINE (dark bg) ═════ */}
      <section
        style={{
          background: palette.ink,
          padding: "clamp(48px, 7vw, 64px) clamp(20px, 4vw, 48px)",
        }}
      >
        {/* Header row */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between"
          style={{ gap: 24, marginBottom: "clamp(32px, 5vw, 48px)" }}
        >
          <div>
            <motion.div
              {...fadeUp(0)}
              style={{
                fontFamily: fonts.mono,
                fontSize: 10,
                color: "rgba(245,194,0,0.55)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              {work.strategy.label}
            </motion.div>
            <motion.h2
              {...fadeUp(0.08)}
              style={{
                fontFamily: fonts.cond,
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 900,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                lineHeight: 0.95,
              }}
            >
              {work.strategy.titleTop}
              <br />
              <em
                style={{
                  color: palette.gold,
                  fontStyle: "italic",
                }}
              >
                {work.strategy.titleEm}
              </em>{" "}
              {work.strategy.titleBottom}
            </motion.h2>
          </div>
          <motion.p
            {...fadeUp(0.16)}
            className="md:text-right"
            style={{
              fontFamily: fonts.body,
              fontSize: 14,
              color: "rgba(255,255,255,0.45)",
              maxWidth: 300,
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            {work.strategy.intro}
          </motion.p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Thin gold connector line at dot center height (22px) */}
          <div
            aria-hidden="true"
            className="hidden md:block"
            style={{
              position: "absolute",
              top: 22,
              left: 0,
              right: 0,
              height: 1,
              background: "rgba(245,194,0,0.18)",
            }}
          />

          <div
            className="grid grid-cols-1 md:grid-cols-4"
            style={{ gap: "clamp(28px, 4vw, 0px)", position: "relative" }}
          >
            {work.strategy.steps.map((s, i) => {
              const StepIcon = STEP_ICONS[i] || Eye;
              return (
                <motion.div
                  key={s.n}
                  {...fadeUp(i * 0.12)}
                  className="he-step"
                  tabIndex={0}
                  style={{
                    paddingRight: 24,
                    outline: "none",
                    cursor: "default",
                  }}
                >
                  {/* Dot — number top, icon beneath (icon on hover) */}
                  <div
                    className="he-step-dot"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      border: "1px solid rgba(245,194,0,0.28)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.mono,
                      fontSize: 12,
                      fontWeight: 700,
                      color: "rgba(245,194,0,0.55)",
                      marginBottom: 20,
                      background: palette.ink,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {/* Number visible by default */}
                    <span style={{ position: "relative" }}>{s.n}</span>
                    {/* Icon overlay — swaps via CSS hover opacity */}
                    <span
                      aria-hidden="true"
                      className="he-step-dot-icon"
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(245,194,0,0.0)",
                        pointerEvents: "none",
                      }}
                    >
                      <StepIcon size={18} strokeWidth={2} />
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: fonts.cond,
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#fff",
                      textTransform: "uppercase",
                      letterSpacing: "0.02em",
                      marginBottom: 8,
                      lineHeight: 1.1,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: fonts.body,
                      fontSize: 13,
                      color: "rgba(255,255,255,0.42)",
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    {s.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

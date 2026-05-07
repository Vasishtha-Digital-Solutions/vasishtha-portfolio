import { motion } from "framer-motion";

/* ═════════════════════════════════════════════════════════════
   HANDOVER EXPERT — THE OUTCOME (Section 3)
   Two stacked blocks on the paper canvas:

   ─ Block A — SPLIT HERO (ink / gold)
       Left half (ink): faint blueprint grid + 3-line giant
       type — white "People" / gold "Finally" / outlined
       "Noticed". Right half (gold): big condensed quote with
       italic emphasis on the closing phrase, body copy below.
       Massive ghost "OUTCOME" wordmark sits in the bottom-
       right corner of the gold half (decorative only).

   ─ Block B — METRICS ROW
       4 equal columns split by 2px ink rules. Each has a
       giant condensed number, a label, and a mono sub-line.
       Hover swaps the column to navy with gold figures —
       handled in CSS for instant feedback.
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

const fadeUp = (delay = 0, duration = 0.7) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration, delay, ease: EASE },
});

const fadeIn = (delay = 0, duration = 0.9) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration, delay, ease: EASE },
});

export default function HandoverOutcome({ data }) {
  const { outcome, palette, fonts } = data;
  const { splitLeft, splitRight, metrics } = outcome;

  // Split the quote string so we can italicize the emphasized tail
  const quoteParts = splitRight.quote.split(splitRight.quoteEm);

  return (
    <>
      {/* Scoped CSS — metric hover (navy bg, gold figures) */}
      <style>{`
        .he-metric {
          transition: background 0.25s ease;
        }
        .he-metric:hover {
          background: ${palette.navy};
        }
        .he-metric:hover .he-metric-num { color: ${palette.gold}; }
        .he-metric:hover .he-metric-label { color: rgba(255,255,255,0.6); }
        .he-metric:hover .he-metric-sub { color: rgba(255,255,255,0.32); }
      `}</style>

      <section style={{ background: palette.paper }}>
        {/* ═════ BLOCK A — SPLIT HERO ═════ */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ minHeight: 380 }}
        >
          {/* ── Left: ink + giant 3-line type ── */}
          <div
            style={{
              background: palette.ink,
              padding: "clamp(56px, 7vw, 80px) clamp(20px, 4vw, 48px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Blueprint grid wash */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `
                  linear-gradient(rgba(245,194,0,0.04) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(245,194,0,0.04) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            <motion.h2
              {...fadeUp(0)}
              style={{
                fontFamily: fonts.cond,
                fontSize: "clamp(56px, 8vw, 110px)",
                fontWeight: 900,
                lineHeight: 0.88,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                position: "relative",
                zIndex: 1,
              }}
            >
              <span style={{ color: "#fff", display: "block" }}>
                {splitLeft.line1}
              </span>
              <span style={{ color: palette.gold, display: "block" }}>
                {splitLeft.line2}
              </span>
              <span
                style={{
                  display: "block",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255,255,255,0.18)",
                }}
              >
                {splitLeft.line3}
              </span>
            </motion.h2>
          </div>

          {/* ── Right: gold + quote + body ── */}
          <div
            style={{
              background: palette.gold,
              padding: "clamp(56px, 7vw, 80px) clamp(20px, 4vw, 48px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Ghost OUTCOME wordmark — decorative */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: -20,
                right: -10,
                fontFamily: fonts.cond,
                fontSize: "clamp(80px, 13vw, 160px)",
                fontWeight: 900,
                color: "rgba(10,14,23,0.08)",
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
                lineHeight: 1,
                pointerEvents: "none",
              }}
            >
              OUTCOME
            </div>

            <motion.p
              {...fadeUp(0.1)}
              style={{
                fontFamily: fonts.cond,
                fontSize: "clamp(22px, 3vw, 38px)",
                fontWeight: 700,
                color: palette.ink,
                lineHeight: 1.15,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                marginBottom: 20,
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Quote with italic emphasized tail */}
              <span style={{ marginRight: 4 }}>“</span>
              {quoteParts[0]}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                {splitRight.quoteEm}
              </em>
              {quoteParts[1] || ""}
              <span style={{ marginLeft: 2 }}>”</span>
            </motion.p>

            <motion.p
              {...fadeUp(0.2)}
              style={{
                fontFamily: fonts.body,
                fontSize: 14,
                color: "rgba(10,14,23,0.65)",
                lineHeight: 1.75,
                fontWeight: 300,
                position: "relative",
                zIndex: 1,
                maxWidth: 520,
              }}
            >
              {splitRight.body}
            </motion.p>
          </div>
        </div>

        {/* ═════ BLOCK B — METRICS ROW ═════ */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{
            gap: 0,
            borderTop: `3px solid ${palette.ink}`,
            borderBottom: `3px solid ${palette.ink}`,
          }}
        >
          {metrics.map((m, i) => {
            const isLastInRow =
              i === metrics.length - 1 || (i + 1) % 2 === 0;
            const isLast = i === metrics.length - 1;

            return (
              <motion.div
                key={m.label}
                {...fadeIn(i * 0.08)}
                className="he-metric"
                style={{
                  padding: "clamp(36px, 5vw, 48px) clamp(24px, 3vw, 36px)",
                  // Right rule between columns — hidden when wrapping last in row
                  borderRight: isLast ? "none" : `2px solid ${palette.ink}`,
                  // On mobile (2-col grid), hide right rule for items in the right column
                  cursor: "default",
                  // Bottom rule between mobile rows (i.e. between item 2 and 3)
                  borderBottom:
                    i < metrics.length - 2
                      ? `2px solid ${palette.ink}`
                      : "none",
                }}
              >
                <div
                  className="he-metric-num"
                  style={{
                    fontFamily: fonts.cond,
                    fontSize: "clamp(48px, 5vw, 72px)",
                    fontWeight: 900,
                    color: palette.ink,
                    lineHeight: 1,
                    letterSpacing: "-0.01em",
                    marginBottom: 10,
                    transition: "color 0.25s ease",
                  }}
                >
                  {m.num}
                </div>
                <div
                  className="he-metric-label"
                  style={{
                    fontFamily: fonts.body,
                    fontSize: 14,
                    color: "#475569",
                    lineHeight: 1.4,
                    transition: "color 0.25s ease",
                  }}
                >
                  {m.label}
                </div>
                <div
                  className="he-metric-sub"
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 9,
                    color: palette.concrete,
                    marginTop: 8,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    transition: "color 0.25s ease",
                  }}
                >
                  {m.sub}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Tablet+ — restore desktop column rules properly using
          CSS class so the JS doesn't mis-compute on mobile.
          (The inline border-right above is suppressed by these
          rules at the responsive breakpoint.) */}
      <style>{`
        @media (max-width: 767px) {
          .he-metric:nth-child(2n) { border-right: none !important; }
          .he-metric:nth-last-child(-n+2) { border-bottom: none !important; }
        }
        @media (min-width: 768px) {
          .he-metric { border-bottom: none !important; }
          .he-metric:nth-child(4n) { border-right: none !important; }
        }
      `}</style>
    </>
  );
}

import { motion } from "framer-motion";
import { Star } from "lucide-react";

/* ═════════════════════════════════════════════════════════════
   HANDOVER EXPERT — TESTIMONIALS (Section 4)
   Newspaper-column layout on the paper canvas.

   ─ Left column (50%): "Client Voices" mono label with
     hairline lead-out → huge decorative navy quote-mark
     ornament (12% opacity) → featured testimonial in
     condensed uppercase → attribution line with navy name.

   ─ Right column (50%): "More Stories" label → two small
     white cards. Each card: 5 gold stars → italic body →
     mono attribution with navy name. Hover upgrades the
     card border from paper2 to navy (CSS, instant).

   Bottom rule is 3px ink, matching the paper sections above.
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

const fadeUp = (delay = 0, duration = 0.7) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration, delay, ease: EASE },
});

// Small reusable section label — "CLIENT VOICES ─────"
function SectionLabel({ text, fonts, palette }) {
  return (
    <div
      style={{
        fontFamily: fonts.mono,
        fontSize: 10,
        color: palette.concrete,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        marginBottom: 24,
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <span>{text}</span>
      <span
        aria-hidden="true"
        style={{
          flex: 1,
          height: 1,
          background: palette.concrete,
        }}
      />
    </div>
  );
}

// 5-star row (lucide Star, gold, filled)
function FiveStars({ palette }) {
  return (
    <div
      aria-label="5 out of 5 stars"
      style={{
        display: "flex",
        gap: 2,
        marginBottom: 10,
      }}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          size={12}
          fill={palette.gold}
          color={palette.gold}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export default function HandoverTestimonials({ data }) {
  const { testimonials, palette, fonts } = data;
  const { featured, more } = testimonials;

  return (
    <>
      <style>{`
        .he-tc-small {
          transition: border-color 0.25s ease, transform 0.25s ease;
        }
        .he-tc-small:hover {
          border-color: ${palette.navy};
          transform: translateY(-2px);
        }
        /* Mobile (stacked): rule BETWEEN the two columns is a bottom border on the left card */
        .he-testi-left { border-bottom: 2px solid ${palette.ink}; }
        /* Desktop (side-by-side): rule is a right border on the left card instead */
        @media (min-width: 768px) {
          .he-testi-left {
            border-bottom: none;
            border-right: 2px solid ${palette.ink};
          }
        }
      `}</style>

      <section
        style={{
          background: palette.paper,
          borderBottom: `3px solid ${palette.ink}`,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 0 }}>
          {/* ── LEFT: Featured testimonial ── */}
          <div
            className="he-testi-left"
            style={{
              padding: "clamp(48px, 6vw, 64px) clamp(20px, 4vw, 48px)",
            }}
          >
            <motion.div {...fadeUp(0)}>
              <SectionLabel
                text="Client Voices"
                fonts={fonts}
                palette={palette}
              />
            </motion.div>

            {/* Huge decorative opening quote */}
            <motion.div
              {...fadeUp(0.06)}
              aria-hidden="true"
              style={{
                fontFamily: fonts.cond,
                fontSize: "clamp(84px, 10vw, 120px)",
                color: palette.navy,
                opacity: 0.12,
                lineHeight: 0.8,
                marginBottom: 8,
                fontWeight: 900,
                userSelect: "none",
              }}
            >
              “
            </motion.div>

            {/* Featured quote */}
            <motion.p
              {...fadeUp(0.14)}
              style={{
                fontFamily: fonts.cond,
                fontSize: "clamp(18px, 2.2vw, 28px)",
                fontWeight: 600,
                color: palette.ink,
                lineHeight: 1.3,
                marginBottom: 24,
                textTransform: "uppercase",
                letterSpacing: "0.01em",
              }}
            >
              {/* Wrap with typographic quotes if not already present */}
              {featured.text.startsWith('"') ? featured.text : `"${featured.text}"`}
            </motion.p>

            {/* Attribution */}
            <motion.div
              {...fadeUp(0.22)}
              style={{
                fontFamily: fonts.mono,
                fontSize: 10,
                color: palette.concrete,
                letterSpacing: "0.08em",
              }}
            >
              — <span style={{ color: palette.navy, fontWeight: 700 }}>
                {featured.author}
              </span>{" "}
              · {featured.meta}
            </motion.div>
          </div>

          {/* ── RIGHT: Two smaller cards ── */}
          <div
            style={{
              padding: "clamp(48px, 6vw, 64px) clamp(20px, 4vw, 48px)",
              display: "flex",
              flexDirection: "column",
              gap: 32,
            }}
          >
            <motion.div {...fadeUp(0)}>
              <SectionLabel
                text="More Stories"
                fonts={fonts}
                palette={palette}
              />
            </motion.div>

            {more.map((t, i) => (
              <motion.article
                key={i}
                {...fadeUp(0.1 + i * 0.1)}
                className="he-tc-small"
                style={{
                  border: `1px solid ${palette.paper2}`,
                  padding: "24px 28px",
                  background: "#fff",
                }}
              >
                <FiveStars palette={palette} />
                <p
                  style={{
                    fontFamily: fonts.body,
                    fontSize: 13,
                    color: "#334155",
                    lineHeight: 1.7,
                    marginBottom: 16,
                    fontStyle: "italic",
                  }}
                >
                  {t.text.startsWith('"') ? t.text : `"${t.text}"`}
                </p>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 10,
                    color: palette.concrete,
                    letterSpacing: "0.06em",
                  }}
                >
                  <span style={{ color: palette.navy, fontWeight: 700 }}>
                    {t.author}
                  </span>{" "}
                  · {t.meta}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

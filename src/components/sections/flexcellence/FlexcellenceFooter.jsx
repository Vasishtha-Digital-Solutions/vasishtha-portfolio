import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

/* ═════════════════════════════════════════════════════════════
   FLEXCELLENCE CASE STUDY — FOOTER (Section 5)
   Charcoal closer. Two rows:
   ─ Top: brand block (orange 10-point star + wordmark +
     tagline) on the left, right-aligned CTA (kicker, 2-line
     serif headline with italic orange accent on "campaign",
     orange pill button that scales slightly on hover).
   ─ Bottom (hairline separator above): © line left, middle-
     dot separated tag list right.
   Framer Motion handles the single fade-up; hover states use
   local useState so the pure-CSS :hover isn't needed.
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

const rise = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration, delay, ease: EASE },
});

export default function FlexcellenceFooter({ data }) {
  const { footer, palette } = data;
  const [btnHover, setBtnHover] = useState(false);

  return (
    <footer
      style={{
        background: palette.charcoal,
        padding: "72px clamp(24px, 4vw, 48px) 48px",
        color: "#fff",
        fontFamily: "'Outfit', system-ui, sans-serif",
      }}
    >
      {/* ─── Top row: brand / CTA ─── */}
      <motion.div
        {...rise(0)}
        className="flex flex-col md:flex-row md:items-start md:justify-between"
        style={{ gap: 40, marginBottom: 56 }}
      >
        {/* Brand block */}
        <div>
          <div
            className="flex items-center"
            style={{ gap: 10, marginBottom: 12 }}
          >
            {/* Orange 10-pointed star */}
            <div
              aria-hidden="true"
              style={{
                width: 28,
                height: 28,
                background: palette.orange,
                clipPath:
                  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              }}
            />
            <span
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: "#fff",
              }}
            >
              {footer.brand.name}
            </span>
          </div>
          <p
            className="m-0"
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.75,
              maxWidth: 240,
              fontWeight: 300,
            }}
          >
            {footer.brand.tagline}
          </p>
        </div>

        {/* CTA block */}
        <div className="md:text-right">
          <div
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 14,
            }}
          >
            {footer.cta.kicker}
          </div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 3vw, 44px)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            {footer.cta.headStart}
            <br />
            {footer.cta.headEnd}{" "}
            <em
              style={{
                color: palette.orange,
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              {footer.cta.headAccent}
            </em>
          </div>

          {/* Orange pill CTA — navigates to /contact */}
          <Link
            to="/contact"
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            className="inline-flex items-center"
            style={{
              gap: 10,
              background: btnHover ? palette.orange2 : palette.orange,
              color: "#fff",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "15px 28px",
              borderRadius: 100,
              cursor: "pointer",
              border: "none",
              textDecoration: "none",
              transform: btnHover ? "scale(1.03)" : "scale(1)",
              transition: "background 0.2s, transform 0.2s",
            }}
          >
            {footer.cta.buttonText}
          </Link>
        </div>
      </motion.div>

      {/* ─── Bottom row: © line + tags ─── */}
      <div
        className="flex flex-col md:flex-row md:items-center md:justify-between"
        style={{
          gap: 16,
          paddingTop: 28,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.22)",
            letterSpacing: "0.04em",
          }}
        >
          {footer.copy}
        </span>
        <div className="flex items-center" style={{ gap: 14 }}>
          {footer.tags.map((tag, i) => (
            <span key={tag} className="contents">
              <span
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.18)",
                }}
              >
                {tag}
              </span>
              {i < footer.tags.length - 1 && (
                <span
                  aria-hidden="true"
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.18)",
                  }}
                >
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

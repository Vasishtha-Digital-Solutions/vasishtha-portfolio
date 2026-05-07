import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/* ═════════════════════════════════════════════════════════════
   HANDOVER EXPERT — FOOTER (Section 5)
   Ink closer with a 3px gold top rule. Two rows:

   ─ Top row:
       Left — GIANT 2-line wordmark ("Handover / Expert" with
       "Expert" in gold), mono tagline beneath.
       Right — right-aligned CTA kicker + gold button with
       arrow icon. Hover darkens to gold2 and lifts 2px.

   ─ Bottom row (hairline separator above):
       Left — copyright line (very faint mono).
       Right — middle-dot separated tag row ("Awareness
       Marketing · Influencer Strategy · Category Creation").

   Button routes to /contact to match the portfolio's
   standard conversion path.
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

const rise = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration, delay, ease: EASE },
});

export default function HandoverFooter({ data }) {
  const { footer, palette, fonts } = data;
  const [btnHover, setBtnHover] = useState(false);

  return (
    <footer
      style={{
        background: palette.ink,
        padding: "clamp(56px, 8vw, 72px) clamp(20px, 4vw, 48px) 48px",
        borderTop: `3px solid ${palette.gold}`,
        color: "#fff",
      }}
    >
      {/* ─── Top row: brand / CTA ─── */}
      <motion.div
        {...rise(0)}
        className="flex flex-col md:flex-row md:items-end md:justify-between"
        style={{ gap: 40, marginBottom: 56 }}
      >
        {/* LEFT — giant wordmark */}
        <div>
          <div
            style={{
              fontFamily: fonts.cond,
              fontSize: "clamp(44px, 6vw, 80px)",
              fontWeight: 900,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 0.9,
              marginBottom: 8,
            }}
          >
            {footer.wordmarkTop}
            <br />
            <span style={{ color: palette.gold }}>{footer.wordmarkBottom}</span>
          </div>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 10,
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {footer.tagline}
          </div>
        </div>

        {/* RIGHT — CTA */}
        <div className="md:text-right">
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: 14,
              color: "rgba(255,255,255,0.45)",
              marginBottom: 16,
              fontWeight: 300,
            }}
          >
            {footer.ctaText}
          </p>
          <Link
            to="/contact"
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: btnHover ? palette.gold2 : palette.gold,
              color: palette.ink,
              fontFamily: fonts.cond,
              fontSize: 15,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              padding: "14px 28px",
              textDecoration: "none",
              transform: btnHover ? "translateY(-2px)" : "translateY(0)",
              transition: "all 0.2s ease",
              cursor: "pointer",
            }}
          >
            {footer.ctaLabel}
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </motion.div>

      {/* ─── Bottom row: copyright / tags ─── */}
      <motion.div
        {...rise(0.12)}
        className="flex flex-col md:flex-row md:items-center md:justify-between"
        style={{
          gap: 16,
          paddingTop: 28,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 9,
            color: "rgba(255,255,255,0.22)",
            letterSpacing: "0.06em",
          }}
        >
          {footer.copy}
        </span>

        <div className="flex flex-wrap" style={{ gap: 10 }}>
          {footer.tags.map((tag, i) => (
            <span
              key={tag}
              style={{
                fontFamily: fonts.mono,
                fontSize: 9,
                color: "rgba(255,255,255,0.22)",
                letterSpacing: "0.04em",
                display: "inline-flex",
                gap: 10,
                alignItems: "center",
              }}
            >
              {tag}
              {i < footer.tags.length - 1 && (
                <span
                  aria-hidden="true"
                  style={{ color: "rgba(255,255,255,0.15)" }}
                >
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}

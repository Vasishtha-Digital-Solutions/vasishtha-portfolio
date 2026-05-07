import { motion } from "framer-motion";

/* ═════════════════════════════════════════════════════════════
   YWI CASE STUDY — SECTION 03 · THE CTA ENGINE
   Alternating back to palette.bg. Chapter header (italic 03
   numeral + mono label), headline with yellow accent phrase
   ("opened a conversation."), italic lede. Centred "device"
   card with four stacked parts:
   1. Window chrome    — 3 traffic-light dots + centred handle
   2. Reel preview     — gradient bg, yellow play-triangle, italic
                         reel caption + reel meta
   3. Comments list    — 3 comments w/ avatar + user + "STONE"
                         keyword highlight (yellow chip)
   4. Footer strip     — "COMMENT TRIGGERS DM WITH PRICING"
   Viewport-triggered fade-ups via Framer Motion (no CSS keyframes).
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

export default function YWICtaEngine({ data }) {
  const { ctaEngine, palette } = data;

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
            {ctaEngine.chapter.num}
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
            {ctaEngine.chapter.label.map((ln, i) => (
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
          {ctaEngine.headlineStart}{" "}
          <span style={{ color: palette.yellow }}>
            {ctaEngine.headlineAccent}
          </span>
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
          {ctaEngine.lede}
        </motion.p>

        {/* ─── Device card ─── */}
        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.3 }}
          className="overflow-hidden"
          style={{
            maxWidth: 480,
            margin: "2rem auto 0",
            background: palette.bg,
            border: `0.5px solid ${palette.line}`,
            borderRadius: 8,
          }}
        >
          {/* 1. Window chrome — traffic lights + handle */}
          <div
            className="flex items-center"
            style={{
              padding: "10px 16px",
              background: palette.surface,
              gap: 10,
              borderBottom: `0.5px solid ${palette.line}`,
            }}
          >
            {ctaEngine.trafficLights.map((color, i) => (
              <span
                key={i}
                className="block rounded-full"
                style={{ width: 8, height: 8, background: color }}
              />
            ))}
            <span
              className="flex-1 text-center"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                color: palette.cream3,
                letterSpacing: "0.15em",
              }}
            >
              {ctaEngine.handle}
            </span>
          </div>

          {/* 2. Reel preview */}
          <div
            className="flex flex-col items-center justify-center text-center"
            style={{
              padding: "2rem 1.5rem",
              minHeight: 200,
              background: `linear-gradient(180deg, ${palette.bg3}, ${palette.bg})`,
            }}
          >
            {/* Play-button ring + triangle */}
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 48,
                height: 48,
                border: `2px solid ${palette.yellow}`,
                marginBottom: "1rem",
              }}
              aria-hidden="true"
            >
              <span
                className="block"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: `16px solid ${palette.yellow}`,
                  marginLeft: 3,
                }}
              />
            </div>
            {/* Reel caption — italic DM Serif */}
            <div
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: 18,
                lineHeight: 1.3,
                marginBottom: 6,
                color: palette.cream,
              }}
            >
              {ctaEngine.reel.caption}
            </div>
            {/* Reel meta */}
            <div
              style={{
                fontSize: 12,
                color: palette.cream3,
                fontWeight: 300,
                fontFamily: "'Outfit', system-ui, sans-serif",
              }}
            >
              {ctaEngine.reel.meta}
            </div>
          </div>

          {/* 3. Comments list */}
          <div
            style={{
              padding: "1rem 1.5rem",
              borderTop: `0.5px solid ${palette.line}`,
            }}
          >
            {ctaEngine.comments.map((c, i) => (
              <motion.div
                key={c.user}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + i * 0.15,
                  ease: EASE,
                }}
                className="flex items-start"
                style={{
                  gap: 10,
                  padding: "10px 0",
                  borderBottom:
                    i < ctaEngine.comments.length - 1
                      ? "0.5px solid rgba(242,237,230,0.04)"
                      : "none",
                }}
              >
                {/* Avatar dot */}
                <div
                  aria-hidden="true"
                  className="rounded-full flex-shrink-0"
                  style={{
                    width: 28,
                    height: 28,
                    background: palette.surface,
                  }}
                />
                {/* Comment line */}
                <div
                  style={{
                    fontSize: 13,
                    color: palette.cream2,
                    lineHeight: 1.5,
                    fontFamily: "'Outfit', system-ui, sans-serif",
                  }}
                >
                  <strong
                    style={{ color: palette.cream, fontWeight: 600 }}
                  >
                    {c.user}
                  </strong>{" "}
                  {c.before}
                  <span
                    style={{
                      color: palette.yellow,
                      fontWeight: 600,
                      background: palette.yglow,
                      padding: "1px 6px",
                      borderRadius: 3,
                    }}
                  >
                    {ctaEngine.keyword}
                  </span>
                  {c.after}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 4. Footer line */}
          <div
            className="text-center"
            style={{
              padding: "1rem 0",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.2em",
              color: palette.yellow,
              opacity: 0.8,
            }}
          >
            {ctaEngine.footerLine}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

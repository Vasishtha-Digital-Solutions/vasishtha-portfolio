import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

/* ═════════════════════════════════════════════════════════════
   FLEXCELLENCE CASE STUDY — HERO (Section 1)
   Exact visual port of approved flexcellence_portfolio_final.html
   ─ Split editorial stage (1fr cream / 1.05fr warm-white)
   ─ Left: pulsing-dot kicker, serif headline + italic accent,
     lede, 5 service chips, 4-stat strip with hairline divider
   ─ Right: photo card (4:5), radial glow, 4 floating UI cards
     (coach / macros / result / steps), bottom app-bar badge,
     vertical sidebar label
   ─ Framer Motion for all entrance + float animations
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

const fadeUp = (delay = 0, duration = 0.9) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay, ease: EASE },
});

const fadeIn = (delay = 0, duration = 1) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration, delay, ease: EASE },
});

// Gentle float loops for the absolute-positioned cards
const floatLoop = (y = 8, duration = 6, delay = 0) => ({
  animate: { y: [0, -y, 0] },
  transition: {
    duration,
    delay,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop",
  },
});

// Pulsing dot (keyframe array for opacity + scale)
const pulseDot = {
  animate: { opacity: [1, 0.3, 1], scale: [1, 1.7, 1] },
  transition: { duration: 2, ease: "easeInOut", repeat: Infinity },
};

export default function FlexcellenceHero({ data }) {
  const { hero, palette } = data;
  const { cards } = hero;

  return (
    <>
      {/* ─── Fixed top nav — back link + right-side pill ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between"
        style={{
          padding: "16px clamp(20px, 4vw, 48px)",
          background: "rgba(253,250,246,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid ${palette.border}`,
          fontFamily: "'Outfit', system-ui, sans-serif",
        }}
      >
        <Link
          to="/#portfolio"
          className="inline-flex items-center gap-2 transition-colors"
          style={{
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: palette.muted,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = palette.orange)}
          onMouseLeave={(e) => (e.currentTarget.style.color = palette.muted)}
        >
          <ArrowLeft size={14} />
          All Projects
        </Link>
        <div className="flex items-center gap-2.5">
          {/* Orange 10-pointed star logo */}
          <div
            aria-hidden="true"
            style={{
              width: 26,
              height: 26,
              background: palette.orange,
              flexShrink: 0,
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          />
          <span
            style={{
              fontWeight: 600,
              fontSize: 16,
              color: palette.charcoal,
            }}
          >
            {data.title}
          </span>
          <span
            className="hidden md:inline-block ml-3"
            style={{
              fontSize: 11,
              color: palette.muted,
              border: `1px solid ${palette.border2}`,
              padding: "5px 14px",
              borderRadius: 100,
              letterSpacing: "0.04em",
            }}
          >
            {hero.navPill}
          </span>
        </div>
      </nav>

      {/* ─── HERO GRID ─── */}
      <section
        className="min-h-screen"
        style={{
          paddingTop: 62,
          background: palette.cream,
          color: palette.charcoal,
          fontFamily: "'Outfit', system-ui, sans-serif",
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr]"
          style={{ minHeight: "calc(100vh - 62px)" }}
        >
          {/* ═══ LEFT COLUMN ═══ */}
          <div
            className="relative flex flex-col justify-center"
            style={{
              padding: "72px clamp(24px, 4vw, 52px)",
            }}
          >
            {/* Right-edge vertical gradient divider (desktop only) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute hidden lg:block"
              style={{
                right: 0,
                top: "8%",
                bottom: "8%",
                width: 1,
                background: `linear-gradient(to bottom, transparent, ${palette.border2} 30%, ${palette.border2} 70%, transparent)`,
              }}
            />

            {/* ─ Kicker chip with pulsing orange dot ─ */}
            <motion.div
              {...fadeUp(0.1)}
              className="inline-flex items-center gap-2 mb-7"
              style={{
                background: palette.orangePale,
                border: "1px solid rgba(249,115,22,0.22)",
                borderRadius: 100,
                padding: "6px 16px 6px 10px",
                width: "fit-content",
              }}
            >
              <motion.span
                {...pulseDot}
                className="block rounded-full"
                style={{ width: 7, height: 7, background: palette.orange }}
              />
              <span
                style={{
                  fontSize: 11,
                  color: palette.orange,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {hero.kicker}
              </span>
            </motion.div>

            {/* ─ H1 (serif) ─ */}
            <motion.h1
              {...fadeUp(0.25, 1.1)}
              className="m-0"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(44px, 5vw, 72px)",
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                color: palette.charcoal,
                marginBottom: 4,
              }}
            >
              {hero.headlineTop}
            </motion.h1>
            {/* ─ Italic orange subtitle ─ */}
            <motion.span
              {...fadeUp(0.4, 1.1)}
              className="block"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(44px, 5vw, 72px)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                color: palette.orange,
                marginBottom: 28,
              }}
            >
              {hero.headlineItalic}
            </motion.span>

            {/* ─ Lede ─ */}
            <motion.p
              {...fadeUp(0.55)}
              className="m-0"
              style={{
                fontSize: 15,
                fontWeight: 300,
                color: palette.muted,
                lineHeight: 1.82,
                maxWidth: 440,
                marginBottom: 36,
              }}
            >
              {hero.lede}
            </motion.p>

            {/* ─ 5 service chips ─ */}
            <motion.div
              {...fadeUp(0.7)}
              className="flex flex-wrap mb-11"
              style={{ gap: 8 }}
            >
              {hero.chips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center transition-all"
                  style={{
                    gap: 6,
                    background: "#fff",
                    border: `1px solid ${palette.border2}`,
                    borderRadius: 100,
                    padding: "7px 14px",
                    fontSize: 13,
                    color: palette.brown,
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = palette.orangePale;
                    e.currentTarget.style.borderColor = "rgba(249,115,22,0.3)";
                    e.currentTarget.style.color = palette.orange;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.borderColor = palette.border2;
                    e.currentTarget.style.color = palette.brown;
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="block rounded-full"
                    style={{
                      width: 6,
                      height: 6,
                      background: palette.orange,
                      opacity: 0.7,
                      flexShrink: 0,
                    }}
                  />
                  {c}
                </span>
              ))}
            </motion.div>

            {/* ─ 4-stat strip ─ */}
            <motion.div
              {...fadeUp(0.85)}
              className="flex flex-wrap"
              style={{
                gap: 36,
                paddingTop: 36,
                borderTop: `1px solid ${palette.border}`,
              }}
            >
              {hero.stats.map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 38,
                      fontWeight: 700,
                      color: palette.charcoal,
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {s.big}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: palette.muted,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ═══ RIGHT COLUMN (product stage) ═══ */}
          <div
            className="relative overflow-hidden flex items-center justify-center"
            style={{
              background: palette.warmWhite,
              padding: "40px clamp(20px, 4vw, 52px)",
              minHeight: "80vh",
            }}
          >
            {/* Radial orange glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute"
              style={{
                top: "20%",
                left: "10%",
                width: 480,
                height: 480,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 65%)",
              }}
            />

            {/* Vertical sidebar label (lg only) */}
            <div
              aria-hidden="true"
              className="absolute hidden lg:block"
              style={{
                right: 16,
                top: "50%",
                fontSize: 10,
                color: palette.border2,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 600,
                writingMode: "vertical-rl",
                whiteSpace: "nowrap",
              }}
            >
              {hero.sideLabel}
            </div>

            {/* ─── Photo + floating cards cluster ─── */}
            <div
              className="relative mx-auto w-full"
              style={{ maxWidth: 460 }}
            >
              {/* Main photo card */}
              <motion.div
                {...fadeIn(0.2, 1.2)}
                className="relative w-full"
                style={{
                  aspectRatio: "4 / 5",
                  borderRadius: 28,
                  overflow: "hidden",
                  boxShadow: "0 32px 80px rgba(28,20,16,0.14)",
                  border: "3px solid #fff",
                }}
              >
                <motion.img
                  src={hero.image.src}
                  alt={hero.image.alt}
                  loading="eager"
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.8, ease: EASE }}
                  className="w-full h-full"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top center",
                    filter: "saturate(0.92) brightness(1.02)",
                  }}
                />
                {/* Subtle orange wash on bottom */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(249,115,22,0.08) 100%)",
                  }}
                />
              </motion.div>

              {/* ─ Floating: coach card (top-left) ─ */}
              <motion.div
                {...fadeUp(0.6, 0.8)}
                className="absolute hidden md:block"
                style={{
                  top: "14%",
                  left: "-48px",
                  background: "#fff",
                  borderRadius: 18,
                  padding: "16px 18px",
                  boxShadow: "0 12px 40px rgba(28,20,16,0.12)",
                  border: `1px solid ${palette.border}`,
                  width: 196,
                  zIndex: 10,
                }}
              >
                <motion.div {...floatLoop(7, 6, 0.3)}>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div
                      className="flex items-center justify-center rounded-full flex-shrink-0"
                      style={{
                        width: 36,
                        height: 36,
                        background:
                          "linear-gradient(135deg, #FEE4CC, #FFD4AA)",
                        fontSize: 16,
                        border: "1px solid rgba(249,115,22,0.2)",
                      }}
                    >
                      {cards.coach.avatarEmoji}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: palette.charcoal,
                        }}
                      >
                        {cards.coach.name}
                      </div>
                      <div
                        style={{
                          fontSize: 10,
                          color: palette.muted,
                          marginTop: 1,
                        }}
                      >
                        {cards.coach.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <motion.span
                      {...pulseDot}
                      className="block rounded-full"
                      style={{ width: 7, height: 7, background: "#22C55E" }}
                    />
                    <span
                      style={{
                        fontSize: 11,
                        color: "#22C55E",
                        fontWeight: 600,
                      }}
                    >
                      {cards.coach.statusText}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: palette.muted,
                      lineHeight: 1.5,
                    }}
                  >
                    {cards.coach.specLead}{" "}
                    <span
                      style={{ color: palette.charcoal, fontWeight: 500 }}
                    >
                      {cards.coach.specStrong}
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* ─ Floating: macros card (right-middle) ─ */}
              <motion.div
                {...fadeUp(0.75, 0.8)}
                className="absolute hidden md:block"
                style={{
                  right: "-32px",
                  top: "28%",
                  background: "#fff",
                  borderRadius: 18,
                  padding: "16px 18px",
                  boxShadow: "0 12px 40px rgba(28,20,16,0.12)",
                  border: `1px solid ${palette.border}`,
                  width: 188,
                  zIndex: 10,
                }}
              >
                <motion.div {...floatLoop(10, 7, 0.8)}>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: palette.charcoal,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 12,
                    }}
                  >
                    {cards.macros.heading}
                  </div>
                  {cards.macros.rows.map((r) => (
                    <div
                      key={r.label}
                      className="flex justify-between items-center"
                      style={{ marginBottom: 8 }}
                    >
                      <div
                        className="flex items-center gap-1.5"
                        style={{ fontSize: 12, color: palette.muted }}
                      >
                        <span
                          aria-hidden="true"
                          className="block rounded-full flex-shrink-0"
                          style={{ width: 8, height: 8, background: r.dot }}
                        />
                        {r.label}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: palette.charcoal,
                        }}
                      >
                        {r.value}
                      </div>
                    </div>
                  ))}
                  <div
                    className="relative overflow-hidden"
                    style={{
                      width: "100%",
                      height: 5,
                      background: palette.border,
                      borderRadius: 100,
                      marginTop: 10,
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${cards.macros.fillPct}%` }}
                      transition={{ duration: 1.6, delay: 1.2, ease: EASE }}
                      style={{
                        height: "100%",
                        borderRadius: 100,
                        background: `linear-gradient(90deg, ${palette.orange}, ${palette.orange2})`,
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* ─ Floating: result pill (dark, bottom-left) ─ */}
              <motion.div
                {...fadeUp(0.9, 0.8)}
                className="absolute hidden md:flex items-center"
                style={{
                  bottom: "12%",
                  left: "-24px",
                  gap: 10,
                  background: palette.charcoal,
                  borderRadius: 18,
                  padding: "14px 18px",
                  boxShadow: "0 12px 40px rgba(28,20,16,0.2)",
                  whiteSpace: "nowrap",
                  zIndex: 10,
                }}
              >
                <motion.div {...floatLoop(8, 8, 1.2)} className="flex items-center gap-2.5">
                  <span style={{ fontSize: 20 }}>{cards.result.emoji}</span>
                  <div>
                    <span
                      className="block"
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      {cards.result.strong}
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        color: "rgba(255,255,255,0.5)",
                        marginTop: 1,
                      }}
                    >
                      {cards.result.sub}
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* ─ Floating: steps card (bottom-right) ─ */}
              <motion.div
                {...fadeUp(1.0, 0.8)}
                className="absolute hidden md:flex items-center"
                style={{
                  bottom: "22%",
                  right: "-20px",
                  gap: 10,
                  background: "#fff",
                  borderRadius: 18,
                  padding: "13px 16px",
                  boxShadow: "0 12px 40px rgba(28,20,16,0.12)",
                  border: `1px solid ${palette.border}`,
                  whiteSpace: "nowrap",
                  zIndex: 10,
                }}
              >
                <motion.div {...floatLoop(9, 9, 1.6)} className="flex items-center gap-2.5">
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 10,
                      background: palette.orangePale,
                      fontSize: 16,
                    }}
                  >
                    {cards.steps.emoji}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: palette.charcoal,
                      }}
                    >
                      {cards.steps.num}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        color: palette.muted,
                        marginTop: 1,
                      }}
                    >
                      {cards.steps.label}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* ─ Bottom app-bar overlay (always visible, even mobile) ─ */}
              <motion.div
                {...fadeUp(1.1, 0.8)}
                className="absolute flex items-center"
                style={{
                  bottom: -18,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#fff",
                  borderRadius: 20,
                  padding: "14px 20px",
                  boxShadow: "0 12px 40px rgba(28,20,16,0.15)",
                  border: `1px solid ${palette.border}`,
                  gap: 16,
                  width: "88%",
                  whiteSpace: "nowrap",
                  zIndex: 12,
                }}
              >
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0"
                  style={{
                    width: 40,
                    height: 40,
                    background: `linear-gradient(135deg, ${palette.orange}, ${palette.orange2})`,
                    fontSize: 18,
                  }}
                >
                  {cards.appBar.avatarEmoji}
                </div>
                <div className="min-w-0 flex-1">
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: palette.charcoal,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {cards.appBar.name}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: palette.muted,
                      marginTop: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {cards.appBar.sub}
                  </div>
                </div>
                <div
                  className="flex items-center flex-shrink-0"
                  style={{
                    gap: 5,
                    background: "rgba(249,115,22,0.1)",
                    borderRadius: 100,
                    padding: "5px 12px",
                    fontSize: 11,
                    color: palette.orange,
                    fontWeight: 600,
                  }}
                >
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1], scale: [1, 1.7, 1] }}
                    transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                    className="block rounded-full"
                    style={{ width: 6, height: 6, background: palette.orange }}
                  />
                  {cards.appBar.badge}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

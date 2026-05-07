import { motion, animate } from "framer-motion";
import { ArrowLeft, Aperture } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

/* ═════════════════════════════════════════════════════════════
   ONE DAY STORIES — HERO (Section 1) — v3 NAV-ONLY MASTHEAD
   Approved crit fixes from design review + film-strip removal:
     ✓ Real "6 MO Campaign Run" stat (was ∞ Memories Captured)
     ✓ Stat numbers shrunk + weight 400 so title dominates
     ✓ Upright title "Every Moment" at weight 400 (was 300)
     ✓ Film strip removed — nav alone is the masthead now
     ✓ Pulse glyph is a real border-radius:50% span

   Cinematic reveal choreography (entrance sequence ~2.6s):
     0.00  nav drops in from top
     0.40  bg photo fades in + Ken Burns slow infinite zoom
     0.70  kicker slides in from left + pulse dot activates
     0.85  title line 1 "Every Moment" — word-mask reveal
     1.15  title line 2 "Has a Story." — word-mask reveal
     1.55  champagne hairline draws beneath italic title
     1.75  lede fades up
     1.95  stats stagger in (scale 0.9→1, y 14→0, fade) + "10" counts up
     2.40  scroll cue fades in (line animation loops thereafter)

   All entrance reveals run on mount — infinite loops (Ken Burns,
   pulse, scroll line) are scoped to CSS @keyframes.
   ═════════════════════════════════════════════════════════════ */

const EASE_OUT = [0.22, 1, 0.36, 1]; // expo-out — cinematic snap
const EASE_INOUT = [0.65, 0, 0.35, 1];

// Data URI grain (no network cost) — overlay blend handles it.
const GRAIN_DATA_URI =
  "data:image/svg+xml;utf8,<svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";

/* ──────────────────────────────────────────────────────────
   WordReveal — classic editorial mask-reveal:
   each word sits inside an overflow:hidden box; the inner
   span translates from below (y:105%) up to 0, staggered.
   Looks like the words are rising up from beneath the frame.
   ────────────────────────────────────────────────────────── */
function WordReveal({
  text,
  delay = 0,
  stagger = 0.08,
  duration = 1,
  className,
  style,
  as = "span",
}) {
  const Tag = motion[as] || motion.span;
  const words = text.split(" ");
  return (
    <Tag
      className={className}
      style={{ ...style, display: "block" }}
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
            // small padding stops italic descenders from being clipped
            paddingBottom: "0.08em",
            lineHeight: style?.lineHeight ?? 0.9,
          }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
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

/* ──────────────────────────────────────────────────────────
   CountUp — used on the "10" stat. Animates 0 → target.
   Only kicks off after the stats container reveals so it
   feels like the number is "settling into place".
   ────────────────────────────────────────────────────────── */
function CountUp({ target, delay = 0, duration = 1.2, suffix = "" }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const controls = animate(0, target, {
      duration,
      delay,
      ease: EASE_OUT,
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => controls.stop();
  }, [target, delay, duration]);
  return (
    <>
      {val}
      {suffix}
    </>
  );
}

export default function OneDayHero({ data }) {
  const { nav, hero, palette, fonts } = data;

  return (
    <>
      {/* Scoped CSS — infinite-loop keyframes live here so they
          don't fight Framer's finite reveal transitions. */}
      <style>{`
        @keyframes ods-pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes ods-scroll-line {
          0%   { transform: scaleY(0); transform-origin: top; }
          50%  { transform: scaleY(1); transform-origin: top; }
          50.01% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        @keyframes ods-kenburns {
          0%   { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.07) translate(-0.8%, -0.6%); }
        }
        .ods-pulse { animation: ods-pulse 2s ease-in-out infinite; }
        .ods-scroll-line { animation: ods-scroll-line 2s ease-in-out infinite; }
        .ods-kenburns { animation: ods-kenburns 30s ease-in-out infinite alternate; }
      `}</style>

      {/* Film-grain overlay — fixed across viewport, 3% alpha */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          pointerEvents: "none",
          opacity: 0.03,
          backgroundImage: `url("${GRAIN_DATA_URI}")`,
          backgroundSize: "180px 180px",
          mixBlendMode: "overlay",
        }}
      />

      {/* ─── Fixed top nav — drops in ─── */}
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          height: 52,
          display: "flex",
          alignItems: "center",
          padding: "0 clamp(16px, 3vw, 48px)",
          // Nav now sits cleanly ABOVE the film strip (strip is at
          // top:52 instead of overlapping at top:0), so we can use
          // a solid-ish backdrop with a soft fade-out at the bottom
          // for editorial polish — no more meta-text collision.
          background:
            "linear-gradient(to bottom, rgba(13,10,9,0.95) 0%, rgba(13,10,9,0.88) 100%)",
          borderBottom: "1px solid rgba(232,213,176,0.06)",
        }}
      >
        <Link
          to="/projects"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          <ArrowLeft
            size={14}
            color="rgba(232,213,176,0.55)"
            aria-hidden="true"
          />
          <Aperture
            size={22}
            color={palette.champagne}
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span
            style={{
              fontFamily: fonts.display,
              fontSize: 18,
              fontWeight: 600,
              fontStyle: "italic",
              color: palette.champagne,
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
            }}
          >
            {nav.brand}
          </span>
        </Link>

        <div
          className="hidden md:flex ml-auto"
          style={{ alignItems: "center", gap: 16 }}
        >
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 9,
              color: "rgba(232,213,176,0.4)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {nav.meta}
          </span>
        </div>

        <div className="flex md:hidden ml-auto">
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 9,
              color: "rgba(232,213,176,0.45)",
              letterSpacing: "0.1em",
            }}
          >
            {nav.tag}
          </span>
        </div>
      </motion.nav>

      {/* ─── HERO STAGE ─── */}
      <section
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: palette.black,
          color: palette.ivory,
        }}
      >
        {/* Background photo — fades in, then slow Ken Burns loop.
            Scale/translate run on a parent wrapper so the fade
            and the infinite KB don't fight each other. */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: EASE_OUT }}
            style={{ position: "absolute", inset: 0 }}
          >
            <img
              className="ods-kenburns"
              src={hero.image}
              alt={hero.imageAlt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "saturate(0.75) brightness(0.55)",
                willChange: "transform",
              }}
            />
          </motion.div>
          {/* Vertical darkening gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(13,10,9,0.30) 0%, rgba(13,10,9,0.10) 30%, rgba(13,10,9,0.70) 70%, rgba(13,10,9,0.97) 100%)",
            }}
          />
        </div>

        {/* Film-strip band REMOVED per user request — the nav
            already signals brand context; the aperture icon +
            grain overlay + Ken Burns zoom continue to carry the
            cinematic conceit without a literal perforation band. */}

        {/* Scroll cue — right edge, fades in last */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4, ease: EASE_OUT }}
          aria-hidden="true"
          className="hidden sm:flex"
          style={{
            position: "absolute",
            right: "clamp(16px, 3vw, 48px)",
            bottom: 80,
            zIndex: 3,
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 9,
              color: "rgba(232,213,176,0.3)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              writingMode: "vertical-rl",
            }}
          >
            {hero.scrollLabel}
          </span>
          <span
            className="ods-scroll-line"
            style={{
              width: 1,
              height: 48,
              background:
                "linear-gradient(to bottom, rgba(232,213,176,0.45), transparent)",
            }}
          />
        </motion.div>

        {/* Hero content — bottom-anchored */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            padding: "0 clamp(20px, 4vw, 48px) clamp(48px, 8vh, 96px)",
          }}
        >
          {/* Kicker — slides in from left, real SVG dot */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: EASE_OUT }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 24,
              fontFamily: fonts.mono,
              fontSize: 9,
              color: "rgba(232,213,176,0.6)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            <span
              aria-hidden="true"
              className="ods-pulse"
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: palette.rose,
                flexShrink: 0,
                boxShadow: `0 0 8px ${palette.rose}55`,
              }}
            />
            {hero.kicker}
          </motion.div>

          {/* Title line 1 — upright ivory, weight 400.
              Each word mask-reveals from below with stagger. */}
          <WordReveal
            as="h1"
            text={hero.titleTop}
            delay={0.85}
            stagger={0.08}
            duration={1.05}
            style={{
              fontFamily: fonts.display,
              fontSize: "clamp(56px, 12vw, 160px)",
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: palette.ivory,
              marginBottom: 4,
            }}
          />

          {/* Title line 2 — italic champagne, weight 300.
              Same mask-reveal, offset by upright-line duration.
              Italic at 300 reads as full weight thanks to slant. */}
          <div style={{ position: "relative", marginBottom: 40 }}>
            <WordReveal
              text={hero.titleItalic}
              delay={1.15}
              stagger={0.08}
              duration={1.05}
              style={{
                fontFamily: fonts.display,
                fontSize: "clamp(56px, 12vw, 160px)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                color: palette.champagne,
              }}
            />
            {/* Hairline that draws beneath the italic title */}
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 1.55, ease: EASE_OUT }}
              style={{
                display: "block",
                position: "absolute",
                bottom: -6,
                left: 0,
                width: "min(260px, 38vw)",
                height: 1,
                background: `linear-gradient(to right, ${palette.champagne} 0%, rgba(232,213,176,0) 100%)`,
                transformOrigin: "0% 50%",
              }}
            />
          </div>

          {/* Bottom row — lede + stats (stacks on mobile) */}
          <div
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between"
            style={{ gap: 40 }}
          >
            {/* Lede — fades up */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.75, ease: EASE_OUT }}
              style={{
                maxWidth: 460,
                fontFamily: fonts.body,
                fontSize: 15,
                fontWeight: 300,
                color: "rgba(250,246,239,0.64)",
                lineHeight: 1.8,
              }}
            >
              {renderLede(hero.lede, hero.ledeEm, palette.champagne, fonts)}
            </motion.p>

            {/* Stats — each scales in + y-translates with stagger.
                Smaller than v1 (36px vs 48px) + weight 400 so the
                title owns the visual hierarchy. Dividers draw in
                as scaleY hairlines for a tactile reveal. */}
            <div className="flex" style={{ gap: 0, flexShrink: 0 }}>
              {hero.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.75,
                    delay: 1.95 + i * 0.12,
                    ease: EASE_OUT,
                  }}
                  style={{
                    position: "relative",
                    padding: "0 clamp(14px, 2.2vw, 28px)",
                    paddingLeft: i === 0 ? 0 : "clamp(14px, 2.2vw, 28px)",
                  }}
                >
                  {/* Animated divider (scaleY) — only between stats */}
                  {i > 0 && (
                    <motion.span
                      aria-hidden="true"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{
                        duration: 0.55,
                        delay: 1.95 + i * 0.12,
                        ease: EASE_OUT,
                      }}
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "8%",
                        bottom: "8%",
                        width: 1,
                        background: "rgba(232,213,176,0.22)",
                        transformOrigin: "50% 50%",
                      }}
                    />
                  )}
                  <div
                    style={{
                      fontFamily: fonts.display,
                      fontSize: "clamp(26px, 3.2vw, 38px)",
                      fontWeight: 400,
                      color: palette.champagne,
                      lineHeight: 1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {/* "10" counts up for a subtle mechanical beat.
                        Other values (1M, 6 MO) fade-scale in above. */}
                    {s.countTo ? (
                      <CountUp
                        target={s.countTo}
                        delay={1.95 + i * 0.12 + 0.05}
                        duration={1}
                      />
                    ) : (
                      s.num
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 9,
                      color: "rgba(232,213,176,0.42)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginTop: 6,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   Renders lede paragraph with champagne-italic phrase inline.
   Falls back to plain string if the phrase isn't present —
   data edits won't silently break styling.
   ────────────────────────────────────────────────────────── */
function renderLede(lede, emPhrase, champagne, fonts) {
  if (!emPhrase || !lede?.includes(emPhrase)) return lede;
  const [before, after] = lede.split(emPhrase);
  return (
    <>
      {before}
      <em
        style={{
          // Explicit display + size so the phrase reads as a real
          // anchor against DM Sans 15px body. Cormorant italic at
          // weight 700 + 1.1em + champagne is unambiguously the
          // visual emphasis the lede needs.
          display: "inline",
          color: champagne,
          fontStyle: "italic",
          fontFamily: `${fonts.display}, Georgia, serif`,
          fontWeight: 700,
          fontSize: "1.1em",
          letterSpacing: "0.005em",
          // Subtle text-shadow keeps it legible if the bg gradient
          // happens to land near the same luminance.
          textShadow: "0 0 12px rgba(13,10,9,0.45)",
          whiteSpace: "nowrap",
        }}
      >
        {emPhrase}
      </em>
      {after}
    </>
  );
}

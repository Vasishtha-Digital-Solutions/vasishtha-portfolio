import { motion } from "framer-motion";
import { Gem, Baby, Flower2, Building2 } from "lucide-react";

/* ═════════════════════════════════════════════════════════════
   ONE DAY STORIES — WORK (Section 3)
   The light/ivory editorial block — the page's colour pivot.
   Three sub-sections stacked:

   A. Editorial header (split 2-col grid)
      ─ Left:  mono eyebrow "02 · The Work" with hairline
               sweep, display title "Emotion that /converts/"
               (italic burgundy on the emphasis word)
      ─ Right: intro paragraph in warm-dark body copy

   B. Mosaic + approach (asymmetric 1.2fr / 0.8fr grid;
                         photo column internally 1.6fr/1fr)
      ─ Left:  two stacked photos, feature+support proportions,
               hover scale/saturate + mono ivory label badges
      ─ Right: 4 numbered approach items, rose accent numbers,
               bold titles, tight 2-line body copy

   C. Services row (weighted 1.5fr / 1fr / 1fr / 1fr)
      ─ Weddings = core service → wider tile + mono "Core" badge
      ─ Lucide icons (Gem / Baby / Flower2 / Building2), stroke 1.6
      ─ Hover: entire cell inverts to ink + champagne
        (background transition, text + icon recolour)

   Reveals
   ─ Eyebrow hairline sweeps L→R, title word-masks reveal,
     intro fades up. Each subsection is scroll-triggered via
     whileInView so they fire in sequence as the user scrolls.
   ─ Photos fade in with opacity + scale (1.08 → 1) + y.
   ─ Approach items stagger in with y + x translate.
   ─ Service tiles stagger in with y + light scale.

   Accessibility
   ─ Headings use semantic <h2>, approach is a <ul>. Hover
     colour changes meet AA contrast in both states
     (black ↔ ivory, champagne > ivory/0.4 sub-text).
   ═════════════════════════════════════════════════════════════ */

const EASE_OUT = [0.22, 1, 0.36, 1];

// Lucide icon map — keyed by data.icon strings.
const ICONS = {
  gem: Gem,
  baby: Baby,
  flower: Flower2,
  building: Building2,
};

// Word-mask reveal driven by VARIANTS (parent → children).
// Previous version had per-word whileInView, which failed when
// each motion.span's transform + overflow:hidden parent confused
// the IntersectionObserver. The parent now triggers once via
// whileInView and every child word animates in sequence through
// shared variants — bulletproof.
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
  amount = 0.25,
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
            paddingBottom: "0.08em",
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

export default function OneDayWork({ data }) {
  const { work, palette, fonts } = data;

  return (
    <>
      {/* Scoped CSS — hover states (inline styles can't do :hover),
          + reveal helpers. Classname prefixed ods-wk- so they never
          collide with other sections. */}
      <style>{`
        .ods-wk-photo img {
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                      filter 0.5s ease;
        }
        .ods-wk-photo:hover img {
          transform: scale(1.04);
          filter: saturate(1) brightness(1) !important;
        }

        .ods-wk-ai {
          transition: padding-left 0.35s ease;
        }
        /* Subtler hover shift (6px, was 10px) — announces
           interactivity without being pushy. */
        .ods-wk-ai:hover { padding-left: 6px; }

        .ods-wk-sr {
          transition: background 0.45s ease;
          cursor: default;
        }
        .ods-wk-sr:hover { background: ${palette.black}; }
        .ods-wk-sr:hover .ods-wk-sr-title,
        .ods-wk-sr:hover .ods-wk-sr-icon { color: ${palette.champagne}; }
        .ods-wk-sr:hover .ods-wk-sr-desc {
          color: rgba(250,246,239,0.45);
        }
      `}</style>

      <section
        style={{
          background: palette.ivory,
          color: palette.black,
          position: "relative",
          zIndex: 3,
        }}
      >
        {/* ───────── A. EDITORIAL HEADER ───────── */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "1fr",
            gap: 40,
            padding: "clamp(64px, 10vw, 112px) clamp(20px, 4vw, 48px) clamp(56px, 8vw, 88px)",
            borderBottom: "1px solid rgba(13,10,9,0.10)",
          }}
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ gap: "clamp(32px, 5vw, 80px)", alignItems: "end" }}
          >
            {/* Left — eyebrow + title */}
            <div>
              {/* Eyebrow — clean, no hairline (moved beneath
                  the italic title for better visual balance) */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  color: palette.warmGray,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}
              >
                {work.eyebrow}
              </motion.div>

              {/* Title — word-mask reveal both lines, with a
                  burgundy hairline drawing in BENEATH the italic
                  word as a draw-under emphasis (echoes the hero's
                  champagne hairline under "Has a Story.") */}
              <h2
                style={{
                  fontFamily: fonts.display,
                  fontSize: "clamp(44px, 6vw, 80px)",
                  fontWeight: 600,
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  color: palette.black,
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <WordReveal
                  text={work.title}
                  delay={0.1}
                  duration={1}
                  style={{ display: "block" }}
                />
                <span
                  style={{
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  <WordReveal
                    text={work.titleEm}
                    delay={0.3}
                    duration={1}
                    style={{
                      display: "block",
                      fontStyle: "italic",
                      fontWeight: 300,
                      color: palette.burgundy,
                    }}
                  />
                  {/* Burgundy hairline drawing under italic word */}
                  <motion.span
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: 0.6, ease: EASE_OUT }}
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: -8,
                      height: 2,
                      width: "min(220px, 60%)",
                      background: `linear-gradient(to right, ${palette.burgundy} 0%, rgba(107,30,46,0) 100%)`,
                      transformOrigin: "0% 50%",
                      display: "block",
                    }}
                  />
                </span>
              </h2>
            </div>

            {/* Right — intro paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: 0.25, ease: EASE_OUT }}
              style={{
                fontFamily: fonts.body,
                fontSize: 15,
                fontWeight: 300,
                color: "#5A5248",
                lineHeight: 1.85,
                alignSelf: "end",
              }}
            >
              {work.intro}
            </motion.p>
          </div>
        </div>

        {/* ───────── B. MOSAIC + APPROACH ───────── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]"
          style={{
            minHeight: 600,
            borderBottom: "1px solid rgba(13,10,9,0.10)",
          }}
        >
          {/* Photo mosaic (left) — REDESIGNED as a magazine-spread
              diptych. Two portrait-cropped photos sit side-by-side
              on cream paper with the second frame offset down for
              an editorial asymmetric rhythm. Each photo carries a
              mono caption below (frame number + label) instead of
              an overlay — reads as a contact-sheet annotation.
              Soft drop-shadows lift the prints off the page. */}
          <div
            style={{
              background: palette.ivory,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(20px, 3vw, 44px)",
              padding:
                "clamp(36px, 5vw, 72px) clamp(20px, 3vw, 48px) clamp(48px, 6vw, 84px)",
              alignItems: "start",
            }}
          >
            {work.mosaic.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 1,
                  delay: 0.15 + i * 0.2,
                  ease: EASE_OUT,
                }}
                style={{
                  // Second frame offset down — gives the diptych
                  // a deliberate, hand-laid editorial rhythm
                  // instead of perfect symmetry.
                  marginTop:
                    i === 1 ? "clamp(40px, 8vh, 110px)" : 0,
                }}
              >
                <div
                  className="ods-wk-photo"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    aspectRatio: "2 / 3",
                    background: "rgba(13,10,9,0.35)", // load fallback
                    // Soft, low drop-shadow — prints feel placed,
                    // not embedded. Two layers: tight rim + loose lift.
                    boxShadow:
                      "0 26px 60px -8px rgba(13,10,9,0.18), 0 4px 14px rgba(13,10,9,0.06)",
                  }}
                >
                  <img
                    src={m.src}
                    alt={m.alt}
                    loading="lazy"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "saturate(0.88) brightness(0.95)",
                    }}
                  />
                </div>
                {/* Mono caption below — frame number + label.
                    Reads like a film contact-sheet annotation. */}
                <div
                  style={{
                    marginTop: 18,
                    fontFamily: fonts.mono,
                    fontSize: 10,
                    color: palette.warmGray,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span style={{ color: palette.rose }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ opacity: 0.4 }}>—</span>
                  <span>{m.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Approach (right) — 4 numbered items stacked */}
          <ul
            style={{
              listStyle: "none",
              padding: "clamp(36px, 5vw, 60px) clamp(20px, 4vw, 48px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: 0,
            }}
          >
            {work.approach.map((a, i) => (
              <motion.li
                key={a.n}
                className="ods-wk-ai"
                initial={{ opacity: 0, y: 18, x: -8 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.12,
                  ease: EASE_OUT,
                }}
                style={{
                  padding: "24px 0",
                  borderBottom:
                    i < work.approach.length - 1
                      ? "1px solid rgba(13,10,9,0.08)"
                      : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 9,
                    color: palette.rose,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  {a.n}
                </div>
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 22,
                    fontWeight: 600,
                    color: palette.black,
                    lineHeight: 1.15,
                    marginBottom: 10,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {a.title}
                </div>
                <div
                  style={{
                    fontFamily: fonts.body,
                    fontSize: 13,
                    fontWeight: 300,
                    color: "#6B6359",
                    lineHeight: 1.75,
                  }}
                >
                  {a.body}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* ───────── C. SERVICES ROW ─────────
            Weighted grid: Weddings gets 1.5fr (core service),
            the other three share 1fr each. Honours the case
            study's narrative — Weddings is what this campaign
            was actually about; Kids/Maternity/Brands are
            supporting services. Equal columns misrepresented
            the business hierarchy. */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"
          style={{
            borderTop: "1px solid rgba(13,10,9,0.10)",
            borderBottom: "1px solid rgba(13,10,9,0.10)",
          }}
        >
          {work.services.map((s, i) => {
            const Icon = ICONS[s.icon] || Gem;
            const isCore = !!s.core;
            return (
              <motion.div
                key={s.title}
                className="ods-wk-sr"
                initial={{ opacity: 0, y: 22, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.1,
                  ease: EASE_OUT,
                }}
                style={{
                  padding: "clamp(32px, 4vw, 48px) clamp(24px, 3vw, 36px)",
                  borderRight:
                    i < work.services.length - 1
                      ? "1px solid rgba(13,10,9,0.10)"
                      : "none",
                  position: "relative",
                }}
              >
                {/* Core-service tag — top-right mono badge on
                    the anchor service only. Very small, very
                    quiet. Reads as a documentary annotation. */}
                {isCore && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 24,
                      fontFamily: fonts.mono,
                      fontSize: 9,
                      color: palette.rose,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: "3px 8px",
                      border: `1px solid rgba(196,86,106,0.35)`,
                      borderRadius: 2,
                    }}
                  >
                    Core
                  </span>
                )}

                <div
                  className="ods-wk-sr-icon"
                  aria-hidden="true"
                  style={{
                    color: palette.black,
                    marginBottom: 18,
                    transition: "color 0.3s ease",
                  }}
                >
                  <Icon size={30} strokeWidth={1.6} />
                </div>
                <div
                  className="ods-wk-sr-title"
                  style={{
                    fontFamily: fonts.display,
                    // Slightly larger on the core service tile
                    // so it reads as the anchor at a glance.
                    fontSize: isCore ? 26 : 22,
                    fontWeight: 600,
                    color: palette.black,
                    marginBottom: 10,
                    letterSpacing: "-0.005em",
                    transition: "color 0.3s ease",
                  }}
                >
                  {s.title}
                </div>
                <div
                  className="ods-wk-sr-desc"
                  style={{
                    fontFamily: fonts.body,
                    fontSize: 13,
                    fontWeight: 300,
                    color: "#6B6359",
                    lineHeight: 1.7,
                    transition: "color 0.3s ease",
                  }}
                >
                  {s.body}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}

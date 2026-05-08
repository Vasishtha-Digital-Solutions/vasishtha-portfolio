import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";

/* ═════════════════════════════════════════════════════════════
   HANDOVER EXPERT — HERO (Section 1)
   Exact visual port of handover_expert_v2.html (Case 006)
   ─ Fixed 52px top nav: star mark + wordmark, mono ticker,
     blinking gold dot + CS-006 tag. Ink bg / gold bottom rule.
   ─ Desktop-only crosshair cursor (gated by pointer:fine media
     query). No mousemove listener runs on touch devices.
   ─ Blueprint grid background + top ruler with px marks
     (60 ticks desktop, 30 tablet, hidden mobile).
   ─ Left 55%: case-label chip in [brackets], GIANT 3-line
     display type (solid / outlined / gold + underline),
     bottom hairline bar with lede + two mini stats.
   ─ Right 45%: Property Inspection Report panel (gold header,
     6 pass/warn/fail rows, red defect count footer) + two
     corner-bracketed annotation cards.
   ─ Framer Motion powers scroll-style reveals; CSS handles
     the blink keyframe on the live-status dot.
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

const fadeUp = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay, ease: EASE },
});

const fadeIn = (delay = 0, duration = 0.9) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration, delay, ease: EASE },
});

// Hook — returns true only on fine pointer (mouse) devices.
// Listens for changes so the crosshair toggles correctly
// when a user plugs in a mouse to a tablet, etc.
function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(pointer: fine)");
    const sync = () => setFine(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);
    return () => mq.removeEventListener?.("change", sync);
  }, []);
  return fine;
}

// Desktop-only crosshair + ring that tracks the mouse.
// Mounted conditionally so touch devices pay zero cost.
function CrosshairCursor({ gold }) {
  const chRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (chRef.current) {
        chRef.current.style.left = e.clientX + "px";
        chRef.current.style.top = e.clientY + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + "px";
        ringRef.current.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        ref={chRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          width: 24,
          height: 24,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* vertical bar */}
        <span
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: 1,
            height: "100%",
            background: gold,
          }}
        />
        {/* horizontal bar */}
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            height: 1,
            width: "100%",
            background: gold,
          }}
        />
      </div>
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9998,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1px solid rgba(245,194,0,0.4)",
          transform: "translate(-50%, -50%)",
          transition: "all 0.15s ease",
        }}
      />
    </>
  );
}

// Status badge (pass / warn / fail) — matches CSS .st-pass / .st-warn / .st-fail
function StatusBadge({ status, label, palette }) {
  const styles = {
    pass: {
      bg: "rgba(22,163,74,0.15)",
      fg: palette.greenLight,
    },
    warn: {
      bg: "rgba(245,194,0,0.15)",
      fg: palette.gold,
    },
    fail: {
      bg: "rgba(220,38,38,0.15)",
      fg: palette.redLight,
    },
  }[status];

  return (
    <span
      style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.06em",
        padding: "3px 8px",
        borderRadius: 2,
        background: styles.bg,
        color: styles.fg,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

// Corner bracket for annotation boxes (one per corner)
function Corner({ pos, gold }) {
  const map = {
    tl: { top: -1, left: -1, borderWidth: "1px 0 0 1px" },
    tr: { top: -1, right: -1, borderWidth: "1px 1px 0 0" },
    bl: { bottom: -1, left: -1, borderWidth: "0 0 1px 1px" },
    br: { bottom: -1, right: -1, borderWidth: "0 1px 1px 0" },
  };
  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        width: 8,
        height: 8,
        borderColor: gold,
        borderStyle: "solid",
        ...map[pos],
      }}
    />
  );
}

export default function HandoverHero({ data }) {
  const { nav, hero, palette, fonts } = data;
  const finePointer = useFinePointer();

  // Track viewport width so we can tune ruler tick count /
  // hide entirely on mobile without touching the DOM once.
  const [vw, setVw] = useState(
    typeof window === "undefined" ? 1280 : window.innerWidth
  );
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const tickCount = vw >= 1024 ? 60 : vw >= 640 ? 30 : 0;
  const labelEvery = vw >= 1024 ? 5 : 10;

  // Pre-compute ruler ticks array once per tickCount change
  const rulerTicks = useMemo(() => {
    return Array.from({ length: tickCount }, (_, i) => ({
      i,
      tall: i % 5 === 0,
      label: i % labelEvery === 0 ? i * 80 + "px" : null,
    }));
  }, [tickCount, labelEvery]);

  return (
    <>
      {/* Scoped CSS — blink keyframe for the live status dot */}
      <style>{`
        @keyframes he-blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .he-blink-dot { animation: he-blink 2s ease-in-out infinite; }

        /* Hide native cursor on fine-pointer devices so the
           custom crosshair reads cleanly. Touch devices keep it. */
        @media (pointer: fine) {
          body.he-hide-cursor, body.he-hide-cursor * { cursor: none !important; }
        }
      `}</style>

      {/* Toggle native cursor only on fine-pointer devices.
          We add/remove a class on <body> so it applies globally. */}
      {finePointer && <HideNativeCursor />}
      {finePointer && <CrosshairCursor gold={palette.gold} />}

      {/* ─── Fixed 52px nav ─── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          height: 52,
          display: "flex",
          alignItems: "stretch",
          background: palette.ink,
          borderBottom: `2px solid ${palette.gold}`,
          fontFamily: fonts.cond,
        }}
      >
        {/* Brand cell — back link + star + wordmark */}
        <Link
          to="/#portfolio"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "0 clamp(16px, 3vw, 28px)",
            borderRight: "1px solid rgba(255,255,255,0.1)",
            textDecoration: "none",
          }}
        >
          <ArrowLeft
            size={14}
            color="rgba(255,255,255,0.55)"
            style={{ marginRight: 4 }}
          />
          {/* 10-pointed gold star */}
          <span
            aria-hidden="true"
            style={{
              width: 22,
              height: 22,
              background: palette.gold,
              flexShrink: 0,
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          />
          <span
            style={{
              fontFamily: fonts.cond,
              fontWeight: 700,
              fontSize: 16,
              color: "#fff",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {nav.brand}
          </span>
        </Link>

        {/* Center ticker — hidden below tablet */}
        <div
          className="hidden md:flex"
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 10,
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.1em",
              whiteSpace: "nowrap",
            }}
          >
            CASE STUDY —{" "}
            <span style={{ color: palette.gold }}>{nav.tickerAccent}</span> —
            HYDERABAD
          </span>
        </div>

        {/* Flex spacer on mobile so right cell pushes to edge */}
        <div className="flex md:hidden" style={{ flex: 1 }} />

        {/* Right — blinking live dot + tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0 clamp(16px, 3vw, 28px)",
            borderLeft: "1px solid rgba(255,255,255,0.1)",
            gap: 12,
          }}
        >
          <span
            aria-hidden="true"
            className="he-blink-dot"
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: palette.gold,
            }}
          />
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 10,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.08em",
            }}
          >
            {nav.tag}
          </span>
        </div>
      </nav>

      {/* ─── HERO STAGE ─── */}
      <section
        style={{
          minHeight: "100vh",
          paddingTop: 52,
          position: "relative",
          overflow: "hidden",
          background: palette.ink,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Blueprint grid — dual-scale (80px major, 16px minor) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage: `
              linear-gradient(rgba(245,194,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,194,0,0.05) 1px, transparent 1px),
              linear-gradient(rgba(245,194,0,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,194,0,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
          }}
        />

        {/* Top ruler with px marks — hidden on mobile */}
        {tickCount > 0 && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 52,
              left: 0,
              right: 0,
              height: 24,
              zIndex: 1,
              borderBottom: "1px solid rgba(245,194,0,0.15)",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            {rulerTicks.map(({ i, tall, label }) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  borderRight: "1px solid rgba(245,194,0,0.15)",
                  height: tall ? 16 : 8,
                  position: "relative",
                }}
              >
                {label && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 18,
                      left: 2,
                      fontFamily: fonts.mono,
                      fontSize: 8,
                      color: "rgba(245,194,0,0.3)",
                      letterSpacing: "0.06em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Content grid — collapses to single column on mobile */}
        <div
          className="relative flex flex-col lg:flex-row"
          style={{ zIndex: 2, flex: 1 }}
        >
          {/* ── LEFT: giant type ── */}
          <div
            className="w-full lg:w-[55%]"
            style={{
              padding: "clamp(32px, 6vw, 60px) clamp(20px, 4vw, 48px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRight: "1px solid rgba(245,194,0,0.12)",
              minHeight: "calc(100vh - 52px)",
            }}
          >
            {/* Case label chip with [brackets] */}
            <motion.div
              {...fadeUp(0)}
              style={{
                fontFamily: fonts.mono,
                fontSize: 10,
                color: "rgba(245,194,0,0.6)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ color: "rgba(245,194,0,0.3)" }}>[</span>
              {hero.caseLabel}
              <span style={{ color: "rgba(245,194,0,0.3)" }}>]</span>
            </motion.div>

            {/* GIANT 3-line display type */}
            <motion.h1
              {...fadeUp(0.12)}
              style={{
                fontFamily: fonts.cond,
                fontSize: "clamp(64px, 13vw, 185px)",
                fontWeight: 900,
                lineHeight: 0.85,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                color: "#fff",
                margin: "auto 0",
              }}
            >
              {hero.displayLine1}
              <br />
              {/* Line 2 — outlined */}
              <span
                style={{
                  display: "block",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                }}
              >
                {hero.displayLine2}
              </span>
              {/* Line 3 — gold + underline bar */}
              <span
                style={{
                  display: "block",
                  color: palette.gold,
                  position: "relative",
                }}
              >
                {hero.displayLine3}
                <motion.span
                  initial={{ scaleX: 0, transformOrigin: "0% 50%" }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    height: 3,
                    width: "100%",
                    background: palette.gold,
                    display: "block",
                  }}
                />
              </span>
            </motion.h1>

            {/* Bottom bar — lede + 2 stats */}
            <motion.div
              {...fadeUp(0.24)}
              className="flex flex-col md:flex-row"
              style={{
                borderTop: "1px solid rgba(245,194,0,0.12)",
                paddingTop: 28,
                gap: 0,
              }}
            >
              <p
                className="md:border-r"
                style={{
                  flex: 1,
                  paddingRight: 32,
                  borderColor: "rgba(245,194,0,0.12)",
                  fontSize: 14,
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.75,
                  marginBottom: 20,
                  fontFamily: fonts.body,
                }}
              >
                {hero.lede}
              </p>
              <div
                className="flex"
                style={{ gap: 0, paddingLeft: 0 }}
              >
                {hero.leftStats.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      paddingRight: 32,
                      paddingLeft: i === 0 ? 0 : 32,
                      borderRight:
                        i < hero.leftStats.length - 1
                          ? "1px solid rgba(245,194,0,0.12)"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: fonts.cond,
                        fontSize: 40,
                        fontWeight: 800,
                        color: palette.gold,
                        lineHeight: 1,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 9,
                        color: "rgba(255,255,255,0.35)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginTop: 4,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Inspection Report Panel + Annotations ── */}
          <motion.div
            {...fadeIn(0.25)}
            className="w-full lg:w-[45%]"
            style={{
              padding: "clamp(32px, 6vw, 60px) clamp(20px, 4vw, 48px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            {/* Report panel */}
            <div
              style={{
                background: "rgba(240,237,230,0.05)",
                border: "1px solid rgba(245,194,0,0.15)",
                borderRadius: 0,
                flex: 1,
                overflow: "hidden",
              }}
            >
              {/* Head — gold bar */}
              <div
                style={{
                  background: palette.gold,
                  padding: "12px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.cond,
                    fontSize: 13,
                    fontWeight: 800,
                    color: palette.ink,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {hero.report.title}
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 9,
                    color: "rgba(10,14,23,0.55)",
                    letterSpacing: "0.08em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {hero.report.id}
                </span>
              </div>

              {/* Body — rows */}
              <div style={{ padding: 16 }}>
                {hero.report.rows.map((r, i) => (
                  <motion.div
                    key={r.n}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.07,
                      ease: EASE,
                    }}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "28px 1fr auto",
                      gap: 10,
                      alignItems: "center",
                      padding: "9px 0",
                      borderBottom:
                        i < hero.report.rows.length - 1
                          ? "1px solid rgba(245,194,0,0.08)"
                          : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 9,
                        color: "rgba(245,194,0,0.35)",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {r.n}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        color: "rgba(255,255,255,0.75)",
                        fontWeight: 400,
                        fontFamily: fonts.body,
                      }}
                    >
                      {r.name}
                    </span>
                    <StatusBadge
                      status={r.status}
                      label={r.badge}
                      palette={palette}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Footer — red defect total */}
              <div
                style={{
                  padding: "10px 18px",
                  borderTop: "1px solid rgba(245,194,0,0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 9,
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {hero.report.footerLabel}
                </span>
                <span
                  style={{
                    fontFamily: fonts.cond,
                    fontSize: 24,
                    fontWeight: 800,
                    color: palette.redLight,
                  }}
                >
                  {hero.report.footerValue}
                </span>
              </div>
            </div>

            {/* Annotation row — 2 corner-bracketed cards */}
            <div className="flex" style={{ gap: 12 }}>
              {hero.annotations.map((a, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.55 + i * 0.1)}
                  style={{
                    flex: 1,
                    border: "1px solid rgba(245,194,0,0.2)",
                    padding: "14px 16px",
                    position: "relative",
                  }}
                >
                  <Corner pos="tl" gold={palette.gold} />
                  <Corner pos="tr" gold={palette.gold} />
                  <Corner pos="bl" gold={palette.gold} />
                  <Corner pos="br" gold={palette.gold} />
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 9,
                      color: "rgba(245,194,0,0.6)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {a.label}
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.cond,
                      fontSize: 32,
                      fontWeight: 800,
                      color: "#fff",
                      lineHeight: 1,
                    }}
                  >
                    {a.value}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.45)",
                      marginTop: 4,
                      fontWeight: 300,
                      fontFamily: fonts.body,
                    }}
                  >
                    {a.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* Tiny helper — adds/removes .he-hide-cursor on <body>
   only while the hero is mounted. Keeps native cursor
   elsewhere in the app unaffected. */
function HideNativeCursor() {
  useEffect(() => {
    document.body.classList.add("he-hide-cursor");
    return () => document.body.classList.remove("he-hide-cursor");
  }, []);
  return null;
}

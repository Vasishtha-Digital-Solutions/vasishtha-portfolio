import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ═════════════════════════════════════════════════════════════
   YWI CASE STUDY — SECTION 04 · THE RESULTS
   Alt bg (palette.bg2) with a centred-high yellow radial glow.
   Chapter header, two-line h2 (yellow big-number accent), a
   weekly growth bar chart (7 bars, last one yellow + "NOW")
   and a 3-card stat grid below. First card animates a counter
   from 0 → 10,500 with Indian-locale commas; the other two are
   static. All enter animations are viewport-triggered.
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

export default function YWIResults({ data }) {
  const { results, palette } = data;

  const reveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.08 },
    transition: { duration: 1, ease: EASE },
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "clamp(5rem, 9vw, 8rem) 5vw",
        background: palette.bg2,
        color: palette.cream,
      }}
    >
      {/* ─── Soft yellow radial glow (top-centre) ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 400,
          background:
            "radial-gradient(ellipse at center, rgba(255,200,60,0.05) 0%, transparent 60%)",
        }}
      />

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
            {results.chapter.num}
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
            {results.chapter.label.map((ln, i) => (
              <span key={i} className="block">
                {ln}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ─── Headline — "From zero to 10,500 followers. Without spending a single rupee." ─── */}
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
          {results.headlineStart}{" "}
          <span style={{ color: palette.yellow }}>
            {results.headlineAccent}
          </span>
          <br />
          {results.headlineEnd}
        </motion.h2>

        {/* ─── Bar chart ─── */}
        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.25 }}
          className="relative"
          style={{
            maxWidth: 700,
            margin: "2.5rem auto 0",
          }}
        >
          <div
            className="flex items-end"
            style={{
              gap: 8,
              height: 220,
              paddingBottom: "2rem",
              borderBottom: `1px solid ${palette.line}`,
            }}
          >
            {results.bars.map((b, i) => (
              <Bar key={b.week} bar={b} index={i} palette={palette} />
            ))}
          </div>
          {/* Axis labels */}
          <div
            className="flex justify-between"
            style={{
              marginTop: 8,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              color: palette.cream3,
              letterSpacing: "0.15em",
            }}
          >
            <span>{results.axis.left}</span>
            <span>{results.axis.right}</span>
          </div>
        </motion.div>

        {/* ─── 3-card result grid ─── */}
        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.4 }}
          className="grid gap-4 mx-auto"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            marginTop: "3rem",
            maxWidth: 700,
          }}
        >
          {results.stats.map((s, i) => (
            <ResultCard key={i} stat={s} index={i} palette={palette} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════════════════════
   Bar — grows from scaleY(0) to scaleY(1) when it enters view.
   We scale from the bottom origin so bars "grow up" into place.
   ═════════════════════════════════════════════════════════════ */
function Bar({ bar, index, palette }) {
  return (
    <div
      className="relative flex-1"
      style={{
        height: `${bar.height}%`,
        minWidth: 0,
      }}
    >
      {/* Value label above the bar */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.5,
          delay: 0.4 + index * 0.08 + 0.6, // after bar rises
          ease: EASE,
        }}
        style={{
          position: "absolute",
          top: -22,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          color: bar.highlight ? palette.cream : palette.yellow,
          fontWeight: 500,
          whiteSpace: "nowrap",
        }}
      >
        {bar.value}
      </motion.div>

      {/* The bar itself — scaleY from the bottom */}
      <motion.div
        className="w-full h-full origin-bottom"
        style={{
          background: bar.highlight ? palette.yellow : palette.surface,
          borderRadius: "3px 3px 0 0",
        }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.9,
          delay: 0.4 + index * 0.08,
          ease: EASE,
        }}
      >
        {/* Rotated week label inside the bar bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%) rotate(-90deg)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 9,
            letterSpacing: "0.15em",
            color: bar.highlight ? palette.bg : palette.cream3,
            whiteSpace: "nowrap",
          }}
        >
          {bar.week}
        </div>
      </motion.div>
    </div>
  );
}

/* ═════════════════════════════════════════════════════════════
   ResultCard — yellow-glow tinted card; hover lifts -4px.
   If `kind === "counter"`, animate 0 → target (IN locale commas)
   over 1800ms ease-out the first time it enters the viewport.
   ═════════════════════════════════════════════════════════════ */
function ResultCard({ stat, index, palette }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: 0.5 + index * 0.12,
        ease: EASE,
      }}
      animate={{ y: hover ? -4 : 0 }}
      className="text-center"
      style={{
        padding: "2rem 1rem",
        border: "1px solid rgba(255,200,60,0.15)",
        borderRadius: 6,
        background: palette.yglow,
        transition: "transform 0.3s",
      }}
    >
      <p
        className="m-0"
        style={{
          fontFamily: "'Outfit', system-ui, sans-serif",
          fontSize: "clamp(38px, 5vw, 52px)",
          fontWeight: 800,
          color: palette.yellow,
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {stat.kind === "counter" ? (
          <Counter target={stat.target} comma={stat.comma} />
        ) : (
          stat.value
        )}
      </p>
      <p
        className="m-0"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          letterSpacing: "0.22em",
          color: palette.cream3,
          marginTop: 12,
        }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

/* ═════════════════════════════════════════════════════════════
   Counter — ticks 0 → target over 1800ms with a cubic ease-out.
   Formats with Indian-locale commas when `comma` is true
   (10,500 → "10,500", lakh-style boundaries would apply at
   100000+). Only runs when the element first enters view.
   ═════════════════════════════════════════════════════════════ */
function Counter({ target, comma = false, duration = 1800 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let rafId;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // cubic ease-out
      const v = Math.floor(target * eased);
      setDisplay(v);
      if (p < 1) rafId = requestAnimationFrame(tick);
      else setDisplay(target);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, duration]);

  const text = comma ? display.toLocaleString("en-IN") : String(display);
  return <span ref={ref}>{text}</span>;
}

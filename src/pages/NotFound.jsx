// ──────────────────────────────────────────────────────────────
// 404 Not Found — Standalone page
// Matches Home aesthetic: dark canvas · grid · noise · ambient
// orange/amber glows · mouse-tracking orb · masked "404" reveal ·
// shimmer CTA back to home · ghost CTA to /projects.
// Motion: same spring + clip-path pattern as HomeHero.
// ──────────────────────────────────────────────────────────────

import { useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowUpRight, MoveLeft } from "lucide-react"

const p = {
  bg: "#000000",
  orange: "#F18F00",
  amber: "#FFB24C",
  white: "#ffffff",
  text: "rgba(255,255,255,0.92)",
  textDim: "rgba(255,255,255,0.65)",
  textMuted: "rgba(255,255,255,0.40)",
  textFaint: "rgba(255,255,255,0.22)",
  border: "rgba(255,255,255,0.08)",
}

const EASE = [0.22, 1, 0.36, 1]

// Per-character masked reveal — same spring config as HomeHero wordMask
const charReveal = (i) => ({
  initial: { y: "110%", clipPath: "inset(0 0 100% 0)" },
  animate: { y: "0%", clipPath: "inset(0 0 0% 0)" },
  transition: { type: "spring", stiffness: 80, damping: 16, delay: 0.15 + i * 0.12 },
})

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
})

export default function NotFound() {
  // Mouse-tracking gradient orb — same spring config as HomeHero
  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 - 200 : 0
  )
  const mouseY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 - 200 : 0
  )
  const orbX = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 1.2 })
  const orbY = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 1.2 })

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX - 200)
      mouseY.set(e.clientY - 200)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [mouseX, mouseY])

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
      style={{ background: p.bg, color: p.text }}
    >

      {/* ── Background: grid ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
          maskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
        }}
      />

      {/* ── Background: noise ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.04,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* ── Ambient orb: orange top-left ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: "-15%",
          left: "-15%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${p.orange} 0%, transparent 60%)`,
          filter: "blur(140px)",
          opacity: 0.16,
        }}
      />

      {/* ── Ambient orb: amber bottom-right ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          bottom: "-15%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${p.amber} 0%, transparent 60%)`,
          filter: "blur(130px)",
          opacity: 0.14,
        }}
      />

      {/* ── Mouse-tracking orb ── */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed"
        style={{
          x: orbX,
          y: orbY,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${p.orange}44 0%, transparent 70%)`,
          filter: "blur(80px)",
          zIndex: 1,
        }}
      />

      {/* ── Top-left: back to VDS ── */}
      <motion.div
        {...fadeUp(0.9)}
        className="absolute top-6 left-6 z-20"
      >
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-xs transition-colors hover:text-white"
          style={{
            color: p.textMuted,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.14em",
          }}
        >
          <MoveLeft
            size={13}
            strokeWidth={1.8}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          VDS
        </Link>
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center">

        {/* Kicker */}
        <motion.span
          {...fadeUp(0.05)}
          className="mb-8 inline-flex items-center gap-3"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.26em",
            color: p.orange,
            textTransform: "uppercase",
          }}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full animate-pulse"
            style={{ background: p.orange }}
          />
          Error · 404 · Page Not Found
        </motion.span>

        {/* Giant "404" — per-character masked spring reveal */}
        <div
          className="flex items-end"
          aria-label="404"
          style={{ gap: "clamp(0.1rem, 1vw, 0.6rem)", lineHeight: 1 }}
        >
          {["4", "0", "4"].map((char, i) => (
            <div key={i} style={{ overflow: "hidden" }}>
              <motion.span
                {...charReveal(i)}
                className="block font-black"
                style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: "clamp(6rem, 20vw, 17rem)",
                  letterSpacing: "-0.04em",
                  background:
                    i === 1
                      ? `linear-gradient(135deg, ${p.orange} 0%, ${p.amber} 100%)`
                      : `linear-gradient(160deg, ${p.white} 20%, rgba(255,255,255,0.42) 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {char}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.52, ease: EASE }}
          className="my-8 h-px w-40"
          style={{
            background: `linear-gradient(90deg, transparent, ${p.orange}99, transparent)`,
            transformOrigin: "center",
          }}
        />

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.55)}
          className="max-w-md font-bold leading-[1.1]"
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: "clamp(1.5rem, 3.2vw, 2.4rem)",
            letterSpacing: "-0.03em",
            color: p.white,
          }}
        >
          This page went dark.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.67)}
          className="mt-4 max-w-sm text-base leading-relaxed md:text-[17px]"
          style={{ color: p.textDim }}
        >
          The URL doesn't exist — but your next growth sprint does.
          Let's get you somewhere useful.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.78)}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary — shimmer gradient */}
          <Link
            to="/"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold transition-transform active:scale-[0.97] md:text-[15px]"
            style={{
              background: `linear-gradient(90deg, ${p.orange}, ${p.amber})`,
              color: "#0a0a0a",
              boxShadow: `0 0 0 1px rgba(255,255,255,0.08), 0 12px 40px -12px ${p.orange}bb`,
            }}
          >
            <span className="relative z-[2]">Back to Home</span>
            <ArrowUpRight
              size={15}
              strokeWidth={2.4}
              className="relative z-[2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
            {/* Shimmer streak */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute"
              initial={{ x: "-120%" }}
              animate={{ x: "220%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              style={{
                top: "-20%",
                bottom: "-20%",
                left: 0,
                width: "42%",
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
                transform: "skewX(-20deg)",
              }}
            />
          </Link>

          {/* Secondary — ghost border */}
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-medium transition-all hover:border-white/25 md:text-[15px]"
            style={{
              borderColor: p.border,
              color: p.text,
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            }}
          >
            <span>See our work</span>
            <ArrowUpRight
              size={15}
              strokeWidth={2.3}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>

        {/* Bottom meta strip */}
        <motion.div
          {...fadeUp(0.9)}
          className="mt-16 inline-flex flex-wrap items-center justify-center gap-3"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.22em",
            color: p.textFaint,
            textTransform: "uppercase",
          }}
        >
          <span>VDS</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>Vasishtha Digital Solutions</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span
            className="inline-flex items-center gap-1.5"
            style={{ color: `${p.orange}99` }}
          >
            <span
              className="inline-block h-1 w-1 rounded-full"
              style={{ background: p.orange, opacity: 0.7 }}
            />
            All Systems Operational
          </span>
        </motion.div>
      </div>
    </div>
  )
}

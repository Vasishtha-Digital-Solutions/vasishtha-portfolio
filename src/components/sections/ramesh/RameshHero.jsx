import { useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

const EASE = [0.22, 1, 0.36, 1]
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
})

export default function RameshHero({ data }) {
  const { palette, hero } = data

  useEffect(() => {
    const link = document.createElement("link")
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)
    return () => document.head.removeChild(link)
  }, [])

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: palette.bg }}
    >
      {/* Pink blob — top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px]"
        style={{
          background: `radial-gradient(circle at 80% 20%, rgba(216,27,126,0.13) 0%, transparent 65%)`,
        }}
      />
      {/* Soft pink blob — bottom left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px]"
        style={{
          background: `radial-gradient(circle, rgba(216,27,126,0.07) 0%, transparent 65%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-10">
        {/* Back nav */}
        <motion.div {...reveal(0)}>
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: palette.pink, fontFamily: "'DM Sans', sans-serif" }}
          >
            <ArrowLeft size={16} strokeWidth={2} />
            Back to Work
          </Link>
        </motion.div>

        {/* Main layout */}
        <div className="mt-12 flex flex-col items-center gap-12 lg:mt-16 lg:flex-row lg:items-center lg:gap-16">
          {/* ── Left: text ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Kicker */}
            <motion.div {...reveal(0.1)} className="inline-flex items-center gap-2 mb-6">
              <span
                className="rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-widest"
                style={{
                  borderColor: palette.border,
                  color: palette.pink,
                  background: palette.pinkSoft,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {hero.kicker}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...reveal(0.18)}
              className="font-bold leading-[1.05]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.6rem, 6vw, 5rem)",
                letterSpacing: "-0.02em",
                color: palette.text,
              }}
            >
              {hero.headline}
            </motion.h1>

            {/* Pink accent underline */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="mt-3 h-1 w-24 rounded-full mx-auto lg:mx-0"
              style={{
                background: `linear-gradient(90deg, ${palette.pink}, ${palette.pinkLight})`,
              }}
            />

            {/* Tagline */}
            <motion.p
              {...reveal(0.28)}
              className="mt-6 max-w-lg text-base leading-relaxed mx-auto lg:mx-0"
              style={{
                color: palette.textDim,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {hero.tagline}
            </motion.p>

            {/* Stats */}
            <motion.div
              {...reveal(0.36)}
              className="mt-10 flex flex-wrap justify-center gap-6 lg:justify-start"
            >
              {hero.stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p
                    className="font-bold leading-none"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2rem",
                      color: palette.pink,
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="mt-1 text-xs uppercase tracking-wider"
                    style={{
                      color: palette.textMuted,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: phone mockups ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="relative flex-shrink-0 flex items-end justify-center"
            style={{ height: 540, width: 320 }}
          >
            {/* Back phone — splash screen */}
            <div
              className="absolute"
              style={{
                width: 200,
                bottom: 0,
                right: 10,
                transform: "rotate(6deg) translateY(-30px)",
                zIndex: 1,
                borderRadius: 28,
                background: "#1a1a1a",
                padding: 6,
                boxShadow: "0 32px 80px rgba(216,27,126,0.18), 0 8px 24px rgba(0,0,0,0.15)",
              }}
            >
              <div style={{ borderRadius: 22, overflow: "hidden", height: 380 }}>
                <img
                  src={hero.phones[1]}
                  alt="Splash screen"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Front phone — home screen */}
            <div
              className="absolute"
              style={{
                width: 220,
                bottom: 0,
                left: 10,
                transform: "rotate(-3deg)",
                zIndex: 2,
                borderRadius: 30,
                background: "#1a1a1a",
                padding: 7,
                boxShadow: "0 40px 100px rgba(216,27,126,0.22), 0 12px 32px rgba(0,0,0,0.2)",
              }}
            >
              <div style={{ borderRadius: 24, overflow: "hidden", height: 460 }}>
                <img
                  src={hero.phones[0]}
                  alt="App home screen"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

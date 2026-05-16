import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ═════════════════════════════════════════════════════════════
   LUMERIA CASE STUDY — HERO
   Editorial layout: kicker → wordmark → subtitle → description
                   → stats → live-site CTA → scroll cue
   Right half dominated by composed bottle arrangement.
   ═════════════════════════════════════════════════════════════ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Layered drop-shadows — gives bottles physical weight on the page
const bottleShadow =
  "drop-shadow(0 30px 35px rgba(42,32,18,0.28)) " +
  "drop-shadow(0 12px 18px rgba(42,32,18,0.18)) " +
  "drop-shadow(0 4px 6px rgba(42,32,18,0.12))";

const bottleShadowHover =
  "drop-shadow(0 50px 50px rgba(42,32,18,0.35)) " +
  "drop-shadow(0 20px 25px rgba(42,32,18,0.22)) " +
  "drop-shadow(0 6px 10px rgba(42,32,18,0.15))";

export default function LumeriaHero({ data }) {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-center pt-24 pb-20 md:pt-28 md:pb-24">
      {/* ─── Background layers ─── */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(170deg, #f5ede0 0%, #ece4d4 40%, #f5ede0 100%)",
        }}
      />

      {/* Ambient gold orbs */}
      <div
        className="absolute top-[6%] right-[4%] w-[720px] h-[720px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.18), transparent 65%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute bottom-[4%] left-[4%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(218,165,32,0.10), transparent 65%)",
          filter: "blur(70px)",
        }}
      />

      {/* Fine-grain noise texture for tactile feel */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ─── Fixed nav ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-3.5 flex items-center justify-between bg-[rgba(245,237,224,0.9)] backdrop-blur-xl border-b border-[rgba(42,32,18,0.06)]">
        <Link
          to="/#portfolio"
          className="flex items-center gap-2 text-[rgba(42,32,18,0.4)] text-sm hover:text-[rgba(42,32,18,0.7)] transition-colors"
        >
          <ArrowLeft size={16} />
          All Projects
        </Link>
        <img
          src="/vasishtha-logo.png"
          alt="Vasishtha Digital Solutions"
          className="h-7 w-auto"
          draggable={false}
        />
      </nav>

      {/* ─── Editorial vertical marker (left edge) ─── */}
      <div className="hidden xl:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-[3]">
        <span
          className="font-[Syne] text-[0.65rem] font-bold tracking-[4px] text-[#8b7340] uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Case Study — 02 / Lumeria
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent" />
      </div>

      {/* ═══ MAIN GRID ═══ */}
      <div className="relative z-[2] max-w-[1400px] mx-auto w-full px-6 md:px-12 grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-10 items-center">
        {/* ═════════════ LEFT — Editorial column ═════════════ */}
        <div className="flex flex-col justify-between min-h-[560px] lg:min-h-[640px]">
          {/* Top block */}
          <div>
            {/* Kicker */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-[#c9a84c]" />
              <span className="font-[Syne] text-[0.7rem] font-bold tracking-[3px] text-[#8b7340] uppercase">
                A Brand Launch Story · 2026
              </span>
            </motion.div>

            {/* Category pills */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="flex gap-2 mb-7"
            >
              {data.categories.map((cat, i) => (
                <span
                  key={cat}
                  className="px-3.5 py-1.5 rounded-full text-[0.7rem] font-semibold tracking-wide uppercase"
                  style={{
                    background:
                      i === 0 ? "rgba(42,32,18,0.06)" : "rgba(42,32,18,0.04)",
                    color: i === 0 ? "#8b7340" : "#a08a50",
                    border: `1px solid ${i === 0 ? "rgba(42,32,18,0.08)" : "rgba(42,32,18,0.06)"}`,
                  }}
                >
                  {cat}
                </span>
              ))}
            </motion.div>

            {/* Wordmark + integrated subtitle */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="font-[Cormorant_Garamond] text-[clamp(4.5rem,9vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.02em] text-[#2a2012]"
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #8b6914, #c9a84c 25%, #a07c28 50%, #c9a84c 75%, #8b6914)",
                  backgroundSize: "200% auto",
                  animation: "shimmer 5s linear infinite",
                }}
              >
                {data.title}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2.4}
              className="font-[Cormorant_Garamond] italic text-[clamp(1.1rem,1.6vw,1.4rem)] text-[rgba(42,32,18,0.5)] tracking-[1px] mt-2 mb-8"
            >
              {data.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-[1.02rem] text-[#5a4d3a] leading-[1.75] max-w-[480px] mb-9"
            >
              {data.description}
            </motion.p>

            {/* Stats — dark gold divider line + flex row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="pt-6 border-t border-[rgba(42,32,18,0.08)]"
            >
              <div className="flex gap-10 md:gap-12">
                {data.heroStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-[Cormorant_Garamond] text-[2.4rem] font-semibold text-[#2a2012] leading-none tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[0.7rem] text-[#8b7340] mt-2 uppercase tracking-[1.5px] font-semibold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom block — CTA + scroll cue */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="flex items-center justify-between gap-8 mt-10"
          >
            <a
              href={data.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 pl-5 pr-5 py-3 rounded-full bg-[#2a2012] text-[#daa520] font-[Syne] text-[0.8rem] font-bold tracking-[1.5px] uppercase hover:gap-4 transition-all duration-300"
              style={{
                boxShadow: "0 12px 30px rgba(42,32,18,0.25)",
              }}
            >
              Visit Live Site
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>

            {/* Scroll cue */}
            <div className="hidden sm:flex flex-col items-center gap-2">
              <span className="font-[Syne] text-[0.6rem] font-bold tracking-[3px] text-[#8b7340] uppercase">
                Scroll
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-px h-10 bg-gradient-to-b from-[#c9a84c] to-transparent"
              />
            </div>
          </motion.div>
        </div>

        {/* ═════════════ RIGHT — Bottle Composition ═════════════ */}
        <div className="relative h-[640px] md:h-[680px] hidden lg:block">
          {/* Central grounding glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(201,168,76,0.22), transparent 70%)",
              filter: "blur(55px)",
            }}
          />

          {/* Ground shadow plane */}
          <div
            className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-[78%] h-[70px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(42,32,18,0.22), transparent 70%)",
              filter: "blur(22px)",
            }}
          />

          {/* Bottles */}
          {data.heroProducts.map((p, i) => (
            <motion.img
              key={p.id}
              src={p.image}
              alt={`${p.name} ${p.type}`}
              loading="eager"
              draggable={false}
              className="absolute select-none"
              style={{
                top: p.top,
                left: p.left,
                width: `${p.width}px`,
                zIndex: p.zIndex,
                filter: bottleShadow,
                willChange: "transform",
              }}
              initial={{ opacity: 0, y: 50, rotate: p.rotate, scale: 0.92 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
                rotate: p.rotate,
                scale: 1,
              }}
              transition={{
                opacity: {
                  duration: 1.1,
                  delay: 0.4 + i * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                },
                scale: {
                  duration: 1.1,
                  delay: 0.4 + i * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                },
                y: {
                  duration: 6 + i * 0.6,
                  delay: 1.2 + p.floatDelay,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 1.1,
                  delay: 0.4 + i * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              whileHover={{
                y: -22,
                rotate: 0,
                scale: 1.07,
                filter: bottleShadowHover,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              }}
            />
          ))}
        </div>
      </div>

      {/* ─── Ingredient row — spans full width at bottom, marquee-like strip ─── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={6}
        className="relative z-[2] max-w-[1400px] mx-auto w-full px-6 md:px-12 mt-12 lg:mt-8"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-[rgba(42,32,18,0.08)]" />
          <span className="font-[Syne] text-[0.65rem] font-bold tracking-[3px] text-[#8b7340] uppercase">
            Inside The Bottles
          </span>
          <div className="h-px flex-1 bg-[rgba(42,32,18,0.08)]" />
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {data.heroIngredients.map((ing) => (
            <span
              key={ing}
              className="px-3.5 py-1.5 rounded-full text-[0.72rem] font-medium tracking-wide"
              style={{
                background: "rgba(245,237,224,0.6)",
                border: "1px solid rgba(42,32,18,0.1)",
                color: "#8b7340",
                backdropFilter: "blur(6px)",
              }}
            >
              {ing}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ─── Mobile fallback — bottles as a grid ─── */}
      <div className="lg:hidden grid grid-cols-2 gap-2 -mx-2 mt-8 relative z-[2]">
        {data.heroProducts.map((p) => (
          <div
            key={p.id}
            className="flex items-center justify-center aspect-[3/4] p-3"
          >
            <img
              src={p.image}
              alt={`${p.name} ${p.type}`}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
              style={{ filter: bottleShadow }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

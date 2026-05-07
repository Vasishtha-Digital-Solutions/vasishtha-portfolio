import { motion } from "framer-motion";

/* ═════════════════════════════════════════════════════════════
   LUMERIA — SECTION 6 : The Key Insight  (redesigned)
   Solid dark quote text with ONE gold-shimmer accent phrase —
   readable on cream, and the gold moment lands harder because
   it's isolated. Stronger card presence, Lumeria wordmark at
   the top of the card fills the formerly empty band.
   ═════════════════════════════════════════════════════════════ */

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardReveal = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.0, delay: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function LumeriaInsight({ data }) {
  const i = data.insight;

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Cream background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #f5ede0 0%, #ece4d4 50%, #f5ede0 100%)",
        }}
      />

      {/* Warm radial centered behind the card */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[560px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.22), transparent 65%)",
          filter: "blur(90px)",
        }}
      />

      {/* Fine grain overlay for tactile depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-[880px] mx-auto px-6 md:px-10">
        {/* Kicker */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="font-[Syne] text-[0.68rem] font-bold tracking-[3px] uppercase text-[#8b7340]">
              {i.kicker}
            </span>
            <div className="h-px w-8 bg-[#c9a84c]" />
          </div>
        </motion.div>

        {/* Pull-quote card — now with real presence */}
        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-[28px] px-8 py-12 md:px-16 md:py-16 text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,250,240,0.85) 0%, rgba(245,237,224,0.9) 60%, rgba(232,221,196,0.75) 100%)",
            border: "1px solid rgba(42,32,18,0.12)",
            boxShadow:
              "0 30px 70px rgba(42,32,18,0.12), " +
              "0 10px 25px rgba(42,32,18,0.06), " +
              "inset 0 1px 0 rgba(255,255,255,0.6)",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Top gold accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 10%, rgba(201,168,76,0.6) 50%, transparent 90%)",
            }}
          />

          {/* Decorative open-quote glyph — brought up in opacity so it reads */}
          <div
            aria-hidden="true"
            className="absolute top-4 left-5 md:top-6 md:left-8 pointer-events-none select-none font-[Cormorant_Garamond] leading-none"
            style={{
              fontSize: "clamp(7rem, 11vw, 10rem)",
              color: "rgba(139,105,20,0.14)",
              fontWeight: 600,
            }}
          >
            &ldquo;
          </div>

          {/* Lumeria wordmark at the top of the card */}
          <div className="relative z-[2] mb-7 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[rgba(42,32,18,0.15)]" />
            <span
              className="font-[Cormorant_Garamond] text-[1.3rem] font-semibold tracking-wide"
              style={{
                background:
                  "linear-gradient(90deg, #8b6914, #c9a84c 50%, #8b6914)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 6s linear infinite",
              }}
            >
              Lumeria
            </span>
            <div className="h-px w-8 bg-[rgba(42,32,18,0.15)]" />
          </div>

          {/* The quote — dark body text, ONE gold-shimmer accent phrase */}
          <blockquote
            className="relative z-[1] font-[Cormorant_Garamond] font-semibold leading-[1.35] text-[#2a2012]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)" }}
          >
            {i.quoteStart}{" "}
            <span
              className="italic"
              style={{
                background:
                  "linear-gradient(90deg, #6b500f, #b8860b 30%, #8b6914 50%, #b8860b 70%, #6b500f)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 5s linear infinite",
              }}
            >
              {i.quoteAccent}
            </span>{" "}
            {i.quoteEnd}
          </blockquote>

          {/* Supporting paragraph */}
          <p className="relative z-[1] text-[0.95rem] leading-[1.75] text-[#5a4d3a] max-w-[560px] mx-auto mt-7">
            {i.supporting}
          </p>

          {/* Thin gold rule */}
          <div
            className="relative z-[1] w-14 h-px mx-auto mt-9"
            style={{ background: "rgba(139,105,20,0.45)" }}
          />

          {/* Attribution */}
          <div className="relative z-[1] mt-4 text-[0.68rem] font-bold tracking-[2.5px] uppercase text-[#8b7340]">
            {i.attribution}
          </div>

          {/* Bottom-right decorative close-quote */}
          <div
            aria-hidden="true"
            className="absolute bottom-3 right-5 md:bottom-5 md:right-8 pointer-events-none select-none font-[Cormorant_Garamond] leading-none"
            style={{
              fontSize: "clamp(5rem, 8vw, 8rem)",
              color: "rgba(139,105,20,0.1)",
              fontWeight: 600,
            }}
          >
            &rdquo;
          </div>
        </motion.div>
      </div>
    </section>
  );
}

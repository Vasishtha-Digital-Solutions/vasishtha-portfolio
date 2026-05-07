import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

/* ═════════════════════════════════════════════════════════════
   LUMERIA — SECTION 5 : The Transformation
   Before (red-tinted problem list) → Arrow → After (gold-tinted win list).
   Each Before item has a paired After item; they reveal in staggered pairs.
   ═════════════════════════════════════════════════════════════ */

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const itemLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" },
  }),
};

const itemRight = {
  hidden: { opacity: 0, x: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.45 + i * 0.1, ease: "easeOut" },
  }),
};

export default function LumeriaTransformation({ data }) {
  const t = data.transformation;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Cream background */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "#f5ede0" }}
      />

      {/* Ambient depth glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.12), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-10">
        {/* ─── Centered section header ─── */}
        <div className="text-center mb-16">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{
              background: "rgba(42,32,18,0.05)",
              border: "1px solid rgba(42,32,18,0.08)",
            }}
          >
            <span className="font-[Syne] text-[0.68rem] font-bold tracking-[2.5px] uppercase text-[#8b7340]">
              {t.kicker}
            </span>
          </motion.div>

          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className="font-[Cormorant_Garamond] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.2] text-[#2a2012]"
          >
            {t.headline}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #8b6914, #c9a84c 25%, #a07c28 50%, #c9a84c 75%, #8b6914)",
                backgroundSize: "200% auto",
                animation: "shimmer 5s linear infinite",
              }}
            >
              {t.headlineAccent}
            </span>
          </motion.h2>
        </div>

        {/* ─── Before | Arrow | After ─── */}
        <div className="grid md:grid-cols-[1fr_80px_1fr] gap-6 md:gap-0 items-stretch">
          {/* ─── BEFORE card ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl p-8 md:p-10 relative overflow-hidden"
            style={{
              background: "rgba(185,28,28,0.04)",
              border: "1px solid rgba(185,28,28,0.12)",
            }}
          >
            {/* Subtle red glow */}
            <div
              className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(185,28,28,0.06), transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            <motion.div
              variants={reveal}
              className="relative z-[1]"
            >
              <div className="text-[0.72rem] font-bold tracking-[2px] uppercase text-[#b91c1c] mb-6">
                {t.before.label}
              </div>

              <ul className="flex flex-col gap-3.5">
                {t.before.items.map((item, i) => (
                  <motion.li
                    key={item}
                    variants={itemLeft}
                    custom={i}
                    className="flex items-center gap-3 text-[0.92rem] text-[#5a4d3a] leading-snug"
                  >
                    <span
                      className="flex-shrink-0 w-[22px] h-[22px] rounded-md flex items-center justify-center"
                      style={{
                        background: "rgba(185,28,28,0.07)",
                        border: "1px solid rgba(185,28,28,0.14)",
                      }}
                    >
                      <X size={12} style={{ color: "rgba(185,28,28,0.65)" }} />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* ─── Center arrow ─── */}
          <div className="flex md:flex-col items-center justify-center relative py-2 md:py-0">
            {/* Horizontal signal line (desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 pointer-events-none">
              <div
                className="h-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(185,28,28,0.25) 0%, rgba(218,165,32,0.35) 50%, rgba(139,105,20,0.4) 100%)",
                }}
              />
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                style={{
                  background: "#daa520",
                  boxShadow: "0 0 12px rgba(218,165,32,0.7)",
                }}
                initial={{ left: "-5%" }}
                whileInView={{ left: "calc(100% - 8px)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 1.8,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.1 }}
              className="w-[52px] h-[52px] rounded-full flex items-center justify-center z-[1]"
              style={{
                background:
                  "linear-gradient(135deg, #2a2012, #1a1508)",
                boxShadow:
                  "0 15px 35px rgba(42,32,18,0.25), 0 0 25px rgba(218,165,32,0.1)",
              }}
            >
              <ArrowRight size={18} style={{ color: "#daa520" }} />
            </motion.div>
          </div>

          {/* ─── AFTER card ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl p-8 md:p-10 relative overflow-hidden"
            style={{
              background: "rgba(42,32,18,0.04)",
              border: "1px solid rgba(42,32,18,0.1)",
              boxShadow:
                "0 20px 50px rgba(42,32,18,0.1), 0 0 40px rgba(218,165,32,0.05)",
            }}
          >
            {/* Subtle gold glow */}
            <div
              className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(218,165,32,0.08), transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            <motion.div
              variants={reveal}
              className="relative z-[1]"
            >
              <div className="text-[0.72rem] font-bold tracking-[2px] uppercase text-[#8b7340] mb-6">
                {t.after.label}
              </div>

              <ul className="flex flex-col gap-3.5">
                {t.after.items.map((item, i) => (
                  <motion.li
                    key={item}
                    variants={itemRight}
                    custom={i}
                    className="flex items-center gap-3 text-[0.92rem] text-[#2a2012] leading-snug font-medium"
                  >
                    <span
                      className="flex-shrink-0 w-[22px] h-[22px] rounded-md flex items-center justify-center"
                      style={{
                        background: "rgba(218,165,32,0.12)",
                        border: "1px solid rgba(218,165,32,0.25)",
                      }}
                    >
                      <Check size={12} style={{ color: "#8b6914" }} />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Subtle closing italic under the cards */}
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mt-14 text-[0.9rem] italic font-[Cormorant_Garamond] max-w-[560px] mx-auto leading-relaxed text-[#8b7340]"
        >
          Six problems. Six wins. One integrated strategy that tied the store,
          the audience, and the timing together.
        </motion.p>
      </div>
    </section>
  );
}

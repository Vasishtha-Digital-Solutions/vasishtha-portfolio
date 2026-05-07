import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ═════════════════════════════════════════════════════════════
   LUMERIA — SECTION 3 : The Merge
   Dark brown section. Three rows, each pairing a social post (left)
   with its e-commerce product page (right), connected by an animated
   gold "signal" that travels from content → commerce on scroll-in.
   ═════════════════════════════════════════════════════════════ */

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function LumeriaMerge({ data }) {
  const m = data.merge;

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#2a2012" }}
    >
      {/* Subtle gold glow in background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(218,165,32,0.08), transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Fine grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10">
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
              background: "rgba(218,165,32,0.08)",
              border: "1px solid rgba(218,165,32,0.15)",
            }}
          >
            <span className="font-[Syne] text-[0.68rem] font-bold tracking-[2.5px] uppercase text-[#daa520]">
              {m.kicker}
            </span>
          </motion.div>

          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className="font-[Cormorant_Garamond] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.2] text-[#f5ede0] max-w-[780px] mx-auto"
          >
            Content on the left.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #c9a84c, #daa520, #c9a84c)",
                backgroundSize: "200% auto",
                animation: "shimmer 6s linear infinite",
              }}
            >
              Commerce on the right.
            </span>
          </motion.h2>

          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            className="text-[0.95rem] leading-[1.7] mt-4 max-w-[560px] mx-auto"
            style={{ color: "rgba(245,237,224,0.45)" }}
          >
            {m.supporting}
          </motion.p>
        </div>

        {/* ─── 3 pairing rows ─── */}
        <div className="flex flex-col gap-10 md:gap-12">
          {m.rows.map((row, idx) => (
            <motion.div
              key={row.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="grid md:grid-cols-[1fr_90px_1fr] gap-4 md:gap-0 items-stretch group"
            >
              {/* ─── LEFT: Social post card ─── */}
              <motion.div
                variants={fromLeft}
                className="rounded-2xl p-7 md:p-8 flex flex-col justify-center min-h-[190px] transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245,237,224,0.06), rgba(245,237,224,0.02))",
                  border: "1px solid rgba(245,237,224,0.08)",
                }}
              >
                {/* Post meta */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#8b6914] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#1a1508]" />
                  </div>
                  <span className="text-[0.62rem] font-bold tracking-[2px] uppercase text-[#daa520]">
                    {row.social.label}
                  </span>
                </div>

                <h3 className="font-[Cormorant_Garamond] text-[1.35rem] font-semibold text-[#f5ede0] mb-2.5 leading-snug">
                  {row.social.title}
                </h3>
                <p
                  className="text-[0.88rem] leading-[1.65]"
                  style={{ color: "rgba(245,237,224,0.45)" }}
                >
                  {row.social.desc}
                </p>

                {/* Mini engagement row */}
                <div
                  className="flex gap-4 mt-4 pt-4 text-[0.7rem]"
                  style={{
                    borderTop: "1px solid rgba(245,237,224,0.06)",
                    color: "rgba(245,237,224,0.3)",
                  }}
                >
                  <span>♥ Likes</span>
                  <span>↗ Shares</span>
                  <span>💬 Saves</span>
                </div>
              </motion.div>

              {/* ─── CENTER: Flow signal ─── */}
              <div className="relative flex md:flex-col items-center justify-center py-2 md:py-0">
                {/* Horizontal flow line (desktop) with traveling dot */}
                <div className="hidden md:block relative w-full h-px">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(218,165,32,0.2) 20%, rgba(218,165,32,0.4) 50%, rgba(218,165,32,0.2) 80%, transparent)",
                    }}
                  />
                  {/* Traveling gold dot — signals the flow from content to commerce */}
                  <motion.div
                    className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full"
                    style={{
                      background: "#daa520",
                      boxShadow: "0 0 12px rgba(218,165,32,0.7)",
                    }}
                    initial={{ x: "-10%" }}
                    whileInView={{ x: "calc(100% - 8px)" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 1.4,
                      delay: 0.2 + idx * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>

                {/* Arrow circle */}
                <div
                  className="absolute md:relative w-11 h-11 rounded-full flex items-center justify-center z-[1] transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(218,165,32,0.18), rgba(218,165,32,0.08))",
                    border: "1px solid rgba(218,165,32,0.3)",
                    boxShadow: "0 0 20px rgba(218,165,32,0.15)",
                  }}
                >
                  <ArrowRight size={16} style={{ color: "#daa520" }} />
                </div>
              </div>

              {/* ─── RIGHT: E-commerce product page card ─── */}
              <motion.div
                variants={fromRight}
                className="rounded-2xl p-7 md:p-8 flex gap-5 items-center min-h-[190px] transition-all duration-500 hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(135deg, #f5ede0, #ece4d4)",
                  border: "1px solid rgba(42,32,18,0.08)",
                  boxShadow:
                    "0 10px 30px rgba(42,32,18,0.18), 0 0 40px rgba(218,165,32,0.05)",
                }}
              >
                {/* Product thumbnail */}
                {row.commerce.productImage && (
                  <div
                    className="flex-shrink-0 w-[100px] h-[130px] flex items-center justify-center rounded-xl"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))",
                      border: "1px solid rgba(42,32,18,0.06)",
                    }}
                  >
                    <img
                      src={row.commerce.productImage}
                      alt={row.commerce.title}
                      className="max-w-[75%] max-h-[85%] object-contain"
                      style={{
                        filter:
                          "drop-shadow(0 10px 15px rgba(42,32,18,0.25)) drop-shadow(0 4px 6px rgba(42,32,18,0.15))",
                      }}
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <span className="text-[0.62rem] font-bold tracking-[2px] uppercase text-[#8b7340]">
                    {row.commerce.label}
                  </span>
                  <h3 className="font-[Cormorant_Garamond] text-[1.35rem] font-semibold text-[#2a2012] mt-1.5 leading-snug">
                    {row.commerce.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-1.5">
                    <span className="font-[Cormorant_Garamond] text-[1.15rem] font-bold text-[#8b6914]">
                      {row.commerce.price}
                    </span>
                    <span className="text-[0.65rem] text-[#a08a50]">
                      {row.commerce.price.startsWith("₹") ? "on lumeriaskincare.com" : ""}
                    </span>
                  </div>
                  <p className="text-[0.85rem] text-[#5a4d3a] leading-[1.65] mt-2.5">
                    {row.commerce.desc}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Summary note below the rows */}
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mt-14 text-[0.85rem] italic font-[Cormorant_Garamond] max-w-[500px] mx-auto leading-relaxed"
          style={{ color: "rgba(245,237,224,0.35)" }}
        >
          Three months of content, three months of trust — every post a signpost
          pointing home.
        </motion.p>
      </div>
    </section>
  );
}

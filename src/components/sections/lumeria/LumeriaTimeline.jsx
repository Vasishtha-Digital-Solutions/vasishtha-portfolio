import { motion } from "framer-motion";
import { Heart, Share2, Bookmark } from "lucide-react";

/* ═════════════════════════════════════════════════════════════
   LUMERIA — SECTION 4 : Content Timeline
   Four phone mockups staircased upward (heights 340 → 430px).
   Each phone's gold accent intensifies month-by-month, visualizing
   the buildup of audience attention leading into launch day.
   ═════════════════════════════════════════════════════════════ */

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const phoneReveal = {
  hidden: { opacity: 0, y: 80, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.0,
      delay: 0.2 + i * 0.18,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function LumeriaTimeline({ data }) {
  const t = data.timeline;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Warm cream gradient with extra contrast against dark Merge above */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #f5ede0 0%, #ece4d4 50%, #f5ede0 100%)",
        }}
      />

      {/* Soft gold orb behind the phones */}
      <div
        className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.14), transparent 70%)",
          filter: "blur(80px)",
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

          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            className="text-[0.95rem] text-[#8b7340] mt-3 max-w-[520px] mx-auto leading-[1.7]"
          >
            {t.supporting}
          </motion.p>
        </div>

        {/* ─── Phones row, staircased bottom-aligned ─── */}
        <div className="relative">
          {/* Connecting thread — thin gold line behind the phones, from first to last */}
          <div
            className="hidden md:block absolute left-0 right-0 pointer-events-none"
            style={{
              top: "auto",
              bottom: "80px", // sits just above the label row
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(218,165,32,0.25) 15%, rgba(218,165,32,0.4) 50%, rgba(218,165,32,0.3) 85%, transparent)",
              zIndex: 0,
            }}
          />

          {/* Traveling dot along the thread (signals momentum) */}
          <motion.div
            className="hidden md:block absolute w-2 h-2 rounded-full pointer-events-none"
            style={{
              bottom: "75px",
              background: "#ffd700",
              boxShadow: "0 0 14px rgba(255,215,0,0.8)",
              zIndex: 1,
            }}
            initial={{ left: "5%" }}
            whileInView={{ left: "95%" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          />

          <div className="flex flex-wrap gap-6 md:gap-5 justify-center items-end relative z-[2]">
            {t.months.map((m, i) => (
              <motion.div
                key={m.id}
                variants={phoneReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                className="text-center w-[200px] flex-shrink-0"
              >
                {/* Phone mockup */}
                <motion.div
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="w-[180px] mx-auto rounded-[26px] p-[6px] transition-shadow duration-400"
                  style={{
                    background: "#1a1508",
                    border: `1px solid ${m.isLaunch ? "rgba(255,215,0,0.25)" : "rgba(218,165,32,0.1)"}`,
                    boxShadow: m.isLaunch
                      ? "0 20px 60px rgba(42,32,18,0.3), 0 0 40px rgba(255,215,0,0.15), 0 0 80px rgba(218,165,32,0.08)"
                      : "0 20px 60px rgba(42,32,18,0.2), 0 0 30px rgba(42,32,18,0.1)",
                  }}
                >
                  <div
                    className="rounded-[20px] overflow-hidden flex flex-col"
                    style={{
                      height: `${m.phoneHeight}px`,
                      background:
                        "linear-gradient(180deg, #2a2012, #1a1508)",
                    }}
                  >
                    {/* Status bar */}
                    <div
                      className="flex justify-between items-center px-3 py-2 text-[0.55rem]"
                      style={{ color: "rgba(245,237,224,0.3)" }}
                    >
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <span>100%</span>
                      </div>
                    </div>

                    {/* Post content */}
                    <div className="flex-1 flex flex-col justify-center px-5 text-center">
                      <div
                        className="font-[Cormorant_Garamond] text-[1rem] font-semibold leading-[1.3] mb-3 whitespace-pre-line"
                        style={{ color: m.color }}
                      >
                        {m.post}
                      </div>
                      <div
                        className="w-7 h-px mx-auto"
                        style={{ background: m.color, opacity: 0.35 }}
                      />
                    </div>

                    {/* Engagement bar */}
                    <div
                      className="flex justify-around items-center px-3 py-2.5 text-[0.6rem]"
                      style={{
                        borderTop: "1px solid rgba(218,165,32,0.08)",
                        color: "rgba(245,237,224,0.35)",
                      }}
                    >
                      <span className="flex items-center gap-1">
                        <Heart size={9} />
                        {m.engagement.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Share2 size={9} />
                        {m.engagement.shares}
                      </span>
                      <span className="flex items-center gap-1">
                        <Bookmark size={9} />
                        {m.engagement.saves}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Label card below the phone */}
                <div className="mt-5">
                  <div
                    className="text-[0.68rem] font-bold tracking-[1.8px] uppercase mb-1"
                    style={{
                      color: m.isLaunch ? "#c9a84c" : "#8b7340",
                    }}
                  >
                    {m.label}
                  </div>
                  <div className="text-[0.9rem] font-semibold text-[#2a2012] leading-tight">
                    {m.stage}
                  </div>
                  <div className="text-[0.75rem] text-[#8b7340] mt-1 leading-snug">
                    {m.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

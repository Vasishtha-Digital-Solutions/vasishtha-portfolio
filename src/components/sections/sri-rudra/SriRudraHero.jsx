import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const statColorMap = {
  saffron: { bg: "rgba(184,134,11,0.08)", border: "rgba(184,134,11,0.15)", line: "rgba(218,165,32,0.4)", text: "#E85D04" },
  orange: { bg: "rgba(232,93,4,0.08)", border: "rgba(232,93,4,0.12)", line: "rgba(232,93,4,0.5)", text: "#FF6B00" },
  maroon: { bg: "rgba(128,0,32,0.1)", border: "rgba(128,0,32,0.15)", line: "rgba(128,0,32,0.5)", text: "#e07070" },
};

export default function SriRudraHero({ data }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0505]">
      {/* Temple interior background */}
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage: `url('${data.images.heroBackground}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark maroon overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,5,5,0.7) 0%, rgba(26,10,10,0.5) 30%, rgba(45,15,15,0.4) 50%, rgba(26,10,10,0.6) 70%, rgba(13,5,5,0.85) 100%)",
        }}
      />

      {/* Center warm glow */}
      <div
        className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(255,107,0,0.08), transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      {/* Fixed nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-3.5 flex items-center justify-between bg-[rgba(26,10,10,0.92)] backdrop-blur-xl border-b border-[rgba(184,134,11,0.08)]">
        <Link
          to="/#portfolio"
          className="flex items-center gap-2 text-[rgba(245,230,211,0.35)] text-sm hover:text-[rgba(245,230,211,0.6)] transition-colors"
        >
          <ArrowLeft size={16} />
          All Projects
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-[30px] h-[30px] rounded-lg bg-gradient-to-br from-[#B8860B] to-[#8B6914] flex items-center justify-center font-[Syne] text-[0.55rem] font-extrabold text-[#1a0a0a]">
            VDS
          </div>
          <span className="font-[Syne] text-sm font-bold text-[#f5e6d3]">
            Vasishtha
          </span>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-[2] text-center max-w-[650px] px-5 pt-20">
        {/* Category pills */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex gap-2 justify-center mb-7"
        >
          {data.categories.map((cat) => (
            <span
              key={cat}
              className="px-3.5 py-1.5 rounded-full text-[0.7rem] font-semibold tracking-wide uppercase backdrop-blur-sm"
              style={{
                background:
                  cat === "Social Media"
                    ? "rgba(232,93,4,0.15)"
                    : "rgba(128,0,32,0.2)",
                color: cat === "Social Media" ? "#FF6B00" : "#e07070",
                border: `1px solid ${cat === "Social Media" ? "rgba(232,93,4,0.2)" : "rgba(128,0,32,0.25)"}`,
              }}
            >
              {cat}
            </span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-[Playfair_Display] text-[clamp(3.5rem,8vw,6rem)] font-extrabold leading-none tracking-tight mb-2"
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #B8860B, #FF6B00 30%, #FFD700 50%, #FF6B00 70%, #B8860B)",
              backgroundSize: "200% auto",
              animation: "shimmer 4s linear infinite",
            }}
          >
            {data.title}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="font-[Playfair_Display] text-lg text-[rgba(245,230,211,0.35)] italic tracking-[3px] mb-8"
        >
          {data.subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-base text-[rgba(245,230,211,0.4)] leading-relaxed max-w-[520px] mx-auto mb-11"
        >
          {data.description}
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex gap-5 justify-center flex-wrap"
        >
          {data.heroStats.map((stat) => {
            const colors = statColorMap[stat.color];
            return (
              <div
                key={stat.label}
                className="px-7 py-6 rounded min-w-[140px] relative overflow-hidden backdrop-blur-xl"
                style={{
                  background: colors.bg,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${colors.line}, transparent)`,
                  }}
                />
                <div
                  className="font-[Playfair_Display] text-4xl font-extrabold"
                  style={{ color: colors.text }}
                >
                  {stat.value}
                </div>
                <div className="text-[0.72rem] text-[rgba(245,230,211,0.4)] mt-1 tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

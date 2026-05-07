import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SriRudraInsight({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { insight } = data;

  return (
    <section
      className="relative overflow-hidden py-32 lg:py-44"
      style={{
        background: "linear-gradient(180deg, #1a0a0a, #0d0505, #1a0a0a)",
      }}
    >
      {/* Ambient glow behind quote */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(184,134,11,0.06), transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Stone divider top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(184,134,11,0.15) 50%, transparent 95%)",
        }}
      />

      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-10 text-center relative z-[1]">
        {/* Decorative open quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="mb-8"
        >
          <span
            className="font-[Playfair_Display] text-[clamp(4rem,8vw,6rem)] leading-none font-bold select-none"
            style={{
              background: "linear-gradient(180deg, rgba(184,134,11,0.25), rgba(184,134,11,0.05))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            &ldquo;
          </span>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="font-[Playfair_Display] text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold leading-snug tracking-tight text-[#f5e6d3] mb-8"
        >
          {insight.quote}
        </motion.blockquote>

        {/* Separator */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
          className="flex justify-center mb-8"
        >
          <div
            className="w-16 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(232,93,4,0.4), transparent)",
            }}
          />
        </motion.div>

        {/* Supporting text */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
          className="text-[0.95rem] text-[rgba(245,230,211,0.35)] leading-relaxed max-w-xl mx-auto"
        >
          {insight.supporting}
        </motion.p>
      </div>

      {/* Stone divider bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(184,134,11,0.15) 50%, transparent 95%)",
        }}
      />
    </section>
  );
}

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ErpCTA({ data, palette }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { cta } = data;

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: palette.base }}
    >
      {/* Saffron glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${palette.saffronGlow}, transparent 60%)`,
          filter: "blur(100px)",
        }}
      />

      <div className="relative max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="inline-flex items-center gap-3 mb-8"
        >
          <div className="h-px w-10" style={{ background: palette.brass, opacity: 0.5 }} />
          <span
            className="text-[0.65rem] tracking-[0.25em] uppercase font-semibold"
            style={{ color: palette.brass, fontFamily: "'JetBrains Mono', monospace" }}
          >
            {cta.kicker}
          </span>
          <div className="h-px w-10" style={{ background: palette.brass, opacity: 0.5 }} />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="font-bold tracking-[-0.025em] leading-[1.0] mb-7"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(2.4rem, 6vw, 4.6rem)",
            color: palette.ink,
          }}
        >
          We built one operating system.
          <br />
          <span
            style={{
              fontStyle: "italic",
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 400,
              color: palette.saffronDeep,
            }}
          >
            We can build yours.
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
          className="text-base lg:text-lg leading-relaxed max-w-[720px] mx-auto mb-12"
          style={{
            color: palette.inkSoft,
            fontFamily: "'Bricolage Grotesque', sans-serif",
          }}
        >
          {cta.body}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to={cta.primary.to}
            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-semibold text-[0.95rem] transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: palette.ink,
              color: palette.base,
              fontFamily: "'Bricolage Grotesque', sans-serif",
              boxShadow: `0 12px 32px -8px ${palette.ink}40`,
            }}
          >
            {cta.primary.label}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            to={cta.secondary.to}
            className="group inline-flex items-center gap-2 px-5 py-4 text-[0.92rem] font-medium transition-colors"
            style={{
              color: palette.inkSoft,
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            {cta.secondary.label}
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

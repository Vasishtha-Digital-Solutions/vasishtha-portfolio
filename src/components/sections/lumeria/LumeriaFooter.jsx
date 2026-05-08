import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ═════════════════════════════════════════════════════════════
   LUMERIA — SECTION 7 : Footer
   Three blocks stacked:
     (1) Services delivered — cream section with pill row
     (2) Next Project — dark brown strip with "One Day Stories →"
     (3) VDS branding line
   ═════════════════════════════════════════════════════════════ */

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function LumeriaFooter({ data }) {
  return (
    <>
      {/* ═══ Block 1: Services — cream ═══ */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "#f5ede0" }}
        />

        <div className="relative max-w-[960px] mx-auto px-6 md:px-10 text-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="font-[Syne] text-[0.68rem] font-bold tracking-[3px] uppercase text-[#8b7340]">
              Full-Service Partnership
            </span>
            <div className="h-px w-8 bg-[#c9a84c]" />
          </motion.div>

          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className="font-[Cormorant_Garamond] text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold text-[#2a2012] leading-[1.2] mb-10"
          >
            What we delivered for Lumeria
          </motion.h2>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            className="flex flex-wrap gap-2.5 justify-center"
          >
            {data.services.map((service, i) => (
              <motion.span
                key={service}
                variants={reveal}
                custom={3 + i * 0.3}
                className="px-5 py-2.5 rounded-full text-[0.82rem] font-medium tracking-wide"
                style={{
                  background: "rgba(42,32,18,0.04)",
                  border: "1px solid rgba(42,32,18,0.08)",
                  color: "#5a4d3a",
                }}
              >
                {service}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ Block 2: Next Project — dark brown strip ═══ */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "#2a2012" }}
      >
        {/* Subtle gold warmth */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(218,165,32,0.08), transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="text-[0.68rem] font-[Syne] font-bold tracking-[3px] uppercase mb-6"
            style={{ color: "rgba(245,237,224,0.35)" }}
          >
            Next Project
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
          >
            <Link
              to={`/projects/${data.nextProject.slug}`}
              className="group inline-block"
            >
              <h3
                className="font-[Cormorant_Garamond] font-semibold leading-[1.1] transition-all duration-500"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4.2rem)",
                  color: "#f5ede0",
                }}
              >
                <span className="inline-flex items-center gap-4 md:gap-6 group-hover:gap-6 md:group-hover:gap-8 transition-all duration-500">
                  <span className="group-hover:text-[#daa520] transition-colors duration-500">
                    {data.nextProject.title}
                  </span>
                  <span
                    className="inline-flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-500 group-hover:bg-[rgba(218,165,32,0.15)]"
                    style={{
                      width: "clamp(48px, 6vw, 68px)",
                      height: "clamp(48px, 6vw, 68px)",
                      background: "rgba(245,237,224,0.06)",
                      border: "1px solid rgba(218,165,32,0.2)",
                    }}
                  >
                    <ArrowRight
                      style={{ color: "#daa520" }}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                      size={22}
                    />
                  </span>
                </span>
              </h3>

              <p
                className="mt-4 md:mt-5 text-[0.95rem] max-w-[500px] mx-auto leading-relaxed"
                style={{ color: "rgba(245,237,224,0.4)" }}
              >
                {data.nextProject.tagline}
              </p>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ Block 3: Site footer — cream ═══ */}
      <footer
        className="relative py-8 px-6 md:px-10"
        style={{
          background: "#f5ede0",
          borderTop: "1px solid rgba(42,32,18,0.06)",
        }}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* VDS brand */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-[28px] h-[28px] rounded-lg bg-gradient-to-br from-[#2a2012] to-[#1a1508] flex items-center justify-center font-[Syne] text-[0.52rem] font-extrabold text-[#daa520]">
              VDS
            </div>
            <span className="font-[Syne] text-[0.8rem] font-bold text-[#2a2012] group-hover:text-[#8b6914] transition-colors">
              Vasishtha Digital Solutions
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-[0.72rem]" style={{ color: "rgba(42,32,18,0.35)" }}>
            © 2026 Vasishtha Digital Solutions — Crafted with care in Hyderabad
          </p>

          {/* All projects link */}
          <Link
            to="/#portfolio"
            className="text-[0.78rem] font-medium text-[#8b7340] hover:text-[#2a2012] transition-colors"
          >
            All Projects →
          </Link>
        </div>
      </footer>
    </>
  );
}

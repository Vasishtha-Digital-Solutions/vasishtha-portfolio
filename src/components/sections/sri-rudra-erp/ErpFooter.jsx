import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ErpFooter({ data, palette }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer
      ref={ref}
      className="relative pt-20 pb-12 overflow-hidden"
      style={{ background: palette.terminal }}
    >
      {/* Top thin saffron rule */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${palette.saffron}55, transparent)`,
        }}
      />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Services delivered */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="mb-16"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <div className="h-px w-6" style={{ background: palette.saffron, opacity: 0.5 }} />
            <span
              className="text-[0.62rem] tracking-[0.25em] uppercase font-semibold"
              style={{ color: palette.saffron, fontFamily: "'JetBrains Mono', monospace", opacity: 0.7 }}
            >
              Services Delivered
            </span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {data.services.map((service) => (
              <span
                key={service}
                className="px-4 py-2 rounded-full text-[0.78rem] font-medium"
                style={{
                  background: "rgba(245,238,221,0.04)",
                  border: `1px solid ${palette.saffron}25`,
                  color: "rgba(245,238,221,0.6)",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                }}
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Next project */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="mb-16"
        >
          <div
            className="text-[0.62rem] font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "rgba(245,238,221,0.35)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Next Project
          </div>

          <Link
            to={`/projects/${data.nextProject.slug}`}
            className="group block rounded-xl p-7 lg:p-10 transition-all duration-500 hover:translate-y-[-2px]"
            style={{
              background: "rgba(245,238,221,0.025)",
              border: `1px solid ${palette.saffron}20`,
            }}
          >
            <div className="flex items-center justify-between gap-6">
              <div>
                <h3
                  className="text-2xl lg:text-4xl font-bold tracking-tight mb-2 transition-colors duration-500"
                  style={{
                    color: palette.base,
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                  }}
                >
                  {data.nextProject.title}
                </h3>
                <p
                  className="text-[0.9rem]"
                  style={{
                    color: "rgba(245,238,221,0.5)",
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                  }}
                >
                  {data.nextProject.tagline}
                </p>
              </div>
              <div
                className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{
                  background: `${palette.saffron}15`,
                  border: `1px solid ${palette.saffron}40`,
                }}
              >
                <ArrowRight
                  size={20}
                  style={{ color: palette.saffron }}
                  className="transition-transform duration-500 group-hover:translate-x-0.5"
                />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Bottom branding */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
          className="pt-8 border-t flex items-center justify-between"
          style={{ borderColor: "rgba(232,169,60,0.15)" }}
        >
          <img
            src="/vasishtha-logo.png"
            alt="Vasishtha Digital Solutions"
            style={{ height: 24, width: "auto" }}
            draggable={false}
          />
          <Link
            to="/#portfolio"
            className="text-[0.75rem] transition-colors hover:opacity-100"
            style={{
              color: "rgba(245,238,221,0.4)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            All Projects →
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}

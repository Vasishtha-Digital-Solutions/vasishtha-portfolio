import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowUpRight, ArrowLeft } from "lucide-react"

const EASE = [0.22, 1, 0.36, 1]

export default function RameshFooter({ data }) {
  const { palette, footer } = data

  return (
    <footer
      className="relative overflow-hidden py-20"
      style={{ background: palette.bgDarker }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, rgba(216,27,126,0.15) 0%, transparent 60%)`,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          {/* Back to portfolio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Link
              to="/#portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}
            >
              <ArrowLeft size={15} strokeWidth={2} />
              Back to all work
            </Link>
          </motion.div>

          {/* VDS branding */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="text-center"
          >
            <img
              src="/vasishtha-logo.png"
              alt="Vasishtha Digital Solutions"
              style={{ height: 28, width: "auto" }}
              draggable={false}
            />
          </motion.div>

          {/* Next case study */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          >
            <p
              className="text-[10px] uppercase tracking-widest mb-2 text-right"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {footer.next.label}
            </p>
            <Link
              to={footer.next.to}
              className="group inline-flex items-center gap-2 text-base font-semibold transition-opacity hover:opacity-80"
              style={{ color: palette.pinkLight, fontFamily: "'Playfair Display', serif" }}
            >
              {footer.next.title}
              <ArrowUpRight
                size={18}
                strokeWidth={2}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

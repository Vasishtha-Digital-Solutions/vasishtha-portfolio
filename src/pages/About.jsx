import { motion } from "framer-motion"
import { Target, Eye, Heart } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
}

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To deliver exceptional digital solutions that empower businesses to thrive in the digital age.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the most trusted partner for businesses seeking innovative and impactful digital experiences.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Quality, transparency, and collaboration are at the core of everything we do.",
  },
]

const team = [
  { name: "John Doe", role: "CEO & Founder", initials: "JD" },
  { name: "Jane Smith", role: "Lead Designer", initials: "JS" },
  { name: "Mike Johnson", role: "Tech Lead", initials: "MJ" },
  { name: "Sarah Williams", role: "Project Manager", initials: "SW" },
]

export default function About() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-slate-50 via-white to-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              About us
            </span>
            <h1 className="mt-3 font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
              We&apos;re a team of passionate creators
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Founded with the belief that great design and technology can
              transform businesses. We&apos;ve been helping companies build their
              digital presence since day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="rounded-2xl border border-slate-200 p-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <item.icon size={28} />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Our team
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
              Meet the people behind the work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-heading text-2xl font-bold shadow-lg shadow-primary-600/20 transition-transform group-hover:scale-105">
                  {member.initials}
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

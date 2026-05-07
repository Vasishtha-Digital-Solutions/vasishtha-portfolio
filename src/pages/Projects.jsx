import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["All", "Web", "Mobile", "Design", "Branding"]

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web",
    description:
      "A full-featured online store with real-time inventory, payment processing, and analytics dashboard.",
    tags: ["React", "Node.js", "Stripe"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Health & Fitness App",
    category: "Mobile",
    description:
      "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with AI coaching.",
    tags: ["React Native", "Firebase", "AI"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    category: "Web",
    description:
      "Analytics dashboard with real-time data visualization, team collaboration, and automated reporting.",
    tags: ["Next.js", "D3.js", "PostgreSQL"],
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 4,
    title: "Brand Identity System",
    category: "Branding",
    description:
      "Complete brand overhaul including logo, color system, typography, and brand guidelines document.",
    tags: ["Figma", "Illustrator", "Guidelines"],
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Restaurant Ordering App",
    category: "Mobile",
    description:
      "Table ordering app with QR code scanning, live kitchen status, and integrated payment.",
    tags: ["Flutter", "Supabase", "Payments"],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    title: "Corporate Website Redesign",
    category: "Design",
    description:
      "Modern redesign for a Fortune 500 company focusing on accessibility, performance, and conversion.",
    tags: ["UI/UX", "Figma", "A11y"],
    color: "from-amber-500 to-orange-500",
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-slate-50 via-white to-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Our work
            </span>
            <h1 className="mt-3 font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
              Projects we&apos;re proud of
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Each project is a story of collaboration, creativity, and
              problem-solving. Here&apos;s a selection of our best work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all",
                  activeCategory === cat
                    ? "bg-primary-600 text-white shadow-md shadow-primary-600/25"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="group rounded-2xl border border-slate-200 overflow-hidden bg-white transition-all hover:shadow-xl hover:shadow-slate-200/50"
                >
                  {/* Gradient Thumbnail Placeholder */}
                  <div
                    className={cn(
                      "h-48 bg-gradient-to-br flex items-center justify-center",
                      project.color
                    )}
                  >
                    <span className="text-white/80 font-heading text-lg font-semibold">
                      {project.title}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                        {project.category}
                      </span>
                      <ExternalLink
                        size={16}
                        className="text-slate-300 transition-colors group-hover:text-primary-500"
                      />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-slate-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                    >
                      View case study
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  )
}

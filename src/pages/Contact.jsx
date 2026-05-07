// ──────────────────────────────────────────────────────────────
// /contact — Vasishtha Digital Solutions
// Standalone (no shared Layout). Matches Home's dark + orange
// aesthetic. Form POSTs JSON to contactData.form.endpoint.
// In dev (localhost) the submit is simulated so the full flow
// can be tested before the backend is wired up with SendGrid /
// MailerSend / Nodemailer / Resend / etc.
// ──────────────────────────────────────────────────────────────

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowUpRight,
  ArrowLeft,
  Check,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react"
import { contactData } from "../data/contact"
import HomeFooter from "../components/sections/home/HomeFooter"

const EASE = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
})

const revealUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: EASE },
})

// ── Small helpers ──────────────────────────────────
const isValidEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
const isDev =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1")

const channelIcon = {
  email: Mail,
  whatsapp: MessageCircle,
  phone: Phone,
  instagram: Instagram,
  linkedin: Linkedin,
}

export default function Contact() {
  const { palette, topBar, intro, form, sideInfo } = contactData

  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: palette.bg, color: palette.text }}
    >
      {/* ═════ Background layers (subtle glows + noise) ═════ */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 right-0"
        style={{
          height: "65vh",
          background:
            "radial-gradient(ellipse at 15% 10%, rgba(241,143,0,0.15) 0%, transparent 55%)," +
            "radial-gradient(ellipse at 85% 35%, rgba(255,178,76,0.10) 0%, transparent 60%)",
          filter: "blur(20px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          opacity: 0.05,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* ═════ Top bar ═════ */}
      <ContactTopBar topBar={topBar} palette={palette} />

      {/* ═════ Intro + Form + Side info ═════ */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-16 md:pt-48 md:pb-24">
        <motion.span
          {...fadeUp(0.2)}
          className="block text-[11px]"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.26em",
            color: palette.orange,
            textTransform: "uppercase",
          }}
        >
          {intro.kicker}
        </motion.span>

        <motion.h1
          {...fadeUp(0.3)}
          className="mt-4 font-extrabold leading-[0.98]"
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: "clamp(2.8rem, 7.4vw, 6.5rem)",
            letterSpacing: "-0.035em",
            color: palette.white,
          }}
        >
          {intro.headline}
        </motion.h1>

        <motion.p
          {...fadeUp(0.4)}
          className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
          style={{ color: palette.textDim }}
        >
          {intro.subtext}
        </motion.p>

        {/* Form + Side info grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:gap-14 lg:grid-cols-[3fr_2fr]">
          <ContactForm palette={palette} form={form} />
          <SideInfo palette={palette} sideInfo={sideInfo} />
        </div>
      </section>

      {/* ═════ Footer (reuse) ═════ */}
      <HomeFooter />
    </main>
  )
}

/* ═════════════════════════════════════════════════════════════
   ContactTopBar — logo LEFT + "Back to Home" ghost RIGHT
   ═════════════════════════════════════════════════════════════ */
function ContactTopBar({ topBar, palette }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 md:px-8"
      style={{
        paddingTop: "12px",
        paddingBottom: "12px",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        background: scrolled ? "rgba(8,8,10,0.78)" : "rgba(12,12,14,0.25)",
        backdropFilter: "blur(22px) saturate(140%)",
        WebkitBackdropFilter: "blur(22px) saturate(140%)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        transition: "background 260ms ease, border-color 260ms ease",
      }}
    >
      <motion.div {...fadeUp(0.1)}>
        <Link to={topBar.logo.to} className="block">
          <img
            src={topBar.logo.src}
            alt={topBar.logo.alt}
            className="h-11 w-auto md:h-20"
            draggable={false}
            style={{ objectFit: "contain", display: "block" }}
          />
        </Link>
      </motion.div>

      <motion.div {...fadeUp(0.15)}>
        <Link
          to={topBar.cta.to}
          className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/5 md:px-6 md:py-3"
          style={{
            borderColor: palette.borderStrong,
            background: "rgba(255,255,255,0.02)",
            color: palette.text,
          }}
        >
          <ArrowLeft size={14} strokeWidth={2.4} />
          <span>{topBar.cta.label}</span>
        </Link>
      </motion.div>
    </nav>
  )
}

/* ═════════════════════════════════════════════════════════════
   ContactForm — controlled state, validation, dev-mode bypass
   ═════════════════════════════════════════════════════════════ */
function ContactForm({ form, palette }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    interests: [],
    budget: form.budgetOptions[0],
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | sending | done | error
  const [networkError, setNetworkError] = useState(null)

  const setField = (k, v) => {
    setValues((prev) => ({ ...prev, [k]: v }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: null }))
  }

  const toggleInterest = (value) => {
    setValues((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((i) => i !== value)
        : [...prev.interests, value],
    }))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = "Name is required"
    if (!values.email.trim()) next.email = "Email is required"
    else if (!isValidEmail(values.email))
      next.email = "That doesn't look like an email"
    if (!values.message.trim())
      next.message = "Tell us a bit about the project"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus("sending")
    setNetworkError(null)

    // Dev mode: simulate success so the flow is testable without backend.
    if (isDev) {
      await new Promise((r) => setTimeout(r, 1000))
      console.info("[DEV] Form submission (not sent):", values)
      setStatus("done")
      return
    }

    // Production: real POST. Backend reads JSON body and sends mail via
    // SendGrid / MailerSend / Nodemailer / Resend / Brevo / etc.
    // Payload: { name, email, company, interests[], budget, message }
    try {
      const res = await fetch(form.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus("done")
    } catch (err) {
      console.error("Contact form submission failed:", err)
      setStatus("error")
      setNetworkError(form.errorFallback)
    }
  }

  return (
    <motion.div {...revealUp(0)}>
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <SuccessState key="success" form={form} palette={palette} />
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-3xl border p-7 md:p-10"
            style={{
              borderColor: palette.border,
              background: palette.bg3,
            }}
          >
            {/* Name + Email (2-col on md+) */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
              <Field
                id="name"
                label={form.nameLabel}
                placeholder={form.namePlaceholder}
                value={values.name}
                onChange={(v) => setField("name", v)}
                error={errors.name}
                required
                palette={palette}
              />
              <Field
                id="email"
                type="email"
                label={form.emailLabel}
                placeholder={form.emailPlaceholder}
                value={values.email}
                onChange={(v) => setField("email", v)}
                error={errors.email}
                required
                palette={palette}
              />
            </div>

            {/* Company */}
            <div className="mt-5 md:mt-6">
              <Field
                id="company"
                label={form.companyLabel}
                placeholder={form.companyPlaceholder}
                value={values.company}
                onChange={(v) => setField("company", v)}
                palette={palette}
              />
            </div>

            {/* Interest chips */}
            <div className="mt-7 md:mt-8">
              <div className="mb-3 flex items-baseline gap-3">
                <FieldLabel palette={palette}>
                  {form.helpLabel}
                </FieldLabel>
                <span
                  className="text-[10px]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: "0.2em",
                    color: palette.textFaint,
                    textTransform: "uppercase",
                  }}
                >
                  {form.helpHint}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {form.helpOptions.map((opt) => {
                  const active = values.interests.includes(opt.value)
                  return (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => toggleInterest(opt.value)}
                      className="relative rounded-full border px-4 py-2.5 text-sm font-medium transition-all"
                      style={{
                        fontFamily:
                          "'Plus Jakarta Sans', system-ui, sans-serif",
                        borderColor: active
                          ? "transparent"
                          : palette.borderStrong,
                        background: active
                          ? `linear-gradient(90deg, ${palette.orange}, ${palette.amber})`
                          : "rgba(255,255,255,0.02)",
                        color: active ? "#0a0a0a" : palette.text,
                        boxShadow: active
                          ? `0 6px 20px -8px ${palette.orange}99`
                          : "none",
                      }}
                    >
                      {opt.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Budget */}
            <div className="mt-7 md:mt-8">
              <FieldLabel palette={palette}>
                {form.budgetLabel}
              </FieldLabel>
              <div className="relative mt-2">
                <select
                  value={values.budget}
                  onChange={(e) => setField("budget", e.target.value)}
                  className="w-full appearance-none rounded-xl border px-4 py-3 pr-10 text-sm outline-none transition-colors focus:border-[rgba(241,143,0,0.6)]"
                  style={{
                    fontFamily:
                      "'Plus Jakarta Sans', system-ui, sans-serif",
                    borderColor: palette.borderStrong,
                    background: "rgba(255,255,255,0.03)",
                    color: palette.text,
                  }}
                >
                  {form.budgetOptions.map((b) => (
                    <option
                      key={b}
                      value={b}
                      style={{ background: "#0a0a0a" }}
                    >
                      {b}
                    </option>
                  ))}
                </select>
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs"
                  style={{ color: palette.textMuted }}
                >
                  ▾
                </span>
              </div>
            </div>

            {/* Message */}
            <div className="mt-7 md:mt-8">
              <FieldLabel palette={palette} required>
                {form.messageLabel}
              </FieldLabel>
              <textarea
                rows={5}
                value={values.message}
                onChange={(e) => setField("message", e.target.value)}
                placeholder={form.messagePlaceholder}
                className="mt-2 w-full resize-y rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-[rgba(241,143,0,0.6)]"
                style={{
                  fontFamily:
                    "'Plus Jakarta Sans', system-ui, sans-serif",
                  borderColor: errors.message
                    ? palette.danger
                    : palette.borderStrong,
                  background: "rgba(255,255,255,0.03)",
                  color: palette.text,
                  lineHeight: 1.55,
                }}
              />
              {errors.message && (
                <p
                  className="mt-2 text-xs"
                  style={{ color: palette.danger }}
                >
                  {errors.message}
                </p>
              )}
            </div>

            {/* Network error banner */}
            {status === "error" && networkError && (
              <div
                className="mt-6 rounded-xl border px-4 py-3 text-sm"
                style={{
                  borderColor: `${palette.danger}55`,
                  background: `${palette.danger}11`,
                  color: "#fff",
                }}
              >
                {networkError}
              </div>
            )}

            {/* Submit row */}
            <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-transform active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                style={{
                  background: `linear-gradient(90deg, ${palette.orange}, ${palette.amber})`,
                  color: "#0a0a0a",
                  boxShadow: `0 0 0 1px rgba(255,255,255,0.08), 0 10px 40px -10px ${palette.orange}99, 0 6px 20px -8px ${palette.amber}66`,
                }}
              >
                <span className="relative z-[2] inline-flex items-center gap-2">
                  {status === "sending" ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      {form.submit.sending}
                    </>
                  ) : status === "error" ? (
                    <>
                      {form.submit.retry}
                      <ArrowUpRight size={16} strokeWidth={2.4} />
                    </>
                  ) : (
                    <>
                      {form.submit.idle}
                      <ArrowUpRight size={16} strokeWidth={2.4} />
                    </>
                  )}
                </span>
                {status === "idle" && (
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute"
                    initial={{ x: "-120%" }}
                    animate={{ x: "220%" }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      top: "-20%",
                      bottom: "-20%",
                      left: 0,
                      width: "42%",
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
                      transform: "skewX(-20deg)",
                    }}
                  />
                )}
              </button>

              <span
                className="text-[10px] md:text-xs"
                style={{
                  color: palette.textMuted,
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.18em",
                }}
              >
                · NO COLD EMAILS · NO SALES CALLS UNTIL YOU'RE READY
              </span>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ═════════════════════════════════════════════════════════════
   SuccessState — shown after successful submit
   ═════════════════════════════════════════════════════════════ */
function SuccessState({ form, palette }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative overflow-hidden rounded-3xl border p-8 md:p-12"
      style={{
        borderColor: palette.border,
        background: palette.bg3,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full"
        style={{
          background: `radial-gradient(circle, ${palette.orange}33 0%, transparent 60%)`,
          filter: "blur(80px)",
        }}
      />
      <div className="relative">
        <div
          className="inline-flex h-12 w-12 items-center justify-center rounded-full"
          style={{
            background: `linear-gradient(135deg, ${palette.orange}, ${palette.amber})`,
          }}
        >
          <Check size={24} strokeWidth={3} color="#0a0a0a" />
        </div>
        <h2
          className="mt-6 font-extrabold"
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            letterSpacing: "-0.025em",
            color: palette.white,
            lineHeight: 1.1,
          }}
        >
          {form.successTitle}
        </h2>
        <p
          className="mt-4 max-w-lg text-base leading-relaxed"
          style={{ color: palette.textDim }}
        >
          {form.successBody}
        </p>
      </div>
    </motion.div>
  )
}

/* ═════════════════════════════════════════════════════════════
   Field primitives
   ═════════════════════════════════════════════════════════════ */
function FieldLabel({ children, required, palette }) {
  return (
    <label
      className="block text-[11px]"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: "0.22em",
        color: palette.textDim,
        textTransform: "uppercase",
      }}
    >
      {children}
      {required && (
        <span style={{ color: palette.orange, marginLeft: 4 }}>*</span>
      )}
    </label>
  )
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required,
  palette,
}) {
  return (
    <div>
      <FieldLabel palette={palette} required={required}>
        {label}
      </FieldLabel>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-[rgba(241,143,0,0.6)]"
        style={{
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          borderColor: error ? palette.danger : palette.borderStrong,
          background: "rgba(255,255,255,0.03)",
          color: palette.text,
        }}
      />
      {error && (
        <p className="mt-2 text-xs" style={{ color: palette.danger }}>
          {error}
        </p>
      )}
    </div>
  )
}

/* ═════════════════════════════════════════════════════════════
   SideInfo — email / WhatsApp / phone / socials / studio
   ═════════════════════════════════════════════════════════════ */
function SideInfo({ sideInfo, palette }) {
  return (
    <motion.aside {...revealUp(0.15)}>
      <span
        className="block text-[11px]"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.24em",
          color: palette.textMuted,
          textTransform: "uppercase",
        }}
      >
        {sideInfo.kicker}
      </span>

      {/* Channels */}
      <div className="mt-5 flex flex-col gap-2">
        {sideInfo.channels.map((c) => {
          const Icon = channelIcon[c.kind] || Mail
          const isMailOrTel =
            c.href.startsWith("mailto:") || c.href.startsWith("tel:")
          return (
            <a
              key={c.label}
              href={c.href}
              target={isMailOrTel ? undefined : "_blank"}
              rel={isMailOrTel ? undefined : "noreferrer"}
              className="group flex items-center gap-4 rounded-2xl border px-5 py-4 transition-all hover:bg-white/[0.03]"
              style={{
                borderColor: palette.border,
                background: "rgba(255,255,255,0.015)",
              }}
            >
              <span
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{
                  background: `${palette.orange}14`,
                  color: palette.orange,
                }}
              >
                <Icon size={18} strokeWidth={2} />
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className="block truncate text-sm font-semibold"
                  style={{
                    fontFamily:
                      "'Plus Jakarta Sans', system-ui, sans-serif",
                    color: palette.white,
                  }}
                >
                  {c.label}
                </span>
                <span
                  className="block truncate text-xs"
                  style={{ color: palette.textMuted }}
                >
                  {c.sub}
                </span>
              </span>
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="shrink-0 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-70"
                style={{ color: palette.white }}
              />
            </a>
          )
        })}
      </div>

      {/* Studio / location */}
      <div
        className="mt-6 rounded-2xl border p-5"
        style={{
          borderColor: palette.border,
          background: "rgba(255,255,255,0.015)",
        }}
      >
        <div className="flex items-start gap-4">
          <span
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{
              background: `${palette.amber}14`,
              color: palette.amber,
            }}
          >
            <MapPin size={18} strokeWidth={2} />
          </span>
          <div>
            <span
              className="block text-[10px]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.22em",
                color: palette.textMuted,
                textTransform: "uppercase",
              }}
            >
              {sideInfo.location.label}
            </span>
            <span
              className="mt-1 block text-sm font-semibold"
              style={{
                fontFamily:
                  "'Plus Jakarta Sans', system-ui, sans-serif",
                color: palette.white,
              }}
            >
              {sideInfo.location.city}
            </span>
            <span
              className="mt-0.5 block text-xs"
              style={{ color: palette.textMuted }}
            >
              {sideInfo.location.note}
            </span>
          </div>
        </div>
      </div>

      {/* Status pill */}
      <div
        className="mt-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-2"
        style={{
          borderColor: palette.border,
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <span className="relative inline-flex h-1.5 w-1.5">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full"
            style={{ background: palette.orange, opacity: 0.6 }}
          />
          <span
            className="relative inline-flex h-1.5 w-1.5 rounded-full"
            style={{ background: palette.orange }}
          />
        </span>
        <span
          className="text-[10px] uppercase"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.22em",
            color: palette.textDim,
          }}
        >
          {sideInfo.statusNote}
        </span>
      </div>
    </motion.aside>
  )
}

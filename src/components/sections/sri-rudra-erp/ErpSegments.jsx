import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Truck,
  Boxes,
  Hammer,
  Send,
  Bell,
  CheckCircle2,
  ChevronRight,
  Package,
} from "lucide-react";
import MiniLoop from "./MiniLoop";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Top-level wrapper — renders all 4 segments in order
export default function ErpSegments({ data, palette }) {
  const segments = [
    { key: "sourcing", data: data.segments.sourcing, viz: SourcingViz, side: "right" },
    { key: "production", data: data.segments.production, viz: ProductionViz, side: "left" },
    { key: "distribution", data: data.segments.distribution, viz: DistributionViz, side: "right" },
    { key: "replenishment", data: data.segments.replenishment, viz: ReplenishmentViz, side: "left" },
  ];

  return (
    <>
      {segments.map((s, i) => (
        <SegmentSection
          key={s.key}
          segment={s.data}
          Viz={s.viz}
          side={s.side}
          palette={palette}
          alt={i % 2 === 1}
        />
      ))}
    </>
  );
}

// ─── Section wrapper ─────────────────────────────────
function SegmentSection({ segment, Viz, side, palette, alt }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const textCol = (
    <div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
        className="mb-7"
      >
        <MiniLoop activeKey={segment.key} palette={palette} size={72} />
      </motion.div>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={1}
        className="font-bold tracking-[-0.02em] leading-none mb-3"
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: "clamp(2.2rem, 4.8vw, 3.4rem)",
          color: palette.ink,
        }}
      >
        {segment.title}
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={2}
        className="text-lg mb-7"
        style={{
          color: palette.saffronDeep,
          fontFamily: "'Instrument Serif', serif",
          fontStyle: "italic",
        }}
      >
        {segment.tagline}
      </motion.p>

      <div className="space-y-4 mb-9 max-w-[520px]">
        {segment.narrative.map((p, i) => (
          <motion.p
            key={i}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3 + i}
            className="text-[0.98rem] leading-relaxed"
            style={{
              color: palette.inkSoft,
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            {p}
          </motion.p>
        ))}
      </div>

      {/* Module chips */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={5}
        className="space-y-2.5 mb-8"
      >
        {segment.modules.map((m) => (
          <div
            key={m.name}
            className="flex items-start gap-3 py-2.5 border-b"
            style={{ borderColor: palette.rule }}
          >
            <ChevronRight
              size={13}
              className="mt-1 flex-shrink-0"
              style={{ color: palette.saffronDeep }}
            />
            <div className="flex-1 min-w-0">
              <div
                className="text-sm font-semibold mb-0.5"
                style={{ color: palette.ink, fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {m.name}
              </div>
              <div
                className="text-[0.82rem]"
                style={{ color: palette.inkMute, fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {m.desc}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Stat callout */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={6}
        className="inline-flex items-baseline gap-3 px-5 py-3.5 rounded-lg"
        style={{
          background: palette.brassSoft,
          border: `1px solid ${palette.brass}33`,
        }}
      >
        <span
          className="font-bold tracking-tight"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: palette.saffronDeep,
          }}
        >
          {segment.stat.value}
        </span>
        <span
          className="text-xs uppercase tracking-[0.15em]"
          style={{ color: palette.inkSoft, fontFamily: "'JetBrains Mono', monospace" }}
        >
          {segment.stat.label}
        </span>
      </motion.div>
    </div>
  );

  const vizCol = (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={2}
      className="relative"
    >
      {/* Honesty label — these are illustrated module flows, not real screenshots */}
      <div
        className="absolute -top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
        style={{
          background: palette.terminal,
          border: `1px solid ${palette.saffron}40`,
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: palette.saffron }}
        />
        <span
          className="text-[0.55rem] tracking-[0.2em] uppercase font-semibold"
          style={{ color: palette.saffron, fontFamily: "'JetBrains Mono', monospace" }}
        >
          Module flow · illustrative
        </span>
      </div>
      <Viz palette={palette} inView={inView} />
    </motion.div>
  );

  return (
    <section
      ref={ref}
      className="relative py-20 lg:py-28"
      style={{ background: alt ? palette.paper : palette.base }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {side === "right" ? (
            <>
              {textCol}
              {vizCol}
            </>
          ) : (
            <>
              <div className="order-2 lg:order-1">{vizCol}</div>
              <div className="order-1 lg:order-2">{textCol}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════
// VIZ 01 — SOURCING: Purchase Order document mockup
// ═══════════════════════════════════════════════════
function SourcingViz({ palette }) {
  return (
    <div
      className="relative rounded-xl p-6 lg:p-7 shadow-[0_12px_40px_-12px_rgba(26,15,8,0.18)]"
      style={{
        background: palette.paper,
        border: `1px solid ${palette.paperEdge}`,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5 pb-4 border-b" style={{ borderColor: palette.rule }}>
        <div>
          <div
            className="text-[0.6rem] tracking-[0.22em] uppercase mb-1.5"
            style={{ color: palette.inkMute, fontFamily: "'JetBrains Mono', monospace" }}
          >
            Purchase Order
          </div>
          <div
            className="text-xl font-bold"
            style={{ color: palette.ink, fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            PO-2026-00428
          </div>
        </div>
        <StatusPill label="In Transit" color={palette.info} palette={palette} icon={Truck} />
      </div>

      {/* Vendor row */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        <KVPair k="Vendor" v="Vendor — Coastal AP" palette={palette} />
        <KVPair k="GST" v="18%" palette={palette} />
        <KVPair k="Raised" v="2026-05-08" palette={palette} />
        <KVPair k="Expected" v="2026-05-14" palette={palette} />
      </div>

      {/* LR Tracking strip */}
      <div
        className="rounded-md p-3.5 mb-5"
        style={{
          background: palette.terminal,
          border: `1px solid ${palette.terminalLine}`,
        }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span
            className="text-[0.58rem] tracking-[0.2em] uppercase font-semibold"
            style={{ color: palette.saffron, fontFamily: "'JetBrains Mono', monospace" }}
          >
            LR · TR-449821
          </span>
          <span
            className="text-[0.7rem]"
            style={{ color: "rgba(245,238,221,0.55)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            In transit · ETA 14 May
          </span>
        </div>
        {/* Tracking bar */}
        <div className="relative h-1 rounded-full" style={{ background: "rgba(232,169,60,0.15)" }}>
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ background: palette.saffron }}
            initial={{ width: "0%" }}
            animate={{ width: "62%" }}
            transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
            style={{
              background: palette.saffron,
              boxShadow: `0 0 12px ${palette.saffron}`,
            }}
            initial={{ left: "0%" }}
            animate={{ left: "62%" }}
            transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="flex justify-between mt-2 text-[0.58rem]" style={{ color: "rgba(245,238,221,0.45)", fontFamily: "'JetBrains Mono', monospace" }}>
          <span>RAISED</span>
          <span>DISPATCHED</span>
          <span style={{ color: palette.saffron }}>IN TRANSIT</span>
          <span>RECEIVED</span>
        </div>
      </div>

      {/* Line items */}
      <div className="space-y-2.5">
        {[
          { code: "RM00742", name: "Clay base · 6 inch", qty: "300 pcs", amount: "₹15,900" },
          { code: "RM00740", name: "Brass shell · standard", qty: "450 pcs", amount: "₹22,500" },
          { code: "RM00734", name: "Terasila · 40×70", qty: "100 pcs", amount: "₹12,000" },
        ].map((item, i) => (
          <motion.div
            key={item.code}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
            className="flex items-center justify-between py-2 px-3 rounded"
            style={{ background: palette.base }}
          >
            <div className="flex items-center gap-3">
              <span
                className="text-[0.6rem] px-1.5 py-0.5 rounded"
                style={{
                  background: palette.brassSoft,
                  color: palette.brass,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {item.code}
              </span>
              <span
                className="text-[0.85rem]"
                style={{ color: palette.ink, fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {item.name}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span
                className="text-[0.75rem]"
                style={{ color: palette.inkMute, fontFamily: "'JetBrains Mono', monospace" }}
              >
                {item.qty}
              </span>
              <span
                className="text-[0.85rem] font-semibold"
                style={{ color: palette.ink, fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {item.amount}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════
// VIZ 02 — PRODUCTION: Worklog entry mockup
// ═══════════════════════════════════════════════════
function ProductionViz({ palette }) {
  return (
    <div
      className="relative rounded-xl p-6 lg:p-7 shadow-[0_12px_40px_-12px_rgba(26,15,8,0.18)]"
      style={{
        background: palette.paper,
        border: `1px solid ${palette.paperEdge}`,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5 pb-4 border-b" style={{ borderColor: palette.rule }}>
        <div>
          <div
            className="text-[0.6rem] tracking-[0.22em] uppercase mb-1.5"
            style={{ color: palette.inkMute, fontFamily: "'JetBrains Mono', monospace" }}
          >
            Production Worklog
          </div>
          <div
            className="text-xl font-bold"
            style={{ color: palette.ink, fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Shift · 11 May 2026
          </div>
        </div>
        <StatusPill label="Logged" color={palette.pass} palette={palette} icon={CheckCircle2} />
      </div>

      {/* Employee row */}
      <div className="flex items-center gap-3 mb-5 p-3 rounded-md" style={{ background: palette.base }}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
          style={{
            background: palette.saffronDeep,
            color: palette.base,
            fontFamily: "'Bricolage Grotesque', sans-serif",
          }}
        >
          P.M
        </div>
        <div className="flex-1 min-w-0">
          <div
            className="text-sm font-semibold"
            style={{ color: palette.ink, fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Operator · ID-0214
          </div>
          <div
            className="text-[0.72rem]"
            style={{ color: palette.inkMute, fontFamily: "'JetBrains Mono', monospace" }}
          >
            Production · Day shift
          </div>
        </div>
        <div className="text-right">
          <div
            className="text-lg font-bold"
            style={{ color: palette.ink, fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            8.0h
          </div>
          <div
            className="text-[0.6rem] tracking-[0.15em] uppercase"
            style={{ color: palette.inkMute, fontFamily: "'JetBrains Mono', monospace" }}
          >
            Hours
          </div>
        </div>
      </div>

      {/* RM → FG flow */}
      <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center mb-5">
        {/* RM Consumed */}
        <div
          className="p-3.5 rounded-md"
          style={{ background: palette.brassSoft, border: `1px solid ${palette.brass}33` }}
        >
          <div
            className="text-[0.55rem] tracking-[0.22em] uppercase mb-1.5"
            style={{ color: palette.brass, fontFamily: "'JetBrains Mono', monospace" }}
          >
            RM Consumed
          </div>
          <div
            className="text-2xl font-bold leading-none mb-0.5"
            style={{ color: palette.ink, fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            642
          </div>
          <div className="text-[0.65rem]" style={{ color: palette.inkSoft, fontFamily: "'JetBrains Mono', monospace" }}>
            units · 3 SKUs
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center">
          <Hammer size={20} style={{ color: palette.saffronDeep }} />
        </div>

        {/* FG Produced */}
        <div
          className="p-3.5 rounded-md"
          style={{
            background: `${palette.pass}11`,
            border: `1px solid ${palette.pass}33`,
          }}
        >
          <div
            className="text-[0.55rem] tracking-[0.22em] uppercase mb-1.5"
            style={{ color: palette.pass, fontFamily: "'JetBrains Mono', monospace" }}
          >
            FG Produced
          </div>
          <div
            className="text-2xl font-bold leading-none mb-0.5"
            style={{ color: palette.ink, fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            636
          </div>
          <div className="text-[0.65rem]" style={{ color: palette.inkSoft, fontFamily: "'JetBrains Mono', monospace" }}>
            units · finished
          </div>
        </div>
      </div>

      {/* Wastage bar */}
      <div className="p-3.5 rounded-md" style={{ background: palette.base }}>
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-[0.62rem] tracking-[0.22em] uppercase font-semibold"
            style={{ color: palette.inkSoft, fontFamily: "'JetBrains Mono', monospace" }}
          >
            Wastage
          </span>
          <span
            className="text-sm font-bold"
            style={{ color: palette.pass, fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            6 units · 0.9%
          </span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: palette.rule }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: palette.pass }}
            initial={{ width: "0%" }}
            whileInView={{ width: "0.9%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.7 }}
          />
        </div>
        <div
          className="text-[0.6rem] mt-1.5"
          style={{ color: palette.inkMute, fontFamily: "'JetBrains Mono', monospace" }}
        >
          Floor average · 0.8% · below threshold
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════
// VIZ 03 — DISTRIBUTION: Order status board
// ═══════════════════════════════════════════════════
function DistributionViz({ palette }) {
  const orders = [
    { label: "Delivered", count: 71, value: "₹31,79,318", color: palette.pass, pct: 100 },
    { label: "Pending", count: 8, value: "₹3,38,255", color: palette.fail, pct: 28 },
    { label: "On hold", count: 5, value: "₹26,552", color: palette.info, pct: 18 },
    { label: "Shipped", count: 2, value: "₹59,299", color: palette.brass, pct: 11 },
    { label: "Partial", count: 1, value: "₹35,478", color: palette.warn, pct: 6 },
  ];

  return (
    <div
      className="relative rounded-xl p-6 lg:p-7 shadow-[0_12px_40px_-12px_rgba(26,15,8,0.18)]"
      style={{
        background: palette.paper,
        border: `1px solid ${palette.paperEdge}`,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5 pb-4 border-b" style={{ borderColor: palette.rule }}>
        <div>
          <div
            className="text-[0.6rem] tracking-[0.22em] uppercase mb-1.5"
            style={{ color: palette.inkMute, fontFamily: "'JetBrains Mono', monospace" }}
          >
            Outward Orders · This month
          </div>
          <div
            className="text-xl font-bold"
            style={{ color: palette.ink, fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Order Status Breakdown
          </div>
        </div>
        <Send size={22} style={{ color: palette.saffronDeep }} />
      </div>

      {/* Bars */}
      <div className="space-y-3.5 mb-5">
        {orders.map((o, i) => (
          <div key={o.label}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: o.color }}
                />
                <span
                  className="text-[0.85rem] font-semibold"
                  style={{ color: palette.ink, fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {o.label}
                </span>
                <span
                  className="text-[0.65rem] px-1.5 py-0.5 rounded"
                  style={{
                    background: `${o.color}22`,
                    color: o.color,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {o.count}
                </span>
              </div>
              <span
                className="text-[0.78rem] font-semibold"
                style={{ color: palette.inkSoft, fontFamily: "'JetBrains Mono', monospace" }}
              >
                {o.value}
              </span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: palette.rule }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: o.color }}
                initial={{ width: "0%" }}
                whileInView={{ width: `${o.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Destination split */}
      <div className="grid grid-cols-3 gap-2 pt-4 border-t" style={{ borderColor: palette.rule }}>
        {[
          { label: "B2B Customers", value: "48", icon: Package },
          { label: "Franchises", value: "29", icon: Boxes },
          { label: "Internal", value: "10", icon: ChevronRight },
        ].map((d) => (
          <div
            key={d.label}
            className="p-3 rounded text-center"
            style={{ background: palette.base }}
          >
            <d.icon size={14} className="mx-auto mb-1.5" style={{ color: palette.saffronDeep }} />
            <div
              className="text-lg font-bold leading-none mb-1"
              style={{ color: palette.ink, fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {d.value}
            </div>
            <div
              className="text-[0.55rem] tracking-[0.15em] uppercase"
              style={{ color: palette.inkMute, fontFamily: "'JetBrains Mono', monospace" }}
            >
              {d.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════
// VIZ 04 — REPLENISHMENT: Low stock alert panel
// ═══════════════════════════════════════════════════
function ReplenishmentViz({ palette }) {
  const items = [
    { code: "RM00735", name: "Okhali", stock: 0, reorder: 20, status: "out" },
    { code: "RM00736", name: "Book stand · Rehal 10″", stock: 0, reorder: 30, status: "out" },
    { code: "RM00737", name: "Matrhri · wooden kavvam", stock: 0, reorder: 25, status: "out" },
    { code: "RM00738", name: "Chowki HC-5", stock: 12, reorder: 40, status: "low" },
    { code: "RM00742", name: "Clay Ganesh · 2 ft plain", stock: 66, reorder: 80, status: "low" },
  ];

  const statusMap = {
    out: { label: "OUT", color: palette.fail },
    low: { label: "LOW", color: palette.warn },
  };

  return (
    <div
      className="relative rounded-xl p-6 lg:p-7 shadow-[0_12px_40px_-12px_rgba(26,15,8,0.18)]"
      style={{
        background: palette.paper,
        border: `1px solid ${palette.paperEdge}`,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5 pb-4 border-b" style={{ borderColor: palette.rule }}>
        <div>
          <div
            className="text-[0.6rem] tracking-[0.22em] uppercase mb-1.5"
            style={{ color: palette.inkMute, fontFamily: "'JetBrains Mono', monospace" }}
          >
            Low Stock Alert
          </div>
          <div
            className="text-xl font-bold"
            style={{ color: palette.ink, fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Items below reorder level
          </div>
        </div>
        <div className="relative">
          <Bell size={22} style={{ color: palette.fail }} />
          <span
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[0.5rem] font-bold"
            style={{ background: palette.fail, color: palette.base, fontFamily: "'JetBrains Mono', monospace" }}
          >
            95
          </span>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        <SummaryCard label="Total" value="719" color={palette.ink} bg={palette.base} palette={palette} />
        <SummaryCard label="Low" value="0" color={palette.warn} bg={`${palette.warn}11`} palette={palette} />
        <SummaryCard label="Out" value="95" color={palette.fail} bg={`${palette.fail}11`} palette={palette} />
      </div>

      {/* List */}
      <div className="space-y-1.5">
        {items.map((item, i) => {
          const status = statusMap[item.status];
          const pct = item.reorder > 0 ? Math.min(100, (item.stock / item.reorder) * 100) : 0;
          return (
            <motion.div
              key={item.code}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
              className="grid grid-cols-[auto_1fr_auto_auto] gap-3 items-center py-2 px-3 rounded"
              style={{ background: palette.base }}
            >
              <span
                className="text-[0.6rem] px-1.5 py-0.5 rounded"
                style={{
                  background: palette.brassSoft,
                  color: palette.brass,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {item.code}
              </span>
              <span
                className="text-[0.82rem] truncate"
                style={{ color: palette.ink, fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {item.name}
              </span>
              <div className="flex items-center gap-2">
                <div className="w-12 h-1 rounded-full overflow-hidden" style={{ background: palette.rule }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: status.color }}
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.07 }}
                  />
                </div>
                <span
                  className="text-[0.68rem] font-semibold w-12 text-right"
                  style={{ color: palette.inkSoft, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {item.stock}/{item.reorder}
                </span>
              </div>
              <span
                className="text-[0.55rem] px-1.5 py-0.5 rounded font-bold tracking-wider"
                style={{
                  background: `${status.color}22`,
                  color: status.color,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {status.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Action footer */}
      <div
        className="mt-4 px-3 py-2.5 rounded flex items-center justify-between"
        style={{ background: palette.terminal }}
      >
        <span
          className="text-[0.65rem] tracking-[0.15em] uppercase"
          style={{ color: palette.saffron, fontFamily: "'JetBrains Mono', monospace" }}
        >
          → Auto-suggest reorder cycle
        </span>
        <span
          className="text-[0.65rem]"
          style={{ color: "rgba(245,238,221,0.55)", fontFamily: "'JetBrains Mono', monospace" }}
        >
          loop restarts
        </span>
      </div>
    </div>
  );
}

// ─── Shared sub-components ───────────────────────────
function StatusPill({ label, color, palette, icon: Icon }) {
  return (
    <div
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.68rem] font-semibold"
      style={{
        background: `${color}11`,
        border: `1px solid ${color}33`,
        color: color,
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {Icon && <Icon size={11} />}
      {label}
    </div>
  );
}

function KVPair({ k, v, palette }) {
  return (
    <div>
      <div
        className="text-[0.55rem] tracking-[0.22em] uppercase mb-0.5"
        style={{ color: palette.inkMute, fontFamily: "'JetBrains Mono', monospace" }}
      >
        {k}
      </div>
      <div
        className="text-[0.88rem] font-semibold"
        style={{ color: palette.ink, fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        {v}
      </div>
    </div>
  );
}

function SummaryCard({ label, value, color, bg, palette }) {
  return (
    <div className="text-center p-2.5 rounded" style={{ background: bg, border: `1px solid ${color}22` }}>
      <div
        className="text-[0.55rem] tracking-[0.2em] uppercase mb-1"
        style={{ color: palette.inkMute, fontFamily: "'JetBrains Mono', monospace" }}
      >
        {label}
      </div>
      <div
        className="text-xl font-bold leading-none"
        style={{ color: color, fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        {value}
      </div>
    </div>
  );
}

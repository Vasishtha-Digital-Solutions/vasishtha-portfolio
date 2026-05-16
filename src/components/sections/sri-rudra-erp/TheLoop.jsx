import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// ─── Geometry ────────────────────────────────────────
const SIZE = 700;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R_ARC = 200;
const R_HIT = 200;
const R_LINE_IN = 213;
const R_LINE_OUT = 235;
const R_MODULE = 252;
const R_DOT = R_ARC;

// 4 segments, each 90° going clockwise from top
const SEGMENTS = [
  { key: "sourcing", n: "01", name: "Sourcing", from: 270, to: 360 },
  { key: "production", n: "02", name: "Production", from: 0, to: 90 },
  { key: "distribution", n: "03", name: "Distribution", from: 90, to: 180 },
  { key: "replenishment", n: "04", name: "Replenishment", from: 180, to: 270 },
];

const MODULES = {
  sourcing: [
    { name: "Vendors", offset: 0.22 },
    { name: "Purchase Orders", offset: 0.5 },
    { name: "LR Tracking", offset: 0.78 },
  ],
  production: [
    { name: "Worklogs", offset: 0.22 },
    { name: "Finished Goods", offset: 0.5 },
    { name: "Wastage", offset: 0.78 },
  ],
  distribution: [
    { name: "Outward Orders", offset: 0.22 },
    { name: "Franchises", offset: 0.5 },
    { name: "Customers", offset: 0.78 },
  ],
  replenishment: [
    { name: "Low Stock", offset: 0.22 },
    { name: "Reorders", offset: 0.5 },
    { name: "Categories", offset: 0.78 },
  ],
};

// Per-segment live stat — consistent grammar:
//   value · unit (noun) · context phrase (where/when/scope)
const SEGMENT_STAT = {
  sourcing:     { value: "719",  unit: "RM SKUs", note: "in current catalogue" },
  production:   { value: "0.8%", unit: "wastage", note: "across 60 operators" },
  distribution: { value: "87",   unit: "orders",  note: "delivered this month" },
  replenishment:{ value: "95",   unit: "items",   note: "below reorder level" },
};

// ─── Helpers ─────────────────────────────────────────
const polar = (angle, radius) => {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
};

const arcPath = (from, to, radius) => {
  const start = polar(from, radius);
  const end = polar(to, radius);
  const largeArc = to - from > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
};

const wedgePath = (from, to, radius) => {
  const start = polar(from, radius);
  const end = polar(to, radius);
  const largeArc = to - from > 180 ? 1 : 0;
  return `M ${CX} ${CY} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y} Z`;
};

const angleFor = (seg, offset) => seg.from + (seg.to - seg.from) * offset;

const textAnchorAt = (angle) => {
  if (angle > 350 || angle < 10) return "middle";
  if (angle > 170 && angle < 190) return "middle";
  if (angle > 10 && angle < 170) return "start";
  return "end";
};

// ─── Main component ──────────────────────────────────
export default function TheLoop({ data, palette }) {
  const [autoKey, setAutoKey] = useState("sourcing");
  const [hoveredKey, setHoveredKey] = useState(null);
  const [hasEntered, setHasEntered] = useState(false);

  // Hold the entry state longer so the reader can parse the headline + sub
  // before the loop starts moving (was 1.8s — now 4s).
  useEffect(() => {
    const t = setTimeout(() => setHasEntered(true), 4000);
    return () => clearTimeout(t);
  }, []);

  // Subsequent advances every 2.8s (was 2.4s — gives a beat to read each stat)
  useEffect(() => {
    if (!hasEntered || hoveredKey) return;
    const t = setTimeout(() => {
      const idx = SEGMENTS.findIndex((s) => s.key === autoKey);
      setAutoKey(SEGMENTS[(idx + 1) % SEGMENTS.length].key);
    }, 2800);
    return () => clearTimeout(t);
  }, [autoKey, hoveredKey, hasEntered]);

  const activeKey = hoveredKey || autoKey;
  const activeSeg = SEGMENTS.find((s) => s.key === activeKey);
  const activeStat = SEGMENT_STAT[activeKey];
  const activeModules = MODULES[activeKey];

  return (
    <div className="relative w-full max-w-[700px] mx-auto">
      {/* SVG container (kept aspect-square so the loop scales correctly) */}
      <div className="relative aspect-square">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="w-full h-full"
          style={{ overflow: "visible" }}
          role="img"
          aria-label="Diagram of the four-segment business loop the ERP runs on: Sourcing, Production, Distribution, Replenishment."
        >
          <defs>
            <filter id="dot-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="core-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={palette.saffron} stopOpacity="0.20" />
              <stop offset="60%" stopColor={palette.saffron} stopOpacity="0.04" />
              <stop offset="100%" stopColor={palette.saffron} stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx={CX} cy={CY} r={R_ARC} fill="url(#core-grad)" />

          <motion.circle
            cx={CX}
            cy={CY}
            r={R_ARC}
            fill="none"
            stroke={palette.ink}
            strokeOpacity="0.10"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />

          {SEGMENTS.map((seg, segIdx) => {
            const isActive = seg.key === activeKey;
            const isDimmed = activeKey && !isActive;
            return (
              <g key={seg.key}>
                {/* Hover hit-wedge */}
                <path
                  d={wedgePath(seg.from, seg.to, R_HIT + 70)}
                  fill="transparent"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHoveredKey(seg.key)}
                  onMouseLeave={() => setHoveredKey(null)}
                />

                {/* Arc */}
                <motion.path
                  d={arcPath(seg.from + 3, seg.to - 3, R_ARC)}
                  fill="none"
                  stroke={palette.saffron}
                  strokeWidth={isActive ? 4 : 2}
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: isActive ? 1 : isDimmed ? 0.25 : 0.6,
                  }}
                  transition={{
                    pathLength: { duration: 1.2, delay: 0.3 + segIdx * 0.12, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.5 },
                    strokeWidth: { duration: 0.4 },
                  }}
                  style={{ pointerEvents: "none" }}
                />

                {/* Module connector lines + labels — bumped to 16px for readability */}
                {MODULES[seg.key].map((mod, modIdx) => {
                  const angle = angleFor(seg, mod.offset);
                  const lineStart = polar(angle, R_LINE_IN);
                  const lineEnd = polar(angle, R_LINE_OUT);
                  const labelPos = polar(angle, R_MODULE);
                  const anchor = textAnchorAt(angle);

                  return (
                    <motion.g
                      key={mod.name}
                      className="hidden md:inline"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isActive ? 1 : isDimmed ? 0.28 : 0.7,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: hasEntered ? 0 : 1.0 + segIdx * 0.12 + modIdx * 0.06,
                      }}
                      style={{ pointerEvents: "none" }}
                    >
                      <line
                        x1={lineStart.x}
                        y1={lineStart.y}
                        x2={lineEnd.x}
                        y2={lineEnd.y}
                        stroke={isActive ? palette.saffron : palette.brass}
                        strokeOpacity={isActive ? 0.85 : 0.35}
                        strokeWidth={isActive ? 1.6 : 1.1}
                      />
                      <circle
                        cx={lineEnd.x}
                        cy={lineEnd.y}
                        r={isActive ? 3.5 : 2.4}
                        fill={isActive ? palette.saffron : palette.brass}
                        opacity={isActive ? 1 : 0.5}
                      />
                      <text
                        x={labelPos.x + (anchor === "start" ? 9 : anchor === "end" ? -9 : 0)}
                        y={labelPos.y}
                        textAnchor={anchor}
                        dominantBaseline="middle"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "16px",
                          fontWeight: isActive ? 600 : 500,
                          fill: isActive ? palette.ink : palette.inkSoft,
                          letterSpacing: "0.01em",
                        }}
                      >
                        {mod.name}
                      </text>
                    </motion.g>
                  );
                })}

                {isActive && (
                  <g filter="url(#dot-glow)" style={{ pointerEvents: "none" }}>
                    <motion.circle
                      cx={polar((seg.from + seg.to) / 2, R_DOT).x}
                      cy={polar((seg.from + seg.to) / 2, R_DOT).y}
                      r="7"
                      fill={palette.saffron}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                    />
                    <circle
                      cx={polar((seg.from + seg.to) / 2, R_DOT).x}
                      cy={polar((seg.from + seg.to) / 2, R_DOT).y}
                      r="7"
                      fill="none"
                      stroke={palette.saffron}
                      strokeOpacity="0.5"
                    >
                      <animate
                        attributeName="r"
                        values="7;18;7"
                        dur="2.8s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="stroke-opacity"
                        values="0.5;0;0.5"
                        dur="2.8s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                )}
              </g>
            );
          })}

          <motion.g
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ pointerEvents: "none" }}
          >
            <circle
              cx={CX}
              cy={CY}
              r="110"
              fill={palette.terminal}
              stroke={palette.saffron}
              strokeOpacity="0.35"
              strokeWidth="1"
            />
            <circle
              cx={CX}
              cy={CY}
              r="102"
              fill="none"
              stroke={palette.saffron}
              strokeOpacity="0.12"
              strokeWidth="0.6"
              strokeDasharray="3 4"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 ${CX} ${CY}`}
                to={`360 ${CX} ${CY}`}
                dur="55s"
                repeatCount="indefinite"
              />
            </circle>
          </motion.g>
        </svg>

        {/* HTML overlay — live segment readout, cross-fades on cycle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="rounded-full flex items-center justify-center text-center"
            style={{ width: "31%", height: "31%" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeKey}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center px-3"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-[0.55rem] tracking-[0.25em] font-bold"
                    style={{ color: palette.saffron, fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {activeSeg.n}
                  </span>
                  <span
                    className="w-3 h-px"
                    style={{ background: palette.saffron, opacity: 0.5 }}
                  />
                  <span
                    className="text-[0.62rem] tracking-[0.22em] uppercase font-semibold"
                    style={{ color: palette.base, fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {activeSeg.name}
                  </span>
                </div>

                <div
                  className="font-bold leading-none tracking-[-0.02em] mb-1"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    color: palette.base,
                    fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
                  }}
                >
                  {activeStat.value}
                </div>
                <div
                  className="text-[0.68rem] mb-1.5"
                  style={{
                    color: "rgba(245,238,221,0.6)",
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                  }}
                >
                  {activeStat.unit}
                </div>

                <div className="flex items-center gap-1.5">
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{
                      background: palette.saffron,
                      boxShadow: `0 0 6px ${palette.saffron}`,
                      animation: "loop-pulse 1.6s ease-in-out infinite",
                    }}
                  />
                  <span
                    className="text-[0.5rem] tracking-[0.22em] uppercase"
                    style={{ color: palette.saffron, fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {activeStat.note}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile-only: active segment modules panel — solves the "mobile loop is half-empty" critique */}
      <div className="md:hidden mt-6 px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: palette.saffron,
                boxShadow: `0 0 6px ${palette.saffron}`,
              }}
            />
            <span
              className="text-[0.55rem] tracking-[0.22em] uppercase font-semibold"
              style={{ color: palette.brass, fontFamily: "'JetBrains Mono', monospace" }}
            >
              {activeSeg.n} · {activeSeg.name}
            </span>
          </div>
          <span
            className="text-[0.55rem] tracking-[0.18em] uppercase"
            style={{ color: palette.inkMute, fontFamily: "'JetBrains Mono', monospace" }}
          >
            Modules in this loop
          </span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-1.5"
          >
            {activeModules.map((mod) => (
              <span
                key={mod.name}
                className="px-2.5 py-1.5 rounded text-[0.7rem]"
                style={{
                  background: palette.paper,
                  color: palette.ink,
                  fontFamily: "'JetBrains Mono', monospace",
                  border: `1px solid ${palette.paperEdge}`,
                }}
              >
                {mod.name}
              </span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop-only: discovery hint — surfaces the hover interaction */}
      <div
        className="hidden md:flex items-center justify-center gap-2 mt-5"
      >
        <span
          className="text-[0.55rem] tracking-[0.22em] uppercase font-semibold"
          style={{ color: palette.inkMute, fontFamily: "'JetBrains Mono', monospace" }}
        >
          ↻ Auto-cycling
        </span>
        <span style={{ color: palette.inkFaint }}>·</span>
        <span
          className="text-[0.55rem] tracking-[0.22em] uppercase font-semibold"
          style={{ color: palette.brass, fontFamily: "'JetBrains Mono', monospace" }}
        >
          Hover any segment to pause
        </span>
      </div>

      <style>{`
        @keyframes loop-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.45; transform: scale(1.4); }
        }
      `}</style>
    </div>
  );
}

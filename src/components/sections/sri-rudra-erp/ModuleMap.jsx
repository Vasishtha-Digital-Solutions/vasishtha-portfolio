import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Boxes,
  ClipboardList,
  Hammer,
  Send,
  LayoutDashboard,
  Store,
  Users,
  BarChart3,
  Settings,
  ArrowUpRight,
} from "lucide-react";

const iconMap = {
  Boxes, ClipboardList, Hammer, Send, LayoutDashboard,
  Store, Users, BarChart3, Settings,
};

// 3x3 grid positions for spoke geometry — column/row in [0..2]
const CARD_POSITIONS = {
  inventory:   { col: 0, row: 0 },
  purchase:    { col: 1, row: 0 },
  production:  { col: 2, row: 0 },
  sales:       { col: 0, row: 1 },
  dashboard:   { col: 1, row: 1 },
  franchise:   { col: 2, row: 1 },
  hr:          { col: 0, row: 2 },
  reports:     { col: 1, row: 2 },
  settings:    { col: 2, row: 2 },
};

// Build a curved arrow path from (1,1) centre to a target cell centre.
// Adds a slight perpendicular offset to the control point for hand-drawn feel.
function curvedPath(targetCol, targetRow) {
  // Normalized cell-centre coords on a 0..3 grid → map to 0..100 viewBox
  const fromX = 50;
  const fromY = 50;
  const toX = ((targetCol + 0.5) / 3) * 100;
  const toY = ((targetRow + 0.5) / 3) * 100;

  // Vector from -> to
  const dx = toX - fromX;
  const dy = toY - fromY;
  const len = Math.sqrt(dx * dx + dy * dy);

  // Pull the line back at both ends so it doesn't overlap the cards
  const inset = 9;
  const ux = dx / len;
  const uy = dy / len;
  const ax = fromX + ux * inset;
  const ay = fromY + uy * inset;
  const bx = toX - ux * inset;
  const by = toY - uy * inset;

  // Mid + small perpendicular nudge for a gentle curve
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;
  // Perpendicular unit vector (rotate ux,uy by 90°)
  const px = -uy;
  const py = ux;
  // Curve amount — small, hand-drawn feel
  const curve = 2.5;
  const cx = mx + px * curve;
  const cy = my + py * curve;

  return {
    path: `M ${ax} ${ay} Q ${cx} ${cy} ${bx} ${by}`,
    endX: bx,
    endY: by,
    angleDeg: (Math.atan2(by - cy, bx - cx) * 180) / Math.PI,
  };
}

export default function ModuleMap({ data, palette }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hoveredId, setHoveredId] = useState(null);
  const { moduleMap } = data;

  return (
    <div ref={ref} className="relative">
      {/* Transition line — connects to the principles above */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4 flex items-center gap-3"
      >
        <div className="h-px flex-1 max-w-[80px]" style={{ background: palette.rule }} />
        <span
          className="text-[0.7rem] tracking-wide"
          style={{
            color: palette.brass,
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
          }}
        >
          {moduleMap.transition}
        </span>
        <div className="h-px flex-1" style={{ background: palette.rule }} />
      </motion.div>

      {/* Heading row + illustrative pill */}
      <div className="flex items-start justify-between gap-4 mb-8 lg:mb-10">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold tracking-[-0.02em] leading-[1.05] mb-3"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              color: palette.ink,
            }}
          >
            {moduleMap.heading}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-[0.95rem] leading-relaxed max-w-[640px]"
            style={{
              color: palette.inkSoft,
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            {moduleMap.sub}
          </motion.p>
        </div>

        {/* Illustrative honesty pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="hidden sm:flex flex-shrink-0 items-center gap-1.5 px-2.5 py-1 rounded-full"
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
            className="text-[0.55rem] tracking-[0.2em] uppercase font-semibold whitespace-nowrap"
            style={{ color: palette.saffron, fontFamily: "'JetBrains Mono', monospace" }}
          >
            Module Map · Illustrative
          </span>
        </motion.div>
      </div>

      {/* The map */}
      <div className="relative">
        {/* Spokes — curved arrows from Dashboard outward (lg+ only) */}
        <svg
          className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {moduleMap.modules
            .filter((m) => !m.isCenter)
            .map((m, i) => {
              const pos = CARD_POSITIONS[m.id];
              const { path } = curvedPath(pos.col, pos.row);
              const hovered = hoveredId === m.id;
              return (
                <motion.path
                  key={m.id}
                  d={path}
                  fill="none"
                  stroke={palette.saffron}
                  strokeOpacity={hovered ? "0.85" : "0.35"}
                  strokeWidth={hovered ? "0.32" : "0.16"}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{
                    duration: 1.0,
                    delay: 0.5 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              );
            })}
        </svg>

        {/* 3x3 grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 auto-rows-fr">
          {moduleMap.modules.map((mod, i) => {
            const Icon = iconMap[mod.icon];
            if (mod.isCenter) {
              return (
                <DashboardCore
                  key={mod.id}
                  mod={mod}
                  Icon={Icon}
                  palette={palette}
                  inView={inView}
                  delay={0.3 + i * 0.05}
                />
              );
            }
            return (
              <ModuleCard
                key={mod.id}
                mod={mod}
                Icon={Icon}
                palette={palette}
                inView={inView}
                delay={0.3 + i * 0.05}
                isHovered={hoveredId === mod.id}
                onHoverStart={() => setHoveredId(mod.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Module Card (the 8 surrounding cards) ─────────────
function ModuleCard({ mod, Icon, palette, inView, delay, isHovered, onHoverStart, onHoverEnd }) {
  const subCount = mod.subs.length;

  return (
    <motion.article
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="relative rounded-xl p-5 lg:p-[22px] overflow-hidden transition-shadow duration-300 cursor-default flex flex-col"
      style={{
        background: `linear-gradient(135deg, ${palette.paper}, ${palette.base})`,
        border: `1px solid ${isHovered ? `${palette.saffron}60` : palette.paperEdge}`,
        boxShadow: isHovered
          ? `0 1px 2px rgba(26,15,8,0.05), 0 16px 38px -12px rgba(214,144,32,0.28)`
          : `0 1px 2px rgba(26,15,8,0.03), 0 10px 28px -16px rgba(26,15,8,0.14)`,
      }}
    >
      {/* Inner top-edge highlight */}
      <div
        className="absolute top-0 left-3 right-3 h-px pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${palette.paperEdge}, transparent)`,
        }}
      />

      {/* Top row — sub-module count + hover arrow */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-[0.62rem] tracking-[0.22em] uppercase font-semibold"
          style={{
            color: palette.brass,
            fontFamily: "'JetBrains Mono', monospace",
            opacity: 0.85,
          }}
        >
          {subCount} {subCount === 1 ? "sub-module" : "sub-modules"}
        </span>

        <motion.div
          initial={{ opacity: 0, x: -4 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : -4,
          }}
          transition={{ duration: 0.25 }}
        >
          <ArrowUpRight
            size={14}
            style={{ color: palette.saffronDeep }}
          />
        </motion.div>
      </div>

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
        style={{
          background: isHovered ? `${palette.saffron}22` : palette.brassSoft,
          border: `1px solid ${isHovered ? `${palette.saffron}50` : `${palette.brass}25`}`,
          transition: "all 300ms",
        }}
      >
        {Icon && (
          <Icon
            size={20}
            style={{ color: isHovered ? palette.saffronDeep : palette.brass }}
          />
        )}
      </div>

      {/* Module name */}
      <h4
        className="text-lg lg:text-xl font-bold tracking-tight leading-tight mb-4"
        style={{
          color: palette.ink,
          fontFamily: "'Bricolage Grotesque', sans-serif",
        }}
      >
        {mod.name}
      </h4>

      {/* Sub-module chips */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {mod.subs.map((sub) => (
          <span
            key={sub}
            className="px-2 py-1 rounded text-[0.65rem] leading-tight"
            style={{
              background: isHovered ? palette.base : "rgba(26,15,8,0.04)",
              color: palette.inkSoft,
              fontFamily: "'JetBrains Mono', monospace",
              border: `1px solid ${isHovered ? palette.paperEdge : "transparent"}`,
              transition: "all 300ms",
            }}
          >
            {sub}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

// ─── Dashboard Core (centre cell — entry point, NOT architectural hub) ──
function DashboardCore({ mod, Icon, palette, inView, delay }) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-xl p-5 lg:p-[22px] overflow-hidden flex flex-col"
      style={{
        background: `radial-gradient(circle at 30% 20%, #1a0e08, ${palette.terminal})`,
        border: `1px solid ${palette.saffron}40`,
        boxShadow: `0 1px 2px rgba(0,0,0,0.5), 0 20px 52px -18px rgba(232,169,60,0.4), inset 0 1px 0 ${palette.saffron}20`,
      }}
    >
      {/* Saffron grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${palette.saffron} 1px, transparent 1px), linear-gradient(90deg, ${palette.saffron} 1px, transparent 1px)`,
          backgroundSize: "14px 14px",
        }}
      />

      {/* Top row — entry-point label + the one pulsing LED on the page */}
      <div className="relative flex items-center justify-between mb-4">
        <span
          className="text-[0.6rem] tracking-[0.22em] uppercase font-semibold"
          style={{ color: palette.saffron, fontFamily: "'JetBrains Mono', monospace" }}
        >
          {mod.coreLabel}
        </span>
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: palette.saffron,
            boxShadow: `0 0 8px ${palette.saffron}`,
            animation: "core-pulse 1.6s ease-in-out infinite",
          }}
        />
      </div>

      {/* Icon */}
      <div
        className="relative w-11 h-11 rounded-lg flex items-center justify-center mb-4"
        style={{
          background: `${palette.saffron}18`,
          border: `1px solid ${palette.saffron}50`,
        }}
      >
        {Icon && <Icon size={20} style={{ color: palette.saffron }} />}
      </div>

      {/* Name */}
      <h4
        className="relative text-lg lg:text-xl font-bold tracking-tight leading-tight mb-1"
        style={{
          color: palette.base,
          fontFamily: "'Bricolage Grotesque', sans-serif",
        }}
      >
        {mod.name}
      </h4>

      <p
        className="relative text-[0.7rem] mb-4"
        style={{
          color: "rgba(245,238,221,0.55)",
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {mod.coreNote}
      </p>

      {/* Sub-module chips — saffron-tinted to match the core treatment */}
      <div className="relative flex flex-wrap gap-1.5 mt-auto">
        {mod.subs.map((sub) => (
          <span
            key={sub}
            className="px-2 py-1 rounded text-[0.65rem] leading-tight"
            style={{
              background: `${palette.saffron}10`,
              color: "rgba(245,238,221,0.8)",
              fontFamily: "'JetBrains Mono', monospace",
              border: `1px solid ${palette.saffron}28`,
            }}
          >
            {sub}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes core-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.4; transform: scale(1.5); }
        }
      `}</style>
    </motion.article>
  );
}

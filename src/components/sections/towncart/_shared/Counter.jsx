import { useRef, useState } from "react";
import { motion } from "framer-motion";

/* ═════════════════════════════════════════════════════════════
   TOWNCART — SHARED COUNTER COMPONENT
   Animates an integer from 0 → target when the element scrolls
   into view. Cubic ease-out over 1500ms (matches the original
   counter in towncart-case-study.html). Fires once, so the
   number won't re-animate on scroll-back.

   Props
     target    — terminal integer
     comma     — format with Indian locale commas ("1,200")
     duration  — animation duration in ms (default 1500)
   ═════════════════════════════════════════════════════════════ */

export default function Counter({ target, comma = false, duration = 1500 }) {
  const [value, setValue] = useState(0);
  const triggered = useRef(false);

  const format = (n) => (comma ? n.toLocaleString("en-IN") : n);

  return (
    <motion.span
      className="inline-block"
      style={{ minWidth: "1ch" }}
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={() => {
        if (triggered.current) return;
        triggered.current = true;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3); // cubic ease-out
          setValue(Math.floor(target * eased));
          if (p < 1) requestAnimationFrame(tick);
          else setValue(target);
        };
        requestAnimationFrame(tick);
      }}
    >
      {format(value)}
    </motion.span>
  );
}

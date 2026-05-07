import { motion } from "framer-motion";

/* ═════════════════════════════════════════════════════════════
   TOWNCART — SHARED PHONE-FRAME COMPONENT
   Dark mobile phone body with a notched top bar, 9:19 aspect,
   layered shadow, and a gentle float animation. Children render
   inside the screen area (rounded 24px, paper background).

   Props
     index     — 0-based position, used to stagger float + set
                 a subtle base rotation per phone (-2 / 0 / +2°)
     float     — boolean, default true. Turn off for static.
     children  — whatever goes inside the screen (the ad content)
   ═════════════════════════════════════════════════════════════ */

export default function PhoneFrame({
  index = 0,
  float = true,
  baseRotate,
  children,
}) {
  // Desktop gives every phone a slight tilt so the row feels hand-placed.
  // Middle phone sits upright, outer phones tilt outward.
  const rotation =
    typeof baseRotate === "number"
      ? baseRotate
      : index === 0
      ? -2
      : index === 2
      ? 2
      : 0;

  // Stagger float start times so the three phones never bob in sync.
  const floatDelay = [0, 1.5, 0.7][index % 3];

  return (
    <motion.div
      className="relative w-full"
      style={{
        aspectRatio: "9 / 19",
        background: "linear-gradient(180deg, #1a1410, #0a0606)",
        borderRadius: 32,
        padding: 10,
        boxShadow:
          "0 26px 52px -14px rgba(0, 0, 0, 0.6), 0 10px 20px -4px rgba(0, 0, 0, 0.35), inset 0 0 0 2px rgba(255, 255, 255, 0.08)",
        willChange: "transform",
      }}
      initial={{ opacity: 0, y: 40, rotate: rotation, scale: 0.96 }}
      whileInView={{
        opacity: 1,
        y: float ? [0, -10, 0] : 0,
        rotate: rotation,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        opacity: { duration: 0.9, delay: 0.15 + index * 0.12 },
        scale: { duration: 0.9, delay: 0.15 + index * 0.12 },
        rotate: { duration: 0.9, delay: 0.15 + index * 0.12 },
        y: float
          ? {
              duration: 5 + index * 0.6,
              delay: 1.2 + floatDelay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }
          : { duration: 0.9, delay: 0.15 + index * 0.12 },
      }}
      whileHover={{
        y: -14,
        rotate: 0,
        scale: 1.03,
        transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
      }}
    >
      {/* Notch pill at the top */}
      <span
        aria-hidden="true"
        className="absolute"
        style={{
          top: 18,
          left: "50%",
          transform: "translateX(-50%)",
          width: 55,
          height: 6,
          background: "#0a0606",
          borderRadius: 3,
          zIndex: 10,
        }}
      />

      {/* Screen */}
      <div
        className="w-full h-full flex flex-col overflow-hidden"
        style={{
          borderRadius: 24,
          background: "#FEFCF5",
          position: "relative",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

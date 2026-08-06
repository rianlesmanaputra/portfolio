import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* letter-by-letter split */
function SplitText({ text, className, delay = 0, stagger = 0.04 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading"); // "loading" | "reveal" | "exit"

  /* ── simulate loading progress ── */
  useEffect(() => {
    let current = 0;
    const tick = () => {
      const increment = current < 70 ? 2 : current < 90 ? 1 : 0.5;
      current = Math.min(current + increment, 100);
      setProgress(Math.floor(current));
      if (current < 100) {
        setTimeout(tick, 15);
      } else {
        /* pause, then switch to reveal phase */
        setTimeout(() => setPhase("reveal"), 400);
        /* then trigger exit */
        setTimeout(() => setPhase("exit"), 1500);
        /* finally unmount after exit animation */
        setTimeout(() => onComplete?.(), 2300);
      }
    };
    const t = setTimeout(tick, 200);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "#020617" }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* ── GRID BG (Lightweight) ── */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* ── CONTENT ── */}
          <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">

            {/* Logo icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-[#020617] mb-2"
              style={{
                background: "linear-gradient(135deg, #22d3ee, #818cf8)",
                boxShadow: "0 0 30px rgba(34,211,238,0.3)",
              }}
            >
              R
            </motion.div>

            {/* Name with letter animation */}
            <div style={{ fontFamily: "Outfit, sans-serif", perspective: 800 }}>
              <div className="text-4xl md:text-6xl font-extrabold text-white leading-none overflow-hidden">
                <SplitText text="Rian Lesmana" delay={0.2} stagger={0.04} />
              </div>
              <div
                className="text-4xl md:text-6xl font-extrabold leading-none overflow-hidden mt-1"
                style={{
                  background: "linear-gradient(135deg, #22d3ee, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <SplitText text="Putra" delay={0.5} stagger={0.05} />
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-gray-500 text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Fullstack Web Developer
            </motion.p>

            {/* Progress bar area */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col items-center gap-3 mt-4 w-64"
            >
              {/* Bar */}
              <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #22d3ee, #818cf8)",
                    width: `${progress}%`,
                  }}
                />
              </div>

              {/* Counter */}
              <div className="flex items-baseline gap-0.5 mt-2">
                <motion.span
                  className="text-2xl font-bold tabular-nums"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(135deg, #22d3ee, #818cf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {String(progress).padStart(3, "0")}
                </motion.span>
                <span className="text-gray-500 text-sm font-light">%</span>
              </div>
            </motion.div>

            {/* Ready message */}
            <AnimatePresence>
              {phase === "reveal" && (
                <motion.p
                  key="ready"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-cyan-400 text-sm font-medium tracking-widest mt-2"
                >
                  ✦ Siap Ditampilkan ✦
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

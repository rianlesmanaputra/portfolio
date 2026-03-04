import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* ── tiny seeded random so positions stay consistent ── */
function seededRnd(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

/* particle data generated once */
const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: seededRnd(i * 3) * 100,
  y: seededRnd(i * 7) * 100,
  size: seededRnd(i * 11) * 3 + 1,
  dur: seededRnd(i * 5) * 4 + 3,
  delay: seededRnd(i * 13) * 3,
  opacity: seededRnd(i * 17) * 0.5 + 0.1,
}));

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
      const increment = current < 70 ? 1.8 : current < 90 ? 0.8 : 0.4;
      current = Math.min(current + increment, 100);
      setProgress(Math.floor(current));
      if (current < 100) {
        setTimeout(tick, 20);
      } else {
        /* pause, then switch to reveal phase */
        setTimeout(() => setPhase("reveal"), 400);
        /* then trigger exit */
        setTimeout(() => setPhase("exit"), 1800);
        /* finally unmount after exit animation */
        setTimeout(() => onComplete?.(), 2600);
      }
    };
    const t = setTimeout(tick, 300);
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
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* ── GRID BG ── */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* ── PARTICLES ── */}
          <div className="absolute inset-0 pointer-events-none">
            {PARTICLES.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full bg-cyan-400"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.size,
                }}
                animate={{
                  opacity: [0, p.opacity, 0],
                  y: [0, -30, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: p.dur,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* ── LARGE GLOW ORBS ── */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(34,211,238,0.12), transparent 70%)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full blur-[120px] pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(129,140,248,0.1), transparent 70%)",
              top: "60%",
              left: "60%",
            }}
            animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* ── SPINNING RINGS ── */}
          <div className="absolute">
            <motion.div
              className="w-72 h-72 rounded-full border border-cyan-400/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="absolute">
            <motion.div
              className="w-96 h-96 rounded-full border border-indigo-400/8"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="absolute">
            <motion.div
              className="w-[30rem] h-[30rem] rounded-full border border-cyan-400/5"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
          </div>

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
                boxShadow: "0 0 40px rgba(34,211,238,0.4)",
              }}
            >
              R
            </motion.div>

            {/* Name with letter animation */}
            <div style={{ fontFamily: "Outfit, sans-serif", perspective: 800 }}>
              <div className="text-4xl md:text-6xl font-extrabold text-white leading-none overflow-hidden">
                <SplitText text="Rian Lesmana" delay={0.3} stagger={0.045} />
              </div>
              <div
                className="text-4xl md:text-6xl font-extrabold leading-none overflow-hidden mt-1"
                style={{
                  background: "linear-gradient(135deg, #22d3ee, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <SplitText text="Putra" delay={0.7} stagger={0.06} />
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-gray-500 text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Fullstack Web Developer
            </motion.p>

            {/* Progress bar area */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center gap-3 mt-2 w-64"
            >
              {/* Bar */}
              <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #22d3ee, #818cf8)",
                    boxShadow: "0 0 12px rgba(34,211,238,0.6)",
                    width: `${progress}%`,
                  }}
                />
                {/* shimmer */}
                <motion.div
                  className="absolute top-0 h-full w-12 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                    left: `${Math.max(0, progress - 10)}%`,
                  }}
                />
              </div>

              {/* Counter */}
              <div className="flex items-baseline gap-0.5">
                <motion.span
                  className="text-3xl font-bold tabular-nums"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    background: "linear-gradient(135deg, #22d3ee, #818cf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {String(progress).padStart(3, "0")}
                </motion.span>
                <span className="text-gray-500 text-lg font-light">%</span>
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
                  className="text-cyan-400 text-sm font-medium tracking-widest"
                >
                  ✦ Siap Ditampilkan ✦
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* ── CORNER DECORATIONS ── */}
          {[
            "top-6 left-6",
            "top-6 right-6 rotate-90",
            "bottom-6 left-6 -rotate-90",
            "bottom-6 right-6 rotate-180",
          ].map((pos, i) => (
            <motion.svg
              key={i}
              className={`absolute ${pos} text-cyan-400/20`}
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <path d="M0 0 L20 0 L0 20" stroke="currentColor" strokeWidth="1" />
            </motion.svg>
          ))}

          {/* ── SCAN LINE ── */}
          <motion.div
            className="absolute left-0 right-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)" }}
            initial={{ top: "-2%" }}
            animate={{ top: "102%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

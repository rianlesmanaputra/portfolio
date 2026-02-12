import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 18);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Glow background */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-white tracking-wide z-10"
      >
        Rian Lesmana Putra
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-gray-400 mt-2 mb-8 tracking-widest text-sm z-10"
      >
        FULLSTACK WEB DEVELOPER
      </motion.p>

      {/* Progress Bar */}
      <div className="w-64 h-[3px] bg-gray-800 rounded-full overflow-hidden z-10">
        <motion.div
          className="h-full bg-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>

      {/* Percentage */}
      <p className="text-gray-500 text-xs mt-4 z-10">{progress}%</p>
    </motion.div>
  );
}

export default Loader;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import TypingText from "./TypingText";

function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28 relative overflow-hidden"
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 100, -100, 0], y: [0, 80, -80, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Profile Image */}
      <motion.img
        src="/tes.png"
        alt="Profile"
        className="w-44 h-44 rounded-full object-cover border-4 border-cyan-400 shadow-xl mb-8 cursor-pointer z-10"
        whileHover={{ scale: 1.08 }}
        animate={{ y: [0, -12, 0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => setShowModal(true)}
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold mb-4 z-10"
      >
        Rian Lesmana Putra
      </motion.h1>

      {/* Typing Effect */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-gray-400 mb-6 z-10"
      >
        <p className="text-gray-400 mb-6 z-10 text-lg">
          <TypingText
            texts={[
              "Fullstack Web Developer",
              "Laravel & React Specialist",
              "Building Elegant Web Applications",
            ]}
          />
        </p>
      </motion.p>

      {/* Social Media Icons */}
      <div className="flex gap-6 text-2xl text-gray-400 z-10">
        <a
          href="https://instagram.com/rianlesmana17"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://github.com/USERNAME_KAMU"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/USERNAME_KAMU"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* MODAL ZOOM FOTO */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.img
              src="/tes.png"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-400"
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.6 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Hero;

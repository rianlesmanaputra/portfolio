import { motion } from "framer-motion";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiLaravel,
  SiReact,
  SiMysql,
  SiJavascript,
} from "react-icons/si";
import { HiArrowDown, HiDownload } from "react-icons/hi";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/",
    label: "Instagram",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/",
    label: "WhatsApp",
  },
];

const techBadges = [
  { icon: SiLaravel, label: "Laravel", color: "#FF2D20", pos: "top-4 -right-12" },
  { icon: SiReact, label: "React", color: "#61DAFB", pos: "bottom-16 -right-16" },
  { icon: SiMysql, label: "MySQL", color: "#00758F", pos: "top-16 -left-16" },
  { icon: SiJavascript, label: "JS", color: "#F7DF1E", pos: "bottom-4 -left-8" },
];

const stats = [
  { value: "10+", label: "Proyek Selesai" },
  { value: "2+", label: "Tahun Pengalaman" },
  { value: "5+", label: "Klien Puas" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* GLOW ORBS */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ========== LEFT ========== */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass border border-cyan-400/20 text-cyan-400 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Tersedia untuk Proyek Baru
            </motion.div>

            {/* NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-4 tracking-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Hi, Saya{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-indigo-400 animate-gradient-x">
                  Rian
                </span>
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 animate-gradient-x">
                Lesmana Putra
              </span>
            </motion.h1>

            {/* ROLE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-3 mb-6 justify-center md:justify-start"
            >
              <div className="h-px w-8 bg-cyan-400/50" />
              <p className="text-lg md:text-xl text-gray-300 font-medium">
                Fullstack Web Developer
              </p>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-gray-400 max-w-xl leading-relaxed mb-10 mx-auto md:mx-0"
            >
              Saya membangun aplikasi web modern yang rapi, efisien, dan mudah
              digunakan. Fokus pada{" "}
              <span className="text-cyan-400">performa tinggi</span> dan{" "}
              <span className="text-cyan-400">pengalaman pengguna terbaik</span>.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10"
            >
              <a href="#projects" className="btn-primary">
                Lihat Proyek
                <span className="ml-1">→</span>
              </a>
              <a href="#contact" className="btn-secondary">
                Hubungi Saya
              </a>
            </motion.div>

            {/* SOCIALS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg glass border border-white/8 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/8 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ========== RIGHT ========== */}
          <motion.div
            className="relative flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {/* OUTER RING GLOW */}
            <div className="absolute w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full border border-cyan-400/10 animate-spin-slow" />
            <div
              className="absolute w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full border border-cyan-400/5"
              style={{ animation: "spin-slow 30s linear infinite reverse" }}
            />

            {/* GLOW blob */}
            <motion.div
              className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-500/15 blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* PHOTO FRAME */}
            <div className="relative z-10 mt-8 md:mt-0">
              <div className="p-[2px] rounded-[32px] bg-gradient-to-br from-cyan-400/70 via-indigo-400/40 to-transparent">
                <div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-[30px] glass relative overflow-hidden"
                >
                  {/* Inner decoration */}
                  <div className="absolute inset-4 rounded-[22px] border border-cyan-400/15" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-indigo-500/5" />
                </div>
              </div>

              {/* PHOTO */}
              <motion.img
                src="/tes-removebg-preview.png"
                alt="Rian Lesmana Putra"
                loading="eager"
                decoding="async"
                className="absolute w-64 h-64 md:w-80 md:h-80 object-cover rounded-[30px] -top-6 -left-6 shadow-[0_30px_90px_rgba(34,211,238,0.3)] z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.03 }}
              />

              {/* TECH FLOATING BADGES */}
              {techBadges.map(({ icon: Icon, label, color, pos }, i) => (
                <motion.div
                  key={label}
                  className={`absolute z-30 ${pos} flex items-center gap-2 px-3 py-2 rounded-xl glass border border-white/10 text-xs font-semibold shadow-xl`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.15, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon size={14} style={{ color }} />
                  <span className="text-gray-200">{label}</span>
                </motion.div>
              ))}

              {/* EXPERIENCE BADGE */}
              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 px-4 py-3 rounded-2xl glass border border-white/10 shadow-xl whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center text-[#020617] font-bold text-sm">2+</div>
                <div>
                  <p className="text-white text-xs font-semibold">Tahun</p>
                  <p className="text-gray-400 text-[10px]">Pengalaman</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ========== STATS ROW ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-3 gap-4 mt-24 max-w-md mx-auto md:mx-0"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center md:text-left">
              <p
                className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {value}
              </p>
              <p className="text-gray-500 text-xs mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* SCROLL DOWN ARROW */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <HiArrowDown size={18} />
      </motion.a>
    </section>
  );
}

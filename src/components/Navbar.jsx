import { useEffect, useState, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "Tentang" },
  { id: "skills", label: "Keahlian" },
  { id: "projects", label: "Proyek" },
  { id: "certificates", label: "Sertifikat" },
  { id: "contact", label: "Kontak" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((window.scrollY / docHeight) * 100, 100);
      setScrollProgress(progress);
      setScrolled(window.scrollY > 30);

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[100] bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-indigo-400"
          style={{ width: `${scrollProgress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed top-[2px] left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#020617]/85 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* LOGO */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
            onClick={() => setOpen(false)}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center text-sm font-bold text-[#020617] group-hover:scale-110 transition-transform duration-300">
              R
            </div>
            <span className="text-lg font-bold text-white tracking-wide font-[Outfit]">
              Lesmana<span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 block ${
                    active === item.id
                      ? "text-cyan-400"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-cyan-400/10 border border-cyan-400/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA BUTTON */}
          <a
            href="#contact"
            className="hidden md:flex btn-primary text-sm py-2.5"
          >
            Hubungi Saya
          </a>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-white/8 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <FiX size={20} /> : <FiMenu size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#020617]/97 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col items-center justify-center h-full gap-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`text-2xl font-medium transition-all duration-300 ${
                      active === item.id ? "text-cyan-400" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.06 }}
              >
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-4">
                  Hubungi Saya
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", link: "#home" },
    { name: "Tentang", link: "#about" },
    { name: "Keahlian", link: "#skills" },
    { name: "Proyek", link: "#projects" },
    { name: "Sertifikat", link: "#certificates" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Nama */}
        <a href="#home" className="text-xl font-bold text-white">
          Lesmana<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {menu.map((item, i) => (
            <li key={i}>
              <a href={item.link} className="hover:text-cyan-400 transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
          >
            <ul className="flex flex-col items-center gap-6 py-8 text-gray-300">
              {menu.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="text-lg hover:text-cyan-400 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

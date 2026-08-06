import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Keahlian" },
  { href: "#projects", label: "Proyek" },
  { href: "#certificates", label: "Sertifikat" },
  { href: "#contact", label: "Kontak" },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/rianlesmanaputra", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/rian-lesmana-putra", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://instagram.com/rianlesmana17", label: "Instagram" },
  { icon: FaWhatsapp, href: "https://wa.me/6282268131855", label: "WhatsApp" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* GLOW */}
      <div className="absolute inset-x-0 -top-32 h-48 bg-gradient-to-b from-cyan-400/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-14">
        {/* TOP */}
        <div className="grid gap-10 md:grid-cols-3 mb-12">
          {/* BRAND */}
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center text-sm font-bold text-[#020617]">
                R
              </div>
              <span className="text-lg font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                Lesmana<span className="text-cyan-400">.</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Fullstack Web Developer yang membangun aplikasi web modern, cepat, dan elegan dengan perhatian penuh pada pengalaman pengguna.
            </p>
          </div>

          {/* NAV */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm">Navigasi</h4>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-500 hover:text-cyan-400 transition-colors text-sm group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-cyan-400 transition-all duration-300" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL + BACK TO TOP */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm">Ikuti Saya</h4>
            <div className="flex gap-3 mb-8">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl glass border border-white/8 text-gray-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-400 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg glass border border-white/8 flex items-center justify-center group-hover:border-cyan-400/30 transition-all">
                <HiArrowUp size={14} />
              </div>
              Kembali ke Atas
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Rian Lesmana Putra. All rights reserved.
          </p>
          <p className="text-gray-700 text-sm">
            Built with{" "}
            <span className="text-cyan-400">React</span>,{" "}
            <span className="text-cyan-400">Vite</span> &{" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

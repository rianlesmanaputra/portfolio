import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaNewspaper, FaBuilding, FaLock, FaBookOpen } from "react-icons/fa";

const projects = [
  {
    title: "Majalah Serindit",
    desc: "Platform majalah digital resmi Kemendikdasmen yang menampilkan konten budaya, pendidikan, dan sastra Melayu secara interaktif dan modern.",
    category: "Web App",
    tags: ["Laravel", "MySQL", "Bootstrap", "PHP"],
    tagColors: ["#FF2D20", "#00758F", "#7952B3", "#8993be"],
    live: "https://majalahserindit.kemendikdasmen.go.id/",
    year: "2025",
    status: "Live",
    icon: FaNewspaper,
    accent: "from-cyan-400 to-blue-500",
    iconBg: "rgba(6,182,212,0.12)",
    iconColor: "#22d3ee",
  },
  {
    title: "Balai Bahasa Riau – Profil",
    desc: "Website profil resmi Balai Bahasa Riau, Kemendikdasmen, menampilkan informasi kelembagaan, program kerja, dan layanan kebahasaan.",
    category: "Web App",
    tags: ["Laravel", "Tailwind", "PHP", "MySQL"],
    tagColors: ["#FF2D20", "#06B6D4", "#8993be", "#00758F"],
    live: "https://balaibahasariau.kemendikdasmen.go.id/profil/tentang",
    year: "2025",
    status: "Live",
    icon: FaBuilding,
    accent: "from-indigo-400 to-purple-500",
    iconBg: "rgba(99,102,241,0.12)",
    iconColor: "#818cf8",
  },
  {
    title: "PPID Balai Bahasa Riau",
    desc: "Sistem informasi PPID (Pejabat Pengelola Informasi dan Dokumentasi) Balai Bahasa Riau dengan manajemen kegiatan dan autentikasi pengguna.",
    category: "Web App",
    tags: ["Laravel", "MySQL", "Bootstrap", "Auth"],
    tagColors: ["#FF2D20", "#00758F", "#7952B3", "#fb923c"],
    live: "https://ppidbbpriau.kemendikdasmen.go.id/sistem_kegiatan/login",
    year: "2025",
    status: "Live",
    icon: FaLock,
    accent: "from-amber-400 to-orange-500",
    iconBg: "rgba(251,191,36,0.12)",
    iconColor: "#fbbf24",
  },
  {
    title: "Pustaka Bahasa Riau – BERTUAH",
    desc: "Portal digital perpustakaan BERTUAH milik Balai Bahasa Riau, menyediakan akses koleksi penelitian, publikasi, dan karya sastra daerah.",
    category: "Web App",
    tags: ["Laravel", "MySQL", "Vite", "PHP"],
    tagColors: ["#FF2D20", "#00758F", "#646CFF", "#8993be"],
    live: "https://pustakabahasariau.kemendikdasmen.go.id/penelitian/bertuah/public/",
    year: "2025",
    status: "Live",
    icon: FaBookOpen,
    accent: "from-emerald-400 to-teal-500",
    iconBg: "rgba(52,211,153,0.12)",
    iconColor: "#34d399",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-4"
        >
          <span className="section-label">Proyek</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Karya yang Telah Saya{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            Bangun
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-xl mx-auto mb-12"
        >
          Koleksi proyek terpilih yang menunjukkan kemampuan teknis dan kreativitas saya dalam membangun solusi digital nyata untuk instansi pemerintah.
        </motion.p>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass glass-hover rounded-2xl overflow-hidden flex flex-col group"
                >
                  {/* TOP ACCENT */}
                  <div className={`h-1 bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="p-6 flex flex-col h-full">
                    {/* HEADER */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-xl border flex items-center justify-center"
                        style={{ background: project.iconBg, borderColor: `${project.iconColor}30` }}
                      >
                        <IconComponent style={{ color: project.iconColor }} size={22} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{project.year}</span>
                        <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <h3
                      className="text-lg font-bold text-white mb-3 transition-colors duration-300"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      <span
                        className="group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                        style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                      >
                        {project.title}
                      </span>
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                      {project.desc}
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, ti) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-lg font-medium"
                          style={{
                            background: `${project.tagColors[ti]}18`,
                            color: project.tagColors[ti],
                            border: `1px solid ${project.tagColors[ti]}30`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* VISIT BUTTON */}
                    <div className="pt-4 border-t border-white/5">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group/btn"
                        style={{
                          background: project.iconBg,
                          color: project.iconColor,
                          border: `1px solid ${project.iconColor}30`,
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = `${project.iconColor}25`;
                          e.currentTarget.style.borderColor = `${project.iconColor}60`;
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = project.iconBg;
                          e.currentTarget.style.borderColor = `${project.iconColor}30`;
                        }}
                      >
                        <FaExternalLinkAlt size={12} />
                        Kunjungi Website
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

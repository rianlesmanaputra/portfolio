import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiCode } from "react-icons/hi";

const filters = ["Semua", "Web App", "Backend", "UI/UX"];

const projects = [
  {
    title: "Sistem Informasi Sekolah",
    desc: "Sistem manajemen sekolah berbasis Laravel yang mencakup manajemen siswa, guru, jadwal, nilai, dan absensi secara terintegrasi.",
    category: "Web App",
    tags: ["Laravel", "MySQL", "Bootstrap", "PHP"],
    tagColors: ["#FF2D20", "#00758F", "#7952B3", "#8993be"],
    github: "#",
    live: "#",
    year: "2024",
    status: "Selesai",
  },
  {
    title: "Company Profile Website",
    desc: "Website company profile profesional untuk dinas pemerintahan dengan tampilan modern, responsif, dan mudah dikelola.",
    category: "UI/UX",
    tags: ["Laravel", "Tailwind", "Alpine.js"],
    tagColors: ["#FF2D20", "#06B6D4", "#77C1D2"],
    github: "#",
    live: "#",
    year: "2024",
    status: "Selesai",
  },
  {
    title: "React Admin Dashboard",
    desc: "Dashboard administrasi modern dengan integrasi REST API, visualisasi data real-time, manajemen user, dan role-based access control.",
    category: "Web App",
    tags: ["React", "JavaScript", "Tailwind", "MySQL"],
    tagColors: ["#61DAFB", "#F7DF1E", "#06B6D4", "#00758F"],
    github: "#",
    live: "#",
    year: "2025",
    status: "Selesai",
  },
  {
    title: "REST API E-Commerce",
    desc: "API backend e-commerce yang robust dengan autentikasi JWT, manajemen produk, kategori, keranjang, dan sistem order.",
    category: "Backend",
    tags: ["Laravel", "MySQL", "JWT", "REST API"],
    tagColors: ["#FF2D20", "#00758F", "#fb923c", "#22d3ee"],
    github: "#",
    live: null,
    year: "2025",
    status: "Selesai",
  },
  {
    title: "PKL Management System",
    desc: "Sistem manajemen PKL (Praktik Kerja Lapangan) untuk SMK dengan fitur absensi, jurnal harian, penilaian, dan laporan.",
    category: "Web App",
    tags: ["Laravel", "MySQL", "Bootstrap", "PHP"],
    tagColors: ["#FF2D20", "#00758F", "#7952B3", "#8993be"],
    github: "#",
    live: "#",
    year: "2025",
    status: "Selesai",
  },
  {
    title: "Digital Library App",
    desc: "Aplikasi perpustakaan digital dengan manajemen buku, majalah, sistem peminjaman, dan panel administrasi lengkap.",
    category: "Web App",
    tags: ["Laravel", "React", "MySQL", "Vite"],
    tagColors: ["#FF2D20", "#61DAFB", "#00758F", "#646CFF"],
    github: "#",
    live: "#",
    year: "2025",
    status: "Selesai",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filtered =
    activeFilter === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
          Koleksi proyek terpilih yang menunjukkan kemampuan teknis dan kreativitas saya dalam membangun solusi digital.
        </motion.p>

        {/* FILTER TABS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? "bg-cyan-400 text-[#020617]"
                  : "glass border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400/30"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="glass glass-hover rounded-2xl overflow-hidden flex flex-col group"
              >
                {/* TOP ACCENT */}
                <div className="h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-6 flex flex-col h-full">
                  {/* HEADER */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                      <HiCode className="text-cyan-400" size={22} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-600">{project.year}</span>
                      <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {project.title}
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

                  {/* LINKS */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={16} />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm ml-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt size={13} />
                        Live Demo
                      </a>
                    )}
                    <span className="ml-auto text-xs px-3 py-1 rounded-full glass border border-white/8 text-gray-500">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

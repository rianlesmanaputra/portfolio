import { motion } from "framer-motion";
import { HiAcademicCap, HiExternalLink } from "react-icons/hi";

const certificates = [
  {
    title: "Laravel Web Development",
    issuer: "Dicoding Indonesia",
    date: "2024",
    category: "Backend",
    color: "#FF2D20",
    desc: "Sertifikasi pengembangan web menggunakan framework Laravel.",
    credentialUrl: "#",
  },
  {
    title: "React Frontend Developer",
    issuer: "Dicoding Indonesia",
    date: "2024",
    category: "Frontend",
    color: "#61DAFB",
    desc: "Sertifikasi pengembangan antarmuka modern menggunakan React.",
    credentialUrl: "#",
  },
  {
    title: "JavaScript Essentials",
    issuer: "Cisco Networking Academy",
    date: "2023",
    category: "Programming",
    color: "#F7DF1E",
    desc: "Dasar-dasar pemrograman JavaScript untuk web modern.",
    credentialUrl: "#",
  },
  {
    title: "Web Design Fundamentals",
    issuer: "Google",
    date: "2023",
    category: "Design",
    color: "#4285F4",
    desc: "Prinsip-prinsip dasar desain web yang responsif dan aksesibel.",
    credentialUrl: "#",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-4"
        >
          <span className="section-label">Sertifikat</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-6"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Pencapaian &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            Sertifikasi
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-xl mx-auto mb-16"
        >
          Sertifikat dan pencapaian yang membuktikan komitmen saya dalam terus belajar dan berkembang.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass glass-hover rounded-2xl p-6 flex gap-5 group"
            >
              {/* ICON */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${cert.color}18`,
                  border: `1px solid ${cert.color}35`,
                  boxShadow: `0 0 20px ${cert.color}20`,
                }}
              >
                <HiAcademicCap size={26} style={{ color: cert.color }} />
              </div>

              {/* CONTENT */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {cert.title}
                  </h3>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-cyan-400 transition-colors flex-shrink-0 mt-0.5"
                  >
                    <HiExternalLink size={16} />
                  </a>
                </div>

                <p className="text-gray-400 text-xs mb-1">{cert.desc}</p>

                <div className="flex items-center justify-between mt-3">
                  <div>
                    <p className="text-gray-500 text-xs">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: `${cert.color}18`,
                        color: cert.color,
                        border: `1px solid ${cert.color}30`,
                      }}
                    >
                      {cert.category}
                    </span>
                    <span className="text-xs text-gray-600">{cert.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="btn-secondary inline-flex"
          >
            <HiAcademicCap size={18} />
            Lihat Semua Sertifikat
          </a>
        </motion.div>
      </div>
    </section>
  );
}

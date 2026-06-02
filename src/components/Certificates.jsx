import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiAcademicCap, HiX, HiOfficeBuilding, HiCalendar, HiBadgeCheck } from "react-icons/hi";
import { FaBuilding, FaGlobeAsia } from "react-icons/fa";

const certificates = [
  {
    title: "Certificate of Internship",
    issuer: "PT. Garuda Cyber Indonesia",
    date: "18 Sep 2023 – 31 Des 2023",
    year: "2023",
    category: "Internship",
    color: "#e11d48",
    icon: FaBuilding,
    desc: "Telah menyelesaikan program magang di PT. Garuda Cyber Indonesia dalam bidang Sistem Informasi Universitas Pasir Pengaraian.",
    detail: [
      { label: "Program", value: "Sistem Informasi Universitas Pasir Pengaraian" },
      { label: "Periode", value: "18 September 2023 – 31 Desember 2023" },
      { label: "Penerbit", value: "CEO Garuda Cyber Indonesia – Bantuan, S.T" },
      { label: "Pembimbing", value: "Kemal Aldian Faldano, S.AB" },
    ],
  },
  {
    title: "Sertifikat Magang – Pranata Komputer",
    issuer: "Balai Bahasa Provinsi Riau, Kemendikdasmen",
    date: "24 Nov 2025 – 23 Mei 2026",
    year: "2026",
    category: "Magang",
    color: "#2563eb",
    icon: FaGlobeAsia,
    desc: "Sertifikat resmi atas partisipasi dalam Program Magang Kementerian Ketenagakerjaan sebagai Pranata Komputer di Balai Bahasa Provinsi Riau.",
    detail: [
      { label: "Nomor", value: "34/SERTI/2026" },
      { label: "Posisi", value: "Pranata Komputer" },
      { label: "Periode", value: "24 November 2025 – 23 Mei 2026" },
      { label: "Penerbit", value: "Dr. Uni Kukum, M.Hum – Kepala Balai Bahasa Provinsi Riau" },
      { label: "Koordinator", value: "Michal Dennis, S.Kom" },
    ],
  },
  {
    title: "Sertifikat Dedikasi & Partisipasi",
    issuer: "Balai Bahasa Provinsi Riau, Kemendikdasmen",
    date: "24 Nov 2025 – 23 Mei 2026",
    year: "2026",
    category: "Penghargaan",
    color: "#0891b2",
    icon: HiAcademicCap,
    desc: "Sertifikat atas dedikasi dan partisipasi dalam menyelesaikan program Magang sebagai Pranata Komputer yang berkontribusi nyata di berbagai proyek.",
    detail: [
      { label: "Nomor", value: "35/SERTI/2026" },
      { label: "Posisi", value: "Pranata Komputer" },
      { label: "Periode", value: "24 November 2025 – 23 Mei 2026" },
      { label: "Penerbit", value: "Dr. Uni Kukum, M.Hum – Kepala Balai Bahasa Provinsi Riau" },
      { label: "Proyek", value: "BERTUAH, SERINDIT, SATYA (Laman Balai Bahasa Provinsi Riau)" },
    ],
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

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
          Sertifikat dan penghargaan yang membuktikan komitmen saya dalam program magang dan pengembangan profesional.
        </motion.p>

        {/* CERTIFICATES GRID */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, i) => {
            const IconComp = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="glass glass-hover rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
                onClick={() => setSelected(cert)}
              >
                {/* TOP BAR */}
                <div
                  className="h-1.5 w-full transition-all duration-300 group-hover:h-2"
                  style={{ background: `linear-gradient(to right, ${cert.color}, ${cert.color}99)` }}
                />

                <div className="p-6 flex flex-col h-full">
                  {/* ICON */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${cert.color}18`,
                      border: `1px solid ${cert.color}35`,
                      boxShadow: `0 0 24px ${cert.color}20`,
                    }}
                  >
                    <IconComp size={26} style={{ color: cert.color }} />
                  </div>

                  {/* YEAR BADGE */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs px-2.5 py-0.5 rounded-full font-semibold"
                      style={{
                        background: `${cert.color}18`,
                        color: cert.color,
                        border: `1px solid ${cert.color}30`,
                      }}
                    >
                      {cert.category}
                    </span>
                    <span className="text-xs text-gray-600">{cert.year}</span>
                  </div>

                  {/* TITLE */}
                  <h3
                    className="text-base font-bold text-white mb-2 leading-tight transition-colors duration-300 group-hover:text-cyan-400"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {cert.title}
                  </h3>

                  {/* ISSUER */}
                  <div className="flex items-start gap-1.5 mb-3">
                    <HiOfficeBuilding className="text-gray-500 mt-0.5 flex-shrink-0" size={13} />
                    <p className="text-gray-500 text-xs leading-snug">{cert.issuer}</p>
                  </div>

                  {/* DESC */}
                  <p className="text-gray-400 text-xs leading-relaxed flex-1 mb-4">
                    {cert.desc}
                  </p>

                  {/* DATE */}
                  <div className="flex items-center gap-1.5 pt-4 border-t border-white/5">
                    <HiCalendar className="text-gray-600" size={13} />
                    <span className="text-xs text-gray-600">{cert.date}</span>
                  </div>

                  {/* HOVER CTA */}
                  <div
                    className="mt-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1"
                    style={{ color: cert.color }}
                  >
                    <HiBadgeCheck size={14} />
                    Klik untuk detail
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MODAL DETAIL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ background: "rgba(2,6,23,0.85)", backdropFilter: "blur(8px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="glass rounded-2xl p-8 max-w-md w-full relative"
              style={{ border: `1px solid ${selected.color}30` }}
              onClick={e => e.stopPropagation()}
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <HiX size={16} />
              </button>

              {/* TOP GRADIENT */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: `linear-gradient(to right, ${selected.color}, ${selected.color}60)` }}
              />

              {/* ICON */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: `${selected.color}18`,
                  border: `1px solid ${selected.color}35`,
                  boxShadow: `0 0 30px ${selected.color}25`,
                }}
              >
                {(() => {
                  const IC = selected.icon;
                  return <IC size={30} style={{ color: selected.color }} />;
                })()}
              </div>

              <span
                className="text-xs px-2.5 py-0.5 rounded-full font-semibold mb-3 inline-block"
                style={{
                  background: `${selected.color}18`,
                  color: selected.color,
                  border: `1px solid ${selected.color}30`,
                }}
              >
                {selected.category}
              </span>

              <h3
                className="text-xl font-bold text-white mb-1 leading-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {selected.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6">{selected.issuer}</p>

              {/* DETAIL LIST */}
              <div className="space-y-3">
                {selected.detail.map(d => (
                  <div key={d.label} className="flex gap-3">
                    <span className="text-gray-500 text-xs w-24 flex-shrink-0 pt-0.5">{d.label}</span>
                    <span className="text-gray-300 text-xs flex-1 leading-relaxed">{d.value}</span>
                  </div>
                ))}
              </div>

              {/* VERIFIED BADGE */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                <HiBadgeCheck size={16} style={{ color: selected.color }} />
                <span className="text-xs" style={{ color: selected.color }}>Sertifikat Resmi Terverifikasi</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

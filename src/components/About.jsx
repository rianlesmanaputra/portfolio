import { motion } from "framer-motion";
import { HiDownload, HiCode, HiLightBulb, HiUserGroup } from "react-icons/hi";

const highlights = [
  {
    icon: HiCode,
    title: "Problem Solver",
    desc: "Mampu memecahkan masalah teknis dengan pemikiran kritis.",
  },
  {
    icon: HiLightBulb,
    title: "IT Support",
    desc: "Berpengalaman dalam dokumentasi teknis dan pemeliharaan sistem.",
  },
  {
    icon: HiUserGroup,
    title: "Team Player",
    desc: "Komunikasi efektif dalam tim untuk manajemen proyek dan waktu.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      {/* DECORATIVE */}


      <div className="max-w-6xl mx-auto">
        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4"
        >
          <span className="section-label">Tentang Saya</span>
        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Kenali Saya Lebih{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            Dekat
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT — PHOTO + INFO CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Photo container */}
            <div className="gradient-border rounded-2xl overflow-hidden mb-6">
              <div className="glass p-8 rounded-2xl">
                <div className="w-32 h-40 mx-auto rounded-2xl overflow-hidden mb-6 ring-2 ring-cyan-400/30">
                  <img
                    src={`${import.meta.env.BASE_URL}tes-removebg-preview.png`}
                    alt="Rian Lesmana Putra"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                    Rian Lesmana Putra
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium">
                    Junior Web Developer | IT Specialist
                  </p>
                </div>

                {/* Info list */}
                <div className="space-y-3 text-sm">
                  {[
                    ["📍 Lokasi", "Rokan Hulu, Riau"],
                    ["💼 Tersedia", "Remote & Onsite"],
                    ["🗣️ Bahasa", "Indonesia, English"],
                    ["⚡ Spesialisasi", "Laravel, React, MySQL"],
                  ].map(([key, val]) => (
                    <div key={key} className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-gray-500">{key}</span>
                      <span className="text-gray-300 font-medium">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Download CV */}
                <a
                  href="#"
                  className="btn-primary w-full justify-center mt-6 text-sm"
                  style={{ display: "flex" }}
                >
                  <HiDownload size={16} />
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — TEXT + HIGHLIGHTS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
              Lulusan <span className="text-cyan-400 font-semibold">S1 Sistem Informasi</span> dengan pengalaman dalam pengembangan web dan infrastruktur TI.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Berpengalaman sebagai <span className="text-white font-medium">Pranata Komputer</span> di Balai Bahasa Provinsi Riau, dengan fokus pada pengembangan platform berbasis <span className="text-white font-medium">Laravel</span>, digitalisasi pelaporan, pengelolaan database, dan konfigurasi server.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              Juga memiliki pengalaman dalam IT Support, dokumentasi teknis, serta terampil menggunakan Microsoft Office untuk pengelolaan data.
            </p>

            {/* HIGHLIGHT CARDS */}
            <div className="grid gap-4">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-start gap-4 p-4 glass glass-hover rounded-xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-cyan-400" size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

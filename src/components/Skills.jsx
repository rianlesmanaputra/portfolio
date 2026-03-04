import { motion } from "framer-motion";
import {
  SiLaravel,
  SiReact,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
} from "react-icons/si";

const categories = [
  {
    label: "Backend",
    skills: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20", level: 85 },
      { name: "PHP", icon: SiPhp, color: "#8993be", level: 85 },
      { name: "MySQL", icon: SiMysql, color: "#00758F", level: 80 },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB", level: 80 },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 85 },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 92 },
      { name: "CSS3", icon: SiCss3, color: "#1572B6", level: 90 },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", level: 88 },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", level: 85 },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032", level: 80 },
      { name: "GitHub", icon: SiGithub, color: "#ffffff", level: 80 },
      { name: "Vite", icon: SiVite, color: "#646CFF", level: 78 },
    ],
  },
];

function SkillCard({ skill, index }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="glass glass-hover rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default group"
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{
          background: `${skill.color}18`,
          border: `1px solid ${skill.color}35`,
          boxShadow: `0 0 20px ${skill.color}20`,
        }}
      >
        <Icon size={26} style={{ color: skill.color }} />
      </div>
      <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
        {skill.name}
      </span>

      {/* Mini progress */}
      <div className="w-full bg-white/5 rounded-full h-1 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.07 }}
        />
      </div>
      <span className="text-xs text-gray-600">{skill.level}%</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-4"
        >
          <span className="section-label">Keahlian</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-6"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Teknologi yang Saya{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            Kuasai
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-xl mx-auto mb-16"
        >
          Berikut adalah teknologi dan tools yang saya gunakan sehari-hari untuk membangun produk digital berkualitas tinggi.
        </motion.p>

        {/* CATEGORIES */}
        <div className="space-y-14">
          {categories.map((cat, ci) => (
            <div key={cat.label}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-px flex-1 bg-white/5" />
                <span className="text-xs font-bold tracking-widest uppercase text-gray-500 px-3">
                  {cat.label}
                </span>
                <div className="h-px flex-1 bg-white/5" />
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {cat.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

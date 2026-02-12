import { motion } from "framer-motion";

const skills = [
  { name: "Laravel", level: 85 },
  { name: "React", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "HTML & CSS", level: 90 },
  { name: "MySQL", level: 80 },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Keahlian
        </motion.h2>

        {/* Skill List */}
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

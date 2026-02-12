import { motion } from "framer-motion";

function Projects() {
  const projectList = [
    {
      title: "Sistem Informasi Sekolah",
      desc: "Laravel based school management system.",
    },
    {
      title: "Company Profile Website",
      desc: "Professional government website design.",
    },
    {
      title: "React Admin Dashboard",
      desc: "Modern dashboard with API integration.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          My Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">{project.desc}</p>

              <div className="mt-6">
                <button className="text-sm text-cyan-400 hover:underline">
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Tentang Saya
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <p className="text-gray-300 text-base md:text-lg leading-relaxed md:leading-loose text-center max-w-3xl mx-auto">
            Saya adalah seorang{" "}
            <span className="text-cyan-400 font-medium">
              Fullstack Web Developer
            </span>{" "}
            yang berfokus pada pengembangan aplikasi web yang rapi, efisien, dan
            mudah digunakan. Saya berpengalaman dalam membangun sistem berbasis{" "}
            <span className="text-cyan-400 font-medium">Laravel</span> serta
            antarmuka modern menggunakan{" "}
            <span className="text-cyan-400 font-medium">React</span>. Dengan
            pendekatan yang terstruktur dan berorientasi pada solusi, saya
            terbiasa mengubah kebutuhan yang kompleks menjadi solusi digital
            yang sederhana, fungsional, dan elegan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

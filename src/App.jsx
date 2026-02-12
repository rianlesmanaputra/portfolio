import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Loader from "./components/Loader";
import Particles from "./components/Particles";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // durasi loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <Loader key="loader" />
      ) : (
        <>
          {/* Background */}
          <Particles />

          {/* Navigation */}
          <Navbar />

          {/* Main Sections */}
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
        </>
      )}
    </AnimatePresence>
  );
}

export default App;

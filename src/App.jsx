import './App.css'

import { useScroll, motion } from "framer-motion";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";





function App() {

  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="scroll-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <div className="footer-divider" />
      <Footer />
      <a
        href="https://wa.me/919566195284?text=Hi%20I%20am%20interested%20in%20Aurora%20Wellness"
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>
    </>
  );
}

export default App;

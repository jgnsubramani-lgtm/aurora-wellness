import './App.css'

import { useScroll, motion } from "framer-motion";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Gallery from './sections/Gallery';





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
      <Gallery />
      <Testimonials />
      <Contact />
      <div className="footer-divider" />
      <Footer />
     <div className="floating-social-box">
  <a
    href="https://www.instagram.com/aurorawellness.in/"
    className="floating-icon instagram-icon"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    IG
  </a>

  <a
    href="https://wa.me/919566195284?text=Hi%20I%20am%20interested%20in%20Aurora%20Wellness"
    className="floating-icon whatsapp-icon"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    WA
  </a>
</div>
    </>
  );
}

export default App;

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="footer-brand">
          <h2>Aurora Wellness</h2>
          <p>
            Elevating holistic healing with elegance, mindfulness,
            and personalized care.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h4>Connect</h4>
          <a
            href="https://wa.me/919566195284"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>
      </motion.div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Aurora Wellness. All rights reserved.
      </div>
    </footer>
  );
}

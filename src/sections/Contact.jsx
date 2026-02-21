import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="contact-left">
          <h2>Let’s Begin Your Wellness Journey</h2>
          <p>
            Experience personalized healing, mindful therapies, and holistic
            care crafted exclusively for you.
          </p>

          <a
            href="https://wa.me/919566195284?text=Hi%20I%20would%20like%20to%20book%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            Book Consultation
          </a>
        </div>

        <div className="contact-right">
          <div className="contact-card">
            <h4>📍 Location</h4>
            <p>Chennai, India</p>

            <h4>📞 Phone</h4>
            <p>+91 95661 95284</p>

            <h4>✉ Email</h4>
            <p>hello@aurorawellness.com</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

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
          <h2>Start Your Wellness Journey</h2>
          <p>
            Join Aurora Wellness and experience yoga designed for your body,
            mind, and lifestyle. <strong>First demo session is free.</strong>
          </p>

          <a
            href="https://wa.me/919566195284?text=Hi%20I%20would%20like%20to%20book%20a%20free%20demo%20session"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            Book Free Demo
          </a>
        </div>

        <div className="contact-right">
          <div className="contact-card">
            <h4>📍 Location</h4>
            <a
              href="https://www.google.com/maps?q=Aurora+Wellness,+1st+Floor,+Ottiambakkam+Main+Rd,+Arasankalani,+Sithalapakkam,+Chennai,+Tamil+Nadu+600131"
              target="_blank"
              rel="noopener noreferrer"
            >
              <iframe
                title="Aurora Wellness Location"
                src="https://www.google.com/maps?q=Aurora+Wellness,+1st+Floor,+Ottiambakkam+Main+Rd,+Arasankalani,+Sithalapakkam,+Chennai,+Tamil+Nadu+600131&output=embed"
                className="map-frame"
                loading="lazy"
              ></iframe>
            </a>

            <p>
              Aurora Wellness, 1st Floor, Ottiambakkam Main Rd, Arasankalani,
              Sithalapakkam, Chennai, Tamil Nadu 600131
            </p>

            <h4>📞 Phone</h4>
            <p>+91 95661 95284</p>

            <h4>✉ Email</h4>
            <p>aurorawellness.in@gmail.com</p>

            <h4>📷 Instagram</h4>
            <p>@aurorawellness.in</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
import { motion } from "framer-motion";



function Services() {
  const services = [
    "Therapeutic Yoga",
    "Dance Fitness",
    "Women Wellness",
    "Kids Yoga",
    "Senior Citizen Yoga",
    "Prenatal & Postnatal Yoga",
  ];

  return (
    <section className="services">
      <h2 className="services-title">Our Programs</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
  key={index}
  className="service-card"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  viewport={{ once: true }}
>
            <h3>{service}</h3>
            <p>
              Personalized sessions designed to support your body,
              mind, and overall wellbeing.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;

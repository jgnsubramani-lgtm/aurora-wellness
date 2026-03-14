import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Therapeutic Yoga",
      desc: "Gentle therapeutic yoga designed to improve flexibility, reduce pain, and support overall physical and mental wellbeing."
    },
    {
      title: "Dance Fitness",
      desc: "High-energy dance workouts that help burn calories, relieve stress, and make fitness fun and engaging."
    },
    {
      title: "Women Wellness",
      desc: "Yoga practices supporting hormone balance, PCOS management, stress reduction, and emotional wellbeing."
    },
    {
      title: "Kids Yoga",
      desc: "Fun and interactive yoga sessions that improve concentration, posture, confidence, and boost immunity."
    },
    {
      title: "Senior Citizen Yoga",
      desc: "Safe and gentle yoga focusing on joint mobility, balance improvement, and breathing practices."
    },
    {
      title: "Prenatal & Postnatal Yoga",
      desc: "Specialized yoga sessions supporting pregnancy wellness, safe movement, and post-delivery recovery."
    }
  ];

  return (
    <section className="services" id="services">
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
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
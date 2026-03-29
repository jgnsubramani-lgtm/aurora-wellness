import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Yoga",
      desc: "Build strength, flexibility, and inner balance through guided yoga sessions designed for all levels. Improve posture, reduce stress, and support your overall wellbeing."
    },
    {
      title: "Aerial Yoga",
      desc: "Experience a fun and energizing form of yoga using silk hammocks for support and movement. It helps improve flexibility, core strength, and body balance."
    },
    {
      title: "Dance Fitness",
      desc: "Enjoy high-energy workout sessions that combine dance and fitness in a fun way. Burn calories, boost stamina, and stay active with lively routines."
    },
    {
      title: "Kids Gymnastics",
      desc: "Specially designed sessions for children to improve flexibility, coordination, balance, and confidence. A playful and active way to support healthy growth."
    },
    {
      title: "Meditation",
      desc: "Calm your mind and improve focus with guided meditation practices. Perfect for reducing stress, enhancing clarity, and creating emotional balance."
    },
    {
      title: "Sound Healing",
      desc: "Relax deeply with soothing sound vibrations that help release stress and restore inner harmony. A peaceful healing experience for mind and body."
    },
    {
      title: "Pranayama",
      desc: "Learn powerful breathing techniques to improve lung capacity, energy flow, and mental calmness. A simple yet effective practice for daily wellness."
    }
  ];

  return (
    <section className="services" id="services">
      <h2 className="services-title">Our Services</h2>

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
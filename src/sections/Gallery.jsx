import { motion } from "framer-motion";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

function Gallery() {
  const photos = [
    {
      image: gallery1,
      title: "Community Wellness",
      desc: "Meaningful group sessions that build confidence, connection, and wellbeing."
    },
    {
      image: gallery2,
      title: "Studio Practice",
      desc: "A peaceful environment to improve balance, flexibility, and mindful movement."
    },
    {
      image: gallery3,
      title: "Women Wellness",
      desc: "Focused sessions designed to support strength, inner balance, and self-care."
    },
    {
      image: gallery4,
      title: "Dance Fitness",
      desc: "Energetic movement sessions that make fitness enjoyable and refreshing."
    },
    {
      image: gallery5,
      title: "One-on-One Guidance",
      desc: "Personalized attention to help you move with confidence and clarity."
    },
    {
      image: gallery6,
      title: "Mindful Community",
      desc: "A supportive wellness space where people grow, heal, and move together."
    }
  ];

  return (
    <section className="gallery-section" id="gallery">
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Wellness Moments</h2>
        <p>
          A glimpse into the sessions, community, and mindful experiences at Aurora Wellness.
        </p>
      </motion.div>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <motion.div
            className="gallery-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <img src={photo.image} alt={photo.title} />
            <div className="gallery-overlay">
              <h3>{photo.title}</h3>
              <p>{photo.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
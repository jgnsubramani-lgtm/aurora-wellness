import heroVideo from "../assets/Auro_Video_new.mp4"
import { motion } from "framer-motion";

function About() {
  const stats = [
    { number: "8000+", label: "Students Community" },
    { number: "Gold Medal", label: "National Yoga Champion" },
    { number: "World Record", label: "Yoga Achievement" },
    { number: "MSc", label: "Yoga Therapy" },
  ];

  return (
    <section className="about" id="about">
      <div className="about-wrapper">

        <motion.div
          className="about-video"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <video
            src={heroVideo}
            autoPlay
            className="about-video"
            // controls
            preload="auto"
            loop
            muted
            playsInline
            style={{ width: "590px", height: "523px", objectFit: "cover" }}

          />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Aurora Wellness</h2>

          <p>
            Aurora Wellness is dedicated to helping people achieve balance,
            strength, and inner peace through yoga and mindful movement.
            Our programs focus on therapeutic practices designed for
            women, children, seniors, and individuals seeking holistic wellbeing.
          </p>

          <p>
            With years of experience and a growing global community,
            Aurora Wellness provides personalized guidance and
            accessible yoga practices that fit into everyday life.
          </p>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;
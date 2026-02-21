import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Priya S.",
    text: "Aurora Wellness transformed my lifestyle completely. The experience felt personal and truly healing.",
  },
  {
    name: "Rahul K.",
    text: "A calming space with expert care. I felt lighter, balanced, and refreshed after every session.",
  },
  {
    name: "Meera V.",
    text: "Luxury meets mindfulness. The attention to detail and energy here is unmatched.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      <h2>What Our Clients Say</h2>

      <div className="testimonial-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <p>"{testimonials[index].text}"</p>
            <h4>- {testimonials[index].name}</h4>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

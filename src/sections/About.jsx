import heroImage from "../assets/hero.jpg";
import { motion } from "framer-motion";


function About() {
    return (
        <section className="about">
            <motion.div
                className="about-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="about-image">
                    <img src={heroImage} alt="Aurora Wellness" />
                </div>

                <div className="about-text">
                    <h2>About Aurora</h2>
                    <p>
                        Aurora is a space where wellness feels calm, achievable,
                        and personal. We believe in gentle guidance over pressure,
                        and progress that fits into real life.
                    </p>

                    <p>
                        Through therapeutic yoga, mindful movement, and holistic
                        wellness practices, we support your journey toward balance,
                        strength, and inner peace.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}

export default About;

import heroImage from "../assets/hero.jpg";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>

            <img src={heroImage} alt="Aurora Wellness" className="hero-bg" />

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >

                <div className="free-demo-badge">
                    🎉 First Demo Session FREE
                </div>

                <h1>Find Your Balance with Aurora Wellness</h1>

                <p>
                    Personalized yoga programs for women, kids, seniors and wellness seekers.
                </p>

                <div className="hero-buttons">
                    <a
                        href="https://wa.me/919566195284?text=Hi%20I%20would%20like%20to%20book%20a%20free%20demo%20session"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-btn"
                    >
                        <button className="primary-btn">Book Free Demo</button>
                    </a>
                    <button
                        className="secondary-btn"
                        onClick={() =>
                            document.getElementById("services").scrollIntoView({ behavior: "smooth" })
                        }
                    >Explore Programs</button>
                </div>

            </motion.div>
        </section>
    );
}

export default Hero;
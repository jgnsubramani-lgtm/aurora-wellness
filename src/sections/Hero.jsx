import heroImage from "../assets/hero.jpg";
import heroVideo from "../assets/Auro_Video_new.mp4";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";


function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      {!showVideo ? (
        <img src={heroImage} alt="Aurora Wellness" className="hero-bg" />
      ) : (
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="hero-bg-video"
          loop={false}
        />
      )}

    <div className="retreat-announcement">

  <div className="retreat-left">

    <span className="retreat-label">
      🌴 NEXT SIGNATURE RETREAT
    </span>

    <h3>
      Andaman Wellness Retreat 2026
    </h3>

    <p className="retreat-description">
      Escape into 5 unforgettable days of yoga, meditation,
      pristine beaches and island experiences.
    </p>

    <div className="retreat-features">

      <span>🧘 Yoga</span>

      <span>🧘 Meditation</span>

      <span>🌊 Island Experience</span>

    </div>

    <span className="limited-seat">
      ✨ Limited Seats Available
    </span>

  </div>

  <div className="retreat-right">

    <a
            href="https://wa.me/919566195284?text=Hi%20I%20would%20like%20to%20book%20a%20free%20demo%20session"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
      Learn More →
    </a>

  </div>

</div>



      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* <div className="free-demo-badge">
          Complimentary First Session
        </div> */}

        <h1>Find Your Balance with Aurora Wellness</h1>

        <p>
          Wellness sessions designed for individuals, groups, communities, and workplaces — available in studio and online.
        </p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/919566195284?text=Hi%20I%20would%20like%20to%20book%20a%20free%20demo%20session"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            BOOK A SESSION TODAY
          </a>
          {/* <button
            className="secondary-btn"
            onClick={() =>
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Services
          </button> */}
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
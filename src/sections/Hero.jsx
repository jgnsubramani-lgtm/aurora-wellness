import heroImage from "../assets/hero.jpg";

function Hero() {
    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url(${heroImage})`,
            }}
        >
            <div className="hero-content">
                <h1>
                    Your space for healing,
                    <br />
                    strength & balance
                </h1>

                <p>
                    Calm guidance. Gentle wellness.
                    <br />
                    Real transformation at your pace.
                </p>

                <div className="hero-buttons">
                    <button className="primary-btn">
                        Book a Session
                    </button>

                    <a
                        href="https://wa.me/917871666047?text=Hi%20I%20am%20interested%20in%20Aurora%20Wellness%20programs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="outline-btn"
                    >
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;

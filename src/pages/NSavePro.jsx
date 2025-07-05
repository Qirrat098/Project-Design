import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import "./NSavePro.css"

function NSavePro() {
  return (
    <div className="nsave-pro-page">
      <NSaveProSection />
    </div>
  )
}

function NSaveProSection() {
  return (
    <section className="nsave-pro">
      <div className="nsave-pro-background">
     <img src="/bg3.png" alt="Hoppy Horizon Project" className="hoppy-bg-image" />
      </div>

      <div className="nsave-content">
        <div className="nsave-left">
          <div className="statistics-container">
            <div className="stat-circle stat-1">
              <div className="stat-content">
                <span className="stat-text">Bright colors, brighter minds.</span>
              </div>
            </div>

            <div className="stat-circle stat-2">
              <div className="stat-content">
                <span className="stat-text">Designed for young minds, built for bright futures.</span>
              </div>
            </div>
          </div>

          <div className="nsave-image-container">
            {/* Replace this placeholder with your single image */}
            <div className="nsave-main-image">
              <img
                src="/hand.png"
                alt="NSave Pro App Interface"
                className="nsave-project-image"
              />
            </div>
          </div>
        </div>

        <div className="nsave-right">
          <div className="nsave-title-container">
            <h1 className="nsave-main-title">Scholar Sync</h1>
            <h2 className="nsave-script-title">kids</h2>
          </div>

          <div className="nsave-subtitle-container">
            <h3 className="nsave-subtitle">
              Scholar Sync – Where Learning Meets Joy
              <br /> 
            </h3>
          </div>

          <div className="nsave-description">
            <p>
             Scholar Sync is one of the most beautiful and engaging designs I’ve created so far. Developed especially for the Beaconhouse School System, this e-learning application is designed to make education fun, interactive, and visually inspiring for young learners. Every screen is crafted with a focus on creativity, clarity, and a child-friendly experience that supports both learning and exploration. Scholar Sync isn't just a design, it's a joyful space for growing minds.
            </p>
          </div>

          <div className="decorative-elements-nsave">
            <div className="finance-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" stroke="#ff69b4" strokeWidth="2" fill="none" />
                <path
                  d="M15 20L18 23L25 16"
                  stroke="#ff69b4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default NSavePro

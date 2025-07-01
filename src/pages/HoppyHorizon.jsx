import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import "./HoppyHorizon.css"

function HoppyHorizon() {
  return (
    <div className="hoppy-horizon-page">
      <HoppyHorizonSection />
      
    </div>
  )
}

function HoppyHorizonSection() {
  return (
    <section className="hoppy-horizon">
      <div className="hoppy-horizon-background">
        <img src="public/bg3.png" alt="Hoppy Horizon Project" className="hoppy-bg-image" />
        <div className="hoppy-overlay"></div>
      </div>

      <div className="hoppy-content">
        <div className="hoppy-left">
          <div className="hoppy-title-container">
            <h1 className="hoppy-main-title">Allur</h1>
            <h2 className="hoppy-script-title">Discover the latest trends. Style, Simplified.</h2>
          </div>

          <div className="hoppy-description">
            <p>
              I designed a modern and user-friendly eCommerce website with a focus on clean visuals, smooth navigation, and an intuitive shopping experience. From product discovery to checkout, every screen was crafted to feel effortless for users. I paid special attention to mobile responsiveness and consistent branding, ensuring the site not only looks good but also functions seamlessly across devices. The goal was to make online shopping simple, engaging, and visually appealing.{" "}
            </p>
            <div className="decorative-arrow-hoppy">
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="arrow-svg-hoppy">
                <path d="M20 30 Q60 10 100 30" stroke="#ff8c42" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path
                  d="M90 25 L100 30 L90 35"
                  stroke="#ff8c42"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="hoppy-right">
          <div className="phone-mockups">
           <div className="phone-mockup phone-1">
  <div className="phone-screen">
    <img src="public/a2.png" alt="Homepage" className="phone-image" />
  </div>
  <div className="phone-label">Homepage</div>
</div>

            <div className="phone-mockup phone-2">
              <div className="phone-screen">
                <img src="public/a3.png" alt="Chat Space" className="phone-image2" />
              </div>
              <div className="phone-label">Chat space</div>
            </div>

            <div className="phone-mockup phone-3">
             <div className="phone-screen">
                <img src="public/a1.png" alt="Chat Space" className="phone-image2" />
              </div>
              <div className="phone-label">Splash</div>
            </div>
          </div>
           <div className="decorative-elements-hoppy2">
            <div className="star-element">
              <svg width="50" height="50" viewBox="0 0 30 30" fill="none">
                <path d="M15 2L17 12L27 15L17 18L15 28L13 18L3 15L13 12L15 2Z" fill="#ff8c42" />
              </svg>
            </div>
          </div>
          <div className="decorative-elements-hoppy">
            <div className="star-element">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M15 2L17 12L27 15L17 18L15 28L13 18L3 15L13 12L15 2Z" fill="#ff8c42" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HoppyHorizon

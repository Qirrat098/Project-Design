import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import "./Furniture.css"

function Furniture() {
  return (
    <div className="furniture-page">
      <FurnitureSection />
      
    </div>
  )
}

function FurnitureSection() {
  return (
    <section className="furniture">
      <div className="nsave-pro-background">
     <img src="/bg3.png" alt="Hoppy Horizon Project" className="hoppy-bg-image" />
      </div>


      <div className="furniture-content">
        <div className="furniture-left">
          <div className="laptop-mockup">
            <div className="laptop-screen">
              <div className="screen-bezel">
                <div className="screen-content">
                  {/* Replace this placeholder with your actual furniture app image */}
                  <img
                    src="/Adviso.jpeg"
                    alt="Furniture App Interface"
                    className="furniture-app-image"
                  />
                </div>
              </div>
            </div>
            <div className="laptop-base">
              <div className="laptop-keyboard"></div>
              <div className="laptop-trackpad"></div>
            </div>
          </div>

          <div className="decorative-elements-furniture">
            <div className="furniture-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="8" y="25" width="24" height="8" rx="2" stroke="#ff69b4" strokeWidth="2" fill="none" />
                <rect x="10" y="15" width="20" height="2" fill="#ff69b4" />
                <line x1="12" y1="25" x2="12" y2="35" stroke="#ff69b4" strokeWidth="2" />
                <line x1="28" y1="25" x2="28" y2="35" stroke="#ff69b4" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>

        <div className="furniture-right">
          <div className="furniture-title-container">
            <h1 className="furniture-main-title">Adviso</h1>
            <h2 className="furniture-script-title">Trusted by businesses and entrepreneurs</h2>
          </div> 

          <div className="furniture-description">
            <p>
              Adviso is more than a financial platform, it's a movement toward smarter, more informed financial decisions. Designed as a complete financial literacy hub, Adviso provides users with essential knowledge, tools, and personalized planning features to take control of their money. Whether it's understanding taxes, building a budget, or learning the basics of saving, Adviso simplifies finance for everyone.
            </p>
          </div>

          <div className="decorative-arrow-furniture">
            <svg width="150" height="80" viewBox="0 0 150 80" fill="none" className="arrow-svg-furniture">
              <path d="M20 60 Q80 20 130 40" stroke="#ff69b4" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path
                d="M120 35 L130 40 L120 45"
                stroke="#ff69b4"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Furniture

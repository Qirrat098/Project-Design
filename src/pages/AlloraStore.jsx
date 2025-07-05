import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import "./AlloraStore.css"

function AlloraStore() {
  return (
    <div className="allora-store-page">
      <AlloraStoreSection />
    </div>
  )
}

function AlloraStoreSection() {
  return (
    <section className="allora-store">
      <div className="nsave-pro-background">
     <img src="/bg3.png" alt="Hoppy Horizon Project" className="hoppy-bg-image" />
      </div>

      <div className="allora-content">
        <div className="allora-left">
          <div className="allora-title-container">
            <h1 className="allora-main-title">DevX</h1>
            <h2 className="allora-script-title">#2025</h2>
          </div> 

          <div className="allora-description">
            <div className="step-icon">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M15 2L17 12L27 15L17 18L15 28L13 18L3 15L13 12L15 2Z" fill="#ff8c42" />
              </svg>
            </div>
            <p>
              <span className="highlight-text">Step into the future of tech!</span> a space where innovation meets action. From high-impact conferences and thrilling hackathons to competitive coding modules and thought-provoking panels, the website is designed to reflect the bold energy of the DevX experience.{" "}

            </p>
          </div>
        </div>

        <div className="allora-right">
          <div className="phone-mockups-allora">
            <div className="phone-mockup-allora phone-1-allora">
              <div className="phone-screen-allora1">
             <img src="/dev1.png" alt="Homepage" className="phone-image" />
             </div>
              <div className="phone-label-allora">Homepage</div>
            </div>

            <div className="phone-mockup-allora phone-2-allora">
               <div className="phone-screen-allora2">
             <img src="/dev2.png" alt="Homepage" className="phone-image" />
             </div>
              <div className="phone-label-allora">Modules</div>
            </div>

            <div className="phone-mockup-allora phone-3-allora">
              <div className="phone-screen-allora3">
             <img src="/dev4.jpeg" alt="Homepage" className="phone-image" />
             </div>
              <div className="phone-label-allora">Agenda</div>
            </div>
            <div className="phone-mockup-allora phone-4-allora">
            <div className="phone-screen-allora4">
             <img src="/dev3.jpeg" alt="Homepage" className="phone-image" />
             </div>
              <div className="phone-label-allora">Registration page</div>
            </div>
            </div>
           <div className="phone-mockup-allora phone-5-allora">
           <div className="phone-screen-allora5">
             <img src="/dev5.png" alt="Homepage" className="phone-image" />
             </div>
              <div className="phone-label-allora">Modules Info</div>
            </div>
            </div>
      </div>
    </section>
  )
}

export default AlloraStore

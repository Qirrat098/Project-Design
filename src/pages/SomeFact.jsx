import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import "./SomeFact.css"

function SomeFact() {
  return (
    <div className="some-fact-page">
      <SomeFactSection />
    </div>
  )
}

function SomeFactSection() {
  return (
    <section className="some-fact">
      <div className="nsave-pro-background">
     <img src="/bg3.png" alt="Hoppy Horizon Project" className="hoppy-bg-image" />
      </div>


      <div className="some-fact-content">
        <div className="some-fact-header">
          <h1 className="some-fact-title">SOME FACT</h1>

        </div>
            <img src="/speaker.png" alt="speaker" className="speaker-img2" />
        <div className="content-layout">
          <div className="phone-section">
            <div className="phone-mockup-fact">
              <div className="phone-screen-fact">
                <div className="screen-header-fact">
                  <div className="status-bar-fact">
                    <span className="time">10:10</span>
                    <div className="signal-battery">
                      <div className="signal"></div>
                      <div className="battery"></div>
                    </div>
                  </div>
                </div>  

                <div className="instagram-content">
                  <div className="profile-header">
                    <div className="profile-info">
                      <div className="profile-avatar">
                        <div className="avatar-circle">
                    <img src="/circle.JPG" alt="Qirrat A" className="avatar-img" />
                        </div>
                      </div>
                      <div className="profile-details">
                        <h3 className="profile-name">Qirrat A</h3>
                        <p className="profile-bio">Viva La Vida</p>
                        <p className="profile-description">
                          A designer driven by creativity, inspired by the world, and the art of
                          problem-solving. 
                        </p>
                      </div>
                    </div>
                    <div className="profile-stats">
                      <div className="stat-item">
                        <span className="stat-number">292</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">1,121</span>
                      </div>
                    </div>
                  </div>

                  <div className="instagram-grid">
                    <div className="grid-item">
                      <img src="/Insta1.jpeg?height=100&width=100" alt="Instagram post 1" className="grid-image" />
                    </div>
                    <div className="grid-item">
                      <img src="/Insta2.jpeg?height=100&width=100" alt="Instagram post 2" className="grid-image" />
                    </div>
                    <div className="grid-item">
                      <img src="/Insta3.jpeg?height=100&width=100" alt="Instagram post 3" className="grid-image" />
                    </div>
                    <div className="grid-item">
                      <img src="/Insta4.jpeg?height=100&width=100" alt="Instagram post 4" className="grid-image" />
                    </div>
                    <div className="grid-item">
                      <img src="/Insta5.jpeg?height=100&width=100" alt="Instagram post 5" className="grid-image" />
                    </div>
                    <div className="grid-item">
                      <img src="/Insta6.jpeg?height=100&width=100" alt="Instagram post 6" className="grid-image" />
                    </div>
                    <div className="grid-item">
                      <img src="/Insta7.jpeg?height=100&width=100" alt="Instagram post 7" className="grid-image" />
                    </div>
                    <div className="grid-item">
                      <img src="/Insta8.jpeg?height=100&width=100" alt="Instagram post 8" className="grid-image" />
                    </div>
                    <div className="grid-item">
                      <img src="/Insta9.jpeg?height=100&width=100" alt="Instagram post 9" className="grid-image" />
                    </div>
                  </div>

                  <div className="instagram-tabs">
                    <div className="tab-icon active">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <rect x="2" y="2" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                        <rect x="12" y="2" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                        <rect x="2" y="12" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                        <rect x="12" y="12" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div className="tab-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M10 2L12 8L18 10L12 12L10 18L8 12L2 10L8 8L10 2Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="phone-annotation">
              <div className="annotation-arrow">
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                  <path d="M10 30 Q30 10 50 20" stroke="#ff69b4" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path
                    d="M45 15 L50 20 L45 25"
                    stroke="#ff69b4"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="annotation-text">
                Some people write ideas.
                <br />
                 I illustrate mine. 
              </p>
            </div>
          </div>

          <div className="facts-section">
            <div className="fact-item fact-1">
              <div className="fact-icon">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M15 2L17 12L27 15L17 18L15 28L13 18L3 15L13 12L15 2Z" fill="white" />
                </svg>
              </div>
              <p className="fact-text">
                Proof that even in
                <br />
                darkness, there's always
                something shining
              </p>
            </div>

            <div className="fact-item fact-2">
              <div className="fact-icon">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                  <rect x="5" y="8" width="30" height="18" rx="3" stroke="white" strokeWidth="2" fill="none" />
                  <circle cx="20" cy="17" r="4" stroke="white" strokeWidth="2" fill="none" />
                  <rect x="8" y="5" width="8" height="5" rx="1" fill="white" />
                </svg>
              </div>
              <p className="fact-text">
                Freezing time
                <br />
                because I can't time
                travel (yet)
              </p>
            </div>

            <div className="fact-item fact-3">
                <img src="/Wave.jpeg" alt="Therapy" className="fact-img" />
              <p className="fact-text">
                My kind of therapy, no
                appointment needed
              </p>
            </div>

            <div className="fact-item fact-4">
               <img src="/Girl.jpeg" alt="Therapy" className="fact-img" />
              <p className="fact-text">
                My secret
                brainstorming ritual (or
                an excuse for snacks).
              </p>
            </div>

            <div className="fact-item fact-5">
               <img src="/Rose.jpeg" alt="Therapy" className="fact-img" />
              <p className="fact-text">
                Nature's way of
                <br />
                saying, "Look, but
                <br />
                don't touch!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SomeFact

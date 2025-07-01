import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import "./ThanksForYourTime.css"

function ThanksForYourTime() {
  return (
    <div className="thanks-page">
      <ThanksSection />
     
    </div>
  )
}

function ThanksSection() {
  return (
    <section id="contact"className="thanks">
      <div className="nsave-pro-background">
     <img src="public/bg3.png" alt="Hoppy Horizon Project" className="hoppy-bg-image" />
      </div>

      <div className="thanks-content">
        <div className="thanks-header">
          <h1 className="thanks-main-title">THANKS FOR</h1>
          <h2 className="thanks-script-title">Your Time</h2>
        </div>

        <div className="content-layout-thanks">
          <div className="profile-section">
            <div className="profile-photo-container">
              <div className="orbital-ring ring-1"></div>
              <div className="orbital-ring ring-2"></div>
              <div className="profile-photo">
                <img src="public/mirror2.png" alt="Qirrat Azam" className="profile-image" />
              </div>
              <div className="decorative-stars">
                <div className="star star-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 1L11 9L19 10L11 11L10 19L9 11L1 10L9 9L10 1Z" fill="#ff69b4" />
                  </svg>
                </div>
                <div className="star star-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L9 7L15 8L9 9L8 15L7 9L1 8L7 7L8 1Z" fill="#ff69b4" />
                  </svg>
                </div>
                <div className="star star-3">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1L7 5L11 6L7 7L6 11L5 7L1 6L5 5L6 1Z" fill="#ff69b4" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="contact-section">
              <h3 className="contact-title">Get in touch :</h3>
              <div className="contact-info">
                <div className="email-icon">
                  <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
                    <path
                      d="M3 3H27C28.1 3 29 3.9 29 5V19C29 20.1 28.1 21 27 21H3C1.9 21 1 20.1 1 19V5C1 3.9 1.9 3 3 3Z"
                      stroke="#ff69b4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <polyline
                      points="29,5 15,13 1,5"
                      stroke="#ff69b4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <a href="qiratazam123@gmail.com" className="email-link">
                  qiratazam123@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="message-section">
            <div className="message-content">
              <p className="main-message">
                While I may be a junior with limited experience, I'm overflowing with passion for design and a drive to
                learn and grow. I'm not afraid to bring fresh perspectives and creativity to the table, and I'm
                committed to constantly improving my skills.
              </p>

              <p className="closing-message">
                I know it may be a challenge to take a chance on me, but I believe that with my potential and
                dedication, I can become the best designer you could hire.
              </p>
            </div>

            <div className="signature">
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="signature-svg">
                <path
                  d="M10 40 Q15 20 25 35 Q30 45 40 30 Q45 20 50 35"
                  stroke="#ff69b4"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M55 25 Q60 35 70 25 Q75 15 85 30 Q90 40 100 25"
                  stroke="#ff69b4"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <text x="10" y="50" fill="#ff69b4" fontSize="16" fontFamily="Brush Script MT, cursive">
                  Qirrat Azam
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThanksForYourTime

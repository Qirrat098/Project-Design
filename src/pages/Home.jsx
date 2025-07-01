import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import "./Home.css"
import HoppyHorizon from "./HoppyHorizon.jsx"
import NSavePro from "./NSavePro.jsx"
import AlloraStore from "./AlloraStore.jsx"
import Furniture from "./Furniture.jsx"
import SomeFact from "./SomeFact.jsx"
import ThanksForYourTime from "./ThanksForYourTime.jsx"

function Home() {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <IntroSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <PortfolioSection />
      <HoppyHorizon />
      <NSavePro />
      <AlloraStore />
      <Furniture />
      <SomeFact />
      <ThanksForYourTime /> 
      <Footer />
      
    </div>
  )
}

function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="geometric-pattern"></div>
      </div>

      <div className="hero-content">
        <div className="hero-header">
          <span className="presented-by">Presented by Qirrat A</span>
          <a href="qiratazam123@gmail.com" className="email-link">
            qiratazam123@gmail.com
          </a>
        </div>

        <div className="hero-main">
          <div className="image-container">
            <img src="/Qirrat.png" alt="Qirrat - UI/UX Designer" className="hero-image" />
            <div className="decorative-arrow"></div>
            <div className="decorative-arrow2"></div>

          </div>

          <div className="text-overlay">
            <h1 className="portfolio-text">PORTFOLIO</h1>
            <h2 className="name-script">QIRRAT'S</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
 function AboutSection() {
  return (
    <section className="about">
      <div className="about-split-bg">
        <div className="about-image-side">
          <img src="/figma.jpeg" alt="Design workspace" className="about-bg-image" />
        </div>
        <div className="about-black-side"></div>
      </div>
      <div className="about-content-centered">
        <div className="about-left-content">
          <h2 className="about-title-centered">
            TURNING IDEAS INTO<br />IMPACTFUL SOLUTIONS
          </h2>
          <div className="about-contact-left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="email-icon">
              <path
                d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                stroke="#ff69b4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="22,6 12,13 2,6"
                stroke="#ff69b4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a href="qiratazam123@gmail.com" className="email-link-about">
              qiratazam123@gmail.com
            </a>
          </div>
          <div className="about-contact-right">
            <a href="https://www.linkedin.com/in/qirrat-azam-846651205/" className="linkedin-link">
              Linked In
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
function IntroSection() {
  return (
    <section id="about" className="intro">
      <div className="intro-content">
        <div className="intro-left">
          <div className="photo-container">
            <div className="photo-container">

          </div>
            <img src="/IMG_9874.JPG" alt="Qirrat Azam" className="intro-photo" />
          </div>
          <div className="hello-text">Hello!</div>
        </div>

        <div className="intro-right">
          <h2 className="intro-title">
            My Name is
            <br />
            <span className="name-highlight">Qirrat Azam</span>
          </h2>

          <div className="about-content-text">
            <h3 className="about-heading">ABOUT ME</h3>
            <p className="about-description">
              I'm a passionate UI/UX designer dedicated to creating intuitive digital experiences. As a design intern at
              Golden Gates, I collaborated with a cross-functional team to design intuitive user interfaces for SaaS dashboards and cloud-based IaaS tools,
              delivering tailored solutions. Created responsive wireframes and interactive prototypes using Figma, focusing on accessibility and user flow optimization.
              I thrive on solving design challenges through research and collaboration. Committed to
              lifelong learning, my goal is to refine my skills while helping others grow in their design journey.
            </p>
          </div>
          <div className="cassette-decoration">
            <img src="/ribbon.png" alt="ribbon" className="ribbon" />
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="cassette-svg">
              <rect x="10" y="20" width="100" height="60" rx="8" fill="#666" stroke="#fff" strokeWidth="2" />
              <rect x="20" y="30" width="80" height="40" rx="4" fill="#333" />
              <circle cx="35" cy="45" r="8" fill="#fff" />
              <circle cx="85" cy="45" r="8" fill="#fff" />
              <circle cx="35" cy="45" r="3" fill="#333" />
              <circle cx="85" cy="45" r="3" fill="#333" />
              <rect x="45" y="35" width="30" height="20" rx="2" fill="#444" />
              <text x="60" y="25" textAnchor="middle" fill="#ccc" fontSize="8">
                MK 60-6
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
function EducationSection() {
  return (
    <section className="education">
      <div className="education-content">
        <div className="education-header">
          <h2 className="education-title">Education</h2>
          <div className="title-underline"></div>
          <div className="mouse-decoration">
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none" className="mouse-svg">
              <ellipse cx="30" cy="40" rx="20" ry="30" stroke="#ff69b4" strokeWidth="2" fill="none" />
              <rect x="26" y="20" width="8" height="12" rx="4" fill="#ff69b4" />
              <path d="M45 25 Q55 15 65 25" stroke="#ff69b4" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>

        <div className="education-main">
          <div className="education-left">
            <div className="timeline">
              <span className="timeline-text">Nov 2022 - Present</span>
              <div className="timeline-line"></div>
            </div>

            <div className="education-details">
              <div className="degree-info">
                <div className="degree-title">
                  <span className="arrow">{">"}</span>
                  <span>Bachelor of </span>
                  <span className="highlighted-text">Computer Science</span>
                </div>
                <div className="university">DHA Suffa University</div>
              </div>

              <div className="specialization-info">
                <div className="specialization-title">
                  <span className="arrow">{">"}</span>
                  <span>Specialization in Computer Science</span>
                </div>
                <div className="coursework">Relevant coursework: UI/UX Design, Software Engineering, Web Development, Organizational Behaviour</div>
              </div>
            </div>
          </div>

          <div className="education-center">
            <img src="/baw.jpeg" alt="Esraa M" className="education-photo" />
          </div>

          <div className="education-right">
            <div className="languages-section">
              <h3 className="languages-title">Languages </h3>
              <div className="language-item">
                <span className="arrow">{">"}</span>
                <span>Urdu : Native</span>
              </div>
              <div className="language-item">
                <span className="arrow">{">"}</span>
                <span>English : Good</span>
              </div>
            </div>
            <div className="education-right2">
            <div className="          ">
              <h3 className="Certificate-title">Certificates </h3>
              <div className="Certificate-item1">
                <span className="arrow">{">  "}</span>
                <span> Google UX Design Certified - Jan 2025 </span>
              </div>
              <div className="Certificate-item">
                <span className="arrow">{">  "}</span>
                <span> Generative AI - Sept 2024</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
function ExperienceSection() {
  return (
    <section className="experience">
      <div className="experience-background">
        <img src="/bdb.jpeg" alt="Qirrat" className="experience-bg-image" />
        <div className="experience-overlay"></div>
      </div>

      <div className="experience-content">
        <div className="camera-decoration">
          <svg width="180" height="160" viewBox="0 0 80 60" fill="none" className="camera-svg">
            <rect x="10" y="20" width="60" height="35" rx="5" fill="#333" stroke="#666" strokeWidth="2" />
            <circle cx="40" cy="37" r="12" fill="#666" stroke="#999" strokeWidth="2" />
            <circle cx="40" cy="37" r="8" fill="#333" />
            <rect x="15" y="15" width="15" height="8" rx="2" fill="#444" />
            <rect x="55" y="25" width="8" height="5" rx="1" fill="#666" />
          </svg>
        </div>

        <div className="experience-card">
            <div className="exp-circle exp-circle-top"></div>
            <div className="exp-circle exp-circle-mid1"></div>
            <div className="exp-circle exp-circle-mid2"></div>
            <div className="exp-circle exp-circle-bottom"></div>
          <h2 className="experience-title">WORKING EXPERIENCE</h2>

          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-year">
                <h3>2024 - Present</h3>
                <div className="year-underline"></div>
              </div>
              <div className="experience-details">
                <h4 className="job-title">FREELANCE UI/UX DESIGNER</h4>
                <ul className="job-responsibilities">
                  <li>Designed a user-friendly website UI/UX</li>
                  <li>Conducted research, wireframing, and prototyping</li>
                  <li>Aligned design with brand objectives</li>
                  <li>Delivered a responsive and engaging experience</li>
                </ul>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-year">
                <h3>May 2025 - Present</h3>
                <div className="year-underline"></div>
              </div>
              <div className="experience-details">
                <h4 className="job-title">  UI/UX Design Intern (Remote) | Golden Gate Innovations </h4>
                <ul className="job-responsibilities">
                  <li>Designed intuitive interfaces</li>
                  <li>Built responsive wireframes and interactive Figma prototypes</li>
                  <li>Delivered customized solutions</li>
                  <li>Conducted usability testing and iterated UI components based on stakeholder feedback.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="headphones-decoration">
          <svg width="180" height="180" viewBox="0 0 80 80" fill="none" className="headphones-svg">
            <path
              d="M20 35C20 20 30 10 40 10C50 10 60 20 60 35V45"
              stroke="#333"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="15" cy="45" rx="8" ry="12" fill="#333" stroke="#666" strokeWidth="2" />
            <ellipse cx="65" cy="45" rx="8" ry="12" fill="#333" stroke="#666" strokeWidth="2" />
            <rect x="10" y="40" width="10" height="10" rx="2" fill="#444" />
            <rect x="60" y="40" width="10" height="10" rx="2" fill="#444" />
          </svg>
        </div>
      </div>
    </section>
  )
}
function SkillsSection() {
  return (
    <section className="skills">
      <div className="skills-background">
        <img src="/colors.jpg" alt="Colors" className="skills-bg-image" />
      </div>

      <div className="skills-content">
        <div className="skills-card">
             <img src="/speaker.png" alt="speaker" className="speaker-img" />
             <img src="/mirror.png" alt="Decorative" className="skills-corner-img" />
             <div className="star-decoration2">
              <svg width="60" height="60" viewBox="0 0 40 40" fill="none" className="star-svg">
                <path
                  d="M20 5L22 18L35 20L22 22L20 35L18 22L5 20L18 18L20 5Z"
                  fill="#ff69b4"
                  stroke="#ff69b4"
                  strokeWidth="1"
                />
              </svg>
            </div>
          <div className="skills-header">
            <h2 className="skills-title">
              SKILL &
              <br />
              EXPERTISE
            </h2>
          </div>

          <div className="skills-content-area">
            <div className="skills-section">
              <h3 className="section-title">DESIGN</h3>
              <ul className="skills-list">
                <li>UI Design & UX Design,</li>
                <li>User flows</li>
                <li>Concept sketches Wireframes</li>
                <li>Prototypes,</li>
                <li>Mockups</li>
                <li>Design systems</li>
              </ul>
            </div>

            <div className="skills-section">
              <h3 className="section-title">RESEARCH</h3>
              <ul className="skills-list">
                <li>User interviews</li>
                <li>Usability testing</li>
                <li>User Stories/Personas</li>
                <li>Competitor analysis</li>
                <li>Tree testing, User journey</li>
              </ul>
            </div>
          </div>

          <div className="decorative-elements">
            <div className="star-decoration">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="star-svg">
                <path
                  d="M20 5L22 18L35 20L22 22L20 35L18 22L5 20L18 18L20 5Z"
                  fill="#ff69b4"
                  stroke="#ff69b4"
                  strokeWidth="1"
                />
              </svg>
            </div>
           <div className="rays-decoration">
  <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="rays-svg">
    <rect x="28" y="10" width="4" height="18" rx="2" fill="#ffb6d5" transform="rotate(-10 30 20)" /> {/* center ray */}
    <rect x="44" y="14" width="4" height="12" rx="2" fill="#ffb6d5" transform="rotate(20 46 20)" /> {/* right ray */}
    <rect x="12" y="14" width="4" height="12" rx="2" fill="#ffb6d5" transform="rotate(-20 14 20)" /> {/* left ray */}
  </svg>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}
function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-background">
        <img src="/bg3.png" alt="Portfolio Background" className="portfolio-bg-image" />
        <div className="portfolio-overlay"></div>
      </div>

      <div className="portfolio-content">
        <div className="portfolio-header">
          <div className="portfolio-title-container">
            <h2 className="portfolio-main-title">PREVIOUS</h2>
            <h3 className="portfolio-script-title">projects</h3>
          </div>

          <div className="portfolio-quote">
            <p className="quote-main">"Just Design? That’s cute."</p>
            <p className="quote-sub">
              I design and code, bringing my UI ideas to life.
              <br />
              Websites, apps, and everything
              <br />
               in between.
            </p>
          </div>
        </div>

        <div className="portfolio-projects">
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder project-1">
                <img src="/Allure1.png" alt="E-commerce app" className="allure" />
              </div>
            </div>
            <h4 className="project-title">1- Allure</h4>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder project-2">
            <img src="/scolar.png" alt="Education app" className="allure" />
              </div>
            </div>
            <h4 className="project-title">2- Scholar Sync</h4>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder project-3">
            <img src="/devx.png" alt="Education app" className="allure" />
               
              </div>
            </div>
            <h4 className="project-title">3- DevX</h4>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder project-4">
             <img src="/adviso.png" alt="Education app" className="allure" />

              </div>
            </div>
            <h4 className="project-title">4- Adviso</h4>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder project-5">
                 <img src="/squid2.png" alt="Education app" className="allure" />

                <div className="personal-photo">
                  <div className="photo-frame"></div>
                  <div className="star-decoration-portfolio">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path
                        d="M15 3L17 13L27 15L17 17L15 27L13 17L3 15L13 13L15 3Z"
                        fill="#ff69b4"
                        stroke="#ff69b4"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="project-title">
              Some Fact
              <br />
              <span className="about-me-script">about me</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

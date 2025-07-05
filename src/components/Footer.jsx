import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
         
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="qiratazam123@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/qirrat-azam-846651205/">LinkedIn</a>
              <a href="https://www.behance.net/qiratazam">Behance</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Qirrat A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

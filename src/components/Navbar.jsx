import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span>Qirrat A</span>
        </div>
        <ul className={`nav-menu${menuOpen ? " active" : ""}`}>
          <li>
            <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
        <div
          className="nav-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
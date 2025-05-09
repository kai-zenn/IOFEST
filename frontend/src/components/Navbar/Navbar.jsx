import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">JGC</a>
        </div>
        <div className="navbar-links">
          <a href="#" className="navbar-link">
            Tentang Kami
          </a>
          <a href="#" className="navbar-link">
            Layanan+
          </a>
          <a href="#" className="navbar-link">
            Blog
          </a>
        </div>
        <div className="navbar-actions">
          <div className="language-toggle">
            <span className="active">ID</span>
            <span>/</span>
            <span>EN</span>
          </div>
          <div className="user-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

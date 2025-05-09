import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-video-container">
        <video autoPlay muted loop className="hero-video">
          <source
            src="/src/assets/jakarta.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          All of Jakarta,
          <br />
          All in one.
        </h1>
        <p className="hero-subtitle">
          Report city issues or compare grocery prices in one tap. #JakartaEasy
        </p>
        <button className="hero-button">Learn More Here</button>
      </div>

      <div className="hero-scrolldown">
        <div className="scroll-indicator"></div>
      </div>
    </div>
  );
};

export default Hero;

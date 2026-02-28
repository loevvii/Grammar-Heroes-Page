import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import logo from "../assets/images/logo.png";

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      {/* 1. Video Background */}
      <div className="video-background">
        <iframe
          src="https://www.youtube.com/embed/Rmy0Br_lrbA?autoplay=1&mute=1&loop=1&playlist=Rmy0Br_lrbA&controls=0&showinfo=0&modestbranding=1&playsinline=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <div className="video-overlay"></div>
      <Container className="content-layer">
        <div className="hero-section">
          <img src={logo} alt="Grammar Heroes Logo" className="main-logo" />
          
          <p className="sub-tagline">
            GRAMMAR HEROES — Master English grammar through an adventure through grammatica!
          </p>

          <button type="button" className="btn btn-outline-primary btn-large">
            Download Now!
          </button>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
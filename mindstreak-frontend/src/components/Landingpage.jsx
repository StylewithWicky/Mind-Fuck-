
import React from "react";
import "../Css/Landingpage.css";
import { Link } from "react-router-dom";
import bgVideo from "../assets/bg-video.mp4"; 

function LandingPage() {
  const scrollToNext = () => {
    const next = document.getElementById("next-section");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="landing-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="content">
          <h1 className="glitch" data-text="MindStreak">
            MindStreak
          </h1>
          <p className="subtitle">Track your mood. Heal your mind.</p>
          <div className="buttons">
            <Link to="/login" className="btn glitch-btn" data-text="Login">
              Login
            </Link>
            <Link to="/register" className="btn glitch-btn" data-text="Register">
              Register
            </Link>
          </div>
          <button onClick={scrollToNext} className="scroll-indicator">
            ↓
          </button>
        </div>
      </div>

      <div id="next-section" className="next-section">
        <h2>Your mental wellness journey begins here.</h2>
        <p>Discover tools, track moods, and vibe better.</p>
      </div>
    </>
  );
}

export default LandingPage;

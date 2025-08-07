
import React from "react";
import "../css/Landingpage.css";
import { Link } from "react-router-dom";
import bgVideo from "../assets/4990236-hd_1920_1080_30fps.mp4"; 

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
      <div id="next-section" className="next-section">
  <div className="next-section-content">
    <h2 className="glitch" data-text="Your Journey Begins Here">
      Your Journey Begins Here
    </h2>
    <p className="section-subtitle">
      Unlock daily insights, track your emotions, and tune in to the rhythm of your mind.
    </p>
    <div className="features">
      <div className="feature-card">
        <h3>Mood Tracker</h3>
        <p>Visualize your emotions over time and discover hidden patterns.</p>
      </div>
      <div className="feature-card">
        <h3>Music Vibes</h3>
        <p>Get Spotify-based recommendations tailored to your mood.</p>
      </div>
      <div className="feature-card">
        <h3>Journal & Reflect</h3>
        <p>Write it out. Reflect. Grow. Build your mental streak.</p>
      </div>
    </div>
  </div>
</div>
 

    </>
  );
}

export default LandingPage;

import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>RECYCLE</h1>
          <h3>Join the movement for a cleaner planet.</h3>
        </div>
      </header>

      <section className="features">
        <div className="feature-box">
          <h3>Locate Facilities</h3>
          <p>
            Find local recycling centers and specialized drop-off
            points near you to ensure your materials are handled 
            responsibly.
          </p>
        </div>
        <div className="feature-box">
          <h3>List of Items</h3>
          <p> 
            Access a comprehensive library of resin codes and common items.
            Contribute your own knowledge to help our community database grow.
          </p>
        </div>
        <div className="feature-box">
          <h3>Accounts</h3>
          <p>
            Join the competition by creating an account.
            Earn points for your contributions, track your progress,
            and see where you stand on the leaderboard.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
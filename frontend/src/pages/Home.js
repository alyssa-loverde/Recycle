import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Recycle</h1>
          <p>
            This is a placeholder for your main catchphrase or mission statement. 
            Track your recycling impact and climb the leaderboard!
          </p>
          <button className="hero-btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img src="images/Recycle_img.jpeg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <div className="icon-placeholder">📍</div>
          <h3>Find Locations</h3>
          <p>Placeholder text describing how users can find nearby recycling centers.</p>
        </div>
        <div className="feature-card">
          <div className="icon-placeholder">📊</div>
          <h3>Track Points</h3>
          <p>Placeholder text explaining the point system and user accounts.</p>
        </div>
        <div className="feature-card">
          <div className="icon-placeholder">♻️</div>
          <h3>View Items</h3>
          <p>Placeholder text about the list of recyclable items and their values.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
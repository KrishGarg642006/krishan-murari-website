import React from 'react';

const AboutSection = () => (
  <section className="about-section">
    <h2 className="section-title">About Us</h2>
    <div className="about-content">
      <div className="about-text">
        <h3>Welcome to Aggarwal Feeds</h3>
        <p>
          Established in 2002 by our esteemed Managing Director, Mr. Manav Garg, Aggarwal Feeds has been a trusted name in cattle nutrition across Punjab. We specialize in manufacturing high-quality cotton seed oil cake, de-oiled cake, and advanced cattle feed solutions.
        </p>
        <h3>Our Expertise</h3>
        <p>We offer two specialized types of cattle feed:</p>
        <ul>
          <li>
            <strong>Cattle Feed Steam Pellets:</strong> Our advanced steam pelleting process ensures superior digestibility, reduced wastage, and consistent nutrition. Each pellet contains a perfectly balanced mix of ingredients, enhanced with essential medicines from leading brands like Camlin, Kemin, and Bentauli.
          </li>
          <li>
            <strong>Cattle Feed Mesh Feed:</strong> Our finely ground mesh feed provides excellent digestibility and can be easily customized for different cattle types. It supports healthy rumen function and promotes efficient digestion.
          </li>
        </ul>
        <h3>Our Commitment</h3>
        <p>
          At Aggarwal Feeds, we are dedicated to enhancing cattle health and boosting milk yield through superior nutrition. Our state-of-the-art machinery and rigorous quality control ensure that every batch meets the highest standards. We continuously innovate and expand our offerings to provide the best nutritional solutions for livestock.
        </p>
        <div className="about-features">
          <div className="feature">
            <i className="fas fa-medal"></i>
            <h4>Quality Assured</h4>
            <p>Premium ingredients and strict quality control</p>
          </div>
          <div className="feature">
            <i className="fas fa-flask"></i>
            <h4>Advanced Technology</h4>
            <p>State-of-the-art processing and manufacturing</p>
          </div>
          <div className="feature">
            <i className="fas fa-heart"></i>
            <h4>Health Focus</h4>
            <p>Enhanced nutrition for better cattle health</p>
          </div>
          <div className="feature">
            <i className="fas fa-chart-line"></i>
            <h4>Proven Results</h4>
            <p>Increased milk yield and productivity</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 
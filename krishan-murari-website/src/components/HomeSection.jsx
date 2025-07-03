import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const HomeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showAllReviews, setShowAllReviews] = useState(false);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : 'empty'}`}>
        ★
      </span>
    ));
  };

  const reviews = [
    {
      id: 1,
      rating: 5,
      comment: "Since switching to Krishan Murari, our milk production has consistently improved!",
      author: "Rajesh Kumar",
      role: "Dairy Farmer",
      date: "March 15, 2024"
    },
    {
      id: 2,
      rating: 5,
      comment: "Our cows are healthier and more active, we've seen a real difference.",
      author: "Priya Sharma",
      role: "Farm Owner",
      date: "March 10, 2024"
    },
    {
      id: 3,
      rating: 5,
      comment: "Finally, a feed that delivers on its promise. Our farm is more profitable now.",
      author: "Amit Patel",
      role: "Livestock Manager",
      date: "March 5, 2024"
    }
  ];

  const handleExploreProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactUs = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewReviews = () => {
    setShowAllReviews(!showAllReviews);
  };

  return (
    <div className="home-section" ref={ref}>
      <section className={`home-hero-section ${inView ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="animate-text">Premium Cattle Feed Solutions</h1>
            <p className="hero-tagline animate-text animate-text-delay-1">
              Nourishing your livestock with the finest quality feed for optimal health and productivity
            </p>
            <button 
              className="cta-button animate-text animate-text-delay-2"
              onClick={handleExploreProducts}
            >
              Explore Our Products
            </button>
          </div>
        </div>
      </section>

      <section className={`pain-points-section ${inView ? 'visible' : ''}`}>
        <h2 className="section-title">Why Choose Us</h2>
        <div className="pain-points-grid">
          <div className="pain-point-card scroll-animate">
            <h3>Premium Quality</h3>
            <p>Our feed is made from the finest ingredients, ensuring optimal nutrition for your cattle.</p>
          </div>
          <div className="pain-point-card scroll-animate">
            <h3>Expert Formulation</h3>
            <p>Carefully balanced nutrients to support growth, health, and productivity.</p>
          </div>
          <div className="pain-point-card scroll-animate">
            <h3>Proven Results</h3>
            <p>Trusted by farmers across the region for consistent, reliable results.</p>
          </div>
        </div>
      </section>

      <section className={`benefits-section ${inView ? 'visible' : ''}`}>
        <h2 className="section-title">Our Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-card scroll-animate">
            <h3>Enhanced Health</h3>
            <p>Strengthened immune system and improved overall health of your cattle.</p>
          </div>
          <div className="benefit-card scroll-animate">
            <h3>Better Productivity</h3>
            <p>Increased milk production and better weight gain in your livestock.</p>
          </div>
          <div className="benefit-card scroll-animate">
            <h3>Cost-Effective</h3>
            <p>Optimized feed conversion ratio leading to better returns on investment.</p>
          </div>
        </div>
      </section>

      <section className={`testimonial-row ${inView ? 'visible' : ''}`}>
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="reviews-grid">
          {reviews.slice(0, showAllReviews ? reviews.length : 1).map((review) => (
            <div key={review.id} className="review-card scroll-animate">
              <div className="review-stars">
                {renderStars(review.rating)}
              </div>
              <p className="review-comment">{review.comment}</p>
              <div className="review-author">
                <strong>{review.author}</strong>
                <span>{review.role}</span>
              </div>
              <div className="review-date">{review.date}</div>
            </div>
          ))}
        </div>
        <button 
          className="see-all-btn"
          onClick={handleViewReviews}
        >
          {showAllReviews ? 'Show Less' : 'View All Reviews'}
        </button>
      </section>

      <section className={`faq-section ${inView ? 'visible' : ''}`}>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-card scroll-animate">
            <h3>What makes your feed different?</h3>
            <p>Our feed is formulated with premium ingredients and balanced nutrients to ensure optimal health and productivity of your cattle.</p>
          </div>
          <div className="faq-card scroll-animate">
            <h3>How do I get started?</h3>
            <p>Contact us through our website or call us directly. We'll help you choose the right feed for your cattle's needs.</p>
          </div>
          <div className="faq-card scroll-animate">
            <h3>Do you offer delivery?</h3>
            <p>Yes, we offer reliable delivery services to your farm location. Contact us for more details about delivery options.</p>
          </div>
        </div>
      </section>

      <section className={`cta-section ${inView ? 'visible' : ''}`}>
        <h2 className="section-title">Ready to Improve Your Cattle's Health?</h2>
        <p>Join hundreds of satisfied farmers who trust our premium feed solutions.</p>
        <button 
          className="cta-button"
          onClick={handleContactUs}
        >
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default HomeSection; 
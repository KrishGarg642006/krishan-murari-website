import React, { useState, useEffect } from 'react';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import logo from './assets/krishan-murari-logo.png';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main-container">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <img src={logo} alt="Krishan Murari Logo" className="navbar-logo" />
          <span className="brand">Krishan Murari</span>
        </div>
        <div className="nav-links">
          <button
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>
          <button
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button
            className={activeSection === 'products' ? 'active' : ''}
            onClick={() => handleNavClick('products')}
          >
            Products
          </button>
          <button
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
        </div>
      </nav>

      <div className="content">
        <section id="home">
          <HomeSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="products">
          <ProductsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </div>

      <footer className="footer">
        <p>© 2002 Krishan Murari. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


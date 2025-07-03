import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import './App.css';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Products' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main-container">
      <Navbar
        sections={sections}
        activeSection={activeSection}
        onNavClick={handleNavClick}
        isScrolled={isScrolled}
      />
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


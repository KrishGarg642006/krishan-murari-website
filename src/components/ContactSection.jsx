import React from 'react';
import { FaWhatsapp, FaPhone, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

// Constants
const PHONE_NUMBER = '+91 90565 99700';
const WHATSAPP_LINK = `https://wa.me/919056599700`;
const SOCIAL_LINKS = [
  {
    icon: <FaFacebook />,
    label: 'Facebook',
    url: 'https://www.facebook.com/Aggarwalfeedfactory'
  },
  {
    icon: <FaInstagram />,
    label: 'Instagram',
    url: 'https://www.instagram.com/aggarwalfeedindustry2002/'
  },
  {
    icon: <FaYoutube />,
    label: 'YouTube',
    url: 'https://www.youtube.com/@aggarwalfeedindustry8087'
  }
];

const VET_SERVICES = [
  'Regular health check-ups',
  'Disease prevention and treatment',
  'Nutritional consultation',
  'Prescription services',
  'Emergency care support'
];

// Components
const ContactInfo = ({ icon, title, value }) => (
  <div className="info-item">
    <i>{icon}</i>
    <div>
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  </div>
);

const SocialLink = ({ icon, label, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="social-link">
    {icon}
    {label}
  </a>
);

const VetServiceItem = ({ service }) => (
  <li>
    <i className="fas fa-check"></i>
    {service}
  </li>
);

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <div className="info-card">
          <h3>Get in Touch</h3>
          <p>We're here to help with all your animal feed needs. Contact us through any of these channels:</p>
          
          <ContactInfo 
            icon={<FaPhone />}
            title="Phone"
            value={PHONE_NUMBER}
          />
          
          <ContactInfo 
            icon={<FaWhatsapp />}
            title="WhatsApp"
            value={PHONE_NUMBER}
          />

          <div className="social-links">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </div>

          <div className="social-links-simple">
            {SOCIAL_LINKS.map(({ icon, label, url }) => (
              <SocialLink
                key={label}
                icon={icon}
                label={label}
                url={url}
              />
            ))}
          </div>
        </div>

        <div className="vet-service-card">
          <h3>Professional Veterinary Care</h3>
          <p>Our expert veterinary team provides comprehensive care for your animals:</p>
          
          <ul className="vet-service-list">
            {VET_SERVICES.map((service, index) => (
              <VetServiceItem key={index} service={service} />
            ))}
          </ul>

          <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="vet-visit-button">
            <FaPhone />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ContactSection); 
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import product1 from '../assets/optimized/KRISHAN-MURARI-1.webp';
import product2 from '../assets/optimized/KRISHAN-MURARI-2.webp';
import product3 from '../assets/optimized/KRISHAN-MURARI-3.webp';
import product4 from '../assets/optimized/KRISHAN-MURARI-4.webp';
import product5 from '../assets/optimized/KRISHAN-MURARI-5.webp';
import product6 from '../assets/optimized/KRISHAN-MURARI-6.webp';
import product7 from '../assets/optimized/KRISHAN-MURARI-7.webp';
import product8 from '../assets/optimized/KRISHAN-MURARI-8.webp';

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Fresher Feed",
      image: product1
    },
    {
      id: 2,
      name: "Transition Feed",
      image: product2
    },
    {
      id: 3,
      name: "Krishan Murari Feed 10000",
      image: product3
    },
    {
      id: 4,
      name: "Krishan Murari Feed 8000",
      image: product4
    },
    {
      id: 5,
      name: "Krishan Murari Feed 5000",
      image: product5
    },
    {
      id: 6,
      name: "Krishan Murari Churi 8000",
      image: product6
    },
    {
      id: 7,
      name: "Krishan Murari Churi 10000",
      image: product7
    },
    {
      id: 8,
      name: "Krishan Murari Kohinoor",
      image: product8
    }
  ];

  const handleLearnMore = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto'; // Restore scrolling when modal is closed
  };

  const handleContactClick = () => {
    handleCloseModal();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close modal when pressing Escape key
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <section className="products-section" id="products">
      <div className="section-content">
        <h2>Our Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <button 
                  className="product-button" 
                  onClick={() => handleLearnMore(product)}
                  aria-label={`Learn more about ${product.name}`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div 
          className="product-modal-overlay" 
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="product-modal" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close" 
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
            <div className="modal-content">
              <div className="modal-image">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  loading="lazy"
                />
              </div>
              <div className="modal-info">
                <h2 id="modal-title">{selectedProduct.name}</h2>
                <p className="modal-description">
                  Product description coming soon. For more information about this product, please contact us.
                </p>
                <button 
                  className="contact-button" 
                  onClick={handleContactClick}
                  aria-label="Contact us for more information"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection; 
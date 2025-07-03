import React, { useState } from 'react';
import product1 from '../assets/KRISHAN-MURARI-1.png';
import product2 from '../assets/KRISHAN-MURARI-2.png';
import product3 from '../assets/KRISHAN-MURARI-3.png';
import product4 from '../assets/KRISHAN-MURARI-4.png';
import product5 from '../assets/KRISHAN-MURARI-5.png';
import product6 from '../assets/KRISHAN-MURARI-6.png';
import product7 from '../assets/KRISHAN-MURARI-7.png';
import product8 from '../assets/KRISHAN-MURARI-8.png';

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Fresher Feed",
      image: product1,
      description: "Premium cattle feed for enhanced milk production",
      details: "Specially formulated for dairy cattle to boost milk production and maintain optimal health. Contains essential nutrients and minerals."
    },
    {
      id: 2,
      name: "Transition Feed",
      image: product2,
      description: "High-quality feed for optimal cattle health",
      details: "Perfect for cattle transitioning between different feeding stages. Helps maintain consistent nutrition and smooth transition."
    },
    {
      id: 3,
      name: "Krishan Murari Feed 10000",
      image: product3,
      description: "Specialized feed for dairy cattle",
      details: "Premium feed formula designed for high-yielding dairy cattle. Enhances milk production and quality."
    },
    {
      id: 4,
      name: "Krishan Murari Feed 8000",
      image: product4,
      description: "Balanced nutrition for better yields",
      details: "Balanced nutrition formula for optimal growth and milk production. Suitable for medium-yielding dairy cattle."
    },
    {
      id: 5,
      name: "Krishan Murari Feed 5000",
      image: product5,
      description: "Premium feed for superior milk quality",
      details: "Economical yet effective feed solution for dairy cattle. Maintains good milk quality and production."
    },
    {
      id: 6,
      name: "Krishan Murari Churi 8000",
      image: product6,
      description: "Enhanced feed for maximum productivity",
      details: "Special churi formula for enhanced digestibility and nutrient absorption. Ideal for all types of cattle."
    },
    {
      id: 7,
      name: "Krishan Murari Feed 10000",
      image: product7,
      description: "Specialized formula for dairy farms",
      details: "Advanced formula for large dairy farms. Optimized for high milk production and cattle health."
    },
    {
      id: 8,
      name: "Krishan Murari Kohinoor",
      image: product8,
      description: "Premium feed for optimal cattle performance",
      details: "Our flagship product, designed for maximum performance and health benefits. Suitable for all types of cattle."
    }
  ];

  const handleLearnMore = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="products-section">
      <h2 className="section-title">Our Premium Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button 
                className="product-button"
                onClick={() => handleLearnMore(product)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="product-modal-overlay" onClick={handleCloseModal}>
          <div className="product-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <div className="modal-content">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
              <div className="modal-info">
                <h2>{selectedProduct.name}</h2>
                <p className="modal-description">{selectedProduct.description}</p>
                <div className="modal-details">
                  <h3>Product Details</h3>
                  <p>{selectedProduct.details}</p>
                </div>
                <button 
                  className="contact-button"
                  onClick={() => {
                    handleCloseModal();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contact Us for More Information
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
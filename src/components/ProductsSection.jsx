import React from 'react';
import product1 from '../assets/optimized/KRISHAN-MURARI-1.webp';
import product2 from '../assets/optimized/KRISHAN-MURARI-2.webp';
import product3 from '../assets/optimized/KRISHAN-MURARI-3.webp';
import product4 from '../assets/optimized/KRISHAN-MURARI-4.webp';
import product5 from '../assets/optimized/KRISHAN-MURARI-5.webp';
import product6 from '../assets/optimized/KRISHAN-MURARI-6.webp';
import product7 from '../assets/optimized/KRISHAN-MURARI-7.webp';
import product8 from '../assets/optimized/KRISHAN-MURARI-8.webp';

const products = [
  { id: 1, name: 'Fresher Feed', image: product1 },
  { id: 2, name: 'Transition Feed', image: product2 },
  { id: 3, name: 'Krishan Murari Feed 10000', image: product3 },
  { id: 4, name: 'Krishan Murari Feed 8000', image: product4 },
  { id: 5, name: 'Krishan Murari Feed 5000', image: product5 },
  { id: 6, name: 'Krishan Murari Churi 8000', image: product6 },
  { id: 7, name: 'Krishan Murari Churi 10000', image: product7 },
  { id: 8, name: 'Krishan Murari Kohinoor', image: product8 },
];

const ProductsSection = () => (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection; 
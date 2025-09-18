import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import SubNavbar from './SubNavbar';

export default function Home() {
  const featuredProducts = [
    { id: 1, name: 'CPU Ryzen 5 5600x', specs: '6 cores, 12 threads', price: 250 },
    { id: 2, name: 'Nvidia RTX 3080', specs: '10GB GDDR6X', price: 800 },
    { id: 3, name: 'CPU Intel i9-13900K', specs: '24 cores, 32 threads', price: 600 },
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Next-gen computing hardware</h1>
        <Link to="/ProductsList" className="shop-now-button">
          Shop Now
        </Link>
      </header>

      <section className="featured-products-section">
        <h2>Featured Products</h2>
        <div className="featured-products-container">
          {featuredProducts.map(product => (
            <div key={product.id} className="featured-product-card">
              <h3>{product.name}</h3>
              <p>{product.specs}</p>
              <p>ARS {product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

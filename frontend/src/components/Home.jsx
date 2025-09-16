import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  // Mock data for featured products
  const featuredProducts = [
    { id: 1, name: 'CPU Ryzen 5 5600x', specs: '6 cores, 12 threads', price: 250 },
    { id: 2, name: 'Nvidia RTX 3080', specs: '10GB GDDR6X', price: 800 },
    { id: 3, name: 'CPU Intel i9-13900K', specs: '24 cores, 32 threads', price: 600 },
  ];

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <header style={{ backgroundColor: '#282c34', padding: '4rem', color: 'white' }}>
        <h1>Welcome to Microprocessors & GPUs Shop</h1>
        <p>Your one-stop shop for the latest and greatest in computing hardware.</p>
        <Link to="/ProductsList" style={{ textDecoration: 'none', color: 'white', backgroundColor: '#61dafb', padding: '10px 20px', borderRadius: '5px', marginTop: '20px', display: 'inline-block' }}>
          Shop Now
        </Link>
      </header>

      <section style={{ padding: '2rem' }}>
        <h2>Featured Products</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
          {featuredProducts.map(product => (
            <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
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

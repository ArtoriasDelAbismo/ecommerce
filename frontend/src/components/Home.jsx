import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import FeaturedProducts from './FeaturedProducts';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products`)
      .then((res) => res.json())
      .then((data) => {
        const featured = data.filter(p => p.featured);
        setProducts(featured);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching featured products:", error)
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Next-gen computing hardware</h1>
        <Link to="/ProductsList" className="shop-now-button">
          Shop Now
        </Link>
      </header>

      <section className="featured-products-section">
        <div className="featured-products-container">
          <FeaturedProducts products={products} isLoading={isLoading} />
        </div>
      </section>
    </div>
  );
}


import React from "react";
import "./FeaturedProducts.css";
import { Link } from "react-router-dom";

export default function FeaturedProducts({ products, isLoading }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!products || products.length === 0) {
    return <div>No featured products available.</div>;
  }

  return (
    <div>
      <h2 style={{color:'black', marginBottom:'18px'}}>Featured Products</h2>
      <div className="featured-products-grid">
        {products.map((product) => (
            <Link to={`/product/${product.id}`}>
                <div key={product.id} className="featured-product-card">
                    <h3>{product.name}</h3>
                    <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100px", height: "100px" }}
                    />
                    <p>{product.specs}</p>
                    <p>ARS {product.price}</p>
                </div>
            
            </Link>
        ))}
      </div>
    </div>
  );
}


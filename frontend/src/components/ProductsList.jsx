import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductsList.css";
import { useCartContext } from "../hooks/useCart";

export default function ProductsList({ searchQuery }) {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCartContext();

  const categories = ["MICROPROCESADORES", "GRAFICAS", "SSD"];
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products
    .filter((p) =>
      selectedCategory ? p.category === selectedCategory : true
    )
    .filter((p) =>
      searchQuery
        ? p.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true
    );

  return (
    <div className="product-list-container">
      <h1 className="product-list-title">Microprocesadores & GPUs</h1>

      <div className="category-container">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => handleFilter(cat)}
            className={`category-button ${
              selectedCategory === cat ? "active" : ""
            }`}
          >
            {cat}
          </button>
        ))}
        <button
          className="category-button"
          onClick={() => setSelectedCategory(null)}
        >
          ALL
        </button>
      </div>

      <div className="products-container-wrapper">
        <div className="products-container">
          {filteredProducts.map((p) => (
            <div key={p.id} className="product-card">
              <Link to={`/product/${p.id}`}>
                <div className="product-image-container">
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="product-info">
                  <h3>{p.name}</h3>
                  <p>{p.specs}</p>
                  <p className="product-price">$ {p.price}</p>
                </div>
              </Link>
              <div className="add-to-cart-container">
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart(p)}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>Añadir</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

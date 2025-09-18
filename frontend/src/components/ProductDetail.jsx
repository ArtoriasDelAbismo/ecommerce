import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../hooks/useCart";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCartContext();
  
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  } 

  return (
    <div className="product-detail-container">
      <section className="product-detail-card">
        <div className="product-detail-image">
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="product-detail-info">
          <div className="product-header">
            <h1>{product.name}</h1>
            <p className="product-price">${product.price}</p>
          </div>

          {product.characteristics && product.characteristics.length > 0 && (
            <>
              <h3 className="features-title">Caracterìsticas</h3>
              <ul className="feature-list">
                {product.characteristics.map((char, index) => (
                  <li className="feature-item" key={index}>
                    {char}
                  </li>
                ))}
              </ul>
            </>
          )}
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
                             <i className="fa-solid fa-cart-shopping"></i>+

          </button>
        </div>
      </section>

      <section className="description-section">
        <div className="description-content">
          <h2>Descripción</h2>
          <div className="separator"></div>
          <div className="product-specs">
            {product.description.map((section, index) => {
              return (
                <div key={index}>
                  <h3>{section.title}</h3>
                  <ul>
                    {section.items.map((item, index) => {
                      return <li style={{listStyle:'none'}} key={index}>{item}</li>
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

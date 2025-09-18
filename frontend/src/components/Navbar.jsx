import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useCartContext } from "../hooks/useCart";

export default function Navbar({ onSearch }) {
  const { cart } = useCartContext();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap:'10px' }}>
          <div style={{ position: "absolute", left: "25px", fontSize:'x-large' }}>
            <p>EternaCore</p>
          </div>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/ProductsList" className="nav-link">
            Productos
          </Link>
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar"
              className="search-input"
              onChange={handleInputChange}
            />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </div>
          <div className="nav-right">
            <Link to="/Cart" className="cart-link">
              <i className="fa-solid fa-cart-shopping"></i>
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>
            <Link to="/profile">
              <div className="user-icon">
                <i className="fa-solid fa-user"></i>
              </div>
            </Link>
            <Link to="/login">
              <div>
                <button>Login</button>
              </div>
            </Link>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "40px",
            backgroundColor: "#ffff",
            color: "black",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <i className="fa-solid fa-shield"></i>
            <p>Garantía de 6 meses en todos los productos</p>
          </div>
          <div
            style={{ height: "30px", width: "1px", backgroundColor: "black" }}
          ></div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <i className="fa-solid fa-truck-fast"></i>
            <p>Envíos gratis dentro de la ciudad de Santa Fe</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useCartContext } from '../hooks/useCart';

export default function Navbar() {
  const { cart } = useCartContext();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/ProductsList">Products</Link>
        <div style={{ position: 'absolute', display: 'flex', right: '25px', gap: '10px', alignItems: 'center' }}>
          <Link to="/Cart" style={{ position: 'relative' }}>
            <i className="fa-solid fa-cart-shopping"></i>
            {totalItems > 0 && (
              <>
                <span style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  backgroundColor: '#39ba39',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '2px 6px',
                  fontSize: '10px',
                  fontWeight: 'bold'
                }}>
                  {totalItems}
                </span>
              
              </>
            )}
          </Link>
          <Link>
            <div style={{ border: '2px solid #646cff', borderRadius: '100%', width: '28px' }}>
              <i className="fa-solid fa-user"></i>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

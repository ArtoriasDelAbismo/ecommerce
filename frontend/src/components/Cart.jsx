import React from 'react';
import './Cart.css';
import { useCartContext } from '../hooks/useCart';

export default function Cart() {
  const { cart, handleCheckout, deleteFromCart } = useCartContext();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return (
    <div style={{width:'100%', display:'flex', justifyContent:'center'}}>

      <div style={{ marginTop: "30px", padding: "2rem", width:'50%', border:'1px solid white', borderRadius:'8px', backgroundColor:'#ffffffff', color:'black' }}>
        <h2 style={{fontFamily:'techfont'}}>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map(item => (
                <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection:'column' }}>
                  <div style={{display:'flex', justifyContent:'space-between', width:'100%', textAlign:'center', alignContent:'center', alignItems:'center'}}>
                    <div>
                      <img style={{width:'100px', height:'100px'}} src={item.image} alt="" />
                    </div>
                    <span>{item.name} x {item.quantity}</span>
                    <span>$<strong>{item.price * item.quantity}</strong></span>
                    <button style={{width:'5%'}} onClick={() => deleteFromCart(item)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                  <div style={{height:'1px', width:'100%', backgroundColor:'black'}}></div>
                  <span>Total: <strong>{totalPrice}</strong></span>
                </div>

            ))}
            <div style={{ marginTop: "20px", textAlign: "right" }}>
              <button style={{width:'40%'}} type="button" onClick={handleCheckout}>Checkout with Mercado Pago</button>
            </div>
          </>
        )}
      </div>
    
    </div>
  );
}
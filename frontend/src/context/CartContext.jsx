import { createContext } from "react";
import { useCart } from "../hooks/useCart";
import { checkout } from "../Handlers";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cart, addToCart, deleteFromCart } = useCart();

  const handleCheckout = (e) => {
    checkout(e, cart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart, handleCheckout }}>
      {children}
    </CartContext.Provider>
  );
};

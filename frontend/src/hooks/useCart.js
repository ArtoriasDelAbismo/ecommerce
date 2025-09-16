import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = window.localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [cart]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const deleteFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return { cart, addToCart, deleteFromCart };
};

export const useCartContext = () => {
  return useContext(CartContext);
};

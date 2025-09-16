import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductsList" element={<ProductsList />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

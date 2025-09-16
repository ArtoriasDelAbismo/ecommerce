import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import { CartProvider } from "./context/CartContext";
import { useState } from "react";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedin] = useState(false)

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <CartProvider>
      <Router>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/ProductsList"
            element={<ProductsList searchQuery={searchQuery} />}
          />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  );
}

export default App;

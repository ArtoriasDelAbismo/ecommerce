import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductsList.css";
import { useCartContext } from "../hooks/useCart";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCartContext();
  const [category, setCategory] = useState([
    'CPU',
    'GRAFICAS',
    'SSD'
  ])

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  

  return (
    <div>
      <h1 style={{marginTop:'50px'}}>Microprocessors & GPUs</h1>
      <div style={{display:'flex', justifyContent:'center', gap:'30px', marginTop:'20px'}}>
        {category.map((category, index) => {
          return <ul>
            <li style={{listStyle:'none'}} key={index}>
              <button style={{width:'150px', height:'30px', display:'flex', alignContent:'center', alignItems:'center', justifyContent:'center', borderRadius:'15px', border:'1px solid #868585ff'}}>{category}</button>
              </li>
          </ul>
        })}

      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            width: "60%",
          }}
        >
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <Link to={`/product/${p.id}`}>
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "6px",
                    height: "200px",
                    padding: "15px",
                  }}
                >
                  <img src={p.image} alt={p.name} />
                </div>
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.specs}</p>
                  <p>$ {p.price}</p>
                </div>
              </Link>
              <div style={{display:'flex', justifyContent:'center', marginBottom:'10px'}}>
                <button style={{ display:'flex', height:'30px', alignItems:'center'}} onClick={() => addToCart(p)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

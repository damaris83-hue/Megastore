import { useState } from "react";

export default function Computer() {
  const [cart, setCart] = useState([]);
  const [showBill, setShowBill] = useState(false);

  const computers = [
    { id: 1, name: "HP Laptop i5", price: 55000, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400" },
    { id: 2, name: "Dell Inspiron", price: 60000, image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400" },
    { id: 3, name: "MacBook Air M2", price: 95000, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400" },
    { id: 4, name: "Lenovo ThinkPad", price: 58000, image: "https://images.unsplash.com/photo-1583223667854-e0e05b1ad2ad?w=400" },
    { id: 5, name: "ASUS Gaming", price: 75000, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400" },
    { id: 6, name: "Acer Desktop", price: 40000, image: "https://images.unsplash.com/photo-1593642532400-2682810df593?w=400" },
  ];

  const addToCart = (c) => setCart([...cart, c]);
  const total = cart.reduce((s, c) => s + c.price, 0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>💻 Computer World - Real Laptops</h1>
      
      <div style={{ background: "#222", color: "white", padding: "15px", textAlign: "center", borderRadius: "8px" }}>
        <h2 style={{ margin: 0 }}>Cart: {cart.length} computers selected</h2>
        {cart.length > 0 && (
          <button onClick={() => setShowBill(!showBill)} style={{ marginTop: "10px", padding: "8px 20px", cursor: "pointer" }}>
            {showBill ? "Hide Bill" : "Raise the Bill"}
          </button>
        )}
      </div>

      {showBill ? (
        <div style={{ border: "3px solid #222", padding: "20px", marginTop: "20px", borderRadius: "10px" }}>
          <h2>Your Bill - {cart.length} items</h2>
          {cart.map((c, i) => (
            <p key={i}>{i+1}. {c.name} - ₹{c.price.toLocaleString()}</p>
          ))}
          <h2 style={{ color: "green" }}>Total: ₹{total.toLocaleString()}</h2>
          <button onClick={() => { setCart([]); setShowBill(false); }} style={{ padding: "8px 15px", background: "red", color: "white", border: "none", borderRadius: "5px" }}>
            Clear Cart
          </button>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", marginTop: "20px" }}>
          {computers.map((c) => (
            <div key={c.id} style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "15px", textAlign: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
              <img src={c.image} alt={c.name} style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "8px" }} />
              <h3 style={{ margin: "10px 0 5px" }}>{c.name}</h3>
              <h3 style={{ color: "green", margin: "5px 0" }}>₹{c.price.toLocaleString()}</h3>
              <button onClick={() => addToCart(c)} style={{ background: "#ff9f00", color: "white", padding: "8px 20px", borderRadius: "5px", border: "none", cursor: "pointer", width: "100%" }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
import { useState } from "react";

export default function MegaStore() {
  const [cart, setCart] = useState([]);
  const [showBill, setShowBill] = useState(false);
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "HP Laptop i5", price: 55000, type: "Laptop", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400" },
    { id: 2, name: "Dell Inspiron", price: 60000, type: "Laptop", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400" },
    { id: 3, name: "MacBook Air M2", price: 95000, type: "Laptop", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400" },
    { id: 4, name: "Lenovo ThinkPad", price: 58000, type: "Laptop", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400" },
    { id: 5, name: "ASUS Gaming", price: 75000, type: "Laptop", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400" },
    { id: 6, name: "Acer Desktop", price: 40000, type: "Laptop", image: "https://images.unsplash.com/photo-1593642532400-2682810df593?w=400" },
    { id: 7, name: "iPhone 15", price: 80000, type: "Mobile", image: "https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400" },
    { id: 8, name: "Samsung S24", price: 70000, type: "Mobile", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400" },
    { id: 9, name: "OnePlus 12", price: 60000, type: "Mobile", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400" },
    { id: 10, name: "Realme GT", price: 30000, type: "Mobile", image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400" },
    { id: 11, name: "Redmi Note 13", price: 25000, type: "Mobile", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
    { id: 12, name: "Pixel 8", price: 65000, type: "Mobile", image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400" },
  ];

  const addToCart = (p) => setCart([...cart, p]);
  const total = cart.reduce((s, p) => s + p.price, 0);

  // SEARCH LOGIC
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>MEGA STORE - 12 Products</h1>
      
      <div style={{ background: "#222", color: "white", padding: "15px", textAlign: "center", borderRadius: "8px" }}>
        <h2 style={{ margin: "0 0 10px" }}>Cart: {cart.length} items</h2>
        
        {/* SEARCH BOX */}
        <input 
          type="text" 
          placeholder="🔍 Search Laptop, Mobile, iPhone, HP..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", width: "60%", borderRadius: "5px", border: "none", fontSize: "16px" }}
        />
        
        <div style={{ marginTop: "10px" }}>
          {cart.length > 0 && (
            <button onClick={() => setShowBill(!showBill)} style={{ padding: "10px 25px", cursor: "pointer" }}>
              {showBill ? "Hide Bill" : "Raise the Bill"}
            </button>
          )}
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: "10px" }}>Showing {filtered.length} products for "{search || "All"}"</p>

      {showBill ? (
        <div style={{ border: "3px solid #222", padding: "20px", marginTop: "20px", borderRadius: "10px" }}>
          <h2>Final Bill - {cart.length} items</h2>
          {cart.map((c, i) => (<p key={i}>{i+1}. [{c.type}] {c.name} - ₹{c.price.toLocaleString()}</p>))}
          <h1 style={{ color: "green" }}>Grand Total: ₹{total.toLocaleString()}</h1>
          <button onClick={() => { setCart([]); setShowBill(false); }} style={{ padding: "8px 15px", background: "red", color: "white", border: "none" }}>Clear Cart</button>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", marginTop: "20px" }}>
          {filtered.map((p) => (
            <div key={p.id} style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "15px", textAlign: "center" }}>
              <img src={p.image} alt={p.name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
              <p style={{ fontSize: "12px", color: "gray" }}>{p.type}</p>
              <h3 style={{ margin: "5px 0" }}>{p.name}</h3>
              <h3 style={{ color: "green" }}>₹{p.price.toLocaleString()}</h3>
              <button onClick={() => addToCart(p)} style={{ background: "#ff9f00", color: "white", padding: "8px 20px", border: "none", borderRadius: "5px", width: "100%", cursor: "pointer" }}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import { useState, useEffect } from "react";


{/*HEADER */}
<div className="header">
  <h2>MegaStore</h2>
  
</div>

const products = [
  { id: 1, name: "iPhone 15 Pro", price: 120000, img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300" },
  { id: 2, name: "MacBook Air M2", price: 95000, img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300" },
  { id: 3, name: "AirPods Pro", price: 26000, img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300" },
  { id: 4, name: "Apple Watch", price: 45000, img: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=300" },
];

export default function MegaStore() {
  const [dark, setDark] = useState(false); // <-- LIGHT MODE DEFAULT ☀️
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ background: dark ? "#111" : "#f5f5f5", color: dark ? "white" : "black", minHeight: "100vh", padding: "20px" }}>
      
      {/* TOP BAR WITH LOGOUT BUTTON HERE */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: dark ? "#222" : "white", padding: "15px", borderRadius: "10px", marginBottom: "20px" }}>
        <h2 style={{ margin: 0 }}>MEGA STORE</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => setDark(!dark)} style={{ padding: "8px 15px", borderRadius: "20px", cursor: "pointer", border: "1px solid #ccc" }}>
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
          <button onClick={() => { localStorage.removeItem("isLogged"); window.location.href = "/"; }} style={{ padding: "8px 15px", background: "red", color: "white", border: "none", borderRadius: "20px", cursor: "pointer", fontWeight: "bold" }}>
            Logout
          </button>
        </div>
      </div>

      <input type="text" placeholder="🔍 Search iPhone, MacBook..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "20px" }} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "15px" }}>
        {filtered.map(p => (
          <div key={p.id} style={{ background: dark ? "#222" : "white", padding: "15px", borderRadius: "10px", textAlign: "center" }}>
            <img src={p.img} alt={p.name} style={{ width: "100%", height: "150px", objectFit: "contain" }} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <button onClick={() => setCart([...cart, p])} style={{ background: "#2874f0", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", cursor: "pointer" }}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div style={{ background: dark ? "#222" : "white", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
        <h3>🛒 Cart - {cart.length} items</h3>
        {cart.map((c, i) => <p key={i}>{c.name} - ₹{c.price}</p>)}
        <h2>Total Bill: ₹{total}</h2>
      </div>
    </div>
  );
}

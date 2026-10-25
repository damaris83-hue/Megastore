import { useState } from "react";

export default function Mobile() {
  const [cart, setCart] = useState([]);
  const [showBill, setShowBill] = useState(false);

  const mobiles = [
    { id: 1, name: "iPhone 15", price: 70000 },
    { id: 2, name: "Samsung S24", price: 65000 },
    { id: 3, name: "OnePlus 12", price: 55000 },
    { id: 4, name: "Redmi Note 13", price: 20000 },
    { id: 5, name: "Realme 11 Pro", price: 25000 },
    { id: 6, name: "Vivo V30", price: 30000 },
  ];

  const addToCart = (m) => setCart([...cart, m]);
  const total = cart.reduce((s, m) => s + m.price, 0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>📱 Mobile World - 6 Mobiles</h1>
      
      <div style={{ background: "black", color: "white", padding: "15px", textAlign: "center" }}>
        <h2 style={{ margin: 0 }}>Cart: {cart.length} mobiles selected</h2>
        {cart.length > 0 && (
          <button onClick={() => setShowBill(!showBill)} style={{ marginTop: "10px", padding: "8px 20px", background: "white", color: "black", cursor: "pointer" }}>
            {showBill ? "Hide Bill" : "Raise the Bill / View Bill"}
          </button>
        )}
      </div>

      {showBill ? (
        <div style={{ border: "3px solid black", padding: "20px", marginTop: "20px" }}>
          <h2>Your Bill - {cart.length} mobiles</h2>
          {cart.map((m, i) => (
            <p key={i}>{i+1}. {m.name} - ₹{m.price.toLocaleString()}</p>
          ))}
          <h2 style={{ color: "green" }}>Total: ₹{total.toLocaleString()}</h2>
          <button onClick={() => { setCart([]); setShowBill(false); }}>Clear Cart</button>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "20px" }}>
          {mobiles.map((m) => (
            <div key={m.id} style={{ border: "2px solid #007bff", borderRadius: "10px", padding: "20px", textAlign: "center" }}>
              <div style={{ fontSize: "40px" }}>📱</div>
              <h3>{m.name}</h3>
              <h3>₹{m.price.toLocaleString()}</h3>
              <button onClick={() => addToCart(m)} style={{ background: "#007bff", color: "white", padding: "8px 15px", border: "none", borderRadius: "5px" }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

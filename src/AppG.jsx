import { useState } from "react";

function AppG() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const coffees = [
    { id: 1, name: "Espresso", price: 120 },
    { id: 2, name: "Latte", price: 150 },
    { id: 3, name: "Cappuccino", price: 140 },
    { id: 4, name: "Americano", price: 110 },
    { id: 5, name: "Mocha", price: 160 },
    { id: 6, name: "Cold Brew", price: 130 },
    { id: 7, name: "Black Coffee", price: 100 },
    { id: 8, name: "Filter Coffee", price: 90 },
    { id: 9, name: "Irish Coffee", price: 180 },
    { id: 10, name: "Caramel Latte", price: 170 },
    { id: 11, name: "Vanilla Latte", price: 165 },
    { id: 12, name: "Hazelnut Coffee", price: 175 },
  ];

  const addToCart = (c) => setCart([...cart, c]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Coffee Corner - 12 Coffees</h1>
      <button onClick={() => setShowCart(true)} style={{ background: "brown", color: "white", padding: "10px" }}>
        Cart: {cart.length} items - View Bill
      </button>

      {showCart ? (
        <div style={{ border: "2px solid brown", padding: "20px", marginTop: "20px" }}>
          <h2>Your Bill - {cart.length} items</h2>
          {cart.map((item, i) => (
            <p key={i}>{i+1}. {item.name} - ₹{item.price}</p>
          ))}
          <h3>Total: ₹{cart.reduce((s, it) => s + it.price, 0)}</h3>
          <button onClick={() => setShowCart(false)}>Close Bill</button>
          <button onClick={() => setCart([])} style={{ marginLeft: "10px" }}>Clear</button>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginTop: "20px" }}>
          {coffees.map((c) => (
            <div key={c.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
              <h3>{c.name}</h3>
              <p>₹{c.price}</p>
              <button onClick={() => addToCart(c)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default AppG;
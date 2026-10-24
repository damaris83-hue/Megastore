import { useEffect, useState } from "react"
import axios from "axios"

function AppD() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // NEW API - Platzi Shop (not Dummy, not FakeStore)
    axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=20")
     .then(res => setProducts(res.data))
  }, [])

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Deepa's Platzi Shop 🛍️ - New API</h1>
      <p style={{ textAlign: "center" }}>Not DummyJSON, Not FakeStore - This is Platzi API!</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px", marginTop: "20px" }}>
        {products.map(item => (
          <div key={item.id} style={{
            background: "white",
            borderRadius: "12px",
            padding: "15px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}>
            <img src={item.images[0]} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
            <p style={{ background: "#eef", fontSize: "12px", display: "inline-block", padding: "2px 8px", borderRadius: "10px", marginTop: "8px" }}>
              {item.category.name}
            </p>
            <h4 style={{ fontSize: "14px", height: "40px", overflow: "hidden" }}>{item.title}</h4>
            <p style={{ color: "#B12704", fontWeight: "bold", fontSize: "18px" }}>${item.price}</p>
            <button style={{ width: "100%", background: "#FFD814", border: "none", padding: "8px", borderRadius: "20px", fontWeight: "bold" }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppD;
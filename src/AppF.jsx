import { useEffect, useState } from "react"
import axios from "axios"

function AppF() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // 5th NEW API - Coffee Store
    axios.get("https://api.sampleapis.com/coffee/hot")
     .then(res => setProducts(res.data.slice(0, 20)))
  }, [])

  return (
    <div style={{ background: "#fdf6ec", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Coffee Corner ☕ - Hot Drinks Store</h1>
      <p style={{ textAlign: "center" }}>Fresh Coffee & Beverages - New API</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px", marginTop: "20px" }}>
        {products.map(item => (
          <div key={item.id} style={{
            background: "white",
            borderRadius: "12px",
            padding: "15px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}>
            <img src={item.image} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
            <h4 style={{ fontSize: "16px", margin: "10px 0 5px" }}>{item.title}</h4>
            <p style={{ fontSize: "13px", color: "#555", height: "60px", overflow: "hidden" }}>{item.description}</p>
            <p style={{ color: "#B12704", fontWeight: "bold" }}>
              ${ (item.id * 2 + 5.99).toFixed(2) } - {item.ingredients[0]}
            </p>
            <button style={{ width: "100%", background: "#6F4E37", color: "white", border: "none", padding: "8px", borderRadius: "20px", fontWeight: "bold" }}>
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppF;
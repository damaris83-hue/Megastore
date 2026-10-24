import { useEffect, useState } from "react"
import axios from "axios"

function AppL() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
  }, [])

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Deepa's FakeStore Shop 🛒</h1>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
        {products.map(item => (
          <div key={item.id} style={{
            background: "white",
            borderRadius: "12px",
            padding: "15px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            transition: "0.3s",
            cursor: "pointer"
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div style={{ background: "white", height: "180px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
              <img src={item.image} style={{ maxHeight: "160px", maxWidth: "100%", objectFit: "contain" }} />
            </div>
            
            <p style={{ background: "#eef", fontSize: "12px", display: "inline-block", padding: "2px 8px", borderRadius: "10px" }}>
              {item.category}
            </p>
            
            <h4 style={{ fontSize: "14px", height: "40px", overflow: "hidden", margin: "8px 0" }}>
              {item.title}
            </h4>
            
            <p style={{ color: "#B12704", fontWeight: "bold", fontSize: "18px", margin: "5px 0" }}>
              ${item.price}
            </p>
            
            <button style={{ width: "100%", background: "#FFD814", border: "none", padding: "8px", borderRadius: "20px", cursor: "pointer", fontWeight: "bold" }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppL;
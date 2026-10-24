import { useEffect, useState } from "react"
import axios from "axios"

function Appz() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // 1. axios - get data from API
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        setProducts(res.data) // save to state
      })
  }, [])

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", padding: "20px" }}>
      {/* 2. map - loop all products */}
      {products.map(item => (
        <div key={item.id} style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "10px" }}>
          <img src={item.image} width="100" height="100" />
          <h4>{item.title}</h4>
          <p>${item.price}</p>
          <small>{item.category}</small>
        </div>
      ))}
    </div>
  )
}

export default Appz;
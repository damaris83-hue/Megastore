
import React from 'react'

function App() {
  return (
    <div style={{fontFamily:'Arial', padding:'10px'}}>
      <h1 style={{textAlign:'center', color:'#1e3a8a'}}>DEEPA WEBSITE - MEGA STORE 🛍️</h1>
      
      <div style={{display:'flex', gap:'20px', justifyContent:'center', padding:'20px', flexWrap:'wrap'}}>
        <div style={{border:'1px solid #ccc', padding:'20px', borderRadius:'10px', minWidth:'150px', textAlign:'center'}}>
          📱<br/>Mobile<br/><b>₹15000</b>
        </div>
        <div style={{border:'1px solid #ccc', padding:'20px', borderRadius:'10px', minWidth:'150px', textAlign:'center'}}>
          👗<br/>Dress<br/><b>₹2000</b>
        </div>
        <div style={{border:'1px solid #ccc', padding:'20px', borderRadius:'10px', minWidth:'150px', textAlign:'center'}}>
          👟<br/>Shoes<br/><b>₹3000</b>
        </div>
      </div>

      <p style={{textAlign:'center', color:'green'}}>✅ LIVE on Mobile & Laptop!</p>
    </div>
  )
}

export default App





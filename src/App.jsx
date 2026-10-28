import React from 'react'

function App() {
  const products = [
    { id: 1, name: 'Smart Mobile', price: '₹15,000', emoji: '📱', color: '#dbeafe' },
    { id: 2, name: 'Designer Dress', price: '₹2,000', emoji: '👗', color: '#fce7f3' },
    { id: 3, name: 'Running Shoes', price: '₹3,000', emoji: '👟', color: '#dcfce7' },
    { id: 4, name: 'Smart Watch', price: '₹5,000', emoji: '⌚', color: '#fef3c7' },
  ]

  return (
    <div style={{fontFamily:'Arial, sans-serif', background:'#f8fafc', minHeight:'100vh'}}>
      <header style={{background:'#1e40af', color:'white', padding:'15px', textAlign:'center', position:'sticky', top:0}}>
        <h1 style={{margin:0, fontSize:'22px'}}>DEEPA MEGA STORE 🛒</h1>
        <p style={{margin:'5px 0 0', fontSize:'12px', opacity:0.9}}>Best Mobile Deals</p>
      </header>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', padding:'12px', maxWidth:'500px', margin:'0 auto'}}>
        {products.map(p => (
          <div key={p.id} style={{background:'white', borderRadius:'12px', padding:'12px', textAlign:'center', boxShadow:'0 2px 8px rgba(0,0,0,0.1)'}}>
            <div style={{background:p.color, height:'80px', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'40px', marginBottom:'8px'}}>{p.emoji}</div>
            <h3 style={{margin:'5px 0', fontSize:'14px'}}>{p.name}</h3>
            <p style={{margin:'4px 0', color:'#16a34a', fontWeight:'bold', fontSize:'14px'}}>{p.price}</p>
            <button onClick={()=>alert(`Added ${p.name} to cart!`)} style={{background:'#2563eb', color:'white', border:'none', padding:'8px 0', width:'100%', borderRadius:'6px', marginTop:'6px', fontWeight:'bold', cursor:'pointer'}}>Buy Now</button>
          </div>
        ))}
      </div>

      <div style={{textAlign:'center', padding:'20px', color:'#64748b', fontSize:'12px'}}>
        © 2026 Deepa Mega Store - Mobile Friendly
      </div>
    </div>
  )
}

export default App

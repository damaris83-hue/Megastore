

import React from 'react'

function App() {
  const products = [
    { id: 1, name: 'Smart Mobile', price: '₹15,000', emoji: '📱', color: '#dbeafe' },
    { id: 2, name: 'Designer Dress', price: '₹2,000', emoji: '👗', color: '#fce7f3' },
    { id: 3, name: 'Running Shoes', price: '₹3,000', emoji: '👟', color: '#dcfce7' },
    { id: 4, name: 'Smart Watch', price: '₹5,000', emoji: '⌚', color: '#fef3c7' },
  ]

  return (
    <div style={{fontFamily:'Arial, sans-serif', margin:0, background:'#f8fafc', minHeight:'100vh'}}>
      
      {/* HEADER - Mobile Friendly */}
      <header style={{background:'#1e40af', color:'white', padding:'15px', textAlign:'center', position:'sticky', top:0, zIndex:10}}>
        <h1 style={{margin:0, fontSize:'22px'}}>DEEPA MEGA STORE 🛍️</h1>
        <p style={{margin:'5px 0 0', fontSize:'12px', opacity:0.9}}>Best Deals on Mobile</p>
      </header>

      {/* BANNER */}
      <div style={{background:'linear-gradient(90deg, #3b82f6, #8b5cf6)', color:'white', padding:'20px', textAlign:'center'}}>
        <h2 style={{margin:0, fontSize:'18px'}}>MEGA MOBILE SALE LIVE!</h2>
        <p style={{margin:'5px 0 0', fontSize:'14px'}}>Up to 50% OFF</p>
      </div>

      {/* PRODUCTS GRID - Auto Mobile Responsive */}
      <div style={{
        display:'grid', 
        gridTemplateColumns:'repeat(auto-fit, minmax(160px, 1fr))', 
        gap:'15px', 
        padding:'15px',
        maxWidth:'800px',
        margin:'0 auto'
      }}>
        {products.map(p => (
          <div key={p.id} style={{
            background:'white', 
            borderRadius:'15px', 
            padding:'20px', 
            textAlign:'center',
            boxShadow:'0 2px 10px rgba(0,0,0,0.1)',
            border:'1px solid #e5e7eb'
          }}>
            <div style={{background:p.color, width:'80px', height:'80px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 10px', fontSize:'40px'}}>
              {p.emoji}
            </div>
            <h3 style={{margin:'10px 0 5px', fontSize:'16px'}}>{p.name}</h3>
            <p style={{margin:'0 0 10px', fontWeight:'bold', color:'#1e40af', fontSize:'18px'}}>{p.price}</p>
            <button style={{background:'#1e40af', color:'white', border:'none', padding:'8px 20px', borderRadius:'20px', width:'100%', fontWeight:'bold'}}>
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer style={{background:'#1e293b', color:'white', textAlign:'center', padding:'15px', marginTop:'20px', fontSize:'12px'}}>
        <p style={{margin:0}}>© 2026 Deepa Website | Made with ❤️ | Mobile Ready ✅</p>
      </footer>

    </div>
  )
}

export default App

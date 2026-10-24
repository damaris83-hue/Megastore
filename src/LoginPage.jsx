import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple login check - you can change email/password
    if (email === "admin@gmail.com" && password === "12345") {
      alert("Login Success! Welcome to MEGA STORE 🎉");
      navigate("/mega"); // Go to your store after login
    } else {
      setError("Wrong Email or Password! Try admin@gmail.com / 12345");
    }
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh",
      background: "#f0f2f5",
      fontFamily: "Arial"
    }}>
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        width: "350px",
        textAlign: "center"
      }}>
        <h1 style={{ marginBottom: "10px" }}>🔐 MEGA STORE Login</h1>
        <p style={{ color: "gray", fontSize: "14px" }}>Login to see 12 Products</p>
        
        <form onSubmit={handleLogin} style={{ marginTop: "20px" }}>
          <input
            type="email"
            placeholder="Email: admin@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box"
            }}
            required
          />
          
          <input
            type="password"
            placeholder="Password: 12345"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box"
            }}
            required
          />

          {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

          <button type="submit" style={{
            width: "100%",
            padding: "12px",
            background: "#2874f0",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold"
          }}>
            Login
          </button>
        </form>

        <div style={{ marginTop: "20px", background: "#e8f0fe", padding: "10px", borderRadius: "8px", fontSize: "13px" }}>
          <b>Demo Login:</b><br/>
          Email: admin@gmail.com<br/>
          Password: 12345
        </div>
      </div>
    </div>
  );
}
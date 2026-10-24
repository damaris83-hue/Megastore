import { useState,useEffect } from "react";
 function Appj() {


const [email,setEmail]=useState("");

 
const handleSubmit= (e) => {
    e.preventDefault();
    if (email !=="") {
        alert(`login success! \nEmail:${email}`);
        
    }

};
<h1>login Form</h1>
return(
    <div style={{
        padding:"20px",
        maxwidth:"100%"
          }}>

  <form onSubmit={handleSubmit}>

<input
    type="email"
    value={email}
    placeholder="Enter email"
    onChange={(e) => setEmail(e.target.value)}
   />

    
<button
  type="submit">Login</button>
</form>

</div>
);
}
export default Appj;
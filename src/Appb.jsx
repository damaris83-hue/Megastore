import { useState,useEffect } from "react";

function Appb() {
    const[count,setCount]=useState(0);

    useEffect(()=>{
   document.title=`Clicks:${count}`//you can see in browser tab
    },[count]);
   console.log("Count changed:",count);
  

    return(
   <>
  <p>Count:{count}</p>
  <button onClick={()=> setCount(count+1)}>Click</button>
</>
)
}
export default Appb;
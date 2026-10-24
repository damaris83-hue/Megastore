import {useState} from "react";

function Counter() {
   //let :count=0;
   const [count,setCount]=useState(0);
   return(
  <>
  <div style={{textAlign:"center",padding:"20px"}}>

<h1>count:{count}</h1>

<button onClick={()=>setCount(count+1)}>+increase</button>
<button onClick={()=>setCount(count-1)}>-decrease</button>
<button onclick={()=>setCount(0)}>Reset</button>

</div>
</>
);
}
export default Counter;
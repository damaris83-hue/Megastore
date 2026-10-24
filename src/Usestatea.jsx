import { useState} from "react";


function Usestatea() {
   //let count=0;

 let [count, setCount] =useState(0);

 const incrementCount = () => {
      //count++;

setCount(++count);



 }
 const decrementCount=()=>{
  setCount(--count);
 }
 return(
    <>
    <h1>Count is {count}</h1>

  <button onClick={incrementCount}>Incremenet Click</button>

   <button onClick={decrementCount}>Decrement Click</button>
    
    </>
 )
}

export default Usestatea;
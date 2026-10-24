
import {useState} from "react";

function usestateb(){
  // let number=0;

  let[number,setNumber]= useState(0);

  const incrementNumber= () => {
    setNumber(number++);
  }
  const decrementNumber= () => {
    setNumber(--number);
  }
  return(
    <>
    <h1>Number is {number}</h1>

    <button onClick={incrementNumber}>increment Click</button>
    <button onClick={decrementNumber}>decrement Click</button>
    
    </>
  )
}
export default usestateb;
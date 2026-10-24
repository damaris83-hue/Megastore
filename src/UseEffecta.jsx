
import { useEffect, useState } from "react";
function UseEffecta(){
const[message,setMessage]=useState("")

    useEffect(()=>{
        setMessage("welcome page loaded");
        console.log("useeffect is executed");
    },[]);
    return
        <>
        <h1>useeffect is executed</h1>
        </>
    
}
export default UseEffecta;
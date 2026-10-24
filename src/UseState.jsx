import { useState } from "react";

function UseState() {

    // let count = 0;

    let [count, setCount] = useState(0);

    const incrementCount = () => {
        // count++;
        setCount(++count);
    }
    return(
        <>
        
        <h1>Count is {count}</h1>

        <button onClick={incrementCount}>Click</button>
        
        
        </>
    )
}
export default UseState;
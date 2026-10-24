import {useState} from "react";

function NameInput() {
//create state for input text.
    const[name,setName]=useState("");
    return(
        <>
    <div style={{textAlign:"center",padding:"20px"}}>
  <h2>Enter your name</h2>

{/*input updates state on everykeystroke */}

<input
type="text"
placeholder="type here..."
value={name}
onChange={(e)=>setName(e.target.value)}
style={{padding:"8px",fontSize:"16px"}}
/>

/*display state*/
<h3>Hello,{name}☻</h3>

</div>
</>
);
}
export default NameInput;
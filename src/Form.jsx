import { useState } from "react";

function Form(){

    let[name,setName]=useState("");
    let[state,setState]=useState("TG");

    return(
<>
<h1>userinput form</h1>
<form action="">
<input type="text" placeholder="Enter your name"
onChange={(e)=>setName(e.target.value)}/>

<h1>Enter name </h1>

<h3>select state</h3>


<input type="text" placeholder="select state"

onChange={(e)=>"setState"(e.target.value)}/>


<select state={state} id="" onChange={(e)=>setState(e.target.value)}>
<option value="AP">AP</option>
<option value="TG">TG</option>
<option value="UP">UP</option>
<option value="MP">MP</option>
</select>

</form>
        
</>
    )
}
export default Form;
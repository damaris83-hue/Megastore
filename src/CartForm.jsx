import axios from "axios";
import { useState } from "react";

function CartForm() {

let [id ,setId]=useState();
let [title,setTitle]=useState();
let [price,setPrice]=useState();
let [description,setDescription]=useState();
let [category,setCategory]=useState();
let [image,setImage]=useState();
    
let data={id ,title ,price, description, category ,image};

const sendData = (e)=> {

    e.preventDefault();

    axios.post('https://fakestoreapi.com/carts',{data}).then((res)=> {
  console.log(res);
  console.log(res.status);
  if (res.status==201){
    alert("success")
  } else {
    alert("Error");
  }
}).Catch((err)=>{
    alert(err);
})
}

return(
    <>
    <form onSubmit={sendData}>
<input type="number" placeholder="Enter Id"
onChange={(e) =>setId(e.target.value)}
/>
<br/>

<input type="text" placeholder="enter title"
onChange={(e) =>setTitle (e.target.value)}
/>
<br/>

<input type="text" placeholder="enter price"
onChange={(e) => setPrice(e.target.value)}
/>
<br/>

<textarea name="" id=""
onChange={(e) =>setDescription(e.target.value)}
></textarea>
<br/>

<select name="" id=""
onChange={(e) =>setCategory(e.target.value)}
>
<option value="clothing">clothing</option>
<option value="mens">mens</option>
<option value="womens">womens</option>
<option value="kids">kids</option>
</select>

<br/>

<input type="text" placeholder="enterImage"
onChange={(e)=>setImage(e.target.value)}
/>
<br/>
<input type="submit"/>
</form>
    
    </>
)
}
export default CartForm;
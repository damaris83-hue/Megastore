import axios from "axios";
import { useState } from "react";

function PostDat(){

//     const data={

  
//   "title":"pqr",
// "price":15,
//   "description":"xyz",
//   "catagory":"clothing",
//   "image": ""

//   }

let [title, setTitle] = useState();
let [price, setPrice] = useState();
let [description, setDescription] = useState();
let [category, setCategory] = useState(); 
let [image, setImage] = useState();

let data = {title, price,description, category, image};


const sendData= (e) => {

    e.preventDefault();

axios.post('https://fakestoreapi.com/products',{data}).then((res)=>{
 console.log(res);
 console.log(res.status);
 if(res.status == 201) {
    alert("success")
 } else{
    alert("Error");
 }
}).catch((err)=>{

alert(err);

})
}
return(

<>
{/* <button onClick={sendData}>post Dat</button> */}

<form onSubmit={sendData}>
    <input type="text" placeholder="Enter Title"
    onChange={(e) => setTitle(e.target.value) }
    />
    <br />
    <input type="text" placeholder="Enter Price"
    onChange={(e) => setPrice(e.target.value) }
    />
    <br />
    <textarea name="" id=""
    onChange={(e) => setDescription(e.target.value) }
    ></textarea>
    <br />
    <select name="" id=""
    onChange={(e) => setCategory(e.target.value) }
    >
        <option value="Clothing">Clothing</option>
        <option value="Mens">Mens</option>
        <option value="Womens">Womens</option>
        <option value="Kids">Kids</option>
    </select>
    <br />
    <input type="text" placeholder="ENter Image"
    onChange={(e) => setImage(e.target.value) }
    />
    <br />
    <input type="submit" />

</form>

</>
  )
}
export default PostDat;
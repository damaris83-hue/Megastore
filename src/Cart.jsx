import { useEffect,useState } from "react";
import axios from "axios";

function Cart() {

const[form,setForm]=useState({
    Title:"abc",
    price:"40",
    description:"display bright",
    image:"https://i.pravatar.cc",
    category:"electronics"
});


const handleChange= (e) => {

    setForm({...form,[e.target.name]:e.target.value});
};

const handlesubmit= async (e) => {
    e.preventDefault();

       try{
        const response=await axios.post("https://fakestoreapi.com/products",{
          ...form,
          price :parseFloat(form.price) 
        });
        if (response.status===201) {
            alert(" ✓ success! product Added.Status:201 Created");
            console.log("new product:",response.data);

            setForm({Title:"", price:"", description:"", image:"http://i.pravatar.cc", category:"electronics"});
        }
       } catch(error) {
        alert("✕ Error");
            console.log(error);
}
};
return(
   
    
    <form onSubmit={handlesubmit}>
<input value={"Title"} onChange={(e)=>setTitle(e.target.value)}/>


<button type="submit" className="btn btn-primary">Add product</button>

    </form>
   
);
}

export default Cart;
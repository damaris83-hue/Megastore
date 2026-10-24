import axios from "axios";
import { useState} from "react";

function User() {

let [id,setId]=useState();
let [userid ,SetUserid]=useState();
let [password ,setpassword]=useState();
let [email,setemail]=useState();

let data={id ,userid , password , email};
const sendData=(e) => {

    e.preventDefault();
    axios.post('https://fakestoreapi.com/users',{data}).then((res)=>{
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
  <form onsubmit={sendData}>

<input type="text" placeholder="enter id"
onChange={(e)=>setId(e.target.value)}
    />
<br/>
<input type="text" placeholder="enter userid"
onChange={(e)=>setUserid(e.target.value)}
/>
<br/>
<input type="text" placeholder="enter password"
onChange={(e)=>setpassword(e.target.value)}
/>
<br/>
<input type="text" placeholder="enter Email"
onChange={(e)=>setemail(e.target.value)}
/>


<input type="submit"/>

</form>
  </>
);
}
export default User;
import { useState,useEffect } from "react";

function Appc() {
//1.usestate for input,dropdown and filtered list
    let[country,setCountry]=useState("India");
    let[search,setSearch]=useState("");
    let[cities,setCities]=useState("");

//2.Dummy data
let data={
India:["Hyderabad","Delhi","Mumbai","Banglore","Chennai"],
USA:["New york","Losangels","Chicago","Houston","Miami"],
Japan:["tokyo","osaka","kyoto","nagoya","fukuoka"]
};

//3.useeffect runs when country changes
useEffect(()=>{
setCities(data[country]);//update city list when country changes
setSearch("");//reset search
console.log("Country changed to:",country);
},[country]);//dependancy=country


return(
    <div style={{padding:"20px",fontFamily:"arial"}}>
  <h2>select country and city</h2>

  {/* drop down*/}
  <label>Country:</label>
  <select value={country} onChange={(e)=>setCountry(e.target.value)}>
<option value="India">India</option>
<option value="usa">USA</option>
<option value="Japan">Japan</option>
</select>

<br /><br />

{/*user input*/}
<label>SearchCity:</label>
<input
type="text"
placeholder="Type city name..."

value={search}></input>

<br  /><br/>
<select value={city}
onChange={(e)=>setcity(e.target.value)}>
<option value="hyderabad">hyderabad</option>
<option value="new york">newyork</option>
<option value="tokyo">tokyo</option>
</select>

<br/><br/>


<p><b>Selected:</b>  {country}searching for"{search}"</p>

</div>
)

}
export default Appc;



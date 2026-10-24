import { useEffect,useState } from "react";
import axios from "axios";

function AxiosEx(){
    let [posts,setposts]=useState("");

   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
        setposts(res.data);
    }).catch((err)=>{
        alert(err);
    })
    },[])   

   return(
<>
  <div>
    {
      posts && posts.map((post)=> {
        return(
<>
   <div key={post.id}>
  <h1>{post.userId}</h1>
  <h2>{post.id}</h2>
  <h3>{post.title}</h3>
  <h1>{post.body}</h1>

</div>
   </>
        )
    })
}
</div>
</>

);
    

}
    

export default AxiosEx;
import { useEffect,useState } from "react";
import axios from "axios";

function AxiosExm(){
    let[todos,settodos]=useState("");

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
            settodos(res.data);
        }). catch((err)=>{
            alert(err);
        })
        },[])

return(
<>
<div>
    {
        todos && todos.map((todo)=>{

            return(
<>
<div key={todo.id}>
    <h1>{todo.id}</h1>
<h1>{todo.userId}</h1>
<h3>{todo.title}</h3>
<h2>{todo.cmpleted}</h2>
</div>

</>

            )
        }
        )
    }
</div>
    </>
);
}
export default AxiosExm;

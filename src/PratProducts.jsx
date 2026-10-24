import axios from "axios";
import { useEffect,useState} from "react";

function PratProducts() {
    let[products ,setProducts]=useState();

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            setProducts(res.data);
        }).catch((err)=>{
            alert(err);
        })
    },[]);
    return(
        <>
        <div className="container">
            <div className="row">
                {
                    products && products.map((product) => {
           return(
            <div className="col-md-4">
<div class="card">
  <img src={product.image} class="img-fluid, w-50" />
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
<div className="row">
    <div className="col-md-6">
        <h4>{product.price}</h4>

    <h4>{product.category}</h4>
  </div>
  
</div>
</div>
</div>
</div>
           )
                    })

                    
                }
            </div>
        </div>
        
         </>
    )
}
export default PratProducts;



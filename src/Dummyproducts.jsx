import { useEffect,useState } from "react";
import axios from 'axios';

function Dummyproducts(){
    const[products, setProducts]=useState([]);

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(response=>{
            setProducts(response.data.products);
        })
        .catch(err=>console.log(err));
    },[]);
    return(
        <div className="container mt-4">
            <h2 className="text-center mb-4">DummyJSON products</h2>
            <div className="row">
                {products.map(product=>(
                   <div className="col-md-4 mb-4" key={product.id}>
                    <div class="card h-100">
  <img src={product.thumbnail} className="card-img-top" alt={product.title}/>
  <div class="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <p className="fw-bold">${product.price}</p>
  </div>
</div>
</div>
                ))}
            </div>
        </div>
    );
}
export default Dummyproducts;
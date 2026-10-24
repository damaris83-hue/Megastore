import axios from "axios";

function PostData() {

    const data = {
        "id":4,
        "userId" : 1,
        "products": {
            "id":2,
            "title": "ABC",
            "price": 15,
            "description": "XYZ",
            "category": "Clothing",
            "image": null
        } 
    }

    const sendData = () => {

        axios.post('https://fakestoreapi.com/carts', {data}).then((res) => {
            console.log(res);
            console.log(res.status);
            if(res.status == 201) {
                alert("Success")
            }else{
                alert("Error");
            }
        }).catch((err) => {
            alert(err);
        })
    }

    return(
        <>
                <button onClick={sendData}>Post Data</button>
        
        </>
    )
}
export default PostData;
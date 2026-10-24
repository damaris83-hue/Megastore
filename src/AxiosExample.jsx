import { useEffect, useState } from "react";
import axios from "axios";

function AxiosExample() {

    let [users, setUsers] = useState();

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            setUsers(res.data);
        }).catch((err) => {
            alert(err);
        })
    },[])

    return(
        <>

        <div>
            {
                users && users.map((user) => {
                        return(
                            <>
                            <div>
                            <h1>{user.name}</h1>
                            <h3>{user.address.city}</h3>
                            <h2>{user.email}</h2>
                            <h1>{user.address.street}</h1>
                            <h2>{user.address.suite}</h2>
                            <h3>{user.address.zipcode}</h3>
                            <h3>{user.address.geo.lat}</h3>
                            <h2>{user.address.geo.lng}</h2>
                            <h1>{user.address.geo.phone}</h1>
                            <h2>{user.address.geo.website}</h2>
                            </div>
                            </>
                        )
                })
            }
        </div>
        


        </>
    )

}
export default AxiosExample;
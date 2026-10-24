import { students } from "./data";
function Students() {

    return(
        <>

        {
            students.map((std)=> {
                    return(
                        <>
                        <h1>{std.name}</h1>
                        <p>{std.phone}</p>
                        <a href="mailto:{std.email}">{std.email}</a>
                        </>
                    )
            })
        }
        
        
        </>
    )
}
export default Students;
import{ employees } from "./data";
function Employees() {

return(

 <>
 {
             employees.map((std)=>{
                    return(
<>
<h1>{std.name}</h1>
<p>{std.income}</p>
<a href="from:{std.company}">{std.company}</a>
                           </>
                           )
                 })
                 }
 </>
)
}
export default Employees;
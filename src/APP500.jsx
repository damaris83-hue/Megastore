import { BrowserRouter,Routes,Route,link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import contact from "./pages/contact";

function App() {
    return(
        <BrowserRouter>
        {/*navigation bar*/}
   <nav style={{padding:"10pX",background:"#eee"}}>
    <link to="/" style={{margin:"10px"}}>home</link>
    <link to="/about" style={{margin:"10px"}}>about</link>
    <link to="/contact" style={{margin:"10px"}}>contact</link>
   </nav>
    {/*routes*/}
    <routes>
        <Route path="/" element={<Home/>}/>
        <route path="/" element={<About/>}/>
        <route path="/" element={<contact/>}/>
    </routes>
        </BrowserRouter>
    );
}
export default App500;
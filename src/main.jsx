import * as React from "react";
import * as ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Layout100 from "./Layout100.jsx";
import Layout from "./Layout.jsx";
import BOTstrp1 from "./BOTstrp1.jsx";
import Bootstrap2 from "./Bootstap2.jsx";
import BOOTstap3 from "./BOOTstap3.jsx";
import BOOTstrap4 from "./BOOTstrap4.jsx";
import Bootstap5 from "./Bootstap5.jsx";
import Lucide from "./Lucide.jsx";
import HIbiscus from "./HIbiscus.jsx";




import Word from "./Word.jsx";
import LILy from "./LILy.jsx";
import ROSE from "./ROSE.jsx";
import Jas from "./Jas.jsx";
import Sample from "./Sample.jsx";
import Students from "./Students.jsx";
import Employees from "./Employees.jsx";
import UseState from "./UseState.jsx";
import Usestatea from "./Usestatea.jsx";

import Counter from "./Counter.jsx";
import Usestateb from "./Usestateb.jsx";
import UseEffecta from "./UseEffecta.jsx";
import Appb from "./Appb.jsx";
import Form from "./Form.jsx";
import Appc from "./Appc.jsx";
import Appj from "./Appj.jsx";
import Appz from "./Appz.jsx";
import AxiosExample from "./AxiosExample.jsx";
import AxiosEx from "./AxiosEx.jsx";
import AxiosExm from "./AxiosExm.jsx";
import FakeProducts from "./FakeProducts.jsx";
import PratProducts from"./PratProducts.jsx";
import Dummyproducts from "./Dummyproducts.jsx";
import PostData from "./PostData.jsx";
import PostDat from "./PostDat.jsx";
import Cart from "./Cart.jsx";
import CartForm from "./CartForm.jsx";
import User from "./User.jsx";
import AppL from "./AppL.jsx";
import AppD from "./AppD.jsx";
import AppF from "./AppF.jsx";
import AppG from "./AppG.jsx";
import Mobile from "./Mobile.jsx";
import Computer from "./Computer.jsx";
import MegaStore from "./Megastore.jsx";
import  Search from "./Search.jsx";
import LoginPage from "./LoginPage.jsx";
import Lightmegastore from "./Lightmegastore.jsx";
import LucideA from "./LucideA.jsx";
import LucideB from "./LucideB.jsx";
import LucideN from "./lucideN.jsx";






const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path:"/mega",
    element:<MegaStore/>
  },
  {
    path:"/light",
    element:<Lightmegastore/>,
  },
  {
    path:"/login",
    element:<LoginPage/>,
  },
  {
    path:"/search",
    element:<Search/>,
  },
  {
    path:"/cmtr",
    element:<Computer/>,
  },
  {
    path:"/axz",
    element:<AppG/>,
  },
  {
    path:"/mobl",
    element:<Mobile/>,
  },
  {
    path: "/word",
    element: <Word />,
  },
  
  
  {
    path:"rose",
    element:<ROSE/>
  },
  {
    path:"lily",
    element:<LILy/>
  },
  

  {
    path:"jas",
    element:<Jas/>,
  },
   {
    path:"usestate",
    element:<Usestatea/>,
  },
  {
    path:"usestatek",
    element:<Usestateb/>,
  },
  {
  path:"pqr",
  element:<UseEffecta/>,
},
{
path:"xyz",
element:<Appb/>,

},
{
path:"atz",
element:<Appz/>,
  },
  {
    path:"alz",
    element:<AppL/>,
  },
  {
    path:"adz",
    element:<AppD/>,
  },
  {
    path:"afz",
    element:<AppF/>,
  },
{
  path:"form",
  element:<Form/>,
},
{
  path:"axios",
  element:<AxiosExample/>,
},
{
  path:"qrz",
  element:<AxiosEx/>
},
{
  path:"todo",
  element:<AxiosExm/>
},
{
  path:"products",
  element:<FakeProducts/>
},
{
  path:"prodots",
  element:<PratProducts/>
},
{
  path:"dumpro",
  element:<Dummyproducts/>
},
{
  path:"post",
  element:<PostData/>
},

{
  path:"lmn",
  element:<PostDat/>
},
{
  path:"uvw",
  element:<CartForm/>
},
{
  path:"fgh",
  element:<User/>
},
{
  path:"ijk",
  element:<Cart/>
},
{
  path:"appc",
  element:<Appc/>
},
{
  path:"appj",
  element:<Appj/>,
},
  {
    path:"usestater",
    element:<Counter/>,
  },
  
  {
    path:"sample",
    element:<Sample title="Sample Component" section="secondary"  section2="teritiory" marketing="digitalmarketing" tally="Tallyprime"
    design="UI UX" claude="MetaAI" chatGPT="process automation"  descript="text-based videoediting" googleflow="googles AIvideo generation"
    heygen="video avatars" notebookKLM="document analysis" excel="microsoftexcel"  ai="metaAI" c="python" point="powerpoint"
    
    manage="manageaccounts" graphics="computer graphics" video="graphic video" audio="listen audio" screen="touch screen" react="react router"
    model="document object model"/>
  },
    {
    path:"students",
    element:<Students/>,
  },
  {
    path:"employees",
    element:<Employees/>,
  },
  {
    path:"luc",
    element:<Lucide/>,
  },
  {
    path:"luci",
    element:<LucideA/>,
  },
  {
    path:"hij",
    element:<LucideB/>,
  },
  {
    path:"hop",
    element:<LucideN/>
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);


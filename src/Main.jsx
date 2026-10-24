import * as React from "react";
import * as ReactDOM from "react-dom/client";

import App from './App'
import "./index.css";


import Layout100 from "./Layout100";
import Layout from "./Layout";

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap'
import BOTstrp1 from "./BOTstrp1";
import Bootstrap2 from "./Bootstap2";
import BOOTstap3 from "./BOOTstap3";
import BOOTstrap4 from "./BOOTstrap4";
import Bootstap5 from "./Bootstap5";
import Lucide from "./Lucide";
import HIbiscus from "./HIbiscus";
import LucideA from "./LucideA";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Word from "./Word";
import LILy from "./LILy";
import ROSE from "./ROSE";
import Jas from "./Jas";
import Sample from "./Sample";
import Students from "./Students";
import Employees from "./Employees";
import UseState from "./UseState";
import Usestatea from "./Usestatea";
import NameInput from "./Nameinput";
import Counter from "./Counter";
import Usestateb from "./Usestateb";
import UseEffecta from "./UseEffecta";
import Appb from "./Appb";
import Form from "./Form";
import Appc from "./Appc";
import Appj from "./Appj";
import Appz from "./Appz";
import AxiosExample from "./AxiosExample";
import AxiosEx from "./AxiosEx";
import AxiosExm from "./AxiosExm";
import FakeProducts from "./FakeProducts";
import PratProducts from"./PratProducts";
import Dummyproducts from "./Dummyproducts";
import PostData from "./PostData";
import PostDat from "./PostDat";
import Cart from "./Cart";
import CartForm from "./CartForm";
import User from "./User";
import AppL from "./AppL";
import AppD from "./AppD";
import AppF from "./AppF";
import AppG from "./AppG";
import Mobile from "./Mobile";
import Computer from "./Computer";
import MegaStore from "./Megastore";
import  Search from "./Search";
import LoginPage from "./LoginPage";
import Lightmegastore from "./Lightmegastore";
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
    path:"usestatef",
    element:<NameInput/>
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

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);

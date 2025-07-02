import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";
// import './style2.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllCountries from "./components/AllCountries";
import CountryDetail from "./components/CountryDetail";


const router = createBrowserRouter([
    {
        path:'/',
        
        element:<App/>,
        children:[
           {
            path:'/',
            element:<AllCountries/>
           },
           {
            path:'/:country',
            element:<CountryDetail/>
           }
                                                                                                                                                                                                                                        
        ]
    }
])
const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />)

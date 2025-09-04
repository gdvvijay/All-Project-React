import { Outlet } from "react-router-dom"
import Header from "./Header"
import { ThemeProvider } from "../context/ThemeContext"

export default function App(){
   
    return(
        <>
         <ThemeProvider>
            <Header/>
            <Outlet/>
         </ThemeProvider>
        </>
    )
}
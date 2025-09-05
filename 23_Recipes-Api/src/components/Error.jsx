import { useRouteError } from "react-router-dom"

export default function Error(){
    const error=useRouteError()
    console.log(error)
    return(
        <div className="text-center text-2xl text-red-500 font-sans">Something went wrong...</div>
    )
}
import { useRouteError } from "react-router-dom";

export default function Error(){
    const error=useRouteError()
    console.log(error)
    return(
        <div className="text-center text-red-500 font-bold font-serif">Something Went wrong.....</div>
    )
}
import { useState } from "react"

export default function Header(props){
    // const [username,setUsername]=useState('');

    
    const logOutUser=()=>{
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
        // window.location.reload()
    }
    return(
        <div className="flex items-end justify-between">
            <h1  className="text-2xl font-medium"><span>Hello</span> <br/> <span className="text-3xl font-bold">{props.data?.firstName || 'admin'}  🙌</span></h1>
            <button className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm" onClick={logOutUser}>Log Out</button>
        </div>
    )
}
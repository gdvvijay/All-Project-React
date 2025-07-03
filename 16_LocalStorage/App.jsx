import { useEffect, useState } from "react";

export default function App(){
    const [data, setData] = useState(() => JSON.parse(localStorage.getItem('myData')) || { name: "", age: "" });

    useEffect(() => {
        localStorage.setItem('myData', JSON.stringify(data));
    }, [data]);

    return(
        <form className="ml-3" >
            <h1 className="text-3xl my-3 font-bold ">localStorage</h1>
            <input
                type="text"
                value={data.name || ""}
                onInput={(e) => {
                    setData((prevState) => ({ ...prevState, name: e.target.value }));
                }}
                className="bg-gray-400 mr-1 placeholder:pl-1.5"
                placeholder="enter name"
            />
            <input
                type="number"
                value={data.age || ""}
                onInput={(e) => {
                    setData((prevState) => ({ ...prevState, age: e.target.value }));
                }}
                className="bg-gray-400 placeholder:pl-1.5"
                placeholder="enter age"
            />
            <h2 className="mt-3 text-xl font-bold ">My name is <span>{data.name}</span></h2>
            <h3 className="mt-3 text-[15px] font-bold mb-3">I am <span>{data.age}</span> years old.</h3>
            <button type="submit" className="mr-3 bg-gray-400 px-1">Submit</button>
            <button className="bg-gray-400 px-3" onClick={()=>{
                // first way to clear
                // setData({name:'',age:''})
                localStorage.clear();

                // second way to clear
            }}>Clear</button>
        </form>
    )
}
import { useState } from "react";
import Button from "./components/Button";

export default function App() {
    const [count,setCount]=useState(0);
    const [inputValue,setInputValue]=useState(1)

    function MinusClick(){
      if(count>0){
        
        setCount(prevState=>prevState-inputValue);
      }

       
    }
    function PlusClick(){
      setCount(prevState=>prevState+inputValue);
    }
    function reset(){
      setCount(0);
      setInputValue(1)
    }
  return (
    <>
      <div>
        <p className="heading">Counter App</p>
      </div>
      <h1 className="counts">{count}</h1>
      {/* this is not a actual Button of html. this is Button component */}
      <Button className="minus-btn" value="-" onClick={MinusClick}/>
      <Button className="plus-btn" value="+" onClick={PlusClick}/>
      <div className="text">
        Increment/Decrement by:
        <input type="number" value={inputValue} onInput={(e)=>{
            setInputValue(parseInt(e.target.value));
        }}/>
      </div>
      <Button className="reset" value="Reset" onClick={reset}/>
    </>
  );
}

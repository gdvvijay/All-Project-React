import { useEffect, useRef } from "react";
import ExpenseTable from "./ExpenseTable";
import InputContainer from "./InputContainer";

export default function ExpenseTracker(){
    const cmDiv = "py-0.5 px-2 cursor-pointer font-semibold hover:bg-[#ddd]"
    const table=useRef(null);
    const contextmenu =useRef(null)
    const expenseDiv=useRef(null);
   useEffect(()=>{
     if(table.current?.children.length > 0){
        table.current.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
            contextmenu.current.style.cssText=`left:${e.clientX + 4}px; top:${e.clientY+4}px; display:block;`
        })
        expenseDiv.current.addEventListener('click',()=>{
    contextmenu.current.style.display="none";
   })
    }
   })
   
    return(
        <div className="expense-tracker flex gap-8 @max-[900px]:flex-col" ref={expenseDiv}>
            <form className="expense-form w-full">
                <InputContainer hFor="title" lValue="Title" iId="title"/>
                <InputContainer hFor="category" lValue="Category" iId="category"/>
                <InputContainer hFor="amount" lValue="Amount" iId="amount"/>
                <button className="add-btn w-full h-8 text-[18px] font-[inherit] mt-2">Add</button>
            </form>
            <ExpenseTable ref={table}/>
            <div className="context-menu bg-white border-[1px] border-solid absolute hidden rounded-b-sm overflow-hidden shadow-[0_0_12px_rgba(0,0,0,0.3)]" ref={contextmenu}>
                <div className={cmDiv}>Edit</div>
                <div className={cmDiv}>Delete</div>
            </div>
        </div>
    )
}
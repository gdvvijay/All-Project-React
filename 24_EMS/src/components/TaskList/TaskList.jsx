import { useRef } from "react";
import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

export default function TaskList({data}) {
  const scrollableDiv = useRef()
   function scrollToLeft(){
     scrollableDiv.current?.scrollBy({
  left: -200,
  top: 0, 
  behavior: 'smooth'
})
   }
    function scrollToRight(){
     scrollableDiv.current?.scrollBy({
  left: 200,
  top: 0, 
  behavior: 'smooth'
})
   }
  return (
    <div
      id="tasklist"
      className="h-[55%] w-full py-7 mt-10 flex overflow-x-auto items-center justify-start gap-5 flex-nowrap relative" ref={scrollableDiv}
     >
      <div onClick={scrollToLeft} className="select-none left-button fixed cursor-pointer rounded-full border-3 h-14 w-14 border-white !text-white text-3xl z-10  flex pt-1 left-1">{`<--`}</div>
      <div onClick={scrollToRight} className="select-none left-button fixed cursor-pointer rounded-full border-3 h-14 w-14 border-white !text-white text-3xl z-10  flex pt-1 right-1">{`-->`}</div>
        {
          data.tasks.map((elem,idx)=>{
            if(elem.active){
              return <AcceptTask key={idx} data={elem}/>
            }
            if(elem.newTask){
              return <NewTask key={idx} data={elem}/>
            }
            if(elem.completed){
              return <CompletedTask key={idx} data={elem}/>
            }
            if(elem.failed){
              return <FailedTask key={idx} data={elem}/>
            }
          })
        }
    </div>
  );
}

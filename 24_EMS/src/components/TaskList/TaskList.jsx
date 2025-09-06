import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

export default function TaskList({data}) {
  return (
    <div
      id="tasklist"
      className="h-[55%] w-full py-7 mt-10 flex overflow-x-auto items-center justify-start gap-5 flex-nowrap"
    >
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

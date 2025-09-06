import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { setLocalStorage } from "../../utils/localStorage";

export default function CreateTask(){
const [taskTitle,setTaskTitle]=useState('');
const [taskDescription,setTaskDescription]=useState('');
const [taskDate,setTaskDate]=useState('');
const [assignTo,setAssignTo]=useState('');
const [category,setCategory]=useState('');

const [userData,setUserData]=useContext(AuthContext)
 console.log(userData)
  const submitHandler=(e)=>{
    e.preventDefault();

    const newTask={taskTitle,taskDescription,taskDate,category,assignTo,active:false,newTask:true,failed:false,completed:false}

    const data=[...userData]

    data.forEach((elem)=>{
      if(assignTo.toLocaleLowerCase() == elem.firstName.toLocaleLowerCase()){
        elem.tasks.push(newTask)
        elem.taskSummary.newTask=elem.taskSummary.newTask+1
      }
    })
    setLocalStorage([...data])
    setUserData(data)
    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setCategory('')
    setAssignTo('')
  }
    return(
          <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className="flex flex-wrap w-full items-start justify-between">
          <div className="w-1/2">
            <div className="">
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input value={taskTitle} onChange={(e)=>{
                setTaskTitle(e.target.value)
              }} type="text" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 " placeholder="Make a ui design" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input value={taskDate} onChange={(e)=>{
                setTaskDate(e.target.value)
              }} type="date" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 " />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input value={assignTo} onChange={(e)=>{
                setAssignTo(e.target.value)
              }} type="text" placeholder="Employee Name" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 " />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input value={category} onChange={(e)=>{
                setCategory(e.target.value)
              }} type="text" placeholder="design, dev, etc" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 "/>
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea value={taskDescription} onChange={(e)=>{
                setTaskDescription(e.target.value)
              }} className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
          </div>

        </form>
      </div>
    )
}
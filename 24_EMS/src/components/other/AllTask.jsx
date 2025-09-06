import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthProvider"

export default function AllTask(){
    const [userData,setUserData]=useContext(AuthContext)
    return(
        <div className="bg-[#1C1C1C] p-5 mt-5 rounded h-60">
            <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
                <h3 className="w-1/5 text-lg font-medium">New Task</h3>
                <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
                <h5 className="w-1/5 text-lg font-medium">Completed</h5>
                <h5 className="w-1/5 text-lg font-medium">Failed</h5>
            </div>
            <div className="">
                {userData.map((elem)=>{
                return  <div key={elem.id} className="border border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className="w-1/5 text-lg font-medium ">{elem.firstName}</h2>
                <h3 className="w-1/5 text-lg font-medium text-blue-400">{elem.taskSummary.newTask}</h3>
                <h5 className="w-1/5 text-lg font-medium text-yellow-400">{elem.taskSummary.active}</h5>
                <h5 className="w-1/5 text-lg font-medium text-white">{elem.taskSummary.completed}</h5>
                <h5 className="w-1/5 text-lg font-medium text-red-600">{elem.taskSummary.failed}</h5>
            </div>
            })}
            </div>
           
        </div>
    )
}
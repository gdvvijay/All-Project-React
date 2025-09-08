import { AiOutlineClose } from "react-icons/ai";
import {createPortal} from 'react-dom'

export default function Model({onClose,isOpen,children}){
    return createPortal(
        <div>
            {
                isOpen && (
                    <div className="grid place-items-center backdrop-blur h-screen w-screen absolute top-0 z-50">
                        <div className="min-h-[200px] min-w-[80%] bg-white p-4 z-[100] relative m-auto">
                    <div className='flex justify-end'>
                        <AiOutlineClose onClick={onClose} className="text-2xl "/>

                    </div>
                    {
                        children
                    }
                </div>
                    </div>
                )
            }
        </div>
    ,document.querySelector('#model-root'))
}
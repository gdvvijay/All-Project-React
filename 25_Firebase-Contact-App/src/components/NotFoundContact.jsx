import handsContact from '../assets/Screen/hands_contact.svg'

export default function NotFoundContact(){
    return(
        <div className="flex justify-center gap-4 items-center h-[80vh]">
           <div> <img src={handsContact}/></div>
            <h3 className="text-white text-2xl font-semibold">Contact Not Found</h3>
        </div>
    )
}
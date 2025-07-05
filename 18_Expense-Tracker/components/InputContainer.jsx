export default function InputContainer({hFor,lValue,iId}){
    return(
        <div className="input-container flex flex-col mb-3">
            <label htmlFor={hFor} className="text-[14px]">{lValue}</label>
            <input id={iId} className="h-[28px] font-[inherit] "/>
        </div>
    )
}
export default function Box({name,no,className,heading,paragraph}){
    return(
         <div className={`${name&&name} absolute flex items-center justify-center bg-[#FFFFFF] max-w-[449px] w-full max-h-[199px]  h-full shadow-[0_0_3px_0px_#00000045] ${className&&className}`}>
              <div className="w-12 h-12 rounded-full bg-[hsla(356,91%,64%,10%)] flex items-center justify-center text-[#F7515C] mb-14 font-[Ubuntu] text-xl font-bold mr-4">{no}</div>
              <div>
                <h1 className="font-[Montserrat] font-bold text-xl">{heading}</h1>
                <p className="font-[Nunito] text-[15px] text-[hsl(225,9%,17%,40%)] max-w-72 mt-3 ">{paragraph}</p>
              </div>
            </div>
    )
}
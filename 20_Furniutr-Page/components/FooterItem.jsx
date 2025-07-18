import { Link } from "react-router-dom";


export default function FooterItem({heading,items}){
    return(
         <div className="flex flex-col ">
            <h1 className="max-w-40 font-[SF_Pro_Display] font-semibold text-xl max-sm:text-[15px] mb-2.5">{heading}</h1>
           { items?.map((item,i)=>{
            return (
            <Link key={i} className="font-[Montserrat] last:max-w-[130px] text-[hsl(225,9%,17%,70%)] tracking-tight text-[14px] max-sm:text-[10px] mb-1.5" to="/">{item}</Link>
            )
           })}
          </div>
    )
}
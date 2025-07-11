export default function AllLinks({heading,l1,l2,l3,l4}){
    return(
        <div className="all-links-column-container flex flex-col font-[Open_Sans] gap-2">
                    <h1 className="text-xl -tracking-wide mb-1 text-[#000000] ">{heading}</h1>
                    <a href="#" className="text-[#8A8A8A] text-[12px] pl-1">{l1}</a>
                    <a href="#" className="text-[#8A8A8A] text-[12px] pl-1">{l2}</a>
                    <a href="#" className="text-[#8A8A8A] text-[12px] pl-1">{l3}</a>
                    <a href="#" className="text-[#8A8A8A] text-[12px] pl-1">{l4}</a>
                </div>
    )
}
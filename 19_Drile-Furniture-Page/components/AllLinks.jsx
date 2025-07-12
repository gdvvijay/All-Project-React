export default function AllLinks({heading,l1,l2,l3,l4,ml,mr}){
  
    return(
        <div className={`all-links-column-container flex flex-col font-[Open_Sans] gap-2 max-sm:gap-1 ${ml && 'max-sm:ml-4'} ${mr && 'max-sm:mr-2'}`}>
                    <h1 className="text-xl max-sm:text-sm -tracking-wide mb-1 text-[#000000] ">{heading}</h1>
                    <a href="#" className="text-[#8A8A8A] text-[12px] max-sm:text-[6px] pl-1">{l1}</a>
                    <a href="#" className="text-[#8A8A8A] text-[12px] max-sm:text-[6px] pl-1">{l2}</a>
                    <a href="#" className="text-[#8A8A8A] text-[12px] max-sm:text-[6px] pl-1">{l3}</a>
                    <a href="#" className="text-[#8A8A8A] text-[12px] max-sm:text-[6px] pl-1">{l4}</a>
                </div>
    )
}
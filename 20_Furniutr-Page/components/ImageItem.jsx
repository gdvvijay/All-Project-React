export default function ImageItem({url,name,heading,price}){
    return(
       <div className="imageItems flex  flex-col max-w-[278px] max-h-[427px] w-full h-full">
      
         <img src={url} alt={name} className="-mb-10 max-md:-mb-5 max-sm:-mb-3 -mt-4"/>
              <div className="self-center flex flex-col items-center w-full ">
                <h3 className="font-[Montserrat] font-bold text-[15px] max-[1024px]:text-[13px] max-[768px]:text-[10px] max-[640px]:text-[7px] max-[450px]:text-[4px] text-[#282A30]">{heading}</h3>
                <h6 className="font-[Montserrat] text-[15px] max-sm:text-[10px] text-[hsl(225,9%,17%,40%)]">{price}</h6>
              </div>
     </div>
               
            
    )
}
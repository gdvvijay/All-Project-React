export default function Categories({isSelected,url,title}){
    if(!isSelected){
        isSelected=false
    }
    return(
        <div className={`${isSelected ? 'bg-[#FBF9F3]':''} flex flex-col items-center justify-center py-1.5 px-5 max-w-[150px] w-full`}>
                                <img src={url} alt={`${title} image`}/>
                                <p className="text-xs mt-1.5">{title}</p>
                            </div>
    )
}
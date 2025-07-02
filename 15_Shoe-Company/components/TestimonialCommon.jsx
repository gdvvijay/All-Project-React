export default function TestimonialCommon({url,iName,pValue}){
    return(
        <div className="w-60">
            <img className="w-full mb-4" src={url} alt={iName}/>
            <p>{pValue}</p>
        </div>
    )
}
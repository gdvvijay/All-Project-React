export default function ImageComponent({url,name,className}){
    return(
        <img src={url} alt={name} className={className}/>
    )
}
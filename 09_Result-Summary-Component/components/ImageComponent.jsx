export default function ImageComponent({url,name}){
    return(
        <img src={url} alt={name} className="stats-image"/>
    )
}
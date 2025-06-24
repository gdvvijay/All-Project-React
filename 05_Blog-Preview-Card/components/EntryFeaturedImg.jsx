export default function({url,name}){
    return(
        <div className="card-entry-preview">
            <img src={url} alt={name}/>
        </div>
    )
}
export default function CommonSection({sClass,sId,h2Value,iUrl,iName}){
    return(
        <section className={sClass} id={sId}>
            <h2>{h2Value}</h2>
            <div className="img-container">
                <img src={iUrl} alt={iName}/>
            </div>
        </section>
    )
}
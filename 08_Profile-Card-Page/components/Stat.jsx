export default function Stat({number,title}){
    return(
         <div className="stat">
            <h2 className="stat-number">{number}</h2>
            <p className="stat-title">{title}</p>
         </div>
    )
}
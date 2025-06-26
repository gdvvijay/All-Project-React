export default function Rate({dId,iArray,votedName}){
    return(
        <div id={dId} className="rating">
            <div className="stars">
                {iArray.map((value,index)=>{
                  return  <img src={value} alt="" key={index}/>

                })}
            </div>
            <div className="voted">
                <p>Rated 5 Stars in {votedName}</p>
            </div>
        </div>
    )
}
export default function ReviewComponent({dId,iUrl,pValue1,pValue2,bqValue}){
    return(
        <div id={dId} className="review">
            <div className="user">
                <img src={iUrl} alt=""/>
                <p>{pValue1} <br/> <span>{pValue2}</span></p>
            </div>
            <div className="text">
                <span>
                    <blockquote>
                        "{bqValue}"
                    </blockquote>
                </span>
            </div>
        </div>
    )
}
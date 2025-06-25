import ImageComponent from "./ImageComponent";

export default function({dClass,iUrl,iName,pClass,pValue,resultValue}){
    return(
        <div className={dClass}>
            <div className="stats-left">
                <ImageComponent url={iUrl} name={iName}/>
                <p className={pClass}>{pValue}</p>
            </div>
            <div className="stats-right">
                <p className="stats-results">
                    {resultValue} <span className="stats-span">/ 100/</span>
                </p>
            </div>
        </div>
    )
}
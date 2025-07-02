import { Link } from "react-router-dom";


export default function ContactCommon({url,iName}){
    return(
        <Link to="/"><img src={url} alt={iName}/></Link>
    )
}
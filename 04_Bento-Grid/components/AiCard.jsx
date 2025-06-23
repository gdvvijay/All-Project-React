import ImageComponent from "./ImageComponent";
import Url from '../src/assets/illustration-ai-content.webp'


export default function AiCard(){
    return(
        <div className="card ai-card">
            <h2>Write your content using AI.</h2>
            <ImageComponent url={Url} name="ai content image"/>
        </div>
    )
}
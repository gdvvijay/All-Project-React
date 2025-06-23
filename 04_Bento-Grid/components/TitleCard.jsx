import ImageComponent from "./ImageComponent";
import Url from '../src/assets/illustration-five-stars.webp'

export default function TitleCard(){
    return(
        <div className="card title-card">
            <h1>Social Media <span>10x</span> <em>Faster</em> with AI</h1>
            <ImageComponent url={Url} name="Five Star Image"/>
            <p>Over 4,000 5-star reviews</p>
        </div>
    )
}
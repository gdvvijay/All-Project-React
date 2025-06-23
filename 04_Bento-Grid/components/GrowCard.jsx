import ImageComponent from "./ImageComponent";
import Url from '../src/assets/illustration-grow-followers.webp'

export default function GrowCard(){
    return(
        <div className="card grow-card">
            <ImageComponent url={Url} name="Grow Followers image"/>
            <h2>Grow Followers with non-stop content.</h2>
        </div>
    )
}
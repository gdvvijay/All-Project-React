import ImageComponent from "./ImageComponent";
import Url from '../src/assets/illustration-schedule-posts.webp'

export default function(){
    return(
        <div className="card schedule-card">
            <h2>Schedule to social media.</h2>
            <ImageComponent url={Url} name="schedule posts image"/>
        </div>
    )
}
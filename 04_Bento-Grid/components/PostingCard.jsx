import ImageComponent from "./ImageComponent";
import Url from '../src/assets/illustration-consistent-schedule.webp'


export default function PostingCard(){
    return(
        <div className="card posting-card">
            <h2>Maintain a Consistent Posting Schedule.</h2>
            <ImageComponent url={Url} name="consistent schedule image"/>
        </div>
    )
}